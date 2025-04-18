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
exports.id = "app/api/auth/signup-instructor/route";
exports.ids = ["app/api/auth/signup-instructor/route"];
exports.modules = {

/***/ "(rsc)/./app/api/auth/signup-instructor/route.jsx":
/*!**************************************************!*\
  !*** ./app/api/auth/signup-instructor/route.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var app_utils_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/utils/db */ \"(rsc)/./app/utils/db.js\");\n/* harmony import */ var app_models_OtpVerification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/models/OtpVerification */ \"(rsc)/./app/models/OtpVerification.js\");\n/* harmony import */ var app_models_Instructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/models/Instructor */ \"(rsc)/./app/models/Instructor.js\");\n/* harmony import */ var app_utils_otpStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/utils/otpStore */ \"(rsc)/./app/utils/otpStore.js\");\n/* harmony import */ var app_utils_email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/utils/email */ \"(rsc)/./app/utils/email.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n// app/api/auth/signup-instructor/route.js\n\n\n\n\n\n\nasync function POST(req) {\n    try {\n        await (0,app_utils_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const body = await req.json();\n        const { email, name, password, gender, educationDetails, shortBio } = body;\n        if (!email || !name || !password || !gender || !educationDetails || !shortBio) {\n            return new Response(JSON.stringify({\n                message: \"All fields are required.\"\n            }), {\n                status: 400\n            });\n        }\n        const existing = await app_models_Instructor__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n            email\n        });\n        if (existing) {\n            return new Response(JSON.stringify({\n                message: \"Instructor already exists\"\n            }), {\n                status: 400\n            });\n        }\n        // 🔐 Hash password before storing it\n        const hashedPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"].hash(password, 10);\n        // Generate OTP\n        const generatedOtp = (0,app_utils_otpStore__WEBPACK_IMPORTED_MODULE_3__.generateOTP)();\n        const expiresAt = new Date(Date.now() + 10 * 60 * 1000);\n        await app_models_OtpVerification__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOneAndUpdate({\n            email\n        }, {\n            email,\n            otp: generatedOtp,\n            expiresAt,\n            userData: {\n                name,\n                email,\n                password: hashedPassword,\n                gender,\n                educationDetails,\n                shortBio,\n                role: 'instructor'\n            }\n        }, {\n            upsert: true,\n            new: true\n        });\n        await (0,app_utils_email__WEBPACK_IMPORTED_MODULE_4__.sendVerificationEmail)(email, generatedOtp);\n        console.log(\"✅ OTP sent to\", email);\n        return new Response(JSON.stringify({\n            message: \"Verification email sent\"\n        }), {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"❌ signup-instructor error:\", error);\n        return new Response(JSON.stringify({\n            message: \"Signup failed\"\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvc2lnbnVwLWluc3RydWN0b3Ivcm91dGUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwwQ0FBMEM7QUFFTDtBQUNvQjtBQUNWO0FBQ0U7QUFDTztBQUMxQjtBQUV2QixlQUFlTSxLQUFLQyxHQUFHO0lBQzVCLElBQUk7UUFDRixNQUFNUCx3REFBU0E7UUFDZixNQUFNUSxPQUFPLE1BQU1ELElBQUlFLElBQUk7UUFFM0IsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLGdCQUFnQixFQUFFQyxRQUFRLEVBQUUsR0FBR1A7UUFFdEUsSUFBSSxDQUFDRSxTQUFTLENBQUNDLFFBQVEsQ0FBQ0MsWUFBWSxDQUFDQyxVQUFVLENBQUNDLG9CQUFvQixDQUFDQyxVQUFVO1lBQzdFLE9BQU8sSUFBSUMsU0FBU0MsS0FBS0MsU0FBUyxDQUFDO2dCQUFFQyxTQUFTO1lBQTJCLElBQUk7Z0JBQUVDLFFBQVE7WUFBSTtRQUM3RjtRQUVBLE1BQU1DLFdBQVcsTUFBTW5CLDZEQUFVQSxDQUFDb0IsT0FBTyxDQUFDO1lBQUVaO1FBQU07UUFDbEQsSUFBSVcsVUFBVTtZQUNaLE9BQU8sSUFBSUwsU0FDVEMsS0FBS0MsU0FBUyxDQUFDO2dCQUFFQyxTQUFTO1lBQTRCLElBQ3REO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSxxQ0FBcUM7UUFDckMsTUFBTUcsaUJBQWlCLE1BQU1sQixxREFBVyxDQUFDTyxVQUFVO1FBRW5ELGVBQWU7UUFDZixNQUFNYSxlQUFldEIsK0RBQVdBO1FBQ2hDLE1BQU11QixZQUFZLElBQUlDLEtBQUtBLEtBQUtDLEdBQUcsS0FBSyxLQUFLLEtBQUs7UUFFbEQsTUFBTTNCLGtFQUFlQSxDQUFDNEIsZ0JBQWdCLENBQ3BDO1lBQUVuQjtRQUFNLEdBQ1I7WUFDRUE7WUFDQW9CLEtBQUtMO1lBQ0xDO1lBQ0FLLFVBQVU7Z0JBQ1JwQjtnQkFDQUQ7Z0JBQ0FFLFVBQVVXO2dCQUNWVjtnQkFDQUM7Z0JBQ0FDO2dCQUNBaUIsTUFBTTtZQUNSO1FBQ0YsR0FDQTtZQUFFQyxRQUFRO1lBQU1DLEtBQUs7UUFBSztRQUc1QixNQUFNOUIsc0VBQXFCQSxDQUFDTSxPQUFPZTtRQUVuQ1UsUUFBUUMsR0FBRyxDQUFDLGlCQUFpQjFCO1FBRTdCLE9BQU8sSUFBSU0sU0FDVEMsS0FBS0MsU0FBUyxDQUFDO1lBQUVDLFNBQVM7UUFBMEIsSUFDcEQ7WUFBRUMsUUFBUTtRQUFJO0lBRWxCLEVBQUUsT0FBT2lCLE9BQU87UUFDZEYsUUFBUUUsS0FBSyxDQUFDLDhCQUE4QkE7UUFDNUMsT0FBTyxJQUFJckIsU0FDVEMsS0FBS0MsU0FBUyxDQUFDO1lBQUVDLFNBQVM7UUFBZ0IsSUFDMUM7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxmdXJpb3VzLWxlYXJuZXJzXFxhcHBcXGFwaVxcYXV0aFxcc2lnbnVwLWluc3RydWN0b3JcXHJvdXRlLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAvYXBpL2F1dGgvc2lnbnVwLWluc3RydWN0b3Ivcm91dGUuanNcclxuXHJcbmltcG9ydCBjb25uZWN0REIgZnJvbSAnYXBwL3V0aWxzL2RiJztcclxuaW1wb3J0IE90cFZlcmlmaWNhdGlvbiBmcm9tICdhcHAvbW9kZWxzL090cFZlcmlmaWNhdGlvbic7XHJcbmltcG9ydCBJbnN0cnVjdG9yIGZyb20gJ2FwcC9tb2RlbHMvSW5zdHJ1Y3Rvcic7XHJcbmltcG9ydCB7IGdlbmVyYXRlT1RQIH0gZnJvbSAnYXBwL3V0aWxzL290cFN0b3JlJztcclxuaW1wb3J0IHsgc2VuZFZlcmlmaWNhdGlvbkVtYWlsIH0gZnJvbSAnYXBwL3V0aWxzL2VtYWlsJztcclxuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgY29ubmVjdERCKCk7XHJcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxLmpzb24oKTtcclxuXHJcbiAgICBjb25zdCB7IGVtYWlsLCBuYW1lLCBwYXNzd29yZCwgZ2VuZGVyLCBlZHVjYXRpb25EZXRhaWxzLCBzaG9ydEJpbyB9ID0gYm9keTtcclxuXHJcbiAgICBpZiAoIWVtYWlsIHx8ICFuYW1lIHx8ICFwYXNzd29yZCB8fCAhZ2VuZGVyIHx8ICFlZHVjYXRpb25EZXRhaWxzIHx8ICFzaG9ydEJpbykge1xyXG4gICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogXCJBbGwgZmllbGRzIGFyZSByZXF1aXJlZC5cIiB9KSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IEluc3RydWN0b3IuZmluZE9uZSh7IGVtYWlsIH0pO1xyXG4gICAgaWYgKGV4aXN0aW5nKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBcIkluc3RydWN0b3IgYWxyZWFkeSBleGlzdHNcIiB9KSxcclxuICAgICAgICB7IHN0YXR1czogNDAwIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDwn5SQIEhhc2ggcGFzc3dvcmQgYmVmb3JlIHN0b3JpbmcgaXRcclxuICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEwKTtcclxuXHJcbiAgICAvLyBHZW5lcmF0ZSBPVFBcclxuICAgIGNvbnN0IGdlbmVyYXRlZE90cCA9IGdlbmVyYXRlT1RQKCk7XHJcbiAgICBjb25zdCBleHBpcmVzQXQgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgMTAgKiA2MCAqIDEwMDApO1xyXG5cclxuICAgIGF3YWl0IE90cFZlcmlmaWNhdGlvbi5maW5kT25lQW5kVXBkYXRlKFxyXG4gICAgICB7IGVtYWlsIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBvdHA6IGdlbmVyYXRlZE90cCxcclxuICAgICAgICBleHBpcmVzQXQsXHJcbiAgICAgICAgdXNlckRhdGE6IHtcclxuICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgIHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZCxcclxuICAgICAgICAgIGdlbmRlcixcclxuICAgICAgICAgIGVkdWNhdGlvbkRldGFpbHMsXHJcbiAgICAgICAgICBzaG9ydEJpbyxcclxuICAgICAgICAgIHJvbGU6ICdpbnN0cnVjdG9yJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7IHVwc2VydDogdHJ1ZSwgbmV3OiB0cnVlIH1cclxuICAgICk7XHJcblxyXG4gICAgYXdhaXQgc2VuZFZlcmlmaWNhdGlvbkVtYWlsKGVtYWlsLCBnZW5lcmF0ZWRPdHApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwi4pyFIE9UUCBzZW50IHRvXCIsIGVtYWlsKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6IFwiVmVyaWZpY2F0aW9uIGVtYWlsIHNlbnRcIiB9KSxcclxuICAgICAgeyBzdGF0dXM6IDIwMCB9XHJcbiAgICApO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwi4p2MIHNpZ251cC1pbnN0cnVjdG9yIGVycm9yOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6IFwiU2lnbnVwIGZhaWxlZFwiIH0pLFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjb25uZWN0REIiLCJPdHBWZXJpZmljYXRpb24iLCJJbnN0cnVjdG9yIiwiZ2VuZXJhdGVPVFAiLCJzZW5kVmVyaWZpY2F0aW9uRW1haWwiLCJiY3J5cHQiLCJQT1NUIiwicmVxIiwiYm9keSIsImpzb24iLCJlbWFpbCIsIm5hbWUiLCJwYXNzd29yZCIsImdlbmRlciIsImVkdWNhdGlvbkRldGFpbHMiLCJzaG9ydEJpbyIsIlJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJleGlzdGluZyIsImZpbmRPbmUiLCJoYXNoZWRQYXNzd29yZCIsImhhc2giLCJnZW5lcmF0ZWRPdHAiLCJleHBpcmVzQXQiLCJEYXRlIiwibm93IiwiZmluZE9uZUFuZFVwZGF0ZSIsIm90cCIsInVzZXJEYXRhIiwicm9sZSIsInVwc2VydCIsIm5ldyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/signup-instructor/route.jsx\n");

