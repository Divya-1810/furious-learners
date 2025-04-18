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
exports.id = "app/api/auth/signup/route";
exports.ids = ["app/api/auth/signup/route"];
exports.modules = {

/***/ "(rsc)/./app/api/auth/signup/route.js":
/*!**************************************!*\
  !*** ./app/api/auth/signup/route.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _app_utils_email__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/utils/email */ \"(rsc)/./app/utils/email.js\");\n/* harmony import */ var _app_utils_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/utils/db */ \"(rsc)/./app/utils/db.js\");\n/* harmony import */ var _app_models_OtpVerification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/models/OtpVerification */ \"(rsc)/./app/models/OtpVerification.js\");\n// app/api/auth/signup/route.js\n // ✅ Correct\n// Assumes you have an OTP utility\n\n\nasync function POST(req) {\n    try {\n        await (0,_app_utils_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        const body = await req.json();\n        const { name, email, password, role, dob, gender, phoneNumber } = body;\n        if (!email || !password || !name || !role || !dob || !gender || !phoneNumber) {\n            return new Response(JSON.stringify({\n                message: \"All fields are required\"\n            }), {\n                status: 400\n            });\n        }\n        const existingOtpDoc = await _app_models_OtpVerification__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n            email\n        });\n        const otp = (0,_app_utils_email__WEBPACK_IMPORTED_MODULE_0__.generateOTP)(); // E.g., 6-digit random code\n        const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now\n        const userData = {\n            name,\n            email,\n            password,\n            role,\n            dob,\n            gender,\n            phoneNumber\n        };\n        if (existingOtpDoc) {\n            existingOtpDoc.otp = otp;\n            existingOtpDoc.expiresAt = expiresAt;\n            existingOtpDoc.userData = userData;\n            await existingOtpDoc.save();\n        } else {\n            await _app_models_OtpVerification__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create({\n                email,\n                otp,\n                expiresAt,\n                userData\n            });\n        }\n        await (0,_app_utils_email__WEBPACK_IMPORTED_MODULE_0__.sendVerificationEmail)(email, otp); // Your email sending logic\n        return new Response(JSON.stringify({\n            message: \"OTP sent to your email\"\n        }), {\n            status: 200\n        });\n    } catch (err) {\n        console.error(\"Signup OTP error:\", err);\n        return new Response(JSON.stringify({\n            message: \"Signup failed\"\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvc2lnbnVwL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSwrQkFBK0I7QUFFd0MsQ0FBQyxZQUFZO0FBRXBGLGtDQUFrQztBQUNLO0FBQ29CO0FBR3BELGVBQWVJLEtBQUtDLEdBQUc7SUFDNUIsSUFBSTtRQUNGLE1BQU1ILHlEQUFTQTtRQUVmLE1BQU1JLE9BQU8sTUFBTUQsSUFBSUUsSUFBSTtRQUMzQixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLElBQUksRUFBRUMsR0FBRyxFQUFFQyxNQUFNLEVBQUVDLFdBQVcsRUFBRSxHQUFHUjtRQUVsRSxJQUFJLENBQUNHLFNBQVMsQ0FBQ0MsWUFBWSxDQUFDRixRQUFRLENBQUNHLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDQyxVQUFVLENBQUNDLGFBQWE7WUFDNUUsT0FBTyxJQUFJQyxTQUFTQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVDLFNBQVM7WUFBMEIsSUFBSTtnQkFDMUVDLFFBQVE7WUFDVjtRQUNGO1FBRUEsTUFBTUMsaUJBQWlCLE1BQU1qQixtRUFBZUEsQ0FBQ2tCLE9BQU8sQ0FBQztZQUFFWjtRQUFNO1FBRTdELE1BQU1hLE1BQU10Qiw2REFBV0EsSUFBSSw0QkFBNEI7UUFFdkQsTUFBTXVCLFlBQVksSUFBSUMsS0FBS0EsS0FBS0MsR0FBRyxLQUFLLEtBQUssS0FBSyxPQUFPLHNCQUFzQjtRQUUvRSxNQUFNQyxXQUFXO1lBQUVsQjtZQUFNQztZQUFPQztZQUFVQztZQUFNQztZQUFLQztZQUFRQztRQUFZO1FBRXpFLElBQUlNLGdCQUFnQjtZQUNsQkEsZUFBZUUsR0FBRyxHQUFHQTtZQUNyQkYsZUFBZUcsU0FBUyxHQUFHQTtZQUMzQkgsZUFBZU0sUUFBUSxHQUFHQTtZQUMxQixNQUFNTixlQUFlTyxJQUFJO1FBQzNCLE9BQU87WUFDTCxNQUFNeEIsbUVBQWVBLENBQUN5QixNQUFNLENBQUM7Z0JBQzNCbkI7Z0JBQ0FhO2dCQUNBQztnQkFDQUc7WUFDRjtRQUNGO1FBRUEsTUFBTXpCLHVFQUFxQkEsQ0FBQ1EsT0FBT2EsTUFBTSwyQkFBMkI7UUFFcEUsT0FBTyxJQUFJUCxTQUFTQyxLQUFLQyxTQUFTLENBQUM7WUFBRUMsU0FBUztRQUF5QixJQUFJO1lBQ3pFQyxRQUFRO1FBQ1Y7SUFDRixFQUFFLE9BQU9VLEtBQUs7UUFDWkMsUUFBUUMsS0FBSyxDQUFDLHFCQUFxQkY7UUFDbkMsT0FBTyxJQUFJZCxTQUFTQyxLQUFLQyxTQUFTLENBQUM7WUFBRUMsU0FBUztRQUFnQixJQUFJO1lBQ2hFQyxRQUFRO1FBQ1Y7SUFDRjtBQUNGIiwic291cmNlcyI6WyJDOlxcZnVyaW91cy1sZWFybmVyc1xcYXBwXFxhcGlcXGF1dGhcXHNpZ251cFxccm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwL2FwaS9hdXRoL3NpZ251cC9yb3V0ZS5qc1xyXG5cclxuaW1wb3J0IHsgZ2VuZXJhdGVPVFAsIHNlbmRWZXJpZmljYXRpb25FbWFpbCB9IGZyb20gXCJAL2FwcC91dGlscy9lbWFpbFwiOyAvLyDinIUgQ29ycmVjdFxyXG5cclxuLy8gQXNzdW1lcyB5b3UgaGF2ZSBhbiBPVFAgdXRpbGl0eVxyXG5pbXBvcnQgY29ubmVjdERCIGZyb20gXCJAL2FwcC91dGlscy9kYlwiO1xyXG5pbXBvcnQgT3RwVmVyaWZpY2F0aW9uIGZyb20gXCJAL2FwcC9tb2RlbHMvT3RwVmVyaWZpY2F0aW9uXCI7XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGNvbm5lY3REQigpO1xyXG5cclxuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpO1xyXG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIHJvbGUsIGRvYiwgZ2VuZGVyLCBwaG9uZU51bWJlciB9ID0gYm9keTtcclxuXHJcbiAgICBpZiAoIWVtYWlsIHx8ICFwYXNzd29yZCB8fCAhbmFtZSB8fCAhcm9sZSB8fCAhZG9iIHx8ICFnZW5kZXIgfHwgIXBob25lTnVtYmVyKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBcIkFsbCBmaWVsZHMgYXJlIHJlcXVpcmVkXCIgfSksIHtcclxuICAgICAgICBzdGF0dXM6IDQwMCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXhpc3RpbmdPdHBEb2MgPSBhd2FpdCBPdHBWZXJpZmljYXRpb24uZmluZE9uZSh7IGVtYWlsIH0pO1xyXG5cclxuICAgIGNvbnN0IG90cCA9IGdlbmVyYXRlT1RQKCk7IC8vIEUuZy4sIDYtZGlnaXQgcmFuZG9tIGNvZGVcclxuXHJcbiAgICBjb25zdCBleHBpcmVzQXQgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgMTAgKiA2MCAqIDEwMDApOyAvLyAxMCBtaW51dGVzIGZyb20gbm93XHJcblxyXG4gICAgY29uc3QgdXNlckRhdGEgPSB7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgcm9sZSwgZG9iLCBnZW5kZXIsIHBob25lTnVtYmVyIH07XHJcblxyXG4gICAgaWYgKGV4aXN0aW5nT3RwRG9jKSB7XHJcbiAgICAgIGV4aXN0aW5nT3RwRG9jLm90cCA9IG90cDtcclxuICAgICAgZXhpc3RpbmdPdHBEb2MuZXhwaXJlc0F0ID0gZXhwaXJlc0F0O1xyXG4gICAgICBleGlzdGluZ090cERvYy51c2VyRGF0YSA9IHVzZXJEYXRhO1xyXG4gICAgICBhd2FpdCBleGlzdGluZ090cERvYy5zYXZlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhd2FpdCBPdHBWZXJpZmljYXRpb24uY3JlYXRlKHtcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBvdHAsXHJcbiAgICAgICAgZXhwaXJlc0F0LFxyXG4gICAgICAgIHVzZXJEYXRhLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCBzZW5kVmVyaWZpY2F0aW9uRW1haWwoZW1haWwsIG90cCk7IC8vIFlvdXIgZW1haWwgc2VuZGluZyBsb2dpY1xyXG5cclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBcIk9UUCBzZW50IHRvIHlvdXIgZW1haWxcIiB9KSwge1xyXG4gICAgICBzdGF0dXM6IDIwMCxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlNpZ251cCBPVFAgZXJyb3I6XCIsIGVycik7XHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogXCJTaWdudXAgZmFpbGVkXCIgfSksIHtcclxuICAgICAgc3RhdHVzOiA1MDAsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImdlbmVyYXRlT1RQIiwic2VuZFZlcmlmaWNhdGlvbkVtYWlsIiwiY29ubmVjdERCIiwiT3RwVmVyaWZpY2F0aW9uIiwiUE9TVCIsInJlcSIsImJvZHkiLCJqc29uIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJyb2xlIiwiZG9iIiwiZ2VuZGVyIiwicGhvbmVOdW1iZXIiLCJSZXNwb25zZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtZXNzYWdlIiwic3RhdHVzIiwiZXhpc3RpbmdPdHBEb2MiLCJmaW5kT25lIiwib3RwIiwiZXhwaXJlc0F0IiwiRGF0ZSIsIm5vdyIsInVzZXJEYXRhIiwic2F2ZSIsImNyZWF0ZSIsImVyciIsImNvbnNvbGUiLCJlcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/signup/route.js\n");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fsignup%2Froute&page=%2Fapi%2Fauth%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsignup%2Froute.js&appDir=C%3A%5Cfurious-learners%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cfurious-learners&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fsignup%2Froute&page=%2Fapi%2Fauth%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsignup%2Froute.js&appDir=C%3A%5Cfurious-learners%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cfurious-learners&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_furious_learners_app_api_auth_signup_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/signup/route.js */ \"(rsc)/./app/api/auth/signup/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/signup/route\",\n        pathname: \"/api/auth/signup\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/signup/route\"\n    },\n    resolvedPagePath: \"C:\\\\furious-learners\\\\app\\\\api\\\\auth\\\\signup\\\\route.js\",\n    nextConfigOutput,\n    userland: C_furious_learners_app_api_auth_signup_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGc2lnbnVwJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhdXRoJTJGc2lnbnVwJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYXV0aCUyRnNpZ251cCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDZnVyaW91cy1sZWFybmVycyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q2Z1cmlvdXMtbGVhcm5lcnMmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ007QUFDbkY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXGZ1cmlvdXMtbGVhcm5lcnNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXHNpZ251cFxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9zaWdudXAvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL3NpZ251cFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9zaWdudXAvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxmdXJpb3VzLWxlYXJuZXJzXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxzaWdudXBcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fsignup%2Froute&page=%2Fapi%2Fauth%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsignup%2Froute.js&appDir=C%3A%5Cfurious-learners%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cfurious-learners&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fsignup%2Froute&page=%2Fapi%2Fauth%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsignup%2Froute.js&appDir=C%3A%5Cfurious-learners%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cfurious-learners&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();