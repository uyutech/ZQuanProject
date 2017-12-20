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
/******/ 	return __webpack_require__(__webpack_require__.s = 79);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bignumber = __webpack_require__(2);

var _bignumber2 = _interopRequireDefault(_bignumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var util = {
  isLogin: function isLogin() {
    return $.cookie('isLogin') === 'true';
  },
  isIPhone: function isIPhone() {
    return navigator.appVersion.match(/iphone/gi);
  },
  goto: function goto(url) {
    location.href = url;
  },
  autoSsl: function autoSsl(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return (url || '').replace(/^https?:\/\//i, '//');
  },
  img: function img(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? url.replace(/\.(\w+)-\d*_\d*_\d*/, '.$1') : url;
  },
  img1600__80: function img1600__80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-1600__80' : url;
  },
  img1296_1296_80: function img1296_1296_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-1296_1296_80' : url;
  },
  img1200__80: function img1200__80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-1200__80' : url;
  },
  img980_980_80: function img980_980_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-980_980_80' : url;
  },
  img750_750_80: function img750_750_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-750_750_80' : url;
  },
  img720__80: function img720__80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-720__80' : url;
  },
  img600_600_80: function img600_600_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-600_600_80' : url;
  },
  img600__80: function img600__80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-600__80' : url;
  },
  img480_480_80: function img480_480_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-480_480_80' : url;
  },
  img336__80: function img336__80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-336__80' : url;
  },
  img332_332_80: function img332_332_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-332_332_80' : url;
  },
  img288__80: function img288__80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-288__80' : url;
  },
  img288_288_80: function img288_288_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-288_288_80' : url;
  },
  img240_240_80: function img240_240_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-240_240_80' : url;
  },
  img220_220_80: function img220_220_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-240_240_80' : url;
  },
  img208_208_80: function img208_208_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-208_208_80' : url;
  },
  img200_200: function img200_200(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-200_200' : url;
  },
  img200_200_80: function img200_200_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-200_200_80' : url;
  },
  img192_192: function img192_192(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-192_192' : url;
  },
  img172_172_80: function img172_172_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-172_172_80' : url;
  },
  img168__80: function img168__80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-168__80' : url;
  },
  img150_150_80: function img150_150_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-150_150_80' : url;
  },
  img144_: function img144_(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-144_' : url;
  },
  img144_144: function img144_144(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-144_144' : url;
  },
  img144_144_80: function img144_144_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-144_144_80' : url;
  },
  img132_132_80: function img132_132_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-132_132_80' : url;
  },
  img128_128_80: function img128_128_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-120_120_80' : url;
  },
  img120_120: function img120_120(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-120_120' : url;
  },
  img120_120_80: function img120_120_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-120_120_80' : url;
  },
  img108_108_80: function img108_108_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-108_108_80' : url;
  },
  img100_100: function img100_100(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-100_100' : url;
  },
  img96_96_80: function img96_96_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-90_90' : url;
  },
  img90_90: function img90_90(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-90_90' : url;
  },
  img64_64_80: function img64_64_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-64_64_80' : url;
  },
  img60_60: function img60_60(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-60_60' : url;
  },
  img60_60_80: function img60_60_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-60_60_80' : url;
  },
  img__60: function img__60(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-__60' : url;
  },
  img48_48_80: function img48_48_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-48_48_80' : url;
  },
  decode: function decode(str) {
    return str.replace(/&lt;/g, '<').replace(/&amp;/g, '&');
  },
  formatTime: function formatTime(time) {
    if (!time) {
      return '00:00';
    }
    var res = '';
    if (time >= 1000 * 60 * 60) {
      var hour = Math.floor(time / (1000 * 60 * 60));
      time -= 1000 * 60 * 60 * hour;
      res += hour + ':';
    }
    if (time >= 1000 * 60) {
      var minute = Math.floor(time / (1000 * 60));
      time -= 1000 * 60 * minute;
      if (minute < 10) {
        minute = '0' + minute;
      }
      res += minute + ':';
    } else {
      res += '00:';
    }
    var second = Math.floor(time / 1000);
    if (second < 10) {
      second = '0' + second;
    }
    res += second;
    return res;
  },
  formatDate: function formatDate(time) {
    time = new Date(time);
    var now = Date.now();
    var diff = now - time;
    if (diff >= 1000 * 60 * 60 * 24 * 365) {
      return Math.floor(diff / (1000 * 60 * 60 * 24 * 365)) + '年前';
    }
    if (diff >= 1000 * 60 * 60 * 24 * 30) {
      return Math.floor(diff / (1000 * 60 * 60 * 24 * 30)) + '月前';
    }
    if (diff >= 1000 * 60 * 60 * 24) {
      return Math.floor(diff / (1000 * 60 * 60 * 24)) + '天前';
    }
    if (diff >= 1000 * 60 * 60) {
      return Math.floor(diff / (1000 * 60 * 60)) + '小时前';
    }
    if (diff >= 1000 * 60) {
      return Math.floor(diff / (1000 * 60)) + '分钟前';
    }
    return '刚刚';
  },
  abbrNum: function abbrNum(n, fix) {
    if (!n) {
      return 0;
    }
    if (n >= 10000) {
      n = new _bignumber2.default(n).div(10000).toFixed(fix || 1);
      n = n.replace(/(\.[1-9]+)0+$/, '$1');
      n = n.replace(/\.0+$/, '');
      n += 'w';
    }
    if (n >= 1000) {
      n = new _bignumber2.default(n).div(1000).toFixed(fix || 1);
      n = n.replace(/(\.[1-9]+)0+$/, '$1');
      n = n.replace(/\.0+$/, '');
      n += 'k';
    }
    return n;
  },
  ERROR_MESSAGE: '人气大爆发，请稍后再试。',
  scrollTop: function scrollTop(y) {
    $(window).scrollTop(y - 70);
  }
}; /**
    * Created by army on 2017/5/20.
    */

exports.default = util;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by army8735 on 2017/11/28.
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});
var net = {
  getJSON: function getJSON(url, data, success, error, type, timeout) {
    if (typeof data === 'function') {
      timeout = error;
      error = success;
      success = data;
      data = {};
    }
    if (typeof success !== 'function') {
      success = function success() {};
      timeout = error;
      error = success;
    }
    if (typeof error !== 'function') {
      timeout = error;
      error = function error() {};
    }
    return $.ajax2(url, data, success, error, 'GET', timeout);
  },
  postJSON: function postJSON(url, data, success, error, type, timeout) {
    if (typeof data === 'function') {
      timeout = error;
      error = success;
      success = data;
      data = {};
    }
    if (typeof success !== 'function') {
      success = function success() {};
      timeout = error;
      error = success;
    }
    if (typeof error !== 'function') {
      timeout = error;
      error = function error() {};
    }
    return $.ajax2(url, data, success, error, 'POST', timeout);
  }
};

exports.default = net;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! bignumber.js v4.1.0 https://github.com/MikeMcl/bignumber.js/LICENCE */

