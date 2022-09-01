<!--
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-09-01 15:55:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-01 16:40:17
 * @FilePath: Student.vue
-->
<template>
  <div>
    <h6>{{name}}</h6>
    <h6>{{age}}</h6>
    <h6>{{sex}}</h6>
    <button @click="show">显示</button>
  </div>
</template>

<script>
import {mixin} from '../mixin'
export default {
    name:'Student',
    data() {
        return {
            name:'翠',
            age:66,
            sex:'男'
        }
    },
    mixins:[mixin]
}
</script>

<style>

</style>