(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-searchRes"],{"1b33":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{user:[],opp:[],oScore:[],uScore:[]}},onLoad:function(){var e=this;uni.request({url:"http://localhost/SearchAllUsers",method:"GET",data:{user_name:getApp().globalData.searchUserName,real_name:getApp().globalData.searchRealName},success:function(t){e.user=t.data.data.user,e.opp=t.data.data.opp,e.uScore=t.data.data.uScore,e.oScore=t.data.data.oScore},fail:function(){},complete:function(){}})}};t.default=o},"34cb":function(e,t,a){"use strict";var o=a("ea42"),i=a.n(o);i.a},"6bad":function(e,t,a){"use strict";a.r(t);var o=a("1b33"),i=a.n(o);for(var n in o)"default"!==n&&function(e){a.d(t,e,function(){return o[e]})}(n);t["default"]=i.a},"99b9":function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"hello"},[a("v-uni-view",{staticClass:"title"},[e._v("用户名："+e._s(e.user.RealName))]),a("v-uni-view",{staticClass:"title"},[e._v("编号："+e._s(e.user.UserName))]),a("v-uni-view",{staticClass:"title"},[e._v("目前得分："+e._s(e.uScore.Score))]),a("v-uni-view",{staticClass:"title-o"},[e._v("对手名："+e._s(e.opp.RealName))]),a("v-uni-view",{staticClass:"title-o"},[e._v("编号："+e._s(e.opp.UserName))]),a("v-uni-view",{staticClass:"title-o"},[e._v("对手得分："+e._s(e.oScore.Score))])],1)],1)},i=[];a.d(t,"a",function(){return o}),a.d(t,"b",function(){return i})},cd5c:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,".hello[data-v-5b4ff428]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.title[data-v-5b4ff428]{\n\t/* color: #8f8f94; */color:#000;font-weight:700;margin-top:%?50?%}.title-o[data-v-5b4ff428]{color:#555;font-weight:700;margin-top:%?50?%}",""])},ea42:function(e,t,a){var o=a("cd5c");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=a("4f06").default;i("d9e93798",o,!0,{sourceMap:!1,shadowMode:!1})},f5d6:function(e,t,a){"use strict";a.r(t);var o=a("99b9"),i=a("6bad");for(var n in i)"default"!==n&&function(e){a.d(t,e,function(){return i[e]})}(n);a("34cb");var s=a("2877"),r=Object(s["a"])(i["default"],o["a"],o["b"],!1,null,"5b4ff428",null);t["default"]=r.exports}}]);