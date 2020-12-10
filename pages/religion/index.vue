<template>
  <GamingArticle>
    <section>
      <div class="content">
        <h1>Religion</h1>
        <p>Gods exist, but the gods are more interested in their own affairs than in influencing mortals or seeking their worship. Gods are the central figures in many legends and fables, and these stories are often found in religious teachings. The true faith of any religion is gleaned from the collected works of its saints, a title bestowed upon the most important theologians, and almost always posthumously.</p>
        <p>Every religion's tenets are subject to interpretation, whether for good or evil. For this reason religions don't have innate alignments, and clerics may be of any alignment regardless of their religion.</p>
      </div>
    </section>
    <section>
      <div id="hands" class="image">
        <img alt="cupped hands" src="images/gaming/hands.svg"/>
      </div>
      <div class="content">
        <h2>Concinnism</h2>
        <p><strong>Domains:</strong> Charm, Community, Healing, Nobility, Protection</p>
        <p><strong>Beliefs:</strong> Humans aren't meant to survive alone. The meaning of life is found when one finds their place in their community. Only through our relations with others can we come to know ourselves.</p>
        <p><strong>Favored Weapon:</strong> Glaive</p>
        <p><strong>Communities:</strong> Duskgrove</p>
      </div>
    </section>
    <section>
      <div id="gear" class="image">
        <img alt="gear icon" src="images/gaming/gear.svg"/>
      </div>
      <div class="content">
        <h2>Daedalism</h2>
        <p><strong>Domains:</strong> Artifice, Knowledge, Magic, Rune</p>
        <p><strong>Beliefs:</strong> Through acts of study, experimentation, and creation, a brilliant mind can transform our world. This is the true strength of mankind and the key to our future.</p>
        <p><strong>Favored Weapon:</strong> Warhammer</p>
        <p><strong>Sites:</strong> Ruined Sanctum</p>
      </div>
    </section>
    <section>
      <div id="wing" class="image">
        <img alt="wing icon" src="images/gaming/wing.svg"/>
      </div>
      <div class="content">
        <h2>Legeritism</h2>
        <p><strong>Domains:</strong> Glory, Liberation, Luck, Strength, Travel</p>
        <p><strong>Beliefs:</strong> All you control are your own thoughts and actions. You can see the paths laid out before you. Follow your heart. Choose the future you want for yourself and create it, because no one else will.</p>
        <p><strong>Favored Weapon:</strong> Battleaxe</p>
        <p><strong>Communities:</strong> Stillharbor</p>
        <p><strong>Followers:</strong> Bishop Heahmund</p>
      </div>
    </section>
    <section>
      <div id="hourglass" class="image">
        <img alt="hourglass icon" src="images/gaming/hourglass.svg"/>
      </div>
      <div class="content">
        <h2>Nullianity</h2>
        <p><strong>Domains:</strong> Darkness, Erosion, Madness, Ruins, Void</p>
        <p><strong>Beliefs:</strong> Just as our lives will end and be forgotten, so will the history of our civilization, our race, and our world. Perhaps soon. We will not delude ourselves, we will face the end with equanimity.</p>
        <p><strong>Favored Weapon:</strong> Ranseur</p>
        <p><strong>Sites:</strong> Ruined Sanctum, Lost Town, Sky Tempest Temple</p>
      </div>
    </section>
    <section>
      <div id="sun" class="image">
        <img alt="sun icon" src="images/gaming/sun.svg"/>
      </div>
      <div class="content">
        <h2>Sempiternalism</h2>
        <p><strong>Domains:</strong> Animal, Plant, Sun, Weather, Vermin</p>
        <p><strong>Beliefs:</strong> Our ego says that this world was made for us, but we are merely one small part of it. For all our might, our peoples depend on the natural world to meet our every need.</p>
        <p><strong>Favored Weapon:</strong> Scythe</p>
      </div>
    </section>
  </GamingArticle>
</template>

<script>
import GamingArticle from '~/components/GamingArticle';

export default {
  components: {
    GamingArticle
  },
  layout: 'blank',
  head() {
    return {
      title: 'Religion',
      link: [
        {
          hid: 'fonts',
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Grenze:500|Ubuntu+Mono:400,700&display=swap'
        }
      ]
    };
  }
}
</script>

<style scoped>
#gear img {
  margin-top: 0;
}

#wing img {
  margin-top: -.25rem;
}

#sun img {
  margin-top: -.25rem;
}

#hourglass img, #hands img {
  max-width: 2rem;
  margin-left: .25rem;
}

@media screen and (min-width:600px) {
  #hourglass img, #hands img {
    max-width: 4rem;
    margin-left: .5rem;
  }
}
</style>