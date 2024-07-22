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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/french_cottage.png */ "./src/assets/french_cottage.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    padding: 0;
    margin: 0;
}

:root {
    --main-padding: 20px;
    --large-padding: 40px;
    --largest-padding: 80px;
    
    --main-accent: rgb(122, 42, 42);
    --main-background: rgb(235, 235, 216);
    --secondary-background: rgb(245, 245, 235);
    --overlay: rgba(210, 227, 200, 0.7);

    --content-height: calc(100vh - var(--header-height) - var(--footer-height));

    --header-height: 80px;
    --footer-height: 250px;

    font-size: 18px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1, h2, h3, h4, h5, h6 {
    font-family: Georgia, 'Times New Roman', Times, serif;
}

body {
    display: flex;
    flex-direction: column;
}

#dropdown {
    height: 140px;
    background-color: var(--main-accent);
    
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: var(--main-padding);
    gap: var(--main-padding);
}

#nav-icon {
    height: 40px;
    width: 40px;
    cursor: pointer;
}

header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: var(--header-height);

    background-color: var(--main-accent);
    padding: 0 var(--main-padding);
    color: white;
}

header nav {
    display: flex;
    flex-direction: row;
    gap: var(--main-padding);
}

header button, #dropdown button {
    background-color: transparent;
    border: none;
    color: white;
    font-family: Helvetica, sans-serif;
    font-size: 1.25rem;
    cursor: pointer;
}

nav button:hover, #dropdown button:hover {
    text-decoration: underline;
}

#nav-icon {
    height: 40px;
    width: 40px;
    display: none;
}

#content {
    display: flex;
    flex-direction: column;
    
    min-height: var(--content-height);
    background-color: var(--main-background);
}

#hero-background {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center;
    background-attachment: fixed;
    height: 300px;

    display: flex;
    flex-direction: row;
}

#hero {
    flex: 1;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: var(--main-padding);

    padding: var(--large-padding);
    background-color: rgba(210, 227, 200, 0.7);
}

#hero h2 {
    font-size: 3.5rem;
    text-shadow: 2px 2px 0 white;
}

#hero p {
    font-size: 1.5rem;
    text-shadow: 1px 1px 0 white;
}

.panel {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    padding: var(--largest-padding);
}

#panel-1 {
    flex-direction: row-reverse;
}

#panel-2 {
    padding-bottom: calc(var(--largest-padding) * 1.5);
}

.panelImgContainer {
    flex: 1;
    max-width: 30%;
}

.panel img {
    max-width: 100%;
}

.panel-text {
    max-width: 50%;
    display: flex;
    flex-direction: column;
    gap: var(--main-padding);
}

.panel h2 {
    font-size: 2rem;
}

#menu-container {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center;
    background-attachment: fixed;
    min-height: var(--content-height);
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
}

#menu-overlay {
    background-color: var(--overlay);
    min-height: calc(var(--content-height) - var(--largest-padding) * 2);
    width: calc(100% - var(--largest-padding) * 2);
    padding: var(--largest-padding);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
}

#menu {
    background-color: var(--main-background);
    padding: var(--largest-padding);
    padding-top: var(--large-padding);
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: var(--main-padding);
    max-width: 800px;
    flex: 1;

    border-radius: 10px;
}

#menu h2 {
    font-size: 2rem;
}

#item-container {
    display: flex;
    justify-content: space-around;
}

.menu-column {
    display: flex;
    flex-direction: column;
    gap: var(--main-padding);
}

.menu-column h3 {
    font-size: 1.5rem;
}

.menu-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: var(--largest-padding)
}

.menu-item div {
    display: flex;
    flex-direction: column;
    align-items: start;
}

#story-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: var(--large-padding);
    padding: var(--largest-padding);
}

#story-container h2 {
    font-size: 2rem;
}

#story-container div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 1.125rem;
}

footer {
    display: flex;
    flex-direction: column;
    height: var(--footer-height);
}

#footer-content {
    flex: 1;
    background-color: var(--secondary-background);
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: var(--large-padding);
}

#footer-content a {
    color: var(--main-accent);
}

#footer-img {
    height: 100px;
}

#footer-fmc {
    display: flex;
    flex-direction: row;
    gap: var(--large-padding);
}

#footer-nav-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

footer h3 {
    font-size: 1.25rem;
}

footer nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
}

footer nav button {
    background-color: transparent;
    border: none;
    color: var(--main-accent);
    font-family: Helvetica, sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-decoration: underline;
}

#footer-image-cred-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

footer ul {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

footer ul li {
    list-style-type: none;
}

#footer-bar {
    background-color: var(--main-accent);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50px;
}

#footer-bar a {
    color: white;
}

@media screen and (min-width: 720px) {
    #dropdown {
        display: none !important;
    }
}

@media screen and (max-width: 1080px) {
    :root {
        font-size: 16px;
        --footer-height: 200px;
    }

    #hero h2 {
        font-size: 3rem;
    }

    #hero p {
        font-size: 1.25rem;
    }

    .panel {
        padding: var(--large-padding);
    }

    .panel h2 {
        font-size: 1.5rem;
    }

    #menu {
        padding: var(--large-padding);
    }

    .menu-item {
        gap: var(--large-padding)
    }

    footer h3 {
        font-size: 1.125rem;
    }

    #footer-content {
        padding: var(--main-padding);
    }
}

@media screen and (max-width: 720px) {
    header h1 {
        font-size: 1.5rem;
    }

    header nav button {
        display: none;
    }

    #nav-icon {
        display: inline;
    }

    #hero h2 {
        font-size: 2.5rem;
    }

    #hero p {
        font-size: 1rem;
    }

    .panel {
        flex-direction: column;
        gap: var(--main-padding);
    }

    #panel-1 {
        flex-direction: column;
    }

    .panel-text {
        max-width: 100%;
        gap: 10px;
    }

    .panelImgContainer {
        max-width: 80%;
    }

    #menu-background {
        padding: var(--large-padding);
        padding-bottom: var(--largest-padding);
        min-height: calc(ar(--content-height) - var(--large-padding) - var(--largest-padding));
        width: calc(100% - var(--large-padding) * 2);
    }

    #item-container {
        flex-direction: column;
        gap: var(--main-padding);
    }

    #story-container {
        padding: var(--large-padding);
    }

    #story-container h2 {
        font-size: 1.5rem;
        max-width: 30%;
    }

    #story-container p {
        font-size: 1rem;
    }

    #footer-fmc {
        flex-direction: column;
    }

    #footer-img {
        display: none;
    }

    #footer-nav-container {
        gap: 5px;
    }

    #footer-image-cred-container {
        gap: 5px;
    }
}

@media screen and (max-width: 500px) {
    :root {
        --footer-height: 280px;
    }

    #hero-background {
        height: 250px;
    }

    #hero h2 {
        font-size: 2rem;
    }

    #menu-background {
        padding: var(--main-padding);
        padding-bottom: var(--large-padding);
        min-height: calc(ar(--content-height) - var(--main-padding) - var(--large-padding));
        width: calc(100% - var(--main-padding) * 2);
    }

    #story-container {
        flex-direction: column;
        gap: var(--main-padding);
    }

    #story-container h2 {
        max-width: 100%;
    }

    #footer-content {
        flex-direction: column;
        gap: var(--main-padding);
    }

    #footer-nav-container {
        align-items: center;
    }

    #footer-image-cred-container {
        align-items: center;
    }

    footer ul {
        align-items: center;
    }
}

