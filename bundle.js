/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/playfairdisplay-variablefont_wght-webfont.woff2 */ "./src/fonts/playfairdisplay-variablefont_wght-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/playfairdisplay-variablefont_wght-webfont.woff */ "./src/fonts/playfairdisplay-variablefont_wght-webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'playfair';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2'),
         url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff');
    font-weight: normal;
    font-style: normal;

}

* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

html, body {
    height: 100%;
    margin: 0;
    padding: 0;
}

html {
    background-color: #e5e5f7;
    opacity: 0.8;
    background-image: linear-gradient(135deg, #c8c8c8 25%, transparent 25%), linear-gradient(225deg, #c8c8c8 25%, transparent 25%), linear-gradient(45deg, #c8c8c8 25%, transparent 25%), linear-gradient(315deg, #c8c8c8 25%, #e5e5f7 25%);
    background-position: 10px 0, 10px 0, 0 0, 0 0;
    background-size: 10px 10px;
    background-repeat: repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
}

body {
    display: flex;
    flex-direction: column;
    width: 60%;
    background-color: #fbfbfc;
    box-shadow: -5px 0 10px -5px rgba(0, 0, 0, 0.5), 5px 0 10px -5px rgba(0, 0, 0, 0.5);
    height: 1500px;
}

header {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

header nav {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
}

header #logo {
    width: 20%;
    max-width: 200px;
}

#logo img {
    width: 100%;
    height: auto;
}

.nav-btn {
    background: none;
    border: none;
    color: #333;
    font-size: 1.2em;
    cursor: pointer;
    padding: 10px 20px;
    transition: color 0.3s, background-color 0.3s;
}

.nav-btn:hover {
    color: #e5e5f7;
    border-radius: 5px;
}

.stylish-hr {
    border: none;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.5), transparent);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    margin: 10px 0;
    width: 100%;
}

#content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 10px auto 0px;;
    font-family: 'playfair', sans-serif;
    flex-grow: 1;
    line-height: 1.5;
}

footer {
    width: 100%;
    background-color: #fbfbfc;
    border-top: 1px solid #ddd;
    padding: 10px 0;
    display: flex;
    justify-content: center;
}

footer .attributes {
    list-style: none;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    padding: 0;
    margin: 0;
    font-size: 0.8rem;
}

footer .attributes li {
    margin: 0 10px;
}

footer .attributes a {
    text-decoration: none;
    color: #333;
    font-size: 1em;
    transition: color 0.3s;
}

footer .attributes a:hover {
    color: #e5e5f7;
}


/* Home CSS */

#carousel {
    position: relative;
    width: 100%;
    max-width: 600px;
    height: 300px;
    margin: auto;
    margin-bottom: 30px;
    border: 2px solid #ddd;
    overflow: hidden;
}

.carousel-inner {
    display: flex;
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease;
}

.carousel-item {
    min-width: 100%;
    height: 100%;
}

.carousel-item img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
}

.carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    width: auto;
    height: auto;
}

.prev {
    left: 10px;
}

.next {
    right: 10px;
}

#about {
    width: 100%;
    max-width: 600px;
    background-color: #fbfbfc;
    margin: 10px auto 30px;
}

#extra-info {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    margin: 10px auto 30px;
}

/* Menu CSS */


h2 {
    margin: 0px auto 20px;
}

.menu-item {
    width: 100%;
    height: 250px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 10px;
    margin-bottom: 10px;
    box-shadow: 0 2px 4px -2px rgba(0, 0, 0, 0.1); /* Faint bottom shadow */
}

.menu-pic-container {
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    margin-bottom: 10px;
}

.menu-pic {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
}

.menu-desc {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 10px;
}

.menu-item-name {
    font-size: 1rem;
    margin: 0;
}

.menu-text {
    font-size: 0.9rem;
    margin: 5px 0;
    flex-grow: 1;
}

.menu-price {
    font-size: 0.9rem;
    margin: 0 20px;
    text-align: right;
}

/* Contact CSS */

.contact-page {
    width: 80%;
    max-width: 800px;
    margin: 0px auto 20px;
    text-align: center;
}

.contact-info-div {
    margin: 20px 0;
}

.contact-info-div p {
    margin: 10px 0;
    font-size: 1.1rem;
}

.contact-info-div a {
    color: #333;
    text-decoration: none;
}