;(function (globalObj) {
    'use strict';

    /*
      bignumber.js v4.1.0
      A JavaScript library for arbitrary-precision arithmetic.
      https://github.com/MikeMcl/bignumber.js
      Copyright (c) 2017 Michael Mclaughlin <M8ch88l@gmail.com>
      MIT Expat Licence
    */

    var BigNumber,
        isNumeric = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        mathceil = Math.ceil,
        mathfloor = Math.floor,
        notBool = ' not a boolean or binary digit',
        roundingMode = 'rounding mode',
        tooManyDigits = 'number type has more than 15 significant digits',
        ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_',
        BASE = 1e14,
        LOG_BASE = 14,
        MAX_SAFE_INTEGER = 0x1fffffffffffff,
        // 2^53 - 1
    // MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
    POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
        SQRT_BASE = 1e7,


    /*
     * The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
     * the arguments to toExponential, toFixed, toFormat, and toPrecision, beyond which an
     * exception is thrown (if ERRORS is true).
     */
    MAX = 1E9; // 0 to MAX_INT32


    /*
     * Create and return a BigNumber constructor.
     */
    function constructorFactory(config) {
        var div,
            parseNumeric,


        // id tracks the caller function, so its name can be included in error messages.
        id = 0,
            P = BigNumber.prototype,
            ONE = new BigNumber(1),


        /********************************* EDITABLE DEFAULTS **********************************/

        /*
         * The default values below must be integers within the inclusive ranges stated.
         * The values can also be changed at run-time using BigNumber.config.
         */

        // The maximum number of decimal places for operations involving division.
        DECIMAL_PLACES = 20,
            // 0 to MAX

        /*
         * The rounding mode used when rounding to the above decimal places, and when using
         * toExponential, toFixed, toFormat and toPrecision, and round (default value).
         * UP         0 Away from zero.
         * DOWN       1 Towards zero.
         * CEIL       2 Towards +Infinity.
         * FLOOR      3 Towards -Infinity.
         * HALF_UP    4 Towards nearest neighbour. If equidistant, up.
         * HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
         * HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
         * HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
         * HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
         */
        ROUNDING_MODE = 4,
            // 0 to 8

        // EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]

        // The exponent value at and beneath which toString returns exponential notation.
        // Number type: -7
        TO_EXP_NEG = -7,
            // 0 to -MAX

        // The exponent value at and above which toString returns exponential notation.
        // Number type: 21
        TO_EXP_POS = 21,
            // 0 to MAX

        // RANGE : [MIN_EXP, MAX_EXP]

        // The minimum exponent value, beneath which underflow to zero occurs.
        // Number type: -324  (5e-324)
        MIN_EXP = -1e7,
            // -1 to -MAX

        // The maximum exponent value, above which overflow to Infinity occurs.
        // Number type:  308  (1.7976931348623157e+308)
        // For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
        MAX_EXP = 1e7,
            // 1 to MAX

        // Whether BigNumber Errors are ever thrown.
        ERRORS = true,
            // true or false

        // Change to intValidatorNoErrors if ERRORS is false.
        isValidInt = intValidatorWithErrors,
            // intValidatorWithErrors/intValidatorNoErrors

        // Whether to use cryptographically-secure random number generation, if available.
        CRYPTO = false,
            // true or false

        /*
         * The modulo mode used when calculating the modulus: a mod n.
         * The quotient (q = a / n) is calculated according to the corresponding rounding mode.
         * The remainder (r) is calculated as: r = a - n * q.
         *
         * UP        0 The remainder is positive if the dividend is negative, else is negative.
         * DOWN      1 The remainder has the same sign as the dividend.
         *             This modulo mode is commonly known as 'truncated division' and is
         *             equivalent to (a % n) in JavaScript.
         * FLOOR     3 The remainder has the same sign as the divisor (Python %).
         * HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
         * EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
         *             The remainder is always positive.
         *
         * The truncated division, floored division, Euclidian division and IEEE 754 remainder
         * modes are commonly used for the modulus operation.
         * Although the other rounding modes can also be used, they may not give useful results.
         */
        MODULO_MODE = 1,
            // 0 to 9

        // The maximum number of significant digits of the result of the toPower operation.
        // If POW_PRECISION is 0, there will be unlimited significant digits.
        POW_PRECISION = 0,
            // 0 to MAX

        // The format specification used by the BigNumber.prototype.toFormat method.
        FORMAT = {
            decimalSeparator: '.',
            groupSeparator: ',',
            groupSize: 3,
            secondaryGroupSize: 0,
            fractionGroupSeparator: '\xA0', // non-breaking space
            fractionGroupSize: 0
        };

        /******************************************************************************************/

        // CONSTRUCTOR


        /*
         * The BigNumber constructor and exported function.
         * Create and return a new instance of a BigNumber object.
         *
         * n {number|string|BigNumber} A numeric value.
         * [b] {number} The base of n. Integer, 2 to 64 inclusive.
         */
        function BigNumber(n, b) {
            var c,
                e,
                i,
                num,
                len,
                str,
                x = this;

            // Enable constructor usage without new.
            if (!(x instanceof BigNumber)) {

                // 'BigNumber() constructor call without new: {n}'
                if (ERRORS) raise(26, 'constructor call without new', n);
                return new BigNumber(n, b);
            }

            // 'new BigNumber() base not an integer: {b}'
            // 'new BigNumber() base out of range: {b}'
            if (b == null || !isValidInt(b, 2, 64, id, 'base')) {

                // Duplicate.
                if (n instanceof BigNumber) {
                    x.s = n.s;
                    x.e = n.e;
                    x.c = (n = n.c) ? n.slice() : n;
                    id = 0;
                    return;
                }

                if ((num = typeof n == 'number') && n * 0 == 0) {
                    x.s = 1 / n < 0 ? (n = -n, -1) : 1;

                    // Fast path for integers.
                    if (n === ~~n) {
                        for (e = 0, i = n; i >= 10; i /= 10, e++) {}
                        x.e = e;
                        x.c = [n];
                        id = 0;
                        return;
                    }

                    str = n + '';
                } else {
                    if (!isNumeric.test(str = n + '')) return parseNumeric(x, str, num);
                    x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
                }
            } else {
                b = b | 0;
                str = n + '';

                // Ensure return value is rounded to DECIMAL_PLACES as with other bases.
                // Allow exponential notation to be used with base 10 argument.
                if (b == 10) {
                    x = new BigNumber(n instanceof BigNumber ? n : str);
                    return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
                }

                // Avoid potential interpretation of Infinity and NaN as base 44+ values.
                // Any number in exponential form will fail due to the [Ee][+-].
                if ((num = typeof n == 'number') && n * 0 != 0 || !new RegExp('^-?' + (c = '[' + ALPHABET.slice(0, b) + ']+') + '(?:\\.' + c + ')?$', b < 37 ? 'i' : '').test(str)) {
                    return parseNumeric(x, str, num, b);
                }

                if (num) {
                    x.s = 1 / n < 0 ? (str = str.slice(1), -1) : 1;

                    if (ERRORS && str.replace(/^0\.0*|\./, '').length > 15) {

                        // 'new BigNumber() number type has more than 15 significant digits: {n}'
                        raise(id, tooManyDigits, n);
                    }

                    // Prevent later check for length on converted number.
                    num = false;
                } else {
                    x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
                }

                str = convertBase(str, 10, b, x.s);
            }

            // Decimal point?
            if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');

            // Exponential form?
            if ((i = str.search(/e/i)) > 0) {

                // Determine exponent.
                if (e < 0) e = i;
                e += +str.slice(i + 1);
                str = str.substring(0, i);
            } else if (e < 0) {

                // Integer.
                e = str.length;
            }

            // Determine leading zeros.
            for (i = 0; str.charCodeAt(i) === 48; i++) {}

            // Determine trailing zeros.
            for (len = str.length; str.charCodeAt(--len) === 48;) {}
            str = str.slice(i, len + 1);

            if (str) {
                len = str.length;

                // Disallow numbers with over 15 significant digits if number type.
                // 'new BigNumber() number type has more than 15 significant digits: {n}'
                if (num && ERRORS && len > 15 && (n > MAX_SAFE_INTEGER || n !== mathfloor(n))) {
                    raise(id, tooManyDigits, x.s * n);
                }

                e = e - i - 1;

                // Overflow?
                if (e > MAX_EXP) {

                    // Infinity.
                    x.c = x.e = null;

                    // Underflow?
                } else if (e < MIN_EXP) {

                    // Zero.
                    x.c = [x.e = 0];
                } else {
                    x.e = e;
                    x.c = [];

                    // Transform base

                    // e is the base 10 exponent.
                    // i is where to slice str to get the first element of the coefficient array.
                    i = (e + 1) % LOG_BASE;
                    if (e < 0) i += LOG_BASE;

                    if (i < len) {
                        if (i) x.c.push(+str.slice(0, i));

                        for (len -= LOG_BASE; i < len;) {
                            x.c.push(+str.slice(i, i += LOG_BASE));
                        }

                        str = str.slice(i);
                        i = LOG_BASE - str.length;
                    } else {
                        i -= len;
                    }

                    for (; i--; str += '0') {}
                    x.c.push(+str);
                }
            } else {

                // Zero.
                x.c = [x.e = 0];
            }

            id = 0;
        }

        // CONSTRUCTOR PROPERTIES


        BigNumber.another = constructorFactory;

        BigNumber.ROUND_UP = 0;
        BigNumber.ROUND_DOWN = 1;
        BigNumber.ROUND_CEIL = 2;
        BigNumber.ROUND_FLOOR = 3;
        BigNumber.ROUND_HALF_UP = 4;
        BigNumber.ROUND_HALF_DOWN = 5;
        BigNumber.ROUND_HALF_EVEN = 6;
        BigNumber.ROUND_HALF_CEIL = 7;
        BigNumber.ROUND_HALF_FLOOR = 8;
        BigNumber.EUCLID = 9;

        /*
         * Configure infrequently-changing library-wide settings.
         *
         * Accept an object or an argument list, with one or many of the following properties or
         * parameters respectively:
         *
         *   DECIMAL_PLACES  {number}  Integer, 0 to MAX inclusive
         *   ROUNDING_MODE   {number}  Integer, 0 to 8 inclusive
         *   EXPONENTIAL_AT  {number|number[]}  Integer, -MAX to MAX inclusive or
         *                                      [integer -MAX to 0 incl., 0 to MAX incl.]
         *   RANGE           {number|number[]}  Non-zero integer, -MAX to MAX inclusive or
         *                                      [integer -MAX to -1 incl., integer 1 to MAX incl.]
         *   ERRORS          {boolean|number}   true, false, 1 or 0
         *   CRYPTO          {boolean|number}   true, false, 1 or 0
         *   MODULO_MODE     {number}           0 to 9 inclusive
         *   POW_PRECISION   {number}           0 to MAX inclusive
         *   FORMAT          {object}           See BigNumber.prototype.toFormat
         *      decimalSeparator       {string}
         *      groupSeparator         {string}
         *      groupSize              {number}
         *      secondaryGroupSize     {number}
         *      fractionGroupSeparator {string}
         *      fractionGroupSize      {number}
         *
         * (The values assigned to the above FORMAT object properties are not checked for validity.)
         *
         * E.g.
         * BigNumber.config(20, 4) is equivalent to
         * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
         *
         * Ignore properties/parameters set to null or undefined.
         * Return an object with the properties current values.
         */
        BigNumber.config = BigNumber.set = function () {
            var v,
                p,
                i = 0,
                r = {},
                a = arguments,
                o = a[0],
                has = o && (typeof o === 'undefined' ? 'undefined' : _typeof(o)) == 'object' ? function () {
                if (o.hasOwnProperty(p)) return (v = o[p]) != null;
            } : function () {
                if (a.length > i) return (v = a[i++]) != null;
            };

            // DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
            // 'config() DECIMAL_PLACES not an integer: {v}'
            // 'config() DECIMAL_PLACES out of range: {v}'
            if (has(p = 'DECIMAL_PLACES') && isValidInt(v, 0, MAX, 2, p)) {
                DECIMAL_PLACES = v | 0;
            }
            r[p] = DECIMAL_PLACES;

            // ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
            // 'config() ROUNDING_MODE not an integer: {v}'
            // 'config() ROUNDING_MODE out of range: {v}'
            if (has(p = 'ROUNDING_MODE') && isValidInt(v, 0, 8, 2, p)) {
                ROUNDING_MODE = v | 0;
            }
            r[p] = ROUNDING_MODE;

            // EXPONENTIAL_AT {number|number[]}
            // Integer, -MAX to MAX inclusive or [integer -MAX to 0 inclusive, 0 to MAX inclusive].
            // 'config() EXPONENTIAL_AT not an integer: {v}'
            // 'config() EXPONENTIAL_AT out of range: {v}'
            if (has(p = 'EXPONENTIAL_AT')) {

                if (isArray(v)) {
                    if (isValidInt(v[0], -MAX, 0, 2, p) && isValidInt(v[1], 0, MAX, 2, p)) {
                        TO_EXP_NEG = v[0] | 0;
                        TO_EXP_POS = v[1] | 0;
                    }
                } else if (isValidInt(v, -MAX, MAX, 2, p)) {
                    TO_EXP_NEG = -(TO_EXP_POS = (v < 0 ? -v : v) | 0);
                }
            }
            r[p] = [TO_EXP_NEG, TO_EXP_POS];

            // RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
            // [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
            // 'config() RANGE not an integer: {v}'
            // 'config() RANGE cannot be zero: {v}'
            // 'config() RANGE out of range: {v}'
            if (has(p = 'RANGE')) {

                if (isArray(v)) {
                    if (isValidInt(v[0], -MAX, -1, 2, p) && isValidInt(v[1], 1, MAX, 2, p)) {
                        MIN_EXP = v[0] | 0;
                        MAX_EXP = v[1] | 0;
                    }
                } else if (isValidInt(v, -MAX, MAX, 2, p)) {
                    if (v | 0) MIN_EXP = -(MAX_EXP = (v < 0 ? -v : v) | 0);else if (ERRORS) raise(2, p + ' cannot be zero', v);
                }
            }
            r[p] = [MIN_EXP, MAX_EXP];

            // ERRORS {boolean|number} true, false, 1 or 0.
            // 'config() ERRORS not a boolean or binary digit: {v}'
            if (has(p = 'ERRORS')) {

                if (v === !!v || v === 1 || v === 0) {
                    id = 0;
                    isValidInt = (ERRORS = !!v) ? intValidatorWithErrors : intValidatorNoErrors;
                } else if (ERRORS) {
                    raise(2, p + notBool, v);
                }
            }
            r[p] = ERRORS;

            // CRYPTO {boolean|number} true, false, 1 or 0.
            // 'config() CRYPTO not a boolean or binary digit: {v}'
            // 'config() crypto unavailable: {crypto}'
            if (has(p = 'CRYPTO')) {

                if (v === true || v === false || v === 1 || v === 0) {
                    if (v) {
                        v = typeof crypto == 'undefined';
                        if (!v && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
                            CRYPTO = true;
                        } else if (ERRORS) {
                            raise(2, 'crypto unavailable', v ? void 0 : crypto);
                        } else {
                            CRYPTO = false;
                        }
                    } else {
                        CRYPTO = false;
                    }
                } else if (ERRORS) {
                    raise(2, p + notBool, v);
                }
            }
            r[p] = CRYPTO;

            // MODULO_MODE {number} Integer, 0 to 9 inclusive.
            // 'config() MODULO_MODE not an integer: {v}'
            // 'config() MODULO_MODE out of range: {v}'
            if (has(p = 'MODULO_MODE') && isValidInt(v, 0, 9, 2, p)) {
                MODULO_MODE = v | 0;
            }
            r[p] = MODULO_MODE;

            // POW_PRECISION {number} Integer, 0 to MAX inclusive.
            // 'config() POW_PRECISION not an integer: {v}'
            // 'config() POW_PRECISION out of range: {v}'
            if (has(p = 'POW_PRECISION') && isValidInt(v, 0, MAX, 2, p)) {
                POW_PRECISION = v | 0;
            }
            r[p] = POW_PRECISION;

            // FORMAT {object}
            // 'config() FORMAT not an object: {v}'
            if (has(p = 'FORMAT')) {

                if ((typeof v === 'undefined' ? 'undefined' : _typeof(v)) == 'object') {
                    FORMAT = v;
                } else if (ERRORS) {
                    raise(2, p + ' not an object', v);
                }
            }
            r[p] = FORMAT;

            return r;
        };

        /*
         * Return a new BigNumber whose value is the maximum of the arguments.
         *
         * arguments {number|string|BigNumber}
         */
        BigNumber.max = function () {
            return maxOrMin(arguments, P.lt);
        };

        /*
         * Return a new BigNumber whose value is the minimum of the arguments.
         *
         * arguments {number|string|BigNumber}
         */
        BigNumber.min = function () {
            return maxOrMin(arguments, P.gt);
        };

        /*
         * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
         * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
         * zeros are produced).
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         *
         * 'random() decimal places not an integer: {dp}'
         * 'random() decimal places out of range: {dp}'
         * 'random() crypto unavailable: {crypto}'
         */
        BigNumber.random = function () {
            var pow2_53 = 0x20000000000000;

            // Return a 53 bit integer n, where 0 <= n < 9007199254740992.
            // Check if Math.random() produces more than 32 bits of randomness.
            // If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
            // 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.
            var random53bitInt = Math.random() * pow2_53 & 0x1fffff ? function () {
                return mathfloor(Math.random() * pow2_53);
            } : function () {
                return (Math.random() * 0x40000000 | 0) * 0x800000 + (Math.random() * 0x800000 | 0);
            };

            return function (dp) {
                var a,
                    b,
                    e,
                    k,
                    v,
                    i = 0,
                    c = [],
                    rand = new BigNumber(ONE);

                dp = dp == null || !isValidInt(dp, 0, MAX, 14) ? DECIMAL_PLACES : dp | 0;
                k = mathceil(dp / LOG_BASE);

                if (CRYPTO) {

                    // Browsers supporting crypto.getRandomValues.
                    if (crypto.getRandomValues) {

                        a = crypto.getRandomValues(new Uint32Array(k *= 2));

                        for (; i < k;) {

                            // 53 bits:
                            // ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
                            // 11111 11111111 11111111 11111111 11100000 00000000 00000000
                            // ((Math.pow(2, 32) - 1) >>> 11).toString(2)
                            //                                     11111 11111111 11111111
                            // 0x20000 is 2^21.
                            v = a[i] * 0x20000 + (a[i + 1] >>> 11);

                            // Rejection sampling:
                            // 0 <= v < 9007199254740992
                            // Probability that v >= 9e15, is
                            // 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
                            if (v >= 9e15) {
                                b = crypto.getRandomValues(new Uint32Array(2));
                                a[i] = b[0];
                                a[i + 1] = b[1];
                            } else {

                                // 0 <= v <= 8999999999999999
                                // 0 <= (v % 1e14) <= 99999999999999
                                c.push(v % 1e14);
                                i += 2;
                            }
                        }
                        i = k / 2;

                        // Node.js supporting crypto.randomBytes.
                    } else if (crypto.randomBytes) {

                        // buffer
                        a = crypto.randomBytes(k *= 7);

                        for (; i < k;) {

                            // 0x1000000000000 is 2^48, 0x10000000000 is 2^40
                            // 0x100000000 is 2^32, 0x1000000 is 2^24
                            // 11111 11111111 11111111 11111111 11111111 11111111 11111111
                            // 0 <= v < 9007199254740992
                            v = (a[i] & 31) * 0x1000000000000 + a[i + 1] * 0x10000000000 + a[i + 2] * 0x100000000 + a[i + 3] * 0x1000000 + (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];

                            if (v >= 9e15) {
                                crypto.randomBytes(7).copy(a, i);
                            } else {

                                // 0 <= (v % 1e14) <= 99999999999999
                                c.push(v % 1e14);
                                i += 7;
                            }
                        }
                        i = k / 7;
                    } else {
                        CRYPTO = false;
                        if (ERRORS) raise(14, 'crypto unavailable', crypto);
                    }
                }

                // Use Math.random.
                if (!CRYPTO) {

                    for (; i < k;) {
                        v = random53bitInt();
                        if (v < 9e15) c[i++] = v % 1e14;
                    }
                }

                k = c[--i];
                dp %= LOG_BASE;

                // Convert trailing digits to zeros according to dp.
                if (k && dp) {
                    v = POWS_TEN[LOG_BASE - dp];
                    c[i] = mathfloor(k / v) * v;
                }

                // Remove trailing elements which are zero.
                for (; c[i] === 0; c.pop(), i--) {}

                // Zero?
                if (i < 0) {
                    c = [e = 0];
                } else {

                    // Remove leading elements which are zero and adjust exponent accordingly.
                    for (e = -1; c[0] === 0; c.splice(0, 1), e -= LOG_BASE) {}

                    // Count the digits of the first element of c to determine leading zeros, and...
                    for (i = 1, v = c[0]; v >= 10; v /= 10, i++) {}

                    // adjust the exponent accordingly.
                    if (i < LOG_BASE) e -= LOG_BASE - i;
                }

                rand.e = e;
                rand.c = c;
                return rand;
            };
        }();

        // PRIVATE FUNCTIONS


        // Convert a numeric string of baseIn to a numeric string of baseOut.
        function convertBase(str, baseOut, baseIn, sign) {
            var d,
                e,
                k,
                r,
                x,
                xc,
                y,
                i = str.indexOf('.'),
                dp = DECIMAL_PLACES,
                rm = ROUNDING_MODE;

            if (baseIn < 37) str = str.toLowerCase();

            // Non-integer.
            if (i >= 0) {
                k = POW_PRECISION;

                // Unlimited precision.
                POW_PRECISION = 0;
                str = str.replace('.', '');
                y = new BigNumber(baseIn);
                x = y.pow(str.length - i);
                POW_PRECISION = k;

                // Convert str as if an integer, then restore the fraction part by dividing the
                // result by its base raised to a power.
                y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e), 10, baseOut);
                y.e = y.c.length;
            }

            // Convert the number as integer.
            xc = toBaseOut(str, baseIn, baseOut);
            e = k = xc.length;

            // Remove trailing zeros.
            for (; xc[--k] == 0; xc.pop()) {}
            if (!xc[0]) return '0';

            if (i < 0) {
                --e;
            } else {
                x.c = xc;
                x.e = e;

                // sign is needed for correct rounding.
                x.s = sign;
                x = div(x, y, dp, rm, baseOut);
                xc = x.c;
                r = x.r;
                e = x.e;
            }

            d = e + dp + 1;

            // The rounding digit, i.e. the digit to the right of the digit that may be rounded up.
            i = xc[d];
            k = baseOut / 2;
            r = r || d < 0 || xc[d + 1] != null;

            r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : i > k || i == k && (rm == 4 || r || rm == 6 && xc[d - 1] & 1 || rm == (x.s < 0 ? 8 : 7));

            if (d < 1 || !xc[0]) {

                // 1^-dp or 0.
                str = r ? toFixedPoint('1', -dp) : '0';
            } else {
                xc.length = d;

                if (r) {

                    // Rounding up may mean the previous digit has to be rounded up and so on.
                    for (--baseOut; ++xc[--d] > baseOut;) {
                        xc[d] = 0;

                        if (!d) {
                            ++e;
                            xc = [1].concat(xc);
                        }
                    }
                }

                // Determine trailing zeros.
                for (k = xc.length; !xc[--k];) {}

                // E.g. [4, 11, 15] becomes 4bf.
                for (i = 0, str = ''; i <= k; str += ALPHABET.charAt(xc[i++])) {}
                str = toFixedPoint(str, e);
            }

            // The caller will add the sign.
            return str;
        }

        // Perform division in the specified base. Called by div and convertBase.
        div = function () {

            // Assume non-zero x and k.
            function multiply(x, k, base) {
                var m,
                    temp,
                    xlo,
                    xhi,
                    carry = 0,
                    i = x.length,
                    klo = k % SQRT_BASE,
                    khi = k / SQRT_BASE | 0;

                for (x = x.slice(); i--;) {
                    xlo = x[i] % SQRT_BASE;
                    xhi = x[i] / SQRT_BASE | 0;
                    m = khi * xlo + xhi * klo;
                    temp = klo * xlo + m % SQRT_BASE * SQRT_BASE + carry;
                    carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
                    x[i] = temp % base;
                }

                if (carry) x = [carry].concat(x);

                return x;
            }

            function compare(a, b, aL, bL) {
                var i, cmp;

                if (aL != bL) {
                    cmp = aL > bL ? 1 : -1;
                } else {

                    for (i = cmp = 0; i < aL; i++) {

                        if (a[i] != b[i]) {
                            cmp = a[i] > b[i] ? 1 : -1;
                            break;
                        }
                    }
                }
                return cmp;
            }

            function subtract(a, b, aL, base) {
                var i = 0;

                // Subtract b from a.
                for (; aL--;) {
                    a[aL] -= i;
                    i = a[aL] < b[aL] ? 1 : 0;
                    a[aL] = i * base + a[aL] - b[aL];
                }

                // Remove leading zeros.
                for (; !a[0] && a.length > 1; a.splice(0, 1)) {}
            }

            // x: dividend, y: divisor.
            return function (x, y, dp, rm, base) {
                var cmp,
                    e,
                    i,
                    more,
                    n,
                    prod,
                    prodL,
                    q,
                    qc,
                    rem,
                    remL,
                    rem0,
                    xi,
                    xL,
                    yc0,
                    yL,
                    yz,
                    s = x.s == y.s ? 1 : -1,
                    xc = x.c,
                    yc = y.c;

                // Either NaN, Infinity or 0?
                if (!xc || !xc[0] || !yc || !yc[0]) {

                    return new BigNumber(

                    // Return NaN if either NaN, or both Infinity or 0.
                    !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN :

                    // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
                    xc && xc[0] == 0 || !yc ? s * 0 : s / 0);
                }

                q = new BigNumber(s);
                qc = q.c = [];
                e = x.e - y.e;
                s = dp + e + 1;

                if (!base) {
                    base = BASE;
                    e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
                    s = s / LOG_BASE | 0;
                }

                // Result exponent may be one less then the current value of e.
                // The coefficients of the BigNumbers from convertBase may have trailing zeros.
                for (i = 0; yc[i] == (xc[i] || 0); i++) {}
                if (yc[i] > (xc[i] || 0)) e--;

                if (s < 0) {
                    qc.push(1);
                    more = true;
                } else {
                    xL = xc.length;
                    yL = yc.length;
                    i = 0;
                    s += 2;

                    // Normalise xc and yc so highest order digit of yc is >= base / 2.

                    n = mathfloor(base / (yc[0] + 1));

                    // Not necessary, but to handle odd bases where yc[0] == ( base / 2 ) - 1.
                    // if ( n > 1 || n++ == 1 && yc[0] < base / 2 ) {
                    if (n > 1) {
                        yc = multiply(yc, n, base);
                        xc = multiply(xc, n, base);
                        yL = yc.length;
                        xL = xc.length;
                    }

                    xi = yL;
                    rem = xc.slice(0, yL);
                    remL = rem.length;

                    // Add zeros to make remainder as long as divisor.
                    for (; remL < yL; rem[remL++] = 0) {}
                    yz = yc.slice();
                    yz = [0].concat(yz);
                    yc0 = yc[0];
                    if (yc[1] >= base / 2) yc0++;
                    // Not necessary, but to prevent trial digit n > base, when using base 3.
                    // else if ( base == 3 && yc0 == 1 ) yc0 = 1 + 1e-15;

                    do {
                        n = 0;

                        // Compare divisor and remainder.
                        cmp = compare(yc, rem, yL, remL);

                        // If divisor < remainder.
                        if (cmp < 0) {

                            // Calculate trial digit, n.

                            rem0 = rem[0];
                            if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);

                            // n is how many times the divisor goes into the current remainder.
                            n = mathfloor(rem0 / yc0);

                            //  Algorithm:
                            //  1. product = divisor * trial digit (n)
                            //  2. if product > remainder: product -= divisor, n--
                            //  3. remainder -= product
                            //  4. if product was < remainder at 2:
                            //    5. compare new remainder and divisor
                            //    6. If remainder > divisor: remainder -= divisor, n++

                            if (n > 1) {

                                // n may be > base only when base is 3.
                                if (n >= base) n = base - 1;

                                // product = divisor * trial digit.
                                prod = multiply(yc, n, base);
                                prodL = prod.length;
                                remL = rem.length;

                                // Compare product and remainder.
                                // If product > remainder.
                                // Trial digit n too high.
                                // n is 1 too high about 5% of the time, and is not known to have
                                // ever been more than 1 too high.
                                while (compare(prod, rem, prodL, remL) == 1) {
                                    n--;

                                    // Subtract divisor from product.
                                    subtract(prod, yL < prodL ? yz : yc, prodL, base);
                                    prodL = prod.length;
                                    cmp = 1;
                                }
                            } else {

                                // n is 0 or 1, cmp is -1.
                                // If n is 0, there is no need to compare yc and rem again below,
                                // so change cmp to 1 to avoid it.
                                // If n is 1, leave cmp as -1, so yc and rem are compared again.
                                if (n == 0) {

                                    // divisor < remainder, so n must be at least 1.
                                    cmp = n = 1;
                                }

                                // product = divisor
                                prod = yc.slice();
                                prodL = prod.length;
                            }

                            if (prodL < remL) prod = [0].concat(prod);

                            // Subtract product from remainder.
                            subtract(rem, prod, remL, base);
                            remL = rem.length;

                            // If product was < remainder.
                            if (cmp == -1) {

                                // Compare divisor and new remainder.
                                // If divisor < new remainder, subtract divisor from remainder.
                                // Trial digit n too low.
                                // n is 1 too low about 5% of the time, and very rarely 2 too low.
                                while (compare(yc, rem, yL, remL) < 1) {
                                    n++;

                                    // Subtract divisor from remainder.
                                    subtract(rem, yL < remL ? yz : yc, remL, base);
                                    remL = rem.length;
                                }
                            }
                        } else if (cmp === 0) {
                            n++;
                            rem = [0];
                        } // else cmp === 1 and n will be 0

                        // Add the next digit, n, to the result array.
                        qc[i++] = n;

                        // Update the remainder.
                        if (rem[0]) {
                            rem[remL++] = xc[xi] || 0;
                        } else {
                            rem = [xc[xi]];
                            remL = 1;
                        }
                    } while ((xi++ < xL || rem[0] != null) && s--);

                    more = rem[0] != null;

                    // Leading zero?
                    if (!qc[0]) qc.splice(0, 1);
                }

                if (base == BASE) {

                    // To calculate q.e, first get the number of digits of qc[0].
                    for (i = 1, s = qc[0]; s >= 10; s /= 10, i++) {}
                    round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);

                    // Caller is convertBase.
                } else {
                    q.e = e;
                    q.r = +more;
                }

                return q;
            };
        }();

        /*
         * Return a string representing the value of BigNumber n in fixed-point or exponential
         * notation rounded to the specified decimal places or significant digits.
         *
         * n is a BigNumber.
         * i is the index of the last digit required (i.e. the digit that may be rounded up).
         * rm is the rounding mode.
         * caller is caller id: toExponential 19, toFixed 20, toFormat 21, toPrecision 24.
         */
        function format(n, i, rm, caller) {
            var c0, e, ne, len, str;

            rm = rm != null && isValidInt(rm, 0, 8, caller, roundingMode) ? rm | 0 : ROUNDING_MODE;

            if (!n.c) return n.toString();
            c0 = n.c[0];
            ne = n.e;

            if (i == null) {
                str = coeffToString(n.c);
                str = caller == 19 || caller == 24 && ne <= TO_EXP_NEG ? toExponential(str, ne) : toFixedPoint(str, ne);
            } else {
                n = round(new BigNumber(n), i, rm);

                // n.e may have changed if the value was rounded up.
                e = n.e;

                str = coeffToString(n.c);
                len = str.length;

                // toPrecision returns exponential notation if the number of significant digits
                // specified is less than the number of digits necessary to represent the integer
                // part of the value in fixed-point notation.

                // Exponential notation.
                if (caller == 19 || caller == 24 && (i <= e || e <= TO_EXP_NEG)) {

                    // Append zeros?
                    for (; len < i; str += '0', len++) {}
                    str = toExponential(str, e);

                    // Fixed-point notation.
                } else {
                    i -= ne;
                    str = toFixedPoint(str, e);

                    // Append zeros?
                    if (e + 1 > len) {
                        if (--i > 0) for (str += '.'; i--; str += '0') {}
                    } else {
                        i += e - len;
                        if (i > 0) {
                            if (e + 1 == len) str += '.';
                            for (; i--; str += '0') {}
                        }
                    }
                }
            }

            return n.s < 0 && c0 ? '-' + str : str;
        }

        // Handle BigNumber.max and BigNumber.min.
        function maxOrMin(args, method) {
            var m,
                n,
                i = 0;

            if (isArray(args[0])) args = args[0];
            m = new BigNumber(args[0]);

            for (; ++i < args.length;) {
                n = new BigNumber(args[i]);

                // If any number is NaN, return NaN.
                if (!n.s) {
                    m = n;
                    break;
                } else if (method.call(m, n)) {
                    m = n;
                }
            }

            return m;
        }

        /*
         * Return true if n is an integer in range, otherwise throw.
         * Use for argument validation when ERRORS is true.
         */
        function intValidatorWithErrors(n, min, max, caller, name) {
            if (n < min || n > max || n != truncate(n)) {
                raise(caller, (name || 'decimal places') + (n < min || n > max ? ' out of range' : ' not an integer'), n);
            }

            return true;
        }

        /*
         * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
         * Called by minus, plus and times.
         */
        function normalise(n, c, e) {
            var i = 1,
                j = c.length;

            // Remove trailing zeros.
            for (; !c[--j]; c.pop()) {}

            // Calculate the base 10 exponent. First get the number of digits of c[0].
            for (j = c[0]; j >= 10; j /= 10, i++) {}

            // Overflow?
            if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {

                // Infinity.
                n.c = n.e = null;

                // Underflow?
            } else if (e < MIN_EXP) {

                // Zero.
                n.c = [n.e = 0];
            } else {
                n.e = e;
                n.c = c;
            }

            return n;
        }

        // Handle values that fail the validity test in BigNumber.
        parseNumeric = function () {
            var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
                dotAfter = /^([^.]+)\.$/,
                dotBefore = /^\.([^.]+)$/,
                isInfinityOrNaN = /^-?(Infinity|NaN)$/,
                whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;

            return function (x, str, num, b) {
                var base,
                    s = num ? str : str.replace(whitespaceOrPlus, '');

                // No exception on ±Infinity or NaN.
                if (isInfinityOrNaN.test(s)) {
                    x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
                } else {
                    if (!num) {

                        // basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
                        s = s.replace(basePrefix, function (m, p1, p2) {
                            base = (p2 = p2.toLowerCase()) == 'x' ? 16 : p2 == 'b' ? 2 : 8;
                            return !b || b == base ? p1 : m;
                        });

                        if (b) {
                            base = b;

                            // E.g. '1.' to '1', '.1' to '0.1'
                            s = s.replace(dotAfter, '$1').replace(dotBefore, '0.$1');
                        }

                        if (str != s) return new BigNumber(s, base);
                    }

                    // 'new BigNumber() not a number: {n}'
                    // 'new BigNumber() not a base {b} number: {n}'
                    if (ERRORS) raise(id, 'not a' + (b ? ' base ' + b : '') + ' number', str);
                    x.s = null;
                }

                x.c = x.e = null;
                id = 0;
            };
        }();

        // Throw a BigNumber Error.
        function raise(caller, msg, val) {
            var error = new Error(['new BigNumber', // 0
            'cmp', // 1
            'config', // 2
            'div', // 3
            'divToInt', // 4
            'eq', // 5
            'gt', // 6
            'gte', // 7
            'lt', // 8
            'lte', // 9
            'minus', // 10
            'mod', // 11
            'plus', // 12
            'precision', // 13
            'random', // 14
            'round', // 15
            'shift', // 16
            'times', // 17
            'toDigits', // 18
            'toExponential', // 19
            'toFixed', // 20
            'toFormat', // 21
            'toFraction', // 22
            'pow', // 23
            'toPrecision', // 24
            'toString', // 25
            'BigNumber' // 26
            ][caller] + '() ' + msg + ': ' + val);

            error.name = 'BigNumber Error';
            id = 0;
            throw error;
        }

        /*
         * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
         * If r is truthy, it is known that there are more digits after the rounding digit.
         */
        function round(x, sd, rm, r) {
            var d,
                i,
                j,
                k,
                n,
                ni,
                rd,
                xc = x.c,
                pows10 = POWS_TEN;

            // if x is not Infinity or NaN...
            if (xc) {

                // rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
                // n is a base 1e14 number, the value of the element of array x.c containing rd.
                // ni is the index of n within x.c.
                // d is the number of digits of n.
                // i is the index of rd within n including leading zeros.
                // j is the actual index of rd within n (if < 0, rd is a leading zero).
                out: {

                    // Get the number of digits of the first element of xc.
                    for (d = 1, k = xc[0]; k >= 10; k /= 10, d++) {}
                    i = sd - d;

                    // If the rounding digit is in the first element of xc...
                    if (i < 0) {
                        i += LOG_BASE;
                        j = sd;
                        n = xc[ni = 0];

                        // Get the rounding digit at index j of n.
                        rd = n / pows10[d - j - 1] % 10 | 0;
                    } else {
                        ni = mathceil((i + 1) / LOG_BASE);

                        if (ni >= xc.length) {

                            if (r) {

                                // Needed by sqrt.
                                for (; xc.length <= ni; xc.push(0)) {}
                                n = rd = 0;
                                d = 1;
                                i %= LOG_BASE;
                                j = i - LOG_BASE + 1;
                            } else {
                                break out;
                            }
                        } else {
                            n = k = xc[ni];

                            // Get the number of digits of n.
                            for (d = 1; k >= 10; k /= 10, d++) {}

                            // Get the index of rd within n.
                            i %= LOG_BASE;

                            // Get the index of rd within n, adjusted for leading zeros.
                            // The number of leading zeros of n is given by LOG_BASE - d.
                            j = i - LOG_BASE + d;

                            // Get the rounding digit at index j of n.
                            rd = j < 0 ? 0 : n / pows10[d - j - 1] % 10 | 0;
                        }
                    }

                    r = r || sd < 0 ||

                    // Are there any non-zero digits after the rounding digit?
                    // The expression  n % pows10[ d - j - 1 ]  returns all digits of n to the right
                    // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
                    xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);

                    r = rm < 4 ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 &&

                    // Check whether the digit to the left of the rounding digit is odd.
                    (i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));

                    if (sd < 1 || !xc[0]) {
                        xc.length = 0;

                        if (r) {

                            // Convert sd to decimal places.
                            sd -= x.e + 1;

                            // 1, 0.1, 0.01, 0.001, 0.0001 etc.
                            xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
                            x.e = -sd || 0;
                        } else {

                            // Zero.
                            xc[0] = x.e = 0;
                        }

                        return x;
                    }

                    // Remove excess digits.
                    if (i == 0) {
                        xc.length = ni;
                        k = 1;
                        ni--;
                    } else {
                        xc.length = ni + 1;
                        k = pows10[LOG_BASE - i];

                        // E.g. 56700 becomes 56000 if 7 is the rounding digit.
                        // j > 0 means i > number of leading zeros of n.
                        xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
                    }

                    // Round up?
                    if (r) {

                        for (;;) {

                            // If the digit to be rounded up is in the first element of xc...
                            if (ni == 0) {

                                // i will be the length of xc[0] before k is added.
                                for (i = 1, j = xc[0]; j >= 10; j /= 10, i++) {}
                                j = xc[0] += k;
                                for (k = 1; j >= 10; j /= 10, k++) {}

                                // if i != k the length has increased.
                                if (i != k) {
                                    x.e++;
                                    if (xc[0] == BASE) xc[0] = 1;
                                }

                                break;
                            } else {
                                xc[ni] += k;
                                if (xc[ni] != BASE) break;
                                xc[ni--] = 0;
                                k = 1;
                            }
                        }
                    }

                    // Remove trailing zeros.
                    for (i = xc.length; xc[--i] === 0; xc.pop()) {}
                }

                // Overflow? Infinity.
                if (x.e > MAX_EXP) {
                    x.c = x.e = null;

                    // Underflow? Zero.
                } else if (x.e < MIN_EXP) {
                    x.c = [x.e = 0];
                }
            }

            return x;
        }

        // PROTOTYPE/INSTANCE METHODS


        /*
         * Return a new BigNumber whose value is the absolute value of this BigNumber.
         */
        P.absoluteValue = P.abs = function () {
            var x = new BigNumber(this);
            if (x.s < 0) x.s = 1;
            return x;
        };

        /*
         * Return a new BigNumber whose value is the value of this BigNumber rounded to a whole
         * number in the direction of Infinity.
         */
        P.ceil = function () {
            return round(new BigNumber(this), this.e + 1, 2);
        };

        /*
         * Return
         * 1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
         * -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
         * 0 if they have the same value,
         * or null if the value of either is NaN.
         */
        P.comparedTo = P.cmp = function (y, b) {
            id = 1;
            return compare(this, new BigNumber(y, b));
        };

        /*
         * Return the number of decimal places of the value of this BigNumber, or null if the value
         * of this BigNumber is ±Infinity or NaN.
         */
        P.decimalPlaces = P.dp = function () {
            var n,
                v,
                c = this.c;

            if (!c) return null;
            n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;

            // Subtract the number of trailing zeros of the last number.
            if (v = c[v]) for (; v % 10 == 0; v /= 10, n--) {}
            if (n < 0) n = 0;

            return n;
        };

        /*
         *  n / 0 = I
         *  n / N = N
         *  n / I = 0
         *  0 / n = 0
         *  0 / 0 = N
         *  0 / N = N
         *  0 / I = 0
         *  N / n = N
         *  N / 0 = N
         *  N / N = N
         *  N / I = N
         *  I / n = I
         *  I / 0 = I
         *  I / N = N
         *  I / I = N
         *
         * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
         * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
         */
        P.dividedBy = P.div = function (y, b) {
            id = 3;
            return div(this, new BigNumber(y, b), DECIMAL_PLACES, ROUNDING_MODE);
        };

        /*
         * Return a new BigNumber whose value is the integer part of dividing the value of this
         * BigNumber by the value of BigNumber(y, b).
         */
        P.dividedToIntegerBy = P.divToInt = function (y, b) {
            id = 4;
            return div(this, new BigNumber(y, b), 0, 1);
        };

        /*
         * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
         * otherwise returns false.
         */
        P.equals = P.eq = function (y, b) {
            id = 5;
            return compare(this, new BigNumber(y, b)) === 0;
        };

        /*
         * Return a new BigNumber whose value is the value of this BigNumber rounded to a whole
         * number in the direction of -Infinity.
         */
        P.floor = function () {
            return round(new BigNumber(this), this.e + 1, 3);
        };

        /*
         * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
         * otherwise returns false.
         */
        P.greaterThan = P.gt = function (y, b) {
            id = 6;
            return compare(this, new BigNumber(y, b)) > 0;
        };

        /*
         * Return true if the value of this BigNumber is greater than or equal to the value of
         * BigNumber(y, b), otherwise returns false.
         */
        P.greaterThanOrEqualTo = P.gte = function (y, b) {
            id = 7;
            return (b = compare(this, new BigNumber(y, b))) === 1 || b === 0;
        };

        /*
         * Return true if the value of this BigNumber is a finite number, otherwise returns false.
         */
        P.isFinite = function () {
            return !!this.c;
        };

        /*
         * Return true if the value of this BigNumber is an integer, otherwise return false.
         */
        P.isInteger = P.isInt = function () {
            return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
        };

        /*
         * Return true if the value of this BigNumber is NaN, otherwise returns false.
         */
        P.isNaN = function () {
            return !this.s;
        };

        /*
         * Return true if the value of this BigNumber is negative, otherwise returns false.
         */
        P.isNegative = P.isNeg = function () {
            return this.s < 0;
        };

        /*
         * Return true if the value of this BigNumber is 0 or -0, otherwise returns false.
         */
        P.isZero = function () {
            return !!this.c && this.c[0] == 0;
        };

        /*
         * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
         * otherwise returns false.
         */
        P.lessThan = P.lt = function (y, b) {
            id = 8;
            return compare(this, new BigNumber(y, b)) < 0;
        };

        /*
         * Return true if the value of this BigNumber is less than or equal to the value of
         * BigNumber(y, b), otherwise returns false.
         */
        P.lessThanOrEqualTo = P.lte = function (y, b) {
            id = 9;
            return (b = compare(this, new BigNumber(y, b))) === -1 || b === 0;
        };

        /*
         *  n - 0 = n
         *  n - N = N
         *  n - I = -I
         *  0 - n = -n
         *  0 - 0 = 0
         *  0 - N = N
         *  0 - I = -I
         *  N - n = N
         *  N - 0 = N
         *  N - N = N
         *  N - I = N
         *  I - n = I
         *  I - 0 = I
         *  I - N = N
         *  I - I = N
         *
         * Return a new BigNumber whose value is the value of this BigNumber minus the value of
         * BigNumber(y, b).
         */
        P.minus = P.sub = function (y, b) {
            var i,
                j,
                t,
                xLTy,
                x = this,
                a = x.s;

            id = 10;
            y = new BigNumber(y, b);
            b = y.s;

            // Either NaN?
            if (!a || !b) return new BigNumber(NaN);

            // Signs differ?
            if (a != b) {
                y.s = -b;
                return x.plus(y);
            }

            var xe = x.e / LOG_BASE,
                ye = y.e / LOG_BASE,
                xc = x.c,
                yc = y.c;

            if (!xe || !ye) {

                // Either Infinity?
                if (!xc || !yc) return xc ? (y.s = -b, y) : new BigNumber(yc ? x : NaN);

                // Either zero?
                if (!xc[0] || !yc[0]) {

                    // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
                    return yc[0] ? (y.s = -b, y) : new BigNumber(xc[0] ? x :

                    // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
                    ROUNDING_MODE == 3 ? -0 : 0);
                }
            }

            xe = bitFloor(xe);
            ye = bitFloor(ye);
            xc = xc.slice();

            // Determine which is the bigger number.
            if (a = xe - ye) {

                if (xLTy = a < 0) {
                    a = -a;
                    t = xc;
                } else {
                    ye = xe;
                    t = yc;
                }

                t.reverse();

                // Prepend zeros to equalise exponents.
                for (b = a; b--; t.push(0)) {}
                t.reverse();
            } else {

                // Exponents equal. Check digit by digit.
                j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;

                for (a = b = 0; b < j; b++) {

                    if (xc[b] != yc[b]) {
                        xLTy = xc[b] < yc[b];
                        break;
                    }
                }
            }

            // x < y? Point xc to the array of the bigger number.
            if (xLTy) t = xc, xc = yc, yc = t, y.s = -y.s;

            b = (j = yc.length) - (i = xc.length);

            // Append zeros to xc if shorter.
            // No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
            if (b > 0) for (; b--; xc[i++] = 0) {}
            b = BASE - 1;

            // Subtract yc from xc.
            for (; j > a;) {

                if (xc[--j] < yc[j]) {
                    for (i = j; i && !xc[--i]; xc[i] = b) {}
                    --xc[i];
                    xc[j] += BASE;
                }

                xc[j] -= yc[j];
            }

            // Remove leading zeros and adjust exponent accordingly.
            for (; xc[0] == 0; xc.splice(0, 1), --ye) {}

            // Zero?
            if (!xc[0]) {

                // Following IEEE 754 (2008) 6.3,
                // n - n = +0  but  n - n = -0  when rounding towards -Infinity.
                y.s = ROUNDING_MODE == 3 ? -1 : 1;
                y.c = [y.e = 0];
                return y;
            }

            // No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
            // for finite x and y.
            return normalise(y, xc, ye);
        };

        /*
         *   n % 0 =  N
         *   n % N =  N
         *   n % I =  n
         *   0 % n =  0
         *  -0 % n = -0
         *   0 % 0 =  N
         *   0 % N =  N
         *   0 % I =  0
         *   N % n =  N
         *   N % 0 =  N
         *   N % N =  N
         *   N % I =  N
         *   I % n =  N
         *   I % 0 =  N
         *   I % N =  N
         *   I % I =  N
         *
         * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
         * BigNumber(y, b). The result depends on the value of MODULO_MODE.
         */
        P.modulo = P.mod = function (y, b) {
            var q,
                s,
                x = this;

            id = 11;
            y = new BigNumber(y, b);

            // Return NaN if x is Infinity or NaN, or y is NaN or zero.
            if (!x.c || !y.s || y.c && !y.c[0]) {
                return new BigNumber(NaN);

                // Return x if y is Infinity or x is zero.
            } else if (!y.c || x.c && !x.c[0]) {
                return new BigNumber(x);
            }

            if (MODULO_MODE == 9) {

                // Euclidian division: q = sign(y) * floor(x / abs(y))
                // r = x - qy    where  0 <= r < abs(y)
                s = y.s;
                y.s = 1;
                q = div(x, y, 0, 3);
                y.s = s;
                q.s *= s;
            } else {
                q = div(x, y, 0, MODULO_MODE);
            }

            return x.minus(q.times(y));
        };

        /*
         * Return a new BigNumber whose value is the value of this BigNumber negated,
         * i.e. multiplied by -1.
         */
        P.negated = P.neg = function () {
            var x = new BigNumber(this);
            x.s = -x.s || null;
            return x;
        };

        /*
         *  n + 0 = n
         *  n + N = N
         *  n + I = I
         *  0 + n = n
         *  0 + 0 = 0
         *  0 + N = N
         *  0 + I = I
         *  N + n = N
         *  N + 0 = N
         *  N + N = N
         *  N + I = N
         *  I + n = I
         *  I + 0 = I
         *  I + N = N
         *  I + I = I
         *
         * Return a new BigNumber whose value is the value of this BigNumber plus the value of
         * BigNumber(y, b).
         */
        P.plus = P.add = function (y, b) {
            var t,
                x = this,
                a = x.s;

            id = 12;
            y = new BigNumber(y, b);
            b = y.s;

            // Either NaN?
            if (!a || !b) return new BigNumber(NaN);

            // Signs differ?
            if (a != b) {
                y.s = -b;
                return x.minus(y);
            }

            var xe = x.e / LOG_BASE,
                ye = y.e / LOG_BASE,
                xc = x.c,
                yc = y.c;

            if (!xe || !ye) {

                // Return ±Infinity if either ±Infinity.
                if (!xc || !yc) return new BigNumber(a / 0);

                // Either zero?
                // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
                if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
            }

            xe = bitFloor(xe);
            ye = bitFloor(ye);
            xc = xc.slice();

            // Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
            if (a = xe - ye) {
                if (a > 0) {
                    ye = xe;
                    t = yc;
                } else {
                    a = -a;
                    t = xc;
                }

                t.reverse();
                for (; a--; t.push(0)) {}
                t.reverse();
            }

            a = xc.length;
            b = yc.length;

            // Point xc to the longer array, and b to the shorter length.
            if (a - b < 0) t = yc, yc = xc, xc = t, b = a;

            // Only start adding at yc.length - 1 as the further digits of xc can be ignored.
            for (a = 0; b;) {
                a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
                xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
            }

            if (a) {
                xc = [a].concat(xc);
                ++ye;
            }

            // No need to check for zero, as +x + +y != 0 && -x + -y != 0
            // ye = MAX_EXP + 1 possible
            return normalise(y, xc, ye);
        };

        /*
         * Return the number of significant digits of the value of this BigNumber.
         *
         * [z] {boolean|number} Whether to count integer-part trailing zeros: true, false, 1 or 0.
         */
        P.precision = P.sd = function (z) {
            var n,
                v,
                x = this,
                c = x.c;

            // 'precision() argument not a boolean or binary digit: {z}'
            if (z != null && z !== !!z && z !== 1 && z !== 0) {
                if (ERRORS) raise(13, 'argument' + notBool, z);
                if (z != !!z) z = null;
            }

            if (!c) return null;
            v = c.length - 1;
            n = v * LOG_BASE + 1;

            if (v = c[v]) {

                // Subtract the number of trailing zeros of the last element.
                for (; v % 10 == 0; v /= 10, n--) {}

                // Add the number of digits of the first element.
                for (v = c[0]; v >= 10; v /= 10, n++) {}
            }

            if (z && x.e + 1 > n) n = x.e + 1;

            return n;
        };

        /*
         * Return a new BigNumber whose value is the value of this BigNumber rounded to a maximum of
         * dp decimal places using rounding mode rm, or to 0 and ROUNDING_MODE respectively if
         * omitted.
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'round() decimal places out of range: {dp}'
         * 'round() decimal places not an integer: {dp}'
         * 'round() rounding mode not an integer: {rm}'
         * 'round() rounding mode out of range: {rm}'
         */
        P.round = function (dp, rm) {
            var n = new BigNumber(this);

            if (dp == null || isValidInt(dp, 0, MAX, 15)) {
                round(n, ~~dp + this.e + 1, rm == null || !isValidInt(rm, 0, 8, 15, roundingMode) ? ROUNDING_MODE : rm | 0);
            }

            return n;
        };

        /*
         * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
         * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
         *
         * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
         *
         * If k is out of range and ERRORS is false, the result will be ±0 if k < 0, or ±Infinity
         * otherwise.
         *
         * 'shift() argument not an integer: {k}'
         * 'shift() argument out of range: {k}'
         */
        P.shift = function (k) {
            var n = this;
            return isValidInt(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER, 16, 'argument')

            // k < 1e+21, or truncate(k) will produce exponential notation.
            ? n.times('1e' + truncate(k)) : new BigNumber(n.c && n.c[0] && (k < -MAX_SAFE_INTEGER || k > MAX_SAFE_INTEGER) ? n.s * (k < 0 ? 0 : 1 / 0) : n);
        };

        /*
         *  sqrt(-n) =  N
         *  sqrt( N) =  N
         *  sqrt(-I) =  N
         *  sqrt( I) =  I
         *  sqrt( 0) =  0
         *  sqrt(-0) = -0
         *
         * Return a new BigNumber whose value is the square root of the value of this BigNumber,
         * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
         */
        P.squareRoot = P.sqrt = function () {
            var m,
                n,
                r,
                rep,
                t,
                x = this,
                c = x.c,
                s = x.s,
                e = x.e,
                dp = DECIMAL_PLACES + 4,
                half = new BigNumber('0.5');

            // Negative/NaN/Infinity/zero?
            if (s !== 1 || !c || !c[0]) {
                return new BigNumber(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
            }

            // Initial estimate.
            s = Math.sqrt(+x);

            // Math.sqrt underflow/overflow?
            // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
            if (s == 0 || s == 1 / 0) {
                n = coeffToString(c);
                if ((n.length + e) % 2 == 0) n += '0';
                s = Math.sqrt(n);
                e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);

                if (s == 1 / 0) {
                    n = '1e' + e;
                } else {
                    n = s.toExponential();
                    n = n.slice(0, n.indexOf('e') + 1) + e;
                }

                r = new BigNumber(n);
            } else {
                r = new BigNumber(s + '');
            }

            // Check for zero.
            // r could be zero if MIN_EXP is changed after the this value was created.
            // This would cause a division by zero (x/t) and hence Infinity below, which would cause
            // coeffToString to throw.
            if (r.c[0]) {
                e = r.e;
                s = e + dp;
                if (s < 3) s = 0;

                // Newton-Raphson iteration.
                for (;;) {
                    t = r;
                    r = half.times(t.plus(div(x, t, dp, 1)));

                    if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {

                        // The exponent of r may here be one less than the final result exponent,
                        // e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
                        // are indexed correctly.
                        if (r.e < e) --s;
                        n = n.slice(s - 3, s + 1);

                        // The 4th rounding digit may be in error by -1 so if the 4 rounding digits
                        // are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
                        // iteration.
                        if (n == '9999' || !rep && n == '4999') {

                            // On the first iteration only, check to see if rounding up gives the
                            // exact result as the nines may infinitely repeat.
                            if (!rep) {
                                round(t, t.e + DECIMAL_PLACES + 2, 0);

                                if (t.times(t).eq(x)) {
                                    r = t;
                                    break;
                                }
                            }

                            dp += 4;
                            s += 4;
                            rep = 1;
                        } else {

                            // If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
                            // result. If not, then there are further digits and m will be truthy.
                            if (!+n || !+n.slice(1) && n.charAt(0) == '5') {

                                // Truncate to the first rounding digit.
                                round(r, r.e + DECIMAL_PLACES + 2, 1);
                                m = !r.times(r).eq(x);
                            }

                            break;
                        }
                    }
                }
            }

            return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
        };

        /*
         *  n * 0 = 0
         *  n * N = N
         *  n * I = I
         *  0 * n = 0
         *  0 * 0 = 0
         *  0 * N = N
         *  0 * I = N
         *  N * n = N
         *  N * 0 = N
         *  N * N = N
         *  N * I = N
         *  I * n = I
         *  I * 0 = N
         *  I * N = N
         *  I * I = I
         *
         * Return a new BigNumber whose value is the value of this BigNumber times the value of
         * BigNumber(y, b).
         */
        P.times = P.mul = function (y, b) {
            var c,
                e,
                i,
                j,
                k,
                m,
                xcL,
                xlo,
                xhi,
                ycL,
                ylo,
                yhi,
                zc,
                base,
                sqrtBase,
                x = this,
                xc = x.c,
                yc = (id = 17, y = new BigNumber(y, b)).c;

            // Either NaN, ±Infinity or ±0?
            if (!xc || !yc || !xc[0] || !yc[0]) {

                // Return NaN if either is NaN, or one is 0 and the other is Infinity.
                if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
                    y.c = y.e = y.s = null;
                } else {
                    y.s *= x.s;

                    // Return ±Infinity if either is ±Infinity.
                    if (!xc || !yc) {
                        y.c = y.e = null;

                        // Return ±0 if either is ±0.
                    } else {
                        y.c = [0];
                        y.e = 0;
                    }
                }

                return y;
            }

            e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
            y.s *= x.s;
            xcL = xc.length;
            ycL = yc.length;

            // Ensure xc points to longer array and xcL to its length.
            if (xcL < ycL) zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i;

            // Initialise the result array with zeros.
            for (i = xcL + ycL, zc = []; i--; zc.push(0)) {}

            base = BASE;
            sqrtBase = SQRT_BASE;

            for (i = ycL; --i >= 0;) {
                c = 0;
                ylo = yc[i] % sqrtBase;
                yhi = yc[i] / sqrtBase | 0;

                for (k = xcL, j = i + k; j > i;) {
                    xlo = xc[--k] % sqrtBase;
                    xhi = xc[k] / sqrtBase | 0;
                    m = yhi * xlo + xhi * ylo;
                    xlo = ylo * xlo + m % sqrtBase * sqrtBase + zc[j] + c;
                    c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
                    zc[j--] = xlo % base;
                }

                zc[j] = c;
            }

            if (c) {
                ++e;
            } else {
                zc.splice(0, 1);
            }

            return normalise(y, zc, e);
        };

        /*
         * Return a new BigNumber whose value is the value of this BigNumber rounded to a maximum of
         * sd significant digits using rounding mode rm, or ROUNDING_MODE if rm is omitted.
         *
         * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toDigits() precision out of range: {sd}'
         * 'toDigits() precision not an integer: {sd}'
         * 'toDigits() rounding mode not an integer: {rm}'
         * 'toDigits() rounding mode out of range: {rm}'
         */
        P.toDigits = function (sd, rm) {
            var n = new BigNumber(this);
            sd = sd == null || !isValidInt(sd, 1, MAX, 18, 'precision') ? null : sd | 0;
            rm = rm == null || !isValidInt(rm, 0, 8, 18, roundingMode) ? ROUNDING_MODE : rm | 0;
            return sd ? round(n, sd, rm) : n;
        };

        /*
         * Return a string representing the value of this BigNumber in exponential notation and
         * rounded using ROUNDING_MODE to dp fixed decimal places.
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toExponential() decimal places not an integer: {dp}'
         * 'toExponential() decimal places out of range: {dp}'
         * 'toExponential() rounding mode not an integer: {rm}'
         * 'toExponential() rounding mode out of range: {rm}'
         */
        P.toExponential = function (dp, rm) {
            return format(this, dp != null && isValidInt(dp, 0, MAX, 19) ? ~~dp + 1 : null, rm, 19);
        };

        /*
         * Return a string representing the value of this BigNumber in fixed-point notation rounding
         * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
         *
         * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
         * but e.g. (-0.00001).toFixed(0) is '-0'.
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toFixed() decimal places not an integer: {dp}'
         * 'toFixed() decimal places out of range: {dp}'
         * 'toFixed() rounding mode not an integer: {rm}'
         * 'toFixed() rounding mode out of range: {rm}'
         */
        P.toFixed = function (dp, rm) {
            return format(this, dp != null && isValidInt(dp, 0, MAX, 20) ? ~~dp + this.e + 1 : null, rm, 20);
        };

        /*
         * Return a string representing the value of this BigNumber in fixed-point notation rounded
         * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
         * of the FORMAT object (see BigNumber.config).
         *
         * FORMAT = {
         *      decimalSeparator : '.',
         *      groupSeparator : ',',
         *      groupSize : 3,
         *      secondaryGroupSize : 0,
         *      fractionGroupSeparator : '\xA0',    // non-breaking space
         *      fractionGroupSize : 0
         * };
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toFormat() decimal places not an integer: {dp}'
         * 'toFormat() decimal places out of range: {dp}'
         * 'toFormat() rounding mode not an integer: {rm}'
         * 'toFormat() rounding mode out of range: {rm}'
         */
        P.toFormat = function (dp, rm) {
            var str = format(this, dp != null && isValidInt(dp, 0, MAX, 21) ? ~~dp + this.e + 1 : null, rm, 21);

            if (this.c) {
                var i,
                    arr = str.split('.'),
                    g1 = +FORMAT.groupSize,
                    g2 = +FORMAT.secondaryGroupSize,
                    groupSeparator = FORMAT.groupSeparator,
                    intPart = arr[0],
                    fractionPart = arr[1],
                    isNeg = this.s < 0,
                    intDigits = isNeg ? intPart.slice(1) : intPart,
                    len = intDigits.length;

                if (g2) i = g1, g1 = g2, g2 = i, len -= i;

                if (g1 > 0 && len > 0) {
                    i = len % g1 || g1;
                    intPart = intDigits.substr(0, i);

                    for (; i < len; i += g1) {
                        intPart += groupSeparator + intDigits.substr(i, g1);
                    }

                    if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
                    if (isNeg) intPart = '-' + intPart;
                }

                str = fractionPart ? intPart + FORMAT.decimalSeparator + ((g2 = +FORMAT.fractionGroupSize) ? fractionPart.replace(new RegExp('\\d{' + g2 + '}\\B', 'g'), '$&' + FORMAT.fractionGroupSeparator) : fractionPart) : intPart;
            }

            return str;
        };

        /*
         * Return a string array representing the value of this BigNumber as a simple fraction with
         * an integer numerator and an integer denominator. The denominator will be a positive
         * non-zero value less than or equal to the specified maximum denominator. If a maximum
         * denominator is not specified, the denominator will be the lowest value necessary to
         * represent the number exactly.
         *
         * [md] {number|string|BigNumber} Integer >= 1 and < Infinity. The maximum denominator.
         *
         * 'toFraction() max denominator not an integer: {md}'
         * 'toFraction() max denominator out of range: {md}'
         */
        P.toFraction = function (md) {
            var arr,
                d0,
                d2,
                e,
                exp,
                n,
                n0,
                q,
                s,
                k = ERRORS,
                x = this,
                xc = x.c,
                d = new BigNumber(ONE),
                n1 = d0 = new BigNumber(ONE),
                d1 = n0 = new BigNumber(ONE);

            if (md != null) {
                ERRORS = false;
                n = new BigNumber(md);
                ERRORS = k;

                if (!(k = n.isInt()) || n.lt(ONE)) {

                    if (ERRORS) {
                        raise(22, 'max denominator ' + (k ? 'out of range' : 'not an integer'), md);
                    }

                    // ERRORS is false:
                    // If md is a finite non-integer >= 1, round it to an integer and use it.
                    md = !k && n.c && round(n, n.e + 1, 1).gte(ONE) ? n : null;
                }
            }

            if (!xc) return x.toString();
            s = coeffToString(xc);

            // Determine initial denominator.
            // d is a power of 10 and the minimum max denominator that specifies the value exactly.
            e = d.e = s.length - x.e - 1;
            d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
            md = !md || n.cmp(d) > 0 ? e > 0 ? d : n1 : n;

            exp = MAX_EXP;
            MAX_EXP = 1 / 0;
            n = new BigNumber(s);

            // n0 = d1 = 0
            n0.c[0] = 0;

            for (;;) {
                q = div(n, d, 0, 1);
                d2 = d0.plus(q.times(d1));
                if (d2.cmp(md) == 1) break;
                d0 = d1;
                d1 = d2;
                n1 = n0.plus(q.times(d2 = n1));
                n0 = d2;
                d = n.minus(q.times(d2 = d));
                n = d2;
            }

            d2 = div(md.minus(d0), d1, 0, 1);
            n0 = n0.plus(d2.times(n1));
            d0 = d0.plus(d2.times(d1));
            n0.s = n1.s = x.s;
            e *= 2;

            // Determine which fraction is closer to x, n0/d0 or n1/d1
            arr = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().cmp(div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [n1.toString(), d1.toString()] : [n0.toString(), d0.toString()];

            MAX_EXP = exp;
            return arr;
        };

        /*
         * Return the value of this BigNumber converted to a number primitive.
         */
        P.toNumber = function () {
            return +this;
        };

        /*
         * Return a BigNumber whose value is the value of this BigNumber raised to the power n.
         * If m is present, return the result modulo m.
         * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
         * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using
         * ROUNDING_MODE.
         *
         * The modular power operation works efficiently when x, n, and m are positive integers,
         * otherwise it is equivalent to calculating x.toPower(n).modulo(m) (with POW_PRECISION 0).
         *
         * n {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
         * [m] {number|string|BigNumber} The modulus.
         *
         * 'pow() exponent not an integer: {n}'
         * 'pow() exponent out of range: {n}'
         *
         * Performs 54 loop iterations for n of 9007199254740991.
         */
        P.toPower = P.pow = function (n, m) {
            var k,
                y,
                z,
                i = mathfloor(n < 0 ? -n : +n),
                x = this;

            if (m != null) {
                id = 23;
                m = new BigNumber(m);
            }

            // Pass ±Infinity to Math.pow if exponent is out of range.
            if (!isValidInt(n, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER, 23, 'exponent') && (!isFinite(n) || i > MAX_SAFE_INTEGER && (n /= 0) || parseFloat(n) != n && !(n = NaN)) || n == 0) {
                k = Math.pow(+x, n);
                return new BigNumber(m ? k % m : k);
            }

            if (m) {
                if (n > 1 && x.gt(ONE) && x.isInt() && m.gt(ONE) && m.isInt()) {
                    x = x.mod(m);
                } else {
                    z = m;

                    // Nullify m so only a single mod operation is performed at the end.
                    m = null;
                }
            } else if (POW_PRECISION) {

                // Truncating each coefficient array to a length of k after each multiplication
                // equates to truncating significant digits to POW_PRECISION + [28, 41],
                // i.e. there will be a minimum of 28 guard digits retained.
                // (Using + 1.5 would give [9, 21] guard digits.)
                k = mathceil(POW_PRECISION / LOG_BASE + 2);
            }

            y = new BigNumber(ONE);

            for (;;) {
                if (i % 2) {
                    y = y.times(x);
                    if (!y.c) break;
                    if (k) {
                        if (y.c.length > k) y.c.length = k;
                    } else if (m) {
                        y = y.mod(m);
                    }
                }

                i = mathfloor(i / 2);
                if (!i) break;
                x = x.times(x);
                if (k) {
                    if (x.c && x.c.length > k) x.c.length = k;
                } else if (m) {
                    x = x.mod(m);
                }
            }

            if (m) return y;
            if (n < 0) y = ONE.div(y);

            return z ? y.mod(z) : k ? round(y, POW_PRECISION, ROUNDING_MODE) : y;
        };

        /*
         * Return a string representing the value of this BigNumber rounded to sd significant digits
         * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
         * necessary to represent the integer part of the value in fixed-point notation, then use
         * exponential notation.
         *
         * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toPrecision() precision not an integer: {sd}'
         * 'toPrecision() precision out of range: {sd}'
         * 'toPrecision() rounding mode not an integer: {rm}'
         * 'toPrecision() rounding mode out of range: {rm}'
         */
        P.toPrecision = function (sd, rm) {
            return format(this, sd != null && isValidInt(sd, 1, MAX, 24, 'precision') ? sd | 0 : null, rm, 24);
        };

        /*
         * Return a string representing the value of this BigNumber in base b, or base 10 if b is
         * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
         * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
         * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
         * TO_EXP_NEG, return exponential notation.
         *
         * [b] {number} Integer, 2 to 64 inclusive.
         *
         * 'toString() base not an integer: {b}'
         * 'toString() base out of range: {b}'
         */
        P.toString = function (b) {
            var str,
                n = this,
                s = n.s,
                e = n.e;

            // Infinity or NaN?
            if (e === null) {

                if (s) {
                    str = 'Infinity';
                    if (s < 0) str = '-' + str;
                } else {
                    str = 'NaN';
                }
            } else {
                str = coeffToString(n.c);

                if (b == null || !isValidInt(b, 2, 64, 25, 'base')) {
                    str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(str, e) : toFixedPoint(str, e);
                } else {
                    str = convertBase(toFixedPoint(str, e), b | 0, 10, s);
                }

                if (s < 0 && n.c[0]) str = '-' + str;
            }

            return str;
        };

        /*
         * Return a new BigNumber whose value is the value of this BigNumber truncated to a whole
         * number.
         */
        P.truncated = P.trunc = function () {
            return round(new BigNumber(this), this.e + 1, 1);
        };

        /*
         * Return as toString, but do not accept a base argument, and include the minus sign for
         * negative zero.
         */
        P.valueOf = P.toJSON = function () {
            var str,
                n = this,
                e = n.e;

            if (e === null) return n.toString();

            str = coeffToString(n.c);

            str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(str, e) : toFixedPoint(str, e);

            return n.s < 0 ? '-' + str : str;
        };

        P.isBigNumber = true;

        if (config != null) BigNumber.config(config);

        return BigNumber;
    }

    // PRIVATE HELPER FUNCTIONS


    function bitFloor(n) {
        var i = n | 0;
        return n > 0 || n === i ? i : i - 1;
    }

    // Return a coefficient array as a string of base 10 digits.
    function coeffToString(a) {
        var s,
            z,
            i = 1,
            j = a.length,
            r = a[0] + '';

        for (; i < j;) {
            s = a[i++] + '';
            z = LOG_BASE - s.length;
            for (; z--; s = '0' + s) {}
            r += s;
        }

        // Determine trailing zeros.
        for (j = r.length; r.charCodeAt(--j) === 48;) {}
        return r.slice(0, j + 1 || 1);
    }

    // Compare the value of BigNumbers x and y.
    function compare(x, y) {
        var a,
            b,
            xc = x.c,
            yc = y.c,
            i = x.s,
            j = y.s,
            k = x.e,
            l = y.e;

        // Either NaN?
        if (!i || !j) return null;

        a = xc && !xc[0];
        b = yc && !yc[0];

        // Either zero?
        if (a || b) return a ? b ? 0 : -j : i;

        // Signs differ?
        if (i != j) return i;

        a = i < 0;
        b = k == l;

        // Either Infinity?
        if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1;

        // Compare exponents.
        if (!b) return k > l ^ a ? 1 : -1;

        j = (k = xc.length) < (l = yc.length) ? k : l;

        // Compare digit by digit.
        for (i = 0; i < j; i++) {
            if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;
        } // Compare lengths.
        return k == l ? 0 : k > l ^ a ? 1 : -1;
    }

    /*
     * Return true if n is a valid number in range, otherwise false.
     * Use for argument validation when ERRORS is false.
     * Note: parseInt('1e+1') == 1 but parseFloat('1e+1') == 10.
     */
    function intValidatorNoErrors(n, min, max) {
        return (n = truncate(n)) >= min && n <= max;
    }

    function isArray(obj) {
        return Object.prototype.toString.call(obj) == '[object Array]';
    }

    /*
     * Convert string of baseIn to an array of numbers of baseOut.
     * Eg. convertBase('255', 10, 16) returns [15, 15].
     * Eg. convertBase('ff', 16, 10) returns [2, 5, 5].
     */
    function toBaseOut(str, baseIn, baseOut) {
        var j,
            arr = [0],
            arrL,
            i = 0,
            len = str.length;

        for (; i < len;) {
            for (arrL = arr.length; arrL--; arr[arrL] *= baseIn) {}
            arr[j = 0] += ALPHABET.indexOf(str.charAt(i++));

            for (; j < arr.length; j++) {

                if (arr[j] > baseOut - 1) {
                    if (arr[j + 1] == null) arr[j + 1] = 0;
                    arr[j + 1] += arr[j] / baseOut | 0;
                    arr[j] %= baseOut;
                }
            }
        }

        return arr.reverse();
    }

    function toExponential(str, e) {
        return (str.length > 1 ? str.charAt(0) + '.' + str.slice(1) : str) + (e < 0 ? 'e' : 'e+') + e;
    }

    function toFixedPoint(str, e) {
        var len, z;

        // Negative exponent?
        if (e < 0) {

            // Prepend zeros.
            for (z = '0.'; ++e; z += '0') {}
            str = z + str;

            // Positive exponent
        } else {
            len = str.length;

            // Append zeros.
            if (++e > len) {
                for (z = '0', e -= len; --e; z += '0') {}
                str += z;
            } else if (e < len) {
                str = str.slice(0, e) + '.' + str.slice(e);
            }
        }

        return str;
    }

    function truncate(n) {
        n = parseFloat(n);
        return n < 0 ? mathceil(n) : mathfloor(n);
    }

    // EXPORT


    BigNumber = constructorFactory();
    BigNumber['default'] = BigNumber.BigNumber = BigNumber;

    // AMD.
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
            return BigNumber;
        }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

        // Node.js and other environments that support module.exports.
    } else if (typeof module != 'undefined' && module.exports) {
        module.exports = BigNumber;

        // Browser.
    } else {
        if (!globalObj) globalObj = typeof self != 'undefined' ? self : Function('return this')();
        globalObj.BigNumber = BigNumber;
    }
})(undefined);

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _net = __webpack_require__(1);

