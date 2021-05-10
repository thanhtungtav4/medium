(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_app"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/***/ (function(module) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/***/ (function(module) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/***/ (function(module) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/***/ (function(module) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct */ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/***/ (function(module) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/***/ (function(module) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/***/ (function(module) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/***/ (function(module) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/***/ (function(module) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/***/ (function(module) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/***/ (function(module) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/***/ (function(module) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


var normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

var requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  var start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

var cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


var MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  var entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  var resolver;
  var prom = new Promise(function (resolve) {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(function (value) {
    return resolver(value), value;
  }) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

var canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise(function (res, rej) {
    if (document.querySelector("link[rel=\"prefetch\"][href^=\"".concat(href, "\"]"))) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = "prefetch";
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

var ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise(function (resolve, reject) {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = function () {
      return reject(markAssetError(new Error("Failed to load script: ".concat(src))));
    }; // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise(function (resolve, reject) {
    var cancelled = false;
    p.then(function (r) {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    })["catch"](reject);
    (0, _requestIdleCallback.requestIdleCallback)(function () {
      return setTimeout(function () {
        if (!cancelled) {
          reject(err);
        }
      }, ms);
    });
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  var onBuildManifest = new Promise(function (resolve) {
    // Mandatory because this is not concurrent safe:
    var cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = function () {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute["default"])(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(function (manifest) {
    if (!(route in manifest)) {
      throw markAssetError(new Error("Failed to lookup route: ".concat(route)));
    }

    var allFiles = manifest[route].map(function (entry) {
      return assetPrefix + '/_next/' + encodeURI(entry);
    });
    return {
      scripts: allFiles.filter(function (v) {
        return v.endsWith('.js');
      }),
      css: allFiles.filter(function (v) {
        return v.endsWith('.css');
      })
    };
  });
}

function createRouteLoader(assetPrefix) {
  var entrypoints = new Map();
  var loadedScripts = new Map();
  var styleSheets = new Map();
  var routes = new Map();

  function maybeExecuteScript(src) {
    var prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector("script[src^=\"".concat(src, "\"]"))) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    var prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(function (res) {
      if (!res.ok) {
        throw new Error("Failed to load stylesheet: ".concat(href));
      }

      return res.text().then(function (text) {
        return {
          href: href,
          content: text
        };
      });
    })["catch"](function (err) {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint: function whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },
    onEntrypoint: function onEntrypoint(route, execute) {
      Promise.resolve(execute).then(function (fn) {
        return fn();
      }).then(function (exports) {
        return {
          component: exports && exports["default"] || exports,
          exports: exports
        };
      }, function (err) {
        return {
          error: err
        };
      }).then(function (input) {
        var old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },
    loadRoute: function loadRoute(route, prefetch) {
      var _this = this;

      return withFuture(route, routes, function () {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(function (_ref) {
          var scripts = _ref.scripts,
              css = _ref.css;
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(function (res) {
          return _this.whenEntrypoint(route).then(function (entrypoint) {
            return {
              entrypoint: entrypoint,
              styles: res[1]
            };
          });
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error("Route did not complete loading: ".concat(route)))).then(function (_ref2) {
          var entrypoint = _ref2.entrypoint,
              styles = _ref2.styles;
          var res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        })["catch"](function (err) {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },
    prefetch: function prefetch(route) {
      var _this2 = this;

      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      var cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(function (output) {
        return Promise.all(canPrefetch ? output.scripts.map(function (script) {
          return prefetchViaDom(script, 'script');
        }) : []);
      }).then(function () {
        (0, _requestIdleCallback.requestIdleCallback)(function () {
          return _this2.loadRoute(route, true)["catch"](function () {});
        });
      })["catch"]( // swallow prefetch errors
      function () {});
    }
  };
}

var _default = createRouteLoader;
exports.default = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _construct = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

var _s = $RefreshSig$();

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  _s();

  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


_s(useRouter, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(".concat(name, ")");
  }

  return WithRouterWrapper;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.AmpStateContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var AmpStateContext = /*#__PURE__*/_react["default"].createContext({});

exports.AmpStateContext = AmpStateContext;

if (true) {
  AmpStateContext.displayName = 'AmpStateContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _s = $RefreshSig$();

exports.__esModule = true;
exports.isInAmpMode = isInAmpMode;
exports.useAmp = useAmp;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

function useAmp() {
  _s();

  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(_react["default"].useContext(_ampContext.AmpStateContext));
}

_s(useAmp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.HeadManagerContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var HeadManagerContext = /*#__PURE__*/_react["default"].createContext({});

exports.HeadManagerContext = HeadManagerContext;

if (true) {
  HeadManagerContext.displayName = 'HeadManagerContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.defaultHead = defaultHead;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _sideEffect = _interopRequireDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var _headManagerContext = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var _amp = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [/*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react["default"].Fragment) {
    return list.concat(_react["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
returns a function for filtering head child elements
which shouldn't be duplicated, like <title/>
Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var isUnique = true;
    var hasKey = false;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      hasKey = true;
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return isUnique;
  };
}
/**
*
* @param headElements List of multiple <Head> instances
*/


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = _react["default"].Children.toArray(headElement.props.children);

    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;

    if (false) { var newProps; }

    return /*#__PURE__*/_react["default"].cloneElement(c, {
      key: key
    });
  });
}
/**
* This component injects elements to `<head>` of your page.
* To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
*/


function Head(_ref) {
  var children = _ref.children;
  var ampState = (0, _react.useContext)(_ampContext.AmpStateContext);
  var headManager = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  return /*#__PURE__*/_react["default"].createElement(_sideEffect["default"], {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _amp.isInAmpMode)(ampState)
  }, children);
} // TODO: Remove in the next major release


_c = Head;

Head.rewind = function () {};

var _default = Head;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Head");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  var detectedLocale; // first item will be empty string from splitting at first char

  var pathnameParts = pathname.split('/');
  (locales || []).some(function (locale) {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname: pathname,
    detectedLocale: detectedLocale
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.RouterContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var RouterContext = /*#__PURE__*/_react["default"].createContext(null);

exports.RouterContext = RouterContext;

if (true) {
  RouterContext.displayName = 'RouterContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?ca47"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
} // tslint:disable:no-console


var detectDomainLocale;

if (false) {}

var basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : "".concat(prefix).concat(pathNoQueryHash(path) === '/' ? path.substring(1) : path) : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) { var detectedDomain; }

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) { var localeLower, pathLower, pathname; }

  return path;
}

function delLocale(path, locale) {
  if (false) { var localeLower, pathLower, pathname; }

  return path;
}

function pathNoQueryHash(path) {
  var queryIndex = path.indexOf('?');
  var hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = "/".concat(path);
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    var locationOrigin = (0, _utils.getLocationOrigin)();
    var resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  var interpolatedRoute = '';
  var dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  var dynamicGroups = dynamicRegex.groups;
  var dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  var params = Object.keys(dynamicGroups);

  if (!params.every(function (param) {
    var value = dynamicMatches[param] || '';
    var _dynamicGroups$param = dynamicGroups[param],
        repeat = _dynamicGroups$param.repeat,
        optional = _dynamicGroups$param.optional; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    var replaced = "[".concat(repeat ? '...' : '').concat(param, "]");

    if (optional) {
      replaced = "".concat(!value ? '/' : '', "[").concat(replaced, "]");
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    function (segment) {
      return encodeURIComponent(segment);
    }).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params: params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  var filteredQuery = {};
  Object.keys(query).forEach(function (key) {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  var base = new URL(currentPath, 'http://n');
  var urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    var finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    var interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      var query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);

      var _interpolateAs = interpolateAs(finalUrl.pathname, finalUrl.pathname, query),
          result = _interpolateAs.result,
          params = _interpolateAs.params;

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    var resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  var origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  var _resolveHref = resolveHref(router.pathname, url, true),
      _resolveHref2 = _slicedToArray(_resolveHref, 2),
      resolvedHref = _resolveHref2[0],
      resolvedAs = _resolveHref2[1];

  var origin = (0, _utils.getLocationOrigin)();
  var hrefHadOrigin = resolvedHref.startsWith(origin);
  var asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  var preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  var preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  var cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(function (page) {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

var manualScrollRestoration =  false && 0;
var SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(function (res) {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(function (data) {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error("Failed to load static props");
        });
      }

      throw new Error("Failed to load static props");
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1)["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  function Router(_pathname, _query, _as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback,
        locale = _ref.locale,
        locales = _ref.locales,
        defaultLocale = _ref.defaultLocale,
        domainLocales = _ref.domainLocales,
        isPreview = _ref.isPreview;

    _classCallCheck(this, Router);

    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = function (e) {
      var state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname2 = _this.pathname,
            query = _this.query;

        _this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(_pathname2),
          query: query
        }), (0, _utils.getURL)());

        return;
      }

      if (!state.__N) {
        return;
      }

      var forcedScroll;
      var url = state.url,
          as = state.as,
          options = state.options,
          idx = state.idx;

      if (false) { var v; }

      _this._idx = idx;

      var _ref2 = (0, _parseRelativeUrl.parseRelativeUrl)(url),
          pathname = _ref2.pathname; // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (_this.isSsr && as === _this.asPath && pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(state)) {
        return;
      }

      _this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && _this._shallow,
        locale: options.locale || _this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        initial: true,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    var autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (true) {
      // make sure "as" doesn't start with double slashes or else it can
      // throw an error as it's considered invalid
      if (_as.substr(0, 2) !== '//') {
        // in order for `e.state` to work on the `onpopstate` event
        // we have to register the initial route upon initialization
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(_pathname),
          query: _query
        }), (0, _utils.getURL)(), {
          locale: locale
        });
      }

      window.addEventListener('popstate', this.onPopState); // enable custom scroll restoration handling when available
      // otherwise fallback to browser's default handling

      if (false) {}
    }
  }

  _createClass(Router, [{
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
    * Go back in history
    */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
    * Performs a `pushState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "push",
    value: function push(url, as) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (false) {}

      ;

      var _prepareUrlAs = prepareUrlAs(this, url, as);

      url = _prepareUrlAs.url;
      as = _prepareUrlAs.as;
      return this.change('pushState', url, as, options);
    }
    /**
    * Performs a `replaceState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "replace",
    value: function replace(url, as) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      ;

      var _prepareUrlAs2 = prepareUrlAs(this, url, as);

      url = _prepareUrlAs2.url;
      as = _prepareUrlAs2.as;
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function () {
      var _change = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(method, url, as, options, forcedScroll) {
        var _options$scroll, localeChange, parsedAs, localePathResult, didNavigate, _this$locales, detectedDomain, asNoBasePath, _options$shallow, shallow, routeProps, cleanedAs, parsed, pathname, query, pages, rewrites, _yield, resolvedAs, rewritesResult, route, _parsedAs, asPathname, routeRegex, routeMatch, shouldInterpolate, interpolatedAs, missingParams, _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2, routeInfo, _routeInfo, error, props, __N_SSG, __N_SSP, destination, parsedHref, _prepareUrlAs3, newUrl, newAs, notFoundRoute, appComp, isValidShallowRoute;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (isLocalURL(url)) {
                  _context.next = 3;
                  break;
                }

                window.location.href = url;
                return _context.abrupt("return", false);

              case 3:
                // for static pages with query params in the URL we delay
                // marking the router ready until after the query is updated
                if (options._h) {
                  this.isReady = true;
                } // Default to scroll reset behavior unless explicitly specified to be
                // `false`! This makes the behavior between using `Router#push` and a
                // `<Link />` consistent.


                options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
                localeChange = options.locale !== this.locale;

                if (true) {
                  _context.next = 18;
                  break;
                }

                this.locale = options.locale === false ? this.defaultLocale : options.locale || this.locale;

                if (typeof options.locale === 'undefined') {
                  options.locale = this.locale;
                }

                parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(hasBasePath(as) ? delBasePath(as) : as);
                localePathResult = (0, _normalizeLocalePath.normalizeLocalePath)(parsedAs.pathname, this.locales);

                if (localePathResult.detectedLocale) {
                  this.locale = localePathResult.detectedLocale;
                  parsedAs.pathname = addBasePath(parsedAs.pathname);
                  as = (0, _utils.formatWithValidation)(parsedAs);
                  url = addBasePath((0, _normalizeLocalePath.normalizeLocalePath)(hasBasePath(url) ? delBasePath(url) : url, this.locales).pathname);
                }

                didNavigate = false; // we need to wrap this in the env check again since regenerator runtime
                // moves this on its own due to the return

                if (false) {}

                detectedDomain = detectDomainLocale(this.domainLocales, undefined, this.locale); // we need to wrap this in the env check again since regenerator runtime
                // moves this on its own due to the return

                if (false) {}

                if (!didNavigate) {
                  _context.next = 18;
                  break;
                }

                return _context.abrupt("return", new Promise(function () {}));

              case 18:
                if (!options._h) {
                  this.isSsr = false;
                } // marking route changes as a navigation start entry


                if (_utils.ST) {
                  performance.mark('routeChange');
                }

                _options$shallow = options.shallow, shallow = _options$shallow === void 0 ? false : _options$shallow;
                routeProps = {
                  shallow: shallow
                };

                if (this._inFlightRoute) {
                  this.abortComponentLoad(this._inFlightRoute, routeProps);
                }

                as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
                cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
                this._inFlightRoute = as; // If the url change is only related to a hash change
                // We should not proceed. We should only change the state.
                // WARNING: `_h` is an internal option for handing Next.js client-side
                // hydration. Your app should _never_ use this property. It may change at
                // any time without notice.

                if (!(!options._h && this.onlyAHashChange(cleanedAs))) {
                  _context.next = 34;
                  break;
                }

                this.asPath = cleanedAs;
                Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

                this.changeState(method, url, as, options);
                this.scrollToHash(cleanedAs);
                this.notify(this.components[this.route], null);
                Router.events.emit('hashChangeComplete', as, routeProps);
                return _context.abrupt("return", true);

              case 34:
                parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
                pathname = parsed.pathname, query = parsed.query; // The build manifest needs to be loaded before auto-static dynamic pages
                // get their query parameters to allow ensuring they can be parsed properly
                // when rewritten to

                _context.prev = 36;
                _context.next = 39;
                return this.pageLoader.getPageList();

              case 39:
                pages = _context.sent;
                _context.next = 42;
                return (0, _routeLoader.getClientBuildManifest)();

              case 42:
                _yield = _context.sent;
                rewrites = _yield.__rewrites;
                _context.next = 50;
                break;

              case 46:
                _context.prev = 46;
                _context.t0 = _context["catch"](36);
                // If we fail to resolve the page list or client-build manifest, we must
                // do a server-side transition:
                window.location.href = as;
                return _context.abrupt("return", false);

              case 50:
                // If asked to change the current URL we should reload the current page
                // (not location.reload() but reload getInitialProps and other Next.js stuffs)
                // We also need to set the method = replaceState always
                // as this should not go into the history (That's how browsers work)
                // We should compare the new asPath to the current asPath, not the url
                if (!this.urlIsNew(cleanedAs) && !localeChange) {
                  method = 'replaceState';
                } // we need to resolve the as value using rewrites for dynamic SSG
                // pages to allow building the data URL correctly


                resolvedAs = as; // url and as should always be prefixed with basePath by this
                // point by either next/link or router.push/replace so strip the
                // basePath from the pathname to match the pages dir 1-to-1

                pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

                if (pathname !== '/_error') {
                  if (false) {} else {
                    parsed.pathname = resolveDynamicRoute(pathname, pages);

                    if (parsed.pathname !== pathname) {
                      pathname = parsed.pathname;
                      url = (0, _utils.formatWithValidation)(parsed);
                    }
                  }
                }

                route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

                if (isLocalURL(as)) {
                  _context.next = 60;
                  break;
                }

                if (false) {}

                throw new Error("Invalid href: \"".concat(url, "\" and as: \"").concat(as, "\", received relative href and external as") + "\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as");

              case 58:
                window.location.href = as;
                return _context.abrupt("return", false);

              case 60:
                resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

                if (!(0, _isDynamic.isDynamicRoute)(route)) {
                  _context.next = 76;
                  break;
                }

                _parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
                asPathname = _parsedAs.pathname;
                routeRegex = (0, _routeRegex.getRouteRegex)(route);
                routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
                shouldInterpolate = route === asPathname;
                interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

                if (!(!routeMatch || shouldInterpolate && !interpolatedAs.result)) {
                  _context.next = 75;
                  break;
                }

                missingParams = Object.keys(routeRegex.groups).filter(function (param) {
                  return !query[param];
                });

                if (!(missingParams.length > 0)) {
                  _context.next = 73;
                  break;
                }

                if (true) {
                  console.warn("".concat(shouldInterpolate ? "Interpolating href" : "Mismatching `as` and `href`", " failed to manually provide ") + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
                }

                throw new Error((shouldInterpolate ? "The provided `href` (".concat(url, ") value is missing query values (").concat(missingParams.join(', '), ") to be interpolated properly. ") : "The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ")) + "Read more: https://nextjs.org/docs/messages/".concat(shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'));

              case 73:
                _context.next = 76;
                break;

              case 75:
                if (shouldInterpolate) {
                  as = (0, _utils.formatWithValidation)(Object.assign({}, _parsedAs, {
                    pathname: interpolatedAs.result,
                    query: omitParmsFromQuery(query, interpolatedAs.params)
                  }));
                } else {
                  // Merge params into `query`, overwriting any specified in search
                  Object.assign(query, routeMatch);
                }

              case 76:
                Router.events.emit('routeChangeStart', as, routeProps);
                _context.prev = 77;
                _context.next = 80;
                return this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);

              case 80:
                routeInfo = _context.sent;
                _routeInfo = routeInfo, error = _routeInfo.error, props = _routeInfo.props, __N_SSG = _routeInfo.__N_SSG, __N_SSP = _routeInfo.__N_SSP; // handle redirect on client-transition

                if (!((__N_SSG || __N_SSP) && props)) {
                  _context.next = 107;
                  break;
                }

                if (!(props.pageProps && props.pageProps.__N_REDIRECT)) {
                  _context.next = 93;
                  break;
                }

                destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
                // client-navigation if it is falling back to hard navigation if
                // it's not

                if (!destination.startsWith('/')) {
                  _context.next = 91;
                  break;
                }

                parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
                parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

                if (!pages.includes(parsedHref.pathname)) {
                  _context.next = 91;
                  break;
                }

                _prepareUrlAs3 = prepareUrlAs(this, destination, destination), newUrl = _prepareUrlAs3.url, newAs = _prepareUrlAs3.as;
                return _context.abrupt("return", this.change(method, newUrl, newAs, options));

              case 91:
                window.location.href = destination;
                return _context.abrupt("return", new Promise(function () {}));

              case 93:
                this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

                if (!(props.notFound === SSG_DATA_NOT_FOUND)) {
                  _context.next = 107;
                  break;
                }

                _context.prev = 95;
                _context.next = 98;
                return this.fetchComponent('/404');

              case 98:
                notFoundRoute = '/404';
                _context.next = 104;
                break;

              case 101:
                _context.prev = 101;
                _context.t1 = _context["catch"](95);
                notFoundRoute = '/_error';

              case 104:
                _context.next = 106;
                return this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
                  shallow: false
                });

              case 106:
                routeInfo = _context.sent;

              case 107:
                Router.events.emit('beforeHistoryChange', as, routeProps);
                this.changeState(method, url, as, options);

                if (true) {
                  appComp = this.components['/_app'].Component;
                  window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
                } // shallow routing is only allowed for same page URL changes.


                isValidShallowRoute = options.shallow && this.route === route;

                if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
                  // ensure statusCode is still correct for static 500 page
                  // when updating query information
                  props.pageProps.statusCode = 500;
                }

                _context.next = 114;
                return this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
                  x: 0,
                  y: 0
                }))["catch"](function (e) {
                  if (e.cancelled) error = error || e;else throw e;
                });

              case 114:
                if (!error) {
                  _context.next = 117;
                  break;
                }

                Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
                throw error;

              case 117:
                if (false) {}

                Router.events.emit('routeChangeComplete', as, routeProps);
                return _context.abrupt("return", true);

              case 122:
                _context.prev = 122;
                _context.t2 = _context["catch"](77);

                if (!_context.t2.cancelled) {
                  _context.next = 126;
                  break;
                }

                return _context.abrupt("return", false);

              case 126:
                throw _context.t2;

              case 127:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[36, 46], [77, 122], [95, 101]]);
      }));

      function change(_x, _x2, _x3, _x4, _x5) {
        return _change.apply(this, arguments);
      }

      return change;
    }()
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
        this._shallow = options.shallow;
        window.history[method]({
          url: url,
          as: as,
          options: options,
          __N: true,
          idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "handleRouteInfoError",
    value: function () {
      var _handleRouteInfoError = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(err, pathname, query, as, routeProps, loadErrorFail) {
        var Component, styleSheets, props, _yield$this$fetchComp, routeInfo;

        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!err.cancelled) {
                  _context2.next = 2;
                  break;
                }

                throw err;

              case 2:
                if (!((0, _routeLoader.isAssetError)(err) || loadErrorFail)) {
                  _context2.next = 6;
                  break;
                }

                Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
                //  1. Page doesn't exists
                //  2. Page does exist in a different zone
                //  3. Internal error while loading the page
                // So, doing a hard reload is the proper way to deal with this.

                window.location.href = as; // Changing the URL doesn't block executing the current code path.
                // So let's throw a cancellation error stop the routing logic.

                throw buildCancellationError();

              case 6:
                _context2.prev = 6;

                if (!(typeof Component === 'undefined' || typeof styleSheets === 'undefined')) {
                  _context2.next = 14;
                  break;
                }

                ;
                _context2.next = 11;
                return this.fetchComponent('/_error');

              case 11:
                _yield$this$fetchComp = _context2.sent;
                Component = _yield$this$fetchComp.page;
                styleSheets = _yield$this$fetchComp.styleSheets;

              case 14:
                routeInfo = {
                  props: props,
                  Component: Component,
                  styleSheets: styleSheets,
                  err: err,
                  error: err
                };

                if (routeInfo.props) {
                  _context2.next = 26;
                  break;
                }

                _context2.prev = 16;
                _context2.next = 19;
                return this.getInitialProps(Component, {
                  err: err,
                  pathname: pathname,
                  query: query
                });

              case 19:
                routeInfo.props = _context2.sent;
                _context2.next = 26;
                break;

              case 22:
                _context2.prev = 22;
                _context2.t0 = _context2["catch"](16);
                console.error('Error in error page `getInitialProps`: ', _context2.t0);
                routeInfo.props = {};

              case 26:
                return _context2.abrupt("return", routeInfo);

              case 29:
                _context2.prev = 29;
                _context2.t1 = _context2["catch"](6);
                return _context2.abrupt("return", this.handleRouteInfoError(_context2.t1, pathname, query, as, routeProps, true));

              case 32:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[6, 29], [16, 22]]);
      }));

      function handleRouteInfoError(_x6, _x7, _x8, _x9, _x10, _x11) {
        return _handleRouteInfoError.apply(this, arguments);
      }

      return handleRouteInfoError;
    }()
  }, {
    key: "getRouteInfo",
    value: function () {
      var _getRouteInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(route, pathname, query, as, resolvedAs, routeProps) {
        var _this2 = this;

        var existingRouteInfo, cachedRouteInfo, routeInfo, Component, __N_SSG, __N_SSP, _require, isValidElementType, dataHref, props;

        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                existingRouteInfo = this.components[route];

                if (!(routeProps.shallow && existingRouteInfo && this.route === route)) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt("return", existingRouteInfo);

              case 4:
                cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;

                if (!cachedRouteInfo) {
                  _context3.next = 9;
                  break;
                }

                _context3.t0 = cachedRouteInfo;
                _context3.next = 12;
                break;

              case 9:
                _context3.next = 11;
                return this.fetchComponent(route).then(function (res) {
                  return {
                    Component: res.page,
                    styleSheets: res.styleSheets,
                    __N_SSG: res.mod.__N_SSG,
                    __N_SSP: res.mod.__N_SSP
                  };
                });

              case 11:
                _context3.t0 = _context3.sent;

              case 12:
                routeInfo = _context3.t0;
                Component = routeInfo.Component, __N_SSG = routeInfo.__N_SSG, __N_SSP = routeInfo.__N_SSP;

                if (false) {}

                _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"), isValidElementType = _require.isValidElementType;

                if (isValidElementType(Component)) {
                  _context3.next = 18;
                  break;
                }

                throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));

              case 18:
                if (__N_SSG || __N_SSP) {
                  dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
                    pathname: pathname,
                    query: query
                  }), resolvedAs, __N_SSG, this.locale);
                }

                _context3.next = 21;
                return this._getData(function () {
                  return __N_SSG ? _this2._getStaticData(dataHref) : __N_SSP ? _this2._getServerData(dataHref) : _this2.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
                  {
                    pathname: pathname,
                    query: query,
                    asPath: as
                  });
                });

              case 21:
                props = _context3.sent;
                routeInfo.props = props;
                this.components[route] = routeInfo;
                return _context3.abrupt("return", routeInfo);

              case 27:
                _context3.prev = 27;
                _context3.t1 = _context3["catch"](0);
                return _context3.abrupt("return", this.handleRouteInfoError(_context3.t1, pathname, query, as, routeProps));

              case 30:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 27]]);
      }));

      function getRouteInfo(_x12, _x13, _x14, _x15, _x16, _x17) {
        return _getRouteInfo.apply(this, arguments);
      }

      return getRouteInfo;
    }()
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data, resetScroll) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      return this.notify(data, resetScroll);
    }
    /**
    * Callback to execute before replacing router state
    * @param cb callback to be executed
    */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value or `#top`
      // To mirror browsers


      if (hash === '' || hash === 'top') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
    * Prefetch page code, you may wait for the data during page rendering.
    * This feature only works in production!
    * @param url the href of prefetched page
    * @param asPath the as path of the prefetched page
    */

  }, {
    key: "prefetch",
    value: function () {
      var _prefetch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(url) {
        var _this3 = this;

        var asPath,
            options,
            parsed,
            pathname,
            parsedAs,
            localePathResult,
            pages,
            resolvedAs,
            rewrites,
            _yield2,
            rewritesResult,
            route,
            _args4 = arguments;

        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                asPath = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : url;
                options = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : {};
                parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
                pathname = parsed.pathname;

                if (false) {}

                _context4.next = 7;
                return this.pageLoader.getPageList();

              case 7:
                pages = _context4.sent;
                resolvedAs = asPath;

                if (true) {
                  _context4.next = 19;
                  break;
                }

                _context4.next = 12;
                return (0, _routeLoader.getClientBuildManifest)();

              case 12:
                _yield2 = _context4.sent;
                rewrites = _yield2.__rewrites;
                rewritesResult = (0, _resolveRewrites["default"])(addBasePath(addLocale(asPath, this.locale)), pages, rewrites, parsed.query, function (p) {
                  return resolveDynamicRoute(p, pages);
                }, this.locales);
                resolvedAs = delLocale(delBasePath(rewritesResult.asPath), this.locale);

                if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
                  // if this directly matches a page we need to update the href to
                  // allow the correct page chunk to be loaded
                  pathname = rewritesResult.resolvedHref;
                  parsed.pathname = pathname;
                  url = (0, _utils.formatWithValidation)(parsed);
                }

                _context4.next = 21;
                break;

              case 19:
                parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

                if (parsed.pathname !== pathname) {
                  pathname = parsed.pathname;
                  url = (0, _utils.formatWithValidation)(parsed);
                }

              case 21:
                route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

                if (false) {}

                return _context4.abrupt("return");

              case 24:
                _context4.next = 26;
                return Promise.all([this.pageLoader._isSsg(route).then(function (isSsg) {
                  return isSsg ? _this3._getStaticData(_this3.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : _this3.locale)) : false;
                }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);

              case 26:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function prefetch(_x18) {
        return _prefetch.apply(this, arguments);
      }

      return prefetch;
    }()
  }, {
    key: "fetchComponent",
    value: function () {
      var _fetchComponent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(route) {
        var cancelled, cancel, componentResult, error;
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                cancelled = false;

                cancel = this.clc = function () {
                  cancelled = true;
                };

                _context5.next = 4;
                return this.pageLoader.loadPage(route);

              case 4:
                componentResult = _context5.sent;

                if (!cancelled) {
                  _context5.next = 9;
                  break;
                }

                error = new Error("Abort fetching component for route: \"".concat(route, "\""));
                error.cancelled = true;
                throw error;

              case 9:
                if (cancel === this.clc) {
                  this.clc = null;
                }

                return _context5.abrupt("return", componentResult);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function fetchComponent(_x19) {
        return _fetchComponent.apply(this, arguments);
      }

      return fetchComponent;
    }()
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this4 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this4.clc) {
          _this4.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "_getStaticData",
    value: function _getStaticData(dataHref) {
      var _this5 = this;

      var _URL = new URL(dataHref, window.location.href),
          cacheKey = _URL.href;

      if (false) {}

      return fetchNextData(dataHref, this.isSsr).then(function (data) {
        _this5.sdc[cacheKey] = data;
        return data;
      });
    }
  }, {
    key: "_getServerData",
    value: function _getServerData(dataHref) {
      var _this6 = this;

      var _URL2 = new URL(dataHref, window.location.href),
          resourceKey = _URL2.href;

      if (this.sdr[resourceKey]) {
        return this.sdr[resourceKey];
      }

      return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(function (data) {
        delete _this6.sdr[resourceKey];
        return data;
      })["catch"](function (err) {
        delete _this6.sdr[resourceKey];
        throw err;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return (0, _utils.loadGetInitialProps)(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as, routeProps) {
      if (this.clc) {
        Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data, resetScroll) {
      return this.sub(data, this.components['/_app'].Component, resetScroll);
    }
  }]);

  return Router;
}();

exports.default = Router;
Router.events = (0, _mitt["default"])();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


var slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  var auth = urlObj.auth,
      hostname = urlObj.hostname;
  var protocol = urlObj.protocol || '';
  var pathname = urlObj.pathname || '';
  var hash = urlObj.hash || '';
  var query = urlObj.query || '';
  var host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? "[".concat(hostname, "]") : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  var search = urlObj.search || query && "?".concat(query) || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return "".concat(protocol).concat(host).concat(pathname).concat(search).concat(hash);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js ***!
  \******************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.default = getAssetPathFromRoute; // Translates a logical route into its pages asset path (relative from a common prefix)
// "asset path" being its javascript file, data file, prerendered html,...

function getAssetPathFromRoute(route) {
  var ext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var path = route === '/' ? '/index' : /^\/index(\/|$)/.test(route) ? "/index".concat(route) : "".concat(route);
  return path + ext;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  var globalBase = new URL( false ? 0 : (0, _utils.getLocationOrigin)());
  var resolvedBase = base ? new URL(base, globalBase) : globalBase;

  var _URL = new URL(url, resolvedBase),
      pathname = _URL.pathname,
      searchParams = _URL.searchParams,
      search = _URL.search,
      hash = _URL.hash,
      href = _URL.href,
      origin = _URL.origin;

  if (origin !== globalBase.origin) {
    throw new Error("invariant: invalid relative URL, router received ".concat(url));
  }

  return {
    pathname: pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search: search,
    hash: hash,
    href: href.slice(globalBase.origin.length)
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  var query = {};
  searchParams.forEach(function (value, key) {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  var result = new URLSearchParams();
  Object.entries(urlQuery).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (Array.isArray(value)) {
      value.forEach(function (item) {
        return result.append(key, stringifyUrlQueryParam(item));
      });
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target) {
  for (var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    searchParamsList[_key - 1] = arguments[_key];
  }

  searchParamsList.forEach(function (searchParams) {
    Array.from(searchParams.keys()).forEach(function (key) {
      return target["delete"](key);
    });
    searchParams.forEach(function (value, key) {
      return target.append(key, value);
    });
  });
  return target;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = function decode(param) {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        var err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  var optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  var repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat: repeat,
    optional: optional
  };
}

function getRouteRegex(normalizedRoute) {
  var segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = segments.map(function (segment) {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      var _parseParameter = parseParameter(segment.slice(1, -1)),
          key = _parseParameter.key,
          optional = _parseParameter.optional,
          repeat = _parseParameter.repeat;

      groups[key] = {
        pos: groupIndex++,
        repeat: repeat,
        optional: optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return "/".concat(escapeRegex(segment));
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (false) { var namedParameterizedRoute, routeKeys, getSafeRouteKey, routeKeyCharLength, routeKeyCharCode; }

  return {
    re: new RegExp("^".concat(parameterizedRoute, "(?:/)?$")),
    groups: groups
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _toConsumableArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _assertThisInitialized = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _inherits = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

exports.__esModule = true;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

var _default = /*#__PURE__*/function (_react$Component) {
  _inherits(_default, _react$Component);

  var _super = _createSuper(_default);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, props);
    _this._hasHeadManager = void 0;

    _this.emitChange = function () {
      if (_this._hasHeadManager) {
        _this.props.headManager.updateHead(_this.props.reduceComponentsToState(_toConsumableArray(_this.props.headManager.mountedInstances), _this.props));
      }
    };

    _this._hasHeadManager = _this.props.headManager && _this.props.headManager.mountedInstances;

    if (isServer && _this._hasHeadManager) {
      _this.props.headManager.mountedInstances.add(_assertThisInitialized(_this));

      _this.emitChange();
    }

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances.add(this);
      }

      this.emitChange();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.emitChange();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances["delete"](this);
      }

      this.emitChange();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  var used = false;
  var result;
  return function () {
    if (!used) {
      used = true;
      result = fn.apply(void 0, arguments);
    }

    return result;
  };
}

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

function loadGetInitialProps(_x, _x2) {
  return _loadGetInitialProps.apply(this, arguments);
}

function _loadGetInitialProps() {
  _loadGetInitialProps = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(App, ctx) {
    var _App$prototype, message, res, props, _message;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (false) {}

            if (!((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps)) {
              _context.next = 4;
              break;
            }

            message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.");
            throw new Error(message);

          case 4:
            // when called from _app `ctx` is nested in `ctx`
            res = ctx.res || ctx.ctx && ctx.ctx.res;

            if (App.getInitialProps) {
              _context.next = 12;
              break;
            }

            if (!(ctx.ctx && ctx.Component)) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return loadGetInitialProps(ctx.Component, ctx.ctx);

          case 9:
            _context.t0 = _context.sent;
            return _context.abrupt("return", {
              pageProps: _context.t0
            });

          case 11:
            return _context.abrupt("return", {});

          case 12:
            _context.next = 14;
            return App.getInitialProps(ctx);

          case 14:
            props = _context.sent;

            if (!(res && isResSent(res))) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("return", props);

          case 17:
            if (props) {
              _context.next = 20;
              break;
            }

            _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
            throw new Error(_message);

          case 20:
            if (true) {
              if (Object.keys(props).length === 0 && !ctx.ctx) {
                console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps"));
              }
            }

            return _context.abrupt("return", props);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadGetInitialProps.apply(this, arguments);
}

var urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

var SP = typeof performance !== 'undefined';
exports.SP = SP;
var ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_xampp_htdocs_mediumxx_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var _public_static_styles_global_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/static/styles/global-styles.css */ "./public/static/styles/global-styles.css");
/* harmony import */ var _public_static_styles_global_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_static_styles_global_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-themes */ "./node_modules/next-themes/dist/index.modern.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\xampp\\htdocs\\mediumxx\\pages\\_app.js",
    _this = undefined;

var __jsx = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement);





var Loading = function Loading() {
  return __jsx("div", {
    className: "loading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, __jsx("h1", {
    className: "text-warning",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, "Loading"));
};

_c = Loading;

function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx(next_themes__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {
    attribute: "class",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_2__.default, {
    placeholder: __jsx(Loading, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 30
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(Component, (0,D_xampp_htdocs_mediumxx_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }))));
}

_c2 = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c, _c2;

$RefreshReg$(_c, "Loading");
$RefreshReg$(_c2, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next-themes/dist/index.modern.js":
/*!*******************************************************!*\
  !*** ./node_modules/next-themes/dist/index.modern.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeProvider": function() { return /* binding */ f; },
/* harmony export */   "useTheme": function() { return /* binding */ d; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var s=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({setTheme:function(e){},themes:[]}),d=function(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(s)},u=["light","dark"],l="(prefers-color-scheme: dark)",f=function(t){var n=t.forcedTheme,c=t.disableTransitionOnChange,m=void 0!==c&&c,d=t.enableSystem,f=void 0===d||d,g=t.enableColorScheme,T=void 0===g||g,w=t.storageKey,S=void 0===w?"theme":w,b=t.themes,E=void 0===b?["light","dark"]:b,k=t.defaultTheme,x=void 0===k?f?"system":"light":k,L=t.attribute,I=void 0===L?"data-theme":L,C=t.value,M=t.children,_=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function(){return v(S,x)}),O=_[0],H=_[1],K=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function(){return v(S)}),N=K[0],j=K[1],A=C?Object.values(C):E,J=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(e){var t=p(e);j(t),"system"!==O||n||z(t,!1)},[O,n]),P=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(J);P.current=J;var z=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(e,t,n){void 0===t&&(t=!0),void 0===n&&(n=!0);var r=(null==C?void 0:C[e])||e,o=m&&n?y():null;if(t)try{localStorage.setItem(S,e)}catch(e){}if("system"===e&&f){var i=p();r=(null==C?void 0:C[i])||i}if(n){var a,c=document.documentElement;"class"===I?((a=c.classList).remove.apply(a,A),c.classList.add(r)):c.setAttribute(I,r),null==o||o()}},[]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var e=function(){return P.current.apply(P,[].slice.call(arguments))},t=window.matchMedia(l);return t.addListener(e),e(t),function(){return t.removeListener(e)}},[]);var V=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(e){n?z(e,!0,!1):z(e),H(e)},[n]);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var e=function(e){e.key===S&&V(e.newValue)};return window.addEventListener("storage",e),function(){return window.removeEventListener("storage",e)}},[V]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(T){var e=n&&u.includes(n)?n:O&&u.includes(O)?O:"system"===O&&N||null;document.documentElement.style.setProperty("color-scheme",e)}},[T,O,N,n]),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(s.Provider,{value:{theme:O,setTheme:V,forcedTheme:n,resolvedTheme:"system"===O?N:O,themes:f?[].concat(E,["system"]):E,systemTheme:f?N:void 0}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(h,{forcedTheme:n,storageKey:S,attribute:I,value:C,enableSystem:f,defaultTheme:x,attrs:A}),M)},h=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function(t){var n=t.forcedTheme,r=t.storageKey,o=t.attribute,i=t.enableSystem,a=t.defaultTheme,c=t.value,s="class"===o?"var d=document.documentElement.classList;d.remove("+t.attrs.map(function(e){return"'"+e+"'"}).join(",")+");":"var d=document.documentElement;",d=function(e,t){e=(null==c?void 0:c[e])||e;var n=t?e:"'"+e+"'";return"class"===o?"d.add("+n+")":"d.setAttribute('"+o+"', "+n+")"},u="system"===a;return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_1___default()),null,react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script",n?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){"+s+d(n)+"}()"}}:i?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try {"+s+"var e=localStorage.getItem('"+r+"');"+(u?"":d(a)+";")+'if("system"===e||(!e&&'+u+')){var t="'+l+'",m=window.matchMedia(t);m.media!==t||m.matches?'+d("dark")+":"+d("light")+"}else if(e) "+(c?"var x="+JSON.stringify(c)+";":"")+d(c?"x[e]":"e",!0)+"}catch(e){}}()"}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try{"+s+'var e=localStorage.getItem("'+r+'");if(e){'+(c?"var x="+JSON.stringify(c)+";":"")+d(c?"x[e]":"e",!0)+"}else{"+d(a)+";}}catch(t){}}();"}}))},function(e,t){return e.forcedTheme===t.forcedTheme}),v=function(e,t){if("undefined"!=typeof window){var n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},y=function(){var e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),function(){window.getComputedStyle(document.body),setTimeout(function(){document.head.removeChild(e)},1)}},p=function(e){return e||(e=window.matchMedia(l)),e.matches?"dark":"light"};


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! ***!
  \**********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js");
      }
    ]);
  

