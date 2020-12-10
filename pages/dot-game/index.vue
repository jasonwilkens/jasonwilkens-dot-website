<template>
  <main>
    <div id="dot-game">
      <section id="space">
        <DotItem
          v-for="item in dots"
          :dot="item"
          :key="item.id"
          :velocity="velocity"
          :running="running"
          v-on:score="addPoints"
          v-on:miss="dotClean"
        ></DotItem>
        <span id="score" v-cloak>{{ score.toLocaleString() }}</span>
        <section id="controls">
          <button v-if="running" v-on:click="toggleRunning">Pause</button>
          <button v-else v-on:click="toggleRunning">Start</button>
          <input id="accelerator" type="range" min="10" max="100" step="10" :value="speed" v-on:input="onSpeedChange($event)" />
          <button v-on:click="onReset">Reset</button>
        </section>
      </section>
    </div>
  </main>
</template>

<script>
import DotItem from '~/components/other/dot-game/DotItem';

export default {
  components: {
    DotItem
  },
  computed: {
    velocity: function() {
      return this.speed / 100;
    }
  },
  data() {
    return {
      dotInterval: '',
      running: false,
      score: 0,
      speed: 50,
      dots: [],
      nextDotId: 0
    };
  },
  layout: 'blank',
  head() {
    return {
      title: 'Dot Game',
      link: [
        {
          hid: 'fonts',
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Teko:500&text=AEPRSTU0123456789&2C'
        }
      ]
    };
  },
  methods: {
    addPoints: function(points, id) {
      this.score += points;
    },
    dotClean: function() {
      this.dots.shift();
    },
    generateDot: function() {
      if (!document.hidden) {
        var dotSize = Math.floor(Math.random() * 91 + 10);
        var category;
        var left = Math.floor(Math.random() * 101);
        var offset = (window.innerWidth * (left / 100) + dotSize) - window.innerWidth;
        if (offset > 0) {
          left = left - Math.ceil(offset);
        }
        var dotObj;
        switch(true) {
          case dotSize > 75:
            category = 'x-large';
            break;
          case dotSize > 50:
            category = 'large';
            break;
          case dotSize > 25:
            category = 'medium';
            break;
          default:
            category = 'small';
        }
        dotObj = {
          id: this.nextDotId,
          size: dotSize,
          category: category,
          top: 20,
          left: left
        }
        this.dots.push(dotObj);
        this.nextDotId++;
      }
    },
    onSpeedChange: function(e) {
      this.speed = Number(e.target.value);
    },
    onReset: function() {
      this.score = 0;
      this.speed = 50;
    },
    toggleRunning: function() {
      this.running = !this.running;
      this.running ?
        this.dotInterval = setInterval(this.generateDot, 1000) :
          clearInterval(this.dotInterval);
    }
  }
}
</script>

<style>
/* variables */

:root {
  --dots-light-gray: #F7F7F7;
  --dots-space-gray: #2C3138;
  --dots-faded-purple: #6C5D75;
  --dots-dark-purple: #54435E;
  --dots-light-blue: #30A7FC;
  --dots-light-blue-accent: #94C2E3;
  --dots-orange: #FF7A00;
  --dots-orange-accent: #FCA453;
  --dots-yellow: #FCE405;
  --dots-yellow-accent: #FFF6A8;
  --dots-default-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  --dots-text-shadow: 2px 2px 2px rgba(44, 49, 56, 0.25);
  --dots-thumb-shadow: 4px 4px 4px rgba(44, 49, 56, 0.25);
}

/* defaults */

[id="dot-game"] {
  margin: 0;
  font-family: 'Teko', sans-serif;
  font-weight: 500;
  color: var(--dots-light-gray);
}

[id="dot-game"] * {
  outline: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

[id="dot-game"] [v-cloak] {
  display: none;
}

/* components */

[id="dot-game"] #space {
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: var(--dots-space-gray);
  overflow: hidden;
}

[id="dot-game"] #space button {
  position: absolute;
  padding: 0;
  border-radius: 50%;
  cursor: pointer;
  transition: filter .10s cubic-bezier(.33,.66,.66,1), transform 1s linear;
}

