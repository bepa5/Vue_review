<template>
  <div id="app">
    <Student></Student>
    <Company></Company>
  </div>
</template>

<script>
import Company from "./components/Company.vue";
import Student from "./components/Student.vue";
export default {
  name: "App",
  data() {
    return {
      
    };
  },
  methods:{
    
  },
  components: {
    Company,
    Student
  },
};
</script>

<style>
</style>
