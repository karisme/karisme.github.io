webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/project.js":
/*!*******************************!*\
  !*** ./components/project.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _project_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.module.css */ "./components/project.module.css");
/* harmony import */ var _project_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_project_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var baffle_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! baffle-react */ "./node_modules/baffle-react/es/index.js");
/* harmony import */ var _public_project_data_project_descriptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/project_data/project_descriptions */ "./public/project_data/project_descriptions.js");
var _jsxFileName = "/mnt/c/Users/kalik/Documents/PERSONAL/PERSONAL_PROJECTS/karisme.github.io/components/project.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // Component was built to be used anywhere project information is to be displayed, namely the landing page
// and the portfolio page. Whenever this component is to be used, refer to /public/project_data/project_descriptions to see 
// which name and length is desired. The picture associated with each project will always match the definition found in the description file.

function Project(_ref) {
  var name = _ref.name,
      length = _ref.length;
  var image_source = "project_data/" + name + ".png";
  return __jsx("div", {
    className: _project_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: _project_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.image,
    src: image_source,
    alt: "Project Picture",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: _project_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx(baffle_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    speed: 115,
    characters: "\u2588\u2593\u2588 \u2592\u2591/\u2592\u2591 \u2588\u2591\u2592\u2593/ \u2588\u2592\u2592 \u2593\u2592\u2593/\u2588 \u2591\u2588\u2592/ \u2592\u2593\u2591 \u2588<\u2591\u2592 \u2593/\u2591",
    exclude: [" ", "!"],
    obfuscate: false,
    revealDuration: 8000,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, " ", _public_project_data_project_descriptions__WEBPACK_IMPORTED_MODULE_3__["desc"][name]), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }), _public_project_data_project_descriptions__WEBPACK_IMPORTED_MODULE_3__["desc"][name][length]));
}

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ })

})
//# sourceMappingURL=index.js.b8b14120c759ed064569.hot-update.js.map