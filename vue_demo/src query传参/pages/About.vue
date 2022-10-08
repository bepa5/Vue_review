<!--
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-09-22 15:08:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-22 16:46:36
 * @FilePath: About.vue
-->
<template>
  <div>
    About的内容
    <br/>
    <router-link to="/About/Message">Message</router-link>
    <router-link to="/About/News">News</router-link>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style>
</style>