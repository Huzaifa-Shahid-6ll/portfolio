interface HeroDitherLandscapeProps {
  className?: string;
}

export default function HeroDitherLandscape({ className = "" }: HeroDitherLandscapeProps) {
  return (
    <div aria-hidden="true" className={`hero-dither-landscape ${className}`}>
      <svg
        viewBox="0 0 1440 640"
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--hero-sky-top)" />
            <stop offset="0.55" stopColor="var(--hero-sky-mid)" />
            <stop offset="1" stopColor="var(--hero-sky-bottom)" />
          </linearGradient>

          <pattern id="hero-sky-dither" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.8" fill="var(--hero-sky-dot)" />
            <circle cx="5" cy="3" r="0.65" fill="var(--hero-sky-dot)" opacity="0.55" />
            <circle cx="3" cy="6" r="0.55" fill="var(--hero-sky-dot)" opacity="0.4" />
          </pattern>

          <pattern id="hero-cloud-dither" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1.2" fill="var(--hero-cloud-dot)" />
            <circle cx="6" cy="3" r="0.9" fill="var(--hero-cloud-dot)" opacity="0.75" />
            <circle cx="3" cy="8" r="0.7" fill="var(--hero-cloud-dot)" opacity="0.5" />
          </pattern>

          <pattern id="hero-far-dither" width="9" height="9" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="2" height="2" fill="var(--hero-far-dot)" />
            <rect x="5" y="2" width="2" height="2" fill="var(--hero-far-dot)" opacity="0.65" />
            <rect x="2" y="6" width="1.5" height="1.5" fill="var(--hero-far-dot)" opacity="0.4" />
          </pattern>

          <pattern id="hero-mountain-dither" width="12" height="12" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="3" height="3" fill="var(--hero-mountain-highlight)" />
            <rect x="6" y="1" width="2" height="2" fill="var(--hero-mountain-accent)" />
            <rect
              x="9"
              y="5"
              width="3"
              height="3"
              fill="var(--hero-mountain-highlight)"
              opacity="0.85"
            />
            <rect
              x="3"
              y="8"
              width="2"
              height="2"
              fill="var(--hero-mountain-accent)"
              opacity="0.9"
            />
            <rect
              x="7"
              y="9"
              width="2"
              height="2"
              fill="var(--hero-mountain-shadow)"
              opacity="0.9"
            />
          </pattern>

          <pattern id="hero-shadow-dither" width="11" height="11" patternUnits="userSpaceOnUse">
            <rect x="0" y="1" width="3" height="3" fill="var(--hero-mountain-shadow)" />
            <rect
              x="6"
              y="3"
              width="3"
              height="3"
              fill="var(--hero-mountain-shadow)"
              opacity="0.9"
            />
            <rect
              x="3"
              y="8"
              width="2"
              height="2"
              fill="var(--hero-mountain-shadow)"
              opacity="0.75"
            />
          </pattern>

          <clipPath id="hero-far-ridge-clip">
            <path d="M0 448 L72 420 L132 434 L210 386 L278 416 L356 360 L438 414 L522 384 L606 418 L690 372 L758 408 L842 356 L924 412 L1012 386 L1094 418 L1184 342 L1264 396 L1340 352 L1440 392 L1440 640 L0 640 Z" />
          </clipPath>

          <clipPath id="hero-mid-ridge-clip">
            <path d="M0 500 L74 456 L142 472 L236 368 L330 420 L412 504 L506 430 L596 452 L686 398 L770 458 L858 372 L936 418 L1018 398 L1088 452 L1182 322 L1272 374 L1350 340 L1440 412 L1440 640 L0 640 Z" />
          </clipPath>

          <clipPath id="hero-front-ridge-clip">
            <path d="M0 548 L92 508 L178 520 L266 466 L348 500 L438 462 L536 530 L626 470 L716 522 L812 438 L904 496 L1002 454 L1088 522 L1178 420 L1276 492 L1368 448 L1440 490 L1440 640 L0 640 Z" />
          </clipPath>

          <clipPath id="hero-left-cloud-clip">
            <path d="M0 466 C42 444 62 426 102 432 C136 390 196 410 206 452 C248 442 286 456 300 490 C236 516 138 518 0 504 Z" />
          </clipPath>

          <clipPath id="hero-low-fog-clip">
            <path d="M0 602 C88 572 154 586 232 596 C326 564 418 582 514 596 C622 560 744 578 838 596 C936 566 1028 578 1122 596 C1248 560 1336 578 1440 590 L1440 640 L0 640 Z" />
          </clipPath>
        </defs>

        <rect width="1440" height="640" fill="url(#hero-sky)" />
        <rect width="1440" height="640" fill="url(#hero-sky-dither)" opacity="0.68" />

        <g transform="translate(0 44)">
          <g opacity="0.8">
            <path
              d="M0 466 C42 444 62 426 102 432 C136 390 196 410 206 452 C248 442 286 456 300 490 C236 516 138 518 0 504 Z"
              fill="var(--hero-cloud)"
            />
            <rect
              width="330"
              height="120"
              y="400"
              fill="url(#hero-cloud-dither)"
              clipPath="url(#hero-left-cloud-clip)"
            />
          </g>

          <g opacity="0.42">
            <path
              d="M920 414 C960 386 1018 396 1038 430 C1084 410 1140 426 1160 466 C1080 492 988 494 898 476 C894 450 904 430 920 414 Z"
              fill="var(--hero-cloud)"
            />
            <path
              d="M1180 502 C1222 472 1284 484 1302 520 C1342 506 1396 520 1440 548 L1440 588 C1346 594 1246 586 1168 566 C1158 538 1162 516 1180 502 Z"
              fill="var(--hero-cloud-soft)"
            />
          </g>

          <path
            d="M0 448 L72 420 L132 434 L210 386 L278 416 L356 360 L438 414 L522 384 L606 418 L690 372 L758 408 L842 356 L924 412 L1012 386 L1094 418 L1184 342 L1264 396 L1340 352 L1440 392 L1440 640 L0 640 Z"
            fill="var(--hero-far-ridge)"
          />
          <rect
            width="1440"
            height="300"
            y="340"
            fill="url(#hero-far-dither)"
            clipPath="url(#hero-far-ridge-clip)"
          />

          <path
            d="M0 500 L74 456 L142 472 L236 368 L330 420 L412 504 L506 430 L596 452 L686 398 L770 458 L858 372 L936 418 L1018 398 L1088 452 L1182 322 L1272 374 L1350 340 L1440 412 L1440 640 L0 640 Z"
            fill="var(--hero-mountain-base)"
          />
          <rect
            width="1440"
            height="330"
            y="310"
            fill="url(#hero-mountain-dither)"
            clipPath="url(#hero-mid-ridge-clip)"
          />

          <path
            d="M236 368 L330 420 L412 504 L302 456 L258 412 L214 468 L142 472 Z"
            fill="url(#hero-shadow-dither)"
          />
          <path
            d="M858 372 L936 418 L1018 398 L1088 452 L998 454 L930 432 L884 486 L812 438 Z"
            fill="url(#hero-shadow-dither)"
          />
          <path
            d="M1182 322 L1272 374 L1350 340 L1440 412 L1330 424 L1268 386 L1220 466 L1134 474 Z"
            fill="url(#hero-shadow-dither)"
          />

          <path
            d="M0 548 L92 508 L178 520 L266 466 L348 500 L438 462 L536 530 L626 470 L716 522 L812 438 L904 496 L1002 454 L1088 522 L1178 420 L1276 492 L1368 448 L1440 490 L1440 640 L0 640 Z"
            fill="var(--hero-front-ridge)"
          />
          <rect
            width="1440"
            height="240"
            y="410"
            fill="url(#hero-shadow-dither)"
            clipPath="url(#hero-front-ridge-clip)"
            opacity="0.92"
          />
          <rect
            width="1440"
            height="240"
            y="410"
            fill="url(#hero-mountain-dither)"
            clipPath="url(#hero-front-ridge-clip)"
            opacity="0.55"
          />

          <g opacity="0.82">
            <path d="M262 466 L318 500 L244 512 Z" fill="var(--hero-mountain-highlight)" />
            <path d="M622 470 L688 512 L584 522 Z" fill="var(--hero-mountain-accent)" />
            <path d="M812 438 L872 484 L770 510 Z" fill="var(--hero-mountain-highlight)" />
            <path d="M1178 420 L1242 482 L1132 510 Z" fill="var(--hero-mountain-highlight)" />
            <path d="M1368 448 L1440 490 L1298 522 Z" fill="var(--hero-mountain-accent)" />
          </g>

          <rect
            width="1440"
            height="80"
            y="560"
            fill="var(--hero-fog)"
            clipPath="url(#hero-low-fog-clip)"
          />
          <rect
            width="1440"
            height="80"
            y="560"
            fill="url(#hero-cloud-dither)"
            clipPath="url(#hero-low-fog-clip)"
            opacity="0.58"
          />
        </g>
      </svg>
    </div>
  );
}