/***/ }),

/***/ "(rsc)/./app/models/Instructor.js":
/*!**********************************!*\
  !*** ./app/models/Instructor.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n// app/models/Instructor.js\n\nconst InstructorSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a name\"\n        ],\n        maxlength: [\n            60,\n            \"Name cannot be more than 60 characters\"\n        ]\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Please provide an email\"\n        ],\n        unique: true,\n        lowercase: true\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a password\"\n        ],\n        minlength: [\n            6,\n            \"Password must be at least 6 characters\"\n        ]\n    },\n    role: {\n        type: String,\n        enum: [\n            \"instructor\"\n        ],\n        default: \"instructor\",\n        required: true\n    },\n    gender: {\n        type: String,\n        enum: [\n            \"male\",\n            \"female\",\n            \"other\"\n        ],\n        required: [\n            true,\n            \"Please specify gender\"\n        ]\n    },\n    educationDetails: {\n        type: String,\n        required: [\n            true,\n            \"Please provide your education details\"\n        ],\n        maxlength: [\n            200,\n            \"Education details cannot exceed 200 characters\"\n        ]\n    },\n    shortBio: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a short bio\"\n        ],\n        maxlength: [\n            300,\n            \"Short bio cannot exceed 300 characters\"\n        ]\n    },\n    enrolledCourses: [\n        {\n            type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n            ref: \"Course\"\n        }\n    ]\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Instructor || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Instructor\", InstructorSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbW9kZWxzL0luc3RydWN0b3IuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsMkJBQTJCO0FBRUs7QUFFaEMsTUFBTUMsbUJBQW1CLElBQUlELHdEQUFlLENBQzFDO0lBQ0VHLE1BQU07UUFDSkMsTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBd0I7UUFDekNDLFdBQVc7WUFBQztZQUFJO1NBQXlDO0lBQzNEO0lBQ0FDLE9BQU87UUFDTEosTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBMEI7UUFDM0NHLFFBQVE7UUFDUkMsV0FBVztJQUNiO0lBQ0FDLFVBQVU7UUFDUlAsTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBNEI7UUFDN0NNLFdBQVc7WUFBQztZQUFHO1NBQXlDO0lBQzFEO0lBQ0FDLE1BQU07UUFDSlQsTUFBTUM7UUFDTlMsTUFBTTtZQUFDO1NBQWE7UUFDcEJDLFNBQVM7UUFDVFQsVUFBVTtJQUNaO0lBQ0FVLFFBQVE7UUFDTlosTUFBTUM7UUFDTlMsTUFBTTtZQUFDO1lBQVE7WUFBVTtTQUFRO1FBQ2pDUixVQUFVO1lBQUM7WUFBTTtTQUF3QjtJQUMzQztJQUNBVyxrQkFBa0I7UUFDaEJiLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQXdDO1FBQ3pEQyxXQUFXO1lBQUM7WUFBSztTQUFpRDtJQUNwRTtJQUNBVyxVQUFVO1FBQ1JkLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQTZCO1FBQzlDQyxXQUFXO1lBQUM7WUFBSztTQUF5QztJQUM1RDtJQUNBWSxpQkFBaUI7UUFDZjtZQUNFZixNQUFNSix3REFBZSxDQUFDb0IsS0FBSyxDQUFDQyxRQUFRO1lBQ3BDQyxLQUFLO1FBQ1A7S0FDRDtBQUNILEdBQ0E7SUFDRUMsWUFBWTtBQUNkO0FBR0YsaUVBQWV2Qix3REFBZSxDQUFDeUIsVUFBVSxJQUN2Q3pCLHFEQUFjLENBQUMsY0FBY0MsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJDOlxcZnVyaW91cy1sZWFybmVyc1xcYXBwXFxtb2RlbHNcXEluc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwL21vZGVscy9JbnN0cnVjdG9yLmpzXHJcblxyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBJbnN0cnVjdG9yU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcclxuICB7XHJcbiAgICBuYW1lOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBwcm92aWRlIGEgbmFtZVwiXSxcclxuICAgICAgbWF4bGVuZ3RoOiBbNjAsIFwiTmFtZSBjYW5ub3QgYmUgbW9yZSB0aGFuIDYwIGNoYXJhY3RlcnNcIl0sXHJcbiAgICB9LFxyXG4gICAgZW1haWw6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIHByb3ZpZGUgYW4gZW1haWxcIl0sXHJcbiAgICAgIHVuaXF1ZTogdHJ1ZSxcclxuICAgICAgbG93ZXJjYXNlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHBhc3N3b3JkOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBwcm92aWRlIGEgcGFzc3dvcmRcIl0sXHJcbiAgICAgIG1pbmxlbmd0aDogWzYsIFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnNcIl0sXHJcbiAgICB9LFxyXG4gICAgcm9sZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGVudW06IFtcImluc3RydWN0b3JcIl0sXHJcbiAgICAgIGRlZmF1bHQ6IFwiaW5zdHJ1Y3RvclwiLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBnZW5kZXI6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBlbnVtOiBbXCJtYWxlXCIsIFwiZmVtYWxlXCIsIFwib3RoZXJcIl0sXHJcbiAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2Ugc3BlY2lmeSBnZW5kZXJcIl0sXHJcbiAgICB9LFxyXG4gICAgZWR1Y2F0aW9uRGV0YWlsczoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2UgcHJvdmlkZSB5b3VyIGVkdWNhdGlvbiBkZXRhaWxzXCJdLFxyXG4gICAgICBtYXhsZW5ndGg6IFsyMDAsIFwiRWR1Y2F0aW9uIGRldGFpbHMgY2Fubm90IGV4Y2VlZCAyMDAgY2hhcmFjdGVyc1wiXSxcclxuICAgIH0sXHJcbiAgICBzaG9ydEJpbzoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2UgcHJvdmlkZSBhIHNob3J0IGJpb1wiXSxcclxuICAgICAgbWF4bGVuZ3RoOiBbMzAwLCBcIlNob3J0IGJpbyBjYW5ub3QgZXhjZWVkIDMwMCBjaGFyYWN0ZXJzXCJdLFxyXG4gICAgfSxcclxuICAgIGVucm9sbGVkQ291cnNlczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLFxyXG4gICAgICAgIHJlZjogXCJDb3Vyc2VcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aW1lc3RhbXBzOiB0cnVlLCAvLyBhZGRzIGNyZWF0ZWRBdCBhbmQgdXBkYXRlZEF0XHJcbiAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLkluc3RydWN0b3IgfHxcclxuICBtb25nb29zZS5tb2RlbChcIkluc3RydWN0b3JcIiwgSW5zdHJ1Y3RvclNjaGVtYSk7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIkluc3RydWN0b3JTY2hlbWEiLCJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwibWF4bGVuZ3RoIiwiZW1haWwiLCJ1bmlxdWUiLCJsb3dlcmNhc2UiLCJwYXNzd29yZCIsIm1pbmxlbmd0aCIsInJvbGUiLCJlbnVtIiwiZGVmYXVsdCIsImdlbmRlciIsImVkdWNhdGlvbkRldGFpbHMiLCJzaG9ydEJpbyIsImVucm9sbGVkQ291cnNlcyIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJ0aW1lc3RhbXBzIiwibW9kZWxzIiwiSW5zdHJ1Y3RvciIsIm1vZGVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/models/Instructor.js\n");

/***/ }),

