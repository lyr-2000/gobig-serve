(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-570bbf65"],{9897:function(t,e,r){},a78e:function(t,e,r){var a,n;
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */(function(s){var i;if(a=s,n="function"===typeof a?a.call(e,r,e,t):a,void 0===n||(t.exports=n),i=!0,t.exports=s(),i=!0,!i){var o=window.Cookies,c=window.Cookies=s();c.noConflict=function(){return window.Cookies=o,c}}})((function(){function t(){for(var t=0,e={};t<arguments.length;t++){var r=arguments[t];for(var a in r)e[a]=r[a]}return e}function e(t){return t.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}function r(a){function n(){}function s(e,r,s){if("undefined"!==typeof document){s=t({path:"/"},n.defaults,s),"number"===typeof s.expires&&(s.expires=new Date(1*new Date+864e5*s.expires)),s.expires=s.expires?s.expires.toUTCString():"";try{var i=JSON.stringify(r);/^[\{\[]/.test(i)&&(r=i)}catch(l){}r=a.write?a.write(r,e):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var o="";for(var c in s)s[c]&&(o+="; "+c,!0!==s[c]&&(o+="="+s[c].split(";")[0]));return document.cookie=e+"="+r+o}}function i(t,r){if("undefined"!==typeof document){for(var n={},s=document.cookie?document.cookie.split("; "):[],i=0;i<s.length;i++){var o=s[i].split("="),c=o.slice(1).join("=");r||'"'!==c.charAt(0)||(c=c.slice(1,-1));try{var l=e(o[0]);if(c=(a.read||a)(c,l)||e(c),r)try{c=JSON.parse(c)}catch(d){}if(n[l]=c,t===l)break}catch(d){}}return t?n[t]:n}}return n.set=s,n.get=function(t){return i(t,!1)},n.getJSON=function(t){return i(t,!0)},n.remove=function(e,r){s(e,"",t(r,{expires:-1}))},n.defaults={},n.withConverter=r,n}return r((function(){}))}))},b7a5:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"top container-fluid p-0",attrs:{id:"top"}},[a("nav",{staticClass:"topBar navbar"},[a("div",{staticClass:"col"},[a("a",{staticClass:"d-flex align-items-center",staticStyle:{width:"6rem"},attrs:{href:t.indexUrlPre}},[a("img",{staticClass:"img-fluid",attrs:{src:r("4ffd"),alt:""}})])]),a("div",{staticClass:"col"},[a("div",{staticClass:"row no-gutters justify-content-center align-items-center"},[a("div",{staticClass:"searchBar col-8"},[a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.keyWord,expression:"keyWord",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{type:"text",title:"你想要什么？",name:"keyWord"},domProps:{value:t.keyWord},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.toSearch(t.keyWord)},change:function(e){t.keyWord=e.target.value}}})]),a("button",{staticClass:"btn btn-info col-3 col-xl-2",on:{click:function(e){return t.toSearch(t.keyWord)}}},[a("i",{staticClass:"fa fa-search"})])])]),t.login?a("div",{staticClass:"col d-flex justify-content-end"},[a("div",{staticClass:"row no-gutters align-items-center justify-content-end mr-2"},[a("a",{staticClass:"d-flex mx-3",staticStyle:{width:"2.5rem",height:"2.5rem"},attrs:{target:"_blank",href:t.userManageUrlPre}},[a("img",{staticClass:"rounded-circle img-fluid ",attrs:{src:t.user.figure,alt:""}})]),a("a",{staticClass:"mx-3",attrs:{href:t.personalSpaceUrlPre+t.user.uid,target:"_blank"}},[t._v("个人空间")]),a("a",{staticClass:"mx-3",attrs:{href:t.personalSpaceUrlPre+t.user.uid}},[t._v("收藏")]),a("a",{staticClass:"mx-3"},[t._v("投稿")])])]):a("div",{staticClass:"col d-flex justify-content-end"},[a("div",{staticClass:"row no-gutters align-items-center justify-content-end mr-3"},[a("a",{staticClass:"d-flex",staticStyle:{width:"2rem",height:"2rem"},attrs:{href:t.userLogin}},[a("img",{staticClass:"img-fluid",attrs:{src:r("a2f9"),alt:""}})]),a("a",{staticClass:"login font-weight-bolder ml-3",attrs:{href:t.userLogin}},[t._v("登录")]),a("a",{staticClass:"register font-weight-bolder ml-3",attrs:{href:t.userRegister}},[t._v("注册")])])])]),a("div",{staticClass:"b-img",attrs:{id:"bImg"}},[a("a",{staticClass:"big-logo d-flex",staticStyle:{width:"10rem"},attrs:{href:t.indexUrlPre}},[a("img",{staticClass:"img-fluid",attrs:{src:r("4ffd"),alt:""}})]),a("a",{staticClass:"leader-board btn btn-lg btn-danger d-block",attrs:{href:t.leaderBoardUrlPre}},[t._v("排行榜")])])])},n=[],s=r("2f14"),i=(r("a78e"),{name:"largeTop",data(){return{indexUrlPre:s["b"].indexUrlPre,searchUrlPre:s["b"].searchUrlPre,personalSpaceUrlPre:s["b"].personalSpaceUrlPre,userManageUrlPre:s["b"].userManageUrlPre,userLogin:s["b"].userLoginUrlPre,userRegister:s["b"].userRegisterUrlPre,leaderBoardUrlPre:s["b"].leaderBoardUrlPre,user:{},keyWord:"",login:!1}},created(){this.userConditionCheck()},methods:{toSearch(t){window.location=this.searchUrlPre+t},getUserContent(){var t={num:0};axios({method:"post",url:"user/getUserContent",data:t,headers:{Authorization:localStorage.getItem("token"),"Content-Type":"application/json; charset=utf-8"}}).then(t=>{t.data?(this.user=t.data,this.$store.state.userContent=t.data,this.login=!0):(this.login=!1,alert("登录失败，请重新登录"),window.location=this.userLogin)}).catch((function(t){console.log(t)}))},userConditionCheck(){localStorage.getItem("token")?axios({method:"post",url:"user/userConditionCheck",headers:{Authorization:localStorage.getItem("token"),"Content-Type":"application/json; charset=utf-8"}}).then(t=>{"200"===t.data.status?this.getUserContent():this.login=!1}).catch((function(t){console.log(t)})):this.login=!1}}}),o=i,c=(r("c238"),r("2877")),l=Object(c["a"])(o,a,n,!1,null,"56ea09e6",null);e["default"]=l.exports},c238:function(t,e,r){"use strict";var a=r("9897"),n=r.n(a);n.a}}]);