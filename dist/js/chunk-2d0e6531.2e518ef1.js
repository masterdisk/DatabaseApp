(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e6531"],{"97eb":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"event-single"},[n("section",{staticClass:"hero is-primary"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[t._v(t._s(t.event.name))]),n("h2",{staticClass:"subtitle"},[n("strong",[t._v("Date:")]),t._v(" "+t._s(t.event.date)+" "),n("br"),n("strong",[t._v("Time:")]),t._v(" "+t._s(t.event.time)+" ")])])])]),n("section",{staticClass:"event-content"},[n("div",{staticClass:"container"},[n("p",{staticClass:"is-size-4 description"},[t._v(t._s(t.event.description))]),n("p",{staticClass:"is-size-5"},[n("strong",[t._v("Location:")]),t._v(" "+t._s(t.event.location)+" ")]),n("p",{staticClass:"is-size-5"},[n("strong",[t._v("Category:")]),t._v(" "+t._s(t.event.category)+" ")]),n("div",{staticClass:"event-images columns is-multiline has-text-centered"},t._l(t.event.images,(function(e){return n("div",{key:e.id,staticClass:"column is-one-third"},[n("img",{attrs:{alt:""+t.event.name,src:""+e}})])})),0)])])])},i=[],a=n("1da1"),r=(n("96cf"),n("314b")),c={name:"EventSingle",data:function(){return{event:{}}},created:function(){this.getEventData()},methods:{getEventData:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.getTokenSilently();case 2:n=e.sent,r["a"].getEventSingle(t.$route.params.id,n).then(function(e){t.$set(t,"event",e)}.bind(t));case 4:case"end":return e.stop()}}),e)})))()}}},o=c,v=n("2877"),l=Object(v["a"])(o,s,i,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0e6531.2e518ef1.js.map