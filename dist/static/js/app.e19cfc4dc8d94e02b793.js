webpackJsonp([1],{"+3og":function(t,e){},"0TA7":function(t,e){},"4yJi":function(t,e){},BYnC:function(t,e){},CYXU:function(t,e){},M2nq:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7RXJ"),r=a.n(n),o=a("Ehs3"),s=a.n(o),i=a("Bbgj"),u=a.n(i),c=a("0r0Y"),l=a.n(c),m=a("kQvj"),d=a.n(m),f=a("/y42"),h=a.n(f),p=a("bxa5"),v=a.n(p),b=a("oM7C"),g=a.n(b),_=a("4Wwg"),w=a.n(_),x=a("i5wL"),k=a.n(x),$=a("ZyiM"),C=a.n($),T=a("7+uW"),j=a("NYxO");T.default.use(j.a);var y={setHeader:function(t,e){document.title=e.text||"",t.header.text=e.text||"",t.header.show=e.show||!1,t.header.back=e.back||!1},setNavbar:function(t,e){t.navbar.item=e.item||"home",t.navbar.show=e.show||!1}},A=new j.a.Store({state:{pager:{height:"100%"},header:{show:!1,text:"",back:!1},navbar:{item:"home",show:!1}},mutations:y,actions:{}}),H={name:"App",mounted:function(){A.state.pager.height=document.querySelector(".app-content").clientHeight+"px"},data:function(){return{}}},U={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t.$store.state.header.show?a("mu-appbar",{staticClass:"app-header",attrs:{"z-depth":"3",color:"pink",textColor:"#fff"}},[t.$store.state.header.back?a("mu-button",{attrs:{slot:"left",icon:""},on:{click:function(e){t.$router.back(-1)}},slot:"left"},[a("mu-icon",{attrs:{value:"keyboard_arrow_left"}})],1):t._e(),t._v("\n        "+t._s(t.$store.state.header.text)+"\n        "),a("mu-button",{attrs:{slot:"right",icon:""},slot:"right"})],1):t._e(),t._v(" "),a("div",{staticClass:"app-content",style:{top:t.$store.state.header.show?"56px":"0",bottom:t.$store.state.navbar.show?"56px":"0"}},[a("router-view")],1),t._v(" "),t.$store.state.navbar.show?a("mu-bottom-nav",{staticClass:"app-navbar",attrs:{shift:"",value:t.$store.state.navbar.item,color:"pink"},on:{"update:value":function(e){t.$set(t.$store.state.navbar,"item",e)}}},[a("mu-bottom-nav-item",{attrs:{to:"/",value:"home",title:"首 页",icon:"home"}}),t._v(" "),a("mu-bottom-nav-item",{attrs:{to:"/order",value:"order",title:"订 单",icon:"reorder"}}),t._v(" "),a("mu-bottom-nav-item",{attrs:{to:"/cart",value:"cart",title:"购物车",icon:"books"}}),t._v(" "),a("mu-bottom-nav-item",{attrs:{to:"/user",value:"user",title:"会 员",icon:"person"}})],1):t._e()],1)},staticRenderFns:[]};var V=a("VU/8")(H,U,!1,function(t){a("QVtn")},null,null).exports,Y=a("/ocq"),R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("mu-card",{staticStyle:{width:"100%","max-width":"375px",margin:"0 auto"}},[e("mu-card-header",{attrs:{title:"Myron Avatar","sub-title":"sub title"}},[e("mu-avatar",{attrs:{slot:"avatar"},slot:"avatar"},[e("img",{attrs:{src:"https://muse-ui.org/img/uicon.ac3913bf.jpg"}})])],1),this._v(" "),e("mu-card-media",{attrs:{title:"Image Title","sub-title":"Image Sub Title"}},[e("img",{attrs:{src:"https://muse-ui.org/img/sun.a646a52d.jpg"}})]),this._v(" "),e("mu-card-title",{attrs:{title:"Content Title","sub-title":"Content Title"}}),this._v(" "),e("mu-card-text",[this._v("\n        散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。\n        调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。\n        似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，\n        找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！\n    ")])],1)},staticRenderFns:[]},M=a("VU/8")({name:"Home",data:function(){return{msg:"Welcome to Your Vue.js App"}}},R,!1,null,null,null).exports,E={data:function(){return{num:10,text:"List",loading:!1,refreshing:!1}},methods:{refresh:function(){var t=this;this.refreshing=!0,this.$refs.container.scrollTop=0,setTimeout(function(){t.num=10,t.refreshing=!1,t.text="List"===t.text?"Menu":"List"},2e3)},load:function(){var t=this;this.loading=!0,setTimeout(function(){t.num+=10,t.loading=!1},2e3)}}},F={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("mu-paper",{staticClass:"demo-loadmore-wrap",attrs:{"z-depth":1}},[a("mu-container",{ref:"container",staticClass:"demo-loadmore-content"},[a("mu-load-more",{attrs:{refreshing:t.refreshing,loading:t.loading},on:{refresh:t.refresh,load:t.load}},[a("mu-list",[t._l(t.num,function(e){return[a("mu-list-item",[a("mu-list-item-title",[t._v(t._s(t.text)+" Item "+t._s(e))])],1),t._v(" "),a("mu-divider")]})],2)],1)],1)],1)],1)},staticRenderFns:[]};var L=a("VU/8")(E,F,!1,function(t){a("0TA7")},null,null).exports,S={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("购物车")])},staticRenderFns:[]},W=a("VU/8")({name:"Cart",data:function(){return{msg:"Welcome to Your Vue.js App"}}},S,!1,null,null,null).exports,q={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("用户列表")])},staticRenderFns:[]},N=a("VU/8")({name:"User",data:function(){return{msg:"Welcome to Your Vue.js App"}}},q,!1,null,null,null).exports;T.default.use(Y.a);var I=new Y.a({routes:[{path:"/",name:"Home",component:M,meta:{header:{show:!0,back:!1,text:"商城首页"},navbar:{show:!0,item:"home"}}},{name:"Order",path:"/order",component:L,meta:{header:{show:!0,back:!0,text:"我的订单"},navbar:{show:!0,item:"order"}}},{name:"Cart",path:"/cart",component:W,meta:{header:{show:!0,back:!0,text:"购物车"},navbar:{show:!0,item:"cart"}}},{name:"User",path:"/user",component:N,meta:{header:{show:!0,back:!0,text:"会员中心"},navbar:{show:!0,item:"user"}}}]}),X=(a("bSGY"),a("k84x"),a("mtWM")),z=a.n(X);T.default.config.productionTip=!1,T.default.use(C.a),T.default.use(k.a),T.default.use(w.a),T.default.use(g.a),T.default.use(v.a),T.default.use(j.a),T.default.use(h.a),T.default.use(d.a),T.default.use(l.a),T.default.use(u.a),T.default.use(s.a),T.default.use(r.a),z.a.defaults.withCredentials=!0,z.a.defaults.baseURL="http://api.data.cuci.cc",T.default.prototype.axios=z.a,I.beforeEach(function(t,e,a){A.commit("setHeader",t.meta.header),A.commit("setNavbar",t.meta.navbar),a()}),new T.default({store:A,router:I,el:"#app",components:{App:V},template:"<App/>"})},QVtn:function(t,e){},RH2p:function(t,e){},RUnH:function(t,e){},XjTe:function(t,e){},YoT3:function(t,e){},Zqsk:function(t,e){},bSGY:function(t,e){},bmTF:function(t,e){},hmHg:function(t,e){},"i+Ai":function(t,e){},k84x:function(t,e){},kLMm:function(t,e){},"m/7z":function(t,e){},mhXF:function(t,e){},pCZj:function(t,e){},q1I5:function(t,e){},uPa8:function(t,e){}},["NHnr"]);