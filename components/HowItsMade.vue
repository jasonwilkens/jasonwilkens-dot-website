<template>
  <div class="how-its-made step--1" :id="position">
    <h2 class="step--1">How it's made</h2>
    <p>This website was made with <a href="https://nuxtjs.org/" target="_blank">Nuxt</a> and the <a href="https://jamstack.org/" target="_blank">Jamstack</a>, for more detail see the <a href="https://github.com/jasonwilkens/jasonwilkens-dot-website" target="_blank">GitHub README</a>.</p>
  </div>
</template>

<script>
export default {
  props: ['position'],
}
</script>