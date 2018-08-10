/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/animation */ \"./js/modules/animation.js\");\n/* harmony import */ var _modules_clickAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/clickAnimation */ \"./js/modules/clickAnimation.js\");\n\n\n\nvar animation = new _modules_animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nvar clickAnimation = new _modules_clickAnimation__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/modules/animation.js":
/*!*********************************!*\
  !*** ./js/modules/animation.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs */ \"./node_modules/animejs/anime.min.js\");\n/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var velocity_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! velocity-animate */ \"./node_modules/velocity-animate/velocity.js\");\n/* harmony import */ var velocity_animate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(velocity_animate__WEBPACK_IMPORTED_MODULE_2__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\n\nvar Animation = function () {\n  function Animation() {\n    _classCallCheck(this, Animation);\n\n    this.cssSelector();\n    this.cssSelectorVelocity();\n    this.cssProperties();\n    this.cssPropertiesVelocity();\n    this.cssTransforms();\n    this.cssTransformsVelocity();\n    this.svgAttributes();\n    this.svgAttributesVelocity();\n    this.textAnimation();\n    this.svgAnimation();\n    this.itemFade();\n    this.lineAnimation();\n  }\n\n  _createClass(Animation, [{\n    key: 'cssSelector',\n    value: function cssSelector() {\n      animejs__WEBPACK_IMPORTED_MODULE_1___default()({\n        targets: '#cssSelector .el',\n        translateX: 250\n      });\n    }\n  }, {\n    key: 'cssSelectorVelocity',\n    value: function cssSelectorVelocity() {\n      var $cssSelectorVelocity = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#cssSelectorVelocity');\n      velocity_animate__WEBPACK_IMPORTED_MODULE_2___default()($cssSelectorVelocity, {\n        translateX: 250\n      });\n    }\n  }, {\n    key: 'cssProperties',\n    value: function cssProperties() {\n      animejs__WEBPACK_IMPORTED_MODULE_1___default()({\n        targets: '#cssProperties .el',\n        left: '250px',\n        backgroundColor: '#000',\n        borderRadius: 40,\n        easing: 'easeInOutQuad'\n      });\n    }\n  }, {\n    key: 'cssPropertiesVelocity',\n    value: function cssPropertiesVelocity() {\n      var $cssPropertiesVelocity = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#cssPropertiesVelocity .el');\n      velocity_animate__WEBPACK_IMPORTED_MODULE_2___default()($cssPropertiesVelocity, {\n        left: '250px',\n        backgroundColor: '#000',\n        borderRadius: 40,\n        easing: 'easeInOutQuad'\n      }, 1000);\n    }\n  }, {\n    key: 'cssTransforms',\n    value: function cssTransforms() {\n      animejs__WEBPACK_IMPORTED_MODULE_1___default()({\n        targets: '#cssTransforms .el',\n        translateX: 250,\n        scale: 2,\n        rotate: '1turn'\n      });\n    }\n  }, {\n    key: 'cssTransformsVelocity',\n    value: function cssTransformsVelocity() {\n      var $cssPropertiesVelocity = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#cssTransformsVelocity .el');\n      velocity_animate__WEBPACK_IMPORTED_MODULE_2___default()($cssPropertiesVelocity, {\n        translateX: 250,\n        scale: 2,\n        rotateZ: 360\n      });\n    }\n  }, {\n    key: 'svgAttributes',\n    value: function svgAttributes() {\n      animejs__WEBPACK_IMPORTED_MODULE_1___default()({\n        targets: '#svgAttributes polygon',\n        points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',\n        easing: 'easeInOutExpo'\n      });\n    }\n  }, {\n    key: 'svgAttributesVelocity',\n    value: function svgAttributesVelocity() {\n      var $svgAttributesVelocity = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#svgAttributesVelocity polygon');\n      velocity_animate__WEBPACK_IMPORTED_MODULE_2___default()($svgAttributesVelocity, {\n        duration: 1000,\n        easing: 'easeInOutExpo'\n      }, {\n        complete: function complete() {\n          $svgAttributesVelocity[0].setAttribute('points', '64, 128, 8.574, 96, 8.574, 32, 64, 0, 119.426, 32, 119.426, 96');\n        }\n      });\n    }\n  }, {\n    key: 'textAnimation',\n    value: function textAnimation() {\n      animejs__WEBPACK_IMPORTED_MODULE_1___default.a.timeline({ loop: false }).add({\n        targets: '.ml1 .line',\n        scaleX: [0, 1],\n        opacity: [0.5, 1],\n        easing: 'easeOutExpo',\n        duration: 700,\n        delay: function delay(el, i, l) {\n          return 80 * (l + i);\n        }\n      }).add({\n        targets: '.ml1 .letters',\n        opacity: [0, 1],\n        translateZ: 0,\n        easing: 'easeOutExpo',\n        duration: 600,\n        offset: '-=875',\n        delay: function delay(el, i) {\n          return 70 * (i + 1) + 700;\n        }\n      });\n    }\n  }, {\n    key: 'svgAnimation',\n    value: function svgAnimation() {\n      var path = animejs__WEBPACK_IMPORTED_MODULE_1___default.a.path('#motionPath path');\n      animejs__WEBPACK_IMPORTED_MODULE_1___default()({\n        targets: '#motionPath .el',\n        translateX: path('x'),\n        translateY: path('y'),\n        rotate: path('angle'),\n        easing: 'linear',\n        duration: 2000,\n        loop: false\n      });\n    }\n  }, {\n    key: 'itemFade',\n    value: function itemFade() {\n      animejs__WEBPACK_IMPORTED_MODULE_1___default()({\n        targets: ['.item1', '.item2'],\n        opacity: [0, 1, 0],\n        easing: 'easeInSine',\n        duration: 4000,\n        delay: function delay(el, index) {\n          return index * 2000;\n        }\n      });\n    }\n  }, {\n    key: 'lineAnimation',\n    value: function lineAnimation() {\n      animejs__WEBPACK_IMPORTED_MODULE_1___default()({\n        targets: '#line .line',\n        scaleX: [0, 1],\n        opacity: [0, 1],\n        easing: 'easeOutExpo',\n        duration: 700,\n        delay: 400\n      });\n    }\n  }]);\n\n  return Animation;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Animation);\n\n//# sourceURL=webpack:///./js/modules/animation.js?");

