<template>
  <div class="month-image">
    <h4>"{{ dayImage.title }}"</h4>
    <h5>{{ fixedDate }}</h5>
    <img 
      @click="show"
      :alt="dayImage.title"
      :src="dayImage.url"
    />
    <p v-if="dayImage.copyright">&copy {{ dayImage.copyright }}</p>
    <modal name="explanation-modal">
      {{ dayImage.explanation }}
      <button
        @click="hide"
      >Close</button>
    </modal>
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
  },
  methods: {
  show () {
    this.$modal.show("explanation-modal");
  },
  hide () {
    this.$modal.hide("explanation-modal");
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