<template>
  <div>
    <header>
      <nav class="step-1">
        <router-link to="/">Home</router-link>
        /
      </nav>
      <h1 class="step-1">Work</h1>
    </header>
    <main>
      <article class="step-0">
        <section id="indeed">
          <router-link to="/work/indeed">
            <div class="preview-wrapper">
              <IndeedLogo/>
              <p>2018 - Now</p>
              <div class="image-wrapper">
                <img alt="Japan job search screenshot" class="preview-image" height="512" width="768" src="/images/indeed/768/768-indeed-japan-search.png"/>
              </div>
            </div>
          </router-link>
        </section>
        <section id="linkedin">
          <router-link to="/work/linkedin">
            <div class="preview-wrapper">
              <LinkedInLogo/>
              <p>2014 - 2018</p>
              <div class="image-wrapper">
                <img alt="Mad River project screenshot" class="preview-image" height="512" width="768" src="/images/linkedin/768/768-linkedin-final-mock.png"/>
              </div>
            </div>
          </router-link>
        </section>
        <section id="bizo">
          <router-link to="/work/bizo">
            <div class="preview-wrapper">
              <BizoLogo/>
              <p>2012 - 2014</p>
              <div class="image-wrapper">
                <img alt="Marketing platform screenshot" class="preview-image" height="512" width="768" src="/images/bizo/768/768-bizo-dashboard.png"/>
              </div>
            </div>
          </router-link>
        </section>
        <section id="esurance">
          <router-link to="/work/esurance">
            <div class="preview-wrapper">
              <EsuranceLogo/>
              <p>2010 - 2012</p>
              <div class="image-wrapper">
                <img alt="Coverage Counselor screenshot" class="preview-image" height="512" width="768" src="/images/esurance/768/768-esurance-start.png"/>
              </div>
            </div>
          </router-link>
        </section>
      </article>
    </main>
  </div>
</template>

<script>
import BizoLogo from '~/components/logos/Bizo';
import EsuranceLogo from '~/components/logos/Esurance';
import IndeedLogo from '~/components/logos/Indeed';
import LinkedInLogo from '~/components/logos/LinkedIn';

export default {
  components: {
    BizoLogo,
    EsuranceLogo,
    IndeedLogo,
    LinkedInLogo
  },
  head() {
    return {
      title: 'Work'
    };
  }
}
</script>

<style scoped>
main { padding-top: 8rem; }

article {
  display: grid;
  position: relative;
  grid-template-columns: 1fr;
  row-gap: 6rem;
  --decorative-gradient: repeating-linear-gradient(
    45deg,
    var(--clr-background),
    var(--clr-background) 1rem,
    var(--clr-highlight) 1rem,
    var(--clr-highlight) 1.25rem
  );
}

article > section {
  margin-top: 0;
  padding: 0 .5rem;
  text-align: center;
}

p {
  margin: 1rem .5rem;
  line-height: 1.8rem;
  max-width: unset;
  text-align: right;
  color: var(--clr-foreground);
}

.preview-image {
  display: block;
  margin: auto;
  width: 100%;
  max-width: 24rem;
  border-radius: .5rem;
}

.image-wrapper {
  margin-top: 0;
  border: .25rem solid var(--clr-highlight);
  padding: .375rem;
  border-radius: 1rem;
  transition: border-color ease-in-out 300ms;
}

.preview-wrapper {
  display: inline-block;
  position: relative;
  margin: auto;
}

.preview-wrapper svg {
  position: absolute;
  max-height: 4rem;
  top: -.15em;
  left: .5rem;
}

section[id] a { background-color: unset; }

section[id] a:hover .image-wrapper,
section[id] a:focus .image-wrapper { border-color: var(--base-clr-accent); }

section[id] p::before {
  position: relative;
  content: '';
  display: inline-block;
  opacity: 0;
  top: -.2em;
  left: -.25em;
  min-width: .375rem;
  min-height: .375rem;
  border-radius: 50%;
  background-color: var(--base-clr-accent);
  transition: opacity 500ms;
}

section[id] a:hover p::before,
section[id] a:focus p::before { opacity: 1; }

article::before, article::after {
  position: absolute;
  background: var(--decorative-gradient);
  z-index: -1;
}

article::before {
  content: '';
  min-height: 3rem;
  top: -7.5rem;
  left: 0;
  right: 2rem;
}

@media screen and (min-width: 500px) {
  article::before {
    min-width: 25.25rem;
    left: 50%;
    transform: translateX(-50%);
  }
}

@media screen and (min-width: 850px) {
  article::before, article::after {
    min-width: 3rem;
    min-height: 100%;
  }

  article::before {
    top: 0;
    left: 0;
    right: unset;
    transform: unset;
  }

  article::after {
    content: '';
    top: 0;
    left: unset;
    right: 0;
  }
}

/* Columns */
@media screen and (min-width: 1100px) {
  main { padding-top: 6rem; }

  article {
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
  }

  article::before, article::after {
    content: unset;
  }
}

@media screen and (min-width: 2000px) {
  main { padding-top: unset; }

  article {
    margin-top: calc(50vh - 16rem);
    display: flex;
    grid-template-columns: unset;
    justify-content: space-between;
    align-items: center;
  }

  article::before, article::after {
    content: '';
    min-height: 8rem;
    min-width: 100%;
  }

  article::before {
    top: 36vh;
    left: 0;
  }

  article::after {
    top: unset;
    bottom: 36vh;
    left: 0;
  }

  article > section { max-width: 24rem; }
}
</style>
