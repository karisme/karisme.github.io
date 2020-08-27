webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: siteTitle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteTitle", function() { return siteTitle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.module.css */ "./components/layout.module.css");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/index.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
var _jsxFileName = "/mnt/c/Users/kalik/Documents/PERSONAL/PERSONAL_PROJECTS/karisme.github.io/components/layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var siteTitle = "Ali's Personal Website";

function Layout(_ref) {
  var children = _ref.children,
      home = _ref.home;
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_5___default.a, {
    params: {
      "fps_limit": 28,
      "particles": {
        "collisions": {
          "enable": false
        },
        "number": {
          "value": 200,
          "density": {
            "enable": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 30,
          "opacity": 0.4
        },
        "move": {
          "speed": 1
        },
        "opacity": {
          "anim": {
            "enable": true,
            "opacity_min": 0.05,
            "speed": 2,
            "sync": false
          },
          "value": 1.6
        }
      },
      "retina_detect": false,
      "interactivity": {
        "events": {
          "onhover": {
            "enable": true,
            "mode": "bubble"
          }
        },
        "modes": {
          "bubble": {
            "size": 6,
            "distance": 40
          }
        }
      }
    },
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.particles,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    collapseOnSelect: true,
    expand: "lg",
    bg: "dark",
    variant: "dark",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__["default"].Brand, {
    href: "#home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, "React-Bootstrap"), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__["default"].Toggle, {
    "aria-controls": "responsive-navbar-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__["default"].Collapse, {
    id: "responsive-navbar-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "mr-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7__["default"].Link, {
    href: "#features",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }, "Features"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7__["default"].Link, {
    href: "#pricing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, "Pricing")), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7__["default"].Link, {
    href: "#deets",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, "More deets"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7__["default"].Link, {
    eventKey: 2,
    href: "#memes",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, "Dank memes")))), __jsx("div", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  })), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, children), !home && __jsx("div", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.backToHome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 25
    }
  }, " \u2190 Back to home")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.926c56093be615ed8924.hot-update.js.map