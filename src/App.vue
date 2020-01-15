<template>
  <div id="app">
    <header>
      <h1>NASA</h1>
      <h2>Astronomy Picture of the Day</h2>
      <p>{{ todaysDate }}</p>
      <button 
        @click="toggleView"
      >{{ monthView ? "Return to Today's Image" : "View all this Month's Images"}}
      </button>
    </header>
    <MonthContainer
      v-if="monthView"
      :days="monthImages"
    />
    <ImageContainer 
      v-else
      :dailyImage="dailyImage"
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
}
header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: aliceblue;
  border-radius: 5px;
    box-shadow: 2px 2px 2px 2px rgb(202, 207, 207);;
  color: navy;

}
h1 {
  font-size: 3em;
  font-weight: bold;
  color: navy;
}
h2 {
  font-size: 2em;
  font-weight: bold;
}
p {
  font-size: 2em;
}
button {
  font-size: 1em;
  font-weight: bold;
  color: navy;
  height: 50px;
  width: 150px;
  border: 4px solid navy;
  border-radius: 5px;
  outline: none;
}
button:hover {
  background-color: navy;
  color: white;
}
</style>
