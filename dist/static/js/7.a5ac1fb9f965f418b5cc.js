webpackJsonp([7],{E4pj:function(t,e){},bNtR:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"RewDetail",data:function(){return{name:"",coin:""}},created:function(){var t=JSON.parse(localStorage.getItem("reward"));this.name=t.name,this.coin=t.coin},destroyed:function(){localStorage.removeItem("reward")}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"card text-center"},[t._m(0),t._v(" "),a("div",{staticClass:"card-body"},[a("h3",{staticClass:"card-title"},[t._v(t._s(t.name))]),t._v(" "),a("p",{staticClass:"card-text"},[t._v("You can use "+t._s(t.coin)+" coins to get "+t._s(t.name))]),t._v(" "),a("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"Reward"}}},[t._v("Go Back")]),t._v(" "),a("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("Convert")])],1),t._v(" "),a("div",{staticClass:"card-footer text-muted"},[t._v("\n      2 days ago\n    ")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row justify-content-center",staticStyle:{margin:"0",padding:"0"}},[e("img",{staticClass:"card-img-top",staticStyle:{height:"20rem",width:"20rem"},attrs:{src:a("g8Sj"),alt:"..."}})])}]};var r=a("VU/8")(s,n,!1,function(t){a("E4pj")},"data-v-55d4c7c6",null);e.default=r.exports},g8Sj:function(t,e,a){t.exports=a.p+"static/img/MOPUP-logos_transparent.cbd9bd5.png"}});
//# sourceMappingURL=7.a5ac1fb9f965f418b5cc.js.map