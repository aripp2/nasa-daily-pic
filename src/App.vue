<template>
  <div id="app">
    <Sidebar 
      :date="todaysDate"
      :imageExplanation="dailyImage.explanation"
    />
    <ImageContainer 
      :imageTitle="dailyImage.title" 
      :spacePic="dailyImage.url"
    />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import ImageContainer from './components/ImageContainer';
import MonthContainer from './components/MonthContainer';
import { getDailyImage, getMonthImages } from '../src/apiCalls';

export default {
  name: 'app',
  components: {
    Sidebar,
    ImageContainer,
    MonthContainer
  },
  props: {
    monthView: false
  },
  data() {
    return {
      dailyImage: {},
      todaysDate: new Date().toString().split(' ').slice(0, 4).join(' '),
      monthImages: [],
      error: '',
      idLoading: true
    }
  },
  async mounted() {
    try {
      const responseImage = await getDailyImage();
      this.dailyImage = responseImage;
      const responseMonth = await getMonthImages(this.dailyImage.date);
      this.monthImages = responseMonth;
      console.log(this.monthImages)
    } catch ({ message }) {
      this.error = message;
      console.log(this.error)
    }
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
