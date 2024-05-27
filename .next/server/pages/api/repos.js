"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/repos";
exports.ids = ["pages/api/repos"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "(api)/./lib/fetchRepos.js":
/*!***************************!*\
  !*** ./lib/fetchRepos.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchRepos\": () => (/* binding */ fetchRepos)\n/* harmony export */ });\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\nasync function fetchRepos() {\n    const response = await fetch(`http://localhost:4000`, {\n        cache: \"no-store\"\n    });\n    // console.log(NEXT_PUBLIC_BACKEND_URL)\n    const data = await response.json();\n    return data;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZmV0Y2hSZXBvcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUFBLG9EQUF3QjtBQUdqQixlQUFlRSxVQUFVLEdBQUcsQ0FBQztJQUNoQyxLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNDLEtBQUssRUFBRSxxQkFBcUIsR0FBRSxDQUFDQztRQUFBQSxLQUFLLEVBQUMsQ0FBVTtJQUFBLENBQUM7SUFDdkUsRUFBdUM7SUFDdkMsS0FBSyxDQUFDQyxJQUFJLEdBQUcsS0FBSyxDQUFDSCxRQUFRLENBQUNJLElBQUk7SUFDaEMsTUFBTSxDQUFDRCxJQUFJO0FBQ2IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0Ly4vbGliL2ZldGNoUmVwb3MuanM/ZDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoKTtcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hSZXBvcygpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDBgLHtjYWNoZTpcIm5vLXN0b3JlXCJ9KTtcbiAgICAvLyBjb25zb2xlLmxvZyhORVhUX1BVQkxJQ19CQUNLRU5EX1VSTClcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG4gICJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiY29uZmlnIiwiZmV0Y2hSZXBvcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJjYWNoZSIsImRhdGEiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/fetchRepos.js\n");

/***/ }),

/***/ "(api)/./pages/api/repos.jsx":
/*!*****************************!*\
  !*** ./pages/api/repos.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_fetchRepos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/fetchRepos */ \"(api)/./lib/fetchRepos.js\");\n\nasync function handler(req, res) {\n    try {\n        const data = await (0,_lib_fetchRepos__WEBPACK_IMPORTED_MODULE_0__.fetchRepos)();\n        res.status(200).json(data);\n    } catch (error) {\n        console.error('Error fetching data:', error);\n        res.status(500).json({\n            error: 'Internal Server Error'\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVwb3MuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWlEO0FBRWxDLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUMvQyxHQUFHLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQ0MsSUFBSSxHQUFHLEtBQUssQ0FBQ0osMkRBQVU7UUFDN0JHLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDRixJQUFJO0lBQzNCLENBQUMsQ0FBQyxLQUFLLEVBQUVHLEtBQUssRUFBRSxDQUFDO1FBQ2ZDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLENBQXNCLHVCQUFFQSxLQUFLO1FBQzNDSixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNDLEtBQUssRUFBRSxDQUF1QjtRQUFDLENBQUM7SUFDekQsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC8uL3BhZ2VzL2FwaS9yZXBvcy5qc3g/MWEyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmZXRjaFJlcG9zIH0gZnJvbSAnLi4vLi4vbGliL2ZldGNoUmVwb3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hSZXBvcygpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0ludGVybmFsIFNlcnZlciBFcnJvcicgfSk7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbImZldGNoUmVwb3MiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZGF0YSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/repos.jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/repos.jsx"));
module.exports = __webpack_exports__;

})();