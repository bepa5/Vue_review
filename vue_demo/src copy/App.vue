<template>
  <div id="app">
    <School/>
    <Student></Student>
    <Animal dog='狗子'></Animal>
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'
import Animal from './components/Animal.vue'

export default {
  name: 'App',
  components: {
    School,
    Student,
    Animal
  }
}
</script>

<style>
</style>
