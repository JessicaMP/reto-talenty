(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(t,e,r){"use strict";r.r(e),e.default=function(){return{content:{}}}},121:function(t,e,r){"use strict";r.r(e),e.default={}},122:function(t,e,r){"use strict";r.r(e),e.default={setValue:function(t,e){var r=e.property,n=e.value;t[r]=n}}},123:function(t,e,r){"use strict";r.r(e);var n=r(189),o=r(6);r(46);e.default={nuxtServerInit:function(t,e){return Object(o.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.dispatch,e.req,r.next=4,n("getCharacters");case 4:case"end":return r.stop()}}),r)})))()},getCharacters:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var n,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.next=3,e.$axios.$get("https://rickandmortyapi.com/api/character");case 3:data=r.sent,n("setValue",{property:"content",value:data});case 5:case"end":return r.stop()}}),r)})))()},saveNewCharacter:function(t,data){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,c,l,f,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.commit,o=t.state,c=t.dispatch,e.next=3,c("getCharacters");case 3:l=Object.assign({},o.content),f=l.results.length,data.id=f,(d=Object(n.a)(l.results)).unshift(data),l.results=d,r("setValue",{property:"content",value:l});case 10:case"end":return e.stop()}}),e)})))()}}},124:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none",attrs:{type:"button"}},[e("span",{staticClass:"block relative w-6 rounded-sm bg-gray-300 h-0.5"}),e("span",{staticClass:"block relative w-6 rounded-sm bg-gray-300 mt-1 h-0.5"}),e("span",{staticClass:"block relative w-4 rounded-sm bg-gray-300 mt-1 h-0.5"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex items-center justify-center"},[e("img",{staticClass:"w-40",attrs:{src:r(173),alt:"Logo"}})])}],o=r(132),c={name:"HeaderBasic",data:function(){return{imageUrl:o.b}}},l=r(12),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-white shadow p-4 w-full"},[r("div",{staticClass:"flex justify-between items-center"},[t._m(0),t._m(1),r("div",{staticClass:"flex items-center justify-center"},[r("font-awesome-icon",{staticClass:"mx-5 text-gray-300 text-3xl",attrs:{icon:"bell"}}),r("font-awesome-icon",{staticClass:"mx-5 text-gray-300 text-3xl",attrs:{icon:"envelope"}}),r("img",{staticClass:"rounded-full h-14 w-14",attrs:{src:t.imageUrl,alt:"Photo"}})],1)])])}),n,!1,null,null,null);e.default=component.exports},125:function(t,e,r){"use strict";r.r(e);var n={name:"Header"},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-white shadow p-4 w-full"},[n("img",{staticClass:"w-40 hidden lg:block hidden md:block",attrs:{src:r(173),alt:"Logo"}}),n("div",{staticClass:"sm:hidden"},[n("div",{staticClass:"flex justify-between items-center"},[t._m(0),n("div",{staticClass:"flex items-center justify-center"},[n("h1",{staticClass:"text-4xl"},[t._v("Characters")]),n("font-awesome-icon",{staticClass:"mx-5 text-gray-300",attrs:{icon:"chevron-down"}})],1),n("font-awesome-icon",{staticClass:"mx-5 text-gray-300 text-1xl",attrs:{icon:"bell"}})],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none",attrs:{type:"button"}},[e("span",{staticClass:"block relative w-6 rounded-sm bg-gray-300 h-0.5"}),e("span",{staticClass:"block relative w-6 rounded-sm bg-gray-300 mt-1 h-0.5"}),e("span",{staticClass:"block relative w-4 rounded-sm bg-gray-300 mt-1 h-0.5"})])}],!1,null,null,null);e.default=component.exports},129:function(t,e,r){"use strict";e.a=function(t){var e=t.$axios,r=t.redirect;e.onError((function(t){500===t.response.status&&r("/sorry")}))}},130:function(t,e,r){"use strict";var n=r(0),o=r(14),c=r(54),l=r(185);o.a.autoAddCss=!1,o.c.add(l.a),n.a.component("font-awesome-icon",c.a)},132:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o}));var n="https://user-images.githubusercontent.com/11076563/128429888-2e2c3104-c617-421f-826a-9782faab5106.png",o="https://randomuser.me/api/portraits/women/7.jpg"},173:function(t,e,r){t.exports=r.p+"img/logo.cad16ec.png"},187:function(t,e,r){"use strict";var n=r(124),o=r(52),c={components:{HeaderBasic:n.default,NavigationBar:o.default}},l=r(12),component=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"grid sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-12"},[e("div",{staticClass:"shadow sm:col-span-1 md:col-span-1 lg:col-span-1 hidden md:block lg:block"},[e("NavigationBar")],1),e("div",{staticClass:"sm:col-span-1 md:col-span-11 lg:col-span-11"},[e("HeaderBasic"),e("Nuxt")],1)])}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{NavigationBar:r(52).default,HeaderBasic:r(124).default})},188:function(t,e,r){"use strict";var header=r(125),n=r(52),o={components:{Header:header.default,NavigationBar:n.default}},c=r(12),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"grid sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-12"},[e("div",{staticClass:"min-h-screen shadow sm:col-span-1 md:col-span-1 lg:col-span-1 hidden md:block lg:block"},[e("NavigationBar")],1),e("div",{staticClass:"sm:col-span-1 md:col-span-11 lg:col-span-11"},[e("Header"),e("Nuxt")],1)])}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{NavigationBar:r(52).default,Header:r(125).default})},190:function(t,e,r){r(191),t.exports=r(192)},236:function(t,e,r){"use strict";r.r(e),r.d(e,"store",(function(){return m}));var n=r(0),o=r(38),c=r(120),l=r(121),f=r(122),d=r(123);n.a.use(o.a);var m=new o.a.Store({modules:{state:c.default,actions:d.default,mutations:f.default,getters:l.default}})},52:function(t,e,r){"use strict";r.r(e);var n={name:"NavigationBar"},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"items-start justify-between w-full"},[r("aside",{staticClass:"flex flex-col items-center bg-white text-gray-700"},[t._m(0),r("ul",[t._m(1),r("li",{staticClass:"hover:bg-gray-100"},[r("a",{staticClass:"h-16 px-6 flex flex justify-center items-center w-full focus:text-orange-500",attrs:{href:"."}},[r("font-awesome-icon",{staticClass:"text-3xl text-gray-300",attrs:{icon:"th-large"}})],1)]),r("li",{staticClass:"hover:bg-gray-100"},[r("a",{staticClass:"h-16 px-6 flex flex justify-center items-center w-full focus:text-orange-500",attrs:{href:"."}},[r("font-awesome-icon",{staticClass:"text-3xl text-gray-300",attrs:{icon:"users"}})],1)]),r("li",{staticClass:"hover:bg-gray-100"},[r("a",{staticClass:"h-16 px-6 flex flex justify-center items-center w-full focus:text-orange-500",attrs:{href:"."}},[r("font-awesome-icon",{staticClass:"text-3xl text-gray-300",attrs:{icon:"car-side"}})],1)]),r("li",{staticClass:"hover:bg-gray-100"},[r("a",{staticClass:"h-16 px-6 flex flex justify-center items-center w-full focus:text-orange-500",attrs:{href:"."}},[r("font-awesome-icon",{staticClass:"text-3xl text-gray-300",attrs:{icon:"map"}})],1)]),r("li",{staticClass:"hover:bg-gray-100"},[r("a",{staticClass:"h-16 px-6 flex flex justify-center items-center w-full focus:text-orange-500",attrs:{href:"."}},[r("font-awesome-icon",{staticClass:"text-3xl text-gray-300",attrs:{icon:"envelope"}})],1)]),r("li",{staticClass:"hover:bg-gray-100"},[r("a",{staticClass:"h-16 px-6 flex flex justify-center items-center w-full focus:text-orange-500",attrs:{href:"."}},[r("font-awesome-icon",{staticClass:"text-3xl text-gray-300",attrs:{icon:"cog"}})],1)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mb-20 mt-5 h-16 flex items-center w-full justify-center"},[e("button",{staticClass:"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none",attrs:{type:"button"}},[e("span",{staticClass:"block relative w-6 rounded-sm bg-gray-300 h-0.5"}),e("span",{staticClass:"block relative w-6 rounded-sm bg-gray-300 mt-1 h-0.5"}),e("span",{staticClass:"block relative w-4 rounded-sm bg-gray-300 mt-1 h-0.5"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"hover:bg-gray-100"},[e("a",{staticClass:"h-16 px-6 flex flex justify-center items-center w-full focus:text-orange-500",attrs:{href:"."}},[e("div",{staticClass:"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block outline-none transform -rotate-90 focus:outline-none",attrs:{type:"button"}},[e("span",{staticClass:"block relative w-4 rounded-sm bg-gray-300 h-1"}),e("span",{staticClass:"block relative w-6 rounded-sm bg-gray-300 mt-1 h-1"}),e("span",{staticClass:"block relative w-4 rounded-sm bg-gray-300 mt-1 h-1"})])])])}],!1,null,null,null);e.default=component.exports}},[[190,8,1,9]]]);