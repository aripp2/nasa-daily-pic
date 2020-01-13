<template>
  <aside>
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    title: String,
    subTitle: String
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