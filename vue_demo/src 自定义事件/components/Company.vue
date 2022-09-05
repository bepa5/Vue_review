<!--
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-09-01 17:20:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-05 10:42:57
 * @FilePath: Company.vue
-->
<template>
  <div class="Company">
    <h2>{{ name }}</h2>
    <h2>{{ version }}</h2>
    <button @click="handler">点击</button>
    <button @click="unbind">解绑</button>
  </div>
</template>

<script>
export default {
  name: "Company",
  data() {
    return {
      name: " Mac",
      version: "14",
    };
  },
  props: [],
  methods: {
    handler() {
      this.$emit("xuexi", this.name);
    },
    unbind() {
      this.$off("xuexi");//解绑一个事件
      // this.$off(['xx1','xx2']) 解绑多个
    //  this.$off()//解绑全部
    },
  },
};
</script>

<style scoped>
.Company {
  background-color: blue;
}
</style>