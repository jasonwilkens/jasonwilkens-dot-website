<template>
  <div>
    <Banners/>
    <header>
      <nav class="step-1">
        <n-link to="/">Home</n-link>
        /
      </nav>
      <h1 class="step-1">Eight Banners</h1>
    </header>
    <main>
      <article class="step-0">
        <h2 class="step-2">The Website of Today</h2>
        <p>Eight opt-in banners is good, but there's still more to do.</p>
        <ul>
          <li>Multiple auto-play videos, one in lower right corner and some inline with content</li>
          <li>Ad sections that load slowly then change size after a few seconds, so content jumps around</li>
          <li>Launch pop-up window when there's a click on empty space</li>
          <li>Automatic chat window for customer service robot</li>
        </ul>
      </article>
    </main>
  </div>
</template>

<script>
import Banners from '~/components/other/website-of-today/Banners';

export default {
  components: {
    Banners
  },
  head() {
    return {
      title: 'The Website of Today'
    };
  }
}
</script>