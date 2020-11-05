/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ \"./node_modules/mithril/index.js\");\n/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/chunk */ \"./node_modules/lodash/chunk.js\");\n/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_chunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar timer;\nvar root = document.getElementById('app');\nvar N = 50;\nvar MAP = [];\n\nfor (var i = 0; i < N * N; i++) {\n  MAP[i] = 0;\n}\n\nvar ST = {\n  world: lodash_chunk__WEBPACK_IMPORTED_MODULE_1___default()(MAP, N)\n};\nvar Cell = {\n  neighbors: function neighbors(x, y) {\n    var allPosibleIndexes = [[x - 1, y - 1], [x - 1, y], [x - 1, y + 1], [x, y - 1], [x, y + 1], [x + 1, y - 1], [x + 1, y], [x + 1, y + 1]];\n    var allPosibleValues = [];\n    allPosibleIndexes.forEach(function (_ref) {\n      var _ref2 = _slicedToArray(_ref, 2),\n          i = _ref2[0],\n          j = _ref2[1];\n\n      try {\n        allPosibleValues.push(ST.world[i][j]);\n      } catch (err) {\n        allPosibleValues.push(0);\n      }\n    });\n    return allPosibleValues.filter(function (v) {\n      return v != undefined;\n    });\n  },\n  view: function view(vn) {\n    var status = vn.attrs.status;\n    return mithril__WEBPACK_IMPORTED_MODULE_0___default()('.cell-wrapper', {\n      onclick: function onclick() {\n        var _vn$attrs = vn.attrs,\n            x = _vn$attrs.x,\n            y = _vn$attrs.y,\n            status = _vn$attrs.status;\n        ST.world[x][y] = status === 1 ? 0 : 1;\n      }\n    }, !!status ? mithril__WEBPACK_IMPORTED_MODULE_0___default()('div.cell.alive') : mithril__WEBPACK_IMPORTED_MODULE_0___default()('div.cell.dead'));\n  }\n}; // https://zh.wikipedia.org/wiki/%E5%BA%B7%E5%A8%81%E7%94%9F%E5%91%BD%E6%B8%B8%E6%88%8F\n// 当前细胞为存活状态时，当周围的存活细胞低于2个时（不包含2个），该细胞变成死亡状态。（模拟生命数量稀少）\n// 当前细胞为存活状态时，当周围有2个或3个存活细胞时，该细胞保持原样。\n// 当前细胞为存活状态时，当周围有超过3个存活细胞时，该细胞变成死亡状态。（模拟生命数量过多）\n// 当前细胞为死亡状态时，当周围有3个存活细胞时，该细胞变成存活状态。（模拟繁殖）\n\nvar World = {\n  step: function step() {\n    var next = ST.world.map(function (row, x) {\n      return row.map(function (col, y) {\n        var res = Cell.neighbors(x, y);\n        var a_cnt = res.filter(function (i) {\n          return i === 1;\n        }).length;\n\n        if (col === 0) {\n          if (a_cnt === 3) {\n            return 1;\n          }\n\n          return 0;\n        } else {\n          if (a_cnt === 2 || a_cnt === 3) {\n            return 1;\n          }\n\n          return 0;\n        }\n      });\n    });\n    ST.world = next;\n  },\n  view: function view() {\n    return mithril__WEBPACK_IMPORTED_MODULE_0___default()('.world', ST.world.map(function (row, x) {\n      return mithril__WEBPACK_IMPORTED_MODULE_0___default()('.row', row.map(function (col, y) {\n        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(Cell, {\n          status: col,\n          world: ST.world,\n          x: x,\n          y: y\n        });\n      }));\n    }));\n  }\n};\nvar Observer = {\n  view: function view() {\n    return mithril__WEBPACK_IMPORTED_MODULE_0___default()('div.observer', [mithril__WEBPACK_IMPORTED_MODULE_0___default()('button', {\n      onclick: function onclick() {\n        ST.world = ST.world.map(function (x) {\n          return x.map(function (y) {\n            return Math.round(Math.random());\n          });\n        });\n      }\n    }, 'RANDOM'), mithril__WEBPACK_IMPORTED_MODULE_0___default()('button', {\n      onclick: function onclick() {\n        return World.step();\n      }\n    }, 'STEP'), mithril__WEBPACK_IMPORTED_MODULE_0___default()('button', {\n      onclick: function onclick() {\n        if (timer) {\n          clearInterval(timer);\n          timer = null;\n        } else {\n          timer = setInterval(function () {\n            World.step();\n            mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();\n          }, 500);\n        }\n      }\n    }, 'AUTO'), mithril__WEBPACK_IMPORTED_MODULE_0___default()('button', {\n      onclick: function onclick() {\n        ST.world = ST.world.map(function (x) {\n          return x.map(function (y) {\n            return 0;\n          });\n        });\n\n        if (timer) {\n          clearInterval(timer);\n          timer = null;\n        }\n      }\n    }, 'CLEAR')]);\n  }\n};\nvar Universe = {\n  view: function view() {\n    return mithril__WEBPACK_IMPORTED_MODULE_0___default()('.wrapper', [mithril__WEBPACK_IMPORTED_MODULE_0___default()('h1', \"Game Of Life\"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(World), mithril__WEBPACK_IMPORTED_MODULE_0___default()(Observer)]);\n  }\n};\nmithril__WEBPACK_IMPORTED_MODULE_0___default().mount(root, Universe);\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n;\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  width: 100%;\\n  height: 100%;\\n  background: #f5f5f5;\\n}\\n\\n#app .wrapper {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.cell-wrapper {\\n  display: inline-block;\\n}\\n\\n.cell {\\n  display: inline-block;\\n  width: 5px;\\n  height: 5px;\\n  border: 1px solid black;\\n  margin: 1px;\\n}\\n.cell.alive {\\n  background: black;\\n}\\n.cell.dead {\\n  background: white;\\n}\\n\\n.observer {\\n  margin-top: 10px;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.observer button {\\n  margin: 10px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 6:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Symbol = root.Symbol;\n\nmodule.exports = Symbol;\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/lodash/_Symbol.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 28:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    getRawTag = __webpack_require__(/*! ./_getRawTag */ \"./node_modules/lodash/_getRawTag.js\"),\n    objectToString = __webpack_require__(/*! ./_objectToString */ \"./node_modules/lodash/_objectToString.js\");\n\n/** `Object#toString` result references. */\nvar nullTag = '[object Null]',\n    undefinedTag = '[object Undefined]';\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * The base implementation of `getTag` without fallbacks for buggy environments.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nfunction baseGetTag(value) {\n  if (value == null) {\n    return value === undefined ? undefinedTag : nullTag;\n  }\n  return (symToStringTag && symToStringTag in Object(value))\n    ? getRawTag(value)\n    : objectToString(value);\n}\n\nmodule.exports = baseGetTag;\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/lodash/_baseGetTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseSlice.js ***!
  \*******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 31:0-14 */
