/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
}

h1, h2 {
    font-family: 'Playfair Display', Georgia, 'Times New Roman', Times, serif;
}

h1 {
    font-size: 3rem;
}

h2 {
    font-size: 2rem;
}

h3 {
    font-size: 1.5rem;
}

h5 {
    font-size: 1.25rem;
    font-weight: 400;
}

p {
    font-size: 1.25rem;
}

:root {
    --background-primary: #F0EBE3;
    --background-secondary: #E4DCCF;

    --accent-primary: #7D9D9C;
    --accent-secondary: #576F72;
    
    --accent-tertiary: #6a908e;

    --header-height: 100px;
    --footer-height: 40px;

    --padding-small: 20px;
    --padding-medium: 40px;

    --priority-0: rgb(57, 175, 57);
    --priority-1: rgb(236, 186, 69);
    --priority-2: rgb(240, 105, 105);

    --checked-item: #dee5e5;
}

body {
    display: flex;
    flex-direction: column;
}

header {
    height: var(--header-height);
    background-color: var(--accent-secondary);

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 var(--padding-small);
}

main {
    min-height: calc(100vh - var(--header-height) - var(--footer-height));
    background-color: var(--background-primary);
    display: flex;
}

#sidebar {
    background-color: var(--accent-primary);

    padding: var(--padding-medium);

    display: flex;
    flex-direction: column;
    align-items: stretch;
    flex: 1;
    max-width: 250px;
    overflow: hidden;
}

#sidebarContent {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

#categoriesHeader {
    display: flex;
    gap: 50px;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
}

#addCategoryButton {
    border: none;
    height: 25px;
    background-color: transparent;
    cursor: pointer;
}

#addCategoryButton > img {
    height: 25px;
    width: 25px;
}

#newCategory {
    display: flex;
    gap: 5px;
    width: 100%;
    /* padding:  */
}

#newCategory input {
    background-color: transparent;
    /* border: 1px solid var(--accent-secondary); */
    border: none;
    background-color: var(--accent-tertiary);
    outline: none;
    font-size: 1.25rem;
    /* height: 1.25rem; */
    padding: 8px 8px;
}

#submitCategoryButton {
    background-color: var(--background-primary);
    border: none;
    color: black;
    padding: 4px;
    border-radius: 4px;
    cursor: pointer;
    align-self: center;
}

#submitCategoryButton:hover {
    background-color: var(--background-secondary);
}

#cancelCategoryButton {
    color: black;
    background-color: transparent;
    border: none;
    padding-right: 10px;
    cursor: pointer;
    align-self: center;
}

nav {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

nav > button {
    background-color: transparent;
    border: none;
    font-size: 1.25rem;
    cursor: pointer;
    padding: 8px 8px;
    text-align: left;
}

nav > button:hover {
    /* text-decoration: underline; */
    background-color: var(--accent-tertiary);
}

#currentCategoryContainer {
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: center;
}

#currentCategory {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 3;
    max-width: 600px;

    padding: var(--padding-medium);
    padding-bottom: var(--padding-small);
}

#content {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

#deleteCategory {
    align-self: flex-end;
    background-color: transparent;
    border: none;
    text-decoration: underline;
    opacity: 0.7;
    cursor: pointer;
}

#deleteCategory:hover {
    opacity: 1;
}

#groupHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#groupHeader button {
    border: none;
    background-color: transparent;
    padding: 0;
    margin: 0;
    height: 30px;
    cursor: pointer;
}

#groupHeader img {
    height: 30px;
    width: 30px;
}

#tasks {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.item {
    display: flex;
    gap: 10px;
    align-items: stretch;
    overflow: hidden;

    background-color: white;
    border-radius: 10px;

    box-shadow: 1px 1px 5px #00000020;
}

.checkedItem {
    background-color: var(--checked-item);
}

.priorityBar {
    width: 8px;
}

.itemContent {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    flex: 1;
}

.nameCheck {
    display: flex;
    gap: 15px;
    align-items: center;
}

.nameCheck > h5 {
    cursor: pointer;
}

.check {
    height: 30px;
    width: 30px;
    background-color: transparent;
    border: 3px solid var(--accent-primary);
    border-radius: 5px;
    cursor: pointer;
}

.checkedCheck {
    background-color: var(--accent-primary);
}

.checkedName {
    text-decoration: line-through;
}

.dateDelete {
    display: flex;
    gap: 10px;
    align-items: center;
}

.todoDeleteButton {
    padding: 0;
    height: 20px;
    width: 20px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: transparent;
    border: none;

    cursor: pointer;
}

.todoDeleteButton {
    opacity: 0.5;
}

.todoDeleteButton:hover {
    opacity: 1;
}

.todoDeleteButton > img {
    height: 20px;
    width: 20px;
}

footer {
    height: var(--footer-height);
    background-color: var(--background-secondary);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    font-family: 'Playfair Display', Georgia, 'Times New Roman', Times, serif;
}

#dialogContainer {
    position: absolute;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    display: none;
}

#dialogOverlay {
    position: absolute;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

#newTaskDialog {
    background-color: var(--background-primary);
    padding: 20px;
    border: none;
    border-radius: 8px;
    flex: 1;
    max-width: 650px;
    min-width: 380px;

    position: relative;
}

#newTaskDialog form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
}

#formUpper {
    display: flex;
    gap: 20px;
    width: 100%;
}

#leftHalf, #rightHalf {
    display: flex;
    flex-direction: column;
    gap: 5px;
    flex: 1;
}

#leftHalf > div, #rightHalf > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

#newTaskDialog input, #newTaskDialog textarea, #newTaskDialog select {
    padding: 5px;
    background-color: white;
    border: 2px solid var(--accent-primary);
    border-radius: 5px;
    resize: none;
}

#newTaskDialog textarea {
    height: 80px;
}

#newTaskDialog button {
    background-color: var(--accent-primary);
    padding: 5px;
    border-radius: 20px;
    border: 2px solid var(--accent-primary);
    color: white;
    font-size: 1rem;
    cursor: pointer;
}

#newTaskDialog button:hover {
    border: 2px solid var(--accent-secondary);
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\n\n* {\n    padding: 0;\n    margin: 0;\n    font-family: 'Roboto', sans-serif;\n}\n\nh1, h2 {\n    font-family: 'Playfair Display', Georgia, 'Times New Roman', Times, serif;\n}\n\nh1 {\n    font-size: 3rem;\n}\n\nh2 {\n    font-size: 2rem;\n}\n\nh3 {\n    font-size: 1.5rem;\n}\n\nh5 {\n    font-size: 1.25rem;\n    font-weight: 400;\n}\n\np {\n    font-size: 1.25rem;\n}\n\n:root {\n    --background-primary: #F0EBE3;\n    --background-secondary: #E4DCCF;\n\n    --accent-primary: #7D9D9C;\n    --accent-secondary: #576F72;\n    \n    --accent-tertiary: #6a908e;\n\n    --header-height: 100px;\n    --footer-height: 40px;\n\n    --padding-small: 20px;\n    --padding-medium: 40px;\n\n    --priority-0: rgb(57, 175, 57);\n    --priority-1: rgb(236, 186, 69);\n    --priority-2: rgb(240, 105, 105);\n\n    --checked-item: #dee5e5;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    height: var(--header-height);\n    background-color: var(--accent-secondary);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding: 0 var(--padding-small);\n}\n\nmain {\n    min-height: calc(100vh - var(--header-height) - var(--footer-height));\n    background-color: var(--background-primary);\n    display: flex;\n}\n\n#sidebar {\n    background-color: var(--accent-primary);\n\n    padding: var(--padding-medium);\n\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    flex: 1;\n    max-width: 250px;\n    overflow: hidden;\n}\n\n#sidebarContent {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#categoriesHeader {\n    display: flex;\n    gap: 50px;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 10px;\n}\n\n#addCategoryButton {\n    border: none;\n    height: 25px;\n    background-color: transparent;\n    cursor: pointer;\n}\n\n#addCategoryButton > img {\n    height: 25px;\n    width: 25px;\n}\n\n#newCategory {\n    display: flex;\n    gap: 5px;\n    width: 100%;\n    /* padding:  */\n}\n\n#newCategory input {\n    background-color: transparent;\n    /* border: 1px solid var(--accent-secondary); */\n    border: none;\n    background-color: var(--accent-tertiary);\n    outline: none;\n    font-size: 1.25rem;\n    /* height: 1.25rem; */\n    padding: 8px 8px;\n}\n\n#submitCategoryButton {\n    background-color: var(--background-primary);\n    border: none;\n    color: black;\n    padding: 4px;\n    border-radius: 4px;\n    cursor: pointer;\n    align-self: center;\n}\n\n#submitCategoryButton:hover {\n    background-color: var(--background-secondary);\n}\n\n#cancelCategoryButton {\n    color: black;\n    background-color: transparent;\n    border: none;\n    padding-right: 10px;\n    cursor: pointer;\n    align-self: center;\n}\n\nnav {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\nnav > button {\n    background-color: transparent;\n    border: none;\n    font-size: 1.25rem;\n    cursor: pointer;\n    padding: 8px 8px;\n    text-align: left;\n}\n\nnav > button:hover {\n    /* text-decoration: underline; */\n    background-color: var(--accent-tertiary);\n}\n\n#currentCategoryContainer {\n    display: flex;\n    flex-direction: row;\n    flex: 1;\n    justify-content: center;\n}\n\n#currentCategory {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    flex: 3;\n    max-width: 600px;\n\n    padding: var(--padding-medium);\n    padding-bottom: var(--padding-small);\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n#deleteCategory {\n    align-self: flex-end;\n    background-color: transparent;\n    border: none;\n    text-decoration: underline;\n    opacity: 0.7;\n    cursor: pointer;\n}\n\n#deleteCategory:hover {\n    opacity: 1;\n}\n\n#groupHeader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#groupHeader button {\n    border: none;\n    background-color: transparent;\n    padding: 0;\n    margin: 0;\n    height: 30px;\n    cursor: pointer;\n}\n\n#groupHeader img {\n    height: 30px;\n    width: 30px;\n}\n\n#tasks {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.item {\n    display: flex;\n    gap: 10px;\n    align-items: stretch;\n    overflow: hidden;\n\n    background-color: white;\n    border-radius: 10px;\n\n    box-shadow: 1px 1px 5px #00000020;\n}\n\n.checkedItem {\n    background-color: var(--checked-item);\n}\n\n.priorityBar {\n    width: 8px;\n}\n\n.itemContent {\n    padding: 10px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    flex: 1;\n}\n\n.nameCheck {\n    display: flex;\n    gap: 15px;\n    align-items: center;\n}\n\n.nameCheck > h5 {\n    cursor: pointer;\n}\n\n.check {\n    height: 30px;\n    width: 30px;\n    background-color: transparent;\n    border: 3px solid var(--accent-primary);\n    border-radius: 5px;\n    cursor: pointer;\n}\n\n.checkedCheck {\n    background-color: var(--accent-primary);\n}\n\n.checkedName {\n    text-decoration: line-through;\n}\n\n.dateDelete {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n}\n\n.todoDeleteButton {\n    padding: 0;\n    height: 20px;\n    width: 20px;\n    \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    background: transparent;\n    border: none;\n\n    cursor: pointer;\n}\n\n.todoDeleteButton {\n    opacity: 0.5;\n}\n\n.todoDeleteButton:hover {\n    opacity: 1;\n}\n\n.todoDeleteButton > img {\n    height: 20px;\n    width: 20px;\n}\n\nfooter {\n    height: var(--footer-height);\n    background-color: var(--background-secondary);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n\n    font-family: 'Playfair Display', Georgia, 'Times New Roman', Times, serif;\n}\n\n#dialogContainer {\n    position: absolute;\n    height: 100vh;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n\n    display: none;\n}\n\n#dialogOverlay {\n    position: absolute;\n    height: 100vh;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n#newTaskDialog {\n    background-color: var(--background-primary);\n    padding: 20px;\n    border: none;\n    border-radius: 8px;\n    flex: 1;\n    max-width: 650px;\n    min-width: 380px;\n\n    position: relative;\n}\n\n#newTaskDialog form {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 100%;\n}\n\n#formUpper {\n    display: flex;\n    gap: 20px;\n    width: 100%;\n}\n\n#leftHalf, #rightHalf {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    flex: 1;\n}\n\n#leftHalf > div, #rightHalf > div {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n#newTaskDialog input, #newTaskDialog textarea, #newTaskDialog select {\n    padding: 5px;\n    background-color: white;\n    border: 2px solid var(--accent-primary);\n    border-radius: 5px;\n    resize: none;\n}\n\n#newTaskDialog textarea {\n    height: 80px;\n}\n\n#newTaskDialog button {\n    background-color: var(--accent-primary);\n    padding: 5px;\n    border-radius: 20px;\n    border: 2px solid var(--accent-primary);\n    color: white;\n    font-size: 1rem;\n    cursor: pointer;\n}\n\n#newTaskDialog button:hover {\n    border: 2px solid var(--accent-secondary);\n}"],"sourceRoot":""}]);
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/modules/domStuff.js":
/*!*********************************!*\
  !*** ./src/modules/domStuff.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeDomStuff: () => (/* binding */ makeDomStuff)
