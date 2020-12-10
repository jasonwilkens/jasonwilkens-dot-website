<template>
  <article class="work-grid step-0">
    <slot></slot>
  </article>
</template>

<style scoped>
article.work-grid { margin-top: 1em; }

h2 { margin: .25rem 0 0; }

h2 + p { margin-top: 1em; }

h4 { display: block; }

h3 { margin-bottom: 0; }

h2, h3 { clear: both; }

section { margin-top: 0; }

aside {
  margin: 0;
  margin-bottom: 1em;
}

aside img {
  width: 30rem;
  max-width: 100%;
}

figure {
  margin: 0;
  display: inline-block;
  border-top: .25rem solid var(--clr-highlight);
  padding-top: 1rem;
}

.connector {
  display: inline-block;
  margin-top: 0;
}

.connector + p { margin-top: 0; }

.connector h2, .connector h3 { margin-top: .25rem; }

.connector h4 { margin: 1em 0 0; }

.connector h4:first-child { margin-top: 0; }

@media screen and (min-width: 512px) {
  aside { display: inline-block; }
}

@media screen and (min-width: 960px) {
  article.work-grid {
    margin-top: 4em;
    max-width: calc(50ch + 40rem);
  }

  aside {
    display: unset;
    margin-top: 1.75rem;
    margin-right: 8%;
    margin-bottom: 1.25rem;
    margin-left: 3rem;
    float: right;
  }

  aside img { max-width: 30rem; }

  aside + p { margin-top: 0; }
}

@media screen and (min-width: 2000px) {
  article.work-grid { max-width: unset; }

  aside {
    display: block;
    overflow: auto;
    max-height: 4000px;
    margin: unset;
    margin-top: .25rem;
    float: unset;
  }

  aside img { max-width: 100%; }

  aside + p { margin-top: 1.25rem }

  .work-grid {
    column-count: 4;
    column-gap: 3.226%;
  }
}
</style>