.contact-info-div a:hover {
    text-decoration: underline;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.form-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.form-group label {
    margin-bottom: 5px;
    font-weight: bold;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
}

button[type="submit"] {
    align-self: center;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #333;
    color: #e5e5f7;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}

button[type="submit"]:hover {
    background-color: #e5e5f7;
    color: #333;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'playfair';\n    src: url('./fonts/playfairdisplay-variablefont_wght-webfont.woff2') format('woff2'),\n         url('./fonts/playfairdisplay-variablefont_wght-webfont.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n\n}\n\n* {\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n}\n\nhtml, body {\n    height: 100%;\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n    background-color: #e5e5f7;\n    opacity: 0.8;\n    background-image: linear-gradient(135deg, #c8c8c8 25%, transparent 25%), linear-gradient(225deg, #c8c8c8 25%, transparent 25%), linear-gradient(45deg, #c8c8c8 25%, transparent 25%), linear-gradient(315deg, #c8c8c8 25%, #e5e5f7 25%);\n    background-position: 10px 0, 10px 0, 0 0, 0 0;\n    background-size: 10px 10px;\n    background-repeat: repeat;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    width: 60%;\n    background-color: #fbfbfc;\n    box-shadow: -5px 0 10px -5px rgba(0, 0, 0, 0.5), 5px 0 10px -5px rgba(0, 0, 0, 0.5);\n    height: 1500px;\n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n}\n\nheader nav {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 20px;\n}\n\nheader #logo {\n    width: 20%;\n    max-width: 200px;\n}\n\n#logo img {\n    width: 100%;\n    height: auto;\n}\n\n.nav-btn {\n    background: none;\n    border: none;\n    color: #333;\n    font-size: 1.2em;\n    cursor: pointer;\n    padding: 10px 20px;\n    transition: color 0.3s, background-color 0.3s;\n}\n\n.nav-btn:hover {\n    color: #e5e5f7;\n    border-radius: 5px;\n}\n\n.stylish-hr {\n    border: none;\n    height: 1px;\n    background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.5), transparent);\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n    margin: 10px 0;\n    width: 100%;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    margin: 10px auto 0px;;\n    font-family: 'playfair', sans-serif;\n    flex-grow: 1;\n    line-height: 1.5;\n}\n\nfooter {\n    width: 100%;\n    background-color: #fbfbfc;\n    border-top: 1px solid #ddd;\n    padding: 10px 0;\n    display: flex;\n    justify-content: center;\n}\n\nfooter .attributes {\n    list-style: none;\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    max-width: 600px;\n    padding: 0;\n    margin: 0;\n    font-size: 0.8rem;\n}\n\nfooter .attributes li {\n    margin: 0 10px;\n}\n\nfooter .attributes a {\n    text-decoration: none;\n    color: #333;\n    font-size: 1em;\n    transition: color 0.3s;\n}\n\nfooter .attributes a:hover {\n    color: #e5e5f7;\n}\n\n\n/* Home CSS */\n\n#carousel {\n    position: relative;\n    width: 100%;\n    max-width: 600px;\n    height: 300px;\n    margin: auto;\n    margin-bottom: 30px;\n    border: 2px solid #ddd;\n    overflow: hidden;\n}\n\n.carousel-inner {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    transition: transform 0.5s ease;\n}\n\n.carousel-item {\n    min-width: 100%;\n    height: 100%;\n}\n\n.carousel-item img {\n    width: 100%;\n    height: 100%;\n    display: block;\n    object-fit: cover;\n}\n\n.carousel-control {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    background-color: rgba(0, 0, 0, 0.5);\n    color: white;\n    border: none;\n    padding: 10px;\n    cursor: pointer;\n    width: auto;\n    height: auto;\n}\n\n.prev {\n    left: 10px;\n}\n\n.next {\n    right: 10px;\n}\n\n#about {\n    width: 100%;\n    max-width: 600px;\n    background-color: #fbfbfc;\n    margin: 10px auto 30px;\n}\n\n#extra-info {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    max-width: 600px;\n    margin: 10px auto 30px;\n}\n\n/* Menu CSS */\n\n\nh2 {\n    margin: 0px auto 20px;\n}\n\n.menu-item {\n    width: 100%;\n    height: 250px;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    gap: 10px;\n    margin-bottom: 10px;\n    box-shadow: 0 2px 4px -2px rgba(0, 0, 0, 0.1); /* Faint bottom shadow */\n}\n\n.menu-pic-container {\n    height: auto;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    overflow: hidden;\n    margin-bottom: 10px;\n}\n\n.menu-pic {\n    max-width: 100%;\n    max-height: 100%;\n    object-fit: cover;\n}\n\n.menu-desc {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    margin-bottom: 10px;\n}\n\n.menu-item-name {\n    font-size: 1rem;\n    margin: 0;\n}\n\n.menu-text {\n    font-size: 0.9rem;\n    margin: 5px 0;\n    flex-grow: 1;\n}\n\n.menu-price {\n    font-size: 0.9rem;\n    margin: 0 20px;\n    text-align: right;\n}\n\n/* Contact CSS */\n\n.contact-page {\n    width: 80%;\n    max-width: 800px;\n    margin: 0px auto 20px;\n    text-align: center;\n}\n\n.contact-info-div {\n    margin: 20px 0;\n}\n\n.contact-info-div p {\n    margin: 10px 0;\n    font-size: 1.1rem;\n}\n\n.contact-info-div a {\n    color: #333;\n    text-decoration: none;\n}\n\n.contact-info-div a:hover {\n    text-decoration: underline;\n}\n\n.contact-form {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.form-group {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\n.form-group label {\n    margin-bottom: 5px;\n    font-weight: bold;\n}\n\n.form-group input,\n.form-group textarea {\n    width: 100%;\n    padding: 10px;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    font-size: 1rem;\n}\n\nbutton[type=\"submit\"] {\n    align-self: center;\n    padding: 10px 20px;\n    border: none;\n    border-radius: 5px;\n    background-color: #333;\n    color: #e5e5f7;\n    font-size: 1rem;\n    cursor: pointer;\n    transition: background-color 0.3s, color 0.3s;\n}\n\nbutton[type=\"submit\"]:hover {\n    background-color: #e5e5f7;\n    color: #333;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/carousel.js":
/*!*************************!*\
  !*** ./src/carousel.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   nextSlide: () => (/* binding */ nextSlide),
/* harmony export */   prevSlide: () => (/* binding */ prevSlide),
/* harmony export */   startCarousel: () => (/* binding */ startCarousel),
/* harmony export */   stopCarousel: () => (/* binding */ stopCarousel)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

let currentIndex = 0;
let interval;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function startCarousel() {
    interval = setInterval(nextSlide, 3000);
}

function stopCarousel() {
    clearInterval(interval);
}



/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElement.js */ "./src/createElement.js");



function contact() {
    
    const contactPage = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', { class: 'contact-page'});

    const contactHeader = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('h2');
    contactHeader.textContent = 'Contact Us';
    const contactText = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('p');
    contactText.textContent = 'If you have any questions, feel free to reach out to us via email or phone, or use the contact form below.';
    contactPage.appendChild(contactHeader);
    contactPage.appendChild(contactText);

    const contactInfoDiv = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', { class: 'contact-info-div'});
    const contactInfoEmail = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('p');
    contactInfoEmail.innerHTML = 'Email: <a href="mailto:contact@noblefarms.com">contact@noblefarms.com</a>';
    const contactInfoPhone = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('p');
    contactInfoPhone.innerHTML = 'Phone: <a href="tel:+1234567890">(123) 456-7890</a>';
    contactInfoDiv.appendChild(contactInfoEmail);
    contactInfoDiv.appendChild(contactInfoPhone);
    contactPage.appendChild(contactInfoDiv);

    const contactForm = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('form', { class: 'contact-form'});
    
    const formGroup1 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', { class: 'form-group'});
    const label1 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('label', { for: 'name'});
    label1.textContent = 'Name:';
    const input1 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('input', { type: 'text', id: 'name', name: 'name', required: '' });
    formGroup1.appendChild(label1);
    formGroup1.appendChild(input1);

    const formGroup2 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', { class: 'form-group'});
    const label2 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('label', { for: 'email'});
    label2.textContent = 'Email:';
    const input2 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('input', { type: 'email', id: 'email', name: 'email', required: '' });
    formGroup2.appendChild(label2);
    formGroup2.appendChild(input2);

    const formGroup3 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', { class: 'form-group'});
    const label3 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('label', { for: 'phone'});
    label3.textContent = 'Phone:';
    const input3 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('input', { type: 'tel', id: 'phone', name: 'phone' });
    formGroup3.appendChild(label3);
    formGroup3.appendChild(input3);

    const formGroup4 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', { class: 'form-group'});
    const label4 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('label', { for: 'message'});
    label4.textContent = 'Message:';
    const input4 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('textarea', { id: 'message', name: 'message', rows: '5', required: '' });
    formGroup4.appendChild(label4);
    formGroup4.appendChild(input4);

    const submit = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('button', { type: 'submit' });
    submit.textContent = 'Submit';

    contactForm.appendChild(formGroup1);
    contactForm.appendChild(formGroup2);
    contactForm.appendChild(formGroup3);
    contactForm.appendChild(formGroup4);
    contactForm.appendChild(submit);

    contactPage.appendChild(contactForm);

    content.appendChild(contactPage);
}

/***/ }),

/***/ "./src/createElement.js":
/*!******************************!*\
  !*** ./src/createElement.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createElement)
/* harmony export */ });
function createElement(tag, attributes = {}) {
    const element = document.createElement(tag);

    for (const [key, value] of Object.entries(attributes)) {
        if (key === 'class') {
            element.className = value;
        } else if (key === 'id') {
            element.setAttribute(key, value);
        } else if (key === 'src' || key === 'alt') {
            element.setAttribute(key, value);
        } else if (key === 'onclick') {
            element.setAttribute(key, value);
        } else {
            element.setAttribute(key, value);
        }
    }
    return element;
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _carousel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel.js */ "./src/carousel.js");
/* harmony import */ var _img_noble_farms_brisket_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/noble-farms-brisket.png */ "./src/img/noble-farms-brisket.png");
/* harmony import */ var _img_noble_farms_chicken_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/noble-farms-chicken.png */ "./src/img/noble-farms-chicken.png");
/* harmony import */ var _img_noble_farms_salmon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/noble-farms-salmon.png */ "./src/img/noble-farms-salmon.png");
/* harmony import */ var _img_noble_farms_beef_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/noble-farms-beef.png */ "./src/img/noble-farms-beef.png");
/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createElement.js */ "./src/createElement.js");









function home() {
    const carousel = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])('div', { id: 'carousel' });
    const carouselInner = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])('div', { class: 'carousel-inner' });
    const carouselItemActive = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])('div', { class: 'carousel-item active' });
    const carouselPhoto1 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])('img', { src: _img_noble_farms_chicken_png__WEBPACK_IMPORTED_MODULE_3__, class: 'carousel-photo', alt: 'menu item 1' });
    carouselItemActive.appendChild(carouselPhoto1);
    carouselInner.appendChild(carouselItemActive);

    const carouselItem1 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])('div', { class: 'carousel-item' });
    const carouselPhoto2 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])('img', { src: _img_noble_farms_brisket_png__WEBPACK_IMPORTED_MODULE_2__, class: 'carousel-photo', alt: 'menu item 2' });
    carouselItem1.appendChild(carouselPhoto2);
    carouselInner.appendChild(carouselItem1);

    const carouselItem2 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])('div', { class: 'carousel-item' });
    const carouselPhoto3 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])('img', { src: _img_noble_farms_salmon_png__WEBPACK_IMPORTED_MODULE_4__, class: 'carousel-photo', alt: 'menu item 3' });
    carouselItem2.appendChild(carouselPhoto3);
    carouselInner.appendChild(carouselItem2);

    const carouselItem3 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])('div', { class: 'carousel-item' });
    const carouselPhoto4 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])('img', { src: _img_noble_farms_beef_png__WEBPACK_IMPORTED_MODULE_5__, class: 'carousel-photo', alt: 'menu item 3' });
    carouselItem3.appendChild(carouselPhoto4);
    carouselInner.appendChild(carouselItem3);

    const prevButton = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])('button', { class: 'carousel-control prev' });
    prevButton.textContent = '❮';
    prevButton.addEventListener('click', _carousel_js__WEBPACK_IMPORTED_MODULE_1__.prevSlide);
    const nextButton = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])('button', { class: 'carousel-control next' });
    nextButton.textContent = '❯';
    nextButton.addEventListener('click', _carousel_js__WEBPACK_IMPORTED_MODULE_1__.nextSlide);

    carousel.appendChild(carouselInner);
    carousel.appendChild(prevButton);
    carousel.appendChild(nextButton);

    content.appendChild(carousel);
    (0,_carousel_js__WEBPACK_IMPORTED_MODULE_1__.startCarousel)();

    const about = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])('div', { id: 'about' });
    const aboutHeader = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])('h3', { class: 'header' });
    aboutHeader.textContent = 'About';
    const aboutText = document.createElement('p');
    aboutText.innerHTML = 'Welcome to <strong>Noble Farms</strong>, where every bite is a testament to the beauty of nature and the art of sustainable living. Our farm-to-mouth philosophy ensures that each dish is crafted with the freshest produce and ethically raised meats, all grown on our own land. Immerse yourself in a dining experience that celebrates creativity, sustainability, and the finest flavors, meticulously cultivated from our fields to your table.';
    about.appendChild(aboutHeader);
    about.appendChild(aboutText);

    const extraInfo = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])('div', { id: 'extra-info'});
    
    const hours = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])('div', { id: 'hours' });
    const hoursHeader = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])('h3', { class: 'header' });
    hoursHeader.textContent = 'Hours';
    const hoursText1 = document.createElement('p');
    hoursText1.textContent = 'Monday - Friday: 12pm - 8pm';
    const hoursText2 = document.createElement('p');
    hoursText2.textContent = 'Saturday: 12pm - 10pm';
    const hoursText3 = document.createElement('p');
    hoursText3.textContent = 'Sunday: 10am - 8pm';
    hours.appendChild(hoursHeader);
    hours.appendChild(hoursText1);
    hours.appendChild(hoursText2);
    hours.appendChild(hoursText3);
    extraInfo.appendChild(hours);

    const location = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])('div', { id: 'location' });
    const locationHeader = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])('h3', { class: 'header' });
    locationHeader.textContent = 'Location';
    const locationText = document.createElement('p');
    locationText.innerHTML = '123 Abc Boulevard <br /> Los Angeles, CA <br />90001';
    location.appendChild(locationHeader);
    location.appendChild(locationText);
    extraInfo.appendChild(location);

    content.appendChild(about);
    content.appendChild(extraInfo);
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElement.js */ "./src/createElement.js");
/* harmony import */ var _img_noble_farms_chicken_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/noble-farms-chicken.png */ "./src/img/noble-farms-chicken.png");
/* harmony import */ var _img_noble_farms_brisket_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/noble-farms-brisket.png */ "./src/img/noble-farms-brisket.png");
/* harmony import */ var _img_noble_farms_salmon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/noble-farms-salmon.png */ "./src/img/noble-farms-salmon.png");
/* harmony import */ var _img_noble_farms_beef_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/noble-farms-beef.png */ "./src/img/noble-farms-beef.png");







