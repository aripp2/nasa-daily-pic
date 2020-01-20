<template>
  <div class="month-image">
    <h4 
      class="title"
      @click="show"
    >"{{ dayImage.title }}"</h4>
    <h5 
      class="date">{{ fixedDate }}
    </h5>
    <img 
      v-if="!checkLoading"
      src="https://media3.giphy.com/media/3oriOiizS4Pmofj46A/source.gif"
      alt="loading gif"
    />
    <img 
      v-if="dayImage.media_type === 'image'"
      @click="show"
      :alt="dayImage.title"
      :src="dayImage.url"
    />
    <youtube 
      v-if="dayImage.media_type === 'video'"
      :video-id="videoId"
      player-width="300"
      player-height="200"
    >
    </youtube>
    <p 
      class="copyright" 
      v-if="dayImage.copyright">&copy 
      {{ dayImage.copyright }}</p>
    <modal
      :adaptive="true"
      height="auto" 
      :scrollable="true" 
      name="explanation-modal" class="explanation-modal">
      <div class="explanation">
        {{ dayImage.explanation }}
        <button
          @click="hide"
        >Close</button>
      </div>
    </modal>
  </div>
</template>

<script>
import { getIdFromURL } from 'vue-youtube-embed'

export default {
  name: "MonthImage",
  props: {
    dayImage: Object
  },
  data() {
    return {
      videoId: ""
    }
  },
  methods: {
    getId() {
      this.videoId = this.$youtube.getIdFromURL(this.dayImage.url)
    },
    show () {
      this.$modal.show("explanation-modal");
    },
    hide () {
      this.$modal.hide("explanation-modal");
    }
  },
  computed: {
    fixedDate: function () {
      return new Date(this.dayImage.date).toString().split(' ').slice(0, 4).join(' ')
    },
    checkLoading: function () {
      if (this.dayImage.url) {
        this.getId();
        return true
      }
    }
  }
}
</script>

<style scoped>
  .month-image {
    height: 400px;
    width: 400px;
    background-color: aliceblue;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 2px rgb(202, 207, 207);;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px auto;
    color: navy;

  }
  h4 {
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: bold;
  }
  h5 {
    margin: 5px;
    font-size: 18px;
  }
  img {
    max-height: 60%;
    max-width: 70%;
    margin: auto;
  }
  image:hover {
    cursor: pointer;
  }
  .explanation-modal {
    background: transparent;
    padding: 20px;
  }
  .explanation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  button {
    height: 30px;
    width: 80px;
  }
  .copyright {
    font-size: 1em;
  }
  .title {
    font-size: 1.3em;
    font-weight: bold;
  }
  .date {
    font-size: 1.2em;
    font-weight: 300;
  }
</style>