/***/ }),

/***/ "./public/static/styles/global-styles.css":
/*!************************************************!*\
  !*** ./public/static/styles/global-styles.css ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./global-styles.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./public/static/styles/global-styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./global-styles.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./public/static/styles/global-styles.css",
      function () {
        content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./global-styles.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./public/static/styles/global-styles.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=id+' '+count.toString();idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier:identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:0;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(function(key){style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?'@media '+obj.media+' {'+obj.css+'}':obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+' */';}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=function(){removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=function(list,options){options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./public/static/styles/bootstrap.css":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./public/static/styles/bootstrap.css ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";/*!\n * Bootstrap v5.0.0 (https://getbootstrap.com/)\n * Copyright 2011-2021 The Bootstrap Authors\n * Copyright 2011-2021 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */:root{--bs-blue:#0d6efd;--bs-indigo:#6610f2;--bs-purple:#6f42c1;--bs-pink:#d63384;--bs-red:#dc3545;--bs-orange:#fd7e14;--bs-yellow:#ffc107;--bs-green:#198754;--bs-teal:#20c997;--bs-cyan:#0dcaf0;--bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-success:#198754;--bs-info:#0dcaf0;--bs-warning:#ffc107;--bs-danger:#dc3545;--bs-light:#f8f9fa;--bs-dark:#212529;--bs-font-sans-serif:system-ui,-apple-system,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--bs-font-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--bs-gradient:linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))}*,::after,::before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}@media (prefers-reduced-motion:no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:var(--bs-font-sans-serif);font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}hr{margin:1rem 0;color:inherit;background-color:currentColor;border:0;opacity:.25}hr:not([size]){height:1px}.h4,h1,h2,h3,h4,h5{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2}h1{font-size:-moz-calc(1.375rem + 1.5vw);font-size:calc(1.375rem + 1.5vw)}@media (min-width:1200px){h1{font-size:2.5rem}}h2{font-size:-moz-calc(1.325rem + .9vw);font-size:calc(1.325rem + .9vw)}@media (min-width:1200px){h2{font-size:2rem}}h3{font-size:-moz-calc(1.3rem + .6vw);font-size:calc(1.3rem + .6vw)}@media (min-width:1200px){h3{font-size:1.75rem}}.h4,h4{font-size:-moz-calc(1.275rem + .3vw);font-size:calc(1.275rem + .3vw)}@media (min-width:1200px){.h4,h4{font-size:1.5rem}}h5{font-size:1.25rem}p{margin-top:0;margin-bottom:1rem}ol,ul{padding-left:2rem}ol,ul{margin-top:0;margin-bottom:1rem}ul ul{margin-bottom:0}blockquote{margin:0 0 1rem}sup{position:relative;font-size:.75em;line-height:0;vertical-align:baseline}sup{top:-.5em}a{color:#0d6efd;text-decoration:underline}a:hover{color:#0a58ca}figure{margin:0 0 1rem}img,svg{vertical-align:middle}label{display:inline-block}button{border-radius:0}button:focus:not(:focus-visible){outline:0}button,input,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button{text-transform:none}[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}::-moz-focus-inner{padding:0;border-style:none}textarea{resize:vertical}::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-text,::-webkit-datetime-edit-year-field{padding:0}::-webkit-inner-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-color-swatch-wrapper{padding:0}::file-selector-button{font:inherit}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.container{width:100%;padding-right:var(--bs-gutter-x,.75rem);padding-left:var(--bs-gutter-x,.75rem);margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}@media (min-width:1400px){.container{max-width:1320px}}.row{--bs-gutter-x:1.5rem;--bs-gutter-y:0;display:-moz-box;display:flex;flex-wrap:wrap;margin-top:-moz-calc(var(--bs-gutter-y) * -1);margin-top:calc(var(--bs-gutter-y) * -1);margin-right:-moz-calc(var(--bs-gutter-x)/ -2);margin-right:calc(var(--bs-gutter-x)/ -2);margin-left:-moz-calc(var(--bs-gutter-x)/ -2);margin-left:calc(var(--bs-gutter-x)/ -2)}.row>*{flex-shrink:0;width:100%;max-width:100%;padding-right:-moz-calc(var(--bs-gutter-x)/ 2);padding-right:calc(var(--bs-gutter-x)/ 2);padding-left:-moz-calc(var(--bs-gutter-x)/ 2);padding-left:calc(var(--bs-gutter-x)/ 2);margin-top:var(--bs-gutter-y)}.col-4{-moz-box-flex:0;flex:0 0 auto;width:33.3333333333%}.col-8{-moz-box-flex:0;flex:0 0 auto;width:66.6666666667%}@media (min-width:576px){.col-sm-12{-moz-box-flex:0;flex:0 0 auto;width:100%}}@media (min-width:768px){.col-md-2{-moz-box-flex:0;flex:0 0 auto;width:16.6666666667%}.col-md-3{-moz-box-flex:0;flex:0 0 auto;width:25%}.col-md-4{-moz-box-flex:0;flex:0 0 auto;width:33.3333333333%}.col-md-5{-moz-box-flex:0;flex:0 0 auto;width:41.6666666667%}.col-md-6{-moz-box-flex:0;flex:0 0 auto;width:50%}.col-md-7{-moz-box-flex:0;flex:0 0 auto;width:58.3333333333%}.col-md-8{-moz-box-flex:0;flex:0 0 auto;width:66.6666666667%}.col-md-9{-moz-box-flex:0;flex:0 0 auto;width:75%}.col-md-10{-moz-box-flex:0;flex:0 0 auto;width:83.3333333333%}.col-md-12{-moz-box-flex:0;flex:0 0 auto;width:100%}}@media (min-width:992px){.col-lg-6{-moz-box-flex:0;flex:0 0 auto;width:50%}}@media (min-width:1200px){.col-xl-3{-moz-box-flex:0;flex:0 0 auto;width:25%}.col-xl-9{-moz-box-flex:0;flex:0 0 auto;width:75%}}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:.25rem;-webkit-transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;-moz-transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control{-webkit-transition:none;-moz-transition:none;transition:none}}.form-control[type=file]:not(:disabled):not(:-moz-read-only){cursor:pointer}.form-control[type=file]:not(:disabled):not(:read-only){cursor:pointer}.form-control:focus{color:#212529;background-color:#fff;border-color:#86b7fe;outline:0;-webkit-box-shadow:0 0 0 .25rem rgba(13,110,253,.25);box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-control::-webkit-date-and-time-value{height:1.5em}.form-control::-moz-placeholder{color:#6c757d;opacity:1}.form-control:-moz-read-only{background-color:#e9ecef;opacity:1}.form-control:disabled{background-color:#e9ecef;opacity:1}.form-control::file-selector-button{padding:.375rem .75rem;margin:-.375rem -.75rem;-webkit-margin-end:.75rem;-moz-margin-end:.75rem;margin-inline-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:1px;border-radius:0;-webkit-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;-moz-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control::file-selector-button{-webkit-transition:none;-moz-transition:none;transition:none}}.form-control:hover:not(:disabled):not(:-moz-read-only)::file-selector-button{background-color:#dde0e3}.form-control:hover:not(:disabled):not(:read-only)::file-selector-button{background-color:#dde0e3}.form-control::-webkit-file-upload-button{padding:.375rem .75rem;margin:-.375rem -.75rem;-webkit-margin-end:.75rem;margin-inline-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:1px;border-radius:0;-webkit-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control::-webkit-file-upload-button{-webkit-transition:none;transition:none}}.form-control:hover:not(:disabled):not(:read-only)::-webkit-file-upload-button{background-color:#dde0e3}.form-control-sm::file-selector-button{padding:.25rem .5rem;margin:-.25rem -.5rem;-webkit-margin-end:.5rem;-moz-margin-end:.5rem;margin-inline-end:.5rem}.form-control-lg::file-selector-button{padding:.5rem 1rem;margin:-.5rem -1rem;-webkit-margin-end:1rem;-moz-margin-end:1rem;margin-inline-end:1rem}.form-control-color:not(:disabled):not(:-moz-read-only){cursor:pointer}.form-control-color:not(:disabled):not(:read-only){cursor:pointer}.form-floating>.form-control:not(:-moz-placeholder-shown){padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:not(:-moz-placeholder-shown)~label{opacity:.65;-moz-transform:scale(.85) translateY(-.5rem) translateX(.15rem);transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.btn{display:inline-block;font-weight:400;line-height:1.5;color:#212529;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;border-radius:.25rem;-webkit-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;-moz-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.btn{-webkit-transition:none;-moz-transition:none;transition:none}}.btn:hover{color:#212529}.btn:focus{outline:0;-webkit-box-shadow:0 0 0 .25rem rgba(13,110,253,.25);box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.btn:disabled{pointer-events:none;opacity:.65}.btn-success{color:#fff;background-color:#198754;border-color:#198754}.btn-success:hover{color:#fff;background-color:#157347;border-color:#146c43}.btn-success:focus{color:#fff;background-color:#157347;border-color:#146c43;-webkit-box-shadow:0 0 0 .25rem rgba(60,153,110,.5);box-shadow:0 0 0 .25rem rgba(60,153,110,.5)}.btn-success:active{color:#fff;background-color:#146c43;border-color:#13653f}.btn-success:active:focus{-webkit-box-shadow:0 0 0 .25rem rgba(60,153,110,.5);box-shadow:0 0 0 .25rem rgba(60,153,110,.5)}.btn-success:disabled{color:#fff;background-color:#198754;border-color:#198754}.navbar-brand{padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;text-decoration:none;white-space:nowrap}.navbar-nav{display:-moz-box;display:flex;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.clearfix::after{display:block;clear:both;content:\"\"}.visually-hidden-focusable:not(:focus):not(:focus-within){position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}.float-start{float:left!important}.float-end{float:right!important}.d-inline-block{display:inline-block!important}.d-flex{display:-moz-box!important;display:flex!important}.d-inline-flex{display:-moz-inline-box!important;display:inline-flex!important}.d-none{display:none!important}.border{border:1px solid #dee2e6!important}.w-50{width:50%!important}.w-100{width:100%!important}.justify-content-between{-moz-box-pack:justify!important;justify-content:space-between!important}.align-items-center{-moz-box-align:center!important;align-items:center!important}.align-self-center{align-self:center!important}.mt-0{margin-top:0!important}.mt-2{margin-top:.5rem!important}.mt-5{margin-top:3rem!important}.mb-2{margin-bottom:.5rem!important}.mb-3{margin-bottom:1rem!important}.mb-4{margin-bottom:1.5rem!important}.mb-5{margin-bottom:3rem!important}.p-5{padding:3rem!important}.pt-5{padding-top:3rem!important}.pb-5{padding-bottom:3rem!important}.text-center{text-align:center!important}@media (min-width:576px){.text-sm-center{text-align:center!important}}@media (min-width:768px){.d-md-block{display:block!important}.d-md-none{display:none!important}.mb-md-0{margin-bottom:0!important}}@media (min-width:992px){.d-lg-inline{display:inline!important}.d-lg-block{display:block!important}.d-lg-flex{display:-moz-box!important;display:flex!important}.d-lg-none{display:none!important}}\n/*# sourceMappingURL=bootstrap.min.css.map */", "",{"version":3,"sources":["webpack://public/static/styles/bootstrap.css"],"names":[],"mappings":"AAAA,gBAAgB,CAAC;;;;;EAKf,CAAC,MAAM,iBAAiB,CAAC,mBAAmB,CAAC,mBAAmB,CAAC,iBAAiB,CAAC,gBAAgB,CAAC,mBAAmB,CAAC,mBAAmB,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,iBAAiB,CAAC,eAAe,CAAC,iBAAiB,CAAC,sBAAsB,CAAC,oBAAoB,CAAC,sBAAsB,CAAC,oBAAoB,CAAC,iBAAiB,CAAC,oBAAoB,CAAC,mBAAmB,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,wMAAwM,CAAC,kGAAkG,CAAC,wFAAwF,CAAC,mBAAmB,6BAAoB,CAApB,0BAAoB,CAApB,qBAAqB,CAAC,8CAA8C,MAAM,sBAAsB,CAAC,CAAC,KAAK,QAAQ,CAAC,qCAAqC,CAAC,cAAc,CAAC,eAAe,CAAC,eAAe,CAAC,aAAa,CAAC,qBAAqB,CAAC,6BAA6B,CAAC,uCAAuC,CAAC,GAAG,aAAa,CAAC,aAAa,CAAC,6BAA6B,CAAC,QAAQ,CAAC,WAAW,CAAC,eAAe,UAAU,CAAC,mBAAmB,YAAY,CAAC,mBAAmB,CAAC,eAAe,CAAC,eAAe,CAAC,GAAG,qCAA+B,CAA/B,gCAAgC,CAAC,0BAA0B,GAAG,gBAAgB,CAAC,CAAC,GAAG,oCAA8B,CAA9B,+BAA+B,CAAC,0BAA0B,GAAG,cAAc,CAAC,CAAC,GAAG,kCAA4B,CAA5B,6BAA6B,CAAC,0BAA0B,GAAG,iBAAiB,CAAC,CAAC,OAAO,oCAA8B,CAA9B,+BAA+B,CAAC,0BAA0B,OAAO,gBAAgB,CAAC,CAAC,GAAG,iBAAiB,CAAC,EAAE,YAAY,CAAC,kBAAkB,CAAC,MAAM,iBAAiB,CAAC,MAAM,YAAY,CAAC,kBAAkB,CAAC,MAAM,eAAe,CAAC,WAAW,eAAe,CAAC,IAAI,iBAAiB,CAAC,eAAe,CAAC,aAAa,CAAC,uBAAuB,CAAC,IAAI,SAAS,CAAC,EAAE,aAAa,CAAC,yBAAyB,CAAC,QAAQ,aAAa,CAAC,OAAO,eAAe,CAAC,QAAQ,qBAAqB,CAAC,MAAM,oBAAoB,CAAC,OAAO,eAAe,CAAC,iCAAiC,SAAS,CAAC,sBAAsB,QAAQ,CAAC,mBAAmB,CAAC,iBAAiB,CAAC,mBAAmB,CAAC,OAAO,mBAAmB,CAAC,qBAAqB,yBAAyB,CAAC,4GAA4G,cAAc,CAAC,mBAAmB,SAAS,CAAC,iBAAiB,CAAC,SAAS,eAAe,CAAC,+OAA+O,SAAS,CAAC,4BAA4B,WAAW,CAAC,4BAA4B,uBAAuB,CAAC,+BAA+B,SAAS,CAAC,uBAAuB,YAAY,CAAC,6BAA6B,YAAY,CAAC,yBAAyB,CAAC,kBAAkB,oBAAoB,CAAC,mCAAmC,kBAAkB,CAAC,WAAW,UAAU,CAAC,uCAAuC,CAAC,sCAAsC,CAAC,iBAAiB,CAAC,gBAAgB,CAAC,yBAAyB,WAAW,eAAe,CAAC,CAAC,yBAAyB,WAAW,eAAe,CAAC,CAAC,yBAAyB,WAAW,eAAe,CAAC,CAAC,0BAA0B,WAAW,gBAAgB,CAAC,CAAC,0BAA0B,WAAW,gBAAgB,CAAC,CAAC,KAAK,oBAAoB,CAAC,eAAe,CAAC,gBAAY,CAAZ,YAAY,CAAC,cAAc,CAAC,6CAAwC,CAAxC,wCAAwC,CAAC,8CAAyC,CAAzC,yCAAyC,CAAC,6CAAuC,CAAvC,wCAAwC,CAAC,OAAO,aAAa,CAAC,UAAU,CAAC,cAAc,CAAC,8CAAyC,CAAzC,yCAAyC,CAAC,6CAAwC,CAAxC,wCAAwC,CAAC,6BAA6B,CAAC,OAAO,eAAa,CAAb,aAAa,CAAC,oBAAoB,CAAC,OAAO,eAAa,CAAb,aAAa,CAAC,oBAAoB,CAAC,yBAAyB,WAAW,eAAa,CAAb,aAAa,CAAC,UAAU,CAAC,CAAC,yBAAyB,UAAU,eAAa,CAAb,aAAa,CAAC,oBAAoB,CAAC,UAAU,eAAa,CAAb,aAAa,CAAC,SAAS,CAAC,UAAU,eAAa,CAAb,aAAa,CAAC,oBAAoB,CAAC,UAAU,eAAa,CAAb,aAAa,CAAC,oBAAoB,CAAC,UAAU,eAAa,CAAb,aAAa,CAAC,SAAS,CAAC,UAAU,eAAa,CAAb,aAAa,CAAC,oBAAoB,CAAC,UAAU,eAAa,CAAb,aAAa,CAAC,oBAAoB,CAAC,UAAU,eAAa,CAAb,aAAa,CAAC,SAAS,CAAC,WAAW,eAAa,CAAb,aAAa,CAAC,oBAAoB,CAAC,WAAW,eAAa,CAAb,aAAa,CAAC,UAAU,CAAC,CAAC,yBAAyB,UAAU,eAAa,CAAb,aAAa,CAAC,SAAS,CAAC,CAAC,0BAA0B,UAAU,eAAa,CAAb,aAAa,CAAC,SAAS,CAAC,UAAU,eAAa,CAAb,aAAa,CAAC,SAAS,CAAC,CAAC,cAAc,aAAa,CAAC,UAAU,CAAC,sBAAsB,CAAC,cAAc,CAAC,eAAe,CAAC,eAAe,CAAC,aAAa,CAAC,qBAAqB,CAAC,2BAA2B,CAAC,wBAAwB,CAAC,uBAAuB,CAAC,oBAAoB,CAAC,eAAe,CAAC,oBAAoB,CAAC,oFAAmE,CAAnE,4EAAmE,CAAnE,yEAAmE,CAAnE,oEAAmE,CAAnE,wGAAoE,CAAC,uCAAuC,cAAc,uBAAc,CAAd,oBAAc,CAAd,eAAe,CAAC,CAAC,6DAA6D,cAAc,CAAC,wDAAwD,cAAc,CAAC,oBAAoB,aAAa,CAAC,qBAAqB,CAAC,oBAAoB,CAAC,SAAS,CAAC,oDAA2C,CAA3C,4CAA4C,CAAC,2CAA2C,YAAY,CAAC,gCAAgC,aAAa,CAAC,SAAS,CAAC,6BAA6B,wBAAwB,CAAC,SAAS,CAAC,uBAAuB,wBAAwB,CAAC,SAAS,CAAC,oCAAoC,sBAAsB,CAAC,uBAAuB,CAAC,yBAAyB,CAAC,sBAAwB,CAAxB,wBAAwB,CAAC,aAAa,CAAC,wBAAwB,CAAC,mBAAmB,CAAC,oBAAoB,CAAC,kBAAkB,CAAC,cAAc,CAAC,2BAA2B,CAAC,eAAe,CAAC,6IAA4H,CAA5H,qIAA4H,CAA5H,kIAA4H,CAA5H,6HAA4H,CAA5H,iKAA6H,CAAC,uCAAuC,oCAAoC,uBAAc,CAAd,oBAAc,CAAd,eAAe,CAAC,CAAC,8EAA8E,wBAAwB,CAAC,yEAAyE,wBAAwB,CAAC,0CAA0C,sBAAsB,CAAC,uBAAuB,CAAC,yBAAyB,CAAC,wBAAwB,CAAC,aAAa,CAAC,wBAAwB,CAAC,mBAAmB,CAAC,oBAAoB,CAAC,kBAAkB,CAAC,cAAc,CAAC,2BAA2B,CAAC,eAAe,CAAC,qIAAqI,CAAC,6IAA4H,CAA5H,qIAA4H,CAA5H,6HAA4H,CAA5H,iKAA6H,CAAC,uCAAuC,0CAA0C,uBAAuB,CAAC,eAAe,CAAC,CAAC,+EAA+E,wBAAwB,CAAC,uCAAuC,oBAAoB,CAAC,qBAAqB,CAAC,wBAAwB,CAAC,qBAAsB,CAAtB,uBAAuB,CAAC,uCAAuC,kBAAkB,CAAC,mBAAmB,CAAC,uBAAuB,CAAC,oBAAqB,CAArB,sBAAsB,CAAC,wDAAwD,cAAc,CAAC,mDAAmD,cAAc,CAAC,0DAA0D,oBAAoB,CAAC,sBAAsB,CAAC,gEAAgE,WAAW,CAAC,+DAAyD,CAAzD,0DAA0D,CAAC,KAAK,oBAAoB,CAAC,eAAe,CAAC,eAAe,CAAC,aAAa,CAAC,iBAAiB,CAAC,oBAAoB,CAAC,qBAAqB,CAAC,cAAc,CAAC,wBAAwB,CAAC,qBAAqB,CAAC,oBAAgB,CAAhB,gBAAgB,CAAC,4BAA4B,CAAC,4BAA4B,CAAC,sBAAsB,CAAC,cAAc,CAAC,oBAAoB,CAAC,6IAA4H,CAA5H,qIAA4H,CAA5H,kIAA4H,CAA5H,6HAA4H,CAA5H,iKAA6H,CAAC,uCAAuC,KAAK,uBAAc,CAAd,oBAAc,CAAd,eAAe,CAAC,CAAC,WAAW,aAAa,CAAC,WAAW,SAAS,CAAC,oDAA2C,CAA3C,4CAA4C,CAAC,cAAc,mBAAmB,CAAC,WAAW,CAAC,aAAa,UAAU,CAAC,wBAAwB,CAAC,oBAAoB,CAAC,mBAAmB,UAAU,CAAC,wBAAwB,CAAC,oBAAoB,CAAC,mBAAmB,UAAU,CAAC,wBAAwB,CAAC,oBAAoB,CAAC,mDAA0C,CAA1C,2CAA2C,CAAC,oBAAoB,UAAU,CAAC,wBAAwB,CAAC,oBAAoB,CAAC,0BAA0B,mDAA0C,CAA1C,2CAA2C,CAAC,sBAAsB,UAAU,CAAC,wBAAwB,CAAC,oBAAoB,CAAC,cAAc,oBAAoB,CAAC,uBAAuB,CAAC,iBAAiB,CAAC,iBAAiB,CAAC,oBAAoB,CAAC,kBAAkB,CAAC,YAAY,gBAAY,CAAZ,YAAY,CAAC,wBAAqB,CAArB,yBAAqB,CAArB,qBAAqB,CAAC,cAAc,CAAC,eAAe,CAAC,eAAe,CAAC,iBAAiB,aAAa,CAAC,UAAU,CAAC,UAAU,CAAC,0DAA0D,2BAA2B,CAAC,mBAAmB,CAAC,oBAAoB,CAAC,mBAAmB,CAAC,qBAAqB,CAAC,yBAAyB,CAAC,4BAA4B,CAAC,4BAA4B,CAAC,kBAAkB,CAAC,aAAa,oBAAoB,CAAC,WAAW,qBAAqB,CAAC,gBAAgB,8BAA8B,CAAC,QAAQ,0BAAqB,CAArB,sBAAsB,CAAC,eAAe,iCAA4B,CAA5B,6BAA6B,CAAC,QAAQ,sBAAsB,CAAC,QAAQ,kCAAkC,CAAC,MAAM,mBAAmB,CAAC,OAAO,oBAAoB,CAAC,yBAAyB,+BAAsC,CAAtC,uCAAuC,CAAC,oBAAoB,+BAA2B,CAA3B,4BAA4B,CAAC,mBAAmB,2BAA2B,CAAC,MAAM,sBAAsB,CAAC,MAAM,0BAA0B,CAAC,MAAM,yBAAyB,CAAC,MAAM,6BAA6B,CAAC,MAAM,4BAA4B,CAAC,MAAM,8BAA8B,CAAC,MAAM,4BAA4B,CAAC,KAAK,sBAAsB,CAAC,MAAM,0BAA0B,CAAC,MAAM,6BAA6B,CAAC,aAAa,2BAA2B,CAAC,yBAAyB,gBAAgB,2BAA2B,CAAC,CAAC,yBAAyB,YAAY,uBAAuB,CAAC,WAAW,sBAAsB,CAAC,SAAS,yBAAyB,CAAC,CAAC,yBAAyB,aAAa,wBAAwB,CAAC,YAAY,uBAAuB,CAAC,WAAW,0BAAqB,CAArB,sBAAsB,CAAC,WAAW,sBAAsB,CAAC;AAChyU,4CAA4C","sourcesContent":["@charset \"UTF-8\";/*!\n * Bootstrap v5.0.0 (https://getbootstrap.com/)\n * Copyright 2011-2021 The Bootstrap Authors\n * Copyright 2011-2021 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */:root{--bs-blue:#0d6efd;--bs-indigo:#6610f2;--bs-purple:#6f42c1;--bs-pink:#d63384;--bs-red:#dc3545;--bs-orange:#fd7e14;--bs-yellow:#ffc107;--bs-green:#198754;--bs-teal:#20c997;--bs-cyan:#0dcaf0;--bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-success:#198754;--bs-info:#0dcaf0;--bs-warning:#ffc107;--bs-danger:#dc3545;--bs-light:#f8f9fa;--bs-dark:#212529;--bs-font-sans-serif:system-ui,-apple-system,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--bs-font-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--bs-gradient:linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))}*,::after,::before{box-sizing:border-box}@media (prefers-reduced-motion:no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:var(--bs-font-sans-serif);font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}hr{margin:1rem 0;color:inherit;background-color:currentColor;border:0;opacity:.25}hr:not([size]){height:1px}.h4,h1,h2,h3,h4,h5{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2}h1{font-size:calc(1.375rem + 1.5vw)}@media (min-width:1200px){h1{font-size:2.5rem}}h2{font-size:calc(1.325rem + .9vw)}@media (min-width:1200px){h2{font-size:2rem}}h3{font-size:calc(1.3rem + .6vw)}@media (min-width:1200px){h3{font-size:1.75rem}}.h4,h4{font-size:calc(1.275rem + .3vw)}@media (min-width:1200px){.h4,h4{font-size:1.5rem}}h5{font-size:1.25rem}p{margin-top:0;margin-bottom:1rem}ol,ul{padding-left:2rem}ol,ul{margin-top:0;margin-bottom:1rem}ul ul{margin-bottom:0}blockquote{margin:0 0 1rem}sup{position:relative;font-size:.75em;line-height:0;vertical-align:baseline}sup{top:-.5em}a{color:#0d6efd;text-decoration:underline}a:hover{color:#0a58ca}figure{margin:0 0 1rem}img,svg{vertical-align:middle}label{display:inline-block}button{border-radius:0}button:focus:not(:focus-visible){outline:0}button,input,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button{text-transform:none}[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}::-moz-focus-inner{padding:0;border-style:none}textarea{resize:vertical}::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-text,::-webkit-datetime-edit-year-field{padding:0}::-webkit-inner-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-color-swatch-wrapper{padding:0}::file-selector-button{font:inherit}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.container{width:100%;padding-right:var(--bs-gutter-x,.75rem);padding-left:var(--bs-gutter-x,.75rem);margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}@media (min-width:1400px){.container{max-width:1320px}}.row{--bs-gutter-x:1.5rem;--bs-gutter-y:0;display:flex;flex-wrap:wrap;margin-top:calc(var(--bs-gutter-y) * -1);margin-right:calc(var(--bs-gutter-x)/ -2);margin-left:calc(var(--bs-gutter-x)/ -2)}.row>*{flex-shrink:0;width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x)/ 2);padding-left:calc(var(--bs-gutter-x)/ 2);margin-top:var(--bs-gutter-y)}.col-4{flex:0 0 auto;width:33.3333333333%}.col-8{flex:0 0 auto;width:66.6666666667%}@media (min-width:576px){.col-sm-12{flex:0 0 auto;width:100%}}@media (min-width:768px){.col-md-2{flex:0 0 auto;width:16.6666666667%}.col-md-3{flex:0 0 auto;width:25%}.col-md-4{flex:0 0 auto;width:33.3333333333%}.col-md-5{flex:0 0 auto;width:41.6666666667%}.col-md-6{flex:0 0 auto;width:50%}.col-md-7{flex:0 0 auto;width:58.3333333333%}.col-md-8{flex:0 0 auto;width:66.6666666667%}.col-md-9{flex:0 0 auto;width:75%}.col-md-10{flex:0 0 auto;width:83.3333333333%}.col-md-12{flex:0 0 auto;width:100%}}@media (min-width:992px){.col-lg-6{flex:0 0 auto;width:50%}}@media (min-width:1200px){.col-xl-3{flex:0 0 auto;width:25%}.col-xl-9{flex:0 0 auto;width:75%}}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control[type=file]:not(:disabled):not(:-moz-read-only){cursor:pointer}.form-control[type=file]:not(:disabled):not(:read-only){cursor:pointer}.form-control:focus{color:#212529;background-color:#fff;border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-control::-webkit-date-and-time-value{height:1.5em}.form-control::-moz-placeholder{color:#6c757d;opacity:1}.form-control:-moz-read-only{background-color:#e9ecef;opacity:1}.form-control:disabled{background-color:#e9ecef;opacity:1}.form-control::file-selector-button{padding:.375rem .75rem;margin:-.375rem -.75rem;-webkit-margin-end:.75rem;margin-inline-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:1px;border-radius:0;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control::file-selector-button{transition:none}}.form-control:hover:not(:disabled):not(:-moz-read-only)::file-selector-button{background-color:#dde0e3}.form-control:hover:not(:disabled):not(:read-only)::file-selector-button{background-color:#dde0e3}.form-control::-webkit-file-upload-button{padding:.375rem .75rem;margin:-.375rem -.75rem;-webkit-margin-end:.75rem;margin-inline-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:1px;border-radius:0;-webkit-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control::-webkit-file-upload-button{-webkit-transition:none;transition:none}}.form-control:hover:not(:disabled):not(:read-only)::-webkit-file-upload-button{background-color:#dde0e3}.form-control-sm::file-selector-button{padding:.25rem .5rem;margin:-.25rem -.5rem;-webkit-margin-end:.5rem;margin-inline-end:.5rem}.form-control-lg::file-selector-button{padding:.5rem 1rem;margin:-.5rem -1rem;-webkit-margin-end:1rem;margin-inline-end:1rem}.form-control-color:not(:disabled):not(:-moz-read-only){cursor:pointer}.form-control-color:not(:disabled):not(:read-only){cursor:pointer}.form-floating>.form-control:not(:-moz-placeholder-shown){padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:not(:-moz-placeholder-shown)~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.btn{display:inline-block;font-weight:400;line-height:1.5;color:#212529;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{color:#212529}.btn:focus{outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.btn:disabled{pointer-events:none;opacity:.65}.btn-success{color:#fff;background-color:#198754;border-color:#198754}.btn-success:hover{color:#fff;background-color:#157347;border-color:#146c43}.btn-success:focus{color:#fff;background-color:#157347;border-color:#146c43;box-shadow:0 0 0 .25rem rgba(60,153,110,.5)}.btn-success:active{color:#fff;background-color:#146c43;border-color:#13653f}.btn-success:active:focus{box-shadow:0 0 0 .25rem rgba(60,153,110,.5)}.btn-success:disabled{color:#fff;background-color:#198754;border-color:#198754}.navbar-brand{padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;text-decoration:none;white-space:nowrap}.navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.clearfix::after{display:block;clear:both;content:\"\"}.visually-hidden-focusable:not(:focus):not(:focus-within){position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}.float-start{float:left!important}.float-end{float:right!important}.d-inline-block{display:inline-block!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}.d-none{display:none!important}.border{border:1px solid #dee2e6!important}.w-50{width:50%!important}.w-100{width:100%!important}.justify-content-between{justify-content:space-between!important}.align-items-center{align-items:center!important}.align-self-center{align-self:center!important}.mt-0{margin-top:0!important}.mt-2{margin-top:.5rem!important}.mt-5{margin-top:3rem!important}.mb-2{margin-bottom:.5rem!important}.mb-3{margin-bottom:1rem!important}.mb-4{margin-bottom:1.5rem!important}.mb-5{margin-bottom:3rem!important}.p-5{padding:3rem!important}.pt-5{padding-top:3rem!important}.pb-5{padding-bottom:3rem!important}.text-center{text-align:center!important}@media (min-width:576px){.text-sm-center{text-align:center!important}}@media (min-width:768px){.d-md-block{display:block!important}.d-md-none{display:none!important}.mb-md-0{margin-bottom:0!important}}@media (min-width:992px){.d-lg-inline{display:inline!important}.d-lg-block{display:block!important}.d-lg-flex{display:flex!important}.d-lg-none{display:none!important}}\n/*# sourceMappingURL=bootstrap.min.css.map */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./public/static/styles/fontello.css":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./public/static/styles/fontello.css ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/getUrl.js */ "./node_modules/next/dist/compiled/css-loader/getUrl.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _font_fontello_eot_47148713__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../font/fontello.eot?47148713 */ "./public/static/font/fontello.eot?47148713");