var _net2 = _interopRequireDefault(_net);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HotPost = function (_migi$Component) {
  _inherits(HotPost, _migi$Component);

  function HotPost() {
    var _ref;

    _classCallCheck(this, HotPost);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = HotPost.__proto__ || Object.getPrototypeOf(HotPost)).call.apply(_ref, [this].concat(data)));

    var self = _this;
    self.message = self.props.message;
    if (self.props.dataList && self.props.dataList.length) {
      var html = '';
      self.props.dataList.forEach(function (item) {
        html += self.genItem(item);
      });
      self.html = html;
      self.on(migi.Event.DOM, function () {
        var $list = $(this.ref.list.element);
        $list.on('click', '.wrap .con .snap', function () {
          $(this).closest('li').addClass('expand');
        });
        $list.on('click', '.wrap .con .shrink', function () {
          var $li = $(this).closest('li');
          $li.removeClass('expand');
          $li[0].scrollIntoView(true);
        });
        $list.on('click', '.imgs', function () {
          $(this).closest('li').addClass('expand');
        });
        $list.on('click', '.imgs2 img', function () {
          var $this = $(this);
          var index = $this.attr('rel');
          var urls = [];
          $this.parent().find('img').each(function (i, img) {
            urls.push({ FileUrl: $(img).attr('src') });
          });
          var $like = $this.closest('li').find('li.like');
          var id = $this.closest('div').attr('rel');
          migi.eventBus.emit('choosePic', urls, index, $like.hasClass('has'), id);
        });
        $list.on('click', '.favor', function () {
          if (!_util2.default.isLogin()) {
            migi.eventBus.emit('NEED_LOGIN');
            return;
          }
          var $li = $(this);
          if ($li.hasClass('loading')) {
            return;
          }
          $li.addClass('loading');
          var postID = $li.attr('rel');
          var url = '/h5/post/favor';
          if ($li.hasClass('has')) {
            url = '/h5/post/unFavor';
          }
          _net2.default.postJSON(url, { postID: postID }, function (res) {
            if (res.success) {
              var _data = res.data;
              if (_data.State === 'favorWork') {
                $li.addClass('has');
              } else {
                $li.removeClass('has');
              }
              $li.find('span').text(_data.FavorCount || '收藏');
            } else {
              jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
            }
            $li.removeClass('loading');
          }, function (res) {
            jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
            $li.removeClass('loading');
          });
        });
        $list.on('click', '.share', function () {
          var postID = $(this).attr('rel');
          migi.eventBus.emit('SHARE', '/post/' + postID);
        });
        $list.on('click', '.like', function () {
          var $li = $(this);
          if ($li.hasClass('loading')) {
            return;
          }
          $li.addClass('loading');
          var postID = $li.attr('rel');
          self.like(postID);
        });
        $list.on('click', '.comment', function () {
          var $this = $(this);
          var id = $this.attr('rel');
          var count = $this.attr('count');
          var url = count === '0' ? '/subcomment.html?type=1&id=' + id : '/post.html?postID=' + id;
          var title = count === '0' ? '回复画圈' : '画圈正文';
          jsBridge.pushWindow(url, {
            title: title
          });
        });
        $list.on('click', '.del', function () {
          var postID = $(this).attr('rel');
          var $li = $(this).closest('.btn').closest('li');
          jsBridge.confirm('确认删除吗？', function () {
            _net2.default.postJSON('/h5/post/del', { postID: postID }, function (res) {
              if (res.success) {
                $li.remove();
              } else {
                jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
              }
            }, function (res) {
              jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
            });
          });
        });
        $list.on('click', 'a', function (e) {
          e.preventDefault();
          var $this = $(this);
          var type = $this.attr('type');
          var title = $this.attr('title');
          var url = $this.attr('href');
          jsBridge.pushWindow(url, {
            title: title
          });
        });
      });
    }
    return _this;
  }

  _createClass(HotPost, [{
    key: 'show',
    value: function show() {
      $(this.element).removeClass('fn-hide');
    }
  }, {
    key: 'hide',
    value: function hide() {
      $(this.element).addClass('fn-hide');
    }
  }, {
    key: 'like',
    value: function like(postID, cb) {
      var $li = $('#post_' + postID).find('.like');
      _net2.default.postJSON('/h5/post/like', { postID: postID }, function (res) {
        if (res.success) {
          var data = res.data;
          if (data.ISLike) {
            $li.addClass('has');
          } else {
            $li.removeClass('has');
          }
          $li.find('span').text(data.LikeCount || '点赞');
          if (cb) {
            cb(data);
          }
        } else if (res.code === 1000) {
          migi.eventBus.emit('NEED_LOGIN');
        } else {
          jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
        }
        $li.removeClass('loading');
      }, function (res) {
        jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
        $li.removeClass('loading');
      });
    }
  }, {
    key: 'encode',
    value: function encode(s) {
      return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/#(\S.*?)#/g, '<strong>#$1#</strong>').replace(/(http(?:s)?:\/\/[\w-]+\.[\w]+\S*)/gi, '<a href="$1" target="_blank">$1</a>');
    }
  }, {
    key: 'genItem',
    value: function genItem(item) {
      var len = item.Content.length;
      var id = item.ID;
      var maxLen = 144;
      var imgLen = item.Image_Post.length;
      var html = len > maxLen ? item.Content.slice(0, maxLen) + '...' : item.Content;
      html = this.encode(html);
      if (len > maxLen) {
        html += '<span class="placeholder"></span><span class="more">查看全文</span>';
        var full = this.encode(item.Content) + '<span class="placeholder"></span><span class="shrink">收起全文</span>';
        html = '<p class="snap">' + html + '</p><p class="full">' + full + '</p>';
      }
      var url = '/post.html?postID=' + id;
      if (item.IsAuthor) {
        var authorUrl = '/author.html?authorID=' + item.AuthorID;
        return migi.createVd("li", [["class", "author"], ["id", 'post_' + id]], [migi.createVd("div", [["class", "profile fn-clear"]], [migi.createVd("a", [["class", "pic"], ["href", authorUrl], ["type", "2"], ["title", item.SendUserNickName]], [migi.createVd("img", [["src", _util2.default.autoSsl(_util2.default.img208_208_80(item.SendUserHead_Url || '/src/common/blank.png'))]])]), migi.createVd("div", [["class", "txt"]], [migi.createVd("a", [["href", authorUrl], ["class", "name"], ["type", "2"], ["title", item.SendUserNickName]], [item.SendUserNickName]), migi.createVd("a", [["class", "time"], ["href", url], ["type", "1"], ["title", "画圈正文"]], [_util2.default.formatDate(item.Createtime)])]), migi.createVd("div", [["class", "circle"]], [migi.createVd("ul", [], [(item.Taglist || []).map(function (item) {
          return migi.createVd("li", [], [migi.createVd("a", [["href", '/circle.html?circleID=' + item.TagID], ["title", item.TagName + '圈']], [item.TagName, "圈"])]);
        })])])]), migi.createVd("div", [["class", "wrap"]], [item.Title ? migi.createVd("a", [["href", url], ["class", "t"], ["type", "1"], ["title", "画圈正文"]], [item.Title]) : '', migi.createVd("div", [["class", "con"], ["dangerouslySetInnerHTML", html]]), item.Image_Post && imgLen ? migi.createVd("ul", [["class", 'imgs fn-clear' + (item.Image_Post.length > 4 ? '' : ' n' + item.Image_Post.length)]], [item.Image_Post.length > 9 ? item.Image_Post.slice(0, 9).map(function (item, i) {
          var cn = '';
          if (item.Width !== 0 && item.Height !== 0 && item.Width < 86 && item.Height < 86) {
            cn = 'no-scale';
          }
          if (i === 8) {
            return migi.createVd("li", [["class", 'all ' + cn], ["style", 'background-image:url(' + _util2.default.autoSsl(_util2.default.img208_208_80(item.FileUrl)) + ')']], [migi.createVd("img", [["src", _util2.default.autoSsl(_util2.default.img208_208_80(item.FileUrl))]]), migi.createVd("a", [["href", url], ["type", "1"], ["title", "画圈正文"]], ["查看全部"])]);
          }
          return migi.createVd("li", [["class", cn], ["style", 'background-image:url(' + _util2.default.autoSsl(_util2.default.img208_208_80(item.FileUrl)) + ')']], [migi.createVd("img", [["src", _util2.default.autoSsl(_util2.default.img208_208_80(item.FileUrl))]])]);
        }) : item.Image_Post.map(function (item) {
          var cn = '';
          if (item.Width !== 0 && item.Height !== 0 && item.Width < 86 && item.Height < 86) {
            cn = 'no-scale';
          }
          return migi.createVd("li", [["class", cn], ["style", 'background-image:url(' + _util2.default.autoSsl(_util2.default.img208_208_80(item.FileUrl)) + ')']], [migi.createVd("img", [["src", _util2.default.autoSsl(_util2.default.img208_208_80(item.FileUrl))]])]);
        })]) : '', item.Image_Post && imgLen ? migi.createVd("div", [["class", "imgs2"], ["rel", id]], [item.Image_Post.map(function (item, i) {
          return migi.createVd("img", [["src", _util2.default.autoSsl(_util2.default.img720__80(item.FileUrl))], ["rel", i]]);
        })]) : '', migi.createVd("b", [["class", "arrow"]])]), migi.createVd("ul", [["class", "btn"]], [migi.createVd("li", [["class", "share"], ["rel", id]], [migi.createVd("b", []), migi.createVd("span", [], ["分享"])]), migi.createVd("li", [["class", 'favor' + (item.ISFavor ? ' has' : '')], ["rel", id]], [migi.createVd("b", []), migi.createVd("span", [], [item.FavorCount || '收藏'])]), migi.createVd("li", [["class", 'like' + (item.ISLike ? ' has' : '')], ["rel", id]], [migi.createVd("b", []), migi.createVd("span", [], [item.LikeCount || '点赞'])]), migi.createVd("li", [["class", "comment"], ["rel", id], ["count", item.CommentCount]], [migi.createVd("b", []), migi.createVd("span", [], [item.CommentCount || '评论'])]), item.IsOwn ? migi.createVd("li", [["class", "del"], ["rel", id]], [migi.createVd("b", [])]) : ''])]);
      }
      var userUrl = '/user.html?userID=' + item.SendUserID;
      return migi.createVd("li", [["id", 'post_' + id]], [migi.createVd("div", [["class", "profile fn-clear"]], [migi.createVd("a", [["class", "pic"], ["href", userUrl], ["type", "3"], ["title", item.SendUserNickName]], [migi.createVd("img", [["src", _util2.default.autoSsl(_util2.default.img208_208_80(item.SendUserHead_Url || '/src/common/head.png'))]])]), migi.createVd("div", [["class", "txt"]], [migi.createVd("a", [["class", "name"], ["href", userUrl], ["type", "3"], ["title", item.SendUserNickName]], [item.SendUserNickName]), migi.createVd("a", [["class", "time"], ["href", url], ["type", "1"], ["title", "画圈正文"]], [_util2.default.formatDate(item.Createtime)])]), migi.createVd("div", [["class", "circle"]], [migi.createVd("ul", [], [(item.Taglist || []).map(function (item) {
        return migi.createVd("li", [], [migi.createVd("a", [["href", '/circle.html?circleID=' + item.TagID], ["title", item.TagName + '圈']], [item.TagName, "圈"])]);
      })])])]), migi.createVd("div", [["class", "wrap"]], [item.Title ? migi.createVd("a", [["href", url], ["class", "t"], ["type", "1"], ["title", "画圈正文"]], [item.Title]) : '', migi.createVd("div", [["class", "con"], ["dangerouslySetInnerHTML", html]]), item.Image_Post && imgLen ? migi.createVd("ul", [["class", 'imgs fn-clear' + (item.Image_Post.length > 4 ? '' : ' n' + item.Image_Post.length)]], [item.Image_Post.length > 9 ? item.Image_Post.slice(0, 9).map(function (item, i) {
        var cn = '';
        if (item.Width !== 0 && item.Height !== 0 && item.Width < 86 && item.Height < 86) {
          cn = 'no-scale';
        }
        if (i === 8) {
          return migi.createVd("li", [["class", 'all ' + cn], ["style", 'background-image:url(' + _util2.default.autoSsl(_util2.default.img208_208_80(item.FileUrl)) + ')']], [migi.createVd("img", [["src", _util2.default.autoSsl(_util2.default.img208_208_80(item.FileUrl))]]), migi.createVd("a", [["href", url], ["type", "1"], ["title", "画圈正文"]], ["查看全部"])]);
        }
        return migi.createVd("li", [["class", cn], ["style", 'background-image:url(' + _util2.default.autoSsl(_util2.default.img208_208_80(item.FileUrl)) + ')']], [migi.createVd("img", [["src", _util2.default.autoSsl(_util2.default.img208_208_80(item.FileUrl))]])]);
      }) : item.Image_Post.map(function (item) {
        var cn = '';
        if (item.Width !== 0 && item.Height !== 0 && item.Width < 86 && item.Height < 86) {
          cn = 'no-scale';
        }
        return migi.createVd("li", [["class", cn], ["style", 'background-image:url(' + _util2.default.autoSsl(_util2.default.img208_208_80(item.FileUrl)) + ')']], [migi.createVd("img", [["src", _util2.default.autoSsl(_util2.default.img208_208_80(item.FileUrl))]])]);
      })]) : '', item.Image_Post && imgLen ? migi.createVd("div", [["class", "imgs2"], ["rel", id]], [item.Image_Post.map(function (item, i) {
        return migi.createVd("img", [["src", _util2.default.autoSsl(_util2.default.img720__80(item.FileUrl))], ["rel", i]]);
      })]) : '', migi.createVd("b", [["class", "arrow"]])]), migi.createVd("ul", [["class", "btn"]], [migi.createVd("li", [["class", "share"], ["rel", id]], [migi.createVd("b", []), migi.createVd("span", [], ["分享"])]), migi.createVd("li", [["class", 'favor' + (item.ISFavor ? ' has' : '')], ["rel", id]], [migi.createVd("b", []), migi.createVd("span", [], [item.FavorCount || '收藏'])]), migi.createVd("li", [["class", 'like' + (item.ISLike ? ' has' : '')], ["rel", id]], [migi.createVd("b", []), migi.createVd("span", [], [item.LikeCount || '点赞'])]), migi.createVd("li", [["class", "comment"], ["rel", id], ["count", item.CommentCount]], [migi.createVd("b", []), migi.createVd("span", [], [item.CommentCount || '评论'])]), item.IsOwn ? migi.createVd("li", [["class", "del"], ["rel", id]], [migi.createVd("b", [])]) : ''])]);
    }
  }, {
    key: 'setData',
    value: function setData(data) {
      var self = this;
      var html = '';
      (data || []).forEach(function (item) {
        html += self.genItem(item);
      });
      $(self.ref.list.element).html(html);
    }
  }, {
    key: 'appendData',
    value: function appendData(data) {
      var self = this;
      var html = '';
      (data || []).forEach(function (item) {
        html += self.genItem(item);
      });
      $(self.ref.list.element).append(html);
    }
  }, {
    key: 'prependData',
    value: function prependData(data) {
      var self = this;
      var html = '';
      (data || []).forEach(function (item) {
        html += self.genItem(item);
      });
      $(self.ref.list.element).prepend(html);
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "cp-hotpost"]], [migi.createVd("ol", [["class", "list"], ["ref", "list"], ["dangerouslySetInnerHTML", this.html]]), migi.createVd("div", [["class", new migi.Obj("message", this, function () {
        return 'cp-message' + (this.message ? '' : ' fn-hide');
      })]], [new migi.Obj("message", this, function () {
        return this.message;
      })])]);
    }
  }, {
    key: 'message',
    set: function set(v) {
      this.__setBind("message", v);this.__data("message");
    },
    get: function get() {
      return this.__getBind("message");
    }
  }]);

  return HotPost;
}(migi.Component);

