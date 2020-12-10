<template>
  <section class="articles">
    <h2 class="step-0">Recently read</h2>
    <ul class="step-1">
      <li v-for="article in articles" :key="article.item_id">
        <span :id="article.item_id" class="headline">{{ article.resolved_title }}</span>
        <blockquote class="step-0" :cite="article.resolved_url">
          <span class="openq">&ldquo;</span>{{ article.excerpt }}<span class="closeq">&rdquo;</span>
        </blockquote>
        <cite class="step-0">
          ->
          <a
            target="_blank"
            rel="noopener"
            :href="article.resolved_url"
            :aria-describedby="article.item_id"
          >
            <img
              height="100"
              width="100"
              alt="publication logo"
              v-if="article.domain_metadata.logo"
              :src="article.domain_metadata.logo"
            />{{ article.domain_metadata.name }}
          </a>
        </cite>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['articles'],
};
</script>

<style>
.headline {
  display: inline-block;
  max-width: 45ch;
}
.articles img { border-radius: .125rem; }
</style>
