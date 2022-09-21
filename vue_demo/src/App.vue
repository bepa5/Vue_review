<template>
  <div id="app">
    <Sum></Sum>
    <br>
     <Addperson></Addperson>
  </div>
</template>

<script>
import Sum from "./components/Sum.vue";
import Addperson from './components/Addperson.vue'
export default {
  name: "App",
  data() {
    return {

    };
  },
  methods:{
  },
  components: {
    Sum,
    Addperson
  },
  watch:{
  }
};
</script>

<style>
</style>
