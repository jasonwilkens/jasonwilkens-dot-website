<template>
  <div class="contact-form">
    <button v-on:click="closeContactForm" class="close-form" aria-label="Close form">
      <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="22.4731" y="83" width="86" height="6" transform="rotate(-45 22.4731 83)"/>
        <rect x="26.7158" y="22" width="86" height="6" transform="rotate(45 26.7158 22)"/>
      </svg>
    </button>
    <form ref="form">
      <div :class="[{ error: hasError }, 'contact-form-control', 'step--1']">
        <label for="message" role="alert">
          Message
          <span v-if="hasError" class="error">(The message can't be empty)</span>
        </label>
        <textarea id="message" v-on:keyup.esc="unfocus" v-on:keyup="updateMessage" :value="message" :aria-invalid="hasError" ref="message" class="step-0" rows="8"/>
      </div>
      <div class="contact-form-control step--1">
        <label for="email">
          Your email address (optional)
        </label>
        <input id="email" v-on:keyup.esc="unfocus" v-on:change="updateEmail" :value="email" type="email" class="step-0"/>
      </div>
      <button id="submit" v-on:click.prevent="send" :disabled="isSendDisabled" type="submit" class="cta step-0">
        Send
      </button>
    </form>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  computed: {
    email() {
      return this.$store.state.contactFormEmail;
    },
    message() {
      return this.$store.state.contactFormMessage;
    }
  },
  data() {
    return {
      hasError: false,
      isSendDisabled: false
    };
  },
  mounted() {
    this.$refs.message.focus();
  },
  methods: {
    unfocus: function(e) {
      e.target.blur();
    },
    closeContactForm: function() {
      this.$store.commit('toggle');
    },
    send: function() {
      if (this.$store.state.contactFormMessage === '') {
        this.hasError = true;
        this.$refs.message.focus();
        return;
      }

      this.isSendDisabled = true;
      this.callMessageFunction();
    },
    updateEmail: function(e) {
      this.$store.commit('updateContactFormEmail', e.target.value);
    },
    updateMessage: function(e) {
      this.$store.commit('updateContactFormMessage', e.target.value);
      if (e.target.value !== '') {
        this.hasError = false;
      }
    },
    async callMessageFunction () {
      try {
        const response = await axios.post('/.netlify/functions/send-contact-email', {
          contactEmail: this.email,
          message: this.message
        });

        if (response && response.status === 200) {
          this.$store.commit('updateContactFormEmail', '');
          this.$store.commit('updateContactFormMessage', '');
          this.$store.dispatch('updateNotificationText', response.data);
          this.closeContactForm();
        } else {
          this.$store.dispatch('updateNotificationText', 'Cannot connect, something\'s wrong');
          this.isSendDisabled = false;
        }
      } catch (error) {
        this.$store.dispatch('updateNotificationText', 'Cannot connect, something\'s wrong');
        this.isSendDisabled = false;
      }
    }
  },
  props: ['show'],
}
</script>

<style>
.contact-form {
  margin-top: 0;
  padding: 2rem;
  background-color: var(--clr-background);
  box-shadow: 1.25rem 1.25rem 3.75rem var(--clr-highlight), -1.25rem -1.25rem 3.75rem var(--clr-background);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  z-index: 20;
}

.contact-form-control > * { display: block; }

.contact-form label {
  font-weight: var(--heading-weight);
  line-height: 1.2;
  padding-left: .875rem;
  cursor: pointer;
}

.contact-form label * { line-height: 1.2; }

.contact-form label .error { color: red; }

.contact-form textarea,
.contact-form input {
  display: block;
  position: relative;
  appearance: none;
  background-color: transparent;
  border: .125rem solid var(--clr-highlight);
  border-radius: .25rem;
  padding: .75rem;
  color: var(--clr-foreground);
  min-width: 100%;
  font-family: inherit;
  font-style: inherit;
  transition: border-color 500ms;
}

.contact-form textarea:focus,
.contact-form input:focus {
  border-color: var(--clr-foreground);
  outline: none;
}

.contact-form input:-webkit-autofill { box-shadow: 0 0 0px 1000px var(--clr-highlight) inset; }

.contact-form textarea[aria-invalid] { border-color: red; }

.contact-form-control { position: relative; }

.contact-form-control::before {
  position: absolute;
  content: '';
  display: block;
  opacity: 0;
  top: .375em;
  left: .125em;
  min-width: .375rem;
  min-height: .375rem;
  border-radius: 50%;
  background-color: var(--base-clr-accent);
  transition: opacity 500ms;
}

.contact-form-control.error::before { background-color: red; }

.contact-form-control:focus-within::before { opacity: 1; }

.contact-form textarea {
  resize: none;
  height: 30vh;
}

.contact-form button.close-form {
  position: absolute;
  top: .625rem;
  right: 1.5rem;
  padding: .25rem;
  background-color: transparent;
  border-radius: 50%;
}

.contact-form button.close-form:hover,
.contact-form button.close-form:focus { background-color: var(--base-clr-accent); }

.contact-form button.close-form:hover svg rect,
.contact-form button.close-form:focus svg rect { fill: var(--base-clr-dark); }

.contact-form button svg rect { fill: var(--clr-foreground); }

.contact-form button.cta {
  padding: .875rem 2.5rem;
  line-height: 1.2;
  margin-top: 2rem;
  background-color: var(--clr-foreground);
  color: var(--clr-background);
  font-weight: var(--heading-weight);
  border-radius: .25rem;
  width: 100%;
}

.contact-form #form-feedback p { margin-bottom: 0; }

.contact-form button.cta:hover,
.contact-form button.cta:focus {
  background-color: var(--base-clr-accent);
  color: var(--base-clr-dark);
}
.contact-form button.cta:disabled { background-color: var(--clr-highlight); }

@media screen and (min-width: 715px) {
  .contact-form {
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
    top: unset;
    right: 1rem;
    left: unset;
  }

  .contact-form button.cta { width: unset; }

  .contact-form textarea,
  .contact-form input { min-width: 55ch; }

  .contact-form textarea { height: unset; }
}

.contact-form button.close-form + * { margin-top: 0; }

.contact-form label + input,
.contact-form label + textarea { margin-top: .5rem; }

.contact-form-control + .contact-form-control { margin-top: 2rem; }

.slide-up-enter, .slide-up-leave-to {
  opacity: 0;
  transform: translateY(10rem);
}

.slide-up-enter-to, .slide-up-leave {
  opacity: 1;
  transform: translateY((0));
}

.slide-up-enter-active {
  transition: opacity 300ms ease-in,
              transform 300ms ease-out;
}

.slide-up-leave-active {
  transition: opacity 300ms ease-in,
              transform 300ms ease-in;
}
</style>