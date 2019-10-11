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
/******/ 		"App": 0
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
/******/ 	__webpack_require__.p = "/apps/landing/";
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
/******/ 	deferredModules.push(["./src/entry-dev.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_Utilities_Registry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/Utilities/Registry */ "./node_modules/@red-hat-insights/insights-frontend-components/Utilities/Registry.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_Utilities_Registry__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_Utilities_Registry__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _routes_404__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/404 */ "./src/routes/404.js");
/* harmony import */ var _routes_Landing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/Landing */ "./src/routes/Landing.js");
/* harmony import */ var _store_technologiesReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/technologiesReducer */ "./src/store/technologiesReducer.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/actions */ "./src/store/actions.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./consts */ "./src/consts.js");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_10__);











var routes = {
  landing: '/'
};

var App = function App(_ref) {
  var loadTechnologies = _ref.loadTechnologies;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_red_hat_insights_insights_frontend_components_Utilities_Registry__WEBPACK_IMPORTED_MODULE_3__["getRegistry"])().register({
      technologies: _store_technologiesReducer__WEBPACK_IMPORTED_MODULE_7__["default"]
    });
    loadTechnologies(_consts__WEBPACK_IMPORTED_MODULE_9__["activeTechnologies"]);
    insights.chrome.init();
    insights.chrome.identifyApp('landing');
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: routes.landing,
    component: _routes_Landing__WEBPACK_IMPORTED_MODULE_6__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: routes.landingBeta,
    component: _routes_Landing__WEBPACK_IMPORTED_MODULE_6__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "*",
    component: _routes_404__WEBPACK_IMPORTED_MODULE_5__["default"]
  }));
};

App.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  loadTechnologies: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};
App.defaultProps = {
  loadTechnologies: function loadTechnologies() {
    return undefined;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(null, function (dispatch) {
  return {
    loadTechnologies: function loadTechnologies(technologies) {
      return dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_8__["technologiesLoaded"])(technologies));
    }
  };
})(App)));

/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/ansible.svg":
/*!************************************!*\
  !*** ./src/components/ansible.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/ansible.svg";

/***/ }),

/***/ "./src/components/hcm.svg":
/*!********************************!*\
  !*** ./src/components/hcm.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/hcm.svg";

/***/ }),

/***/ "./src/components/icon-404.js":
/*!************************************!*\
  !*** ./src/components/icon-404.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon_404_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon-404.scss */ "./src/components/icon-404.scss");
/* harmony import */ var _icon_404_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_icon_404_scss__WEBPACK_IMPORTED_MODULE_1__);



