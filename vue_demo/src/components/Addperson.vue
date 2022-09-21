<!--
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-09-21 17:10:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-21 17:50:55
 * @FilePath: Addperson.vue
-->
<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" v-model="n">
    <button  @click="add"> ++++</button>
    <ul>
        <li v-for="p in person" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>

export default {
    data() {
        return {
            n:''
        }
    },
    methods: {
        add(){
            this.$store.commit('person/ADD_PERSON',this.n)
        }
    },
    computed:{
        person(){
           return this.$store.state.person.list
        }
    }
}
</script>

<style>

</style>