migi.name(HotPost, "HotPost");exports.default = HotPost;

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageView = function (_migi$Component) {
  _inherits(ImageView, _migi$Component);

  function ImageView() {
    var _ref;

    _classCallCheck(this, ImageView);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = ImageView.__proto__ || Object.getPrototypeOf(ImageView)).call.apply(_ref, [this].concat(data)));

    var self = _this;
    self.dataList = self.props.dataList || [];
    self.isLike = self.props.isLike;
    self.on(migi.Event.DOM, function () {
      var $window = $(window);
      migi.eventBus.on('choosePic', function (dataList, i, isLike, sid) {
        self.dataList = dataList;
        self.idx = i;
        self.isLike = isLike;
        self.sid = sid;
        self.show();
        self.tops = $window.scrollTop();
      });
    });
    return _this;
  }

  _createClass(ImageView, [{
    key: 'show',
    value: function show() {
      $(this.element).removeClass('fn-hide');
    }
  }, {
    key: 'hide',
    value: function hide() {
      $(this.element).addClass('fn-hide');
    }
  }, {
    key: 'clickPrev',
    value: function clickPrev() {
      var self = this;
      if (self.idx) {
        self.idx--;
      }
    }
  }, {
    key: 'clickNext',
    value: function clickNext() {
      var self = this;
      if (self.idx < self.dataList.length - 1) {
        self.idx++;
      }
    }
  }, {
    key: 'clickClose',
    value: function clickClose() {
      this.hide();
    }
  }, {
    key: 'clickLike',
    value: function clickLike() {
      this.emit('clickLike', this.sid);
    }
  }, {
    key: 'clickDownload',
    value: function clickDownload(e, vd) {
      if (!_util2.default.isLogin()) {
        e.preventDefault();
        migi.eventBus.emit('NEED_LOGIN');
        return;
      }
      var url = vd.props.href;
      jsBridge.download({
        url: url
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "mod-iv fn-hide"]], [migi.createVd("div", [["class", "c"], ["style", new migi.Obj("tops", this, function () {
        return 'top:' + this.tops + 'px';
      })]], [migi.createVd("img", [["src", new migi.Obj(["dataList", "idx"], this, function () {
        return this.dataList && this.dataList[this.idx] ? _util2.default.autoSsl(_util2.default.img720__80(this.dataList[this.idx].FileUrl)) || '/src/common/blank.png' : '/src/common/blank.png';
      })]]), migi.createVd("ul", [["class", "btn"]], [migi.createVd("li", [["class", new migi.Obj("isLike", this, function () {
        return 'like' + (this.isLike ? ' has' : '');
      })], ["onClick", new migi.Cb(this, this.clickLike)]]), migi.createVd("li", [["class", "download"]], [migi.createVd("a", [["href", new migi.Obj(["dataList", "idx"], this, function () {
        return this.dataList && this.dataList[this.idx] ? this.dataList[this.idx].FileUrl : '';
      })], ["onClick", new migi.Cb(this, this.clickDownload)]])])])]), migi.createVd("b", [["class", "prev"], ["onClick", new migi.Cb(this, this.clickPrev)]]), migi.createVd("b", [["class", "next"], ["onClick", new migi.Cb(this, this.clickNext)]]), migi.createVd("b", [["class", "close"], ["onClick", new migi.Cb(this, this.clickClose)]])]);
    }
  }, {
    key: 'dataList',
    set: function set(v) {
      this.__setBind("dataList", v);this.__data("dataList");
    },
    get: function get() {
      if (this.__initBind("dataList")) this.__setBind("dataList", []);return this.__getBind("dataList");
    }
  }, {
    key: 'idx',
    set: function set(v) {
      this.__setBind("idx", v);this.__data("idx");
    },
    get: function get() {
      if (this.__initBind("idx")) this.__setBind("idx", 0);return this.__getBind("idx");
    }
  }, {
    key: 'tops',
    set: function set(v) {
      this.__setBind("tops", v);this.__data("tops");
    },
    get: function get() {
      if (this.__initBind("tops")) this.__setBind("tops", 0);return this.__getBind("tops");
    }
  }, {
    key: 'isLike',
    set: function set(v) {
      this.__setBind("isLike", v);this.__data("isLike");
    },
    get: function get() {
      return this.__getBind("isLike");
    }
  }, {
    key: 'sid',
    set: function set(v) {
      this.__setBind("sid", v);this.__data("sid");
    },
    get: function get() {
      return this.__getBind("sid");
    }
  }]);

  return ImageView;
}(migi.Component);

