/*!
 * vue3-konva v1.0.0 - https://github.com/vunamhung/vue-konva#readme
 * MIT Licensed
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"), require("konva"));
	else if(typeof define === 'function' && define.amd)
		define(["vue", "konva"], factory);
	else if(typeof exports === 'object')
		exports["VueKonva"] = factory(require("vue"), require("konva"));
	else
		root["VueKonva"] = factory(root["Vue"], root["Konva"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"root":"Vue","commonjs2":"vue","commonjs":"vue","amd":"vue"}
var external_root_Vue_commonjs2_vue_commonjs_vue_amd_vue_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/utils/updatePicture.js
// adapted FROM: https://github.com/lavrton/react-konva/blob/master/src/react-konva-fiber.js
function updatePicture(node) {
  var drawingNode = node.getLayer() || node.getStage();
  drawingNode && drawingNode.batchDraw();
}
// CONCATENATED MODULE: ./src/utils/applyNodeProps.js
// adapted FROM: https://github.com/lavrton/react-konva/blob/master/src/react-konva-fiber.js

var propsToSkip = {
  key: true,
  style: true,
  elm: true,
  isRootInsert: true
};
var EVENTS_NAMESPACE = '.vue-konva-event';
function applyNodeProps(vueComponent, props, oldProps, useStrict) {
  if (props === void 0) {
    props = {};
  }

  if (oldProps === void 0) {
    oldProps = {};
  }

  var instance = vueComponent.__konvaNode;
  var updatedProps = {};
  var hasUpdates = false;

  for (var key in oldProps) {
    if (propsToSkip[key]) {
      continue;
    }

    var isEvent = key.slice(0, 2) === 'on';
    var propChanged = oldProps[key] !== props[key];

    if (isEvent && propChanged) {
      var eventName = key.substr(2).toLowerCase();

      if (eventName.substr(0, 7) === 'content') {
        eventName = 'content' + eventName.substr(7, 1).toUpperCase() + eventName.substr(8);
      }

      instance.off(eventName + EVENTS_NAMESPACE, oldProps[key]);
    }

    var toRemove = !props.hasOwnProperty(key);

    if (toRemove) {
      instance.setAttr(key, undefined);
    }
  }

  for (var _key in props) {
    if (propsToSkip[_key]) {
      continue;
    }

    var _isEvent = _key.slice(0, 2) === 'on';

    var toAdd = oldProps[_key] !== props[_key];

    if (_isEvent && toAdd) {
      var _eventName = _key.substr(2).toLowerCase();

      if (_eventName.substr(0, 7) === 'content') {
        _eventName = 'content' + _eventName.substr(7, 1).toUpperCase() + _eventName.substr(8);
      }

      if (props[_key]) {
        instance.off(_eventName + EVENTS_NAMESPACE);
        instance.on(_eventName + EVENTS_NAMESPACE, props[_key]);
      }
    }

    if (!_isEvent && (props[_key] !== oldProps[_key] || useStrict && props[_key] !== instance.getAttr(_key))) {
      hasUpdates = true;
      updatedProps[_key] = props[_key];
    }
  }

  if (hasUpdates) {
    instance.setAttrs(updatedProps);
    updatePicture(instance);
  }
}
// CONCATENATED MODULE: ./src/utils/index.js


var componentPrefix = 'v';
var konvaNodeMarker = '_konvaNode';
function copy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
function findParentKonva(instance) {
  function re(instance) {
    if (instance.__konvaNode) {
      return instance;
    }

    if (instance.$parent) {
      return re(instance.$parent);
    }

    return {};
  }

  return re(instance.$parent);
}
function findKonvaNode(instance) {
  var _instance$component, _instance$component2, _instance$component2$;

  if (!(instance === null || instance === void 0 ? void 0 : (_instance$component = instance.component) === null || _instance$component === void 0 ? void 0 : _instance$component.ctx)) {
    return null;
  }

  if (instance === null || instance === void 0 ? void 0 : (_instance$component2 = instance.component) === null || _instance$component2 === void 0 ? void 0 : (_instance$component2$ = _instance$component2.ctx) === null || _instance$component2$ === void 0 ? void 0 : _instance$component2$.__konvaNode) {
    return instance.component.ctx.__konvaNode;
  }

  if (instance.component.subTree.__konvaNode) {
    return instance.component.subTree.__konvaNode;
  }

  return findKonvaNode(instance.component.subTree);
}
function checkOrder($, konvaNode) {
  var needRedraw = false;
  var children = [];

  if ($.subTree.children) {
    $.subTree.children.forEach(function (child) {
      if (!child.component && Array.isArray(child.children)) {
        children.push.apply(children, child.children);
      }

      if (child.component) {
        children.push(child);
      }
    });
  }

  var nodes = [];
  children.forEach(function ($vnode) {
    var konvaNode = findKonvaNode($vnode);

    if (konvaNode) {
      nodes.push(konvaNode);
    }

    var el = $vnode.el,
        component = $vnode.component;

    if (el && el.tagName && component && !konvaNode) {
      var name = el && el.tagName.toLowerCase();
      console.error("vue-konva error: You are trying to render \"" + name + "\" inside your component tree. Looks like it is not a Konva node. You can render only Konva components inside the Stage.");
    }
  });
  nodes.forEach(function (konvaNode, index) {
    if (konvaNode.getZIndex() !== index) {
      konvaNode.setZIndex(index);
      needRedraw = true;
    }
  });

  if (needRedraw) {
    updatePicture(konvaNode);
  }
}

// CONCATENATED MODULE: ./src/components/Stage.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



/* harmony default export */ var Stage = ({
  render: function render() {
    var _this$$slots$default, _this$$slots;

    return Object(external_root_Vue_commonjs2_vue_commonjs_vue_amd_vue_["h"])('div', (_this$$slots$default = (_this$$slots = this.$slots).default) === null || _this$$slots$default === void 0 ? void 0 : _this$$slots$default.call(_this$$slots));
  },
  watch: {
    config: {
      handler: function handler(val) {
        this.uploadKonva();
      },
      deep: true
    }
  },
  props: {
    config: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    __useStrictMode: {
      type: Boolean
    }
  },
  created: function created() {
    this.__konvaNode = new window.Konva.Stage({
      width: this.config.width,
      height: this.config.height,
      // create fake container, later it will be replaced with real div on the page
      container: document.createElement('div')
    });
  },
  mounted: function mounted() {
    this.$el.innerHTML = '';

    this.__konvaNode.container(this.$el);

    this.uploadKonva();
    this.validateChildren();
  },
  updated: function updated() {
    this.uploadKonva();
    this.uploadKonva();
    checkOrder(this.$, this.__konvaNode);
  },
  beforeUnmount: function beforeUnmount() {
    this.__konvaNode.destroy();
  },
  methods: {
    getNode: function getNode() {
      return this.__konvaNode;
    },
    getStage: function getStage() {
      return this.__konvaNode;
    },
    uploadKonva: function uploadKonva() {
      var oldProps = this.oldProps || {};

      var props = _extends({}, this.$attrs, this.config);

      applyNodeProps(this, props, oldProps, this.__useStrictMode);
      this.oldProps = props;
    },
    validateChildren: function validateChildren() {// TODO: add a waring if we see non-Konva element here
      // this.$vnode.componentOptions.children.forEach(child => {
      //   console.log(child);
      // })
    }
  }
});
// CONCATENATED MODULE: ./src/components/KonvaNode.js
function KonvaNode_extends() { KonvaNode_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return KonvaNode_extends.apply(this, arguments); }



