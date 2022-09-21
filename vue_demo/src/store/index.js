/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-09-19 17:08:01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-21 17:29:31
 * @FilePath: index.js
 */
//引入vue
import Vue from 'vue'
//引出vuex
import Vuex from 'vuex'
//创建一个状态管理库
//挂载vuex
Vue.use(Vuex)
import sum from './sum'
import person from './person'
// //创建一个响应组件的动作
// const actions={
//     jia(context,value){
//         context.commit('JIA',value)
//     },
//     jian(context,value){
//         context.commit('JIAN',value)
//     },
//     jianodd(context,value){
//        if( context.state.sum%2){
//         context.commit('JIA',value)
//        }
//     },
//     jianwaiter(context,value){
//         setTimeout(()=>{
//             context.commit('JIA',value)
//         },500)
//     }
// }
// //创建一个操作数据的state
// const mutations={
//     JIA(state,value){
//         state.sum+=value*1
//     },
//     JIAN(state,value){
//         state.sum-=value*1
//     },
// }
// //创建一个用于数据储存
// const state={
//     sum:0,
//     hard:'study'
// }

// const getters={
//     bigSum(state){
//         return state.sum*10
//     }
// }
//创建store
 const store=new Vuex.Store({
    modules:{
        sum,
        person
    }
})
export default store