/***/ }),

/***/ "./js/modules/clickAnimation.js":
/*!**************************************!*\
  !*** ./js/modules/clickAnimation.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs */ \"./node_modules/animejs/anime.min.js\");\n/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_1__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\nvar ClickAnimation = function () {\n  function ClickAnimation() {\n    _classCallCheck(this, ClickAnimation);\n\n    this.attachEvent();\n    this.isAnimation = false;\n  }\n\n  _createClass(ClickAnimation, [{\n    key: 'attachEvent',\n    value: function attachEvent() {\n      var _this = this;\n\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.click-area').on('click', function () {\n        // this.onClickEvent();\n        _this.showCircle();\n      });\n    }\n  }, {\n    key: 'onClickEvent',\n    value: function onClickEvent() {\n      if (this.isAnimation === false) {\n        animejs__WEBPACK_IMPORTED_MODULE_1___default()({\n          targets: '.click-area .square',\n          backgroundColor: '#000',\n          borderRadius: 100\n        });\n        this.isAnimation = true;\n      } else if (this.isAnimation === true) {\n        animejs__WEBPACK_IMPORTED_MODULE_1___default()({\n          targets: '.click-area .square',\n          borderRadius: 0\n        });\n        this.isAnimation = false;\n      }\n    }\n  }, {\n    key: 'showCircle',\n    value: function showCircle() {\n      var targetId = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.click-area ul li');\n      var i = 0;\n      var positionX = 0;\n      var positionY = 0;\n      var widthData = 0;\n      targetId.each(function () {\n        positionY = Math.random() * 200;\n        positionX = Math.random() * 200;\n        widthData = Math.random() * 20;\n        var randomColor = 'rgb(' + ~~(256 * Math.random()) + ', ' + ~~(256 * Math.random()) + ', ' + ~~(256 * Math.random()) + ')';\n        animejs__WEBPACK_IMPORTED_MODULE_1___default()({\n          targets: targetId[i],\n          backgroundColor: randomColor,\n          width: widthData,\n          height: widthData,\n          borderRadius: 20,\n          top: positionY,\n          left: positionX\n        }, 1000);\n        i++;\n      });\n    }\n  }]);\n\n  return ClickAnimation;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClickAnimation);\n\n//# sourceURL=webpack:///./js/modules/clickAnimation.js?");

/***/ })

/******/ });