migi.name(ImageView, "ImageView");exports.default = ImageView;

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by army8735 on 2017/10/28.
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});
var TYPE = {
  originMusic: 1,
  musicAlbum: 5,
  photoAlbum: 11
};

var NAME = {};
NAME[TYPE.originMusic] = '原创音乐';
NAME[TYPE.musicAlbum] = '音乐专辑';
NAME[TYPE.photoAlbum] = '相册';

exports.default = {
  TYPE: TYPE,
  NAME: NAME
};

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by army8735 on 2017/8/13.
 */

var code2Data = {
  '901': {
    name: '出品',
    display: '出品',
    css: 'ce'
  },
  '902': {
    name: '策划',
    display: '策划',
    css: 'ce'
  },
  '111': {
    name: '演唱',
    display: '演唱',
    css: 'ge'
  },
  '112': {
    name: '和声',
    display: '和声'
  },
  '113': {
    name: '伴唱',
    display: '伴唱'
  },
  '114': {
    name: '戏腔',
    display: '戏腔'
  },
  '115': {
    name: '合唱',
    display: '合唱',
    css: 'ge'
  },
  '121': {
    name: '作曲',
    display: '作曲',
    css: 'qu'
  },
  '122': {
    name: '编曲',
    display: '编曲',
    css: 'qu'
  },
  '131': {
    name: '混音',
    display: '混音',
    css: 'hun'
  },
  '132': {
    name: '母带',
    display: '母带',
    css: 'hun'
  },
  '133': {
    name: '录音',
    display: '录音'
  },
  '134': {
    name: '修音',
    display: '修音',
    css: 'hun'
  },
  '141': {
    name: '演奏',
    display: '演奏', //优先显示乐器名。
    css: 'yue'
  },
  '151': {
    name: '配音',
    display: '配音',
    css: 'cv'
  },
  '211': {
    name: '视频',
    display: '视频',
    css: 'ying'
  },
  '212': {
    name: '压制',
    display: '压制',
    css: 'ying'
  },
  '213': {
    name: '拍摄',
    display: '拍摄',
    css: 'ying'
  },
  '311': {
    name: '立绘',
    display: '立绘',
    css: 'tu'
  },
  '312': {
    name: 'CG',
    display: 'CG',
    css: 'tu'
  },
  '313': {
    name: '场景',
    display: '场景',
    css: 'tu'
  },
  '314': {
    name: '线稿',
    display: '线稿',
    css: 'tu'
  },
  '315': {
    name: '上色',
    display: '上色',
    css: 'tu'
  },
  '316': {
    name: '手绘',
    display: '手绘',
    css: 'tu'
  },
  '317': {
    name: '插画',
    display: '插画',
    css: 'tu'
  },
  '331': {
    name: '设计',
    display: '设计',
    css: 'she'
  },
  '332': {
    name: '海报',
    display: '海报',
    css: 'she'
  },
  '333': {
    name: 'Logo设计',
    display: 'Logo设计',
    css: 'she'
  },
  '341': {
    name: '漫画',
    display: '漫画',
    css: 'tu'
  },
  '351': {
    name: '书法',
    display: '书法',
    css: 'ji'
  },
  '391': {
    name: '沙画',
    display: '沙画',
    css: 'ji'
  },
  '411': {
    name: '作词',
    display: '作词',
    css: 'wen'
  },
  '421': {
    name: '文案',
    display: '文案',
    css: 'wen'
  },
  '422': {
    name: '剧本',
    display: '剧本',
    css: 'wen'
  },
  '423': {
    name: '小说',
    display: '小说',
    css: 'wen'
  }
};

var label2Code = {};
Object.keys(code2Data).forEach(function (k) {
  var v = code2Data[k];
  label2Code[v.css] = label2Code[v.css] || [];
  label2Code[v.css].push(k);
});

exports.default = {
  code2Data: code2Data,
  label2Code: label2Code
};

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HotPlayList = function (_migi$Component) {
  _inherits(HotPlayList, _migi$Component);

  function HotPlayList() {
    var _ref;

    _classCallCheck(this, HotPlayList);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = HotPlayList.__proto__ || Object.getPrototypeOf(HotPlayList)).call.apply(_ref, [this].concat(data)));

    _this.dataList = _this.props.dataList;
    return _this;
  }

  _createClass(HotPlayList, [{
    key: 'show',
    value: function show() {
      $(this.element).removeClass('fn-hide');
    }
  }, {
    key: 'hide',
    value: function hide() {
      $(this.element).addClass('fn-hide');
    }
  }, {
    key: 'appendData',
    value: function appendData(data) {
      var s = '';
      (data || []).forEach(function (item) {
        s += this.genItem(item);
      }.bind(this));
      $(this.ref.list.element).append(s);
    }
  }, {
    key: 'genItem',
    value: function genItem(item) {
      var url = '/works.html?worksID=' + item.WorksID + '&workID=' + item.ItemID;
      var type = '';
      if (item.ItemType === 1111 || item.ItemType === 1113) {
        type = 'audio';
      } else if (item.ItemType === 2110) {
        type = 'video';
      }
      if (item.WorksState === 3) {
        return migi.createVd("li", [["class", "private"]], [migi.createVd("span", [["class", "name"]], ["待揭秘"])]);
      }
      var author = (item.Works_Item_Author || []).filter(function (item) {
        return item.WorksAuthorType === '111';
      }).map(function (item) {
        return item.AuthName;
      });
      if (item.WorksState === 2) {
        return migi.createVd("li", [["class", type + ' rel']], [migi.createVd("a", [["href", url], ["class", "pic"]], [migi.createVd("img", [["src", _util2.default.autoSsl(_util2.default.img108_108_80(item.WorksCoverPic || '//zhuanquan.xin/img/blank.png'))]])]), migi.createVd("a", [["href", url], ["class", 'name' + (item.ItemName ? '' : ' empty')]], [item.ItemName || '待揭秘']), migi.createVd("p", [["class", "author"]], [author.join(' ')])]);
      }
      return migi.createVd("li", [["class", type + ' rel']], [migi.createVd("a", [["href", url], ["class", "pic"]], [migi.createVd("img", [["src", _util2.default.autoSsl(_util2.default.img108_108_80(item.WorksCoverPic || '//zhuanquan.xin/img/blank.png'))]])]), migi.createVd("a", [["href", url], ["class", 'name' + (item.ItemName ? '' : ' empty')]], [item.ItemName || '待揭秘']), migi.createVd("p", [["class", "author"]], [author.join(' ')]), migi.createVd("span", [["class", "icon"]])]);
    }
  }, {
    key: 'click',
    value: function click(e, vd, tvd) {
      e.preventDefault();
      var href = tvd.props.href;
      var title = tvd.props.title;
      jsBridge.pushWindow(href, {
        title: title
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "cp-hotplaylist"], ["onClick", [[{ "a": { "_v": true } }, new migi.Cb(this, this.click)]]]], [migi.createVd("ol", [["class", "list"], ["ref", "list"]], [new migi.Obj("dataList", this, function () {
        return (this.dataList || []).map(function (item) {
          return this.genItem(item);
        }.bind(this));
      })]), migi.createVd("div", [["class", new migi.Obj("message", this, function () {
        return 'cp-message' + (this.message ? '' : ' fn-hide');
      })]], [new migi.Obj("message", this, function () {
        return this.message;
      })])]);
    }
  }, {
    key: 'hasData',
    set: function set(v) {
      this.__setBind("hasData", v);this.__data("hasData");
    },
    get: function get() {
      return this.__getBind("hasData");
    }
  }, {
    key: 'dataList',
    set: function set(v) {
      this.__setBind("dataList", v);this.__data("dataList");
    },
    get: function get() {
      return this.__getBind("dataList");
    }
  }, {
    key: 'message',
    set: function set(v) {
      this.__setBind("message", v);this.__data("message");
    },
    get: function get() {
      return this.__getBind("message");
    }
  }]);

  return HotPlayList;
}(migi.Component);

migi.name(HotPlayList, "HotPlayList");exports.default = HotPlayList;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _net = __webpack_require__(1);

var _net2 = _interopRequireDefault(_net);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pool = [];
var list = [];
var index = 0;

var HotPic = function (_migi$Component) {
  _inherits(HotPic, _migi$Component);

  function HotPic() {
    var _ref;

    _classCallCheck(this, HotPic);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = HotPic.__proto__ || Object.getPrototypeOf(HotPic)).call.apply(_ref, [this].concat(data)));

    var self = _this;
    self.message = self.props.message;
    self.on(migi.Event.DOM, function () {
      if (self.props.dataList) {
        self.appendData(self.props.dataList);
      }
      var $root = $(self.element);
      $root.on('click', '.like', function () {
        var $b = $(this);
        if ($b.hasClass('loading')) {
          return;
        }
        $b.addClass('loading');
        var id = $b.attr('itemID');
        _net2.default.postJSON('/h5/works/likeWork', { workID: id }, function (res) {
          if (res.success) {
            if (res.data === 211) {
              $b.addClass('has');
            } else {
              $b.removeClass('has');
            }
          } else if (res.code === 1000) {
            migi.eventBus.emit('NEED_LOGIN');
          } else {
            jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
          }
          $b.removeClass('loading');
        }, function (res) {
          jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
          $b.removeClass('loading');
        });
      });
      $root.on('click', '.favor', function () {
        var $b = $(this);
        if ($b.hasClass('loading')) {
          return;
        }
        $b.addClass('loading');
        var id = $b.attr('itemID');
        var url = $b.hasClass('has') ? '/h5/works/unFavorWork' : '/h5/works/favorWork';
        _net2.default.postJSON(url, { workID: id }, function (res) {
          if (res.success) {
            if (url === '/h5/works/favorWork') {
              $b.addClass('has');
            } else {
              $b.removeClass('has');
            }
          } else if (res.code === 1000) {
            migi.eventBus.emit('NEED_LOGIN');
          } else {
            jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
          }
          $b.removeClass('loading');
        }, function (res) {
          jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
          $b.removeClass('loading');
        });
      });
      $root.on('click', 'img', function (e) {
        var $img = $(this);
        var index = $img.attr('rel');
        migi.eventBus.emit('choosePic', list, index);
      });
    });
    return _this;
  }

  _createClass(HotPic, [{
    key: "show",
    value: function show() {
      $(this.element).removeClass('fn-hide');
    }
  }, {
    key: "hide",
    value: function hide() {
      $(this.element).addClass('fn-hide');
    }
  }, {
    key: "clear",
    value: function clear() {
      var self = this;
      var $l1 = $(self.ref.l1.element);
      var $l2 = $(self.ref.l2.element);
      $l1.html('');
      $l2.html('');
      pool = [];
      list = [];
    }
  }, {
    key: "appendData",
    value: function appendData(data) {
      var self = this;
      if (!Array.isArray(data)) {
        data = [data];
      }
      if (data.length) {
        //未知高宽的去加载图片获取高宽
        data.forEach(function (item) {
          if (!item.Width || !item.Height) {
            self.loadImgSize(item, self.checkPool.bind(self));
          }
        });
        pool = pool.concat(data);
        list = list.concat(data);
        self.checkPool();
      }
    }
  }, {
    key: "checkPool",
    value: function checkPool() {
      var self = this;
      while (pool.length) {
        var item = pool[0];
        if (item.Width && item.Height) {
          var li = self.genItem(item);
          self.append(li);
          pool.shift();
        } else {
          return;
        }
      }
      this.emit('poolEnd');
    }
  }, {
    key: "append",
    value: function append(li) {
      var self = this;
      var $l1 = $(self.ref.l1.element);
      var $l2 = $(self.ref.l2.element);
      var $min = $l1;
      if ($l2.height() < $min.height()) {
        $min = $l2;
      }
      li.appendTo($min[0]);
    }
  }, {
    key: "genItem",
    value: function genItem(data) {
      if (data.Width <= 336) {
        return migi.createVd("li", [["id", 'photo_' + data.ItemID]], [migi.createVd("img", [["src", _util2.default.autoSsl(_util2.default.img336__80(data.FileUrl)) || '/src/common/blank.png'], ["rel", index++], ["height", data.Height / 2]]), migi.createVd("b", [["class", 'like' + (data.ISLike ? ' has' : '')], ["itemID", data.ItemID]]), migi.createVd("b", [["class", 'favor' + (data.ISFavor ? ' has' : '')], ["itemID", data.ItemID]])]);
      }
      var height = data.Height * 336 / data.Width;
      return migi.createVd("li", [["id", 'photo_' + data.ItemID]], [migi.createVd("img", [["src", _util2.default.autoSsl(_util2.default.img336__80(data.FileUrl)) || '/src/common/blank.png'], ["rel", index++], ["height", height / 2]]), migi.createVd("b", [["class", 'like' + (data.ISLike ? ' has' : '')], ["itemID", data.ItemID]]), migi.createVd("b", [["class", 'favor' + (data.ISFavor ? ' has' : '')], ["itemID", data.ItemID]])]);
    }
  }, {
    key: "loadImgSize",
    value: function loadImgSize(data, cb) {
      var img = document.createElement('img');
      img.style.position = 'absolute';
      img.style.left = '-9999rem;';
      img.style.top = '-9999rem';
      img.style.visibility = 'hidden';
      img.src = _util2.default.autoSsl(_util2.default.img__60(data.FileUrl));
      img.onload = function () {
        data.Width = img.width;
        data.Height = img.height;
        cb();
        document.body.removeChild(img);
      };
      img.onerror = function () {
        data.FileUrl = '//zhuanquan.xin/img/blank.png';
        data.Width = 1;
        data.Height = 100;
        cb();
        document.body.removeChild(img);
      };
      document.body.appendChild(img);
    }
  }, {
    key: "render",
    value: function render() {
      return migi.createVd("div", [["class", 'cp-hotpic' + (this.props.hidden ? ' fn-hide' : '')]], [migi.createVd("div", [["class", "c"]], [migi.createVd("div", [], [migi.createVd("ul", [["ref", "l1"]])]), migi.createVd("div", [], [migi.createVd("ul", [["ref", "l2"]])])]), migi.createVd("div", [["class", new migi.Obj("message", this, function () {
        return 'cp-message' + (this.message ? '' : 'fn-hide');
      })]], [new migi.Obj("message", this, function () {
        return this.message;
      })])]);
    }
  }, {
    key: "message",
    set: function set(v) {
      this.__setBind("message", v);this.__data("message");
    },
    get: function get() {
      return this.__getBind("message");
    }
  }]);

  return HotPic;
}(migi.Component);

