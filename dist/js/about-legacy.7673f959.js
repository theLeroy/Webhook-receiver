(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"2cdb":function(e,n,i){},"8d51":function(e,n,i){"use strict";function t(e){for(var n=arguments,i=1;i<arguments.length;i++)for(var t in arguments[i])e[t]=n[i][t];return e}var o={functional:!0,props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},render:function(e,n){var i=n.props.code||(n.children&&n.children.length>0?n.children[0].text:""),o=n.props.inline,a=n.props.language,r=Prism.languages[a],s="language-"+a;return o?e("code",t({},n.data,{class:[n.data.class,s],domProps:t({},n.data.domProps,{innerHTML:Prism.highlight(i,r)})})):e("pre",t({},n.data,{class:[n.data.class,s]}),[e("code",{class:s,domProps:{innerHTML:Prism.highlight(i,r)}})])}};e.exports=o},9975:function(e,n,i){},a3fb:function(e,n,i){"use strict";var t=i("2cdb"),o=i.n(t);o.a},a5cc:function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"subscription",name:{kind:"Name",value:"NewWebhookIncoming"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"token"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"NewWebhookIncoming"},arguments:[{kind:"Argument",name:{kind:"Name",value:"userid"},value:{kind:"Variable",name:{kind:"Name",value:"token"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"UserId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"intTime"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"WebhookConntent"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:146}};i.loc.source={body:"subscription NewWebhookIncoming($token: String) {\n  NewWebhookIncoming(userid: $token) {\n    _id\n    UserId\n    intTime\n    WebhookConntent\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){t(e,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){t(e,n)}),e.definitions&&e.definitions.forEach(function(e){t(e,n)})}var o={};function a(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function r(e,n){var i={kind:e.kind,definitions:[a(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=o[n]||new Set,r=new Set,s=new Set(t);while(s.size>0){var d=s;s=new Set,d.forEach(function(e){if(!r.has(e)){r.add(e);var n=o[e]||new Set;n.forEach(function(e){s.add(e)})}})}return r.forEach(function(n){var t=a(e,n);t&&i.definitions.push(t)}),i}(function(){i.definitions.forEach(function(e){if(e.name){var n=new Set;t(e,n),o[e.name.value]=n}})})(),e.exports=i,e.exports["NewWebhookIncoming"]=r(i,"NewWebhookIncoming")},ae19:function(e,n,i){"use strict";i.r(n);var t=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",[i("div",{staticClass:"edpoint",on:{click:e.copy}},[i("span",{ref:"Ctext",staticClass:"ShowToken"},[e._v(e._s(e.Url)+"/r/us/"+e._s(e.Token))])]),e._l(e.WebhookByUser,function(n,t){return i("div",{attrs:{id:"green"}},[i("prism",{staticClass:"no-whitespace-normalization",attrs:{language:"json"}},[e._v('\nId: "'+e._s(n._id)+'",\nEndpoint: "'+e._s(n.UserId)+'",\nTime: '+e._s(new Date(n.intTime).toLocaleString())+",\nContent: {\n   "+e._s(n.WebhookConntent)+"\n}\n      ")])],1)}),e.WebhookByUser.length>100?i("div",{staticClass:"morethen50"},[e._v("\n      Unfortunately, more than 100 webhooks cannot be displayed. However, new webhooks are automatically updated and displayed at the top.\n    ")]):e._e()],2)},o=[];function a(e){if(Array.isArray(e)){for(var n=0,i=new Array(e.length);n<e.length;n++)i[n]=e[n];return i}}function r(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function d(e){return a(e)||r(e)||s()}i("cadf"),i("551c"),i("097d");var c=i("ec67"),l=i.n(c),u=i("a5cc"),m=i.n(u),f=i("8d51"),k=i.n(f),v={name:"Interface",components:{Prism:k.a},data:function(){return{Token:this.$route.params.Token,Url:window.location.hostname,WebhookByUser:""}},methods:{copy:function(e){var n=this,i=this.$refs.Ctext,t=document.createElement("textarea");t.value=i.innerHTML,document.body.appendChild(t),t.select();try{var o=document.execCommand("copy"),a=o?"successful":"unsuccessful";if("successful"===a){console.log("copied");var r=this.$refs.Ctext.innerHTML;this.$refs.Ctext.innerHTML="Copied!",setTimeout(function(){n.$refs.Ctext.innerHTML=r},1200)}}catch(e){console.log("Oops, unable to copy")}document.body.removeChild(t)}},apollo:{WebhookByUser:{query:l.a,variables:function(){return{token:this.$route.params.Token}},subscribeToMore:{document:m.a,variables:function(){return{token:this.$route.params.Token}},updateQuery:function(e,n){var i=n.subscriptionData;return{WebhookByUser:[i.data.NewWebhookIncoming].concat(d(e.WebhookByUser))}}}}},watch:{WebhookByUser:function(e){document.getElementById("green").style.background="#2ee6b7",document.getElementById("green").style.color="rgba(0,0,0,0)",setTimeout(function(){document.getElementById("green").style.background="",document.getElementById("green").style.color=""},1e3)}}},h=v,p=(i("d65a"),i("a3fb"),i("2877")),b=Object(p["a"])(h,t,o,!1,null,"460296fa",null);b.options.__file="Interface.vue";n["default"]=b.exports},d65a:function(e,n,i){"use strict";var t=i("9975"),o=i.n(t);o.a},ec67:function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"WebhookByUser"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"token"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"WebhookByUser"},arguments:[{kind:"Argument",name:{kind:"Name",value:"userid"},value:{kind:"Variable",name:{kind:"Name",value:"token"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"UserId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"intTime"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"WebhookConntent"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:128}};i.loc.source={body:"query WebhookByUser($token: String) {\n WebhookByUser(userid: $token) {\n    _id\n    UserId\n    intTime\n    WebhookConntent\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){t(e,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){t(e,n)}),e.definitions&&e.definitions.forEach(function(e){t(e,n)})}var o={};function a(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function r(e,n){var i={kind:e.kind,definitions:[a(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=o[n]||new Set,r=new Set,s=new Set(t);while(s.size>0){var d=s;s=new Set,d.forEach(function(e){if(!r.has(e)){r.add(e);var n=o[e]||new Set;n.forEach(function(e){s.add(e)})}})}return r.forEach(function(n){var t=a(e,n);t&&i.definitions.push(t)}),i}(function(){i.definitions.forEach(function(e){if(e.name){var n=new Set;t(e,n),o[e.name.value]=n}})})(),e.exports=i,e.exports["WebhookByUser"]=r(i,"WebhookByUser")}}]);
//# sourceMappingURL=about-legacy.7673f959.js.map