import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import Module, { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const cache = new Map();

// Compile the installed TSX directly so this check exercises the actual primitive.
function loadTs(filename) {
  if (cache.has(filename)) return cache.get(filename).exports;
  const loaded = new Module(filename);
  cache.set(filename, loaded);
  loaded.filename = filename;
  loaded.paths = Module._nodeModulePaths(path.dirname(filename));
  const nativeRequire = createRequire(filename);
  loaded.require = (id) => {
    if (!id.startsWith("@/")) return nativeRequire(id);
    const base = path.join(projectRoot, "src", id.slice(2));
    const source = [".ts", ".tsx"].map((ext) => base + ext).find(fs.existsSync);
    if (!source) throw new Error(`Cannot resolve local source: ${id}`);
    return loadTs(source);
  };
  const { outputText } = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      jsx: ts.JsxEmit.ReactJSX,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true,
    },
  });
  loaded._compile(outputText, filename);
  return loaded.exports;
}

const { Accordion, AccordionItem, AccordionHeader, AccordionTrigger, AccordionContent } = loadTs(
  path.join(projectRoot, "src/components/animate-ui/primitives/radix/accordion.tsx"),
);

function item(value) {
  return React.createElement(
    AccordionItem,
    { value, key: value },
    React.createElement(AccordionHeader, null, React.createElement(AccordionTrigger, null, value)),
    React.createElement(AccordionContent, null, `Content:${value}`),
  );
}

const single = renderToStaticMarkup(
  React.createElement(
    Accordion,
    { type: "single", defaultValue: "note-long" },
    item("note"),
    item("note-long"),
  ),
);
assert(!single.includes("Content:note<"), "A prefix-matching item must stay closed");
assert(single.includes("Content:note-long"), "The exact selected item must render");
assert(!single.includes("height:0"), "Default-open content must be visible in server markup");

const multiple = renderToStaticMarkup(
  React.createElement(
    Accordion,
    { type: "multiple", defaultValue: ["role", "learning"] },
    item("role"),
    item("learning"),
  ),
);
assert(
  multiple.includes("Content:role") && multiple.includes("Content:learning"),
  "Multiple selected notes must both render",
);
assert(multiple.includes("<h3"), "Accordion triggers must use semantic subheadings");
console.log(
  "Accordion SSR checks passed: exact matching, multiple selection, visible content, headings.",
);
