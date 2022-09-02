<!--
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-09-01 17:22:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-02 15:11:15
 * @FilePath: Footer.vue
-->
<template>
  <div>
    <input type="checkbox" :checked='isall' @change="cheall" />已完成{{ full }}/全部{{
      todolist.length
    }}
    <button @click="shanchu">删除已完成</button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: ["todolist",'all','delesc'],
  computed: {
    full() {
      return this.todolist.reduce((pre, cur) => {
        return pre + (cur.isChoose ? 1 : 0);
      }, 0);
    },
    isall(){
      return this.todolist.length == this.full && this.todolist.length>0
    }
  },
  methods:{
    cheall(e){
      this.all(e.target.checked)

    },
    shanchu(){
      this.delesc()
    }
  }
};
</script>

<style scoped>
</style>