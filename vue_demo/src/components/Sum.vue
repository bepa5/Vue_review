<!--
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-09-01 17:21:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-20 17:58:58
 * @FilePath: Sum.vue
-->
<template>
  <div>
    <h1>当前值为:{{sum }}</h1>
    <h1>努力{{hard}}</h1>
    <h1>扩大10倍{{bigSum}}</h1>
    <select v-model="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add(n)">+++</button>
    <button @click="subtraction(n)">---</button>
    <button @click="odd(n)">奇数加</button>
    <button @click="waiter">延迟加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
export default {
  name: "Sum",
  data() {
    return {
      n: 1,
    };
  },
  computed:{
    ...mapState({hard:'hard',sum:'sum'}),
    ...mapGetters({bigSum:'bigSum'}),
   
  },
  methods: {
     ...mapActions({subtraction:'jian',odd:'jianodd'}),
    ...mapMutations({add:'JIA'}),
    // add() {
    //   //如果action有逻辑处理可以用dispatch
    //   //this.$store.dispatch("jia", this.n);
    //   //没有逻辑处理ç直接对话mutation
    //   this.$store.commit("JIA", this.n);
    // },
    // subtraction() {
    //   this.$store.dispatch("jian", this.n);
    // },
    // odd(){
    //   this.$store.dispatch("jianodd", this.n); 
    // },
    waiter(){
        this.$store.dispatch("jianwaiter", this.n); 
    }
  },
};
</script>

<style scoped>
</style>