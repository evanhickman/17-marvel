<template lang="html">
  <div class="">
    <div v-if="characterData" class="grid thumbnail-grid">
      <div class="grid__item thumbnail-grid__item">
        <div class="box-small"><img :src="`${characterData[0].thumbnail.path}.${characterData[0].thumbnail.extension}`" alt="" class="thumbnail"></div>
        <h4 class="thumbnail__caption">{{character.name}}</h4>
      </div>
      <div class="grid__item thumbnail-grid__item">
        <div class="box-small"><img :src="`${characterData[1].thumbnail.path}.${characterData[1].thumbnail.extension}`" alt="" class="thumbnail"></div>
        <h4 class="thumbnail__caption">{{characterData[1].name}}</h4>
      </div>
      <div class="grid__item thumbnail-grid__item">
        <div class="box-small"><img :src="`${characterData[2].thumbnail.path}.${characterData[2].thumbnail.extension}`" alt="" class="thumbnail"></div>
        <h4 class="thumbnail__caption">{{characterData[2].name}}</h4>
      </div>
      <div class="grid__item thumbnail-grid__item">
        <div class="box-small"><img :src="`${characterData[3].thumbnail.path}.${characterData[3].thumbnail.extension}`" alt="" class="thumbnail"></div>
        <h4 class="thumbnail__caption">{{characterData[3].name}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['character'],
};
</script>
