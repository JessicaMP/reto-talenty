(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{254:function(t,e,c){"use strict";c.r(e);var l=c(19),r=(c(45),c(131),c(68),c(132)),n={name:"Character",props:{data:{type:Object,required:!1}},methods:{getImage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.a;return t},formatDate:function(t){var e=t.split("T"),c=Object(l.a)(e,2),r=c[0],n=(c[1],r.split("-")),d=Object(l.a)(n,3),o=d[0],m=d[1],f=d[2];return"".concat(f,"/").concat(m,"/").concat(o)}}},d=c(12),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"grid gap-4 p-5 bg-white shadow rounded sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6"},[c("div",{staticClass:"flex justify-start items-center"},[c("img",{staticClass:"rounded-full h-14 w-14",attrs:{src:t.getImage(t.data.image),alt:"Photo"}}),c("h5",{staticClass:"mx-2 font-semibold"},[t._v(t._s(t.data.name||"Name"))])]),c("div",{staticClass:"flex justify-center items-center hidden md:block lg:block"},[c("h5",[t._v(t._s(t.data.status||"Status"))])]),c("div",{staticClass:"flex justify-center items-center hidden md:block lg:block"},[c("h5",[t._v(t._s(t.data.species||"Species"))])]),c("div",{staticClass:"flex justify-center items-center hidden md:block lg:block"},[c("h5",[t._v(t._s(t.data.gender||"Gender"))])]),c("div",{staticClass:"flex justify-center items-center"},[c("h5",[t._v(t._s(t.formatDate(t.data.created)))])]),c("div",{staticClass:"flex justify-center items-center"},[c("a",{staticClass:"text-blue-600 font-semibold",attrs:{href:t.data.url}},[t._v("Manage")])])])}),[],!1,null,null,null);e.default=component.exports}}]);