/* harmony import */ var _font_fontello_woff2_47148713__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../font/fontello.woff2?47148713 */ "./public/static/font/fontello.woff2?47148713");
/* harmony import */ var _font_fontello_woff_47148713__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../font/fontello.woff?47148713 */ "./public/static/font/fontello.woff?47148713");
/* harmony import */ var _font_fontello_ttf_47148713__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../font/fontello.ttf?47148713 */ "./public/static/font/fontello.ttf?47148713");
/* harmony import */ var _font_fontello_svg_47148713__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../font/fontello.svg?47148713 */ "./public/static/font/fontello.svg?47148713");
// Imports







var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_fontello_eot_47148713__WEBPACK_IMPORTED_MODULE_2__.default);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_fontello_eot_47148713__WEBPACK_IMPORTED_MODULE_2__.default, { hash: "#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_fontello_woff2_47148713__WEBPACK_IMPORTED_MODULE_3__.default);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_fontello_woff_47148713__WEBPACK_IMPORTED_MODULE_4__.default);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_fontello_ttf_47148713__WEBPACK_IMPORTED_MODULE_5__.default);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_fontello_svg_47148713__WEBPACK_IMPORTED_MODULE_6__.default, { hash: "#fontello" });
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n  font-family: 'fontello';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('embedded-opentype'),\r\n       url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff2'),\r\n       url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff'),\r\n       url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('truetype'),\r\n       url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('svg');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n/* Chrome hack: SVG is rendered more smooth in Windozze. 100% magic, uncomment if you need it. */\r\n/* Note, that will break hinting! In other OS-es font will be not as sharp as it could be */\r\n/*\r\n@media screen and (-webkit-min-device-pixel-ratio:0) {\r\n  @font-face {\r\n    font-family: 'fontello';\r\n    src: url('../font/fontello.svg?47148713#fontello') format('svg');\r\n  }\r\n}\r\n*/\r\n \r\n [class^=\"icon-\"]:before {\r\n  font-family: \"fontello\";\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  display: inline-block;\r\n  text-decoration: inherit;\r\n  width: 1em;\r\n  margin-right: .2em;\r\n  text-align: center;\r\n  /* opacity: .8; */\r\n \r\n  /* For safety - reset parent styles, that can break glyph codes*/\r\n  -moz-font-feature-settings: normal;\r\n       font-feature-settings: normal;\r\n  font-variant: normal;\r\n  text-transform: none;\r\n \r\n  /* fix buttons height, for twitter bootstrap */\r\n  line-height: 1em;\r\n \r\n  /* Animation center compensation - margins should be symmetric */\r\n  /* remove if not needed */\r\n  margin-left: .2em;\r\n \r\n  /* you can be more comfortable with increased icons size */\r\n  /* font-size: 120%; */\r\n \r\n  /* Font smoothing. That was taken from TWBS */\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n \r\n  /* Uncomment for 3D effect */\r\n  /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */\r\n}\r\n \r\n.icon-search:before { content: '\\e800'; } \r\n.icon-down-open-big:before { content: '\\e801'; } /* '' */\r\n.icon-left-open-big:before { content: '\\e802'; } /* '' */\r\n.icon-comment:before { content: '\\e803'; } /* '' */\r\n.icon-paper-plane:before { content: '\\e804'; } /* '' */\r\n.icon-right-open-big:before { content: '\\e805'; } /* '' */\r\n.icon-phone:before { content: '\\e806'; } /* '' */\r\n.icon-star:before { content: '\\e807'; } /* '' */\r\n.icon-videocam:before { content: '\\e808'; } /* '' */\r\n.icon-camera:before { content: '\\e809'; } /* '' */\r\n.icon-map:before { content: '\\e80a'; } /* '' */\r\n.icon-heart:before { content: '\\e80b'; } /* '' */\r\n.icon-up-open-big:before { content: '\\e80c'; } /* '' */\r\n.icon-music:before { content: '\\e80d'; } /* '' */\r\n.icon-resize-full:before { content: '\\e80e'; } /* '' */\r\n.icon-fire:before { content: '\\e811'; } /* '' */\r\n.icon-reddit:before { content: '\\e813'; } /* '' */\r\n.icon-youtube-play:before { content: '\\f16a'; } /* '' */\r\n.icon-google:before { content: '\\f1a0'; } /* '' */\r\n.icon-behance:before { content: '\\f1b4'; } /* '' */\r\n.icon-pinterest:before { content: '\\f231'; } /* '' */\r\n.icon-whatsapp:before { content: '\\f232'; } /* '' */\r\n.icon-vimeo:before { content: '\\f27d'; } /* '' */\r\n.icon-snapchat:before { content: '\\f2ab'; } /* '' */\r\n.icon-twitter:before { content: '\\f309'; } /* '' */\r\n.icon-facebook:before { content: '\\f30c'; } /* '' */\r\n.icon-linkedin:before { content: '\\f318'; } /* '' */\r\n.icon-skype:before { content: '\\f339'; } /* '' */\r\n.icon-soundcloud:before { content: '\\f348'; }\r\n\r\n.light .gg-sun,\r\n.light .gg-sun::after {\r\n    display: block;\r\n    -webkit-box-sizing: border-box;\r\n       -moz-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    border-radius: 50%\r\n}\r\n.light .gg-sun {\r\n    overflow: hidden;\r\n    position: relative;\r\n    -webkit-transform: rotate(-135deg) scale(var(--ggs,1));\r\n       -moz-transform: rotate(-135deg) scale(var(--ggs,1));\r\n            transform: rotate(-135deg) scale(var(--ggs,1));\r\n    width: 20px;\r\n    height: 20px;\r\n    border: 2px solid;\r\n    border-bottom-color: transparent\r\n}\r\n.light .gg-sun::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 12px;\r\n    height: 18px;\r\n    border: 2px solid transparent;\r\n    -webkit-box-shadow: 0 0 0 2px;\r\n            box-shadow: 0 0 0 2px;\r\n    top: 8px;\r\n    left: 2px\r\n}\r\n.dark .gg-sun {\r\n  -webkit-box-sizing: border-box;\r\n     -moz-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  position: relative;\r\n  display: block;\r\n  -webkit-transform: scale(var(--ggs,1));\r\n     -moz-transform: scale(var(--ggs,1));\r\n          transform: scale(var(--ggs,1));\r\n  width: 24px;\r\n  height: 24px;\r\n  background:\r\n    -webkit-linear-gradient(top,\r\n        currentColor 4px,transparent 0)\r\n        no-repeat 5px -6px/2px 6px,\r\n    -webkit-linear-gradient(top,\r\n        currentColor 4px,transparent 0)\r\n        no-repeat 5px 14px/2px 6px,\r\n    -webkit-linear-gradient(top,\r\n        currentColor 4px,transparent 0)\r\n        no-repeat -8px 5px/6px 2px,\r\n    -webkit-linear-gradient(top,\r\n        currentColor 4px,transparent 0)\r\n        no-repeat 14px 5px/6px 2px;\r\n  background:\r\n    -moz-linear-gradient(top,\r\n        currentColor 4px,transparent 0)\r\n        no-repeat 5px -6px/2px 6px,\r\n    -moz-linear-gradient(top,\r\n        currentColor 4px,transparent 0)\r\n        no-repeat 5px 14px/2px 6px,\r\n    -moz-linear-gradient(top,\r\n        currentColor 4px,transparent 0)\r\n        no-repeat -8px 5px/6px 2px,\r\n    -moz-linear-gradient(top,\r\n        currentColor 4px,transparent 0)\r\n        no-repeat 14px 5px/6px 2px;\r\n  background:\r\n    linear-gradient(to bottom,\r\n        currentColor 4px,transparent 0)\r\n        no-repeat 5px -6px/2px 6px,\r\n    linear-gradient(to bottom,\r\n        currentColor 4px,transparent 0)\r\n        no-repeat 5px 14px/2px 6px,\r\n    linear-gradient(to bottom,\r\n        currentColor 4px,transparent 0)\r\n        no-repeat -8px 5px/6px 2px,\r\n    linear-gradient(to bottom,\r\n        currentColor 4px,transparent 0)\r\n        no-repeat 14px 5px/6px 2px;\r\n  border-radius: 100px;\r\n  -webkit-box-shadow: inset 0 0 0 2px;\r\n          box-shadow: inset 0 0 0 2px;\r\n  border: 6px solid transparent\r\n}\r\n\r\n.dark .gg-sun::after,\r\n.dark .gg-sun::before {\r\n  content: \"\";\r\n  display: block;\r\n  -webkit-box-sizing: border-box;\r\n     -moz-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  position: absolute;\r\n  width: 24px;\r\n  height: 2px;\r\n  border-right: 4px solid;\r\n  border-left: 4px solid;\r\n  left: -6px;\r\n  top: 5px\r\n}\r\n.dark .gg-sun::before {\r\n  -webkit-transform: rotate(-45deg);\r\n     -moz-transform: rotate(-45deg);\r\n          transform: rotate(-45deg)\r\n}\r\n.dark .gg-sun::after {\r\n  -webkit-transform: rotate(45deg);\r\n     -moz-transform: rotate(45deg);\r\n          transform: rotate(45deg)\r\n}\r\n \r\n ", "",{"version":3,"sources":["webpack://public/static/styles/fontello.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n  font-family: 'fontello';\r\n  src: url('../font/fontello.eot?47148713');\r\n  src: url('../font/fontello.eot?47148713#iefix') format('embedded-opentype'),\r\n       url('../font/fontello.woff2?47148713') format('woff2'),\r\n       url('../font/fontello.woff?47148713') format('woff'),\r\n       url('../font/fontello.ttf?47148713') format('truetype'),\r\n       url('../font/fontello.svg?47148713#fontello') format('svg');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n/* Chrome hack: SVG is rendered more smooth in Windozze. 100% magic, uncomment if you need it. */\r\n/* Note, that will break hinting! In other OS-es font will be not as sharp as it could be */\r\n/*\r\n@media screen and (-webkit-min-device-pixel-ratio:0) {\r\n  @font-face {\r\n    font-family: 'fontello';\r\n    src: url('../font/fontello.svg?47148713#fontello') format('svg');\r\n  }\r\n}\r\n*/\r\n \r\n [class^=\"icon-\"]:before {\r\n  font-family: \"fontello\";\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  display: inline-block;\r\n  text-decoration: inherit;\r\n  width: 1em;\r\n  margin-right: .2em;\r\n  text-align: center;\r\n  /* opacity: .8; */\r\n \r\n  /* For safety - reset parent styles, that can break glyph codes*/\r\n  font-variant: normal;\r\n  text-transform: none;\r\n \r\n  /* fix buttons height, for twitter bootstrap */\r\n  line-height: 1em;\r\n \r\n  /* Animation center compensation - margins should be symmetric */\r\n  /* remove if not needed */\r\n  margin-left: .2em;\r\n \r\n  /* you can be more comfortable with increased icons size */\r\n  /* font-size: 120%; */\r\n \r\n  /* Font smoothing. That was taken from TWBS */\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n \r\n  /* Uncomment for 3D effect */\r\n  /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */\r\n}\r\n \r\n.icon-search:before { content: '\\e800'; } \r\n.icon-down-open-big:before { content: '\\e801'; } /* '' */\r\n.icon-left-open-big:before { content: '\\e802'; } /* '' */\r\n.icon-comment:before { content: '\\e803'; } /* '' */\r\n.icon-paper-plane:before { content: '\\e804'; } /* '' */\r\n.icon-right-open-big:before { content: '\\e805'; } /* '' */\r\n.icon-phone:before { content: '\\e806'; } /* '' */\r\n.icon-star:before { content: '\\e807'; } /* '' */\r\n.icon-videocam:before { content: '\\e808'; } /* '' */\r\n.icon-camera:before { content: '\\e809'; } /* '' */\r\n.icon-map:before { content: '\\e80a'; } /* '' */\r\n.icon-heart:before { content: '\\e80b'; } /* '' */\r\n.icon-up-open-big:before { content: '\\e80c'; } /* '' */\r\n.icon-music:before { content: '\\e80d'; } /* '' */\r\n.icon-resize-full:before { content: '\\e80e'; } /* '' */\r\n.icon-fire:before { content: '\\e811'; } /* '' */\r\n.icon-reddit:before { content: '\\e813'; } /* '' */\r\n.icon-youtube-play:before { content: '\\f16a'; } /* '' */\r\n.icon-google:before { content: '\\f1a0'; } /* '' */\r\n.icon-behance:before { content: '\\f1b4'; } /* '' */\r\n.icon-pinterest:before { content: '\\f231'; } /* '' */\r\n.icon-whatsapp:before { content: '\\f232'; } /* '' */\r\n.icon-vimeo:before { content: '\\f27d'; } /* '' */\r\n.icon-snapchat:before { content: '\\f2ab'; } /* '' */\r\n.icon-twitter:before { content: '\\f309'; } /* '' */\r\n.icon-facebook:before { content: '\\f30c'; } /* '' */\r\n.icon-linkedin:before { content: '\\f318'; } /* '' */\r\n.icon-skype:before { content: '\\f339'; } /* '' */\r\n.icon-soundcloud:before { content: '\\f348'; }\r\n\r\n.light .gg-sun,\r\n.light .gg-sun::after {\r\n    display: block;\r\n    box-sizing: border-box;\r\n    border-radius: 50%\r\n}\r\n.light .gg-sun {\r\n    overflow: hidden;\r\n    position: relative;\r\n    transform: rotate(-135deg) scale(var(--ggs,1));\r\n    width: 20px;\r\n    height: 20px;\r\n    border: 2px solid;\r\n    border-bottom-color: transparent\r\n}\r\n.light .gg-sun::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 12px;\r\n    height: 18px;\r\n    border: 2px solid transparent;\r\n    box-shadow: 0 0 0 2px;\r\n    top: 8px;\r\n    left: 2px\r\n}\r\n.dark .gg-sun {\r\n  box-sizing: border-box;\r\n  position: relative;\r\n  display: block;\r\n  transform: scale(var(--ggs,1));\r\n  width: 24px;\r\n  height: 24px;\r\n  background:\r\n    linear-gradient(to bottom,\r\n        currentColor 4px,transparent 0)\r\n        no-repeat 5px -6px/2px 6px,\r\n    linear-gradient(to bottom,\r\n        currentColor 4px,transparent 0)\r\n        no-repeat 5px 14px/2px 6px,\r\n    linear-gradient(to bottom,\r\n        currentColor 4px,transparent 0)\r\n        no-repeat -8px 5px/6px 2px,\r\n    linear-gradient(to bottom,\r\n        currentColor 4px,transparent 0)\r\n        no-repeat 14px 5px/6px 2px;\r\n  border-radius: 100px;\r\n  box-shadow: inset 0 0 0 2px;\r\n  border: 6px solid transparent\r\n}\r\n\r\n.dark .gg-sun::after,\r\n.dark .gg-sun::before {\r\n  content: \"\";\r\n  display: block;\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  width: 24px;\r\n  height: 2px;\r\n  border-right: 4px solid;\r\n  border-left: 4px solid;\r\n  left: -6px;\r\n  top: 5px\r\n}\r\n.dark .gg-sun::before {\r\n  transform: rotate(-45deg)\r\n}\r\n.dark .gg-sun::after {\r\n  transform: rotate(45deg)\r\n}\r\n \r\n "],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./public/static/styles/global-styles.css":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./public/static/styles/global-styles.css ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./bootstrap.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./public/static/styles/bootstrap.css");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_widgets_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./widgets.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./public/static/styles/widgets.css");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_fontello_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./fontello.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./public/static/styles/fontello.css");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./style.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./public/static/styles/style.css");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_responsive_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./responsive.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./public/static/styles/responsive.css");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.i(_node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_widgets_css__WEBPACK_IMPORTED_MODULE_2__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_fontello_css__WEBPACK_IMPORTED_MODULE_3__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_style_css__WEBPACK_IMPORTED_MODULE_4__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_responsive_css__WEBPACK_IMPORTED_MODULE_5__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./public/static/styles/responsive.css":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./public/static/styles/responsive.css ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media (min-width:576px){\r\n  .sticky-header{display:block;}\r\n}\r\n@media (min-width:768px){\r\n  .hr{margin:1rem auto 2rem;}\r\n  h1{font-size:2.471em;line-height:1.2em;}\r\n  h2{font-size:2.294em;line-height:1.2em;}\r\n  h3{font-size:1.882em;line-height:1.2em;}\r\n  h4{font-size:1.529em;line-height:1.2em;}\r\n  h5{font-size:1.118em;line-height:1.35em;}\r\n}\r\n@media (min-width:992px){\r\n  #wrapper{padding-top:0;}\r\n  .back-to-top{right:0;font-size:.675em;}\r\n  .entry-wraper,\r\n  .entry-header,\r\n  .single-comment{max-width:800px;margin:0 auto;}\r\n  .latest-tpl-4 .post-count{display:block;}\r\n  .latest-tpl-4 .post-content{margin-left:15px;}\r\n}\r\n@media (min-width:1200px){\r\n\r\n  /*slide template 1*/\r\n}\r\n\r\n/*Max width*/\r\n", "",{"version":3,"sources":["webpack://public/static/styles/responsive.css"],"names":[],"mappings":"AAAA;EACE,eAAe,aAAa,CAAC;AAC/B;AACA;EACE,IAAI,qBAAqB,CAAC;EAC1B,GAAG,iBAAiB,CAAC,iBAAiB,CAAC;EACvC,GAAG,iBAAiB,CAAC,iBAAiB,CAAC;EACvC,GAAG,iBAAiB,CAAC,iBAAiB,CAAC;EACvC,GAAG,iBAAiB,CAAC,iBAAiB,CAAC;EACvC,GAAG,iBAAiB,CAAC,kBAAkB,CAAC;AAC1C;AACA;EACE,SAAS,aAAa,CAAC;EACvB,aAAa,OAAO,CAAC,gBAAgB,CAAC;EACtC;;kBAEgB,eAAe,CAAC,aAAa,CAAC;EAC9C,0BAA0B,aAAa,CAAC;EACxC,4BAA4B,gBAAgB,CAAC;AAC/C;AACA;;EAEE,mBAAmB;AACrB;;AAEA,YAAY","sourcesContent":["@media (min-width:576px){\r\n  .sticky-header{display:block;}\r\n}\r\n@media (min-width:768px){\r\n  .hr{margin:1rem auto 2rem;}\r\n  h1{font-size:2.471em;line-height:1.2em;}\r\n  h2{font-size:2.294em;line-height:1.2em;}\r\n  h3{font-size:1.882em;line-height:1.2em;}\r\n  h4{font-size:1.529em;line-height:1.2em;}\r\n  h5{font-size:1.118em;line-height:1.35em;}\r\n}\r\n@media (min-width:992px){\r\n  #wrapper{padding-top:0;}\r\n  .back-to-top{right:0;font-size:.675em;}\r\n  .entry-wraper,\r\n  .entry-header,\r\n  .single-comment{max-width:800px;margin:0 auto;}\r\n  .latest-tpl-4 .post-count{display:block;}\r\n  .latest-tpl-4 .post-content{margin-left:15px;}\r\n}\r\n@media (min-width:1200px){\r\n\r\n  /*slide template 1*/\r\n}\r\n\r\n/*Max width*/\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./public/static/styles/style.css":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./public/static/styles/style.css ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/getUrl.js */ "./node_modules/next/dist/compiled/css-loader/getUrl.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_close_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/close.svg */ "./public/static/images/close.svg");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_close_svg__WEBPACK_IMPORTED_MODULE_2__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::before,\r\n*::after {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\t-webkit-box-sizing: border-box;\r\n\t   -moz-box-sizing: border-box;\r\n\t        box-sizing: border-box;\r\n}\r\n\r\n.dark {\r\n\t--dark-text: #F9F8F8;\r\n\t--light-text: #F9F8F8;\r\n\t--light-text-menu: #F9F8F8;\r\n\t--dark-background: #222;\r\n\t--light-background: #586F7C;\r\n\t--accent: #B8DBD9;\r\n\t--button-border: #B8DBD9;\r\n}\r\n\r\n.light {\r\n\t--dark-text: #292929;\r\n\t--light-text: #292929;\r\n\t--light-text-menu: #292929;\r\n\t--dark-background: #ffffff;\r\n\t--light-background: #EDDCD2;\r\n\t--accent: #353535;\r\n\t--button-border: #5E4B56;\r\n}\r\na {\r\n\tcolor: var(--dark-text);\r\n}\r\n\r\na:hover,\r\na:active,\r\na:focus {\r\n\tcolor: rgba(0, 0, 0, .84);\r\n\tcursor: pointer;\r\n}\r\n\r\n.text-copyright,\r\n.read-more:hover,\r\n.text-light,\r\n.text-light .meta,\r\n.text-light a {\r\n\tcolor: #fff !important;\r\n}\r\n\r\n.archive .white .social-search a,\r\n.archive .white .social-search a:hover {\r\n\tcolor: #000 !important;\r\n}\r\n\r\n.excerpt,\r\n.search-popup input.search_field {\r\n\tcolor: var(--accent);\r\n}\r\n\r\n.meta,\r\n.meta a {\r\n\tcolor:  var(--accent);\r\n}\r\n\r\n\r\n/*MAIN COLOR #03a87c, #1a1a1a*/\r\n\r\n\r\n/*Color*/\r\n\r\na:hover,\r\na:active,\r\na:focus,\r\n.mobi-menu .current-menu-item a,\r\n.mobi-menu.act ul li.open-submenu>a,\r\n.widget-about i,\r\n.page-404 h1,\r\nbutton.owl-prev:hover i,\r\nbutton.owl-next:hover i,\r\n.link-green,\r\n.btn-green,\r\n.copyright a,\r\n.entry-main-content a {\r\n\tcolor: #03a87c !important;\r\n\tfill: #03a87c !important;\r\n}\r\n\r\n\r\n/*Background*/\r\n\r\n.top-scroll-bar,\r\n.read-more:hover,\r\n.submit-btn:hover,\r\n.menu-toggle-icon.act:hover>span::after,\r\n.menu-toggle-icon.act:hover>span::before,\r\nbutton:hover,\r\ninput[type=\"button\"]:hover,\r\ninput[type=\"reset\"]:hover,\r\ninput[type=\"submit\"],\r\n.blue {\r\n\tbackground-color: #03a87c !important;\r\n}\r\n\r\n.popup-close:hover {\r\n\tbackground-color: #1a1a1a;\r\n}\r\n\r\n.has-color-bg::after {\r\n\tbackground: #ff97fe;\r\n}\r\n\r\n.has-color-bg.color-1::after {\r\n\tbackground: #ff97fe;\r\n}\r\n\r\n.has-color-bg.color-2::after {\r\n\tbackground: #97f4ff;\r\n}\r\n\r\n.has-color-bg.color-3::after {\r\n\tbackground: #afff97;\r\n}\r\n\r\n.has-color-bg.color-4::after {\r\n\tbackground: #ffca97;\r\n}\r\n\r\n\r\n/*Border*/\r\n\r\n.content-widget .readme:hover,\r\n.form-control:focus,\r\n.btn-green {\r\n\tborder-color: #03a87c;\r\n}\r\n\r\n\r\n/*footer*/\r\n\r\n.dark {\r\n\tbackground: var(--dark-background);\r\n}\r\n\r\n.dark button {\r\n\tborder: 1px solid rgba(255, 255, 255, 0.5);\r\n}\r\n\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\tbackground-color: var(--dark-background);\r\n}\r\n\r\n.top-scroll-bar {\r\n\theight: 1px;\r\n\twidth: 0px;\r\n\tz-index: 9999999;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n}\r\n\r\na:hover {\r\n\ttext-decoration: none;\r\n}\r\n\r\n.container {\r\n\tposition: relative;\r\n}\r\n.entry-title {\r\n\toverflow: hidden !important;\r\n\ttext-overflow: ellipsis !important;\r\n\tdisplay: -webkit-box !important;\r\n\t-webkit-line-clamp: 2 !important;\r\n\t-webkit-box-orient: vertical;\r\n\t--x-height-multiplier: 0.342 !important;\r\n\t--baseline-multiplier: 0.22 !important;\r\n\t-webkit-transform: translateY(.96px);\r\n\t   -moz-transform: translateY(.96px);\r\n\t        transform: translateY(.96px);\r\n\tletter-spacing: -.17px !important;\r\n}\r\n\r\n.single h1.entry-title {\r\n\tfont-weight: 500;\r\n}\r\n\r\nh2.entry-title {\r\n\tfont-size: 1.8em;\r\n\tfont-weight: bold;\r\n}\r\n\r\nh3.entry-title {\r\n\tfont-size: 1.4em;\r\n\tfont-weight: bold;\r\n}\r\n\r\nh4.entry-title {\r\n\tfont-size: 1.2em;\r\n\tfont-weight: bold;\r\n}\r\n\r\nh5.entry-title {\r\n\tfont-size: 1.1em;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.entry-excerpt {\r\n\tcolor: var(--dark-text) !important;\r\n\tfill: var(--dark-text) !important;\r\n\tfont-size: 0.9em;\r\n\tletter-spacing: 0.5px\r\n}\r\n\r\nb,\r\nstrong {\r\n\tfont-weight: 700;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n\tclear: both;\r\n\tfont-weight: 700;\r\n\tmargin: 0;\r\n\ttext-rendering: optimizeLegibility;\r\n}\r\n\r\n.entry-main-content h1,\r\n.entry-main-content h2,\r\n.entry-main-content h3,\r\n.entry-main-content h4,\r\n.entry-main-content h5,\r\n.entry-main-content h6 {\r\n\tmargin: 1.25rem 0 1.875rem 0;\r\n}\r\n\r\nh1 {\r\n\tfont-size: 1.871em;\r\n\tfont-weight: 600;\r\n\tline-height: 1.2em;\r\n\tletter-spacing: 0px;\r\n}\r\n\r\nh2 {\r\n\tfont-size: 1.694em;\r\n\tfont-weight: 500;\r\n\tline-height: 1.2em;\r\n\tletter-spacing: -0.75px;\r\n}\r\n\r\nh3 {\r\n\tfont-size: 1.482em;\r\n\tfont-weight: 500;\r\n\tline-height: 1.2em;\r\n\tletter-spacing: -0.67px;\r\n}\r\n\r\nh4 {\r\n\tfont-size: 1.229em;\r\n\tfont-weight: 500;\r\n\tline-height: 1.2em;\r\n\tletter-spacing: 0px;\r\n}\r\n\r\nh5 {\r\n\tfont-size: 1.118em;\r\n\tfont-weight: 500;\r\n\tline-height: 1.35em;\r\n\tletter-spacing: 0px;\r\n}\r\n\r\nh6 {\r\n\tfont-size: 1em;\r\n\tfont-weight: 500;\r\n\tline-height: 1.4em;\r\n\tletter-spacing: -0.34px;\r\n}\r\n\r\nh2.entry-title {\r\n\tmargin-top: 0;\r\n}\r\n\r\n::-moz-placeholder {\r\n\topacity: 1;\r\n}\r\n\r\n.text-light .entry-title a {\r\n\t-webkit-transition: all 0.2s linear;\r\n\t-moz-transition: all 0.2s linear;\r\n\ttransition: all 0.2s linear;\r\n\tbackground: -webkit-gradient(linear, left top, right top, from(#fff), color-stop(98%, #fff));\r\n\tbackground: -webkit-linear-gradient(left, #fff 0%, #fff 98%);\r\n\tbackground: -moz-linear-gradient(left, #fff 0%, #fff 98%);\r\n\tbackground: linear-gradient(to right, #fff 0%, #fff 98%);\r\n\tbackground-size: 0px 1px;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: left 85%;\r\n}\r\n\r\n.text-light .entry-title a:hover {\r\n\ttext-decoration: none;\r\n\tbackground-size: 100% 1px;\r\n}\r\n\r\nimg {\r\n\tmax-width: 100%;\r\n}\r\n\r\n.divider {\r\n\tposition: relative;\r\n\tborder-bottom: 1px solid rgba(0, 0, 0, .15);\r\n\tmargin-top: 1.5rem;\r\n\tmargin-bottom: 2.25rem;\r\n}\r\n\r\n.divider-2 {\r\n\tposition: relative;\r\n\tmargin-bottom: 2.25rem;\r\n}\r\n\r\nhr.section-divider {\r\n\tmargin-top: 52px;\r\n\tmargin-bottom: 42px;\r\n\tdisplay: block;\r\n\tborder: 0;\r\n\ttext-align: center;\r\n\toverflow: visible;\r\n}\r\n\r\nhr.section-divider::before {\r\n\t--x-height-multiplier: 0.342;\r\n\t--baseline-multiplier: 0.22;\r\n\tfont-family: medium-content-slab-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\r\n\tfont-weight: 400;\r\n\tfont-style: italic;\r\n\tfont-size: 30px;\r\n\tletter-spacing: .6em;\r\n\tcontent: '...';\r\n\tdisplay: inline-block;\r\n\tmargin-left: .6em;\r\n\tcolor: rgba(0, 0, 0, .68);\r\n\tposition: relative;\r\n\ttop: -30px;\r\n}\r\n\r\n.bgcover {\r\n\tbackground-size: cover;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: center;\r\n}\r\n\r\n.clearfix {\r\n\tclear: both;\r\n\theight: 0;\r\n\tline-height: 0;\r\n}\r\n\r\n.row-flex {\r\n\tdisplay: -moz-box;\r\n\tdisplay: flex;\r\n\t-moz-box-align: start;\r\n\t     align-items: flex-start;\r\n}\r\n\r\n.no-gutter {\r\n\tmargin-right: 0 !important;\r\n\tmargin-left: 0 !important;\r\n}\r\n\r\n.no-gutter .entry-content {\r\n\tpadding: 0 5%;\r\n}\r\n\r\n.no-gutter>[class*='col-'] {\r\n\tpadding-right: 0;\r\n\tpadding-left: 0;\r\n}\r\n\r\n.bg-lightblue {\r\n\tfill: #e8f3ec !important;\r\n\tbackground: #e8f3ec !important;\r\n\tborder-radius: 3px;\r\n}\r\n\r\n.btn-success {\r\n\tcolor: #fff;\r\n\tbackground-color: #03a87c;\r\n\tborder-color: #03a87c;\r\n}\r\n\r\n.small-text {\r\n\tfont-size: 0.875em;\r\n}\r\n\r\n.padding_20 {\r\n\tpadding: 20px !important;\r\n}\r\n\r\n.padding_30 {\r\n\tpadding: 30px !important;\r\n}\r\n\r\n.padding_40 {\r\n\tpadding: 40px !important;\r\n}\r\n\r\na.read-more:hover {\r\n\ttext-decoration: none;\r\n\tborder: 1px solid rgba(255, 255, 255, 0);\r\n}\r\n\r\n.text-light a.read-more {\r\n\tbackground: none;\r\n}\r\n\r\n.m_b_1rem {\r\n\tmargin-bottom: 1rem;\r\n}\r\n\r\n.m_b_2rem {\r\n\tmargin-bottom: 2rem;\r\n}\r\n\r\n.m_b_3rem {\r\n\tmargin-bottom: 3rem;\r\n}\r\n\r\n.m_b_4rem {\r\n\tmargin-bottom: 3rem;\r\n}\r\n\r\n.m-l--15 {\r\n\tmargin-left: -15px;\r\n}\r\n\r\n.btn-green {\r\n\tborder-width: 1px;\r\n\tborder-style: solid;\r\n\tpadding: .3rem .8rem;\r\n\tborder-radius: 3px;\r\n\ttext-transform: uppercase;\r\n\tfont-size: 0.875rem;\r\n\tfont-weight: 300;\r\n}\r\n\r\n.link-green {\r\n\ttext-transform: uppercase;\r\n\tfont-size: 0.875rem;\r\n\tfont-weight: 300;\r\n}\r\n\r\n.spanborder {\r\n\tborder-bottom: 1px solid var(--light-text);\r\n\tmargin-bottom: 1.8rem;\r\n\tfont-weight: 700;\r\n}\r\n.spanborder span {\r\n\tborder-bottom: 1px solid var(--light-text);\r\n\tdisplay: inline-block;\r\n\tpadding-bottom: 0.5rem;\r\n\tmargin-bottom: -1px;\r\n}\r\n.capsSubtle {\r\n\tfont-weight: 400 !important;\r\n\tfont-style: normal !important;\r\n\tfont-size: 0.8em;\r\n\ttext-transform: uppercase;\r\n\tcolor: rgba(0, 0, 0, .54) !important;\r\n\tfill: rgba(0, 0, 0, .54) !important;\r\n\tletter-spacing: -1px;\r\n}\r\nbody {\r\n\tfont-size: 16px;\r\n\tcolor: var(--dark-text);;\r\n}\r\nbody,\r\n.entry-meta,\r\n.heading-font {\r\n\tfont-family: 'Cabin', sans-serif;\r\n}\r\n.menu-primary,\r\n.capsSubtle,\r\n.mobi-menu nav {\r\n\tfont-family: 'B612 Mono', monospace;\r\n}\r\n.entry-header,\r\n.entry-wraper .excerpt,\r\n.entry-wraper .entry-main-content {\r\n\tfont-family: 'Lora', serif;\r\n}\r\n#content {\r\n\tmax-width: 100%;\r\n\tpadding-top: 2rem;\r\n}\r\n.search-popup {\r\n\tdisplay: none;\r\n\ttext-align: center;\r\n\tposition: relative;\r\n\tmargin-top: 50px;\r\n\tpadding: 2rem 0;\r\n\t-webkit-box-shadow: 0 2px 2px -2px rgba(0, 0, 0, .15);\r\n\t        box-shadow: 0 2px 2px -2px rgba(0, 0, 0, .15);\r\n}\r\na.searh-toggle:hover,\r\na.searh-toggle:focus,\r\na.searh-toggle:active {\r\n\ttext-decoration: none;\r\n}\r\n.search-form {\r\n\tborder-radius: 50px;\r\n}\r\n.search-form.open-search {\r\n\tborder: 1px solid var(--accent);\r\n}\r\n\r\ninput.search_field {\r\n\tbackground: none;\r\n\theight: 40px;\r\n\tborder: 0;\r\n\t-webkit-transition-duration: 0.2s;\r\n\t   -moz-transition-duration: 0.2s;\r\n\t        transition-duration: 0.2s;\r\n\tmax-width: 300px;\r\n\tcolor: rgba(0, 0, 0, .54) !important;\r\n}\r\n\r\n.header-right .search-form input.search_field {\r\n\twidth: 0;\r\n\tdisplay: none;\r\n\theight: 30px;\r\n}\r\n\r\n.search-form.open-search .search_field:focus {\r\n\tbackground: none;\r\n\tborder: 0;\r\n}\r\n\r\n.header-right .search-form {\r\n\tpadding: 0;\r\n}\r\n\r\n.header-right .search-form.open-search input.search_field {\r\n\twidth: 250px;\r\n\t-webkit-transition-duration: 0.2s;\r\n\t   -moz-transition-duration: 0.2s;\r\n\t        transition-duration: 0.2s;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.popup-close {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: center center;\r\n\tbackground-size: 13px;\r\n\tbackground-color: rgba(0, 0, 0, .54);\r\n}\r\n\r\n.menu-search-form {\r\n\tmax-width: 300px;\r\n\tmargin: 0 auto;\r\n\tmargin-bottom: 3rem;\r\n}\r\n\r\n.menu-search-form input {\r\n\theight: 40px;\r\n\tborder-radius: 50px;\r\n\tcolor: rgba(0, 0, 0, .54) !important;\r\n\tborder: 1px solid rgba(0, 0, 0, .34);\r\n}\r\n\r\n.fixed {\r\n\twidth: 100%;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tz-index: 9999;\r\n}\r\n\r\n.sticky-header {\r\n\tpadding: 10px 0;\r\n\theight: 50px;\r\n\t-webkit-box-shadow: 0 2px 2px -2px rgba(0, 0, 0, .15);\r\n\t        box-shadow: 0 2px 2px -2px rgba(0, 0, 0, .15);\r\n\tbackground: #fff;\r\n}\r\n\r\n.sticky-header .logo-small {\r\n\tdisplay: block;\r\n\tfloat: left;\r\n}\r\n\r\n.sticky-header .author-avatar {\r\n\tfloat: right;\r\n\tmargin-right: 10%;\r\n}\r\n\r\n.sticky-header .social-network {\r\n\tmargin-top: 3px;\r\n\tfloat: right;\r\n}\r\n\r\n#wrapper {\r\n\tmin-height: 100%;\r\n\tposition: relative;\r\n\tpadding-top: 50px;\r\n}\r\n\r\n.boxed #wrapper {\r\n\twidth: 80%;\r\n\tmargin: 40px auto;\r\n\tbackground: #fff;\r\n\t-webkit-box-shadow: 0 0 46px #a1c3ff;\r\n\t        box-shadow: 0 0 46px #a1c3ff;\r\n}\r\n\r\n\r\n/*Meta*/\r\n\r\n.entry-meta {\r\n\tcolor: var(--light-text);\r\n\tfill: var(--light-text);\r\n\tfont-size: 0.8rem;\r\n\tline-height: 1.2;\r\n}\r\n\r\n.entry-meta .author-avatar {\r\n\tfloat: left;\r\n\tmargin: -3px 15px 0 0;\r\n}\r\n\r\n.entry-meta .author-avatar img {\r\n\theight: 40px;\r\n\twidth: 40px;\r\n}\r\n\r\n.middotDivider {\r\n\tpadding-right: 1em;\r\n\tfont-size: 16px;\r\n\tposition: relative;\r\n}\r\n\r\n.middotDivider::after {\r\n\tcontent: '';\r\n\twidth: 2px;\r\n\theight: 2px;\r\n\tbackground: var(--light-text);\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 45%;\r\n}\r\n.svgIcon {\r\n\tcolor: var(--light-text);\r\n\tfill: var(--light-text);\r\n\tfont-size: 15px !important;\r\n}\r\n\r\n\r\n/* Back to top */\r\n\r\n.back-to-top {\r\n\tposition: fixed;\r\n\tbottom: 10%;\r\n\tright: 20px;\r\n\tcursor: pointer;\r\n\tz-index: 9999;\r\n\t-webkit-transform: rotate(90deg);\r\n\t   -moz-transform: rotate(90deg);\r\n\t        transform: rotate(90deg);\r\n\tfont-weight: 700;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 2px;\r\n\tfont-size: 12px;\r\n\tline-height: 1;\r\n\tbackground: var(--dark-background);\r\n}\r\n\r\n.back-to-top i {\r\n\tfont-size: 12px;\r\n}\r\n\r\n.back-to-top span {\r\n\tpadding-left: 10px;\r\n}\r\n\r\n\r\n/* Image zoom */\r\n\r\n.zoom {\r\n\toverflow: hidden;\r\n}\r\n\r\n.zoom img {\r\n\t-webkit-transition: all 2s ease;\r\n\t-moz-transition: all 2s ease;\r\n\ttransition: all 2s ease;\r\n\tmax-width: 100%;\r\n}\r\n\r\n.zoom:hover img {\r\n\topacity: 0.9;\r\n\t-webkit-transform: scale(1.08);\r\n\t-moz-transform: scale(1.08);\r\n\ttransform: scale(1.08);\r\n}\r\n\r\n\r\n/*Transition*/\r\n\r\n.read-more,\r\n.popup-close {\r\n\t-webkit-transition: color 0.2s ease, background 0.6s ease, border-color 0.2s ease;\r\n\t-moz-transition: color 0.2s ease, background 0.6s ease, border-color 0.2s ease;\r\n\ttransition: color 0.2s ease, background 0.6s ease, border-color 0.2s ease;\r\n}\r\n\r\n\r\n/* HEADER */\r\n\r\n.navbar-brand {\r\n\tfont-family: Georgia, Times, \"Times New Roman\", serif;\r\n\tfont-size: 1.85rem;\r\n\tfont-weight: 700;\r\n\tletter-spacing: 0px;\r\n\tcolor: #222222;\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tline-height: 1;\r\n}\r\n\r\nheader .logo-wrapper {\r\n\tmargin-bottom: 0px;\r\n\tpadding: 15px 0;\r\n\twidth: 100%;\r\n\tz-index: 1;\r\n\tposition: relative;\r\n}\r\n\r\n.searh-toggle {\r\n\tfloat: left;\r\n}\r\n\r\n.top-menu a,\r\n.searh-toggle,\r\n.search-form {\r\n\tcolor: var(--accent);\r\n\tfont-size: 0.875rem;\r\n\tpadding-left: 0.5rem;\r\n\tpadding-right: 0.5rem;\r\n\tletter-spacing: 0.1px;\r\n\tline-height: 30px;\r\n}\r\n\r\n.top-menu a.btn {\r\n\tborder: 1px solid var(--accent);\r\n\tpadding: 0 .8rem;\r\n\tborder-radius: 3px;\r\n\tmargin-left: 1rem;\r\n\tcolor: var(--accent);\r\n}\r\n\r\n.social-network a:hover,\r\n.top-menu a:hover,\r\n.searh-toggle:hover {\r\n\tcolor: var(--accent);\r\n}\r\n\r\n.social-network a {\r\n\tcolor: var(--accent);\r\n\tborder-radius: 50%;\r\n\tfont-size: 13px;\r\n\tmargin-left: 0.2rem;\r\n\tborder: 1px solid var(--accent);\r\n\twidth: 26px;\r\n\theight: 26px;  \r\n\tdisplay: block;\r\n\tline-height: 23px;\r\n\ttext-align: center;\r\n\tpadding: 0;\r\n}\r\n\r\n.author-avatar {\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.author-avatar img {\r\n\tborder-radius: 50%;\r\n\theight: 32px;\r\n\twidth: 32px;\r\n\tmax-width: unset;\r\n}\r\n\r\nheader {\r\n\tposition: relative;\r\n\tpadding: 1rem 0 0 0;\r\n\twidth: 100%;\r\n\tcolor: #fff;\r\n\ttext-align: center;\r\n\tz-index: 999;\r\n\t-webkit-box-shadow: 0 2px 2px -2px rgba(0, 0, 0, .15);\r\n\tbox-shadow: 0 2px 2px -2px rgba(0, 0, 0, .15);\r\n}\r\n\r\n\r\n/* MAIN-MENU */\r\n\r\n#main-menu {\r\n\twidth: 100%;\r\n\ttext-align: justify;\r\n}\r\n\r\n#main-menu.stick {\r\n\tpadding: 1.2rem 0;\r\n}\r\n\r\n.archive #main-menu.stick {\r\n\tpadding-top: 20px;\r\n\tpadding-bottom: 20px;\r\n}\r\n\r\n.scroll-to-fixed-fixed {\r\n\tbackground: var(--dark-background);\r\n}\r\n\r\n#main-menu.scroll-to-fixed-fixed {\r\n\tz-index: 1000;\r\n\tposition: fixed;\r\n\ttop: 0px;\r\n\tmargin-left: 0px;\r\n\tleft: 0px;\r\n}\r\n\r\n#main-menu.scroll-to-fixed-fixed .menu-top .logo-wrapper {\r\n\tmargin: 0;\r\n}\r\n\r\n#main-menu .menu-top {\r\n\theight: 0;\r\n\toverflow: hidden;\r\n}\r\n\r\n#main-menu .menu-top .logo-wrapper {\r\n\tmargin-bottom: 10px;\r\n\tpadding-bottom: 15px;\r\n\twidth: 100%;\r\n\tz-index: 1;\r\n\tposition: relative;\r\n\tborder-bottom: 1px solid #000000;\r\n}\r\n\r\n#main-menu .menu-top .logo-wrapper .logo {\r\n\tdisplay: block;\r\n\tfloat: left;\r\n\ttext-align: left;\r\n}\r\n\r\n#main-menu .menu-top .logo-wrapper .logo img {\r\n\tmargin: 0;\r\n}\r\n\r\n#main-menu .menu-top .logo-wrapper .social-search {\r\n\tlist-style: none;\r\n\tfloat: right;\r\n\ttext-align: right;\r\n\tmargin: 10px 0 0 0;\r\n}\r\n\r\n#main-menu .menu-top .logo-wrapper .social-search>li {\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\tpadding-right: 15px;\r\n\tborder-right: 1px solid #fff;\r\n\tmargin-right: 0;\r\n}\r\n\r\n#main-menu .menu-top .logo-wrapper .social-search>li:last-child {\r\n\tpadding-right: 0;\r\n\tborder-right: 0;\r\n\tpadding-left: 15px;\r\n}\r\n\r\n#main-menu .menu-top .logo-wrapper .social-search>li:hover>ul {\r\n\tdisplay: block;\r\n}\r\n\r\n#main-menu .menu-top .logo-wrapper .social-search>li>ul {\r\n\tdisplay: none;\r\n\tposition: absolute;\r\n\tpadding-top: 10px;\r\n\tlist-style: none;\r\n}\r\n\r\n#main-menu .menu-top .logo-wrapper .social-search>li>ul>li {\r\n\tpadding: 5px 10px;\r\n\tbackground: #fff;\r\n}\r\n\r\n#main-menu .menu-top .logo-wrapper .social-search>li>ul>li:first-child {\r\n\tpadding-top: 12px;\r\n}\r\n\r\n#main-menu .menu-top .logo-wrapper .social-search>li>ul>li:last-child {\r\n\tpadding-bottom: 12px;\r\n}\r\n\r\n#main-menu .menu-top .logo-wrapper .social-search>li>ul>li a {\r\n\tcolor: #000000;\r\n\tletter-spacing: 2px;\r\n\ttext-decoration: none;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n#main-menu .menu-top .logo-wrapper .social-search>li>ul>li a:hover {\r\n\tcolor: #341fff;\r\n}\r\n\r\n#main-menu .menu-top .logo-wrapper .social-search>li>a {\r\n\tletter-spacing: 2px;\r\n\ttext-decoration: none;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n#main-menu .menu-top .logo-wrapper .social-search>li>a:hover {\r\n\ttext-decoration: none;\r\n}\r\n\r\n#main-menu .menu-top .logo-wrapper .social-search>li:first-child {\r\n\tborder-right: 1px solid #000000;\r\n}\r\n\r\n#main-menu .menu-top .logo-wrapper .social-search>li>a {\r\n\tcolor: #000000;\r\n}\r\n\r\n#main-menu .menu-primary {\r\n\theight: 20px;\r\n}\r\n\r\n#main-menu .menu-primary ul {\r\n\tdisplay: inline;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n#main-menu .menu-primary ul>li {\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\tpadding: 0 0 16px 0;\r\n}\r\n\r\n#main-menu .menu-primary ul>li>a {\r\n\tcolor: var(--light-text-menu);\r\n\ttext-transform: uppercase;\r\n\tdisplay: inline-block;\r\n\ttext-decoration: none;\r\n\tfont-size: 0.8rem;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n#main-menu .menu-primary ul>li>a:hover {\r\n\tcolor: rgba(0, 0, 0, .7)\r\n}\r\n\r\n#main-menu .menu-primary>span {\r\n\tdisplay: inline-block;\r\n\twidth: 100%;\r\n\theight: 0;\r\n\tfont-size: 0;\r\n}\r\n\r\n#main-menu .menu-primary ul.sub-menu {\r\n\tdisplay: none;\r\n}\r\n\r\n#main-menu .menu-primary li:hover ul.sub-menu {\r\n\tdisplay: block;\r\n}\r\n\r\n#main-menu .menu-primary ul.sub-menu {\r\n\tborder: medium none;\r\n\tborder-top: 0 none;\r\n\tdisplay: none;\r\n\tposition: absolute;\r\n\ttext-align: left;\r\n\ttop: 100%;\r\n\tz-index: 100;\r\n\tleft: 0;\r\n\tpadding: 0;\r\n\tbackground: var(--light-background);\r\n\tpadding: 10px 20px;\r\n\tmin-width: 220px;\r\n\tmargin-left: -20px;\r\n\t-webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, .12);\r\n\t        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, .12);\r\n}\r\n\r\n#main-menu .menu-primary li ul.sub-menu li {\r\n\tdisplay: block;\r\n\tline-height: 1.2;\r\n\tpadding: 10px 0 !important;\r\n}\r\n\r\n#main-menu .menu-primary li ul.sub-menu a {\r\n\tdisplay: inherit;\r\n\tline-height: 1;\r\n}\r\n\r\n#main-menu.scroll-to-fixed-fixed {\r\n\t-webkit-box-shadow: 0 2px 2px -2px rgba(0, 0, 0, .15);\r\n\tbox-shadow: 0 2px 2px -2px rgba(0, 0, 0, .15);\r\n}\r\n\r\n\r\n/* MOBILE MENU*/\r\n\r\n.menu-toggle-icon {\r\n\theight: 30px;\r\n\twidth: 30px;\r\n\tz-index: 99999;\r\n\tposition: absolute;\r\n\tright: 15px;\r\n}\r\n\r\n.menu-toggle-icon>span {\r\n\tbackground-color: rgba(0, 0, 0, .84);\r\n\tborder-radius: 1px;\r\n\theight: 2px;\r\n\twidth: 100%;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\ttop: 50%;\r\n\tmargin: -1px 0 0 -15px;\r\n\t-webkit-transition: height 100ms;\r\n\t-moz-transition: height 100ms;\r\n\ttransition: height 100ms;\r\n}\r\n\r\n.menu-toggle-icon>span:after,\r\n.menu-toggle-icon>span:before {\r\n\tcontent: '';\r\n\tbackground-color: rgba(0, 0, 0, .84);\r\n\tborder-radius: 1px;\r\n\theight: 2px;\r\n\twidth: 100%;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\tmargin-left: -15px;\r\n\t-webkit-transition: all 200ms;\r\n\t-moz-transition: all 200ms;\r\n\ttransition: all 200ms;\r\n}\r\n\r\n.menu-toggle-icon>span:after {\r\n\ttop: -7px;\r\n}\r\n\r\n.menu-toggle-icon>span:before {\r\n\tbottom: -7px;\r\n}\r\n\r\n.menu-toggle-icon.act>span {\r\n\theight: 0;\r\n}\r\n\r\n.menu-toggle-icon.act>span:after,\r\n.menu-toggle-icon.act>span:before {\r\n\ttop: 1px;\r\n}\r\n\r\n.menu-toggle-icon.act>span:after {\r\n\t-webkit-transform: rotate(45deg);\r\n\t-moz-transform: rotate(45deg);\r\n\t     transform: rotate(45deg);\r\n}\r\n\r\n.menu-toggle-icon.act>span:before {\r\n\t-webkit-transform: rotate(-45deg);\r\n\t-moz-transform: rotate(-45deg);\r\n\t     transform: rotate(-45deg);\r\n}\r\n\r\n\r\n/* Main menu block */\r\n\r\n.mobi-menu {\r\n\tbackground-color: #fff;\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tz-index: 100;\r\n\theight: 100vh;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\topacity: 0;\r\n\t-webkit-transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\r\n\t-moz-transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\r\n\ttransition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\r\n\t-webkit-transform: scale(0);\r\n\t-moz-transform: scale(0);\r\n\t     transform: scale(0);\r\n}\r\n\r\n.menu-toggle-icon.act>span::after,\r\n.menu-toggle-icon.act>span::before {\r\n\tbackground: #000;\r\n}\r\n\r\n.mobi-menu.act {\r\n\topacity: 1;\r\n\t-webkit-transform: scale(1);\r\n\t-moz-transform: scale(1);\r\n\t     transform: scale(1);\r\n}\r\n\r\n.mobi-menu.act ul li {\r\n\topacity: 1;\r\n\t-webkit-transform: translateX(0);\r\n\t-moz-transform: translateX(0);\r\n\t     transform: translateX(0);\r\n}\r\n\r\n.mobi-menu {\r\n\ttext-align: center;\r\n}\r\n\r\n.mobi-menu ul {\r\n\tlist-style: none;\r\n\twidth: 65%;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n\r\n/*show the second levele menu of the selected voice*/\r\n\r\n.mobi-menu .open-submenu ul.sub-menu {\r\n\tmax-height: 800px;\r\n\t-webkit-transition: max-height 0.5s ease-in;\r\n\t-moz-transition: max-height 0.5s ease-in;\r\n\ttransition: max-height 0.5s ease-in;\r\n\tmargin-top: 1rem;\r\n}\r\n\r\n\r\n/*style for the second level menu*/\r\n\r\n.mobi-menu ul.sub-menu {\r\n\tmax-height: 0;\r\n\tpadding: 0;\r\n\toverflow: hidden;\r\n\tlist-style-type: none;\r\n\t-webkit-transition: max-height 0.5s ease-out;\r\n\t-moz-transition: max-height 0.5s ease-out;\r\n\ttransition: max-height 0.5s ease-out;\r\n\tposition: relative;\r\n\tmin-width: 100%;\r\n}\r\n\r\n.mobi-menu .open-submenu ul.sub-menu {\r\n\twidth: 100%;\r\n}\r\n\r\n.mobi-menu .open-submenu ul.sub-menu li {\r\n\tpadding: .8rem 0;\r\n\tborder: 0;\r\n}\r\n\r\n.mobi-menu .open-submenu ul.sub-menu li a {\r\n\tfont-size: 0.875rem;\r\n}\r\n\r\n.mobi-menu li {\r\n\tpadding: 0.5rem 0;\r\n\tline-height: 1;\r\n\tposition: relative;\r\n}\r\n\r\n.mobi-menu li:first-child {\r\n\tborder: 0;\r\n}\r\n\r\n.mobi-menu li a {\r\n\ttext-transform: uppercase;\r\n\tcolor: rgba(0, 0, 0, .5);\r\n\tfont-size: 0.875rem;\r\n}\r\n\r\n.mobi-menu li.menu-item-has-children .sub-menu-toggle {\r\n\tposition: absolute;\r\n\ttop: 20px;\r\n\tright: 20px;\r\n}\r\n\r\n.mobi-menu .sub-menu-toggle::after {\r\n\tcontent: '\\e801';\r\n\tfont-family: \"fontello\";\r\n\tdisplay: inline-block;\r\n\tmargin-left: 10px;\r\n}\r\n\r\n.mobi-menu .open-submenu .sub-menu-toggle::after {\r\n\t-webkit-transform: rotate(180deg);\r\n\t-moz-transform: rotate(180deg);\r\n\t     transform: rotate(180deg);\r\n}\r\n\r\n.mobi-menu .mobi-menu__logo {\r\n\tmargin: 5.3rem 0 3rem 0;\r\n\tfont-size: 3rem !important;\r\n\tline-height: 1;\r\n}\r\n\r\n.mobi-menu__logo img {\r\n\tdisplay:\r\n}\r\n\r\n.mobi-menu .mobi-menu__socials {\r\n\tposition: absolute;\r\n\tz-index: 1;\r\n\tleft: 0;\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tbottom: 3rem;\r\n}\r\n\r\n\r\n/*FOOTER*/\r\n\r\nfooter .social-network li {\r\n\tmargin: 0 !important;\r\n}\r\n\r\n.copyright {\r\n\tfont-size: .875rem;\r\n}\r\n\r\n\r\n/*ELEMENTS*/\r\n\r\n\r\n/*Pagination*/\r\n\r\nul.page-numbers {\r\n\tmargin-top: 1.5rem;\r\n\tmargin-bottom: 1.5rem;\r\n\tpadding-top: 1.5rem;\r\n\tborder-top: 1px solid rgba(0, 0, 0, .15);\r\n\twidth: 100%;\r\n}\r\n\r\nul.page-numbers i {\r\n\tfont-size: .875em;\r\n}\r\n\r\nul.page-numbers li {\r\n\tdisplay: inline-block;\r\n\tpadding: 0 10px 0 0;\r\n}\r\n\r\nul.page-numbers li a {\r\n\tcolor: var(--accent);\r\n}\r\n\r\nul.page-numbers li span.current {\r\n\tcolor: var(--light-text);\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\tfont-weight: bold;\r\n}\r\n\r\n\r\n/*Form*/\r\n\r\n.form-control {\r\n\theight: 50px;\r\n\tline-height: 50px;\r\n\tpadding: 15px;\r\n\tbackground: none;\r\n\tborder-top: 0;\r\n\tborder-left: 0;\r\n\tborder-radius: 0;\r\n\tborder-right: 0;\r\n\tfont-size: .875rem;\r\n\tbackground: #fff;\r\n\tborder-radius: 3px;\r\n\tborder: 1px solid #dee2e6 !important;\r\n}\r\n\r\ntextarea.form-control {\r\n\tmin-height: 160px;\r\n\tresize: none;\r\n\tpadding: 10px 20px;\r\n}\r\n\r\n.submit-btn {\r\n\tfont-weight: 600;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 2px;\r\n\tborder: 0;\r\n\tborder-radius: 50px;\r\n\tfont-size: 0.875rem;\r\n\tpadding: .8em 1.8em .7em;\r\n\tfont-size: .785em;\r\n}\r\n\r\n.submit-btn:hover {\r\n\tcolor: #fff;\r\n}\r\n\r\n.form-control:focus {\r\n\tcolor: #5f656b;\r\n\tbackground: none;\r\n\toutline: 0;\r\n\t-webkit-box-shadow: none;\r\n\t        box-shadow: none;\r\n}\r\n\r\n#comments input.submit {\r\n\tmax-width: 250px;\r\n}\r\n\r\n\r\n/*ARCHIVE*/\r\n\r\n.archive-header {}\r\n\r\n.archive-intro {\r\n\tmax-width: 500px;\r\n\tmargin: 0 auto;\r\n\tcolor: rgba(0, 0, 0, .54) !important;\r\n}\r\n\r\n\r\n/*SINGLE POST*/\r\n\r\n.single-header {\r\n\tpadding: 2rem 0 4rem 0;\r\n}\r\n\r\n.row-flex figure {\r\n\twidth: 45%;\r\n}\r\n\r\n.row-flex .entry-content {\r\n\t-moz-box-pack: center;\r\n\t     justify-content: center;\r\n\talign-self: center;\r\n\tpadding-left: 30px;\r\n\t-moz-box-flex: 1;\r\n\t     flex: 1 1;\r\n\ttext-align: left;\r\n}\r\n\r\n.sing-header .meta span {\r\n\tmargin-right: 10px;\r\n}\r\n\r\n.meta .author img {\r\n\theight: 30px;\r\n\twidth: 30px;\r\n\tborder-radius: 50%;\r\n\tdisplay: inline;\r\n\tmargin: -5px 5px 0 0;\r\n}\r\n\r\n.entry-wraper {\r\n\tposition: relative;\r\n}\r\n\r\n.entry-wraper .excerpt {\r\n\tcolor: inherit;\r\n\tfont-weight: 600;\r\n\tfont-size: 1.345rem;\r\n}\r\n\r\n.entry-main-content {\r\n\tline-height: 1.7;\r\n\tfont-size: 1.25rem;\r\n\tmargin-bottom: 4rem;\r\n}\r\n\r\n.entry-main-content p {\r\n\tmargin-bottom: 1.5rem;\r\n}\r\n\r\nblockquote {\r\n\tposition: relative;\r\n\tborder-left: 0;\r\n\tpadding: 0px 30px;\r\n\tfont-weight: 400;\r\n\tmargin-bottom: 1.5rem;\r\n\tfont-style: italic;\r\n}\r\n\r\nblockquote::before {\r\n\tcontent: \"\";\r\n\ttop: 0px;\r\n\theight: 100%;\r\n\tleft: 0;\r\n\twidth: 4px;\r\n\tposition: absolute;\r\n\tbackground: #000;\r\n}\r\n\r\nblockquote p:last-child,\r\nblockquote ul:last-child,\r\nblockquote ol:last-child {\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n\r\n/*Social share icons*/\r\n\r\n.entry-left-col {\r\n\tposition: absolute;\r\n\tleft: -20%;\r\n\theight: 200vh;\r\n\tz-index: 2;\r\n\ttop: 3rem;\r\n\tbottom: 0;\r\n}\r\n\r\n.social-sticky {\r\n\tposition: sticky;\r\n\ttop: 70px;\r\n}\r\n\r\n.social-sticky a {\r\n\tdisplay: block;\r\n\tcolor: rgba(0, 0, 0, .54);\r\n\tborder-radius: 50%;\r\n\tborder: 1px solid rgba(0, 0, 0, .34);\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\ttext-align: center;\r\n\tline-height: 30px;\r\n\tmargin-bottom: 0.5rem;\r\n\tfont-size: 13px;\r\n}\r\n\r\n.dropcap p:first-child:first-letter {\r\n\tfont-size: 4em;\r\n\tfloat: left;\r\n\tmargin-top: .15em;\r\n\tmargin-right: 0.15em;\r\n\tline-height: 1;\r\n}\r\n\r\n.dropcap blockquote p:first-child:first-letter {\r\n\tfont-size: inherit;\r\n\tmargin: 0;\r\n\tline-height: inherit;\r\n\tfloat: none;\r\n}\r\n\r\n\r\n/*single tags*/\r\n\r\n.entry-bottom {\r\n\tmargin: 0 0 2rem 0;\r\n\tfont-size: 1.125em;\r\n}\r\n\r\n.tags-wrap {\r\n\tmargin: 1.5rem 0;\r\n}\r\n\r\n.tags-wrap a {\r\n\tbackground: rgba(0, 0, 0, .05);\r\n\tborder-radius: 3px;\r\n\tfont-size: 0.875rem;\r\n\tpadding: 6px 12px;\r\n\tmargin-right: 3px;\r\n}\r\n\r\n.entry-bottom-social {}\r\n\r\n\r\n/*Author box*/\r\n\r\n.entry-main-content .box.box-author a {\r\n\tcolor: rgba(0, 0, 0, .84) !important;\r\n}\r\n\r\n.post-author {\r\n\toverflow: hidden;\r\n\tpadding: 50px;\r\n}\r\n\r\n.author-img {\r\n\tmargin-right: 30px;\r\n\tposition: relative;\r\n}\r\n\r\n.author-img>img {\r\n\tmax-width: 120px;\r\n\tborder: 3px solid #fff;\r\n\tborder-radius: 100%;\r\n}\r\n\r\n.author-content {\r\n\tvertical-align: middle;\r\n}\r\n\r\n.post-author .top-author {\r\n\t-moz-box-ordinal-group: 1;\r\n\t     order: 0;\r\n\t-moz-box-flex: 1;\r\n\t     flex: 1 1 auto;\r\n\talign-self: stretch;\r\n}\r\n\r\n.author-content h5 {\r\n\tfont-size: 1.1rem;\r\n\tfont-weight: 600;\r\n\tpadding: 0px 0 10px;\r\n\tdisplay: block;\r\n\tmargin: 0;\r\n}\r\n\r\n.author-content p {\r\n\tmargin: auto;\r\n\tcolor: #555;\r\n}\r\n\r\n.post-author .content-social-author {\r\n\tpadding-top: 15px;\r\n}\r\n\r\n.author-content .author-social {\r\n\tpadding-right: 15px;\r\n\tfont-size: 16px;\r\n}\r\n\r\n\r\n/*Related posts*/\r\n\r\n.related-posts h3 {\r\n\ttext-align: center;\r\n}\r\n\r\n\r\n/*PAGEs*/\r\n\r\n\r\n/*contact*/\r\n\r\ninput:focus,\r\ntextarea:focus,\r\nbutton:focus,\r\nselect:focus {\r\n\tborder: 1px solid #888890;\r\n\t-webkit-transition: 0.4s;\r\n\t-moz-transition: 0.4s;\r\n\ttransition: 0.4s;\r\n}\r\n\r\ninput {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\t     appearance: none;\r\n\tborder-radius: 0px;\r\n\theight: 40px;\r\n\tfont-size: 16px;\r\n\tpadding: 7px 15px;\r\n\tbackground: white;\r\n\tborder: 1px solid #e1e1e1;\r\n\t-webkit-transition: 0.4s;\r\n\t-moz-transition: 0.4s;\r\n\ttransition: 0.4s;\r\n\twidth: 100%;\r\n\tcolor: rgba(0, 0, 0, 0.54);\r\n}\r\n\r\ntextarea,\r\nbutton,\r\nselect {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\t     appearance: none;\r\n\tborder-radius: 0px;\r\n\tfont-size: 16px;\r\n\tpadding: 7px 15px;\r\n\tbackground: white;\r\n\tborder: 1px solid #ebebeb;\r\n\t-webkit-transition: 0.4s;\r\n\t-moz-transition: 0.4s;\r\n\ttransition: 0.4s;\r\n\twidth: 100%;\r\n\tcolor: rgba(0, 0, 0, 0.54);\r\n}\r\n\r\nbutton,\r\nhtml input[type=\"button\"],\r\ninput[type=\"reset\"],\r\ninput[type=\"submit\"] {\r\n\tcolor: #fff;\r\n\tborder-style: solid;\r\n\tpadding: 0 20px;\r\n\tborder-radius: 3px;\r\n\tcursor: pointer;\r\n\twidth: unset;\r\n}\r\n\r\nbutton:hover,\r\ninput[type=\"button\"]:hover,\r\ninput[type=\"reset\"]:hover,\r\ninput[type=\"submit\"]:hover {\r\n\tborder: none;\r\n}\r\n\r\n\r\n/*404*/\r\n\r\n.page-404 .entry-wraper {\r\n\tmin-height: 500px;\r\n}\r\n\r\n.page-404 .entry-wraper h1 {\r\n\tfont-size: 8em;\r\n}\r\n\r\n.page-404 .search-form {\r\n\tmax-width: 400px;\r\n\tmargin: 0 auto;\r\n\tline-height: 40px;\r\n\tpadding-left: 15px;\r\n}\r\n\r\n\r\n/*Gallery*/\r\n\r\n.gallery figcaption {\r\n\tdisplay: none;\r\n}\r\n\r\n.gallery-item {\r\n\tposition: relative;\r\n}\r\n\r\n.gallery-item::after {\r\n\tcontent: '\\e80e';\r\n\tposition: absolute;\r\n\tz-index: 1;\r\n\ttop: .5rem;\r\n\tright: 1rem;\r\n\tfont-family: \"fontello\";\r\n\tcolor: #fff;\r\n\tfont-size: 1.5rem;\r\n\topacity: 0;\r\n}\r\n\r\n.gallery-item:hover::after {\r\n\topacity: 1;\r\n\t-webkit-transition-duration: .4s;\r\n\t   -moz-transition-duration: .4s;\r\n\t        transition-duration: .4s;\r\n}\r\n\r\n\r\n/*Elements*/\r\n\r\nol,\r\nul,\r\ndl {\r\n\tmargin-top: 0;\r\n\tmargin-bottom: 1.5rem;\r\n}\r\n\r\n.entry-main-content dd,\r\n.single-comment dd {\r\n\tmargin: 0 0 1.65em;\r\n}\r\n\r\n.entry-main-content ul {\r\n\tlist-style: disc;\r\n\tpadding-left: 1rem;\r\n}\r\n\r\n.entry-main-content ul li {\r\n\tlist-style: disc;\r\n}\r\n\r\nul ul,\r\nol ol {\r\n\tmargin-left: 0.5rem;\r\n}\r\n\r\nol {\r\n\tfloat: none;\r\n\tlist-style: decimal inside;\r\n\tmargin-left: 1.5rem;\r\n}\r\n\r\nol li {\r\n\tlist-style: decimal;\r\n\twidth: 100%;\r\n}\r\n\r\ntable {\r\n\twidth: 100%;\r\n\tmargin-bottom: 1.5rem;\r\n\tcolor: #212529;\r\n\tborder-collapse: collapse;\r\n}\r\n\r\ntable thead th {\r\n\tvertical-align: bottom;\r\n\tborder-bottom: 2px solid #dee2e6;\r\n\tborder-color: rgba(0, 0, 0, 0.06);\r\n}\r\n\r\ntable td,\r\n.table th {\r\n\tpadding: .75rem;\r\n\tvertical-align: top;\r\n\tborder-top: 1px solid #dee2e6;\r\n\tborder-color: rgba(0, 0, 0, 0.06);\r\n}\r\n\r\npre {\r\n\tborder: 1px solid #d1d1d1;\r\n\tfont-size: 1em;\r\n\tline-height: 1.8;\r\n\tmargin: 0 0 1.75em;\r\n\tmax-width: 100%;\r\n\toverflow: auto;\r\n\tpadding: 1.75em;\r\n\twhite-space: pre;\r\n\twhite-space: pre-wrap;\r\n\tword-wrap: break-word;\r\n}\r\n\r\n\r\n/*OTHER*/\r\n\r\nbutton.owl-prev:hover,\r\nbutton.owl-next:hover {\r\n\tbackground: none !important;\r\n}", "",{"version":3,"sources":["webpack://public/static/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["*,\r\n*::before,\r\n*::after {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.dark {\r\n\t--dark-text: #F9F8F8;\r\n\t--light-text: #F9F8F8;\r\n\t--light-text-menu: #F9F8F8;\r\n\t--dark-background: #222;\r\n\t--light-background: #586F7C;\r\n\t--accent: #B8DBD9;\r\n\t--button-border: #B8DBD9;\r\n}\r\n\r\n.light {\r\n\t--dark-text: #292929;\r\n\t--light-text: #292929;\r\n\t--light-text-menu: #292929;\r\n\t--dark-background: #ffffff;\r\n\t--light-background: #EDDCD2;\r\n\t--accent: #353535;\r\n\t--button-border: #5E4B56;\r\n}\r\na {\r\n\tcolor: var(--dark-text);\r\n}\r\n\r\na:hover,\r\na:active,\r\na:focus {\r\n\tcolor: rgba(0, 0, 0, .84);\r\n\tcursor: pointer;\r\n}\r\n\r\n.text-copyright,\r\n.read-more:hover,\r\n.text-light,\r\n.text-light .meta,\r\n.text-light a {\r\n\tcolor: #fff !important;\r\n}\r\n\r\n.archive .white .social-search a,\r\n.archive .white .social-search a:hover {\r\n\tcolor: #000 !important;\r\n}\r\n\r\n.excerpt,\r\n.search-popup input.search_field {\r\n\tcolor: var(--accent);\r\n}\r\n\r\n.meta,\r\n.meta a {\r\n\tcolor:  var(--accent);\r\n}\r\n\r\n\r\n/*MAIN COLOR #03a87c, #1a1a1a*/\r\n\r\n\r\n/*Color*/\r\n\r\na:hover,\r\na:active,\r\na:focus,\r\n.mobi-menu .current-menu-item a,\r\n.mobi-menu.act ul li.open-submenu>a,\r\n.widget-about i,\r\n.page-404 h1,\r\nbutton.owl-prev:hover i,\r\nbutton.owl-next:hover i,\r\n.link-green,\r\n.btn-green,\r\n.copyright a,\r\n.entry-main-content a {\r\n\tcolor: #03a87c !important;\r\n\tfill: #03a87c !important;\r\n}\r\n\r\n\r\n/*Background*/\r\n\r\n.top-scroll-bar,\r\n.read-more:hover,\r\n.submit-btn:hover,\r\n.menu-toggle-icon.act:hover>span::after,\r\n.menu-toggle-icon.act:hover>span::before,\r\nbutton:hover,\r\ninput[type=\"button\"]:hover,\r\ninput[type=\"reset\"]:hover,\r\ninput[type=\"submit\"],\r\n.blue {\r\n\tbackground-color: #03a87c !important;\r\n}\r\n\r\n.popup-close:hover {\r\n\tbackground-color: #1a1a1a;\r\n}\r\n\r\n.has-color-bg::after {\r\n\tbackground: #ff97fe;\r\n}\r\n\r\n.has-color-bg.color-1::after {\r\n\tbackground: #ff97fe;\r\n}\r\n\r\n.has-color-bg.color-2::after {\r\n\tbackground: #97f4ff;\r\n}\r\n\r\n.has-color-bg.color-3::after {\r\n\tbackground: #afff97;\r\n}\r\n\r\n.has-color-bg.color-4::after {\r\n\tbackground: #ffca97;\r\n}\r\n\r\n\r\n/*Border*/\r\n\r\n.content-widget .readme:hover,\r\n.form-control:focus,\r\n.btn-green {\r\n\tborder-color: #03a87c;\r\n}\r\n\r\n\r\n/*footer*/\r\n\r\n.dark {\r\n\tbackground: var(--dark-background);\r\n}\r\n\r\n.dark button {\r\n\tborder: 1px solid rgba(255, 255, 255, 0.5);\r\n}\r\n\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\tbackground-color: var(--dark-background);\r\n}\r\n\r\n.top-scroll-bar {\r\n\theight: 1px;\r\n\twidth: 0px;\r\n\tz-index: 9999999;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n}\r\n\r\na:hover {\r\n\ttext-decoration: none;\r\n}\r\n\r\n.container {\r\n\tposition: relative;\r\n}\r\n.entry-title {\r\n\toverflow: hidden !important;\r\n\ttext-overflow: ellipsis !important;\r\n\tdisplay: -webkit-box !important;\r\n\t-webkit-line-clamp: 2 !important;\r\n\t-webkit-box-orient: vertical;\r\n\t--x-height-multiplier: 0.342 !important;\r\n\t--baseline-multiplier: 0.22 !important;\r\n\ttransform: translateY(.96px);\r\n\tletter-spacing: -.17px !important;\r\n}\r\n\r\n.single h1.entry-title {\r\n\tfont-weight: 500;\r\n}\r\n\r\nh2.entry-title {\r\n\tfont-size: 1.8em;\r\n\tfont-weight: bold;\r\n}\r\n\r\nh3.entry-title {\r\n\tfont-size: 1.4em;\r\n\tfont-weight: bold;\r\n}\r\n\r\nh4.entry-title {\r\n\tfont-size: 1.2em;\r\n\tfont-weight: bold;\r\n}\r\n\r\nh5.entry-title {\r\n\tfont-size: 1.1em;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.entry-excerpt {\r\n\tcolor: var(--dark-text) !important;\r\n\tfill: var(--dark-text) !important;\r\n\tfont-size: 0.9em;\r\n\tletter-spacing: 0.5px\r\n}\r\n\r\nb,\r\nstrong {\r\n\tfont-weight: 700;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n\tclear: both;\r\n\tfont-weight: 700;\r\n\tmargin: 0;\r\n\ttext-rendering: optimizeLegibility;\r\n}\r\n\r\n.entry-main-content h1,\r\n.entry-main-content h2,\r\n.entry-main-content h3,\r\n.entry-main-content h4,\r\n.entry-main-content h5,\r\n.entry-main-content h6 {\r\n\tmargin: 1.25rem 0 1.875rem 0;\r\n}\r\n\r\nh1 {\r\n\tfont-size: 1.871em;\r\n\tfont-weight: 600;\r\n\tline-height: 1.2em;\r\n\tletter-spacing: 0px;\r\n}\r\n\r\nh2 {\r\n\tfont-size: 1.694em;\r\n\tfont-weight: 500;\r\n\tline-height: 1.2em;\r\n\tletter-spacing: -0.75px;\r\n}\r\n\r\nh3 {\r\n\tfont-size: 1.482em;\r\n\tfont-weight: 500;\r\n\tline-height: 1.2em;\r\n\tletter-spacing: -0.67px;\r\n}\r\n\r\nh4 {\r\n\tfont-size: 1.229em;\r\n\tfont-weight: 500;\r\n\tline-height: 1.2em;\r\n\tletter-spacing: 0px;\r\n}\r\n\r\nh5 {\r\n\tfont-size: 1.118em;\r\n\tfont-weight: 500;\r\n\tline-height: 1.35em;\r\n\tletter-spacing: 0px;\r\n}\r\n\r\nh6 {\r\n\tfont-size: 1em;\r\n\tfont-weight: 500;\r\n\tline-height: 1.4em;\r\n\tletter-spacing: -0.34px;\r\n}\r\n\r\nh2.entry-title {\r\n\tmargin-top: 0;\r\n}\r\n\r\n::-moz-placeholder {\r\n\topacity: 1;\r\n}\r\n\r\n.text-light .entry-title a {\r\n\ttransition: all 0.2s linear;\r\n\tbackground: linear-gradient(to right, #fff 0%, #fff 98%);\r\n\tbackground-size: 0px 1px;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: left 85%;\r\n}\r\n\r\n.text-light .entry-title a:hover {\r\n\ttext-decoration: none;\r\n\tbackground-size: 100% 1px;\r\n}\r\n\r\nimg {\r\n\tmax-width: 100%;\r\n}\r\n\r\n.divider {\r\n\tposition: relative;\r\n\tborder-bottom: 1px solid rgba(0, 0, 0, .15);\r\n\tmargin-top: 1.5rem;\r\n\tmargin-bottom: 2.25rem;\r\n}\r\n\r\n.divider-2 {\r\n\tposition: relative;\r\n\tmargin-bottom: 2.25rem;\r\n}\r\n\r\nhr.section-divider {\r\n\tmargin-top: 52px;\r\n\tmargin-bottom: 42px;\r\n\tdisplay: block;\r\n\tborder: 0;\r\n\ttext-align: center;\r\n\toverflow: visible;\r\n}\r\n\r\nhr.section-divider::before {\r\n\t--x-height-multiplier: 0.342;\r\n\t--baseline-multiplier: 0.22;\r\n\tfont-family: medium-content-slab-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\r\n\tfont-weight: 400;\r\n\tfont-style: italic;\r\n\tfont-size: 30px;\r\n\tletter-spacing: .6em;\r\n\tcontent: '...';\r\n\tdisplay: inline-block;\r\n\tmargin-left: .6em;\r\n\tcolor: rgba(0, 0, 0, .68);\r\n\tposition: relative;\r\n\ttop: -30px;\r\n}\r\n\r\n.bgcover {\r\n\tbackground-size: cover;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: center;\r\n}\r\n\r\n.clearfix {\r\n\tclear: both;\r\n\theight: 0;\r\n\tline-height: 0;\r\n}\r\n\r\n.row-flex {\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-ms-flex-align: start;\r\n\talign-items: flex-start;\r\n}\r\n\r\n.no-gutter {\r\n\tmargin-right: 0 !important;\r\n\tmargin-left: 0 !important;\r\n}\r\n\r\n.no-gutter .entry-content {\r\n\tpadding: 0 5%;\r\n}\r\n\r\n.no-gutter>[class*='col-'] {\r\n\tpadding-right: 0;\r\n\tpadding-left: 0;\r\n}\r\n\r\n.bg-lightblue {\r\n\tfill: #e8f3ec !important;\r\n\tbackground: #e8f3ec !important;\r\n\tborder-radius: 3px;\r\n}\r\n\r\n.btn-success {\r\n\tcolor: #fff;\r\n\tbackground-color: #03a87c;\r\n\tborder-color: #03a87c;\r\n}\r\n\r\n.small-text {\r\n\tfont-size: 0.875em;\r\n}\r\n\r\n.padding_20 {\r\n\tpadding: 20px !important;\r\n}\r\n\r\n.padding_30 {\r\n\tpadding: 30px !important;\r\n}\r\n\r\n.padding_40 {\r\n\tpadding: 40px !important;\r\n}\r\n\r\na.read-more:hover {\r\n\ttext-decoration: none;\r\n\tborder: 1px solid rgba(255, 255, 255, 0);\r\n}\r\n\r\n.text-light a.read-more {\r\n\tbackground: none;\r\n}\r\n\r\n.m_b_1rem {\r\n\tmargin-bottom: 1rem;\r\n}\r\n\r\n.m_b_2rem {\r\n\tmargin-bottom: 2rem;\r\n}\r\n\r\n.m_b_3rem {\r\n\tmargin-bottom: 3rem;\r\n}\r\n\r\n.m_b_4rem {\r\n\tmargin-bottom: 3rem;\r\n}\r\n\r\n.m-l--15 {\r\n\tmargin-left: -15px;\r\n}\r\n\r\n.btn-green {\r\n\tborder-width: 1px;\r\n\tborder-style: solid;\r\n\tpadding: .3rem .8rem;\r\n\tborder-radius: 3px;\r\n\ttext-transform: uppercase;\r\n\tfont-size: 0.875rem;\r\n\tfont-weight: 300;\r\n}\r\n\r\n.link-green {\r\n\ttext-transform: uppercase;\r\n\tfont-size: 0.875rem;\r\n\tfont-weight: 300;\r\n}\r\n\r\n.spanborder {\r\n\tborder-bottom: 1px solid var(--light-text);\r\n\tmargin-bottom: 1.8rem;\r\n\tfont-weight: 700;\r\n}\r\n.spanborder span {\r\n\tborder-bottom: 1px solid var(--light-text);\r\n\tdisplay: inline-block;\r\n\tpadding-bottom: 0.5rem;\r\n\tmargin-bottom: -1px;\r\n}\r\n.capsSubtle {\r\n\tfont-weight: 400 !important;\r\n\tfont-style: normal !important;\r\n\tfont-size: 0.8em;\r\n\ttext-transform: uppercase;\r\n\tcolor: rgba(0, 0, 0, .54) !important;\r\n\tfill: rgba(0, 0, 0, .54) !important;\r\n\tletter-spacing: -1px;\r\n}\r\nbody {\r\n\tfont-size: 16px;\r\n\tcolor: var(--dark-text);;\r\n}\r\nbody,\r\n.entry-meta,\r\n.heading-font {\r\n\tfont-family: 'Cabin', sans-serif;\r\n}\r\n.menu-primary,\r\n.capsSubtle,\r\n.mobi-menu nav {\r\n\tfont-family: 'B612 Mono', monospace;\r\n}\r\n.entry-header,\r\n.entry-wraper .excerpt,\r\n.entry-wraper .entry-main-content {\r\n\tfont-family: 'Lora', serif;\r\n}\r\n#content {\r\n\tmax-width: 100%;\r\n\tpadding-top: 2rem;\r\n}\r\n.search-popup {\r\n\tdisplay: none;\r\n\ttext-align: center;\r\n\tposition: relative;\r\n\tmargin-top: 50px;\r\n\tpadding: 2rem 0;\r\n\tbox-shadow: 0 2px 2px -2px rgba(0, 0, 0, .15);\r\n}\r\na.searh-toggle:hover,\r\na.searh-toggle:focus,\r\na.searh-toggle:active {\r\n\ttext-decoration: none;\r\n}\r\n.search-form {\r\n\tborder-radius: 50px;\r\n}\r\n.search-form.open-search {\r\n\tborder: 1px solid var(--accent);\r\n}\r\n\r\ninput.search_field {\r\n\tbackground: none;\r\n\theight: 40px;\r\n\tborder: 0;\r\n\ttransition-duration: 0.2s;\r\n\tmax-width: 300px;\r\n\tcolor: rgba(0, 0, 0, .54) !important;\r\n}\r\n\r\n.header-right .search-form input.search_field {\r\n\twidth: 0;\r\n\tdisplay: none;\r\n\theight: 30px;\r\n}\r\n\r\n.search-form.open-search .search_field:focus {\r\n\tbackground: none;\r\n\tborder: 0;\r\n}\r\n\r\n.header-right .search-form {\r\n\tpadding: 0;\r\n}\r\n\r\n.header-right .search-form.open-search input.search_field {\r\n\twidth: 250px;\r\n\ttransition-duration: 0.2s;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.popup-close {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tbackground-image: url(../images/close.svg);\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: center center;\r\n\tbackground-size: 13px;\r\n\tbackground-color: rgba(0, 0, 0, .54);\r\n}\r\n\r\n.menu-search-form {\r\n\tmax-width: 300px;\r\n\tmargin: 0 auto;\r\n\tmargin-bottom: 3rem;\r\n}\r\n\r\n.menu-search-form input {\r\n\theight: 40px;\r\n\tborder-radius: 50px;\r\n\tcolor: rgba(0, 0, 0, .54) !important;\r\n\tborder: 1px solid rgba(0, 0, 0, .34);\r\n}\r\n\r\n.fixed {\r\n\twidth: 100%;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tz-index: 9999;\r\n}\r\n\r\n.sticky-header {\r\n\tpadding: 10px 0;\r\n\theight: 50px;\r\n\tbox-shadow: 0 2px 2px -2px rgba(0, 0, 0, .15);\r\n\tbackground: #fff;\r\n}\r\n\r\n.sticky-header .logo-small {\r\n\tdisplay: block;\r\n\tfloat: left;\r\n}\r\n\r\n.sticky-header .author-avatar {\r\n\tfloat: right;\r\n\tmargin-right: 10%;\r\n}\r\n\r\n.sticky-header .social-network {\r\n\tmargin-top: 3px;\r\n\tfloat: right;\r\n}\r\n\r\n#wrapper {\r\n\tmin-height: 100%;\r\n\tposition: relative;\r\n\tpadding-top: 50px;\r\n}\r\n\r\n.boxed #wrapper {\r\n\twidth: 80%;\r\n\tmargin: 40px auto;\r\n\tbackground: #fff;\r\n\tbox-shadow: 0 0 46px #a1c3ff;\r\n}\r\n\r\n\r\n/*Meta*/\r\n\r\n.entry-meta {\r\n\tcolor: var(--light-text);\r\n\tfill: var(--light-text);\r\n\tfont-size: 0.8rem;\r\n\tline-height: 1.2;\r\n}\r\n\r\n.entry-meta .author-avatar {\r\n\tfloat: left;\r\n\tmargin: -3px 15px 0 0;\r\n}\r\n\r\n.entry-meta .author-avatar img {\r\n\theight: 40px;\r\n\twidth: 40px;\r\n}\r\n\r\n.middotDivider {\r\n\tpadding-right: 1em;\r\n\tfont-size: 16px;\r\n\tposition: relative;\r\n}\r\n\r\n.middotDivider::after {\r\n\tcontent: '';\r\n\twidth: 2px;\r\n\theight: 2px;\r\n\tbackground: var(--light-text);\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 45%;\r\n}\r\n.svgIcon {\r\n\tcolor: var(--light-text);\r\n\tfill: var(--light-text);\r\n\tfont-size: 15px !important;\r\n}\r\n\r\n\r\n/* Back to top */\r\n\r\n.back-to-top {\r\n\tposition: fixed;\r\n\tbottom: 10%;\r\n\tright: 20px;\r\n\tcursor: pointer;\r\n\tz-index: 9999;\r\n\ttransform: rotate(90deg);\r\n\tfont-weight: 700;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 2px;\r\n\tfont-size: 12px;\r\n\tline-height: 1;\r\n\tbackground: var(--dark-background);\r\n}\r\n\r\n.back-to-top i {\r\n\tfont-size: 12px;\r\n}\r\n\r\n.back-to-top span {\r\n\tpadding-left: 10px;\r\n}\r\n\r\n\r\n/* Image zoom */\r\n\r\n.zoom {\r\n\toverflow: hidden;\r\n}\r\n\r\n.zoom img {\r\n\t-webkit-transition: all 2s ease;\r\n\t-moz-transition: all 2s ease;\r\n\t-o-transition: all 2s ease;\r\n\t-ms-transition: all 2s ease;\r\n\ttransition: all 2s ease;\r\n\tmax-width: 100%;\r\n}\r\n\r\n.zoom:hover img {\r\n\topacity: 0.9;\r\n\t-webkit-transform: scale(1.08);\r\n\t-moz-transform: scale(1.08);\r\n\t-ms-transform: scale(1.08);\r\n\t-o-transform: scale(1.08);\r\n\ttransform: scale(1.08);\r\n}\r\n\r\n\r\n/*Transition*/\r\n\r\n.read-more,\r\n.popup-close {\r\n\ttransition: color 0.2s ease, background 0.6s ease, border-color 0.2s ease;\r\n}\r\n\r\n\r\n/* HEADER */\r\n\r\n.navbar-brand {\r\n\tfont-family: Georgia, Times, \"Times New Roman\", serif;\r\n\tfont-size: 1.85rem;\r\n\tfont-weight: 700;\r\n\tletter-spacing: 0px;\r\n\tcolor: #222222;\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tline-height: 1;\r\n}\r\n\r\nheader .logo-wrapper {\r\n\tmargin-bottom: 0px;\r\n\tpadding: 15px 0;\r\n\twidth: 100%;\r\n\tz-index: 1;\r\n\tposition: relative;\r\n}\r\n\r\n.searh-toggle {\r\n\tfloat: left;\r\n}\r\n\r\n.top-menu a,\r\n.searh-toggle,\r\n.search-form {\r\n\tcolor: var(--accent);\r\n\tfont-size: 0.875rem;\r\n\tpadding-left: 0.5rem;\r\n\tpadding-right: 0.5rem;\r\n\tletter-spacing: 0.1px;\r\n\tline-height: 30px;\r\n}\r\n\r\n.top-menu a.btn {\r\n\tborder: 1px solid var(--accent);\r\n\tpadding: 0 .8rem;\r\n\tborder-radius: 3px;\r\n\tmargin-left: 1rem;\r\n\tcolor: var(--accent);\r\n}\r\n\r\n.social-network a:hover,\r\n.top-menu a:hover,\r\n.searh-toggle:hover {\r\n\tcolor: var(--accent);\r\n}\r\n\r\n.social-network a {\r\n\tcolor: var(--accent);\r\n\tborder-radius: 50%;\r\n\tfont-size: 13px;\r\n\tmargin-left: 0.2rem;\r\n\tborder: 1px solid var(--accent);\r\n\twidth: 26px;\r\n\theight: 26px;  \r\n\tdisplay: block;\r\n\tline-height: 23px;\r\n\ttext-align: center;\r\n\tpadding: 0;\r\n}\r\n\r\n.author-avatar {\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.author-avatar img {\r\n\tborder-radius: 50%;\r\n\theight: 32px;\r\n\twidth: 32px;\r\n\tmax-width: unset;\r\n}\r\n\r\nheader {\r\n\tposition: relative;\r\n\tpadding: 1rem 0 0 0;\r\n\twidth: 100%;\r\n\tcolor: #fff;\r\n\ttext-align: center;\r\n\tz-index: 999;\r\n\t-webkit-box-shadow: 0 2px 2px -2px rgba(0, 0, 0, .15);\r\n\tbox-shadow: 0 2px 2px -2px rgba(0, 0, 0, .15);\r\n}\r\n\r\n\r\n/* MAIN-MENU */\r\n\r\n#main-menu {\r\n\twidth: 100%;\r\n\ttext-align: justify;\r\n}\r\n\r\n#main-menu.stick {\r\n\tpadding: 1.2rem 0;\r\n}\r\n\r\n.archive #main-menu.stick {\r\n\tpadding-top: 20px;\r\n\tpadding-bottom: 20px;\r\n}\r\n\r\n.scroll-to-fixed-fixed {\r\n\tbackground: var(--dark-background);\r\n}\r\n\r\n#main-menu.scroll-to-fixed-fixed {\r\n\tz-index: 1000;\r\n\tposition: fixed;\r\n\ttop: 0px;\r\n\tmargin-left: 0px;\r\n\tleft: 0px;\r\n}\r\n\r\n#main-menu.scroll-to-fixed-fixed .menu-top .logo-wrapper {\r\n\tmargin: 0;\r\n}\r\n\r\n#main-menu .menu-top {\r\n\theight: 0;\r\n\toverflow: hidden;\r\n}\r\n\r\n#main-menu .menu-top .logo-wrapper {\r\n\tmargin-bottom: 10px;\r\n\tpadding-bottom: 15px;\r\n\twidth: 100%;\r\n\tz-index: 1;\r\n\tposition: relative;\r\n\tborder-bottom: 1px solid #000000;\r\n}\r\n\r\n#main-menu .menu-top .logo-wrapper .logo {\r\n\tdisplay: block;\r\n\tfloat: left;\r\n\ttext-align: left;\r\n}\r\n\r\n#main-menu .menu-top .logo-wrapper .logo img {\r\n\tmargin: 0;\r\n}\r\n\r\n#main-menu .menu-top .logo-wrapper .social-search {\r\n\tlist-style: none;\r\n\tfloat: right;\r\n\ttext-align: right;\r\n\tmargin: 10px 0 0 0;\r\n}\r\n\r\n#main-menu .menu-top .logo-wrapper .social-search>li {\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\tpadding-right: 15px;\r\n\tborder-right: 1px solid #fff;\r\n\tmargin-right: 0;\r\n}\r\n\r\n#main-menu .menu-top .logo-wrapper .social-search>li:last-child {\r\n\tpadding-right: 0;\r\n\tborder-right: 0;\r\n\tpadding-left: 15px;\r\n}\r\n\r\n#main-menu .menu-top .logo-wrapper .social-search>li:hover>ul {\r\n\tdisplay: block;\r\n}\r\n\r\n#main-menu .menu-top .logo-wrapper .social-search>li>ul {\r\n\tdisplay: none;\r\n\tposition: absolute;\r\n\tpadding-top: 10px;\r\n\tlist-style: none;\r\n}\r\n\r\n#main-menu .menu-top .logo-wrapper .social-search>li>ul>li {\r\n\tpadding: 5px 10px;\r\n\tbackground: #fff;\r\n}\r\n\r\n#main-menu .menu-top .logo-wrapper .social-search>li>ul>li:first-child {\r\n\tpadding-top: 12px;\r\n}\r\n\r\n#main-menu .menu-top .logo-wrapper .social-search>li>ul>li:last-child {\r\n\tpadding-bottom: 12px;\r\n}\r\n\r\n#main-menu .menu-top .logo-wrapper .social-search>li>ul>li a {\r\n\tcolor: #000000;\r\n\tletter-spacing: 2px;\r\n\ttext-decoration: none;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n#main-menu .menu-top .logo-wrapper .social-search>li>ul>li a:hover {\r\n\tcolor: #341fff;\r\n}\r\n\r\n#main-menu .menu-top .logo-wrapper .social-search>li>a {\r\n\tletter-spacing: 2px;\r\n\ttext-decoration: none;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n#main-menu .menu-top .logo-wrapper .social-search>li>a:hover {\r\n\ttext-decoration: none;\r\n}\r\n\r\n#main-menu .menu-top .logo-wrapper .social-search>li:first-child {\r\n\tborder-right: 1px solid #000000;\r\n}\r\n\r\n#main-menu .menu-top .logo-wrapper .social-search>li>a {\r\n\tcolor: #000000;\r\n}\r\n\r\n#main-menu .menu-primary {\r\n\theight: 20px;\r\n}\r\n\r\n#main-menu .menu-primary ul {\r\n\tdisplay: inline;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n#main-menu .menu-primary ul>li {\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\tpadding: 0 0 16px 0;\r\n}\r\n\r\n#main-menu .menu-primary ul>li>a {\r\n\tcolor: var(--light-text-menu);\r\n\ttext-transform: uppercase;\r\n\tdisplay: inline-block;\r\n\ttext-decoration: none;\r\n\tfont-size: 0.8rem;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n#main-menu .menu-primary ul>li>a:hover {\r\n\tcolor: rgba(0, 0, 0, .7)\r\n}\r\n\r\n#main-menu .menu-primary>span {\r\n\tdisplay: inline-block;\r\n\twidth: 100%;\r\n\theight: 0;\r\n\tfont-size: 0;\r\n}\r\n\r\n#main-menu .menu-primary ul.sub-menu {\r\n\tdisplay: none;\r\n}\r\n\r\n#main-menu .menu-primary li:hover ul.sub-menu {\r\n\tdisplay: block;\r\n}\r\n\r\n#main-menu .menu-primary ul.sub-menu {\r\n\tborder: medium none;\r\n\tborder-top: 0 none;\r\n\tdisplay: none;\r\n\tposition: absolute;\r\n\ttext-align: left;\r\n\ttop: 100%;\r\n\tz-index: 100;\r\n\tleft: 0;\r\n\tpadding: 0;\r\n\tbackground: var(--light-background);\r\n\tpadding: 10px 20px;\r\n\tmin-width: 220px;\r\n\tmargin-left: -20px;\r\n\tbox-shadow: 0px 0px 5px 0px rgba(0, 0, 0, .12);\r\n}\r\n\r\n#main-menu .menu-primary li ul.sub-menu li {\r\n\tdisplay: block;\r\n\tline-height: 1.2;\r\n\tpadding: 10px 0 !important;\r\n}\r\n\r\n#main-menu .menu-primary li ul.sub-menu a {\r\n\tdisplay: inherit;\r\n\tline-height: 1;\r\n}\r\n\r\n#main-menu.scroll-to-fixed-fixed {\r\n\t-webkit-box-shadow: 0 2px 2px -2px rgba(0, 0, 0, .15);\r\n\tbox-shadow: 0 2px 2px -2px rgba(0, 0, 0, .15);\r\n}\r\n\r\n\r\n/* MOBILE MENU*/\r\n\r\n.menu-toggle-icon {\r\n\theight: 30px;\r\n\twidth: 30px;\r\n\tz-index: 99999;\r\n\tposition: absolute;\r\n\tright: 15px;\r\n}\r\n\r\n.menu-toggle-icon>span {\r\n\tbackground-color: rgba(0, 0, 0, .84);\r\n\tborder-radius: 1px;\r\n\theight: 2px;\r\n\twidth: 100%;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\ttop: 50%;\r\n\tmargin: -1px 0 0 -15px;\r\n\ttransition: height 100ms;\r\n}\r\n\r\n.menu-toggle-icon>span:after,\r\n.menu-toggle-icon>span:before {\r\n\tcontent: '';\r\n\tbackground-color: rgba(0, 0, 0, .84);\r\n\tborder-radius: 1px;\r\n\theight: 2px;\r\n\twidth: 100%;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\tmargin-left: -15px;\r\n\ttransition: all 200ms;\r\n}\r\n\r\n.menu-toggle-icon>span:after {\r\n\ttop: -7px;\r\n}\r\n\r\n.menu-toggle-icon>span:before {\r\n\tbottom: -7px;\r\n}\r\n\r\n.menu-toggle-icon.act>span {\r\n\theight: 0;\r\n}\r\n\r\n.menu-toggle-icon.act>span:after,\r\n.menu-toggle-icon.act>span:before {\r\n\ttop: 1px;\r\n}\r\n\r\n.menu-toggle-icon.act>span:after {\r\n\t-webkit-transform: rotate(45deg);\r\n\ttransform: rotate(45deg);\r\n}\r\n\r\n.menu-toggle-icon.act>span:before {\r\n\t-webkit-transform: rotate(-45deg);\r\n\ttransform: rotate(-45deg);\r\n}\r\n\r\n\r\n/* Main menu block */\r\n\r\n.mobi-menu {\r\n\tbackground-color: #fff;\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tz-index: 100;\r\n\theight: 100vh;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\topacity: 0;\r\n\ttransition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\r\n\t-webkit-transform: scale(0);\r\n\ttransform: scale(0);\r\n}\r\n\r\n.menu-toggle-icon.act>span::after,\r\n.menu-toggle-icon.act>span::before {\r\n\tbackground: #000;\r\n}\r\n\r\n.mobi-menu.act {\r\n\topacity: 1;\r\n\t-webkit-transform: scale(1);\r\n\ttransform: scale(1);\r\n}\r\n\r\n.mobi-menu.act ul li {\r\n\topacity: 1;\r\n\t-webkit-transform: translateX(0);\r\n\ttransform: translateX(0);\r\n}\r\n\r\n.mobi-menu {\r\n\ttext-align: center;\r\n}\r\n\r\n.mobi-menu ul {\r\n\tlist-style: none;\r\n\twidth: 65%;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n\r\n/*show the second levele menu of the selected voice*/\r\n\r\n.mobi-menu .open-submenu ul.sub-menu {\r\n\tmax-height: 800px;\r\n\ttransition: max-height 0.5s ease-in;\r\n\tmargin-top: 1rem;\r\n}\r\n\r\n\r\n/*style for the second level menu*/\r\n\r\n.mobi-menu ul.sub-menu {\r\n\tmax-height: 0;\r\n\tpadding: 0;\r\n\toverflow: hidden;\r\n\tlist-style-type: none;\r\n\ttransition: max-height 0.5s ease-out;\r\n\tposition: relative;\r\n\tmin-width: 100%;\r\n}\r\n\r\n.mobi-menu .open-submenu ul.sub-menu {\r\n\twidth: 100%;\r\n}\r\n\r\n.mobi-menu .open-submenu ul.sub-menu li {\r\n\tpadding: .8rem 0;\r\n\tborder: 0;\r\n}\r\n\r\n.mobi-menu .open-submenu ul.sub-menu li a {\r\n\tfont-size: 0.875rem;\r\n}\r\n\r\n.mobi-menu li {\r\n\tpadding: 0.5rem 0;\r\n\tline-height: 1;\r\n\tposition: relative;\r\n}\r\n\r\n.mobi-menu li:first-child {\r\n\tborder: 0;\r\n}\r\n\r\n.mobi-menu li a {\r\n\ttext-transform: uppercase;\r\n\tcolor: rgba(0, 0, 0, .5);\r\n\tfont-size: 0.875rem;\r\n}\r\n\r\n.mobi-menu li.menu-item-has-children .sub-menu-toggle {\r\n\tposition: absolute;\r\n\ttop: 20px;\r\n\tright: 20px;\r\n}\r\n\r\n.mobi-menu .sub-menu-toggle::after {\r\n\tcontent: '\\e801';\r\n\tfont-family: \"fontello\";\r\n\tdisplay: inline-block;\r\n\tmargin-left: 10px;\r\n}\r\n\r\n.mobi-menu .open-submenu .sub-menu-toggle::after {\r\n\t-webkit-transform: rotate(180deg);\r\n\t-ms-transform: rotate(180deg);\r\n\ttransform: rotate(180deg);\r\n}\r\n\r\n.mobi-menu .mobi-menu__logo {\r\n\tmargin: 5.3rem 0 3rem 0;\r\n\tfont-size: 3rem !important;\r\n\tline-height: 1;\r\n}\r\n\r\n.mobi-menu__logo img {\r\n\tdisplay:\r\n}\r\n\r\n.mobi-menu .mobi-menu__socials {\r\n\tposition: absolute;\r\n\tz-index: 1;\r\n\tleft: 0;\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tbottom: 3rem;\r\n}\r\n\r\n\r\n/*FOOTER*/\r\n\r\nfooter .social-network li {\r\n\tmargin: 0 !important;\r\n}\r\n\r\n.copyright {\r\n\tfont-size: .875rem;\r\n}\r\n\r\n\r\n/*ELEMENTS*/\r\n\r\n\r\n/*Pagination*/\r\n\r\nul.page-numbers {\r\n\tmargin-top: 1.5rem;\r\n\tmargin-bottom: 1.5rem;\r\n\tpadding-top: 1.5rem;\r\n\tborder-top: 1px solid rgba(0, 0, 0, .15);\r\n\twidth: 100%;\r\n}\r\n\r\nul.page-numbers i {\r\n\tfont-size: .875em;\r\n}\r\n\r\nul.page-numbers li {\r\n\tdisplay: inline-block;\r\n\tpadding: 0 10px 0 0;\r\n}\r\n\r\nul.page-numbers li a {\r\n\tcolor: var(--accent);\r\n}\r\n\r\nul.page-numbers li span.current {\r\n\tcolor: var(--light-text);\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\tfont-weight: bold;\r\n}\r\n\r\n\r\n/*Form*/\r\n\r\n.form-control {\r\n\theight: 50px;\r\n\tline-height: 50px;\r\n\tpadding: 15px;\r\n\tbackground: none;\r\n\tborder-top: 0;\r\n\tborder-left: 0;\r\n\tborder-radius: 0;\r\n\tborder-right: 0;\r\n\tfont-size: .875rem;\r\n\tbackground: #fff;\r\n\tborder-radius: 3px;\r\n\tborder: 1px solid #dee2e6 !important;\r\n}\r\n\r\ntextarea.form-control {\r\n\tmin-height: 160px;\r\n\tresize: none;\r\n\tpadding: 10px 20px;\r\n}\r\n\r\n.submit-btn {\r\n\tfont-weight: 600;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 2px;\r\n\tborder: 0;\r\n\tborder-radius: 50px;\r\n\tfont-size: 0.875rem;\r\n\tpadding: .8em 1.8em .7em;\r\n\tfont-size: .785em;\r\n}\r\n\r\n.submit-btn:hover {\r\n\tcolor: #fff;\r\n}\r\n\r\n.form-control:focus {\r\n\tcolor: #5f656b;\r\n\tbackground: none;\r\n\toutline: 0;\r\n\tbox-shadow: none;\r\n}\r\n\r\n#comments input.submit {\r\n\tmax-width: 250px;\r\n}\r\n\r\n\r\n/*ARCHIVE*/\r\n\r\n.archive-header {}\r\n\r\n.archive-intro {\r\n\tmax-width: 500px;\r\n\tmargin: 0 auto;\r\n\tcolor: rgba(0, 0, 0, .54) !important;\r\n}\r\n\r\n\r\n/*SINGLE POST*/\r\n\r\n.single-header {\r\n\tpadding: 2rem 0 4rem 0;\r\n}\r\n\r\n.row-flex figure {\r\n\twidth: 45%;\r\n}\r\n\r\n.row-flex .entry-content {\r\n\tjustify-content: center;\r\n\talign-self: center;\r\n\tpadding-left: 30px;\r\n\tflex: 1;\r\n\ttext-align: left;\r\n}\r\n\r\n.sing-header .meta span {\r\n\tmargin-right: 10px;\r\n}\r\n\r\n.meta .author img {\r\n\theight: 30px;\r\n\twidth: 30px;\r\n\tborder-radius: 50%;\r\n\tdisplay: inline;\r\n\tmargin: -5px 5px 0 0;\r\n}\r\n\r\n.entry-wraper {\r\n\tposition: relative;\r\n}\r\n\r\n.entry-wraper .excerpt {\r\n\tcolor: inherit;\r\n\tfont-weight: 600;\r\n\tfont-size: 1.345rem;\r\n}\r\n\r\n.entry-main-content {\r\n\tline-height: 1.7;\r\n\tfont-size: 1.25rem;\r\n\tmargin-bottom: 4rem;\r\n}\r\n\r\n.entry-main-content p {\r\n\tmargin-bottom: 1.5rem;\r\n}\r\n\r\nblockquote {\r\n\tposition: relative;\r\n\tborder-left: 0;\r\n\tpadding: 0px 30px;\r\n\tfont-weight: 400;\r\n\tmargin-bottom: 1.5rem;\r\n\tfont-style: italic;\r\n}\r\n\r\nblockquote::before {\r\n\tcontent: \"\";\r\n\ttop: 0px;\r\n\theight: 100%;\r\n\tleft: 0;\r\n\twidth: 4px;\r\n\tposition: absolute;\r\n\tbackground: #000;\r\n}\r\n\r\nblockquote p:last-child,\r\nblockquote ul:last-child,\r\nblockquote ol:last-child {\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n\r\n/*Social share icons*/\r\n\r\n.entry-left-col {\r\n\tposition: absolute;\r\n\tleft: -20%;\r\n\theight: 200vh;\r\n\tz-index: 2;\r\n\ttop: 3rem;\r\n\tbottom: 0;\r\n}\r\n\r\n.social-sticky {\r\n\tposition: -webkit-sticky;\r\n\tposition: sticky;\r\n\ttop: 70px;\r\n}\r\n\r\n.social-sticky a {\r\n\tdisplay: block;\r\n\tcolor: rgba(0, 0, 0, .54);\r\n\tborder-radius: 50%;\r\n\tborder: 1px solid rgba(0, 0, 0, .34);\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\ttext-align: center;\r\n\tline-height: 30px;\r\n\tmargin-bottom: 0.5rem;\r\n\tfont-size: 13px;\r\n}\r\n\r\n.dropcap p:first-child:first-letter {\r\n\tfont-size: 4em;\r\n\tfloat: left;\r\n\tmargin-top: .15em;\r\n\tmargin-right: 0.15em;\r\n\tline-height: 1;\r\n}\r\n\r\n.dropcap blockquote p:first-child:first-letter {\r\n\tfont-size: inherit;\r\n\tmargin: 0;\r\n\tline-height: inherit;\r\n\tfloat: none;\r\n}\r\n\r\n\r\n/*single tags*/\r\n\r\n.entry-bottom {\r\n\tmargin: 0 0 2rem 0;\r\n\tfont-size: 1.125em;\r\n}\r\n\r\n.tags-wrap {\r\n\tmargin: 1.5rem 0;\r\n}\r\n\r\n.tags-wrap a {\r\n\tbackground: rgba(0, 0, 0, .05);\r\n\tborder-radius: 3px;\r\n\tfont-size: 0.875rem;\r\n\tpadding: 6px 12px;\r\n\tmargin-right: 3px;\r\n}\r\n\r\n.entry-bottom-social {}\r\n\r\n\r\n/*Author box*/\r\n\r\n.entry-main-content .box.box-author a {\r\n\tcolor: rgba(0, 0, 0, .84) !important;\r\n}\r\n\r\n.post-author {\r\n\toverflow: hidden;\r\n\tpadding: 50px;\r\n}\r\n\r\n.author-img {\r\n\tmargin-right: 30px;\r\n\tposition: relative;\r\n}\r\n\r\n.author-img>img {\r\n\tmax-width: 120px;\r\n\tborder: 3px solid #fff;\r\n\tborder-radius: 100%;\r\n}\r\n\r\n.author-content {\r\n\tvertical-align: middle;\r\n}\r\n\r\n.post-author .top-author {\r\n\t-webkit-order: 0;\r\n\t-ms-flex-order: 0;\r\n\torder: 0;\r\n\t-webkit-flex: 1 1 auto;\r\n\t-ms-flex: 1 1 auto;\r\n\tflex: 1 1 auto;\r\n\t-webkit-align-self: stretch;\r\n\t-ms-flex-item-align: stretch;\r\n\talign-self: stretch;\r\n}\r\n\r\n.author-content h5 {\r\n\tfont-size: 1.1rem;\r\n\tfont-weight: 600;\r\n\tpadding: 0px 0 10px;\r\n\tdisplay: block;\r\n\tmargin: 0;\r\n}\r\n\r\n.author-content p {\r\n\tmargin: auto;\r\n\tcolor: #555;\r\n}\r\n\r\n.post-author .content-social-author {\r\n\tpadding-top: 15px;\r\n}\r\n\r\n.author-content .author-social {\r\n\tpadding-right: 15px;\r\n\tfont-size: 16px;\r\n}\r\n\r\n\r\n/*Related posts*/\r\n\r\n.related-posts h3 {\r\n\ttext-align: center;\r\n}\r\n\r\n\r\n/*PAGEs*/\r\n\r\n\r\n/*contact*/\r\n\r\ninput:focus,\r\ntextarea:focus,\r\nbutton:focus,\r\nselect:focus {\r\n\tborder: 1px solid #888890;\r\n\t-webkit-transition: 0.4s;\r\n\t-o-transition: 0.4s;\r\n\ttransition: 0.4s;\r\n}\r\n\r\ninput {\r\n\t-webkit-appearance: none;\r\n\tappearance: none;\r\n\tborder-radius: 0px;\r\n\theight: 40px;\r\n\tfont-size: 16px;\r\n\tpadding: 7px 15px;\r\n\tbackground: white;\r\n\tborder: 1px solid #e1e1e1;\r\n\t-webkit-transition: 0.4s;\r\n\t-o-transition: 0.4s;\r\n\ttransition: 0.4s;\r\n\twidth: 100%;\r\n\tcolor: rgba(0, 0, 0, 0.54);\r\n}\r\n\r\ntextarea,\r\nbutton,\r\nselect {\r\n\t-webkit-appearance: none;\r\n\tappearance: none;\r\n\tborder-radius: 0px;\r\n\tfont-size: 16px;\r\n\tpadding: 7px 15px;\r\n\tbackground: white;\r\n\tborder: 1px solid #ebebeb;\r\n\t-webkit-transition: 0.4s;\r\n\t-o-transition: 0.4s;\r\n\ttransition: 0.4s;\r\n\twidth: 100%;\r\n\tcolor: rgba(0, 0, 0, 0.54);\r\n}\r\n\r\nbutton,\r\nhtml input[type=\"button\"],\r\ninput[type=\"reset\"],\r\ninput[type=\"submit\"] {\r\n\tcolor: #fff;\r\n\tborder-style: solid;\r\n\tpadding: 0 20px;\r\n\tborder-radius: 3px;\r\n\tcursor: pointer;\r\n\twidth: unset;\r\n}\r\n\r\nbutton:hover,\r\ninput[type=\"button\"]:hover,\r\ninput[type=\"reset\"]:hover,\r\ninput[type=\"submit\"]:hover {\r\n\tborder: none;\r\n}\r\n\r\n\r\n/*404*/\r\n\r\n.page-404 .entry-wraper {\r\n\tmin-height: 500px;\r\n}\r\n\r\n.page-404 .entry-wraper h1 {\r\n\tfont-size: 8em;\r\n}\r\n\r\n.page-404 .search-form {\r\n\tmax-width: 400px;\r\n\tmargin: 0 auto;\r\n\tline-height: 40px;\r\n\tpadding-left: 15px;\r\n}\r\n\r\n\r\n/*Gallery*/\r\n\r\n.gallery figcaption {\r\n\tdisplay: none;\r\n}\r\n\r\n.gallery-item {\r\n\tposition: relative;\r\n}\r\n\r\n.gallery-item::after {\r\n\tcontent: '\\e80e';\r\n\tposition: absolute;\r\n\tz-index: 1;\r\n\ttop: .5rem;\r\n\tright: 1rem;\r\n\tfont-family: \"fontello\";\r\n\tcolor: #fff;\r\n\tfont-size: 1.5rem;\r\n\topacity: 0;\r\n}\r\n\r\n.gallery-item:hover::after {\r\n\topacity: 1;\r\n\ttransition-duration: .4s;\r\n}\r\n\r\n\r\n/*Elements*/\r\n\r\nol,\r\nul,\r\ndl {\r\n\tmargin-top: 0;\r\n\tmargin-bottom: 1.5rem;\r\n}\r\n\r\n.entry-main-content dd,\r\n.single-comment dd {\r\n\tmargin: 0 0 1.65em;\r\n}\r\n\r\n.entry-main-content ul {\r\n\tlist-style: disc;\r\n\tpadding-left: 1rem;\r\n}\r\n\r\n.entry-main-content ul li {\r\n\tlist-style: disc;\r\n}\r\n\r\nul ul,\r\nol ol {\r\n\tmargin-left: 0.5rem;\r\n}\r\n\r\nol {\r\n\tfloat: none;\r\n\tlist-style: decimal inside;\r\n\tmargin-left: 1.5rem;\r\n}\r\n\r\nol li {\r\n\tlist-style: decimal;\r\n\twidth: 100%;\r\n}\r\n\r\ntable {\r\n\twidth: 100%;\r\n\tmargin-bottom: 1.5rem;\r\n\tcolor: #212529;\r\n\tborder-collapse: collapse;\r\n}\r\n\r\ntable thead th {\r\n\tvertical-align: bottom;\r\n\tborder-bottom: 2px solid #dee2e6;\r\n\tborder-color: rgba(0, 0, 0, 0.06);\r\n}\r\n\r\ntable td,\r\n.table th {\r\n\tpadding: .75rem;\r\n\tvertical-align: top;\r\n\tborder-top: 1px solid #dee2e6;\r\n\tborder-color: rgba(0, 0, 0, 0.06);\r\n}\r\n\r\npre {\r\n\tborder: 1px solid #d1d1d1;\r\n\tfont-size: 1em;\r\n\tline-height: 1.8;\r\n\tmargin: 0 0 1.75em;\r\n\tmax-width: 100%;\r\n\toverflow: auto;\r\n\tpadding: 1.75em;\r\n\twhite-space: pre;\r\n\twhite-space: pre-wrap;\r\n\tword-wrap: break-word;\r\n}\r\n\r\n\r\n/*OTHER*/\r\n\r\nbutton.owl-prev:hover,\r\nbutton.owl-next:hover {\r\n\tbackground: none !important;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./public/static/styles/widgets.css":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./public/static/styles/widgets.css ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/***\r\nStyling for widgets\r\n  Full slider\r\n  Latest posts\r\n  Ads\r\n  Search\r\n***/\r\n.widget-title{text-transform:uppercase;position:relative;line-height:1;}\r\n.post-has-bg{background:var(--light-background);margin-bottom:2rem;}\r\n.post-has-bg figure{margin:0;}\r\n.post-has-bg .entry-content{padding:1rem;}\r\n\r\n/*Widget Full slider*/\r\n\r\n/*Widget Lastest Post Template 1*/\r\n\r\n/*Widget Lastest Post Template 2*/\r\n\r\n/*Widget Lastest Post Template 3*/\r\n\r\n/*Widget Lastest Post Template 4*/\r\n.latest-tpl-4 ol{margin:-5px 0 0 0;padding:0;}\r\n.latest-tpl-4 .post-content{-moz-box-flex:1;flex:1 1 auto;margin-left:0;}\r\n.latest-tpl-4 .entry-title{margin:0 0 .5em 0;}\r\n.latest-tpl-4 .post-count{font-size:1.7em;line-height:1;color: var(--accent);fill: var(--accent);padding-top:5px;display:none;}\r\n.latest-tpl-4 li{margin-bottom:1.2em;}\r\n\r\n/*Widget Lastest Post Template 6*/\r\n\r\n/*Widget Lastest Post Template 7*/\r\n\r\n/*Widget Post slide style 1*/\r\n\r\n/*Widget Ads*/\r\n.ads{text-align:center;}\r\n.ads img{display:inline;}\r\n\r\n\r\n/* SEARCH-WIDGET */\r\n\r\n/*Twitter*/\r\n\r\n/*post-list-style-2*/\r\n", "",{"version":3,"sources":["webpack://public/static/styles/widgets.css"],"names":[],"mappings":"AAAA;;;;;;GAMG;AACH,cAAc,wBAAwB,CAAC,iBAAiB,CAAC,aAAa,CAAC;AACvE,aAAa,kCAAkC,CAAC,kBAAkB,CAAC;AACnE,oBAAoB,QAAQ,CAAC;AAC7B,4BAA4B,YAAY,CAAC;;AAEzC,qBAAqB;;AAErB,iCAAiC;;AAEjC,iCAAiC;;AAEjC,iCAAiC;;AAEjC,iCAAiC;AACjC,iBAAiB,iBAAiB,CAAC,SAAS,CAAC;AAC7C,4BAAuF,eAAa,CAAb,aAAa,CAAC,aAAa,CAAC;AACnH,2BAA2B,iBAAiB,CAAC;AAC7C,0BAA0B,eAAe,CAAC,aAAa,CAAC,oBAAoB,CAAC,mBAAmB,CAAC,eAAe,CAAC,YAAY,CAAC;AAC9H,iBAAiB,mBAAmB,CAAC;;AAErC,iCAAiC;;AAEjC,iCAAiC;;AAEjC,4BAA4B;;AAE5B,aAAa;AACb,KAAK,iBAAiB,CAAC;AACvB,SAAS,cAAc,CAAC;;;AAGxB,kBAAkB;;AAElB,UAAU;;AAEV,oBAAoB","sourcesContent":["/***\r\nStyling for widgets\r\n  Full slider\r\n  Latest posts\r\n  Ads\r\n  Search\r\n***/\r\n.widget-title{text-transform:uppercase;position:relative;line-height:1;}\r\n.post-has-bg{background:var(--light-background);margin-bottom:2rem;}\r\n.post-has-bg figure{margin:0;}\r\n.post-has-bg .entry-content{padding:1rem;}\r\n\r\n/*Widget Full slider*/\r\n\r\n/*Widget Lastest Post Template 1*/\r\n\r\n/*Widget Lastest Post Template 2*/\r\n\r\n/*Widget Lastest Post Template 3*/\r\n\r\n/*Widget Lastest Post Template 4*/\r\n.latest-tpl-4 ol{margin:-5px 0 0 0;padding:0;}\r\n.latest-tpl-4 .post-content{-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;margin-left:0;}\r\n.latest-tpl-4 .entry-title{margin:0 0 .5em 0;}\r\n.latest-tpl-4 .post-count{font-size:1.7em;line-height:1;color: var(--accent);fill: var(--accent);padding-top:5px;display:none;}\r\n.latest-tpl-4 li{margin-bottom:1.2em;}\r\n\r\n/*Widget Lastest Post Template 6*/\r\n\r\n/*Widget Lastest Post Template 7*/\r\n\r\n/*Widget Post slide style 1*/\r\n\r\n/*Widget Ads*/\r\n.ads{text-align:center;}\r\n.ads img{display:inline;}\r\n\r\n\r\n/* SEARCH-WIDGET */\r\n\r\n/*Twitter*/\r\n\r\n/*post-list-style-2*/\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/getUrl.js":
/*!**************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/getUrl.js ***!
  \**************************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var e={91:function(e){e.exports=function(e,r){if(!r){r={}}e=e&&e.__esModule?e.default:e;if(typeof e!=="string"){return e}if(/^['"].*['"]$/.test(e)){e=e.slice(1,-1)}if(r.hash){e+=r.hash}if(/["'() \t\n]/.test(e)||r.needQuotes){return'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"')}return e}}};var r={};function __nccwpck_require__(t){if(r[t]){return r[t].exports}var _=r[t]={exports:{}};var n=true;try{e[t](_,_.exports,__nccwpck_require__);n=false}finally{if(n)delete r[t]}return _.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(91)}();

/***/ }),

/***/ "./public/static/font/fontello.eot?47148713":
/*!**************************************************!*\
  !*** ./public/static/font/fontello.eot?47148713 ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/fontello.50c64c7e627201771cdbd4842097a403.eot");

/***/ }),

/***/ "./public/static/font/fontello.svg?47148713":
/*!**************************************************!*\
  !*** ./public/static/font/fontello.svg?47148713 ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/fontello.b549cdea7c5f9d56e4d7c047b4346de8.svg");

/***/ }),

/***/ "./public/static/font/fontello.ttf?47148713":
/*!**************************************************!*\
  !*** ./public/static/font/fontello.ttf?47148713 ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/fontello.ff4359035a50a1c23a2e054c7e9c4fdc.ttf");

/***/ }),