var Icon404 = function Icon404() {
  return (// eslint-disable-next-line max-len
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      className: "Icon404",
      id: "Icon404",
      "data-name": "Layer 1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 131 131"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mask", {
      id: "mask",
      x: "0",
      y: "0",
      width: "131",
      height: "131",
      maskUnits: "userSpaceOnUse"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      transform: "translate(-2.89 -3.07)"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      id: "mask-2"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
      id: "path-1",
      className: "cls-1",
      points: "2.89 134.07 133.89 134.07 133.89 3.07 2.89 3.07 2.89 134.07"
    }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "404path-not-found"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      className: "cls-2"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      id: "Group"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      id: "Page-1"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "Fill-1",
      className: "cls-3",
      d: "M8,95.56a1.83,1.83,0,0,0-2,1.68c-.21,1.86-.23,3.05-.23,3.1a1.88,1.88,0,0,0,1.79,2h0a1.89,1.89,0,0,0,1.82-1.91s0-1,.2-2.67A1.91,1.91,0,0,0,8,95.56",
      transform: "translate(-2.89 -3.07)"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "Fill-3",
      className: "cls-3",
      d: "M104.29,104.42a26.42,26.42,0,0,1-4.72,1.89,1.89,1.89,0,0,0-1.25,2.32,1.82,1.82,0,0,0,1.74,1.36,1.73,1.73,0,0,0,.5-.07,29.3,29.3,0,0,0,5.36-2.16,1.89,1.89,0,0,0,.8-2.52,1.78,1.78,0,0,0-2.43-.82",
      transform: "translate(-2.89 -3.07)"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "Fill-5",
      className: "cls-3",
      d: "M74.84,57.4A1.88,1.88,0,0,0,76.2,58a1.9,1.9,0,0,0,1.21-.44,1.68,1.68,0,0,0,.15-2.45,19.81,19.81,0,0,1-2.85-3.9,1.88,1.88,0,0,0-2.47-.71,1.7,1.7,0,0,0-.75,2.34,23.82,23.82,0,0,0,3.35,4.58",
      transform: "translate(-2.89 -3.07)"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "Fill-7",
      className: "cls-3",
      d: "M75.44,105.24a1.76,1.76,0,0,0-2.17,1.29,1.84,1.84,0,0,0,1.23,2.26A45.56,45.56,0,0,0,79.84,110a1.23,1.23,0,0,0,.27,0,1.78,1.78,0,0,0,1.74-1.56,1.82,1.82,0,0,0-1.47-2.1,40.81,40.81,0,0,1-4.94-1.09",
      transform: "translate(-2.89 -3.07)"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "Fill-9",
      className: "cls-3",
      d: "M92.56,107.11a49.67,49.67,0,0,1-5,0h-.07a1.8,1.8,0,0,0-1.73,1.82,1.82,1.82,0,0,0,1.67,2c1,0,2,.07,3.07.07.78,0,1.54,0,2.29-.08a1.83,1.83,0,0,0,1.63-2,1.77,1.77,0,0,0-1.83-1.77",
      transform: "translate(-2.89 -3.07)"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "Fill-11",
      className: "cls-3",
      d: "M65.38,100.76a1.62,1.62,0,0,0-2.41.32,2,2,0,0,0,.3,2.62,28.62,28.62,0,0,0,4.55,3.19,1.6,1.6,0,0,0,.78.21,1.69,1.69,0,0,0,1.52-1,2,2,0,0,0-.73-2.52,26,26,0,0,1-4-2.81",
      transform: "translate(-2.89 -3.07)"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "Fill-13",
      className: "cls-3",
      d: "M109.71,70.18a2,2,0,0,0,1.1.32,2,2,0,0,0,1.53-.69,1.57,1.57,0,0,0-.42-2.35,26.14,26.14,0,0,0-5.3-2.61,2,2,0,0,0-2.45.91,1.63,1.63,0,0,0,1,2.19,23.39,23.39,0,0,1,4.51,2.23",
      transform: "translate(-2.89 -3.07)"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "Fill-15",
      className: "cls-3",
      d: "M70.28,38.72a1.74,1.74,0,0,0-1.85,1.63c0,.46,0,.93,0,1.39A23,23,0,0,0,68.78,46a1.74,1.74,0,1,0,3.43-.63,18.84,18.84,0,0,1-.32-3.58c0-.39,0-.79,0-1.18a1.73,1.73,0,0,0-1.64-1.84",
      transform: "translate(-2.89 -3.07)"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "Fill-17",
      className: "cls-3",
      d: "M76.35,27.53a2.08,2.08,0,0,0-2.68.25,20.42,20.42,0,0,0-3.2,4.71,1.64,1.64,0,0,0,1,2.23,2,2,0,0,0,.75.14,1.93,1.93,0,0,0,1.75-1,16.54,16.54,0,0,1,2.67-3.93,1.57,1.57,0,0,0-.29-2.38",
      transform: "translate(-2.89 -3.07)"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "Fill-19",
      className: "cls-3",
      d: "M98.18,66.63l.26,0a1.74,1.74,0,0,0,.24-3.47,40.77,40.77,0,0,0-5.42-.39h0a1.74,1.74,0,0,0,0,3.48,37,37,0,0,1,4.94.36",
      transform: "translate(-2.89 -3.07)"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "Fill-21",
      className: "cls-3",
      d: "M79.88,26.19a1.92,1.92,0,0,0,1-.26,25.06,25.06,0,0,1,4.62-2.13,1.71,1.71,0,0,0,1.09-2.24,1.87,1.87,0,0,0-2.37-1A30.71,30.71,0,0,0,78.89,23a1.7,1.7,0,0,0-.59,2.41,1.9,1.9,0,0,0,1.58.82",
      transform: "translate(-2.89 -3.07)"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "Fill-23",
      className: "cls-3",
      d: "M86.28,65.61a1.79,1.79,0,0,0,.51.07,1.84,1.84,0,0,0,1.76-1.32,1.83,1.83,0,0,0-1.26-2.26,21.06,21.06,0,0,1-4.6-2,1.83,1.83,0,1,0-1.82,3.17,24.64,24.64,0,0,0,5.41,2.29",
      transform: "translate(-2.89 -3.07)"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "Fill-25",
      className: "cls-3",
      d: "M47.85,80.53A1.7,1.7,0,0,0,47.61,83a41.72,41.72,0,0,1,3,4.06,1.84,1.84,0,0,0,2.49.52,1.71,1.71,0,0,0,.55-2.4,44.19,44.19,0,0,0-3.27-4.4,1.85,1.85,0,0,0-2.54-.23",
      transform: "translate(-2.89 -3.07)"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "Fill-27",
      className: "cls-3",
      d: "M12.51,84.2A1.84,1.84,0,0,0,10,85a33.19,33.19,0,0,0-2.24,5.32A1.83,1.83,0,0,0,9,92.57a1.77,1.77,0,0,0,.56.08,1.83,1.83,0,0,0,1.74-1.26,29.21,29.21,0,0,1,2-4.72,1.81,1.81,0,0,0-.76-2.47",
      transform: "translate(-2.89 -3.07)"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "Fill-29",
      className: "cls-3",
      d: "M54.77,91a1.7,1.7,0,0,0-.54,2.4,50.54,50.54,0,0,0,3.24,4.38,1.85,1.85,0,0,0,1.41.64A1.81,1.81,0,0,0,60,98.05a1.69,1.69,0,0,0,.27-2.45,47.21,47.21,0,0,1-3-4.08A1.84,1.84,0,0,0,54.77,91",
      transform: "translate(-2.89 -3.07)"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "Fill-31",
      className: "cls-3",
      d: "M112.48,97.29a22.47,22.47,0,0,1-3.09,3.78,1.89,1.89,0,0,0-.09,2.56,1.64,1.64,0,0,0,1.25.58,1.67,1.67,0,0,0,1.16-.48,25.42,25.42,0,0,0,3.57-4.38,1.87,1.87,0,0,0-.43-2.52,1.64,1.64,0,0,0-2.37.46",
      transform: "translate(-2.89 -3.07)"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "Fill-33",
      className: "cls-3",
      d: "M118.61,84a1.84,1.84,0,0,0-2,1.65,18.6,18.6,0,0,1-.93,4.74,1.74,1.74,0,0,0,1.26,2.2,2.15,2.15,0,0,0,.56.07,1.88,1.88,0,0,0,1.82-1.24,21.56,21.56,0,0,0,1.09-5.57A1.81,1.81,0,0,0,118.61,84",
      transform: "translate(-2.89 -3.07)"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "Fill-35",
      className: "cls-3",
      d: "M117.66,81.1a1.88,1.88,0,0,0,.52-.08,1.85,1.85,0,0,0,1.18-2.3,21.55,21.55,0,0,0-2.43-5.45,1.73,1.73,0,0,0-2.46-.54,1.88,1.88,0,0,0-.52,2.55,17.79,17.79,0,0,1,2,4.51,1.8,1.8,0,0,0,1.7,1.31",
      transform: "translate(-2.89 -3.07)"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "Fill-37",
      className: "cls-3",
      d: "M39,73.46a1.84,1.84,0,0,0-2.27,1.24A1.81,1.81,0,0,0,37.93,77a18,18,0,0,1,4.54,2,1.89,1.89,0,0,0,1,.27A1.85,1.85,0,0,0,45,78.3a1.8,1.8,0,0,0-.61-2.5A22.68,22.68,0,0,0,39,73.46",
      transform: "translate(-2.89 -3.07)"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "Fill-39",
      className: "cls-3",
      d: "M18.61,75.53A20.68,20.68,0,0,0,14,79a1.81,1.81,0,0,0,0,2.53,1.7,1.7,0,0,0,1.26.55,1.72,1.72,0,0,0,1.22-.51,17,17,0,0,1,3.81-2.86A1.82,1.82,0,0,0,21,76.26a1.73,1.73,0,0,0-2.37-.73",
      transform: "translate(-2.89 -3.07)"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "Fill-41",
      className: "cls-3",
      d: "M26.51,72.76a1.77,1.77,0,0,0,.27,3.52l.28,0A26,26,0,0,1,31.92,76a1.84,1.84,0,0,0,1.79-1.72A1.76,1.76,0,0,0,32,72.44a30.51,30.51,0,0,0-5.51.32",
      transform: "translate(-2.89 -3.07)"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "Fill-43",
      className: "cls-3",
      d: "M92.47,22.34l.27,0q1.33-.16,2.76-.27a1.83,1.83,0,0,0,1.78-1.92,1.87,1.87,0,0,0-2.07-1.64c-1,.07-2,.17-3,.29a1.83,1.83,0,0,0-1.65,2,1.89,1.89,0,0,0,1.91,1.54",
      transform: "translate(-2.89 -3.07)"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "Fill-45",
      className: "cls-3",
      d: "M133,66.72H118.94V44.44h9.27a.89.89,0,1,0,0-1.78h-9.27V36.71a.9.9,0,0,0-1.8,0v5.95H94.41V37.38a.9.9,0,0,0-1.79,0v5.28H77a.89.89,0,0,0,0,1.78H92.62v13a.9.9,0,1,0,1.79,0v-13h22.73V67.68a.89.89,0,0,0,.9.89.86.86,0,0,0,.36-.07H133a.89.89,0,1,0,0-1.78",
      transform: "translate(-2.89 -3.07)"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "Fill-47",
      className: "cls-3",
      d: "M128.16,92.65h-4.92a1,1,0,0,0,0,1.93h4.92a1,1,0,0,0,0-1.93",
      transform: "translate(-2.89 -3.07)"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "Fill-49",
      className: "cls-3",
      d: "M109.87,116.68H93.2v-1.27a.9.9,0,1,0-1.8,0v1.27H69.05v-5.55a.9.9,0,1,0-1.8,0v5.55H44.82V93.89h4.27a.9.9,0,0,0,0-1.8H44.82V83.92a.9.9,0,1,0-1.79,0v8.17H20.3V84.37a.9.9,0,1,0-1.8,0v7.72H13.42a.9.9,0,1,0,0,1.8H18.5v17.39a.9.9,0,0,0,1.8,0V93.89H43v22.79H26.28a.9.9,0,1,0,0,1.8H43v9.9a.9.9,0,1,0,1.79,0v-9.9H67.25v14.69a.9.9,0,1,0,1.8,0V118.48H91.4v10.2a.9.9,0,1,0,1.8,0v-10.2h16.67a.9.9,0,0,0,0-1.8",
      transform: "translate(-2.89 -3.07)"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      className: "cls-4"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "Fill-51",
      className: "cls-3",
      d: "M20.55,67.5H43.31V45H20.55Zm-1.79,3a.9.9,0,1,0,1.79,0V69.3H43.31v2.1a.9.9,0,0,0,1.8,0V69.3H67.56V92.38H63.3a.9.9,0,1,0,0,1.79h4.26v3.3a.9.9,0,1,0,1.8,0v-3.3h23v9.14a.9.9,0,0,0,1.8,0V94.17H111.8a.9.9,0,1,0,0-1.79H94.21V71a.9.9,0,0,0-1.8,0V92.38h-23V69.3h12.8a.9.9,0,0,0,0-1.8H69.36v-10a.9.9,0,0,0-1.8,0v10H45.11V45h18a.9.9,0,1,0,0-1.8h-18V20.46H67.56V26a.9.9,0,1,0,1.8,0V20.46h6.06a.9.9,0,1,0,0-1.8H69.36V4a.9.9,0,0,0-1.8,0V18.66H45.11v-10a.9.9,0,1,0-1.8,0v10H26.24a.9.9,0,0,0,0,1.8H43.31V43.23H20.55V26.6a.9.9,0,1,0-1.79,0V43.23H8.88a.9.9,0,0,0,0,1.8h9.88V67.5h-15a.9.9,0,1,0,0,1.8h15Z",
      transform: "translate(-2.89 -3.07)"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      className: "cls-4"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "Fill-53",
      className: "cls-3",
      d: "M117.51,104.21a.94.94,0,0,0-1,.92V111a1,1,0,0,0,1.93,0v-5.87a1,1,0,0,0-1-.92",
      transform: "translate(-2.89 -3.07)"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      className: "cls-4"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "Fill-54",
      className: "cls-3",
      d: "M106.16,7.75a13.31,13.31,0,0,1,3.35-.41,6.07,6.07,0,0,1,4.09,1.23A4.42,4.42,0,0,1,115,12.09a5.92,5.92,0,0,1-.77,3.12,20.1,20.1,0,0,1-3.72,3.86,11.51,11.51,0,0,0-2.92,3.55,10.22,10.22,0,0,0-.78,4.29v1.21h2.8v-.74a7,7,0,0,1,.71-3.39,13.86,13.86,0,0,1,2.9-3.19,30,30,0,0,0,3.56-3.55,8.29,8.29,0,0,0,1.25-2.34,8.66,8.66,0,0,0,.43-2.87,7.61,7.61,0,0,0-2.3-5.91A9.3,9.3,0,0,0,109.72,4a17.8,17.8,0,0,0-8.58,2.21l1.28,3a17.6,17.6,0,0,1,3.74-1.51",
      transform: "translate(-2.89 -3.07)"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      className: "cls-4"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "Fill-55",
      className: "cls-3",
      d: "M108.35,31c-1.59,0-2.39,1-2.39,2.9a3,3,0,0,0,.67,2.2,2.36,2.36,0,0,0,1.72.68,2.21,2.21,0,0,0,1.78-.76,3.16,3.16,0,0,0,.64-2.12,3.27,3.27,0,0,0-.63-2.16,2.22,2.22,0,0,0-1.79-.74",
      transform: "translate(-2.89 -3.07)"
    }))))))
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Icon404);

