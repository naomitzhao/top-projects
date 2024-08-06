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

/***/ "./src/modules/categories.js":
/*!***********************************!*\
  !*** ./src/modules/categories.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeCategories: () => (/* binding */ makeCategories)
/* harmony export */ });
// categories are mapped to their DOM "tasks" div which contains the task elements within them

function makeCategories () {
    const map = new Map();

    const addCategory = function (newCategoryName) {
        const div = document.createElement("div");
        div.id = 'tasks';
        map.set(newCategoryName, div);
    };

    const get = function (key) {
        return map.get(key);
    };

    const keys = function () {
        return map.keys();
    };

    const getMap = function () {
        return map;
    };

    const deleteCategory = function (key) {
        map.delete(key);
    };

    addCategory("ungrouped");
    addCategory("school");

    return { addCategory, get, keys, getMap, deleteCategory };
    
};

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

function makeDomStuff (categories, todoList) {
    let newCategoryOpen = false;
    let currentGroup = "ungrouped";

    const content = document.getElementById("content");

    // getter for currentGroup
    const getCurrentGroup = function () {
        return currentGroup;
    };

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
        dateP.textContent = todo.date;

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("todoDeleteButton");

        const deleteIcon = document.createElement("img");
        deleteIcon.src = _assets_trash_svg__WEBPACK_IMPORTED_MODULE_0__;
        deleteButton.appendChild(deleteIcon);

        dateDelete.append(dateP, deleteButton);
    
        itemContent.append(nameCheck, dateDelete);
    
        item.append(priorityBar, itemContent);
        categories.get(todo.category).appendChild(item);
    
        // clicking the checkmark toggles the appearance of the item
        check.addEventListener("click", () => {
            if (check.classList.contains("checkedCheck")) {
                check.classList.remove("checkedCheck");
                h5.classList.remove("checkedName");
                item.classList.remove("checkedItem");
            }
            else {
                check.classList.add("checkedCheck");
                h5.classList.add("checkedName");
                item.classList.add("checkedItem");
            }
        });
    
        // clicking the header opens the form with info / edit for this todo
        h5.addEventListener("click", () => {
            todoList.setCurrTodoEdit(todo);
            showDialog();
        });

        // clicking the delete button deletes the todo from the DOM
        deleteButton.addEventListener("click", () => {
            deleteTodo(todo);
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

            // create a new category when form submitted
            btn.addEventListener("click", () => {
                if (name.value) {
                    categories.addCategory(name.value);
                    addCategory(name.value);
                    switchTab(name.value);
                }
            });

            // pressing enter while input also submits the form
            name.addEventListener("keydown", (e) => {
                if (e.key == 'Enter') {
                    if (name.value) {
                        categories.addCategory(name.value);
                        addCategory(name.value);
                        switchTab(name.value);
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
    }

    // switches the content div's content to a different category's content
    const switchTab = function (category) {
        content.querySelector("h2").textContent = category;
        content.removeChild(document.getElementById("tasks"));
        content.append(categories.get(category));
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
        dateP.textContent = todo.date;
    
        // if the category was edited, move the todo from the old category to the new one
        if (todo.category != oldCategory) {
            item.remove();
            categories.keys().forEach((key) => {
                if (key == todo.category) {
                    categories.get(key).appendChild(item);
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
        for (let category of categories.keys()){
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
            document.getElementById("dateInput").value = todoList.getCurrTodoEdit().date;
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

    content.append(categories.get("ungrouped"));

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
    const date = addTaskForm.elements["date"].value;
    const priority = addTaskForm.elements["priority"].value;
    const category = addTaskForm.elements["category"].value;
    const description = addTaskForm.elements["description"].value;

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
/* harmony export */   makeInit: () => (/* binding */ makeInit)
/* harmony export */ });
/* harmony import */ var _assets_plus_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/plus.svg */ "./src/assets/plus.svg");


// initialization of various dom elements
function makeInit (categories, todoList, domStuff) {

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
        });
    };

    // load the default categories of the app.
    const loadNav = function () {
        domStuff.addCategory("ungrouped");
        domStuff.addCategory("school");
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
                categories.deleteCategory(current);
                domStuff.deleteCategory(current);
            }
        });
    }

    // add a todo to the todo data structure as well as add it to the dom
    // this function is only used to add the default todos.
    const addTodo = function (title, date, priority, category, description) {
        const todo = todoList.addTodo(title, date, priority, category, description);
        domStuff.addTodo(todo);
    };

    loadAddTask();
    loadNav();
    loadAddCategory();
    loadDeleteCategory();

    return { addTodo }
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
function makeTodoList (categories) {
    const todos = [];
    let currTodoEdit = null;
    let idx = 0;

    // make a new todo and add it to the todo array
    const addTodo = function (title, date, priority, category, description = ""){
        const todo = makeTodo(title, date, priority, category, description);
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

    // factory function to make todo objects
    const makeTodo = function (title, date, priority, category, description) {
        return {
            title: title,
            date: date,
            priority: priority, 
            category: category, 
            description: description,
            complete: false, 
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
        return editTodo(taskId, data.title, data.date, data.priority, data.category, data.description);
    };

    // getter for currTodoEdit
    const getCurrTodoEdit = function () {
        return currTodoEdit;
    }

    // setter for currTodoEdit
    const setCurrTodoEdit = function (todo) {
        currTodoEdit = todo;
    }

    return { addTodo, editTodo, handleFormSubmit, addTodoFromForm, editTodoFromForm, getCurrTodoEdit, setCurrTodoEdit }
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
/* harmony import */ var _modules_categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/categories */ "./src/modules/categories.js");
/* harmony import */ var _modules_domStuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/domStuff */ "./src/modules/domStuff.js");
/* harmony import */ var _modules_todoList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/todoList */ "./src/modules/todoList.js");
/* harmony import */ var _modules_init__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/init */ "./src/modules/init.js");







const categories = (0,_modules_categories__WEBPACK_IMPORTED_MODULE_1__.makeCategories)();
const todoList = (0,_modules_todoList__WEBPACK_IMPORTED_MODULE_3__.makeTodoList)(categories);
const domStuff = (0,_modules_domStuff__WEBPACK_IMPORTED_MODULE_2__.makeDomStuff)(categories, todoList);
const init = (0,_modules_init__WEBPACK_IMPORTED_MODULE_4__.makeInit)(categories, todoList, domStuff);

init.addTodo("welcome to tudu!", "mon 8/5", 2, "ungrouped", ":D");
init.addTodo("click me to see more info or edit!", "", 1, "ungrouped", "you can change any of these fields!");
init.addTodo("local storage coming soon.", "?", 0, "ungrouped", "for now... just never ever ever close your tab lol.");
init.addTodo("study for cs exam", "mon 8/5", 1, "school", "i hope i ace this one!");
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YscUlBQXFJLHlCQUF5QjtBQUM5SixzSEFBc0gsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxvQkFBb0I7QUFDdE07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGNBQWMsYUFBYSxjQUFjLGNBQWMsYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksY0FBYyxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFlBQVksYUFBYSxjQUFjLGFBQWEsWUFBWSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksY0FBYyxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxN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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQThELGNBQWM7QUFDNUU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUEsYUFBYTtBQUNiOzs7Ozs7Ozs7Ozs7OztBQ2hSQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOzs7Ozs7Ozs7Ozs7Ozs7QUNac0M7O0FBRXRDO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDZDQUFJO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscURBQXFELDZDQUFJO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOzs7Ozs7Ozs7Ozs7Ozs7QUNyRnlDOztBQUV6QztBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzREFBVztBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzREFBVztBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7OztBQ0FzQjs7QUFFZ0M7QUFDSjtBQUNBO0FBQ1I7O0FBRTFDLG1CQUFtQixtRUFBYztBQUNqQyxpQkFBaUIsK0RBQVk7QUFDN0IsaUJBQWlCLCtEQUFZO0FBQzdCLGFBQWEsdURBQVE7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBLG9GIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY2F0ZWdvcmllcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9kb21TdHVmZi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9mb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9pbml0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG9MaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5Oml0YWwsd2dodEAwLDQwMC4uOTAwOzEsNDAwLi45MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cblxuaDEsIGgyIHtcbiAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xufVxuXG5oMSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xufVxuXG5oMiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG5oMyB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbmg1IHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxucCB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG46cm9vdCB7XG4gICAgLS1iYWNrZ3JvdW5kLXByaW1hcnk6ICNGMEVCRTM7XG4gICAgLS1iYWNrZ3JvdW5kLXNlY29uZGFyeTogI0U0RENDRjtcblxuICAgIC0tYWNjZW50LXByaW1hcnk6ICM3RDlEOUM7XG4gICAgLS1hY2NlbnQtc2Vjb25kYXJ5OiAjNTc2RjcyO1xuICAgIFxuICAgIC0tYWNjZW50LXRlcnRpYXJ5OiAjNmE5MDhlO1xuXG4gICAgLS1oZWFkZXItaGVpZ2h0OiAxMDBweDtcbiAgICAtLWZvb3Rlci1oZWlnaHQ6IDQwcHg7XG5cbiAgICAtLXBhZGRpbmctc21hbGw6IDIwcHg7XG4gICAgLS1wYWRkaW5nLW1lZGl1bTogNDBweDtcblxuICAgIC0tcHJpb3JpdHktMDogcmdiKDU3LCAxNzUsIDU3KTtcbiAgICAtLXByaW9yaXR5LTE6IHJnYigyMzYsIDE4NiwgNjkpO1xuICAgIC0tcHJpb3JpdHktMjogcmdiKDI0MCwgMTA1LCAxMDUpO1xuXG4gICAgLS1jaGVja2VkLWl0ZW06ICNkZWU1ZTU7XG59XG5cbmJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaGVhZGVyIHtcbiAgICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1zZWNvbmRhcnkpO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCB2YXIoLS1wYWRkaW5nLXNtYWxsKTtcbn1cblxubWFpbiB7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpIC0gdmFyKC0tZm9vdGVyLWhlaWdodCkpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtcHJpbWFyeSk7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuI3NpZGViYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcblxuICAgIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctbWVkaXVtKTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBmbGV4OiAxO1xuICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI3NpZGViYXJDb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4jY2F0ZWdvcmllc0hlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDUwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4jYWRkQ2F0ZWdvcnlCdXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jYWRkQ2F0ZWdvcnlCdXR0b24gPiBpbWcge1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMjVweDtcbn1cblxuI25ld0NhdGVnb3J5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qIHBhZGRpbmc6ICAqL1xufVxuXG4jbmV3Q2F0ZWdvcnkgaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1zZWNvbmRhcnkpOyAqL1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtdGVydGlhcnkpO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIC8qIGhlaWdodDogMS4yNXJlbTsgKi9cbiAgICBwYWRkaW5nOiA4cHggOHB4O1xufVxuXG4jc3VibWl0Q2F0ZWdvcnlCdXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtcHJpbWFyeSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbiNzdWJtaXRDYXRlZ29yeUJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xufVxuXG4jY2FuY2VsQ2F0ZWdvcnlCdXR0b24ge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG5uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbm5hdiA+IGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogOHB4IDhweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5uYXYgPiBidXR0b246aG92ZXIge1xuICAgIC8qIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC10ZXJ0aWFyeSk7XG59XG5cbiNjdXJyZW50Q2F0ZWdvcnlDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jY3VycmVudENhdGVnb3J5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXg6IDM7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcblxuICAgIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctbWVkaXVtKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFkZGluZy1zbWFsbCk7XG59XG5cbiNjb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyMHB4O1xufVxuXG4jZGVsZXRlQ2F0ZWdvcnkge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jZGVsZXRlQ2F0ZWdvcnk6aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbiNncm91cEhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2dyb3VwSGVhZGVyIGJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNncm91cEhlYWRlciBpbWcge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbn1cblxuI3Rhc2tzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAjMDAwMDAwMjA7XG59XG5cbi5jaGVja2VkSXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hlY2tlZC1pdGVtKTtcbn1cblxuLnByaW9yaXR5QmFyIHtcbiAgICB3aWR0aDogOHB4O1xufVxuXG4uaXRlbUNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGZsZXg6IDE7XG59XG5cbi5uYW1lQ2hlY2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uYW1lQ2hlY2sgPiBoNSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2hlY2sge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNoZWNrZWRDaGVjayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xufVxuXG4uY2hlY2tlZE5hbWUge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4uZGF0ZURlbGV0ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRvZG9EZWxldGVCdXR0b24ge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udG9kb0RlbGV0ZUJ1dHRvbiB7XG4gICAgb3BhY2l0eTogMC41O1xufVxuXG4udG9kb0RlbGV0ZUJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnRvZG9EZWxldGVCdXR0b24gPiBpbWcge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbn1cblxuZm9vdGVyIHtcbiAgICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5JywgR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbn1cblxuI2RpYWxvZ0NvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4jZGlhbG9nT3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4jbmV3VGFza0RpYWxvZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1wcmltYXJ5KTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgZmxleDogMTtcbiAgICBtYXgtd2lkdGg6IDY1MHB4O1xuICAgIG1pbi13aWR0aDogMzgwcHg7XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNuZXdUYXNrRGlhbG9nIGZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbiNmb3JtVXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4jbGVmdEhhbGYsICNyaWdodEhhbGYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDVweDtcbiAgICBmbGV4OiAxO1xufVxuXG4jbGVmdEhhbGYgPiBkaXYsICNyaWdodEhhbGYgPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDVweDtcbn1cblxuI25ld1Rhc2tEaWFsb2cgaW5wdXQsICNuZXdUYXNrRGlhbG9nIHRleHRhcmVhLCAjbmV3VGFza0RpYWxvZyBzZWxlY3Qge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHJlc2l6ZTogbm9uZTtcbn1cblxuI25ld1Rhc2tEaWFsb2cgdGV4dGFyZWEge1xuICAgIGhlaWdodDogODBweDtcbn1cblxuI25ld1Rhc2tEaWFsb2cgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LXByaW1hcnkpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jbmV3VGFza0RpYWxvZyBidXR0b246aG92ZXIge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1zZWNvbmRhcnkpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHlFQUF5RTtBQUM3RTs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QiwrQkFBK0I7O0lBRS9CLHlCQUF5QjtJQUN6QiwyQkFBMkI7O0lBRTNCLDBCQUEwQjs7SUFFMUIsc0JBQXNCO0lBQ3RCLHFCQUFxQjs7SUFFckIscUJBQXFCO0lBQ3JCLHNCQUFzQjs7SUFFdEIsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQixnQ0FBZ0M7O0lBRWhDLHVCQUF1QjtBQUMzQjs7QUFF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O0FBQ1o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHVDQUF1QztJQUN2QyxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix1Q0FBdUM7SUFDdkMsWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXk6aXRhbCx3Z2h0QDAsNDAwLi45MDA7MSw0MDAuLjkwMCZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuaDEsIGgyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5JywgR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5oNSB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxucCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWJhY2tncm91bmQtcHJpbWFyeTogI0YwRUJFMztcXG4gICAgLS1iYWNrZ3JvdW5kLXNlY29uZGFyeTogI0U0RENDRjtcXG5cXG4gICAgLS1hY2NlbnQtcHJpbWFyeTogIzdEOUQ5QztcXG4gICAgLS1hY2NlbnQtc2Vjb25kYXJ5OiAjNTc2RjcyO1xcbiAgICBcXG4gICAgLS1hY2NlbnQtdGVydGlhcnk6ICM2YTkwOGU7XFxuXFxuICAgIC0taGVhZGVyLWhlaWdodDogMTAwcHg7XFxuICAgIC0tZm9vdGVyLWhlaWdodDogNDBweDtcXG5cXG4gICAgLS1wYWRkaW5nLXNtYWxsOiAyMHB4O1xcbiAgICAtLXBhZGRpbmctbWVkaXVtOiA0MHB4O1xcblxcbiAgICAtLXByaW9yaXR5LTA6IHJnYig1NywgMTc1LCA1Nyk7XFxuICAgIC0tcHJpb3JpdHktMTogcmdiKDIzNiwgMTg2LCA2OSk7XFxuICAgIC0tcHJpb3JpdHktMjogcmdiKDI0MCwgMTA1LCAxMDUpO1xcblxcbiAgICAtLWNoZWNrZWQtaXRlbTogI2RlZTVlNTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1zZWNvbmRhcnkpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIHZhcigtLXBhZGRpbmctc21hbGwpO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpIC0gdmFyKC0tZm9vdGVyLWhlaWdodCkpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXByaW1hcnkpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcXG5cXG4gICAgcGFkZGluZzogdmFyKC0tcGFkZGluZy1tZWRpdW0pO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgZmxleDogMTtcXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuI3NpZGViYXJDb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jY2F0ZWdvcmllc0hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbiNhZGRDYXRlZ29yeUJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkQ2F0ZWdvcnlCdXR0b24gPiBpbWcge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbn1cXG5cXG4jbmV3Q2F0ZWdvcnkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIHBhZGRpbmc6ICAqL1xcbn1cXG5cXG4jbmV3Q2F0ZWdvcnkgaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWNjZW50LXNlY29uZGFyeSk7ICovXFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXRlcnRpYXJ5KTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICAvKiBoZWlnaHQ6IDEuMjVyZW07ICovXFxuICAgIHBhZGRpbmc6IDhweCA4cHg7XFxufVxcblxcbiNzdWJtaXRDYXRlZ29yeUJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtcHJpbWFyeSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNzdWJtaXRDYXRlZ29yeUJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcXG59XFxuXFxuI2NhbmNlbENhdGVnb3J5QnV0dG9uIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5uYXYgPiBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogOHB4IDhweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxubmF2ID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgLyogdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC10ZXJ0aWFyeSk7XFxufVxcblxcbiNjdXJyZW50Q2F0ZWdvcnlDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4OiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2N1cnJlbnRDYXRlZ29yeSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZmxleDogMztcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG5cXG4gICAgcGFkZGluZzogdmFyKC0tcGFkZGluZy1tZWRpdW0pO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFkZGluZy1zbWFsbCk7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jZGVsZXRlQ2F0ZWdvcnkge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jZGVsZXRlQ2F0ZWdvcnk6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4jZ3JvdXBIZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNncm91cEhlYWRlciBidXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jZ3JvdXBIZWFkZXIgaW1nIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG59XFxuXFxuI3Rhc2tzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAjMDAwMDAwMjA7XFxufVxcblxcbi5jaGVja2VkSXRlbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoZWNrZWQtaXRlbSk7XFxufVxcblxcbi5wcmlvcml0eUJhciB7XFxuICAgIHdpZHRoOiA4cHg7XFxufVxcblxcbi5pdGVtQ29udGVudCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZmxleDogMTtcXG59XFxuXFxuLm5hbWVDaGVjayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hbWVDaGVjayA+IGg1IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hlY2sge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYWNjZW50LXByaW1hcnkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNoZWNrZWRDaGVjayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcXG59XFxuXFxuLmNoZWNrZWROYW1lIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5kYXRlRGVsZXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kb0RlbGV0ZUJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kb0RlbGV0ZUJ1dHRvbiB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnRvZG9EZWxldGVCdXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udG9kb0RlbGV0ZUJ1dHRvbiA+IGltZyB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxufVxcblxcbiNkaWFsb2dDb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2RpYWxvZ092ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbiNuZXdUYXNrRGlhbG9nIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1wcmltYXJ5KTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1heC13aWR0aDogNjUwcHg7XFxuICAgIG1pbi13aWR0aDogMzgwcHg7XFxuXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI25ld1Rhc2tEaWFsb2cgZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNmb3JtVXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jbGVmdEhhbGYsICNyaWdodEhhbGYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuI2xlZnRIYWxmID4gZGl2LCAjcmlnaHRIYWxmID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbiNuZXdUYXNrRGlhbG9nIGlucHV0LCAjbmV3VGFza0RpYWxvZyB0ZXh0YXJlYSwgI25ld1Rhc2tEaWFsb2cgc2VsZWN0IHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LXByaW1hcnkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuI25ld1Rhc2tEaWFsb2cgdGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxufVxcblxcbiNuZXdUYXNrRGlhbG9nIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNuZXdUYXNrRGlhbG9nIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1zZWNvbmRhcnkpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gY2F0ZWdvcmllcyBhcmUgbWFwcGVkIHRvIHRoZWlyIERPTSBcInRhc2tzXCIgZGl2IHdoaWNoIGNvbnRhaW5zIHRoZSB0YXNrIGVsZW1lbnRzIHdpdGhpbiB0aGVtXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ2F0ZWdvcmllcyAoKSB7XG4gICAgY29uc3QgbWFwID0gbmV3IE1hcCgpO1xuXG4gICAgY29uc3QgYWRkQ2F0ZWdvcnkgPSBmdW5jdGlvbiAobmV3Q2F0ZWdvcnlOYW1lKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5pZCA9ICd0YXNrcyc7XG4gICAgICAgIG1hcC5zZXQobmV3Q2F0ZWdvcnlOYW1lLCBkaXYpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiBtYXAuZ2V0KGtleSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGtleXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBtYXAua2V5cygpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRNYXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBtYXA7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlbGV0ZUNhdGVnb3J5ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBtYXAuZGVsZXRlKGtleSk7XG4gICAgfTtcblxuICAgIGFkZENhdGVnb3J5KFwidW5ncm91cGVkXCIpO1xuICAgIGFkZENhdGVnb3J5KFwic2Nob29sXCIpO1xuXG4gICAgcmV0dXJuIHsgYWRkQ2F0ZWdvcnksIGdldCwga2V5cywgZ2V0TWFwLCBkZWxldGVDYXRlZ29yeSB9O1xuICAgIFxufTsiLCJpbXBvcnQgVHJhc2ggZnJvbSAnLi4vYXNzZXRzL3RyYXNoLnN2Zyc7XG5cbi8vIGRvbVN0dWZmIGhhbmRsZXMgdGhlIG1ham9yaXR5IG9mIGRvbSBtYW5pcHVsYXRpb24gaW4gdGhpcyBhcHAuIFxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZURvbVN0dWZmIChjYXRlZ29yaWVzLCB0b2RvTGlzdCkge1xuICAgIGxldCBuZXdDYXRlZ29yeU9wZW4gPSBmYWxzZTtcbiAgICBsZXQgY3VycmVudEdyb3VwID0gXCJ1bmdyb3VwZWRcIjtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgICAvLyBnZXR0ZXIgZm9yIGN1cnJlbnRHcm91cFxuICAgIGNvbnN0IGdldEN1cnJlbnRHcm91cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRHcm91cDtcbiAgICB9O1xuXG4gICAgLy8gYWRkcyBhIHRvZG8gKHRhc2spIHRvIHRoZSBET01cbiAgICBjb25zdCBhZGRUb2RvID0gZnVuY3Rpb24gKHRvZG8pIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XG4gICAgICAgIGl0ZW0uaWQgPSBcIml0ZW1cIiArIHRvZG8uaWQ7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcmlvcml0eUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByaW9yaXR5QmFyLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eUJhclwiKTtcbiAgICAgICAgcHJpb3JpdHlCYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYHZhcigtLXByaW9yaXR5LSR7dG9kby5wcmlvcml0eX0pYDtcbiAgICBcbiAgICAgICAgY29uc3QgaXRlbUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpdGVtQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiaXRlbUNvbnRlbnRcIik7XG4gICAgXG4gICAgICAgIGNvbnN0IG5hbWVDaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG5hbWVDaGVjay5jbGFzc0xpc3QuYWRkKFwibmFtZUNoZWNrXCIpO1xuICAgIFxuICAgICAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoXCJjaGVja1wiKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGg1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xuICAgICAgICBoNS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgXG4gICAgICAgIG5hbWVDaGVjay5hcHBlbmQoY2hlY2ssIGg1KTtcblxuICAgICAgICBjb25zdCBkYXRlRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGF0ZURlbGV0ZS5jbGFzc0xpc3QuYWRkKFwiZGF0ZURlbGV0ZVwiKTtcbiAgICBcbiAgICAgICAgY29uc3QgZGF0ZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZGF0ZVAudGV4dENvbnRlbnQgPSB0b2RvLmRhdGU7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0b2RvRGVsZXRlQnV0dG9uXCIpO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBkZWxldGVJY29uLnNyYyA9IFRyYXNoO1xuICAgICAgICBkZWxldGVCdXR0b24uYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG5cbiAgICAgICAgZGF0ZURlbGV0ZS5hcHBlbmQoZGF0ZVAsIGRlbGV0ZUJ1dHRvbik7XG4gICAgXG4gICAgICAgIGl0ZW1Db250ZW50LmFwcGVuZChuYW1lQ2hlY2ssIGRhdGVEZWxldGUpO1xuICAgIFxuICAgICAgICBpdGVtLmFwcGVuZChwcmlvcml0eUJhciwgaXRlbUNvbnRlbnQpO1xuICAgICAgICBjYXRlZ29yaWVzLmdldCh0b2RvLmNhdGVnb3J5KS5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICBcbiAgICAgICAgLy8gY2xpY2tpbmcgdGhlIGNoZWNrbWFyayB0b2dnbGVzIHRoZSBhcHBlYXJhbmNlIG9mIHRoZSBpdGVtXG4gICAgICAgIGNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hlY2suY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2hlY2tlZENoZWNrXCIpKSB7XG4gICAgICAgICAgICAgICAgY2hlY2suY2xhc3NMaXN0LnJlbW92ZShcImNoZWNrZWRDaGVja1wiKTtcbiAgICAgICAgICAgICAgICBoNS5jbGFzc0xpc3QucmVtb3ZlKFwiY2hlY2tlZE5hbWVcIik7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiY2hlY2tlZEl0ZW1cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGVjay5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZENoZWNrXCIpO1xuICAgICAgICAgICAgICAgIGg1LmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkTmFtZVwiKTtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkSXRlbVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIC8vIGNsaWNraW5nIHRoZSBoZWFkZXIgb3BlbnMgdGhlIGZvcm0gd2l0aCBpbmZvIC8gZWRpdCBmb3IgdGhpcyB0b2RvXG4gICAgICAgIGg1LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB0b2RvTGlzdC5zZXRDdXJyVG9kb0VkaXQodG9kbyk7XG4gICAgICAgICAgICBzaG93RGlhbG9nKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNsaWNraW5nIHRoZSBkZWxldGUgYnV0dG9uIGRlbGV0ZXMgdGhlIHRvZG8gZnJvbSB0aGUgRE9NXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlVG9kbyh0b2RvKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIGNsaWNraW5nIHRoZSBhZGQgY2F0ZWdvcnkgYnV0dG9uIG9wZW5zIGEgZm9ybSBpbiB0aGUgbmF2XG4gICAgY29uc3QgaGFuZGxlQ2xpY2tBZGRDYXRlZ29yeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFuZXdDYXRlZ29yeU9wZW4pIHsgLy8gY2hlY2sgdGhlcmUgaXNuJ3QgYWxyZWFkeSBhbiBvcGVuIGZvcm1cbiAgICAgICAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XG4gICAgICAgICAgICBjb25zdCBuZXdDYXRlZ29yeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBuZXdDYXRlZ29yeURpdi5pZCA9ICduZXdDYXRlZ29yeSc7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgbmFtZS50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgbmFtZS5uYW1lID0gJ25hbWUnO1xuICAgICAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiT0tcIjtcbiAgICAgICAgICAgIGJ0bi5pZCA9IFwic3VibWl0Q2F0ZWdvcnlCdXR0b25cIjtcblxuICAgICAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgICAgICAgICAgY2FuY2VsQnRuLmlkID0gXCJjYW5jZWxDYXRlZ29yeUJ1dHRvblwiO1xuICAgICAgICAgICAgbmV3Q2F0ZWdvcnlEaXYuYXBwZW5kKG5hbWUsIGNhbmNlbEJ0biwgYnRuKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbmF2LmFwcGVuZENoaWxkKG5ld0NhdGVnb3J5RGl2KTtcbiAgICAgICAgICAgIG5hbWUuZm9jdXMoKTtcbiAgICAgICAgICAgIG5ld0NhdGVnb3J5T3BlbiA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBjYXRlZ29yeSB3aGVuIGZvcm0gc3VibWl0dGVkXG4gICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobmFtZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzLmFkZENhdGVnb3J5KG5hbWUudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBhZGRDYXRlZ29yeShuYW1lLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVGFiKG5hbWUudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBwcmVzc2luZyBlbnRlciB3aGlsZSBpbnB1dCBhbHNvIHN1Ym1pdHMgdGhlIGZvcm1cbiAgICAgICAgICAgIG5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT0gJ0VudGVyJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmFtZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllcy5hZGRDYXRlZ29yeShuYW1lLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZENhdGVnb3J5KG5hbWUudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoVGFiKG5hbWUudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIGNsaWNraW5nIHRoZSBjYW5jZWwgYnV0dG9uIGNsb3NlcyB0aGUgZm9ybSB3aXRob3V0IG1ha2luZyBhIG5ldyBjYXRlZ29yeVxuICAgICAgICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xvc2VBZGRDYXRlZ29yeSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhZGQgYSBuZXcgY2F0ZWdvcnkgdG8gdGhlIERPTSBhbmQgc3dpdGNoZXMgdG8gaXRcbiAgICBjb25zdCBhZGRDYXRlZ29yeSA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xuICAgICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBidG4udGV4dENvbnRlbnQgPSBjYXRlZ29yeTtcbiAgICAgICAgYnRuLmlkID0gXCJjYXRlZ29yeS1cIiArIGNhdGVnb3J5O1xuICAgIFxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaFRhYihjYXRlZ29yeSk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBuYXYuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICAgICAgY2xvc2VBZGRDYXRlZ29yeSgpO1xuICAgIH07XG5cbiAgICAvLyBjbG9zZXMgdGhlIGFkZCBjYXRlZ29yeSBmb3JtXG4gICAgY29uc3QgY2xvc2VBZGRDYXRlZ29yeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKG5ld0NhdGVnb3J5T3Blbikge1xuICAgICAgICAgICAgbmV3Q2F0ZWdvcnlPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBuZXdDYXRlZ29yeURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdDYXRlZ29yeScpO1xuICAgICAgICAgICAgbmV3Q2F0ZWdvcnlEaXYucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gZGVsZXRlcyBhIGNhdGVnb3J5IGZyb20gdGhlIERPTVxuICAgIGNvbnN0IGRlbGV0ZUNhdGVnb3J5ID0gZnVuY3Rpb24gKGNhdGVnb3J5KSB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXRlZ29yeS1cIiArIGNhdGVnb3J5KTtcbiAgICAgICAgY2F0ZWdvcnlCdXR0b24ucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgLy8gc3dpdGNoZXMgdGhlIGNvbnRlbnQgZGl2J3MgY29udGVudCB0byBhIGRpZmZlcmVudCBjYXRlZ29yeSdzIGNvbnRlbnRcbiAgICBjb25zdCBzd2l0Y2hUYWIgPSBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcbiAgICAgICAgY29udGVudC5xdWVyeVNlbGVjdG9yKFwiaDJcIikudGV4dENvbnRlbnQgPSBjYXRlZ29yeTtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzXCIpKTtcbiAgICAgICAgY29udGVudC5hcHBlbmQoY2F0ZWdvcmllcy5nZXQoY2F0ZWdvcnkpKTtcbiAgICAgICAgY3VycmVudEdyb3VwID0gY2F0ZWdvcnk7XG4gICAgfTtcblxuICAgIC8vIGVkaXRzIHRoZSBET00gb2YgYSBzcGVjaWZpYyB0b2RvXG4gICAgY29uc3QgZWRpdFRvZG8gPSBmdW5jdGlvbiAodG9kbywgb2xkQ2F0ZWdvcnkpIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXRlbVwiICsgdG9kby5pZCk7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHlCYXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHlCYXJcIik7XG4gICAgICAgIHByaW9yaXR5QmFyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGB2YXIoLS1wcmlvcml0eS0ke3RvZG8ucHJpb3JpdHl9KWA7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBoNSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcImg1XCIpO1xuICAgICAgICBoNS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG5cbiAgICAgICAgY29uc3QgZGF0ZVAgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCJwXCIpO1xuICAgICAgICBkYXRlUC50ZXh0Q29udGVudCA9IHRvZG8uZGF0ZTtcbiAgICBcbiAgICAgICAgLy8gaWYgdGhlIGNhdGVnb3J5IHdhcyBlZGl0ZWQsIG1vdmUgdGhlIHRvZG8gZnJvbSB0aGUgb2xkIGNhdGVnb3J5IHRvIHRoZSBuZXcgb25lXG4gICAgICAgIGlmICh0b2RvLmNhdGVnb3J5ICE9IG9sZENhdGVnb3J5KSB7XG4gICAgICAgICAgICBpdGVtLnJlbW92ZSgpO1xuICAgICAgICAgICAgY2F0ZWdvcmllcy5rZXlzKCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PSB0b2RvLmNhdGVnb3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMuZ2V0KGtleSkuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gZGVsZXRlIGEgdG9kbyBmcm9tIHRoZSBET01cbiAgICBjb25zdCBkZWxldGVUb2RvID0gZnVuY3Rpb24gKHRvZG8pIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXRlbVwiICsgdG9kby5pZCk7XG4gICAgICAgIGl0ZW0ucmVtb3ZlKCk7XG4gICAgfTtcblxuICAgIC8vIGxvYWQgdGhlIGRyb3Bkb3duIHVzZWQgdG8gc2VsZWN0IGNhdGVnb3J5IGluIHRoZSB0YXNrIGZvcm1cbiAgICBjb25zdCBsb2FkQWRkVGFza0NhdGVnb3JpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5RHJvcERvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICBjYXRlZ29yeURyb3BEb3duLmNsYXNzTGlzdC5hZGQoXCJhZGRUYXNrSW5wdXRcIik7XG4gICAgICAgIGNhdGVnb3J5RHJvcERvd24ubmFtZSA9IFwiY2F0ZWdvcnlcIjtcbiAgICAgICAgZm9yIChsZXQgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcy5rZXlzKCkpe1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGNhdGVnb3J5O1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY2F0ZWdvcnk7XG4gICAgICAgICAgICBpZiAoY2F0ZWdvcnkgPT0gY3VycmVudEdyb3VwKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGNhdGVnb3J5RHJvcERvd24uYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2F0ZWdvcnlEcm9wRG93bjtcbiAgICB9O1xuXG4gICAgY29uc3QgbG9hZFNlbGVjdGVkUHJpb3JpdHkgPSBmdW5jdGlvbiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlJbnB1dFwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICsrKSB7XG4gICAgICAgICAgICBpZiAocHJpb3JpdHlJbnB1dC5vcHRpb25zW2ldLnZhbHVlID09IHNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC5vcHRpb25zW2ldLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHNob3cgdGhlIHRhc2sgZm9ybSBkaWFsb2dcbiAgICBjb25zdCBzaG93RGlhbG9nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkaWFsb2dDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpYWxvZ0NvbnRhaW5lclwiKTtcbiAgICAgICAgZGlhbG9nQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZ1wiKTtcbiAgICAgICAgZGlhbG9nLnNob3coKTtcbiAgICBcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2F0ZWdvcnlGaWVsZFwiKTtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlEcm9wRG93biA9IGNhdGVnb3J5RmllbGQucXVlcnlTZWxlY3RvcihcInNlbGVjdFwiKTtcbiAgICAgICAgY2F0ZWdvcnlEcm9wRG93bi5yZW1vdmUoKTtcbiAgICBcbiAgICAgICAgY2F0ZWdvcnlGaWVsZC5hcHBlbmRDaGlsZChsb2FkQWRkVGFza0NhdGVnb3JpZXMoKSk7XG4gICAgICAgIGxvYWRTZWxlY3RlZFByaW9yaXR5KDApO1xuICAgIFxuICAgICAgICBpZiAodG9kb0xpc3QuZ2V0Q3VyclRvZG9FZGl0KCkgIT0gbnVsbCkge1xuICAgICAgICAgICAgbG9hZFNlbGVjdGVkUHJpb3JpdHkodG9kb0xpc3QuZ2V0Q3VyclRvZG9FZGl0KCkucHJpb3JpdHkpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlSW5wdXRcIikudmFsdWUgPSB0b2RvTGlzdC5nZXRDdXJyVG9kb0VkaXQoKS50aXRsZTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZUlucHV0XCIpLnZhbHVlID0gdG9kb0xpc3QuZ2V0Q3VyclRvZG9FZGl0KCkuZGF0ZTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25JbnB1dFwiKS52YWx1ZSA9IHRvZG9MaXN0LmdldEN1cnJUb2RvRWRpdCgpLmRlc2NyaXB0aW9uO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICAvLyBoaWRlIHRoZSB0YXNrIGZvcm0gZGlhbG9nXG4gICAgY29uc3QgaGlkZURpYWxvZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGlhbG9nQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaWFsb2dDb250YWluZXJcIik7XG4gICAgICAgIGRpYWxvZ0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2dcIik7XG4gICAgICAgIGNsZWFyRGlhbG9nKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza0Zvcm1cIikpO1xuICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICB9O1xuICAgIFxuICAgIC8vIGNsZWFyIHRoZSB0YXNrIGZvcm1cbiAgICBjb25zdCBjbGVhckRpYWxvZyA9IGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCB0ZXh0YXJlYVwiKS5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgZmllbGQudmFsdWUgPSBcIlwiO1xuICAgICAgICB9KTtcbiAgICAgICAgdG9kb0xpc3Quc2V0Q3VyclRvZG9FZGl0KG51bGwpO1xuICAgIH07XG5cbiAgICBjb250ZW50LmFwcGVuZChjYXRlZ29yaWVzLmdldChcInVuZ3JvdXBlZFwiKSk7XG5cbiAgICByZXR1cm4geyBnZXRDdXJyZW50R3JvdXAsIGFkZFRvZG8sIGhhbmRsZUNsaWNrQWRkQ2F0ZWdvcnksIGFkZENhdGVnb3J5LCBkZWxldGVDYXRlZ29yeSwgc3dpdGNoVGFiLCBlZGl0VG9kbywgc2hvd0RpYWxvZywgaGlkZURpYWxvZywgY2xlYXJEaWFsb2cgfTtcbn0iLCIvLyBmdW5jdGlvbiB0byBleHRyYWN0IGRhdGEgZnJvbSB0aGUgdGFzayBkaWFsb2cgZm9ybVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9ybURhdGEgKCkge1xuICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrRm9ybVwiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gYWRkVGFza0Zvcm0uZWxlbWVudHNbXCJ0aXRsZVwiXS52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gYWRkVGFza0Zvcm0uZWxlbWVudHNbXCJkYXRlXCJdLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gYWRkVGFza0Zvcm0uZWxlbWVudHNbXCJwcmlvcml0eVwiXS52YWx1ZTtcbiAgICBjb25zdCBjYXRlZ29yeSA9IGFkZFRhc2tGb3JtLmVsZW1lbnRzW1wiY2F0ZWdvcnlcIl0udmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBhZGRUYXNrRm9ybS5lbGVtZW50c1tcImRlc2NyaXB0aW9uXCJdLnZhbHVlO1xuXG4gICAgcmV0dXJuIHsgdGl0bGUsIGRhdGUsIHByaW9yaXR5LCBjYXRlZ29yeSwgZGVzY3JpcHRpb24gfTtcbn0iLCJpbXBvcnQgUGx1cyBmcm9tICcuLi9hc3NldHMvcGx1cy5zdmcnO1xuXG4vLyBpbml0aWFsaXphdGlvbiBvZiB2YXJpb3VzIGRvbSBlbGVtZW50c1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VJbml0IChjYXRlZ29yaWVzLCB0b2RvTGlzdCwgZG9tU3R1ZmYpIHtcblxuICAgIC8vIHRoaXMgcGx1cyBzaWduIGljb24gc2hvd3MgdGhlIGFkZCB0YXNrIGRpYWxvZyBmb3JtIHdoZW4gY2xpY2tlZC5cbiAgICBjb25zdCBsb2FkQWRkVGFzayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza1wiKTtcbiAgICAgICAgYWRkVGFzay5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpLnNyYyA9IFBsdXM7XG4gICAgICAgIGNvbnN0IGRpYWxvZ092ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpYWxvZ092ZXJsYXlcIik7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tCdXR0b25cIilcbiAgICBcbiAgICAgICAgLy8gY2xpY2tpbmcgb3V0c2lkZSBvZiB0aGUgZGlhbG9nIGNsb3NlcyBpdC5cbiAgICAgICAgZGlhbG9nT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZG9tU3R1ZmYuaGlkZURpYWxvZygpO1xuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgLy8gY2xpY2tpbmcgdGhlIGFkZCB0YXNrIGljb24gb3BlbnMgdGhlIGFkZCB0YXNrIGRpYWxvZyBmb3JtLlxuICAgICAgICBhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb21TdHVmZi5zaG93RGlhbG9nKCk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICAvLyBjbGlja2luZyB0aGUgc3VibWl0IGJ1dHRvbiBvZiB0aGUgZm9ybSBlaXRoZXIgYWRkcyBhIG5ldyB0YXNrIG9yIGVkaXRzIGFuIGV4aXN0aW5nIG9uZS5cbiAgICAgICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGN0ZGUgPSB0b2RvTGlzdC5nZXRDdXJyVG9kb0VkaXQoKTtcbiAgICAgICAgICAgIGlmIChjdGRlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkQ2F0ZWdvcnkgPSBjdGRlLmNhdGVnb3J5O1xuICAgICAgICAgICAgICAgIHRvZG9MaXN0LmhhbmRsZUZvcm1TdWJtaXQoKTtcbiAgICAgICAgICAgICAgICBkb21TdHVmZi5lZGl0VG9kbyhjdGRlLCBvbGRDYXRlZ29yeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb21TdHVmZi5hZGRUb2RvKHRvZG9MaXN0LmhhbmRsZUZvcm1TdWJtaXQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb21TdHVmZi5oaWRlRGlhbG9nKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBsb2FkIHRoZSBkZWZhdWx0IGNhdGVnb3JpZXMgb2YgdGhlIGFwcC5cbiAgICBjb25zdCBsb2FkTmF2ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBkb21TdHVmZi5hZGRDYXRlZ29yeShcInVuZ3JvdXBlZFwiKTtcbiAgICAgICAgZG9tU3R1ZmYuYWRkQ2F0ZWdvcnkoXCJzY2hvb2xcIik7XG4gICAgfTtcblxuICAgIC8vIHRoZSBwbHVzIHNpZ24gaW4gdGhlIHNpZGUgYmFyIG1ha2VzIGEgZm9ybSB0byBjcmVhdGUgYSBuZXcgY2F0ZWdvcnkuIFxuICAgIGNvbnN0IGxvYWRBZGRDYXRlZ29yeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgYWRkQ2F0ZWdvcnlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZENhdGVnb3J5QnV0dG9uXCIpO1xuICAgICAgICBhZGRDYXRlZ29yeUJ1dHRvbi5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpLnNyYyA9IFBsdXM7XG4gICAgXG4gICAgICAgIGFkZENhdGVnb3J5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb21TdHVmZi5oYW5kbGVDbGlja0FkZENhdGVnb3J5KCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBjbGlja2luZyBcImRlbGV0ZSB0aGlzIGNhdGVnb3J5XCIgZGVsZXRlcyB0aGUgY2F0ZWdvcnkgdGhlIHZpZXdlciBpcyB1c2luZ1xuICAgIC8vIHVubGVzcyBpdCBpcyB0aGUgXCJ1bmdyb3VwZWRcIiBjYXRlZ29yeS5cbiAgICBjb25zdCBsb2FkRGVsZXRlQ2F0ZWdvcnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUNhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWxldGVDYXRlZ29yeVwiKTtcblxuICAgICAgICBkZWxldGVDYXRlZ29yeS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IGRvbVN0dWZmLmdldEN1cnJlbnRHcm91cCgpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQgPT0gXCJ1bmdyb3VwZWRcIikge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwieW91IGNhbid0IGRlbGV0ZSB0aGUgZGVmYXVsdCBjYXRlZ29yeSFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb21TdHVmZi5zd2l0Y2hUYWIoXCJ1bmdyb3VwZWRcIik7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllcy5kZWxldGVDYXRlZ29yeShjdXJyZW50KTtcbiAgICAgICAgICAgICAgICBkb21TdHVmZi5kZWxldGVDYXRlZ29yeShjdXJyZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gYWRkIGEgdG9kbyB0byB0aGUgdG9kbyBkYXRhIHN0cnVjdHVyZSBhcyB3ZWxsIGFzIGFkZCBpdCB0byB0aGUgZG9tXG4gICAgLy8gdGhpcyBmdW5jdGlvbiBpcyBvbmx5IHVzZWQgdG8gYWRkIHRoZSBkZWZhdWx0IHRvZG9zLlxuICAgIGNvbnN0IGFkZFRvZG8gPSBmdW5jdGlvbiAodGl0bGUsIGRhdGUsIHByaW9yaXR5LCBjYXRlZ29yeSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgY29uc3QgdG9kbyA9IHRvZG9MaXN0LmFkZFRvZG8odGl0bGUsIGRhdGUsIHByaW9yaXR5LCBjYXRlZ29yeSwgZGVzY3JpcHRpb24pO1xuICAgICAgICBkb21TdHVmZi5hZGRUb2RvKHRvZG8pO1xuICAgIH07XG5cbiAgICBsb2FkQWRkVGFzaygpO1xuICAgIGxvYWROYXYoKTtcbiAgICBsb2FkQWRkQ2F0ZWdvcnkoKTtcbiAgICBsb2FkRGVsZXRlQ2F0ZWdvcnkoKTtcblxuICAgIHJldHVybiB7IGFkZFRvZG8gfVxufSIsImltcG9ydCB7IGdldEZvcm1EYXRhIH0gZnJvbSBcIi4vZm9ybURhdGFcIjtcblxuLy8gdGhlIHRvZG8gbGlzdCBoYW5kbGVzIGFsbCB0aGluZ3MgdG8gZG8gd2l0aCB0aGUgYWN0dWFsIGRhdGFcbmV4cG9ydCBmdW5jdGlvbiBtYWtlVG9kb0xpc3QgKGNhdGVnb3JpZXMpIHtcbiAgICBjb25zdCB0b2RvcyA9IFtdO1xuICAgIGxldCBjdXJyVG9kb0VkaXQgPSBudWxsO1xuICAgIGxldCBpZHggPSAwO1xuXG4gICAgLy8gbWFrZSBhIG5ldyB0b2RvIGFuZCBhZGQgaXQgdG8gdGhlIHRvZG8gYXJyYXlcbiAgICBjb25zdCBhZGRUb2RvID0gZnVuY3Rpb24gKHRpdGxlLCBkYXRlLCBwcmlvcml0eSwgY2F0ZWdvcnksIGRlc2NyaXB0aW9uID0gXCJcIil7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBtYWtlVG9kbyh0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGNhdGVnb3J5LCBkZXNjcmlwdGlvbik7XG4gICAgICAgIHRvZG9zLnB1c2godG9kbyk7XG4gICAgICAgIHJldHVybiB0b2RvO1xuICAgIH07XG4gICAgXG4gICAgLy8gZmluZCBhIHRvZG8gaW4gdGhlIHRvZG8gYXJyYXkgdXNpbmcgYSBnaXZlbiBpZFxuICAgIC8vIGFuZCBlZGl0IHRoZSBhdHRyaWJ1dGVzIG9mIHRoYXQgdG9kb1xuICAgIGNvbnN0IGVkaXRUb2RvID0gZnVuY3Rpb24gKGlkLCB0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGNhdGVnb3J5LCBkZXNjcmlwdGlvbiA9IFwiXCIpIHtcbiAgICAgICAgdG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICAgICAgaWYgKHRvZG8uaWQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICB0b2RvLnRpdGxlID0gdGl0bGU7XG4gICAgICAgICAgICAgICAgdG9kby5kYXRlID0gZGF0ZTtcbiAgICAgICAgICAgICAgICB0b2RvLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgICAgICAgICAgdG9kby5jYXRlZ29yeSA9IGNhdGVnb3J5O1xuICAgICAgICAgICAgICAgIHRvZG8uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9kbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIGZhY3RvcnkgZnVuY3Rpb24gdG8gbWFrZSB0b2RvIG9iamVjdHNcbiAgICBjb25zdCBtYWtlVG9kbyA9IGZ1bmN0aW9uICh0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGNhdGVnb3J5LCBkZXNjcmlwdGlvbikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgZGF0ZTogZGF0ZSxcbiAgICAgICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSwgXG4gICAgICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnksIFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLCBcbiAgICAgICAgICAgIGlkOiBpZHgrK1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvLyByZXR1cm5zIG51bGwgaWYgYSB0b2RvIHdhcyBlZGl0ZWRcbiAgICAvLyByZXR1cm5zIHRoZSBuZXcgdG9kbyBpcyBhIHRvZG8gd2FzIGNyZWF0ZWRcbiAgICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY3VyclRvZG9FZGl0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGVkaXRUb2RvRnJvbUZvcm0oY3VyclRvZG9FZGl0LmlkKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGFkZFRvZG9Gcm9tRm9ybSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZ2V0IGZvcm0gZGF0YSBhbmQgYWRkIGEgbmV3IHRvZG8gdG8gdGhlIHRvZG8gYXJyYXlcbiAgICAvLyByZXR1cm5zIHRoZSBuZXcgdG9kb1xuICAgIGNvbnN0IGFkZFRvZG9Gcm9tRm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGdldEZvcm1EYXRhKCk7XG4gICAgICAgIHJldHVybiBhZGRUb2RvKGRhdGEudGl0bGUsIGRhdGEuZGF0ZSwgZGF0YS5wcmlvcml0eSwgZGF0YS5jYXRlZ29yeSwgZGF0YS5kZXNjcmlwdGlvbik7XG4gICAgfTtcblxuICAgIC8vIGdldCBmb3JtIGRhdGEgYW5kIGVkaXQgdGhlIGV4aXN0aW5nIHRvZG9cbiAgICAvLyByZXR1cm5zIHRoZSBlZGl0ZWQgdG9kb1xuICAgIGNvbnN0IGVkaXRUb2RvRnJvbUZvcm0gPSBmdW5jdGlvbiAodGFza0lkKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBnZXRGb3JtRGF0YSgpO1xuICAgICAgICByZXR1cm4gZWRpdFRvZG8odGFza0lkLCBkYXRhLnRpdGxlLCBkYXRhLmRhdGUsIGRhdGEucHJpb3JpdHksIGRhdGEuY2F0ZWdvcnksIGRhdGEuZGVzY3JpcHRpb24pO1xuICAgIH07XG5cbiAgICAvLyBnZXR0ZXIgZm9yIGN1cnJUb2RvRWRpdFxuICAgIGNvbnN0IGdldEN1cnJUb2RvRWRpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJUb2RvRWRpdDtcbiAgICB9XG5cbiAgICAvLyBzZXR0ZXIgZm9yIGN1cnJUb2RvRWRpdFxuICAgIGNvbnN0IHNldEN1cnJUb2RvRWRpdCA9IGZ1bmN0aW9uICh0b2RvKSB7XG4gICAgICAgIGN1cnJUb2RvRWRpdCA9IHRvZG87XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYWRkVG9kbywgZWRpdFRvZG8sIGhhbmRsZUZvcm1TdWJtaXQsIGFkZFRvZG9Gcm9tRm9ybSwgZWRpdFRvZG9Gcm9tRm9ybSwgZ2V0Q3VyclRvZG9FZGl0LCBzZXRDdXJyVG9kb0VkaXQgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmltcG9ydCB7IG1ha2VDYXRlZ29yaWVzIH0gZnJvbSAnLi9tb2R1bGVzL2NhdGVnb3JpZXMnO1xuaW1wb3J0IHsgbWFrZURvbVN0dWZmIH0gZnJvbSAnLi9tb2R1bGVzL2RvbVN0dWZmJztcbmltcG9ydCB7IG1ha2VUb2RvTGlzdCB9IGZyb20gJy4vbW9kdWxlcy90b2RvTGlzdCc7XG5pbXBvcnQgeyBtYWtlSW5pdCB9IGZyb20gJy4vbW9kdWxlcy9pbml0JztcblxuY29uc3QgY2F0ZWdvcmllcyA9IG1ha2VDYXRlZ29yaWVzKCk7XG5jb25zdCB0b2RvTGlzdCA9IG1ha2VUb2RvTGlzdChjYXRlZ29yaWVzKTtcbmNvbnN0IGRvbVN0dWZmID0gbWFrZURvbVN0dWZmKGNhdGVnb3JpZXMsIHRvZG9MaXN0KTtcbmNvbnN0IGluaXQgPSBtYWtlSW5pdChjYXRlZ29yaWVzLCB0b2RvTGlzdCwgZG9tU3R1ZmYpO1xuXG5pbml0LmFkZFRvZG8oXCJ3ZWxjb21lIHRvIHR1ZHUhXCIsIFwibW9uIDgvNVwiLCAyLCBcInVuZ3JvdXBlZFwiLCBcIjpEXCIpO1xuaW5pdC5hZGRUb2RvKFwiY2xpY2sgbWUgdG8gc2VlIG1vcmUgaW5mbyBvciBlZGl0IVwiLCBcIlwiLCAxLCBcInVuZ3JvdXBlZFwiLCBcInlvdSBjYW4gY2hhbmdlIGFueSBvZiB0aGVzZSBmaWVsZHMhXCIpO1xuaW5pdC5hZGRUb2RvKFwibG9jYWwgc3RvcmFnZSBjb21pbmcgc29vbi5cIiwgXCI/XCIsIDAsIFwidW5ncm91cGVkXCIsIFwiZm9yIG5vdy4uLiBqdXN0IG5ldmVyIGV2ZXIgZXZlciBjbG9zZSB5b3VyIHRhYiBsb2wuXCIpO1xuaW5pdC5hZGRUb2RvKFwic3R1ZHkgZm9yIGNzIGV4YW1cIiwgXCJtb24gOC81XCIsIDEsIFwic2Nob29sXCIsIFwiaSBob3BlIGkgYWNlIHRoaXMgb25lIVwiKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=