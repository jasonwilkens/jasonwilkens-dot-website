<template>
  <div>
    <NorthAmerica />
    <nuxt />
    <p class="corner-text step-1">Make Things <span>Right</span></p>
    <Menu />
    <Notification />
  </div>
</template>

<script>
import Menu from '~/components/Menu';
import NorthAmerica from '~/components/NorthAmerica';
import Notification from '~/components/Notification';

export default {
  components: {
    Menu,
    NorthAmerica,
    Notification
  },
  computed: {
    isContactFormOpenOnMobile() {
      return this.$store.state.isContactFormOpen && window.innerWidth <= 715;
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: this.$store.state.isIntroRunning || this.isContactFormOpenOnMobile ? 'freeze-body' : '',
      }
    };
  },
  mounted() {
    // Set type weight for initial viewport size, run again on resize
    this.calculateWeight();
    window.addEventListener('resize', this.calculateWeight);
  },
  destroyed() {
    window.removeEventListener('resize', this.calculateWeight);
  },
  methods: {
    calculateWeight: function() {
      const innerWidth = window.innerWidth;
      const minFluidRange = 350;
      const maxFluidRange = 1500;
      const fluidRange = maxFluidRange - minFluidRange;
      const thickestBodyWeight = 400;
      const thinnestBodyWeight = 300;
      const thickestHeadingWeight = 800;
      const thinnestHeadingWeight = 600;
      const root = document.documentElement;

      let bodyWeight;
      let headingWeight;
      let percentIntoRange;

      if (innerWidth <= minFluidRange) {
        bodyWeight = thickestBodyWeight;
        headingWeight = thickestHeadingWeight;
      } else if (innerWidth >= maxFluidRange) {
        bodyWeight = thinnestBodyWeight;
        headingWeight = thinnestHeadingWeight;
      } else {
        percentIntoRange = (innerWidth - minFluidRange) / (maxFluidRange - minFluidRange);
        bodyWeight = thickestBodyWeight - ((thickestBodyWeight - thinnestBodyWeight) * percentIntoRange);
        headingWeight = thickestHeadingWeight - ((thickestHeadingWeight - thinnestHeadingWeight) * percentIntoRange);
      }

      root.style.setProperty('--body-weight', bodyWeight);
      root.style.setProperty('--heading-weight', headingWeight);
    }
  }
}
</script>

<style>
header { margin: auto; }

main {
  max-width: 104.0625rem;
  margin: auto;
  padding-bottom: 6rem;
}

/* Vertical rhythm */

main * + div, main * + section, main * + article { margin-top: 4em; }

li + li { margin-top: 1em; }

/* Typography */

* { line-height: 1.4; }

p, li, blockquote { max-width: 50ch; }

ul {
  list-style-type: square;
  list-style-position: outside;
  padding-left: 1em;
}

a { font-weight: var(--link-weight); }

/* Heading styles */

h1, h2, h3 {
  display: inline-block;
  position: relative;
  padding-top: 1rem;
  letter-spacing: 1px;
}

h1 {
  margin: 1.75rem 0 0;
  line-height: 1.35;
}

h1::before, h2::before, h3::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
}

h1::before {
  min-height: 1rem;
  background: repeating-linear-gradient(
    60deg,
    var(--clr-highlight),
    var(--clr-highlight) 3px,
    var(--clr-background) 3px,
    var(--clr-background) 9px
  );
}

h2::before, h3::before {
  min-height: .5rem;
  background: repeating-linear-gradient(
    60deg,
    var(--clr-highlight),
    var(--clr-highlight) 2px,
    var(--clr-background) 2px,
    var(--clr-background) 6px
  );
}

/* Breadcrumb headings */

header nav, header nav + h1 {
  display: inline;
  position: relative;
  top: -.5rem;
}

header nav + h1::before { content: unset; }

/* Corner text */

@media screen and (max-width: 370px) {
  .corner-text { display: none; }
}

.corner-text {
  position: absolute;
  top: .5rem;
  right: .875rem;
  margin: 0;
  text-transform: uppercase;
  line-height: 1.5;
  text-align: right;
}

.corner-text span {
  display: block;
  transform: rotate(90deg);
  margin-left: calc(100% - .875em);
  margin-top: -.5em;
  white-space: nowrap;
}

/* Freeze body for intro animation */

body.freeze-body { overflow: hidden; }

/* Responsive menu placement */

.menu {
  bottom: 1rem;
  right: 1rem;
}

/* Add some margins */

@media screen and (min-width: 700px) {
  header { padding: 0 10vw; }

  main { padding: 0 10vw 6rem; }
}

@media screen and (min-width: 1150px) {
  header, main {
    padding: 0 8%;
    max-width: 187.5rem;
  }

  main { padding-bottom: 6rem; }

  .menu {
    bottom: 6rem;
    right: calc(1rem + 5.71%);
  }
}
</style>