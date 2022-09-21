/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-09-21 17:28:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-21 17:56:28
 * @FilePath: person.js
 */
import {nanoid} from 'nanoid'
export default {
    namespaced:true,
    actions:{

    },
    mutations:{
        ADD_PERSON(state,value){
            console.log(state,value,111111111)
           const newP={
            id:nanoid(),
            name:value
           }
            state.list.unshift(newP)
        }
    },
    getters:{},
    state:{
        list:[
            {
                id:'00005',
                name:'大帅比'
            }
        ]
    },
}