/***/ }),

/***/ "./src/components/icon-404.scss":
/*!**************************************!*\
  !*** ./src/components/icon-404.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: RhLogo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rh_logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rh-logo */ "./src/components/rh-logo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RhLogo", function() { return _rh_logo__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/marketing/ansibleMarketing.svg":
/*!*******************************************************!*\
  !*** ./src/components/marketing/ansibleMarketing.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/ansibleMarketing.svg";

/***/ }),

/***/ "./src/components/marketing/insightsMarketing.svg":
/*!********************************************************!*\
  !*** ./src/components/marketing/insightsMarketing.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/insightsMarketing.svg";

/***/ }),

/***/ "./src/components/marketing/openShiftMarketing.svg":
/*!*********************************************************!*\
  !*** ./src/components/marketing/openShiftMarketing.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/openShiftMarketing.svg";

/***/ }),

/***/ "./src/components/marketing/smartManagementMarketing.svg":
/*!***************************************************************!*\
  !*** ./src/components/marketing/smartManagementMarketing.svg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/smartManagementMarketing.svg";

/***/ }),

/***/ "./src/components/migrations.svg":
/*!***************************************!*\
  !*** ./src/components/migrations.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/migrations.svg";

/***/ }),

/***/ "./src/components/rh-logo.js":
/*!***********************************!*\
  !*** ./src/components/rh-logo.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rh_logo_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rh-logo.scss */ "./src/components/rh-logo.scss");
/* harmony import */ var _rh_logo_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rh_logo_scss__WEBPACK_IMPORTED_MODULE_1__);



