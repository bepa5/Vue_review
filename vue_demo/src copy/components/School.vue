<!--
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-09-01 15:34:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-01 16:43:01
 * @FilePath: School.vue
-->
<template>
  <div>
    <h1>名字:{{name}}</h1>
    <h1 ref="reference">公司:{{company}}</h1>
    <button @click="show">获取上方数据</button>
  </div>
</template>

<script>
 //mixin混入方法
import {mixin} from '../mixin'
export default {
   name:'School',
   data() {
    return {
      name:'GodBoy',
      company:'下一🏠'
    }
   },
   mixins:[mixin],
   methods: {
   },
}
</script>

<style>

</style>