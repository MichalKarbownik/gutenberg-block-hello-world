/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar registerBlockType = wp.blocks.registerBlockType;\nvar RichText = wp.editor.RichText;\n\n\nregisterBlockType('firstgutyblocks/hello-world', {\n    title: \"My First RichText Block!\",\n    icon: 'welcome-write-blog',\n    category: 'common',\n\n    attributes: {\n        textString: {\n            type: 'array',\n            source: 'children',\n            selector: 'h2'\n        }\n    },\n\n    // props are passed to edit by default\n    // props contains things like setAttributes and attributes\n    edit: function edit(props) {\n\n        // we are peeling off the things we need\n        var setAttributes = props.setAttributes,\n            attributes = props.attributes;\n\n        // This function is called when RichText changes\n        // By default the new string is passed to the function\n        // not an event object like react normally would do\n\n        function onTextChange(changes) {\n            // works very much like setState\n            setAttributes({\n                textString: changes\n            });\n        }\n\n        return React.createElement(RichText, {\n            tagName: 'h2',\n            value: attributes.textString,\n            onChange: onTextChange,\n            placeholder: 'Enter your text here!'\n        });\n    },\n\n\n    // again, props are automatically passed to save and edit\n    save: function save(props) {\n        var attributes = props.attributes;\n\n        // We want the text to be an h2 element\n        // and we place the textString value just\n        // like we would in a normal react app\n\n        return React.createElement(\n            'h2',\n            null,\n            attributes.textString\n        );\n    }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });