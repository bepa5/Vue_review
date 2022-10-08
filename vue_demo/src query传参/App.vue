<template>
  <div id="app">
    <!-- 一般组件-->
    <Banner></Banner>
    <!-- 路由跳转    路由组件-->
    <router-link to='/Home'>Home</router-link>
     <router-link to='/About'>About</router-link>
     <br>
     <!-- 视图呈现 -->
     <router-view></router-view>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
export default {
  name: "App",
  data() {
    return {

    };
  },
  methods:{
  },
  components: {
    Banner
  },
  watch:{
  }
};
</script>

<style>
</style>
