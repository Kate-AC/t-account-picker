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
    // fooksが反応しないので無理やり動かす
    setInterval(function () {
        if (window.location.pathname === path)
            return;
        setPath(window.location.pathname);
    }, 500);
    (0, react_1.useEffect)(function () {
        console.log(9999);
        var style = document.querySelector('#' + idName);
        if (style !== null) {
            style.textContent = '';
        }
        console.log(list);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnRfc2NyaXB0cy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNB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QUFLLENBQUMsQ0FBQztJQUNqQixDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sd0NBQWUsQ0FBQztBQUN6QixDQUFDO0FBRUQsSUFBTSxhQUFhLEdBQUcsdUJBQXVCLENBQUM7QUFDOUMsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUU5QyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztBQUMxQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUU5QixtQkFBUSxDQUFDLE1BQU0sQ0FBQyxvQkFBQyxPQUFPLE9BQUcsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoianMvY29udGVudF9zY3JpcHRzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJjb250ZW50X3NjcmlwdHNcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9jb250ZW50X3NjcmlwdHMvaW5kZXgudHN4XCIsXCJjb21tb25cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuXG5jb25zdCBDb250ZW50ID0gKCkgPT4ge1xuICBjb25zdCBbcGF0aCwgc2V0UGF0aF0gPSB1c2VTdGF0ZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpXG4gIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBpZE5hbWUgPSBcInQtYWNjb3VudC1waWNrZXJcIjtcblxuICAvLyBmb29rc+OBjOWPjeW/nOOBl+OBquOBhOOBruOBp+eEoeeQhuOChOOCiuWLleOBi+OBmVxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gcGF0aCkgcmV0dXJuO1xuICAgIHNldFBhdGgod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgfSwgNTAwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKDk5OTkpO1xuICAgIGNvbnN0IHN0eWxlOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGlkTmFtZSk7XG4gICAgaWYgKHN0eWxlICE9PSBudWxsKSB7XG4gICAgICBzdHlsZS50ZXh0Q29udGVudCA9ICcnO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhsaXN0KTtcbiAgICByZXdyaXRlKGxpc3QpXG4gIH0sIFtwYXRoXSk7XG5cbiAgY29uc3QgcmV3cml0ZSA9ICh2YWx1ZTogYW55KSA9PiB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSByZXR1cm47XG5cbiAgICBsZXQgY29udGVudDogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGVzdGlkPVwiVXNlck5hbWVcIl0nKTtcbiAgXG4gICAgaWYgKGNvbnRlbnQgPT0gbnVsbCkgcmV0dXJuO1xuICBcbiAgICBsZXQgdXNlckRvbTogYW55ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKCdbZGlyPVwibHRyXCJdJyk7XG4gIFxuICAgIGlmICh1c2VyRG9tID09IG51bGwpIHJldHVybjtcbiAgXG4gICAgbGV0IGtsYXNzTmFtZUE6IHN0cmluZyA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlckRvbS5jbGFzc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtsYXNzTmFtZUEgKz0gJy4nICsgdXNlckRvbS5jbGFzc0xpc3RbaV07XG4gICAgfVxuICBcbiAgICBpZiAoa2xhc3NOYW1lQSA9PT0gJycpIHJldHVybjtcbiAgXG4gICAgdXNlckRvbSA9IHVzZXJEb20ucXVlcnlTZWxlY3Rvcignc3BhbicpO1xuICBcbiAgICBpZiAodXNlckRvbSA9PSBudWxsKSByZXR1cm47XG4gIFxuICAgIGxldCBrbGFzc05hbWVCOiBzdHJpbmcgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJEb20uY2xhc3NMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBrbGFzc05hbWVCICs9ICcuJyArIHVzZXJEb20uY2xhc3NMaXN0W2ldO1xuICAgIH1cbiAgXG4gICAgaWYgKGtsYXNzTmFtZUIgPT09ICcnKSByZXR1cm47XG4gICAgXG4gICAgY29uc3Qgc3R5bGVEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGlkTmFtZSkgPz8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBcbiAgICBzdHlsZURvbS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZE5hbWUpO1xuXG4gICAgdmFsdWUud2hpdGVMaXN0LmZvckVhY2goKG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKC0xIDwgbmFtZS5pbmRleE9mKHVzZXJEb20udGV4dENvbnRlbnQpKSB7XG4gICAgICAgIHN0eWxlRG9tLnRleHRDb250ZW50ID0gYFxuICAgICAgICAgIGRpdltkYXRhLXRlc3RpZD1cIlVzZXJOYW1lXCJdID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2JHtrbGFzc05hbWVBfSA+IHNwYW4ke2tsYXNzTmFtZUJ9IHtcbiAgICAgICAgICAgIGNvbG9yOiBsaW1lO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpdltkYXRhLXRlc3RpZD1cIlVzZXJOYW1lXCJdID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2JHtrbGFzc05hbWVBfSA+IHNwYW4ke2tsYXNzTmFtZUJ9OmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAn44CQ4piF44Ob44Ov44Kk44OI44Oq44K544OI44CRJztcbiAgICAgICAgICB9XG4gICAgICAgIGA7XG4gICAgICAgIGNvbnRlbnQucHJlcGVuZChzdHlsZURvbSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhbHVlLmJsYWNrTGlzdC5mb3JFYWNoKChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICgtMSA8IG5hbWUuaW5kZXhPZih1c2VyRG9tLnRleHRDb250ZW50KSkge1xuICAgICAgICBzdHlsZURvbS50ZXh0Q29udGVudCA9IGBcbiAgICAgICAgICBkaXZbZGF0YS10ZXN0aWQ9XCJVc2VyTmFtZVwiXSA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdiR7a2xhc3NOYW1lQX0gPiBzcGFuJHtrbGFzc05hbWVCfSB7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpdltkYXRhLXRlc3RpZD1cIlVzZXJOYW1lXCJdID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2JHtrbGFzc05hbWVBfSA+IHNwYW4ke2tsYXNzTmFtZUJ9OmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAn44CQ44OW44Op44OD44Kv44Oq44K544OI44CRJztcbiAgICAgICAgICB9XG4gICAgICAgIGA7XG4gICAgICAgIGNvbnRlbnQucHJlcGVuZChzdHlsZURvbSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhbHVlLnVuY2hlY2tlZExpc3QuZm9yRWFjaCgobmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoLTEgPCBuYW1lLmluZGV4T2YodXNlckRvbS50ZXh0Q29udGVudCkpIHtcbiAgICAgICAgc3R5bGVEb20udGV4dENvbnRlbnQgPSBgXG4gICAgICAgICAgZGl2W2RhdGEtdGVzdGlkPVwiVXNlck5hbWVcIl0gPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYke2tsYXNzTmFtZUF9ID4gc3BhbiR7a2xhc3NOYW1lQn0ge1xuICAgICAgICAgICAgY29sb3I6IHllbGxvdztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNjAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkaXZbZGF0YS10ZXN0aWQ9XCJVc2VyTmFtZVwiXSA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdiR7a2xhc3NOYW1lQX0gPiBzcGFuJHtrbGFzc05hbWVCfTpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJ+OAkOeiuuiqjeW+heOBoeOAkSc7XG4gICAgICAgICAgfVxuICAgICAgICBgO1xuICAgICAgICBjb250ZW50LnByZXBlbmQoc3R5bGVEb20pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHZhbHVlOiBhbnkpID0+IHtcbiAgICBzZXRMaXN0KHZhbHVlKTtcbiAgICByZXdyaXRlKHZhbHVlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIDxkaXY+dGVzdDwvZGl2Pjtcbn1cblxuY29uc3QgUk9PVF9ET01fTkFNRSA9IFwidC1hY2NvdW50LXBpY2tlci1yb290XCI7XG5jb25zdCByb290RG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxucm9vdERvbS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBST09UX0RPTV9OQU1FKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kKHJvb3REb20pO1xuXG5SZWFjdERPTS5yZW5kZXIoPENvbnRlbnQgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFJPT1RfRE9NX05BTUUpKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=