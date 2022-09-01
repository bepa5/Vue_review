<!--
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-09-01 17:21:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-01 17:30:57
 * @FilePath: LIst.vue
-->
<template>
  <div>
    <ul>
        <Item></Item>
    </ul>
  </div>
</template>

<script>
import Item from '../components/Item.vue'
export default {
  name: "List",
  components:{
    Item
  }
};
</script>

<style scoped>
</style>