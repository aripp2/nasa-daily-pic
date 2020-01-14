<template>
  <div class="one-image">
    <img :alt="altDescription" :src="spacePic"/>
  </div>
</template>

<script>
export default {
  name: 'ImageContainer',
  props: {
    altDescription: String,
    spacePic: String
  }
}
</script>

<style scoped>
  .one-image {
    height: 100vh;
    width: 70%;

  }
  img {
    height: 300px;
    width: 400px;
  }
</style>