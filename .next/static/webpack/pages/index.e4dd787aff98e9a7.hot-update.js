"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/products/ProductSwiper.tsx":
/*!***********************************************!*\
  !*** ./components/products/ProductSwiper.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductSwiper; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.module.scss */ \"./components/products/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/swiper-react.mjs\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/navigation */ \"./node_modules/swiper/modules/navigation.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/modules */ \"./node_modules/swiper/modules/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n// Import Swiper React components\n\n// Import Swiper styles\n\n\n\n\n\nfunction ProductSwiper(param) {\n    let { images } = param;\n    _s();\n    //if need can add a type annotation to variables to tell compiler that it\n    const swiperRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        if (swiperRef.current) {\n            swiperRef.current.swiper.autoplay.stop();\n        }\n    }, [\n        swiperRef\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().swiper),\n        onMouseEnter: ()=>{\n            swiperRef.current.swiper.autoplay.start();\n        },\n        onMouseLeave: ()=>{\n            swiperRef.current.swiper.autoplay.stop();\n            swiperRef.current.swiper.slideTo(0);\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {\n            ref: swiperRef,\n            centeredSlides: true,\n            autoplay: {\n                delay: 500,\n                stopOnLastSlide: false\n            },\n            modules: [\n                swiper_modules__WEBPACK_IMPORTED_MODULE_6__.Autoplay\n            ],\n            speed: 500,\n            children: images.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: image.url,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/thaipl1607/Desktop/Fsoft_PRD/Shoppay_test/Fsoft_projectMock/components/products/ProductSwiper.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, this)\n                }, index, false, {\n                    fileName: \"/Users/thaipl1607/Desktop/Fsoft_PRD/Shoppay_test/Fsoft_projectMock/components/products/ProductSwiper.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/thaipl1607/Desktop/Fsoft_PRD/Shoppay_test/Fsoft_projectMock/components/products/ProductSwiper.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/thaipl1607/Desktop/Fsoft_PRD/Shoppay_test/Fsoft_projectMock/components/products/ProductSwiper.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductSwiper, \"YOJOl2/RJfdqtdOv3YOKC7TBHXc=\");\n_c = ProductSwiper;\nvar _c;\n$RefreshReg$(_c, \"ProductSwiper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2R1Y3RzL1Byb2R1Y3RTd2lwZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQzFDLGlDQUFpQztBQUNrQjtBQUVuRCx1QkFBdUI7QUFDSDtBQUNXO0FBQ0E7QUFDVztBQUNBO0FBQzNCLFNBQVNNLGNBQWMsS0FBVTtRQUFWLEVBQUVDLE1BQU0sRUFBRSxHQUFWOztJQUNwQyx5RUFBeUU7SUFDekUsTUFBTUMsWUFBWUosNkNBQU1BLENBQUM7SUFDekJELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSUssVUFBVUMsT0FBTyxFQUFFO1lBQ3JCRCxVQUFVQyxPQUFPLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJO1FBQ3hDO0lBQ0YsR0FBRztRQUFDSjtLQUFVO0lBQ2QscUJBQ0UsOERBQUNLO1FBQ0NDLFdBQVdkLG1FQUFhO1FBQ3hCZSxjQUFjO1lBQ1pQLFVBQVVDLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDQyxRQUFRLENBQUNLLEtBQUs7UUFDekM7UUFDQUMsY0FBYztZQUNaVCxVQUFVQyxPQUFPLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJO1lBQ3RDSixVQUFVQyxPQUFPLENBQUNDLE1BQU0sQ0FBQ1EsT0FBTyxDQUFDO1FBQ25DO2tCQUVBLDRFQUFDakIsZ0RBQU1BO1lBQ0xrQixLQUFLWDtZQUNMWSxnQkFBZ0I7WUFDaEJULFVBQVU7Z0JBQUVVLE9BQU87Z0JBQUtDLGlCQUFpQjtZQUFNO1lBQy9DQyxTQUFTO2dCQUFDbEIsb0RBQVFBO2FBQUM7WUFDbkJtQixPQUFPO3NCQUVOakIsT0FBT2tCLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxzQkFDbEIsOERBQUN6QixxREFBV0E7OEJBQ1YsNEVBQUMwQjt3QkFBSUMsS0FBS0gsTUFBTUksR0FBRzt3QkFBRUMsS0FBSTs7Ozs7O21CQURUSjs7Ozs7Ozs7Ozs7Ozs7O0FBTzVCO0dBbEN3QnJCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvZHVjdHMvUHJvZHVjdFN3aXBlci50c3g/MTI0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xuLy8gSW1wb3J0IFN3aXBlciBSZWFjdCBjb21wb25lbnRzXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xuXG4vLyBJbXBvcnQgU3dpcGVyIHN0eWxlc1xuaW1wb3J0IFwic3dpcGVyL2Nzc1wiO1xuaW1wb3J0IFwic3dpcGVyL2Nzcy9wYWdpbmF0aW9uXCI7XG5pbXBvcnQgXCJzd2lwZXIvY3NzL25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBdXRvcGxheSB9IGZyb20gXCJzd2lwZXIvbW9kdWxlc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdFN3aXBlcih7IGltYWdlcyB9KSB7XG4gIC8vaWYgbmVlZCBjYW4gYWRkIGEgdHlwZSBhbm5vdGF0aW9uIHRvIHZhcmlhYmxlcyB0byB0ZWxsIGNvbXBpbGVyIHRoYXQgaXRcbiAgY29uc3Qgc3dpcGVyUmVmID0gdXNlUmVmKG51bGwpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzd2lwZXJSZWYuY3VycmVudCkge1xuICAgICAgc3dpcGVyUmVmLmN1cnJlbnQuc3dpcGVyLmF1dG9wbGF5LnN0b3AoKTtcbiAgICB9XG4gIH0sIFtzd2lwZXJSZWZdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5zd2lwZXJ9XG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHtcbiAgICAgICAgc3dpcGVyUmVmLmN1cnJlbnQuc3dpcGVyLmF1dG9wbGF5LnN0YXJ0KCk7XG4gICAgICB9fVxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XG4gICAgICAgIHN3aXBlclJlZi5jdXJyZW50LnN3aXBlci5hdXRvcGxheS5zdG9wKCk7XG4gICAgICAgIHN3aXBlclJlZi5jdXJyZW50LnN3aXBlci5zbGlkZVRvKDApO1xuICAgICAgfX1cbiAgICA+XG4gICAgICA8U3dpcGVyXG4gICAgICAgIHJlZj17c3dpcGVyUmVmfVxuICAgICAgICBjZW50ZXJlZFNsaWRlcz17dHJ1ZX1cbiAgICAgICAgYXV0b3BsYXk9e3sgZGVsYXk6IDUwMCwgc3RvcE9uTGFzdFNsaWRlOiBmYWxzZSB9fVxuICAgICAgICBtb2R1bGVzPXtbQXV0b3BsYXldfVxuICAgICAgICBzcGVlZD17NTAwfVxuICAgICAgPlxuICAgICAgICB7aW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlLnVybH0gYWx0PVwiXCIgLz5cbiAgICAgICAgICA8L1N3aXBlclNsaWRlPlxuICAgICAgICApKX1cbiAgICAgIDwvU3dpcGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQXV0b3BsYXkiLCJQcm9kdWN0U3dpcGVyIiwiaW1hZ2VzIiwic3dpcGVyUmVmIiwiY3VycmVudCIsInN3aXBlciIsImF1dG9wbGF5Iiwic3RvcCIsImRpdiIsImNsYXNzTmFtZSIsIm9uTW91c2VFbnRlciIsInN0YXJ0Iiwib25Nb3VzZUxlYXZlIiwic2xpZGVUbyIsInJlZiIsImNlbnRlcmVkU2xpZGVzIiwiZGVsYXkiLCJzdG9wT25MYXN0U2xpZGUiLCJtb2R1bGVzIiwic3BlZWQiLCJtYXAiLCJpbWFnZSIsImluZGV4IiwiaW1nIiwic3JjIiwidXJsIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/products/ProductSwiper.tsx\n"));

/***/ })

});