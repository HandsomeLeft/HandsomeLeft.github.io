"use strict";(self["webpackChunksupermall"]=self["webpackChunksupermall"]||[]).push([[844],{2316:function(e,t,s){s.r(t),s.d(t,{default:function(){return v}});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("navbar",{staticClass:"home_nav"},[s("div",{attrs:{slot:"center"},slot:"center"},[e._v("SuperMall")])]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",name:"",id:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",name:"",id:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),s("button",{on:{click:function(t){return e.getHomeGoods(e.username,e.password)}}},[e._v("注册")])],1)},n=[],o=s(9669),a=s.n(o);function u(e){const t=a().create({baseURL:"http://127.0.0.1:8888",timeout:5e3});return t.interceptors.request.use((e=>e),(e=>{})),t.interceptors.response.use((e=>e.data),(e=>{console.log(e)})),t(e)}function l(e,t){return u({url:"/api/reguser",method:"post",data:{username:e,password:t}})}var i=s(1779),p={components:{navbar:i.Z},data(){return{username:"",password:"",res:[]}},methods:{getHomeGoods(e,t){l(e,t).then((e=>{console.log(e),"成功"==e.message&&(alert("成功！5秒后自动跳转"),setTimeout((()=>this.$router.replace("/home")),5e3)),this.res=e}))},test(e,t){console.log(e,t)}}},m=p,c=s(1001),d=(0,c.Z)(m,r,n,!1,null,null,null),v=d.exports}}]);
//# sourceMappingURL=844.6c982780.js.map