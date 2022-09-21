/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-09-21 17:14:39
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-21 17:25:59
 * @FilePath: sum.js
 */
export default {
    namespaced:true,
    actions:{
        jia(context,value){
            context.commit('JIA',value)
        },
        jian(context,value){
            context.commit('JIAN',value)
        },
        jianodd(context,value){
           if( context.state.sum%2){
            context.commit('JIA',value)
           }
        },
        jianwaiter(context,value){
            setTimeout(()=>{
                context.commit('JIA',value)
            },500)
        }
    },
    mutations:{
        JIA(state,value){
            state.sum+=value*1
        },
        JIAN(state,value){
            state.sum-=value*1
        },
    },
    getters:{
        bigSum(state){
            return state.sum*10
        }
    },
    state:{
        sum:0,
        hard:'study'
    }

}