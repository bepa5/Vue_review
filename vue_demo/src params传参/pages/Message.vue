<!--
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-09-22 16:21:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-08 14:37:03
 * @FilePath: Message.vue
-->
<template>
  <ul>
    <li v-for="p in list" :key="p.id">
      <router-link
        :to="{
          //path: '/About/Message/Detail',
          name:'xiangqing',
          params:{
            id: p.id,
            title: p.title,
          },
        }"
        >{{ p.title }}</router-link>
    </li>
    <router-view></router-view>
  </ul>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      list: [
        { id: "001,", title: "消息1" },
        { id: "002,", title: "消息2" },
        { id: "003,", title: "消息3" },
      ],
    };
  },
};
</script>

<style>
</style>