/***/ "(rsc)/./app/models/OtpVerification.js":
/*!***************************************!*\
  !*** ./app/models/OtpVerification.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst otpVerificationSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    otp: {\n        type: String,\n        required: true\n    },\n    expiresAt: {\n        type: Date,\n        required: true,\n        default: ()=>new Date(Date.now() + 10 * 60 * 1000)\n    },\n    userData: {\n        type: Object,\n        required: true\n    }\n}, {\n    timestamps: true\n});\n// TTL index for automatic deletion after expiration\notpVerificationSchema.index({\n    expiresAt: 1\n}, {\n    expireAfterSeconds: 0\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).OtpVerification || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"OtpVerification\", otpVerificationSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbW9kZWxzL090cFZlcmlmaWNhdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsd0JBQXdCLElBQUlELHdEQUFlLENBQy9DO0lBQ0VHLE9BQU87UUFDTEMsTUFBTUM7UUFDTkMsVUFBVTtRQUNWQyxRQUFRO0lBQ1Y7SUFDQUMsS0FBSztRQUNISixNQUFNQztRQUNOQyxVQUFVO0lBQ1o7SUFDQUcsV0FBVztRQUNUTCxNQUFNTTtRQUNOSixVQUFVO1FBQ1ZLLFNBQVMsSUFBTSxJQUFJRCxLQUFLQSxLQUFLRSxHQUFHLEtBQUssS0FBSyxLQUFLO0lBQ2pEO0lBQ0FDLFVBQVU7UUFDUlQsTUFBTVU7UUFDTlIsVUFBVTtJQUNaO0FBQ0YsR0FDQTtJQUNFUyxZQUFZO0FBQ2Q7QUFHRixvREFBb0Q7QUFDcERkLHNCQUFzQmUsS0FBSyxDQUFDO0lBQUVQLFdBQVc7QUFBRSxHQUFHO0lBQUVRLG9CQUFvQjtBQUFFO0FBRXRFLGlFQUFlakIsd0RBQWUsQ0FBQ21CLGVBQWUsSUFDNUNuQixxREFBYyxDQUFDLG1CQUFtQkMsc0JBQXNCQSxFQUFDIiwic291cmNlcyI6WyJDOlxcZnVyaW91cy1sZWFybmVyc1xcYXBwXFxtb2RlbHNcXE90cFZlcmlmaWNhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBvdHBWZXJpZmljYXRpb25TY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG4gIHtcclxuICAgIGVtYWlsOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIHVuaXF1ZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBvdHA6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBleHBpcmVzQXQ6IHtcclxuICAgICAgdHlwZTogRGF0ZSxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIGRlZmF1bHQ6ICgpID0+IG5ldyBEYXRlKERhdGUubm93KCkgKyAxMCAqIDYwICogMTAwMCksIC8vIDEwIG1pbnNcclxuICAgIH0sXHJcbiAgICB1c2VyRGF0YToge1xyXG4gICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLCAvLyB1c2VyIGRhdGEgaXMgc3RvcmVkIHRlbXBvcmFyaWx5IHVudGlsIE9UUCBpcyB2ZXJpZmllZFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpbWVzdGFtcHM6IHRydWUsXHJcbiAgfVxyXG4pO1xyXG5cclxuLy8gVFRMIGluZGV4IGZvciBhdXRvbWF0aWMgZGVsZXRpb24gYWZ0ZXIgZXhwaXJhdGlvblxyXG5vdHBWZXJpZmljYXRpb25TY2hlbWEuaW5kZXgoeyBleHBpcmVzQXQ6IDEgfSwgeyBleHBpcmVBZnRlclNlY29uZHM6IDAgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHMuT3RwVmVyaWZpY2F0aW9uIHx8XHJcbiAgbW9uZ29vc2UubW9kZWwoXCJPdHBWZXJpZmljYXRpb25cIiwgb3RwVmVyaWZpY2F0aW9uU2NoZW1hKTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwib3RwVmVyaWZpY2F0aW9uU2NoZW1hIiwiU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJvdHAiLCJleHBpcmVzQXQiLCJEYXRlIiwiZGVmYXVsdCIsIm5vdyIsInVzZXJEYXRhIiwiT2JqZWN0IiwidGltZXN0YW1wcyIsImluZGV4IiwiZXhwaXJlQWZ0ZXJTZWNvbmRzIiwibW9kZWxzIiwiT3RwVmVyaWZpY2F0aW9uIiwibW9kZWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/models/OtpVerification.js\n");

/***/ }),

