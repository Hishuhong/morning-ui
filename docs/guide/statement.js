webpackJsonp([3],{

/***/ 0:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocBody_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocBody_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocBody_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_56a72814_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocBody_vue__ = __webpack_require__(17);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(11)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocBody_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_56a72814_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocBody_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/common/DocBody.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DocBody.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-56a72814", Component.options)
  } else {
    hotAPI.reload("data-v-56a72814", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocComponentStatus_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocComponentStatus_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocComponentStatus_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3e2a2c2b_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocComponentStatus_vue__ = __webpack_require__(16);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(10)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocComponentStatus_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3e2a2c2b_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocComponentStatus_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/common/DocComponentStatus.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DocComponentStatus.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3e2a2c2b", Component.options)
  } else {
    hotAPI.reload("data-v-3e2a2c2b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocSubmenu_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocSubmenu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocSubmenu_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b1c570a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocSubmenu_vue__ = __webpack_require__(15);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(9)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocSubmenu_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b1c570a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocSubmenu_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/common/DocSubmenu.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DocSubmenu.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b1c570a", Component.options)
  } else {
    hotAPI.reload("data-v-1b1c570a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "submenu"
  }, _vm._l((_vm.currentMenu), function(link, name) {
    return _c('li', [(link === '/' + _vm.category + '/' + _vm.page + '.html') ? [(typeof link === 'string') ? _c('a', {
      staticClass: "current",
      attrs: {
        "href": link
      },
      domProps: {
        "innerHTML": _vm._s(name)
      }
    }) : _c('p', {
      staticClass: "title",
      domProps: {
        "innerHTML": _vm._s(name)
      }
    })] : [(typeof link === 'string') ? _c('a', {
      attrs: {
        "href": link
      },
      domProps: {
        "innerHTML": _vm._s(name)
      }
    }) : _c('p', {
      staticClass: "title",
      domProps: {
        "innerHTML": _vm._s(name)
      }
    })]], 2)
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1b1c570a", esExports)
  }
}

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _DocGuide = __webpack_require__(30);

var _DocGuide2 = _interopRequireDefault(_DocGuide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {

        return {
            page: 'statement'
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

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc-status-bar"
  }, [_c('div', {
    staticClass: "item",
    class: {
      pass: _vm.isUnitPass, fail: !_vm.isUnitPass
    },
    attrs: {
      "title": _vm.unitTitle
    }
  }, [_c('span', {
    staticClass: "name"
  }, [_vm._v("Unit Test")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.unit) + " " + _vm._s(_vm.unitNote))])]), _vm._v(" "), _c('div', {
    staticClass: "item",
    class: {
      pass: _vm.isE2EPass, fail: !_vm.isE2EPass
    },
    attrs: {
      "title": _vm.e2eTitle
    }
  }, [_c('span', {
    staticClass: "name"
  }, [_vm._v("E2E Test")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.e2e) + " " + _vm._s(_vm.e2eNote))])]), _vm._v(" "), _c('div', {
    staticClass: "item",
    class: [_vm.coverageLevel]
  }, [_c('span', {
    staticClass: "name"
  }, [_vm._v("Coverage")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.coverage))])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3e2a2c2b", esExports)
  }
}

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('doc-header', {
    attrs: {
      "category": _vm.category
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "body"
  }, [_c('doc-submenu', {
    attrs: {
      "category": _vm.category,
      "page": _vm.page
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "docmd",
      rawName: "v-docmd"
    }],
    staticClass: "content markdown-body",
    class: {
      padding: _vm.hasPadding
    }
  }, [_vm._t("default")], 2)], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-56a72814", esExports)
  }
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

exports.default = {
    props: {
        category: String
    },
    computed: {
        isIndex: function isIndex() {
            return this.category === 'home';
        },
        isGuide: function isGuide() {
            return this.category === 'guide';
        },
        isComponent: function isComponent() {
            return this.category === 'component';
        },
        isCustom: function isCustom() {
            return this.category === 'custom';
        }
    }
};
module.exports = exports['default'];

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(91);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 236:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _DocBody = __webpack_require__(12);

