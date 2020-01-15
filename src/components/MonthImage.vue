<template>
  <div class="month-image">
    <h4>"{{ dayImage.title }}"</h4>
    <h5>{{ fixedDate }}</h5>
    <img 
      :alt="dayImage.title"
      :src="dayImage.url"
    />
    <p v-if="dayImage.copyright">&copy {{ dayImage.copyright }}</p>
  </div>
</template>

<script>
export default {
  name: "MonthImage",
  props: {
    dayImage: Object
  },
  computed: {
    fixedDate: function () {
      return new Date(this.dayImage.date).toString().split(' ').slice(0, 4).join(' ')
    }
  }
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