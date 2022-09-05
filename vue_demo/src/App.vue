<template>
  <div id="app">
    <Header @addlist='addlist'></Header>
    <LIst :todolist='todolist' :delett='delett'></LIst>
   <Footer :todolist='todolist' v-show="todolist.length" @all='all' @delesc='delesc'></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import LIst from "./components/LIst.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  data() {
    return {
      todolist: JSON.parse(localStorage.getItem('todos')) || []
    };
  },
  methods:{
    addlist(value){
      this.todolist.unshift(value)
    },
    delett(value){
     this.todolist= this.todolist.filter((curre)=>{
        return curre.id!==value
      })
    },
    all(value){
      this.todolist.forEach((todo)=>{
        todo.isChoose = value
      })
    },
    //删除选择
    delesc(){
     this.todolist= this.todolist.filter((todo)=>{
        return !todo.isChoose
      })
    }
  },
  components: {
    Header,
    LIst,
    Footer,
  },
  watch:{
    // todolist(value){
    //   localStorage.setItem('todos', JSON.stringify(value))
    // }
    todolist:{
      deep:true,
      handler(value){
          localStorage.setItem('todos', JSON.stringify(value))
      }
    }
  }
};
</script>

<style>
</style>