var _DocBody2 = _interopRequireDefault(_DocBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        page: String,
        hasPadding: Boolean
    },
    data: function data() {

        return {
            category: 'guide'
        };
    },
    components: {
        'doc-body': _DocBody2.default
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

module.exports = exports['default'];

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocGuide_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocGuide_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocGuide_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_05e3f350_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocGuide_vue__ = __webpack_require__(31);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(29)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocGuide_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_05e3f350_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocGuide_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/common/DocGuide.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DocGuide.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-05e3f350", Component.options)
  } else {
    hotAPI.reload("data-v-05e3f350", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('doc-body', _vm._b({
    attrs: {
      "category": _vm.category
    }
  }, 'doc-body', _vm.$props, false), [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-05e3f350", esExports)
  }
}

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocHeader_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocHeader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocHeader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19496861_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocHeader_vue__ = __webpack_require__(5);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(3)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocHeader_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19496861_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocHeader_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/common/DocHeader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DocHeader.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-19496861", Component.options)
  } else {
    hotAPI.reload("data-v-19496861", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 477:
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
  }, [_vm._v("\n\n# 声明\n\n声明是一种通用的组件属性，有一套全局的规范，组件必须支持所有类型的声明，但是组件可以根据实际情况支持声明中部分值（至少一个）。\n\n目前声明包含三类：`尺寸`、`色彩`、`状态`。\n\n每一个声明都是HTML标签的一种属性，你可以像下面这样使用：\n\n```html\n<!-- 使用XL尺寸的ui-btn组件 -->\n<ui-btn xl></ui-btn>\n```\n\n不同类型的声明可以在同一组件上使用：\n\n```html\n<!-- 使用XL尺寸，危险色彩，加载状态的ui-btn组件 -->\n<ui-btn xl danger loading></ui-btn>\n```\n\n但是同一类型的声明只能使用一个，如果同时使用只会生效一个：\n\n```html\n<!-- 同时定义两种尺寸，只有一种尺寸会生效 -->\n<ui-btn xxs xxl></ui-btn>\n\n<!-- 同时定义两种色彩，只有一种色彩会生效 -->\n<ui-btn danger success></ui-btn>\n```\n\n### 尺寸\n\n尺寸声明了组件的大小，包含：\n\n- `xxl` : 超大\n- `xl` : 大\n- `l` : 较大\n- `m` : 中\n- `s` : 较小\n- `xs` : 小\n- `xxs` : 超小\n\n组件会根据实际情况支持其中的部分尺寸(至少支持一种)，大部分组件的默认尺寸都是`m`。\n\n### 颜色\n\n颜色声明了组件的配色，包含：`主题色`、`功能色`、`辅助色`。\n\n#### 主题色\n\nUI的主色彩，Morning默认采用红色，使用者可以自己定义主题色。\n\n<div class=\"colorFlex\">\n    <div class=\"item w3\" style=\"background:#f86f88;\">\n        <p class=\"key\">light-theme</p>\n        <p class=\"name\">浅主题色</p>\n        <p class=\"color\">#f86f88</p>\n    </div>\n    <div class=\"item w3\" style=\"background:#f33d5d;\">\n        <p class=\"key\">theme</p>\n        <p class=\"name\">主题色</p>\n        <p class=\"color\">#f33d5d</p>\n    </div>\n    <div class=\"item w3\" style=\"background:#d22343;\">\n        <p class=\"key\">dark-theme</p>\n        <p class=\"name\">深主题色</p>\n        <p class=\"color\">#d22343</p>\n    </div>\n</div>\n\n#### 功能色\n\n功能色具有一定的含义，可以用在特定的场景，比如绿色表示成功，黄色表示警告。\n\n<div class=\"colorFlex\">\n    <div class=\"item w3\" style=\"background:#23c455;\">\n        <p class=\"key\">success</p>\n        <p class=\"name\">成功/正确</p>\n        <p class=\"color\">#23c455</p>\n    </div>\n    <div class=\"item w3\" style=\"background:#f1a437;\">\n        <p class=\"key\">warning</p>\n        <p class=\"name\">警告/注意</p>\n        <p class=\"color\">#f1a437</p>\n    </div>\n    <div class=\"item w3\" style=\"background:#eb0e23;\">\n        <p class=\"key\">danger</p>\n        <p class=\"name\">错误/危险</p>\n        <p class=\"color\">#eb0e23</p>\n    </div>\n</div>\n\n<div class=\"colorFlex\">\n    <div class=\"item w3\" style=\"background:#2185d0;\">\n        <p class=\"key\">primary</p>\n        <p class=\"name\">主要/关键</p>\n        <p class=\"color\">#2185d0</p>\n    </div>\n    <div class=\"item w3\" style=\"background:#a9a9a9;\">\n        <p class=\"key\">minor</p>\n        <p class=\"name\">次要/不醒目</p>\n        <p class=\"color\">#a9a9a9</p>\n    </div>\n    <div class=\"item w3\" style=\"background:#03a6b9;\">\n        <p class=\"key\">info</p>\n        <p class=\"name\">信息/额外</p>\n        <p class=\"color\">#03a6b9</p>\n    </div>\n</div>\n\n#### 辅助色\n\n用于边框、背景、文本等场景。辅助色具有一定色阶，可用来表现层次。\n\n<div class=\"colorFlex\">\n    <div class=\"item w4 group\">\n        <div class=\"item\" style=\"background:#17212d\">\n            <p class=\"key\">black</p>\n            <p class=\"name\">黑色</p>\n            <p class=\"color\">#17212d</p>\n        </div>\n        <div class=\"item\" style=\"background:#303c4b\">\n            <p class=\"key\">light-black</p>\n            <p class=\"name\">浅黑色</p>\n            <p class=\"color\">#303c4b</p>\n        </div>\n        <div class=\"item\" style=\"background:#45505c\">\n            <p class=\"key\">extra-light-black</p>\n            <p class=\"name\">超浅黑色</p>\n            <p class=\"color\">#45505c</p>\n        </div>\n    </div>\n    <div class=\"item w4 group\">\n        <div class=\"item\" style=\"background:#7c8ba0\">\n            <p class=\"key\">blue</p>\n            <p class=\"name\">青色</p>\n            <p class=\"color\">#7c8ba0</p>\n        </div>\n        <div class=\"item\" style=\"background:#8e9caf\">\n            <p class=\"key\">light-blue</p>\n            <p class=\"name\">浅青色</p>\n            <p class=\"color\">#8e9caf</p>\n        </div>\n        <div class=\"item\" style=\"background:#a8b3c2\">\n            <p class=\"key\">extra-light-blue</p>\n            <p class=\"name\">超浅青色</p>\n            <p class=\"color\">#a8b3c2</p>\n        </div>\n    </div>\n    <div class=\"item w4 group colorDark\">\n        <div class=\"item\" style=\"background:#d6dde5\">\n            <p class=\"key\">silver</p>\n            <p class=\"name\">银色</p>\n            <p class=\"color\">#d6dde5</p>\n        </div>\n        <div class=\"item\" style=\"background:#e2e8ee\">\n            <p class=\"key\">light-silver</p>\n            <p class=\"name\">浅银色</p>\n            <p class=\"color\">#e2e8ee</p>\n        </div>\n        <div class=\"item\" style=\"background:#edf1f5\">\n            <p class=\"key\">extra-light-silver</p>\n            <p class=\"name\">超浅银色</p>\n            <p class=\"color\">#edf1f5</p>\n        </div>\n    </div>\n    <div class=\"item w4 group colorDark\">\n        <div class=\"item\" style=\"background:#e6e6e6\">\n            <p class=\"key\">gray</p>\n            <p class=\"name\">灰色</p>\n            <p class=\"color\">#e6e6e6</p>\n        </div>\n        <div class=\"item\" style=\"background:#f0f0f0\">\n            <p class=\"key\">light-gray</p>\n            <p class=\"name\">浅灰色</p>\n            <p class=\"color\">#f0f0f0</p>\n        </div>\n        <div class=\"item\" style=\"background:#fff\">\n            <p class=\"key\">white</p>\n            <p class=\"name\">白色</p>\n            <p class=\"color\">#ffffff</p>\n        </div>\n    </div>\n</div>\n\n### 状态\n\n声明了组件当前的状态，包括：\n\n- `normal` : 正常状态 \n- `hover` : Hover状态\n- `active` : 激活状态\n- `disabled` : 禁用状态\n- `apparent` : 醒目状态\n- `loading` : 载入中\n- `processing` : 处理中\n\n`loading`和`processing`的区别是，`loading`在等待远程处理的状态，`processing`一般用于本地处理。\n\n组件会根据实际情况支持其中的部分状态(至少支持一种)，大部分组件的默认状态都是`normal`。\n\n")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-19a67f04", esExports)
  }
}

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    class: {
      index: _vm.isIndex
    }
  }, [_c('div', {
    staticClass: "nav"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v("Morning UI")]), _vm._v(" "), _c('ul', {
    staticClass: "menu"
  }, [_c('li', [_c('a', {
    class: {
      current: _vm.isIndex
    },
    attrs: {
      "href": "/index.html"
    }
  }, [_vm._v("HOME")])]), _vm._v(" "), _c('li', [_c('a', {
    class: {
      current: _vm.isGuide
    },
    attrs: {
      "href": "/guide/introduction.html"
    }
  }, [_vm._v("GUIDE")])]), _vm._v(" "), _c('li', [_c('a', {
    class: {
      current: _vm.isComponent
    },
    attrs: {
      "href": "/component/h.html"
    }
  }, [_vm._v("COMPONENT")])])])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "logo"
  }, [_c('img', {
    attrs: {
      "src": "http://h0.hucdn.com/open/201734/8f299e45f6693260_200x200.png",
      "alt": "morning-ui"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-19496861", esExports)
  }
}

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; //
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

var _marked = __webpack_require__(25);

var _marked2 = _interopRequireDefault(_marked);

var _extend = __webpack_require__(23);

var _extend2 = _interopRequireDefault(_extend);

var _mustache = __webpack_require__(26);

var _mustache2 = _interopRequireDefault(_mustache);

var _underscore = __webpack_require__(27);

var _underscore2 = _interopRequireDefault(_underscore);

var _highlight = __webpack_require__(24);

var _highlight2 = _interopRequireDefault(_highlight);

var _DocHeader = __webpack_require__(4);

var _DocHeader2 = _interopRequireDefault(_DocHeader);

var _DocSubmenu = __webpack_require__(14);

var _DocSubmenu2 = _interopRequireDefault(_DocSubmenu);

var _DocComponentStatus = __webpack_require__(13);

var _DocComponentStatus2 = _interopRequireDefault(_DocComponentStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var randomRangeMin = 1e3;
var randomRangeMax = 9e3;

window.Vue.component('doc-component-status', _DocComponentStatus2.default);

var evals = [];

var data = {
    size: [{
        sizeKey: 'xxl',
        sizeName: 'XXL尺寸'
    }, {
        sizeKey: 'xl',
        sizeName: 'XL尺寸'
    }, {
        sizeKey: 'l',
        sizeName: 'L尺寸'
    }, {
        sizeKey: 'm',
        sizeName: 'M尺寸'
    }, {
        sizeKey: 's',
        sizeName: 'S尺寸'
    }, {
        sizeKey: 'xs',
        sizeName: 'XS尺寸'
    }, {
        sizeKey: 'xxs',
        sizeName: 'XXS尺寸'
    }],
    theme: [{
        colorKey: 'theme',
        colorName: '主题色'
    }, {
        colorKey: 'light-theme',
        colorName: '浅主题色'
    }, {
        colorKey: 'dark-theme',
        colorName: '深主题色'
    }],
    feature: [{
        colorKey: 'success',
        colorName: '成功/正确'
    }, {
        colorKey: 'warning',
        colorName: '警告/注意'
    }, {
        colorKey: 'danger',
        colorName: '错误/危险'
    }, {
        colorKey: 'primary',
        colorName: '主要/关键'
    }, {
        colorKey: 'minor',
        colorName: '次要/不醒目'
    }, {
        colorKey: 'info',
        colorName: '信息/额外'
    }],
    black: [{
        colorKey: 'black',
        colorName: '黑色'
    }, {
        colorKey: 'light-black',
        colorName: '浅黑色'
    }, {
        colorKey: 'extra-light-black',
        colorName: '超浅黑色'
    }],
    blue: [{
        colorKey: 'blue',
        colorName: '青色'
    }, {
        colorKey: 'light-blue',
        colorName: '浅青色'
    }, {
        colorKey: 'extra-light-blue',
        colorName: '超浅青色'
    }],
    silver: [{
        colorKey: 'silver',
        colorName: '银色'
    }, {
        colorKey: 'light-silver',
        colorName: '浅银色'
    }, {
        colorKey: 'extra-light-silver',
        colorName: '超浅银色'
    }],
    gray: [{
        colorKey: 'gray',
        colorName: '灰色'
    }, {
        colorKey: 'light-gray',
        colorName: '浅灰色'
    }, {
        colorKey: 'white',
        colorName: '白色'
    }],
    state: [{
        stateKey: 'normal',
        stateName: '正常'
    }, {
        stateKey: 'hover',
        stateName: 'Hover'
    }, {
        stateKey: 'active',
        stateName: '激活'
    }, {
        stateKey: 'disabled',
        stateName: '禁用'
    }, {
        stateKey: 'apparent',
        stateName: '醒目'
    }, {
        stateKey: 'loading',
        stateName: '载入中'
    }, {
        stateKey: 'processing',
        stateName: '处理中'
    }],
    formConfig: {
        formName: '表单名',
        formKey: 'formKey',
        formGroupOne: 'groupName'
    },
    formValueType: [{
        valueType: 'String',
        valueContent: '\'Jim\''
    }, {
        valueType: 'Number',
        valueContent: '5'
    }, {
        valueType: 'Boolean',
        valueContent: 'true'
    }, {
        valueType: 'Null',
        valueContent: 'null'
    }, {
        valueType: 'Undefined',
        valueContent: 'undefined'
    }, {
        valueType: 'Object',
        valueContent: '{}'
    }, {
        valueType: 'Array',
        valueContent: '[]'
    }],
    formConfigTable: '\n|form-name|表单的名称（用于显示）|任意字符串|String|`undefined`|\n' + '|form-key|表单的Key（用于逻辑中作为识别标示）|任意字符串(唯一)|String|`undefined`|\n' + '|group|表单组，用于将多个表单的数值添加到同一个对象中。一个表单可以同时属于多个组|若是字符串，则将表单添加到单个组<br>若是数组，则将表单添加到多个组|String<br/>Array|`[]`|\n' + '|default-value|表单的默认值|任意(接受表单原始数值，也接受JSON序列化后的表单数值，若数值是JSON序列化的会自动转换成原始数值)|Any|`undefined`|\n' + '|hide-name|链接地址，若为空则不跳转|url地址|Boolean|`false`|'
};

var parser = function parser(text) {

    var patt = /````(html|js|css|mixin|)((\n[\t ]*[\@a-zA-Z0-9\:\.\,\|]+)*)\n((.|\n)*?)(\n)*([ \t]*)````/g;
    var varpatt = /````(html|js|css)\n(\@var\:([a-zA-Z0-9]+))\n((.|\n)+?)\n([ \t]*)````/g;
    var result = void 0;
    var vars = {
        js: {},
        html: {}
    };
    var blocks = [];

    while ((result = varpatt.exec(text)) !== null) {

        vars[result[1]][result[3]] = result[4];
        text = text.slice(0, result.index - 1) + text.slice(result.index + result[0].length, text.length);

        varpatt.lastIndex = 0;
    }

    while ((result = patt.exec(text)) !== null) {

        var content = result[4];
        var _helpers = result[2].split('\n');

        _helpers.shift();

        // if (helpers.length === 0) {

        var block = {
            content: content,
            type: result[1],
            result: result,
            helpers: []
        };

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = _helpers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var name = _step.value;


                var list = name.split('|');
                var group = [];

                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = list[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var help = _step2.value;


                        var fn = help.split(':')[0].replace(/^\@/, '');
                        var param = help.split(':')[1];

                        group.push({
                            fn: fn,
                            param: param
                        });
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                block.helpers.push(group);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        blocks.push(block);
    }

    return {
        vars: vars,
        blocks: blocks,
        text: text
    };
};

var helpers = {
    render: function render(opt) {

        opt.isText = true;

        return opt;
    },
    size: function size(opt) {

        if (typeof opt.content === 'string') {

            opt.content = '{$#size}' + opt.content + '\n{$/size}';
        } else if (_typeof(opt.content) === 'object') {

            for (var key in opt.content) {

                opt.content[key] = '{$#size}' + opt.content[key] + '\n{$/size}';
            }
        }

        return opt;
    },
    color: function color(opt) {

        var color = opt.param;

        if (typeof opt.content === 'string') {

            opt.content = '{$#' + color + '}' + opt.content + '\n{$/' + color + '}';
        } else if (_typeof(opt.contnet) === 'object') {

            for (var key in opt.content) {

                opt.content[key] = '{$#' + color + '}' + opt.content[key] + '\n{$/' + color + '}';
            }
        }

        if (color === 'silver') {

            opt.style.push('background: #626b75;border-color: #454d57');
        } else if (color === 'gray') {

            opt.style.push('background:#676767;border-color:#494949');
        }

        return opt;
    },
    state: function state(opt) {

        if (opt.param === undefined) {

            opt.param = 'all';
        }

        var states = opt.param.split(',');

        if (states.length > 0 && states.indexOf('all') === -1) {

            var sna = [];

            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = data.state[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var state = _step3.value;


                    if (states.indexOf(state.stateKey) !== -1) {

                        sna.push(state);
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            opt.context = {
                state: sna
            };
        }

        if (typeof opt.content === 'string') {

            opt.content = '{$#state}' + opt.content + '\n{$/state}';
        } else if (_typeof(opt.contnet) === 'object') {

            for (var key in opt.content) {

                opt.content[key] = '{$#state}' + opt.content[key] + '\n{$/state}';
            }
        }

        return opt;
    },
    br: function br(opt) {

        var num = +opt.param || 1;
        var brs = '';

        while (num--) {

            brs += '<br/>';
        }

        if (typeof opt.content === 'string') {

            opt.content = opt.content + '\n' + brs + '\n';
        } else if (_typeof(opt.content) === 'object') {

            for (var key in opt.content) {

                opt.content[key] = opt.content[key] + '\n' + brs + '\n';
            }
        }

        return opt;
    },
    use: function use(opt) {

        var links = opt.param.split(',');

        opt.content = {};

        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
            for (var _iterator4 = links[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var link = _step4.value;


                var type = link.split('.')[0];
                var key = link.split('.')[1];

                opt.content[type] = '&&&&&{$id}|' + opt.vars[type][key];
            }
        } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                    _iterator4.return();
                }
            } finally {
                if (_didIteratorError4) {
                    throw _iteratorError4;
                }
            }
        }

        opt.render = function (sopt) {

            var list = {};
            var code = '';
            var demo = '';
            var newData = (0, _extend2.default)(true, {}, sopt.context);
            var lastType = void 0;

            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = Object.keys(newData)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var key = _step5.value;


                    var value = newData[key];
                    var _id = 'demo-' + _underscore2.default.random(randomRangeMin, randomRangeMax);

                    if (value instanceof Array) {
                        var _iteratorNormalCompletion7 = true;
                        var _didIteratorError7 = false;
                        var _iteratorError7 = undefined;

                        try {

                            for (var _iterator7 = value[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                                var svalue = _step7.value;


                                svalue.id = _id;
                                svalue.el = '#' + _id + '-el';
                                svalue.template = '#' + _id + '-tmpl';
                            }
                        } catch (err) {
                            _didIteratorError7 = true;
                            _iteratorError7 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion7 && _iterator7.return) {
                                    _iterator7.return();
                                }
                            } finally {
                                if (_didIteratorError7) {
                                    throw _iteratorError7;
                                }
                            }
                        }
                    } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {

                        value.id = _id;
                        value.el = '#' + _id + '-el';
                        value.template = '#' + _id + '-tmpl';
                    }
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }

            var id = 'demo-' + _underscore2.default.random(randomRangeMin, randomRangeMax);

            newData.id = id;
            newData.el = '#' + id + '-el';
            newData.template = '#' + id + '-tmpl';

            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = Object.keys(sopt.content)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var type = _step6.value;


                    _mustache2.default.parse(sopt.content[type], ['{$', '}']);

                    list[type] = _mustache2.default.render(sopt.content[type], newData).split('&&&&&');
                    list[type].shift();
                    lastType = type;
                }
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                        _iterator6.return();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }

            for (var i in list[lastType]) {

                var html = list.html[i];
                var js = list.js[i];
                var demoid = html.match(/^([0-9a-z-]+?)\|/)[1];

                html = html.replace(/^[0-9a-z-]+?\|/, '');
                js = js.replace(/^[0-9a-z-]+?\|/, '');

                code += '<div id="' + demoid + '-el"><!-- ' + demoid + ' \u5BB9\u5668 --></div>\n\n';
                demo += '<div id="' + demoid + '-el"></div>\n';

                // html
                var htmlScript = document.createElement('script');

                html = html.replace(/[\n]*?$/, '');
                htmlScript.innerHTML = '\n' + html + '\n';
                htmlScript.type = 'x-template';
                htmlScript.id = demoid + '-tmpl';

                code += htmlScript.outerHTML + '\n\n';

                htmlScript.innerHTML = htmlScript.innerHTML.replace(/\{%([a-zA-Z0-9_]+)%\}/g, '{{$1}}');
                evals.push(htmlScript);

                // js

                var jsScript = document.createElement('script');

                js = js.replace(/[\n]*?$/, '');
                jsScript.innerHTML = '\n' + js + '\n';

                evals.push(jsScript);

                code += jsScript.outerHTML;

                if (i < list[lastType].length - 1) {

                    code += '\n\n------------------------------------------------\n\n';
                }
            }

            return {
                demo: demo,
                code: code
            };
        };

        return opt;
    },
    formConfig: function formConfig(opt) {

        if (typeof opt.content === 'string') {

            opt.content = '{$#formConfig}' + opt.content + '\n{$/formConfig}';
        } else if (_typeof(opt.content) === 'object') {

            for (var key in opt.content) {

                opt.content[key] = '{$#formConfig}' + opt.content[key] + '\n{$/formConfig}';
            }
        }

        return opt;
    },
    formValueType: function formValueType(opt) {

        if (typeof opt.content === 'string') {

            opt.content = '{$#formValueType}' + opt.content + '\n{$/formValueType}';
        } else if (_typeof(opt.content) === 'object') {

            for (var key in opt.content) {

                opt.content[key] = '{$#formValueType}' + opt.content[key] + '\n{$/formValueType}';
            }
        }

        return opt;
    }
};

