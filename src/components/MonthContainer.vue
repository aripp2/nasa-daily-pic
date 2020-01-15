<template>
  <div class="month-view">
    <div v-for="day in days" :key="day.date">
      <MonthImage :dayImage="day"/>
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
</style>