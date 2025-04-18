"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/verify-otp-instructor/page",{

/***/ "(app-pages-browser)/./app/components/VerifyInstructorOtpForm.jsx":
/*!****************************************************!*\
  !*** ./app/components/VerifyInstructorOtpForm.jsx ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ VerifyInstructorOtpForm)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction VerifyInstructorOtpForm() {\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [otp, setOtp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"VerifyInstructorOtpForm.useEffect\": ()=>{\n            const emailFromURL = searchParams.get(\"email\");\n            if (emailFromURL) setEmail(emailFromURL);\n        }\n    }[\"VerifyInstructorOtpForm.useEffect\"], [\n        searchParams\n    ]);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        if (loading) return;\n        setLoading(true);\n        setError(\"\");\n        setMessage(\"\");\n        console.log(\"📤 Submitting OTP:\", {\n            email,\n            otp\n        });\n        try {\n            const res = await fetch(\"/api/auth/verify-otp-instructor\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email,\n                    otp\n                })\n            });\n            const data = await res.json();\n            if (!res.ok) {\n                setError(data.message || \"Verification failed\");\n            } else {\n                setMessage(data.message || \"Email verified! Redirecting to login...\");\n                setTimeout(()=>router.push(\"/auth/signin\"), 2000);\n            }\n        } catch (err) {\n            setError(\"Something went wrong\");\n        } finally{\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full max-w-lg mx-auto mt-16 bg-white shadow-2xl rounded-2xl p-8 border border-gray-200\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-3xl font-bold mb-6 text-center text-gray-800\",\n                children: \"\\uD83D\\uDCE7 Verify Instructor Email\"\n            }, void 0, false, {\n                fileName: \"C:\\\\furious-learners\\\\app\\\\components\\\\VerifyInstructorOtpForm.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"space-y-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-sm font-medium text-gray-700 mb-1\",\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\furious-learners\\\\app\\\\components\\\\VerifyInstructorOtpForm.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                className: \"w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-600\",\n                                value: email,\n                                disabled: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\furious-learners\\\\app\\\\components\\\\VerifyInstructorOtpForm.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\furious-learners\\\\app\\\\components\\\\VerifyInstructorOtpForm.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-sm font-medium text-gray-700 mb-1\",\n                                children: \"OTP\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\furious-learners\\\\app\\\\components\\\\VerifyInstructorOtpForm.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500\",\n                                value: otp,\n                                onChange: (e)=>setOtp(e.target.value.trim()),\n                                maxLength: 6,\n                                required: true,\n                                placeholder: \"Enter 6-digit code\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\furious-learners\\\\app\\\\components\\\\VerifyInstructorOtpForm.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\furious-learners\\\\app\\\\components\\\\VerifyInstructorOtpForm.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        disabled: loading,\n                        className: \"w-full bg-teal-600 text-white py-3 rounded-xl font-medium hover:bg-teal-700 transition-all duration-300\",\n                        children: loading ? \"Verifying...\" : \"Verify OTP\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\furious-learners\\\\app\\\\components\\\\VerifyInstructorOtpForm.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\furious-learners\\\\app\\\\components\\\\VerifyInstructorOtpForm.jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-6 text-teal-600 text-center font-medium\",\n                children: message\n            }, void 0, false, {\n                fileName: \"C:\\\\furious-learners\\\\app\\\\components\\\\VerifyInstructorOtpForm.jsx\",\n                lineNumber: 89,\n                columnNumber: 9\n            }, this),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-6 text-red-600 text-center font-medium\",\n                children: error\n            }, void 0, false, {\n                fileName: \"C:\\\\furious-learners\\\\app\\\\components\\\\VerifyInstructorOtpForm.jsx\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\furious-learners\\\\app\\\\components\\\\VerifyInstructorOtpForm.jsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(VerifyInstructorOtpForm, \"BhXuk9KBrCUAFRh3Eaw46nzXHws=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = VerifyInstructorOtpForm;\nvar _c;\n$RefreshReg$(_c, \"VerifyInstructorOtpForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1ZlcmlmeUluc3RydWN0b3JPdHBGb3JtLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRW1EO0FBQ1U7QUFFOUMsU0FBU0s7O0lBQ3RCLE1BQU1DLGVBQWVILGdFQUFlQTtJQUNwQyxNQUFNSSxTQUFTSCwwREFBU0E7SUFFeEIsTUFBTSxDQUFDSSxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1EsS0FBS0MsT0FBTyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUMvQixNQUFNLENBQUNVLFNBQVNDLFdBQVcsR0FBR1gsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDWSxTQUFTQyxXQUFXLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2MsT0FBT0MsU0FBUyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUVuQ0QsZ0RBQVNBOzZDQUFDO1lBQ1IsTUFBTWlCLGVBQWVaLGFBQWFhLEdBQUcsQ0FBQztZQUN0QyxJQUFJRCxjQUFjVCxTQUFTUztRQUM3Qjs0Q0FBRztRQUFDWjtLQUFhO0lBRWpCLE1BQU1jLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSVYsU0FBUztRQUNiQyxXQUFXO1FBQ1hJLFNBQVM7UUFDVEYsV0FBVztRQUVYUSxRQUFRQyxHQUFHLENBQUMsc0JBQXNCO1lBQUVoQjtZQUFPRTtRQUFJO1FBRS9DLElBQUk7WUFDRixNQUFNZSxNQUFNLE1BQU1DLE1BQU0sbUNBQW1DO2dCQUN6REMsUUFBUTtnQkFDUkMsU0FBUztvQkFBRSxnQkFBZ0I7Z0JBQW1CO2dCQUM5Q0MsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFdkI7b0JBQU9FO2dCQUFJO1lBQ3BDO1lBRUEsTUFBTXNCLE9BQU8sTUFBTVAsSUFBSVEsSUFBSTtZQUUzQixJQUFJLENBQUNSLElBQUlTLEVBQUUsRUFBRTtnQkFDWGpCLFNBQVNlLEtBQUtsQixPQUFPLElBQUk7WUFDM0IsT0FBTztnQkFDTEMsV0FBV2lCLEtBQUtsQixPQUFPLElBQUk7Z0JBQzNCcUIsV0FBVyxJQUFNNUIsT0FBTzZCLElBQUksQ0FBQyxpQkFBaUI7WUFDaEQ7UUFDRixFQUFFLE9BQU9DLEtBQUs7WUFDWnBCLFNBQVM7UUFDWCxTQUFVO1lBQ1JKLFdBQVc7UUFDYjtJQUNGO0lBRUEscUJBQ0UsOERBQUN5QjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQW9EOzs7Ozs7MEJBR2xFLDhEQUFDRTtnQkFBS0MsVUFBVXRCO2dCQUFjbUIsV0FBVTs7a0NBQ3RDLDhEQUFDRDs7MENBQ0MsOERBQUNLO2dDQUFNSixXQUFVOzBDQUErQzs7Ozs7OzBDQUNoRSw4REFBQ0s7Z0NBQ0NDLE1BQUs7Z0NBQ0xOLFdBQVU7Z0NBQ1ZPLE9BQU90QztnQ0FDUHVDLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FHWiw4REFBQ1Q7OzBDQUNDLDhEQUFDSztnQ0FBTUosV0FBVTswQ0FBK0M7Ozs7OzswQ0FDaEUsOERBQUNLO2dDQUNDQyxNQUFLO2dDQUNMTixXQUFVO2dDQUNWTyxPQUFPcEM7Z0NBQ1BzQyxVQUFVLENBQUMzQixJQUFNVixPQUFPVSxFQUFFNEIsTUFBTSxDQUFDSCxLQUFLLENBQUNJLElBQUk7Z0NBQzNDQyxXQUFXO2dDQUNYQyxRQUFRO2dDQUNSQyxhQUFZOzs7Ozs7Ozs7Ozs7a0NBR2hCLDhEQUFDQzt3QkFDQ1QsTUFBSzt3QkFDTEUsVUFBVW5DO3dCQUNWMkIsV0FBVTtrQ0FFVDNCLFVBQVUsaUJBQWlCOzs7Ozs7Ozs7Ozs7WUFJL0JFLHlCQUNDLDhEQUFDeUM7Z0JBQUVoQixXQUFVOzBCQUE4Q3pCOzs7Ozs7WUFFNURFLHVCQUNDLDhEQUFDdUM7Z0JBQUVoQixXQUFVOzBCQUE2Q3ZCOzs7Ozs7Ozs7Ozs7QUFJbEU7R0ExRndCWDs7UUFDREYsNERBQWVBO1FBQ3JCQyxzREFBU0E7OztLQUZGQyIsInNvdXJjZXMiOlsiQzpcXGZ1cmlvdXMtbGVhcm5lcnNcXGFwcFxcY29tcG9uZW50c1xcVmVyaWZ5SW5zdHJ1Y3Rvck90cEZvcm0uanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zLCB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWZXJpZnlJbnN0cnVjdG9yT3RwRm9ybSgpIHtcclxuICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbb3RwLCBzZXRPdHBdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBlbWFpbEZyb21VUkwgPSBzZWFyY2hQYXJhbXMuZ2V0KFwiZW1haWxcIik7XHJcbiAgICBpZiAoZW1haWxGcm9tVVJMKSBzZXRFbWFpbChlbWFpbEZyb21VUkwpO1xyXG4gIH0sIFtzZWFyY2hQYXJhbXNdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChsb2FkaW5nKSByZXR1cm47XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0RXJyb3IoXCJcIik7XHJcbiAgICBzZXRNZXNzYWdlKFwiXCIpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwi8J+TpCBTdWJtaXR0aW5nIE9UUDpcIiwgeyBlbWFpbCwgb3RwIH0pO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9hdXRoL3ZlcmlmeS1vdHAtaW5zdHJ1Y3RvclwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgb3RwIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgICBzZXRFcnJvcihkYXRhLm1lc3NhZ2UgfHwgXCJWZXJpZmljYXRpb24gZmFpbGVkXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlIHx8IFwiRW1haWwgdmVyaWZpZWQhIFJlZGlyZWN0aW5nIHRvIGxvZ2luLi4uXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcm91dGVyLnB1c2goXCIvYXV0aC9zaWduaW5cIiksIDIwMDApO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2V0RXJyb3IoXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1sZyBteC1hdXRvIG10LTE2IGJnLXdoaXRlIHNoYWRvdy0yeGwgcm91bmRlZC0yeGwgcC04IGJvcmRlciBib3JkZXItZ3JheS0yMDBcIj5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi02IHRleHQtY2VudGVyIHRleHQtZ3JheS04MDBcIj5cclxuICAgICAgICDwn5OnIFZlcmlmeSBJbnN0cnVjdG9yIEVtYWlsXHJcbiAgICAgIDwvaDI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktNVwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwIG1iLTFcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktMTAwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC14bCBweC00IHB5LTMgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXRlYWwtNTAwIHRleHQtZ3JheS02MDBcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwIG1iLTFcIj5PVFA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC14bCBweC00IHB5LTMgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXRlYWwtNTAwXCJcclxuICAgICAgICAgICAgdmFsdWU9e290cH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRPdHAoZS50YXJnZXQudmFsdWUudHJpbSgpKX1cclxuICAgICAgICAgICAgbWF4TGVuZ3RoPXs2fVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIDYtZGlnaXQgY29kZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctdGVhbC02MDAgdGV4dC13aGl0ZSBweS0zIHJvdW5kZWQteGwgZm9udC1tZWRpdW0gaG92ZXI6YmctdGVhbC03MDAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/IFwiVmVyaWZ5aW5nLi4uXCIgOiBcIlZlcmlmeSBPVFBcIn1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAge21lc3NhZ2UgJiYgKFxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTYgdGV4dC10ZWFsLTYwMCB0ZXh0LWNlbnRlciBmb250LW1lZGl1bVwiPnttZXNzYWdlfTwvcD5cclxuICAgICAgKX1cclxuICAgICAge2Vycm9yICYmIChcclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC02IHRleHQtcmVkLTYwMCB0ZXh0LWNlbnRlciBmb250LW1lZGl1bVwiPntlcnJvcn08L3A+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlU2VhcmNoUGFyYW1zIiwidXNlUm91dGVyIiwiVmVyaWZ5SW5zdHJ1Y3Rvck90cEZvcm0iLCJzZWFyY2hQYXJhbXMiLCJyb3V0ZXIiLCJlbWFpbCIsInNldEVtYWlsIiwib3RwIiwic2V0T3RwIiwibG9hZGluZyIsInNldExvYWRpbmciLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImVycm9yIiwic2V0RXJyb3IiLCJlbWFpbEZyb21VUkwiLCJnZXQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsIm9rIiwic2V0VGltZW91dCIsInB1c2giLCJlcnIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidHJpbSIsIm1heExlbmd0aCIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJwIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/VerifyInstructorOtpForm.jsx\n"));

/***/ })

});