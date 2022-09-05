<template>
  <div id="app" class="app">
    //通过props获取数据
    <h1>获取student数据:{{ name }}</h1>
    <Student :getStudent1="getStudent"></Student>
    //通过$emit 获取数据
     <h1>获取company数据:{{name1}}</h1>
    <Company @xuexi='demo'></Company>
    // 通过ref获取数据
    <h1>获取Persons数据:{{name2}}</h1>
    <Persons ref='person'></Persons>
  </div>
</template>

<script>
import Company from "./components/Company.vue";
import Student from "./components/Student.vue";
import Persons from './components/Persons.vue'
export default {
  name: "App",
  data() {
    return {
      name: "App",
      name1: "App1",
      name2:'App2'
    };
  },
  methods: {
    getStudent(value) {
      this.name = value;
    },
    demo(value){
       this.name1 = value;
    },
    getPerson(value){
       this.name2 = value;
    }
  },
  mounted() {
    //第一种ref接受
    // console.log(this.$refs.person.level)
    // this.name2=this.$refs.person.level
    //第二种ref通过事件触发接受
    this.$refs.person.$on('haha',this.getPerson)
  },
  components: {
    Company,
    Student,
    Persons
  },
};
</script>

<style>
.app {
  background-color: aquamarine;
}
</style>
