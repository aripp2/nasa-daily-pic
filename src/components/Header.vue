<template>
  <header>
    <h1>NASA</h1>
    <h2>Astronomy Picture of the Day</h2>
    <p>{{ date }}</p>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    date: String
  }
}
</script>

<style scoped>
  header {
    height: 150px;
    width: 100%;
    background: #BDA7D5;
    margin: 0;

  }
</style>