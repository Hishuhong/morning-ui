!function(n){function e(e){for(var r,a,c=e[0],d=e[1],u=e[2],s=0,p=[];s<c.length;s++)a=c[s],o[a]&&p.push(o[a][0]),o[a]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(n[r]=d[r]);for(l&&l(e);p.length;)p.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],r=!0,c=1;c<t.length;c++){var d=t[c];0!==o[d]&&(r=!1)}r&&(i.splice(e--,1),n=a(a.s=t[0]))}return n}var r={},o={12:0};var i=[];function a(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=r,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},a.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=d;i.push([243,0]),t()}({1:function(n,e){n.exports=Vue},117:function(n,e,t){"use strict";t.d(e,"a",function(){return r}),t.d(e,"b",function(){return o});var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 卡片 `<ui-card>`\n\n<doc-component-status page="card"></doc-component-status>\n\n[[[开始]]]\n\n定义一张卡片，卡片包含头部和主体部分。\n\n#### 使用\n\n:::democode/html\n<div style="width:180px;height:240px;">\n    <ui-card>\n        <header>头部</header>\n        <div>卡片</div>\n    </ui-card>\n</div>\n:::\n\n#### 没有头部的卡片\n\n:::democode/html\n<div style="width:180px;height:240px;">\n    <ui-card>卡片</ui-card>\n</div>\n:::\n\n#### 无间隙卡片\n\n卡片内容部分默认具有间隙，可以通过full类来去除间隙。\n\n:::democode/html\n<div style="width:180px;height:240px;display:inline-block;margin:10px;vertical-align: top;">\n    <ui-card class="full">卡片</ui-card>\n</div>\n\n<div style="width:180px;height:240px;display:inline-block;margin:10px;vertical-align: top;">\n    <ui-card class="full">\n        <header>头部</header>\n        <div>卡片</div>\n    </ui-card>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|全部|`theme`|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n#### 色彩\n\n:::repeat/html\ncolor:theme\ncolor:feature\ncolor:black\ncolor:blue\ncolor:silver\ncolor:gray\n---\n<div style="width:180px;height:240px;display:inline-block;margin:10px;">\n    <ui-card color="{$colorKey}">\n        <header>{$&colorName}</header>\n        <div>卡片</div>\n    </ui-card>\n</div>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/card/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},o=[];r._withStripped=!0},15:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=t(2),i=(r=o)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"card"}},components:{"doc-component":i.default}},n.exports=e.default},242:function(n,e,t){"use strict";t.r(e);var r=t(15),o=t.n(r);for(var i in r)"default"!==i&&function(n){t.d(e,n,function(){return r[n]})}(i);var a=t(117),c=t(0),d=!1;var u=function(n){d||t(610)},l=Object(c.a)(o.a,a.a,a.b,!1,u,null,null);l.options.__file="src/docs/pages/component/card/index.vue",e.default=l.exports},243:function(n,e,t){"use strict";var r=i(t(1)),o=i(t(242));function i(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(o.default)}})},610:function(n,e){}});