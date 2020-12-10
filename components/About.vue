<template>
  <section class="about" :id="position">
    <h2 class="step-0">About</h2>
    <ul class="step-1">
      <li>I design for the web and live with my wife in Seattle<CurrentWeather :here="here" />.</li>
      <li>I enjoy playing ice hockey and snowboarding.</li>
    </ul>
  </section>
</template>

<script>
import CurrentWeather from '~/components/CurrentWeather';

export default {
  components: {
    CurrentWeather
  },
  props: ['here', 'position']
}
</script>