<!--
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-09-01 17:21:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-02 14:20:40
 * @FilePath: Item.vue
-->
<template>
  <div>
    <li @mousemove='yiru' @mouseleave="yichu">
      <input type="checkbox" v-model="todo.isChoose" :checked='todo.isChoose'/>{{todo.title}}
      <button v-show="show" @click="dele(todo.id)">删除</button>
    </li>
  </div>  
</template>

<script>
export default {
  name: "Item",
  data() {
    return {
      show:false
    }
  },
  props:['todo','delett'],
  methods:{
    yiru(){
      this.show=true
    },
    yichu(){
      this.show=false
    },
    dele(value){
      this.delett(value)
    }
  }
};
</script>

<style scoped>
</style>