/***/ "./public/static/font/fontello.woff2?47148713":
/*!****************************************************!*\
  !*** ./public/static/font/fontello.woff2?47148713 ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/fontello.08bd11e36ad2fd19dfbc7ff8c91e7a11.woff2");

/***/ }),

/***/ "./public/static/font/fontello.woff?47148713":
/*!***************************************************!*\
  !*** ./public/static/font/fontello.woff?47148713 ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/fontello.864538c41f8c01e4ff747de92aa7acb2.woff");

/***/ }),

/***/ "./public/static/images/close.svg":
/*!****************************************!*\
  !*** ./public/static/images/close.svg ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/close.0e6bfc7cf8e38e8c72e33a062eda52b2.svg");

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-lazyload/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-lazyload/lib/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.forceVisible = exports.forceCheck = exports.lazyload = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _event = __webpack_require__(/*! ./utils/event */ "./node_modules/react-lazyload/lib/utils/event.js");

var _scrollParent = __webpack_require__(/*! ./utils/scrollParent */ "./node_modules/react-lazyload/lib/utils/scrollParent.js");

var _scrollParent2 = _interopRequireDefault(_scrollParent);

var _debounce = __webpack_require__(/*! ./utils/debounce */ "./node_modules/react-lazyload/lib/utils/debounce.js");

