<template>
  <transition name="fade">
    <div id="intro" class="background" v-if="show">
      <div class="svg-wrapper">
        <svg alt="Loading..." class="north-america" viewBox="0 0 376 409" xmlns="http://www.w3.org/2000/svg">
          <title>Map of North America with Seattle marked</title>
          <path
            d="M114 281L144 326L127 270L132 273L135 286L169 330L166 345L214 366L223 361L241 366L275 382L282 395L310 402L322 395V386L310 395L296 386V366L287 361H265L272 334L265 326L251 334L247 345L232 349H223L209 326L214 296L232 286L251 292L259 281H282L287 292L296 306L301 296L291 267L310 240V229V208L322 198L317 189L331 168L336 179L353 157H342H327L322 147L336 133L342 115L317 110L291 89V105L282 95L272 89L259 95V115L272 123L265 138L272 147L265 157L251 138L223 129L214 115L232 77L219 65H209L190 70L166 65L144 48L124 42L101 11H77L74 19L62 15L56 21L62 30V35L56 30H44L41 48L44 60L41 65L3 56L46 75L73 70L90 92L94 133L107 168L93 215L101 248L108 257L114 281Z"
            stroke="var(--base-clr-accent)"
          />
          <circle cx="123" cy="171" r="35" class="accent-circle" stroke="var(--base-clr-accent)" />
          <path
            d="M124 276L154 321L137 265L142 268L145 281L179 325L176 340L224 361L233 356L251 361L285 377L292 390L320 397L332 390V381L320 390L306 381V361L297 356H275L282 329L275 321L261 329L257 340L242 344H233L219 321L224 291L242 281L261 287L269 276H292L297 287L306 301L311 291L301 262L320 235V224V203L332 193L327 184L341 163L346 174L363 152H352H337L332 142L346 128L352 110L327 105L301 84V100L292 90L282 84L269 90V110L282 118L275 133L282 142L275 152L261 133L233 124L224 110L242 72L229 60H219L200 65L176 60L154 43L134 37L111 6H87L84 14L72 10L66 16L72 25V30L66 25H54L51 43L54 55L51 60L13 51L56 70L83 65L100 87L104 128L117 163L103 210L111 243L118 252L124 276Z"
            stroke="var(--clr-foreground)"
          />
          <circle cx="123" cy="171" r="15" fill="var(--clr-background)" stroke="var(--clr-foreground)" />
        </svg>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  computed: {
    show() {
      return this.$store.state.isIntroRunning;
    }
  },
  mounted() {
/* turn off intro after it runs and on refresh */
    if (sessionStorage) {
      if (sessionStorage.getItem('hasIntroRun')) {
        this.$store.commit('turnOffIntro');
      } else {
        sessionStorage.setItem('hasIntroRun', true);
      }
    }

    setTimeout(() => {
      this.$store.commit('turnOffIntro');
    }, 1800);
  }
}
</script>

<style>
.background {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  background-color: var(--clr-background);
  height: 100vh;
  width: 100vw;
  contain: strict;
  z-index: 10;
}

.north-america {
  fill: none;
  width: 15rem;
}

.north-america * { stroke-width: 12; }

.north-america path { animation: draw 3s linear forwards; }

.north-america circle { animation: appear 3s ease-in-out forwards; }

@keyframes draw {
  0% {
    stroke-dasharray: 3750;
    stroke-dashoffset: 3750;
  }
  99% { stroke-dashoffset: 0; }
  100% { stroke-dasharray: none; }
}

@keyframes appear {
  0% {
    stroke-dasharray: 3750;
    stroke-dashoffset: 3750;
  }
  50% {
    stroke-dasharray: 3750;
    stroke-dashoffset: 3750;
  }
  99% { stroke-dashoffset: 0; }
  100% { stroke-dasharray: none; }
}

@media (prefers-reduced-motion: reduce) {
  .background { display: none; }
  html body.freeze-body { overflow: unset; }
}

/* Transition classes */

.fade-enter { opacity: 1; }

.fade-leave-active { transition: opacity 300ms; }

.fade-leave-to { opacity: 0; }
</style>
