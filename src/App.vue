<template>
  <div id="app">
    <header>
      <h1>NASA</h1>
      <h2>Astronomy Picture of the Day</h2>
      <p>{{ todaysDate }}</p>
      <button 
        @click="toggleView"
      >Toggle View
      </button>
    </header>
    <MonthContainer
      v-if="monthView"
      :days="monthImages"
    />
    <ImageContainer 
      v-else
      :imageTitle="dailyImage.title" 
      :spacePic="dailyImage.url"
      :imageExplanation="dailyImage.explanation"
    />
  </div>
</template>

<script>
import ImageContainer from './components/ImageContainer';
import MonthContainer from './components/MonthContainer';
import { getDailyImage, getMonthImages } from '../src/apiCalls';

export default {
  name: 'app',
  components: {
    ImageContainer,
    MonthContainer
  },
  data() {
    return {
      dailyImage: {},
      todaysDate: new Date().toString().split(' ').slice(0, 4).join(' '),
      monthImages: [],
      error: '',
      idLoading: true,
      monthView: false
    }
  },
  methods: {
    toggleView() {
      this.monthView = !this.monthView
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
  background-image: 
}
</style>