var _debounce2 = _interopRequireDefault(_debounce);

var _throttle = __webpack_require__(/*! ./utils/throttle */ "./node_modules/react-lazyload/lib/utils/throttle.js");

var _throttle2 = _interopRequireDefault(_throttle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * react-lazyload
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var defaultBoundingClientRect = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 0,
  height: 0
};
var LISTEN_FLAG = 'data-lazyload-listened';
var listeners = [];
var pending = [];

// try to handle passive events
var passiveEventSupported = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function get() {
      passiveEventSupported = true;
    }
  });
  window.addEventListener('test', null, opts);
} catch (e) {}
// if they are supported, setup the optional params
// IMPORTANT: FALSE doubles as the default CAPTURE value!
var passiveEvent = passiveEventSupported ? { capture: false, passive: true } : false;

/**
 * Check if `component` is visible in overflow container `parent`
 * @param  {node} component React component
 * @param  {node} parent    component's scroll parent
 * @return {bool}
 */
var checkOverflowVisible = function checkOverflowVisible(component, parent) {
  var node = component.ref;

  var parentTop = void 0;
  var parentLeft = void 0;
  var parentHeight = void 0;
  var parentWidth = void 0;

  try {
    var _parent$getBoundingCl = parent.getBoundingClientRect();

    parentTop = _parent$getBoundingCl.top;
    parentLeft = _parent$getBoundingCl.left;
    parentHeight = _parent$getBoundingCl.height;
    parentWidth = _parent$getBoundingCl.width;
  } catch (e) {
    parentTop = defaultBoundingClientRect.top;
    parentLeft = defaultBoundingClientRect.left;
    parentHeight = defaultBoundingClientRect.height;
    parentWidth = defaultBoundingClientRect.width;
  }

  var windowInnerHeight = window.innerHeight || document.documentElement.clientHeight;
  var windowInnerWidth = window.innerWidth || document.documentElement.clientWidth;

  // calculate top and height of the intersection of the element's scrollParent and viewport
  var intersectionTop = Math.max(parentTop, 0); // intersection's top relative to viewport
  var intersectionLeft = Math.max(parentLeft, 0); // intersection's left relative to viewport
  var intersectionHeight = Math.min(windowInnerHeight, parentTop + parentHeight) - intersectionTop; // height
  var intersectionWidth = Math.min(windowInnerWidth, parentLeft + parentWidth) - intersectionLeft; // width

  // check whether the element is visible in the intersection
  var top = void 0;
  var left = void 0;
  var height = void 0;
  var width = void 0;

  try {
    var _node$getBoundingClie = node.getBoundingClientRect();

    top = _node$getBoundingClie.top;
    left = _node$getBoundingClie.left;
    height = _node$getBoundingClie.height;
    width = _node$getBoundingClie.width;
  } catch (e) {
    top = defaultBoundingClientRect.top;
    left = defaultBoundingClientRect.left;
    height = defaultBoundingClientRect.height;
    width = defaultBoundingClientRect.width;
  }

  var offsetTop = top - intersectionTop; // element's top relative to intersection
  var offsetLeft = left - intersectionLeft; // element's left relative to intersection

  var offsets = Array.isArray(component.props.offset) ? component.props.offset : [component.props.offset, component.props.offset]; // Be compatible with previous API

  return offsetTop - offsets[0] <= intersectionHeight && offsetTop + height + offsets[1] >= 0 && offsetLeft - offsets[0] <= intersectionWidth && offsetLeft + width + offsets[1] >= 0;
};