@media screen and (max-width: 370px) {
    :root {
        font-size: 14px;
        --header-height: 60px;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n}\n\n:root {\n    --main-padding: 20px;\n    --large-padding: 40px;\n    --largest-padding: 80px;\n    \n    --main-accent: rgb(122, 42, 42);\n    --main-background: rgb(235, 235, 216);\n    --secondary-background: rgb(245, 245, 235);\n    --overlay: rgba(210, 227, 200, 0.7);\n\n    --content-height: calc(100vh - var(--header-height) - var(--footer-height));\n\n    --header-height: 80px;\n    --footer-height: 250px;\n\n    font-size: 18px;\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\nh1, h2, h3, h4, h5, h6 {\n    font-family: Georgia, 'Times New Roman', Times, serif;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n}\n\n#dropdown {\n    height: 140px;\n    background-color: var(--main-accent);\n    \n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    padding: var(--main-padding);\n    gap: var(--main-padding);\n}\n\n#nav-icon {\n    height: 40px;\n    width: 40px;\n    cursor: pointer;\n}\n\nheader {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    height: var(--header-height);\n\n    background-color: var(--main-accent);\n    padding: 0 var(--main-padding);\n    color: white;\n}\n\nheader nav {\n    display: flex;\n    flex-direction: row;\n    gap: var(--main-padding);\n}\n\nheader button, #dropdown button {\n    background-color: transparent;\n    border: none;\n    color: white;\n    font-family: Helvetica, sans-serif;\n    font-size: 1.25rem;\n    cursor: pointer;\n}\n\nnav button:hover, #dropdown button:hover {\n    text-decoration: underline;\n}\n\n#nav-icon {\n    height: 40px;\n    width: 40px;\n    display: none;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    \n    min-height: var(--content-height);\n    background-color: var(--main-background);\n}\n\n#hero-background {\n    background: url('./assets/french_cottage.png') no-repeat center;\n    background-attachment: fixed;\n    height: 300px;\n\n    display: flex;\n    flex-direction: row;\n}\n\n#hero {\n    flex: 1;\n    \n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    gap: var(--main-padding);\n\n    padding: var(--large-padding);\n    background-color: rgba(210, 227, 200, 0.7);\n}\n\n#hero h2 {\n    font-size: 3.5rem;\n    text-shadow: 2px 2px 0 white;\n}\n\n#hero p {\n    font-size: 1.5rem;\n    text-shadow: 1px 1px 0 white;\n}\n\n.panel {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-evenly;\n\n    padding: var(--largest-padding);\n}\n\n#panel-1 {\n    flex-direction: row-reverse;\n}\n\n#panel-2 {\n    padding-bottom: calc(var(--largest-padding) * 1.5);\n}\n\n.panelImgContainer {\n    flex: 1;\n    max-width: 30%;\n}\n\n.panel img {\n    max-width: 100%;\n}\n\n.panel-text {\n    max-width: 50%;\n    display: flex;\n    flex-direction: column;\n    gap: var(--main-padding);\n}\n\n.panel h2 {\n    font-size: 2rem;\n}\n\n#menu-container {\n    background: url('./assets/french_cottage.png') no-repeat center;\n    background-attachment: fixed;\n    min-height: var(--content-height);\n    width: 100%;\n    position: relative;\n    display: flex;\n    flex-direction: row;\n}\n\n#menu-overlay {\n    background-color: var(--overlay);\n    min-height: calc(var(--content-height) - var(--largest-padding) * 2);\n    width: calc(100% - var(--largest-padding) * 2);\n    padding: var(--largest-padding);\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: flex-start;\n}\n\n#menu {\n    background-color: var(--main-background);\n    padding: var(--largest-padding);\n    padding-top: var(--large-padding);\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    gap: var(--main-padding);\n    max-width: 800px;\n    flex: 1;\n\n    border-radius: 10px;\n}\n\n#menu h2 {\n    font-size: 2rem;\n}\n\n#item-container {\n    display: flex;\n    justify-content: space-around;\n}\n\n.menu-column {\n    display: flex;\n    flex-direction: column;\n    gap: var(--main-padding);\n}\n\n.menu-column h3 {\n    font-size: 1.5rem;\n}\n\n.menu-item {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    gap: var(--largest-padding)\n}\n\n.menu-item div {\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n}\n\n#story-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    gap: var(--large-padding);\n    padding: var(--largest-padding);\n}\n\n#story-container h2 {\n    font-size: 2rem;\n}\n\n#story-container div {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    font-size: 1.125rem;\n}\n\nfooter {\n    display: flex;\n    flex-direction: column;\n    height: var(--footer-height);\n}\n\n#footer-content {\n    flex: 1;\n    background-color: var(--secondary-background);\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    padding: var(--large-padding);\n}\n\n#footer-content a {\n    color: var(--main-accent);\n}\n\n#footer-img {\n    height: 100px;\n}\n\n#footer-fmc {\n    display: flex;\n    flex-direction: row;\n    gap: var(--large-padding);\n}\n\n#footer-nav-container {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\nfooter h3 {\n    font-size: 1.25rem;\n}\n\nfooter nav {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 5px;\n}\n\nfooter nav button {\n    background-color: transparent;\n    border: none;\n    color: var(--main-accent);\n    font-family: Helvetica, sans-serif;\n    font-size: 1rem;\n    cursor: pointer;\n    text-decoration: underline;\n}\n\n#footer-image-cred-container {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\nfooter ul {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\nfooter ul li {\n    list-style-type: none;\n}\n\n#footer-bar {\n    background-color: var(--main-accent);\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 50px;\n}\n\n#footer-bar a {\n    color: white;\n}\n\n@media screen and (min-width: 720px) {\n    #dropdown {\n        display: none !important;\n    }\n}\n\n@media screen and (max-width: 1080px) {\n    :root {\n        font-size: 16px;\n        --footer-height: 200px;\n    }\n\n    #hero h2 {\n        font-size: 3rem;\n    }\n\n    #hero p {\n        font-size: 1.25rem;\n    }\n\n    .panel {\n        padding: var(--large-padding);\n    }\n\n    .panel h2 {\n        font-size: 1.5rem;\n    }\n\n    #menu {\n        padding: var(--large-padding);\n    }\n\n    .menu-item {\n        gap: var(--large-padding)\n    }\n\n    footer h3 {\n        font-size: 1.125rem;\n    }\n\n    #footer-content {\n        padding: var(--main-padding);\n    }\n}\n\n@media screen and (max-width: 720px) {\n    header h1 {\n        font-size: 1.5rem;\n    }\n\n    header nav button {\n        display: none;\n    }\n\n    #nav-icon {\n        display: inline;\n    }\n\n    #hero h2 {\n        font-size: 2.5rem;\n    }\n\n    #hero p {\n        font-size: 1rem;\n    }\n\n    .panel {\n        flex-direction: column;\n        gap: var(--main-padding);\n    }\n\n    #panel-1 {\n        flex-direction: column;\n    }\n\n    .panel-text {\n        max-width: 100%;\n        gap: 10px;\n    }\n\n    .panelImgContainer {\n        max-width: 80%;\n    }\n\n    #menu-background {\n        padding: var(--large-padding);\n        padding-bottom: var(--largest-padding);\n        min-height: calc(ar(--content-height) - var(--large-padding) - var(--largest-padding));\n        width: calc(100% - var(--large-padding) * 2);\n    }\n\n    #item-container {\n        flex-direction: column;\n        gap: var(--main-padding);\n    }\n\n    #story-container {\n        padding: var(--large-padding);\n    }\n\n    #story-container h2 {\n        font-size: 1.5rem;\n        max-width: 30%;\n    }\n\n    #story-container p {\n        font-size: 1rem;\n    }\n\n    #footer-fmc {\n        flex-direction: column;\n    }\n\n    #footer-img {\n        display: none;\n    }\n\n    #footer-nav-container {\n        gap: 5px;\n    }\n\n    #footer-image-cred-container {\n        gap: 5px;\n    }\n}\n\n@media screen and (max-width: 500px) {\n    :root {\n        --footer-height: 280px;\n    }\n\n    #hero-background {\n        height: 250px;\n    }\n\n    #hero h2 {\n        font-size: 2rem;\n    }\n\n    #menu-background {\n        padding: var(--main-padding);\n        padding-bottom: var(--large-padding);\n        min-height: calc(ar(--content-height) - var(--main-padding) - var(--large-padding));\n        width: calc(100% - var(--main-padding) * 2);\n    }\n\n    #story-container {\n        flex-direction: column;\n        gap: var(--main-padding);\n    }\n\n    #story-container h2 {\n        max-width: 100%;\n    }\n\n    #footer-content {\n        flex-direction: column;\n        gap: var(--main-padding);\n    }\n\n    #footer-nav-container {\n        align-items: center;\n    }\n\n    #footer-image-cred-container {\n        align-items: center;\n    }\n\n    footer ul {\n        align-items: center;\n    }\n}\n\n@media screen and (max-width: 370px) {\n    :root {\n        font-size: 14px;\n        --header-height: 60px;\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeDropdown: () => (/* binding */ closeDropdown),
/* harmony export */   replaceContent: () => (/* binding */ replaceContent)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/homepage.js */ "./src/modules/homepage.js");
/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu.js */ "./src/modules/menu.js");
/* harmony import */ var _modules_about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/about.js */ "./src/modules/about.js");
/* harmony import */ var _assets_frog_mushroom_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/frog_mushroom.png */ "./src/assets/frog_mushroom.png");
/* harmony import */ var _assets_nav_menu_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/nav_menu.svg */ "./src/assets/nav_menu.svg");
/* harmony import */ var _assets_close_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/close.svg */ "./src/assets/close.svg");
/* harmony import */ var _modules_dropdown_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/dropdown.js */ "./src/modules/dropdown.js");









// switch tabs by removing everything from content div and adding a new tab
function replaceContent(newChild) {
    const content = document.querySelector("#content");
    content.removeChild(document.querySelector(".content-page"));
    content.appendChild(newChild);
}

// load the icon used in the footer.
function loadImages() {
    const footerImg = document.getElementById("footer-img");
    footerImg.src = _assets_frog_mushroom_png__WEBPACK_IMPORTED_MODULE_4__;
}

// add event listeners to all nav icons
// and enable dropdown toggling for mobile layout
function activateNav () {
    const navButtons = document.querySelectorAll("nav button");
    const navFunctions = [_modules_homepage_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modules_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modules_about_js__WEBPACK_IMPORTED_MODULE_3__["default"]];
    const navNames = ["home", "menu", "about"];
    
    // add event listeners for desktop nav
    for (let i = 0; i < navButtons.length; i ++) {
        navButtons[i].addEventListener("click", () => {
            replaceContent(navFunctions[i]());
        })
    }

    const header = document.querySelector("header");
    const navIcon = document.getElementById("nav-icon");
    navIcon.src = _assets_nav_menu_svg__WEBPACK_IMPORTED_MODULE_5__;
    header.appendChild(navIcon);
    navIcon.id = "nav-icon";

    // add event listeners for mobile nav
    navIcon.addEventListener("click", () => {
        if (dropdownOpen) {
            (0,_modules_dropdown_js__WEBPACK_IMPORTED_MODULE_7__.hideDropdown)();
            navIcon.src = _assets_nav_menu_svg__WEBPACK_IMPORTED_MODULE_5__;
        }
        else {
            (0,_modules_dropdown_js__WEBPACK_IMPORTED_MODULE_7__.showDropdown)(navFunctions, navNames);
            navIcon.src = _assets_close_svg__WEBPACK_IMPORTED_MODULE_6__;
        }
        dropdownOpen = !dropdownOpen;
    });
}