/***/ ((module) => {

eval("/**\n * The base implementation of `_.slice` without an iteratee call guard.\n *\n * @private\n * @param {Array} array The array to slice.\n * @param {number} [start=0] The start position.\n * @param {number} [end=array.length] The end position.\n * @returns {Array} Returns the slice of `array`.\n */\nfunction baseSlice(array, start, end) {\n  var index = -1,\n      length = array.length;\n\n  if (start < 0) {\n    start = -start > length ? 0 : (length + start);\n  }\n  end = end > length ? length : end;\n  if (end < 0) {\n    end += length;\n  }\n  length = start > end ? 0 : ((end - start) >>> 0);\n  start >>>= 0;\n\n  var result = Array(length);\n  while (++index < length) {\n    result[index] = array[index + start];\n  }\n  return result;\n}\n\nmodule.exports = baseSlice;\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/lodash/_baseSlice.js?");

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.g, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;\n\nmodule.exports = freeGlobal;\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/lodash/_freeGlobal.js?");

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 46:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the raw `toStringTag`.\n */\nfunction getRawTag(value) {\n  var isOwn = hasOwnProperty.call(value, symToStringTag),\n      tag = value[symToStringTag];\n\n  try {\n    value[symToStringTag] = undefined;\n    var unmasked = true;\n  } catch (e) {}\n\n  var result = nativeObjectToString.call(value);\n  if (unmasked) {\n    if (isOwn) {\n      value[symToStringTag] = tag;\n    } else {\n      delete value[symToStringTag];\n    }\n  }\n  return result;\n}\n\nmodule.exports = getRawTag;\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/lodash/_getRawTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 25:0-14 */
/***/ ((module) => {

eval("/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/** Used to detect unsigned integer values. */\nvar reIsUint = /^(?:0|[1-9]\\d*)$/;\n\n/**\n * Checks if `value` is a valid array-like index.\n *\n * @private\n * @param {*} value The value to check.\n * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.\n * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.\n */\nfunction isIndex(value, length) {\n  var type = typeof value;\n  length = length == null ? MAX_SAFE_INTEGER : length;\n\n  return !!length &&\n    (type == 'number' ||\n      (type != 'symbol' && reIsUint.test(value))) &&\n        (value > -1 && value % 1 == 0 && value < length);\n}\n\nmodule.exports = isIndex;\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/lodash/_isIndex.js?");

/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 30:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var eq = __webpack_require__(/*! ./eq */ \"./node_modules/lodash/eq.js\"),\n    isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"./node_modules/lodash/isArrayLike.js\"),\n    isIndex = __webpack_require__(/*! ./_isIndex */ \"./node_modules/lodash/_isIndex.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/**\n * Checks if the given arguments are from an iteratee call.\n *\n * @private\n * @param {*} value The potential iteratee value argument.\n * @param {*} index The potential iteratee index or key argument.\n * @param {*} object The potential iteratee object argument.\n * @returns {boolean} Returns `true` if the arguments are from an iteratee call,\n *  else `false`.\n */\nfunction isIterateeCall(value, index, object) {\n  if (!isObject(object)) {\n    return false;\n  }\n  var type = typeof index;\n  if (type == 'number'\n        ? (isArrayLike(object) && isIndex(index, object.length))\n        : (type == 'string' && index in object)\n      ) {\n    return eq(object[index], value);\n  }\n  return false;\n}\n\nmodule.exports = isIterateeCall;\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/lodash/_isIterateeCall.js?");

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 22:0-14 */
/***/ ((module) => {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\nmodule.exports = objectToString;\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/lodash/_objectToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\nmodule.exports = root;\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/lodash/_root.js?");

/***/ }),

/***/ "./node_modules/lodash/chunk.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/chunk.js ***!
  \**************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 50:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseSlice = __webpack_require__(/*! ./_baseSlice */ \"./node_modules/lodash/_baseSlice.js\"),\n    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ \"./node_modules/lodash/_isIterateeCall.js\"),\n    toInteger = __webpack_require__(/*! ./toInteger */ \"./node_modules/lodash/toInteger.js\");\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeCeil = Math.ceil,\n    nativeMax = Math.max;\n\n/**\n * Creates an array of elements split into groups the length of `size`.\n * If `array` can't be split evenly, the final chunk will be the remaining\n * elements.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category Array\n * @param {Array} array The array to process.\n * @param {number} [size=1] The length of each chunk\n * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.\n * @returns {Array} Returns the new array of chunks.\n * @example\n *\n * _.chunk(['a', 'b', 'c', 'd'], 2);\n * // => [['a', 'b'], ['c', 'd']]\n *\n * _.chunk(['a', 'b', 'c', 'd'], 3);\n * // => [['a', 'b', 'c'], ['d']]\n */\nfunction chunk(array, size, guard) {\n  if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {\n    size = 1;\n  } else {\n    size = nativeMax(toInteger(size), 0);\n  }\n  var length = array == null ? 0 : array.length;\n  if (!length || size < 1) {\n    return [];\n  }\n  var index = 0,\n      resIndex = 0,\n      result = Array(nativeCeil(length / size));\n\n  while (index < length) {\n    result[resIndex++] = baseSlice(array, index, (index += size));\n  }\n  return result;\n}\n\nmodule.exports = chunk;\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/lodash/chunk.js?");

/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 37:0-14 */
/***/ ((module) => {

eval("/**\n * Performs a\n * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * comparison between two values to determine if they are equivalent.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @returns {boolean} Returns `true` if the values are equivalent, else `false`.\n * @example\n *\n * var object = { 'a': 1 };\n * var other = { 'a': 1 };\n *\n * _.eq(object, object);\n * // => true\n *\n * _.eq(object, other);\n * // => false\n *\n * _.eq('a', 'a');\n * // => true\n *\n * _.eq('a', Object('a'));\n * // => false\n *\n * _.eq(NaN, NaN);\n * // => true\n */\nfunction eq(value, other) {\n  return value === other || (value !== value && other !== other);\n}\n\nmodule.exports = eq;\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/lodash/eq.js?");

/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 33:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isFunction = __webpack_require__(/*! ./isFunction */ \"./node_modules/lodash/isFunction.js\"),\n    isLength = __webpack_require__(/*! ./isLength */ \"./node_modules/lodash/isLength.js\");\n\n/**\n * Checks if `value` is array-like. A value is considered array-like if it's\n * not a function and has a `value.length` that's an integer greater than or\n * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is array-like, else `false`.\n * @example\n *\n * _.isArrayLike([1, 2, 3]);\n * // => true\n *\n * _.isArrayLike(document.body.children);\n * // => true\n *\n * _.isArrayLike('abc');\n * // => true\n *\n * _.isArrayLike(_.noop);\n * // => false\n */\nfunction isArrayLike(value) {\n  return value != null && isLength(value.length) && !isFunction(value);\n}\n\nmodule.exports = isArrayLike;\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/lodash/isArrayLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 37:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/** `Object#toString` result references. */\nvar asyncTag = '[object AsyncFunction]',\n    funcTag = '[object Function]',\n    genTag = '[object GeneratorFunction]',\n    proxyTag = '[object Proxy]';\n\n/**\n * Checks if `value` is classified as a `Function` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a function, else `false`.\n * @example\n *\n * _.isFunction(_);\n * // => true\n *\n * _.isFunction(/abc/);\n * // => false\n */\nfunction isFunction(value) {\n  if (!isObject(value)) {\n    return false;\n  }\n  // The use of `Object#toString` avoids issues with the `typeof` operator\n  // in Safari 9 which returns 'object' for typed arrays and other constructors.\n  var tag = baseGetTag(value);\n  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;\n}\n\nmodule.exports = isFunction;\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/lodash/isFunction.js?");

/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 35:0-14 */
/***/ ((module) => {

eval("/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/**\n * Checks if `value` is a valid array-like length.\n *\n * **Note:** This method is loosely based on\n * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.\n * @example\n *\n * _.isLength(3);\n * // => true\n *\n * _.isLength(Number.MIN_VALUE);\n * // => false\n *\n * _.isLength(Infinity);\n * // => false\n *\n * _.isLength('3');\n * // => false\n */\nfunction isLength(value) {\n  return typeof value == 'number' &&\n    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;\n}\n\nmodule.exports = isLength;\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/lodash/isLength.js?");

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 31:0-14 */
/***/ ((module) => {

eval("/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return value != null && (type == 'object' || type == 'function');\n}\n\nmodule.exports = isObject;\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/lodash/isObject.js?");

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 29:0-14 */
/***/ ((module) => {

eval("/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return value != null && typeof value == 'object';\n}\n\nmodule.exports = isObjectLike;\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/lodash/isObjectLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 29:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar symbolTag = '[object Symbol]';\n\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\nfunction isSymbol(value) {\n  return typeof value == 'symbol' ||\n    (isObjectLike(value) && baseGetTag(value) == symbolTag);\n}\n\nmodule.exports = isSymbol;\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/lodash/isSymbol.js?");

/***/ }),

/***/ "./node_modules/lodash/toFinite.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toFinite.js ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 42:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toNumber = __webpack_require__(/*! ./toNumber */ \"./node_modules/lodash/toNumber.js\");\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0,\n    MAX_INTEGER = 1.7976931348623157e+308;\n\n/**\n * Converts `value` to a finite number.\n *\n * @static\n * @memberOf _\n * @since 4.12.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {number} Returns the converted number.\n * @example\n *\n * _.toFinite(3.2);\n * // => 3.2\n *\n * _.toFinite(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toFinite(Infinity);\n * // => 1.7976931348623157e+308\n *\n * _.toFinite('3.2');\n * // => 3.2\n */\nfunction toFinite(value) {\n  if (!value) {\n    return value === 0 ? value : 0;\n  }\n  value = toNumber(value);\n  if (value === INFINITY || value === -INFINITY) {\n    var sign = (value < 0 ? -1 : 1);\n    return sign * MAX_INTEGER;\n  }\n  return value === value ? value : 0;\n}\n\nmodule.exports = toFinite;\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/lodash/toFinite.js?");

/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 36:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toFinite = __webpack_require__(/*! ./toFinite */ \"./node_modules/lodash/toFinite.js\");\n\n/**\n * Converts `value` to an integer.\n *\n * **Note:** This method is loosely based on\n * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {number} Returns the converted integer.\n * @example\n *\n * _.toInteger(3.2);\n * // => 3\n *\n * _.toInteger(Number.MIN_VALUE);\n * // => 0\n *\n * _.toInteger(Infinity);\n * // => 1.7976931348623157e+308\n *\n * _.toInteger('3.2');\n * // => 3\n */\nfunction toInteger(value) {\n  var result = toFinite(value),\n      remainder = result % 1;\n\n  return result === result ? (remainder ? result - remainder : result) : 0;\n}\n\nmodule.exports = toInteger;\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/lodash/toInteger.js?");

/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 66:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar NAN = 0 / 0;\n\n/** Used to match leading and trailing whitespace. */\nvar reTrim = /^\\s+|\\s+$/g;\n\n/** Used to detect bad signed hexadecimal string values. */\nvar reIsBadHex = /^[-+]0x[0-9a-f]+$/i;\n\n/** Used to detect binary string values. */\nvar reIsBinary = /^0b[01]+$/i;\n\n/** Used to detect octal string values. */\nvar reIsOctal = /^0o[0-7]+$/i;\n\n/** Built-in method references without a dependency on `root`. */\nvar freeParseInt = parseInt;\n\n/**\n * Converts `value` to a number.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to process.\n * @returns {number} Returns the number.\n * @example\n *\n * _.toNumber(3.2);\n * // => 3.2\n *\n * _.toNumber(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toNumber(Infinity);\n * // => Infinity\n *\n * _.toNumber('3.2');\n * // => 3.2\n */\nfunction toNumber(value) {\n  if (typeof value == 'number') {\n    return value;\n  }\n  if (isSymbol(value)) {\n    return NAN;\n  }\n  if (isObject(value)) {\n    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;\n    value = isObject(other) ? (other + '') : other;\n  }\n  if (typeof value != 'string') {\n    return value === 0 ? value : +value;\n  }\n  value = value.replace(reTrim, '');\n  var isBinary = reIsBinary.test(value);\n  return (isBinary || reIsOctal.test(value))\n    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)\n    : (reIsBadHex.test(value) ? NAN : +value);\n}\n\nmodule.exports = toNumber;\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/lodash/toNumber.js?");

/***/ }),

/***/ "./node_modules/mithril/api/mount-redraw.js":
/*!**************************************************!*\
  !*** ./node_modules/mithril/api/mount-redraw.js ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 5:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar Vnode = __webpack_require__(/*! ../render/vnode */ \"./node_modules/mithril/render/vnode.js\")\n\nmodule.exports = function(render, schedule, console) {\n\tvar subscriptions = []\n\tvar rendering = false\n\tvar pending = false\n\n\tfunction sync() {\n\t\tif (rendering) throw new Error(\"Nested m.redraw.sync() call\")\n\t\trendering = true\n\t\tfor (var i = 0; i < subscriptions.length; i += 2) {\n\t\t\ttry { render(subscriptions[i], Vnode(subscriptions[i + 1]), redraw) }\n\t\t\tcatch (e) { console.error(e) }\n\t\t}\n\t\trendering = false\n\t}\n\n\tfunction redraw() {\n\t\tif (!pending) {\n\t\t\tpending = true\n\t\t\tschedule(function() {\n\t\t\t\tpending = false\n\t\t\t\tsync()\n\t\t\t})\n\t\t}\n\t}\n\n\tredraw.sync = sync\n\n\tfunction mount(root, component) {\n\t\tif (component != null && component.view == null && typeof component !== \"function\") {\n\t\t\tthrow new TypeError(\"m.mount(element, component) expects a component, not a vnode\")\n\t\t}\n\n\t\tvar index = subscriptions.indexOf(root)\n\t\tif (index >= 0) {\n\t\t\tsubscriptions.splice(index, 2)\n\t\t\trender(root, [], redraw)\n\t\t}\n\n\t\tif (component != null) {\n\t\t\tsubscriptions.push(root, component)\n\t\t\trender(root, Vnode(component), redraw)\n\t\t}\n\t}\n\n\treturn {mount: mount, redraw: redraw}\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/mithril/api/mount-redraw.js?");

/***/ }),

/***/ "./node_modules/mithril/api/router.js":
/*!********************************************!*\
  !*** ./node_modules/mithril/api/router.js ***!
  \********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 14:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar Vnode = __webpack_require__(/*! ../render/vnode */ \"./node_modules/mithril/render/vnode.js\")\nvar m = __webpack_require__(/*! ../render/hyperscript */ \"./node_modules/mithril/render/hyperscript.js\")\nvar Promise = __webpack_require__(/*! ../promise/promise */ \"./node_modules/mithril/promise/promise.js\")\n\nvar buildPathname = __webpack_require__(/*! ../pathname/build */ \"./node_modules/mithril/pathname/build.js\")\nvar parsePathname = __webpack_require__(/*! ../pathname/parse */ \"./node_modules/mithril/pathname/parse.js\")\nvar compileTemplate = __webpack_require__(/*! ../pathname/compileTemplate */ \"./node_modules/mithril/pathname/compileTemplate.js\")\nvar assign = __webpack_require__(/*! ../pathname/assign */ \"./node_modules/mithril/pathname/assign.js\")\n\nvar sentinel = {}\n\nmodule.exports = function($window, mountRedraw) {\n\tvar fireAsync\n\n\tfunction setPath(path, data, options) {\n\t\tpath = buildPathname(path, data)\n\t\tif (fireAsync != null) {\n\t\t\tfireAsync()\n\t\t\tvar state = options ? options.state : null\n\t\t\tvar title = options ? options.title : null\n\t\t\tif (options && options.replace) $window.history.replaceState(state, title, route.prefix + path)\n\t\t\telse $window.history.pushState(state, title, route.prefix + path)\n\t\t}\n\t\telse {\n\t\t\t$window.location.href = route.prefix + path\n\t\t}\n\t}\n\n\tvar currentResolver = sentinel, component, attrs, currentPath, lastUpdate\n\n\tvar SKIP = route.SKIP = {}\n\n\tfunction route(root, defaultRoute, routes) {\n\t\tif (root == null) throw new Error(\"Ensure the DOM element that was passed to `m.route` is not undefined\")\n\t\t// 0 = start\n\t\t// 1 = init\n\t\t// 2 = ready\n\t\tvar state = 0\n\n\t\tvar compiled = Object.keys(routes).map(function(route) {\n\t\t\tif (route[0] !== \"/\") throw new SyntaxError(\"Routes must start with a `/`\")\n\t\t\tif ((/:([^\\/\\.-]+)(\\.{3})?:/).test(route)) {\n\t\t\t\tthrow new SyntaxError(\"Route parameter names must be separated with either `/`, `.`, or `-`\")\n\t\t\t}\n\t\t\treturn {\n\t\t\t\troute: route,\n\t\t\t\tcomponent: routes[route],\n\t\t\t\tcheck: compileTemplate(route),\n\t\t\t}\n\t\t})\n\t\tvar callAsync = typeof setImmediate === \"function\" ? setImmediate : setTimeout\n\t\tvar p = Promise.resolve()\n\t\tvar scheduled = false\n\t\tvar onremove\n\n\t\tfireAsync = null\n\n\t\tif (defaultRoute != null) {\n\t\t\tvar defaultData = parsePathname(defaultRoute)\n\n\t\t\tif (!compiled.some(function (i) { return i.check(defaultData) })) {\n\t\t\t\tthrow new ReferenceError(\"Default route doesn't match any known routes\")\n\t\t\t}\n\t\t}\n\n\t\tfunction resolveRoute() {\n\t\t\tscheduled = false\n\t\t\t// Consider the pathname holistically. The prefix might even be invalid,\n\t\t\t// but that's not our problem.\n\t\t\tvar prefix = $window.location.hash\n\t\t\tif (route.prefix[0] !== \"#\") {\n\t\t\t\tprefix = $window.location.search + prefix\n\t\t\t\tif (route.prefix[0] !== \"?\") {\n\t\t\t\t\tprefix = $window.location.pathname + prefix\n\t\t\t\t\tif (prefix[0] !== \"/\") prefix = \"/\" + prefix\n\t\t\t\t}\n\t\t\t}\n\t\t\t// This seemingly useless `.concat()` speeds up the tests quite a bit,\n\t\t\t// since the representation is consistently a relatively poorly\n\t\t\t// optimized cons string.\n\t\t\tvar path = prefix.concat()\n\t\t\t\t.replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent)\n\t\t\t\t.slice(route.prefix.length)\n\t\t\tvar data = parsePathname(path)\n\n\t\t\tassign(data.params, $window.history.state)\n\n\t\t\tfunction fail() {\n\t\t\t\tif (path === defaultRoute) throw new Error(\"Could not resolve default route \" + defaultRoute)\n\t\t\t\tsetPath(defaultRoute, null, {replace: true})\n\t\t\t}\n\n\t\t\tloop(0)\n\t\t\tfunction loop(i) {\n\t\t\t\t// 0 = init\n\t\t\t\t// 1 = scheduled\n\t\t\t\t// 2 = done\n\t\t\t\tfor (; i < compiled.length; i++) {\n\t\t\t\t\tif (compiled[i].check(data)) {\n\t\t\t\t\t\tvar payload = compiled[i].component\n\t\t\t\t\t\tvar matchedRoute = compiled[i].route\n\t\t\t\t\t\tvar localComp = payload\n\t\t\t\t\t\tvar update = lastUpdate = function(comp) {\n\t\t\t\t\t\t\tif (update !== lastUpdate) return\n\t\t\t\t\t\t\tif (comp === SKIP) return loop(i + 1)\n\t\t\t\t\t\t\tcomponent = comp != null && (typeof comp.view === \"function\" || typeof comp === \"function\")? comp : \"div\"\n\t\t\t\t\t\t\tattrs = data.params, currentPath = path, lastUpdate = null\n\t\t\t\t\t\t\tcurrentResolver = payload.render ? payload : null\n\t\t\t\t\t\t\tif (state === 2) mountRedraw.redraw()\n\t\t\t\t\t\t\telse {\n\t\t\t\t\t\t\t\tstate = 2\n\t\t\t\t\t\t\t\tmountRedraw.redraw.sync()\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\t// There's no understating how much I *wish* I could\n\t\t\t\t\t\t// use `async`/`await` here...\n\t\t\t\t\t\tif (payload.view || typeof payload === \"function\") {\n\t\t\t\t\t\t\tpayload = {}\n\t\t\t\t\t\t\tupdate(localComp)\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse if (payload.onmatch) {\n\t\t\t\t\t\t\tp.then(function () {\n\t\t\t\t\t\t\t\treturn payload.onmatch(data.params, path, matchedRoute)\n\t\t\t\t\t\t\t}).then(update, fail)\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse update(\"div\")\n\t\t\t\t\t\treturn\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tfail()\n\t\t\t}\n\t\t}\n\n\t\t// Set it unconditionally so `m.route.set` and `m.route.Link` both work,\n\t\t// even if neither `pushState` nor `hashchange` are supported. It's\n\t\t// cleared if `hashchange` is used, since that makes it automatically\n\t\t// async.\n\t\tfireAsync = function() {\n\t\t\tif (!scheduled) {\n\t\t\t\tscheduled = true\n\t\t\t\tcallAsync(resolveRoute)\n\t\t\t}\n\t\t}\n\n\t\tif (typeof $window.history.pushState === \"function\") {\n\t\t\tonremove = function() {\n\t\t\t\t$window.removeEventListener(\"popstate\", fireAsync, false)\n\t\t\t}\n\t\t\t$window.addEventListener(\"popstate\", fireAsync, false)\n\t\t} else if (route.prefix[0] === \"#\") {\n\t\t\tfireAsync = null\n\t\t\tonremove = function() {\n\t\t\t\t$window.removeEventListener(\"hashchange\", resolveRoute, false)\n\t\t\t}\n\t\t\t$window.addEventListener(\"hashchange\", resolveRoute, false)\n\t\t}\n\n\t\treturn mountRedraw.mount(root, {\n\t\t\tonbeforeupdate: function() {\n\t\t\t\tstate = state ? 2 : 1\n\t\t\t\treturn !(!state || sentinel === currentResolver)\n\t\t\t},\n\t\t\toncreate: resolveRoute,\n\t\t\tonremove: onremove,\n\t\t\tview: function() {\n\t\t\t\tif (!state || sentinel === currentResolver) return\n\t\t\t\t// Wrap in a fragment to preserve existing key semantics\n\t\t\t\tvar vnode = [Vnode(component, attrs.key, attrs)]\n\t\t\t\tif (currentResolver) vnode = currentResolver.render(vnode[0])\n\t\t\t\treturn vnode\n\t\t\t},\n\t\t})\n\t}\n\troute.set = function(path, data, options) {\n\t\tif (lastUpdate != null) {\n\t\t\toptions = options || {}\n\t\t\toptions.replace = true\n\t\t}\n\t\tlastUpdate = null\n\t\tsetPath(path, data, options)\n\t}\n\troute.get = function() {return currentPath}\n\troute.prefix = \"#!\"\n\troute.Link = {\n\t\tview: function(vnode) {\n\t\t\tvar options = vnode.attrs.options\n\t\t\t// Remove these so they don't get overwritten\n\t\t\tvar attrs = {}, onclick, href\n\t\t\tassign(attrs, vnode.attrs)\n\t\t\t// The first two are internal, but the rest are magic attributes\n\t\t\t// that need censored to not screw up rendering.\n\t\t\tattrs.selector = attrs.options = attrs.key = attrs.oninit =\n\t\t\tattrs.oncreate = attrs.onbeforeupdate = attrs.onupdate =\n\t\t\tattrs.onbeforeremove = attrs.onremove = null\n\n\t\t\t// Do this now so we can get the most current `href` and `disabled`.\n\t\t\t// Those attributes may also be specified in the selector, and we\n\t\t\t// should honor that.\n\t\t\tvar child = m(vnode.attrs.selector || \"a\", attrs, vnode.children)\n\n\t\t\t// Let's provide a *right* way to disable a route link, rather than\n\t\t\t// letting people screw up accessibility on accident.\n\t\t\t//\n\t\t\t// The attribute is coerced so users don't get surprised over\n\t\t\t// `disabled: 0` resulting in a button that's somehow routable\n\t\t\t// despite being visibly disabled.\n\t\t\tif (child.attrs.disabled = Boolean(child.attrs.disabled)) {\n\t\t\t\tchild.attrs.href = null\n\t\t\t\tchild.attrs[\"aria-disabled\"] = \"true\"\n\t\t\t\t// If you *really* do want to do this on a disabled link, use\n\t\t\t\t// an `oncreate` hook to add it.\n\t\t\t\tchild.attrs.onclick = null\n\t\t\t} else {\n\t\t\t\tonclick = child.attrs.onclick\n\t\t\t\thref = child.attrs.href\n\t\t\t\tchild.attrs.href = route.prefix + href\n\t\t\t\tchild.attrs.onclick = function(e) {\n\t\t\t\t\tvar result\n\t\t\t\t\tif (typeof onclick === \"function\") {\n\t\t\t\t\t\tresult = onclick.call(e.currentTarget, e)\n\t\t\t\t\t} else if (onclick == null || typeof onclick !== \"object\") {\n\t\t\t\t\t\t// do nothing\n\t\t\t\t\t} else if (typeof onclick.handleEvent === \"function\") {\n\t\t\t\t\t\tonclick.handleEvent(e)\n\t\t\t\t\t}\n\n\t\t\t\t\t// Adapted from React Router's implementation:\n\t\t\t\t\t// https://github.com/ReactTraining/react-router/blob/520a0acd48ae1b066eb0b07d6d4d1790a1d02482/packages/react-router-dom/modules/Link.js\n\t\t\t\t\t//\n\t\t\t\t\t// Try to be flexible and intuitive in how we handle links.\n\t\t\t\t\t// Fun fact: links aren't as obvious to get right as you\n\t\t\t\t\t// would expect. There's a lot more valid ways to click a\n\t\t\t\t\t// link than this, and one might want to not simply click a\n\t\t\t\t\t// link, but right click or command-click it to copy the\n\t\t\t\t\t// link target, etc. Nope, this isn't just for blind people.\n\t\t\t\t\tif (\n\t\t\t\t\t\t// Skip if `onclick` prevented default\n\t\t\t\t\t\tresult !== false && !e.defaultPrevented &&\n\t\t\t\t\t\t// Ignore everything but left clicks\n\t\t\t\t\t\t(e.button === 0 || e.which === 0 || e.which === 1) &&\n\t\t\t\t\t\t// Let the browser handle `target=_blank`, etc.\n\t\t\t\t\t\t(!e.currentTarget.target || e.currentTarget.target === \"_self\") &&\n\t\t\t\t\t\t// No modifier keys\n\t\t\t\t\t\t!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey\n\t\t\t\t\t) {\n\t\t\t\t\t\te.preventDefault()\n\t\t\t\t\t\te.redraw = false\n\t\t\t\t\t\troute.set(href, null, options)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn child\n\t\t},\n\t}\n\troute.param = function(key) {\n\t\treturn attrs && key != null ? attrs[key] : attrs\n\t}\n\n\treturn route\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/mithril/api/router.js?");

/***/ }),

