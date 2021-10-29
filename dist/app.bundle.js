/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/calc.js":
/*!************************!*\
  !*** ./src/js/calc.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculation": function() { return /* binding */ calculation; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UI = /*#__PURE__*/function () {
  function UI() {
    _classCallCheck(this, UI);

    this.display = document.querySelector(".display__result");
    this.clickedValuesDisplay = document.querySelector(".display__clicked");
    this.value = "";
    this.lastOperator = "";
    this.clickedValue = "";
    this.tempResult = "";
    this.result = null;
    this.haveDot = false;
  } // Get value


  _createClass(UI, [{
    key: "getValue",
    value: function getValue(value) {
      if (value === "." && !this.haveDot) {
        this.haveDot = true;
      } else if (value === "." && this.haveDot) {
        return;
      }

      this.value += value;
      this.display.innerText = this.value;
    } // Get operator

  }, {
    key: "getOperator",
    value: function getOperator(operator) {
      if (operator === "=" || !this.value) return;
      this.haveDot = false;
      var operatorName = operator;

      if (this.value && this.clickedValue && this.lastOperator) {
        this.mathCalc();
        this.display.innerText = "".concat(this.result);
      } else {
        this.result = parseFloat(this.value);
      }

      this.clickedValue += "".concat(this.value, " ").concat(operator, " ");
      this.clickedValuesDisplay.innerText = this.clickedValue;
      this.value = "";
      this.display.innerText = "";
      this.lastOperator = operatorName;
    } // Setting values

  }, {
    key: "setValue",
    value: function setValue() {
      var operator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    } // Math calculation

  }, {
    key: "mathCalc",
    value: function mathCalc() {
      if (this.lastOperator === "+") {
        this.result = parseFloat(this.result) + parseFloat(this.value);
      } else if (this.lastOperator === "-") {
        this.result = parseFloat(this.result) - parseFloat(this.value);
      } else if (this.lastOperator === "x") {
        this.result = parseFloat(this.result) * parseFloat(this.value);
      } else if (this.lastOperator === "/") {
        this.result = parseFloat(this.result) / parseFloat(this.value);
      }
    } // Equal to

  }, {
    key: "equalResult",
    value: function equalResult() {
      if (!this.value || !this.clickedValue) return;
      this.haveDot = false;
      this.mathCalc();
      this.display.innerText = this.result;
      this.clickedValuesDisplay.innerText = "";
      this.clickedValue = "";
      this.value = this.result;
    } // Delete last value

  }, {
    key: "deleteLast",
    value: function deleteLast() {
      this.value = this.value.slice(0, this.value.length - 1);
      this.display.innerText = this.value;
    } // Clear all

  }, {
    key: "clearAll",
    value: function clearAll() {
      this.value = "";
      this.clickedValue = "";
      this.result = "";
      this.lastOperator = "";
      this.display.innerText = "";
      this.clickedValuesDisplay.innerText = "";
    }
  }]);

  return UI;
}();

var calculation = function calculation() {
  var numbers = document.querySelectorAll(".number");
  var operators = document.querySelectorAll(".operator");
  var deleteButton = document.querySelector("#delete");
  var resetButton = document.querySelector("#reset");
  var equalButton = document.querySelector("#equal");
  var ui = new UI();
  numbers.forEach(function (num) {
    num.addEventListener("click", function (e) {
      ui.getValue(e.target.innerText);
    });
  });
  operators.forEach(function (operator) {
    operator.addEventListener("click", function (e) {
      ui.getOperator(e.target.innerText);
    });
  });
  deleteButton.addEventListener("click", function () {
    ui.deleteLast();
  });
  equalButton.addEventListener("click", function () {
    ui.equalResult();
  });
  resetButton.addEventListener("click", function () {
    ui.clearAll();
  });
};

/***/ }),

