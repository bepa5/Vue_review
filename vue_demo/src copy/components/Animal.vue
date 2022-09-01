<!--
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-09-01 16:10:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-01 16:26:38
 * @FilePath: Animal.vue
-->
<template>
    <div>
        <h3>动物:{{dog}}</h3>
    </div>
</template>

<script>
export default {
    name:'Animal',
    data() {
        return {
            
        }
    },
   // props:['dog'] //简单接受
   //接受并限制类型
//    props:{
//     dog:String,
//    }
    //接受限制类型并必传
    props:{
        dog:{
            type:String,
            required:true, //必传
           // default:'🐒' //默认值
        }
    }
}
</script>

<style>

</style>