/***/ "(rsc)/./app/utils/db.js":
/*!*************************!*\
  !*** ./app/utils/db.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.DATABASE;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env\");\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function connectDB() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvdXRpbHMvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGNBQWNDLFFBQVFDLEdBQUcsQ0FBQ0MsUUFBUTtBQUV4QyxJQUFJLENBQUNILGFBQWE7SUFDaEIsTUFBTSxJQUFJSSxNQUNSO0FBRUo7QUFFQSxJQUFJQyxTQUFTQyxPQUFPUCxRQUFRO0FBRTVCLElBQUksQ0FBQ00sUUFBUTtJQUNYQSxTQUFTQyxPQUFPUCxRQUFRLEdBQUc7UUFBRVEsTUFBTTtRQUFNQyxTQUFTO0lBQUs7QUFDekQ7QUFFQSxlQUFlQztJQUNiLElBQUlKLE9BQU9FLElBQUksRUFBRTtRQUNmLE9BQU9GLE9BQU9FLElBQUk7SUFDcEI7SUFFQSxJQUFJLENBQUNGLE9BQU9HLE9BQU8sRUFBRTtRQUNuQixNQUFNRSxPQUFPO1lBQ1hDLGdCQUFnQjtRQUNsQjtRQUVBTixPQUFPRyxPQUFPLEdBQUdULHVEQUFnQixDQUFDQyxhQUFhVSxNQUFNRyxJQUFJLENBQUMsQ0FBQ2Q7WUFDekQsT0FBT0E7UUFDVDtJQUNGO0lBRUEsSUFBSTtRQUNGTSxPQUFPRSxJQUFJLEdBQUcsTUFBTUYsT0FBT0csT0FBTztJQUNwQyxFQUFFLE9BQU9NLEdBQUc7UUFDVlQsT0FBT0csT0FBTyxHQUFHO1FBQ2pCLE1BQU1NO0lBQ1I7SUFFQSxPQUFPVCxPQUFPRSxJQUFJO0FBQ3BCO0FBRUEsaUVBQWVFLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxmdXJpb3VzLWxlYXJuZXJzXFxhcHBcXHV0aWxzXFxkYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52LkRBVEFCQVNFO1xyXG5cclxuaWYgKCFNT05HT0RCX1VSSSkge1xyXG4gIHRocm93IG5ldyBFcnJvcihcclxuICAgIFwiUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnZcIlxyXG4gICk7XHJcbn1cclxuXHJcbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2U7XHJcblxyXG5pZiAoIWNhY2hlZCkge1xyXG4gIGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZSA9IHsgY29ubjogbnVsbCwgcHJvbWlzZTogbnVsbCB9O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0REIoKSB7XHJcbiAgaWYgKGNhY2hlZC5jb25uKSB7XHJcbiAgICByZXR1cm4gY2FjaGVkLmNvbm47XHJcbiAgfVxyXG5cclxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XHJcbiAgICBjb25zdCBvcHRzID0ge1xyXG4gICAgICBidWZmZXJDb21tYW5kczogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgIGNhY2hlZC5wcm9taXNlID0gbW9uZ29vc2UuY29ubmVjdChNT05HT0RCX1VSSSwgb3B0cykudGhlbigobW9uZ29vc2UpID0+IHtcclxuICAgICAgcmV0dXJuIG1vbmdvb3NlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjYWNoZWQucHJvbWlzZSA9IG51bGw7XHJcbiAgICB0aHJvdyBlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNhY2hlZC5jb25uO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REI7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkRBVEFCQVNFIiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImNvbm5lY3REQiIsIm9wdHMiLCJidWZmZXJDb21tYW5kcyIsImNvbm5lY3QiLCJ0aGVuIiwiZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/utils/db.js\n");

/***/ }),

