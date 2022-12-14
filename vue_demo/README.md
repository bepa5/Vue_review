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
  4.基本使用
    1.初始化数据、配置actions、配置mutations，操作文件store.js
    //引入vue核心库
    import Vue from 'vue "
    //引入vuex
    import Vuex from 'vuex "
    //引用vuex
    Vue.use(Vuex)
    const actions = {
      //响应组件中加的动作
      jia(context,value){
            console.log(' actions中的jia被调用了" , miniStore ,value)
            context. commit( 'JIA' ,value)
          },
      }
    const mutations = {
    //执行加
        JIA(state,value)f
         console.log( " mutations中的JIA被调用了" , state,value)
            state.sum += value 
          }
        }
    //初始化数据
    const state ={
    sum:0
    )
    //创建并暴露store
    export default new Vuex. Store((
      actions ,
      mutations,
      state,
    })
    2.组件中读取vuex中的数据: $store. state. sum |
    3.组件中修改vuex中的数据: $store.dispatch( 'action中的方法名'，数据)或$store. commit(，mutations中的方法名' ,数据)
    备注:若没有网络请求或其他业务逻辑，组件中也可以越过actions,即不写dispatch,直接编写commit
  5.getters的使用
    1.概念:当state中的数据需要经过加工后再使用时，可以使用getters加工。
    2.在store.js中追加getters配置
    const getters = {
    bigSum(state){
    return state.sum * 10
    }
    //创建并暴露 store
    export default new Vuex.Store( f
      getters
    ])
    3.组件中读取数据: $store. getters . bigSum
  6.四个map方法的使用
    1. mapState方法:用于幇助我仞映射state中的数据カ汁算属性
      computed: {
      //借助mapState生成计算属性，(对象写法)
      .mapState({sum: 'sum' ,school:'school' ,subject:'subject'}),
      //借助mapState生成计算属性(数组写法)
      ...mapState(['sum', 'school', 'subject']),
      ),
    2. mapGetters方法:用于幇助我們映射getters中的数据カ汁算属性
      computed:
      // 借助mapGetters生成计算属性: bigSum (对象写法)
      ...mapGetters({bigSum: 'bigSum'}),
      1/#B)mapGetters生成计算属性- bigSum (数组写法)
      .. . mapGetters(['bigSum'])
      ),
    3. mapActions方法:用于幇助我們生成与actions 対活的方法，即:包含$store . dispatch(xx)的凾数
      methods:{
      //fmapActionsE59: incrementOdd, incrementWait (对象形式)
      ...mapActions((increment0dd: 'jia0dd' , incrementWait: 'jiaWait'))
      //fmapActions5t; increment0dd. incrementWait (数组形式)
      . .mapActions(['jia0dd' , " jiaWait'])
      }
    4. mapMutations方法:用于幇助我們生成与mutations対活的方法，即:包含$store. commit(xxx)的凾数
      methods:{
      //fmapActions生成: increment. decrement (对象形式)
      .. . mapMutations((increment: 'JIA' ,decrement:'JIAN']),
      //RimapMutations生成; JIA. JIAN (数组形式)
      .mapMutations(['JIA','JIAN']),
      }
      备注: mapActions 与mapMutations使用时，若需要传递参数需要:在模板中绑定事件时传递好参数，否则参数是事件对象。
  7.模块化+命名空间
    1.目的:让代码更好维护，让多种数据分类更加明确。
    2.修改store.js
      const countAbout = {
      namespaced:true,//开启命名空间
      state:{x:1},
      mutations :
      { ... },
      actions: { ... },
      getters:
        bigSum(state){
         return state.sum寒10
          }
        }
      }
      const personAbout = {
        namespaced:true,//开启命名空间
        state:{ ... },
        mutations: { ... },
        actions: { ... }
      }
      const store = new Vuex. Store({
          modules: {
          countAbout ,
          personAbout
        }
      })
    3.开启命名空间后,组件中读取state数据:
      //方式一:自己直接读取
      this.$store.state. personAbout.list
      //方式二:借助mapState读取:
      .. . mapState('countAbout' ,[' sum', 'school'，'subject']),
    4.开启命名空间后，组件中读取getters数据:
      //方式一:自己直接读取
      this.$store. getters [ 'personAbout/firstPersonName ' ]
      //方式二:借助mapGetters读取:
      .. . mapGetters('countAbout‘，[ 'bigSum'])
    5.开启命名空间后，组件中调用dispatch
      //方式一:自己直接dispatch
      this.$store.dispatch(' personAbout/ addPersonWang' ,person)
      //方式二:借助mapActions:
      .. . mapActions(' countAbout '，{incrementOdd: 'jiaOdd '，incrementWait: 'jiaWait'})
    6.开启命名空间后，组件中调用commit
      //方式一:自己直接commit
      this. $store. commit(' personAbout/ADD PERSON ,person)
      //方式二:借助mapMutations:
      .. . mapMutations(' countAbout '，{increment: 'JIA' , decrement: 'JIAN'}),
## 6.1router
    6.1.1 vue-router的理解
      vue的一个插件库,专i门]用来实现SPA应用←
    6.1.2对SPA应用的理解←
      1.单页 Web应用(single page web application, SPA)。。
      2.整个应用只有一 个完整的页面。。index. html
      3.点击页面中的导航链 受不会刷新页面只会做页面的局部更新。9 )
      4.数据需要通过 ajax请求获取。
    6.1.3路由的理解←
      1.什么是路由?
        1. 一个路由就是一组映射关系(key - value) 。
        2. key 为路径, value可能是function或componente
      2.路由分类
        1. 后端路由:
        1)理解: value是function,用于处理客户端提交的请求。
        2)工作过程: 服务器接收到个请求时，根据请求路径找到匹配的函数来处理请求，返回响应数据。
    6.1.4.基本使用
      1.安装vue-router, 命令: ngm i vue-router
      2.应用插件: Vue .use(VueRouter)
      3.编写router配置项:
      //引入VueRouter
      import VueRouter from ' vue-router '
      //引入Luyou组件
      import About from ' ../components/About '
      import Home from ， . . /components /Home '
      //创建router实例对象，去管理一组- -组的路由规则
      const router = new VueRouter({
      routes:[
      path: ' /about',
      component : About
      },
      path: ' /home'，,
      component : Home
      }
      })
      //暴露router
      export default router
      4.实现切换(active-class可配置高亮样式)
      <router-link active-class=" active" to="/about" >About</router-link>
      5.指定展示位置
      <router-view>< /router-view>
    6.1.5.几个注意点
      1.路由组件通常存放在pages文件夹，-般组件通常存放在components文件夹。
      2.通过切换，“隐藏" 了的路由组件，默认是被销毁掉的，需要的时候再去挂载。
      3.每个组件都有自己的$route属性，里面存储着自己的路由信息。
      4.整个应用只有一个router, 可以通过组件的$router属性获取到。
    6.1.6.多级路由(多级路由)
      1.配置路由规则，使用children配置项:
        routes:[
        {
        path: '/about',
        component:About,
        },
        path: '/home',
        component :Home,
        children:[ //通过children配置子级路由
        {
        path: 'news', //此处一定不要写: /news
        component :News
        },
        path: 'message',//此处一定不要写: /message
        component:Message
        }
        }
      2.跳转(要写完整路径) :
        <router-link to="/home/news" >News</router-link>
     6.1.7.query
       1.传递参数
         <!--跳转并携带query参数，to的字符串写法-->
         <router- link :to= " /home/ message/detail?id=666&title= iAF" >跳转 </router- link>
         <!--跳转并携带query参数，to的对象写法-->
         <router-link
         :to="{
         path:" /home/message/detail' ,
         query:{
         id:666,
         title: 'KTtF '
         }
         >跳转</router-link>
       2. 接受参数:
         $route . query.id
         $route. query.title
      6.1.8.命名路由
        1.作用:可以简化路由的跳转。
        2.如何使用
          1.给路由命名:
          {
          path:' /demo',
          component :Demo ,
          children:[
          {
          path:'test' ,
          component:Test,
          children: [
          {
          name: 'hello' //给路由命名
          path: 'welcome'，
          component :Hello,
          }
          ]
          }
        2.简化跳转:
          <1--简化前，需要写完整的路径-->
          <router-link to=" /demo/test/welcome" >跳转</router- link>
          <!--简化后，直接通过名字跳转-->
          <router-link :to=" {name : 'hello'}" >跳转</router-link>
          <!--简化写法配合传递参数-->
          <router-link
          :to="{
          name: 'hello'，
          query: {
          id:666,
          title:'你好'
          }
          }"
          >跳转</router-link>
    6.路由的params参数
      1.配置路由，声明接收params参数
      path:'/home',
      component Home ,
      children:[
      path: 'news " ,
      component :News
      ),
      (      
      component:Message,
      children:[
      (
      name:" xiangqing',
      path: " detail/:id/:title', //使用占位符声明接收params参数
      component :Detail
      ]
      )
      2. 传递参数
        <1--跳转并携带params参数，to的字符串写法-->
        <router-link :to=" /home/mes age/detail/666/fFtf " >i</router-link>
        <1--跳转并携带params参数，to的对象写法-->
        <router-link
        :to="(
        name: "xiangqing" ,
        params:{
        id:666,
        title: 'tRtF'
        }"
        >跳转</router-link>
        特别注意:路由携带params参数时， 若使用的对象写法，则不能使用path配置项，必须使用name配置!
      3.接收参数:
        $route.params.id
        $route.params.title
    7.props
      作用:让路由组件更方便的收到参数
      name: 'xiangqing',
      path: 'detail/:id',
      component :Detail,
      //第-种写法: props值为对象， 该对象中所有的key-value的组合最终都会通过props传给Detail组忤
      11 props:(a:900)
      //第二种写法: props值为布尔值，布尔值为true,则把路由收到的所有params参数通过props传给Detail组件
      11 props:true
      //第三种写法: props值为函数， 该函数返回的对象中每一组key-value都会通过props传拾Detai1组件
      props(route)(
      return
      id:route .query. id,
      title:route query.title
      )
      )
    8. <router -link>的replace属性I
      1.作用:控制路由跳转时操作浏览器历史记录的模式
      2.浏览器的历史记录有两种写入方式:分别为push和replace，push 是追加历史记录，replace 是替换当前记录。路由跳转日
      默认为push
      3.如何开启replace模式: <router-link replace ...... >News</router-link>
    9.编程式路由导航
      1.作用:不借助router-link>突現路由跳装，辻路由跳特更加灵活
      2.具体编码:
        //$router的API
        this.$router.push((
        nane:'xiangqing',
        params:{
        id:xxx,
        title:xx
        }
        })
        this. $router.replace((
        name:' xiangqing' ,
        params:f
        id:xxx,
        title:xxx
        }
        })
    10.缓存路由组件
      1.作用:让不展示的路由组件保持挂载，不被销毁。
      2.具体编码: .
      <keep-alive include="News">
      <router-view></router-view>
      </keep-alive>
    11.两个新的生命周期钩子
      1.作用:路由组件所独有的两个钩子,用于捕获路由组件的激活状态。|
      2.具体名字:
        1. activated 路由组件被激活时触发。
        2. deactivated 路由组件失活时触发。