"use strict";(self["webpackChunkvue2_webpack_nav"]=self["webpackChunkvue2_webpack_nav"]||[]).push([[355],{9222:function(t,e,n){n.d(e,{Z:function(){return r}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content",on:{click:function(e){return t.goUrl(t.data)}}},[t._t("default"),e("img",{attrs:{src:t.data.img||"https://cn.vuejs.org/images/logo.svg",alt:""}}),e("div",{staticClass:"content-name"},[e("h3",[t._v(t._s(t.data.name))]),""!==t.data.introduce?e("el-tooltip",{staticClass:"box-item",attrs:{effect:"dark",content:t.data.introduce,"raw-content":"",placement:"bottom"}},[e("p",[t._v(t._s(t.data.introduce))])]):e("p",{staticStyle:{visibility:"hidden"}},[t._v("占位")])],1),t._m(0)],2)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-ico"},[e("i",{staticClass:"fa fa-hand-o-right"})])}],s={props:{data:{type:Object}},data(){return{}},methods:{goUrl(t){this.$emit("funChild",t)}}},l=s,c=n(1001),o=(0,c.Z)(l,a,i,!1,null,"43c36702",null),r=o.exports},9355:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"nav-content"},[e("div",{staticClass:"nav-content"},[0!==t.webList.length?e("div",{staticClass:"nav-item-url"},[t._l(t.webList,(function(n,a){return e("WebItem",{key:n.name,attrs:{data:n},on:{funChild:t.funToUrl},scopedSlots:t._u([{key:"default",fn:function(){return[e("i",{staticClass:"el-icon-delete del",on:{click:function(e){return t.funDel(a)}}})]},proxy:!0}],null,!0)})})),e("div",{staticStyle:{width:"23.5%"}}),e("div",{staticStyle:{width:"23.5%"}}),e("div",{staticStyle:{width:"23.5%"}})],2):e("div",[e("el-empty",{attrs:{description:"暂无最近浏览"}})],1)])])},i=[],s=n(9222),l={name:"index",components:{WebItem:s.Z},data(){return{webList:[]}},created(){this.webList=null===localStorage.getItem("newWeb")?[]:JSON.parse(localStorage.getItem("newWeb"))},mounted(){},watch:{},methods:{funToUrl(t){window.open(t.url)},funDel(t){this.webList.splice(t,1),localStorage.setItem("newWeb",JSON.stringify(this.webList)),this.webList=null===localStorage.getItem("newWeb")?[]:JSON.parse(localStorage.getItem("newWeb"))}}},c=l,o=n(1001),r=(0,o.Z)(c,a,i,!1,null,"f52e3cba",null),u=r.exports}}]);