/***/ "(rsc)/./app/utils/email.js":
/*!****************************!*\
  !*** ./app/utils/email.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateOTP: () => (/* binding */ generateOTP),\n/* harmony export */   sendVerificationEmail: () => (/* binding */ sendVerificationEmail)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n// app\\utils\\email.js\n\nasync function sendVerificationEmail(email, otp) {\n    // Create a transporter using your email provider\n    const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0__.createTransport({\n        service: \"Gmail\",\n        auth: {\n            user: process.env.EMAIL_USER,\n            pass: process.env.EMAIL_PASS\n        }\n    });\n    const mailOptions = {\n        from: `\"Furious Learners\" <${process.env.EMAIL_USER}>`,\n        to: email,\n        subject: \"Your OTP for Email Verification\",\n        html: `\n      <div style=\"font-family: Arial, sans-serif; line-height: 1.6;\">\n        <h2>Email Verification</h2>\n        <p>Your OTP code is:</p>\n        <h3 style=\"background: #f0f0f0; padding: 10px; display: inline-block;\">${otp}</h3>\n        <p>This OTP will expire in 10 minutes.</p>\n        <br />\n        <p>If you did not request this, please ignore this email.</p>\n        <hr />\n        <p>Thanks,<br/>The YourApp Team</p>\n      </div>\n    `\n    };\n    try {\n        await transporter.sendMail(mailOptions);\n        console.log(`Verification email sent to ${email}`);\n    } catch (error) {\n        console.error(\"Failed to send verification email:\", error);\n        throw new Error(\"Email sending failed\");\n    }\n}\nfunction generateOTP() {\n    return Math.floor(100000 + Math.random() * 900000).toString();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvdXRpbHMvZW1haWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscUJBQXFCO0FBRWU7QUFFN0IsZUFBZUMsc0JBQXNCQyxLQUFLLEVBQUVDLEdBQUc7SUFDcEQsaURBQWlEO0lBQ2pELE1BQU1DLGNBQWNKLHVEQUEwQixDQUFDO1FBQzdDTSxTQUFTO1FBQ1RDLE1BQU07WUFDSkMsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxVQUFVO1lBQzVCQyxNQUFNSCxRQUFRQyxHQUFHLENBQUNHLFVBQVU7UUFDOUI7SUFDRjtJQUVBLE1BQU1DLGNBQWM7UUFDbEJDLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRU4sUUFBUUMsR0FBRyxDQUFDQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3RESyxJQUFJZDtRQUNKZSxTQUFTO1FBQ1RDLE1BQU0sQ0FBQzs7OzsrRUFJb0UsRUFBRWYsSUFBSTs7Ozs7OztJQU9qRixDQUFDO0lBQ0g7SUFFQSxJQUFJO1FBQ0YsTUFBTUMsWUFBWWUsUUFBUSxDQUFDTDtRQUMzQk0sUUFBUUMsR0FBRyxDQUFDLENBQUMsMkJBQTJCLEVBQUVuQixPQUFPO0lBQ25ELEVBQUUsT0FBT29CLE9BQU87UUFDZEYsUUFBUUUsS0FBSyxDQUFDLHNDQUFzQ0E7UUFDcEQsTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0FBQ0Y7QUFFTyxTQUFTQztJQUNkLE9BQU9DLEtBQUtDLEtBQUssQ0FBQyxTQUFTRCxLQUFLRSxNQUFNLEtBQUssUUFBUUMsUUFBUTtBQUM3RCIsInNvdXJjZXMiOlsiQzpcXGZ1cmlvdXMtbGVhcm5lcnNcXGFwcFxcdXRpbHNcXGVtYWlsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcFxcdXRpbHNcXGVtYWlsLmpzXHJcblxyXG5pbXBvcnQgbm9kZW1haWxlciBmcm9tIFwibm9kZW1haWxlclwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRWZXJpZmljYXRpb25FbWFpbChlbWFpbCwgb3RwKSB7XHJcbiAgLy8gQ3JlYXRlIGEgdHJhbnNwb3J0ZXIgdXNpbmcgeW91ciBlbWFpbCBwcm92aWRlclxyXG4gIGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xyXG4gICAgc2VydmljZTogXCJHbWFpbFwiLCAvLyBZb3UgY2FuIHN3aXRjaCB0byBTZW5kR3JpZCwgTWFpbGd1biwgZXRjLlxyXG4gICAgYXV0aDoge1xyXG4gICAgICB1c2VyOiBwcm9jZXNzLmVudi5FTUFJTF9VU0VSLFxyXG4gICAgICBwYXNzOiBwcm9jZXNzLmVudi5FTUFJTF9QQVNTLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbWFpbE9wdGlvbnMgPSB7XHJcbiAgICBmcm9tOiBgXCJGdXJpb3VzIExlYXJuZXJzXCIgPCR7cHJvY2Vzcy5lbnYuRU1BSUxfVVNFUn0+YCxcclxuICAgIHRvOiBlbWFpbCxcclxuICAgIHN1YmplY3Q6IFwiWW91ciBPVFAgZm9yIEVtYWlsIFZlcmlmaWNhdGlvblwiLFxyXG4gICAgaHRtbDogYFxyXG4gICAgICA8ZGl2IHN0eWxlPVwiZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmOyBsaW5lLWhlaWdodDogMS42O1wiPlxyXG4gICAgICAgIDxoMj5FbWFpbCBWZXJpZmljYXRpb248L2gyPlxyXG4gICAgICAgIDxwPllvdXIgT1RQIGNvZGUgaXM6PC9wPlxyXG4gICAgICAgIDxoMyBzdHlsZT1cImJhY2tncm91bmQ6ICNmMGYwZjA7IHBhZGRpbmc6IDEwcHg7IGRpc3BsYXk6IGlubGluZS1ibG9jaztcIj4ke290cH08L2gzPlxyXG4gICAgICAgIDxwPlRoaXMgT1RQIHdpbGwgZXhwaXJlIGluIDEwIG1pbnV0ZXMuPC9wPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxwPklmIHlvdSBkaWQgbm90IHJlcXVlc3QgdGhpcywgcGxlYXNlIGlnbm9yZSB0aGlzIGVtYWlsLjwvcD5cclxuICAgICAgICA8aHIgLz5cclxuICAgICAgICA8cD5UaGFua3MsPGJyLz5UaGUgWW91ckFwcCBUZWFtPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgfTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxPcHRpb25zKTtcclxuICAgIGNvbnNvbGUubG9nKGBWZXJpZmljYXRpb24gZW1haWwgc2VudCB0byAke2VtYWlsfWApO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgdmVyaWZpY2F0aW9uIGVtYWlsOlwiLCBlcnJvcik7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbWFpbCBzZW5kaW5nIGZhaWxlZFwiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU9UUCgpIHtcclxuICByZXR1cm4gTWF0aC5mbG9vcigxMDAwMDAgKyBNYXRoLnJhbmRvbSgpICogOTAwMDAwKS50b1N0cmluZygpO1xyXG59Il0sIm5hbWVzIjpbIm5vZGVtYWlsZXIiLCJzZW5kVmVyaWZpY2F0aW9uRW1haWwiLCJlbWFpbCIsIm90cCIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0Iiwic2VydmljZSIsImF1dGgiLCJ1c2VyIiwicHJvY2VzcyIsImVudiIsIkVNQUlMX1VTRVIiLCJwYXNzIiwiRU1BSUxfUEFTUyIsIm1haWxPcHRpb25zIiwiZnJvbSIsInRvIiwic3ViamVjdCIsImh0bWwiLCJzZW5kTWFpbCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIkVycm9yIiwiZ2VuZXJhdGVPVFAiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/utils/email.js\n");