var RhLogo = function RhLogo() {
  return (// eslint-disable-next-line max-len
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      id: "redhat-logo",
      "data-name": "Layer 1",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 613 145"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "RedHat-Logo-A-Color"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      className: "cls-1",
      d: "M127.47,83.49c12.51,0,30.61-2.58,30.61-17.46a14,14,0,0,0-.31-3.42l-7.45-32.36c-1.72-7.12-3.23-10.35-15.73-16.6C124.89,8.69,103.76.5,97.51.5,91.69.5,90,8,83.06,8c-6.68,0-11.64-5.6-17.89-5.6-6,0-9.91,4.09-12.93,12.5,0,0-8.41,23.72-9.49,27.16A6.43,6.43,0,0,0,42.53,44c0,9.22,36.3,39.45,84.94,39.45M160,72.07c1.73,8.19,1.73,9.05,1.73,10.13,0,14-15.74,21.77-36.43,21.77C78.54,104,37.58,76.6,37.58,58.49a18.45,18.45,0,0,1,1.51-7.33C22.27,52,.5,55,.5,74.22c0,31.48,74.59,70.28,133.65,70.28,45.28,0,56.7-20.48,56.7-36.65,0-12.72-11-27.16-30.83-35.78"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M160,72.07c1.73,8.19,1.73,9.05,1.73,10.13,0,14-15.74,21.77-36.43,21.77C78.54,104,37.58,76.6,37.58,58.49a18.45,18.45,0,0,1,1.51-7.33l3.66-9.06A6.43,6.43,0,0,0,42.53,44c0,9.22,36.3,39.45,84.94,39.45,12.51,0,30.61-2.58,30.61-17.46a14,14,0,0,0-.31-3.42Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M579.74,92.8c0,11.89,7.15,17.67,20.19,17.67a52.11,52.11,0,0,0,11.89-1.68V95a24.84,24.84,0,0,1-7.68,1.16c-5.37,0-7.36-1.68-7.36-6.73V68.3h15.56V54.1H596.78v-18l-17,3.68V54.1H568.49V68.3h11.25Zm-53,.32c0-3.68,3.69-5.47,9.26-5.47a43.12,43.12,0,0,1,10.1,1.26v7.15a21.51,21.51,0,0,1-10.63,2.63c-5.46,0-8.73-2.1-8.73-5.57m5.2,17.56c6,0,10.84-1.26,15.36-4.31v3.37h16.82V74.08c0-13.56-9.14-21-24.39-21-8.52,0-16.94,2-26,6.1l6.1,12.52c6.52-2.74,12-4.42,16.83-4.42,7,0,10.62,2.73,10.62,8.31v2.73a49.53,49.53,0,0,0-12.62-1.58c-14.31,0-22.93,6-22.93,16.73,0,9.78,7.78,17.24,20.19,17.24m-92.44-.94h18.09V80.92h30.29v28.82H506V36.12H487.93V64.41H457.64V36.12H439.55ZM370.62,81.87c0-8,6.31-14.1,14.62-14.1A17.22,17.22,0,0,1,397,72.09V91.54A16.36,16.36,0,0,1,385.24,96c-8.2,0-14.62-6.1-14.62-14.09m26.61,27.87h16.83V32.44l-17,3.68V57.05a28.3,28.3,0,0,0-14.2-3.68c-16.19,0-28.92,12.51-28.92,28.5a28.25,28.25,0,0,0,28.4,28.6,25.12,25.12,0,0,0,14.93-4.83ZM320,67c5.36,0,9.88,3.47,11.67,8.83H308.47C310.15,70.3,314.36,67,320,67M291.33,82c0,16.2,13.25,28.82,30.28,28.82,9.36,0,16.2-2.53,23.25-8.42l-11.26-10c-2.63,2.74-6.52,4.21-11.14,4.21a14.39,14.39,0,0,1-13.68-8.83h39.65V83.55c0-17.67-11.88-30.39-28.08-30.39a28.57,28.57,0,0,0-29,28.81M262,51.58c6,0,9.36,3.78,9.36,8.31S268,68.2,262,68.2H244.11V51.58Zm-36,58.16h18.09V82.92h13.77l13.89,26.82H292l-16.2-29.45a22.27,22.27,0,0,0,13.88-20.72c0-13.25-10.41-23.45-26-23.45H226Z"
    }))
  );
};

/* harmony default export */ __webpack_exports__["default"] = (RhLogo);

/***/ }),

/***/ "./src/components/rh-logo.scss":
/*!*************************************!*\
  !*** ./src/components/rh-logo.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/rhel-cs.svg":
/*!************************************!*\
  !*** ./src/components/rhel-cs.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/rhel-cs.svg";

/***/ }),

/***/ "./src/components/subscriptions.svg":
/*!******************************************!*\
  !*** ./src/components/subscriptions.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/subscriptions.svg";

/***/ }),

/***/ "./src/consts.js":
/*!***********************!*\
  !*** ./src/consts.js ***!
  \***********************/
/*! exports provided: activeTechnologies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activeTechnologies", function() { return activeTechnologies; });
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _components_hcm_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/hcm.svg */ "./src/components/hcm.svg");
/* harmony import */ var _components_hcm_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_hcm_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_rhel_cs_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/rhel-cs.svg */ "./src/components/rhel-cs.svg");
/* harmony import */ var _components_rhel_cs_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_rhel_cs_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ansible_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ansible.svg */ "./src/components/ansible.svg");
/* harmony import */ var _components_ansible_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_ansible_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_subscriptions_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/subscriptions.svg */ "./src/components/subscriptions.svg");
/* harmony import */ var _components_subscriptions_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_subscriptions_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_migrations_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/migrations.svg */ "./src/components/migrations.svg");
/* harmony import */ var _components_migrations_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_migrations_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_marketing_insightsMarketing_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/marketing/insightsMarketing.svg */ "./src/components/marketing/insightsMarketing.svg");
/* harmony import */ var _components_marketing_insightsMarketing_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_marketing_insightsMarketing_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_marketing_openShiftMarketing_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/marketing/openShiftMarketing.svg */ "./src/components/marketing/openShiftMarketing.svg");
/* harmony import */ var _components_marketing_openShiftMarketing_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_marketing_openShiftMarketing_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_marketing_smartManagementMarketing_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/marketing/smartManagementMarketing.svg */ "./src/components/marketing/smartManagementMarketing.svg");
/* harmony import */ var _components_marketing_smartManagementMarketing_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_marketing_smartManagementMarketing_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_marketing_ansibleMarketing_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/marketing/ansibleMarketing.svg */ "./src/components/marketing/ansibleMarketing.svg");
/* harmony import */ var _components_marketing_ansibleMarketing_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_marketing_ansibleMarketing_svg__WEBPACK_IMPORTED_MODULE_9__);









 // isDevPreview for developer previews
