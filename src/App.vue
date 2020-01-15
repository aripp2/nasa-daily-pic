<template>
  <div id="app">
    <Header 
      :date="todaysDate"
    />
    <!-- <ImageContainer 
      v-if="monthView === false"
      :imageTitle="dailyImage.title" 
      :spacePic="dailyImage.url"
      :imageExplanation="dailyImage.explanation"
    /> -->
    <MonthContainer 
      :days="monthImages"
    />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import ImageContainer from './components/ImageContainer';
import MonthContainer from './components/MonthContainer';
import { getDailyImage, getMonthImages } from '../src/apiCalls';

export default {
  name: 'app',
  components: {
    Header,
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
  // methods: {
  //   toggleView() {

  //   }
  // },
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
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
</style>