[id="dot-game"] #space button.small {
  border: .1rem solid var(--dots-light-gray);
  background-image: linear-gradient(to right, var(--dots-light-gray) 60%, white 100%);
}

[id="dot-game"] #space button.medium {
  border: .1rem solid var(--dots-yellow);
  background-image: linear-gradient(to right, var(--dots-yellow) 60%, var(--dots-yellow-accent) 100%);
}

[id="dot-game"] #space button.large {
  border: .1rem solid var(--dots-orange);
  background-image: linear-gradient(to right, var(--dots-orange) 60%, var(--dots-orange-accent) 100%);
}

[id="dot-game"] #space button.x-large {
  border: .1rem solid var(--dots-light-blue);
  background-image: linear-gradient(to right, var(--dots-light-blue) 60%, var(--dots-light-blue-accent) 100%);
}

[id="dot-game"] #space button:hover {
  filter: opacity(60%);
}

[id="dot-game"] #score {
  position: absolute;
  top: 2rem;
  right: 2.5rem;
  font-size: 4rem;
  text-align: right;
  text-shadow: var(--dots-default-shadow);
  pointer-events: none;
  z-index: 99;
}

[id="dot-game"] #controls {
  position: absolute;
  display: flex;
  bottom: 0;
  width: 100vw;
  height: 4rem;
  background-color: var(--dots-faded-purple);
  z-index: 100;
}

@media screen and (min-width: 28rem) {
  [id="dot-game"] #controls {
    width: 28rem;
    left: calc(50vw - 14rem);
    border-top-left-radius: .3rem;
    border-top-right-radius: .3rem;
  }
}

[id="dot-game"] #controls button {
  position: static;
  border-radius: .2rem;
  width: 20%;
  margin: .5rem;
  padding: 0;
  color: var(--dots-light-gray);
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'Teko', sans-serif;
  font-size: 1.5rem;
  letter-spacing: .1rem;
  text-transform: uppercase;
  text-shadow: var(--dots-text-shadow);
  -webkit-transition: background .10s cubic-bezier(.33,.66,.66,1);
  transition: background .10s cubic-bezier(.33,.66,.66,1);
}

[id="dot-game"] #controls button:hover {
  background-color: var(--dots-space-gray);
}

[id="dot-game"] input[type="range"] {
  flex-grow: 1;
  margin-top: 1.5rem;
  border-radius: .2rem;
  background-color: var(--dots-dark-purple);
  height: 25%;
  box-shadow: inset 0px 4px 4px rgba(44, 49, 56, 0.25);
  cursor: pointer;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-box-shadow: inset 0px 4px 4px rgba(44, 49, 56, 0.25);
}

[id="dot-game"] input[type="range"]::-moz-range-track {
  border: inherit;
  background: transparent;
}

[id="dot-game"] input[type="range"]::-ms-track {
  border: inherit;
  color: transparent;
  background: transparent;
}

[id="dot-game"] input[type="range"]::-ms-fill-upper {
  background: transparent;
}

[id="dot-game"] input[type="range"]::-ms-fill-lower {
  background: transparent;
}

[id="dot-game"] input[type="range"]::-ms-tooltip {
  display: none;
}

[id="dot-game"] input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  -webkit-box-shadow: var(--dots-thumb-shadow);
  width: .6rem;
  height: 2rem;
  background-color: var(--dots-light-gray);
  border: 0;
  border-radius: .1rem;
  box-shadow: var(--dots-thumb-shadow);
}

[id="dot-game"] input[type="range"]::-ms-thumb {
  width: .6rem;
  height: 2rem;
  background-color: var(--dots-light-gray);
  border: 0;
  border-radius: .1rem;
  box-shadow: var(--dots-thumb-shadow);
}

[id="dot-game"] input[type="range"]::-moz-range-thumb {
  width: .6rem;
  height: 2rem;
  background-color: var(--dots-light-gray);
  border: 0;
  border-radius: .1rem;
  box-shadow: var(--dots-thumb-shadow);
}

[id="dot-game"] input[type=range]::-moz-focus-outer {
  border: none;
}
</style>