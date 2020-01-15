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
    <modal
      :adaptive="true"
      height="auto" 
      :scrollable="true" 
      name="explanation-modal" class="explanation-modal">
      <div class="explanation">
        {{ dayImage.explanation }}
        <button
          @click="hide"
        >Close</button>
      </div>
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
    background-color: aliceblue;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 2px rgb(202, 207, 207);;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px auto;
  }
  h4 {
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: bold;
  }
  h5 {
    margin: 5px;
    font-size: 18px;
  }
  img {
    max-height: 60%;
    max-width: 70%;
    margin: auto;
  }
  .explanation-modal {
    background: transparent;
    padding: 20px;
  }
  .explanation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  button {
    height: 30px;
    width: 80px;
  }
</style>