/**
 * Check if `component` is visible in document
 * @param  {node} component React component
 * @return {bool}
 */
var checkNormalVisible = function checkNormalVisible(component) {
  var node = component.ref;

  // If this element is hidden by css rules somehow, it's definitely invisible
  if (!(node.offsetWidth || node.offsetHeight || node.getClientRects().length)) return false;

  var top = void 0;
  var elementHeight = void 0;

  try {
    var _node$getBoundingClie2 = node.getBoundingClientRect();

    top = _node$getBoundingClie2.top;
    elementHeight = _node$getBoundingClie2.height;
  } catch (e) {
    top = defaultBoundingClientRect.top;
    elementHeight = defaultBoundingClientRect.height;
  }

  var windowInnerHeight = window.innerHeight || document.documentElement.clientHeight;

  var offsets = Array.isArray(component.props.offset) ? component.props.offset : [component.props.offset, component.props.offset]; // Be compatible with previous API

  return top - offsets[0] <= windowInnerHeight && top + elementHeight + offsets[1] >= 0;
};

/**
 * Detect if element is visible in viewport, if so, set `visible` state to true.
 * If `once` prop is provided true, remove component as listener after checkVisible
 *
 * @param  {React} component   React component that respond to scroll and resize
 */
var checkVisible = function checkVisible(component) {
  var node = component.ref;
  if (!(node instanceof HTMLElement)) {
    return;
  }

  var parent = (0, _scrollParent2.default)(node);
  var isOverflow = component.props.overflow && parent !== node.ownerDocument && parent !== document && parent !== document.documentElement;
  var visible = isOverflow ? checkOverflowVisible(component, parent) : checkNormalVisible(component);
  if (visible) {
    // Avoid extra render if previously is visible
    if (!component.visible) {
      if (component.props.once) {
        pending.push(component);
      }

      component.visible = true;
      component.forceUpdate();
    }
  } else if (!(component.props.once && component.visible)) {
    component.visible = false;
    if (component.props.unmountIfInvisible) {
      component.forceUpdate();
    }
  }
};

