# vue_demo笔记
## 脚手架文件结构：
|—— node_ modules 
|—— public
|     |—— favicon.ico:页签图标
|     |__ inldex. html:主页面
|—— src
|     |—— assets:存放静态资源
|     |     ——1ogo . png
|     |—— component:存放组件
|     |     ——L HelloWorld.vue
|     |—— App.vue:汇总所有组件
|     |—— main.js: 入口文件 
|—— . gitignore: git版 本管制忽略的配置
|—— babel. config.js; babe1的配置文件
|—— package. json:应用包配置文件
|—— README . md:应用描述文件
|—— package- lock。json:包版本控制文件
## 关于不同版本的Vue:
  1.vue.js与vJue. runtime .XXX。js的区别:
    (1).vue.js是完整版的Vue，包含:核心功能+模板解析器。
    (2) . vue. runtime。xXx. js是运行版的Vue,只包含:核心功能;没有模板解析器。
  2.因为vue. runtime .xXxx .js没有模板解析器，所以不能使用template配置项，需要使用
    render函数接收到的createElement函数去指定具体内容。
## vue.config.js配置文件
>  使用vue inspect > output.js 可以查有到Vue脚于架的默认配直。
>  使用vue . config. js可以对脚手架进行个性化定制，详情见: https ://cli . vuejs .org/zh

## ref
  1.被用来给元素或子组件注册引用信息(id的替代者)
  2.应用在htm1标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象(vc)
  3.使用方式:
    打标识: <h1 ref="xxx">.....</h1> 或<School ref=" xxx" ></School>
    获取: this.$refs. xxx
