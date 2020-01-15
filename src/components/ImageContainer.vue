<template>
  <div class="one-image">
    <h3>"{{ imageTitle }}"</h3>
    <img 
      :alt=imageTitle
      :src=spacePic
    />
    <p class="explanation">{{ imageExplanation }}</p>

  </div>
</template>

<script>
export default {
  name: 'ImageContainer',
  props: {
    imageTitle: String,
    spacePic: String,
    imageExplanation: String
  }
}
</script>

<style scoped>
  .one-image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  img {
    max-height: 60vh;
    max-width: 80vw; 
    margin: 10px auto;
  }
  .explanation {
    width: 80%;
  }

</style>