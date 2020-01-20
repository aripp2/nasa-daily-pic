<template>
  <div class="one-image">
    <h3>"{{ dailyImage.title }}"</h3>
    <img 
      v-if="dailyImage.media === 'image'"
      :alt=dailyImage.title
      :src=dailyImage.url
    />
    <youtube 
      v-else
      :video-id="videoId"
      :player-vars="{ autoplay: 1 }"
    >
    </youtube>
    <p 
      class="copyright" v-if="dailyImage.copyright">&copy {{ dailyImage.copyright }}</p>
    <p class="explanation">{{ dailyImage.explanation }}</p>
  </div>
</template>

<script>
import { getIdFromURL, getTimeFromURL } from 'vue-youtube-embed'

export default {
  name: 'ImageContainer',
  props: {
    dailyImage: Object
  },
  data() {
    return {
      videoId: this.getId(this.dailyImage.url)
    }
  },
  methods: {
    getId (url) {
      if (this.dailyImage.url) {

        this.videoId = this.$youtube.getIdFromURL(url)
      console.log('video id', this.videoId)
      // this.startTime = this.$youtube.getTimeFromURL(this.dailyImage.url)
      }
    }
  }
}
</script>

<style scoped>
  .one-image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: aliceblue;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 2px rgb(202, 207, 207);;
    color: navy;
    margin: 20px auto;
  }
  h3 {
    font-size: 1.5em;
    font-weight: bold;
  }
  img {
    max-height: 60vh;
    max-width: 80vw; 
    margin: 10px auto;
    border-radius: 5px;
  }
  .explanation {
    width: 80%;
    font-size: 1.2em;
  }
  .copyright {
    font-size: 1em;
    margin: 10px;
  }

</style>