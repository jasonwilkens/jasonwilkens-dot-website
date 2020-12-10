<template>
  <header>
    <nav class="step-1">
      <n-link to="/">Home</n-link>
      /
      <n-link to="/work">Work</n-link>
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