var KonvaNode_EVENTS_NAMESPACE = '.vue-konva-event';
var CONTAINERS = {
  Group: true,
  Layer: true,
  FastLayer: true,
  Label: true
};
/* harmony default export */ var KonvaNode = (function (nameNode) {
  var _ref;

  return _ref = {}, _ref[konvaNodeMarker] = true, _ref.render = function render() {
    // containers should be able to draw children
    var isContainer = CONTAINERS[nameNode];

    if (isContainer) {
      var _this$$slots$default, _this$$slots;

      return Object(external_root_Vue_commonjs2_vue_commonjs_vue_amd_vue_["h"])('template', (_this$$slots$default = (_this$$slots = this.$slots).default) === null || _this$$slots$default === void 0 ? void 0 : _this$$slots$default.call(_this$$slots));
    } // other elements are not containers


    return null;
  }, _ref.watch = {
    config: {
      handler: function handler(val) {
        this.uploadKonva();
      },
      deep: true
    }
  }, _ref.props = {
    config: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    __useStrictMode: {
      type: Boolean
    }
  }, _ref.created = function created() {
    this.initKonva();
  }, _ref.mounted = function mounted() {
    var parentVueInstance = findParentKonva(this);
    var parentKonvaNode = parentVueInstance.__konvaNode;
    parentKonvaNode.add(this.__konvaNode);
    updatePicture(this.__konvaNode);
  }, _ref.updated = function updated() {
    this.uploadKonva();
    checkOrder(this.$, this.__konvaNode);
  }, _ref.unmounted = function unmounted() {
    updatePicture(this.__konvaNode);

    this.__konvaNode.destroy();

    this.__konvaNode.off(KonvaNode_EVENTS_NAMESPACE);
  }, _ref.methods = {
    getNode: function getNode() {
      return this.__konvaNode;
    },
    getStage: function getStage() {
      return this.__konvaNode;
    },
    initKonva: function initKonva() {
      var NodeClass = window.Konva[nameNode];

      if (!NodeClass) {
        console.error('vue-konva error: Can not find node ' + nameNode);
        return;
      }

      this.__konvaNode = new NodeClass();
      this.$.vnode.__konvaNode = this.__konvaNode;
      this.uploadKonva();
    },
    uploadKonva: function uploadKonva() {
      var oldProps = this.oldProps || {};

      var props = KonvaNode_extends({}, this.$attrs, this.config);

      applyNodeProps(this, props, oldProps, this.__useStrictMode);
      this.oldProps = props;
    }
  }, _ref;
});
// CONCATENATED MODULE: ./src/index.js




if (typeof window !== 'undefined' && !window.Konva) {
  __webpack_require__(2);
}

var KONVA_NODES = ['Layer', 'FastLayer', 'Group', 'Label', 'Rect', 'Circle', 'Ellipse', 'Wedge', 'Line', 'Sprite', 'Image', 'Text', 'TextPath', 'Star', 'Ring', 'Arc', 'Tag', 'Path', 'RegularPolygon', 'Arrow', 'Shape', 'Transformer'];
var components = [{
  name: 'Stage',
  component: Stage
}].concat(KONVA_NODES.map(function (name) {
  return {
    name: name,
    component: KonvaNode(name)
  };
}));
var VueKonva = {
  install: function install(app, options) {
    var prefixToUse = componentPrefix;

    if (options && options.prefix) {
      prefixToUse = options.prefix;
    }

    components.forEach(function (k) {
      app.component("" + prefixToUse + k.name, k.component);
    });
  }
};
/* harmony default export */ var src = __webpack_exports__["default"] = (VueKonva);

/***/ })
/******/ ])["default"];
});