"use strict";(self["webpackChunksanyue_imghub"]=self["webpackChunksanyue_imghub"]||[]).push([[782],{6782:function(e,s,a){a.r(s),a.d(s,{default:function(){return k}});var n=a(47),t=(a(5331),a(9648),a(2105)),o=(a(9092),a(6768)),r=a(5130);const i={class:"login"},u={class:"login-container"},l={class:"input-container"},c={class:"input-container"};function d(e,s,a,d,p,m){const h=t.WK,k=n.S2;return(0,o.uX)(),(0,o.CE)("div",i,[(0,o.Lk)("div",u,[s[5]||(s[5]=(0,o.Lk)("h1",null,"AdminLogin",-1)),(0,o.Lk)("div",l,[s[2]||(s[2]=(0,o.Lk)("a",{class:"input-name"},"用户名：",-1)),(0,o.bF)(h,{modelValue:p.username,"onUpdate:modelValue":s[0]||(s[0]=e=>p.username=e),placeholder:"请输入用户名",class:"username-input"},null,8,["modelValue"])]),(0,o.Lk)("div",c,[s[3]||(s[3]=(0,o.Lk)("a",{class:"input-name"},"密码：",-1)),(0,o.bF)(h,{modelValue:p.password,"onUpdate:modelValue":s[1]||(s[1]=e=>p.password=e),placeholder:"请输入密码",class:"password-input",type:"password","show-password":"",onKeyup:(0,r.jR)(m.login,["enter","native"])},null,8,["modelValue","onKeyup"])]),(0,o.bF)(k,{class:"submit",type:"primary",onClick:m.login},{default:(0,o.k6)((()=>s[4]||(s[4]=[(0,o.eW)("登录")]))),_:1},8,["onClick"])])])}a(4114),a(4979);var p={data(){return{password:"",username:""}},methods:{async login(){const e=btoa(`${this.username}:${this.password}`);try{const s=await fetch("/api/manage/check",{method:"GET",headers:{Authorization:`Basic ${e}`},credentials:"include"});401===s.status?this.$message.error("用户名或密码错误"):200===s.status?(this.$store.commit("setCredentials",e),this.$router.push("/dashboard")):this.$message.error("用户名或密码错误")}catch(s){this.$message.error("服务器错误")}}}},m=a(1241);const h=(0,m.A)(p,[["render",d],["__scopeId","data-v-50aaab2d"]]);var k=h}}]);
//# sourceMappingURL=782.76212525.js.map