/***/ "./src/js/toggle.js":
/*!**************************!*\
  !*** ./src/js/toggle.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Theme": function() { return /* binding */ Theme; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Theme = /*#__PURE__*/function () {
  function Theme() {
    _classCallCheck(this, Theme);

    this.root = document.querySelector(":root");
    this.switcheButtons = document.querySelectorAll("input[type='radio']");
    this.darkMode = document.querySelector("#dark");
    this.lightMode = document.querySelector("#light");
    this.yellowMode = document.querySelector("#yellow");
  }

  _createClass(Theme, [{
    key: "getTheme",
    value: function getTheme() {
      var theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      localStorage.getItem("themeMode") ? theme = localStorage.getItem("themeMode") : null;
      return theme;
    }
  }, {
    key: "loadTheme",
    value: function loadTheme() {
      var _this = this;

      var theme = this.getTheme();

      if (theme === "dark") {
        this.darkMode.checked = true;
        this.root.setAttribute("color-scheme", "".concat(theme));
      } else if (theme === "light") {
        this.lightMode.checked = true;
        this.root.setAttribute("color-scheme", "".concat(theme));
      } else if (theme === "yellow") {
        this.yellowMode.checked = true;
        this.root.setAttribute("color-scheme", "".concat(theme));
      }

      this.switcheButtons.forEach(function (button) {
        button.addEventListener("click", function (e) {
          var switchMode = e.target.getAttribute("id");

          _this.root.setAttribute("color-scheme", "".concat(switchMode));

          localStorage.setItem("themeMode", "".concat(switchMode));
        });
      });
    }
  }]);

  return Theme;
}();

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<!DOCTYPE html> <html lang=\"en\"> <head> <meta charset=\"UTF-8\"/> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"/> <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\"/> <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin/> <link href=\"https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap\" rel=\"stylesheet\"/> <title>Frontend Mentor | Calculator app</title> </head> <body> <div class=\"container\"> <header class=\"header\"> <h1 class=\"header__title\">Calc</h1> <div class=\"header__theme\"> <span class=\"header__theme--title\">THEME</span> <div class=\"header__theme--radios\"> <input type=\"radio\" name=\"theme\" id=\"dark\"/> <input type=\"radio\" name=\"theme\" id=\"light\"/> <input type=\"radio\" name=\"theme\" id=\"yellow\"/> <span class=\"header__theme--button\"></span> </div> <div class=\"header__theme--labels\"> <label for=\"dark\" class=\"header__label\">1</label> <label for=\"light\" class=\"header__label\">2</label> <label for=\"yellow\" class=\"header__label\">3</label> </div> </div> </header> <main class=\"calculator\"> <section class=\"display\"> <div class=\"display__result\"></div> <div class=\"display__clicked\"></div> </section> <section class=\"operation\"> <span class=\"operation__key number\">7</span> <span class=\"operation__key number\">8</span> <span class=\"operation__key number\">9</span> <span class=\"operation__key operation__key--del\" id=\"delete\">DEL</span> <span class=\"operation__key number\">4</span> <span class=\"operation__key number\">5</span> <span class=\"operation__key number\">6</span> <span class=\"operation__key operator\">+</span> <span class=\"operation__key number\">1</span> <span class=\"operation__key number\">2</span> <span class=\"operation__key number\">3</span> <span class=\"operation__key operator\">-</span> <span class=\"operation__key number\">.</span> <span class=\"operation__key number\">0</span> <span class=\"operation__key operator\">/</span> <span class=\"operation__key operator\">x</span> <span class=\"operation__key operation__key--reset\" id=\"reset\">RESET</span> <span class=\"operation__key operator operation__key--equal\" id=\"equal\">=</span> </section> </main> </div> </body> </html> ";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle */ "./src/js/toggle.js");
/* harmony import */ var _calc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calc */ "./src/js/calc.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.html */ "./src/index.html");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");



 // Instantiate the Theme class

var theme = new _toggle__WEBPACK_IMPORTED_MODULE_0__.Theme();
window.addEventListener("DOMContentLoaded", function () {
  theme.loadTheme();
  (0,_calc__WEBPACK_IMPORTED_MODULE_1__.calculation)();
});
}();
/******/ })()
;
//# sourceMappingURL=app.bundle.js.map