<template lang="html">
  <div class="">
        <div class="box-small"><img :src="`${character.thumbnail.path}.${character.thumbnail.extension}`" alt="" class="thumbnail"></div>
        <h4 class="thumbnail__caption">{{character.name}}</h4>
  </div>
</template>

<script>
export default {
  props: ['character'],
};
</script>
