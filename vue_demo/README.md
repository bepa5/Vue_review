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
