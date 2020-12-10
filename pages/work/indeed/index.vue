<template>
  <div>
    <WorkHeader title="Indeed"/>
    <main>
      <WorkGrid>
        <h2 class="step-2">Design engineering</h2>
        <p class="step-0">I came to Indeed because I was excited about how their design organization was being built. They were hiring for the type of
          position I really wanted &mdash; a role that involved designing and developing to generate and validate new ideas.
        </p>
        <p class="step-0">As a <a href="https://medium.com/indeed-design/what-is-a-design-technologist-6431531f0d48" target="_blank" rel="noopener">design
          technologist</a> I worked with teams around the country and in Japan to build research prototypes and brand new UIs for greenfield projects.
        </p>
        <div class="connector">
          <h3 class="step-1">Experiments</h3>
          <p class="step-0">Indeed is a data-driven company. The impact of everything we launch is closely scrutinized in our business metrics.
          </p>
        </div>
        <aside>
          <figure>
            <img alt="" width="960" height="502" src="/images/indeed/960/960-indeed-allocations.png"/>
            <figcaption class="step--1">Setting audience allocations for an experiment</figcaption>
          </figure>
        </aside>
        <p class="step-0">To track all this data, we use several purpose-built internal tools. For the most part, the user experience of these tools
          was an afterthought. I worked with our User Insights team to create a brand new tool that tied all our experiment tracking data and management
          functionality together in a more approachable experience.
        </p>
        <p class="step-0">I worked with a UX designer and a researcher who delved into discovering the pains points of our customers (internal product
          managers and decision-makers). I was able to use code to bring responsiveness to the design, animation to guide the user through the
          experience, and help engineering migrate my UI code into production.
        </p>
        <aside>
          <figure>
            <img alt="" width="960" height="737" src="/images/indeed/960/960-indeed-experiments.png"/>
            <figcaption class="step--1">Comparing one UI test variant to the control</figcaption>
          </figure>
        </aside>
        <p class="step-0">We also prototyped features that would show the visual changes between experiment variants alongside the data, to help people
          make more informed decisions about changes in Indeed's user interface.
        </p>
        <div class="connector">
          <h3 class="step-1">Job search Japan</h3>
          <p class="step-0">Japan is the second biggest job market after the U.S., but it's very hard to break into due to Japan-specific hiring practices
            and job seeker expectations.
          </p>
        </div>
        <aside>
          <figure>
            <img alt="" width="960" height="640" src="/images/indeed/960/960-indeed-japan-search.png"/>
            <figcaption class="step--1">Screens from the Japan-specific job search prototype</figcaption>
          </figure>
        </aside>
        <p class="step-0">I prepared a Japan-specific mobile design for user research for our dedicated Japan product team. It was a great chance to
          learn about Japanese job seekers and the design sensibility of web products in Japan.
        </p>
        <div class="connector">
          <h3 class="step-1">Design system</h3>
          <p class="step-0">I joined the design system team to improve and extend Indeed's component library. From developer feedback we saw the need
            for a more modern, flexible, and composable design system.
          </p>
        </div>
        <aside>
          <figure>
            <img alt="" width="960" height="641" src="/images/indeed/960/960-indeed-dsw.png"/>
            <figcaption class="step--1">The design system website</figcaption>
          </figure>
        </aside>
        <p class="step-0">I helped the team explore options for development, particularly around the
          possibility of supporting both existing Indeed brand language and a new brand that was being developed around the same time.
        </p>
        <div class="connector">
          <h3 class="step-1">Enterprise</h3>
          <p class="step-0">After a couple years I became the manager for design engineering in the Enterprise division. I'm leading our division's effort
            to comply with the WCAG 2.1 AA accessibility standard, promoting adoption of the new design system and brand language, and helping design
            technologists and UX developers do their best work.
          </p>
        </div>
        <p class="step-0">
        </p>
        <p class="step-0">
        </p>

        <p class="step-0">
        </p>
        <p class="step-0">
        </p>
        <p class="step-0">
        </p>
      </WorkGrid>
    </main>
  </div>
</template>

<script>
import WorkGrid from '~/components/WorkGrid';
import WorkHeader from '~/components/WorkHeader';

export default {
  components: {
    WorkGrid,
    WorkHeader
  },
  head() {
    return {
      title: 'Indeed'
    };
  }
}
</script>