<template>
  <div class="one-image">
    {{ imageTitle }}
    <img 
      :alt=imageTitle
      :src=spacePic
    />
  </div>
</template>

<script>
export default {
  name: 'ImageContainer',
  props: {
    imageTitle: String,
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