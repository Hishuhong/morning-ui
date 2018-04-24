!function(n){function e(e){for(var o,l,r=e[0],u=e[1],s=e[2],c=0,g=[];c<r.length;c++)l=r[c],d[l]&&g.push(d[l][0]),d[l]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(n[o]=u[o]);for(a&&a(e);g.length;)g.shift()();return t.push.apply(t,s||[]),i()}function i(){for(var n,e=0;e<t.length;e++){for(var i=t[e],o=!0,r=1;r<i.length;r++){var u=i[r];0!==d[u]&&(o=!1)}o&&(t.splice(e--,1),n=l(l.s=i[0]))}return n}var o={},d={18:0};var t=[];function l(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return n[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=n,l.c=o,l.d=function(n,e,i){l.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:i})},l.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},l.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return l.d(e,"a",e),e},l.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},l.p="/";var r=window.webpackJsonp=window.webpackJsonp||[],u=r.push.bind(r);r.push=e,r=r.slice();for(var s=0;s<r.length;s++)e(r[s]);var a=u;t.push([251,0]),i()}({1:function(n,e){n.exports=Vue},121:function(n,e,i){"use strict";i.d(e,"a",function(){return o}),i.d(e,"b",function(){return d});var o=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 模拟盒 `<ui-dialog>`\n\n<doc-component-status page="dialog"></doc-component-status>\n\n[[[开始]]]\n\n定义一个模拟盒，标准的模拟盒分为三部分：\n\n- 头部\n- 主体\n- 操作区(尾部)\n\n模拟盒支持两种不同的出现形式：\n\n- 上方出现：一般用在信息确认时，提供是或否的选择，较弱，尺寸一般较小。\n- 中间出现：一般用在填写内容或阅读内容时，较强，尺寸较大。\n- 直接出现：一般用在页面内容较多，对性能有要求的页面，较快(去除了动画带来的性能负担)。\n\n#### 使用\n\n:::democode/html\n<ui-dialog ref="demo1"></ui-dialog>\n<ui-link js="window.morning.findVM(\'demo1\').toggle(true);">显示模拟盒</ui-link>\n:::\n\n#### 带头部的模拟盒\n\n通过`<header slot="header">`标签标记一个头部内容。\n\n:::democode/html\n<ui-dialog ref="demo2">\n    <header slot="header">This is title</header>\n</ui-dialog>\n<ui-link js="window.morning.findVM(\'demo2\').toggle(true);">显示模拟盒</ui-link>\n:::\n\n#### 带关闭的头部\n\n头部标题也可以在`<h1>`标签中。\n\n:::democode/html\n<ui-dialog ref="demo3">\n    <header slot="header">\n        <h1>This is title</h1>\n        <ui-link color="dark-theme" js="window.morning.findVM(\'demo3\').toggle();"><i class="iconfont">&#xe62e;</i></ui-link>\n    </header>\n</ui-dialog>\n<ui-link js="window.morning.findVM(\'demo3\').toggle(true);">显示模拟盒</ui-link>\n:::\n\n#### 当头部无内容时自动隐藏\n\n:::democode/html\n<ui-dialog ref="demo4">\n    <header slot="header"></header>\n</ui-dialog>\n<ui-link js="window.morning.findVM(\'demo4\').toggle(true);">显示模拟盒</ui-link>\n:::\n\n#### 带尾部的模拟盒\n\n通过`<footer slot="footer">`标签标记一个尾部内容。\n\n:::democode/html\n<ui-dialog ref="demo5">\n    <footer slot="footer">This is footer</footer>\n</ui-dialog>\n<ui-link js="window.morning.findVM(\'demo5\').toggle(true);">显示模拟盒</ui-link>\n:::\n\n#### 带操作的尾部\n\n你可以在尾部的`<div>`中加入`ui-btn`和`ui-link`来实现可选操作。\n\n:::democode/html\n<ui-dialog ref="demo6">\n    <footer slot="footer">\n        <span>This is footer</span>\n        <div>\n            <ui-link class="margin" color="minor" js="window.morning.findVM(\'demo6\').toggle();">取消</ui-link>\n            <ui-btn color="success">确认</ui-btn>\n        </div>\n    </footer>\n</ui-dialog>\n<ui-link js="window.morning.findVM(\'demo6\').toggle(true);">显示模拟盒</ui-link>\n:::\n\n#### 包含内容的模拟盒\n\n在组件内添加除`<header slot="header">`和`<footer slot="footer">`以外的元素会加载到模拟盒的主体部分。\n\n:::democode/html\n<ui-dialog ref="demo7">\n    This is body.\n</ui-dialog>\n<ui-link js="window.morning.findVM(\'demo7\').toggle(true);">显示模拟盒</ui-link>\n:::\n\n#### 包含HTML内容的模拟盒\n\n:::democode/html\n<ui-dialog ref="demo8">\n    <ui-grid class="fill">\n        <div class="c-11">\n            <ui-center class="fill"><p>LEFT</p></ui-center>\n        </div>\n        <div class="c-2">\n            <ui-divider>OR</ui-divider>\n        </div>\n        <div class="c-11">\n            <ui-center class="fill"><p>RIGHT</p></ui-center>\n        </div>\n    </ui-grid>\n</ui-dialog>\n<ui-link js="window.morning.findVM(\'demo8\').toggle(true);">显示模拟盒</ui-link>\n:::\n\n\n#### 包含头部/主体/尾部的模拟盒\n\n下面是一个完整的模拟盒内容推荐布局。\n\n:::democode/html\n<ui-dialog ref="demo9" light-gray>\n    <header slot="header">选择一张图片</header>\n    <ui-grid class="fill">\n        <div class="c-11">\n            <ui-center class="fill"><ui-img class="rounded" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img></ui-center>\n        </div>\n        <div class="c-2">\n            <ui-divider>OR</ui-divider>\n        </div>\n        <div class="c-11">\n            <ui-center class="fill"><ui-img class="rounded" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img></ui-center>\n        </div>\n    </ui-grid>\n    <footer slot="footer">\n        <span>\n            需要帮助? <ui-link color="info" size="xxs">获取帮助</ui-link>\n        </span>\n        <div>\n            <ui-link class="margin" color="minor" js="window.morning.findVM(\'demo9\').toggle(false);">取消</ui-link>\n            <ui-btn color="success">左边</ui-btn>\n            <ui-btn color="success">右边</ui-btn>\n        </div>\n    </footer>\n</ui-dialog>\n<ui-link js="window.morning.findVM(\'demo9\').toggle(true);">显示模拟盒</ui-link>\n:::\n\n#### 多层模拟盒\n\n模拟盒支持多层嵌套打开，组件会自动按照打开的顺序设置层级。(注意：使用时不用嵌套)\n\n:::democode/html\n<ui-dialog ref="demo10" color="black" width="60%" height="60%">\n    <header slot="header">第一级</header>\n    <ui-link js="window.morning.findVM(\'demo11\').toggle(true);">显示第二级模拟盒</ui-link>\n</ui-dialog>\n\n<ui-dialog ref="demo11" color="extra-light-black" width="40%" height="40%">\n    <header slot="header">第二级</header>\n    <ui-link js="window.morning.findVM(\'demo12\').toggle(true);">显示第三级模拟盒</ui-link>\n</ui-dialog>\n\n<ui-dialog ref="demo12" color="light-blue" width="20%" height="20%">\n    <header slot="header">第三级</header>\n</ui-dialog>\n\n<ui-link js="window.morning.findVM(\'demo10\').toggle(true);">显示模拟盒</ui-link>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|全部|`theme`|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n#### 色彩\n\n:::repeat/html\ncolor:theme\ncolor:feature\ncolor:black\ncolor:blue\ncolor:silver\ncolor:gray\n---\n<ui-dialog ref="demo{$colorKey}" color="{$colorKey}">\n    <header slot="header">This is title</header>\n    <footer slot="footer">This is footer</footer>\n</ui-dialog>\n<ui-link js="window.morning.findVM(\'demo{$colorKey}\').toggle(true);" color="{$colorKey}">{$colorName}模拟盒</ui-link>\n\n<br>\n:::\n\n[[[配置]]]\n\n|KEY|描述|接受值|值类型|默认值|\n|-|-|-|-|-|\n|[width](#width)|模拟盒宽度|宽度数值（可以是`px`、`em`、`%`等任何css合法单位）|String|`\'50%\'`|\n|[height](#height)|模拟盒高度|高度数值（可以是`px`、`em`、`%`等任何css合法单位）|String|`\'50%\'`|\n|[auto-close](#auto-close)|点击模拟盒以外的区域自动关闭模拟盒|`true`<br>`false`|Boolean|`true`|\n|[show-type](#show-type)|模拟盒打开的方式|`top`:从上往下弹出<br>`center`:从中间弹出<br>`no`:无动画直接出现|String|`\'top\'`|\n|[show-mask](#show-mask)|模拟盒打开后显示背景遮罩|`true`<br>`false`|Boolean|`true`|\n\n#### width\n\n:::democode/html\n<ui-dialog ref="demo13" width="200px"></ui-dialog>\n<ui-link js="window.morning.findVM(\'demo13\').toggle(true);">显示模拟盒</ui-link>\n:::\n\n:::democode/html\n<ui-dialog ref="demo14" width="80%"></ui-dialog>\n<ui-link js="window.morning.findVM(\'demo14\').toggle(true);">显示模拟盒</ui-link>\n:::\n\n#### height\n\n:::democode/html\n<ui-dialog ref="demo15" height="50px"></ui-dialog>\n<ui-link js="window.morning.findVM(\'demo15\').toggle(true);">显示模拟盒</ui-link>\n:::\n\n:::democode/html\n<ui-dialog ref="demo16" height="80%"></ui-dialog>\n<ui-link js="window.morning.findVM(\'demo16\').toggle(true);">显示模拟盒</ui-link>\n:::\n\n#### auto-close\n\n设为`false`点击模拟盒以外的区域不会关闭模拟盒。\n\n:::democode/html\n<ui-dialog ref="demo17" :auto-close="false">\n    <header slot="header">\n        <h1>点击外部区域不会关闭，需要点击右侧关闭</h1>\n        <ui-link color="dark-theme" js="window.morning.findVM(\'demo17\').toggle();"><i class="iconfont">&#xe62e;</i></ui-link>\n    </header>\n</ui-dialog>\n<ui-link js="window.morning.findVM(\'demo17\').toggle(true);">显示模拟盒</ui-link>\n:::\n\n#### show-type\n\n:::democode/html\n\x3c!-- 从上往下弹出 --\x3e\n<ui-dialog ref="demo18" show-type="top"></ui-dialog>\n<ui-link js="window.morning.findVM(\'demo18\').toggle(true);">显示模拟盒</ui-link>\n:::\n\n:::democode/html\n\x3c!-- 从中间弹出 --\x3e\n<ui-dialog ref="demo19" show-type="center"></ui-dialog>\n<ui-link js="window.morning.findVM(\'demo19\').toggle(true);">显示模拟盒</ui-link>\n:::\n\n:::democode/html\n\x3c!-- 无动画直接出现 --\x3e\n<ui-dialog ref="demo20" show-type="no"></ui-dialog>\n<ui-link js="window.morning.findVM(\'demo20\').toggle(true);">显示模拟盒</ui-link>\n:::    \n\n#### show-mask\n\n不显示背景遮罩：\n\n:::democode/html\n<ui-dialog ref="demo25" :show-mask="false">\n    <div style="background-color: #EAEAEA;width: 100%;height: 100%"></div>\n</ui-dialog>\n<ui-link js="window.morning.findVM(\'demo25\').toggle(true);">显示模拟盒</ui-link>\n:::\n\n[[[方法]]]\n\n#### toggle([show])\n\n切换模拟盒显示状态。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|show|YES|切换到显示或隐藏状态，不输入则切换到反向状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|\n\n:::democode/html\n<ui-dialog ref="demo21">\n    <ui-center class="fill">\n        <ui-link js="window.morning.findVM(\'demo21\').toggle(false);">隐藏模拟盒</ui-link> &nbsp;\n        <ui-link js="window.morning.findVM(\'demo21\').toggle();">切换到反向状态</ui-link>\n    </ui-center>\n</ui-dialog>\n<ui-link js="window.morning.findVM(\'demo21\').toggle(true);">显示模拟盒</ui-link>\n<ui-link js="window.morning.findVM(\'demo21\').toggle();">切换到反向状态</ui-link>\n:::\n\n[[[事件]]]\n\n#### emit\n\n当模拟盒切换显示状态时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo22.console1\', \'emit event!\');\n        }\n    }\n});\n---\n<div>\n    <ui-dialog ref="demo22" @emit="echo">\n        <ui-center class="fill">\n            <ui-link js="window.morning.findVM(\'demo22\').toggle();">隐藏模拟盒</ui-link> &nbsp;\n        </ui-center>\n    </ui-dialog>\n    <ui-link js="window.morning.findVM(\'demo22\').toggle();">显示模拟盒</ui-link>\n</div>\n:::\n\n#### show\n\n当模拟盒显示时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo23.console1\', \'show event!\');\n        }\n    }\n});\n---\n<div>\n    <ui-dialog ref="demo23" @show="echo">\n        <ui-center class="fill">\n            <ui-link js="window.morning.findVM(\'demo23\').toggle();">隐藏模拟盒</ui-link> &nbsp;\n        </ui-center>\n    </ui-dialog>\n    <ui-link js="window.morning.findVM(\'demo23\').toggle();">显示模拟盒</ui-link>\n</div>\n:::\n\n#### hide\n\n当模拟盒隐藏时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo24.console1\', \'hide event!\');\n        }\n    }\n});\n---\n<div>\n    <ui-dialog ref="demo24" @hide="echo">\n        <ui-center class="fill">\n            <ui-link js="window.morning.findVM(\'demo24\').toggle();">隐藏模拟盒</ui-link> &nbsp;\n        </ui-center>\n    </ui-dialog>\n    <ui-link js="window.morning.findVM(\'demo24\').toggle();">显示模拟盒</ui-link>\n</div>\n:::\n\n#### 生命周期事件\n\n:::vue/html\nwindow.demoEventLifecycle = new Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    data : function () {\n        return {\n           text : \'模拟盒\',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log(\'demoEventLifecycle.console1\', `${name} event!`);\n        }\n    }\n});\n---\n<div>\n    <ui-dialog\n        ref="demoEventLifecycle"\n        v-show="show"\n        @created="echo(\'created\')"\n        @mounted="echo(\'mounted\')"\n        @before-update="echo(\'before-update\')"\n        @updated="echo(\'updated\')"\n        @before-destroy="echo(\'before-destroy\')"\n        @destroyed="echo(\'destroyed\')"\n    >\n        <ui-center class="fill">\n            {*text*}\n            <ui-link js="window.morning.findVM(\'demoEventLifecycle\').toggle();">隐藏模拟盒</ui-link> &nbsp;\n        </ui-center>\n    </ui-dialog>\n    <ui-link js="window.morning.findVM(\'demoEventLifecycle\').toggle();">显示模拟盒</ui-link>\n\n    <br><br>\n\n    <ui-link js="window.demoEventLifecycle.text=\'生命周期事件\';">触发update</ui-link>\n    <ui-link js="morning.findVM(\'demoEventLifecycle\').$destroy();">触发destroy</ui-link>\n</div>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/dialog/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},d=[];o._withStripped=!0},21:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,d=i(2),t=(o=d)&&o.__esModule?o:{default:o};e.default={data:function(){return{page:"dialog"}},components:{"doc-component":t.default}},n.exports=e.default},250:function(n,e,i){"use strict";i.r(e);var o=i(21),d=i.n(o);for(var t in o)"default"!==t&&function(n){i.d(e,n,function(){return o[n]})}(t);var l=i(121),r=i(0),u=!1;var s=function(n){u||i(614)},a=Object(r.a)(d.a,l.a,l.b,!1,s,null,null);a.options.__file="src/docs/pages/component/dialog/index.vue",e.default=a.exports},251:function(n,e,i){"use strict";var o=t(i(1)),d=t(i(250));function t(n){return n&&n.__esModule?n:{default:n}}new o.default({el:"#root",render:function(n){return n(d.default)}})},614:function(n,e){}});