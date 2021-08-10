(window.webpackJsonp=window.webpackJsonp||[]).push([[3,4],{254:function(t,e,r){"use strict";r.r(e);var c=r(19),l=(r(45),r(131),r(68),r(132)),n={name:"Character",props:{data:{type:Object,required:!1}},methods:{getImage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.a;return t},formatDate:function(t){var e=t.split("T"),r=Object(c.a)(e,2),l=r[0],n=(r[1],l.split("-")),d=Object(c.a)(n,3),o=d[0],m=d[1],f=d[2];return"".concat(f,"/").concat(m,"/").concat(o)}}},d=r(12),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"grid gap-4 p-5 bg-white shadow rounded sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6"},[r("div",{staticClass:"flex justify-start items-center"},[r("img",{staticClass:"rounded-full h-14 w-14",attrs:{src:t.getImage(t.data.image),alt:"Photo"}}),r("h5",{staticClass:"mx-2 font-semibold"},[t._v(t._s(t.data.name||"Name"))])]),r("div",{staticClass:"flex justify-center items-center hidden md:block lg:block"},[r("h5",[t._v(t._s(t.data.status||"Status"))])]),r("div",{staticClass:"flex justify-center items-center hidden md:block lg:block"},[r("h5",[t._v(t._s(t.data.species||"Species"))])]),r("div",{staticClass:"flex justify-center items-center hidden md:block lg:block"},[r("h5",[t._v(t._s(t.data.gender||"Gender"))])]),r("div",{staticClass:"flex justify-center items-center"},[r("h5",[t._v(t._s(t.formatDate(t.data.created)))])]),r("div",{staticClass:"flex justify-center items-center"},[r("a",{staticClass:"text-blue-600 font-semibold",attrs:{href:t.data.url}},[t._v("Manage")])])])}),[],!1,null,null,null);e.default=component.exports},255:function(t,e,r){"use strict";r.r(e);var c=r(254),l={name:"Body",props:{data:{type:Object,required:!1}},components:{Character:c.default},methods:{addCharacter:function(){this.$router.push("/character/new")}}},n=r(12),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"m-12 relative sm:mx-6 md:mx-18 lg:mx-24"},[r("div",{staticClass:"flex flex-wrap items-end justify-between hidden md:flex hidden lg:flex"},[r("h1",{staticClass:"text-4xl"},[t._v("Characters"),r("span",{staticClass:"text-gray-400 mx-5 text-lg"},[t._v(t._s(t.data.info.count)+" Total")])]),r("button",{staticClass:"px-8 py-1 rounded-xl text-3xl font-medium text-white bg-blue-600 m-1 border border-indigo-600 transition-all flex items-center justify-end focus:outline-none hover:m-0 focus:m-0 hover:border-4 focus:border-4 hover:border-blue-800 hover:bg-blue-800 focus:border-purple-200 active:border-grey-900 active:text-grey-900 hover:shadow",on:{click:t.addCharacter}},[r("font-awesome-icon",{staticClass:"mx-5",attrs:{icon:"plus"}}),r("div",{staticClass:"bg-blue-500 p-2 px-4"},[t._v("New")])],1)]),r("div",{staticClass:"bottom-0 right-0 hidden sm:absolute hidden sm:block "},[r("button",{staticClass:"p-3 text-center text-white transition bg-blue-600 rounded-full h-20 w-20 shadow-2xl ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none",on:{click:t.addCharacter}},[r("font-awesome-icon",{staticClass:"text-3xl",attrs:{icon:"plus"}})],1)]),r("div",{staticClass:"grid text-gray-300 font-semibold my-5 mt-10 uppercase sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6"},[r("div",{staticClass:"flex justify-center items-center"},[r("h5",[t._v("Name")]),r("font-awesome-icon",{staticClass:"mx-5 text-blue-600",attrs:{icon:"chevron-down"}})],1),t._m(0),t._m(1),t._m(2),t._m(3),r("div",{staticClass:"flex justify-center items-center"})]),t._l(t.data.results,(function(t){return r("div",{staticClass:"my-5"},[r("Character",{key:t.id,attrs:{data:t}})],1)}))],2)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-center items-center hidden md:block lg:block"},[r("h5",[t._v("Status")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-center items-center hidden md:block lg:block"},[r("h5",[t._v("Species")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-center items-center hidden md:block lg:block"},[r("h5",[t._v("Gender")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-center items-center"},[r("h5",[t._v("Date Created")])])}],!1,null,null,null);e.default=component.exports}}]);