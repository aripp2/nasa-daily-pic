<template>
  <div id="app">
    <Sidebar />
    <ImageContainer 
      :imageTitle="dailyImage.title" 
      :spacePic="dailyImage.url"
    />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import ImageContainer from './components/ImageContainer';
require('dotenv').config;

export default {
  name: 'app',
  components: {
    Sidebar,
    ImageContainer
  },
  data() {
    return {
      dailyImage: {}
    }
  },
  mounted() {
    const apiKey = process.env.VUE_APP_API_KEY;
    const baseUrl = "https://api.nasa.gov/planetary/apod?api_key="
    fetch(`${baseUrl}${apiKey}`)
      .then(response => response.json())
      .then(data => this.dailyImage = data)
      .catch(error => console.log(error))
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}
</style>
