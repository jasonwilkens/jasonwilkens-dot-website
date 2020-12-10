<template>
  <div>
    <WorkHeader title="Esurance"/>
    <main>
      <WorkGrid>
        <h2 class="step-2">Hitting the big time</h2>
        <p class="step-0">Moving out to San Francisco in 2010 and designing for Esurance was a big step in my career. I learned about e-commerce working on
          the insurance quoting and purchasing experience. Any change I made could affect the bottom line, so the impact of every design change was closely
          analyzed.
        </p>
        <p class="step-0">I learned a lot about how insurance works, and that customers often don't know how much coverage they need. We developed a tool to
          suggest an appropriate amount of coverage based on their risk factors and the assets they needed to protect.
        </p>
        <aside>
          <figure>
            <img alt="" width="960" height="895" src="/images/esurance/960/960-esurance-start.png"/>
            <figcaption class="step--1">Coverage Counselor start page</figcaption>
          </figure>
        </aside>
        <p class="step-0">This was the only product I've ever built that had a national advertising campaign based around it. I distinctly remember going
          to see a movie with my parents where <a href="https://youtu.be/xoMDVE2e_CU" target="_blank" rel="noopener">an ad promoting Coverage Counselor</a> played during the
          previews.
        </p>
        <div class="connector">
          <h2 class="step-1">Coverage Counselor</h2>
          <br/>
          <h4 class="step-0">Problem</h4>
          <p class="step-0">Car insurance customers are very focused on price, sometimes too focused. If you purchase a policy with the lowest limits available
            and cause an accident that puts someone in the hospital, you could use up your insurance quickly and be on the hook for the rest.
          </p>
        </div>
        <aside>
          <figure>
            <img alt="" width="960" height="720" src="/images/esurance/960/960-esurance-sxsw-2.png"/>
            <figcaption class="step--1">A demo of Coverage Counselor at the Esurance SXSW booth</figcaption>
          </figure>
        </aside>
        <p class="step-0">I led the creation of a tool that provides better information so that people can shop from a perspective of protecting themselves and
          others, instead of solely focusing on saving money.
        </p>
        <div class="connector">
          <h4 class="step-0">Approach</h4>
          <p class="step-0">The key to the success of this project was getting a great team together. I was lucky to get a great writer, visual designer, and
            front-end developer to work with me while I focused on the product management and UX design.
          </p>
        </div>
        <p class="step-0">One of the biggest hurdles was the regulatory and legal implications of the project. As an insurance company we couldn't recommend
          specific coverage to customers, so we needed to structure the app as an educational experience guided by customer actions.
        </p>
        <aside>
          <figure>
            <img alt="" width="960" height="640" src="/images/esurance/960/960-esurance-cover.png"/>
            <figcaption class="step--1">Cover page for liability section</figcaption>
          </figure>
        </aside>
        <p class="step-0">We did in-person user research to test and refine our designs. One finding was that our experience seemed a little overwhelming, so
          we added introductory steps before each set of questions to center the user's expectations and introduce the next part of the experience.
        </p>
        <div class="connector">
          <h4 class="step-0">Solution</h4>
          <p class="step-0">The experience walks you through the main types of coverage (liability, vehicle, etc) and as you answer questions, it explains how
            that coverage works and shows personalized suggestions that might be appropriate.
          </p>
        </div>
        <aside>
          <figure>
            <img alt="" width="960" height="640" src="/images/esurance/960/960-esurance-questions.png"/>
            <figcaption class="step--1">Question and suggestion format</figcaption>
          </figure>
        </aside>
        <p class="step-0">When you have a personalized list of suggestions, we made it easy talk to an agent or purchase that coverage online. You can also
          email or print your suggestions so you can shop with them elsewhere.
        </p>
        <p class="step-0">Customers who went through the Coverage Counselor experience purchased higher levels of coverage. The tool was also a first of its
          kind in the space, so we were able to highlight it in our marketing efforts.
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
      title: 'Esurance'
    };
  }
}
</script>
</style>