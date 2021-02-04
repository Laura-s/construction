<template>
    <NavBar />
    <Footer />
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    NavBar, Footer
  }
}
</script>

<style>
#app {
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  letter-spacing: 0.03em;
  margin: 0;
  padding: 0;
}
</style>
