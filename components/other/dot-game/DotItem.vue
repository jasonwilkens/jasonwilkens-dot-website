<template>
  <button
    :class="dot.category"
    tabindex="-1"
    :style="{ height: dot.size + 'px', width: dot.size + 'px', top: currentTop + 'px', left: dot.left + 'vw' }"
    :disabled="!running"
    v-on:click="onDotClick($event)"
  >
  </button>
</template>

<script>
export default {
  data() {
    return {
      currentTop: -100,
      interval: setInterval(this.fall, 1)
    };
  },
  methods: {
    fall: function() {
      if (this.running) {
        this.currentTop += this.velocity;
      }
      if (this.currentTop > window.innerHeight) {
        clearInterval(this.interval);
        this.$emit('miss');
      }
    },
    onDotClick: function(e) {
      var dotSize = this.dot.size;
      var points = Math.round((100 - dotSize) / 10) + 1;
      this.$emit('score', points);
      e.target.remove();
    }
  },
  props: ['dot', 'running', 'velocity'],
}
</script>