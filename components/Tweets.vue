<template>
  <section class="tweets">
    <h2 class="step-0">Recently liked</h2>
    <ul class="step-1">
      <li v-for="tweet in tweets" :key="tweet.id">
          <blockquote class="step-0" :cite="'https://www.twitter.com/' + tweet.user.screen_name + '/status/' + tweet.id_str">
            <span class="openq">&ldquo;</span>{{ tweet.full_text }}<span class="closeq">&rdquo;</span>
          </blockquote>
          <cite class="step-0">
            ->
            <a
              target="_blank"
              :href="'https://www.twitter.com/' + tweet.user.screen_name + '/status/' + tweet.id_str"
            >
              <img
                alt="profile picture"
                height="48"
                width="48"
                :src="'/images/twitter/' + tweet.user.profile_image_url.slice(tweet.user.profile_image_url.lastIndexOf('/')+1)"
              />@{{ tweet.user.screen_name }}
            </a>
          </cite>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['tweets'],
};
</script>

<style>
.tweets img { border-radius: 100%; }

.tweets li:first-child blockquote { margin-top: 0; }
</style>
