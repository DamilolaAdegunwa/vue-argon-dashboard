(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{562:function(t,e,n){},566:function(t,e,n){"use strict";var a=n(562);n.n(a).a},574:function(t,e,n){"use strict";n.r(e);n(341),n(44);var a=n(281),s=(n(19),n(27),n(69),{name:"props-table",props:{componentName:{type:String,default:""}},data:function(){return{parsedData:{}}},computed:{hasProps:function(){return this.parsedData.props&&Object.keys(this.parsedData.props).length>0}},methods:{getType:function(t){var e=t.type?t.type:t;return"object"===Object(a.a)(e)&&e.length?e.map(function(t){return t.name}).join(" | "):e.name||"N/A"},getDefault:function(t){return t.default?"function"==typeof t.default?t.default():t.default:"N/A"}},mounted:function(){var t=this;try{var e=this.$docs.find(function(e){return e.name===t.componentName})||{};e&&(this.parsedData=e||{})}catch(t){console.warn(t)}}}),r=(n(566),n(1)),o=Object(r.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"props-table__wrapper"},[t.hasProps?n("table",[t._m(0),t._v(" "),n("tbody",t._l(t.parsedData.props,function(e,a){return n("tr",{key:a},[a?n("td",[t._v("\n        "+t._s(a)+"\n      ")]):t._e(),t._v(" "),n("td",[t._v("\n        "+t._s(t.getType(e))+"\n      ")]),t._v(" "),n("td",[t._v("\n        "+t._s(t.getDefault(e))+"\n      ")]),t._v(" "),n("td",[t._v("\n        "+t._s(e.description)+"\n      ")])])}),0)]):t._e()])},[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticClass:"prop-col"},[this._v("Prop Name")]),this._v(" "),e("th",{staticClass:"type-col"},[this._v("Type")]),this._v(" "),e("th",{staticClass:"default-col"},[this._v("Default")]),this._v(" "),e("th",{staticClass:"description-col"},[this._v("Description")])])])}],!1,null,null,null);e.default=o.exports}}]);