/***/ "./node_modules/mithril/hyperscript.js":
/*!*********************************************!*\
  !*** ./node_modules/mithril/hyperscript.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 8:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar hyperscript = __webpack_require__(/*! ./render/hyperscript */ \"./node_modules/mithril/render/hyperscript.js\")\n\nhyperscript.trust = __webpack_require__(/*! ./render/trust */ \"./node_modules/mithril/render/trust.js\")\nhyperscript.fragment = __webpack_require__(/*! ./render/fragment */ \"./node_modules/mithril/render/fragment.js\")\n\nmodule.exports = hyperscript\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/mithril/hyperscript.js?");

/***/ }),

/***/ "./node_modules/mithril/index.js":
/*!***************************************!*\
  !*** ./node_modules/mithril/index.js ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 24:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar hyperscript = __webpack_require__(/*! ./hyperscript */ \"./node_modules/mithril/hyperscript.js\")\nvar request = __webpack_require__(/*! ./request */ \"./node_modules/mithril/request.js\")\nvar mountRedraw = __webpack_require__(/*! ./mount-redraw */ \"./node_modules/mithril/mount-redraw.js\")\n\nvar m = function m() { return hyperscript.apply(this, arguments) }\nm.m = hyperscript\nm.trust = hyperscript.trust\nm.fragment = hyperscript.fragment\nm.mount = mountRedraw.mount\nm.route = __webpack_require__(/*! ./route */ \"./node_modules/mithril/route.js\")\nm.render = __webpack_require__(/*! ./render */ \"./node_modules/mithril/render.js\")\nm.redraw = mountRedraw.redraw\nm.request = request.request\nm.jsonp = request.jsonp\nm.parseQueryString = __webpack_require__(/*! ./querystring/parse */ \"./node_modules/mithril/querystring/parse.js\")\nm.buildQueryString = __webpack_require__(/*! ./querystring/build */ \"./node_modules/mithril/querystring/build.js\")\nm.parsePathname = __webpack_require__(/*! ./pathname/parse */ \"./node_modules/mithril/pathname/parse.js\")\nm.buildPathname = __webpack_require__(/*! ./pathname/build */ \"./node_modules/mithril/pathname/build.js\")\nm.vnode = __webpack_require__(/*! ./render/vnode */ \"./node_modules/mithril/render/vnode.js\")\nm.PromisePolyfill = __webpack_require__(/*! ./promise/polyfill */ \"./node_modules/mithril/promise/polyfill.js\")\n\nmodule.exports = m\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/mithril/index.js?");

/***/ }),

/***/ "./node_modules/mithril/mount-redraw.js":
/*!**********************************************!*\
  !*** ./node_modules/mithril/mount-redraw.js ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 5:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar render = __webpack_require__(/*! ./render */ \"./node_modules/mithril/render.js\")\n\nmodule.exports = __webpack_require__(/*! ./api/mount-redraw */ \"./node_modules/mithril/api/mount-redraw.js\")(render, requestAnimationFrame, console)\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/mithril/mount-redraw.js?");

/***/ }),

/***/ "./node_modules/mithril/pathname/assign.js":
/*!*************************************************!*\
  !*** ./node_modules/mithril/pathname/assign.js ***!
  \*************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 3:0-14 */
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = Object.assign || function(target, source) {\n\tif(source) Object.keys(source).forEach(function(key) { target[key] = source[key] })\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/mithril/pathname/assign.js?");

/***/ }),

/***/ "./node_modules/mithril/pathname/build.js":
/*!************************************************!*\
  !*** ./node_modules/mithril/pathname/build.js ***!
  \************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 7:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar buildQueryString = __webpack_require__(/*! ../querystring/build */ \"./node_modules/mithril/querystring/build.js\")\nvar assign = __webpack_require__(/*! ./assign */ \"./node_modules/mithril/pathname/assign.js\")\n\n// Returns `path` from `template` + `params`\nmodule.exports = function(template, params) {\n\tif ((/:([^\\/\\.-]+)(\\.{3})?:/).test(template)) {\n\t\tthrow new SyntaxError(\"Template parameter names *must* be separated\")\n\t}\n\tif (params == null) return template\n\tvar queryIndex = template.indexOf(\"?\")\n\tvar hashIndex = template.indexOf(\"#\")\n\tvar queryEnd = hashIndex < 0 ? template.length : hashIndex\n\tvar pathEnd = queryIndex < 0 ? queryEnd : queryIndex\n\tvar path = template.slice(0, pathEnd)\n\tvar query = {}\n\n\tassign(query, params)\n\n\tvar resolved = path.replace(/:([^\\/\\.-]+)(\\.{3})?/g, function(m, key, variadic) {\n\t\tdelete query[key]\n\t\t// If no such parameter exists, don't interpolate it.\n\t\tif (params[key] == null) return m\n\t\t// Escape normal parameters, but not variadic ones.\n\t\treturn variadic ? params[key] : encodeURIComponent(String(params[key]))\n\t})\n\n\t// In case the template substitution adds new query/hash parameters.\n\tvar newQueryIndex = resolved.indexOf(\"?\")\n\tvar newHashIndex = resolved.indexOf(\"#\")\n\tvar newQueryEnd = newHashIndex < 0 ? resolved.length : newHashIndex\n\tvar newPathEnd = newQueryIndex < 0 ? newQueryEnd : newQueryIndex\n\tvar result = resolved.slice(0, newPathEnd)\n\n\tif (queryIndex >= 0) result += template.slice(queryIndex, queryEnd)\n\tif (newQueryIndex >= 0) result += (queryIndex < 0 ? \"?\" : \"&\") + resolved.slice(newQueryIndex, newQueryEnd)\n\tvar querystring = buildQueryString(query)\n\tif (querystring) result += (queryIndex < 0 && newQueryIndex < 0 ? \"?\" : \"&\") + querystring\n\tif (hashIndex >= 0) result += template.slice(hashIndex)\n\tif (newHashIndex >= 0) result += (hashIndex < 0 ? \"\" : \"&\") + resolved.slice(newHashIndex)\n\treturn result\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/mithril/pathname/build.js?");

/***/ }),

/***/ "./node_modules/mithril/pathname/compileTemplate.js":
/*!**********************************************************!*\
  !*** ./node_modules/mithril/pathname/compileTemplate.js ***!
  \**********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 10:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar parsePathname = __webpack_require__(/*! ./parse */ \"./node_modules/mithril/pathname/parse.js\")\n\n// Compiles a template into a function that takes a resolved path (without query\n// strings) and returns an object containing the template parameters with their\n// parsed values. This expects the input of the compiled template to be the\n// output of `parsePathname`. Note that it does *not* remove query parameters\n// specified in the template.\nmodule.exports = function(template) {\n\tvar templateData = parsePathname(template)\n\tvar templateKeys = Object.keys(templateData.params)\n\tvar keys = []\n\tvar regexp = new RegExp(\"^\" + templateData.path.replace(\n\t\t// I escape literal text so people can use things like `:file.:ext` or\n\t\t// `:lang-:locale` in routes. This is all merged into one pass so I\n\t\t// don't also accidentally escape `-` and make it harder to detect it to\n\t\t// ban it from template parameters.\n\t\t/:([^\\/.-]+)(\\.{3}|\\.(?!\\.)|-)?|[\\\\^$*+.()|\\[\\]{}]/g,\n\t\tfunction(m, key, extra) {\n\t\t\tif (key == null) return \"\\\\\" + m\n\t\t\tkeys.push({k: key, r: extra === \"...\"})\n\t\t\tif (extra === \"...\") return \"(.*)\"\n\t\t\tif (extra === \".\") return \"([^/]+)\\\\.\"\n\t\t\treturn \"([^/]+)\" + (extra || \"\")\n\t\t}\n\t) + \"$\")\n\treturn function(data) {\n\t\t// First, check the params. Usually, there isn't any, and it's just\n\t\t// checking a static set.\n\t\tfor (var i = 0; i < templateKeys.length; i++) {\n\t\t\tif (templateData.params[templateKeys[i]] !== data.params[templateKeys[i]]) return false\n\t\t}\n\t\t// If no interpolations exist, let's skip all the ceremony\n\t\tif (!keys.length) return regexp.test(data.path)\n\t\tvar values = regexp.exec(data.path)\n\t\tif (values == null) return false\n\t\tfor (var i = 0; i < keys.length; i++) {\n\t\t\tdata.params[keys[i].k] = keys[i].r ? values[i + 1] : decodeURIComponent(values[i + 1])\n\t\t}\n\t\treturn true\n\t}\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/mithril/pathname/compileTemplate.js?");

/***/ }),

/***/ "./node_modules/mithril/pathname/parse.js":
/*!************************************************!*\
  !*** ./node_modules/mithril/pathname/parse.js ***!
  \************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 6:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar parseQueryString = __webpack_require__(/*! ../querystring/parse */ \"./node_modules/mithril/querystring/parse.js\")\n\n// Returns `{path, params}` from `url`\nmodule.exports = function(url) {\n\tvar queryIndex = url.indexOf(\"?\")\n\tvar hashIndex = url.indexOf(\"#\")\n\tvar queryEnd = hashIndex < 0 ? url.length : hashIndex\n\tvar pathEnd = queryIndex < 0 ? queryEnd : queryIndex\n\tvar path = url.slice(0, pathEnd).replace(/\\/{2,}/g, \"/\")\n\n\tif (!path) path = \"/\"\n\telse {\n\t\tif (path[0] !== \"/\") path = \"/\" + path\n\t\tif (path.length > 1 && path[path.length - 1] === \"/\") path = path.slice(0, -1)\n\t}\n\treturn {\n\t\tpath: path,\n\t\tparams: queryIndex < 0\n\t\t\t? {}\n\t\t\t: parseQueryString(url.slice(queryIndex + 1, queryEnd)),\n\t}\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/mithril/pathname/parse.js?");

/***/ }),

/***/ "./node_modules/mithril/promise/polyfill.js":
/*!**************************************************!*\
  !*** ./node_modules/mithril/promise/polyfill.js ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 112:0-14 */
/***/ ((module) => {

"use strict";
eval("\n/** @constructor */\nvar PromisePolyfill = function(executor) {\n\tif (!(this instanceof PromisePolyfill)) throw new Error(\"Promise must be called with `new`\")\n\tif (typeof executor !== \"function\") throw new TypeError(\"executor must be a function\")\n\n\tvar self = this, resolvers = [], rejectors = [], resolveCurrent = handler(resolvers, true), rejectCurrent = handler(rejectors, false)\n\tvar instance = self._instance = {resolvers: resolvers, rejectors: rejectors}\n\tvar callAsync = typeof setImmediate === \"function\" ? setImmediate : setTimeout\n\tfunction handler(list, shouldAbsorb) {\n\t\treturn function execute(value) {\n\t\t\tvar then\n\t\t\ttry {\n\t\t\t\tif (shouldAbsorb && value != null && (typeof value === \"object\" || typeof value === \"function\") && typeof (then = value.then) === \"function\") {\n\t\t\t\t\tif (value === self) throw new TypeError(\"Promise can't be resolved w/ itself\")\n\t\t\t\t\texecuteOnce(then.bind(value))\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tcallAsync(function() {\n\t\t\t\t\t\tif (!shouldAbsorb && list.length === 0) console.error(\"Possible unhandled promise rejection:\", value)\n\t\t\t\t\t\tfor (var i = 0; i < list.length; i++) list[i](value)\n\t\t\t\t\t\tresolvers.length = 0, rejectors.length = 0\n\t\t\t\t\t\tinstance.state = shouldAbsorb\n\t\t\t\t\t\tinstance.retry = function() {execute(value)}\n\t\t\t\t\t})\n\t\t\t\t}\n\t\t\t}\n\t\t\tcatch (e) {\n\t\t\t\trejectCurrent(e)\n\t\t\t}\n\t\t}\n\t}\n\tfunction executeOnce(then) {\n\t\tvar runs = 0\n\t\tfunction run(fn) {\n\t\t\treturn function(value) {\n\t\t\t\tif (runs++ > 0) return\n\t\t\t\tfn(value)\n\t\t\t}\n\t\t}\n\t\tvar onerror = run(rejectCurrent)\n\t\ttry {then(run(resolveCurrent), onerror)} catch (e) {onerror(e)}\n\t}\n\n\texecuteOnce(executor)\n}\nPromisePolyfill.prototype.then = function(onFulfilled, onRejection) {\n\tvar self = this, instance = self._instance\n\tfunction handle(callback, list, next, state) {\n\t\tlist.push(function(value) {\n\t\t\tif (typeof callback !== \"function\") next(value)\n\t\t\telse try {resolveNext(callback(value))} catch (e) {if (rejectNext) rejectNext(e)}\n\t\t})\n\t\tif (typeof instance.retry === \"function\" && state === instance.state) instance.retry()\n\t}\n\tvar resolveNext, rejectNext\n\tvar promise = new PromisePolyfill(function(resolve, reject) {resolveNext = resolve, rejectNext = reject})\n\thandle(onFulfilled, instance.resolvers, resolveNext, true), handle(onRejection, instance.rejectors, rejectNext, false)\n\treturn promise\n}\nPromisePolyfill.prototype.catch = function(onRejection) {\n\treturn this.then(null, onRejection)\n}\nPromisePolyfill.prototype.finally = function(callback) {\n\treturn this.then(\n\t\tfunction(value) {\n\t\t\treturn PromisePolyfill.resolve(callback()).then(function() {\n\t\t\t\treturn value\n\t\t\t})\n\t\t},\n\t\tfunction(reason) {\n\t\t\treturn PromisePolyfill.resolve(callback()).then(function() {\n\t\t\t\treturn PromisePolyfill.reject(reason);\n\t\t\t})\n\t\t}\n\t)\n}\nPromisePolyfill.resolve = function(value) {\n\tif (value instanceof PromisePolyfill) return value\n\treturn new PromisePolyfill(function(resolve) {resolve(value)})\n}\nPromisePolyfill.reject = function(value) {\n\treturn new PromisePolyfill(function(resolve, reject) {reject(value)})\n}\nPromisePolyfill.all = function(list) {\n\treturn new PromisePolyfill(function(resolve, reject) {\n\t\tvar total = list.length, count = 0, values = []\n\t\tif (list.length === 0) resolve([])\n\t\telse for (var i = 0; i < list.length; i++) {\n\t\t\t(function(i) {\n\t\t\t\tfunction consume(value) {\n\t\t\t\t\tcount++\n\t\t\t\t\tvalues[i] = value\n\t\t\t\t\tif (count === total) resolve(values)\n\t\t\t\t}\n\t\t\t\tif (list[i] != null && (typeof list[i] === \"object\" || typeof list[i] === \"function\") && typeof list[i].then === \"function\") {\n\t\t\t\t\tlist[i].then(consume, reject)\n\t\t\t\t}\n\t\t\t\telse consume(list[i])\n\t\t\t})(i)\n\t\t}\n\t})\n}\nPromisePolyfill.race = function(list) {\n\treturn new PromisePolyfill(function(resolve, reject) {\n\t\tfor (var i = 0; i < list.length; i++) {\n\t\t\tlist[i].then(resolve, reject)\n\t\t}\n\t})\n}\n\nmodule.exports = PromisePolyfill\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/mithril/promise/polyfill.js?");

/***/ }),