/***/ }),

/***/ "(rsc)/./app/utils/otpStore.js":
/*!*******************************!*\
  !*** ./app/utils/otpStore.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   generateOTP: () => (/* binding */ generateOTP)\n/* harmony export */ });\n// app/utils/otpStore.js\nconst otpStore = new Map();\n/**\r\n * Structure:\r\n * {\r\n *   email: {\r\n *     otp: \"123456\",\r\n *     expiresAt: 1713378980000,\r\n *     userData: {\r\n *       name, email, password, role, dob, gender, phoneNumber\r\n *     }\r\n *   }\r\n * }\r\n */ function generateOTP() {\n    return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (otpStore);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvdXRpbHMvb3RwU3RvcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3QkFBd0I7QUFFeEIsTUFBTUEsV0FBVyxJQUFJQztBQUVyQjs7Ozs7Ozs7Ozs7Q0FXQyxHQUVNLFNBQVNDO0lBQ2QsT0FBT0MsS0FBS0MsS0FBSyxDQUFDLFNBQVNELEtBQUtFLE1BQU0sS0FBSyxRQUFRQyxRQUFRLElBQUksY0FBYztBQUMvRTtBQUVBLGlFQUFlTixRQUFRQSxFQUFDIiwic291cmNlcyI6WyJDOlxcZnVyaW91cy1sZWFybmVyc1xcYXBwXFx1dGlsc1xcb3RwU3RvcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwL3V0aWxzL290cFN0b3JlLmpzXHJcblxyXG5jb25zdCBvdHBTdG9yZSA9IG5ldyBNYXAoKTtcclxuXHJcbi8qKlxyXG4gKiBTdHJ1Y3R1cmU6XHJcbiAqIHtcclxuICogICBlbWFpbDoge1xyXG4gKiAgICAgb3RwOiBcIjEyMzQ1NlwiLFxyXG4gKiAgICAgZXhwaXJlc0F0OiAxNzEzMzc4OTgwMDAwLFxyXG4gKiAgICAgdXNlckRhdGE6IHtcclxuICogICAgICAgbmFtZSwgZW1haWwsIHBhc3N3b3JkLCByb2xlLCBkb2IsIGdlbmRlciwgcGhvbmVOdW1iZXJcclxuICogICAgIH1cclxuICogICB9XHJcbiAqIH1cclxuICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVPVFAoKSB7XHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoMTAwMDAwICsgTWF0aC5yYW5kb20oKSAqIDkwMDAwMCkudG9TdHJpbmcoKTsgLy8gNi1kaWdpdCBPVFBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb3RwU3RvcmU7XHJcbiJdLCJuYW1lcyI6WyJvdHBTdG9yZSIsIk1hcCIsImdlbmVyYXRlT1RQIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/utils/otpStore.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fsignup-instructor%2Froute&page=%2Fapi%2Fauth%2Fsignup-instructor%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsignup-instructor%2Froute.jsx&appDir=C%3A%5Cfurious-learners%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cfurious-learners&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fsignup-instructor%2Froute&page=%2Fapi%2Fauth%2Fsignup-instructor%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsignup-instructor%2Froute.jsx&appDir=C%3A%5Cfurious-learners%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cfurious-learners&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_furious_learners_app_api_auth_signup_instructor_route_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/signup-instructor/route.jsx */ \"(rsc)/./app/api/auth/signup-instructor/route.jsx\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/signup-instructor/route\",\n        pathname: \"/api/auth/signup-instructor\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/signup-instructor/route\"\n    },\n    resolvedPagePath: \"C:\\\\furious-learners\\\\app\\\\api\\\\auth\\\\signup-instructor\\\\route.jsx\",\n    nextConfigOutput,\n    userland: C_furious_learners_app_api_auth_signup_instructor_route_jsx__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGc2lnbnVwLWluc3RydWN0b3IlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkZzaWdudXAtaW5zdHJ1Y3RvciUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkZzaWdudXAtaW5zdHJ1Y3RvciUyRnJvdXRlLmpzeCZhcHBEaXI9QyUzQSU1Q2Z1cmlvdXMtbGVhcm5lcnMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNmdXJpb3VzLWxlYXJuZXJzJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNrQjtBQUMvRjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcZnVyaW91cy1sZWFybmVyc1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcc2lnbnVwLWluc3RydWN0b3JcXFxccm91dGUuanN4XCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL3NpZ251cC1pbnN0cnVjdG9yL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9zaWdudXAtaW5zdHJ1Y3RvclwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9zaWdudXAtaW5zdHJ1Y3Rvci9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXGZ1cmlvdXMtbGVhcm5lcnNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXHNpZ251cC1pbnN0cnVjdG9yXFxcXHJvdXRlLmpzeFwiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fsignup-instructor%2Froute&page=%2Fapi%2Fauth%2Fsignup-instructor%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsignup-instructor%2Froute.jsx&appDir=C%3A%5Cfurious-learners%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cfurious-learners&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/bcryptjs","vendor-chunks/nodemailer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fsignup-instructor%2Froute&page=%2Fapi%2Fauth%2Fsignup-instructor%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsignup-instructor%2Froute.jsx&appDir=C%3A%5Cfurious-learners%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cfurious-learners&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();