var purgePending = function purgePending() {
  pending.forEach(function (component) {
    var index = listeners.indexOf(component);
    if (index !== -1) {
      listeners.splice(index, 1);
    }
  });

  pending = [];
};

var lazyLoadHandler = function lazyLoadHandler() {
  for (var i = 0; i < listeners.length; ++i) {
    var listener = listeners[i];
    checkVisible(listener);
  }
  // Remove `once` component in listeners
  purgePending();
};

/**
 * Forces the component to display regardless of whether the element is visible in the viewport.
 */
var forceVisible = function forceVisible() {
  for (var i = 0; i < listeners.length; ++i) {
    var listener = listeners[i];
    listener.visible = true;
    listener.forceUpdate();
  }
  // Remove `once` component in listeners
  purgePending();
};

// Depending on component's props
var delayType = void 0;
var finalLazyLoadHandler = null;

var isString = function isString(string) {
  return typeof string === 'string';
};

var LazyLoad = function (_Component) {
  _inherits(LazyLoad, _Component);

  function LazyLoad(props) {
    _classCallCheck(this, LazyLoad);

    var _this = _possibleConstructorReturn(this, (LazyLoad.__proto__ || Object.getPrototypeOf(LazyLoad)).call(this, props));

    _this.visible = false;
    _this.setRef = _this.setRef.bind(_this);
    return _this;
  }

  _createClass(LazyLoad, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // It's unlikely to change delay type on the fly, this is mainly
      // designed for tests
      var scrollport = window;
      var scrollContainer = this.props.scrollContainer;

      if (scrollContainer) {
        if (isString(scrollContainer)) {
          scrollport = scrollport.document.querySelector(scrollContainer);
        }
      }
      var needResetFinalLazyLoadHandler = this.props.debounce !== undefined && delayType === 'throttle' || delayType === 'debounce' && this.props.debounce === undefined;

      if (needResetFinalLazyLoadHandler) {
        (0, _event.off)(scrollport, 'scroll', finalLazyLoadHandler, passiveEvent);
        (0, _event.off)(window, 'resize', finalLazyLoadHandler, passiveEvent);
        finalLazyLoadHandler = null;
      }

      if (!finalLazyLoadHandler) {
        if (this.props.debounce !== undefined) {
          finalLazyLoadHandler = (0, _debounce2.default)(lazyLoadHandler, typeof this.props.debounce === 'number' ? this.props.debounce : 300);
          delayType = 'debounce';
        } else if (this.props.throttle !== undefined) {
          finalLazyLoadHandler = (0, _throttle2.default)(lazyLoadHandler, typeof this.props.throttle === 'number' ? this.props.throttle : 300);
          delayType = 'throttle';
        } else {
          finalLazyLoadHandler = lazyLoadHandler;
        }
      }

      if (this.props.overflow) {
        var parent = (0, _scrollParent2.default)(this.ref);
        if (parent && typeof parent.getAttribute === 'function') {
          var listenerCount = 1 + +parent.getAttribute(LISTEN_FLAG);
          if (listenerCount === 1) {
            parent.addEventListener('scroll', finalLazyLoadHandler, passiveEvent);
          }
          parent.setAttribute(LISTEN_FLAG, listenerCount);
        }
      } else if (listeners.length === 0 || needResetFinalLazyLoadHandler) {
        var _props = this.props,
            scroll = _props.scroll,
            resize = _props.resize;


        if (scroll) {
          (0, _event.on)(scrollport, 'scroll', finalLazyLoadHandler, passiveEvent);
        }

        if (resize) {
          (0, _event.on)(window, 'resize', finalLazyLoadHandler, passiveEvent);
        }
      }

      listeners.push(this);
      checkVisible(this);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return this.visible;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.overflow) {
        var parent = (0, _scrollParent2.default)(this.ref);
        if (parent && typeof parent.getAttribute === 'function') {
          var listenerCount = +parent.getAttribute(LISTEN_FLAG) - 1;
          if (listenerCount === 0) {
            parent.removeEventListener('scroll', finalLazyLoadHandler, passiveEvent);
            parent.removeAttribute(LISTEN_FLAG);
          } else {
            parent.setAttribute(LISTEN_FLAG, listenerCount);
          }
        }
      }

      var index = listeners.indexOf(this);
      if (index !== -1) {
        listeners.splice(index, 1);
      }

      if (listeners.length === 0 && typeof window !== 'undefined') {
        (0, _event.off)(window, 'resize', finalLazyLoadHandler, passiveEvent);
        (0, _event.off)(window, 'scroll', finalLazyLoadHandler, passiveEvent);
      }
    }
  }, {
    key: 'setRef',
    value: function setRef(element) {
      if (element) {
        this.ref = element;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          height = _props2.height,
          children = _props2.children,
          placeholder = _props2.placeholder,
          className = _props2.className,
          classNamePrefix = _props2.classNamePrefix,
          style = _props2.style;


      return _react2.default.createElement(
        'div',
        { className: classNamePrefix + '-wrapper ' + className, ref: this.setRef, style: style },
        this.visible ? children : placeholder ? placeholder : _react2.default.createElement('div', {
          style: { height: height },
          className: classNamePrefix + '-placeholder'
        })
      );
    }
  }]);

  return LazyLoad;
}(_react.Component);

