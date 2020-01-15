<template>
  <div class="month-image">
    <h4>{{ dayImage.title }}</h4>
    <h5></h5>
    <img 
      :alt="dayImage.title"
      :src="dayImage.url"
    />
  </div>
</template>

<script>
export default {
  name: "MonthImage",
  props: {
    dayImage: Object
  },
  data() {
    return {
      date: String
    }
  },
  // methods: {
  //   cleanDate()
  // }
}
</script>

<style scoped>
  .month-image {
    height: 400px;
    width: 400px;
  }
  img {
    max-height: 70%;
    max-width: 70%;
  }
</style>