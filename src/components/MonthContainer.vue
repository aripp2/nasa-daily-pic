<template>
  <div class="month-container">
    <h6>Click on any image or image title below to view the explanation.</h6>
    <div class="month-view">
      <div v-for="day in days" :key="day.date">
        <MonthImage :dayImage="day"/>
      </div>
    </div>
  </div>
</template>

<script>
import MonthImage from './MonthImage';

export default {
  name: 'MonthContainer',
  components: {
    MonthImage
  },
  props: {
    days: Array
  }
}
</script>

<style scoped>
  .month-view {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  p {
    font-size: 5em;
  }
  h6 {
    height: 40px;
    width: 70%;
    margin: 10px auto;
    color: navy;
    font-size: 1em;
  }
</style>