<template>
  <div class="banner-container">
    <div
      class="banner"
      v-for="(item, index) in content"
      :key="index"
      :style="(index === 7 && eighthTop) && 'top: ' + eighthTop"
    >
      <p>{{ item.p }}</p>
      <button v-on:click="onBannerButton(index)"><span>{{ item.b1 }}</span></button>
      <button v-on:click="onBannerButton(index)"><span>{{ item.b2 }}</span></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: [
        {
          p: 'Allow this website to send notifications?',
          b1: 'Allow notifications',
          b2: 'Never allow'
        },
        {
          p: 'By continuing, you agree to the use of cookies',
          b1: 'OK',
          b2: 'No thank you'
        },
        {
          p: 'Allow this website to access your location?',
          b1: 'Yes',
          b2: 'No'
        },
        {
          p: 'Would you please turn off your ad blocker?',
          b1: 'Alright',
          b2: 'Nah'
        },
        {
          p: 'Want to load this on our mobile app instead?',
          b1: 'Of course',
          b2: 'Continue'
        },
        {
          p: 'Please sign up for our newsletter',
          b1: 'Terrific',
          b2: 'Maybe later'
        },
        {
          p: 'This website was meant for Chrome',
          b1: 'Get Chrome',
          b2: 'Oh no'
        },
        {
          p: '1 free article left, create an account?',
          b1: 'Fine',
          b2: 'Never'
        }
      ],
      eighthTop: null
    };
  },
  methods: {
    onBannerButton: function(i) {
      this.content.splice(i, 1);
    },
    updateEighthTop: function() {
      let width,
          eighthTop;
      width = document && document.body.clientWidth;
      eighthTop = (width - 1134) * .01 + 207 + 'px';
      if (width <= 1134) {
        this.eighthTop = null;
      } else {
        this.eighthTop = eighthTop;
      }
    }
  },
  mounted() {
    this.updateEighthTop();
    window.addEventListener('resize', this.updateEighthTop);
  },
  destroyed() {
    window.removeEventListener('resize', this.updateEighthTop);
  }
}
</script>

<style>
.banner-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 10;
  pointer-events: none;
}

.banner {
  background-color: var(--base-clr-light);
  color: var(--base-clr-dark);
  position: absolute;
  display: flex;
  align-items: center;
  padding: 1rem;
  box-shadow: .5rem .5rem 1rem var(--base-clr-lightish), -.5rem -.5rem 1rem var(--clr-background);
  pointer-events: all;
  font-size: .625rem;
}

.banner p {
  flex: 1 1 0;
  max-width: unset;
  margin-right: .5rem;
}

.banner button {
  background-color: var(--base-clr-light);
  border-color: var(--base-clr-dark);
  color: var(--base-clr-dark);
}

.banner button:hover {
  background-color: var(--base-clr-dark);
  color: var(--base-clr-light);
}

.banner button + button {
  margin-left: 1rem;
}

@media screen and (max-width: 1133px) {
  .banner:first-child {
    top: 0;
    width: 100vw;
    z-index: 10;
  }

  .banner:nth-child(2) {
    top: .5rem;
    left: 1vw;
    width: 98vw;
    z-index: 9;
  }

  .banner:nth-child(3) {
    top: 1rem;
    left: 2vw;
    width: 96vw;
    z-index: 8;
  }

  .banner:nth-child(4) {
    top: 1.5rem;
    left: 3vw;
    width: 94vw;
    z-index: 7;
  }

  .banner:nth-child(5) {
    top: 2rem;
    left: 4vw;
    width: 92vw;
    z-index: 6;
  }

  .banner:nth-child(6) {
    top: 2.5rem;
    left: 5vw;
    width: 90vw;
    z-index: 5;
  }

  .banner:nth-child(7) {
    top: 3rem;
    left: 6vw;
    width: 88vw;
    z-index: 4;
  }

  .banner:nth-child(8) {
    top: 3.5rem;
    left: 7vw;
    width: 86vw;
    z-index: 3;
  }

  .banner:nth-child(2) p,
  .banner:nth-child(3) p,
  .banner:nth-child(4) p,
  .banner:nth-child(5) p,
  .banner:nth-child(6) p,
  .banner:nth-child(7) p,
  .banner:nth-child(8) p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}

@media screen and (min-width: 600px) {
  .banner {
    font-size: 1rem;
  }
}

@media screen and (min-width: 1134px) {
  .banner-container {
    transform: rotate(-1deg);
  }

  .banner {
    font-size: 1.25rem;
  }

  .banner p {
    margin-right: unset;
    margin-left: unset;
  }

  .banner:nth-child(even),
  .banner:nth-child(even) button span {
    writing-mode: vertical-rl;
  }

  .banner:nth-child(even) button + button {
    margin-left: 0;
    margin-top: 1rem;
  }

  .banner:nth-child(even) button {
    width: 64px;
    white-space: nowrap;
  }

  .banner:first-child {
    top: 0;
    left: 0;
    width: calc(100vw + 2rem);
    margin-top: -4rem;
    padding: 4rem 3rem 1rem 10rem;
  }

  .banner:nth-child(2) {
    left: 0;
    top: -2rem;
    height: calc(100vh + 2rem);
    padding: 10rem 5rem 2rem 1rem;
    margin-left: -4rem;
    transform: rotate(180deg);;
    box-shadow: -.5rem -.5rem 1rem var(--base-clr-lightish), .5rem .5rem 1rem var(--clr-background);
  }

  .banner:nth-child(3) {
    bottom: 0;
    left: -1rem;
    width: calc(100vw + 2rem);
    padding: 1rem 8.5rem 4rem 3.75rem;
    margin-bottom: -3rem;
    box-shadow: -.5rem -.5rem 1rem var(--base-clr-lightish), .5rem .5rem 1rem var(--clr-background);
  }

  .banner:nth-child(4) {
    right: 0;
    bottom: -2rem;
    height: calc(100vh - (52px));
    padding: 2rem 4rem 3rem 1rem;
    margin-right: -3rem;
    box-shadow: -1rem 0 1rem -.5rem var(--base-clr-lightish), inset 0 1rem 1rem -.5rem var(--base-clr-lightish);
  }

  .banner:nth-child(5) {
    transform: rotate(1deg);
    top: 52px;
    padding: 4rem 130px 1rem 280px;
    width: 100vw;
    z-index: -1;
  }

  .banner:nth-child(6) {
    transform: rotate(181deg);
    top: 80px;
    left: 84px;
    height: calc(100vh - 100px);
    padding: 240px 3rem 2rem 1rem;
    box-shadow: -.5rem -.5rem 1rem var(--base-clr-lightish), .5rem .5rem 1rem var(--clr-background);
    z-index: -1;
  }

  .banner:nth-child(7) {
    transform: rotate(1deg);
    bottom: 52px;
    padding-bottom: 4rem;
    padding-left: 150px;
    padding-right: 240px;
    width: 100vw;
    z-index: -1;
    box-shadow: -.5rem -.5rem 1rem var(--base-clr-lightish), .5rem .5rem 1rem var(--clr-background);
  }

  .banner:nth-child(8) {
    transform: rotate(1deg);
    right: 84px;
    padding-right: 2rem;
    padding-bottom: 8rem;
    padding-top: 2rem;
    height: calc(100vh - 220px);
    z-index: -1;
    box-shadow: -1rem 0 1rem -.5rem var(--base-clr-lightish), inset 0 1rem 1rem -.5rem var(--base-clr-lightish);
  }
}
</style>
