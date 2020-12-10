<template>
  <div>
    <WorkHeader title="Bizo"/>
    <main>
      <WorkGrid>
        <h2 class="step-2">Department of one</h2>
        <p class="step-0">I joined Bizo in 2012 as the 75th employee, and first UX designer. When I interviewed I could tell it was a special place.
          Joining was the best decision of my career.
        </p>
        <p class="step-0">We were rapidly developing new products, trying new things to find product/market fit. Everything was designed in Bootstrap,
          which I customized to some extent, but overall the products had a very spartan feel. Visual design in the product wasn't a high priority.
        </p>
        <aside>
          <figure>
            <img alt="" width="960" height="640" src="/images/bizo/960/960-bizo-dashboard.png"/>
            <figcaption class="step--1">Bizo marketing platform</figcaption>
          </figure>
        </aside>
        <p class="step-0">I designed 4-5 different products. The one that finally succeeded was built with features and lessons learned from earlier
          offerings.
        </p>
        <div class="connector">
          <h2 class="step-1">Multichannel Nurturing</h2>
          <br/>
          <h4 class="step-0">Problem</h4>
          <p class="step-0">The Marketing Automation product we built allowed marketers to sync display ads with their automated email campaigns in
            Eloqua and Marketo. That was all well and good, but our product was really just an add-on for those other systems, and subject to their
            limitations.
          </p>
        </div>
        <aside>
          <figure>
            <img alt="" width="960" height="708" src="/images/bizo/960/960-bizo-reporting-sketch.png"/>
            <figcaption class="step--1">Paper prototype for new reporting interface</figcaption>
          </figure>
        </aside>
        <p class="step-0">Our heads of Product and Engineering asked me to explore the possibility of creating our own marketing automation system centered on
          display advertising, that would allow a customer to pull in audiences from their website as well as systems like Eloqua and Marketo. Then they
          could configure and run those campaigns directly in our platform.
        </p>
        <div class="connector">
          <h4 class="step-0">Approach</h4>
          <p class="step-0">I started by learning how to use other marketing automation systems. These systems are inherently complex. They involve setting
            automated email messages based on a recipient's inclusion in certain lists, the amount of time that has gone by, and certain actions they've taken.
          </p>
        </div>
        <p class="step-0">I examined the key differences between the mediums of email and display ads, and how they shaped the underlying constraints
          of the product. You need to be very careful with the amount of emails you send, so email campaigns need wait steps between sending the next email,
          and they should only send the single most important message a recipient is eligible for. Display ads are more flexible, you can try different marketing messages on your
          prospects at the same time, and you want to reach your target customers more frequently.
        </p>
        <div class="connector">
          <h4 class="step-0">Solution</h4>
          <p class="step-0">A key insight was that our system should still be loosely based on a marketing paradigm of &ldquo;campaigns&rdquo; but those
            campaigns would have two defining features inspired by marketing automation. The first is the ability to create sophisticated audience targeting
            by combining Bizo demographic data, external audiences like website retargeting pools and email lists, and customer behavior. The second is that
            the campaign could serve a sequence of messages to educate and persuade the audience over time toward the customer's goals.
          </p>
        </div>
        <aside>
          <figure>
            <img alt="" width="960" height="667" src="/images/bizo/960/960-bizo-performance.png"/>
            <figcaption class="step--1">Reporting concept</figcaption>
          </figure>
        </aside>
        <p class="step-0">With this concept in mind, I created the first mocks of the campaign flow and reporting UIs. There was an important meeting the
          next day and I was so inspired that I stayed up all night to get the idea ready to present. It was obvious we were onto something when every
          person who saw it jumped straight to &ldquo;Yes, and we should also add&hellip;&rdquo; instead of the usual objections a new product idea faces.
        </p>
        <p class="step-0">With the team on board, we built the MVP and started getting traction and customer success. This product had a big impact on our
          business not just from the revenue it produced, but by leading to
          <a href="https://adexchanger.com/social-media/linkedin-q2-revenue-soars-says-bizo-will-anchor-b2b-marketing-tools/" target="_blank" rel="noopener">Bizo's
          acquisition by LinkedIn</a>.
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
      title: 'Bizo'
    };
  }
}
</script>