/***/ "./node_modules/mithril/promise/promise.js":
/*!*************************************************!*\
  !*** ./node_modules/mithril/promise/promise.js ***!
  \*************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__, __webpack_require__.g, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 11:1-15 */
/*! CommonJS bailout: module.exports is used directly at 18:1-15 */
/*! CommonJS bailout: module.exports is used directly at 20:1-15 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar PromisePolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/mithril/promise/polyfill.js\")\n\nif (typeof window !== \"undefined\") {\n\tif (typeof window.Promise === \"undefined\") {\n\t\twindow.Promise = PromisePolyfill\n\t} else if (!window.Promise.prototype.finally) {\n\t\twindow.Promise.prototype.finally = PromisePolyfill.prototype.finally\n\t}\n\tmodule.exports = window.Promise\n} else if (typeof __webpack_require__.g !== \"undefined\") {\n\tif (typeof __webpack_require__.g.Promise === \"undefined\") {\n\t\t__webpack_require__.g.Promise = PromisePolyfill\n\t} else if (!__webpack_require__.g.Promise.prototype.finally) {\n\t\t__webpack_require__.g.Promise.prototype.finally = PromisePolyfill.prototype.finally\n\t}\n\tmodule.exports = __webpack_require__.g.Promise\n} else {\n\tmodule.exports = PromisePolyfill\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/mithril/promise/promise.js?");

/***/ }),

/***/ "./node_modules/mithril/querystring/build.js":
/*!***************************************************!*\
  !*** ./node_modules/mithril/querystring/build.js ***!
  \***************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 3:0-14 */
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function(object) {\n\tif (Object.prototype.toString.call(object) !== \"[object Object]\") return \"\"\n\n\tvar args = []\n\tfor (var key in object) {\n\t\tdestructure(key, object[key])\n\t}\n\n\treturn args.join(\"&\")\n\n\tfunction destructure(key, value) {\n\t\tif (Array.isArray(value)) {\n\t\t\tfor (var i = 0; i < value.length; i++) {\n\t\t\t\tdestructure(key + \"[\" + i + \"]\", value[i])\n\t\t\t}\n\t\t}\n\t\telse if (Object.prototype.toString.call(value) === \"[object Object]\") {\n\t\t\tfor (var i in value) {\n\t\t\t\tdestructure(key + \"[\" + i + \"]\", value[i])\n\t\t\t}\n\t\t}\n\t\telse args.push(encodeURIComponent(key) + (value != null && value !== \"\" ? \"=\" + encodeURIComponent(value) : \"\"))\n\t}\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/mithril/querystring/build.js?");

/***/ }),

/***/ "./node_modules/mithril/querystring/parse.js":
/*!***************************************************!*\
  !*** ./node_modules/mithril/querystring/parse.js ***!
  \***************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 3:0-14 */
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function(string) {\n\tif (string === \"\" || string == null) return {}\n\tif (string.charAt(0) === \"?\") string = string.slice(1)\n\n\tvar entries = string.split(\"&\"), counters = {}, data = {}\n\tfor (var i = 0; i < entries.length; i++) {\n\t\tvar entry = entries[i].split(\"=\")\n\t\tvar key = decodeURIComponent(entry[0])\n\t\tvar value = entry.length === 2 ? decodeURIComponent(entry[1]) : \"\"\n\n\t\tif (value === \"true\") value = true\n\t\telse if (value === \"false\") value = false\n\n\t\tvar levels = key.split(/\\]\\[?|\\[/)\n\t\tvar cursor = data\n\t\tif (key.indexOf(\"[\") > -1) levels.pop()\n\t\tfor (var j = 0; j < levels.length; j++) {\n\t\t\tvar level = levels[j], nextLevel = levels[j + 1]\n\t\t\tvar isNumber = nextLevel == \"\" || !isNaN(parseInt(nextLevel, 10))\n\t\t\tif (level === \"\") {\n\t\t\t\tvar key = levels.slice(0, j).join()\n\t\t\t\tif (counters[key] == null) {\n\t\t\t\t\tcounters[key] = Array.isArray(cursor) ? cursor.length : 0\n\t\t\t\t}\n\t\t\t\tlevel = counters[key]++\n\t\t\t}\n\t\t\t// Disallow direct prototype pollution\n\t\t\telse if (level === \"__proto__\") break\n\t\t\tif (j === levels.length - 1) cursor[level] = value\n\t\t\telse {\n\t\t\t\t// Read own properties exclusively to disallow indirect\n\t\t\t\t// prototype pollution\n\t\t\t\tvar desc = Object.getOwnPropertyDescriptor(cursor, level)\n\t\t\t\tif (desc != null) desc = desc.value\n\t\t\t\tif (desc == null) cursor[level] = desc = isNumber ? [] : {}\n\t\t\t\tcursor = desc\n\t\t\t}\n\t\t}\n\t}\n\treturn data\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/mithril/querystring/parse.js?");

/***/ }),

/***/ "./node_modules/mithril/render.js":
/*!****************************************!*\
  !*** ./node_modules/mithril/render.js ***!
  \****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 3:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./render/render */ \"./node_modules/mithril/render/render.js\")(window)\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/mithril/render.js?");

/***/ }),

/***/ "./node_modules/mithril/render/fragment.js":
/*!*************************************************!*\
  !*** ./node_modules/mithril/render/fragment.js ***!
  \*************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 6:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar Vnode = __webpack_require__(/*! ../render/vnode */ \"./node_modules/mithril/render/vnode.js\")\nvar hyperscriptVnode = __webpack_require__(/*! ./hyperscriptVnode */ \"./node_modules/mithril/render/hyperscriptVnode.js\")\n\nmodule.exports = function() {\n\tvar vnode = hyperscriptVnode.apply(0, arguments)\n\n\tvnode.tag = \"[\"\n\tvnode.children = Vnode.normalizeChildren(vnode.children)\n\treturn vnode\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/mithril/render/fragment.js?");

/***/ }),

/***/ "./node_modules/mithril/render/hyperscript.js":
/*!****************************************************!*\
  !*** ./node_modules/mithril/render/hyperscript.js ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 101:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar Vnode = __webpack_require__(/*! ../render/vnode */ \"./node_modules/mithril/render/vnode.js\")\nvar hyperscriptVnode = __webpack_require__(/*! ./hyperscriptVnode */ \"./node_modules/mithril/render/hyperscriptVnode.js\")\n\nvar selectorParser = /(?:(^|#|\\.)([^#\\.\\[\\]]+))|(\\[(.+?)(?:\\s*=\\s*(\"|'|)((?:\\\\[\"'\\]]|.)*?)\\5)?\\])/g\nvar selectorCache = {}\nvar hasOwn = {}.hasOwnProperty\n\nfunction isEmpty(object) {\n\tfor (var key in object) if (hasOwn.call(object, key)) return false\n\treturn true\n}\n\nfunction compileSelector(selector) {\n\tvar match, tag = \"div\", classes = [], attrs = {}\n\twhile (match = selectorParser.exec(selector)) {\n\t\tvar type = match[1], value = match[2]\n\t\tif (type === \"\" && value !== \"\") tag = value\n\t\telse if (type === \"#\") attrs.id = value\n\t\telse if (type === \".\") classes.push(value)\n\t\telse if (match[3][0] === \"[\") {\n\t\t\tvar attrValue = match[6]\n\t\t\tif (attrValue) attrValue = attrValue.replace(/\\\\([\"'])/g, \"$1\").replace(/\\\\\\\\/g, \"\\\\\")\n\t\t\tif (match[4] === \"class\") classes.push(attrValue)\n\t\t\telse attrs[match[4]] = attrValue === \"\" ? attrValue : attrValue || true\n\t\t}\n\t}\n\tif (classes.length > 0) attrs.className = classes.join(\" \")\n\treturn selectorCache[selector] = {tag: tag, attrs: attrs}\n}\n\nfunction execSelector(state, vnode) {\n\tvar attrs = vnode.attrs\n\tvar children = Vnode.normalizeChildren(vnode.children)\n\tvar hasClass = hasOwn.call(attrs, \"class\")\n\tvar className = hasClass ? attrs.class : attrs.className\n\n\tvnode.tag = state.tag\n\tvnode.attrs = null\n\tvnode.children = undefined\n\n\tif (!isEmpty(state.attrs) && !isEmpty(attrs)) {\n\t\tvar newAttrs = {}\n\n\t\tfor (var key in attrs) {\n\t\t\tif (hasOwn.call(attrs, key)) newAttrs[key] = attrs[key]\n\t\t}\n\n\t\tattrs = newAttrs\n\t}\n\n\tfor (var key in state.attrs) {\n\t\tif (hasOwn.call(state.attrs, key) && key !== \"className\" && !hasOwn.call(attrs, key)){\n\t\t\tattrs[key] = state.attrs[key]\n\t\t}\n\t}\n\tif (className != null || state.attrs.className != null) attrs.className =\n\t\tclassName != null\n\t\t\t? state.attrs.className != null\n\t\t\t\t? String(state.attrs.className) + \" \" + String(className)\n\t\t\t\t: className\n\t\t\t: state.attrs.className != null\n\t\t\t\t? state.attrs.className\n\t\t\t\t: null\n\n\tif (hasClass) attrs.class = null\n\n\tfor (var key in attrs) {\n\t\tif (hasOwn.call(attrs, key) && key !== \"key\") {\n\t\t\tvnode.attrs = attrs\n\t\t\tbreak\n\t\t}\n\t}\n\n\tif (Array.isArray(children) && children.length === 1 && children[0] != null && children[0].tag === \"#\") {\n\t\tvnode.text = children[0].children\n\t} else {\n\t\tvnode.children = children\n\t}\n\n\treturn vnode\n}\n\nfunction hyperscript(selector) {\n\tif (selector == null || typeof selector !== \"string\" && typeof selector !== \"function\" && typeof selector.view !== \"function\") {\n\t\tthrow Error(\"The selector must be either a string or a component.\");\n\t}\n\n\tvar vnode = hyperscriptVnode.apply(1, arguments)\n\n\tif (typeof selector === \"string\") {\n\t\tvnode.children = Vnode.normalizeChildren(vnode.children)\n\t\tif (selector !== \"[\") return execSelector(selectorCache[selector] || compileSelector(selector), vnode)\n\t}\n\n\tvnode.tag = selector\n\treturn vnode\n}\n\nmodule.exports = hyperscript\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/mithril/render/hyperscript.js?");

/***/ }),

/***/ "./node_modules/mithril/render/hyperscriptVnode.js":
/*!*********************************************************!*\
  !*** ./node_modules/mithril/render/hyperscriptVnode.js ***!
  \*********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 34:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar Vnode = __webpack_require__(/*! ../render/vnode */ \"./node_modules/mithril/render/vnode.js\")\n\n// Call via `hyperscriptVnode.apply(startOffset, arguments)`\n//\n// The reason I do it this way, forwarding the arguments and passing the start\n// offset in `this`, is so I don't have to create a temporary array in a\n// performance-critical path.\n//\n// In native ES6, I'd instead add a final `...args` parameter to the\n// `hyperscript` and `fragment` factories and define this as\n// `hyperscriptVnode(...args)`, since modern engines do optimize that away. But\n// ES5 (what Mithril requires thanks to IE support) doesn't give me that luxury,\n// and engines aren't nearly intelligent enough to do either of these:\n//\n// 1. Elide the allocation for `[].slice.call(arguments, 1)` when it's passed to\n//    another function only to be indexed.\n// 2. Elide an `arguments` allocation when it's passed to any function other\n//    than `Function.prototype.apply` or `Reflect.apply`.\n//\n// In ES6, it'd probably look closer to this (I'd need to profile it, though):\n// module.exports = function(attrs, ...children) {\n//     if (attrs == null || typeof attrs === \"object\" && attrs.tag == null && !Array.isArray(attrs)) {\n//         if (children.length === 1 && Array.isArray(children[0])) children = children[0]\n//     } else {\n//         children = children.length === 0 && Array.isArray(attrs) ? attrs : [attrs, ...children]\n//         attrs = undefined\n//     }\n//\n//     if (attrs == null) attrs = {}\n//     return Vnode(\"\", attrs.key, attrs, children)\n// }\nmodule.exports = function() {\n\tvar attrs = arguments[this], start = this + 1, children\n\n\tif (attrs == null) {\n\t\tattrs = {}\n\t} else if (typeof attrs !== \"object\" || attrs.tag != null || Array.isArray(attrs)) {\n\t\tattrs = {}\n\t\tstart = this\n\t}\n\n\tif (arguments.length === start + 1) {\n\t\tchildren = arguments[start]\n\t\tif (!Array.isArray(children)) children = [children]\n\t} else {\n\t\tchildren = []\n\t\twhile (start < arguments.length) children.push(arguments[start++])\n\t}\n\n\treturn Vnode(\"\", attrs.key, attrs, children)\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/mithril/render/hyperscriptVnode.js?");

/***/ }),

