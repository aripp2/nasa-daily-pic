<template>
  <aside>
    <h1>NASA</h1>
    <h2>Picture of the Day</h2>
    <p>{{ imageExplanation }}</p>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    imageExplanation: String
  }
}
</script>

<style scoped>
  aside {
    height: 100vh;
    width: 30%;
    background: #BDA7D5;
    margin: 0;

  }
</style>