LazyLoad.propTypes = {
  className: _propTypes2.default.string,
  classNamePrefix: _propTypes2.default.string,
  once: _propTypes2.default.bool,
  height: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  offset: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.arrayOf(_propTypes2.default.number)]),
  overflow: _propTypes2.default.bool,
  resize: _propTypes2.default.bool,
  scroll: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  throttle: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]),
  debounce: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]),
  placeholder: _propTypes2.default.node,
  scrollContainer: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  unmountIfInvisible: _propTypes2.default.bool,
  style: _propTypes2.default.object
};

LazyLoad.defaultProps = {
  className: '',
  classNamePrefix: 'lazyload',
  once: false,
  offset: 0,
  overflow: false,
  resize: false,
  scroll: true,
  unmountIfInvisible: false
};

var getDisplayName = function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

var decorator = function decorator() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function lazyload(WrappedComponent) {
    return function (_Component2) {
      _inherits(LazyLoadDecorated, _Component2);

      function LazyLoadDecorated() {
        _classCallCheck(this, LazyLoadDecorated);

        var _this2 = _possibleConstructorReturn(this, (LazyLoadDecorated.__proto__ || Object.getPrototypeOf(LazyLoadDecorated)).call(this));

        _this2.displayName = 'LazyLoad' + getDisplayName(WrappedComponent);
        return _this2;
      }

      _createClass(LazyLoadDecorated, [{
        key: 'render',
        value: function render() {
          return _react2.default.createElement(
            LazyLoad,
            options,
            _react2.default.createElement(WrappedComponent, this.props)
          );
        }
      }]);

      return LazyLoadDecorated;
    }(_react.Component);
  };
};

exports.lazyload = decorator;
exports.default = LazyLoad;
exports.forceCheck = lazyLoadHandler;
exports.forceVisible = forceVisible;

/***/ }),

/***/ "./node_modules/react-lazyload/lib/utils/debounce.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-lazyload/lib/utils/debounce.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = debounce;
function debounce(func, wait, immediate) {
  var timeout = void 0;
  var args = void 0;
  var context = void 0;
  var timestamp = void 0;
  var result = void 0;

  var later = function later() {
    var last = +new Date() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) {
          context = null;
          args = null;
        }
      }
    }
  };

  return function debounced() {
    context = this;
    args = arguments;
    timestamp = +new Date();

    var callNow = immediate && !timeout;
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }

    if (callNow) {
      result = func.apply(context, args);
      context = null;
      args = null;
    }

    return result;
  };
}

/***/ }),

/***/ "./node_modules/react-lazyload/lib/utils/event.js":
/*!********************************************************!*\
  !*** ./node_modules/react-lazyload/lib/utils/event.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.on = on;
exports.off = off;
function on(el, eventName, callback, opts) {
  opts = opts || false;
  if (el.addEventListener) {
    el.addEventListener(eventName, callback, opts);
  } else if (el.attachEvent) {
    el.attachEvent("on" + eventName, function (e) {
      callback.call(el, e || window.event);
    });
  }
}

function off(el, eventName, callback, opts) {
  opts = opts || false;
  if (el.removeEventListener) {
    el.removeEventListener(eventName, callback, opts);
  } else if (el.detachEvent) {
    el.detachEvent("on" + eventName, callback);
  }
}

/***/ }),

/***/ "./node_modules/react-lazyload/lib/utils/scrollParent.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-lazyload/lib/utils/scrollParent.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/**
 * @fileOverview Find scroll parent
 */

exports.default = function (node) {
  if (!(node instanceof HTMLElement)) {
    return document.documentElement;
  }

  var excludeStaticParent = node.style.position === 'absolute';
  var overflowRegex = /(scroll|auto)/;
  var parent = node;

  while (parent) {
    if (!parent.parentNode) {
      return node.ownerDocument || document.documentElement;
    }

    var style = window.getComputedStyle(parent);
    var position = style.position;
    var overflow = style.overflow;
    var overflowX = style['overflow-x'];
    var overflowY = style['overflow-y'];

    if (position === 'static' && excludeStaticParent) {
      parent = parent.parentNode;
      continue;
    }

    if (overflowRegex.test(overflow) && overflowRegex.test(overflowX) && overflowRegex.test(overflowY)) {
      return parent;
    }

    parent = parent.parentNode;
  }

  return node.ownerDocument || node.documentElement || document.documentElement;
};

/***/ }),

/***/ "./node_modules/react-lazyload/lib/utils/throttle.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-lazyload/lib/utils/throttle.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = throttle;
/*eslint-disable */
function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 250);
  var last, deferTimer;
  return function () {
    var context = scope || this;

    var now = +new Date(),
        args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}

/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v16.14.0
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var ReactVersion = '16.14.0';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
function describeComponentFrame (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
}

var Resolved = 1;
function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type.render);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var ReactDebugCurrentFrame = {};
var currentlyValidatingElement = null;
function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

    if (!hasExistingStack) {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      }
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];

function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;

  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}
/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {

      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';

      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }

      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum );
        }
      }
    }
  }

  return subtreeCount;
}
/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */


function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);

  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }

    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';

  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }

  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}
/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */


function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  setCurrentlyValidatingElement(element);

  {
    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }

  setCurrentlyValidatingElement(null);
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var name = getComponentName(type);
    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      setCurrentlyValidatingElement(element);
      checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
      setCurrentlyValidatingElement(null);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true;

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    setCurrentlyValidatingElement(fragment);
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        break;
      }
    }

    if (fragment.ref !== null) {
      error('Invalid attribute `ref` supplied to `React.Fragment`.');
    }

    setCurrentlyValidatingElement(null);
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.

    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!"), __webpack_exec__("./node_modules/next/dist/client/router.js"));
/******/ _N_E = __webpack_exports__;
/******/ }
]);