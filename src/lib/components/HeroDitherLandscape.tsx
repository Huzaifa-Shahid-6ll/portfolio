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
            <stop offset="0.52" stopColor="var(--hero-sky-mid)" />
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

          <pattern id="hero-haze-dither" width="11" height="11" patternUnits="userSpaceOnUse">
            <rect x="1" y="1" width="2" height="2" fill="var(--hero-haze-dot)" />
            <rect x="7" y="4" width="1.5" height="1.5" fill="var(--hero-haze-dot)" opacity="0.5" />
            <rect x="4" y="8" width="1" height="1" fill="var(--hero-haze-dot)" opacity="0.35" />
          </pattern>

          <pattern id="hero-ridge-dither" width="9" height="9" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="2" height="2" fill="var(--hero-far-dot)" />
            <rect x="5" y="2" width="2" height="2" fill="var(--hero-far-dot)" opacity="0.65" />
            <rect x="2" y="6" width="1.5" height="1.5" fill="var(--hero-far-dot)" opacity="0.4" />
          </pattern>

          <pattern id="hero-face-dither" width="12" height="12" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="3" height="3" fill="var(--hero-mountain-highlight)" />
            <rect x="6" y="1" width="2" height="2" fill="var(--hero-mountain-accent)" />
            <rect
              x="9"
              y="5"
              width="3"
              height="3"
              fill="var(--hero-mountain-highlight)"
              opacity="0.82"
            />
            <rect
              x="3"
              y="8"
              width="2"
              height="2"
              fill="var(--hero-mountain-accent)"
              opacity="0.85"
            />
            <rect x="7" y="9" width="2" height="2" fill="var(--hero-mountain-mid)" opacity="0.75" />
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
              opacity="0.72"
            />
          </pattern>

          <pattern id="hero-foreground-dither" width="8" height="8" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="3" height="3" fill="var(--hero-front-dot)" />
            <rect x="5" y="1" width="2" height="2" fill="var(--hero-mountain-shadow)" />
            <rect
              x="2"
              y="5"
              width="2"
              height="2"
              fill="var(--hero-mountain-highlight)"
              opacity="0.45"
            />
          </pattern>

          <clipPath id="hero-haze-ridge-clip">
            <path d="M0 462 L64 438 L126 448 L196 416 L252 438 L318 400 L394 436 L472 406 L546 438 L626 398 L704 430 L786 392 L864 434 L944 406 L1030 438 L1110 388 L1196 426 L1272 394 L1354 422 L1440 394 L1440 640 L0 640 Z" />
          </clipPath>

          <clipPath id="hero-rear-ridge-clip">
            <path d="M0 500 L58 474 L112 484 L178 442 L232 458 L304 392 L358 430 L420 462 L488 416 L552 444 L628 386 L694 428 L758 454 L836 378 L900 428 L978 398 L1048 446 L1124 360 L1194 402 L1248 384 L1320 344 L1374 392 L1440 424 L1440 640 L0 640 Z" />
          </clipPath>

          <clipPath id="hero-mid-ridge-clip">
            <path d="M0 532 L62 498 L124 512 L194 462 L236 394 L284 448 L338 414 L416 524 L498 442 L548 466 L618 414 L690 470 L758 438 L828 372 L884 430 L948 408 L1018 452 L1092 408 L1182 318 L1244 378 L1304 354 L1372 430 L1440 406 L1440 640 L0 640 Z" />
          </clipPath>

          <clipPath id="hero-front-ridge-clip">
            <path d="M0 570 L70 536 L128 548 L206 500 L282 528 L354 486 L438 552 L512 514 L594 540 L672 492 L744 548 L812 440 L888 510 L972 476 L1050 548 L1124 488 L1180 416 L1258 498 L1328 462 L1440 510 L1440 640 L0 640 Z" />
          </clipPath>

          <clipPath id="hero-rock-shelf-clip">
            <path d="M0 606 L80 586 L164 600 L248 574 L344 596 L438 570 L532 602 L612 580 L716 604 L808 568 L900 598 L1004 574 L1096 606 L1190 566 L1288 596 L1374 578 L1440 600 L1440 640 L0 640 Z" />
          </clipPath>

          <clipPath id="hero-left-cloud-clip">
            <path d="M0 480 C42 454 62 436 104 442 C138 400 198 418 208 462 C254 452 292 468 310 500 C242 530 138 532 0 516 Z" />
          </clipPath>

          <clipPath id="hero-right-cloud-clip">
            <path d="M1068 500 C1108 472 1170 484 1188 520 C1230 506 1286 520 1342 548 C1372 544 1408 552 1440 574 L1440 614 C1338 610 1210 594 1074 570 C1056 540 1054 518 1068 500 Z" />
          </clipPath>

          <clipPath id="hero-mid-fog-clip">
            <path d="M0 508 C98 486 174 500 250 506 C360 480 454 496 546 508 C660 482 748 496 842 508 C964 478 1068 498 1168 510 C1278 486 1360 498 1440 510 L1440 558 L0 558 Z" />
          </clipPath>

          <clipPath id="hero-low-fog-clip">
            <path d="M0 612 C88 582 154 596 232 606 C326 574 418 592 514 606 C622 570 744 588 838 606 C936 576 1028 588 1122 606 C1248 570 1336 588 1440 600 L1440 640 L0 640 Z" />
          </clipPath>
        </defs>

        <rect width="1440" height="640" fill="url(#hero-sky)" />
        <rect width="1440" height="640" fill="url(#hero-sky-dither)" opacity="0.66" />

        <g transform="translate(0 32)">
          <g opacity="0.82">
            <path
              d="M0 480 C42 454 62 436 104 442 C138 400 198 418 208 462 C254 452 292 468 310 500 C242 530 138 532 0 516 Z"
              fill="var(--hero-cloud)"
            />
            <rect
              width="330"
              height="130"
              y="406"
              fill="url(#hero-cloud-dither)"
              clipPath="url(#hero-left-cloud-clip)"
            />
          </g>

          <g opacity="0.48">
            <path
              d="M860 430 C906 394 968 408 990 444 C1038 418 1098 440 1122 482 C1030 512 932 510 838 494 C836 464 842 444 860 430 Z"
              fill="var(--hero-cloud-soft)"
            />
            <path
              d="M1068 500 C1108 472 1170 484 1188 520 C1230 506 1286 520 1342 548 C1372 544 1408 552 1440 574 L1440 614 C1338 610 1210 594 1074 570 C1056 540 1054 518 1068 500 Z"
              fill="var(--hero-cloud)"
            />
            <rect
              width="390"
              height="130"
              x="1050"
              y="486"
              fill="url(#hero-cloud-dither)"
              clipPath="url(#hero-right-cloud-clip)"
            />
          </g>

          <path
            d="M0 462 L64 438 L126 448 L196 416 L252 438 L318 400 L394 436 L472 406 L546 438 L626 398 L704 430 L786 392 L864 434 L944 406 L1030 438 L1110 388 L1196 426 L1272 394 L1354 422 L1440 394 L1440 640 L0 640 Z"
            fill="var(--hero-haze-ridge)"
          />
          <rect
            width="1440"
            height="280"
            y="380"
            fill="url(#hero-haze-dither)"
            clipPath="url(#hero-haze-ridge-clip)"
            opacity="0.74"
          />

          <path
            d="M0 500 L58 474 L112 484 L178 442 L232 458 L304 392 L358 430 L420 462 L488 416 L552 444 L628 386 L694 428 L758 454 L836 378 L900 428 L978 398 L1048 446 L1124 360 L1194 402 L1248 384 L1320 344 L1374 392 L1440 424 L1440 640 L0 640 Z"
            fill="var(--hero-rear-ridge)"
          />
          <rect
            width="1440"
            height="300"
            y="342"
            fill="url(#hero-ridge-dither)"
            clipPath="url(#hero-rear-ridge-clip)"
            opacity="0.72"
          />
          <g clipPath="url(#hero-rear-ridge-clip)" opacity="0.56">
            <path d="M304 392 L236 520 L392 520 Z" fill="var(--hero-rear-shadow)" />
            <path d="M628 386 L552 520 L714 520 Z" fill="var(--hero-rear-shadow)" />
            <path d="M836 378 L758 520 L936 520 Z" fill="var(--hero-rear-light)" />
            <path d="M1124 360 L1038 522 L1228 522 Z" fill="var(--hero-rear-shadow)" />
            <path d="M1320 344 L1238 522 L1440 522 L1374 392 Z" fill="var(--hero-rear-light)" />
          </g>

          <rect
            width="1440"
            height="70"
            y="488"
            fill="var(--hero-fog-soft)"
            clipPath="url(#hero-mid-fog-clip)"
          />
          <rect
            width="1440"
            height="70"
            y="488"
            fill="url(#hero-cloud-dither)"
            clipPath="url(#hero-mid-fog-clip)"
            opacity="0.42"
          />

          <path
            d="M0 532 L62 498 L124 512 L194 462 L236 394 L284 448 L338 414 L416 524 L498 442 L548 466 L618 414 L690 470 L758 438 L828 372 L884 430 L948 408 L1018 452 L1092 408 L1182 318 L1244 378 L1304 354 L1372 430 L1440 406 L1440 640 L0 640 Z"
            fill="var(--hero-mountain-base)"
          />
          <g clipPath="url(#hero-mid-ridge-clip)">
            <rect width="1440" height="340" y="310" fill="url(#hero-face-dither)" opacity="0.82" />

            <path d="M236 394 L124 512 L214 560 L282 448 Z" fill="var(--hero-slope-light)" />
            <path d="M236 394 L282 448 L416 524 L338 414 Z" fill="var(--hero-slope-shadow)" />
            <path d="M282 448 L214 560 L416 524 Z" fill="var(--hero-slope-mid)" />

            <path d="M618 414 L498 560 L690 470 Z" fill="var(--hero-slope-light)" />
            <path d="M618 414 L690 470 L758 438 L704 560 Z" fill="var(--hero-slope-shadow)" />
            <path d="M498 442 L548 466 L498 560 Z" fill="var(--hero-slope-mid)" />

            <path d="M828 372 L758 438 L744 560 L884 430 Z" fill="var(--hero-slope-light)" />
            <path d="M828 372 L884 430 L1018 452 L948 408 Z" fill="var(--hero-slope-shadow)" />
            <path d="M884 430 L744 560 L1018 560 L1018 452 Z" fill="var(--hero-slope-mid)" />

            <path d="M1182 318 L1092 408 L1050 560 L1244 378 Z" fill="var(--hero-slope-light)" />
            <path d="M1182 318 L1244 378 L1372 430 L1304 354 Z" fill="var(--hero-slope-shadow)" />
            <path d="M1244 378 L1050 560 L1372 560 L1372 430 Z" fill="var(--hero-slope-mid)" />

            <path d="M1320 412 L1440 406 L1440 560 L1372 430 Z" fill="var(--hero-slope-shadow)" />

            <rect
              width="1440"
              height="340"
              y="310"
              fill="url(#hero-shadow-dither)"
              opacity="0.34"
            />
          </g>

          <path
            d="M0 532 L62 498 L124 512 L194 462 L236 394 L284 448 L338 414 L416 524 L498 442 L548 466 L618 414 L690 470 L758 438 L828 372 L884 430 L948 408 L1018 452 L1092 408 L1182 318 L1244 378 L1304 354 L1372 430 L1440 406"
            fill="none"
            stroke="var(--hero-ridge-edge)"
            strokeLinejoin="miter"
            strokeWidth="4"
            vectorEffect="non-scaling-stroke"
          />
          <g
            fill="none"
            stroke="var(--hero-crevice)"
            strokeLinecap="square"
            strokeWidth="2"
            opacity="0.78"
            vectorEffect="non-scaling-stroke"
          >
            <path d="M236 394 L252 460 L214 560" />
            <path d="M284 448 L318 506 L374 540" />
            <path d="M618 414 L604 478 L552 542" />
            <path d="M690 470 L724 522 L704 568" />
            <path d="M828 372 L850 448 L802 536" />
            <path d="M884 430 L944 492 L1012 552" />
            <path d="M1182 318 L1198 404 L1134 542" />
            <path d="M1244 378 L1296 448 L1362 536" />
          </g>

          <path
            d="M0 570 L70 536 L128 548 L206 500 L282 528 L354 486 L438 552 L512 514 L594 540 L672 492 L744 548 L812 440 L888 510 L972 476 L1050 548 L1124 488 L1180 416 L1258 498 L1328 462 L1440 510 L1440 640 L0 640 Z"
            fill="var(--hero-front-ridge)"
          />
          <g clipPath="url(#hero-front-ridge-clip)">
            <rect
              width="1440"
              height="250"
              y="410"
              fill="url(#hero-shadow-dither)"
              opacity="0.94"
            />
            <path d="M206 500 L128 548 L282 528 Z" fill="var(--hero-front-highlight)" />
            <path d="M354 486 L282 528 L438 552 Z" fill="var(--hero-front-shadow)" />
            <path d="M672 492 L594 540 L744 548 Z" fill="var(--hero-front-highlight)" />
            <path d="M812 440 L744 548 L888 510 Z" fill="var(--hero-front-highlight)" />
            <path d="M812 440 L888 510 L972 476 L906 566 Z" fill="var(--hero-front-shadow)" />
            <path d="M1180 416 L1050 548 L1258 498 Z" fill="var(--hero-front-highlight)" />
            <path d="M1180 416 L1258 498 L1440 510 L1328 462 Z" fill="var(--hero-front-shadow)" />
            <rect width="1440" height="250" y="410" fill="url(#hero-face-dither)" opacity="0.46" />
          </g>
          <path
            d="M0 570 L70 536 L128 548 L206 500 L282 528 L354 486 L438 552 L512 514 L594 540 L672 492 L744 548 L812 440 L888 510 L972 476 L1050 548 L1124 488 L1180 416 L1258 498 L1328 462 L1440 510"
            fill="none"
            stroke="var(--hero-front-edge)"
            strokeLinejoin="miter"
            strokeWidth="5"
            vectorEffect="non-scaling-stroke"
          />

          <path
            d="M0 606 L80 586 L164 600 L248 574 L344 596 L438 570 L532 602 L612 580 L716 604 L808 568 L900 598 L1004 574 L1096 606 L1190 566 L1288 596 L1374 578 L1440 600 L1440 640 L0 640 Z"
            fill="var(--hero-rock-shelf)"
          />
          <rect
            width="1440"
            height="100"
            y="560"
            fill="url(#hero-foreground-dither)"
            clipPath="url(#hero-rock-shelf-clip)"
            opacity="0.86"
          />

          <rect
            width="1440"
            height="80"
            y="572"
            fill="var(--hero-fog)"
            clipPath="url(#hero-low-fog-clip)"
          />
          <rect
            width="1440"
            height="80"
            y="572"
            fill="url(#hero-cloud-dither)"
            clipPath="url(#hero-low-fog-clip)"
            opacity="0.5"
          />
        </g>
      </svg>
    </div>
  );
}
