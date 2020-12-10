<template>
  <div class="wrapper">
    <img class="map" src="/images/explored-map/map.svg" />
  </div>
</template>

<script>
export default {
  layout: 'blank',
  head() {
    return {
      title: 'Explored Map',
    };
  }
}
</script>

<style>
.map {
  width: 100rem;
}

.wrapper {
  text-align: center;
}
</style>