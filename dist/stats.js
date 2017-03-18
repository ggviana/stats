/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (collection) {
  return collection.reduce(function (acc, item) {
    return acc + item;
  }, 0);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mode = exports.median = exports.mean = exports.sum = undefined;

var _sum2 = __webpack_require__(0);

var _sum3 = _interopRequireDefault(_sum2);

var _mean2 = __webpack_require__(2);

var _mean3 = _interopRequireDefault(_mean2);

var _median2 = __webpack_require__(3);

var _median3 = _interopRequireDefault(_median2);

var _mode2 = __webpack_require__(4);

var _mode3 = _interopRequireDefault(_mode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.sum = _sum3.default;
exports.mean = _mean3.default;
exports.median = _median3.default;
exports.mode = _mode3.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sum = __webpack_require__(0);

var _sum2 = _interopRequireDefault(_sum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (collection) {
    var size = collection.length;

    return (0, _sum2.default)(collection) / size;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (collection) {
    collection = sorted(collection);
    var size = collection.length;
    var middle = Math.floor(size / 2);

    if (isEven(size)) {
        return (collection[middle - 1] + collection[middle]) / 2;
    } else {
        return (collection[middle] + 1) / 2;
    }
};

function isEven(value) {
    return value % 2 === 0;
}

function sorted(collection) {
    return collection.sort(function (a, b) {
        return a - b;
    });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (collection) {
    var grouped = group(collection);

    var occurrencesNames = Object.keys(grouped).map(toNumber);
    var occurrencesValues = occurrencesNames.map(function (item) {
        return grouped[item];
    });

    var highestOcurrency = Math.max.apply(null, occurrencesValues);
    var modes = occurrencesNames.filter(function (item) {
        return grouped[item] === highestOcurrency;
    });

    if (modes.length === 0 || occurrencesValues.every(hasSameValueOf(highestOcurrency))) return undefined;

    return modes.sort();
};

function group(collection) {
    return collection.reduce(function (groups, key) {
        if (!groups[key]) {
            groups[key] = 0;
        }

        groups[key] += 1;

        return groups;
    }, {});
}

function toNumber(value) {
    return parseFloat(value);
}

function hasSameValueOf(value) {
    return function (x) {
        return x === value;
    };
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })
/******/ ]);