/***/ "./node_modules/mithril/render/render.js":
/*!***********************************************!*\
  !*** ./node_modules/mithril/render/render.js ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 5:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar Vnode = __webpack_require__(/*! ../render/vnode */ \"./node_modules/mithril/render/vnode.js\")\n\nmodule.exports = function($window) {\n\tvar $doc = $window && $window.document\n\tvar currentRedraw\n\n\tvar nameSpace = {\n\t\tsvg: \"http://www.w3.org/2000/svg\",\n\t\tmath: \"http://www.w3.org/1998/Math/MathML\"\n\t}\n\n\tfunction getNameSpace(vnode) {\n\t\treturn vnode.attrs && vnode.attrs.xmlns || nameSpace[vnode.tag]\n\t}\n\n\t//sanity check to discourage people from doing `vnode.state = ...`\n\tfunction checkState(vnode, original) {\n\t\tif (vnode.state !== original) throw new Error(\"`vnode.state` must not be modified\")\n\t}\n\n\t//Note: the hook is passed as the `this` argument to allow proxying the\n\t//arguments without requiring a full array allocation to do so. It also\n\t//takes advantage of the fact the current `vnode` is the first argument in\n\t//all lifecycle methods.\n\tfunction callHook(vnode) {\n\t\tvar original = vnode.state\n\t\ttry {\n\t\t\treturn this.apply(original, arguments)\n\t\t} finally {\n\t\t\tcheckState(vnode, original)\n\t\t}\n\t}\n\n\t// IE11 (at least) throws an UnspecifiedError when accessing document.activeElement when\n\t// inside an iframe. Catch and swallow this error, and heavy-handidly return null.\n\tfunction activeElement() {\n\t\ttry {\n\t\t\treturn $doc.activeElement\n\t\t} catch (e) {\n\t\t\treturn null\n\t\t}\n\t}\n\t//create\n\tfunction createNodes(parent, vnodes, start, end, hooks, nextSibling, ns) {\n\t\tfor (var i = start; i < end; i++) {\n\t\t\tvar vnode = vnodes[i]\n\t\t\tif (vnode != null) {\n\t\t\t\tcreateNode(parent, vnode, hooks, ns, nextSibling)\n\t\t\t}\n\t\t}\n\t}\n\tfunction createNode(parent, vnode, hooks, ns, nextSibling) {\n\t\tvar tag = vnode.tag\n\t\tif (typeof tag === \"string\") {\n\t\t\tvnode.state = {}\n\t\t\tif (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)\n\t\t\tswitch (tag) {\n\t\t\t\tcase \"#\": createText(parent, vnode, nextSibling); break\n\t\t\t\tcase \"<\": createHTML(parent, vnode, ns, nextSibling); break\n\t\t\t\tcase \"[\": createFragment(parent, vnode, hooks, ns, nextSibling); break\n\t\t\t\tdefault: createElement(parent, vnode, hooks, ns, nextSibling)\n\t\t\t}\n\t\t}\n\t\telse createComponent(parent, vnode, hooks, ns, nextSibling)\n\t}\n\tfunction createText(parent, vnode, nextSibling) {\n\t\tvnode.dom = $doc.createTextNode(vnode.children)\n\t\tinsertNode(parent, vnode.dom, nextSibling)\n\t}\n\tvar possibleParents = {caption: \"table\", thead: \"table\", tbody: \"table\", tfoot: \"table\", tr: \"tbody\", th: \"tr\", td: \"tr\", colgroup: \"table\", col: \"colgroup\"}\n\tfunction createHTML(parent, vnode, ns, nextSibling) {\n\t\tvar match = vnode.children.match(/^\\s*?<(\\w+)/im) || []\n\t\t// not using the proper parent makes the child element(s) vanish.\n\t\t//     var div = document.createElement(\"div\")\n\t\t//     div.innerHTML = \"<td>i</td><td>j</td>\"\n\t\t//     console.log(div.innerHTML)\n\t\t// --> \"ij\", no <td> in sight.\n\t\tvar temp = $doc.createElement(possibleParents[match[1]] || \"div\")\n\t\tif (ns === \"http://www.w3.org/2000/svg\") {\n\t\t\ttemp.innerHTML = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\">\" + vnode.children + \"</svg>\"\n\t\t\ttemp = temp.firstChild\n\t\t} else {\n\t\t\ttemp.innerHTML = vnode.children\n\t\t}\n\t\tvnode.dom = temp.firstChild\n\t\tvnode.domSize = temp.childNodes.length\n\t\t// Capture nodes to remove, so we don't confuse them.\n\t\tvnode.instance = []\n\t\tvar fragment = $doc.createDocumentFragment()\n\t\tvar child\n\t\twhile (child = temp.firstChild) {\n\t\t\tvnode.instance.push(child)\n\t\t\tfragment.appendChild(child)\n\t\t}\n\t\tinsertNode(parent, fragment, nextSibling)\n\t}\n\tfunction createFragment(parent, vnode, hooks, ns, nextSibling) {\n\t\tvar fragment = $doc.createDocumentFragment()\n\t\tif (vnode.children != null) {\n\t\t\tvar children = vnode.children\n\t\t\tcreateNodes(fragment, children, 0, children.length, hooks, null, ns)\n\t\t}\n\t\tvnode.dom = fragment.firstChild\n\t\tvnode.domSize = fragment.childNodes.length\n\t\tinsertNode(parent, fragment, nextSibling)\n\t}\n\tfunction createElement(parent, vnode, hooks, ns, nextSibling) {\n\t\tvar tag = vnode.tag\n\t\tvar attrs = vnode.attrs\n\t\tvar is = attrs && attrs.is\n\n\t\tns = getNameSpace(vnode) || ns\n\n\t\tvar element = ns ?\n\t\t\tis ? $doc.createElementNS(ns, tag, {is: is}) : $doc.createElementNS(ns, tag) :\n\t\t\tis ? $doc.createElement(tag, {is: is}) : $doc.createElement(tag)\n\t\tvnode.dom = element\n\n\t\tif (attrs != null) {\n\t\t\tsetAttrs(vnode, attrs, ns)\n\t\t}\n\n\t\tinsertNode(parent, element, nextSibling)\n\n\t\tif (!maybeSetContentEditable(vnode)) {\n\t\t\tif (vnode.text != null) {\n\t\t\t\tif (vnode.text !== \"\") element.textContent = vnode.text\n\t\t\t\telse vnode.children = [Vnode(\"#\", undefined, undefined, vnode.text, undefined, undefined)]\n\t\t\t}\n\t\t\tif (vnode.children != null) {\n\t\t\t\tvar children = vnode.children\n\t\t\t\tcreateNodes(element, children, 0, children.length, hooks, null, ns)\n\t\t\t\tif (vnode.tag === \"select\" && attrs != null) setLateSelectAttrs(vnode, attrs)\n\t\t\t}\n\t\t}\n\t}\n\tfunction initComponent(vnode, hooks) {\n\t\tvar sentinel\n\t\tif (typeof vnode.tag.view === \"function\") {\n\t\t\tvnode.state = Object.create(vnode.tag)\n\t\t\tsentinel = vnode.state.view\n\t\t\tif (sentinel.$$reentrantLock$$ != null) return\n\t\t\tsentinel.$$reentrantLock$$ = true\n\t\t} else {\n\t\t\tvnode.state = void 0\n\t\t\tsentinel = vnode.tag\n\t\t\tif (sentinel.$$reentrantLock$$ != null) return\n\t\t\tsentinel.$$reentrantLock$$ = true\n\t\t\tvnode.state = (vnode.tag.prototype != null && typeof vnode.tag.prototype.view === \"function\") ? new vnode.tag(vnode) : vnode.tag(vnode)\n\t\t}\n\t\tinitLifecycle(vnode.state, vnode, hooks)\n\t\tif (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)\n\t\tvnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode))\n\t\tif (vnode.instance === vnode) throw Error(\"A view cannot return the vnode it received as argument\")\n\t\tsentinel.$$reentrantLock$$ = null\n\t}\n\tfunction createComponent(parent, vnode, hooks, ns, nextSibling) {\n\t\tinitComponent(vnode, hooks)\n\t\tif (vnode.instance != null) {\n\t\t\tcreateNode(parent, vnode.instance, hooks, ns, nextSibling)\n\t\t\tvnode.dom = vnode.instance.dom\n\t\t\tvnode.domSize = vnode.dom != null ? vnode.instance.domSize : 0\n\t\t}\n\t\telse {\n\t\t\tvnode.domSize = 0\n\t\t}\n\t}\n\n\t//update\n\t/**\n\t * @param {Element|Fragment} parent - the parent element\n\t * @param {Vnode[] | null} old - the list of vnodes of the last `render()` call for\n\t *                               this part of the tree\n\t * @param {Vnode[] | null} vnodes - as above, but for the current `render()` call.\n\t * @param {Function[]} hooks - an accumulator of post-render hooks (oncreate/onupdate)\n\t * @param {Element | null} nextSibling - the next DOM node if we're dealing with a\n\t *                                       fragment that is not the last item in its\n\t *                                       parent\n\t * @param {'svg' | 'math' | String | null} ns) - the current XML namespace, if any\n\t * @returns void\n\t */\n\t// This function diffs and patches lists of vnodes, both keyed and unkeyed.\n\t//\n\t// We will:\n\t//\n\t// 1. describe its general structure\n\t// 2. focus on the diff algorithm optimizations\n\t// 3. discuss DOM node operations.\n\n\t// ## Overview:\n\t//\n\t// The updateNodes() function:\n\t// - deals with trivial cases\n\t// - determines whether the lists are keyed or unkeyed based on the first non-null node\n\t//   of each list.\n\t// - diffs them and patches the DOM if needed (that's the brunt of the code)\n\t// - manages the leftovers: after diffing, are there:\n\t//   - old nodes left to remove?\n\t// \t - new nodes to insert?\n\t// \t deal with them!\n\t//\n\t// The lists are only iterated over once, with an exception for the nodes in `old` that\n\t// are visited in the fourth part of the diff and in the `removeNodes` loop.\n\n\t// ## Diffing\n\t//\n\t// Reading https://github.com/localvoid/ivi/blob/ddc09d06abaef45248e6133f7040d00d3c6be853/packages/ivi/src/vdom/implementation.ts#L617-L837\n\t// may be good for context on longest increasing subsequence-based logic for moving nodes.\n\t//\n\t// In order to diff keyed lists, one has to\n\t//\n\t// 1) match nodes in both lists, per key, and update them accordingly\n\t// 2) create the nodes present in the new list, but absent in the old one\n\t// 3) remove the nodes present in the old list, but absent in the new one\n\t// 4) figure out what nodes in 1) to move in order to minimize the DOM operations.\n\t//\n\t// To achieve 1) one can create a dictionary of keys => index (for the old list), then iterate\n\t// over the new list and for each new vnode, find the corresponding vnode in the old list using\n\t// the map.\n\t// 2) is achieved in the same step: if a new node has no corresponding entry in the map, it is new\n\t// and must be created.\n\t// For the removals, we actually remove the nodes that have been updated from the old list.\n\t// The nodes that remain in that list after 1) and 2) have been performed can be safely removed.\n\t// The fourth step is a bit more complex and relies on the longest increasing subsequence (LIS)\n\t// algorithm.\n\t//\n\t// the longest increasing subsequence is the list of nodes that can remain in place. Imagine going\n\t// from `1,2,3,4,5` to `4,5,1,2,3` where the numbers are not necessarily the keys, but the indices\n\t// corresponding to the keyed nodes in the old list (keyed nodes `e,d,c,b,a` => `b,a,e,d,c` would\n\t//  match the above lists, for example).\n\t//\n\t// In there are two increasing subsequences: `4,5` and `1,2,3`, the latter being the longest. We\n\t// can update those nodes without moving them, and only call `insertNode` on `4` and `5`.\n\t//\n\t// @localvoid adapted the algo to also support node deletions and insertions (the `lis` is actually\n\t// the longest increasing subsequence *of old nodes still present in the new list*).\n\t//\n\t// It is a general algorithm that is fireproof in all circumstances, but it requires the allocation\n\t// and the construction of a `key => oldIndex` map, and three arrays (one with `newIndex => oldIndex`,\n\t// the `LIS` and a temporary one to create the LIS).\n\t//\n\t// So we cheat where we can: if the tails of the lists are identical, they are guaranteed to be part of\n\t// the LIS and can be updated without moving them.\n\t//\n\t// If two nodes are swapped, they are guaranteed not to be part of the LIS, and must be moved (with\n\t// the exception of the last node if the list is fully reversed).\n\t//\n\t// ## Finding the next sibling.\n\t//\n\t// `updateNode()` and `createNode()` expect a nextSibling parameter to perform DOM operations.\n\t// When the list is being traversed top-down, at any index, the DOM nodes up to the previous\n\t// vnode reflect the content of the new list, whereas the rest of the DOM nodes reflect the old\n\t// list. The next sibling must be looked for in the old list using `getNextSibling(... oldStart + 1 ...)`.\n\t//\n\t// In the other scenarios (swaps, upwards traversal, map-based diff),\n\t// the new vnodes list is traversed upwards. The DOM nodes at the bottom of the list reflect the\n\t// bottom part of the new vnodes list, and we can use the `v.dom`  value of the previous node\n\t// as the next sibling (cached in the `nextSibling` variable).\n\n\n\t// ## DOM node moves\n\t//\n\t// In most scenarios `updateNode()` and `createNode()` perform the DOM operations. However,\n\t// this is not the case if the node moved (second and fourth part of the diff algo). We move\n\t// the old DOM nodes before updateNode runs because it enables us to use the cached `nextSibling`\n\t// variable rather than fetching it using `getNextSibling()`.\n\t//\n\t// The fourth part of the diff currently inserts nodes unconditionally, leading to issues\n\t// like #1791 and #1999. We need to be smarter about those situations where adjascent old\n\t// nodes remain together in the new list in a way that isn't covered by parts one and\n\t// three of the diff algo.\n\n\tfunction updateNodes(parent, old, vnodes, hooks, nextSibling, ns) {\n\t\tif (old === vnodes || old == null && vnodes == null) return\n\t\telse if (old == null || old.length === 0) createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, ns)\n\t\telse if (vnodes == null || vnodes.length === 0) removeNodes(parent, old, 0, old.length)\n\t\telse {\n\t\t\tvar isOldKeyed = old[0] != null && old[0].key != null\n\t\t\tvar isKeyed = vnodes[0] != null && vnodes[0].key != null\n\t\t\tvar start = 0, oldStart = 0\n\t\t\tif (!isOldKeyed) while (oldStart < old.length && old[oldStart] == null) oldStart++\n\t\t\tif (!isKeyed) while (start < vnodes.length && vnodes[start] == null) start++\n\t\t\tif (isKeyed === null && isOldKeyed == null) return // both lists are full of nulls\n\t\t\tif (isOldKeyed !== isKeyed) {\n\t\t\t\tremoveNodes(parent, old, oldStart, old.length)\n\t\t\t\tcreateNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns)\n\t\t\t} else if (!isKeyed) {\n\t\t\t\t// Don't index past the end of either list (causes deopts).\n\t\t\t\tvar commonLength = old.length < vnodes.length ? old.length : vnodes.length\n\t\t\t\t// Rewind if necessary to the first non-null index on either side.\n\t\t\t\t// We could alternatively either explicitly create or remove nodes when `start !== oldStart`\n\t\t\t\t// but that would be optimizing for sparse lists which are more rare than dense ones.\n\t\t\t\tstart = start < oldStart ? start : oldStart\n\t\t\t\tfor (; start < commonLength; start++) {\n\t\t\t\t\to = old[start]\n\t\t\t\t\tv = vnodes[start]\n\t\t\t\t\tif (o === v || o == null && v == null) continue\n\t\t\t\t\telse if (o == null) createNode(parent, v, hooks, ns, getNextSibling(old, start + 1, nextSibling))\n\t\t\t\t\telse if (v == null) removeNode(parent, o)\n\t\t\t\t\telse updateNode(parent, o, v, hooks, getNextSibling(old, start + 1, nextSibling), ns)\n\t\t\t\t}\n\t\t\t\tif (old.length > commonLength) removeNodes(parent, old, start, old.length)\n\t\t\t\tif (vnodes.length > commonLength) createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns)\n\t\t\t} else {\n\t\t\t\t// keyed diff\n\t\t\t\tvar oldEnd = old.length - 1, end = vnodes.length - 1, map, o, v, oe, ve, topSibling\n\n\t\t\t\t// bottom-up\n\t\t\t\twhile (oldEnd >= oldStart && end >= start) {\n\t\t\t\t\toe = old[oldEnd]\n\t\t\t\t\tve = vnodes[end]\n\t\t\t\t\tif (oe.key !== ve.key) break\n\t\t\t\t\tif (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)\n\t\t\t\t\tif (ve.dom != null) nextSibling = ve.dom\n\t\t\t\t\toldEnd--, end--\n\t\t\t\t}\n\t\t\t\t// top-down\n\t\t\t\twhile (oldEnd >= oldStart && end >= start) {\n\t\t\t\t\to = old[oldStart]\n\t\t\t\t\tv = vnodes[start]\n\t\t\t\t\tif (o.key !== v.key) break\n\t\t\t\t\toldStart++, start++\n\t\t\t\t\tif (o !== v) updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, nextSibling), ns)\n\t\t\t\t}\n\t\t\t\t// swaps and list reversals\n\t\t\t\twhile (oldEnd >= oldStart && end >= start) {\n\t\t\t\t\tif (start === end) break\n\t\t\t\t\tif (o.key !== ve.key || oe.key !== v.key) break\n\t\t\t\t\ttopSibling = getNextSibling(old, oldStart, nextSibling)\n\t\t\t\t\tmoveNodes(parent, oe, topSibling)\n\t\t\t\t\tif (oe !== v) updateNode(parent, oe, v, hooks, topSibling, ns)\n\t\t\t\t\tif (++start <= --end) moveNodes(parent, o, nextSibling)\n\t\t\t\t\tif (o !== ve) updateNode(parent, o, ve, hooks, nextSibling, ns)\n\t\t\t\t\tif (ve.dom != null) nextSibling = ve.dom\n\t\t\t\t\toldStart++; oldEnd--\n\t\t\t\t\toe = old[oldEnd]\n\t\t\t\t\tve = vnodes[end]\n\t\t\t\t\to = old[oldStart]\n\t\t\t\t\tv = vnodes[start]\n\t\t\t\t}\n\t\t\t\t// bottom up once again\n\t\t\t\twhile (oldEnd >= oldStart && end >= start) {\n\t\t\t\t\tif (oe.key !== ve.key) break\n\t\t\t\t\tif (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)\n\t\t\t\t\tif (ve.dom != null) nextSibling = ve.dom\n\t\t\t\t\toldEnd--, end--\n\t\t\t\t\toe = old[oldEnd]\n\t\t\t\t\tve = vnodes[end]\n\t\t\t\t}\n\t\t\t\tif (start > end) removeNodes(parent, old, oldStart, oldEnd + 1)\n\t\t\t\telse if (oldStart > oldEnd) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)\n\t\t\t\telse {\n\t\t\t\t\t// inspired by ivi https://github.com/ivijs/ivi/ by Boris Kaul\n\t\t\t\t\tvar originalNextSibling = nextSibling, vnodesLength = end - start + 1, oldIndices = new Array(vnodesLength), li=0, i=0, pos = 2147483647, matched = 0, map, lisIndices\n\t\t\t\t\tfor (i = 0; i < vnodesLength; i++) oldIndices[i] = -1\n\t\t\t\t\tfor (i = end; i >= start; i--) {\n\t\t\t\t\t\tif (map == null) map = getKeyMap(old, oldStart, oldEnd + 1)\n\t\t\t\t\t\tve = vnodes[i]\n\t\t\t\t\t\tvar oldIndex = map[ve.key]\n\t\t\t\t\t\tif (oldIndex != null) {\n\t\t\t\t\t\t\tpos = (oldIndex < pos) ? oldIndex : -1 // becomes -1 if nodes were re-ordered\n\t\t\t\t\t\t\toldIndices[i-start] = oldIndex\n\t\t\t\t\t\t\toe = old[oldIndex]\n\t\t\t\t\t\t\told[oldIndex] = null\n\t\t\t\t\t\t\tif (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)\n\t\t\t\t\t\t\tif (ve.dom != null) nextSibling = ve.dom\n\t\t\t\t\t\t\tmatched++\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tnextSibling = originalNextSibling\n\t\t\t\t\tif (matched !== oldEnd - oldStart + 1) removeNodes(parent, old, oldStart, oldEnd + 1)\n\t\t\t\t\tif (matched === 0) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)\n\t\t\t\t\telse {\n\t\t\t\t\t\tif (pos === -1) {\n\t\t\t\t\t\t\t// the indices of the indices of the items that are part of the\n\t\t\t\t\t\t\t// longest increasing subsequence in the oldIndices list\n\t\t\t\t\t\t\tlisIndices = makeLisIndices(oldIndices)\n\t\t\t\t\t\t\tli = lisIndices.length - 1\n\t\t\t\t\t\t\tfor (i = end; i >= start; i--) {\n\t\t\t\t\t\t\t\tv = vnodes[i]\n\t\t\t\t\t\t\t\tif (oldIndices[i-start] === -1) createNode(parent, v, hooks, ns, nextSibling)\n\t\t\t\t\t\t\t\telse {\n\t\t\t\t\t\t\t\t\tif (lisIndices[li] === i - start) li--\n\t\t\t\t\t\t\t\t\telse moveNodes(parent, v, nextSibling)\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tif (v.dom != null) nextSibling = vnodes[i].dom\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tfor (i = end; i >= start; i--) {\n\t\t\t\t\t\t\t\tv = vnodes[i]\n\t\t\t\t\t\t\t\tif (oldIndices[i-start] === -1) createNode(parent, v, hooks, ns, nextSibling)\n\t\t\t\t\t\t\t\tif (v.dom != null) nextSibling = vnodes[i].dom\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\tfunction updateNode(parent, old, vnode, hooks, nextSibling, ns) {\n\t\tvar oldTag = old.tag, tag = vnode.tag\n\t\tif (oldTag === tag) {\n\t\t\tvnode.state = old.state\n\t\t\tvnode.events = old.events\n\t\t\tif (shouldNotUpdate(vnode, old)) return\n\t\t\tif (typeof oldTag === \"string\") {\n\t\t\t\tif (vnode.attrs != null) {\n\t\t\t\t\tupdateLifecycle(vnode.attrs, vnode, hooks)\n\t\t\t\t}\n\t\t\t\tswitch (oldTag) {\n\t\t\t\t\tcase \"#\": updateText(old, vnode); break\n\t\t\t\t\tcase \"<\": updateHTML(parent, old, vnode, ns, nextSibling); break\n\t\t\t\t\tcase \"[\": updateFragment(parent, old, vnode, hooks, nextSibling, ns); break\n\t\t\t\t\tdefault: updateElement(old, vnode, hooks, ns)\n\t\t\t\t}\n\t\t\t}\n\t\t\telse updateComponent(parent, old, vnode, hooks, nextSibling, ns)\n\t\t}\n\t\telse {\n\t\t\tremoveNode(parent, old)\n\t\t\tcreateNode(parent, vnode, hooks, ns, nextSibling)\n\t\t}\n\t}\n\tfunction updateText(old, vnode) {\n\t\tif (old.children.toString() !== vnode.children.toString()) {\n\t\t\told.dom.nodeValue = vnode.children\n\t\t}\n\t\tvnode.dom = old.dom\n\t}\n\tfunction updateHTML(parent, old, vnode, ns, nextSibling) {\n\t\tif (old.children !== vnode.children) {\n\t\t\tremoveHTML(parent, old)\n\t\t\tcreateHTML(parent, vnode, ns, nextSibling)\n\t\t}\n\t\telse {\n\t\t\tvnode.dom = old.dom\n\t\t\tvnode.domSize = old.domSize\n\t\t\tvnode.instance = old.instance\n\t\t}\n\t}\n\tfunction updateFragment(parent, old, vnode, hooks, nextSibling, ns) {\n\t\tupdateNodes(parent, old.children, vnode.children, hooks, nextSibling, ns)\n\t\tvar domSize = 0, children = vnode.children\n\t\tvnode.dom = null\n\t\tif (children != null) {\n\t\t\tfor (var i = 0; i < children.length; i++) {\n\t\t\t\tvar child = children[i]\n\t\t\t\tif (child != null && child.dom != null) {\n\t\t\t\t\tif (vnode.dom == null) vnode.dom = child.dom\n\t\t\t\t\tdomSize += child.domSize || 1\n\t\t\t\t}\n\t\t\t}\n\t\t\tif (domSize !== 1) vnode.domSize = domSize\n\t\t}\n\t}\n\tfunction updateElement(old, vnode, hooks, ns) {\n\t\tvar element = vnode.dom = old.dom\n\t\tns = getNameSpace(vnode) || ns\n\n\t\tif (vnode.tag === \"textarea\") {\n\t\t\tif (vnode.attrs == null) vnode.attrs = {}\n\t\t\tif (vnode.text != null) {\n\t\t\t\tvnode.attrs.value = vnode.text //FIXME handle multiple children\n\t\t\t\tvnode.text = undefined\n\t\t\t}\n\t\t}\n\t\tupdateAttrs(vnode, old.attrs, vnode.attrs, ns)\n\t\tif (!maybeSetContentEditable(vnode)) {\n\t\t\tif (old.text != null && vnode.text != null && vnode.text !== \"\") {\n\t\t\t\tif (old.text.toString() !== vnode.text.toString()) old.dom.firstChild.nodeValue = vnode.text\n\t\t\t}\n\t\t\telse {\n\t\t\t\tif (old.text != null) old.children = [Vnode(\"#\", undefined, undefined, old.text, undefined, old.dom.firstChild)]\n\t\t\t\tif (vnode.text != null) vnode.children = [Vnode(\"#\", undefined, undefined, vnode.text, undefined, undefined)]\n\t\t\t\tupdateNodes(element, old.children, vnode.children, hooks, null, ns)\n\t\t\t}\n\t\t}\n\t}\n\tfunction updateComponent(parent, old, vnode, hooks, nextSibling, ns) {\n\t\tvnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode))\n\t\tif (vnode.instance === vnode) throw Error(\"A view cannot return the vnode it received as argument\")\n\t\tupdateLifecycle(vnode.state, vnode, hooks)\n\t\tif (vnode.attrs != null) updateLifecycle(vnode.attrs, vnode, hooks)\n\t\tif (vnode.instance != null) {\n\t\t\tif (old.instance == null) createNode(parent, vnode.instance, hooks, ns, nextSibling)\n\t\t\telse updateNode(parent, old.instance, vnode.instance, hooks, nextSibling, ns)\n\t\t\tvnode.dom = vnode.instance.dom\n\t\t\tvnode.domSize = vnode.instance.domSize\n\t\t}\n\t\telse if (old.instance != null) {\n\t\t\tremoveNode(parent, old.instance)\n\t\t\tvnode.dom = undefined\n\t\t\tvnode.domSize = 0\n\t\t}\n\t\telse {\n\t\t\tvnode.dom = old.dom\n\t\t\tvnode.domSize = old.domSize\n\t\t}\n\t}\n\tfunction getKeyMap(vnodes, start, end) {\n\t\tvar map = Object.create(null)\n\t\tfor (; start < end; start++) {\n\t\t\tvar vnode = vnodes[start]\n\t\t\tif (vnode != null) {\n\t\t\t\tvar key = vnode.key\n\t\t\t\tif (key != null) map[key] = start\n\t\t\t}\n\t\t}\n\t\treturn map\n\t}\n\t// Lifted from ivi https://github.com/ivijs/ivi/\n\t// takes a list of unique numbers (-1 is special and can\n\t// occur multiple times) and returns an array with the indices\n\t// of the items that are part of the longest increasing\n\t// subsequece\n\tvar lisTemp = []\n\tfunction makeLisIndices(a) {\n\t\tvar result = [0]\n\t\tvar u = 0, v = 0, i = 0\n\t\tvar il = lisTemp.length = a.length\n\t\tfor (var i = 0; i < il; i++) lisTemp[i] = a[i]\n\t\tfor (var i = 0; i < il; ++i) {\n\t\t\tif (a[i] === -1) continue\n\t\t\tvar j = result[result.length - 1]\n\t\t\tif (a[j] < a[i]) {\n\t\t\t\tlisTemp[i] = j\n\t\t\t\tresult.push(i)\n\t\t\t\tcontinue\n\t\t\t}\n\t\t\tu = 0\n\t\t\tv = result.length - 1\n\t\t\twhile (u < v) {\n\t\t\t\t// Fast integer average without overflow.\n\t\t\t\t// eslint-disable-next-line no-bitwise\n\t\t\t\tvar c = (u >>> 1) + (v >>> 1) + (u & v & 1)\n\t\t\t\tif (a[result[c]] < a[i]) {\n\t\t\t\t\tu = c + 1\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tv = c\n\t\t\t\t}\n\t\t\t}\n\t\t\tif (a[i] < a[result[u]]) {\n\t\t\t\tif (u > 0) lisTemp[i] = result[u - 1]\n\t\t\t\tresult[u] = i\n\t\t\t}\n\t\t}\n\t\tu = result.length\n\t\tv = result[u - 1]\n\t\twhile (u-- > 0) {\n\t\t\tresult[u] = v\n\t\t\tv = lisTemp[v]\n\t\t}\n\t\tlisTemp.length = 0\n\t\treturn result\n\t}\n\n\tfunction getNextSibling(vnodes, i, nextSibling) {\n\t\tfor (; i < vnodes.length; i++) {\n\t\t\tif (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom\n\t\t}\n\t\treturn nextSibling\n\t}\n\n\t// This covers a really specific edge case:\n\t// - Parent node is keyed and contains child\n\t// - Child is removed, returns unresolved promise in `onbeforeremove`\n\t// - Parent node is moved in keyed diff\n\t// - Remaining children still need moved appropriately\n\t//\n\t// Ideally, I'd track removed nodes as well, but that introduces a lot more\n\t// complexity and I'm not exactly interested in doing that.\n\tfunction moveNodes(parent, vnode, nextSibling) {\n\t\tvar frag = $doc.createDocumentFragment()\n\t\tmoveChildToFrag(parent, frag, vnode)\n\t\tinsertNode(parent, frag, nextSibling)\n\t}\n\tfunction moveChildToFrag(parent, frag, vnode) {\n\t\t// Dodge the recursion overhead in a few of the most common cases.\n\t\twhile (vnode.dom != null && vnode.dom.parentNode === parent) {\n\t\t\tif (typeof vnode.tag !== \"string\") {\n\t\t\t\tvnode = vnode.instance\n\t\t\t\tif (vnode != null) continue\n\t\t\t} else if (vnode.tag === \"<\") {\n\t\t\t\tfor (var i = 0; i < vnode.instance.length; i++) {\n\t\t\t\t\tfrag.appendChild(vnode.instance[i])\n\t\t\t\t}\n\t\t\t} else if (vnode.tag !== \"[\") {\n\t\t\t\t// Don't recurse for text nodes *or* elements, just fragments\n\t\t\t\tfrag.appendChild(vnode.dom)\n\t\t\t} else if (vnode.children.length === 1) {\n\t\t\t\tvnode = vnode.children[0]\n\t\t\t\tif (vnode != null) continue\n\t\t\t} else {\n\t\t\t\tfor (var i = 0; i < vnode.children.length; i++) {\n\t\t\t\t\tvar child = vnode.children[i]\n\t\t\t\t\tif (child != null) moveChildToFrag(parent, frag, child)\n\t\t\t\t}\n\t\t\t}\n\t\t\tbreak\n\t\t}\n\t}\n\n\tfunction insertNode(parent, dom, nextSibling) {\n\t\tif (nextSibling != null) parent.insertBefore(dom, nextSibling)\n\t\telse parent.appendChild(dom)\n\t}\n\n\tfunction maybeSetContentEditable(vnode) {\n\t\tif (vnode.attrs == null || (\n\t\t\tvnode.attrs.contenteditable == null && // attribute\n\t\t\tvnode.attrs.contentEditable == null // property\n\t\t)) return false\n\t\tvar children = vnode.children\n\t\tif (children != null && children.length === 1 && children[0].tag === \"<\") {\n\t\t\tvar content = children[0].children\n\t\t\tif (vnode.dom.innerHTML !== content) vnode.dom.innerHTML = content\n\t\t}\n\t\telse if (vnode.text != null || children != null && children.length !== 0) throw new Error(\"Child node of a contenteditable must be trusted\")\n\t\treturn true\n\t}\n\n\t//remove\n\tfunction removeNodes(parent, vnodes, start, end) {\n\t\tfor (var i = start; i < end; i++) {\n\t\t\tvar vnode = vnodes[i]\n\t\t\tif (vnode != null) removeNode(parent, vnode)\n\t\t}\n\t}\n\tfunction removeNode(parent, vnode) {\n\t\tvar mask = 0\n\t\tvar original = vnode.state\n\t\tvar stateResult, attrsResult\n\t\tif (typeof vnode.tag !== \"string\" && typeof vnode.state.onbeforeremove === \"function\") {\n\t\t\tvar result = callHook.call(vnode.state.onbeforeremove, vnode)\n\t\t\tif (result != null && typeof result.then === \"function\") {\n\t\t\t\tmask = 1\n\t\t\t\tstateResult = result\n\t\t\t}\n\t\t}\n\t\tif (vnode.attrs && typeof vnode.attrs.onbeforeremove === \"function\") {\n\t\t\tvar result = callHook.call(vnode.attrs.onbeforeremove, vnode)\n\t\t\tif (result != null && typeof result.then === \"function\") {\n\t\t\t\t// eslint-disable-next-line no-bitwise\n\t\t\t\tmask |= 2\n\t\t\t\tattrsResult = result\n\t\t\t}\n\t\t}\n\t\tcheckState(vnode, original)\n\n\t\t// If we can, try to fast-path it and avoid all the overhead of awaiting\n\t\tif (!mask) {\n\t\t\tonremove(vnode)\n\t\t\tremoveChild(parent, vnode)\n\t\t} else {\n\t\t\tif (stateResult != null) {\n\t\t\t\tvar next = function () {\n\t\t\t\t\t// eslint-disable-next-line no-bitwise\n\t\t\t\t\tif (mask & 1) { mask &= 2; if (!mask) reallyRemove() }\n\t\t\t\t}\n\t\t\t\tstateResult.then(next, next)\n\t\t\t}\n\t\t\tif (attrsResult != null) {\n\t\t\t\tvar next = function () {\n\t\t\t\t\t// eslint-disable-next-line no-bitwise\n\t\t\t\t\tif (mask & 2) { mask &= 1; if (!mask) reallyRemove() }\n\t\t\t\t}\n\t\t\t\tattrsResult.then(next, next)\n\t\t\t}\n\t\t}\n\n\t\tfunction reallyRemove() {\n\t\t\tcheckState(vnode, original)\n\t\t\tonremove(vnode)\n\t\t\tremoveChild(parent, vnode)\n\t\t}\n\t}\n\tfunction removeHTML(parent, vnode) {\n\t\tfor (var i = 0; i < vnode.instance.length; i++) {\n\t\t\tparent.removeChild(vnode.instance[i])\n\t\t}\n\t}\n\tfunction removeChild(parent, vnode) {\n\t\t// Dodge the recursion overhead in a few of the most common cases.\n\t\twhile (vnode.dom != null && vnode.dom.parentNode === parent) {\n\t\t\tif (typeof vnode.tag !== \"string\") {\n\t\t\t\tvnode = vnode.instance\n\t\t\t\tif (vnode != null) continue\n\t\t\t} else if (vnode.tag === \"<\") {\n\t\t\t\tremoveHTML(parent, vnode)\n\t\t\t} else {\n\t\t\t\tif (vnode.tag !== \"[\") {\n\t\t\t\t\tparent.removeChild(vnode.dom)\n\t\t\t\t\tif (!Array.isArray(vnode.children)) break\n\t\t\t\t}\n\t\t\t\tif (vnode.children.length === 1) {\n\t\t\t\t\tvnode = vnode.children[0]\n\t\t\t\t\tif (vnode != null) continue\n\t\t\t\t} else {\n\t\t\t\t\tfor (var i = 0; i < vnode.children.length; i++) {\n\t\t\t\t\t\tvar child = vnode.children[i]\n\t\t\t\t\t\tif (child != null) removeChild(parent, child)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\tbreak\n\t\t}\n\t}\n\tfunction onremove(vnode) {\n\t\tif (typeof vnode.tag !== \"string\" && typeof vnode.state.onremove === \"function\") callHook.call(vnode.state.onremove, vnode)\n\t\tif (vnode.attrs && typeof vnode.attrs.onremove === \"function\") callHook.call(vnode.attrs.onremove, vnode)\n\t\tif (typeof vnode.tag !== \"string\") {\n\t\t\tif (vnode.instance != null) onremove(vnode.instance)\n\t\t} else {\n\t\t\tvar children = vnode.children\n\t\t\tif (Array.isArray(children)) {\n\t\t\t\tfor (var i = 0; i < children.length; i++) {\n\t\t\t\t\tvar child = children[i]\n\t\t\t\t\tif (child != null) onremove(child)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t//attrs\n\tfunction setAttrs(vnode, attrs, ns) {\n\t\tfor (var key in attrs) {\n\t\t\tsetAttr(vnode, key, null, attrs[key], ns)\n\t\t}\n\t}\n\tfunction setAttr(vnode, key, old, value, ns) {\n\t\tif (key === \"key\" || key === \"is\" || value == null || isLifecycleMethod(key) || (old === value && !isFormAttribute(vnode, key)) && typeof value !== \"object\") return\n\t\tif (key[0] === \"o\" && key[1] === \"n\") return updateEvent(vnode, key, value)\n\t\tif (key.slice(0, 6) === \"xlink:\") vnode.dom.setAttributeNS(\"http://www.w3.org/1999/xlink\", key.slice(6), value)\n\t\telse if (key === \"style\") updateStyle(vnode.dom, old, value)\n\t\telse if (hasPropertyKey(vnode, key, ns)) {\n\t\t\tif (key === \"value\") {\n\t\t\t\t// Only do the coercion if we're actually going to check the value.\n\t\t\t\t/* eslint-disable no-implicit-coercion */\n\t\t\t\t//setting input[value] to same value by typing on focused element moves cursor to end in Chrome\n\t\t\t\tif ((vnode.tag === \"input\" || vnode.tag === \"textarea\") && vnode.dom.value === \"\" + value && vnode.dom === activeElement()) return\n\t\t\t\t//setting select[value] to same value while having select open blinks select dropdown in Chrome\n\t\t\t\tif (vnode.tag === \"select\" && old !== null && vnode.dom.value === \"\" + value) return\n\t\t\t\t//setting option[value] to same value while having select open blinks select dropdown in Chrome\n\t\t\t\tif (vnode.tag === \"option\" && old !== null && vnode.dom.value === \"\" + value) return\n\t\t\t\t/* eslint-enable no-implicit-coercion */\n\t\t\t}\n\t\t\t// If you assign an input type that is not supported by IE 11 with an assignment expression, an error will occur.\n\t\t\tif (vnode.tag === \"input\" && key === \"type\") vnode.dom.setAttribute(key, value)\n\t\t\telse vnode.dom[key] = value\n\t\t} else {\n\t\t\tif (typeof value === \"boolean\") {\n\t\t\t\tif (value) vnode.dom.setAttribute(key, \"\")\n\t\t\t\telse vnode.dom.removeAttribute(key)\n\t\t\t}\n\t\t\telse vnode.dom.setAttribute(key === \"className\" ? \"class\" : key, value)\n\t\t}\n\t}\n\tfunction removeAttr(vnode, key, old, ns) {\n\t\tif (key === \"key\" || key === \"is\" || old == null || isLifecycleMethod(key)) return\n\t\tif (key[0] === \"o\" && key[1] === \"n\" && !isLifecycleMethod(key)) updateEvent(vnode, key, undefined)\n\t\telse if (key === \"style\") updateStyle(vnode.dom, old, null)\n\t\telse if (\n\t\t\thasPropertyKey(vnode, key, ns)\n\t\t\t&& key !== \"className\"\n\t\t\t&& !(key === \"value\" && (\n\t\t\t\tvnode.tag === \"option\"\n\t\t\t\t|| vnode.tag === \"select\" && vnode.dom.selectedIndex === -1 && vnode.dom === activeElement()\n\t\t\t))\n\t\t\t&& !(vnode.tag === \"input\" && key === \"type\")\n\t\t) {\n\t\t\tvnode.dom[key] = null\n\t\t} else {\n\t\t\tvar nsLastIndex = key.indexOf(\":\")\n\t\t\tif (nsLastIndex !== -1) key = key.slice(nsLastIndex + 1)\n\t\t\tif (old !== false) vnode.dom.removeAttribute(key === \"className\" ? \"class\" : key)\n\t\t}\n\t}\n\tfunction setLateSelectAttrs(vnode, attrs) {\n\t\tif (\"value\" in attrs) {\n\t\t\tif(attrs.value === null) {\n\t\t\t\tif (vnode.dom.selectedIndex !== -1) vnode.dom.value = null\n\t\t\t} else {\n\t\t\t\tvar normalized = \"\" + attrs.value // eslint-disable-line no-implicit-coercion\n\t\t\t\tif (vnode.dom.value !== normalized || vnode.dom.selectedIndex === -1) {\n\t\t\t\t\tvnode.dom.value = normalized\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tif (\"selectedIndex\" in attrs) setAttr(vnode, \"selectedIndex\", null, attrs.selectedIndex, undefined)\n\t}\n\tfunction updateAttrs(vnode, old, attrs, ns) {\n\t\tif (attrs != null) {\n\t\t\tfor (var key in attrs) {\n\t\t\t\tsetAttr(vnode, key, old && old[key], attrs[key], ns)\n\t\t\t}\n\t\t}\n\t\tvar val\n\t\tif (old != null) {\n\t\t\tfor (var key in old) {\n\t\t\t\tif (((val = old[key]) != null) && (attrs == null || attrs[key] == null)) {\n\t\t\t\t\tremoveAttr(vnode, key, val, ns)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\tfunction isFormAttribute(vnode, attr) {\n\t\treturn attr === \"value\" || attr === \"checked\" || attr === \"selectedIndex\" || attr === \"selected\" && vnode.dom === activeElement() || vnode.tag === \"option\" && vnode.dom.parentNode === $doc.activeElement\n\t}\n\tfunction isLifecycleMethod(attr) {\n\t\treturn attr === \"oninit\" || attr === \"oncreate\" || attr === \"onupdate\" || attr === \"onremove\" || attr === \"onbeforeremove\" || attr === \"onbeforeupdate\"\n\t}\n\tfunction hasPropertyKey(vnode, key, ns) {\n\t\t// Filter out namespaced keys\n\t\treturn ns === undefined && (\n\t\t\t// If it's a custom element, just keep it.\n\t\t\tvnode.tag.indexOf(\"-\") > -1 || vnode.attrs != null && vnode.attrs.is ||\n\t\t\t// If it's a normal element, let's try to avoid a few browser bugs.\n\t\t\tkey !== \"href\" && key !== \"list\" && key !== \"form\" && key !== \"width\" && key !== \"height\"// && key !== \"type\"\n\t\t\t// Defer the property check until *after* we check everything.\n\t\t) && key in vnode.dom\n\t}\n\n\t//style\n\tvar uppercaseRegex = /[A-Z]/g\n\tfunction toLowerCase(capital) { return \"-\" + capital.toLowerCase() }\n\tfunction normalizeKey(key) {\n\t\treturn key[0] === \"-\" && key[1] === \"-\" ? key :\n\t\t\tkey === \"cssFloat\" ? \"float\" :\n\t\t\t\tkey.replace(uppercaseRegex, toLowerCase)\n\t}\n\tfunction updateStyle(element, old, style) {\n\t\tif (old === style) {\n\t\t\t// Styles are equivalent, do nothing.\n\t\t} else if (style == null) {\n\t\t\t// New style is missing, just clear it.\n\t\t\telement.style.cssText = \"\"\n\t\t} else if (typeof style !== \"object\") {\n\t\t\t// New style is a string, let engine deal with patching.\n\t\t\telement.style.cssText = style\n\t\t} else if (old == null || typeof old !== \"object\") {\n\t\t\t// `old` is missing or a string, `style` is an object.\n\t\t\telement.style.cssText = \"\"\n\t\t\t// Add new style properties\n\t\t\tfor (var key in style) {\n\t\t\t\tvar value = style[key]\n\t\t\t\tif (value != null) element.style.setProperty(normalizeKey(key), String(value))\n\t\t\t}\n\t\t} else {\n\t\t\t// Both old & new are (different) objects.\n\t\t\t// Update style properties that have changed\n\t\t\tfor (var key in style) {\n\t\t\t\tvar value = style[key]\n\t\t\t\tif (value != null && (value = String(value)) !== String(old[key])) {\n\t\t\t\t\telement.style.setProperty(normalizeKey(key), value)\n\t\t\t\t}\n\t\t\t}\n\t\t\t// Remove style properties that no longer exist\n\t\t\tfor (var key in old) {\n\t\t\t\tif (old[key] != null && style[key] == null) {\n\t\t\t\t\telement.style.removeProperty(normalizeKey(key))\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t// Here's an explanation of how this works:\n\t// 1. The event names are always (by design) prefixed by `on`.\n\t// 2. The EventListener interface accepts either a function or an object\n\t//    with a `handleEvent` method.\n\t// 3. The object does not inherit from `Object.prototype`, to avoid\n\t//    any potential interference with that (e.g. setters).\n\t// 4. The event name is remapped to the handler before calling it.\n\t// 5. In function-based event handlers, `ev.target === this`. We replicate\n\t//    that below.\n\t// 6. In function-based event handlers, `return false` prevents the default\n\t//    action and stops event propagation. We replicate that below.\n\tfunction EventDict() {\n\t\t// Save this, so the current redraw is correctly tracked.\n\t\tthis._ = currentRedraw\n\t}\n\tEventDict.prototype = Object.create(null)\n\tEventDict.prototype.handleEvent = function (ev) {\n\t\tvar handler = this[\"on\" + ev.type]\n\t\tvar result\n\t\tif (typeof handler === \"function\") result = handler.call(ev.currentTarget, ev)\n\t\telse if (typeof handler.handleEvent === \"function\") handler.handleEvent(ev)\n\t\tif (this._ && ev.redraw !== false) (0, this._)()\n\t\tif (result === false) {\n\t\t\tev.preventDefault()\n\t\t\tev.stopPropagation()\n\t\t}\n\t}\n\n\t//event\n\tfunction updateEvent(vnode, key, value) {\n\t\tif (vnode.events != null) {\n\t\t\tif (vnode.events[key] === value) return\n\t\t\tif (value != null && (typeof value === \"function\" || typeof value === \"object\")) {\n\t\t\t\tif (vnode.events[key] == null) vnode.dom.addEventListener(key.slice(2), vnode.events, false)\n\t\t\t\tvnode.events[key] = value\n\t\t\t} else {\n\t\t\t\tif (vnode.events[key] != null) vnode.dom.removeEventListener(key.slice(2), vnode.events, false)\n\t\t\t\tvnode.events[key] = undefined\n\t\t\t}\n\t\t} else if (value != null && (typeof value === \"function\" || typeof value === \"object\")) {\n\t\t\tvnode.events = new EventDict()\n\t\t\tvnode.dom.addEventListener(key.slice(2), vnode.events, false)\n\t\t\tvnode.events[key] = value\n\t\t}\n\t}\n\n\t//lifecycle\n\tfunction initLifecycle(source, vnode, hooks) {\n\t\tif (typeof source.oninit === \"function\") callHook.call(source.oninit, vnode)\n\t\tif (typeof source.oncreate === \"function\") hooks.push(callHook.bind(source.oncreate, vnode))\n\t}\n\tfunction updateLifecycle(source, vnode, hooks) {\n\t\tif (typeof source.onupdate === \"function\") hooks.push(callHook.bind(source.onupdate, vnode))\n\t}\n\tfunction shouldNotUpdate(vnode, old) {\n\t\tdo {\n\t\t\tif (vnode.attrs != null && typeof vnode.attrs.onbeforeupdate === \"function\") {\n\t\t\t\tvar force = callHook.call(vnode.attrs.onbeforeupdate, vnode, old)\n\t\t\t\tif (force !== undefined && !force) break\n\t\t\t}\n\t\t\tif (typeof vnode.tag !== \"string\" && typeof vnode.state.onbeforeupdate === \"function\") {\n\t\t\t\tvar force = callHook.call(vnode.state.onbeforeupdate, vnode, old)\n\t\t\t\tif (force !== undefined && !force) break\n\t\t\t}\n\t\t\treturn false\n\t\t} while (false); // eslint-disable-line no-constant-condition\n\t\tvnode.dom = old.dom\n\t\tvnode.domSize = old.domSize\n\t\tvnode.instance = old.instance\n\t\t// One would think having the actual latest attributes would be ideal,\n\t\t// but it doesn't let us properly diff based on our current internal\n\t\t// representation. We have to save not only the old DOM info, but also\n\t\t// the attributes used to create it, as we diff *that*, not against the\n\t\t// DOM directly (with a few exceptions in `setAttr`). And, of course, we\n\t\t// need to save the children and text as they are conceptually not\n\t\t// unlike special \"attributes\" internally.\n\t\tvnode.attrs = old.attrs\n\t\tvnode.children = old.children\n\t\tvnode.text = old.text\n\t\treturn true\n\t}\n\n\treturn function(dom, vnodes, redraw) {\n\t\tif (!dom) throw new TypeError(\"Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.\")\n\t\tvar hooks = []\n\t\tvar active = activeElement()\n\t\tvar namespace = dom.namespaceURI\n\n\t\t// First time rendering into a node clears it out\n\t\tif (dom.vnodes == null) dom.textContent = \"\"\n\n\t\tvnodes = Vnode.normalizeChildren(Array.isArray(vnodes) ? vnodes : [vnodes])\n\t\tvar prevRedraw = currentRedraw\n\t\ttry {\n\t\t\tcurrentRedraw = typeof redraw === \"function\" ? redraw : undefined\n\t\t\tupdateNodes(dom, dom.vnodes, vnodes, hooks, null, namespace === \"http://www.w3.org/1999/xhtml\" ? undefined : namespace)\n\t\t} finally {\n\t\t\tcurrentRedraw = prevRedraw\n\t\t}\n\t\tdom.vnodes = vnodes\n\t\t// `document.activeElement` can return null: https://html.spec.whatwg.org/multipage/interaction.html#dom-document-activeelement\n\t\tif (active != null && activeElement() !== active && typeof active.focus === \"function\") active.focus()\n\t\tfor (var i = 0; i < hooks.length; i++) hooks[i]()\n\t}\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/mithril/render/render.js?");