// isPreview for technical previews

var activeTechnologies = [{
  entitlement: 'insights',
  marketing: true,
  marketingImage: _components_marketing_insightsMarketing_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  marketingText: 'Proactively identify and remediate threats to security, performance, and stability.',
  marketingUrl: 'https://www.redhat.com/en/technologies/management/insights',
  name: 'insights',
  id: 'insights',
  url: 'insights',
  baseApp: '/overview',
  apps: {
    rules: '/rules'
  },
  icon: _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_0__["ChartSpikeIcon"],
  title: 'Red Hat Insights',
  emptyTitle: 'Red Hat Insights is included with every Red Hat Enterprise Linux subscription.',
  emptyText: 'Proactively identify and remediate threats to security, performance, availability, \
        and stability with Red Hat Insights. Activate Red Hat Insights to get started today.',
  emptyAction: {
    title: 'Get started',
    navigate: 'https://www.redhat.com/wapps/eval/index.html?evaluation_id=1036',
    close: 'Not now'
  },
  body: 'Identify and remediate configuration issues in your Red Hat® environments.'
}, {
  entitlement: 'smart_management',
  marketing: true,
  marketingImage: _components_marketing_smartManagementMarketing_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
  marketingText: 'Operate and protect your Red Hat platforms.',
  marketingUrl: 'https://www.redhat.com/en/technologies/management/smart-management',
  id: 'RHEL',
  url: 'rhel',
  baseApp: '/dashboard',
  apps: {
    vulnerability: '/vulnerability',
    compliance: '/compliance',
    'drift analysis': '/drift'
  },
  image: _components_hcm_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
  emptyTitle: 'Upgrade to get started with Cloud Management Services for Red Hat Enterprise Linux.',
  emptyText: 'Monitor your Red Hat environments to track system compliance, configuration, \
        security, and efficiency. Upgrade to get started today.',
  emptyAction: {
    title: 'Learn more',
    navigate: 'https://www.redhat.com/en/technologies/management/smart-management',
    close: 'Not now'
  },
  title: 'Cloud Management Services for Red Hat Enterprise Linux',
  body: 'Monitor and manage issues for your Red Hat Enterprise Systems.'
}, {
  id: 'Openshift',
  url: 'openshift',
  baseApp: '/',
  apps: {
    'cluster manager': '/'
  },
  entitlement: 'openshift',
  marketing: true,
  marketingImage: _components_marketing_openShiftMarketing_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
  marketingText: 'Install, register, and manage Red Hat OpenShift® 4 clusters.',
  marketingUrl: 'https://try.openshift.com',
  icon: _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_0__["OpenshiftIcon"],
  iconProps: {
    style: {
      fill: '#DB242F'
    }
  },
  emptyTitle: 'Get Started with Red Hat Openshift.',
  emptyText: 'Test drive industry\'s leading container application platform in your browser, \
        and see how easy it is to use Kubernetes in your organization today.',
  emptyAction: {
    title: 'Try it free'
  },
  title: 'Red Hat OpenShift Cluster Manager',
  body: 'Install, register, and manage Red Hat OpenShift® 4 clusters.'
}, {
  id: 'Hybrid',
  url: 'hybrid',
  baseApp: '/cost-management',
  entitlement: 'hybrid_cloud',
  marketing: false,
  disabled: window.location.pathname.indexOf('/beta') !== 0,
  image: _components_rhel_cs_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
  emptyTitle: 'Hybrid Cloud Management Services technology preview access.',
  emptyText: 'The Red Hat Hybrid Cloud Management Services technology preview is currently \
        restricted to Red Hat customers.',
  emptyAction: {
    title: 'Ok'
  },
  title: 'Hybrid Cloud Management Services',
  body: 'Govern, automate, and manage multi-cloud environments.',
  isPreview: true
}, {
  id: 'Ansible',
  disabled: window.location.pathname.indexOf('/beta') !== 0,
  entitlement: 'ansible',
  url: 'ansible',
  baseApp: '/automation-analytics',
  image: _components_ansible_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
  title: 'Red Hat Ansible Automation Platform',
  body: 'Extend your automation with analytics, policy and governance, and content management.',
  apps: {
    'automation analytics': '/automation-analytics',
    'automation hub': '/automation-hub'
  },
  marketing: true,
  marketingImage: _components_marketing_ansibleMarketing_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
  marketingText: 'Extend your automation with analytics, policy and governance, and content management.',
  marketingUrl: 'http://ansible.com/products/automation-platform',
  emptyTitle: 'Red Hat Ansible Automation Platform',
  emptyText: 'Ansible Automation Platform services requires a valid subscription.',
  emptyAction: {
    close: 'Not now'
  },
  isPreview: true
}, {
  id: 'migrations',
  disabled: window.location.pathname.indexOf('/beta') !== 0,
  entitlement: 'migrations',
  url: 'migrations',
  image: _components_migrations_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  title: 'Migration Services',
  body: 'Get recommendations on migrating your applications and infrastructure to Red Hat.',
  baseApp: '/migration-analytics',
  apps: {
    'migration analytics': '/migration-analytics'
  },
  marketing: false,
  emptyTitle: 'The Migration Service requires that you request an evaluation.',
  emptyText: 'To obtain recommendations for your applications and infrastructure, you will need \
        to first analyze your environment using Red Hat CloudForms.',
  emptyAction: {
    // title: 'Request an evaluation',
    // navigate: 'todo',
    close: 'Not now'
  },
  isPreview: true
}, {
  id: 'subscriptions',
  disabled: true,
  entitlement: 'subscriptions',
  url: 'subscriptions',
  image: _components_subscriptions_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  title: 'Subscription Reporting',
  body: 'todo',
  baseApp: '/subscriptions',
  apps: {
    'subscription reporting': '/'
  },
  marketing: false,
  emptyTitle: 'Subscription Reporting',
  emptyText: 'Subscription Reporting requires a valid cloud.redhat.com account.',
  emptyAction: {
    title: 'Activate Subscription Reporting',
    navigate: 'https://www.redhat.com/wapps/eval/index.html?evaluation_id=1036'
  }
}];

/***/ }),

/***/ "./src/entry-dev.js":
/*!**************************!*\
  !*** ./src/entry-dev.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_6__);







var pathName = window.location.pathname.split('/');
var rootEl = document.getElementById('root');
pathName.shift();
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
  store: Object(_store__WEBPACK_IMPORTED_MODULE_4__["init"])(redux_logger__WEBPACK_IMPORTED_MODULE_6___default.a).getStore()
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
  basename: "/".concat(pathName[0] === 'beta' ? 'beta/' : '')
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_5__["default"], null))), rootEl, function () {
  return rootEl.setAttribute('data-ouia-safe', true);
});

/***/ }),