var make = {
    block: function block(_block) {

        return '<div class="demo">\n' + _block.content + '</div>\n\n```' + _block.type + '\n' + _block.content + '\n```\n';
    },
    opt: function opt(opts, block) {

        var text = '';

        var _iteratorNormalCompletion8 = true;
        var _didIteratorError8 = false;
        var _iteratorError8 = undefined;

        try {
            for (var _iterator8 = opts[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                var opt = _step8.value;


                var code = void 0,
                    demo = void 0;

                opt.context = (0, _extend2.default)({}, data, opt.context);

                if (typeof opt.render === 'function') {

                    var result = opt.render(opt);

                    code = result.code;
                    demo = result.demo;
                } else {

                    var template = opt.content;

                    _mustache2.default.parse(template, ['{$', '}']);

                    code = _mustache2.default.render(template, opt.context);
                }

                if (opt.style.length === 0) {

                    opt.style = '';
                } else {

                    opt.style = opt.style.join(';');
                }

                if (block.type === 'mixin') {

                    block.type = 'html';
                }

                if (opt.isText) {

                    text += code;
                } else {

                    text += '<div class="demo" style="' + opt.style + '">\n' + (demo || code) + '</div>\n\n```' + block.type + '\n' + code + '\n```\n';
                }
            }
        } catch (err) {
            _didIteratorError8 = true;
            _iteratorError8 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion8 && _iterator8.return) {
                    _iterator8.return();
                }
            } finally {
                if (_didIteratorError8) {
                    throw _iteratorError8;
                }
            }
        }

        return text;
    }
};

