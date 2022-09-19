<!--
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-09-01 17:20:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-05 14:58:46
 * @FilePath: Header.vue
-->
<template>
  <div>
    <input type="text" @keydown.enter="huiche" v-model="title">
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  name: "Header",
  data() {
    return {
      title:'',
    }
  },
  //props:['addlist'],
  methods:{
    huiche(){
      this.obj ={id:nanoid(),title:this.title,isChoose:false}
     // this.addlist(this.obj)
     this.$emit('addlist',this.obj)
    }
  },
};
</script>

<style scoped>
</style>