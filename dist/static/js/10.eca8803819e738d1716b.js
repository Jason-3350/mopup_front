webpackJsonp([10],{bdt6:function(t,s){},eoPo:function(t,s,o){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=o("vLgD"),e={name:"Settings",data:function(){return{oldPassword:"",newPassword:""}},methods:{back:function(){this.$router.push({name:"Task"})},done:function(){var t=this;confirm("Do you want to change the value ?")&&a.a.post("/settings",{username:JSON.parse(localStorage.getItem("user")).username,oldPassword:this.oldPassword,newPassword:this.newPassword}).then(function(s){console.log(s.status),205===s.status?(console.log(s.data),t.$router.push({name:"Task"})):203===s.status?alert("Old password is incorrect !"):console.log("************")}).catch(function(t){console.log(t)})}}},r={render:function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"row"},[t._m(0),t._v(" "),t._m(1),t._v(" "),o("form",{staticClass:"col-12"},[o("div",{staticClass:"form-group"},[o("label",{staticClass:"form-control-lg"},[t._v("Old Password: ")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.oldPassword,expression:"oldPassword"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Old Password"},domProps:{value:t.oldPassword},on:{input:function(s){s.target.composing||(t.oldPassword=s.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{staticClass:"form-control-lg"},[t._v("New Password: ")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.newPassword,expression:"newPassword"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"New Password"},domProps:{value:t.newPassword},on:{input:function(s){s.target.composing||(t.newPassword=s.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group text-center"},[o("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.back}},[t._v("GoBack")]),t._v(" "),o("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:t.done}},[t._v("Submit")])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-12"},[s("label",{staticClass:"form-control-lg col-12"},[this._v("Import Ics: ")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"input-group input-group-lg  col-12"},[s("div",{staticClass:"custom-file"},[s("input",{staticClass:"custom-file-input",attrs:{type:"file","aria-describedby":"inputGroupFileAddon04"}}),this._v(" "),s("label",{staticClass:"custom-file-label"},[this._v("Choose file")])]),this._v(" "),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"}},[this._v("Submit")])])])}]};var n=o("VU/8")(e,r,!1,function(t){o("bdt6")},"data-v-afb8b840",null);s.default=n.exports}});
//# sourceMappingURL=10.eca8803819e738d1716b.js.map