/***/ "./src/layout/Body.js":
/*!****************************!*\
  !*** ./src/layout/Body.js ***!
  \****************************/
/*! exports provided: mapStateToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Body_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Body.scss */ "./src/layout/Body.scss");
/* harmony import */ var _Body_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Body_scss__WEBPACK_IMPORTED_MODULE_7__);









function isBeta() {
  return window.insights.chrome.isBeta() === true ? '/beta/' : '/';
}

var Body = function Body(_ref) {
  var technologies = _ref.technologies;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["PageSection"], {
    className: "pf-m-fill ins-p-landing__content"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    md: 6,
    lg: 4,
    gutter: "md"
  }, technologies.map(function (_ref2, key) {
    var Icon = _ref2.icon,
        image = _ref2.image,
        iconProps = _ref2.iconProps,
        title = _ref2.title,
        url = _ref2.url,
        apps = _ref2.apps,
        baseApp = _ref2.baseApp,
        body = _ref2.body,
        isPreview = _ref2.isPreview,
        isDevPreview = _ref2.isDevPreview,
        id = _ref2.id;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["GridItem"], {
      key: key
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      className: "ins-c-application-info",
      "application-id": id
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Stack"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["StackItem"], null, image && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      className: "ins-c-application-info__logo",
      "aria-hidden": true,
      src: image,
      alt: "".concat(title, " logo")
    }), Icon && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Icon, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
      className: "ins-c-application-info__logo ins-c-icon__active",
      "aria-hidden": true,
      size: "xl",
      alt: "".concat(title, " logo")
    }, iconProps))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Title"], {
      headingLevel: "h2",
      size: "2xl"
    }, title)))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Stack"], {
      gutter: "md",
      className: "ins-c-application-info__content"
    }, isPreview && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "ins-m-tech-preview"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["BinocularsIcon"], {
      size: "sm"
    }), " Tech preview")), isDevPreview && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "ins-m-dev-preview"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["CodeIcon"], {
      size: "sm"
    }), " Developer preview")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "ins-m-gray"
    }, body)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["StackItem"], {
      className: "ins-c-application-info__content-applist"
    }, apps && Object.entries(apps).map(function (_ref3) {
      var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref3, 2),
          appName = _ref4[0],
          appPath = _ref4[1];

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        key: appName,
        href: "".concat(isBeta()).concat(url).concat(appPath)
      }, appName);
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["CardFooter"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      className: "ins-c-application-info__open ins-c-application-info__open-".concat(url),
      href: baseApp ? "".concat(isBeta()).concat(url).concat(baseApp) : "".concat(isBeta()).concat(url)
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, " Open "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["ArrowRightIcon"], {
      size: "sm"
    })))));
  })));
};

Body.propTypes = {
  technologies: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
    icon: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string]),
    body: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node,
    title: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node,
    isPreview: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
    url: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
    apps: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
    baseApp: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string
  }))
};
Body.defaultProps = {
  technologies: []
};

function mapStateToProps() {
  var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    technologies: {
      activeTechnologies: []
    }
  },
      technologies = _ref5.technologies;

  return {
    technologies: technologies && technologies.activeTechnologies.filter(function (_ref6) {
      var disabled = _ref6.disabled;
      return !disabled;
    })
  };
}


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps)(Body));

/***/ }),

/***/ "./src/layout/Body.scss":
/*!******************************!*\
  !*** ./src/layout/Body.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/layout/FooterTraditional.js":
/*!*****************************************!*\
  !*** ./src/layout/FooterTraditional.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./src/components/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _FooterTraditional_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FooterTraditional.scss */ "./src/layout/FooterTraditional.scss");
/* harmony import */ var _FooterTraditional_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_FooterTraditional_scss__WEBPACK_IMPORTED_MODULE_3__);





var FooterTraditional = function FooterTraditional() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["PageSection"], {
    className: "ins-c-footer__traditional pf-m-no-fill"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    role: "contentinfo",
    className: "pf-l-flex pf-m-column pf-m-row-on-lg pf-m-align-items-center-on-lg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.redhat.com",
    className: "ins-p-footer__logo",
    target: "_blank",
    rel: "noopener noreferrer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["RhLogo"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ins-c-footer__traditional-nav pf-l-flex pf-m-column pf-m-row-on-lg pf-m-flex-1-on-lg pf-m-justify-content-flex-end-on-lg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "copyright pf-m-spacer-xl-on-lg"
  }, "Copyright \xA9 2019 Red Hat, Inc."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "pf-l-flex pf-m-column pf-m-row-on-md"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link ins-p-footer__privacy-policy",
    href: "https://www.redhat.com/en/about/privacy-policy"
  }, "Privacy Policy")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link ins-p-footer__terms",
    href: "https://access.redhat.com/help/terms/"
  }, "Terms of Use")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link ins-p-footer__all-policies",
    href: "https://www.redhat.com/en/about/all-policies-guidelines"
  }, "All Policies and Guidelines")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (FooterTraditional);

/***/ }),

/***/ "./src/layout/FooterTraditional.scss":
/*!*******************************************!*\
  !*** ./src/layout/FooterTraditional.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/layout/Header.js":
/*!******************************!*\
  !*** ./src/layout/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_PageHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/components/PageHeader */ "./node_modules/@red-hat-insights/insights-frontend-components/components/PageHeader.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_PageHeader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_components_PageHeader__WEBPACK_IMPORTED_MODULE_1__);



var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_red_hat_insights_insights_frontend_components_components_PageHeader__WEBPACK_IMPORTED_MODULE_1__["PageHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_red_hat_insights_insights_frontend_components_components_PageHeader__WEBPACK_IMPORTED_MODULE_1__["PageHeaderTitle"], {
    title: "Manage, automate, and optimize your IT"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/layout/Hero.js":
/*!****************************!*\
  !*** ./src/layout/Hero.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _Hero_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hero.scss */ "./src/layout/Hero.scss");
/* harmony import */ var _Hero_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Hero_scss__WEBPACK_IMPORTED_MODULE_2__);




