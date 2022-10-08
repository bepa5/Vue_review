/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-09-22 15:12:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-22 17:24:25
 * @FilePath: index.js
 */
//该文件专门用于管理路由
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import News from '../pages/News'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'
//创建并暴露一个路由
export default new VueRouter({
    routes: [
        {
            path: '/Home',
            component: Home
        },
        {
            path: '/About',
            component: About,
            children: [
                {
                    path: 'News',
                    component: News,
                },
                {
                    path: 'Message',
                    component: Message,
                    children: [
                        {
                            name:'xiangqing',
                            path: 'Detail',
                            component: Detail,
                        }
                    ]
                }
            ]
        }
    ]
})