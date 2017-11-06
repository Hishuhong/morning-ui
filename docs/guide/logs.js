webpackJsonp([13],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3def44b5_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(647);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(328)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3def44b5_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/guide/logs/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3def44b5", Component.options)
  } else {
    hotAPI.reload("data-v-3def44b5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _DocGuide = __webpack_require__(4);

var _DocGuide2 = _interopRequireDefault(_DocGuide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {

        return {
            page: 'logs'
        };
    },
    components: {
        'doc-guide': _DocGuide2.default
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(101);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 328:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('doc-guide', {
    attrs: {
      "page": _vm.page,
      "hasPadding": true
    }
  }, [_c('script', {
    attrs: {
      "type": "text/markdown"
    }
  }, [_vm._v("\n# 更新日志\n\n### 版本规范\n\nMorning UI采用[语义化版本控制规范](http://semver.org/lang/zh-CN/)，同时采用`Stable`、`Beta`、`Canary`三种标记分别来标记版本。详见：[版本计划](/guide/versionplan.html)\n\n如果更新对使用方法有影响，会在更新记录的`Upgrade Precautions`说明。\n\n<!-- ### 1.0.0 <ui-badge class=\"circle\" s light-black>Stable</ui-badge> -->\n\n<!-- ### 0.11.0 <ui-badge class=\"circle\" s light-blue>Beta</ui-badge> -->\n\n### 更新记录\n\n### 0.10.5 <ui-badge class=\"circle ver-canary\" s light-theme>Canary</ui-badge>\n\n<ui-textcolor light-blue><ui-small>发布于2017年11月6日</ui-small></ui-textcolor>\n\n- `ui-multiform`组件支持批量输入\n- 表单组件数据支持通过`v-model`指令双向绑定\n- 网站支持HTTPS，增加Google Analytics\n\n### 0.10.4 <ui-badge class=\"circle ver-canary\" s light-theme>Canary</ui-badge>\n\n<ui-textcolor light-blue><ui-small>发布于2017年11月5日</ui-small></ui-textcolor>\n\n- 新增`ui-multiform`多项表单输入组件\n- 支持文档搜索([DocSearch](https://community.algolia.com/docsearch/))\n- 支持使用模块管理器(Webpack/Rollup等)\n- 支持CDN引用(cdn.jsdelivr.net)\n\n<ui-label primary>Upgrade Precautions</ui-label>\n\n- 通过模块方式引入，不会在全局注册window.morning变量\n- 初始化方法从`morning.init([options])`变为`Vue.use(morning, [options])`\n\n### 0.10.3 <ui-badge class=\"circle ver-canary\" s light-theme>Canary</ui-badge>\n\n<ui-textcolor light-blue><ui-small>发布于2017年11月2日</ui-small></ui-textcolor>\n\n- `ui-formgroup`支持内联布局\n- 现在表单方法`.get()`返回原始值，`.getJson()`返回JSON值\n- 新增布局组件的单元测试\n- 更新开发者规范\n- 优化CI流程中的测试覆盖率部分，避免重复的测试\n- 优化文档构建方式，减小文档体积\n- 修复`ui-select`在搜索模式下不会出现`无项目`提示的问题\n\n<ui-label primary>Upgrade Precautions</ui-label>\n\n- 表单组件的`.get()`方法变更，请查询最新文档\n- 组件样式中以驼峰法命名的`class`现在换成了中划线法命名(声明的`class`除外)\n- 所有之前返回`undeifned`的组件方法，现在都会返回组件的Vue实例(取值方法除外)\n- `ui-tab`的`switchNext()`和`switchPrev()`方法换成了`next()`和`prev()`方法\n\n### 0.10.2 <ui-badge class=\"circle ver-canary\" s light-theme>Canary</ui-badge>\n\n<ui-textcolor light-blue><ui-small>发布于2017年11月1日</ui-small></ui-textcolor>\n\n- 增加`ui-pagination`分页组件\n- 增加codecov.io统计测试覆盖率\n- 更新文档\n- 修复`ui-select`组件的`list`通过模板渲染，会导致默认值被过滤的问题\n\n### 0.10.1 <ui-badge class=\"circle ver-canary\" s light-theme>Canary</ui-badge>\n\n<ui-textcolor light-blue><ui-small>发布于2017年10月31日</ui-small></ui-textcolor>\n\n- 增加codacy代码质量检测\n- 增加Lint、Build、Test、Coverage等CI流程\n- 更新README\n- 优化功能色彩\n- 移除`.npmignore`\n- 修复ESLint和StyleLint检测到的问题\n- 修复表单组的中表单销毁了，但值还可以通过`getGroup`取到的问题\n\n### 0.10.0 <ui-badge class=\"circle ver-canary\" s light-theme>Canary</ui-badge>\n\n<ui-textcolor light-blue><ui-small>发布于2017年10月31日</ui-small></ui-textcolor>\n\nMorningUI第一个版本，基于HMP UI，规范了定义，实现部分组件。\n\n")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3def44b5", esExports)
  }
}

/***/ })

},[286]);