!function(n){function e(e){for(var r,u,i=e[0],s=e[1],c=e[2],p=0,f=[];p<i.length;p++)u=i[p],o[u]&&f.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r]);for(l&&l(e);f.length;)f.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],r=!0,i=1;i<t.length;i++){var s=t[i];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),n=u(u.s=t[0]))}return n}var r={},o={25:0};var a=[];function u(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=n,u.c=r,u.d=function(n,e,t){u.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},u.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},u.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=s;a.push([267,0]),t()}({1:function(n,e){n.exports=Vue},129:function(n,e,t){"use strict";t.d(e,"a",function(){return r}),t.d(e,"b",function(){return o});var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n\n# 标题 `<ui-h>`\n\n<doc-component-status page="h"></doc-component-status>\n\n[[[开始]]]\n\n定义一个标准标题，此组件可以替换原生的`h1-h6`标签，这是一个块级元素。\n\n#### 使用\n\n:::democode/html\n<ui-h>标题</ui-h>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|全部|`m`|\n|色彩|全部|`black`|\n|状态|`normal`<br/>`apparent`|`normal`|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n#### 尺寸\n\n:::repeat/html\nsize\n---\n<ui-h size="{$sizeKey}">{$&sizeName}</ui-h>\n:::\n\n#### 色彩\n\n:::preset/html\nstatusColor\n---\nuikey:h\n:::\n\n#### 状态\n\n:::repeat/html\nstate:normal,apparent\n---\n<ui-h state="{$stateKey}">{$&stateName}</ui-h>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/h/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},o=[];r._withStripped=!0},266:function(n,e,t){"use strict";t.r(e);var r=t(28),o=t.n(r);for(var a in r)"default"!==a&&function(n){t.d(e,n,function(){return r[n]})}(a);var u=t(129),i=t(0),s=!1;var c=function(n){s||t(632)},l=Object(i.a)(o.a,u.a,u.b,!1,c,null,null);l.options.__file="src/docs/pages/component/h/index.vue",e.default=l.exports},267:function(n,e,t){"use strict";var r=a(t(1)),o=a(t(266));function a(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(o.default)}})},28:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=t(2),a=(r=o)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"h"}},components:{"doc-component":a.default}},n.exports=e.default},632:function(n,e){}});