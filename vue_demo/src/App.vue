<template>
  <div id="app">
    <Header></Header>
    <LIst></LIst>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import LIst from './components/LIst.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    LIst,
    Footer
  }
}
</script>

<style>
</style>
