(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-userDetail"],{"235b":function(t,e,a){var i=a("488e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("69d1f287",i,!0,{sourceMap:!1,shadowMode:!1})},"303b":function(t,e,a){"use strict";a.r(e);var i=a("d154"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=o.a},"488e":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".hello[data-v-6b28f207]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.title[data-v-6b28f207]{\n\t/* color: #8f8f94; */color:#000;font-weight:700;margin-top:%?50?%}.title-o[data-v-6b28f207]{color:#555;font-weight:700;margin-top:%?50?%}",""])},d09d:function(t,e,a){"use strict";a.r(e);var i=a("d67d"),o=a("303b");for(var n in o)"default"!==n&&function(t){a.d(e,t,function(){return o[t]})}(n);a("eae3");var s=a("2877"),r=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,"6b28f207",null);e["default"]=r.exports},d154:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{user:[],opp:[],oScore:[],uScore:[]}},onLoad:function(){var t=this;uni.request({url:"http://"+getApp().globalData.urlStr+"/GetAllInfoById",method:"GET",data:{id:getApp().globalData.uId},success:function(e){t.user=e.data.data.user,t.opp=e.data.data.opp,t.uScore=e.data.data.uScore,t.oScore=e.data.data.oScore},fail:function(){},complete:function(){}})}};e.default=i},d67d:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"hello"},[a("v-uni-view",{staticClass:"title"},[t._v("用户名："+t._s(t.user.RealName))]),a("v-uni-view",{staticClass:"title"},[t._v("编号："+t._s(t.user.UserName))]),a("v-uni-view",{staticClass:"title"},[t._v("目前得分："+t._s((100*t.uScore.Score).toFixed(2)))]),a("v-uni-view",{staticClass:"title-o"},[t._v("对手名："+t._s(t.opp.RealName))]),a("v-uni-view",{staticClass:"title-o"},[t._v("编号："+t._s(t.opp.UserName))]),a("v-uni-view",{staticClass:"title-o"},[t._v("对手得分："+t._s((100*t.oScore.Score).toFixed(2)))])],1)],1)},o=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return o})},eae3:function(t,e,a){"use strict";var i=a("235b"),o=a.n(i);o.a}}]);