/* harmony export */ });
/* harmony import */ var _assets_trash_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/trash.svg */ "./src/assets/trash.svg");


// domStuff handles the majority of dom manipulation in this app. 

function makeDomStuff (todoList, localStorage) {
    let newCategoryOpen = false;
    let currentGroup = "ungrouped";
    const categoryDivs = new Map();

    const content = document.getElementById("content");

    // getter for currentGroup
    const getCurrentGroup = function () {
        return currentGroup;
    };

    const formatDate = function(dateObj) {
        const daysOfWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
        const dayText = daysOfWeek[dateObj.getDay()];
        let year = dateObj.getFullYear();
        let month = dateObj.getMonth() + 1;
        let day = dateObj.getDate();
        if (month < 10) {
            month = "0" + month;
        }
        if (day < 10) {
            day = "0" + day;
        }
        if (year != (new Date()).getFullYear()) {
            return `${month}/${day}/${year}`;
        }
        return `${dayText} ${month}/${day}`;
    }

    // adds a todo (task) to the DOM
    const addTodo = function (todo) {
        const item = document.createElement("div");
        item.classList.add("item");
        item.id = "item" + todo.id;
        
        const priorityBar = document.createElement("div");
        priorityBar.classList.add("priorityBar");
        priorityBar.style.backgroundColor = `var(--priority-${todo.priority})`;
    
        const itemContent = document.createElement("div");
        itemContent.classList.add("itemContent");
    
        const nameCheck = document.createElement("div");
        nameCheck.classList.add("nameCheck");
    
        const check = document.createElement("button");
        check.classList.add("check");
        
        const h5 = document.createElement("h5");
        h5.textContent = todo.title;
    
        nameCheck.append(check, h5);

        const dateDelete = document.createElement("div");
        dateDelete.classList.add("dateDelete");
    
        const dateP = document.createElement("p");
        let dateText = "";
        if (todo.date) {
            dateText = formatDate(todo.date);
        }
        dateP.textContent = dateText;

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("todoDeleteButton");

        const deleteIcon = document.createElement("img");
        deleteIcon.src = _assets_trash_svg__WEBPACK_IMPORTED_MODULE_0__;
        deleteButton.appendChild(deleteIcon);

        dateDelete.append(dateP, deleteButton);
    
        itemContent.append(nameCheck, dateDelete);
    
        item.append(priorityBar, itemContent);
        categoryDivs.get(todo.category).appendChild(item);

        if (todo.complete == true) {
            check.classList.add("checkedCheck");
            h5.classList.add("checkedName");
            item.classList.add("checkedItem");
        }
    
        // clicking the checkmark toggles the appearance of the item and toggles complete
        check.addEventListener("click", () => {
            todoList.toggleTodoComplete(todo.id);
            if (check.classList.contains("checkedCheck")) {
                check.classList.remove("checkedCheck");
                h5.classList.remove("checkedName");
                item.classList.remove("checkedItem");
                localStorage.update();
            }
            else {
                check.classList.add("checkedCheck");
                h5.classList.add("checkedName");
                item.classList.add("checkedItem");
                localStorage.update();
            }
        });
    
        // clicking the header opens the form with info / edit for this todo
        h5.addEventListener("click", () => {
            todoList.setCurrTodoEdit(todo);
            showDialog();
        });

        // clicking the delete button deletes the todo
        deleteButton.addEventListener("click", () => {
            deleteTodo(todo);
            todoList.deleteTodo(todo.id);
            localStorage.update();
        });
    };

    // clicking the add category button opens a form in the nav
    const handleClickAddCategory = function () {
        if (!newCategoryOpen) { // check there isn't already an open form
            const nav = document.querySelector("nav");
            const newCategoryDiv = document.createElement("div");
            newCategoryDiv.id = 'newCategory';
            const name = document.createElement("input");
            name.type = 'text';
            name.name = 'name';
            const btn = document.createElement("button");
            btn.textContent = "OK";
            btn.id = "submitCategoryButton";

            const cancelBtn = document.createElement("button");
            cancelBtn.textContent = "X";
            cancelBtn.id = "cancelCategoryButton";
            newCategoryDiv.append(name, cancelBtn, btn);
            
            nav.appendChild(newCategoryDiv);
            name.focus();
            newCategoryOpen = true;

            function listAndDOMAddCategory (categoryName) {
                categoryDivs.set(categoryName, []);
                addCategory(categoryName);
                todoList.addCategory(categoryName);
                localStorage.update();
                switchTab(categoryName);
            }

            // create a new category when form submitted
            btn.addEventListener("click", () => {
                if (name.value) {
                    listAndDOMAddCategory(name.value);
                }
            });

            // pressing enter while input also submits the form
            name.addEventListener("keydown", (e) => {
                if (e.key == 'Enter') {
                    if (name.value) {
                        listAndDOMAddCategory(name.value);
                    }
                }
            });

            // clicking the cancel button closes the form without making a new category
            cancelBtn.addEventListener("click", () => {
                closeAddCategory();
            });
        }
    }

    // add a new category to the DOM and switches to it
    const addCategory = function (category) {
        const nav = document.querySelector("nav");
        const btn = document.createElement("button");
        btn.textContent = category;
        btn.id = "category-" + category;
    
        btn.addEventListener("click", () => {
            switchTab(category);
        });
    
        nav.appendChild(btn);
        
        const div = document.createElement("div");
        div.id = 'tasks';
        categoryDivs.set(category, div);

        closeAddCategory();
    };

    // closes the add category form
    const closeAddCategory = function () {
        if (newCategoryOpen) {
            newCategoryOpen = false;
            const newCategoryDiv = document.getElementById('newCategory');
            newCategoryDiv.remove();
        }
    };

    // deletes a category from the DOM
    const deleteCategory = function (category) {
        const categoryButton = document.getElementById("category-" + category);
        categoryButton.remove();
        categoryDivs.delete(category);
        localStorage.update();
    }

    // switches the content div's content to a different category's content
    const switchTab = function (category) {
        content.querySelector("h2").textContent = category;
        if (document.getElementById("tasks")) {
            content.removeChild(document.getElementById("tasks"));
        }
        content.append(categoryDivs.get(category));
        currentGroup = category;
    };

    // edits the DOM of a specific todo
    const editTodo = function (todo, oldCategory) {
        const item = document.getElementById("item" + todo.id);

        const priorityBar = item.querySelector(".priorityBar");
        priorityBar.style.backgroundColor = `var(--priority-${todo.priority})`;
        
        const h5 = item.querySelector("h5");
        h5.textContent = todo.title;

        const dateP = item.querySelector("p");
        let dateText = "";
        if (todo.date) {
            dateText = formatDate(todo.date);
        }
        dateP.textContent = dateText;
    
        // if the category was edited, move the todo from the old category to the new one
        if (todo.category != oldCategory) {
            item.remove();
            categoryDivs.forEach((key) => {
                if (key == todo.category) {
                    categoryDivs.get(key).appendChild(item);
                }
            });
        }
    };

    // delete a todo from the DOM
    const deleteTodo = function (todo) {
        const item = document.getElementById("item" + todo.id);
        item.remove();
    };

    // load the dropdown used to select category in the task form
    const loadAddTaskCategories = function () {
        const categoryDropDown = document.createElement("select");
        categoryDropDown.classList.add("addTaskInput");
        categoryDropDown.name = "category";
        for (let category of categoryDivs.keys()){
            const option = document.createElement("option");
            option.value = category;
            option.textContent = category;
            if (category == currentGroup) {
                option.selected = true;
            }
    
            categoryDropDown.appendChild(option);
        }
        return categoryDropDown;
    };

    const loadSelectedPriority = function (selected) {
        const priorityInput = document.getElementById("priorityInput");
        for (let i = 0; i < 3; i ++) {
            if (priorityInput.options[i].value == selected) {
                priorityInput.options[i].selected = true;
            }
        }
    }

    // show the task form dialog
    const showDialog = function () {
        const dialogContainer = document.getElementById("dialogContainer");
        dialogContainer.style.display = "flex";
        const dialog = document.querySelector("dialog");
        dialog.show();
    
        const categoryField = document.getElementById("categoryField");
        const categoryDropDown = categoryField.querySelector("select");
        categoryDropDown.remove();
    
        categoryField.appendChild(loadAddTaskCategories());
        loadSelectedPriority(0);
    
        if (todoList.getCurrTodoEdit() != null) {
            loadSelectedPriority(todoList.getCurrTodoEdit().priority);

            document.getElementById("titleInput").value = todoList.getCurrTodoEdit().title;
            const todoDate = todoList.getCurrTodoEdit().date;
            if (todoDate) {
                let month = todoDate.getMonth() + 1;
                if (month < 10) {
                    month = "0" + month;
                }
                let day = todoDate.getDate();
                if (day < 10) {
                    day = "0" + day;
                }
                document.getElementById("dateInput").value = `${todoDate.getFullYear()}-${month}-${day}`;
            }
            document.getElementById("descriptionInput").value = todoList.getCurrTodoEdit().description;
        }
    };
    
    // hide the task form dialog
    const hideDialog = function () {
        const dialogContainer = document.getElementById("dialogContainer");
        dialogContainer.style.display = "none";
        const dialog = document.querySelector("dialog");
        clearDialog(document.getElementById("addTaskForm"));
        dialog.close();
    };
    
    // clear the task form
    const clearDialog = function (form) {
        form.querySelectorAll("input, textarea").forEach((field) => {
            field.value = "";
        });
        todoList.setCurrTodoEdit(null);
    };

    return { getCurrentGroup, addTodo, handleClickAddCategory, addCategory, deleteCategory, switchTab, editTodo, showDialog, hideDialog, clearDialog };
}

/***/ }),

/***/ "./src/modules/formData.js":
/*!*********************************!*\
  !*** ./src/modules/formData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFormData: () => (/* binding */ getFormData)
/* harmony export */ });
// function to extract data from the task dialog form

function getFormData () {
    const addTaskForm = document.getElementById("addTaskForm");

    const title = addTaskForm.elements["title"].value;
    const priority = addTaskForm.elements["priority"].value;
    const category = addTaskForm.elements["category"].value;
    const description = addTaskForm.elements["description"].value;

    let date = addTaskForm.elements["date"].value;
    if (date) {
        const dateYear = parseInt(date.slice(0, 4));
        const dateMonth = parseInt(date.slice(5, 7)) - 1;
        const dateDate = parseInt(date.slice(8, 10));
        date = new Date(dateYear, dateMonth, dateDate);
    } else {
        date = null;
    }
    
    return { title, date, priority, category, description };
}