let dropdownOpen = false;

// switch nav icon and set dropdownOpen to false
// used in dropdown.js to access dropdownOpen
function closeDropdown(){
    dropdownOpen = false;
    const navIcon = document.getElementById("nav-icon");
    navIcon.src = _assets_nav_menu_svg__WEBPACK_IMPORTED_MODULE_5__;
}

loadImages();
activateNav();

const content = document.querySelector("#content");
content.append((0,_modules_homepage_js__WEBPACK_IMPORTED_MODULE_1__["default"])()); // on page load or refresh, home loads by default

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadAbout)
/* harmony export */ });
function loadAbout() {
    const about = document.createElement("div");
    about.classList.add("content-page");
    loadHero(about);
    loadStory(about);
    return about;
}

function loadHero(about) {
    const heroBackground = document.createElement("div");
    heroBackground.id = "hero-background";

    const hero = document.createElement("div");
    hero.id = "hero";
    
    const heroHeader = document.createElement("h2");
    heroHeader.textContent = "our story";

    hero.append(heroHeader);
    heroBackground.append(hero);
    about.appendChild(heroBackground);
}

function loadStory(about) {
    const storyContainer = document.createElement("div");
    storyContainer.id = "story-container";

    const storyHeader = document.createElement("h2");
    storyHeader.textContent = "from humble beginnings";

    const storyTextContainer = document.createElement("div");

    const storyTexts = [
        "this is a really touching story", 
        "about how we came to be", 
        "very inspirational wow, i just shed a tear."
    ];
    for (let i = 0; i < storyTexts.length; i ++) {
        const storyText = document.createElement("p");
        storyText.textContent = storyTexts[i];
        storyTextContainer.appendChild(storyText)
    }

    storyContainer.append(storyHeader, storyTextContainer);
    about.appendChild(storyContainer);
}

/***/ }),

/***/ "./src/modules/dropdown.js":
/*!*********************************!*\
  !*** ./src/modules/dropdown.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hideDropdown: () => (/* binding */ hideDropdown),
/* harmony export */   showDropdown: () => (/* binding */ showDropdown)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
// dropdown: menu shown after user clicks menu button in navbar
// used in mobile layout.



function showDropdown(navFunctions, navNames) {
    const body = document.querySelector("body");
    const content = document.getElementById("content");

    const dropdown = document.createElement("div");
    dropdown.id = "dropdown";

    // add all navbar links to the dropdown
    for (let i = 0; i < navFunctions.length; i ++) {
        const ddLink = document.createElement("button");
        ddLink.textContent = navNames[i];
        ddLink.addEventListener("click", () => {
            (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.replaceContent)(navFunctions[i]());
            hideDropdown();
            (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.closeDropdown)();
        });
        dropdown.appendChild(ddLink);
    }

    body.insertBefore(dropdown, content);
}

function hideDropdown(){
    const body = document.querySelector("body");
    const dropdown = document.getElementById("dropdown");
    body.removeChild(dropdown);
}



/***/ }),

/***/ "./src/modules/homepage.js":
/*!*********************************!*\
  !*** ./src/modules/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _assets_frog_mushroom_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/frog_mushroom.png */ "./src/assets/frog_mushroom.png");


function loadHome() {
    const homepage = document.createElement("div");
    homepage.classList.add("content-page");
    loadHero(homepage);
    loadPanel(homepage);
    return homepage;
}

function loadHero(homepage) {
    // background image
    const heroBackground = document.createElement("div");
    heroBackground.id = "hero-background";
    
    // overlay and hero content
    const hero = document.createElement("div");
    hero.id = "hero";
    
    const heroHeader = document.createElement("h2");
    heroHeader.textContent = "your dream cottagecore haven.";

    const heroSubtext = document.createElement("p");
    heroSubtext.textContent = "join us for a beautiful culinary adventure in the land of frogs and mushrooms";

    hero.append(heroHeader, heroSubtext);
    heroBackground.appendChild(hero);
    homepage.appendChild(heroBackground);
}

// panel: one div containing a header, description, and image
// loadPanel loads all of the panels on the homepage.
function loadPanel(homepage) {
    const panelHeaders = [
        "immersive environment and elegant dining experience", 
        "hand-crafted dishes to delight your tastebuds", 
        "coming soon: truffle butter pancake stacc"
    ];
    const panelSubtexts = [
        "beautiful ambiance and live music every day! experience our adorable and ethereal themes, featuring frogs, mushrooms, and fairies",
        "fresh ingredients used every day, in every signature recipe.",
        "featuring fresh mushrooms, handmade buttermilk pancakes, and deliciously aromatic truffle butter."
    ];

    const panelImages = [_assets_frog_mushroom_png__WEBPACK_IMPORTED_MODULE_0__, _assets_frog_mushroom_png__WEBPACK_IMPORTED_MODULE_0__, _assets_frog_mushroom_png__WEBPACK_IMPORTED_MODULE_0__];

    // iterate over all panel contents
    for (let i = 0; i < 3; i ++) {
        // contains header, description, and image
        const panel = document.createElement("div");
        panel.classList.add("panel");
        panel.id = "panel-" + i;
        
        // panel image only
        const panelImgContainer = document.createElement("div");
        panelImgContainer.classList.add("panelImgContainer");
        const panelImg = document.createElement("img");
        panelImg.src = panelImages[i];
        panelImgContainer.appendChild(panelImg);
        panel.appendChild(panelImgContainer);

        // header and description
        const panelText = document.createElement("div");
        panelText.classList.add("panel-text");

        // header
        const panelHeader = document.createElement("h2");
        panelHeader.textContent = panelHeaders[i];
        panelText.append(panelHeader);

        // description
        const panelSubtext = document.createElement("p");
        panelSubtext.textContent = panelSubtexts[i];
        panelText.append(panelSubtext);

        panel.appendChild(panelText);

        homepage.appendChild(panel);
    }
}

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
function loadMenu() {
    // div within content, holds background image
    const menuContent = document.createElement("div");
    menuContent.id = "menu-container";
    menuContent.classList.add("content-page");

    // overlay on background image
    const menuOverlay = document.createElement("div");
    menuOverlay.id = "menu-overlay";

    // centered card, the actual menu
    const menu = document.createElement("div");
    menu.id = "menu";

    // "menu"
    const menuHeader = document.createElement("h2");
    menuHeader.textContent = "menu";
    menu.appendChild(menuHeader);

    // everything on menu except the header
    // separated into two columns
    const itemContainer = document.createElement("div");
    itemContainer.id = "item-container";

    // left column, contains food only
    const foodContainer = document.createElement("div");
    foodContainer.classList.add("menu-column");
    
    // "food"
    const foodHeader = document.createElement("h3");
    foodHeader.textContent = "food";
    foodContainer.appendChild(foodHeader);

    const foodNames = ["food1", "food2", "food3"];
    const foodDescriptions = ["very yummy food", "very real dish", "wow, amazing!"];
    const foodPrices = [100.00, 299.99, 159.99];

    // iterate over every food item
    for (let i = 0; i < foodNames.length; i ++) {
        // contains name, description, price
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        // contains name, description
        const menuText = document.createElement("div");

        const name = document.createElement("h4");
        name.textContent = foodNames[i];

        const description = document.createElement("p");
        description.textContent = foodDescriptions[i];

        menuText.append(name, description);
        menuItem.append(menuText);

        const price = document.createElement("p");
        price.textContent = foodPrices[i];

        menuItem.append(price);
        foodContainer.append(menuItem);
    }

    // right column, contains drinks only
    const drinkContainer = document.createElement("div");
    drinkContainer.classList.add("menu-column");

    // "drinks"
    const drinksHeader = document.createElement("h3");
    drinksHeader.textContent = "drinks";
    drinkContainer.append(drinksHeader);

    const drinkNames = ["drink1", "drink2", "drink3"];
    const drinkDescriptions = ["very yummy drink", "very real drink", "wow, amazing!"];
    const drinkPrices = [100.00, 299.99, 159.99];

    // iterate over every drink item
    for (let i = 0; i < drinkNames.length; i ++) {
        // contains name, description, price
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        // contains name, description
        const menuText = document.createElement("div");

        const name = document.createElement("h4");
        name.textContent = drinkNames[i];
        const description = document.createElement("p");
        description.textContent = drinkDescriptions[i];
        menuText.append(name, description);
        menuItem.append(menuText);

        const price = document.createElement("p");
        price.textContent = drinkPrices[i];
        menuItem.append(price);

        drinkContainer.append(menuItem);
    }

    itemContainer.append(foodContainer, drinkContainer);

    menu.appendChild(itemContainer);
    menuOverlay.appendChild(menu);
    menuContent.appendChild(menuOverlay);
    return menuContent;
}

/***/ }),

/***/ "./src/assets/close.svg":
/*!******************************!*\
  !*** ./src/assets/close.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9382830c8e5fa9c75730.svg";

/***/ }),

/***/ "./src/assets/french_cottage.png":
/*!***************************************!*\
  !*** ./src/assets/french_cottage.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "87e13597499b3af4e140.png";

/***/ }),

/***/ "./src/assets/frog_mushroom.png":
/*!**************************************!*\
  !*** ./src/assets/frog_mushroom.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "72388b94ef8b5fd071da.png";

/***/ }),