function menu() {

    const menuHeader = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('h2');
    menuHeader.textContent = 'Menu';

    // Menu Item 1
    const menuItem1 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', { class: 'menu-item'} );
    const menuPicContainer1 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', { class: 'menu-pic-container'} );
    const menuPic1 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('img', { src: _img_noble_farms_chicken_png__WEBPACK_IMPORTED_MODULE_2__, class: 'menu-pic'} );
    menuPicContainer1.appendChild(menuPic1);

    const menuDesc1 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', { class: 'menu-desc'} );
    const menuItemName1 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('h6', { class: 'menu-item-name'} );
    menuItemName1.textContent = 'Roasted Herb Chicken';
    const menuText1 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('p', { class: 'menu-text'} );
    menuText1.textContent = 'Succulent, herb-seasoned chicken with crispy skin, served with golden roasted potatoes and a fresh garden salad. Accompanied by creamy herb aioli.';
    const menuPrice1 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('span', { class: 'menu-price'} );
    menuPrice1.textContent = 'Price: $21.99';
    menuDesc1.appendChild(menuItemName1);
    menuDesc1.appendChild(menuText1);
    menuDesc1.appendChild(menuPrice1);

    menuItem1.appendChild(menuPicContainer1);
    menuItem1.appendChild(menuDesc1);

    // Menu Item 2
    const menuItem2 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', { class: 'menu-item'} );
    const menuPicContainer2 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', { class: 'menu-pic-container'} );
    const menuPic2 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('img', { src: _img_noble_farms_brisket_png__WEBPACK_IMPORTED_MODULE_3__, class: 'menu-pic'} );
    menuPicContainer2.appendChild(menuPic2);

    const menuDesc2 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', { class: 'menu-desc'} );
    const menuItemName2 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('h6', { class: 'menu-item-name'} );
    menuItemName2.textContent = 'Smoked BBQ Brisket Plate';
    const menuText2 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('p', { class: 'menu-text'} );
    menuText2.textContent = 'Tender, slow-smoked BBQ brisket, served with grilled corn on the cob, savory roasted vegetables, and a side of creamy slaw.';
    const menuPrice2 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('span', { class: 'menu-price'} );
    menuPrice2.textContent = 'Price: $25.99';
    menuDesc2.appendChild(menuItemName2);
    menuDesc2.appendChild(menuText2);
    menuDesc2.appendChild(menuPrice2);

    menuItem2.appendChild(menuPicContainer2);
    menuItem2.appendChild(menuDesc2);

    // Menu Item 3
    const menuItem3 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', { class: 'menu-item'} );
    const menuPicContainer3 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', { class: 'menu-pic-container'} );
    const menuPic3 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('img', { src: _img_noble_farms_salmon_png__WEBPACK_IMPORTED_MODULE_4__, class: 'menu-pic'} );
    menuPicContainer3.appendChild(menuPic3);

    const menuDesc3 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', { class: 'menu-desc'} );
    const menuItemName3 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('h6', { class: 'menu-item-name'} );
    menuItemName3.textContent = 'Grilled Salmon with Rice and Broccolini';
    const menuText3 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('p', { class: 'menu-text'} );
    menuText3.textContent = 'Deliciously grilled salmon fillet, served with fragrant rice pilaf and tender broccolini, garnished with fresh herbs.';
    const menuPrice3 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('span', { class: 'menu-price'} );
    menuPrice3.textContent = 'Price: $22.99';
    menuDesc3.appendChild(menuItemName3);
    menuDesc3.appendChild(menuText3);
    menuDesc3.appendChild(menuPrice3);

    menuItem3.appendChild(menuPicContainer3);
    menuItem3.appendChild(menuDesc3);

    // Menu Item 4
    const menuItem4 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', { class: 'menu-item'} );
    const menuPicContainer4 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', { class: 'menu-pic-container'} );
    const menuPic4 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('img', { src: _img_noble_farms_beef_png__WEBPACK_IMPORTED_MODULE_5__, class: 'menu-pic'} );
    menuPicContainer4.appendChild(menuPic4);

    const menuDesc4 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', { class: 'menu-desc'} );
    const menuItemName4 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('h6', { class: 'menu-item-name'} );
    menuItemName4.textContent = 'Beef Wellington with Mashed Potatoes';
    const menuText4 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('p', { class: 'menu-text'} );
    menuText4.textContent = 'Elegant Beef Wellington, featuring tender beef wrapped in puff pastry with a mushroom duxelles, served alongside creamy mashed potatoes.';
    const menuPrice4 = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])('span', { class: 'menu-price'} );
    menuPrice4.textContent = 'Price: $29.99';
    menuDesc4.appendChild(menuItemName4);
    menuDesc4.appendChild(menuText4);
    menuDesc4.appendChild(menuPrice4);

    menuItem4.appendChild(menuPicContainer4);
    menuItem4.appendChild(menuDesc4);

    content.appendChild(menuHeader);
    content.appendChild(menuItem1);
    content.appendChild(menuItem2);
    content.appendChild(menuItem3);
    content.appendChild(menuItem4);

}

/***/ }),

/***/ "./src/fonts/playfairdisplay-variablefont_wght-webfont.woff":
/*!******************************************************************!*\
  !*** ./src/fonts/playfairdisplay-variablefont_wght-webfont.woff ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24a1410279ce439356e2.woff";

/***/ }),

/***/ "./src/fonts/playfairdisplay-variablefont_wght-webfont.woff2":
/*!*******************************************************************!*\
  !*** ./src/fonts/playfairdisplay-variablefont_wght-webfont.woff2 ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "567abc8ef28c03b88a22.woff2";

/***/ }),

/***/ "./src/img/noble-farms-beef.png":
/*!**************************************!*\
  !*** ./src/img/noble-farms-beef.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "41ec9ed585a8bc67c94c.png";

/***/ }),

/***/ "./src/img/noble-farms-brisket.png":
/*!*****************************************!*\
  !*** ./src/img/noble-farms-brisket.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c24e99d9457bf83f6e20.png";

/***/ }),

/***/ "./src/img/noble-farms-chicken.png":
/*!*****************************************!*\
  !*** ./src/img/noble-farms-chicken.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2ae1a283e9fd62d8279d.png";

/***/ }),

/***/ "./src/img/noble-farms-logo.png":
/*!**************************************!*\
  !*** ./src/img/noble-farms-logo.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1248364166bee9ca2214.png";

/***/ }),

/***/ "./src/img/noble-farms-salmon.png":
/*!****************************************!*\
  !*** ./src/img/noble-farms-salmon.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b334f5234a8c68362222.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _img_noble_farms_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/noble-farms-logo.png */ "./src/img/noble-farms-logo.png");
/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createElement.js */ "./src/createElement.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _carousel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carousel.js */ "./src/carousel.js");









const header = document.querySelector('header');
const divLogo = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_2__["default"])('div', { id: 'logo' });
const imgLogo = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_2__["default"])('img', { src: _img_noble_farms_logo_png__WEBPACK_IMPORTED_MODULE_1__, alt: 'noble farms logo', class: 'img-logo' })
divLogo.appendChild(imgLogo);