/***/ }),

/***/ "./src/modules/init.js":
/*!*****************************!*\
  !*** ./src/modules/init.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _assets_plus_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/plus.svg */ "./src/assets/plus.svg");


// initialization of various dom elements
function init (todoList, domStuff, localStorage) {

    const loadData = function () {
        if (localStorage.isPopulated()) {
            localStorage.loadCategories();
            localStorage.loadTodos();
            for (let category of todoList.getCategories()) {
                domStuff.addCategory(category);
            }
            for (let todo of todoList.getTodos()) {
                domStuff.addTodo(todo);
            }
        } else {
            todoList.addCategory("ungrouped");
            todoList.addCategory("school");
            domStuff.addCategory("ungrouped");
            domStuff.addCategory("school");
            addTodo("welcome to tudu!", new Date(2024, 7, 15), 2, "ungrouped", ":D");
            addTodo("click me :3", new Date(2024, 7, 29), 1, "ungrouped", "you can change any of these fields! tudu uses your browser's local storage, so clear your cookies to reset.");
            addTodo("buy eggs", new Date(2024, 7, 31), 0, "ungrouped", "trader joes");
            addTodo("study for cs exam", new Date(2024, 7, 15), 1, "school", "i hope i ace this one!");
            localStorage.update();
        }
        domStuff.switchTab("ungrouped");
    }
    
    

    // this plus sign icon shows the add task dialog form when clicked.
    const loadAddTask = function () {
        const addTask = document.getElementById("addTask");
        addTask.querySelector("img").src = _assets_plus_svg__WEBPACK_IMPORTED_MODULE_0__;
        const dialogOverlay = document.getElementById("dialogOverlay");
        const addTaskButton = document.getElementById("addTaskButton")
    
        // clicking outside of the dialog closes it.
        dialogOverlay.addEventListener("click", () => {
            domStuff.hideDialog();
        });
    
        // clicking the add task icon opens the add task dialog form.
        addTask.addEventListener("click", () => {
            domStuff.showDialog();
        });
    
        // clicking the submit button of the form either adds a new task or edits an existing one.
        addTaskButton.addEventListener("click", (e) => {
            e.preventDefault();
            const ctde = todoList.getCurrTodoEdit();
            if (ctde) {
                const oldCategory = ctde.category;
                todoList.handleFormSubmit();
                domStuff.editTodo(ctde, oldCategory);
            }
            else {
                domStuff.addTodo(todoList.handleFormSubmit());
            }
            domStuff.hideDialog();
            localStorage.update();
        });
    };

    // the plus sign in the side bar makes a form to create a new category. 
    const loadAddCategory = function () {
        const addCategoryButton = document.getElementById("addCategoryButton");
        addCategoryButton.querySelector("img").src = _assets_plus_svg__WEBPACK_IMPORTED_MODULE_0__;
    
        addCategoryButton.addEventListener("click", () => {
            domStuff.handleClickAddCategory();
        });
    };

    // clicking "delete this category" deletes the category the viewer is using
    // unless it is the "ungrouped" category.
    const loadDeleteCategory = function () {
        const deleteCategory = document.getElementById("deleteCategory");

        deleteCategory.addEventListener("click", () => {
            const current = domStuff.getCurrentGroup();
            if (current == "ungrouped") {
                alert("you can't delete the default category!");
            }
            else {
                domStuff.switchTab("ungrouped");
                todoList.deleteCategory(current);
                domStuff.deleteCategory(current);
                localStorage.update();
            }
        });
    }

    // add a todo to the todo data structure as well as add it to the dom
    // this function is only used to add the default todos.
    const addTodo = function (title, date, priority, category, description) {
        const todo = todoList.addTodo(title, date, priority, category, description);
        domStuff.addTodo(todo);
        localStorage.update();
    };

    loadData();
    loadAddTask();
    loadAddCategory();
    loadDeleteCategory();

    return { addTodo }
}

/***/ }),

/***/ "./src/modules/localStorage.js":
/*!*************************************!*\
  !*** ./src/modules/localStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeLocalStorage: () => (/* binding */ makeLocalStorage)
/* harmony export */ });
function makeLocalStorage (todoList) {
    // check if there is any data in local storage
    const isPopulated = function () {
        if (localStorage.getItem("categories")) {
            return true;
        } else {
            return false;
        }
    }

    const loadCategories = function () {
        const categories = localStorage.getItem("categories").split(String.fromCharCode(30));
        if (categories) {
            todoList.setCategories(categories);
        }
    }

    const loadTodos = function () {
        if (localStorage.getItem("todos")) {
            const todoStrings = localStorage.getItem("todos").split(String.fromCharCode(29));
            for (let i = 0; i < todoStrings.length; i ++){
                // title, date, priority, category, description, complete
                const todoAttributes = todoStrings[i].split(String.fromCharCode(30));
                let complete = todoAttributes[5];
                if (complete == "true") {
                    complete = true;
                } else {
                    complete = false;
                }
                const date = new Date(todoAttributes[1]);
                todoList.addTodo(todoAttributes[0], date, todoAttributes[2], todoAttributes[3], todoAttributes[4], complete);
            }
        }
    }

    const update = function () {
        let todoString = "";
        const todos = todoList.getTodos();
        for (let i = 0; i < todos.length; i ++) {
            const todo = todos[i];
            // title, date, priority, category, description
            const date = todo.date;
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const dateString = `${date.getFullYear()}-${(month < 10) ? "0" + month : month}-${(day < 10) ? "0" + day : day}T00:00:00`;
            todoString += `${todo.title}${String.fromCharCode(30)}${dateString}${String.fromCharCode(30)}${todo.priority}${String.fromCharCode(30)}${todo.category}${String.fromCharCode(30)}${todo.description}${String.fromCharCode(30)}${todo.complete}`;
            if (i != todos.length - 1) {
                todoString += String.fromCharCode(29);
            }
        }

        let categoriesString = "";
        const categories = todoList.getCategories();
        for (let i = 0; i < categories.length; i++) {
            const category = categories[i];
            categoriesString += category;
            if (i != categories.length - 1) {
                categoriesString += String.fromCharCode(30);
            }
        }
        
        localStorage.setItem("categories", categoriesString);
        localStorage.setItem("todos", todoString);
    }

    return { isPopulated, loadCategories, loadTodos, update }
}

/***/ }),

/***/ "./src/modules/todoList.js":
/*!*********************************!*\
  !*** ./src/modules/todoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeTodoList: () => (/* binding */ makeTodoList)
/* harmony export */ });
/* harmony import */ var _formData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formData */ "./src/modules/formData.js");


// the todo list handles all things to do with the actual data
function makeTodoList () {
    const todos = [];
    let currTodoEdit = null;
    let idx = 0;
    let categories = [];

    // make a new todo and add it to the todo array
    const addTodo = function (title, date, priority, category, description = "", complete){
        const todo = makeTodo(title, date, priority, category, description, complete);
        todos.push(todo);
        return todo;
    };
    
    // find a todo in the todo array using a given id
    // and edit the attributes of that todo
    const editTodo = function (id, title, date, priority, category, description = "") {
        todos.forEach((todo) => {
            if (todo.id == id) {
                todo.title = title;
                todo.date = date;
                todo.priority = priority;
                todo.category = category;
                todo.description = description;
                return todo;
            }
        });
    };

    // delete a todo from the todo list given its id
    const deleteTodo = function (id) {
        for (let i = 0; i < todos.length; i ++) {
            if (todos[i].id == id) {
                todos.splice(i, 1);
            }
        }
    }

    const toggleTodoComplete = function (id) {
        todos.forEach((todo) => {
            if (todo.id == id) {
                todo.complete = !todo.complete;
                return todo;
            }
        });
    }

    // factory function to make todo objects
    const makeTodo = function (title, date, priority, category, description, complete=false) {
        return {
            title: title,
            date: date,
            priority: priority, 
            category: category, 
            description: description,
            complete: complete, 
            id: idx++
        };
    };

    // returns null if a todo was edited
    // returns the new todo is a todo was created
    const handleFormSubmit = function () {
        if (currTodoEdit != null) {
            editTodoFromForm(currTodoEdit.id);
            return null;
        }
        else {
            return addTodoFromForm();
        }
    }

    // get form data and add a new todo to the todo array
    // returns the new todo
    const addTodoFromForm = function () {
        const data = (0,_formData__WEBPACK_IMPORTED_MODULE_0__.getFormData)();
        return addTodo(data.title, data.date, data.priority, data.category, data.description);
    };

    // get form data and edit the existing todo
    // returns the edited todo
    const editTodoFromForm = function (taskId) {
        const data = (0,_formData__WEBPACK_IMPORTED_MODULE_0__.getFormData)();
        return editTodo(taskId, data.title, data.date, data.priority, data.category, data.description, data.complete);
    };

    // getter for currTodoEdit
    const getCurrTodoEdit = function () {
        return currTodoEdit;
    }

    // setter for currTodoEdit
    const setCurrTodoEdit = function (todo) {
        currTodoEdit = todo;
    }

    // return the array of todos
    const getTodos = function () {
        return todos;
    }

    // return the array of categories
    const getCategories = function () {
        return categories;
    }

    // add a category to the categories array
    const addCategory = function (category) {
        categories.push(category);
    }

    // delete a category from the categories array
    const deleteCategory = function (category) {
        const idx = categories.indexOf(category);
        if (idx > -1) {
            categories.splice(idx, 1);
        } else {
            throw Error(category + " not found");
        }
    }

    const setCategories = function (categoryArray) {
        categories = Array.from(categoryArray);
    }

    return { addTodo, editTodo, deleteTodo, toggleTodoComplete, handleFormSubmit, addTodoFromForm, editTodoFromForm, getCurrTodoEdit, setCurrTodoEdit, getTodos, getCategories, addCategory, deleteCategory, setCategories }
}

/***/ }),

/***/ "./src/assets/plus.svg":
/*!*****************************!*\
  !*** ./src/assets/plus.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0a4d7e149ed28e9699a3.svg";

/***/ }),

/***/ "./src/assets/trash.svg":
/*!******************************!*\
  !*** ./src/assets/trash.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b8bea8b8daf87b82e3c.svg";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_domStuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/domStuff */ "./src/modules/domStuff.js");
/* harmony import */ var _modules_todoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/todoList */ "./src/modules/todoList.js");
/* harmony import */ var _modules_localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/localStorage */ "./src/modules/localStorage.js");
/* harmony import */ var _modules_init__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/init */ "./src/modules/init.js");







