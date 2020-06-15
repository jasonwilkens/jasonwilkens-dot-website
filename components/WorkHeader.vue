<template>
  <header>
    <nav class="step-1">
      <router-link to="/">Home</router-link>
      /
      <router-link to="/work">Work</router-link>
      /
    </nav>
    <h1 class="step-1">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: ['title'],
}
</script>