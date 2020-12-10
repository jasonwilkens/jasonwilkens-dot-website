<template>
  <div class="photo-frame">
    <figure>
      <img
        alt=""
        sizes="(min-width: 2200px) 35vw,
               (min-width: 1150px) 52vw,
               (min-width: 530px) 31.125rem,
               100%"
        srcset="/images/jasonandglo-1800w.jpg 1800w,
                /images/jasonandglo-1600w.jpg 1600w,
                /images/jasonandglo-1400w.jpg 1400w,
                /images/jasonandglo-1200w.jpg 1200w,
                /images/jasonandglo-1000w.jpg 1000w,
                /images/jasonandglo-800w.jpg 800w"
        src="/images/jasonandglo-1200w.jpg"
        height="900"
        width="1200"
      />
      <figcaption class="step--1"><span>Having fun</span></figcaption>
    </figure>
  </div>
</template>

<style>
.photo-frame {
  margin-top: 1em;
  max-width: 100%;
}

.photo-frame img { width: 100%; }

.photo-frame figcaption {
  position: relative;
  margin: 0;
  top: -1.9em;
}

.photo-frame figcaption span {
  background-color: var(--clr-background);
  padding: .125em .5em;
  font-weight: var(--body-weight);
}

figure {
  margin: 0;
  line-height: 1.6;
}

@media screen and (min-width: 530px) {
  img { max-width: 31.125rem; }
}

@media screen and (min-width: 1150px) {
  img { max-width: unset; }
}
</style>