const todoList = (0,_modules_todoList__WEBPACK_IMPORTED_MODULE_2__.makeTodoList)();
const src_localStorage = (0,_modules_localStorage__WEBPACK_IMPORTED_MODULE_3__.makeLocalStorage)(todoList);
const domStuff = (0,_modules_domStuff__WEBPACK_IMPORTED_MODULE_1__.makeDomStuff)(todoList, src_localStorage);
(0,_modules_init__WEBPACK_IMPORTED_MODULE_4__.init)(todoList, domStuff, src_localStorage);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YscUlBQXFJLHlCQUF5QjtBQUM5SixzSEFBc0gsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxvQkFBb0I7QUFDdE07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGNBQWMsYUFBYSxjQUFjLGNBQWMsYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksY0FBYyxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFlBQVksYUFBYSxjQUFjLGFBQWEsWUFBWSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksY0FBYyxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxN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QUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUE4RCxjQUFjO0FBQzVFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QzdCLE1BQU0sZ0JBQVksR0FBRyx1RUFBZ0I7QUFDckMsaUJBQWlCLCtEQUFZLFdBQVcsZ0JBQVk7QUFDcEQsbURBQUkscUJBQXFCLGdCQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZG9tU3R1ZmYuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvaW5pdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXk6aXRhbCx3Z2h0QDAsNDAwLi45MDA7MSw0MDAuLjkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuXG5oMSwgaDIge1xuICAgIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG59XG5cbmgxIHtcbiAgICBmb250LXNpemU6IDNyZW07XG59XG5cbmgyIHtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbmgzIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuaDUge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG5wIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG59XG5cbjpyb290IHtcbiAgICAtLWJhY2tncm91bmQtcHJpbWFyeTogI0YwRUJFMztcbiAgICAtLWJhY2tncm91bmQtc2Vjb25kYXJ5OiAjRTREQ0NGO1xuXG4gICAgLS1hY2NlbnQtcHJpbWFyeTogIzdEOUQ5QztcbiAgICAtLWFjY2VudC1zZWNvbmRhcnk6ICM1NzZGNzI7XG4gICAgXG4gICAgLS1hY2NlbnQtdGVydGlhcnk6ICM2YTkwOGU7XG5cbiAgICAtLWhlYWRlci1oZWlnaHQ6IDEwMHB4O1xuICAgIC0tZm9vdGVyLWhlaWdodDogNDBweDtcblxuICAgIC0tcGFkZGluZy1zbWFsbDogMjBweDtcbiAgICAtLXBhZGRpbmctbWVkaXVtOiA0MHB4O1xuXG4gICAgLS1wcmlvcml0eS0wOiByZ2IoNTcsIDE3NSwgNTcpO1xuICAgIC0tcHJpb3JpdHktMTogcmdiKDIzNiwgMTg2LCA2OSk7XG4gICAgLS1wcmlvcml0eS0yOiByZ2IoMjQwLCAxMDUsIDEwNSk7XG5cbiAgICAtLWNoZWNrZWQtaXRlbTogI2RlZTVlNTtcbn1cblxuYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5oZWFkZXIge1xuICAgIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXNlY29uZGFyeSk7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIHZhcigtLXBhZGRpbmctc21hbGwpO1xufVxuXG5tYWluIHtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkgLSB2YXIoLS1mb290ZXItaGVpZ2h0KSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1wcmltYXJ5KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4jc2lkZWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xuXG4gICAgcGFkZGluZzogdmFyKC0tcGFkZGluZy1tZWRpdW0pO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGZsZXg6IDE7XG4gICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jc2lkZWJhckNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbiNjYXRlZ29yaWVzSGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbiNhZGRDYXRlZ29yeUJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNhZGRDYXRlZ29yeUJ1dHRvbiA+IGltZyB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xufVxuXG4jbmV3Q2F0ZWdvcnkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogcGFkZGluZzogICovXG59XG5cbiNuZXdDYXRlZ29yeSBpbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWNjZW50LXNlY29uZGFyeSk7ICovXG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC10ZXJ0aWFyeSk7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgLyogaGVpZ2h0OiAxLjI1cmVtOyAqL1xuICAgIHBhZGRpbmc6IDhweCA4cHg7XG59XG5cbiNzdWJtaXRDYXRlZ29yeUJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1wcmltYXJ5KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuI3N1Ym1pdENhdGVnb3J5QnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XG59XG5cbiNjYW5jZWxDYXRlZ29yeUJ1dHRvbiB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbm5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbn1cblxubmF2ID4gYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiA4cHggOHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbm5hdiA+IGJ1dHRvbjpob3ZlciB7XG4gICAgLyogdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXRlcnRpYXJ5KTtcbn1cblxuI2N1cnJlbnRDYXRlZ29yeUNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXg6IDE7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNjdXJyZW50Q2F0ZWdvcnkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleDogMztcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuXG4gICAgcGFkZGluZzogdmFyKC0tcGFkZGluZy1tZWRpdW0pO1xuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWRkaW5nLXNtYWxsKTtcbn1cblxuI2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIwcHg7XG59XG5cbiNkZWxldGVDYXRlZ29yeSB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNkZWxldGVDYXRlZ29yeTpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuI2dyb3VwSGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jZ3JvdXBIZWFkZXIgYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2dyb3VwSGVhZGVyIGltZyB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xufVxuXG4jdGFza3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICMwMDAwMDAyMDtcbn1cblxuLmNoZWNrZWRJdGVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGVja2VkLWl0ZW0pO1xufVxuXG4ucHJpb3JpdHlCYXIge1xuICAgIHdpZHRoOiA4cHg7XG59XG5cbi5pdGVtQ29udGVudCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgZmxleDogMTtcbn1cblxuLm5hbWVDaGVjayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDE1cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5hbWVDaGVjayA+IGg1IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jaGVjayB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWFjY2VudC1wcmltYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2hlY2tlZENoZWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XG59XG5cbi5jaGVja2VkTmFtZSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi5kYXRlRGVsZXRlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udG9kb0RlbGV0ZUJ1dHRvbiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50b2RvRGVsZXRlQnV0dG9uIHtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG5cbi50b2RvRGVsZXRlQnV0dG9uOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4udG9kb0RlbGV0ZUJ1dHRvbiA+IGltZyB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xufVxuXG5mb290ZXIge1xuICAgIGhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xufVxuXG4jZGlhbG9nQ29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNkaWFsb2dPdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbiNuZXdUYXNrRGlhbG9nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXByaW1hcnkpO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBmbGV4OiAxO1xuICAgIG1heC13aWR0aDogNjUwcHg7XG4gICAgbWluLXdpZHRoOiAzODBweDtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI25ld1Rhc2tEaWFsb2cgZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI2Zvcm1VcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbiNsZWZ0SGFsZiwgI3JpZ2h0SGFsZiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNXB4O1xuICAgIGZsZXg6IDE7XG59XG5cbiNsZWZ0SGFsZiA+IGRpdiwgI3JpZ2h0SGFsZiA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNXB4O1xufVxuXG4jbmV3VGFza0RpYWxvZyBpbnB1dCwgI25ld1Rhc2tEaWFsb2cgdGV4dGFyZWEsICNuZXdUYXNrRGlhbG9nIHNlbGVjdCB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1wcmltYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcmVzaXplOiBub25lO1xufVxuXG4jbmV3VGFza0RpYWxvZyB0ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiA4MHB4O1xufVxuXG4jbmV3VGFza0RpYWxvZyBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNuZXdUYXNrRGlhbG9nIGJ1dHRvbjpob3ZlciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LXNlY29uZGFyeSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0kseUVBQXlFO0FBQzdFOztBQUVBO0lBQ0ks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LG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLDJDQUEyQztJQUMzQyxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsZ0JBQWdCO0lBQ2hCLGdCQUFnQjs7SUFFaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsdUNBQXVDO0lBQ3ZDLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVDQUF1QztJQUN2QyxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGxheWZhaXIrRGlzcGxheTppdGFsLHdnaHRAMCw0MDAuLjkwMDsxLDQwMC4uOTAwJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oMSwgaDIge1xcbiAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbmgzIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbmg1IHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5wIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tYmFja2dyb3VuZC1wcmltYXJ5OiAjRjBFQkUzO1xcbiAgICAtLWJhY2tncm91bmQtc2Vjb25kYXJ5OiAjRTREQ0NGO1xcblxcbiAgICAtLWFjY2VudC1wcmltYXJ5OiAjN0Q5RDlDO1xcbiAgICAtLWFjY2VudC1zZWNvbmRhcnk6ICM1NzZGNzI7XFxuICAgIFxcbiAgICAtLWFjY2VudC10ZXJ0aWFyeTogIzZhOTA4ZTtcXG5cXG4gICAgLS1oZWFkZXItaGVpZ2h0OiAxMDBweDtcXG4gICAgLS1mb290ZXItaGVpZ2h0OiA0MHB4O1xcblxcbiAgICAtLXBhZGRpbmctc21hbGw6IDIwcHg7XFxuICAgIC0tcGFkZGluZy1tZWRpdW06IDQwcHg7XFxuXFxuICAgIC0tcHJpb3JpdHktMDogcmdiKDU3LCAxNzUsIDU3KTtcXG4gICAgLS1wcmlvcml0eS0xOiByZ2IoMjM2LCAxODYsIDY5KTtcXG4gICAgLS1wcmlvcml0eS0yOiByZ2IoMjQwLCAxMDUsIDEwNSk7XFxuXFxuICAgIC0tY2hlY2tlZC1pdGVtOiAjZGVlNWU1O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXNlY29uZGFyeSk7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgdmFyKC0tcGFkZGluZy1zbWFsbCk7XFxufVxcblxcbm1haW4ge1xcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkgLSB2YXIoLS1mb290ZXItaGVpZ2h0KSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtcHJpbWFyeSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xcblxcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLW1lZGl1bSk7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBmbGV4OiAxO1xcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jc2lkZWJhckNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNjYXRlZ29yaWVzSGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuI2FkZENhdGVnb3J5QnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGRDYXRlZ29yeUJ1dHRvbiA+IGltZyB7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxufVxcblxcbiNuZXdDYXRlZ29yeSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogcGFkZGluZzogICovXFxufVxcblxcbiNuZXdDYXRlZ29yeSBpbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtc2Vjb25kYXJ5KTsgKi9cXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtdGVydGlhcnkpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIC8qIGhlaWdodDogMS4yNXJlbTsgKi9cXG4gICAgcGFkZGluZzogOHB4IDhweDtcXG59XFxuXFxuI3N1Ym1pdENhdGVnb3J5QnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1wcmltYXJ5KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI3N1Ym1pdENhdGVnb3J5QnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xcbn1cXG5cXG4jY2FuY2VsQ2F0ZWdvcnlCdXR0b24ge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbm5hdiA+IGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiA4cHggOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG5uYXYgPiBidXR0b246aG92ZXIge1xcbiAgICAvKiB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXRlcnRpYXJ5KTtcXG59XFxuXFxuI2N1cnJlbnRDYXRlZ29yeUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXg6IDE7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jY3VycmVudENhdGVnb3J5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmbGV4OiAzO1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcblxcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLW1lZGl1bSk7XFxuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWRkaW5nLXNtYWxsKTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbiNkZWxldGVDYXRlZ29yeSB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNkZWxldGVDYXRlZ29yeTpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbiNncm91cEhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2dyb3VwSGVhZGVyIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNncm91cEhlYWRlciBpbWcge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4jdGFza3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICMwMDAwMDAyMDtcXG59XFxuXFxuLmNoZWNrZWRJdGVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hlY2tlZC1pdGVtKTtcXG59XFxuXFxuLnByaW9yaXR5QmFyIHtcXG4gICAgd2lkdGg6IDhweDtcXG59XFxuXFxuLml0ZW1Db250ZW50IHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4ubmFtZUNoZWNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmFtZUNoZWNrID4gaDUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jaGVjayB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hlY2tlZENoZWNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xcbn1cXG5cXG4uY2hlY2tlZE5hbWUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmRhdGVEZWxldGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvRGVsZXRlQnV0dG9uIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcblxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvRGVsZXRlQnV0dG9uIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4udG9kb0RlbGV0ZUJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi50b2RvRGVsZXRlQnV0dG9uID4gaW1nIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5JywgR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG59XFxuXFxuI2RpYWxvZ0NvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jZGlhbG9nT3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuI25ld1Rhc2tEaWFsb2cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXByaW1hcnkpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgZmxleDogMTtcXG4gICAgbWF4LXdpZHRoOiA2NTBweDtcXG4gICAgbWluLXdpZHRoOiAzODBweDtcXG5cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jbmV3VGFza0RpYWxvZyBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2Zvcm1VcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNsZWZ0SGFsZiwgI3JpZ2h0SGFsZiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4jbGVmdEhhbGYgPiBkaXYsICNyaWdodEhhbGYgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuI25ld1Rhc2tEaWFsb2cgaW5wdXQsICNuZXdUYXNrRGlhbG9nIHRleHRhcmVhLCAjbmV3VGFza0RpYWxvZyBzZWxlY3Qge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4jbmV3VGFza0RpYWxvZyB0ZXh0YXJlYSB7XFxuICAgIGhlaWdodDogODBweDtcXG59XFxuXFxuI25ld1Rhc2tEaWFsb2cgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1wcmltYXJ5KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI25ld1Rhc2tEaWFsb2cgYnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LXNlY29uZGFyeSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgVHJhc2ggZnJvbSAnLi4vYXNzZXRzL3RyYXNoLnN2Zyc7XG5cbi8vIGRvbVN0dWZmIGhhbmRsZXMgdGhlIG1ham9yaXR5IG9mIGRvbSBtYW5pcHVsYXRpb24gaW4gdGhpcyBhcHAuIFxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZURvbVN0dWZmICh0b2RvTGlzdCwgbG9jYWxTdG9yYWdlKSB7XG4gICAgbGV0IG5ld0NhdGVnb3J5T3BlbiA9IGZhbHNlO1xuICAgIGxldCBjdXJyZW50R3JvdXAgPSBcInVuZ3JvdXBlZFwiO1xuICAgIGNvbnN0IGNhdGVnb3J5RGl2cyA9IG5ldyBNYXAoKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgICAvLyBnZXR0ZXIgZm9yIGN1cnJlbnRHcm91cFxuICAgIGNvbnN0IGdldEN1cnJlbnRHcm91cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRHcm91cDtcbiAgICB9O1xuXG4gICAgY29uc3QgZm9ybWF0RGF0ZSA9IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICAgICAgY29uc3QgZGF5c09mV2VlayA9IFtcInN1blwiLCBcIm1vblwiLCBcInR1ZVwiLCBcIndlZFwiLCBcInRodVwiLCBcImZyaVwiLCBcInNhdFwiXTtcbiAgICAgICAgY29uc3QgZGF5VGV4dCA9IGRheXNPZldlZWtbZGF0ZU9iai5nZXREYXkoKV07XG4gICAgICAgIGxldCB5ZWFyID0gZGF0ZU9iai5nZXRGdWxsWWVhcigpO1xuICAgICAgICBsZXQgbW9udGggPSBkYXRlT2JqLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICBsZXQgZGF5ID0gZGF0ZU9iai5nZXREYXRlKCk7XG4gICAgICAgIGlmIChtb250aCA8IDEwKSB7XG4gICAgICAgICAgICBtb250aCA9IFwiMFwiICsgbW9udGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRheSA8IDEwKSB7XG4gICAgICAgICAgICBkYXkgPSBcIjBcIiArIGRheTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeWVhciAhPSAobmV3IERhdGUoKSkuZ2V0RnVsbFllYXIoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGAke21vbnRofS8ke2RheX0vJHt5ZWFyfWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke2RheVRleHR9ICR7bW9udGh9LyR7ZGF5fWA7XG4gICAgfVxuXG4gICAgLy8gYWRkcyBhIHRvZG8gKHRhc2spIHRvIHRoZSBET01cbiAgICBjb25zdCBhZGRUb2RvID0gZnVuY3Rpb24gKHRvZG8pIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XG4gICAgICAgIGl0ZW0uaWQgPSBcIml0ZW1cIiArIHRvZG8uaWQ7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcmlvcml0eUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByaW9yaXR5QmFyLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eUJhclwiKTtcbiAgICAgICAgcHJpb3JpdHlCYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYHZhcigtLXByaW9yaXR5LSR7dG9kby5wcmlvcml0eX0pYDtcbiAgICBcbiAgICAgICAgY29uc3QgaXRlbUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpdGVtQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiaXRlbUNvbnRlbnRcIik7XG4gICAgXG4gICAgICAgIGNvbnN0IG5hbWVDaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG5hbWVDaGVjay5jbGFzc0xpc3QuYWRkKFwibmFtZUNoZWNrXCIpO1xuICAgIFxuICAgICAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoXCJjaGVja1wiKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGg1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xuICAgICAgICBoNS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgXG4gICAgICAgIG5hbWVDaGVjay5hcHBlbmQoY2hlY2ssIGg1KTtcblxuICAgICAgICBjb25zdCBkYXRlRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGF0ZURlbGV0ZS5jbGFzc0xpc3QuYWRkKFwiZGF0ZURlbGV0ZVwiKTtcbiAgICBcbiAgICAgICAgY29uc3QgZGF0ZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgbGV0IGRhdGVUZXh0ID0gXCJcIjtcbiAgICAgICAgaWYgKHRvZG8uZGF0ZSkge1xuICAgICAgICAgICAgZGF0ZVRleHQgPSBmb3JtYXREYXRlKHRvZG8uZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZGF0ZVAudGV4dENvbnRlbnQgPSBkYXRlVGV4dDtcblxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcInRvZG9EZWxldGVCdXR0b25cIik7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGRlbGV0ZUljb24uc3JjID0gVHJhc2g7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcblxuICAgICAgICBkYXRlRGVsZXRlLmFwcGVuZChkYXRlUCwgZGVsZXRlQnV0dG9uKTtcbiAgICBcbiAgICAgICAgaXRlbUNvbnRlbnQuYXBwZW5kKG5hbWVDaGVjaywgZGF0ZURlbGV0ZSk7XG4gICAgXG4gICAgICAgIGl0ZW0uYXBwZW5kKHByaW9yaXR5QmFyLCBpdGVtQ29udGVudCk7XG4gICAgICAgIGNhdGVnb3J5RGl2cy5nZXQodG9kby5jYXRlZ29yeSkuYXBwZW5kQ2hpbGQoaXRlbSk7XG5cbiAgICAgICAgaWYgKHRvZG8uY29tcGxldGUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgY2hlY2suY2xhc3NMaXN0LmFkZChcImNoZWNrZWRDaGVja1wiKTtcbiAgICAgICAgICAgIGg1LmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkTmFtZVwiKTtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImNoZWNrZWRJdGVtXCIpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC8vIGNsaWNraW5nIHRoZSBjaGVja21hcmsgdG9nZ2xlcyB0aGUgYXBwZWFyYW5jZSBvZiB0aGUgaXRlbSBhbmQgdG9nZ2xlcyBjb21wbGV0ZVxuICAgICAgICBjaGVjay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdG9kb0xpc3QudG9nZ2xlVG9kb0NvbXBsZXRlKHRvZG8uaWQpO1xuICAgICAgICAgICAgaWYgKGNoZWNrLmNsYXNzTGlzdC5jb250YWlucyhcImNoZWNrZWRDaGVja1wiKSkge1xuICAgICAgICAgICAgICAgIGNoZWNrLmNsYXNzTGlzdC5yZW1vdmUoXCJjaGVja2VkQ2hlY2tcIik7XG4gICAgICAgICAgICAgICAgaDUuY2xhc3NMaXN0LnJlbW92ZShcImNoZWNrZWROYW1lXCIpO1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImNoZWNrZWRJdGVtXCIpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS51cGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkQ2hlY2tcIik7XG4gICAgICAgICAgICAgICAgaDUuY2xhc3NMaXN0LmFkZChcImNoZWNrZWROYW1lXCIpO1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImNoZWNrZWRJdGVtXCIpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS51cGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIC8vIGNsaWNraW5nIHRoZSBoZWFkZXIgb3BlbnMgdGhlIGZvcm0gd2l0aCBpbmZvIC8gZWRpdCBmb3IgdGhpcyB0b2RvXG4gICAgICAgIGg1LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB0b2RvTGlzdC5zZXRDdXJyVG9kb0VkaXQodG9kbyk7XG4gICAgICAgICAgICBzaG93RGlhbG9nKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNsaWNraW5nIHRoZSBkZWxldGUgYnV0dG9uIGRlbGV0ZXMgdGhlIHRvZG9cbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkZWxldGVUb2RvKHRvZG8pO1xuICAgICAgICAgICAgdG9kb0xpc3QuZGVsZXRlVG9kbyh0b2RvLmlkKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS51cGRhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIGNsaWNraW5nIHRoZSBhZGQgY2F0ZWdvcnkgYnV0dG9uIG9wZW5zIGEgZm9ybSBpbiB0aGUgbmF2XG4gICAgY29uc3QgaGFuZGxlQ2xpY2tBZGRDYXRlZ29yeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFuZXdDYXRlZ29yeU9wZW4pIHsgLy8gY2hlY2sgdGhlcmUgaXNuJ3QgYWxyZWFkeSBhbiBvcGVuIGZvcm1cbiAgICAgICAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XG4gICAgICAgICAgICBjb25zdCBuZXdDYXRlZ29yeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBuZXdDYXRlZ29yeURpdi5pZCA9ICduZXdDYXRlZ29yeSc7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgbmFtZS50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgbmFtZS5uYW1lID0gJ25hbWUnO1xuICAgICAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiT0tcIjtcbiAgICAgICAgICAgIGJ0bi5pZCA9IFwic3VibWl0Q2F0ZWdvcnlCdXR0b25cIjtcblxuICAgICAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgICAgICAgICAgY2FuY2VsQnRuLmlkID0gXCJjYW5jZWxDYXRlZ29yeUJ1dHRvblwiO1xuICAgICAgICAgICAgbmV3Q2F0ZWdvcnlEaXYuYXBwZW5kKG5hbWUsIGNhbmNlbEJ0biwgYnRuKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbmF2LmFwcGVuZENoaWxkKG5ld0NhdGVnb3J5RGl2KTtcbiAgICAgICAgICAgIG5hbWUuZm9jdXMoKTtcbiAgICAgICAgICAgIG5ld0NhdGVnb3J5T3BlbiA9IHRydWU7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGxpc3RBbmRET01BZGRDYXRlZ29yeSAoY2F0ZWdvcnlOYW1lKSB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlEaXZzLnNldChjYXRlZ29yeU5hbWUsIFtdKTtcbiAgICAgICAgICAgICAgICBhZGRDYXRlZ29yeShjYXRlZ29yeU5hbWUpO1xuICAgICAgICAgICAgICAgIHRvZG9MaXN0LmFkZENhdGVnb3J5KGNhdGVnb3J5TmFtZSk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIHN3aXRjaFRhYihjYXRlZ29yeU5hbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBuZXcgY2F0ZWdvcnkgd2hlbiBmb3JtIHN1Ym1pdHRlZFxuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdEFuZERPTUFkZENhdGVnb3J5KG5hbWUudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBwcmVzc2luZyBlbnRlciB3aGlsZSBpbnB1dCBhbHNvIHN1Ym1pdHMgdGhlIGZvcm1cbiAgICAgICAgICAgIG5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT0gJ0VudGVyJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmFtZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdEFuZERPTUFkZENhdGVnb3J5KG5hbWUudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIGNsaWNraW5nIHRoZSBjYW5jZWwgYnV0dG9uIGNsb3NlcyB0aGUgZm9ybSB3aXRob3V0IG1ha2luZyBhIG5ldyBjYXRlZ29yeVxuICAgICAgICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xvc2VBZGRDYXRlZ29yeSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhZGQgYSBuZXcgY2F0ZWdvcnkgdG8gdGhlIERPTSBhbmQgc3dpdGNoZXMgdG8gaXRcbiAgICBjb25zdCBhZGRDYXRlZ29yeSA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xuICAgICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBidG4udGV4dENvbnRlbnQgPSBjYXRlZ29yeTtcbiAgICAgICAgYnRuLmlkID0gXCJjYXRlZ29yeS1cIiArIGNhdGVnb3J5O1xuICAgIFxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaFRhYihjYXRlZ29yeSk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBuYXYuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5pZCA9ICd0YXNrcyc7XG4gICAgICAgIGNhdGVnb3J5RGl2cy5zZXQoY2F0ZWdvcnksIGRpdik7XG5cbiAgICAgICAgY2xvc2VBZGRDYXRlZ29yeSgpO1xuICAgIH07XG5cbiAgICAvLyBjbG9zZXMgdGhlIGFkZCBjYXRlZ29yeSBmb3JtXG4gICAgY29uc3QgY2xvc2VBZGRDYXRlZ29yeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKG5ld0NhdGVnb3J5T3Blbikge1xuICAgICAgICAgICAgbmV3Q2F0ZWdvcnlPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBuZXdDYXRlZ29yeURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdDYXRlZ29yeScpO1xuICAgICAgICAgICAgbmV3Q2F0ZWdvcnlEaXYucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gZGVsZXRlcyBhIGNhdGVnb3J5IGZyb20gdGhlIERPTVxuICAgIGNvbnN0IGRlbGV0ZUNhdGVnb3J5ID0gZnVuY3Rpb24gKGNhdGVnb3J5KSB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXRlZ29yeS1cIiArIGNhdGVnb3J5KTtcbiAgICAgICAgY2F0ZWdvcnlCdXR0b24ucmVtb3ZlKCk7XG4gICAgICAgIGNhdGVnb3J5RGl2cy5kZWxldGUoY2F0ZWdvcnkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgLy8gc3dpdGNoZXMgdGhlIGNvbnRlbnQgZGl2J3MgY29udGVudCB0byBhIGRpZmZlcmVudCBjYXRlZ29yeSdzIGNvbnRlbnRcbiAgICBjb25zdCBzd2l0Y2hUYWIgPSBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcbiAgICAgICAgY29udGVudC5xdWVyeVNlbGVjdG9yKFwiaDJcIikudGV4dENvbnRlbnQgPSBjYXRlZ29yeTtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza3NcIikpIHtcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrc1wiKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudC5hcHBlbmQoY2F0ZWdvcnlEaXZzLmdldChjYXRlZ29yeSkpO1xuICAgICAgICBjdXJyZW50R3JvdXAgPSBjYXRlZ29yeTtcbiAgICB9O1xuXG4gICAgLy8gZWRpdHMgdGhlIERPTSBvZiBhIHNwZWNpZmljIHRvZG9cbiAgICBjb25zdCBlZGl0VG9kbyA9IGZ1bmN0aW9uICh0b2RvLCBvbGRDYXRlZ29yeSkge1xuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtXCIgKyB0b2RvLmlkKTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eUJhciA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eUJhclwiKTtcbiAgICAgICAgcHJpb3JpdHlCYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYHZhcigtLXByaW9yaXR5LSR7dG9kby5wcmlvcml0eX0pYDtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGg1ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiaDVcIik7XG4gICAgICAgIGg1LnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcblxuICAgICAgICBjb25zdCBkYXRlUCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcInBcIik7XG4gICAgICAgIGxldCBkYXRlVGV4dCA9IFwiXCI7XG4gICAgICAgIGlmICh0b2RvLmRhdGUpIHtcbiAgICAgICAgICAgIGRhdGVUZXh0ID0gZm9ybWF0RGF0ZSh0b2RvLmRhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGRhdGVQLnRleHRDb250ZW50ID0gZGF0ZVRleHQ7XG4gICAgXG4gICAgICAgIC8vIGlmIHRoZSBjYXRlZ29yeSB3YXMgZWRpdGVkLCBtb3ZlIHRoZSB0b2RvIGZyb20gdGhlIG9sZCBjYXRlZ29yeSB0byB0aGUgbmV3IG9uZVxuICAgICAgICBpZiAodG9kby5jYXRlZ29yeSAhPSBvbGRDYXRlZ29yeSkge1xuICAgICAgICAgICAgaXRlbS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGNhdGVnb3J5RGl2cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09IHRvZG8uY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlEaXZzLmdldChrZXkpLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIGRlbGV0ZSBhIHRvZG8gZnJvbSB0aGUgRE9NXG4gICAgY29uc3QgZGVsZXRlVG9kbyA9IGZ1bmN0aW9uICh0b2RvKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1cIiArIHRvZG8uaWQpO1xuICAgICAgICBpdGVtLnJlbW92ZSgpO1xuICAgIH07XG5cbiAgICAvLyBsb2FkIHRoZSBkcm9wZG93biB1c2VkIHRvIHNlbGVjdCBjYXRlZ29yeSBpbiB0aGUgdGFzayBmb3JtXG4gICAgY29uc3QgbG9hZEFkZFRhc2tDYXRlZ29yaWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBjYXRlZ29yeURyb3BEb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgY2F0ZWdvcnlEcm9wRG93bi5jbGFzc0xpc3QuYWRkKFwiYWRkVGFza0lucHV0XCIpO1xuICAgICAgICBjYXRlZ29yeURyb3BEb3duLm5hbWUgPSBcImNhdGVnb3J5XCI7XG4gICAgICAgIGZvciAobGV0IGNhdGVnb3J5IG9mIGNhdGVnb3J5RGl2cy5rZXlzKCkpe1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGNhdGVnb3J5O1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY2F0ZWdvcnk7XG4gICAgICAgICAgICBpZiAoY2F0ZWdvcnkgPT0gY3VycmVudEdyb3VwKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGNhdGVnb3J5RHJvcERvd24uYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2F0ZWdvcnlEcm9wRG93bjtcbiAgICB9O1xuXG4gICAgY29uc3QgbG9hZFNlbGVjdGVkUHJpb3JpdHkgPSBmdW5jdGlvbiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlJbnB1dFwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICsrKSB7XG4gICAgICAgICAgICBpZiAocHJpb3JpdHlJbnB1dC5vcHRpb25zW2ldLnZhbHVlID09IHNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC5vcHRpb25zW2ldLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHNob3cgdGhlIHRhc2sgZm9ybSBkaWFsb2dcbiAgICBjb25zdCBzaG93RGlhbG9nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkaWFsb2dDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpYWxvZ0NvbnRhaW5lclwiKTtcbiAgICAgICAgZGlhbG9nQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZ1wiKTtcbiAgICAgICAgZGlhbG9nLnNob3coKTtcbiAgICBcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2F0ZWdvcnlGaWVsZFwiKTtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlEcm9wRG93biA9IGNhdGVnb3J5RmllbGQucXVlcnlTZWxlY3RvcihcInNlbGVjdFwiKTtcbiAgICAgICAgY2F0ZWdvcnlEcm9wRG93bi5yZW1vdmUoKTtcbiAgICBcbiAgICAgICAgY2F0ZWdvcnlGaWVsZC5hcHBlbmRDaGlsZChsb2FkQWRkVGFza0NhdGVnb3JpZXMoKSk7XG4gICAgICAgIGxvYWRTZWxlY3RlZFByaW9yaXR5KDApO1xuICAgIFxuICAgICAgICBpZiAodG9kb0xpc3QuZ2V0Q3VyclRvZG9FZGl0KCkgIT0gbnVsbCkge1xuICAgICAgICAgICAgbG9hZFNlbGVjdGVkUHJpb3JpdHkodG9kb0xpc3QuZ2V0Q3VyclRvZG9FZGl0KCkucHJpb3JpdHkpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlSW5wdXRcIikudmFsdWUgPSB0b2RvTGlzdC5nZXRDdXJyVG9kb0VkaXQoKS50aXRsZTtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRlID0gdG9kb0xpc3QuZ2V0Q3VyclRvZG9FZGl0KCkuZGF0ZTtcbiAgICAgICAgICAgIGlmICh0b2RvRGF0ZSkge1xuICAgICAgICAgICAgICAgIGxldCBtb250aCA9IHRvZG9EYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICAgICAgICAgIGlmIChtb250aCA8IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vbnRoID0gXCIwXCIgKyBtb250aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGRheSA9IHRvZG9EYXRlLmdldERhdGUoKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF5IDwgMTApIHtcbiAgICAgICAgICAgICAgICAgICAgZGF5ID0gXCIwXCIgKyBkYXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZUlucHV0XCIpLnZhbHVlID0gYCR7dG9kb0RhdGUuZ2V0RnVsbFllYXIoKX0tJHttb250aH0tJHtkYXl9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25JbnB1dFwiKS52YWx1ZSA9IHRvZG9MaXN0LmdldEN1cnJUb2RvRWRpdCgpLmRlc2NyaXB0aW9uO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICAvLyBoaWRlIHRoZSB0YXNrIGZvcm0gZGlhbG9nXG4gICAgY29uc3QgaGlkZURpYWxvZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGlhbG9nQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaWFsb2dDb250YWluZXJcIik7XG4gICAgICAgIGRpYWxvZ0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2dcIik7XG4gICAgICAgIGNsZWFyRGlhbG9nKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza0Zvcm1cIikpO1xuICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICB9O1xuICAgIFxuICAgIC8vIGNsZWFyIHRoZSB0YXNrIGZvcm1cbiAgICBjb25zdCBjbGVhckRpYWxvZyA9IGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCB0ZXh0YXJlYVwiKS5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgZmllbGQudmFsdWUgPSBcIlwiO1xuICAgICAgICB9KTtcbiAgICAgICAgdG9kb0xpc3Quc2V0Q3VyclRvZG9FZGl0KG51bGwpO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBnZXRDdXJyZW50R3JvdXAsIGFkZFRvZG8sIGhhbmRsZUNsaWNrQWRkQ2F0ZWdvcnksIGFkZENhdGVnb3J5LCBkZWxldGVDYXRlZ29yeSwgc3dpdGNoVGFiLCBlZGl0VG9kbywgc2hvd0RpYWxvZywgaGlkZURpYWxvZywgY2xlYXJEaWFsb2cgfTtcbn0iLCIvLyBmdW5jdGlvbiB0byBleHRyYWN0IGRhdGEgZnJvbSB0aGUgdGFzayBkaWFsb2cgZm9ybVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9ybURhdGEgKCkge1xuICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrRm9ybVwiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gYWRkVGFza0Zvcm0uZWxlbWVudHNbXCJ0aXRsZVwiXS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGFkZFRhc2tGb3JtLmVsZW1lbnRzW1wicHJpb3JpdHlcIl0udmFsdWU7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBhZGRUYXNrRm9ybS5lbGVtZW50c1tcImNhdGVnb3J5XCJdLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gYWRkVGFza0Zvcm0uZWxlbWVudHNbXCJkZXNjcmlwdGlvblwiXS52YWx1ZTtcblxuICAgIGxldCBkYXRlID0gYWRkVGFza0Zvcm0uZWxlbWVudHNbXCJkYXRlXCJdLnZhbHVlO1xuICAgIGlmIChkYXRlKSB7XG4gICAgICAgIGNvbnN0IGRhdGVZZWFyID0gcGFyc2VJbnQoZGF0ZS5zbGljZSgwLCA0KSk7XG4gICAgICAgIGNvbnN0IGRhdGVNb250aCA9IHBhcnNlSW50KGRhdGUuc2xpY2UoNSwgNykpIC0gMTtcbiAgICAgICAgY29uc3QgZGF0ZURhdGUgPSBwYXJzZUludChkYXRlLnNsaWNlKDgsIDEwKSk7XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlWWVhciwgZGF0ZU1vbnRoLCBkYXRlRGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGF0ZSA9IG51bGw7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7IHRpdGxlLCBkYXRlLCBwcmlvcml0eSwgY2F0ZWdvcnksIGRlc2NyaXB0aW9uIH07XG59IiwiaW1wb3J0IFBsdXMgZnJvbSAnLi4vYXNzZXRzL3BsdXMuc3ZnJztcblxuLy8gaW5pdGlhbGl6YXRpb24gb2YgdmFyaW91cyBkb20gZWxlbWVudHNcbmV4cG9ydCBmdW5jdGlvbiBpbml0ICh0b2RvTGlzdCwgZG9tU3R1ZmYsIGxvY2FsU3RvcmFnZSkge1xuXG4gICAgY29uc3QgbG9hZERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuaXNQb3B1bGF0ZWQoKSkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmxvYWRDYXRlZ29yaWVzKCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UubG9hZFRvZG9zKCk7XG4gICAgICAgICAgICBmb3IgKGxldCBjYXRlZ29yeSBvZiB0b2RvTGlzdC5nZXRDYXRlZ29yaWVzKCkpIHtcbiAgICAgICAgICAgICAgICBkb21TdHVmZi5hZGRDYXRlZ29yeShjYXRlZ29yeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCB0b2RvIG9mIHRvZG9MaXN0LmdldFRvZG9zKCkpIHtcbiAgICAgICAgICAgICAgICBkb21TdHVmZi5hZGRUb2RvKHRvZG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9kb0xpc3QuYWRkQ2F0ZWdvcnkoXCJ1bmdyb3VwZWRcIik7XG4gICAgICAgICAgICB0b2RvTGlzdC5hZGRDYXRlZ29yeShcInNjaG9vbFwiKTtcbiAgICAgICAgICAgIGRvbVN0dWZmLmFkZENhdGVnb3J5KFwidW5ncm91cGVkXCIpO1xuICAgICAgICAgICAgZG9tU3R1ZmYuYWRkQ2F0ZWdvcnkoXCJzY2hvb2xcIik7XG4gICAgICAgICAgICBhZGRUb2RvKFwid2VsY29tZSB0byB0dWR1IVwiLCBuZXcgRGF0ZSgyMDI0LCA3LCAxNSksIDIsIFwidW5ncm91cGVkXCIsIFwiOkRcIik7XG4gICAgICAgICAgICBhZGRUb2RvKFwiY2xpY2sgbWUgOjNcIiwgbmV3IERhdGUoMjAyNCwgNywgMjkpLCAxLCBcInVuZ3JvdXBlZFwiLCBcInlvdSBjYW4gY2hhbmdlIGFueSBvZiB0aGVzZSBmaWVsZHMhIHR1ZHUgdXNlcyB5b3VyIGJyb3dzZXIncyBsb2NhbCBzdG9yYWdlLCBzbyBjbGVhciB5b3VyIGNvb2tpZXMgdG8gcmVzZXQuXCIpO1xuICAgICAgICAgICAgYWRkVG9kbyhcImJ1eSBlZ2dzXCIsIG5ldyBEYXRlKDIwMjQsIDcsIDMxKSwgMCwgXCJ1bmdyb3VwZWRcIiwgXCJ0cmFkZXIgam9lc1wiKTtcbiAgICAgICAgICAgIGFkZFRvZG8oXCJzdHVkeSBmb3IgY3MgZXhhbVwiLCBuZXcgRGF0ZSgyMDI0LCA3LCAxNSksIDEsIFwic2Nob29sXCIsIFwiaSBob3BlIGkgYWNlIHRoaXMgb25lIVwiKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBkb21TdHVmZi5zd2l0Y2hUYWIoXCJ1bmdyb3VwZWRcIik7XG4gICAgfVxuICAgIFxuICAgIFxuXG4gICAgLy8gdGhpcyBwbHVzIHNpZ24gaWNvbiBzaG93cyB0aGUgYWRkIHRhc2sgZGlhbG9nIGZvcm0gd2hlbiBjbGlja2VkLlxuICAgIGNvbnN0IGxvYWRBZGRUYXNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrXCIpO1xuICAgICAgICBhZGRUYXNrLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIikuc3JjID0gUGx1cztcbiAgICAgICAgY29uc3QgZGlhbG9nT3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlhbG9nT3ZlcmxheVwiKTtcbiAgICAgICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza0J1dHRvblwiKVxuICAgIFxuICAgICAgICAvLyBjbGlja2luZyBvdXRzaWRlIG9mIHRoZSBkaWFsb2cgY2xvc2VzIGl0LlxuICAgICAgICBkaWFsb2dPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb21TdHVmZi5oaWRlRGlhbG9nKCk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICAvLyBjbGlja2luZyB0aGUgYWRkIHRhc2sgaWNvbiBvcGVucyB0aGUgYWRkIHRhc2sgZGlhbG9nIGZvcm0uXG4gICAgICAgIGFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGRvbVN0dWZmLnNob3dEaWFsb2coKTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIC8vIGNsaWNraW5nIHRoZSBzdWJtaXQgYnV0dG9uIG9mIHRoZSBmb3JtIGVpdGhlciBhZGRzIGEgbmV3IHRhc2sgb3IgZWRpdHMgYW4gZXhpc3Rpbmcgb25lLlxuICAgICAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgY3RkZSA9IHRvZG9MaXN0LmdldEN1cnJUb2RvRWRpdCgpO1xuICAgICAgICAgICAgaWYgKGN0ZGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvbGRDYXRlZ29yeSA9IGN0ZGUuY2F0ZWdvcnk7XG4gICAgICAgICAgICAgICAgdG9kb0xpc3QuaGFuZGxlRm9ybVN1Ym1pdCgpO1xuICAgICAgICAgICAgICAgIGRvbVN0dWZmLmVkaXRUb2RvKGN0ZGUsIG9sZENhdGVnb3J5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvbVN0dWZmLmFkZFRvZG8odG9kb0xpc3QuaGFuZGxlRm9ybVN1Ym1pdCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvbVN0dWZmLmhpZGVEaWFsb2coKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS51cGRhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIHRoZSBwbHVzIHNpZ24gaW4gdGhlIHNpZGUgYmFyIG1ha2VzIGEgZm9ybSB0byBjcmVhdGUgYSBuZXcgY2F0ZWdvcnkuIFxuICAgIGNvbnN0IGxvYWRBZGRDYXRlZ29yeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgYWRkQ2F0ZWdvcnlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZENhdGVnb3J5QnV0dG9uXCIpO1xuICAgICAgICBhZGRDYXRlZ29yeUJ1dHRvbi5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpLnNyYyA9IFBsdXM7XG4gICAgXG4gICAgICAgIGFkZENhdGVnb3J5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb21TdHVmZi5oYW5kbGVDbGlja0FkZENhdGVnb3J5KCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBjbGlja2luZyBcImRlbGV0ZSB0aGlzIGNhdGVnb3J5XCIgZGVsZXRlcyB0aGUgY2F0ZWdvcnkgdGhlIHZpZXdlciBpcyB1c2luZ1xuICAgIC8vIHVubGVzcyBpdCBpcyB0aGUgXCJ1bmdyb3VwZWRcIiBjYXRlZ29yeS5cbiAgICBjb25zdCBsb2FkRGVsZXRlQ2F0ZWdvcnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUNhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWxldGVDYXRlZ29yeVwiKTtcblxuICAgICAgICBkZWxldGVDYXRlZ29yeS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IGRvbVN0dWZmLmdldEN1cnJlbnRHcm91cCgpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQgPT0gXCJ1bmdyb3VwZWRcIikge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwieW91IGNhbid0IGRlbGV0ZSB0aGUgZGVmYXVsdCBjYXRlZ29yeSFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb21TdHVmZi5zd2l0Y2hUYWIoXCJ1bmdyb3VwZWRcIik7XG4gICAgICAgICAgICAgICAgdG9kb0xpc3QuZGVsZXRlQ2F0ZWdvcnkoY3VycmVudCk7XG4gICAgICAgICAgICAgICAgZG9tU3R1ZmYuZGVsZXRlQ2F0ZWdvcnkoY3VycmVudCk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBhZGQgYSB0b2RvIHRvIHRoZSB0b2RvIGRhdGEgc3RydWN0dXJlIGFzIHdlbGwgYXMgYWRkIGl0IHRvIHRoZSBkb21cbiAgICAvLyB0aGlzIGZ1bmN0aW9uIGlzIG9ubHkgdXNlZCB0byBhZGQgdGhlIGRlZmF1bHQgdG9kb3MuXG4gICAgY29uc3QgYWRkVG9kbyA9IGZ1bmN0aW9uICh0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGNhdGVnb3J5LCBkZXNjcmlwdGlvbikge1xuICAgICAgICBjb25zdCB0b2RvID0gdG9kb0xpc3QuYWRkVG9kbyh0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGNhdGVnb3J5LCBkZXNjcmlwdGlvbik7XG4gICAgICAgIGRvbVN0dWZmLmFkZFRvZG8odG9kbyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS51cGRhdGUoKTtcbiAgICB9O1xuXG4gICAgbG9hZERhdGEoKTtcbiAgICBsb2FkQWRkVGFzaygpO1xuICAgIGxvYWRBZGRDYXRlZ29yeSgpO1xuICAgIGxvYWREZWxldGVDYXRlZ29yeSgpO1xuXG4gICAgcmV0dXJuIHsgYWRkVG9kbyB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIG1ha2VMb2NhbFN0b3JhZ2UgKHRvZG9MaXN0KSB7XG4gICAgLy8gY2hlY2sgaWYgdGhlcmUgaXMgYW55IGRhdGEgaW4gbG9jYWwgc3RvcmFnZVxuICAgIGNvbnN0IGlzUG9wdWxhdGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXRlZ29yaWVzXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGxvYWRDYXRlZ29yaWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXRlZ29yaWVzXCIpLnNwbGl0KFN0cmluZy5mcm9tQ2hhckNvZGUoMzApKTtcbiAgICAgICAgaWYgKGNhdGVnb3JpZXMpIHtcbiAgICAgICAgICAgIHRvZG9MaXN0LnNldENhdGVnb3JpZXMoY2F0ZWdvcmllcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBsb2FkVG9kb3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpKSB7XG4gICAgICAgICAgICBjb25zdCB0b2RvU3RyaW5ncyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikuc3BsaXQoU3RyaW5nLmZyb21DaGFyQ29kZSgyOSkpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvU3RyaW5ncy5sZW5ndGg7IGkgKyspe1xuICAgICAgICAgICAgICAgIC8vIHRpdGxlLCBkYXRlLCBwcmlvcml0eSwgY2F0ZWdvcnksIGRlc2NyaXB0aW9uLCBjb21wbGV0ZVxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9BdHRyaWJ1dGVzID0gdG9kb1N0cmluZ3NbaV0uc3BsaXQoU3RyaW5nLmZyb21DaGFyQ29kZSgzMCkpO1xuICAgICAgICAgICAgICAgIGxldCBjb21wbGV0ZSA9IHRvZG9BdHRyaWJ1dGVzWzVdO1xuICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZSA9PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRvZG9BdHRyaWJ1dGVzWzFdKTtcbiAgICAgICAgICAgICAgICB0b2RvTGlzdC5hZGRUb2RvKHRvZG9BdHRyaWJ1dGVzWzBdLCBkYXRlLCB0b2RvQXR0cmlidXRlc1syXSwgdG9kb0F0dHJpYnV0ZXNbM10sIHRvZG9BdHRyaWJ1dGVzWzRdLCBjb21wbGV0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCB0b2RvU3RyaW5nID0gXCJcIjtcbiAgICAgICAgY29uc3QgdG9kb3MgPSB0b2RvTGlzdC5nZXRUb2RvcygpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgY29uc3QgdG9kbyA9IHRvZG9zW2ldO1xuICAgICAgICAgICAgLy8gdGl0bGUsIGRhdGUsIHByaW9yaXR5LCBjYXRlZ29yeSwgZGVzY3JpcHRpb25cbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSB0b2RvLmRhdGU7XG4gICAgICAgICAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgICAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7KG1vbnRoIDwgMTApID8gXCIwXCIgKyBtb250aCA6IG1vbnRofS0keyhkYXkgPCAxMCkgPyBcIjBcIiArIGRheSA6IGRheX1UMDA6MDA6MDBgO1xuICAgICAgICAgICAgdG9kb1N0cmluZyArPSBgJHt0b2RvLnRpdGxlfSR7U3RyaW5nLmZyb21DaGFyQ29kZSgzMCl9JHtkYXRlU3RyaW5nfSR7U3RyaW5nLmZyb21DaGFyQ29kZSgzMCl9JHt0b2RvLnByaW9yaXR5fSR7U3RyaW5nLmZyb21DaGFyQ29kZSgzMCl9JHt0b2RvLmNhdGVnb3J5fSR7U3RyaW5nLmZyb21DaGFyQ29kZSgzMCl9JHt0b2RvLmRlc2NyaXB0aW9ufSR7U3RyaW5nLmZyb21DaGFyQ29kZSgzMCl9JHt0b2RvLmNvbXBsZXRlfWA7XG4gICAgICAgICAgICBpZiAoaSAhPSB0b2Rvcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgdG9kb1N0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDI5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjYXRlZ29yaWVzU3RyaW5nID0gXCJcIjtcbiAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IHRvZG9MaXN0LmdldENhdGVnb3JpZXMoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3JpZXNbaV07XG4gICAgICAgICAgICBjYXRlZ29yaWVzU3RyaW5nICs9IGNhdGVnb3J5O1xuICAgICAgICAgICAgaWYgKGkgIT0gY2F0ZWdvcmllcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllc1N0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDMwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXRlZ29yaWVzXCIsIGNhdGVnb3JpZXNTdHJpbmcpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9zXCIsIHRvZG9TdHJpbmcpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGlzUG9wdWxhdGVkLCBsb2FkQ2F0ZWdvcmllcywgbG9hZFRvZG9zLCB1cGRhdGUgfVxufSIsImltcG9ydCB7IGdldEZvcm1EYXRhIH0gZnJvbSBcIi4vZm9ybURhdGFcIjtcblxuLy8gdGhlIHRvZG8gbGlzdCBoYW5kbGVzIGFsbCB0aGluZ3MgdG8gZG8gd2l0aCB0aGUgYWN0dWFsIGRhdGFcbmV4cG9ydCBmdW5jdGlvbiBtYWtlVG9kb0xpc3QgKCkge1xuICAgIGNvbnN0IHRvZG9zID0gW107XG4gICAgbGV0IGN1cnJUb2RvRWRpdCA9IG51bGw7XG4gICAgbGV0IGlkeCA9IDA7XG4gICAgbGV0IGNhdGVnb3JpZXMgPSBbXTtcblxuICAgIC8vIG1ha2UgYSBuZXcgdG9kbyBhbmQgYWRkIGl0IHRvIHRoZSB0b2RvIGFycmF5XG4gICAgY29uc3QgYWRkVG9kbyA9IGZ1bmN0aW9uICh0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGNhdGVnb3J5LCBkZXNjcmlwdGlvbiA9IFwiXCIsIGNvbXBsZXRlKXtcbiAgICAgICAgY29uc3QgdG9kbyA9IG1ha2VUb2RvKHRpdGxlLCBkYXRlLCBwcmlvcml0eSwgY2F0ZWdvcnksIGRlc2NyaXB0aW9uLCBjb21wbGV0ZSk7XG4gICAgICAgIHRvZG9zLnB1c2godG9kbyk7XG4gICAgICAgIHJldHVybiB0b2RvO1xuICAgIH07XG4gICAgXG4gICAgLy8gZmluZCBhIHRvZG8gaW4gdGhlIHRvZG8gYXJyYXkgdXNpbmcgYSBnaXZlbiBpZFxuICAgIC8vIGFuZCBlZGl0IHRoZSBhdHRyaWJ1dGVzIG9mIHRoYXQgdG9kb1xuICAgIGNvbnN0IGVkaXRUb2RvID0gZnVuY3Rpb24gKGlkLCB0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGNhdGVnb3J5LCBkZXNjcmlwdGlvbiA9IFwiXCIpIHtcbiAgICAgICAgdG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICAgICAgaWYgKHRvZG8uaWQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICB0b2RvLnRpdGxlID0gdGl0bGU7XG4gICAgICAgICAgICAgICAgdG9kby5kYXRlID0gZGF0ZTtcbiAgICAgICAgICAgICAgICB0b2RvLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgICAgICAgICAgdG9kby5jYXRlZ29yeSA9IGNhdGVnb3J5O1xuICAgICAgICAgICAgICAgIHRvZG8uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9kbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIGRlbGV0ZSBhIHRvZG8gZnJvbSB0aGUgdG9kbyBsaXN0IGdpdmVuIGl0cyBpZFxuICAgIGNvbnN0IGRlbGV0ZVRvZG8gPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgIGlmICh0b2Rvc1tpXS5pZCA9PSBpZCkge1xuICAgICAgICAgICAgICAgIHRvZG9zLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZVRvZG9Db21wbGV0ZSA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICBpZiAodG9kby5pZCA9PSBpZCkge1xuICAgICAgICAgICAgICAgIHRvZG8uY29tcGxldGUgPSAhdG9kby5jb21wbGV0ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9kbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gZmFjdG9yeSBmdW5jdGlvbiB0byBtYWtlIHRvZG8gb2JqZWN0c1xuICAgIGNvbnN0IG1ha2VUb2RvID0gZnVuY3Rpb24gKHRpdGxlLCBkYXRlLCBwcmlvcml0eSwgY2F0ZWdvcnksIGRlc2NyaXB0aW9uLCBjb21wbGV0ZT1mYWxzZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgZGF0ZTogZGF0ZSxcbiAgICAgICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSwgXG4gICAgICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnksIFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgY29tcGxldGU6IGNvbXBsZXRlLCBcbiAgICAgICAgICAgIGlkOiBpZHgrK1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvLyByZXR1cm5zIG51bGwgaWYgYSB0b2RvIHdhcyBlZGl0ZWRcbiAgICAvLyByZXR1cm5zIHRoZSBuZXcgdG9kbyBpcyBhIHRvZG8gd2FzIGNyZWF0ZWRcbiAgICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY3VyclRvZG9FZGl0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGVkaXRUb2RvRnJvbUZvcm0oY3VyclRvZG9FZGl0LmlkKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGFkZFRvZG9Gcm9tRm9ybSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZ2V0IGZvcm0gZGF0YSBhbmQgYWRkIGEgbmV3IHRvZG8gdG8gdGhlIHRvZG8gYXJyYXlcbiAgICAvLyByZXR1cm5zIHRoZSBuZXcgdG9kb1xuICAgIGNvbnN0IGFkZFRvZG9Gcm9tRm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGdldEZvcm1EYXRhKCk7XG4gICAgICAgIHJldHVybiBhZGRUb2RvKGRhdGEudGl0bGUsIGRhdGEuZGF0ZSwgZGF0YS5wcmlvcml0eSwgZGF0YS5jYXRlZ29yeSwgZGF0YS5kZXNjcmlwdGlvbik7XG4gICAgfTtcblxuICAgIC8vIGdldCBmb3JtIGRhdGEgYW5kIGVkaXQgdGhlIGV4aXN0aW5nIHRvZG9cbiAgICAvLyByZXR1cm5zIHRoZSBlZGl0ZWQgdG9kb1xuICAgIGNvbnN0IGVkaXRUb2RvRnJvbUZvcm0gPSBmdW5jdGlvbiAodGFza0lkKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBnZXRGb3JtRGF0YSgpO1xuICAgICAgICByZXR1cm4gZWRpdFRvZG8odGFza0lkLCBkYXRhLnRpdGxlLCBkYXRhLmRhdGUsIGRhdGEucHJpb3JpdHksIGRhdGEuY2F0ZWdvcnksIGRhdGEuZGVzY3JpcHRpb24sIGRhdGEuY29tcGxldGUpO1xuICAgIH07XG5cbiAgICAvLyBnZXR0ZXIgZm9yIGN1cnJUb2RvRWRpdFxuICAgIGNvbnN0IGdldEN1cnJUb2RvRWRpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJUb2RvRWRpdDtcbiAgICB9XG5cbiAgICAvLyBzZXR0ZXIgZm9yIGN1cnJUb2RvRWRpdFxuICAgIGNvbnN0IHNldEN1cnJUb2RvRWRpdCA9IGZ1bmN0aW9uICh0b2RvKSB7XG4gICAgICAgIGN1cnJUb2RvRWRpdCA9IHRvZG87XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIHRoZSBhcnJheSBvZiB0b2Rvc1xuICAgIGNvbnN0IGdldFRvZG9zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdG9kb3M7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIHRoZSBhcnJheSBvZiBjYXRlZ29yaWVzXG4gICAgY29uc3QgZ2V0Q2F0ZWdvcmllcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNhdGVnb3JpZXM7XG4gICAgfVxuXG4gICAgLy8gYWRkIGEgY2F0ZWdvcnkgdG8gdGhlIGNhdGVnb3JpZXMgYXJyYXlcbiAgICBjb25zdCBhZGRDYXRlZ29yeSA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xuICAgICAgICBjYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpO1xuICAgIH1cblxuICAgIC8vIGRlbGV0ZSBhIGNhdGVnb3J5IGZyb20gdGhlIGNhdGVnb3JpZXMgYXJyYXlcbiAgICBjb25zdCBkZWxldGVDYXRlZ29yeSA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xuICAgICAgICBjb25zdCBpZHggPSBjYXRlZ29yaWVzLmluZGV4T2YoY2F0ZWdvcnkpO1xuICAgICAgICBpZiAoaWR4ID4gLTEpIHtcbiAgICAgICAgICAgIGNhdGVnb3JpZXMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihjYXRlZ29yeSArIFwiIG5vdCBmb3VuZFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldENhdGVnb3JpZXMgPSBmdW5jdGlvbiAoY2F0ZWdvcnlBcnJheSkge1xuICAgICAgICBjYXRlZ29yaWVzID0gQXJyYXkuZnJvbShjYXRlZ29yeUFycmF5KTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBhZGRUb2RvLCBlZGl0VG9kbywgZGVsZXRlVG9kbywgdG9nZ2xlVG9kb0NvbXBsZXRlLCBoYW5kbGVGb3JtU3VibWl0LCBhZGRUb2RvRnJvbUZvcm0sIGVkaXRUb2RvRnJvbUZvcm0sIGdldEN1cnJUb2RvRWRpdCwgc2V0Q3VyclRvZG9FZGl0LCBnZXRUb2RvcywgZ2V0Q2F0ZWdvcmllcywgYWRkQ2F0ZWdvcnksIGRlbGV0ZUNhdGVnb3J5LCBzZXRDYXRlZ29yaWVzIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5pbXBvcnQgeyBtYWtlRG9tU3R1ZmYgfSBmcm9tICcuL21vZHVsZXMvZG9tU3R1ZmYnO1xuaW1wb3J0IHsgbWFrZVRvZG9MaXN0IH0gZnJvbSAnLi9tb2R1bGVzL3RvZG9MaXN0JztcbmltcG9ydCB7IG1ha2VMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL21vZHVsZXMvbG9jYWxTdG9yYWdlJztcbmltcG9ydCB7IGluaXQgfSBmcm9tICcuL21vZHVsZXMvaW5pdCc7XG5cbmNvbnN0IHRvZG9MaXN0ID0gbWFrZVRvZG9MaXN0KCk7XG5jb25zdCBsb2NhbFN0b3JhZ2UgPSBtYWtlTG9jYWxTdG9yYWdlKHRvZG9MaXN0KTtcbmNvbnN0IGRvbVN0dWZmID0gbWFrZURvbVN0dWZmKHRvZG9MaXN0LCBsb2NhbFN0b3JhZ2UpO1xuaW5pdCh0b2RvTGlzdCwgZG9tU3R1ZmYsIGxvY2FsU3RvcmFnZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=