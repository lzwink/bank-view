(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-draw"],{"4b4d":function(t,e,n){"use strict";n.r(e);var i=n("96ee"),a=n("e9c9");for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);n("4ec6");var o=n("2877"),u=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"749d3fba",null);e["default"]=u.exports},"4ec6":function(t,e,n){"use strict";var i=n("52f2"),a=n.n(i);a.a},"52f2":function(t,e,n){var i=n("9377");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("42d032c2",i,!0,{sourceMap:!1,shadowMode:!1})},9377:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".content[data-v-749d3fba]{padding-top:%?0?%;padding-left:%?0?%;padding-right:%?0?%;padding-bottom:%?0?%}.hello[data-v-749d3fba]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}",""])},"96ee":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content",staticStyle:{"background-color":"#f12e32"}},[n("v-uni-view",{staticClass:"hello"},[n("v-uni-image",{staticStyle:{width:"750upx",height:"462upx"},attrs:{src:"../../static/img/cj_top.jpg"}}),2==t.isSign?n("v-uni-image",{staticStyle:{width:"750upx",height:"77upx"},attrs:{src:"../../static/img/cj_btn.jpg"},on:{click:function(e){e=t.$handleEvent(e),t.createSign(e)}}}):t._e(),1==t.isSign?n("v-uni-image",{staticStyle:{width:"750upx",height:"77upx"},attrs:{src:"../../static/img/cj_btn_2.jpg"}}):t._e(),2==t.isDraw?n("v-uni-image",{staticStyle:{width:"750upx",height:"759upx"},attrs:{src:"../../static/img/cj_wait.jpg"},on:{click:function(e){e=t.$handleEvent(e),t.createDraw(e)}}}):t._e(),1==t.isDraw?n("v-uni-image",{staticStyle:{width:"750upx",height:"759upx"},attrs:{src:"../../static/img/cj_down.jpg"}}):t._e()],1)],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},bac3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{userName:"",isSign:0,isDraw:0,dayNum:0}},onLoad:function(){var t=this;uni.request({url:"http://"+getApp().globalData.urlStr+"/Check",method:"GET",data:{},success:function(e){0==e.data.code?t.userName=e.data.data:uni.redirectTo({url:"../login/login"})},fail:function(){},complete:function(){}})},mounted:function(){this.getUserInfo()},methods:{getUserInfo:function(){var t=this;uni.request({url:"http://"+getApp().globalData.urlStr+"/GetLoginUser",method:"GET",data:{},success:function(e){0==e.data.code?(t.isDraw=e.data.data.IsDraw,t.isSign=e.data.data.IsSign):uni.navigateTo({url:"../login/login"})},fail:function(){},complete:function(){}})},createSign:function(){var t=this;uni.request({url:"http://"+getApp().globalData.urlStr+"/CreateSign",method:"GET",data:{},success:function(e){var n=t;0==e.data.code?uni.showModal({content:"签到成功",showCancel:!1,success:function(t){t.confirm&&n.$router.go(0)}}):uni.showModal({content:"签到失败，请重试！",showCancel:!1,success:function(){uni.switchTab({url:"../main/main"})}})},fail:function(){},complete:function(){}})},createDraw:function(){var t=this;uni.request({url:"http://"+getApp().globalData.urlStr+"/CreateDraw",method:"GET",data:{},success:function(e){102==e.data.code&&uni.showModal({content:"抱歉，暂未达到抽奖条件！",showCancel:!1,success:function(e){var n=t;e.confirm&&n.$router.go(0)}}),0==e.data.code&&uni.showModal({title:"恭喜您获得",content:e.data.data,showCancel:!1,success:function(e){var n=t;e.confirm&&n.$router.go(0)}})},fail:function(){},complete:function(){}})}}};e.default=i},e9c9:function(t,e,n){"use strict";n.r(e);var i=n("bac3"),a=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);e["default"]=a.a}}]);