migi.name(HotPic, "HotPic");exports.default = HotPic;

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _authorTemplate = __webpack_require__(14);

var _authorTemplate2 = _interopRequireDefault(_authorTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var seq = ['ge', 'qu', 'ci', 'cv', 'hun'];

var HotAuthor = function (_migi$Component) {
  _inherits(HotAuthor, _migi$Component);

  function HotAuthor() {
    var _ref;

    _classCallCheck(this, HotAuthor);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = HotAuthor.__proto__ || Object.getPrototypeOf(HotAuthor)).call.apply(_ref, [this].concat(data)));

    _this.dataList = _this.props.dataList;
    return _this;
  }

  _createClass(HotAuthor, [{
    key: 'click',
    value: function click(e, vd, tvd) {
      e.preventDefault();
      var href = tvd.props.href;
      var title = tvd.props.title;
      jsBridge.pushWindow(href, {
        title: title
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "cp-hotauthor"], ["onClick", [[{ "a": { "_v": true } }, new migi.Cb(this, this.click)]]]], [new migi.Obj("dataList", this, function () {
        return this.dataList && this.dataList.length ? migi.createVd("ul", [], [this.dataList.map(function (item) {
          var type = [];
          if (item.Authortype) {
            for (var i = 0, len = item.Authortype.length; i < len; i++) {
              var code = _authorTemplate2.default.code2Data[item.Authortype[i].AuthorTypeID].css;
              if (code && type.indexOf(code) === -1) {
                type.push(code);
              }
            }
          }
          migi.sort(type, function (a, b) {
            if (seq.indexOf(a) === -1) {
              return true;
            }
            if (seq.indexOf(b) === -1) {
              return false;
            }
            return seq.indexOf(a) > seq.indexOf(b);
          });
          var url = '/author.html?authorID=' + item.AuthorID;
          return migi.createVd("li", [], [migi.createVd("a", [["href", url], ["class", "pic"], ["title", item.AuthorName]], [migi.createVd("img", [["src", _util2.default.autoSsl(_util2.default.img120_120_80(item.Head_url || '/src/common/head.png'))]]), type.slice(0, 2).map(function (item) {
            return migi.createVd("b", [["class", 'cp-author-type-' + item]]);
          })]), migi.createVd("a", [["href", url], ["class", "txt"], ["title", item.AuthorName]], [migi.createVd("span", [["class", "name"]], [item.AuthorName]), migi.createVd("span", [["class", "fans"]], ["粉丝 ", _util2.default.abbrNum(item.FansNumber)]), migi.createVd("span", [["class", "comment"]], ["留言 ", _util2.default.abbrNum(item.Popular)])]), migi.createVd("div", [["class", "info"]], ["合作", _util2.default.abbrNum(item.CooperationTimes), "次"])]);
        }), this.props.more ? migi.createVd("li", [["class", "more"]], [migi.createVd("a", [["href", this.props.more], ["title", "圈关系"]], ["查看更多"])]) : '']) : migi.createVd("div", [["class", "empty"]], [this.props.empty || '暂无数据']);
      })]);
    }
  }, {
    key: 'dataList',
    set: function set(v) {
      this.__setBind("dataList", v);this.__data("dataList");
    },
    get: function get() {
      return this.__getBind("dataList");
    }
  }]);

  return HotAuthor;
}(migi.Component);

migi.name(HotAuthor, "HotAuthor");exports.default = HotAuthor;

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, exports) {

module.exports = {"name":"zhuanquan-h5","version":"0.2.3","dependencies":{"anima-querystring":"~2.0.0","anima-yocto-ajax":"~2.0.4","bignumber.js":"~4.1.0","migi":"~3.9.3","migi-es6-shim":"~0.34.1"},"devDependencies":{"autoprefixer-loader":"^3.2.0","babel-core":"^6.26.0","babel-loader":"^6.4.1","babel-preset-es2015":"^6.24.1","css-loader":"^0.28.7","extract-text-webpack-plugin":"^2.1.0","file-loader":"^0.10.1","glob":"^7.1.2","html-withimg-loader":"^0.1.16","json-loader":"^0.5.4","less":"^2.7.2","less-loader":"^3.0.0","migi-loader":"^3.8.0","url-loader":"^0.5.9","webpack":"^3.7.1","webpack-dev-server":"2.4.2","webstorm-disable-index":"^1.2.0"},"scripts":{"build-src":"export NODE_ENV=production && rm -rf ./www && webpack && npm run img && npm run pre-src && npm run preRender","build":"export NODE_ENV=production && rm -rf ./www && webpack -p && npm run img && npm run pre && npm run preRender","build-dev-src":"export NODE_ENV=dev && rm -rf ./www && webpack && npm run img && npm run pre-src && npm run preRender","build-dev":"export NODE_ENV=dev && rm -rf ./www && webpack -p && npm run img && npm run pre && npm run preRender","img":"webpack --config webpack.img.js","pre-src":"webpack --config webpack.pre.js","pre":"webpack -p --config webpack.pre.js","preRender":"node pre","mock":"export NODE_ENV=mock && webpack-dev-server --host 0.0.0.0 --port 8080","dev":"export NODE_ENV=dev && webpack-dev-server --host 0.0.0.0 --port 8080","zip":"rm -rf dist && mkdir dist && cd www && zip -r ../dist/h5.zip *","pack-src":"npm run build-src && npm run zip","pack":"npm run build && npm run zip","pack-dev-src":"npm run build-dev-src && npm run zip","pack-dev":"npm run build-dev && npm run zip"}}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HotWork = function (_migi$Component) {
  _inherits(HotWork, _migi$Component);

  function HotWork() {
    var _ref;

    _classCallCheck(this, HotWork);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = HotWork.__proto__ || Object.getPrototypeOf(HotWork)).call.apply(_ref, [this].concat(data)));

    _this.dataList = _this.props.dataList;
    return _this;
  }

  _createClass(HotWork, [{
    key: "click",
    value: function click(e, vd, tvd) {
      e.preventDefault();
      var href = tvd.props.href;
      var title = tvd.props.title;
      jsBridge.pushWindow(href, {
        title: title
      });
    }
  }, {
    key: "render",
    value: function render() {
      return migi.createVd("div", [["class", "cp-hotwork"], ["onClick", [[{ "a": { "_v": true } }, new migi.Cb(this, this.click)]]]], [new migi.Obj("dataList", this, function () {
        return this.dataList && this.dataList.length ? migi.createVd("ul", [], [this.dataList.map(function (item) {
          var url = "/works.html?worksID=" + item.WorksID;
          return migi.createVd("li", [], [migi.createVd("a", [["href", url], ["class", "pic"], ["title", item.Title]], [migi.createVd("img", [["src", _util2.default.autoSsl(_util2.default.img200_200_80(item.cover_Pic)) || '/src/common/blank.png']]), migi.createVd("span", [["class", "type"]], ["原创音乐"]), migi.createVd("span", [["class", "num"]], [_util2.default.abbrNum(item.Popular)]), item.WorkState === 2 || item.WorkState === 3 ? migi.createVd("span", [["class", "state"]], ["填坑中"]) : '']), migi.createVd("a", [["href", url], ["class", "txt"], ["title", item.Title]], [migi.createVd("span", [], [item.Title]), migi.createVd("span", [["class", "author"]], [(item.SingerName || []).join(' ')])])]);
        }), this.props.more ? migi.createVd("li", [["class", "more"]], [migi.createVd("a", [["href", this.props.more], ["title", "全部作品"]], ["查看更多"])]) : '']) : migi.createVd("div", [["class", "empty"]], ["暂无数据"]);
      })]);
    }
  }, {
    key: "dataList",
    set: function set(v) {
      this.__setBind("dataList", v);this.__data("dataList");
    },
    get: function get() {
      return this.__getBind("dataList");
    }
  }]);

  return HotWork;
}(migi.Component);

migi.name(HotWork, "HotWork");exports.default = HotWork;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _WorksTypeEnum = __webpack_require__(12);

var _WorksTypeEnum2 = _interopRequireDefault(_WorksTypeEnum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HotMusicAlbum = function (_migi$Component) {
  _inherits(HotMusicAlbum, _migi$Component);

  function HotMusicAlbum() {
    var _ref;

    _classCallCheck(this, HotMusicAlbum);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = HotMusicAlbum.__proto__ || Object.getPrototypeOf(HotMusicAlbum)).call.apply(_ref, [this].concat(data)));

    _this.dataList = _this.props.dataList;
    return _this;
  }

  _createClass(HotMusicAlbum, [{
    key: 'click',
    value: function click(e, vd, tvd) {
      e.preventDefault();
      var href = tvd.props.href;
      var title = tvd.props.title;
      jsBridge.pushWindow(href, {
        title: title
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "cp-hotmusicalbum"], ["onClick", [[{ "a": { "_v": true } }, new migi.Cb(this, this.click)]]]], [new migi.Obj("dataList", this, function () {
        return this.dataList && this.dataList.length ? migi.createVd("ul", [], [this.dataList.map(function (item) {
          var url = '/works.html?worksID=' + item.WorksID;
          return migi.createVd("li", [], [migi.createVd("b", [["class", "bg"]]), migi.createVd("a", [["href", url], ["class", "pic"], ["title", item.Title]], [migi.createVd("img", [["src", _util2.default.autoSsl(_util2.default.img200_200_80(item.cover_Pic || '/src/common/blank.png'))]]), migi.createVd("span", [["class", "type"]], [_WorksTypeEnum2.default.NAME[item.WorkType]]), migi.createVd("span", [["class", "num"]], [_util2.default.abbrNum(item.Popular)]), item.WorkState === 2 || item.WorkState === 3 ? migi.createVd("span", [["class", "state"]], ["填坑中"]) : '']), migi.createVd("a", [["href", url], ["class", "txt"], ["title", item.Title]], [migi.createVd("span", [], [item.Title]), migi.createVd("span", [["class", "author"]], [(item.SingerName || []).join(' ')])])]);
        }), this.props.more ? migi.createVd("li", [["class", "more"]], [migi.createVd("a", [["href", this.props.more], ["title", "全部作品"]], ["查看更多"])]) : '']) : migi.createVd("div", [["class", "empty"]], ["暂无数据"]);
      })]);
    }
  }, {
    key: 'dataList',
    set: function set(v) {
      this.__setBind("dataList", v);this.__data("dataList");
    },
    get: function get() {
      return this.__getBind("dataList");
    }
  }]);

  return HotMusicAlbum;
}(migi.Component);

migi.name(HotMusicAlbum, "HotMusicAlbum");exports.default = HotMusicAlbum;

/***/ }),
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(80);

__webpack_require__(81);

var _net = __webpack_require__(1);

var _net2 = _interopRequireDefault(_net);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _BotNav = __webpack_require__(82);

var _BotNav2 = _interopRequireDefault(_BotNav);

var _TopNav = __webpack_require__(83);

var _TopNav2 = _interopRequireDefault(_TopNav);

var _Find = __webpack_require__(84);

var _Find2 = _interopRequireDefault(_Find);

var _Circling = __webpack_require__(87);

var _Circling2 = _interopRequireDefault(_Circling);

var _Follow = __webpack_require__(88);

var _Follow2 = _interopRequireDefault(_Follow);

var _My = __webpack_require__(91);

var _My2 = _interopRequireDefault(_My);

var _ImageView = __webpack_require__(9);