## props配置
  功能:让组件接收外部传过来的数据
  (1) .传递数据:
    <Demo name= "xxx"/>
  (2) .接收数据: 
    第一种方式(只接收)
      props: [ name']
  第二种方式(限制类型) :
    props:{
      name : Number
    }
  第三种方式(限制类型、限制必要性、指定默认值) :
    props:{
      name: {
        type :String, //类型
        required:true, //必要性
        default:'老王' //默认值
    }
  备注: props 是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，
  若业务需求确实需要修改，那么请复制props的内容到data中份，然后去修改data中的数据。
## mixin混入
  功能:可以把多个组件共用的配置提取成个 混入对象
  使用方式: 
  第一步定义混合，例如:
    {
     data(){...},
     methods:{....}
    }
  第二步使用混入，例如:
    (1).全局混入: Vue 。mixin( xxx)
    (2).局部混入: mixins:['xx']
## 插件
  功能:用于增强Vue
  本质:包含instal1方法的一个对象，instal1的第个 参数是Vue,第二个以后的参 数是插件使用者传递的数据。
  定义插件:
    对象.install = function (Vue, options) {
    // 1.添加全局过滤器
      Vue. filter(....)
    // 2.添加全局指令
      Vue。directive(....)
    // 3.配置全局混入(合)
      Vue。mixin(....)
   // 4.添加实例方法
    Vue . prototype。$myMethod = function () {...}
    Vue . prototype . $myProperty = xxXx 
   }
  使用插件: Vue .use()
## scoped样式
  作用：让样式在局部生效，防止冲突，
  写法: <style scoped>
## 组件的自定义事件
  1.丁种组件间通信的方式，适用于:子组件===>父组件
  2.使用场景: A是父组件, B是子组件, B想给A传数据,那么就要在A中给B绑定自定义事件(事件的回调在A中)。
  3.绑定自定义事件:
    1.第-种方式，在父组件中: <Demo @atguigu="test"/> 或<Demo v-on:atguigu="test"/>
    2.第二种方式，在父组件中: 
      <Demo ref="demo"/>
       mounted(){
       this .$refs.xxx. $on(' atguigu' ,this.test)
       }
    3.若想让自定义事件只能触发-次，可以使用once修饰符，或$once方法。
  4.触发自定义事件: this. $emit('atguigu'，数据)
  5.解绑自定义事件this. $off(' atguigu' )
  6.组件上也可以绑定原生DOM事件，需要使用native修饰符。
  7.注意:通过this. $refs . xxx. $on( 'atguigu'，回调)绑定自定义事件时，回调要么配置在methods中，要么用箭头函数，否则this指向会出问题!
## 消息汀岡与友布(pubsub)
    1.一种组件问通信的方式，适用于任意组件问通信。
    2. 使用步骤:
      1. 安装pubsub: npm i pubsub-js
      2.引入: import pubsub from 'pubsub-js'
      3.接收数据: A组件想接收数据，则在A组件中订阅消息，订阅的回调留在A组件自身。
        methods()(
        demo(data)(.....
          )
        mounted() (
          this.pid . pubsub. subscribe( 'xж*" ,this.demo) //订阅消息
        )    
    4. 提供数据: pubsub -publish('xx" ,数据)
    5. 最好在bebeforeDestory钩子中，用PubSub.unsubscpibe(pid)去<span sty1e="color:red">取消订阅</span>
## nextTick
  1.语法: this. SnextTick(团调函数)
  2.作用:在下一-次 DOM更新结束后执行其指定的回调。
  3.什么时候用:当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。
## 3.写法:
  1.准备好样式:
    元素进入的样式:
      1, v-enter:进入的起点
      2. v-enter-active;进入过程中
      3. venter-40:进入的降点
    ●元素离开的样式:
      1. vleave:离开的起点
      2. -leave-active:离开过程中
      3. v-leave-to:离开的峰点  
  2.使用transition包真要过度的元素，并配置name属性:
    <transition name='hello'>
    <h1 v-show="isShow">你好呀</h1>
    </transition>
  3.备注:若有多个元素需要过度，则需要使用: ctramsition-group), 且每个元素都要指定key值。
## vue脚手架配置代理
  方法一
    在vue.config.js中添加如下配置: .
    devServer:{
    proxy:"http://localhost:5000
    说明:
      1.优点:配置简单,请求资源时直接发给前端(8080) 即可。
      2.缺点:不能配置多个代理，不能灵活的控制请求是否走代理。
      3.工作方式:若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器(优先匹配前端资源)
  方法二
    编写vue.config.js配置具体代理规则:
    module. exports = {
       devServer:
       proxy: {
       '/api1': {// 匹配所有以'/apil '开头的请求路径
       target: 'http://localhost:5000',// 代理目标的基础路径
       changeOrigin: true,
       pathRewrite: {'^/api1': ''}
       },
       '/api2': {//匹配所有以'/api2' 开头的请求路径
       target: ' http://localhost:5001',//代理目标的基础路径
       changeOrigin: true,
       pathRewrite: {'^/api2': "'}
        }
       }
      }
      /*
        changeOrigin设置为true时，服务器收到的请求头中的host为: localhost: 5000
        changeOrigin设置为false时，服务器收到的请求头中的host为: localhost: 8080
        changeOrigin默认值为true
      */
    说明:
      1.优点:可以配置多个代理，且可以灵活的控制请求是否走代理。
      2.缺点:配置略微繁琐，请求资源时必须加前缀。
## 插槽
  1.作用:让父组件可以向子组件指定位置插入htm结构，也是- -种组件间通信的方式，适用于父组件===>子组件。
  2.分类:默认插槽、具名插槽、作用域插槽
  3.使用方式:
    1.默认插槽:
      父组件中，
        <Category>
        <div>htm1结构1</div>
        </Category>
      子组件中，
        <template>
        <div>
        <1--定义插槽-->
        <slot>插槽默认内容...</slot>
        </div>
        </template>
    2.具名插槽:
      父组件中:
        <Category>
        <template slot="center">
        <div>html1</div>
        </template>
        <template v-slot='footer'>
        <div>htm12</div>
        </template>
        </Category>
      子组件中，
        <template>
        <div>
        <!--定乂插槽-->
        <slot name="center" >内容..</slot>
        <slot namea="footer" >内容2...</slot>
        </div>
        </template>
    3. 作用域插槽:
      1.理解:数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定。 (games数据在Category组件中， 但使用
      数据所遍历出来的结构由App组件决定)
      2. 具体编码:
      父组件中，
        <Category>
        <template scope="scopeData">
        <1人生成的是u1列表-->
        <ul>
        <li v-for="g in scopeData-games" :key="g">{{e}}</li>
        </ul>
        </template>
        </Category>
        <Category>
        <template slot-scope=" scopeData">
        <!--生成的是h4柝題-->
        <h4 v-for="g in scopeData.games" :key="g">{{8}}</h4>
        </template>
        </Category>
      子组件中，
        <template>
        <div>
        <slot :ganesa="games"></slot>
        </div>
        </template>
        <script>
        export default {
        name: 'Category'。
        props:['title'],
        //数据在子组件自身
        data() {
        return{
        games:['红色警戒"，"穿越火线"，“劲舞团'，‘超级玛丽']
        )
        </script>
## |Vuex
  1.概念
    在Vue中实现集中式状态(数据)管理的一个Vue插件,对vue应用中多个组件的共享状态进行集中式的管理(读/写)， 也是- 种组件
    间通信的方式，且适用于任意组件间通信。
  2.何时使用?
    多个组件需要共享数据时
  3.搭建vuex环境
    1. 创建文件: src/store/ index.js
      引入Vue核心库
      import Vue from 'vue '
      引入Vuex
      import Vuex from 'vuex'
      //应用Vuex插件
      Vue.use(Vuex)
      //准备actions对象一响应组件 中用户的动作
      const actions = (]
      //准备mutations对象一修改state中的数据
      const mutations = f ]
      //准备state对象一保存具 体的数据
      const state = (]
      //6J3#AEstore
      export default new Vuex. Store({
      actions ,
      mutations,
      state
      })
    2.在main.js中創建vm吋侍入store配置項
      引入store
      import store from ' ./store'
      //创建vm
      new Vue({
      el: '#app',
      render: h => h(App),
      store
      })

