<template>
  <div class="menu">
    <transition name="first-button">
      <button v-if="menuOpen" v-on:click="toggleContactForm" ref="contactFormButton" aria-label="Message">
        <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M83.9641 84L97 91.5263V28C97 26.8954 96.1046 26 95 26H15C13.8954 26 13 26.8954 13 28V82C13 83.1046 13.8954 84 15 84H83.9641ZM103 28C103 23.5817 99.4183 20 95 20H15C10.5817 20 7 23.5817 7 28V82C7 86.4183 10.5817 90 15 90H82.3564L103 101.919V28Z"/>
          <rect x="23" y="37" width="64" height="6"/>
          <rect x="23" y="52" width="64" height="6"/>
          <rect x="23" y="67" width="40" height="6"/>
        </svg>
      </button>
    </transition>
    <transition name="second-button">
      <button v-if="menuOpen" v-on:click="toggleDarkMode" :disabled="isContactFormOpen" aria-label="Toggle dark mode">
        <svg class="light-on-icon" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M75.5061 60.5061L74.2904 61.7218L73.903 63.3968C72.3963 69.9117 70.7364 75.5157 68.9908 80.2488H75.3622C76.9402 75.6936 78.4123 70.5275 79.7487 64.7487C93.4171 51.0804 93.4171 28.9196 79.7487 15.2513C66.0804 1.58293 43.9196 1.5829 30.2513 15.2512C16.5829 28.9196 16.5829 51.0804 30.2513 64.7487C31.4989 70.522 32.8949 75.6893 34.4089 80.2488H40.7512C39.0825 75.5309 37.5145 69.9532 36.1159 63.4814L35.7428 61.755L34.4939 60.5061C23.1687 49.1809 23.1687 30.8191 34.4939 19.4939C45.8191 8.16869 64.1809 8.16871 75.5061 19.4939C86.8313 30.8191 86.8313 49.1809 75.5061 60.5061Z"/>
          <path v-if="darkMode" d="M79.2056 64.7487C92.7497 51.0804 92.7496 28.9196 79.2055 15.2513C65.6615 1.58293 43.7022 1.5829 30.1581 15.2512C16.614 28.9196 16.614 51.0804 30.1581 64.7487C31.3943 70.522 32.7776 75.6893 34.2779 80.2488H74.8589C76.4226 75.6936 77.8813 70.5275 79.2056 64.7487Z"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M71 92.2488H39V86.2488H71V92.2488Z"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M66 104.249H44V98.2488H66V104.249Z"/>
        </svg>
      </button>
    </transition>
    <button v-on:click="menuOpen = !menuOpen" :disabled="isContactFormOpen" aria-label="Menu">
      <svg id="menu" :class="menuOpen ? 'menu-close' : null" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="52" width="86" height="6"/>
        <rect x="12" y="82" width="86" height="6"/>
        <rect x="12" y="22" width="86" height="6"/>
      </svg>
    </button>
    <transition name="slide-up">
      <ContactForm v-if="isContactFormOpen" />
    </transition>
  </div>
</template>

<script>
import ContactForm from '~/components/ContactForm';

export default {
  components: {
    ContactForm,
  },
  computed: {
    isContactFormOpen() {
      return this.$store.state.isContactFormOpen;
    }
  },
  data() {
    return {
      menuOpen: false,
      darkMode: false
    };
  },
  mounted() {
    if (sessionStorage && sessionStorage.getItem('theme')) {
      this.darkMode = sessionStorage.getItem('theme') === 'dark' ? true : false;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.darkMode = true;
      sessionStorage.setItem('theme', 'dark');
    }
    this.updateCSSVariables();
  },
  methods: {
    toggleContactForm: function() {
      this.$store.commit('toggle');
    },
    toggleDarkMode: function() {
      sessionStorage.setItem('theme', this.darkMode ? 'light' : 'dark');
      this.darkMode = !this.darkMode;
      this.updateCSSVariables();
    },
    updateCSSVariables: function() {
      const root = document.documentElement;

      if (this.darkMode) {
        root.setAttribute('theme', 'dark');
      } else if (root.hasAttribute('theme')) {
        root.removeAttribute('theme');
      }
    }
  },
  watch: {
    isContactFormOpen: function(newToggle, oldToggle) {
      // If the contact form is being closed, put the focus back on the open form button
      if (!newToggle && oldToggle) {
        this.$refs.contactFormButton.focus();
      }
    }
  }
}
</script>

<style>
.menu {
  display: flex;
  position: fixed;
  border-radius: .5rem;
  background-color: transparent;
  border-radius: .5rem;
}

.menu button {
  border: none;
  margin: 0;
  padding: 1rem;
  border-radius: 0;
  background-color: var(--base-clr-lightish);
  line-height: 0;
  z-index: 10;
}

[theme="dark"] .menu button { background-color: var(--clr-foreground); }

.menu > button:first-child {
  border-top-left-radius: .5rem;
  border-bottom-left-radius: .5rem;
}

.menu > button:last-of-type {
  border-top-right-radius: .5rem;
  border-bottom-right-radius: .5rem;
}

.menu button:hover, .menu button:focus {
  outline: none;
}

.menu button:focus-visible, .menu button:-moz-focusring {
  background-color: var(--base-clr-accent);
}

.menu button::-moz-focus-inner { border: 0; }

.menu svg { width: 2rem; }

.menu svg rect, .menu svg path { fill: var(--base-clr-dark); }

@media screen and (min-width: 700px) {
  .menu button:hover, .menu button:focus {
    background-color: var(--base-clr-accent);
  }
}

/* Animate menu item transition */
.first-button-enter, .first-button-leave-to { transform: translateX(8rem); }

.second-button-enter, .second-button-leave-to { transform: translateX(4rem); }

.first-button-enter-to, .first-button-leave,
.second-button-enter-to, .second-button-leave { transform: translateX(0); }

.first-button-enter-active, .first-button-leave-active,
.second-button-enter-active, .second-button-leave-active { transition: transform 300ms ease-in-out; }

/* Animate menu icon on click */
.menu svg#menu rect { transition: rotate 300ms ease-in-out, transform 300ms ease-in-out; }

.menu-close rect:first-child { transform: rotate(45deg) translate(1.5rem, -3.5rem); }

.menu-close rect { transform: rotate(45deg) translate(1.5rem, -5.375rem); }

.menu-close rect:last-child { transform: rotate(-45deg) translate(-3.375rem, 3.375rem); }
</style>