/***/ "./src/assets/nav_menu.svg":
/*!*********************************!*\
  !*** ./src/assets/nav_menu.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b466edf1286163d7a79.svg";

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsbUlBQThDO0FBQzFGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsY0FBYyxjQUFjLGFBQWEsY0FBYyxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFlBQVksVUFBVSxZQUFZLE9BQU8sS0FBSyxXQUFXLFVBQVUsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFlBQVksWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSw0QkFBNEIsaUJBQWlCLGdCQUFnQixHQUFHLFdBQVcsMkJB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OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mcmVuY2hfY290dGFnZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG46cm9vdCB7XG4gICAgLS1tYWluLXBhZGRpbmc6IDIwcHg7XG4gICAgLS1sYXJnZS1wYWRkaW5nOiA0MHB4O1xuICAgIC0tbGFyZ2VzdC1wYWRkaW5nOiA4MHB4O1xuICAgIFxuICAgIC0tbWFpbi1hY2NlbnQ6IHJnYigxMjIsIDQyLCA0Mik7XG4gICAgLS1tYWluLWJhY2tncm91bmQ6IHJnYigyMzUsIDIzNSwgMjE2KTtcbiAgICAtLXNlY29uZGFyeS1iYWNrZ3JvdW5kOiByZ2IoMjQ1LCAyNDUsIDIzNSk7XG4gICAgLS1vdmVybGF5OiByZ2JhKDIxMCwgMjI3LCAyMDAsIDAuNyk7XG5cbiAgICAtLWNvbnRlbnQtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkgLSB2YXIoLS1mb290ZXItaGVpZ2h0KSk7XG5cbiAgICAtLWhlYWRlci1oZWlnaHQ6IDgwcHg7XG4gICAgLS1mb290ZXItaGVpZ2h0OiAyNTBweDtcblxuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG59XG5cbmJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI2Ryb3Bkb3duIHtcbiAgICBoZWlnaHQ6IDE0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYWNjZW50KTtcbiAgICBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmc6IHZhcigtLW1haW4tcGFkZGluZyk7XG4gICAgZ2FwOiB2YXIoLS1tYWluLXBhZGRpbmcpO1xufVxuXG4jbmF2LWljb24ge1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFjY2VudCk7XG4gICAgcGFkZGluZzogMCB2YXIoLS1tYWluLXBhZGRpbmcpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuaGVhZGVyIG5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGdhcDogdmFyKC0tbWFpbi1wYWRkaW5nKTtcbn1cblxuaGVhZGVyIGJ1dHRvbiwgI2Ryb3Bkb3duIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbm5hdiBidXR0b246aG92ZXIsICNkcm9wZG93biBidXR0b246aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4jbmF2LWljb24ge1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4jY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIFxuICAgIG1pbi1oZWlnaHQ6IHZhcigtLWNvbnRlbnQtaGVpZ2h0KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQpO1xufVxuXG4jaGVyby1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgbm8tcmVwZWF0IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGhlaWdodDogMzAwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbiNoZXJvIHtcbiAgICBmbGV4OiAxO1xuICAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGdhcDogdmFyKC0tbWFpbi1wYWRkaW5nKTtcblxuICAgIHBhZGRpbmc6IHZhcigtLWxhcmdlLXBhZGRpbmcpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEwLCAyMjcsIDIwMCwgMC43KTtcbn1cblxuI2hlcm8gaDIge1xuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDAgd2hpdGU7XG59XG5cbiNoZXJvIHAge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDAgd2hpdGU7XG59XG5cbi5wYW5lbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cbiAgICBwYWRkaW5nOiB2YXIoLS1sYXJnZXN0LXBhZGRpbmcpO1xufVxuXG4jcGFuZWwtMSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuXG4jcGFuZWwtMiB7XG4gICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tbGFyZ2VzdC1wYWRkaW5nKSAqIDEuNSk7XG59XG5cbi5wYW5lbEltZ0NvbnRhaW5lciB7XG4gICAgZmxleDogMTtcbiAgICBtYXgtd2lkdGg6IDMwJTtcbn1cblxuLnBhbmVsIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4ucGFuZWwtdGV4dCB7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogdmFyKC0tbWFpbi1wYWRkaW5nKTtcbn1cblxuLnBhbmVsIGgyIHtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbiNtZW51LWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS1jb250ZW50LWhlaWdodCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuI21lbnUtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3ZlcmxheSk7XG4gICAgbWluLWhlaWdodDogY2FsYyh2YXIoLS1jb250ZW50LWhlaWdodCkgLSB2YXIoLS1sYXJnZXN0LXBhZGRpbmcpICogMik7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIHZhcigtLWxhcmdlc3QtcGFkZGluZykgKiAyKTtcbiAgICBwYWRkaW5nOiB2YXIoLS1sYXJnZXN0LXBhZGRpbmcpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuI21lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZCk7XG4gICAgcGFkZGluZzogdmFyKC0tbGFyZ2VzdC1wYWRkaW5nKTtcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tbGFyZ2UtcGFkZGluZyk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBnYXA6IHZhcigtLW1haW4tcGFkZGluZyk7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBmbGV4OiAxO1xuXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI21lbnUgaDIge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuI2l0ZW0tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4ubWVudS1jb2x1bW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IHZhcigtLW1haW4tcGFkZGluZyk7XG59XG5cbi5tZW51LWNvbHVtbiBoMyB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5tZW51LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiB2YXIoLS1sYXJnZXN0LXBhZGRpbmcpXG59XG5cbi5tZW51LWl0ZW0gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xufVxuXG4jc3RvcnktY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZ2FwOiB2YXIoLS1sYXJnZS1wYWRkaW5nKTtcbiAgICBwYWRkaW5nOiB2YXIoLS1sYXJnZXN0LXBhZGRpbmcpO1xufVxuXG4jc3RvcnktY29udGFpbmVyIGgyIHtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbiNzdG9yeS1jb250YWluZXIgZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG59XG5cbmZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XG59XG5cbiNmb290ZXItY29udGVudCB7XG4gICAgZmxleDogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIHBhZGRpbmc6IHZhcigtLWxhcmdlLXBhZGRpbmcpO1xufVxuXG4jZm9vdGVyLWNvbnRlbnQgYSB7XG4gICAgY29sb3I6IHZhcigtLW1haW4tYWNjZW50KTtcbn1cblxuI2Zvb3Rlci1pbWcge1xuICAgIGhlaWdodDogMTAwcHg7XG59XG5cbiNmb290ZXItZm1jIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZ2FwOiB2YXIoLS1sYXJnZS1wYWRkaW5nKTtcbn1cblxuI2Zvb3Rlci1uYXYtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xufVxuXG5mb290ZXIgaDMge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuZm9vdGVyIG5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogNXB4O1xufVxuXG5mb290ZXIgbmF2IGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLWFjY2VudCk7XG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4jZm9vdGVyLWltYWdlLWNyZWQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xufVxuXG5mb290ZXIgdWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDVweDtcbn1cblxuZm9vdGVyIHVsIGxpIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbiNmb290ZXItYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFjY2VudCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuI2Zvb3Rlci1iYXIgYSB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCkge1xuICAgICNkcm9wZG93biB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwODBweCkge1xuICAgIDpyb290IHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAtLWZvb3Rlci1oZWlnaHQ6IDIwMHB4O1xuICAgIH1cblxuICAgICNoZXJvIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgIH1cblxuICAgICNoZXJvIHAge1xuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgfVxuXG4gICAgLnBhbmVsIHtcbiAgICAgICAgcGFkZGluZzogdmFyKC0tbGFyZ2UtcGFkZGluZyk7XG4gICAgfVxuXG4gICAgLnBhbmVsIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgfVxuXG4gICAgI21lbnUge1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1sYXJnZS1wYWRkaW5nKTtcbiAgICB9XG5cbiAgICAubWVudS1pdGVtIHtcbiAgICAgICAgZ2FwOiB2YXIoLS1sYXJnZS1wYWRkaW5nKVxuICAgIH1cblxuICAgIGZvb3RlciBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgfVxuXG4gICAgI2Zvb3Rlci1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogdmFyKC0tbWFpbi1wYWRkaW5nKTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gICAgaGVhZGVyIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgfVxuXG4gICAgaGVhZGVyIG5hdiBidXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICNuYXYtaWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICB9XG5cbiAgICAjaGVybyBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIH1cblxuICAgICNoZXJvIHAge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuXG4gICAgLnBhbmVsIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiB2YXIoLS1tYWluLXBhZGRpbmcpO1xuICAgIH1cblxuICAgICNwYW5lbC0xIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAucGFuZWwtdGV4dCB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgZ2FwOiAxMHB4O1xuICAgIH1cblxuICAgIC5wYW5lbEltZ0NvbnRhaW5lciB7XG4gICAgICAgIG1heC13aWR0aDogODAlO1xuICAgIH1cblxuICAgICNtZW51LWJhY2tncm91bmQge1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1sYXJnZS1wYWRkaW5nKTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IHZhcigtLWxhcmdlc3QtcGFkZGluZyk7XG4gICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoYXIoLS1jb250ZW50LWhlaWdodCkgLSB2YXIoLS1sYXJnZS1wYWRkaW5nKSAtIHZhcigtLWxhcmdlc3QtcGFkZGluZykpO1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0tbGFyZ2UtcGFkZGluZykgKiAyKTtcbiAgICB9XG5cbiAgICAjaXRlbS1jb250YWluZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IHZhcigtLW1haW4tcGFkZGluZyk7XG4gICAgfVxuXG4gICAgI3N0b3J5LWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWxhcmdlLXBhZGRpbmcpO1xuICAgIH1cblxuICAgICNzdG9yeS1jb250YWluZXIgaDIge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgbWF4LXdpZHRoOiAzMCU7XG4gICAgfVxuXG4gICAgI3N0b3J5LWNvbnRhaW5lciBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cblxuICAgICNmb290ZXItZm1jIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAjZm9vdGVyLWltZyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgI2Zvb3Rlci1uYXYtY29udGFpbmVyIHtcbiAgICAgICAgZ2FwOiA1cHg7XG4gICAgfVxuXG4gICAgI2Zvb3Rlci1pbWFnZS1jcmVkLWNvbnRhaW5lciB7XG4gICAgICAgIGdhcDogNXB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICA6cm9vdCB7XG4gICAgICAgIC0tZm9vdGVyLWhlaWdodDogMjgwcHg7XG4gICAgfVxuXG4gICAgI2hlcm8tYmFja2dyb3VuZCB7XG4gICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgfVxuXG4gICAgI2hlcm8gaDIge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxuXG4gICAgI21lbnUtYmFja2dyb3VuZCB7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLW1haW4tcGFkZGluZyk7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1sYXJnZS1wYWRkaW5nKTtcbiAgICAgICAgbWluLWhlaWdodDogY2FsYyhhcigtLWNvbnRlbnQtaGVpZ2h0KSAtIHZhcigtLW1haW4tcGFkZGluZykgLSB2YXIoLS1sYXJnZS1wYWRkaW5nKSk7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSB2YXIoLS1tYWluLXBhZGRpbmcpICogMik7XG4gICAgfVxuXG4gICAgI3N0b3J5LWNvbnRhaW5lciB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogdmFyKC0tbWFpbi1wYWRkaW5nKTtcbiAgICB9XG5cbiAgICAjc3RvcnktY29udGFpbmVyIGgyIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICNmb290ZXItY29udGVudCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogdmFyKC0tbWFpbi1wYWRkaW5nKTtcbiAgICB9XG5cbiAgICAjZm9vdGVyLW5hdi1jb250YWluZXIge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgICNmb290ZXItaW1hZ2UtY3JlZC1jb250YWluZXIge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIGZvb3RlciB1bCB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzBweCkge1xuICAgIDpyb290IHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAtLWhlYWRlci1oZWlnaHQ6IDYwcHg7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHVCQUF1Qjs7SUFFdkIsK0JBQStCO0lBQy9CLHFDQUFxQztJQUNyQywwQ0FBMEM7SUFDMUMsbUNBQW1DOztJQUVuQywyRUFBMkU7O0lBRTNFLHFCQUFxQjtJQUNyQixzQkFBc0I7O0lBRXRCLGVBQWU7SUFDZiwyREFBMkQ7QUFDL0Q7O0FBRUE7SUFDSSxxREFBcUQ7QUFDekQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFB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SSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0Qix3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsU0FBUztJQUNiOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLDZCQUE2QjtRQUM3QixzQ0FBc0M7UUFDdEMsc0ZBQXNGO1FBQ3RGLDRDQUE0QztJQUNoRDs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0Qix3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsY0FBYztJQUNsQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksUUFBUTtJQUNaOztJQUVBO1FBQ0ksUUFBUTtJQUNaO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksNEJBQTRCO1FBQzVCLG9DQUFvQztRQUNwQyxtRkFBbUY7UUFDbkYsMkNBQTJDO0lBQy9DOztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsd0JBQXdCO0lBQzVCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZixxQkFBcUI7SUFDekI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tbWFpbi1wYWRkaW5nOiAyMHB4O1xcbiAgICAtLWxhcmdlLXBhZGRpbmc6IDQwcHg7XFxuICAgIC0tbGFyZ2VzdC1wYWRkaW5nOiA4MHB4O1xcbiAgICBcXG4gICAgLS1tYWluLWFjY2VudDogcmdiKDEyMiwgNDIsIDQyKTtcXG4gICAgLS1tYWluLWJhY2tncm91bmQ6IHJnYigyMzUsIDIzNSwgMjE2KTtcXG4gICAgLS1zZWNvbmRhcnktYmFja2dyb3VuZDogcmdiKDI0NSwgMjQ1LCAyMzUpO1xcbiAgICAtLW92ZXJsYXk6IHJnYmEoMjEwLCAyMjcsIDIwMCwgMC43KTtcXG5cXG4gICAgLS1jb250ZW50LWhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpIC0gdmFyKC0tZm9vdGVyLWhlaWdodCkpO1xcblxcbiAgICAtLWhlYWRlci1oZWlnaHQ6IDgwcHg7XFxuICAgIC0tZm9vdGVyLWhlaWdodDogMjUwcHg7XFxuXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNkcm9wZG93biB7XFxuICAgIGhlaWdodDogMTQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYWNjZW50KTtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgcGFkZGluZzogdmFyKC0tbWFpbi1wYWRkaW5nKTtcXG4gICAgZ2FwOiB2YXIoLS1tYWluLXBhZGRpbmcpO1xcbn1cXG5cXG4jbmF2LWljb24ge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hY2NlbnQpO1xcbiAgICBwYWRkaW5nOiAwIHZhcigtLW1haW4tcGFkZGluZyk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaGVhZGVyIG5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogdmFyKC0tbWFpbi1wYWRkaW5nKTtcXG59XFxuXFxuaGVhZGVyIGJ1dHRvbiwgI2Ryb3Bkb3duIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbm5hdiBidXR0b246aG92ZXIsICNkcm9wZG93biBidXR0b246aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuI25hdi1pY29uIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBcXG4gICAgbWluLWhlaWdodDogdmFyKC0tY29udGVudC1oZWlnaHQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQpO1xcbn1cXG5cXG4jaGVyby1iYWNrZ3JvdW5kIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuL2Fzc2V0cy9mcmVuY2hfY290dGFnZS5wbmcnKSBuby1yZXBlYXQgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4jaGVybyB7XFxuICAgIGZsZXg6IDE7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBnYXA6IHZhcigtLW1haW4tcGFkZGluZyk7XFxuXFxuICAgIHBhZGRpbmc6IHZhcigtLWxhcmdlLXBhZGRpbmcpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMCwgMjI3LCAyMDAsIDAuNyk7XFxufVxcblxcbiNoZXJvIGgyIHtcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDAgd2hpdGU7XFxufVxcblxcbiNoZXJvIHAge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMCB3aGl0ZTtcXG59XFxuXFxuLnBhbmVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFxuICAgIHBhZGRpbmc6IHZhcigtLWxhcmdlc3QtcGFkZGluZyk7XFxufVxcblxcbiNwYW5lbC0xIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbn1cXG5cXG4jcGFuZWwtMiB7XFxuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLWxhcmdlc3QtcGFkZGluZykgKiAxLjUpO1xcbn1cXG5cXG4ucGFuZWxJbWdDb250YWluZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBtYXgtd2lkdGg6IDMwJTtcXG59XFxuXFxuLnBhbmVsIGltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLnBhbmVsLXRleHQge1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiB2YXIoLS1tYWluLXBhZGRpbmcpO1xcbn1cXG5cXG4ucGFuZWwgaDIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbiNtZW51LWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9hc3NldHMvZnJlbmNoX2NvdHRhZ2UucG5nJykgbm8tcmVwZWF0IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgbWluLWhlaWdodDogdmFyKC0tY29udGVudC1oZWlnaHQpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4jbWVudS1vdmVybGF5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3ZlcmxheSk7XFxuICAgIG1pbi1oZWlnaHQ6IGNhbGModmFyKC0tY29udGVudC1oZWlnaHQpIC0gdmFyKC0tbGFyZ2VzdC1wYWRkaW5nKSAqIDIpO1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0tbGFyZ2VzdC1wYWRkaW5nKSAqIDIpO1xcbiAgICBwYWRkaW5nOiB2YXIoLS1sYXJnZXN0LXBhZGRpbmcpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbiNtZW51IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kKTtcXG4gICAgcGFkZGluZzogdmFyKC0tbGFyZ2VzdC1wYWRkaW5nKTtcXG4gICAgcGFkZGluZy10b3A6IHZhcigtLWxhcmdlLXBhZGRpbmcpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDogdmFyKC0tbWFpbi1wYWRkaW5nKTtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG4gICAgZmxleDogMTtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI21lbnUgaDIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbiNpdGVtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4ubWVudS1jb2x1bW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IHZhcigtLW1haW4tcGFkZGluZyk7XFxufVxcblxcbi5tZW51LWNvbHVtbiBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IHZhcigtLWxhcmdlc3QtcGFkZGluZylcXG59XFxuXFxuLm1lbnUtaXRlbSBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcblxcbiNzdG9yeS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZ2FwOiB2YXIoLS1sYXJnZS1wYWRkaW5nKTtcXG4gICAgcGFkZGluZzogdmFyKC0tbGFyZ2VzdC1wYWRkaW5nKTtcXG59XFxuXFxuI3N0b3J5LWNvbnRhaW5lciBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuI3N0b3J5LWNvbnRhaW5lciBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XFxufVxcblxcbiNmb290ZXItY29udGVudCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHBhZGRpbmc6IHZhcigtLWxhcmdlLXBhZGRpbmcpO1xcbn1cXG5cXG4jZm9vdGVyLWNvbnRlbnQgYSB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWFjY2VudCk7XFxufVxcblxcbiNmb290ZXItaW1nIHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuI2Zvb3Rlci1mbWMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IHZhcigtLWxhcmdlLXBhZGRpbmcpO1xcbn1cXG5cXG4jZm9vdGVyLW5hdi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbmZvb3RlciBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuZm9vdGVyIG5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuZm9vdGVyIG5hdiBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1hY2NlbnQpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbiNmb290ZXItaW1hZ2UtY3JlZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbmZvb3RlciB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG5mb290ZXIgdWwgbGkge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbiNmb290ZXItYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hY2NlbnQpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbiNmb290ZXItYmFyIGEge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMHB4KSB7XFxuICAgICNkcm9wZG93biB7XFxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA4MHB4KSB7XFxuICAgIDpyb290IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgIC0tZm9vdGVyLWhlaWdodDogMjAwcHg7XFxuICAgIH1cXG5cXG4gICAgI2hlcm8gaDIge1xcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB9XFxuXFxuICAgICNoZXJvIHAge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICB9XFxuXFxuICAgIC5wYW5lbCB7XFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1sYXJnZS1wYWRkaW5nKTtcXG4gICAgfVxcblxcbiAgICAucGFuZWwgaDIge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIH1cXG5cXG4gICAgI21lbnUge1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tbGFyZ2UtcGFkZGluZyk7XFxuICAgIH1cXG5cXG4gICAgLm1lbnUtaXRlbSB7XFxuICAgICAgICBnYXA6IHZhcigtLWxhcmdlLXBhZGRpbmcpXFxuICAgIH1cXG5cXG4gICAgZm9vdGVyIGgzIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICAgIH1cXG5cXG4gICAgI2Zvb3Rlci1jb250ZW50IHtcXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLW1haW4tcGFkZGluZyk7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcXG4gICAgaGVhZGVyIGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciBuYXYgYnV0dG9uIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgI25hdi1pY29uIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgfVxcblxcbiAgICAjaGVybyBoMiB7XFxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgfVxcblxcbiAgICAjaGVybyBwIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgfVxcblxcbiAgICAucGFuZWwge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogdmFyKC0tbWFpbi1wYWRkaW5nKTtcXG4gICAgfVxcblxcbiAgICAjcGFuZWwtMSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5wYW5lbC10ZXh0IHtcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgfVxcblxcbiAgICAucGFuZWxJbWdDb250YWluZXIge1xcbiAgICAgICAgbWF4LXdpZHRoOiA4MCU7XFxuICAgIH1cXG5cXG4gICAgI21lbnUtYmFja2dyb3VuZCB7XFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1sYXJnZS1wYWRkaW5nKTtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1sYXJnZXN0LXBhZGRpbmcpO1xcbiAgICAgICAgbWluLWhlaWdodDogY2FsYyhhcigtLWNvbnRlbnQtaGVpZ2h0KSAtIHZhcigtLWxhcmdlLXBhZGRpbmcpIC0gdmFyKC0tbGFyZ2VzdC1wYWRkaW5nKSk7XFxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0tbGFyZ2UtcGFkZGluZykgKiAyKTtcXG4gICAgfVxcblxcbiAgICAjaXRlbS1jb250YWluZXIge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogdmFyKC0tbWFpbi1wYWRkaW5nKTtcXG4gICAgfVxcblxcbiAgICAjc3RvcnktY29udGFpbmVyIHtcXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWxhcmdlLXBhZGRpbmcpO1xcbiAgICB9XFxuXFxuICAgICNzdG9yeS1jb250YWluZXIgaDIge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICBtYXgtd2lkdGg6IDMwJTtcXG4gICAgfVxcblxcbiAgICAjc3RvcnktY29udGFpbmVyIHAge1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgICNmb290ZXItZm1jIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgI2Zvb3Rlci1pbWcge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAjZm9vdGVyLW5hdi1jb250YWluZXIge1xcbiAgICAgICAgZ2FwOiA1cHg7XFxuICAgIH1cXG5cXG4gICAgI2Zvb3Rlci1pbWFnZS1jcmVkLWNvbnRhaW5lciB7XFxuICAgICAgICBnYXA6IDVweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICA6cm9vdCB7XFxuICAgICAgICAtLWZvb3Rlci1oZWlnaHQ6IDI4MHB4O1xcbiAgICB9XFxuXFxuICAgICNoZXJvLWJhY2tncm91bmQge1xcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgfVxcblxcbiAgICAjaGVybyBoMiB7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH1cXG5cXG4gICAgI21lbnUtYmFja2dyb3VuZCB7XFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1tYWluLXBhZGRpbmcpO1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IHZhcigtLWxhcmdlLXBhZGRpbmcpO1xcbiAgICAgICAgbWluLWhlaWdodDogY2FsYyhhcigtLWNvbnRlbnQtaGVpZ2h0KSAtIHZhcigtLW1haW4tcGFkZGluZykgLSB2YXIoLS1sYXJnZS1wYWRkaW5nKSk7XFxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0tbWFpbi1wYWRkaW5nKSAqIDIpO1xcbiAgICB9XFxuXFxuICAgICNzdG9yeS1jb250YWluZXIge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogdmFyKC0tbWFpbi1wYWRkaW5nKTtcXG4gICAgfVxcblxcbiAgICAjc3RvcnktY29udGFpbmVyIGgyIHtcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAjZm9vdGVyLWNvbnRlbnQge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogdmFyKC0tbWFpbi1wYWRkaW5nKTtcXG4gICAgfVxcblxcbiAgICAjZm9vdGVyLW5hdi1jb250YWluZXIge1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjZm9vdGVyLWltYWdlLWNyZWQtY29udGFpbmVyIHtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgZm9vdGVyIHVsIHtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzcwcHgpIHtcXG4gICAgOnJvb3Qge1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgLS1oZWFkZXItaGVpZ2h0OiA2MHB4O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGxvYWRIb21lIGZyb20gJy4vbW9kdWxlcy9ob21lcGFnZS5qcyc7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9tb2R1bGVzL21lbnUuanMnO1xuaW1wb3J0IGxvYWRBYm91dCBmcm9tICcuL21vZHVsZXMvYWJvdXQuanMnO1xuaW1wb3J0IEZyb2dNdXNocm9vbSBmcm9tICcuL2Fzc2V0cy9mcm9nX211c2hyb29tLnBuZyc7XG5pbXBvcnQgTmF2TWVudSBmcm9tICcuL2Fzc2V0cy9uYXZfbWVudS5zdmcnO1xuaW1wb3J0IENsb3NlIGZyb20gJy4vYXNzZXRzL2Nsb3NlLnN2Zyc7XG5pbXBvcnQgeyBzaG93RHJvcGRvd24sIGhpZGVEcm9wZG93biB9IGZyb20gJy4vbW9kdWxlcy9kcm9wZG93bi5qcyc7XG5cbi8vIHN3aXRjaCB0YWJzIGJ5IHJlbW92aW5nIGV2ZXJ5dGhpbmcgZnJvbSBjb250ZW50IGRpdiBhbmQgYWRkaW5nIGEgbmV3IHRhYlxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VDb250ZW50KG5ld0NoaWxkKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1wYWdlXCIpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcbn1cblxuLy8gbG9hZCB0aGUgaWNvbiB1c2VkIGluIHRoZSBmb290ZXIuXG5mdW5jdGlvbiBsb2FkSW1hZ2VzKCkge1xuICAgIGNvbnN0IGZvb3RlckltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9vdGVyLWltZ1wiKTtcbiAgICBmb290ZXJJbWcuc3JjID0gRnJvZ011c2hyb29tO1xufVxuXG4vLyBhZGQgZXZlbnQgbGlzdGVuZXJzIHRvIGFsbCBuYXYgaWNvbnNcbi8vIGFuZCBlbmFibGUgZHJvcGRvd24gdG9nZ2xpbmcgZm9yIG1vYmlsZSBsYXlvdXRcbmZ1bmN0aW9uIGFjdGl2YXRlTmF2ICgpIHtcbiAgICBjb25zdCBuYXZCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIm5hdiBidXR0b25cIik7XG4gICAgY29uc3QgbmF2RnVuY3Rpb25zID0gW2xvYWRIb21lLCBsb2FkTWVudSwgbG9hZEFib3V0XTtcbiAgICBjb25zdCBuYXZOYW1lcyA9IFtcImhvbWVcIiwgXCJtZW51XCIsIFwiYWJvdXRcIl07XG4gICAgXG4gICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVycyBmb3IgZGVza3RvcCBuYXZcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdkJ1dHRvbnMubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgIG5hdkJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHJlcGxhY2VDb250ZW50KG5hdkZ1bmN0aW9uc1tpXSgpKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuICAgIGNvbnN0IG5hdkljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1pY29uXCIpO1xuICAgIG5hdkljb24uc3JjID0gTmF2TWVudTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2SWNvbik7XG4gICAgbmF2SWNvbi5pZCA9IFwibmF2LWljb25cIjtcblxuICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lcnMgZm9yIG1vYmlsZSBuYXZcbiAgICBuYXZJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChkcm9wZG93bk9wZW4pIHtcbiAgICAgICAgICAgIGhpZGVEcm9wZG93bigpO1xuICAgICAgICAgICAgbmF2SWNvbi5zcmMgPSBOYXZNZW51O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2hvd0Ryb3Bkb3duKG5hdkZ1bmN0aW9ucywgbmF2TmFtZXMpO1xuICAgICAgICAgICAgbmF2SWNvbi5zcmMgPSBDbG9zZTtcbiAgICAgICAgfVxuICAgICAgICBkcm9wZG93bk9wZW4gPSAhZHJvcGRvd25PcGVuO1xuICAgIH0pO1xufVxuXG5sZXQgZHJvcGRvd25PcGVuID0gZmFsc2U7XG5cbi8vIHN3aXRjaCBuYXYgaWNvbiBhbmQgc2V0IGRyb3Bkb3duT3BlbiB0byBmYWxzZVxuLy8gdXNlZCBpbiBkcm9wZG93bi5qcyB0byBhY2Nlc3MgZHJvcGRvd25PcGVuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VEcm9wZG93bigpe1xuICAgIGRyb3Bkb3duT3BlbiA9IGZhbHNlO1xuICAgIGNvbnN0IG5hdkljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1pY29uXCIpO1xuICAgIG5hdkljb24uc3JjID0gTmF2TWVudTtcbn1cblxubG9hZEltYWdlcygpO1xuYWN0aXZhdGVOYXYoKTtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbmNvbnRlbnQuYXBwZW5kKGxvYWRIb21lKCkpOyAvLyBvbiBwYWdlIGxvYWQgb3IgcmVmcmVzaCwgaG9tZSBsb2FkcyBieSBkZWZhdWx0IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEFib3V0KCkge1xuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhYm91dC5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1wYWdlXCIpO1xuICAgIGxvYWRIZXJvKGFib3V0KTtcbiAgICBsb2FkU3RvcnkoYWJvdXQpO1xuICAgIHJldHVybiBhYm91dDtcbn1cblxuZnVuY3Rpb24gbG9hZEhlcm8oYWJvdXQpIHtcbiAgICBjb25zdCBoZXJvQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVyb0JhY2tncm91bmQuaWQgPSBcImhlcm8tYmFja2dyb3VuZFwiO1xuXG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVyby5pZCA9IFwiaGVyb1wiO1xuICAgIFxuICAgIGNvbnN0IGhlcm9IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaGVyb0hlYWRlci50ZXh0Q29udGVudCA9IFwib3VyIHN0b3J5XCI7XG5cbiAgICBoZXJvLmFwcGVuZChoZXJvSGVhZGVyKTtcbiAgICBoZXJvQmFja2dyb3VuZC5hcHBlbmQoaGVybyk7XG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQoaGVyb0JhY2tncm91bmQpO1xufVxuXG5mdW5jdGlvbiBsb2FkU3RvcnkoYWJvdXQpIHtcbiAgICBjb25zdCBzdG9yeUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3RvcnlDb250YWluZXIuaWQgPSBcInN0b3J5LWNvbnRhaW5lclwiO1xuXG4gICAgY29uc3Qgc3RvcnlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgc3RvcnlIZWFkZXIudGV4dENvbnRlbnQgPSBcImZyb20gaHVtYmxlIGJlZ2lubmluZ3NcIjtcblxuICAgIGNvbnN0IHN0b3J5VGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBzdG9yeVRleHRzID0gW1xuICAgICAgICBcInRoaXMgaXMgYSByZWFsbHkgdG91Y2hpbmcgc3RvcnlcIiwgXG4gICAgICAgIFwiYWJvdXQgaG93IHdlIGNhbWUgdG8gYmVcIiwgXG4gICAgICAgIFwidmVyeSBpbnNwaXJhdGlvbmFsIHdvdywgaSBqdXN0IHNoZWQgYSB0ZWFyLlwiXG4gICAgXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0b3J5VGV4dHMubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgIGNvbnN0IHN0b3J5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBzdG9yeVRleHQudGV4dENvbnRlbnQgPSBzdG9yeVRleHRzW2ldO1xuICAgICAgICBzdG9yeVRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RvcnlUZXh0KVxuICAgIH1cblxuICAgIHN0b3J5Q29udGFpbmVyLmFwcGVuZChzdG9yeUhlYWRlciwgc3RvcnlUZXh0Q29udGFpbmVyKTtcbiAgICBhYm91dC5hcHBlbmRDaGlsZChzdG9yeUNvbnRhaW5lcik7XG59IiwiLy8gZHJvcGRvd246IG1lbnUgc2hvd24gYWZ0ZXIgdXNlciBjbGlja3MgbWVudSBidXR0b24gaW4gbmF2YmFyXG4vLyB1c2VkIGluIG1vYmlsZSBsYXlvdXQuXG5cbmltcG9ydCB7IHJlcGxhY2VDb250ZW50LCBjbG9zZURyb3Bkb3duIH0gZnJvbSAnLi4vaW5kZXguanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0Ryb3Bkb3duKG5hdkZ1bmN0aW9ucywgbmF2TmFtZXMpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICAgIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkcm9wZG93bi5pZCA9IFwiZHJvcGRvd25cIjtcblxuICAgIC8vIGFkZCBhbGwgbmF2YmFyIGxpbmtzIHRvIHRoZSBkcm9wZG93blxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2RnVuY3Rpb25zLmxlbmd0aDsgaSArKykge1xuICAgICAgICBjb25zdCBkZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBkZExpbmsudGV4dENvbnRlbnQgPSBuYXZOYW1lc1tpXTtcbiAgICAgICAgZGRMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICByZXBsYWNlQ29udGVudChuYXZGdW5jdGlvbnNbaV0oKSk7XG4gICAgICAgICAgICBoaWRlRHJvcGRvd24oKTtcbiAgICAgICAgICAgIGNsb3NlRHJvcGRvd24oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKGRkTGluayk7XG4gICAgfVxuXG4gICAgYm9keS5pbnNlcnRCZWZvcmUoZHJvcGRvd24sIGNvbnRlbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZURyb3Bkb3duKCl7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wZG93blwiKTtcbiAgICBib2R5LnJlbW92ZUNoaWxkKGRyb3Bkb3duKTtcbn1cblxuIiwiaW1wb3J0IEZyb2dNdXNocm9vbSBmcm9tICcuLi9hc3NldHMvZnJvZ19tdXNocm9vbS5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgICBjb25zdCBob21lcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG9tZXBhZ2UuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtcGFnZVwiKTtcbiAgICBsb2FkSGVybyhob21lcGFnZSk7XG4gICAgbG9hZFBhbmVsKGhvbWVwYWdlKTtcbiAgICByZXR1cm4gaG9tZXBhZ2U7XG59XG5cbmZ1bmN0aW9uIGxvYWRIZXJvKGhvbWVwYWdlKSB7XG4gICAgLy8gYmFja2dyb3VuZCBpbWFnZVxuICAgIGNvbnN0IGhlcm9CYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZXJvQmFja2dyb3VuZC5pZCA9IFwiaGVyby1iYWNrZ3JvdW5kXCI7XG4gICAgXG4gICAgLy8gb3ZlcmxheSBhbmQgaGVybyBjb250ZW50XG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVyby5pZCA9IFwiaGVyb1wiO1xuICAgIFxuICAgIGNvbnN0IGhlcm9IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaGVyb0hlYWRlci50ZXh0Q29udGVudCA9IFwieW91ciBkcmVhbSBjb3R0YWdlY29yZSBoYXZlbi5cIjtcblxuICAgIGNvbnN0IGhlcm9TdWJ0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaGVyb1N1YnRleHQudGV4dENvbnRlbnQgPSBcImpvaW4gdXMgZm9yIGEgYmVhdXRpZnVsIGN1bGluYXJ5IGFkdmVudHVyZSBpbiB0aGUgbGFuZCBvZiBmcm9ncyBhbmQgbXVzaHJvb21zXCI7XG5cbiAgICBoZXJvLmFwcGVuZChoZXJvSGVhZGVyLCBoZXJvU3VidGV4dCk7XG4gICAgaGVyb0JhY2tncm91bmQuYXBwZW5kQ2hpbGQoaGVybyk7XG4gICAgaG9tZXBhZ2UuYXBwZW5kQ2hpbGQoaGVyb0JhY2tncm91bmQpO1xufVxuXG4vLyBwYW5lbDogb25lIGRpdiBjb250YWluaW5nIGEgaGVhZGVyLCBkZXNjcmlwdGlvbiwgYW5kIGltYWdlXG4vLyBsb2FkUGFuZWwgbG9hZHMgYWxsIG9mIHRoZSBwYW5lbHMgb24gdGhlIGhvbWVwYWdlLlxuZnVuY3Rpb24gbG9hZFBhbmVsKGhvbWVwYWdlKSB7XG4gICAgY29uc3QgcGFuZWxIZWFkZXJzID0gW1xuICAgICAgICBcImltbWVyc2l2ZSBlbnZpcm9ubWVudCBhbmQgZWxlZ2FudCBkaW5pbmcgZXhwZXJpZW5jZVwiLCBcbiAgICAgICAgXCJoYW5kLWNyYWZ0ZWQgZGlzaGVzIHRvIGRlbGlnaHQgeW91ciB0YXN0ZWJ1ZHNcIiwgXG4gICAgICAgIFwiY29taW5nIHNvb246IHRydWZmbGUgYnV0dGVyIHBhbmNha2Ugc3RhY2NcIlxuICAgIF07XG4gICAgY29uc3QgcGFuZWxTdWJ0ZXh0cyA9IFtcbiAgICAgICAgXCJiZWF1dGlmdWwgYW1iaWFuY2UgYW5kIGxpdmUgbXVzaWMgZXZlcnkgZGF5ISBleHBlcmllbmNlIG91ciBhZG9yYWJsZSBhbmQgZXRoZXJlYWwgdGhlbWVzLCBmZWF0dXJpbmcgZnJvZ3MsIG11c2hyb29tcywgYW5kIGZhaXJpZXNcIixcbiAgICAgICAgXCJmcmVzaCBpbmdyZWRpZW50cyB1c2VkIGV2ZXJ5IGRheSwgaW4gZXZlcnkgc2lnbmF0dXJlIHJlY2lwZS5cIixcbiAgICAgICAgXCJmZWF0dXJpbmcgZnJlc2ggbXVzaHJvb21zLCBoYW5kbWFkZSBidXR0ZXJtaWxrIHBhbmNha2VzLCBhbmQgZGVsaWNpb3VzbHkgYXJvbWF0aWMgdHJ1ZmZsZSBidXR0ZXIuXCJcbiAgICBdO1xuXG4gICAgY29uc3QgcGFuZWxJbWFnZXMgPSBbRnJvZ011c2hyb29tLCBGcm9nTXVzaHJvb20sIEZyb2dNdXNocm9vbV07XG5cbiAgICAvLyBpdGVyYXRlIG92ZXIgYWxsIHBhbmVsIGNvbnRlbnRzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICsrKSB7XG4gICAgICAgIC8vIGNvbnRhaW5zIGhlYWRlciwgZGVzY3JpcHRpb24sIGFuZCBpbWFnZVxuICAgICAgICBjb25zdCBwYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoXCJwYW5lbFwiKTtcbiAgICAgICAgcGFuZWwuaWQgPSBcInBhbmVsLVwiICsgaTtcbiAgICAgICAgXG4gICAgICAgIC8vIHBhbmVsIGltYWdlIG9ubHlcbiAgICAgICAgY29uc3QgcGFuZWxJbWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwYW5lbEltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicGFuZWxJbWdDb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHBhbmVsSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgcGFuZWxJbWcuc3JjID0gcGFuZWxJbWFnZXNbaV07XG4gICAgICAgIHBhbmVsSW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhbmVsSW1nKTtcbiAgICAgICAgcGFuZWwuYXBwZW5kQ2hpbGQocGFuZWxJbWdDb250YWluZXIpO1xuXG4gICAgICAgIC8vIGhlYWRlciBhbmQgZGVzY3JpcHRpb25cbiAgICAgICAgY29uc3QgcGFuZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcGFuZWxUZXh0LmNsYXNzTGlzdC5hZGQoXCJwYW5lbC10ZXh0XCIpO1xuXG4gICAgICAgIC8vIGhlYWRlclxuICAgICAgICBjb25zdCBwYW5lbEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgcGFuZWxIZWFkZXIudGV4dENvbnRlbnQgPSBwYW5lbEhlYWRlcnNbaV07XG4gICAgICAgIHBhbmVsVGV4dC5hcHBlbmQocGFuZWxIZWFkZXIpO1xuXG4gICAgICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgICAgIGNvbnN0IHBhbmVsU3VidGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBwYW5lbFN1YnRleHQudGV4dENvbnRlbnQgPSBwYW5lbFN1YnRleHRzW2ldO1xuICAgICAgICBwYW5lbFRleHQuYXBwZW5kKHBhbmVsU3VidGV4dCk7XG5cbiAgICAgICAgcGFuZWwuYXBwZW5kQ2hpbGQocGFuZWxUZXh0KTtcblxuICAgICAgICBob21lcGFnZS5hcHBlbmRDaGlsZChwYW5lbCk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAgIC8vIGRpdiB3aXRoaW4gY29udGVudCwgaG9sZHMgYmFja2dyb3VuZCBpbWFnZVxuICAgIGNvbnN0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51Q29udGVudC5pZCA9IFwibWVudS1jb250YWluZXJcIjtcbiAgICBtZW51Q29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1wYWdlXCIpO1xuXG4gICAgLy8gb3ZlcmxheSBvbiBiYWNrZ3JvdW5kIGltYWdlXG4gICAgY29uc3QgbWVudU92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVPdmVybGF5LmlkID0gXCJtZW51LW92ZXJsYXlcIjtcblxuICAgIC8vIGNlbnRlcmVkIGNhcmQsIHRoZSBhY3R1YWwgbWVudVxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnUuaWQgPSBcIm1lbnVcIjtcblxuICAgIC8vIFwibWVudVwiXG4gICAgY29uc3QgbWVudUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBtZW51SGVhZGVyLnRleHRDb250ZW50ID0gXCJtZW51XCI7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51SGVhZGVyKTtcblxuICAgIC8vIGV2ZXJ5dGhpbmcgb24gbWVudSBleGNlcHQgdGhlIGhlYWRlclxuICAgIC8vIHNlcGFyYXRlZCBpbnRvIHR3byBjb2x1bW5zXG4gICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbUNvbnRhaW5lci5pZCA9IFwiaXRlbS1jb250YWluZXJcIjtcblxuICAgIC8vIGxlZnQgY29sdW1uLCBjb250YWlucyBmb29kIG9ubHlcbiAgICBjb25zdCBmb29kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb29kQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbHVtblwiKTtcbiAgICBcbiAgICAvLyBcImZvb2RcIlxuICAgIGNvbnN0IGZvb2RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgZm9vZEhlYWRlci50ZXh0Q29udGVudCA9IFwiZm9vZFwiO1xuICAgIGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vZEhlYWRlcik7XG5cbiAgICBjb25zdCBmb29kTmFtZXMgPSBbXCJmb29kMVwiLCBcImZvb2QyXCIsIFwiZm9vZDNcIl07XG4gICAgY29uc3QgZm9vZERlc2NyaXB0aW9ucyA9IFtcInZlcnkgeXVtbXkgZm9vZFwiLCBcInZlcnkgcmVhbCBkaXNoXCIsIFwid293LCBhbWF6aW5nIVwiXTtcbiAgICBjb25zdCBmb29kUHJpY2VzID0gWzEwMC4wMCwgMjk5Ljk5LCAxNTkuOTldO1xuXG4gICAgLy8gaXRlcmF0ZSBvdmVyIGV2ZXJ5IGZvb2QgaXRlbVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9vZE5hbWVzLmxlbmd0aDsgaSArKykge1xuICAgICAgICAvLyBjb250YWlucyBuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2VcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuXG4gICAgICAgIC8vIGNvbnRhaW5zIG5hbWUsIGRlc2NyaXB0aW9uXG4gICAgICAgIGNvbnN0IG1lbnVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gZm9vZE5hbWVzW2ldO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZm9vZERlc2NyaXB0aW9uc1tpXTtcblxuICAgICAgICBtZW51VGV4dC5hcHBlbmQobmFtZSwgZGVzY3JpcHRpb24pO1xuICAgICAgICBtZW51SXRlbS5hcHBlbmQobWVudVRleHQpO1xuXG4gICAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHByaWNlLnRleHRDb250ZW50ID0gZm9vZFByaWNlc1tpXTtcblxuICAgICAgICBtZW51SXRlbS5hcHBlbmQocHJpY2UpO1xuICAgICAgICBmb29kQ29udGFpbmVyLmFwcGVuZChtZW51SXRlbSk7XG4gICAgfVxuXG4gICAgLy8gcmlnaHQgY29sdW1uLCBjb250YWlucyBkcmlua3Mgb25seVxuICAgIGNvbnN0IGRyaW5rQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkcmlua0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1jb2x1bW5cIik7XG5cbiAgICAvLyBcImRyaW5rc1wiXG4gICAgY29uc3QgZHJpbmtzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGRyaW5rc0hlYWRlci50ZXh0Q29udGVudCA9IFwiZHJpbmtzXCI7XG4gICAgZHJpbmtDb250YWluZXIuYXBwZW5kKGRyaW5rc0hlYWRlcik7XG5cbiAgICBjb25zdCBkcmlua05hbWVzID0gW1wiZHJpbmsxXCIsIFwiZHJpbmsyXCIsIFwiZHJpbmszXCJdO1xuICAgIGNvbnN0IGRyaW5rRGVzY3JpcHRpb25zID0gW1widmVyeSB5dW1teSBkcmlua1wiLCBcInZlcnkgcmVhbCBkcmlua1wiLCBcIndvdywgYW1hemluZyFcIl07XG4gICAgY29uc3QgZHJpbmtQcmljZXMgPSBbMTAwLjAwLCAyOTkuOTksIDE1OS45OV07XG5cbiAgICAvLyBpdGVyYXRlIG92ZXIgZXZlcnkgZHJpbmsgaXRlbVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHJpbmtOYW1lcy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgLy8gY29udGFpbnMgbmFtZSwgZGVzY3JpcHRpb24sIHByaWNlXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcblxuICAgICAgICAvLyBjb250YWlucyBuYW1lLCBkZXNjcmlwdGlvblxuICAgICAgICBjb25zdCBtZW51VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IGRyaW5rTmFtZXNbaV07XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZHJpbmtEZXNjcmlwdGlvbnNbaV07XG4gICAgICAgIG1lbnVUZXh0LmFwcGVuZChuYW1lLCBkZXNjcmlwdGlvbik7XG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZChtZW51VGV4dCk7XG5cbiAgICAgICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcHJpY2UudGV4dENvbnRlbnQgPSBkcmlua1ByaWNlc1tpXTtcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kKHByaWNlKTtcblxuICAgICAgICBkcmlua0NvbnRhaW5lci5hcHBlbmQobWVudUl0ZW0pO1xuICAgIH1cblxuICAgIGl0ZW1Db250YWluZXIuYXBwZW5kKGZvb2RDb250YWluZXIsIGRyaW5rQ29udGFpbmVyKTtcblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoaXRlbUNvbnRhaW5lcik7XG4gICAgbWVudU92ZXJsYXkuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudU92ZXJsYXkpO1xuICAgIHJldHVybiBtZW51Q29udGVudDtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=