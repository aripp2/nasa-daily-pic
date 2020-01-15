<template>
  <div class="one-image">
    <h3>"{{ dailyImage.title }}"</h3>
    <img 
      :alt=dailyImage.title
      :src=dailyImage.url
    />
    <p v-if="dailyImage.copyright">&copy {{ dailyImage.copyright }}</p>
    <p class="explanation">{{ dailyImage.explanation }}</p>
  </div>
</template>

<script>
export default {
  name: 'ImageContainer',
  props: {
    dailyImage: Object
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