<template>
  <main>
    <h1 class="step-5">{{error.statusCode}}</h1>
    <div v-if="error.statusCode === 404">
      <p class="step-1">There's nothing at this URL. Maybe you're looking for one of these unlinked pages?</p>
      <ul class="step-1">
        <li>RPG stuff &mdash; My <n-link to="/kaja">Pathfinder character</n-link>, the <n-link to="/explored-map">campaign map</n-link>, the <n-link to="/religion">campaign religions</n-link></li>
        <li>Code exercises &mdash; My <n-link to="/dot-game">dot game</n-link> submission for Indeed</li>
      </ul>
      <p class="step-1">If not, just start on the <n-link to="/">home page</n-link>.</p>
    </div>
    <div v-else>
      <p>Something has gone wrong. I'd be curious to know what it is!</p>
    </div>
  </main>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default'
}
</script>