var Hero = function Hero() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["PageSection"], {
    className: "ins-c-hero pf-m-fill pf-l-flex pf-m-align-items-center pf-m-justify-content-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "pf-l-flex pf-m-column pf-m-align-items-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    size: "3xl",
    className: "ins-c-hero__title pf-m-spacer-lg"
  }, " Explore our open, multicloud tools "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    size: "lg",
    headingLevel: "h2",
    className: "pf-m-spacer-xl"
  }, "Discover Red Hat", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", {
    className: "ins-c-rball"
  }, "\xAE"), " software-as-a-service"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "ins-c-hero__login",
    onClick: function onClick() {
      return window.insights.chrome.auth.login();
    }
  }, " Log in to your Red Hat account"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "ins-c-hero__new-customer",
    href: "https://www.redhat.com/en/customers"
  }, " Not a customer? ")));
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./src/layout/Hero.scss":
/*!******************************!*\
  !*** ./src/layout/Hero.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/layout/Loading.js":
/*!*******************************!*\
  !*** ./src/layout/Loading.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/components/Main */ "./node_modules/@red-hat-insights/insights-frontend-components/components/Main.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Main__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_components_Main__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/components/Spinner */ "./node_modules/@red-hat-insights/insights-frontend-components/components/Spinner.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_components_Spinner__WEBPACK_IMPORTED_MODULE_2__);




var Loading = function Loading() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_red_hat_insights_insights_frontend_components_components_Main__WEBPACK_IMPORTED_MODULE_1__["Main"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_red_hat_insights_insights_frontend_components_components_Spinner__WEBPACK_IMPORTED_MODULE_2__["Spinner"], {
    centered: true
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./src/layout/Marketing.js":
/*!*********************************!*\
  !*** ./src/layout/Marketing.js ***!
  \*********************************/
/*! exports provided: mapStateToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Hero */ "./src/layout/Hero.js");
/* harmony import */ var _Marketing_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Marketing.scss */ "./src/layout/Marketing.scss");
/* harmony import */ var _Marketing_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Marketing_scss__WEBPACK_IMPORTED_MODULE_6__);








var Marketing = function Marketing(_ref) {
  var technologies = _ref.technologies;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hero__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["PageSection"], {
    className: "ins-c-marketing pf-m-no-fill"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sm: 12,
    md: 6,
    xl: 6,
    xl2: 3,
    gutter: "sm"
  }, technologies.map(function (_ref2, key) {
    var marketingImage = _ref2.marketingImage,
        title = _ref2.title,
        marketingUrl = _ref2.marketingUrl,
        marketingText = _ref2.marketingText,
        id = _ref2.id;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      className: "ins-c-application-info pf-m-card-link",
      "application-id": id,
      key: key
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      gutter: "sm"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["StackItem"], {
      className: "ins-c-application-logo"
    }, marketingImage && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "ins-c-application-info__logo",
      "aria-hidden": true,
      src: marketingImage,
      alt: "".concat(title, " logo")
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Stack"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "ins-m-gray"
    }, marketingText)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["CardFooter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ins-c-open-card pf-l-flex pf-m-align-items-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Learn more"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["ArrowRightIcon"], {
      size: "sm"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "pf-c-card__card-link",
      href: marketingUrl,
      "aria-label": "Go to ".concat(title)
    }));
  }))));
};

Marketing.propTypes = {
  technologies: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    marketingImage: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string]),
    marketing: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    marketingUrl: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    marketingText: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
  }))
};
Marketing.defaultProps = {
  technologies: []
};

function mapStateToProps() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    technologies: {
      activeTechnologies: []
    }
  },
      technologies = _ref3.technologies;

  return {
    technologies: technologies && technologies.activeTechnologies.filter(function (_ref4) {
      var marketing = _ref4.marketing;
      return marketing;
    })
  };
}


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(Marketing));

/***/ }),

/***/ "./src/layout/Marketing.scss":
/*!***********************************!*\
  !*** ./src/layout/Marketing.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/routes/404.js":
/*!***************************!*\
  !*** ./src/routes/404.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_icon_404__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/icon-404 */ "./src/components/icon-404.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _404_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./404.scss */ "./src/routes/404.scss");
/* harmony import */ var _404_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_404_scss__WEBPACK_IMPORTED_MODULE_5__);







var onButtonClick = function onButtonClick(url) {
  window.location.href = "./".concat(url);
};

var NotFound = function NotFound() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "pf-l-page__main-section pf-c-page__main-section ins-c-page__404"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Title"], {
    size: "3xl"
  }, " 404: It's true. We've lost it. "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_icon_404__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Title"], {
    size: "xl",
    className: "ins-c-text__sorry"
  }, "Sorry, we couldn't find what you were looking for. The page you requested may have been changed or moved."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "link",
    onClick: function onClick() {
      return onButtonClick('');
    }
  }, "Return to homepage"));
};

NotFound.propTypes = {
  technologies: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })),
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    push: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
  })
};
NotFound.defaultProps = {
  technologies: [],
  history: {
    push: function push() {
      return undefined;
    }
  }
};

function mapStateToProps() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    technologies: {
      activeTechnologies: []
    }
  },
      technologies = _ref.technologies;

  return {
    technologies: technologies && technologies.activeTechnologies.filter(function (_ref2) {
      var disabled = _ref2.disabled;
      return !disabled;
    })
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(NotFound));

/***/ }),

/***/ "./src/routes/404.scss":
/*!*****************************!*\
  !*** ./src/routes/404.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/routes/Landing.js":
/*!*******************************!*\
  !*** ./src/routes/Landing.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _layout_Header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../layout/Header */ "./src/layout/Header.js");
/* harmony import */ var _layout_Body__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../layout/Body */ "./src/layout/Body.js");
/* harmony import */ var _layout_Marketing__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../layout/Marketing */ "./src/layout/Marketing.js");
/* harmony import */ var _layout_FooterTraditional__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../layout/FooterTraditional */ "./src/layout/FooterTraditional.js");
/* harmony import */ var _layout_Loading__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../layout/Loading */ "./src/layout/Loading.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../consts */ "./src/consts.js");
/* harmony import */ var _Landing_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Landing.scss */ "./src/routes/Landing.scss");
/* harmony import */ var _Landing_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_Landing_scss__WEBPACK_IMPORTED_MODULE_19__);





