var _ImageView2 = _interopRequireDefault(_ImageView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jsBridge.ready(function () {
  jsBridge.on('back', function (e) {
    e.preventDefault();
    jsBridge.moveTaskToBack();
  });
  jsBridge.on('refresh', function (e) {
    e.preventDefault();
    if (circling) {
      circling.refresh();
    }
    if (follow) {
      follow.refresh();
    }
    if (my) {
      my.refresh();
    }
    _net2.default.postJSON('/h5/my/message', function (res) {
      if (res.success) {
        topNav.setNum(res.data);
      }
    });
  });
  jsBridge.on('resume', function (e) {
    var data = e.data;
    if (data && data.message) {
      _net2.default.postJSON('/h5/my/message', function (res) {
        if (res.success) {
          topNav.setNum(res.data);
        }
      });
    }
  });

  var topNav = migi.preExist(migi.createCp(_TopNav2.default, []), '#page');

  if (_util2.default.isLogin()) {
    _net2.default.postJSON('/h5/my/message', function (res) {
      if (res.success) {
        topNav.setNum(res.data);
      }
    });
  }

  var botNav = migi.preExist(migi.createCp(_BotNav2.default, []), '#page');
  migi.preExist(migi.createCp(_ImageView2.default, [["ref", "imageView"]]), '#page');

  var loginInfo = void 0;
  jsBridge.delPreference('userInfo');
  jsBridge.delPreference('bonusPoint');
  jsBridge.getPreference('loginInfo', function (res) {
    if (!res) {
      return;
    }
    loginInfo = res;
    migi.eventBus.emit('LOGIN', loginInfo);
    migi.eventBus.emit('USER_INFO', loginInfo.userInfo);
  });

  var find = migi.preExist(migi.createCp(_Find2.default, []), '#page');
  var my = void 0;
  var circling = void 0;
  var follow = void 0;
  var last = find;

  botNav.on('change', function (i) {
    last.hide();
    if (i === 0) {
      if (!find) {
        find = migi.render(migi.createCp(_Find2.default, []), '#page');
      }
      last = find;
    } else if (i === 1) {
      if (!circling) {
        circling = migi.render(migi.createCp(_Circling2.default, []), '#page');
      }
      last = circling;
    } else if (i === 2) {
      if (!follow) {
        follow = migi.render(migi.createCp(_Follow2.default, []), '#page');
      }
      last = follow;
    } else if (i === 3) {
      if (!my) {
        my = migi.render(migi.createCp(_My2.default, [["loginInfo", loginInfo]]), '#page');
      }
      last = my;
    }
    last.show();
  });
});

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index.html";

/***/ }),
/* 81 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var rel = 0;

var BotNav = function (_migi$Component) {
  _inherits(BotNav, _migi$Component);

  function BotNav() {
    var _ref;

    _classCallCheck(this, BotNav);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = BotNav.__proto__ || Object.getPrototypeOf(BotNav)).call.apply(_ref, [this].concat(data)));

    var self = _this;
    self.on(migi.Event.DOM, function () {
      migi.eventBus.on('CLICK_MENU_USER', function () {
        if (rel !== 3) {
          rel = 3;
          $(self.element).find('.cur').removeClass('cur');
          $(self.element).find('.my').addClass('cur');
          self.emit('change', rel);
        }
      });
    });
    return _this;
  }

  _createClass(BotNav, [{
    key: 'click',
    value: function click(e, vd, tvd) {
      if (tvd.props.class === 'new') {
        if (!_util2.default.isLogin()) {
          migi.eventBus.emit('NEED_LOGIN');
          return;
        }
        jsBridge.pushWindow('/subpost.html', {
          title: '画圈'
        });
        return;
      }
      var $elem = $(tvd.element);
      if ($elem.hasClass('cur')) {
        return;
      }
      $(vd.element).find('.cur').removeClass('cur');
      $elem.addClass('cur');
      rel = tvd.props.rel;
      this.emit('change', rel);
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "bot-nav"], ["onClick", [[{ "li": { "_v": true } }, new migi.Cb(this, this.click)]]]], [migi.createVd("ul", [], [migi.createVd("li", [["class", "find cur"], ["rel", 0]], [migi.createVd("b", [["class", "icon"]]), migi.createVd("span", [], ["发现"])]), migi.createVd("li", [["class", "circling"], ["rel", 1]], [migi.createVd("b", [["class", "icon"]]), migi.createVd("span", [], ["转圈"])]), migi.createVd("li", [["class", "new"]], [migi.createVd("b", [["class", "icon"]])]), migi.createVd("li", [["class", "follow"], ["rel", 2]], [migi.createVd("b", [["class", "icon"]]), migi.createVd("span", [], ["关注"])]), migi.createVd("li", [["class", "my"], ["rel", 3]], [migi.createVd("b", [["class", "icon"]]), migi.createVd("span", [], ["我的"])])])]);
    }
  }]);

  return BotNav;
}(migi.Component);

migi.name(BotNav, "BotNav");exports.default = BotNav;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _net = __webpack_require__(1);

var _net2 = _interopRequireDefault(_net);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pack = __webpack_require__(35);

var loading = void 0;

var TopNav = function (_migi$Component) {
  _inherits(TopNav, _migi$Component);

  function TopNav() {
    var _ref;

    _classCallCheck(this, TopNav);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = TopNav.__proto__ || Object.getPrototypeOf(TopNav)).call.apply(_ref, [this].concat(data)));

    var self = _this;
    self.on(migi.Event.DOM, function () {
      if (jsBridge.appVersoin) {
        $(self.ref.version.element).text(jsBridge.appVersoin + '~' + pack.version);
      }
      jsBridge.getPreference('loginInfo', function (loginInfo) {
        if (!loginInfo) {
          return;
        }
        var userInfo = loginInfo.userInfo;
        if (userInfo) {
          self.name = userInfo.NickName;
          self.authorName = userInfo.AuthorName;
          self.isAuthor = userInfo.ISAuthor;
          self.head = userInfo.Head_Url;
          self.isPublic = userInfo.ISOpen;
          self.isLogin = true;
          $.cookie('isLogin', true);
          $.cookie('uid', userInfo.UID);
        }
      });
      migi.eventBus.on('USER_INFO', function (userInfo) {
        if (!userInfo) {
          return;
        }
        self.name = userInfo.NickName;
        self.authorName = userInfo.AuthorName;
        self.isAuthor = userInfo.ISAuthor;
        self.head = userInfo.Head_Url;
        self.isPublic = userInfo.ISOpen;
        self.isLogin = true;
        $.cookie('isLogin', true);
        $.cookie('uid', userInfo.UID);
      });
      migi.eventBus.on('LOGIN_OUT', function () {
        self.isLogin = false;
        self.messageNum = 0;
        $.cookie('isLogin', false);
        $.cookie('uid', null);
      });
    });
    return _this;
  }

  _createClass(TopNav, [{
    key: 'setNum',
    value: function setNum(data) {
      this.messageNum = data.Count;
    }
  }, {
    key: 'click',
    value: function click() {
      if (loading) {
        return;
      }
      loading = true;
      var self = this;
      _net2.default.postJSON('/h5/my/altSettle', { public: !self.isPublic }, function (res) {
        if (res.success) {
          self.isPublic = !self.isPublic;
          jsBridge.getPreference('loginInfo', function (loginInfo) {
            if (!loginInfo || !loginInfo.userInfo) {
              return;
            }
            loginInfo.userInfo.ISOpen = self.isPublic;
            jsBridge.setPreference('loginInfo', JSON.stringify(loginInfo));
          });
        } else {
          jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
        }
        loading = false;
      }, function (res) {
        jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
        loading = false;
      });
    }
  }, {
    key: 'clickMessage',
    value: function clickMessage() {
      jsBridge.pushWindow('/message.html', {
        title: '圈消息'
      });
    }
  }, {
    key: 'clickUser',
    value: function clickUser() {
      migi.eventBus.emit('CLICK_MENU_USER');
    }
  }, {
    key: 'clickTop',
    value: function clickTop() {
      $(this.element).toggleClass('focus');
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "top-nav"], ["id", "topNav"], ["onClick", new migi.Cb(this, this.clickTop)]], [migi.createVd("b", [["class", "logo"]]), migi.createVd("span", [["class", "version"], ["ref", "version"]], [pack.version]), migi.createVd("div", [["class", new migi.Obj("isLogin", this, function () {
        return 'message' + (this.isLogin ? '' : ' fn-hide');
      })], ["onClick", new migi.Cb(this, this.clickMessage)]], [migi.createVd("span", [], [new migi.Obj("messageNum", this, function () {
        return this.messageNum || '';
      })])]), migi.createVd("span", [["class", new migi.Obj(["isLogin", "isAuthor"], this, function () {
        return 'public' + (this.isLogin && this.isAuthor ? '' : ' fn-hide');
      })], ["onClick", new migi.Cb(this, this.click)]], ["[", new migi.Obj("isPublic", this, function () {
        return this.isPublic ? '切换到马甲' : '切换到作者身份';
      }), "]"]), migi.createVd("div", [["class", "user"], ["onClick", new migi.Cb(this, this.clickUser)]], [migi.createVd("span", [["class", new migi.Obj("isPublic", this, function () {
        return 'name' + (this.isPublic ? ' public' : '');
      })]], [new migi.Obj(["isLogin", "isPublic", "authorName", "name"], this, function () {
        return this.isLogin ? this.isPublic ? this.authorName : this.name : '';
      })]), migi.createVd("img", [["src", new migi.Obj(["isLogin", "head"], this, function () {
        return this.isLogin ? _util2.default.autoSsl(_util2.default.img64_64_80(this.head)) || 'src/common/head.png' : 'src/common/head.png';
      })]])])]);
    }
  }, {
    key: 'isLogin',
    set: function set(v) {
      this.__setBind("isLogin", v);this.__data("isLogin");
    },
    get: function get() {
      return this.__getBind("isLogin");
    }
  }, {
    key: 'isPublic',
    set: function set(v) {
      this.__setBind("isPublic", v);this.__data("isPublic");
    },
    get: function get() {
      return this.__getBind("isPublic");
    }
  }, {
    key: 'name',
    set: function set(v) {
      this.__setBind("name", v);this.__data("name");
    },
    get: function get() {
      return this.__getBind("name");
    }
  }, {
    key: 'head',
    set: function set(v) {
      this.__setBind("head", v);this.__data("head");
    },
    get: function get() {
      return this.__getBind("head");
    }
  }, {
    key: 'isAuthor',
    set: function set(v) {
      this.__setBind("isAuthor", v);this.__data("isAuthor");
    },
    get: function get() {
      return this.__getBind("isAuthor");
    }
  }, {
    key: 'authorName',
    set: function set(v) {
      this.__setBind("authorName", v);this.__data("authorName");
    },
    get: function get() {
      return this.__getBind("authorName");
    }
  }, {
    key: 'messageNum',
    set: function set(v) {
      this.__setBind("messageNum", v);this.__data("messageNum");
    },
    get: function get() {
      return this.__getBind("messageNum");
    }
  }]);

  return TopNav;
}(migi.Component);

migi.name(TopNav, "TopNav");exports.default = TopNav;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _net = __webpack_require__(1);

var _net2 = _interopRequireDefault(_net);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _Banner = __webpack_require__(85);

var _Banner2 = _interopRequireDefault(_Banner);

var _HotCircle = __webpack_require__(86);

var _HotCircle2 = _interopRequireDefault(_HotCircle);

var _HotWork = __webpack_require__(36);

var _HotWork2 = _interopRequireDefault(_HotWork);

var _HotMusicAlbum = __webpack_require__(37);

var _HotMusicAlbum2 = _interopRequireDefault(_HotMusicAlbum);

var _HotAuthor = __webpack_require__(25);

var _HotAuthor2 = _interopRequireDefault(_HotAuthor);

var _HotPlayList = __webpack_require__(17);

var _HotPlayList2 = _interopRequireDefault(_HotPlayList);

var _HotPic = __webpack_require__(18);

var _HotPic2 = _interopRequireDefault(_HotPic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var take = 30;
var skip = 10;
var take2 = 10;
var skip2 = 0;
var size2 = 0;
var loading = void 0;
var loadEnd = void 0;
var loading2 = void 0;
var loadEnd2 = void 0;
var cur = 'ma';
var type = void 0;
var hotPlayList = void 0;
var hotPic = void 0;
var visible = void 0;
var scrollY = 0;

var Find = function (_migi$Component) {
  _inherits(Find, _migi$Component);

  function Find() {
    var _ref;

    _classCallCheck(this, Find);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Find.__proto__ || Object.getPrototypeOf(Find)).call.apply(_ref, [this].concat(data)));

    var self = _this;
    self.on(migi.Event.DOM, function () {
      visible = true;
      _net2.default.postJSON('/h5/find/index', function (res) {
        if (res.success) {
          self.setData(res.data);
        } else {
          jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
        }
      }, function (res) {
        jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
      });
    });
    return _this;
  }

  _createClass(Find, [{
    key: 'show',
    value: function show() {
      $(this.element).removeClass('fn-hide');
      $(window).scrollTop(scrollY);
      visible = true;
    }
  }, {
    key: 'hide',
    value: function hide() {
      $(this.element).addClass('fn-hide');
      visible = false;
    }
  }, {
    key: 'setData',
    value: function setData(data) {
      var self = this;

      self.bannerList = data.banner;
      self.hotCircleList = data.hotCircleList;
      self.hotWorkList = data.hotWorkList;
      self.hotMusicAlbumList = data.hotMusicAlbumList;
      self.hotAuthorList = data.hotAuthorList;
      self.hotPlayList = data.hotPlayList;
      self.hotPhotoAlbumList = data.hotPhotoAlbumList;
      self.hotPicList = data.hotPicList;

      self.hasData = true;

      var $window = $(window);
      var WIN_HEIGHT = $window.height();
      var showType = void 0;
      $window.on('scroll', function () {
        if (showType) {
          if (!visible) {
            return;
          }
          if (cur === 'ma' && (loading || loadEnd)) {
            return;
          }
          if (cur === 'pic' && (loading2 || loadEnd2)) {
            return;
          }
          var _WIN_HEIGHT = $window.height();
          var HEIGHT = $(document.body).height();
          scrollY = $window.scrollTop();
          var bool = void 0;
          bool = scrollY + _WIN_HEIGHT + 30 > HEIGHT;
          if (bool) {
            if (cur === 'ma') {
              self.load();
            } else if (cur === 'pic') {
              self.load2();
            }
          }
        } else {
          var _HEIGHT = $(document.body).height();
          scrollY = $window.scrollTop();
          var _bool = scrollY + WIN_HEIGHT + 30 > _HEIGHT;
          if (_bool) {
            showType = true;
            var p1 = self.ref.p1;
            type = migi.createVd("ul", [["class", "type fn-clear"], ["ref", "type"], ["onClick", [[{ "li": { "_v": true } }, self.clickType.bind(self)]]]], [migi.createVd("li", [["class", "ma cur"], ["rel", "ma"]], ["音乐"]), migi.createVd("li", [["class", "pic"], ["rel", "pic"]], ["美图"])]);
            type.before(p1.element);
            hotPlayList = migi.createCp(_HotPlayList2.default, [["ref", "hotPlayList"], ["dataList", self.hotPlayList.data]]);
            hotPlayList.before(p1.element);
            p1.clean();
            self.ref.p2.clean();
          }
        }
      });
    }
  }, {
    key: 'load',
    value: function load() {
      var self = this;
      if (loading || loadEnd) {
        return;
      }
      loading = true;
      hotPlayList.message = '正在加载...';
      _net2.default.postJSON('/h5/find/hotPlayList', { skip: skip, take: take }, function (res) {
        if (res.success) {
          var data = res.data;
          skip += take;
          hotPlayList.appendData(data.data);
          if (skip >= data.Size) {
            loadEnd = true;
            hotPlayList.message = '已经到底了';
          } else {
            hotPlayList.message = '';
          }
        } else {
          jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
        }
        loading = false;
      }, function (res) {
        jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
        loading = false;
      });
    }
  }, {
    key: 'load2',
    value: function load2() {
      var self = this;
      if (loading2 || loadEnd2) {
        return;
      }
      loading2 = true;
      hotPic.message = '正在加载...';
      _net2.default.postJSON('/h5/find/hotPicList', { skip: skip2, take: take2 }, function (res) {
        if (res.success) {
          var data = res.data;
          skip2 += take2;
          size2 = data.Size;
          if (skip2 >= data.Size) {
            loadEnd2 = true;
            hotPic.message = '已经到底了';
          } else {
            hotPic.message = '正在渲染图片....';
          }
          hotPic.appendData(data.data);
        } else {
          jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
        }
      }, function (res) {
        jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
      });
    }
  }, {
    key: 'clickChangeWork',
    value: function clickChangeWork() {
      var self = this;
      _net2.default.postJSON('/h5/find/hotWorkList', { skip: 0, take: 10 }, function (res) {
        if (res.success) {
          self.ref.hotWork.dataList = res.data;
        } else {
          jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
        }
      }, function (res) {
        jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
      });
    }
  }, {
    key: 'clickType',
    value: function clickType(e, vd, tvd) {
      var $li = $(tvd.element);
      if (!$li.hasClass('cur')) {
        var self = this;
        $(vd.element).find('li').toggleClass('cur');
        cur = tvd.props.rel;
        if (cur === 'ma') {
          hotPic.hide();
          hotPlayList.show();
        } else {
          if (!hotPic) {
            hotPic = migi.render(migi.createCp(_HotPic2.default, [["ref", "hotPic"], ["message", "正在渲染图片..."], ["dataList", self.hotPicList.data]]));
            hotPic.on('poolEnd', function () {
              loading2 = false;
              hotPic.message = skip2 >= size2 ? '已经到底了' : '';
            });
            hotPic.after(hotPlayList.element);
          }
          hotPic.show();
          hotPlayList.hide();
        }
      }
    }
  }, {
    key: 'genDom',
    value: function genDom() {
      var self = this;
      return migi.createVd("div", [["ref", "root"]], [migi.createCp(_Banner2.default, [["ref", "banner"], ["dataList", self.bannerList]]), migi.createVd("h4", [], ["热门圈子"]), migi.createCp(_HotCircle2.default, [["ref", "hotCircle"], ["dataList", self.hotCircleList], ["more", "/allcircles.html"]]), migi.createVd("h4", [], ["热门作品", migi.createVd("small", [["ref", "changeWork"], ["onClick", self.clickChangeWork.bind(self)]], ["换一换"])]), migi.createCp(_HotWork2.default, [["ref", "hotWork"], ["dataList", self.hotWorkList], ["more", "/allworks.html"]]), migi.createVd("h4", [], ["热门专辑"]), migi.createCp(_HotMusicAlbum2.default, [["ref", "hotMusicAlbum"], ["dataList", self.hotMusicAlbumList.data], ["more", "/allalbums.html"]]), migi.createVd("h4", [], ["入驻作者"]), migi.createCp(_HotAuthor2.default, [["ref", "hotAuthor"], ["dataList", self.hotAuthorList.data], ["more", "/allauthors.html"]]), migi.createVd("div", [["class", "fn-placeholder-tags"], ["ref", "p1"]]), migi.createVd("div", [["class", "fn-placeholder"], ["ref", "p2"]])]);
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "find"]], [new migi.Obj("hasData", this, function () {
        return this.hasData ? this.genDom() : migi.createVd("div", [], [migi.createVd("div", [["class", "fn-placeholder"]]), migi.createVd("div", [["class", "fn-placeholder-tag"]]), migi.createVd("div", [["class", "fn-placeholder-circles"]]), migi.createVd("div", [["class", "fn-placeholder-tag"]]), migi.createVd("div", [["class", "fn-placeholder-squares"]]), migi.createVd("div", [["class", "fn-placeholder-tag"]]), migi.createVd("div", [["class", "fn-placeholder"]])]);
      })]);
    }
  }, {
    key: 'hasData',
    set: function set(v) {
      this.__setBind("hasData", v);this.__data("hasData");
    },
    get: function get() {
      return this.__getBind("hasData");
    }
  }]);

  return Find;
}(migi.Component);

migi.name(Find, "Find");exports.default = Find;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var interval = void 0;

var Banner = function (_migi$Component) {
  _inherits(Banner, _migi$Component);

  function Banner() {
    var _ref;

    _classCallCheck(this, Banner);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Banner.__proto__ || Object.getPrototypeOf(Banner)).call.apply(_ref, [this].concat(data)));

    var self = _this;
    self.dataList = self.props.dataList || [];
    self.on(migi.Event.DOM, function () {
      self.addInterval();
    });
    return _this;
  }

  _createClass(Banner, [{
    key: "clickTag",
    value: function clickTag(e, vd, tvd) {
      this.index = tvd.props.rel;
      this.setOffset(Math.floor(this.index * $(window).width()));
      this.addInterval();
    }
  }, {
    key: "setOffset",
    value: function setOffset(x) {
      var $list = $(this.ref.list.element);
      $list.css('-moz-transform', 'translateX(-' + x + 'px)');
      $list.css('-webkit-transform', 'translateX(-' + x + 'px)');
      $list.css('transform', 'translateX(-' + x + 'px)');
    }
  }, {
    key: "addInterval",
    value: function addInterval() {
      if (interval) {
        clearInterval(interval);
      }
      var self = this;
      interval = setInterval(function () {
        self.index++;
        if (self.index >= self.dataList.length) {
          self.index = 0;
        }
        self.setOffset(self.index * $(window).width());
      }, 5000);
    }
  }, {
    key: "left",
    value: function left() {
      this.index++;
      if (this.index >= this.dataList.length) {
        this.index = this.dataList.length - 1;
      }
      this.setOffset(Math.floor(this.index * $(window).width()));
      this.addInterval();
    }
  }, {
    key: "right",
    value: function right() {
      this.index--;
      if (this.index < 0) {
        this.index = 0;
      }
      this.setOffset(Math.floor(this.index * $(window).width()));
      this.addInterval();
    }
  }, {
    key: "click",
    value: function click(e, vd, tvd) {
      e.preventDefault();
      var url = tvd.props.href;
      var title = tvd.props.title;
      jsBridge.pushWindow(url, {
        title: title
      });
    }
  }, {
    key: "render",
    value: function render() {
      return migi.createVd("div", [["class", "banner"], ["onSwipeLeft", new migi.Cb(this, this.left)], ["onSwipeRight", new migi.Cb(this, this.right)], ["onClick", [[{ "a": { "_v": true } }, new migi.Cb(this, this.click)]]]], [migi.createVd("ul", [["class", "list fn-clear"], ["ref", "list"], ["style", new migi.Obj("dataList", this, function () {
        return 'width:' + this.dataList.length * 100 + '%';
      })]], [new migi.Obj("dataList", this, function () {
        return this.dataList.map(function (item) {
          return migi.createVd("li", [], [migi.createVd("a", [["href", item.url], ["target", "_blank"], ["title", item.title]], [migi.createVd("img", [["src", item.pic]])])]);
        });
      })]), migi.createVd("ul", [["class", "tags"], ["ref", "tags"], ["onClick", [[{ "li": { "_v": true } }, new migi.Cb(this, this.clickTag)]]]], [new migi.Obj(["index", "dataList"], this, function () {
        return (this.index, this.dataList).map(function (item, index) {
          return migi.createVd("li", [["class", index === this.index ? 'cur' : ''], ["rel", index]], [index + 1]);
        }.bind(this));
      })])]);
    }
  }, {
    key: "dataList",
    set: function set(v) {
      this.__setBind("dataList", v);this.__data("dataList");
    },
    get: function get() {
      return this.__getBind("dataList");
    }
  }, {
    key: "index",
    set: function set(v) {
      this.__setBind("index", v);this.__data("index");
    },
    get: function get() {
      if (this.__initBind("index")) this.__setBind("index", 0);return this.__getBind("index");
    }
  }]);

  return Banner;
}(migi.Component);

migi.name(Banner, "Banner");exports.default = Banner;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HotCircle = function (_migi$Component) {
  _inherits(HotCircle, _migi$Component);

  function HotCircle() {
    var _ref;

    _classCallCheck(this, HotCircle);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = HotCircle.__proto__ || Object.getPrototypeOf(HotCircle)).call.apply(_ref, [this].concat(data)));

    _this.dataList = _this.props.dataList;
    return _this;
  }

  _createClass(HotCircle, [{
    key: 'click',
    value: function click(e, vd, tvd) {
      e.preventDefault();
      var href = tvd.props.href;
      var title = tvd.props.title;
      jsBridge.pushWindow(href, {
        title: title
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "cp-hotcircle"], ["onClick", [[{ "a": { "_v": true } }, new migi.Cb(this, this.click)]]]], [new migi.Obj("dataList", this, function () {
        return this.dataList && this.dataList.length ? migi.createVd("ul", [], [this.dataList.map(function (item) {
          var url = '/circle.html?circleID=' + item.TagID;
          return migi.createVd("li", [], [migi.createVd("a", [["href", url], ["class", "pic"], ["title", item.TagName + '圈']], [migi.createVd("img", [["src", _util2.default.autoSsl(_util2.default.img288_288_80(item.TagCover)) || '//zhuanquan.xin/img/blank.png']])]), migi.createVd("a", [["href", url], ["class", "txt"], ["title", item.TagName + '圈']], [migi.createVd("span", [["class", "name"]], [item.TagName]), migi.createVd("span", [["class", "fans"]], ["成员", _util2.default.abbrNum(item.FansNumber)]), migi.createVd("span", [["class", "comment"]], ["画圈", _util2.default.abbrNum(item.Popular)])])]);
        }), this.props.more ? migi.createVd("li", [["class", "more"]], [migi.createVd("a", [["href", this.props.more], ["title", "全部圈子"]], ["查看更多"])]) : '']) : migi.createVd("div", [["class", "empty"]], ["暂无数据"]);
      })]);
    }
  }, {
    key: 'dataList',
    set: function set(v) {
      this.__setBind("dataList", v);this.__data("dataList");
    },
    get: function get() {
      return this.__getBind("dataList");
    }
  }]);

  return HotCircle;
}(migi.Component);

migi.name(HotCircle, "HotCircle");exports.default = HotCircle;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _net = __webpack_require__(1);

var _net2 = _interopRequireDefault(_net);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _HotPost = __webpack_require__(6);

var _HotPost2 = _interopRequireDefault(_HotPost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var take = 10;
var skip = take;
var ajax = void 0;
var loading = void 0;
var loadEnd = void 0;
var circleID = void 0;
var visible = void 0;
var scrollY = 0;

var Circling = function (_migi$Component) {
  _inherits(Circling, _migi$Component);

  function Circling() {
    var _ref;

    _classCallCheck(this, Circling);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Circling.__proto__ || Object.getPrototypeOf(Circling)).call.apply(_ref, [this].concat(data)));

    var self = _this;
    self.on(migi.Event.DOM, function () {
      visible = true;
      _net2.default.postJSON('/h5/circling/index', function (res) {
        if (res.success) {
          self.setData(res.data);
        } else {
          jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
        }
      }, function (res) {
        jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
      });
    });
    return _this;
  }

  _createClass(Circling, [{
    key: 'show',
    value: function show() {
      $(this.element).removeClass('fn-hide');
      $(window).scrollTop(scrollY);
      visible = true;
    }
  }, {
    key: 'hide',
    value: function hide() {
      $(this.element).addClass('fn-hide');
      visible = false;
    }
  }, {
    key: 'refresh',
    value: function refresh() {
      var self = this;
      if (self.hasData && visible) {
        self.ref.hotPost.setData();
        skip = 0;
        self.load();
      }
    }
  }, {
    key: 'setData',
    value: function setData(data) {
      var self = this;

      self.hotCircle = data.hotCircle;
      self.postList = data.postList;
      loadEnd = self.postList.Size <= take;

      self.hasData = true;

      var $window = $(window);
      $window.on('scroll', function () {
        if (!visible) {
          return;
        }
        self.checkMore($window);
      });
      if (loadEnd) {
        self.ref.hostPost.message = '已经到底了';
      }
    }
  }, {
    key: 'checkMore',
    value: function checkMore($window) {
      if (loading || loadEnd) {
        return;
      }
      var self = this;
      var WIN_HEIGHT = $window.height();
      var HEIGHT = $(document.body).height();
      scrollY = $window.scrollTop();
      var bool = void 0;
      bool = scrollY + WIN_HEIGHT + 30 > HEIGHT;
      if (bool) {
        self.load();
      }
    }
  }, {
    key: 'load',
    value: function load() {
      var self = this;
      if (loading || loadEnd) {
        return;
      }
      var hotPost = self.ref.hotPost;
      loading = true;
      hotPost.message = '正在加载...';
      if (ajax) {
        ajax.abort();
      }
      ajax = _net2.default.postJSON(circleID ? '/h5/circle/postList' : '/h5/circling/postList', { skip: skip, take: take, circleID: circleID }, function (res) {
        if (res.success) {
          var data = res.data;
          skip += take;
          hotPost.appendData(data.data);
          if (skip >= data.Size) {
            loadEnd = true;
            hotPost.message = '已经到底了';
          } else {
            hotPost.message = '';
          }
        } else {
          jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
        }
        loading = false;
      }, function (res) {
        jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
        loading = false;
      });
    }
  }, {
    key: 'clickTag',
    value: function clickTag(e, vd, tvd) {
      var $li = $(tvd.element);
      if (!$li.hasClass('cur')) {
        $(vd.element).find('.cur').removeClass('cur');
        $li.addClass('cur');
        circleID = tvd.props.rel;
        this.ref.hotPost.setData();
        skip = 0;
        this.load();
      }
    }
  }, {
    key: 'genDom',
    value: function genDom() {
      var self = this;
      return migi.createVd("div", [], [migi.createVd("ul", [["class", "circles"], ["onClick", [[{ "li": { "_v": true } }, self.clickTag.bind(self)]]]], [migi.createVd("li", [["class", "cur"]], ["全部"]), (self.hotCircle.data || []).map(function (item) {
        return migi.createVd("li", [["rel", item.TagID]], [item.TagName]);
      })]), migi.createVd("p", [["class", "cinfo"]], ["↑未来，这里将可以复选多个圈子一起逛哦↑"]), migi.createCp(_HotPost2.default, [["ref", "hotPost"], ["dataList", self.postList.data]])]);
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "circling"]], [new migi.Obj("hasData", this, function () {
        return this.hasData ? this.genDom() : migi.createVd("div", [], [migi.createVd("div", [["class", "fn-placeholder-tags"]]), migi.createVd("div", [["class", "fn-placeholder"]]), migi.createVd("div", [["class", "fn-placeholder"]])]);
      })]);
    }
  }, {
    key: 'hasData',
    set: function set(v) {
      this.__setBind("hasData", v);this.__data("hasData");
    },
    get: function get() {
      return this.__getBind("hasData");
    }
  }]);

  return Circling;
}(migi.Component);

migi.name(Circling, "Circling");exports.default = Circling;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _net = __webpack_require__(1);

var _net2 = _interopRequireDefault(_net);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _HotPost = __webpack_require__(6);

var _HotPost2 = _interopRequireDefault(_HotPost);

var _HotAuthor = __webpack_require__(25);

var _HotAuthor2 = _interopRequireDefault(_HotAuthor);

var _HotUser = __webpack_require__(89);

var _HotUser2 = _interopRequireDefault(_HotUser);

var _Circles = __webpack_require__(90);

var _Circles2 = _interopRequireDefault(_Circles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var take = 10;
var skip = take;
var loading = void 0;
var loadEnd = void 0;
var visible = void 0;
var scrollY = 0;

var Follow = function (_migi$Component) {
  _inherits(Follow, _migi$Component);

  function Follow() {
    var _ref;

    _classCallCheck(this, Follow);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Follow.__proto__ || Object.getPrototypeOf(Follow)).call.apply(_ref, [this].concat(data)));

    var self = _this;
    self.on(migi.Event.DOM, function () {
      visible = true;
      self.init();
      migi.eventBus.on('LOGIN_OUT', function () {
        self.hasData = false;
      });
      migi.eventBus.on('LOGIN', function () {
        if (!$(self.element).hasClass('fn-hide')) {
          self.show();
        }
      });
    });
    return _this;
  }

  _createClass(Follow, [{
    key: 'show',
    value: function show() {
      $(this.element).removeClass('fn-hide');
      $(window).scrollTop(scrollY);
      if (!this.hasData) {
        this.init();
      }
      visible = true;
    }
  }, {
    key: 'hide',
    value: function hide() {
      $(this.element).addClass('fn-hide');
      visible = false;
    }
  }, {
    key: 'refresh',
    value: function refresh() {
      var self = this;
      if (self.hasData && visible) {
        _net2.default.postJSON('/h5/follow/index', function (res) {
          if (res.success) {
            var data = res.data;
            self.ref.circles.dataList = data.hotCircle;
            self.ref.hotAuthor.dataList = data.follows.data;
            self.ref.hotUser.dataList = data.userFollows.data;
          } else if (res.code === 1000) {
            migi.eventBus.emit('NEED_LOGIN');
          } else {
            jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
          }
        }, function (res) {
          jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
        });
      }
    }
  }, {
    key: 'init',
    value: function init() {
      var self = this;
      _net2.default.postJSON('/h5/follow/index', function (res) {
        if (res.success) {
          self.setData(res.data);
        } else if (res.code === 1000) {
          migi.eventBus.emit('NEED_LOGIN');
        } else {
          jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
        }
      }, function (res) {
        jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
      });
    }
  }, {
    key: 'setData',
    value: function setData(data) {
      var self = this;

      self.hotCircle = data.hotCircle;
      self.follows = data.follows;
      self.userFollows = data.userFollows;
      self.postList = data.postList;
      loadEnd = self.postList.Size <= take;

      self.hasData = true;

      var $window = $(window);
      $window.on('scroll', function () {
        if (!visible) {
          return;
        }
        self.checkMore($window);
      });
      if (loadEnd) {
        self.ref.hotPost.message = '已经到底了';
      }
    }
  }, {
    key: 'checkMore',
    value: function checkMore($window) {
      if (loading || loadEnd) {
        return;
      }
      var self = this;
      var WIN_HEIGHT = $window.height();
      var HEIGHT = $(document.body).height();
      scrollY = $window.scrollTop();
      var bool = void 0;
      bool = scrollY + WIN_HEIGHT + 30 > HEIGHT;
      if (bool) {
        self.load();
      }
    }
  }, {
    key: 'load',
    value: function load() {
      var self = this;
      if (loading) {
        return;
      }
      var hotPost = self.ref.hotPost;
      loading = true;
      hotPost.message = '正在加载...';
      _net2.default.postJSON('/h5/follow/postList', { skip: skip, take: take }, function (res) {
        if (res.success) {
          var data = res.data;
          skip += take;
          hotPost.appendData(data.data);
          if (skip >= data.Size) {
            loadEnd = true;
            hotPost.message = '已经到底了';
          } else {
            hotPost.message = '';
          }
        } else {
          jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
        }
        loading = false;
      }, function (res) {
        jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
        loading = false;
      });
    }
  }, {
    key: 'click',
    value: function click(e, vd) {
      e.preventDefault();
      var url = vd.props.href;
      var title = vd.props.title;
      jsBridge.pushWindow(url, {
        title: title
      });
    }
  }, {
    key: 'click2',
    value: function click2(e, vd, tvd) {
      e.preventDefault();
      var url = tvd.props.href;
      var title = tvd.props.title;
      jsBridge.pushWindow(url, {
        title: title
      });
    }
  }, {
    key: 'genDom',
    value: function genDom() {
      var self = this;
      return migi.createVd("div", [], [migi.createVd("h4", [], ["关注话题"]), migi.createCp(_Circles2.default, [["ref", "circles"], ["dataList", self.hotCircle]]), migi.createVd("h4", [], ["关注作者"]), migi.createCp(_HotAuthor2.default, [["ref", "hotAuthor"], ["dataList", self.follows.data], ["empty", '你还没有关注作者哦，快去发现页看看有没有喜欢的作者吧！'], ["more", self.follows.Size > 10 ? '/relation.html' : '']]), migi.createVd("h4", [], ["关注圈er"]), migi.createCp(_HotUser2.default, [["ref", "hotUser"], ["dataList", self.userFollows.data], ["empty", '你还没有关注的圈er哦，快去转圈页看看有没有有趣的小伙伴吧~'], ["more", self.userFollows.Size > 10 ? '/relation.html?tag=follow' : '']]), migi.createVd("p", [], [migi.createVd("small", [], ["小提示："]), "互相关注和关注我的可以在 ", migi.createVd("a", [["href", "/relation.html"], ["title", "圈关系"], ["onClick", self.click.bind(self)]], ["圈关系"]), " 里查看"]), migi.createVd("h4", [], ["Ta们画的圈"]), migi.createCp(_HotPost2.default, [["ref", "hotPost"], ["dataList", self.postList.data]])]);
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "follow"]], [new migi.Obj("hasData", this, function () {
        return this.hasData ? this.genDom() : migi.createVd("div", [], [migi.createVd("div", [["class", "fn-placeholder-tags"]]), migi.createVd("div", [["class", "fn-placeholder-circles"]]), migi.createVd("div", [["class", "fn-placeholder-circles"]]), migi.createVd("div", [["class", "fn-placeholder"]]), migi.createVd("div", [["class", "fn-placeholder"]])]);
      })]);
    }
  }, {
    key: 'hasData',
    set: function set(v) {
      this.__setBind("hasData", v);this.__data("hasData");
    },
    get: function get() {
      return this.__getBind("hasData");
    }
  }]);

  return Follow;
}(migi.Component);

migi.name(Follow, "Follow");exports.default = Follow;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HotAuthor = function (_migi$Component) {
  _inherits(HotAuthor, _migi$Component);

  function HotAuthor() {
    var _ref;

    _classCallCheck(this, HotAuthor);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = HotAuthor.__proto__ || Object.getPrototypeOf(HotAuthor)).call.apply(_ref, [this].concat(data)));

    _this.dataList = _this.props.dataList;
    return _this;
  }

  _createClass(HotAuthor, [{
    key: 'click',
    value: function click(e, vd, tvd) {
      e.preventDefault();
      var href = tvd.props.href;
      var title = tvd.props.title;
      jsBridge.pushWindow(href, {
        title: title
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "cp-hotuser"], ["onClick", [[{ "a": { "_v": true } }, new migi.Cb(this, this.click)]]]], [new migi.Obj("dataList", this, function () {
        return this.dataList && this.dataList.length ? migi.createVd("ul", [], [this.dataList.map(function (item) {
          return migi.createVd("li", [], [migi.createVd("a", [["href", '/user.html?userID=' + item.UserID], ["class", "pic"], ["title", item.UserNickName]], [migi.createVd("img", [["src", _util2.default.autoSsl(_util2.default.img120_120_80(item.User_HeadUrl || '//zhuanquan.xin/img/head/8fd9055b7f033087e6337e37c8959d3e.png'))]])]), migi.createVd("a", [["href", '/user.html?userID=' + item.UserID], ["class", "txt"], ["title", item.UserNickName]], [migi.createVd("span", [["class", "name"]], [item.UserNickName])]), migi.createVd("div", [["class", "info"]], [item.followMe ? '互相关注' : ''])]);
        }), this.props.more ? migi.createVd("li", [["class", "more"]], [migi.createVd("a", [["href", this.props.more], ["title", "圈关系"]], ["查看更多"])]) : '']) : migi.createVd("div", [["class", "empty"]], [this.props.empty || '暂无数据']);
      })]);
    }
  }, {
    key: 'dataList',
    set: function set(v) {
      this.__setBind("dataList", v);this.__data("dataList");
    },
    get: function get() {
      return this.__getBind("dataList");
    }
  }]);

  return HotAuthor;
}(migi.Component);

migi.name(HotAuthor, "HotAuthor");exports.default = HotAuthor;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Circles = function (_migi$Component) {
  _inherits(Circles, _migi$Component);

  function Circles() {
    var _ref;

    _classCallCheck(this, Circles);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Circles.__proto__ || Object.getPrototypeOf(Circles)).call.apply(_ref, [this].concat(data)));

    _this.dataList = _this.props.dataList;
    return _this;
  }

  _createClass(Circles, [{
    key: "render",
    value: function render() {
      return migi.createVd("ul", [["class", "circles"], ["onClick", [[{ "a": { "_v": true } }, new migi.Cb(this, this.click)]]]], [new migi.Obj("dataList", this, function () {
        return (this.dataList || []).map(function (item) {
          return migi.createVd("li", [["rel", item.Cid]], [migi.createVd("a", [["href", '/circle.html?circleID=' + item.Cid], ["title", item.CirclingName + '圈']], [item.CirclingName])]);
        });
      })]);
    }
  }, {
    key: "dataList",
    set: function set(v) {
      this.__setBind("dataList", v);this.__data("dataList");
    },
    get: function get() {
      return this.__getBind("dataList");
    }
  }]);

  return Circles;
}(migi.Component);

migi.name(Circles, "Circles");exports.default = Circles;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _net = __webpack_require__(1);

var _net2 = _interopRequireDefault(_net);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _Profile = __webpack_require__(92);

var _Profile2 = _interopRequireDefault(_Profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var My = function (_migi$Component) {
  _inherits(My, _migi$Component);

  function My() {
    var _ref;

    _classCallCheck(this, My);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = My.__proto__ || Object.getPrototypeOf(My)).call.apply(_ref, [this].concat(data)));

    var self = _this;
    if (self.props.userInfo) {
      self.userInfo = self.props.userInfo;
      self.isLogin = true;
      self.hasData = true;
    }
    if (self.props.bonusPoint) {
      self.bonusPoint = self.props.bonusPoint;
    }
    self.on(migi.Event.DOM, function () {
      self.init();
      migi.eventBus.on('LOGIN', function (loginInfo) {
        self.setData(loginInfo);
      });
    });
    return _this;
  }

  _createClass(My, [{
    key: 'show',
    value: function show() {
      $(this.element).removeClass('fn-hide');
    }
  }, {
    key: 'hide',
    value: function hide() {
      $(this.element).addClass('fn-hide');
    }
  }, {
    key: 'init',
    value: function init() {
      var self = this;
      _net2.default.postJSON('/h5/my/index', function (res) {
        if (res.success) {
          var data = res.data;
          self.setData(data);
          jsBridge.setPreference('loginInfo', JSON.stringify(data));
        } else if (res.code === 1000) {
          self.isLogin = false;
          self.hasData = true;
          jsBridge.delPreference('loginInfo');
        } else {
          jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
        }
      }, function (res) {
        jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
      });
    }
  }, {
    key: 'setData',
    value: function setData(data) {
      var self = this;
      self.userInfo = data.userInfo;
      self.bonusPoint = data.bonusPoint;
      self.prize = data.prize;

      self.hasData = true;
      self.isLogin = true;

      var profile = self.ref.profile;
      profile.head = self.userInfo.Head_Url;
      profile.sname = self.userInfo.NickName;
      profile.sign = self.userInfo.User_Sign || '';

      var now = Date.now();
      var lastUpdateNickNameTime = data.lastUpdateNickNameTime;
      if (lastUpdateNickNameTime) {
        lastUpdateNickNameTime = new Date(lastUpdateNickNameTime);
      } else {
        lastUpdateNickNameTime = 0;
      }
      var updateNickNameTimeDiff = now - lastUpdateNickNameTime;
      var lastUpdateHeadTime = data.lastUpdateHeadTime;
      if (lastUpdateHeadTime) {
        lastUpdateHeadTime = new Date(lastUpdateHeadTime);
      } else {
        lastUpdateHeadTime = 0;
      }
      var updateHeadTimeDiff = now - lastUpdateHeadTime;

      profile.updateNickNameTimeDiff = updateNickNameTimeDiff;
      profile.updateHeadTimeDiff = updateHeadTimeDiff;

      if (self.bonusPoint && self.bonusPoint.ranking) {
        $(self.element).find('.bp .rank').html('\u5168\u7AD9\u6392\u540D ' + self.bonusPoint.ranking + ' \u540D');
      }
    }
  }, {
    key: 'clickWeibo',
    value: function clickWeibo() {
      var self = this;
      jsBridge.loginWeibo(function (res) {
        if (res.success) {
          jsBridge.showLoading('正在登录...');
          var openID = res.openID;
          var token = res.token;
          jsBridge.weiboLogin({ openID: openID, token: token }, function (res) {
            jsBridge.hideLoading();
            if (res.success) {
              var data = res.data;
              self.setData(data);
              migi.eventBus.emit('USER_INFO', data.userInfo);
              jsBridge.setPreference('loginInfo', JSON.stringify(data));
            } else {
              jsBridge.toast(res.message);
            }
          });
        } else {
          jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
        }
      });
    }
  }, {
    key: 'clickOut',
    value: function clickOut() {
      var self = this;
      _net2.default.postJSON('/h5/login/loginOut', function () {
        self.isLogin = false;
        migi.eventBus.emit('LOGIN_OUT');
        $.cookie('isLogin', null);
        jsBridge.delPreference('loginInfo');
        jsBridge.loginOut();
      }, function (res) {
        jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
      });
    }
  }, {
    key: 'clickLink',
    value: function clickLink(e, vd, tvd) {
      e.preventDefault();
      var url = tvd.props.href;
      var title = tvd.children[0];
      jsBridge.pushWindow(url, {
        title: title
      });
    }
  }, {
    key: 'clickPrize',
    value: function clickPrize(e, vd, tvd) {
      var $button = $(tvd.element);
      if ($button.hasClass('loading')) {
        return;
      }
      $button.addClass('loading');
      var cartID = tvd.props.rel;
      var idx = tvd.props.idx;
      _net2.default.postJSON('/h5/my/sendPrize', { cartID: cartID }, function (res) {
        if (res.success) {
          $button.replaceWith('<span>已确认发货</span>');
          jsBridge.getPreference('loginInfo', function (loginInfo) {
            if (!loginInfo) {
              return;
            }
            loginInfo.prize[idx].State = 2;
            jsBridge.setPreference('loginInfo', JSON.stringify(loginInfo));
          });
        } else {
          jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
        }
        $button.removeClass('loading');
      }, function (res) {
        jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
        $button.removeClass('loading');
      });
    }
  }, {
    key: 'refresh',
    value: function refresh() {
      this.init();
    }
  }, {
    key: 'genDom',
    value: function genDom() {
      var self = this;
      return migi.createVd("div", [], [migi.createCp(_Profile2.default, [["ref", "profile"], ["userInfo", self.userInfo]]), migi.createVd("p", [["class", "info"]], ["大家注意啦~活动奖励均不包邮。本次发货为到付形式，请大家谨慎选择。圈币抵扣运费功能将与圈币兑换福利系统一同上线，需要使用圈币抵扣的小伙伴请勿点击‘发货’按钮哦~可以等待之后使用圈币抵扣~", migi.createVd("br", []), "预计发货时间为12月20日左右。需要发货的小伙伴请在12月17日前点击‘发货’按钮哦~"]), migi.createVd("ul", [["class", "prize"], ["ref", "prize"], ["onClick", [[{ "button": { "_v": true } }, self.clickPrize.bind(self)]]]], [(this.prize || []).map(function (item, i) {
        if (item.State === 1) {
          return migi.createVd("li", [], [item.ProductName, migi.createVd("button", [["rel", item.ID], ["idx", i]], ["发货"])]);
        }
        return migi.createVd("li", [], [item.ProductName, migi.createVd("span", [], ["已确认发货"])]);
      })]), migi.createVd("ul", [["class", "list"], ["onClick", [[{ "a": { "_v": true } }, self.clickLink.bind(self)]]]], [migi.createVd("li", [], [migi.createVd("a", [["href", "/relation.html"], ["class", "relation"]], ["圈关系"])]), migi.createVd("li", [], [migi.createVd("a", [["href", "/message.html"], ["class", "message"]], ["圈消息"])]), migi.createVd("li", [], [migi.createVd("a", [["href", "/mypost.html"], ["class", "post"]], ["我画的圈"])]), migi.createVd("li", [], [migi.createVd("a", [["href", "/myfavor.html"], ["class", "favor"]], ["我的收藏"])])]), self.bonusPoint && self.bonusPoint.ranking ? migi.createVd("div", [["class", "bp"]], [migi.createVd("p", [["class", "rank"]], ["全站排名 ", self.bonusPoint.ranking, " 名"]), migi.createVd("p", [], [migi.createVd("small", [], ["以上是截止到11月30日晚0点的积分排名哦。1-10名的小伙伴将获得异世谣随机签名手账一份~11-200名的小伙伴将获得异世谣空白手账一份~\n\
                ", migi.createVd("br", []), "福利详情页将和圈币系统一起尽快上线，请耐心等待哦！\n\
                ", migi.createVd("br", []), "另外本周末我们将在11-100名中随机抽取3名小伙伴升级为随机签名手账。\n\
                ", migi.createVd("br", []), "没进前200的小伙伴们也不用气馁，之前的所有努力都会积累圈币~很快就会上线圈币兑换福利的功能哦！"])])]) : '', migi.createVd("span", [["class", "loginout"], ["onClick", self.clickOut.bind(this)]], ["退出登录"])]);
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "my"]], [new migi.Obj(["hasData", "isLogin"], this, function () {
        return this.hasData ? this.isLogin ? this.genDom() : migi.createVd("div", [["class", "login"]], [migi.createVd("span", [["class", "weibo"], ["onClick", new migi.Cb(this, this.clickWeibo)]], ["微博登录"])]) : migi.createVd("div", [], [migi.createVd("div", [["class", "fn-placeholder-tag"]]), migi.createVd("div", [["class", "fn-placeholder-roundlet"]]), migi.createVd("div", [["class", "fn-placeholder"]]), migi.createVd("div", [["class", "fn-placeholder"]])]);
      })]);
    }
  }, {
    key: 'hasData',
    set: function set(v) {
      this.__setBind("hasData", v);this.__data("hasData");
    },
    get: function get() {
      return this.__getBind("hasData");
    }
  }, {
    key: 'isLogin',
    set: function set(v) {
      this.__setBind("isLogin", v);this.__data("isLogin");
    },
    get: function get() {
      return this.__getBind("isLogin");
    }
  }]);

  return My;
}(migi.Component);

migi.name(My, "My");exports.default = My;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _net = __webpack_require__(1);

var _net2 = _interopRequireDefault(_net);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profile = function (_migi$Component) {
  _inherits(Profile, _migi$Component);

  function Profile() {
    var _ref;

    _classCallCheck(this, Profile);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Profile.__proto__ || Object.getPrototypeOf(Profile)).call.apply(_ref, [this].concat(data)));

    var self = _this;
    if (self.props.userInfo) {
      self.head = self.props.userInfo.Head_Url;
      self.sname = self.props.userInfo.NickName;
      self.sign = self.props.userInfo.User_Sign;
    }
    return _this;
  }

  _createClass(Profile, [{
    key: 'click',
    value: function click() {
      var self = this;
      if (self.updateNickNameTimeDiff < 24 * 60 * 60 * 1000) {
        jsBridge.toast('昵称一天只能修改一次哦~');
        return;
      }
      jsBridge.prompt(self.sname, function (res) {
        if (res.success) {
          var newName = res.value;
          var length = newName.length;
          if (length < 4 || length > 8) {
            jsBridge.toast('昵称长度需要在4~8个字之间哦~');
            return;
          }
          if (newName !== self.sname) {
            _net2.default.postJSON('/h5/my/updateNickName', { nickName: newName }, function (res) {
              if (res.success) {
                self.sname = newName;
                self.updateNickNameTimeDiff = 0;
                jsBridge.getPreference('loginInfo', function (loginInfo) {
                  loginInfo.userInfo.NickName = newName;
                  jsBridge.setPreference('loginInfo', JSON.stringify(loginInfo));
                  migi.eventBus.emit('USER_INFO', loginInfo.userInfo);
                });
              } else {
                jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
              }
            }, function (res) {
              jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
            });
          }
        }
      });
    }
  }, {
    key: 'clickPic',
    value: function clickPic() {
      var self = this;
      if (self.updateHeadTimeDiff < 24 * 60 * 60 * 1000) {
        jsBridge.toast('头像一天只能修改一次哦~');
        return;
      }
      jsBridge.album(function (res) {
        if (res.success) {
          var img = Array.isArray(res.base64) ? res.base64[0] : res.base64;
          self.head = img;
          _net2.default.postJSON('/h5/my/uploadHead', { img: img }, function (res) {
            if (res.success) {
              self.head = res.url;
              self.updateHeadTimeDiff = 0;
              jsBridge.getPreference('loginInfo', function (loginInfo) {
                loginInfo.userInfo.Head_Url = res.url;
                jsBridge.setPreference('loginInfo', JSON.stringify(loginInfo));
                migi.eventBus.emit('USER_INFO', loginInfo.userInfo);
              });
            } else {
              jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
            }
          }, function (res) {
            jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
          });
        }
      });
    }
  }, {
    key: 'click2',
    value: function click2() {
      var self = this;
      jsBridge.prompt(self.sign, function (res) {
        if (res.success) {
          var newSign = res.value;
          var length = newSign.length;
          if (length > 16) {
            jsBridge.toast('签名长度不能超过16个字哦~');
            return;
          }
          if (newSign !== self.sign) {
            _net2.default.postJSON('/h5/my/updateSign', { sign: newSign }, function (res) {
              if (res.success) {
                self.sign = newSign;return;
                jsBridge.getPreference('loginInfo', function (loginInfo) {
                  loginInfo.userInfo.User_Sign = newSign;
                  jsBridge.setPreference('loginInfo', JSON.stringify(loginInfo));
                });
              } else {
                jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
              }
            }, function (res) {
              jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
            });
          }
        }
      });
    }
  }, {
    key: 'clickPri',
    value: function clickPri(e, vd) {
      e.preventDefault();
      jsBridge.pushWindow('/private.html', {
        title: '收货信息'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "profile"]], [migi.createVd("h4", [], ["我的资料"]), migi.createVd("div", [["class", "c"]], [migi.createVd("div", [["class", "pic"], ["onClick", new migi.Cb(this, this.clickPic)]], [migi.createVd("img", [["src", new migi.Obj("head", this, function () {
        return _util2.default.autoSsl(_util2.default.img200_200_80(this.head)) || '/src/common/head.png';
      })]])]), migi.createVd("div", [["class", "txt"]], [migi.createVd("label", [], ["昵称："]), migi.createVd("strong", [["ref", "sname"]], [new migi.Obj("sname", this, function () {
        return this.sname;
      })]), migi.createVd("b", [["class", "edit"], ["ref", "edit"], ["onClick", new migi.Cb(this, this.click)]]), migi.createVd("br", []), migi.createVd("label", [], ["签名："]), migi.createVd("p", [["ref", "sign"], ["class", new migi.Obj("sign", this, function () {
        return this.sign ? 'sign' : 'sign empty';
      })]], [new migi.Obj("sign", this, function () {
        return this.sign || '暂无签名';
      })]), migi.createVd("b", [["class", "edit edit2"], ["ref", "edit2"], ["onClick", new migi.Cb(this, this.click2)]]), migi.createVd("div", [["class", "private"]], [migi.createVd("a", [["href", "/private.html"], ["onClick", new migi.Cb(this, this.clickPri)]], ["编辑收货地址"]), migi.createVd("small", [], ["(圈儿会为你保密哦)"])])])])]);
    }
  }, {
    key: 'head',
    set: function set(v) {
      this.__setBind("head", v);this.__data("head");
    },
    get: function get() {
      return this.__getBind("head");
    }
  }, {
    key: 'sname',
    set: function set(v) {
      this.__setBind("sname", v);this.__data("sname");
    },
    get: function get() {
      return this.__getBind("sname");
    }
  }, {
    key: 'sign',
    set: function set(v) {
      this.__setBind("sign", v);this.__data("sign");
    },
    get: function get() {
      return this.__getBind("sign");
    }
  }, {
    key: 'updateNickNameTimeDiff',
    set: function set(v) {
      this.__setBind("updateNickNameTimeDiff", v);this.__data("updateNickNameTimeDiff");
    },
    get: function get() {
      return this.__getBind("updateNickNameTimeDiff");
    }
  }, {
    key: 'updateHeadTimeDiff',
    set: function set(v) {
      this.__setBind("updateHeadTimeDiff", v);this.__data("updateHeadTimeDiff");
    },
    get: function get() {
      return this.__getBind("updateHeadTimeDiff");
    }
  }]);

  return Profile;
}(migi.Component);

migi.name(Profile, "Profile");exports.default = Profile;

/***/ })
/******/ ]);