var runner = function runner(tree) {
    var _iteratorNormalCompletion9 = true;
    var _didIteratorError9 = false;
    var _iteratorError9 = undefined;

    try {

        for (var _iterator9 = tree.blocks[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
            var block = _step9.value;


            if (block.helpers.length > 0) {

                var opts = [];

                var _iteratorNormalCompletion10 = true;
                var _didIteratorError10 = false;
                var _iteratorError10 = undefined;

                try {
                    for (var _iterator10 = block.helpers[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                        var group = _step10.value;


                        var opt = {
                            content: block.content,
                            vars: tree.vars,
                            helperlist: group,
                            style: []
                        };

                        var _iteratorNormalCompletion11 = true;
                        var _didIteratorError11 = false;
                        var _iteratorError11 = undefined;

                        try {
                            for (var _iterator11 = group[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                                var helper = _step11.value;


                                opt.param = helper.param;
                                opt = helpers[helper.fn](opt);
                            }
                        } catch (err) {
                            _didIteratorError11 = true;
                            _iteratorError11 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion11 && _iterator11.return) {
                                    _iterator11.return();
                                }
                            } finally {
                                if (_didIteratorError11) {
                                    throw _iteratorError11;
                                }
                            }
                        }

                        opts.push(opt);
                    }
                } catch (err) {
                    _didIteratorError10 = true;
                    _iteratorError10 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion10 && _iterator10.return) {
                            _iterator10.return();
                        }
                    } finally {
                        if (_didIteratorError10) {
                            throw _iteratorError10;
                        }
                    }
                }

                block._html = make.opt(opts, block);
            } else {

                block._html = make.block(block);
            }
        }
    } catch (err) {
        _didIteratorError9 = true;
        _iteratorError9 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion9 && _iterator9.return) {
                _iterator9.return();
            }
        } finally {
            if (_didIteratorError9) {
                throw _iteratorError9;
            }
        }
    }

    var text = tree.text;
    var patt = /````(html|js|css|mixin|)((\n[\t ]*[\@a-zA-Z0-9\:\.\,\|]+)*)\n((.|\n)*?)(\n)*([ \t]*)````/g;
    var index = 0;
    var result = void 0;

    while ((result = patt.exec(text)) !== null) {

        text = text.slice(0, result.index - 1) + tree.blocks[index++]._html + text.slice(result.index + result[0].length, text.length);
    }

    return text;
};
window.Vue.directive('docmd', {
    bind: function bind(el) {

        var mdScript = el.getElementsByTagName('script')[0];

        if (mdScript && mdScript.type === 'text/markdown') {

            var text = mdScript.innerText;
            var tree = parser(text);

            text = runner(tree);

            var md = (0, _marked2.default)(text);

            md = md.replace(/\{\%([a-zA-Z0-9\_]+)\%\}/g, '{{"\\\{\\\{$1\\\}\\\}"}}');
            md = md.replace(/\<p\>(\[\[\[(.+)\]\]\])\<\/p\>/g, '$1');
            md = md.replace(/(\[\[\[)/, '<ui-tab class="block noborder">$1');
            md = md.replace(/\[\[\[基础\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="开始">$1</div>$3');
            md = md.replace(/\[\[\[声明\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="声明">$1</div>$3');
            md = md.replace(/\[\[\[配置\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="配置">$1</div>$3');
            md = md.replace(/\[\[\[方法\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="方法">$1</div>$3');
            md = md.replace(/\[\[\[事件\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="事件">$1</div>$3');
            md = md.replace(/\[\[\[表单值\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="表单值">$1</div>$3');
            md = md.replace(/\[\[\[单元测试\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="源码">$1</div>$3');
            md = md.replace(/(.|\n)$/, '$1</ui-tab>');

            var res = Vue.compile('<div>' + md + '</div>');
            var instance = new Vue({
                render: res.render,
                staticRenderFns: res.staticRenderFns
            });

            instance.$mount();
            el.appendChild(instance.$el);
        }
    }
});

exports.default = {
    props: {
        category: String,
        page: String,
        hasPadding: Boolean
    },
    data: function data() {

        return {};
    },
    components: {
        'doc-header': _DocHeader2.default,
        'doc-submenu': _DocSubmenu2.default
    },
    mounted: function mounted() {

        _highlight2.default.initHighlightingOnLoad();

        var _iteratorNormalCompletion12 = true;
        var _didIteratorError12 = false;
        var _iteratorError12 = undefined;

        try {
            for (var _iterator12 = evals[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                var js = _step12.value;

                document.body.appendChild(js);
            }
        } catch (err) {
            _didIteratorError12 = true;
            _iteratorError12 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion12 && _iterator12.return) {
                    _iterator12.return();
                }
            } finally {
                if (_didIteratorError12) {
                    throw _iteratorError12;
                }
            }
        }
    }
};
module.exports = exports['default'];

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

exports.default = {
    props: {
        page: String
    },
    computed: {
        isUnitPass: function isUnitPass() {

            return this.unit === 'pass';
        },
        isE2EPass: function isE2EPass() {

            return this.e2e === 'pass';
        }
    },
    data: function data() {

        return {
            unit: '-',
            unitNote: '',
            unitTitle: '',
            e2e: '-',
            e2eNote: '',
            e2eTitle: '',
            coverage: '-',
            coverageLevel: '-'
        };
    },
    mounted: function mounted() {
        var _this = this;

        $.get('/report/test.json', function (data) {

            var unitAllTest = 0;
            var unitPassTest = 0;
            var unitFailTest = 0;
            var e2eAllTest = 0;
            var e2ePassTest = 0;
            var e2eFailTest = 0;

            console.log(_this.page);

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = data.tests[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var item = _step.value;


                    if (/\# SKIP/.test(item.name)) {

                        return;
                    }

                    var unitReg = new RegExp('unit \u203A components \u203A ' + _this.page + ' \u203A ');
                    var e2eReg = new RegExp('e2e \u203A components \u203A ' + _this.page + ' \u203A ');

                    if (unitReg.test(item.name)) {

                        unitAllTest++;
                    }

                    if (e2eReg.test(item.name)) {

                        e2eAllTest++;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = data.pass[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _item = _step2.value;


                    if (/\# SKIP/.test(_item.name)) {

                        return;
                    }

                    var unitReg = new RegExp('unit \u203A components \u203A ' + _this.page + ' \u203A ');
                    var e2eReg = new RegExp('e2e \u203A components \u203A ' + _this.page + ' \u203A ');

                    if (unitReg.test(_item.name)) {

                        unitPassTest++;
                    }

                    if (e2eReg.test(_item.name)) {

                        e2ePassTest++;
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = data.fail[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var _item2 = _step3.value;


                    if (/\# SKIP/.test(_item2.name)) {

                        return;
                    }

                    var unitReg = new RegExp('unit \u203A components \u203A ' + _this.page + ' \u203A ');
                    var e2eReg = new RegExp('e2e \u203A components \u203A ' + _this.page + ' \u203A ');

                    if (unitReg.test(_item2.name)) {
                        unitFailTest++;
                    }

                    if (e2eReg.test(_item2.name)) {
                        e2eFailTest++;
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            if (unitAllTest === 0) {

                _this.unit = 'no';
            } else if (unitPassTest === unitAllTest) {

                _this.unit = 'pass';
            } else {

                _this.unit = 'fail';
            }

            _this.unitNote = '(' + unitPassTest + '/' + unitAllTest + ')';
            _this.unitTitle = 'All:' + unitAllTest + ', Pass:' + unitPassTest + ', Fail:' + unitFailTest;

            if (e2eAllTest === 0) {

                _this.e2e = 'no';
            } else if (e2ePassTest === e2eAllTest) {

                _this.e2e = 'pass';
            } else {

                _this.e2e = 'fail';
            }

            _this.e2eNote = '(' + e2ePassTest + '/' + e2eAllTest + ')';
            _this.e2eTitle = 'All:' + e2eAllTest + ', Pass:' + e2ePassTest + ', Fail:' + e2eFailTest;
        });

        $.get('/report/coverage/lib/components/' + this.page + '/index.vue.html', function (data) {

            var lineCoverage = data.match(/\>([0-9\.]+?)% \<\/span\>(.|\n)+?Statements/);
            var coverageLevel = data.match(/status\-line ([a-z]+?)(\"|\')/);

            if (lineCoverage && lineCoverage[1]) {

                _this.coverage = lineCoverage[1] + '%';
            } else {

                _this.coverage = '0%';
            }

            if (coverageLevel && coverageLevel[1]) {

                _this.coverageLevel = coverageLevel[1];
            } else {

                _this.coverageLevel = 'no';
            }
        });
    }
};
module.exports = exports['default'];

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _menu = __webpack_require__(22);

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        category: String,
        page: String
    },
    computed: {
        currentMenu: function currentMenu() {

            return this.menuList[this.category] || {};
        }
    },
    data: function data() {

        return {
            menuList: _menu2.default
        };
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

module.exports = exports['default'];

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19a67f04_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(477);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(236)
}
var normalizeComponent = __webpack_require__(0)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19a67f04_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/guide/statement/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-19a67f04", Component.options)
  } else {
    hotAPI.reload("data-v-19a67f04", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

},[219]);