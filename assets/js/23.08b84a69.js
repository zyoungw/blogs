(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{214:function(t,r,n){},220:function(t,r,n){"use strict";var o=n(12),i=n(99)(0),s=n(98)([].forEach,!0);o(o.P+o.F*!s,"Array",{forEach:function(t){return i(this,t,arguments[1])}})},255:function(t,r,n){"use strict";var o=n(214);n.n(o).a},264:function(t,r,n){"use strict";n.r(r);n(100),n(220);var o={props:{repo:{default:null,type:String},contributors:{type:[Array,String],default:null},title:{type:String,default:null}},data:function(){return{contribuitorsx:[]}},mounted:function(){this.consultContributors()},watch:{contribuitors:function(){this.Contribuitorsx=[],this.consultContributors()}},methods:{consultContributors:function(){var t=this;this.contributors&&("all"==this.contributors?fetch("https://api.github.com/repos/"+this.repo+"/contributors").then(function(t){return t.json()}).then(function(r){t.contribuitorsx=r}):this.contribuitors.forEach(function(r){fetch("https://api.github.com/users/".concat(r)).then(function(t){return t.json()}).then(function(r){t.contribuitorsx.push(r)})}))}}},i=(n(255),n(1)),s=Object(i.a)(o,function(){var t=this,r=t.$createElement,n=t._self._c||r;return t.contribuitorsx.length>0?n("div",{staticClass:"con-contribuitor"},[n("h3",{class:{allcontribuitors:"all"==t.contributors}},[t._v("\n        "+t._s(t.title||"contributors of")+" "),n("b",[t._v("Vuesax")])]),t._v(" "),n("ul",[t._l(t.contribuitorsx,function(r,o){return o<19?n("li",{attrs:{title:r.login}},[n("a",{attrs:{target:"_blank",href:r.html_url,rel:"noopener noreferrer"}},[n("img",{attrs:{src:r.avatar_url,alt:""}}),t._v(" "),n("img",{staticClass:"img-blur",attrs:{src:r.avatar_url,alt:""}})])]):t._e()}),t._v(" "),t._l(t.contribuitorsx,function(r,o){return 19==o?n("li",{class:{"is-see-more":19==o},attrs:{title:"See more"}},[n("router-link",{attrs:{to:"/contribuitors/"}},[n("vs-icon",{attrs:{icon:"add"}})],1)],1):t._e()})],2),t._v(" "),"all"==t.contributors?n("div",{staticClass:"con-btns-contribuitors"},[n("button",{attrs:{type:"button",name:"button"}},[n("router-link",{attrs:{to:"/contribuitors/"}},[t._v("Contributors")])],1)]):t._e()]):t._e()},[],!1,null,null,null);r.default=s.exports}}]);