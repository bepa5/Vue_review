<!--
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-09-05 10:20:23
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-05 10:33:06
 * @FilePath: Persons.vue
-->
<template>
  <div>
    <h2>等级:{{level}}</h2>
    <h2>职能:{{Fun}}</h2>
    <button @click="handle">点击</button>
  </div>
</template>

<script>
export default {
    name:'Persons',
    data() {
        return {
            level:'一级',
            Fun:'决策'
        }
    },
    methods:{
        handle(){
            this.$emit('haha',this.level)
        }
    }
}
</script>

<style>

</style>