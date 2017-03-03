<template lang="html">
  <div class="app">
    <div class="section header">
      <div class="container">
        <nav class="top-nav">
            <a href="#"><h1 class="top-nav__logo">Marvel</h1></a>
        </nav>
      </div>
    </div>
    <div class="section content">
      <div class="container">
        <main class="grid series">
          <div class="grid__item series__details">
            <!-- stuff on the left -->
            <div><img src="http://placehold.it/200/2c3e50" alt="" class="series__details-image"></div>
            <h3 class="series__details-name">Apocalypse (2004 - 2009)</h3>
            <p class="series__details-years">(2004 - 2009)</p>
            <h3 class="series__details-creators-heading">Creators</h3>
            <p class="series__details-creator">Tom Brennan</p>
            <p class="series__details-creator">George Clooney</p>
            <p class="series__details-creator">Meryl Streep</p>
            <p class="series__details-creator">Carly Rae Jepson</p>
          </div>
          <div class="grid__item series__content">
            <!-- stuff on right -->
            <div class="characters">
              <h2 class="character__heading">Characters</h2>
              <div class="grid characters__grid">
              <div class="grid__item character">
                <div><img src="http://placehold.it/100/2c3e50" alt="" class="character__img"></div>
                <h4 class="character__name">Red Hulk</h4>
              </div>
              <div class="grid__item character">
                <div><img src="http://placehold.it/100/2c3e50" alt="" class="character__img"></div>
                <h4 class="character__name">Spider Girl</h4>
              </div>
              <div class="grid__item character">
                <div><img src="http://placehold.it/100/2c3e50" alt="" class="character__img"></div>
                <h4 class="character__name">Spider Boy</h4>
              </div>
              <div class="grid__item character">
                <div><img src="http://placehold.it/100/2c3e50" alt="" class="character__img"></div>
                <h4 class="character__name">Spider Man</h4>
              </div>
            </div>
            <div class="issues">
              <h2 class="issues__heading">Issues</h2>
              <div class="grid issues__grid">
                <div class="grid__item issue">
                  <div><img src="http://placehold.it/100/2c3e50" alt="" class="issue_img"></div>
                  <h4 class="issue__number">#1</h4>
                  <p class="issue__details">Spider Girl</p>
                  <p class="issue__details">(2004)#1</p>
                  <button v-on:click="">Read More</button>
                </div>
                <div class="grid__item issue">
                  <div><img src="http://placehold.it/100/2c3e50" alt="" class="issue_img"></div>
                  <h4 class="issue__number">#1</h4>
                  <p class="issue__details">Spider Girl</p>
                  <p class="issue__details">(2004)#1</p>
                  <button v-on:click="">Read More</button>
                </div>
                <div class="grid__item issue">
                  <div><img src="http://placehold.it/100/2c3e50" alt="" class="issue_img"></div>
                  <h4 class="issue__number">#1</h4>
                  <p class="issue__details">Spider Girl</p>
                  <p class="issue__details">(2004)#1</p>
                  <button v-on:click="">Read More</button>
                </div>
                <div class="grid__item issue">
                  <div><img src="http://placehold.it/100/2c3e50" alt="" class="issue_img"></div>
                  <h4 class="issue__number">#1</h4>
                  <p class="issue__details">Spider Girl</p>
                  <p class="issue__details">(2004)#1</p>
                  <button v-on:click="">Read More</button>
                </div>
              </div>
            </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {

  },
};
</script>