/***/ }),

/***/ "./node_modules/mithril/render/trust.js":
/*!**********************************************!*\
  !*** ./node_modules/mithril/render/trust.js ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 5:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar Vnode = __webpack_require__(/*! ../render/vnode */ \"./node_modules/mithril/render/vnode.js\")\n\nmodule.exports = function(html) {\n\tif (html == null) html = \"\"\n\treturn Vnode(\"<\", undefined, undefined, html, undefined, undefined)\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/mithril/render/trust.js?");

/***/ }),

/***/ "./node_modules/mithril/render/vnode.js":
/*!**********************************************!*\
  !*** ./node_modules/mithril/render/vnode.js ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 31:0-14 */
/***/ ((module) => {

"use strict";
eval("\n\nfunction Vnode(tag, key, attrs, children, text, dom) {\n\treturn {tag: tag, key: key, attrs: attrs, children: children, text: text, dom: dom, domSize: undefined, state: undefined, events: undefined, instance: undefined}\n}\nVnode.normalize = function(node) {\n\tif (Array.isArray(node)) return Vnode(\"[\", undefined, undefined, Vnode.normalizeChildren(node), undefined, undefined)\n\tif (node == null || typeof node === \"boolean\") return null\n\tif (typeof node === \"object\") return node\n\treturn Vnode(\"#\", undefined, undefined, String(node), undefined, undefined)\n}\nVnode.normalizeChildren = function(input) {\n\tvar children = []\n\tif (input.length) {\n\t\tvar isKeyed = input[0] != null && input[0].key != null\n\t\t// Note: this is a *very* perf-sensitive check.\n\t\t// Fun fact: merging the loop like this is somehow faster than splitting\n\t\t// it, noticeably so.\n\t\tfor (var i = 1; i < input.length; i++) {\n\t\t\tif ((input[i] != null && input[i].key != null) !== isKeyed) {\n\t\t\t\tthrow new TypeError(\"Vnodes must either always have keys or never have keys!\")\n\t\t\t}\n\t\t}\n\t\tfor (var i = 0; i < input.length; i++) {\n\t\t\tchildren[i] = Vnode.normalize(input[i])\n\t\t}\n\t}\n\treturn children\n}\n\nmodule.exports = Vnode\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/mithril/render/vnode.js?");

/***/ }),

