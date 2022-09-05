<!--
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-09-01 17:22:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-05 10:12:59
 * @FilePath: Student.vue
-->
<template>
  <div class="Student">
    <h2>{{name}}</h2>
    <h2>{{className}}</h2>
    <button @click="handler">点击</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  props: ['getStudent1'],
  data() {
    return {
      name:'华为',
      className:'荣耀'
    }
  },
  computed: {
  },
  methods:{
     handler(){
      this.getStudent1(this.name)
     }
  }
};
</script>

<style scoped>
.Student{
  background-color: brown;
}
</style>