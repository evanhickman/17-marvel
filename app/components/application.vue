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
        <main class="grid">
          <div v-if="series" class="grid__item">
            <div><img src="http://placehold.it/250/2c3e50" alt="" class="series__image"></div>
            <h3 class="series__name">Apocalypse (2004 - 2009)</h3>
            <p class="series__years">2004 - 2009</p>
            <h3 class="heading creators-heading">Creators</h3>
            <p class="series__creator">Tom Brennan</p>
            <p class="series__creator">George Clooney</p>
            <p class="series__creator">Meryl Streep</p>
            <p class="series__creator">Carly Rae Jepson</p>
          </div>
          <div class="grid__item get-bigger">
              <h2 class="heading">Characters</h2>
              <div class="grid thumbnail-grid">
                <div class="grid__item thumbnail-grid__item">
                  <div><img src="http://placehold.it/150/2c3e50" alt="" class="thumbnail"></div>
                  <h4 class="thumbnail__caption">Red Hulk</h4>
                </div>
                <div class="grid__item thumbnail-grid__item">
                  <div><img src="http://placehold.it/150/2c3e50" alt="" class="thumbnail"></div>
                  <h4 class="thumbnail__caption">Spider Girl</h4>
                </div>
                <div class="grid__item thumbnail-grid__item">
                  <div><img src="http://placehold.it/150/2c3e50" alt="" class="thumbnail"></div>
                  <h4 class="thumbnail__caption">Spider Boy</h4>
                </div>
                <div class="grid__item thumbnail-grid__item">
                  <div><img src="http://placehold.it/150/2c3e50" alt="" class="thumbnail"></div>
                  <h4 class="thumbnail__caption">Spider Man</h4>
                </div>
              </div>
              <h2 class="heading issues-heading">Issues</h2>
              <div class="grid thumbnail-grid">
                <div class="grid__item thumbnail-grid__item issue">
                  <div><img src="http://placehold.it/150/2c3e50" alt="" class="thumbnail"></div>
                  <h4 class="thumbnail__caption">#1</h4>
                  <p class="thumbnail__details">Spider Girl</p>
                  <p class="thumbnail__details">(2004)#1</p>
                  <button class="button" v-on:click="">Read More</button>
                </div>
                <div class="grid__item thumbnail-grid__item issue">
                  <div><img src="http://placehold.it/150/2c3e50" alt="" class="thumbnail"></div>
                  <h4 class="thumbnail__caption">#1</h4>
                  <p class="thumbnail__details">Spider Girl</p>
                  <p class="thumbnail__details">(2004)#1</p>
                  <button class="button" v-on:click="">Read More</button>
                </div>
                <div class="grid__item thumbnail-grid__item issue">
                  <div><img src="http://placehold.it/150/2c3e50" alt="" class="thumbnail"></div>
                  <h4 class="thumbnail__caption">#1</h4>
                  <p class="thumbnail__details">Spider Girl</p>
                  <p class="thumbnail__details">(2004)#1</p>
                  <button class="button" v-on:click="">Read More</button>
                </div>
                <div class="grid__item thumbnail-grid__item issue">
                  <div><img src="http://placehold.it/150/2c3e50" alt="" class="thumbnail"></div>
                  <h4 class="thumbnail__caption">#1</h4>
                  <p class="thumbnail__details">Spider Girl</p>
                  <p class="thumbnail__details">(2004)#1</p>
                  <button class="button" v-on:click="">Read More</button>
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
import store from '../store.js';
import { seriesInfoSearch } from '../actions.js';

export default {

  data() {
    return {
      series: this.$select('seriesInfo'),
      characters: this.$select('characterData'),
      comics: this.$select('comicData'),
    };
  },

  created() {
    store.dispatch(seriesInfoSearch());
  },


  methods: {

  },
};
</script>