/***/ "./node_modules/mithril/request.js":
/*!*****************************************!*\
  !*** ./node_modules/mithril/request.js ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 6:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar PromisePolyfill = __webpack_require__(/*! ./promise/promise */ \"./node_modules/mithril/promise/promise.js\")\nvar mountRedraw = __webpack_require__(/*! ./mount-redraw */ \"./node_modules/mithril/mount-redraw.js\")\n\nmodule.exports = __webpack_require__(/*! ./request/request */ \"./node_modules/mithril/request/request.js\")(window, PromisePolyfill, mountRedraw.redraw)\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/mithril/request.js?");

/***/ }),

/***/ "./node_modules/mithril/request/request.js":
/*!*************************************************!*\
  !*** ./node_modules/mithril/request/request.js ***!
  \*************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 5:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar buildPathname = __webpack_require__(/*! ../pathname/build */ \"./node_modules/mithril/pathname/build.js\")\n\nmodule.exports = function($window, Promise, oncompletion) {\n\tvar callbackCount = 0\n\n\tfunction PromiseProxy(executor) {\n\t\treturn new Promise(executor)\n\t}\n\n\t// In case the global Promise is some userland library's where they rely on\n\t// `foo instanceof this.constructor`, `this.constructor.resolve(value)`, or\n\t// similar. Let's *not* break them.\n\tPromiseProxy.prototype = Promise.prototype\n\tPromiseProxy.__proto__ = Promise // eslint-disable-line no-proto\n\n\tfunction makeRequest(factory) {\n\t\treturn function(url, args) {\n\t\t\tif (typeof url !== \"string\") { args = url; url = url.url }\n\t\t\telse if (args == null) args = {}\n\t\t\tvar promise = new Promise(function(resolve, reject) {\n\t\t\t\tfactory(buildPathname(url, args.params), args, function (data) {\n\t\t\t\t\tif (typeof args.type === \"function\") {\n\t\t\t\t\t\tif (Array.isArray(data)) {\n\t\t\t\t\t\t\tfor (var i = 0; i < data.length; i++) {\n\t\t\t\t\t\t\t\tdata[i] = new args.type(data[i])\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse data = new args.type(data)\n\t\t\t\t\t}\n\t\t\t\t\tresolve(data)\n\t\t\t\t}, reject)\n\t\t\t})\n\t\t\tif (args.background === true) return promise\n\t\t\tvar count = 0\n\t\t\tfunction complete() {\n\t\t\t\tif (--count === 0 && typeof oncompletion === \"function\") oncompletion()\n\t\t\t}\n\n\t\t\treturn wrap(promise)\n\n\t\t\tfunction wrap(promise) {\n\t\t\t\tvar then = promise.then\n\t\t\t\t// Set the constructor, so engines know to not await or resolve\n\t\t\t\t// this as a native promise. At the time of writing, this is\n\t\t\t\t// only necessary for V8, but their behavior is the correct\n\t\t\t\t// behavior per spec. See this spec issue for more details:\n\t\t\t\t// https://github.com/tc39/ecma262/issues/1577. Also, see the\n\t\t\t\t// corresponding comment in `request/tests/test-request.js` for\n\t\t\t\t// a bit more background on the issue at hand.\n\t\t\t\tpromise.constructor = PromiseProxy\n\t\t\t\tpromise.then = function() {\n\t\t\t\t\tcount++\n\t\t\t\t\tvar next = then.apply(promise, arguments)\n\t\t\t\t\tnext.then(complete, function(e) {\n\t\t\t\t\t\tcomplete()\n\t\t\t\t\t\tif (count === 0) throw e\n\t\t\t\t\t})\n\t\t\t\t\treturn wrap(next)\n\t\t\t\t}\n\t\t\t\treturn promise\n\t\t\t}\n\t\t}\n\t}\n\n\tfunction hasHeader(args, name) {\n\t\tfor (var key in args.headers) {\n\t\t\tif ({}.hasOwnProperty.call(args.headers, key) && name.test(key)) return true\n\t\t}\n\t\treturn false\n\t}\n\n\treturn {\n\t\trequest: makeRequest(function(url, args, resolve, reject) {\n\t\t\tvar method = args.method != null ? args.method.toUpperCase() : \"GET\"\n\t\t\tvar body = args.body\n\t\t\tvar assumeJSON = (args.serialize == null || args.serialize === JSON.serialize) && !(body instanceof $window.FormData)\n\t\t\tvar responseType = args.responseType || (typeof args.extract === \"function\" ? \"\" : \"json\")\n\n\t\t\tvar xhr = new $window.XMLHttpRequest(), aborted = false\n\t\t\tvar original = xhr, replacedAbort\n\t\t\tvar abort = xhr.abort\n\n\t\t\txhr.abort = function() {\n\t\t\t\taborted = true\n\t\t\t\tabort.call(this)\n\t\t\t}\n\n\t\t\txhr.open(method, url, args.async !== false, typeof args.user === \"string\" ? args.user : undefined, typeof args.password === \"string\" ? args.password : undefined)\n\n\t\t\tif (assumeJSON && body != null && !hasHeader(args, /^content-type$/i)) {\n\t\t\t\txhr.setRequestHeader(\"Content-Type\", \"application/json; charset=utf-8\")\n\t\t\t}\n\t\t\tif (typeof args.deserialize !== \"function\" && !hasHeader(args, /^accept$/i)) {\n\t\t\t\txhr.setRequestHeader(\"Accept\", \"application/json, text/*\")\n\t\t\t}\n\t\t\tif (args.withCredentials) xhr.withCredentials = args.withCredentials\n\t\t\tif (args.timeout) xhr.timeout = args.timeout\n\t\t\txhr.responseType = responseType\n\n\t\t\tfor (var key in args.headers) {\n\t\t\t\tif ({}.hasOwnProperty.call(args.headers, key)) {\n\t\t\t\t\txhr.setRequestHeader(key, args.headers[key])\n\t\t\t\t}\n\t\t\t}\n\n\t\t\txhr.onreadystatechange = function(ev) {\n\t\t\t\t// Don't throw errors on xhr.abort().\n\t\t\t\tif (aborted) return\n\n\t\t\t\tif (ev.target.readyState === 4) {\n\t\t\t\t\ttry {\n\t\t\t\t\t\tvar success = (ev.target.status >= 200 && ev.target.status < 300) || ev.target.status === 304 || (/^file:\\/\\//i).test(url)\n\t\t\t\t\t\t// When the response type isn't \"\" or \"text\",\n\t\t\t\t\t\t// `xhr.responseText` is the wrong thing to use.\n\t\t\t\t\t\t// Browsers do the right thing and throw here, and we\n\t\t\t\t\t\t// should honor that and do the right thing by\n\t\t\t\t\t\t// preferring `xhr.response` where possible/practical.\n\t\t\t\t\t\tvar response = ev.target.response, message\n\n\t\t\t\t\t\tif (responseType === \"json\") {\n\t\t\t\t\t\t\t// For IE and Edge, which don't implement\n\t\t\t\t\t\t\t// `responseType: \"json\"`.\n\t\t\t\t\t\t\tif (!ev.target.responseType && typeof args.extract !== \"function\") response = JSON.parse(ev.target.responseText)\n\t\t\t\t\t\t} else if (!responseType || responseType === \"text\") {\n\t\t\t\t\t\t\t// Only use this default if it's text. If a parsed\n\t\t\t\t\t\t\t// document is needed on old IE and friends (all\n\t\t\t\t\t\t\t// unsupported), the user should use a custom\n\t\t\t\t\t\t\t// `config` instead. They're already using this at\n\t\t\t\t\t\t\t// their own risk.\n\t\t\t\t\t\t\tif (response == null) response = ev.target.responseText\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tif (typeof args.extract === \"function\") {\n\t\t\t\t\t\t\tresponse = args.extract(ev.target, args)\n\t\t\t\t\t\t\tsuccess = true\n\t\t\t\t\t\t} else if (typeof args.deserialize === \"function\") {\n\t\t\t\t\t\t\tresponse = args.deserialize(response)\n\t\t\t\t\t\t}\n\t\t\t\t\t\tif (success) resolve(response)\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\ttry { message = ev.target.responseText }\n\t\t\t\t\t\t\tcatch (e) { message = response }\n\t\t\t\t\t\t\tvar error = new Error(message)\n\t\t\t\t\t\t\terror.code = ev.target.status\n\t\t\t\t\t\t\terror.response = response\n\t\t\t\t\t\t\treject(error)\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tcatch (e) {\n\t\t\t\t\t\treject(e)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tif (typeof args.config === \"function\") {\n\t\t\t\txhr = args.config(xhr, args, url) || xhr\n\n\t\t\t\t// Propagate the `abort` to any replacement XHR as well.\n\t\t\t\tif (xhr !== original) {\n\t\t\t\t\treplacedAbort = xhr.abort\n\t\t\t\t\txhr.abort = function() {\n\t\t\t\t\t\taborted = true\n\t\t\t\t\t\treplacedAbort.call(this)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tif (body == null) xhr.send()\n\t\t\telse if (typeof args.serialize === \"function\") xhr.send(args.serialize(body))\n\t\t\telse if (body instanceof $window.FormData) xhr.send(body)\n\t\t\telse xhr.send(JSON.stringify(body))\n\t\t}),\n\t\tjsonp: makeRequest(function(url, args, resolve, reject) {\n\t\t\tvar callbackName = args.callbackName || \"_mithril_\" + Math.round(Math.random() * 1e16) + \"_\" + callbackCount++\n\t\t\tvar script = $window.document.createElement(\"script\")\n\t\t\t$window[callbackName] = function(data) {\n\t\t\t\tdelete $window[callbackName]\n\t\t\t\tscript.parentNode.removeChild(script)\n\t\t\t\tresolve(data)\n\t\t\t}\n\t\t\tscript.onerror = function() {\n\t\t\t\tdelete $window[callbackName]\n\t\t\t\tscript.parentNode.removeChild(script)\n\t\t\t\treject(new Error(\"JSONP request failed\"))\n\t\t\t}\n\t\t\tscript.src = url + (url.indexOf(\"?\") < 0 ? \"?\" : \"&\") +\n\t\t\t\tencodeURIComponent(args.callbackKey || \"callback\") + \"=\" +\n\t\t\t\tencodeURIComponent(callbackName)\n\t\t\t$window.document.documentElement.appendChild(script)\n\t\t}),\n\t}\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/mithril/request/request.js?");

/***/ }),

/***/ "./node_modules/mithril/route.js":
/*!***************************************!*\
  !*** ./node_modules/mithril/route.js ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 5:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar mountRedraw = __webpack_require__(/*! ./mount-redraw */ \"./node_modules/mithril/mount-redraw.js\")\n\nmodule.exports = __webpack_require__(/*! ./api/router */ \"./node_modules/mithril/api/router.js\")(window, mountRedraw)\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/mithril/route.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n;\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://my-webpack-project/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 230:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;