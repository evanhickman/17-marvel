<template lang="html">
  <div class="">
      <div class="box-small"><img :src="`${issue.thumbnail.path}.${issue.thumbnail.extension}`" alt="" class="thumbnail"></div>
      <h4 class="thumbnail__caption">#{{issue.issueNumber}}</h4>
      <p class="thumbnail__details">{{issue.title}}</p>
      <button class="button" v-on:click="$emit('toggle', issue)">Read More</button>
  </div>
</template>

<script>
export default {
  props: ['issue'],
};
</script>
