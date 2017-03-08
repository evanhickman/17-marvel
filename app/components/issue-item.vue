<template lang="html">
  <div class="">
      <div class="box-small"><img :src="`${issue.thumbnail.path}.${issue.thumbnail.extension}`" alt="" class="thumbnail"></div>
      <h4 class="thumbnail__caption">#{{issue.issueNumber}}</h4>
      <p class="thumbnail__details">{{issue.title}}</p>
      <!-- <p class="thumbnail__details">{{issueData[].issueNumber}}</p> -->
      <button class="button" v-on:click="">Read More</button>
  </div>
</template>

<script>
export default {
  props: ['issue'],
};
</script>
