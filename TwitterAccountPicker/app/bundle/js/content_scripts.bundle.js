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
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
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
/******/
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
/******/ 		"content_scripts": 0
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
/******/ 	deferredModules.push(["./src/content_scripts/index.tsx","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/content_scripts/index.tsx":
/*!***************************************!*\
  !*** ./src/content_scripts/index.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));
var Content = function () {
    var _a = (0, react_1.useState)(window.location.pathname), path = _a[0], setPath = _a[1];
    var _b = (0, react_1.useState)(null), list = _b[0], setList = _b[1];
    var idName = "t-account-picker";
    // hooksが反応しないので無理やり動かす
    setInterval(function () {
        if (window.location.pathname === path)
            return;
        setPath(window.location.pathname);
    }, 500);
    (0, react_1.useEffect)(function () {
        var style = document.querySelector('#' + idName);
        if (style !== null) {
            style.textContent = '';
        }
        rewrite(list);
    }, [path]);
    var rewrite = function (value) {
        var _a;
        if (value === null)
            return;
        var content = document.querySelector('[data-testid="UserName"]');
        if (content == null)
            return;
        var userDom = content.querySelector('[dir="ltr"]');
        if (userDom == null)
            return;
        var klassNameA = '';
        for (var i = 0; i < userDom.classList.length; i++) {
            klassNameA += '.' + userDom.classList[i];
        }
        if (klassNameA === '')
            return;
        userDom = userDom.querySelector('span');
        if (userDom == null)
            return;
        var klassNameB = '';
        for (var i = 0; i < userDom.classList.length; i++) {
            klassNameB += '.' + userDom.classList[i];
        }
        if (klassNameB === '')
            return;
        var styleDom = (_a = document.querySelector('#' + idName)) !== null && _a !== void 0 ? _a : document.createElement("style");
        styleDom.setAttribute("id", idName);
        value.whiteList.forEach(function (name) {
            if (-1 < name.indexOf(userDom.textContent)) {
                styleDom.textContent = "\n          div[data-testid=\"UserName\"] > div > div > div > div".concat(klassNameA, " > span").concat(klassNameB, " {\n            color: lime;\n            font-size: 1.2em;\n            font-weight: bold;\n            line-height: 160%;\n          }\n          div[data-testid=\"UserName\"] > div > div > div > div").concat(klassNameA, " > span").concat(klassNameB, ":before {\n            content: '\u3010\u2605\u30DB\u30EF\u30A4\u30C8\u30EA\u30B9\u30C8\u3011';\n          }\n        ");
                content.prepend(styleDom);
                return;
            }
        });
        value.blackList.forEach(function (name) {
            if (-1 < name.indexOf(userDom.textContent)) {
                styleDom.textContent = "\n          div[data-testid=\"UserName\"] > div > div > div > div".concat(klassNameA, " > span").concat(klassNameB, " {\n            color: red;\n            font-size: 1.2em;\n            font-weight: bold;\n            line-height: 160%;\n          }\n          div[data-testid=\"UserName\"] > div > div > div > div").concat(klassNameA, " > span").concat(klassNameB, ":before {\n            content: '\u3010\u30D6\u30E9\u30C3\u30AF\u30EA\u30B9\u30C8\u3011';\n          }\n        ");
                content.prepend(styleDom);
                return;
            }
        });
        value.uncheckedList.forEach(function (name) {
            if (-1 < name.indexOf(userDom.textContent)) {
                styleDom.textContent = "\n          div[data-testid=\"UserName\"] > div > div > div > div".concat(klassNameA, " > span").concat(klassNameB, " {\n            color: yellow;\n            font-size: 1.2em;\n            font-weight: bold;\n            line-height: 160%;\n          }\n          div[data-testid=\"UserName\"] > div > div > div > div").concat(klassNameA, " > span").concat(klassNameB, ":before {\n            content: '\u3010\u78BA\u8A8D\u5F85\u3061\u3011';\n          }\n        ");
                content.prepend(styleDom);
                return;
            }
        });
    };
    chrome.runtime.onMessage.addListener(function (value) {
        setList(value);
        rewrite(value);
    });
    return React.createElement("div", null, "test");
};
var ROOT_DOM_NAME = "t-account-picker-root";
var rootDom = document.createElement("div");
rootDom.setAttribute("id", ROOT_DOM_NAME);
document.body.append(rootDom);
react_dom_1.default.render(React.createElement(Content, null), document.getElementById(ROOT_DOM_NAME));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnRfc2NyaXB0cy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNB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R0FBRyx1QkFBdUIsQ0FBQztBQUM5QyxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRTlDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQzFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRTlCLG1CQUFRLENBQUMsTUFBTSxDQUFDLG9CQUFDLE9BQU8sT0FBRyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJqcy9jb250ZW50X3NjcmlwdHMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImNvbnRlbnRfc2NyaXB0c1wiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2NvbnRlbnRfc2NyaXB0cy9pbmRleC50c3hcIixcImNvbW1vblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbmNvbnN0IENvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IFtwYXRoLCBzZXRQYXRoXSA9IHVzZVN0YXRlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSlcbiAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IGlkTmFtZSA9IFwidC1hY2NvdW50LXBpY2tlclwiO1xuXG4gIC8vIGhvb2tz44GM5Y+N5b+c44GX44Gq44GE44Gu44Gn54Sh55CG44KE44KK5YuV44GL44GZXG4gIHNldEludGVydmFsKCgpID0+IHtcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSBwYXRoKSByZXR1cm47XG4gICAgc2V0UGF0aCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICB9LCA1MDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc3R5bGU6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgaWROYW1lKTtcbiAgICBpZiAoc3R5bGUgIT09IG51bGwpIHtcbiAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gJyc7XG4gICAgfVxuICAgIHJld3JpdGUobGlzdClcbiAgfSwgW3BhdGhdKTtcblxuICBjb25zdCByZXdyaXRlID0gKHZhbHVlOiBhbnkpID0+IHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHJldHVybjtcblxuICAgIGxldCBjb250ZW50OiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10ZXN0aWQ9XCJVc2VyTmFtZVwiXScpO1xuICBcbiAgICBpZiAoY29udGVudCA9PSBudWxsKSByZXR1cm47XG4gIFxuICAgIGxldCB1c2VyRG9tOiBhbnkgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkaXI9XCJsdHJcIl0nKTtcbiAgXG4gICAgaWYgKHVzZXJEb20gPT0gbnVsbCkgcmV0dXJuO1xuICBcbiAgICBsZXQga2xhc3NOYW1lQTogc3RyaW5nID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1c2VyRG9tLmNsYXNzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAga2xhc3NOYW1lQSArPSAnLicgKyB1c2VyRG9tLmNsYXNzTGlzdFtpXTtcbiAgICB9XG4gIFxuICAgIGlmIChrbGFzc05hbWVBID09PSAnJykgcmV0dXJuO1xuICBcbiAgICB1c2VyRG9tID0gdXNlckRvbS5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG4gIFxuICAgIGlmICh1c2VyRG9tID09IG51bGwpIHJldHVybjtcbiAgXG4gICAgbGV0IGtsYXNzTmFtZUI6IHN0cmluZyA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlckRvbS5jbGFzc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtsYXNzTmFtZUIgKz0gJy4nICsgdXNlckRvbS5jbGFzc0xpc3RbaV07XG4gICAgfVxuICBcbiAgICBpZiAoa2xhc3NOYW1lQiA9PT0gJycpIHJldHVybjtcbiAgICBcbiAgICBjb25zdCBzdHlsZURvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgaWROYW1lKSA/PyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIFxuICAgIHN0eWxlRG9tLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkTmFtZSk7XG5cbiAgICB2YWx1ZS53aGl0ZUxpc3QuZm9yRWFjaCgobmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoLTEgPCBuYW1lLmluZGV4T2YodXNlckRvbS50ZXh0Q29udGVudCkpIHtcbiAgICAgICAgc3R5bGVEb20udGV4dENvbnRlbnQgPSBgXG4gICAgICAgICAgZGl2W2RhdGEtdGVzdGlkPVwiVXNlck5hbWVcIl0gPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYke2tsYXNzTmFtZUF9ID4gc3BhbiR7a2xhc3NOYW1lQn0ge1xuICAgICAgICAgICAgY29sb3I6IGxpbWU7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTYwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGl2W2RhdGEtdGVzdGlkPVwiVXNlck5hbWVcIl0gPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYke2tsYXNzTmFtZUF9ID4gc3BhbiR7a2xhc3NOYW1lQn06YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfjgJDimIXjg5vjg6/jgqTjg4jjg6rjgrnjg4jjgJEnO1xuICAgICAgICAgIH1cbiAgICAgICAgYDtcbiAgICAgICAgY29udGVudC5wcmVwZW5kKHN0eWxlRG9tKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFsdWUuYmxhY2tMaXN0LmZvckVhY2goKG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKC0xIDwgbmFtZS5pbmRleE9mKHVzZXJEb20udGV4dENvbnRlbnQpKSB7XG4gICAgICAgIHN0eWxlRG9tLnRleHRDb250ZW50ID0gYFxuICAgICAgICAgIGRpdltkYXRhLXRlc3RpZD1cIlVzZXJOYW1lXCJdID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2JHtrbGFzc05hbWVBfSA+IHNwYW4ke2tsYXNzTmFtZUJ9IHtcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTYwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGl2W2RhdGEtdGVzdGlkPVwiVXNlck5hbWVcIl0gPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYke2tsYXNzTmFtZUF9ID4gc3BhbiR7a2xhc3NOYW1lQn06YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfjgJDjg5bjg6njg4Pjgq/jg6rjgrnjg4jjgJEnO1xuICAgICAgICAgIH1cbiAgICAgICAgYDtcbiAgICAgICAgY29udGVudC5wcmVwZW5kKHN0eWxlRG9tKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFsdWUudW5jaGVja2VkTGlzdC5mb3JFYWNoKChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICgtMSA8IG5hbWUuaW5kZXhPZih1c2VyRG9tLnRleHRDb250ZW50KSkge1xuICAgICAgICBzdHlsZURvbS50ZXh0Q29udGVudCA9IGBcbiAgICAgICAgICBkaXZbZGF0YS10ZXN0aWQ9XCJVc2VyTmFtZVwiXSA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdiR7a2xhc3NOYW1lQX0gPiBzcGFuJHtrbGFzc05hbWVCfSB7XG4gICAgICAgICAgICBjb2xvcjogeWVsbG93O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpdltkYXRhLXRlc3RpZD1cIlVzZXJOYW1lXCJdID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2JHtrbGFzc05hbWVBfSA+IHNwYW4ke2tsYXNzTmFtZUJ9OmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAn44CQ56K66KqN5b6F44Gh44CRJztcbiAgICAgICAgICB9XG4gICAgICAgIGA7XG4gICAgICAgIGNvbnRlbnQucHJlcGVuZChzdHlsZURvbSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigodmFsdWU6IGFueSkgPT4ge1xuICAgIHNldExpc3QodmFsdWUpO1xuICAgIHJld3JpdGUodmFsdWUpO1xuICB9KTtcblxuICByZXR1cm4gPGRpdj50ZXN0PC9kaXY+O1xufVxuXG5jb25zdCBST09UX0RPTV9OQU1FID0gXCJ0LWFjY291bnQtcGlja2VyLXJvb3RcIjtcbmNvbnN0IHJvb3REb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5yb290RG9tLnNldEF0dHJpYnV0ZShcImlkXCIsIFJPT1RfRE9NX05BTUUpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmQocm9vdERvbSk7XG5cblJlYWN0RE9NLnJlbmRlcig8Q29udGVudCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoUk9PVF9ET01fTkFNRSkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==