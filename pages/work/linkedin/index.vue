<template>
  <div>
    <WorkHeader title="LinkedIn"/>
    <main>
      <WorkGrid>
        <h2 class="step-2">Designing at scale</h2>
        <p class="step-0">I came to LinkedIn in 2014 through the Bizo acquisition and worked primarily on advertising products. I learned a lot and
          brought some Bizo goodness to LinkedIn's huge base of advertisers. After a couple years in design, I moved into engineering to improve my coding
          skills.
        </p>
        <p class="step-0">At LinkedIn I got to really become a front-end developer. I'll always be grateful to them for giving me the opportunity to make
          that transformation.
        </p>
        <p class="step-0">The biggest design (and organizational) challenge I faced was how to reconcile the Bizo and LinkedIn advertising platforms.
        </p>

        <div class="connector">
          <h2 class="step-1">Mad River</h2>
          <br/>

          <h4 class="step-0">Problem</h4>
          <p class="step-0">My team was continuing to build out the Bizo platform (re-skinned visually and rebranded as LinkedIn Lead Accelerator) while another
            product team was working on LinkedIn's Campaign Manager ad platform. Lead Accelerator was designed for sophisticated B2B marketers but most
            LinkedIn advertisers were more traditional, or too small to leverage it effectively. Campaign Manager was a self-service platform that anyone could
            sign up for, but had basic features and was struggling to keep up with our competition.
          </p>
        </div>

        <aside>
          <figure>
            <img alt="" width="960" height="606" src="/images/linkedin/960/960-linkedin-lla.png"/>
            <figcaption class="step--1">LinkedIn Lead Accelerator reporting</figcaption>
          </figure>
        </aside>

        <p class="step-0">The two teams had different roadmaps, but began to leverage each other's features. As the lines between products began to blur there
          was a lot of organizational tension. These circumstances created an opportunity to bring the best technology and analytics from Lead Accelerator to
          a mass-market platform built on the Campaign Manager base. I started working on a design strategy for a unified advertising platform. We liked to
          have codenames for our projects at LinkedIn. I called this one Mad River.
        </p>
        <h4 class="step-0">Approach</h4>
        <p class="step-0">I gathered data from product marketing and business analytics to support the case and worked with the other two advertising product
          designers to create our vision. We drew on our past user research and the assets in LinkedIn's ecosystem to broaden our concept of what the unified
          platform could be.
        </p>
        <aside>
          <figure>
            <img alt="" width="960" height="660" src="/images/linkedin/960/960-linkedin-flow.png"/>
            <figcaption class="step--1">Notes thinking through an objective-based campaign flow</figcaption>
          </figure>
        </aside>
        <p class="step-0">We talked to a couple other LinkedIn design teams that had used design sprints for ideation, and we thought the process made sense
          for us even though we had a pretty good idea of what we wanted to build. We just needed time to develop it.
        </p>
        <aside>
          <figure>
            <img alt="" width="960" height="713" src="/images/linkedin/960/960-linkedin-wireframe.png"/>
            <figcaption class="step--1">Wireframe from campaign creation flow</figcaption>
          </figure>
        </aside>
        <p class="step-0">Our one-week design sprint included one full day of user research and daily check-ins with product and engineering.
        </p>
        <div class="connector">
          <h4 class="step-0">Solution</h4>
          <p class="step-0">We crafted a vision of an advertising platform that tailored campaigns to a marketer's goals, optimized for their key metrics, and
            included advanced features like account-based marketing. We presented our designs, the business case, and research findings to LinkedIn's design
            leadership and our product leadership.
          </p>
        </div>
        <aside>
          <figure>
            <img alt="" width="960" height="640" src="/images/linkedin/960/960-linkedin-final-mock.png"/>
            <figcaption class="step--1">A conceptual mock from the strategy deck</figcaption>
          </figure>
        </aside>
        <p class="step-0">Our head of product endorsed the vision, and we were soon merging the two organizations and working on a joint roadmap! It was sad
          to give up on Lead Accelerator but I'm proud of the impact we made setting our department on the right path.
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
      title: 'LinkedIn'
    };
  }
}
</script>