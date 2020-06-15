<template>
  <transition name="toast">
    <p v-if="notificationText" class="notification step-0">{{ notificationText }}</p>
  </transition>
</template>

<script>
export default {
  computed: {
    notificationText() {
      return this.$store.state.notificationText;
    }
  }
}
</script>

<style>
.notification {
  background-color: var(--clr-foreground);
  color: var(--clr-background);
  box-shadow: 1.25rem 1.25rem 3.75rem var(--clr-highlight), -1.25rem -1.25rem 3.75rem var(--clr-background);
  position: fixed;
  top: 3rem;
  right: 50%;
  transform: translateX(50%);
  z-index: 30;
  margin: 0;
  padding: .5em .75em;
  border-radius: .25rem;
}

@media screen and (min-width: 715px) {
  .notification {
    right: 3rem;
    transform: unset;
  }
}

.toast-enter, .toast-leave-to { opacity: 0; }

.toast-enter-active, .toast-leave-active { transition: opacity 300ms; }

.toast-enter-to, .toast-leave { opacity: 1; }
</style>