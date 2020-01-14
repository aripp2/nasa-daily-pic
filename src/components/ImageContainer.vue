<template>
  <div class="one-image">
    <img 
      :alt=imageTitle
      :src=spacePic
    />
    <p>"{{ imageTitle }}"</p>
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  img {
    max-height: 70vh;
    max-width: 60vw; 
  }
</style>