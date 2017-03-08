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
          <div v-if="seriesInfo" class="grid__item">
              <div class="box"><img :src="`${seriesInfo.thumbnail.path}.${seriesInfo.thumbnail.extension}`" alt="" class="series__image"></div>
            <h3 class="series__name">{{ seriesInfo.title }}</h3>
            <p class="series__years">{{ seriesInfo.startYear }} - {{ seriesInfo.endYear }}</p>
            <h3 class="heading creators-heading">Creators</h3>
            <p class="series__creator">{{seriesInfo.creators.items[0].name}}</p>
            <p class="series__creator">{{seriesInfo.creators.items[1].name}}</p>
            <p class="series__creator">{{seriesInfo.creators.items[2].name}}</p>
            <p class="series__creator">{{seriesInfo.creators.items[3].name}}</p>
          </div>
          <div class="grid__item get-bigger">
            <h2 class="heading">Characters</h2>
            <div class="grid thumbnail-grid">
              <character-item v-for="character in characterData"
                v-bind:character="character" class="grid__item thumbnail-grid__item"></character-item>
            </div>
              <h2 class="heading issues-heading">Issues</h2>
              <div class="grid thumbnail-grid">
                <issue-item v-for="issue in issueData"
                v-bind:issue="issue" v-on:toggle="showModal" class="grid__item thumbnail-grid__item">
                </issue-item>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div class="modal_open" tabindex="0" v-on:keyup.esc="closeModal" v-if="modal">
          <div class="modal">
            <div class="container">
              <div class="card">
                <button class="close" v-on:click="closeModal">Close</button>
                <h2>{{modal.description}}</h2>
              </div>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
import store from '../store.js';
import { seriesInfoSearch, modalSet, modalClear } from '../actions.js';

import CharacterItem from './character-item.vue';
import IssueItem from './issue-item.vue';

export default {
  components: {
    CharacterItem,
    IssueItem,
  },
  data() {
    return {
      seriesInfo: this.$select('seriesInfo'),
      characterData: this.$select('characterData'),
      issueData: this.$select('issueData'),
      modal: this.$select('modal'),
    };
  },

  created() {
    store.dispatch(seriesInfoSearch('Hulk'));
  },


  methods: {
    showModal(info) {
      store.dispatch(modalSet(info));
    },

    closeModal() {
      store.dispatch(modalClear());
    }
  },
};
</script>
