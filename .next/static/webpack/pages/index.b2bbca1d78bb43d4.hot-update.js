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

/***/ "./components/products/index.tsx":
/*!***************************************!*\
  !*** ./components/products/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ \"./components/products/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction ProductCard(param) {\n    let { product } = param;\n    var _product_subProducts_active, _product_subProducts_active1;\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((_product_subProducts_active = product.subProducts[active]) === null || _product_subProducts_active === void 0 ? void 0 : _product_subProducts_active.images);\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((_product_subProducts_active1 = product.subProducts[active]) === null || _product_subProducts_active1 === void 0 ? void 0 : _product_subProducts_active1.sizes.map((s)=>{\n        return s.price;\n    }).sort((a, b)=>{\n        return a - b;\n    }));\n    const [styless, setStyless] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(product.subProducts.map((p)=>{\n        return p.color;\n    }));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _product_subProducts_active;\n        setImages(product.subProducts[active].images);\n        setPrices((_product_subProducts_active = product.subProducts[active]) === null || _product_subProducts_active === void 0 ? void 0 : _product_subProducts_active.sizes.map((s)=>{\n            return s.price;\n        }).sort((a, b)=>{\n            return a - b;\n        }));\n    }, [\n        active,\n        product\n    ]);\n    //   console.log(images, styless, prices);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().product),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().product__container),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"\",\n                target: \"_blank\"\n            }, void 0, false, {\n                fileName: \"/Users/thaipl1607/Desktop/Fsoft_PRD/Shoppay_test/Fsoft_projectMock/components/products/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/thaipl1607/Desktop/Fsoft_PRD/Shoppay_test/Fsoft_projectMock/components/products/index.tsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/thaipl1607/Desktop/Fsoft_PRD/Shoppay_test/Fsoft_projectMock/components/products/index.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductCard, \"/dWZu8QuLHUJXK5muzrT2/fdcxM=\");\n_c = ProductCard;\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2R1Y3RzL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDVDtBQUMzQixTQUFTSSxZQUFZLEtBQVc7UUFBWCxFQUFFQyxPQUFPLEVBQUUsR0FBWDtRQUVHQSw2QkFFbkNBOztJQUhGLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNNLFFBQVFDLFVBQVUsR0FBR1AsK0NBQVFBLEVBQUNHLDhCQUFBQSxRQUFRSyxXQUFXLENBQUNKLE9BQU8sY0FBM0JELGtEQUFBQSw0QkFBNkJHLE1BQU07SUFDeEUsTUFBTSxDQUFDRyxRQUFRQyxVQUFVLEdBQUdWLCtDQUFRQSxFQUNsQ0csK0JBQUFBLFFBQVFLLFdBQVcsQ0FBQ0osT0FBTyxjQUEzQkQsbURBQUFBLDZCQUE2QlEsS0FBSyxDQUMvQkMsR0FBRyxDQUFDLENBQUNDO1FBQ0osT0FBT0EsRUFBRUMsS0FBSztJQUNoQixHQUNDQyxJQUFJLENBQUMsQ0FBQ0MsR0FBR0M7UUFDUixPQUFPRCxJQUFJQztJQUNiO0lBRUosTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUduQiwrQ0FBUUEsQ0FDcENHLFFBQVFLLFdBQVcsQ0FBQ0ksR0FBRyxDQUFDLENBQUNRO1FBQ3ZCLE9BQU9BLEVBQUVDLEtBQUs7SUFDaEI7SUFHRnRCLGdEQUFTQSxDQUFDO1lBR05JO1FBRkZJLFVBQVVKLFFBQVFLLFdBQVcsQ0FBQ0osT0FBTyxDQUFDRSxNQUFNO1FBQzVDSSxXQUNFUCw4QkFBQUEsUUFBUUssV0FBVyxDQUFDSixPQUFPLGNBQTNCRCxrREFBQUEsNEJBQTZCUSxLQUFLLENBQy9CQyxHQUFHLENBQUMsQ0FBQ0M7WUFDSixPQUFPQSxFQUFFQyxLQUFLO1FBQ2hCLEdBQ0NDLElBQUksQ0FBQyxDQUFDQyxHQUFHQztZQUNSLE9BQU9ELElBQUlDO1FBQ2I7SUFFTixHQUFHO1FBQUNiO1FBQVFEO0tBQVE7SUFDcEIsMENBQTBDO0lBRTFDLHFCQUNFLDhEQUFDbUI7UUFBSUMsV0FBV3RCLG9FQUFjO2tCQUM1Qiw0RUFBQ3FCO1lBQUlDLFdBQVd0QiwrRUFBeUI7c0JBQ3ZDLDRFQUFDZTtnQkFBRVMsTUFBSztnQkFBR0MsUUFBTzs7Ozs7Ozs7Ozs7Ozs7OztBQUkxQjtHQXZDd0J4QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Byb2R1Y3RzL2luZGV4LnRzeD85NTk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdENhcmQoeyBwcm9kdWN0IH0pIHtcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGUocHJvZHVjdC5zdWJQcm9kdWN0c1thY3RpdmVdPy5pbWFnZXMpO1xuICBjb25zdCBbcHJpY2VzLCBzZXRQcmljZXNdID0gdXNlU3RhdGUoXG4gICAgcHJvZHVjdC5zdWJQcm9kdWN0c1thY3RpdmVdPy5zaXplc1xuICAgICAgLm1hcCgocykgPT4ge1xuICAgICAgICByZXR1cm4gcy5wcmljZTtcbiAgICAgIH0pXG4gICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICByZXR1cm4gYSAtIGI7XG4gICAgICB9KVxuICApO1xuICBjb25zdCBbc3R5bGVzcywgc2V0U3R5bGVzc10gPSB1c2VTdGF0ZShcbiAgICBwcm9kdWN0LnN1YlByb2R1Y3RzLm1hcCgocCkgPT4ge1xuICAgICAgcmV0dXJuIHAuY29sb3I7XG4gICAgfSlcbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEltYWdlcyhwcm9kdWN0LnN1YlByb2R1Y3RzW2FjdGl2ZV0uaW1hZ2VzKTtcbiAgICBzZXRQcmljZXMoXG4gICAgICBwcm9kdWN0LnN1YlByb2R1Y3RzW2FjdGl2ZV0/LnNpemVzXG4gICAgICAgIC5tYXAoKHMpID0+IHtcbiAgICAgICAgICByZXR1cm4gcy5wcmljZTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICByZXR1cm4gYSAtIGI7XG4gICAgICAgIH0pXG4gICAgKTtcbiAgfSwgW2FjdGl2ZSwgcHJvZHVjdF0pO1xuICAvLyAgIGNvbnNvbGUubG9nKGltYWdlcywgc3R5bGVzcywgcHJpY2VzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RfX2NvbnRhaW5lcn0+XG4gICAgICAgIDxhIGhyZWY9XCJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiUHJvZHVjdENhcmQiLCJwcm9kdWN0IiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiaW1hZ2VzIiwic2V0SW1hZ2VzIiwic3ViUHJvZHVjdHMiLCJwcmljZXMiLCJzZXRQcmljZXMiLCJzaXplcyIsIm1hcCIsInMiLCJwcmljZSIsInNvcnQiLCJhIiwiYiIsInN0eWxlc3MiLCJzZXRTdHlsZXNzIiwicCIsImNvbG9yIiwiZGl2IiwiY2xhc3NOYW1lIiwicHJvZHVjdF9fY29udGFpbmVyIiwiaHJlZiIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/products/index.tsx\n"));

/***/ })

});