const nav = header.querySelector('nav');
header.insertBefore(divLogo, nav);

const hr = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_2__["default"])('hr', { class: 'stylish-hr'});
header.appendChild(hr);

const content = document.querySelector('#content');

(0,_home_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

const navButton = document.querySelector('.nav-btn')
const homeButton = document.querySelector('.nav-btn.home')
const menuButton = document.querySelector('.nav-btn.menu')
const contactButton = document.querySelector('.nav-btn.contact')


homeButton.addEventListener("click", () => {
    content.innerHTML = '';
    (0,_carousel_js__WEBPACK_IMPORTED_MODULE_6__.stopCarousel)();
    (0,_home_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

menuButton.addEventListener("click", () => {
    content.innerHTML = '';
    (0,_carousel_js__WEBPACK_IMPORTED_MODULE_6__.stopCarousel)();
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
});

contactButton.addEventListener("click", () => {
    content.innerHTML = '';
    (0,_carousel_js__WEBPACK_IMPORTED_MODULE_6__.stopCarousel)();
    (0,_contact_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsMkxBQTBFO0FBQ3RILDRDQUE0Qyx5TEFBeUU7QUFDckgsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxNQUFNLE9BQU8sYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsUUFBUSxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLFlBQVksS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSx5QkFBeUIsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtB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V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ21DO0FBQ1Q7O0FBRWxCO0FBQ0E7QUFDTTtBQUNVOztBQUU3QztBQUNBLGdCQUFnQiw2REFBYSxVQUFVLFlBQVk7QUFDbkQsZ0JBQWdCLDZEQUFhLFVBQVUsS0FBSyxzREFBYyw4Q0FBOEM7QUFDeEc7O0FBRUE7QUFDQTs7QUFFQSxXQUFXLDZEQUFhLFNBQVMsb0JBQW9CO0FBQ3JEOztBQUVBOztBQUVBLG9EQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsSUFBSSwwREFBWTtBQUNoQixJQUFJLG9EQUFJO0FBQ1IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsSUFBSSwwREFBWTtBQUNoQixJQUFJLG9EQUFJO0FBQ1IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsSUFBSSwwREFBWTtBQUNoQixJQUFJLHVEQUFPO0FBQ1gsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nhcm91c2VsLmpzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL3BsYXlmYWlyZGlzcGxheS12YXJpYWJsZWZvbnRfd2dodC13ZWJmb250LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9wbGF5ZmFpcmRpc3BsYXktdmFyaWFibGVmb250X3dnaHQtd2ViZm9udC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdwbGF5ZmFpcic7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuXG59XG5cbioge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLCBib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmh0bWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1Zjc7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNjOGM4YzggMjUlLCB0cmFuc3BhcmVudCAyNSUpLCBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjYzhjOGM4IDI1JSwgdHJhbnNwYXJlbnQgMjUlKSwgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjYzhjOGM4IDI1JSwgdHJhbnNwYXJlbnQgMjUlKSwgbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2M4YzhjOCAyNSUsICNlNWU1ZjcgMjUlKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMHB4IDAsIDEwcHggMCwgMCAwLCAwIDA7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMHB4IDEwcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYztcbiAgICBib3gtc2hhZG93OiAtNXB4IDAgMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgNXB4IDAgMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBoZWlnaHQ6IDE1MDBweDtcbn1cblxuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuaGVhZGVyIG5hdiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgIGdhcDogMjBweDtcbn1cblxuaGVhZGVyICNsb2dvIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIG1heC13aWR0aDogMjAwcHg7XG59XG5cbiNsb2dvIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ubmF2LWJ0biB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJhY2tncm91bmQtY29sb3IgMC4zcztcbn1cblxuLm5hdi1idG46aG92ZXIge1xuICAgIGNvbG9yOiAjZTVlNWY3O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnN0eWxpc2gtaHIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50LCByZ2JhKDAsIDAsIDAsIDAuNSksIHRyYW5zcGFyZW50KTtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4jY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMHB4OztcbiAgICBmb250LWZhbWlseTogJ3BsYXlmYWlyJywgc2Fucy1zZXJpZjtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuZm9vdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZjO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5mb290ZXIgLmF0dHJpYnV0ZXMge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuZm9vdGVyIC5hdHRyaWJ1dGVzIGxpIHtcbiAgICBtYXJnaW46IDAgMTBweDtcbn1cblxuZm9vdGVyIC5hdHRyaWJ1dGVzIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xufVxuXG5mb290ZXIgLmF0dHJpYnV0ZXMgYTpob3ZlciB7XG4gICAgY29sb3I6ICNlNWU1Zjc7XG59XG5cblxuLyogSG9tZSBDU1MgKi9cblxuI2Nhcm91c2VsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNhcm91c2VsLWlubmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xufVxuXG4uY2Fyb3VzZWwtaXRlbSB7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmNhcm91c2VsLWl0ZW0gaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLnByZXYge1xuICAgIGxlZnQ6IDEwcHg7XG59XG5cbi5uZXh0IHtcbiAgICByaWdodDogMTBweDtcbn1cblxuI2Fib3V0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmM7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMzBweDtcbn1cblxuI2V4dHJhLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMzBweDtcbn1cblxuLyogTWVudSBDU1MgKi9cblxuXG5oMiB7XG4gICAgbWFyZ2luOiAwcHggYXV0byAyMHB4O1xufVxuXG4ubWVudS1pdGVtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xuICAgIGdhcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgLyogRmFpbnQgYm90dG9tIHNoYWRvdyAqL1xufVxuXG4ubWVudS1waWMtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5tZW51LXBpYyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5tZW51LWRlc2Mge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm1lbnUtaXRlbS1uYW1lIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ubWVudS10ZXh0IHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBtYXJnaW46IDVweCAwO1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxuLm1lbnUtcHJpY2Uge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIG1hcmdpbjogMCAyMHB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4vKiBDb250YWN0IENTUyAqL1xuXG4uY29udGFjdC1wYWdlIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgbWFyZ2luOiAwcHggYXV0byAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhY3QtaW5mby1kaXYge1xuICAgIG1hcmdpbjogMjBweCAwO1xufVxuXG4uY29udGFjdC1pbmZvLWRpdiBwIHtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuLmNvbnRhY3QtaW5mby1kaXYgYSB7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY29udGFjdC1pbmZvLWRpdiBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmNvbnRhY3QtZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTVweDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmZvcm0tZ3JvdXAgbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmZvcm0tZ3JvdXAgaW5wdXQsXG4uZm9ybS1ncm91cCB0ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbmJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICBjb2xvcjogI2U1ZTVmNztcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgY29sb3IgMC4zcztcbn1cblxuYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1Zjc7XG4gICAgY29sb3I6ICMzMzM7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCOytEQUNpRjtJQUNqRixtQkFBbUI7SUFDbkIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHVPQUF1TztJQUN2Tyw2Q0FBNkM7SUFDN0MsMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLHlC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QUNyQjs7QUFFQSxnQkFBZ0I7O0FBRWhCO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZUFBZTtJQUNmLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAncGxheWZhaXInO1xcbiAgICBzcmM6IHVybCgnLi9mb250cy9wbGF5ZmFpcmRpc3BsYXktdmFyaWFibGVmb250X3dnaHQtd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgICB1cmwoJy4vZm9udHMvcGxheWZhaXJkaXNwbGF5LXZhcmlhYmxlZm9udF93Z2h0LXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuXFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWY3O1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNjOGM4YzggMjUlLCB0cmFuc3BhcmVudCAyNSUpLCBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjYzhjOGM4IDI1JSwgdHJhbnNwYXJlbnQgMjUlKSwgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjYzhjOGM4IDI1JSwgdHJhbnNwYXJlbnQgMjUlKSwgbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2M4YzhjOCAyNSUsICNlNWU1ZjcgMjUlKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTBweCAwLCAxMHB4IDAsIDAgMCwgMCAwO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwcHggMTBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmM7XFxuICAgIGJveC1zaGFkb3c6IC01cHggMCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjUpLCA1cHggMCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBoZWlnaHQ6IDE1MDBweDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmhlYWRlciBuYXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbmhlYWRlciAjbG9nbyB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIG1heC13aWR0aDogMjAwcHg7XFxufVxcblxcbiNsb2dvIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5uYXYtYnRuIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogIzMzMztcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJhY2tncm91bmQtY29sb3IgMC4zcztcXG59XFxuXFxuLm5hdi1idG46aG92ZXIge1xcbiAgICBjb2xvcjogI2U1ZTVmNztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc3R5bGlzaC1ociB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdHJhbnNwYXJlbnQsIHJnYmEoMCwgMCwgMCwgMC41KSwgdHJhbnNwYXJlbnQpO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvIDBweDs7XFxuICAgIGZvbnQtZmFtaWx5OiAncGxheWZhaXInLCBzYW5zLXNlcmlmO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZjO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIC5hdHRyaWJ1dGVzIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuZm9vdGVyIC5hdHRyaWJ1dGVzIGxpIHtcXG4gICAgbWFyZ2luOiAwIDEwcHg7XFxufVxcblxcbmZvb3RlciAuYXR0cmlidXRlcyBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogIzMzMztcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XFxufVxcblxcbmZvb3RlciAuYXR0cmlidXRlcyBhOmhvdmVyIHtcXG4gICAgY29sb3I6ICNlNWU1Zjc7XFxufVxcblxcblxcbi8qIEhvbWUgQ1NTICovXFxuXFxuI2Nhcm91c2VsIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZGRkO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uY2Fyb3VzZWwtaW5uZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xcbn1cXG5cXG4uY2Fyb3VzZWwtaXRlbSB7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY2Fyb3VzZWwtaXRlbSBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5jYXJvdXNlbC1jb250cm9sIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5wcmV2IHtcXG4gICAgbGVmdDogMTBweDtcXG59XFxuXFxuLm5leHQge1xcbiAgICByaWdodDogMTBweDtcXG59XFxuXFxuI2Fib3V0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmM7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvIDMwcHg7XFxufVxcblxcbiNleHRyYS1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMzBweDtcXG59XFxuXFxuLyogTWVudSBDU1MgKi9cXG5cXG5cXG5oMiB7XFxuICAgIG1hcmdpbjogMHB4IGF1dG8gMjBweDtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEpOyAvKiBGYWludCBib3R0b20gc2hhZG93ICovXFxufVxcblxcbi5tZW51LXBpYy1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLm1lbnUtcGljIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLm1lbnUtZGVzYyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0tbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubWVudS10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIG1hcmdpbjogNXB4IDA7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLm1lbnUtcHJpY2Uge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgbWFyZ2luOiAwIDIwcHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4vKiBDb250YWN0IENTUyAqL1xcblxcbi5jb250YWN0LXBhZ2Uge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgICBtYXJnaW46IDBweCBhdXRvIDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QtaW5mby1kaXYge1xcbiAgICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuLmNvbnRhY3QtaW5mby1kaXYgcCB7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLmNvbnRhY3QtaW5mby1kaXYgYSB7XFxuICAgIGNvbG9yOiAjMzMzO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5jb250YWN0LWluZm8tZGl2IGE6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLmNvbnRhY3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLmZvcm0tZ3JvdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLmZvcm0tZ3JvdXAgbGFiZWwge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZm9ybS1ncm91cCBpbnB1dCxcXG4uZm9ybS1ncm91cCB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICBjb2xvcjogI2U1ZTVmNztcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgY29sb3IgMC4zcztcXG59XFxuXFxuYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVmNztcXG4gICAgY29sb3I6ICMzMzM7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xubGV0IGN1cnJlbnRJbmRleCA9IDA7XG5sZXQgaW50ZXJ2YWw7XG5cbmZ1bmN0aW9uIHNob3dTbGlkZShpbmRleCkge1xuICAgIGNvbnN0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbC1pdGVtJyk7XG4gICAgaWYgKGluZGV4ID49IHNsaWRlcy5sZW5ndGgpIHtcbiAgICAgICAgY3VycmVudEluZGV4ID0gMDtcbiAgICB9IGVsc2UgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICBjdXJyZW50SW5kZXggPSBzbGlkZXMubGVuZ3RoIC0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50SW5kZXggPSBpbmRleDtcbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXQgPSAtY3VycmVudEluZGV4ICogMTAwO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbC1pbm5lcicpLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7b2Zmc2V0fSUpYDtcbn1cblxuZnVuY3Rpb24gbmV4dFNsaWRlKCkge1xuICAgIHNob3dTbGlkZShjdXJyZW50SW5kZXggKyAxKTtcbn1cblxuZnVuY3Rpb24gcHJldlNsaWRlKCkge1xuICAgIHNob3dTbGlkZShjdXJyZW50SW5kZXggLSAxKTtcbn1cblxuZnVuY3Rpb24gc3RhcnRDYXJvdXNlbCgpIHtcbiAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKG5leHRTbGlkZSwgMzAwMCk7XG59XG5cbmZ1bmN0aW9uIHN0b3BDYXJvdXNlbCgpIHtcbiAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbn1cblxuZXhwb3J0IHsgbmV4dFNsaWRlLCBwcmV2U2xpZGUsIHN0YXJ0Q2Fyb3VzZWwsIHN0b3BDYXJvdXNlbCB9OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0KCkge1xuICAgIFxuICAgIGNvbnN0IGNvbnRhY3RQYWdlID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2NvbnRhY3QtcGFnZSd9KTtcblxuICAgIGNvbnN0IGNvbnRhY3RIZWFkZXIgPSBjcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnRhY3RIZWFkZXIudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcyc7XG4gICAgY29uc3QgY29udGFjdFRleHQgPSBjcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGFjdFRleHQudGV4dENvbnRlbnQgPSAnSWYgeW91IGhhdmUgYW55IHF1ZXN0aW9ucywgZmVlbCBmcmVlIHRvIHJlYWNoIG91dCB0byB1cyB2aWEgZW1haWwgb3IgcGhvbmUsIG9yIHVzZSB0aGUgY29udGFjdCBmb3JtIGJlbG93Lic7XG4gICAgY29udGFjdFBhZ2UuYXBwZW5kQ2hpbGQoY29udGFjdEhlYWRlcik7XG4gICAgY29udGFjdFBhZ2UuYXBwZW5kQ2hpbGQoY29udGFjdFRleHQpO1xuXG4gICAgY29uc3QgY29udGFjdEluZm9EaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnY29udGFjdC1pbmZvLWRpdid9KTtcbiAgICBjb25zdCBjb250YWN0SW5mb0VtYWlsID0gY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3RJbmZvRW1haWwuaW5uZXJIVE1MID0gJ0VtYWlsOiA8YSBocmVmPVwibWFpbHRvOmNvbnRhY3RAbm9ibGVmYXJtcy5jb21cIj5jb250YWN0QG5vYmxlZmFybXMuY29tPC9hPic7XG4gICAgY29uc3QgY29udGFjdEluZm9QaG9uZSA9IGNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250YWN0SW5mb1Bob25lLmlubmVySFRNTCA9ICdQaG9uZTogPGEgaHJlZj1cInRlbDorMTIzNDU2Nzg5MFwiPigxMjMpIDQ1Ni03ODkwPC9hPic7XG4gICAgY29udGFjdEluZm9EaXYuYXBwZW5kQ2hpbGQoY29udGFjdEluZm9FbWFpbCk7XG4gICAgY29udGFjdEluZm9EaXYuYXBwZW5kQ2hpbGQoY29udGFjdEluZm9QaG9uZSk7XG4gICAgY29udGFjdFBhZ2UuYXBwZW5kQ2hpbGQoY29udGFjdEluZm9EaXYpO1xuXG4gICAgY29uc3QgY29udGFjdEZvcm0gPSBjcmVhdGVFbGVtZW50KCdmb3JtJywgeyBjbGFzczogJ2NvbnRhY3QtZm9ybSd9KTtcbiAgICBcbiAgICBjb25zdCBmb3JtR3JvdXAxID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2Zvcm0tZ3JvdXAnfSk7XG4gICAgY29uc3QgbGFiZWwxID0gY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7IGZvcjogJ25hbWUnfSk7XG4gICAgbGFiZWwxLnRleHRDb250ZW50ID0gJ05hbWU6JztcbiAgICBjb25zdCBpbnB1dDEgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHsgdHlwZTogJ3RleHQnLCBpZDogJ25hbWUnLCBuYW1lOiAnbmFtZScsIHJlcXVpcmVkOiAnJyB9KTtcbiAgICBmb3JtR3JvdXAxLmFwcGVuZENoaWxkKGxhYmVsMSk7XG4gICAgZm9ybUdyb3VwMS5hcHBlbmRDaGlsZChpbnB1dDEpO1xuXG4gICAgY29uc3QgZm9ybUdyb3VwMiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdmb3JtLWdyb3VwJ30pO1xuICAgIGNvbnN0IGxhYmVsMiA9IGNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgeyBmb3I6ICdlbWFpbCd9KTtcbiAgICBsYWJlbDIudGV4dENvbnRlbnQgPSAnRW1haWw6JztcbiAgICBjb25zdCBpbnB1dDIgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHsgdHlwZTogJ2VtYWlsJywgaWQ6ICdlbWFpbCcsIG5hbWU6ICdlbWFpbCcsIHJlcXVpcmVkOiAnJyB9KTtcbiAgICBmb3JtR3JvdXAyLmFwcGVuZENoaWxkKGxhYmVsMik7XG4gICAgZm9ybUdyb3VwMi5hcHBlbmRDaGlsZChpbnB1dDIpO1xuXG4gICAgY29uc3QgZm9ybUdyb3VwMyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdmb3JtLWdyb3VwJ30pO1xuICAgIGNvbnN0IGxhYmVsMyA9IGNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgeyBmb3I6ICdwaG9uZSd9KTtcbiAgICBsYWJlbDMudGV4dENvbnRlbnQgPSAnUGhvbmU6JztcbiAgICBjb25zdCBpbnB1dDMgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHsgdHlwZTogJ3RlbCcsIGlkOiAncGhvbmUnLCBuYW1lOiAncGhvbmUnIH0pO1xuICAgIGZvcm1Hcm91cDMuYXBwZW5kQ2hpbGQobGFiZWwzKTtcbiAgICBmb3JtR3JvdXAzLmFwcGVuZENoaWxkKGlucHV0Myk7XG5cbiAgICBjb25zdCBmb3JtR3JvdXA0ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2Zvcm0tZ3JvdXAnfSk7XG4gICAgY29uc3QgbGFiZWw0ID0gY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7IGZvcjogJ21lc3NhZ2UnfSk7XG4gICAgbGFiZWw0LnRleHRDb250ZW50ID0gJ01lc3NhZ2U6JztcbiAgICBjb25zdCBpbnB1dDQgPSBjcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScsIHsgaWQ6ICdtZXNzYWdlJywgbmFtZTogJ21lc3NhZ2UnLCByb3dzOiAnNScsIHJlcXVpcmVkOiAnJyB9KTtcbiAgICBmb3JtR3JvdXA0LmFwcGVuZENoaWxkKGxhYmVsNCk7XG4gICAgZm9ybUdyb3VwNC5hcHBlbmRDaGlsZChpbnB1dDQpO1xuXG4gICAgY29uc3Qgc3VibWl0ID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgeyB0eXBlOiAnc3VibWl0JyB9KTtcbiAgICBzdWJtaXQudGV4dENvbnRlbnQgPSAnU3VibWl0JztcblxuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGZvcm1Hcm91cDEpO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGZvcm1Hcm91cDIpO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGZvcm1Hcm91cDMpO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGZvcm1Hcm91cDQpO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbiAgICBjb250YWN0UGFnZS5hcHBlbmRDaGlsZChjb250YWN0Rm9ybSk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RQYWdlKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZywgYXR0cmlidXRlcyA9IHt9KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcblxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpKSB7XG4gICAgICAgIGlmIChrZXkgPT09ICdjbGFzcycpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnaWQnKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdzcmMnIHx8IGtleSA9PT0gJ2FsdCcpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ29uY2xpY2snKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xufVxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBwcmV2U2xpZGUsIG5leHRTbGlkZSwgc3RhcnRDYXJvdXNlbCB9IGZyb20gXCIuL2Nhcm91c2VsLmpzXCI7XG5pbXBvcnQgbm9ibGVGYXJtc0JyaXNrZXQgZnJvbSAnLi9pbWcvbm9ibGUtZmFybXMtYnJpc2tldC5wbmcnO1xuaW1wb3J0IG5vYmxlRmFybXNDaGlja2VuIGZyb20gJy4vaW1nL25vYmxlLWZhcm1zLWNoaWNrZW4ucG5nJztcbmltcG9ydCBub2JsZUZhcm1zU2FsbW9uIGZyb20gJy4vaW1nL25vYmxlLWZhcm1zLXNhbG1vbi5wbmcnO1xuaW1wb3J0IG5vYmxlRmFybXNCZWVmIGZyb20gJy4vaW1nL25vYmxlLWZhcm1zLWJlZWYucG5nJztcblxuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lKCkge1xuICAgIGNvbnN0IGNhcm91c2VsID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBpZDogJ2Nhcm91c2VsJyB9KTtcbiAgICBjb25zdCBjYXJvdXNlbElubmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2Nhcm91c2VsLWlubmVyJyB9KTtcbiAgICBjb25zdCBjYXJvdXNlbEl0ZW1BY3RpdmUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnY2Fyb3VzZWwtaXRlbSBhY3RpdmUnIH0pO1xuICAgIGNvbnN0IGNhcm91c2VsUGhvdG8xID0gY3JlYXRlRWxlbWVudCgnaW1nJywgeyBzcmM6IG5vYmxlRmFybXNDaGlja2VuLCBjbGFzczogJ2Nhcm91c2VsLXBob3RvJywgYWx0OiAnbWVudSBpdGVtIDEnIH0pO1xuICAgIGNhcm91c2VsSXRlbUFjdGl2ZS5hcHBlbmRDaGlsZChjYXJvdXNlbFBob3RvMSk7XG4gICAgY2Fyb3VzZWxJbm5lci5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW1BY3RpdmUpO1xuXG4gICAgY29uc3QgY2Fyb3VzZWxJdGVtMSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdjYXJvdXNlbC1pdGVtJyB9KTtcbiAgICBjb25zdCBjYXJvdXNlbFBob3RvMiA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgc3JjOiBub2JsZUZhcm1zQnJpc2tldCwgY2xhc3M6ICdjYXJvdXNlbC1waG90bycsIGFsdDogJ21lbnUgaXRlbSAyJyB9KTtcbiAgICBjYXJvdXNlbEl0ZW0xLmFwcGVuZENoaWxkKGNhcm91c2VsUGhvdG8yKTtcbiAgICBjYXJvdXNlbElubmVyLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbTEpO1xuXG4gICAgY29uc3QgY2Fyb3VzZWxJdGVtMiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdjYXJvdXNlbC1pdGVtJyB9KTtcbiAgICBjb25zdCBjYXJvdXNlbFBob3RvMyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgc3JjOiBub2JsZUZhcm1zU2FsbW9uLCBjbGFzczogJ2Nhcm91c2VsLXBob3RvJywgYWx0OiAnbWVudSBpdGVtIDMnIH0pO1xuICAgIGNhcm91c2VsSXRlbTIuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxQaG90bzMpO1xuICAgIGNhcm91c2VsSW5uZXIuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtMik7XG5cbiAgICBjb25zdCBjYXJvdXNlbEl0ZW0zID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2Nhcm91c2VsLWl0ZW0nIH0pO1xuICAgIGNvbnN0IGNhcm91c2VsUGhvdG80ID0gY3JlYXRlRWxlbWVudCgnaW1nJywgeyBzcmM6IG5vYmxlRmFybXNCZWVmLCBjbGFzczogJ2Nhcm91c2VsLXBob3RvJywgYWx0OiAnbWVudSBpdGVtIDMnIH0pO1xuICAgIGNhcm91c2VsSXRlbTMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxQaG90bzQpO1xuICAgIGNhcm91c2VsSW5uZXIuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtMyk7XG5cbiAgICBjb25zdCBwcmV2QnV0dG9uID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgeyBjbGFzczogJ2Nhcm91c2VsLWNvbnRyb2wgcHJldicgfSk7XG4gICAgcHJldkJ1dHRvbi50ZXh0Q29udGVudCA9ICfina4nO1xuICAgIHByZXZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcmV2U2xpZGUpO1xuICAgIGNvbnN0IG5leHRCdXR0b24gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCB7IGNsYXNzOiAnY2Fyb3VzZWwtY29udHJvbCBuZXh0JyB9KTtcbiAgICBuZXh0QnV0dG9uLnRleHRDb250ZW50ID0gJ+Kdryc7XG4gICAgbmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5leHRTbGlkZSk7XG5cbiAgICBjYXJvdXNlbC5hcHBlbmRDaGlsZChjYXJvdXNlbElubmVyKTtcbiAgICBjYXJvdXNlbC5hcHBlbmRDaGlsZChwcmV2QnV0dG9uKTtcbiAgICBjYXJvdXNlbC5hcHBlbmRDaGlsZChuZXh0QnV0dG9uKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY2Fyb3VzZWwpO1xuICAgIHN0YXJ0Q2Fyb3VzZWwoKTtcblxuICAgIGNvbnN0IGFib3V0ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBpZDogJ2Fib3V0JyB9KTtcbiAgICBjb25zdCBhYm91dEhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoJ2gzJywgeyBjbGFzczogJ2hlYWRlcicgfSk7XG4gICAgYWJvdXRIZWFkZXIudGV4dENvbnRlbnQgPSAnQWJvdXQnO1xuICAgIGNvbnN0IGFib3V0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhYm91dFRleHQuaW5uZXJIVE1MID0gJ1dlbGNvbWUgdG8gPHN0cm9uZz5Ob2JsZSBGYXJtczwvc3Ryb25nPiwgd2hlcmUgZXZlcnkgYml0ZSBpcyBhIHRlc3RhbWVudCB0byB0aGUgYmVhdXR5IG9mIG5hdHVyZSBhbmQgdGhlIGFydCBvZiBzdXN0YWluYWJsZSBsaXZpbmcuIE91ciBmYXJtLXRvLW1vdXRoIHBoaWxvc29waHkgZW5zdXJlcyB0aGF0IGVhY2ggZGlzaCBpcyBjcmFmdGVkIHdpdGggdGhlIGZyZXNoZXN0IHByb2R1Y2UgYW5kIGV0aGljYWxseSByYWlzZWQgbWVhdHMsIGFsbCBncm93biBvbiBvdXIgb3duIGxhbmQuIEltbWVyc2UgeW91cnNlbGYgaW4gYSBkaW5pbmcgZXhwZXJpZW5jZSB0aGF0IGNlbGVicmF0ZXMgY3JlYXRpdml0eSwgc3VzdGFpbmFiaWxpdHksIGFuZCB0aGUgZmluZXN0IGZsYXZvcnMsIG1ldGljdWxvdXNseSBjdWx0aXZhdGVkIGZyb20gb3VyIGZpZWxkcyB0byB5b3VyIHRhYmxlLic7XG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRIZWFkZXIpO1xuICAgIGFib3V0LmFwcGVuZENoaWxkKGFib3V0VGV4dCk7XG5cbiAgICBjb25zdCBleHRyYUluZm8gPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGlkOiAnZXh0cmEtaW5mbyd9KTtcbiAgICBcbiAgICBjb25zdCBob3VycyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgaWQ6ICdob3VycycgfSk7XG4gICAgY29uc3QgaG91cnNIZWFkZXIgPSBjcmVhdGVFbGVtZW50KCdoMycsIHsgY2xhc3M6ICdoZWFkZXInIH0pO1xuICAgIGhvdXJzSGVhZGVyLnRleHRDb250ZW50ID0gJ0hvdXJzJztcbiAgICBjb25zdCBob3Vyc1RleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGhvdXJzVGV4dDEudGV4dENvbnRlbnQgPSAnTW9uZGF5IC0gRnJpZGF5OiAxMnBtIC0gOHBtJztcbiAgICBjb25zdCBob3Vyc1RleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGhvdXJzVGV4dDIudGV4dENvbnRlbnQgPSAnU2F0dXJkYXk6IDEycG0gLSAxMHBtJztcbiAgICBjb25zdCBob3Vyc1RleHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGhvdXJzVGV4dDMudGV4dENvbnRlbnQgPSAnU3VuZGF5OiAxMGFtIC0gOHBtJztcbiAgICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc0hlYWRlcik7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNUZXh0MSk7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNUZXh0Mik7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNUZXh0Myk7XG4gICAgZXh0cmFJbmZvLmFwcGVuZENoaWxkKGhvdXJzKTtcblxuICAgIGNvbnN0IGxvY2F0aW9uID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBpZDogJ2xvY2F0aW9uJyB9KTtcbiAgICBjb25zdCBsb2NhdGlvbkhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoJ2gzJywgeyBjbGFzczogJ2hlYWRlcicgfSk7XG4gICAgbG9jYXRpb25IZWFkZXIudGV4dENvbnRlbnQgPSAnTG9jYXRpb24nO1xuICAgIGNvbnN0IGxvY2F0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsb2NhdGlvblRleHQuaW5uZXJIVE1MID0gJzEyMyBBYmMgQm91bGV2YXJkIDxiciAvPiBMb3MgQW5nZWxlcywgQ0EgPGJyIC8+OTAwMDEnO1xuICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uSGVhZGVyKTtcbiAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvblRleHQpO1xuICAgIGV4dHJhSW5mby5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGV4dHJhSW5mbyk7XG59IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50LmpzXCI7XG5pbXBvcnQgbm9ibGVGYXJtc0NoaWNrZW4gZnJvbSAnLi9pbWcvbm9ibGUtZmFybXMtY2hpY2tlbi5wbmcnO1xuaW1wb3J0IG5vYmxlRmFybXNCcmlza2V0IGZyb20gJy4vaW1nL25vYmxlLWZhcm1zLWJyaXNrZXQucG5nJztcbmltcG9ydCBub2JsZUZhcm1zU2FsbW9uIGZyb20gJy4vaW1nL25vYmxlLWZhcm1zLXNhbG1vbi5wbmcnO1xuaW1wb3J0IG5vYmxlRmFybXNCZWVmIGZyb20gJy4vaW1nL25vYmxlLWZhcm1zLWJlZWYucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSgpIHtcblxuICAgIGNvbnN0IG1lbnVIZWFkZXIgPSBjcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG1lbnVIZWFkZXIudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgICAvLyBNZW51IEl0ZW0gMVxuICAgIGNvbnN0IG1lbnVJdGVtMSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdtZW51LWl0ZW0nfSApO1xuICAgIGNvbnN0IG1lbnVQaWNDb250YWluZXIxID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ21lbnUtcGljLWNvbnRhaW5lcid9ICk7XG4gICAgY29uc3QgbWVudVBpYzEgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCB7IHNyYzogbm9ibGVGYXJtc0NoaWNrZW4sIGNsYXNzOiAnbWVudS1waWMnfSApO1xuICAgIG1lbnVQaWNDb250YWluZXIxLmFwcGVuZENoaWxkKG1lbnVQaWMxKTtcblxuICAgIGNvbnN0IG1lbnVEZXNjMSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdtZW51LWRlc2MnfSApO1xuICAgIGNvbnN0IG1lbnVJdGVtTmFtZTEgPSBjcmVhdGVFbGVtZW50KCdoNicsIHsgY2xhc3M6ICdtZW51LWl0ZW0tbmFtZSd9ICk7XG4gICAgbWVudUl0ZW1OYW1lMS50ZXh0Q29udGVudCA9ICdSb2FzdGVkIEhlcmIgQ2hpY2tlbic7XG4gICAgY29uc3QgbWVudVRleHQxID0gY3JlYXRlRWxlbWVudCgncCcsIHsgY2xhc3M6ICdtZW51LXRleHQnfSApO1xuICAgIG1lbnVUZXh0MS50ZXh0Q29udGVudCA9ICdTdWNjdWxlbnQsIGhlcmItc2Vhc29uZWQgY2hpY2tlbiB3aXRoIGNyaXNweSBza2luLCBzZXJ2ZWQgd2l0aCBnb2xkZW4gcm9hc3RlZCBwb3RhdG9lcyBhbmQgYSBmcmVzaCBnYXJkZW4gc2FsYWQuIEFjY29tcGFuaWVkIGJ5IGNyZWFteSBoZXJiIGFpb2xpLic7XG4gICAgY29uc3QgbWVudVByaWNlMSA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzOiAnbWVudS1wcmljZSd9ICk7XG4gICAgbWVudVByaWNlMS50ZXh0Q29udGVudCA9ICdQcmljZTogJDIxLjk5JztcbiAgICBtZW51RGVzYzEuYXBwZW5kQ2hpbGQobWVudUl0ZW1OYW1lMSk7XG4gICAgbWVudURlc2MxLmFwcGVuZENoaWxkKG1lbnVUZXh0MSk7XG4gICAgbWVudURlc2MxLmFwcGVuZENoaWxkKG1lbnVQcmljZTEpO1xuXG4gICAgbWVudUl0ZW0xLmFwcGVuZENoaWxkKG1lbnVQaWNDb250YWluZXIxKTtcbiAgICBtZW51SXRlbTEuYXBwZW5kQ2hpbGQobWVudURlc2MxKTtcblxuICAgIC8vIE1lbnUgSXRlbSAyXG4gICAgY29uc3QgbWVudUl0ZW0yID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ21lbnUtaXRlbSd9ICk7XG4gICAgY29uc3QgbWVudVBpY0NvbnRhaW5lcjIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnbWVudS1waWMtY29udGFpbmVyJ30gKTtcbiAgICBjb25zdCBtZW51UGljMiA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgc3JjOiBub2JsZUZhcm1zQnJpc2tldCwgY2xhc3M6ICdtZW51LXBpYyd9ICk7XG4gICAgbWVudVBpY0NvbnRhaW5lcjIuYXBwZW5kQ2hpbGQobWVudVBpYzIpO1xuXG4gICAgY29uc3QgbWVudURlc2MyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ21lbnUtZGVzYyd9ICk7XG4gICAgY29uc3QgbWVudUl0ZW1OYW1lMiA9IGNyZWF0ZUVsZW1lbnQoJ2g2JywgeyBjbGFzczogJ21lbnUtaXRlbS1uYW1lJ30gKTtcbiAgICBtZW51SXRlbU5hbWUyLnRleHRDb250ZW50ID0gJ1Ntb2tlZCBCQlEgQnJpc2tldCBQbGF0ZSc7XG4gICAgY29uc3QgbWVudVRleHQyID0gY3JlYXRlRWxlbWVudCgncCcsIHsgY2xhc3M6ICdtZW51LXRleHQnfSApO1xuICAgIG1lbnVUZXh0Mi50ZXh0Q29udGVudCA9ICdUZW5kZXIsIHNsb3ctc21va2VkIEJCUSBicmlza2V0LCBzZXJ2ZWQgd2l0aCBncmlsbGVkIGNvcm4gb24gdGhlIGNvYiwgc2F2b3J5IHJvYXN0ZWQgdmVnZXRhYmxlcywgYW5kIGEgc2lkZSBvZiBjcmVhbXkgc2xhdy4nO1xuICAgIGNvbnN0IG1lbnVQcmljZTIgPSBjcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzczogJ21lbnUtcHJpY2UnfSApO1xuICAgIG1lbnVQcmljZTIudGV4dENvbnRlbnQgPSAnUHJpY2U6ICQyNS45OSc7XG4gICAgbWVudURlc2MyLmFwcGVuZENoaWxkKG1lbnVJdGVtTmFtZTIpO1xuICAgIG1lbnVEZXNjMi5hcHBlbmRDaGlsZChtZW51VGV4dDIpO1xuICAgIG1lbnVEZXNjMi5hcHBlbmRDaGlsZChtZW51UHJpY2UyKTtcblxuICAgIG1lbnVJdGVtMi5hcHBlbmRDaGlsZChtZW51UGljQ29udGFpbmVyMik7XG4gICAgbWVudUl0ZW0yLmFwcGVuZENoaWxkKG1lbnVEZXNjMik7XG5cbiAgICAvLyBNZW51IEl0ZW0gM1xuICAgIGNvbnN0IG1lbnVJdGVtMyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdtZW51LWl0ZW0nfSApO1xuICAgIGNvbnN0IG1lbnVQaWNDb250YWluZXIzID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ21lbnUtcGljLWNvbnRhaW5lcid9ICk7XG4gICAgY29uc3QgbWVudVBpYzMgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCB7IHNyYzogbm9ibGVGYXJtc1NhbG1vbiwgY2xhc3M6ICdtZW51LXBpYyd9ICk7XG4gICAgbWVudVBpY0NvbnRhaW5lcjMuYXBwZW5kQ2hpbGQobWVudVBpYzMpO1xuXG4gICAgY29uc3QgbWVudURlc2MzID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ21lbnUtZGVzYyd9ICk7XG4gICAgY29uc3QgbWVudUl0ZW1OYW1lMyA9IGNyZWF0ZUVsZW1lbnQoJ2g2JywgeyBjbGFzczogJ21lbnUtaXRlbS1uYW1lJ30gKTtcbiAgICBtZW51SXRlbU5hbWUzLnRleHRDb250ZW50ID0gJ0dyaWxsZWQgU2FsbW9uIHdpdGggUmljZSBhbmQgQnJvY2NvbGluaSc7XG4gICAgY29uc3QgbWVudVRleHQzID0gY3JlYXRlRWxlbWVudCgncCcsIHsgY2xhc3M6ICdtZW51LXRleHQnfSApO1xuICAgIG1lbnVUZXh0My50ZXh0Q29udGVudCA9ICdEZWxpY2lvdXNseSBncmlsbGVkIHNhbG1vbiBmaWxsZXQsIHNlcnZlZCB3aXRoIGZyYWdyYW50IHJpY2UgcGlsYWYgYW5kIHRlbmRlciBicm9jY29saW5pLCBnYXJuaXNoZWQgd2l0aCBmcmVzaCBoZXJicy4nO1xuICAgIGNvbnN0IG1lbnVQcmljZTMgPSBjcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzczogJ21lbnUtcHJpY2UnfSApO1xuICAgIG1lbnVQcmljZTMudGV4dENvbnRlbnQgPSAnUHJpY2U6ICQyMi45OSc7XG4gICAgbWVudURlc2MzLmFwcGVuZENoaWxkKG1lbnVJdGVtTmFtZTMpO1xuICAgIG1lbnVEZXNjMy5hcHBlbmRDaGlsZChtZW51VGV4dDMpO1xuICAgIG1lbnVEZXNjMy5hcHBlbmRDaGlsZChtZW51UHJpY2UzKTtcblxuICAgIG1lbnVJdGVtMy5hcHBlbmRDaGlsZChtZW51UGljQ29udGFpbmVyMyk7XG4gICAgbWVudUl0ZW0zLmFwcGVuZENoaWxkKG1lbnVEZXNjMyk7XG5cbiAgICAvLyBNZW51IEl0ZW0gNFxuICAgIGNvbnN0IG1lbnVJdGVtNCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdtZW51LWl0ZW0nfSApO1xuICAgIGNvbnN0IG1lbnVQaWNDb250YWluZXI0ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ21lbnUtcGljLWNvbnRhaW5lcid9ICk7XG4gICAgY29uc3QgbWVudVBpYzQgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCB7IHNyYzogbm9ibGVGYXJtc0JlZWYsIGNsYXNzOiAnbWVudS1waWMnfSApO1xuICAgIG1lbnVQaWNDb250YWluZXI0LmFwcGVuZENoaWxkKG1lbnVQaWM0KTtcblxuICAgIGNvbnN0IG1lbnVEZXNjNCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdtZW51LWRlc2MnfSApO1xuICAgIGNvbnN0IG1lbnVJdGVtTmFtZTQgPSBjcmVhdGVFbGVtZW50KCdoNicsIHsgY2xhc3M6ICdtZW51LWl0ZW0tbmFtZSd9ICk7XG4gICAgbWVudUl0ZW1OYW1lNC50ZXh0Q29udGVudCA9ICdCZWVmIFdlbGxpbmd0b24gd2l0aCBNYXNoZWQgUG90YXRvZXMnO1xuICAgIGNvbnN0IG1lbnVUZXh0NCA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCB7IGNsYXNzOiAnbWVudS10ZXh0J30gKTtcbiAgICBtZW51VGV4dDQudGV4dENvbnRlbnQgPSAnRWxlZ2FudCBCZWVmIFdlbGxpbmd0b24sIGZlYXR1cmluZyB0ZW5kZXIgYmVlZiB3cmFwcGVkIGluIHB1ZmYgcGFzdHJ5IHdpdGggYSBtdXNocm9vbSBkdXhlbGxlcywgc2VydmVkIGFsb25nc2lkZSBjcmVhbXkgbWFzaGVkIHBvdGF0b2VzLic7XG4gICAgY29uc3QgbWVudVByaWNlNCA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzOiAnbWVudS1wcmljZSd9ICk7XG4gICAgbWVudVByaWNlNC50ZXh0Q29udGVudCA9ICdQcmljZTogJDI5Ljk5JztcbiAgICBtZW51RGVzYzQuYXBwZW5kQ2hpbGQobWVudUl0ZW1OYW1lNCk7XG4gICAgbWVudURlc2M0LmFwcGVuZENoaWxkKG1lbnVUZXh0NCk7XG4gICAgbWVudURlc2M0LmFwcGVuZENoaWxkKG1lbnVQcmljZTQpO1xuXG4gICAgbWVudUl0ZW00LmFwcGVuZENoaWxkKG1lbnVQaWNDb250YWluZXI0KTtcbiAgICBtZW51SXRlbTQuYXBwZW5kQ2hpbGQobWVudURlc2M0KTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUhlYWRlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51SXRlbTEpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUl0ZW0yKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVJdGVtMyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51SXRlbTQpO1xuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IG5vYmxlRmFybXNMb2dvIGZyb20gJy4vaW1nL25vYmxlLWZhcm1zLWxvZ28ucG5nJztcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnQuanNcIjtcblxuaW1wb3J0IGhvbWUgZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuaW1wb3J0IHsgc3RvcENhcm91c2VsIH0gZnJvbSAnLi9jYXJvdXNlbC5qcyc7XG5cbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuY29uc3QgZGl2TG9nbyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgaWQ6ICdsb2dvJyB9KTtcbmNvbnN0IGltZ0xvZ28gPSBjcmVhdGVFbGVtZW50KCdpbWcnLCB7IHNyYzogbm9ibGVGYXJtc0xvZ28sIGFsdDogJ25vYmxlIGZhcm1zIGxvZ28nLCBjbGFzczogJ2ltZy1sb2dvJyB9KVxuZGl2TG9nby5hcHBlbmRDaGlsZChpbWdMb2dvKTtcblxuY29uc3QgbmF2ID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xuaGVhZGVyLmluc2VydEJlZm9yZShkaXZMb2dvLCBuYXYpO1xuXG5jb25zdCBociA9IGNyZWF0ZUVsZW1lbnQoJ2hyJywgeyBjbGFzczogJ3N0eWxpc2gtaHInfSk7XG5oZWFkZXIuYXBwZW5kQ2hpbGQoaHIpO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuaG9tZSgpO1xuXG5jb25zdCBuYXZCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWJ0bicpXG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1idG4uaG9tZScpXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1idG4ubWVudScpXG5jb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1idG4uY29udGFjdCcpXG5cblxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgc3RvcENhcm91c2VsKCk7XG4gICAgaG9tZSgpO1xufSk7XG5cbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgIHN0b3BDYXJvdXNlbCgpO1xuICAgIG1lbnUoKTtcbn0pO1xuXG5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICBzdG9wQ2Fyb3VzZWwoKTtcbiAgICBjb250YWN0KCk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=