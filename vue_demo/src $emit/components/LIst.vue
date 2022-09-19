<!--
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-09-01 17:21:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-02 10:37:17
 * @FilePath: LIst.vue
-->
<template>
  <div>
    <ul>
        <Item v-for="p in todolist" :key="p.id" :todo=p :delett='delett'></Item>
    </ul>
  </div>
</template>

<script>
import Item from '../components/Item.vue'
export default {
  name: "List",
  components:{
    Item
  },
  props:['todolist','delett']
};
</script>

<style scoped>
</style>