var Landing =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Landing, _Component);

  function Landing() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Landing);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Landing)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "state", {
      isModalOpen: false,
      isUserReady: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "handleModalToggle", function () {
      _this.setState({
        isModalOpen: false
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Landing, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var location = this.props.location;
      var params = location.search.slice(1).split('&').reduce(function (acc, curr) {
        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, acc, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()({}, curr.split('=')[0], Object.values(_consts__WEBPACK_IMPORTED_MODULE_18__["activeTechnologies"]).find(function (item) {
          return item.entitlement === curr.split('=')[1];
        })));
      }, {});
      this.setState(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, params, {
        isModalOpen: params && Object.keys(params).length > 0
      }));
      window.insights.chrome.auth.getUser().then(function (user) {
        if (user) {
          _this2.setState({
            unauthed: false
          });
        } else {
          _this2.setState({
            unauthed: true
          });
        }
      }).catch(function () {
        _this2.setState({
          unauthed: true
        });
      }).then(function () {
        return _this2.setState({
          isUserReady: true
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isUserReady = _this$state.isUserReady,
          isModalOpen = _this$state.isModalOpen,
          notEntitled = _this$state.not_entitled,
          unauthed = _this$state.unauthed;

      if (isUserReady) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10__["Fragment"], null, unauthed ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_layout_Marketing__WEBPACK_IMPORTED_MODULE_15__["default"], null) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_layout_Header__WEBPACK_IMPORTED_MODULE_13__["default"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_layout_Body__WEBPACK_IMPORTED_MODULE_14__["default"], null)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_layout_FooterTraditional__WEBPACK_IMPORTED_MODULE_16__["default"], null), notEntitled && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["Modal"], {
          title: 'You are not entitled to use this application',
          className: "ins-c-error-modal",
          hideTitle: true,
          isOpen: isModalOpen,
          onClose: this.handleModalToggle
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["Stack"], {
          gutter: "md",
          className: "ins-c-error-state"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["StackItem"], {
          className: "ins-c-error-state__title"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["Title"], {
          headingLevel: "h3",
          size: "2xl"
        }, notEntitled.emptyTitle)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["StackItem"], {
          className: "ins-c-error-state__image"
        }, notEntitled.icon && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(notEntitled.icon, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          className: "ins-c-icon__active",
          "aria-hidden": true,
          alt: "".concat(notEntitled.title, " logo")
        }, notEntitled.iconProps)), notEntitled.image && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          className: "ins-c-application-info__logo",
          "aria-hidden": true,
          src: notEntitled.image,
          alt: "".concat(notEntitled.title, " logo")
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["StackItem"], {
          className: "ins-c-error-state__body"
        }, notEntitled.emptyText), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["StackItem"], {
          className: "ins-c-error-state__footer"
        }, notEntitled.emptyAction.title && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["Button"], {
          variant: "primary",
          className: "ins-c-error-state__footer-action",
          onClick: function onClick() {
            if (notEntitled.emptyAction.navigate) {
              window.location.href = notEntitled.emptyAction.navigate;
            }
          }
        }, notEntitled.emptyAction.title), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["Button"], {
          variant: "link",
          className: "ins-c-error-state__footer-close",
          onClick: this.handleModalToggle
        }, notEntitled.emptyAction.close ? "".concat(notEntitled.emptyAction.close) : 'Close')))));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_layout_Loading__WEBPACK_IMPORTED_MODULE_17__["default"], null);
      }
    }
  }]);

  return Landing;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

Landing.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  loadTechnologies: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  location: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.shape({
    search: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string
  })
};
Landing.defaultProps = {
  loadTechnologies: function loadTechnologies() {
    return undefined;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(Landing));

/***/ }),

/***/ "./src/routes/Landing.scss":
/*!*********************************!*\
  !*** ./src/routes/Landing.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/store/action-types.js":
/*!***********************************!*\
  !*** ./src/store/action-types.js ***!
  \***********************************/
/*! exports provided: TECHOLOGIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TECHOLOGIES", function() { return TECHOLOGIES; });
var TECHOLOGIES = 'TECHNOLOGIES';

/***/ }),

/***/ "./src/store/actions.js":
/*!******************************!*\
  !*** ./src/store/actions.js ***!
  \******************************/
/*! exports provided: technologiesLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "technologiesLoaded", function() { return technologiesLoaded; });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types */ "./src/store/action-types.js");

var technologiesLoaded = function technologiesLoaded(data) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["TECHOLOGIES"],
    payload: data
  };
};

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: init, addNewListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewListener", function() { return addNewListener; });
/* harmony import */ var _red_hat_insights_insights_frontend_components_Utilities_MiddlewareListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/Utilities/MiddlewareListener */ "./node_modules/@red-hat-insights/insights-frontend-components/Utilities/MiddlewareListener.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_Utilities_MiddlewareListener__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_Utilities_MiddlewareListener__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _red_hat_insights_insights_frontend_components_Utilities_Registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/Utilities/Registry */ "./node_modules/@red-hat-insights/insights-frontend-components/Utilities/Registry.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_Utilities_Registry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_Utilities_Registry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/components/Notifications */ "./node_modules/@red-hat-insights/insights-frontend-components/components/Notifications.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_promise_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-promise-middleware */ "./node_modules/redux-promise-middleware/dist/es/index.js");




var middlewareListener;
function init() {
  middlewareListener = new _red_hat_insights_insights_frontend_components_Utilities_MiddlewareListener__WEBPACK_IMPORTED_MODULE_0___default.a();

  for (var _len = arguments.length, middleware = new Array(_len), _key = 0; _key < _len; _key++) {
    middleware[_key] = arguments[_key];
  }

  return Object(_red_hat_insights_insights_frontend_components_Utilities_Registry__WEBPACK_IMPORTED_MODULE_1__["getRegistry"])({}, [middlewareListener.getMiddleware(), redux_promise_middleware__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_2__["notificationsMiddleware"])()].concat(middleware));
}
function addNewListener(_ref) {
  var actionType = _ref.actionType,
      callback = _ref.callback;
  return middlewareListener.addNew({
    on: actionType,
    callback: callback
  });
}

/***/ }),

/***/ "./src/store/technologiesReducer.js":
/*!******************************************!*\
  !*** ./src/store/technologiesReducer.js ***!
  \******************************************/
/*! exports provided: technologiesLoaded, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "technologiesLoaded", function() { return technologiesLoaded; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _red_hat_insights_insights_frontend_components_Utilities_ReducerRegistry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/Utilities/ReducerRegistry */ "./node_modules/@red-hat-insights/insights-frontend-components/Utilities/ReducerRegistry.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_Utilities_ReducerRegistry__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_Utilities_ReducerRegistry__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action-types */ "./src/store/action-types.js");




function technologiesLoaded(state, _ref) {
  var payload = _ref.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    activeTechnologies: payload
  });
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_red_hat_insights_insights_frontend_components_Utilities_ReducerRegistry__WEBPACK_IMPORTED_MODULE_2__["applyReducerHash"])(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, _action_types__WEBPACK_IMPORTED_MODULE_3__["TECHOLOGIES"], technologiesLoaded), {
  loaded: true,
  activeTechnologies: []
}));

/***/ })

/******/ });
//# sourceMappingURL=../sourcemaps/App.js.map