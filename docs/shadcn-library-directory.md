# Shoogle shadcn registry directory

Snapshot: **9 October 2026 — 434 registries**. This is the complete registry-name/homepage list in the current [Shoogle directory](https://shoogle.dev/directory), rather than a claim to cover every UI library on the internet.

All 44 live pagination pages were fetched directly. They yielded 434 entries and 434 unique names, with no request errors. Their name set exactly matched the 434 records in the [official shadcn directory source](https://github.com/shadcn-ui/ui/blob/main/apps/v4/registry/directory.json). The [public runtime index](https://ui.shadcn.com/r/registries.json) also contained 434 records. A cached search-engine rendering of page 2 showed an older count; the saved snapshot uses the fresh HTTP responses, not that cached page.

The companion `shadcn-library-directory.json` contains every name, homepage, and installation URL template, plus source and verification metadata.

## What is free and usable

Directory membership establishes discovery, not a free license, framework compatibility, accessibility certification, or successful installation. Some entries contain premium products, require authentication, or target frameworks other than this React portfolio. The [shadcn authentication documentation](https://ui.shadcn.com/docs/registry/authentication) explicitly supports public, private, and license-key-protected registries.

Licenses and individual component endpoints were checked for the three candidates below. All other rows are deliberately marked **not reviewed**; that does not mean they are paid or unavailable. Availability/health scores in the runtime index are a different question from license rights.

| Library | Verified license / free scope | Restrained portfolio use | Evidence |
| --- | --- | --- | --- |
| **Motion Primitives** | MIT; preserve copyright and license notice. | Best first choice for a project-detail transition or a quiet moving selection indicator. `transition-panel`, `animated-background`, and `image-comparison` returned valid registry JSON. | [License](https://github.com/ibelick/motion-primitives/blob/main/LICENCE.md), [source](https://github.com/ibelick/motion-primitives), [transition-panel](https://motion-primitives.com/c/transition-panel.json) |
| **Magic UI** | MIT for the reviewed public repository. The site separately advertises Pro products; do not treat that paid catalog as included. | `safari` or `iphone` can frame real project captures without adding animation dependencies; `blur-fade` is optional for a small entrance. All three returned valid registry JSON. | [License](https://github.com/magicuidesign/magicui/blob/main/LICENSE.md), [Blur Fade docs](https://magicui.design/docs/components/blur-fade), [Safari item](https://magicui.design/r/safari), [iPhone item](https://magicui.design/r/iphone) |
| **Animate UI** | **MIT + Commons Clause condition**, not unqualified MIT. Its actual license permits use within applications/websites/products, including commercial use, and requires notices. It restricts selling or redistributing the original components themselves, alone or bundled. | `primitives-radix-accordion` is suitable for compact project details; `primitives-radix-tabs` is another option. Both returned valid registry JSON. Preserve the actual license when vendoring. | [License](https://github.com/imskyleen/animate-ui/blob/main/LICENSE.md), [Accordion docs](https://animate-ui.com/docs/components/radix/accordion), [Accordion item](https://animate-ui.com/r/primitives-radix-accordion.json) |

These are design recommendations inferred from the requested quiet Apple-inspired direction, not a claim that every component in these libraries shares that style. Use the existing shadcn controls as the base and select only a purposeful enhancement. Reduced-motion behavior, keyboard interaction, focus, and layout stability still need checking in the actual portfolio integration.

## Verified registry configuration

The [official namespace documentation](https://ui.shadcn.com/docs/registry/namespace), fetched through Context7, describes mapping a namespace to a `{name}` URL template in `components.json` and installing by `@namespace/item`. The current directory supplies these exact templates:

```json
{
  "registries": {
    "@magicui": "https://magicui.design/r/{name}",
    "@motion-primitives": "https://motion-primitives.com/c/{name}.json",
    "@animate-ui": "https://animate-ui.com/r/{name}.json"
  }
}
```

Verified names include `@magicui/blur-fade`, `@magicui/safari`, `@magicui/iphone`, `@motion-primitives/transition-panel`, `@motion-primitives/animated-background`, `@motion-primitives/image-comparison`, `@animate-ui/primitives-radix-accordion`, and `@animate-ui/primitives-radix-tabs`. Checking these public JSON endpoints did not install them.

`transition-panel` depends on `motion`. Animate UI's accordion depends on `motion`, `radix-ui`, and its controlled-state/context registry helpers. The Magic UI device-frame items reported no additional package dependencies. The recorded URL templates should be retained as supplied: Magic UI's current template has no `.json` suffix.

## Complete directory

Sorted alphabetically by registry namespace. **MIT** means the candidate repository license was checked; **conditional** means the Animate UI license above was checked; **not reviewed** means no individual license audit was performed. Every homepage below comes from the official directory record. Only shortlisted component endpoints were individually checked for installable JSON.

| Registry | Homepage | License review |
| --- | --- | --- |
| @000h-cojeev | [https://000h.cojeev.com](https://000h.cojeev.com) | not reviewed |
| @1st-pouf | [https://1st-pouf.worksonmy.dev](https://1st-pouf.worksonmy.dev) | not reviewed |
| @23rd | [https://23rd.dev](https://23rd.dev) | not reviewed |
| @3d-viewer | [https://shadcn-3d-viewer.vercel.app](https://shadcn-3d-viewer.vercel.app) | not reviewed |
| @7ovr | [https://7ovr.com](https://7ovr.com) | not reviewed |
| @8bitcn | [https://www.8bitcn.com](https://www.8bitcn.com) | not reviewed |
| @8starlabs-ui | [https://ui.8starlabs.com](https://ui.8starlabs.com) | not reviewed |
| @aayurt | [https://8848.aayurtshrestha.com.np](https://8848.aayurtshrestha.com.np) | not reviewed |
| @abstract | [https://build.abs.xyz](https://build.abs.xyz) | not reviewed |
| @abui | [https://abui.io](https://abui.io) | not reviewed |
| @aceternity | [https://ui.aceternity.com](https://ui.aceternity.com) | not reviewed |
| @aevr | [https://ui.aevr.online](https://ui.aevr.online) | not reviewed |
| @afterglow | [https://afterglow.thebuilder.dk](https://afterglow.thebuilder.dk) | not reviewed |
| @agent-ui-kit | [https://agent-ui-kit-demo.vercel.app](https://agent-ui-kit-demo.vercel.app) | not reviewed |
| @agentblog | [https://agentblog.dev](https://agentblog.dev) | not reviewed |
| @agentcn | [https://agentcn.vercel.app](https://agentcn.vercel.app) | not reviewed |
| @agentfaces | [https://ajibadedapo.github.io/agentfaces/](https://ajibadedapo.github.io/agentfaces/) | not reviewed |
| @agents-ui | [https://livekit.com/ui](https://livekit.com/ui) | not reviewed |
| @agentui | [https://www.agentui.pro](https://www.agentui.pro) | not reviewed |
| @ai-blocks | [https://webllm.org/blocks](https://webllm.org/blocks) | not reviewed |
| @ai-elements | [https://ai-sdk.dev/elements](https://ai-sdk.dev/elements) | not reviewed |
| @ai2 | [https://ai2.design](https://ai2.design) | not reviewed |
| @aicanvas | [https://aicanvas.me](https://aicanvas.me) | not reviewed |
| @akoder | [https://akoder.xyz](https://akoder.xyz) | not reviewed |
| @algolia | [https://sitesearch.algolia.com](https://sitesearch.algolia.com) | not reviewed |
| @amap | [https://map.ling.pub](https://map.ling.pub) | not reviewed |
| @amarjay-ui | [https://ui.amarjay.com](https://ui.amarjay.com) | not reviewed |
| @amicro | [https://amicro.vercel.app](https://amicro.vercel.app) | not reviewed |
| @amplo | [https://amplo.ale.design](https://amplo.ale.design) | not reviewed |
| @animate-ui | [https://animate-ui.com](https://animate-ui.com) | conditional |
| @animateicons | [https://animateicons.in](https://animateicons.in) | not reviewed |
| @animbits | [https://animbits.dev](https://animbits.dev) | not reviewed |
| @aniui | [https://aniui.dev](https://aniui.dev) | not reviewed |
| @approvals-ui | [https://approvals-ui.vercel.app](https://approvals-ui.vercel.app) | not reviewed |
| @arc | [https://witharc.co/components](https://witharc.co/components) | not reviewed |
| @ark-cn | [https://ark-cn.vercel.app](https://ark-cn.vercel.app) | not reviewed |
| @asanshay | [https://ds.asanshay.com](https://ds.asanshay.com) | not reviewed |
| @assistant-ui | [https://www.assistant-ui.com](https://www.assistant-ui.com) | not reviewed |
| @atelier | [https://www.atelier-ui.com](https://www.atelier-ui.com) | not reviewed |
| @atomloader | [https://atomloader.roothq.tech](https://atomloader.roothq.tech) | not reviewed |
| @atroui | [https://www.atroui.com](https://www.atroui.com) | not reviewed |
| @audiocn | [https://audiocn.dev](https://audiocn.dev) | not reviewed |
| @auth0 | [https://auth0.com](https://auth0.com) | not reviewed |
| @avertra-ui | [https://micomponents.micustomer.io](https://micomponents.micustomer.io) | not reviewed |
| @awwwardedui | [https://awwwardedui.vercel.app](https://awwwardedui.vercel.app) | not reviewed |
| @axicharts | [https://axidify.github.io/axicharts/shadcn/registry](https://axidify.github.io/axicharts/shadcn/registry) | not reviewed |
| @balick | [https://ui.balick.me](https://ui.balick.me) | not reviewed |
| @ballmac | [https://ui.ballmac.com](https://ui.ballmac.com) | not reviewed |
| @baraile-loader | [https://shadcn-braille-loader.vercel.app](https://shadcn-braille-loader.vercel.app) | not reviewed |
| @basecn | [https://basecn.dev](https://basecn.dev) | not reviewed |
| @baselayer | [https://www.baselayer.dev](https://www.baselayer.dev) | not reviewed |
| @benday | [https://benday.kacemmathlouthi.dev](https://benday.kacemmathlouthi.dev) | not reviewed |
| @beste-ui | [https://ui.beste.co](https://ui.beste.co) | not reviewed |
| @better-auth-ui | [https://better-auth-ui.com](https://better-auth-ui.com) | not reviewed |
| @better-upload | [https://better-upload.com](https://better-upload.com) | not reviewed |
| @beui | [https://beui.dev](https://beui.dev) | not reviewed |
| @billingsdk | [https://billingsdk.com](https://billingsdk.com) | not reviewed |
| @bits-ui | [https://bits-ui.netlify.app](https://bits-ui.netlify.app) | not reviewed |
| @bjork-ui | [https://ui.isaiahbjork.com](https://ui.isaiahbjork.com) | not reviewed |
| @bklit | [https://ui.bklit.com](https://ui.bklit.com) | not reviewed |
| @blobatar | [https://blobatar.dev](https://blobatar.dev) | not reviewed |
| @blockforge | [https://blockforge.terravidhal.me](https://blockforge.terravidhal.me) | not reviewed |
| @blocks-so | [https://blocks.so](https://blocks.so) | not reviewed |
| @blockus | [https://blockus.lndevui.com](https://blockus.lndevui.com) | not reviewed |
| @blode | [https://blode.co/ui](https://blode.co/ui) | not reviewed |
| @boldkit | [https://boldkit.dev](https://boldkit.dev) | not reviewed |
| @brainless | [https://brainless.swerdlow.dev](https://brainless.swerdlow.dev) | not reviewed |
| @brut-ui | [https://www.brut-ui.site](https://www.brut-ui.site) | not reviewed |
| @bundui | [https://bundui.io](https://bundui.io) | not reviewed |
| @buzzform | [https://form.buildnbuzz.com](https://form.buildnbuzz.com) | not reviewed |
| @canvas-ui | [https://canvasui.dev/](https://canvasui.dev/) | not reviewed |
| @cardcn | [https://cardcn.dev](https://cardcn.dev) | not reviewed |
| @catalogs | [https://catalogs.dev](https://catalogs.dev) | not reviewed |
| @chamaac | [https://chamaac.com](https://chamaac.com) | not reviewed |
| @channel3 | [https://trychannel3.com/developers/ui](https://trychannel3.com/developers/ui) | not reviewed |
| @clerk | [https://clerk.com/docs/guides/development/shadcn-cli](https://clerk.com/docs/guides/development/shadcn-cli) | not reviewed |
| @cligentic | [https://cligentic.railly.dev](https://cligentic.railly.dev) | not reviewed |
| @cnippet | [https://ui.cnippet.dev/](https://ui.cnippet.dev/) | not reviewed |
| @cognicatch | [https://cognicatch.dev](https://cognicatch.dev) | not reviewed |
| @colorshot | [https://orshot.com/open-source/colorshot](https://orshot.com/open-source/colorshot) | not reviewed |
| @commercn | [https://commercn.com](https://commercn.com) | not reviewed |
| @componentry | [https://componentry.fun](https://componentry.fun) | not reviewed |
| @contentbit | [https://contentbit.dev](https://contentbit.dev) | not reviewed |
| @corecn | [https://corecn.vercel.app](https://corecn.vercel.app) | not reviewed |
| @corr | [https://ui.corr.sh](https://ui.corr.sh) | not reviewed |
| @corsair-ui | [https://corsairui.vercel.app](https://corsairui.vercel.app) | not reviewed |
| @coss | [https://coss.com/ui](https://coss.com/ui) | not reviewed |
| @crafterui | [https://crafterui.com](https://crafterui.com) | not reviewed |
| @craftui | [https://www.craftui.space](https://www.craftui.space) | not reviewed |
| @creative-tim | [https://www.creative-tim.com/ui](https://www.creative-tim.com/ui) | not reviewed |
| @cubby-ui | [https://www.cubby-ui.dev](https://www.cubby-ui.dev) | not reviewed |
| @cult-ui | [https://www.cult-ui.com](https://www.cult-ui.com) | not reviewed |
| @d2 | [https://ui.d2studio.dev](https://ui.d2studio.dev) | not reviewed |
| @darx | [https://darshitdev.in/arts](https://darshitdev.in/arts) | not reviewed |
| @dashboardblocks | [https://www.dashboardblocks.com](https://www.dashboardblocks.com) | not reviewed |
| @dashboardcn | [https://dashboardcn.com](https://dashboardcn.com) | not reviewed |
| @data-table-filters | [https://data-table.openstatus.dev](https://data-table.openstatus.dev) | not reviewed |
| @delego | [https://github.com/Delego-Dev/registry](https://github.com/Delego-Dev/registry) | not reviewed |
| @delta | [https://deltacomponents.dev](https://deltacomponents.dev) | not reviewed |
| @designali | [https://designali.com](https://designali.com) | not reviewed |
| @devl | [https://devl.dev](https://devl.dev) | not reviewed |
| @dgit | [https://ui.dgit.co](https://ui.dgit.co) | not reviewed |
| @diarmuradi | [https://diarmuradi.com](https://diarmuradi.com) | not reviewed |
| @diceui | [https://www.diceui.com/](https://www.diceui.com/) | not reviewed |
| @diklein | [https://diklein.com/components](https://diklein.com/components) | not reviewed |
| @docscn | [https://docscn.dev](https://docscn.dev) | not reviewed |
| @dominik-ui | [https://dominikkoch.dev/ui](https://dominikkoch.dev/ui) | not reviewed |
| @doras-ui | [https://ui.doras.to/](https://ui.doras.to/) | not reviewed |
| @dotmatrix | [https://dotmatrix.zzzzshawn.cloud](https://dotmatrix.zzzzshawn.cloud) | not reviewed |
| @dsikeres1 | [https://dsikeres1.github.io/react-date-range-picker/](https://dsikeres1.github.io/react-date-range-picker/) | not reviewed |
| @easeui | [https://easeui.dev](https://easeui.dev) | not reviewed |
| @ecomcn | [https://ecomcn.vercel.app](https://ecomcn.vercel.app) | not reviewed |
| @efferd | [https://efferd.com/](https://efferd.com/) | not reviewed |
| @einui | [https://ui.eindev.ir](https://ui.eindev.ir) | not reviewed |
| @eldoraui | [https://eldoraui.site](https://eldoraui.site) | not reviewed |
| @elements | [https://www.tryelements.dev](https://www.tryelements.dev) | not reviewed |
| @elevenlabs-ui | [https://ui.elevenlabs.io](https://ui.elevenlabs.io) | not reviewed |
| @elsecase | [https://elsecase.vercel.app](https://elsecase.vercel.app) | not reviewed |
| @emailcn | [https://emailcn.vercel.app](https://emailcn.vercel.app) | not reviewed |
| @emerald-ui | [https://emerald-ui.com](https://emerald-ui.com) | not reviewed |
| @emstein-ui | [https://ui.emstein.com](https://ui.emstein.com) | not reviewed |
| @ericts | [https://ui.ericts.com](https://ui.ericts.com) | not reviewed |
| @evex | [https://evex.sh](https://evex.sh) | not reviewed |
| @evilbuttons | [https://evilbuttons.radiumcoders.com/docs](https://evilbuttons.radiumcoders.com/docs) | not reviewed |
| @evilcharts | [https://evilcharts.com](https://evilcharts.com) | not reviewed |
| @exabase | [https://exawizards.com/exabase/design/](https://exawizards.com/exabase/design/) | not reviewed |
| @extend | [https://ui.extend.ai](https://ui.extend.ai) | not reviewed |
| @fab-ui | [https://fab-ui.com](https://fab-ui.com) | not reviewed |
| @facade | [https://facadeui.dev](https://facadeui.dev) | not reviewed |
| @fibo | [https://fibo.toribryan.com](https://fibo.toribryan.com) | not reviewed |
| @flagcn | [https://flagcn.dev](https://flagcn.dev) | not reviewed |
| @flightcn | [https://flightcn.yencheng.dev](https://flightcn.yencheng.dev) | not reviewed |
| @flowkit-ui | [https://flowkit-ui.vzkiss.com](https://flowkit-ui.vzkiss.com) | not reviewed |
| @flowui | [https://flowui-registry.vercel.app](https://flowui-registry.vercel.app) | not reviewed |
| @fluent2-react-kit | [https://fluent2-react-kit.graund.io](https://fluent2-react-kit.graund.io) | not reviewed |
| @fluid | [https://www.fluidfunctionalism.com](https://www.fluidfunctionalism.com) | not reviewed |
| @flx | [https://ui.flexnative.com](https://ui.flexnative.com) | not reviewed |
| @fonttrio | [https://www.fonttrio.xyz](https://www.fonttrio.xyz) | not reviewed |
| @forgeui | [https://forgeui.in/](https://forgeui.in/) | not reviewed |
| @formcn | [https://formcn.dev](https://formcn.dev) | not reviewed |
| @formscn | [https://www.formscn.space](https://www.formscn.space) | not reviewed |
| @framecn | [https://framecn.vercel.app](https://framecn.vercel.app) | not reviewed |
| @gaia | [https://ui.heygaia.io](https://ui.heygaia.io) | not reviewed |
| @gamekitui | [https://gamekitui.com](https://gamekitui.com) | not reviewed |
| @gamifykit | [https://gamifykit.com](https://gamifykit.com) | not reviewed |
| @gammaui | [https://www.gammaui.com](https://www.gammaui.com) | not reviewed |
| @gauge-ui | [https://www.gauge-ui.dev](https://www.gauge-ui.dev) | not reviewed |
| @gc-solid | [https://binnodon.github.io/gc-solid-ui](https://binnodon.github.io/gc-solid-ui) | not reviewed |
| @glass-ui | [https://glass-ui.crenspire.com](https://glass-ui.crenspire.com) | not reviewed |
| @glasscn | [https://glasscn-components.vercel.app/](https://glasscn-components.vercel.app/) | not reviewed |
| @glint-ui | [https://glint-ui-seven.vercel.app](https://glint-ui-seven.vercel.app) | not reviewed |
| @gooseui | [https://gooseui.pro](https://gooseui.pro) | not reviewed |
| @gpt-vis | [https://gpt-vis.antv.vision](https://gpt-vis.antv.vision) | not reviewed |
| @grainly-icons | [https://grainlyicons.abhii.space](https://grainlyicons.abhii.space) | not reviewed |
| @gridcn | [https://gridcn.vercel.app](https://gridcn.vercel.app) | not reviewed |
| @grootstudio | [https://grootstudio.vercel.app](https://grootstudio.vercel.app) | not reviewed |
| @gtm | [https://pumpgtm.com](https://pumpgtm.com) | not reviewed |
| @gymnopedies | [https://gymnopedies.shoota.work](https://gymnopedies.shoota.work) | not reviewed |
| @ha-components | [https://hacomponents.keshuac.com](https://hacomponents.keshuac.com) | not reviewed |
| @harshj | [https://shadcn-transfer-list-d4gb-two.vercel.app](https://shadcn-transfer-list-d4gb-two.vercel.app) | not reviewed |
| @headcodecms | [https://headcodecms.com](https://headcodecms.com) | not reviewed |
| @heatmap | [https://shadcn-heatmap.pages.dev](https://shadcn-heatmap.pages.dev) | not reviewed |
| @herocn | [https://herocn.dev/](https://herocn.dev/) | not reviewed |
| @heroicons-animated | [https://www.heroicons-animated.com/](https://www.heroicons-animated.com/) | not reviewed |
| @hextaui | [https://hextaui.com](https://hextaui.com) | not reviewed |
| @hexui | [https://hexui.sh](https://hexui.sh) | not reviewed |
| @hirael | [https://hirael.com](https://hirael.com) | not reviewed |
| @honestui | [https://www.honestui.com](https://www.honestui.com) | not reviewed |
| @hugeicons-animated | [https://hugeicons-animated.com](https://hugeicons-animated.com) | not reviewed |
| @hugeicons-animated-vue | [https://hugeicons-animated-vue.rebeaumickael.fr](https://hugeicons-animated-vue.rebeaumickael.fr) | not reviewed |
| @iandefined | [https://ui.iandefined.com](https://ui.iandefined.com) | not reviewed |
| @iconiq | [https://iconiqui.com](https://iconiqui.com) | not reviewed |
| @icons-animated | [https://icons.lndev.me](https://icons.lndev.me) | not reviewed |
| @ilinxa | [https://ui.ilinxa.com](https://ui.ilinxa.com) | not reviewed |
| @indiacn | [https://indiacn.in](https://indiacn.in) | not reviewed |
| @inferencesh | [https://ui.inference.sh](https://ui.inference.sh) | not reviewed |
| @initium | [https://initium.sh](https://initium.sh) | not reviewed |
| @intentui | [https://intentui.com](https://intentui.com) | not reviewed |
| @interior | [https://www.interior.dev](https://www.interior.dev) | not reviewed |
| @isometric | [https://isometric.buildlab.in](https://isometric.buildlab.in) | not reviewed |
| @jalco | [https://ui.justinlevine.me](https://ui.justinlevine.me) | not reviewed |
| @jolyui | [https://www.jolyui.dev](https://www.jolyui.dev) | not reviewed |
| @joyco | [https://registry.joyco.studio](https://registry.joyco.studio) | not reviewed |
| @jpmarques | [https://piemenu.jpmarqu.es](https://piemenu.jpmarqu.es) | not reviewed |
| @json-view-cn | [https://json-view-cn.vercel.app](https://json-view-cn.vercel.app) | not reviewed |
| @kanpeki | [https://kanpeki.vercel.app](https://kanpeki.vercel.app) | not reviewed |
| @kapwa | [https://kapwa-two.vercel.app](https://kapwa-two.vercel.app) | not reviewed |
| @kaui | [https://kaui-shadcn-registry.vercel.app](https://kaui-shadcn-registry.vercel.app) | not reviewed |
| @keyframery | [https://keyframery.com](https://keyframery.com) | not reviewed |
| @keyline | [https://keylineicons.com](https://keylineicons.com) | not reviewed |
| @kibo-ui | [https://www.kibo-ui.com/](https://www.kibo-ui.com/) | not reviewed |
| @kinetic | [https://kinetic.itsjay.in](https://kinetic.itsjay.in) | not reviewed |
| @knock-codes | [https://knock.codes](https://knock.codes) | not reviewed |
| @knot-ui | [https://knot-ui.trupal.me](https://knot-ui.trupal.me) | not reviewed |
| @kobra | [https://kobra.systems](https://kobra.systems) | not reviewed |
| @kokonutui | [https://kokonutui.com](https://kokonutui.com) | not reviewed |
| @launchui | [https://www.launchuicomponents.com/](https://www.launchuicomponents.com/) | not reviewed |
| @layish | [https://layish.vercel.app](https://layish.vercel.app) | not reviewed |
| @lema-ds | [https://ds.lema.ufpb.br](https://ds.lema.ufpb.br) | not reviewed |
| @lens-blocks | [https://lensblocks.com](https://lensblocks.com) | not reviewed |
| @limeplay | [https://limeplay.winoffrg.dev](https://limeplay.winoffrg.dev) | not reviewed |
| @liquefy-ui | [https://liquefy-ui.com](https://liquefy-ui.com) | not reviewed |
| @livedocs | [https://livedocs.xyz](https://livedocs.xyz) | not reviewed |
| @lmscn | [https://lmscn.vercel.app](https://lmscn.vercel.app) | not reviewed |
| @loadercn | [https://loadercn.vercel.app](https://loadercn.vercel.app) | not reviewed |
| @loading-ui | [https://loading-ui.com](https://loading-ui.com) | not reviewed |
| @localmode | [https://localmode.ai](https://localmode.ai) | not reviewed |
| @logoforge | [https://logoforge.terravidhal.me](https://logoforge.terravidhal.me) | not reviewed |
| @lucide-animated | [https://lucide-animated.com](https://lucide-animated.com) | not reviewed |
| @lumiui | [https://www.lumiui.dev](https://www.lumiui.dev) | not reviewed |
| @lytenyte | [https://www.1771technologies.com](https://www.1771technologies.com) | not reviewed |
| @magicui | [https://magicui.design](https://magicui.design) | MIT |
| @manifest | [https://ui.manifest.build](https://ui.manifest.build) | not reviewed |
| @mapcn | [https://mapcn.dev](https://mapcn.dev) | not reviewed |
| @materialcn | [https://github.com/guillermo-rebolledo/materialcn](https://github.com/guillermo-rebolledo/materialcn) | not reviewed |
| @mediadrop | [https://www.mediadrop.dev](https://www.mediadrop.dev) | not reviewed |
| @mewo | [https://mewo-ui.vercel.app](https://mewo-ui.vercel.app) | not reviewed |
| @microkit | [https://microkit.co](https://microkit.co) | not reviewed |
| @minidev | [https://ui.minidev.pro](https://ui.minidev.pro) | not reviewed |
| @mischief | [https://ui.tinkererslabs.com](https://ui.tinkererslabs.com) | not reviewed |
| @mksingh | [https://mksingh.dev/docs](https://mksingh.dev/docs) | not reviewed |
| @moduix-react | [https://moduix.dev](https://moduix.dev) | not reviewed |
| @moleculeui | [https://www.moleculeui.design/](https://www.moleculeui.design/) | not reviewed |
| @morphiq | [https://morphiq.prathampatel.design](https://morphiq.prathampatel.design) | not reviewed |
| @motion-lexicon | [https://motion-lexicon.pages.dev](https://motion-lexicon.pages.dev) | not reviewed |
| @motion-menu | [https://motion-menu-two.vercel.app](https://motion-menu-two.vercel.app) | not reviewed |
| @motion-primitives | [https://www.motion-primitives.com](https://www.motion-primitives.com) | MIT |
| @motiq | [https://motiq.dev](https://motiq.dev) | not reviewed |
| @motokoui | [https://motokoui.com](https://motokoui.com) | not reviewed |
| @moumenlab | [https://lab.moumen.dev](https://lab.moumen.dev) | not reviewed |
| @mozaika | [https://mozaika.design](https://mozaika.design) | not reviewed |
| @mui-treasury | [https://www.mui-treasury.com](https://www.mui-treasury.com) | not reviewed |
| @n3wth | [https://kit.n3wth.com](https://kit.n3wth.com) | not reviewed |
| @navui | [https://ui.navdeepsingh.dev](https://ui.navdeepsingh.dev) | not reviewed |
| @ncdai | [https://chanhdai.com/components](https://chanhdai.com/components) | not reviewed |
| @nekode | [https://ui.nekode.id](https://ui.nekode.id) | not reviewed |
| @neobrutal-ui | [https://neobrutal-ui.andongmin.com](https://neobrutal-ui.andongmin.com) | not reviewed |
| @neobrutalism | [https://www.neobrutalism.dev](https://www.neobrutalism.dev) | not reviewed |
| @neon-ui | [https://ui.neon.com](https://ui.neon.com) | not reviewed |
| @nessra-ui | [https://nessra-ui.vercel.app](https://nessra-ui.vercel.app) | not reviewed |
| @nexus-elements | [https://elements.nexus.availproject.org/docs/view-components](https://elements.nexus.availproject.org/docs/view-components) | not reviewed |
| @nexus-labs | [https://nexus-ui.com](https://nexus-ui.com) | not reviewed |
| @nexus-ui | [https://nexus-ui.dev](https://nexus-ui.dev) | not reviewed |
| @niko-table | [https://niko-table.com](https://niko-table.com) | not reviewed |
| @nordaun | [https://ui.nordaun.com](https://ui.nordaun.com) | not reviewed |
| @nostalgia-ui | [https://nostalgia-ui.com](https://nostalgia-ui.com) | not reviewed |
| @notra | [https://ui.usenotra.com](https://ui.usenotra.com) | not reviewed |
| @ns-ui | [https://design.helpmarq.com](https://design.helpmarq.com) | not reviewed |
| @nteract | [https://nteract-elements.vercel.app/](https://nteract-elements.vercel.app/) | not reviewed |
| @nuqs | [https://nuqs.dev/registry](https://nuqs.dev/registry) | not reviewed |
| @nusaiba | [https://nusaiba.dev](https://nusaiba.dev) | not reviewed |
| @nysgpt | [https://gov.nysgpt.com](https://gov.nysgpt.com) | not reviewed |
| @odysseyui | [https://www.odysseyui.com/docs](https://www.odysseyui.com/docs) | not reviewed |
| @ogimagecn | [https://ogimagecn.vercel.app](https://ogimagecn.vercel.app) | not reviewed |
| @oidc | [https://ui.shadcn.com/oidc](https://ui.shadcn.com/oidc) | not reviewed |
| @onchain-ui | [https://onchain-ui.dev](https://onchain-ui.dev) | not reviewed |
| @opaline | [https://opaline.buildlab.in](https://opaline.buildlab.in) | not reviewed |
| @openmirai | [https://www.openmirai.dev](https://www.openmirai.dev) | not reviewed |
| @openpolicy | [https://www.openpolicy.sh](https://www.openpolicy.sh) | not reviewed |
| @openstatus | [https://openstatus.dev/registry](https://openstatus.dev/registry) | not reviewed |
| @optics | [https://optics.agusmayol.com.ar](https://optics.agusmayol.com.ar) | not reviewed |
| @oui | [https://oui.mw10013.workers.dev](https://oui.mw10013.workers.dev) | not reviewed |
| @pacekit | [https://ui.pacekit.dev](https://ui.pacekit.dev) | not reviewed |
| @paceui | [https://paceui.com](https://paceui.com) | not reviewed |
| @paceui-gsap | [https://gsap.paceui.com](https://gsap.paceui.com) | not reviewed |
| @paddle | [https://developer.paddle.com/](https://developer.paddle.com/) | not reviewed |
| @paletteui | [https://paletteui.xyz](https://paletteui.xyz) | not reviewed |
| @pane | [https://pane.theui.company](https://pane.theui.company) | not reviewed |
| @pantoken | [https://pantoken.app](https://pantoken.app) | not reviewed |
| @pastaui | [https://pastaui.com](https://pastaui.com) | not reviewed |
| @pastecn | [https://pastecn.com](https://pastecn.com) | not reviewed |
| @paykit-sdk | [https://www.usepaykit.dev](https://www.usepaykit.dev) | not reviewed |
| @payload-components | [https://www.payload-components.xyz](https://www.payload-components.xyz) | not reviewed |
| @persianlabsui | [https://ui.persian-labs.ir](https://ui.persian-labs.ir) | not reviewed |
| @photocn | [https://photocn.dev](https://photocn.dev) | not reviewed |
| @phucbm | [https://phucbm.com/components](https://phucbm.com/components) | not reviewed |
| @pipecat | [https://ui.pipecat.ai](https://ui.pipecat.ai) | not reviewed |
| @pixel-openspace | [https://pixel-openspace.vercel.app](https://pixel-openspace.vercel.app) | not reviewed |
| @pixelact-ui | [https://pixelactui.com](https://pixelactui.com) | not reviewed |
| @plate | [https://platejs.org](https://platejs.org) | not reviewed |
| @plotcn | [https://plotcn.vercel.app](https://plotcn.vercel.app) | not reviewed |
| @preskok | [https://ui-three-mu.vercel.app](https://ui-three-mu.vercel.app) | not reviewed |
| @prompt-kit | [https://www.prompt-kit.com](https://www.prompt-kit.com) | not reviewed |
| @prosekit | [https://prosekit.dev](https://prosekit.dev) | not reviewed |
| @pulkitxm | [https://pulkit.page](https://pulkit.page) | not reviewed |
| @pulld | [https://pulld.pages.dev](https://pulld.pages.dev) | not reviewed |
| @pureui | [https://pure.kam-ui.com/](https://pure.kam-ui.com/) | not reviewed |
| @quill | [https://www.quilldesignsystem.com](https://www.quilldesignsystem.com) | not reviewed |
| @quiz-ui | [https://quiz-ui-phi.vercel.app](https://quiz-ui-phi.vercel.app) | not reviewed |
| @ramonclaudio-coderabbit | [https://ramonclaudio.com/registries/coderabbit](https://ramonclaudio.com/registries/coderabbit) | not reviewed |
| @ratneshc | [https://ratneshc.com/components](https://ratneshc.com/components) | not reviewed |
| @rawkitui | [https://rawkitui.zerodegree.tech](https://rawkitui.zerodegree.tech) | not reviewed |
| @react-aria | [https://react-aria.adobe.com](https://react-aria.adobe.com) | not reviewed |
| @react-bits | [https://reactbits.dev](https://reactbits.dev) | not reviewed |
| @react-easy-modals | [https://react-easy-modals-docs.vercel.app](https://react-easy-modals-docs.vercel.app) | not reviewed |
| @react-slot | [https://react-slot.vercel.app/](https://react-slot.vercel.app/) | not reviewed |
| @reactframe | [https://reactframe.com](https://reactframe.com) | not reviewed |
| @registrydirectory | [https://registry.directory](https://registry.directory) | not reviewed |
| @remocn | [https://www.remocn.dev/](https://www.remocn.dev/) | not reviewed |
| @remotionui | [https://remotionui.com](https://remotionui.com) | not reviewed |
| @rescript-shadcn | [https://rescript-shadcn.miriad.studio](https://rescript-shadcn.miriad.studio) | not reviewed |
| @retab | [https://ui.retab.com](https://ui.retab.com) | not reviewed |
| @retroui | [https://retroui.dev](https://retroui.dev) | not reviewed |
| @reui | [https://reui.io](https://reui.io) | not reviewed |
| @roiui | [https://roiui.com](https://roiui.com) | not reviewed |
| @saaskit | [https://saaskit-theta.vercel.app](https://saaskit-theta.vercel.app) | not reviewed |
| @saastro | [https://ui.saastro.io](https://ui.saastro.io) | not reviewed |
| @sabraman | [https://sabraman.ru/components](https://sabraman.ru/components) | not reviewed |
| @sans | [https://sans.sansorigin.com](https://sans.sansorigin.com) | not reviewed |
| @satoriui | [https://satoriui.site](https://satoriui.site) | not reviewed |
| @sc1m | [https://sc1m.vercel.app](https://sc1m.vercel.app) | not reviewed |
| @scrimui | [https://scrimui.dev](https://scrimui.dev) | not reviewed |
| @scrollxui | [https://www.scrollxui.dev](https://www.scrollxui.dev) | not reviewed |
| @seamui | [https://seamui.dev](https://seamui.dev) | not reviewed |
| @sekei | [https://www.sekei.design/shad-fx](https://www.sekei.design/shad-fx) | not reviewed |
| @sevenui | [https://sevenui.dev](https://sevenui.dev) | not reviewed |
| @sf-fleet-hud | [https://sf-fleet-hud.vercel.app](https://sf-fleet-hud.vercel.app) | not reviewed |
| @shadcn-dashboard | [https://shadcndashboard.dev](https://shadcndashboard.dev) | not reviewed |
| @shadcn-editor | [https://shadcn-editor.vercel.app](https://shadcn-editor.vercel.app) | not reviewed |
| @shadcn-map | [https://shadcn-map.vercel.app](https://shadcn-map.vercel.app) | not reviewed |
| @shadcn-space | [https://shadcnspace.com](https://shadcnspace.com) | not reviewed |
| @shadcn-studio | [https://shadcnstudio.com](https://shadcnstudio.com) | not reviewed |
| @shadcn-ui-blocks | [https://www.shadcn-ui-blocks.com](https://www.shadcn-ui-blocks.com) | not reviewed |
| @shadcnblocks | [https://shadcnblocks.com](https://shadcnblocks.com) | not reviewed |
| @shadcncraft | [https://shadcncraft.com](https://shadcncraft.com) | not reviewed |
| @shadcndesign | [https://www.shadcndesign.com](https://www.shadcndesign.com) | not reviewed |
| @shadcnhooks | [https://shadcn-hooks.com](https://shadcn-hooks.com) | not reviewed |
| @shadcnloaders | [https://shadcn-loaders.vercel.app](https://shadcn-loaders.vercel.app) | not reviewed |
| @shadcnmaps | [https://shadcnmaps.com](https://shadcnmaps.com) | not reviewed |
| @shadcnstore | [https://www.shadcnstore.com](https://www.shadcnstore.com) | not reviewed |
| @shadcnui-blocks | [https://shadcnui-blocks.com](https://shadcnui-blocks.com) | not reviewed |
| @shadcnuikit | [https://shadcnuikit.com](https://shadcnuikit.com) | not reviewed |
| @shaderscn | [https://www.shaderscn.com](https://www.shaderscn.com) | not reviewed |
| @shark | [https://shark.vini.one](https://shark.vini.one) | not reviewed |
| @shieldcn | [https://shieldcn.dev](https://shieldcn.dev) | not reviewed |
| @shivraj-roy | [https://www.shivrajroy.in](https://www.shivrajroy.in) | not reviewed |
| @shoogle | [https://shoogle.dev](https://shoogle.dev) | not reviewed |
| @shover | [https://shover-ui.vercel.app](https://shover-ui.vercel.app) | not reviewed |
| @simple-ai | [https://www.simple-ai.dev](https://www.simple-ai.dev) | not reviewed |
| @skecher-ui | [https://skecher-ui.com](https://skecher-ui.com) | not reviewed |
| @skiper-ui | [https://skiper-ui.com/](https://skiper-ui.com/) | not reviewed |
| @skrewww | [https://skrewww.com](https://skrewww.com) | not reviewed |
| @slide-cn | [https://slide-cn.com](https://slide-cn.com) | not reviewed |
| @slidecn | [https://slidecn.vercel.app](https://slidecn.vercel.app) | not reviewed |
| @smoothui | [https://smoothui.dev](https://smoothui.dev) | not reviewed |
| @snapcn | [https://snapcn.dev](https://snapcn.dev) | not reviewed |
| @solaceui | [https://www.solaceui.com](https://www.solaceui.com) | not reviewed |
| @soldevelo | [https://registry.soldevelo.com](https://registry.soldevelo.com) | not reviewed |
| @sona-ui | [https://sonaui.com](https://sonaui.com) | not reviewed |
| @soonish | [https://soonish.rushikeshmahajan.com](https://soonish.rushikeshmahajan.com) | not reviewed |
| @soralabs | [https://ui.soralabs.studio](https://ui.soralabs.studio) | not reviewed |
| @soundcn | [https://soundcn.xyz](https://soundcn.xyz) | not reviewed |
| @spaceui | [https://www.spaceui.one](https://www.spaceui.one) | not reviewed |
| @spark-ui | [https://spark-ui-olive.vercel.app](https://spark-ui-olive.vercel.app) | not reviewed |
| @spectrumui | [https://ui.spectrumhq.in](https://ui.spectrumhq.in) | not reviewed |
| @spell | [https://spell.sh](https://spell.sh) | not reviewed |
| @square-ui | [https://square.lndev.me](https://square.lndev.me) | not reviewed |
| @ssych | [https://ui.ssych.com](https://ui.ssych.com) | not reviewed |
| @stacklyui | [https://dev.stacklyui.in](https://dev.stacklyui.in) | not reviewed |
| @starck | [https://ui.starck.studio](https://ui.starck.studio) | not reviewed |
| @starseam | [https://starseam.astroicers.link](https://starseam.astroicers.link) | not reviewed |
| @stealth | [https://www.stealth.pm/ui](https://www.stealth.pm/ui) | not reviewed |
| @stepper | [https://francozeta-stepper.vercel.app](https://francozeta-stepper.vercel.app) | not reviewed |
| @styleui | [https://www.styleui.dev/](https://www.styleui.dev/) | not reviewed |
| @stylexui | [https://stylexui.dev](https://stylexui.dev) | not reviewed |
| @supabase | [https://supabase.com/ui](https://supabase.com/ui) | not reviewed |
| @sureui | [https://sureui.com](https://sureui.com) | not reviewed |
| @svelte-bits | [https://sveltebits.xyz](https://sveltebits.xyz) | not reviewed |
| @svgl | [https://svgl.app](https://svgl.app) | not reviewed |
| @swiftui-flx | [https://swiftui.flexnative.com](https://swiftui.flexnative.com) | not reviewed |
| @systaliko-ui | [https://systaliko-ui.vercel.app](https://systaliko-ui.vercel.app) | not reviewed |
| @tablecn | [https://table-cn.vercel.app](https://table-cn.vercel.app) | not reviewed |
| @tailark | [https://tailark.com](https://tailark.com) | not reviewed |
| @tailgrids | [https://tailgrids.com](https://tailgrids.com) | not reviewed |
| @tailwind-admin | [https://tailwind-admin.com/](https://tailwind-admin.com/) | not reviewed |
| @tailwind-builder | [https://tailwindbuilder.ai/](https://tailwindbuilder.ai/) | not reviewed |
| @taki | [https://taki-ui.com](https://taki-ui.com) | not reviewed |
| @termcn | [https://termcn.vercel.app](https://termcn.vercel.app) | not reviewed |
| @terrae | [https://www.terrae.dev](https://www.terrae.dev) | not reviewed |
| @tetra-ui | [https://tetra-ui.com](https://tetra-ui.com) | not reviewed |
| @text-ui | [https://joelachance.github.io/text-ui/docs](https://joelachance.github.io/text-ui/docs) | not reviewed |
| @thegridcn | [https://thegridcn.com](https://thegridcn.com) | not reviewed |
| @threecn | [https://threecn.dev](https://threecn.dev) | not reviewed |
| @tile-ui | [https://github.com/zmide/tile-ui](https://github.com/zmide/tile-ui) | not reviewed |
| @toc-cn | [https://tocn.vercel.app](https://tocn.vercel.app) | not reviewed |
| @toggles | [https://toggles.dev](https://toggles.dev) | not reviewed |
| @tokenui | [https://www.tokenui.dev](https://www.tokenui.dev) | not reviewed |
| @tool-ui | [https://www.tool-ui.com](https://www.tool-ui.com) | not reviewed |
| @tour | [https://onboarding-tour.vercel.app](https://onboarding-tour.vercel.app) | not reviewed |
| @trophy-ui | [https://ui.trophy.so](https://ui.trophy.so) | not reviewed |
| @tuiparts | [https://tuiparts.sh](https://tuiparts.sh) | not reviewed |
| @turbopills-ui | [https://www.turbopills.com/ui/docs](https://www.turbopills.com/ui/docs) | not reviewed |
| @tween-ui | [https://tween-ui.vercel.app](https://tween-ui.vercel.app) | not reviewed |
| @tweenly | [https://trytweenly.vercel.app](https://trytweenly.vercel.app) | not reviewed |
| @typedora-ui | [https://typedora-ui.netlify.app](https://typedora-ui.netlify.app) | not reviewed |
| @ui-layouts | [https://ui-layouts.com/](https://ui-layouts.com/) | not reviewed |
| @ui-shrushank | [https://www.shrutishankarnarayanan.com/components](https://www.shrutishankarnarayanan.com/components) | not reviewed |
| @uiable | [https://uiable.com](https://uiable.com) | not reviewed |
| @uiarc | [https://uiarc.dev](https://uiarc.dev) | not reviewed |
| @uicapsule | [https://uicapsule.com](https://uicapsule.com) | not reviewed |
| @uiception | [https://uiception.com](https://uiception.com) | not reviewed |
| @uitripled | [https://ui.tripled.work](https://ui.tripled.work) | not reviewed |
| @uniquel | [https://uniquel.io](https://uniquel.io) | not reviewed |
| @unlumen-ui | [https://ui.unlumen.com](https://ui.unlumen.com) | not reviewed |
| @untld | [https://ui.untldlabs.com](https://ui.untldlabs.com) | not reviewed |
| @uselayouts | [https://uselayouts.com](https://uselayouts.com) | not reviewed |
| @usva | [https://usva.build](https://usva.build) | not reviewed |
| @utilcn | [https://utilcn.dev](https://utilcn.dev) | not reviewed |
| @uui | [https://uui.app](https://uui.app) | not reviewed |
| @vectorstudio-ir | [https://github.com/vectorstudio-ir/ui](https://github.com/vectorstudio-ir/ui) | not reviewed |
| @velobits | [https://ui.velobits.dev](https://ui.velobits.dev) | not reviewed |
| @velora | [https://velora.colorlib.com](https://velora.colorlib.com) | not reviewed |
| @vernostudio | [https://verno-studio.vercel.app/components](https://verno-studio.vercel.app/components) | not reviewed |
| @viberdy | [https://viberdy.dev](https://viberdy.dev) | not reviewed |
| @videocn | [https://videocn.dev](https://videocn.dev) | not reviewed |
| @vllnt-ui | [https://ui.vllnt.com](https://ui.vllnt.com) | not reviewed |
| @voraui | [https://voraui.vercel.app](https://voraui.vercel.app) | not reviewed |
| @vue-bits | [https://vue-bits.dev](https://vue-bits.dev) | not reviewed |
| @w3-kit | [https://w3-kit.com](https://w3-kit.com) | not reviewed |
| @wa-ui | [https://ui.meta-cloud-api.site](https://ui.meta-cloud-api.site) | not reviewed |
| @wandry-ui | [http://ui.wandry.com.ua/](http://ui.wandry.com.ua/) | not reviewed |
| @washiveil | [https://washiveil.alexchih.com](https://washiveil.alexchih.com) | not reviewed |
| @watermelon | [https://ui.watermelon.sh](https://ui.watermelon.sh) | not reviewed |
| @waves-cn | [https://waves-cn.vercel.app](https://waves-cn.vercel.app) | not reviewed |
| @wds | [https://wds-shadcn-registry.netlify.app/](https://wds-shadcn-registry.netlify.app/) | not reviewed |
| @wensity | [https://ui.wensity.com/components](https://ui.wensity.com/components) | not reviewed |
| @whiskeyjack | [https://whiskeyjack.net](https://whiskeyjack.net) | not reviewed |
| @wigggle-ui | [https://wigggle-ui.vercel.app](https://wigggle-ui.vercel.app) | not reviewed |
| @wxcn | [https://wxcn.dev/react](https://wxcn.dev/react) | not reviewed |
| @xcn | [https://ui.radiumcoders.com](https://ui.radiumcoders.com) | not reviewed |
| @xevrion | [https://lab.xevrion.dev](https://lab.xevrion.dev) | not reviewed |
| @yukihi | [https://github.com/yukihito-jokyu/design-system](https://github.com/yukihito-jokyu/design-system) | not reviewed |
| @zenoadmin | [https://github.com/zeno-admin/shadcn-editor](https://github.com/zeno-admin/shadcn-editor) | not reviewed |
| @zippystarter | [https://zippystarter.com](https://zippystarter.com) | not reviewed |
