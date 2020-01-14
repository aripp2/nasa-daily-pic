<template>
  <div id="app">
    <Sidebar />
    <ImageContainer :altDescription="title" :spacePic="url"/>
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
//   data() {
//     return {
//     dailyImage: {
//     copyright: "Maxime Daviron",
//     date: "2020-01-13",
//     explanation: "A good place to see a ring-of-fire eclipse, it seemed, would be from a desert. In a desert, there should be relatively few obscuring clouds and trees. Therefore late last December a group of photographers traveled to the United Arab Emirates and Rub al-Khali, the largest continuous sand desert in world, to capture clear images of an unusual eclipse that would be passing over. A ring-of-fire eclipse is an annular eclipse that occurs when the Moon is far enough away on its elliptical orbit around the Earth so that it appears too small, angularly, to cover the entire Sun. At the maximum of an annular eclipse, the edges of the Sun can be seen all around the edges of the Moon, so that the Moon appears to be a dark spot that covers most -- but not all -- of the Sun. This particular eclipse, they knew, would peak soon after sunrise. After seeking out such a dry and barren place, it turned out that some of the most interesting eclipse images actually included a tree in the foreground, because, in addition to the sand dunes, the tree gave the surreal background a contrasting sense of normalcy, scale, and texture. Explore the Universe: Random APOD Generator",
//     hdurl: "https://apod.nasa.gov/apod/image/2001/DesertEclipse_Daviron_2000.jpg",
//     media_type: "image",
//     service_version: "v1",
//     title: "A Desert Eclipse",
//     url: "https://apod.nasa.gov/apod/image/2001/DesertEclipse_Daviron_960.jpg"
//   }  
// }
  // }
  mounted() {
    const apiKey = process.env.VUE_APP_API_KEY;
    console.log(apiKey)
    const baseUrl = "https://api.nasa.gov/planetary/apod?api_key="
    console.log(baseUrl + "apiKey")
    fetch(baseUrl + apiKey)
      .then(response => response.json())
      .then(data => console.log(data))
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
