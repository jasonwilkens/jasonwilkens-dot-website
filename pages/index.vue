<template>
  <div id="home">
    <header>
      <div class="grid">
        <div class="col1">
          <h1 class="step-5">Hey, it&#8217;s Jason</h1>
        </div>
      </div>
    </header>
    <main>
      <article class="grid">
        <div class="col1">
          <Photo />
          <About :position="'about-first'" :here="here" />
          <section class="work">
            <h2 class="step-0">Work</h2>
            <ul class="step-1">
              <li>I am a designer who codes, or design technologist. I manage a team of designer/developers at
                <a target="_blank" href="https://indeed.design/" rel="noopener">Indeed</a>.
              </li>
              <li>I've put together a few notes on <n-link to="/work">my work</n-link> over the years.</li>
            </ul>
            <div class="work-screenshots">
              <n-link to="/work/indeed">
                <span class="visually-hidden">Indeed</span>
                <img alt="Japan job search screenshot" class="screenshot" height="324" width="486" src="/images/indeed/486/486-indeed-japan-search.png"/>
              </n-link>
              <n-link to="/work/linkedin">
                <span class="visually-hidden">LinkedIn</span>
                <img alt="Mad River project screenshot" class="screenshot" height="324" width="486" src="/images/linkedin/486/486-linkedin-final-mock.png"/>
              </n-link>
              <n-link to="/work/bizo">
                <span class="visually-hidden">Bizo</span>
                <img alt="Marketing platform screenshot" class="screenshot" height="324" width="486" src="/images/bizo/486/486-bizo-dashboard.png"/>
              </n-link>
              <n-link to="/work/esurance">
                <span class="visually-hidden">Esurance</span>
                <img alt="Coverage Counselor screenshot" class="screenshot" height="324" width="486" src="/images/esurance/486/486-esurance-start.png"/>
              </n-link>
            </div>
          </section>
          <HowItsMade :position="'him-first'" />
        </div>
        <div class="col2">
          <div class="col2-1">
            <About :position="'about-second'" :here="here" />
            <Articles :articles="articleData" />
          </div>
          <div class="col2-2">
            <Tweets :tweets="tweetData" />
            <HowItsMade :position="'him-second'" />
          </div>
        </div>
      </article>
    </main>
  </div>
</template>

<script>
import About from '~/components/About';
import Articles from '~/components/Articles';
import HowItsMade from '~/components/HowItsMade';
import Photo from '~/components/Photo';
import Tweets from '~/components/Tweets';

import articleData from '~/data/articles.json';
import tweetData from '~/data/tweets.json';

const axios = require("axios");

export default {
  components: {
    About,
    Articles,
    HowItsMade,
    Photo,
    Tweets
  },
  data() {
    return {
      here: null
    };
  },
  asyncData() {
    return {
      articleData,
      tweetData
    };
  },
  created() {
    axios.get("/here").then(response => {
      this.here = response.data.observations.location[0].observation[0];
    });
  },
  head() {
    return {
      title: 'Hey, it\'s Jason'
    };
  }
};
</script>

<style>
/* Screenshots */

.work-screenshots {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.5rem;
  row-gap: 1.5rem;
}

.work-screenshots a {
  background-color: unset;
  border: .25rem solid var(--clr-highlight);
  border-radius: .75rem;
  padding: .375rem;
  transition: border-color ease-in-out 300ms;
}

.screenshot {
  display: block;
  width: 100%;
  border-radius: .25rem;
  transition: filter 200ms ease-in-out, border-color 200ms ease-in-out;
}

.work-screenshots a:hover,
.work-screenshots a:focus { border-color: var(--base-clr-accent); }

.work-screenshots a:hover .screenshot,
.work-screenshots a:focus .screenshot { filter: none; }

* + .work-screenshots { margin-top: 2em; }

/* Typography */

li p, li blockquote { margin: .5em 0 0; }

li cite, cite a {
  font-weight: var(--heading-weight);
  white-space: nowrap;
  font-style: normal;
}

.articles ul, .tweets ul {
  list-style: none;
  padding: 0;
}

blockquote span.openq, blockquote span.closeq {
  user-select: none;
  font-size: 3em;
}

blockquote span.openq {
  float: left;
  line-height: 1em;
  margin-bottom: -.75em;
  margin-left: -.05em;
  padding-right: .25rem;
}

blockquote span.closeq {
  position: relative;
  line-height: 0em;
  margin-left: .125rem;
  vertical-align: bottom;
  bottom: -.04em;
}

li img {
  margin-top: -.15em;
  margin-right: .25em;
  max-width: 1.2em;
  vertical-align: middle;
}

/* Vertical rhythm */

h2 + ul, h2 + p { margin: 0; }

.articles li + li, .tweets li + li { margin-top: 1.5em; }

.card li + li { margin-top: .5em; }

header + .grid, .col1 { margin-top: 0; }

.photo-frame + * { margin-top: 2em; }

/* Responsive content placement, only use this for small pieces */

#about-second, #him-first { display: none; }

/* Adjust screenshot styles for non-mobile */

@media screen and (min-width: 600px) {
  .work-screenshots {
    display: flex;
    grid-template-columns: unset;
    column-gap: unset;
    justify-content: space-between;
    align-items: center;
  }

  .work-screenshots a {
    max-width: 22%;
    flex: 1 1 0;
  }

  .screenshot { filter: grayscale(20%) brightness(95%); }
}

/* Add Grid - 25 portions (11 portion main column, 9 portion sidebar column, 2 on each side, 1 in middle) */

@media screen and (min-width: 1150px) {
  #home header { padding: unset; }

  #home main {
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
  }

  .grid {
    display: flex;
    justify-content: space-between;
    padding: 0 8%;
  }

  .col1 { width: 52.38%; }

  .col2 { width: 42.86%; }

  main .photo-frame, .col2 .articles h2 { margin-top: 1vw; }

  h1, .col2, .articles { margin-top: 0; }

  .photo-frame { text-align: right; }

  .work, .tweets, .how-its-made { border-top: .25rem solid var(--clr-foreground); }

  #him-first { display: inline-block; }

  #him-second { display: none; }
}

/* Grid - As above but adding another 9 portion column and 1 portion gap column, 35 total */

@media screen and (min-width: 2200px) {
  .col1 { width: 35.48%; }

  .col2 {
    width: 61.29%;
    display: flex;
    justify-content: space-between;
  }

  .col2-1, .col2-2 { width: 47.37%; }

  .col2-2 { margin-top: 0; }

  main .photo-frame, .col2 .articles h2 { margin-top: .5vw; }

  .work, .tweets { border-top: none; }

  .work { margin-top: 2em; }

  .articles {
    border-top: .25rem solid var(--clr-foreground);
    margin-top: 4em;
  }

  #about-first, #him-first { display: none; }

  #about-second { display: block; }

  #him-second { display: inline-block; }
}
</style>
