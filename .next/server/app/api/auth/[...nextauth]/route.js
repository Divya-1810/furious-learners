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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.js":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var _app_utils_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/utils/db */ \"(rsc)/./app/utils/db.js\");\n/* harmony import */ var _app_models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/models/User */ \"(rsc)/./app/models/User.js\");\n/* harmony import */ var _app_models_Instructor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/models/Instructor */ \"(rsc)/./app/models/Instructor.js\");\n\n\n\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\",\n                    placeholder: \"you@example.com\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                try {\n                    await (0,_app_utils_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n                    let user = await _app_models_User__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findOne({\n                        email: credentials.email\n                    });\n                    if (!user) {\n                        user = await _app_models_Instructor__WEBPACK_IMPORTED_MODULE_5__[\"default\"].findOne({\n                            email: credentials.email\n                        });\n                        if (!user) {\n                            throw new Error(\"User not found\");\n                        }\n                    }\n                    const isPasswordValid = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_2__.compare)(credentials.password, user.password);\n                    if (!isPasswordValid) throw new Error(\"Invalid password\");\n                    return {\n                        id: user._id.toString(),\n                        name: user.name,\n                        email: user.email,\n                        role: user.role,\n                        dob: user.dob || null,\n                        gender: user.gender || null,\n                        phoneNumber: user.phoneNumber || null\n                    };\n                } catch (error) {\n                    console.error(\"Auth error:\", error);\n                    throw error;\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n                token.role = user.role;\n                token.dob = user.dob;\n                token.gender = user.gender;\n                token.phoneNumber = user.phoneNumber;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token) {\n                session.user._id = token.id;\n                session.user.role = token.role;\n                session.user.dob = token.dob;\n                session.user.gender = token.gender;\n                session.user.phoneNumber = token.phoneNumber;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/auth/signin\",\n        error: \"/auth/error\"\n    },\n    session: {\n        strategy: \"jwt\",\n        maxAge: 30 * 24 * 60 * 60\n    },\n    secret: process.env.NEXTAUTH_SECRET,\n    debug: \"development\" === \"development\"\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ2lDO0FBQy9CO0FBQ0k7QUFDRjtBQUNZO0FBRTFDLE1BQU1NLGNBQWM7SUFDekJDLFdBQVc7UUFDVE4sMkVBQW1CQSxDQUFDO1lBQ2xCTyxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hDLE9BQU87b0JBQ0xDLE9BQU87b0JBQ1BDLE1BQU07b0JBQ05DLGFBQWE7Z0JBQ2Y7Z0JBQ0FDLFVBQVU7b0JBQUVILE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRyxXQUFVTixXQUFXO2dCQUN6QixJQUFJO29CQUNGLE1BQU1OLHlEQUFTQTtvQkFDZixJQUFJYSxPQUFPLE1BQU1aLHdEQUFJQSxDQUFDYSxPQUFPLENBQUM7d0JBQUVQLE9BQU9ELFlBQVlDLEtBQUs7b0JBQUM7b0JBRXpELElBQUksQ0FBQ00sTUFBTTt3QkFDVEEsT0FBTyxNQUFNWCw4REFBVUEsQ0FBQ1ksT0FBTyxDQUFDOzRCQUFFUCxPQUFPRCxZQUFZQyxLQUFLO3dCQUFDO3dCQUUzRCxJQUFJLENBQUNNLE1BQU07NEJBQ1QsTUFBTSxJQUFJRSxNQUFNO3dCQUNsQjtvQkFDRjtvQkFFQSxNQUFNQyxrQkFBa0IsTUFBTWpCLGlEQUFPQSxDQUNuQ08sWUFBWUssUUFBUSxFQUNwQkUsS0FBS0YsUUFBUTtvQkFFZixJQUFJLENBQUNLLGlCQUFpQixNQUFNLElBQUlELE1BQU07b0JBRXRDLE9BQU87d0JBQ0xFLElBQUlKLEtBQUtLLEdBQUcsQ0FBQ0MsUUFBUTt3QkFDckJkLE1BQU1RLEtBQUtSLElBQUk7d0JBQ2ZFLE9BQU9NLEtBQUtOLEtBQUs7d0JBQ2pCYSxNQUFNUCxLQUFLTyxJQUFJO3dCQUNmQyxLQUFLUixLQUFLUSxHQUFHLElBQUk7d0JBQ2pCQyxRQUFRVCxLQUFLUyxNQUFNLElBQUk7d0JBQ3ZCQyxhQUFhVixLQUFLVSxXQUFXLElBQUk7b0JBQ25DO2dCQUNGLEVBQUUsT0FBT0MsT0FBTztvQkFDZEMsUUFBUUQsS0FBSyxDQUFDLGVBQWVBO29CQUM3QixNQUFNQTtnQkFDUjtZQUNGO1FBQ0Y7S0FDRDtJQUNERSxXQUFXO1FBQ1QsTUFBTUMsS0FBSSxFQUFFQyxLQUFLLEVBQUVmLElBQUksRUFBRTtZQUN2QixJQUFJQSxNQUFNO2dCQUNSZSxNQUFNWCxFQUFFLEdBQUdKLEtBQUtJLEVBQUU7Z0JBQ2xCVyxNQUFNUixJQUFJLEdBQUdQLEtBQUtPLElBQUk7Z0JBQ3RCUSxNQUFNUCxHQUFHLEdBQUdSLEtBQUtRLEdBQUc7Z0JBQ3BCTyxNQUFNTixNQUFNLEdBQUdULEtBQUtTLE1BQU07Z0JBQzFCTSxNQUFNTCxXQUFXLEdBQUdWLEtBQUtVLFdBQVc7WUFDdEM7WUFDQSxPQUFPSztRQUNUO1FBQ0EsTUFBTUMsU0FBUSxFQUFFQSxPQUFPLEVBQUVELEtBQUssRUFBRTtZQUM5QixJQUFJQSxPQUFPO2dCQUNUQyxRQUFRaEIsSUFBSSxDQUFDSyxHQUFHLEdBQUdVLE1BQU1YLEVBQUU7Z0JBQzNCWSxRQUFRaEIsSUFBSSxDQUFDTyxJQUFJLEdBQUdRLE1BQU1SLElBQUk7Z0JBQzlCUyxRQUFRaEIsSUFBSSxDQUFDUSxHQUFHLEdBQUdPLE1BQU1QLEdBQUc7Z0JBQzVCUSxRQUFRaEIsSUFBSSxDQUFDUyxNQUFNLEdBQUdNLE1BQU1OLE1BQU07Z0JBQ2xDTyxRQUFRaEIsSUFBSSxDQUFDVSxXQUFXLEdBQUdLLE1BQU1MLFdBQVc7WUFDOUM7WUFDQSxPQUFPTTtRQUNUO0lBQ0Y7SUFDQUMsT0FBTztRQUNMQyxRQUFRO1FBQ1JQLE9BQU87SUFDVDtJQUNBSyxTQUFTO1FBQ1BHLFVBQVU7UUFDVkMsUUFBUSxLQUFLLEtBQUssS0FBSztJQUN6QjtJQUNBQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7SUFDbkNDLE9BQU9ILGtCQUF5QjtBQUNsQyxFQUFFO0FBRUYsTUFBTUksVUFBVTFDLGdEQUFRQSxDQUFDTTtBQUNrQiIsInNvdXJjZXMiOlsiUzpcXGZ1cmlvdXMtbGVhcm5lcnMtc293bWlrYVxcYXBwXFxhcGlcXGF1dGhcXFsuLi5uZXh0YXV0aF1cXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XHJcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiYmNyeXB0anNcIjtcclxuaW1wb3J0IGNvbm5lY3REQiBmcm9tIFwiQC9hcHAvdXRpbHMvZGJcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSBcIkAvYXBwL21vZGVscy9Vc2VyXCI7XHJcbmltcG9ydCBJbnN0cnVjdG9yIGZyb20gXCJAL2FwcC9tb2RlbHMvSW5zdHJ1Y3RvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbiAgICAgIG5hbWU6IFwiQ3JlZGVudGlhbHNcIixcclxuICAgICAgY3JlZGVudGlhbHM6IHtcclxuICAgICAgICBlbWFpbDoge1xyXG4gICAgICAgICAgbGFiZWw6IFwiRW1haWxcIixcclxuICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcInlvdUBleGFtcGxlLmNvbVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBhd2FpdCBjb25uZWN0REIoKTtcclxuICAgICAgICAgIGxldCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsIH0pO1xyXG5cclxuICAgICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgICB1c2VyID0gYXdhaXQgSW5zdHJ1Y3Rvci5maW5kT25lKHsgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVXNlciBub3QgZm91bmRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjb25zdCBpc1Bhc3N3b3JkVmFsaWQgPSBhd2FpdCBjb21wYXJlKFxyXG4gICAgICAgICAgICBjcmVkZW50aWFscy5wYXNzd29yZCxcclxuICAgICAgICAgICAgdXNlci5wYXNzd29yZFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGlmICghaXNQYXNzd29yZFZhbGlkKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBhc3N3b3JkXCIpO1xyXG5cclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiB1c2VyLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICByb2xlOiB1c2VyLnJvbGUsXHJcbiAgICAgICAgICAgIGRvYjogdXNlci5kb2IgfHwgbnVsbCxcclxuICAgICAgICAgICAgZ2VuZGVyOiB1c2VyLmdlbmRlciB8fCBudWxsLFxyXG4gICAgICAgICAgICBwaG9uZU51bWJlcjogdXNlci5waG9uZU51bWJlciB8fCBudWxsLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkF1dGggZXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgY2FsbGJhY2tzOiB7XHJcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgdG9rZW4uaWQgPSB1c2VyLmlkO1xyXG4gICAgICAgIHRva2VuLnJvbGUgPSB1c2VyLnJvbGU7XHJcbiAgICAgICAgdG9rZW4uZG9iID0gdXNlci5kb2I7XHJcbiAgICAgICAgdG9rZW4uZ2VuZGVyID0gdXNlci5nZW5kZXI7XHJcbiAgICAgICAgdG9rZW4ucGhvbmVOdW1iZXIgPSB1c2VyLnBob25lTnVtYmVyO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0b2tlbjtcclxuICAgIH0sXHJcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xyXG4gICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICBzZXNzaW9uLnVzZXIuX2lkID0gdG9rZW4uaWQ7XHJcbiAgICAgICAgc2Vzc2lvbi51c2VyLnJvbGUgPSB0b2tlbi5yb2xlO1xyXG4gICAgICAgIHNlc3Npb24udXNlci5kb2IgPSB0b2tlbi5kb2I7XHJcbiAgICAgICAgc2Vzc2lvbi51c2VyLmdlbmRlciA9IHRva2VuLmdlbmRlcjtcclxuICAgICAgICBzZXNzaW9uLnVzZXIucGhvbmVOdW1iZXIgPSB0b2tlbi5waG9uZU51bWJlcjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc2Vzc2lvbjtcclxuICAgIH0sXHJcbiAgfSxcclxuICBwYWdlczoge1xyXG4gICAgc2lnbkluOiBcIi9hdXRoL3NpZ25pblwiLFxyXG4gICAgZXJyb3I6IFwiL2F1dGgvZXJyb3JcIixcclxuICB9LFxyXG4gIHNlc3Npb246IHtcclxuICAgIHN0cmF0ZWd5OiBcImp3dFwiLFxyXG4gICAgbWF4QWdlOiAzMCAqIDI0ICogNjAgKiA2MCwgLy8gMzAgZGF5c1xyXG4gIH0sXHJcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXHJcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIsXHJcbn07XHJcblxyXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xyXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07XHJcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJjb21wYXJlIiwiY29ubmVjdERCIiwiVXNlciIsIkluc3RydWN0b3IiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInVzZXIiLCJmaW5kT25lIiwiRXJyb3IiLCJpc1Bhc3N3b3JkVmFsaWQiLCJpZCIsIl9pZCIsInRvU3RyaW5nIiwicm9sZSIsImRvYiIsImdlbmRlciIsInBob25lTnVtYmVyIiwiZXJyb3IiLCJjb25zb2xlIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJzZXNzaW9uIiwicGFnZXMiLCJzaWduSW4iLCJzdHJhdGVneSIsIm1heEFnZSIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUQVVUSF9TRUNSRVQiLCJkZWJ1ZyIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./app/models/Instructor.js":
/*!**********************************!*\
  !*** ./app/models/Instructor.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n// app/models/Instructor.js\n\nconst InstructorSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a name\"\n        ],\n        maxlength: [\n            60,\n            \"Name cannot be more than 60 characters\"\n        ]\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Please provide an email\"\n        ],\n        unique: true,\n        lowercase: true\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a password\"\n        ],\n        minlength: [\n            6,\n            \"Password must be at least 6 characters\"\n        ]\n    },\n    role: {\n        type: String,\n        enum: [\n            \"instructor\"\n        ],\n        default: \"instructor\",\n        required: true\n    },\n    gender: {\n        type: String,\n        enum: [\n            \"male\",\n            \"female\",\n            \"other\"\n        ],\n        required: [\n            true,\n            \"Please specify gender\"\n        ]\n    },\n    educationDetails: {\n        type: String,\n        required: [\n            true,\n            \"Please provide your education details\"\n        ],\n        maxlength: [\n            200,\n            \"Education details cannot exceed 200 characters\"\n        ]\n    },\n    shortBio: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a short bio\"\n        ],\n        maxlength: [\n            300,\n            \"Short bio cannot exceed 300 characters\"\n        ]\n    },\n    enrolledCourses: [\n        {\n            type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n            ref: \"Course\"\n        }\n    ]\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Instructor || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Instructor\", InstructorSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbW9kZWxzL0luc3RydWN0b3IuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsMkJBQTJCO0FBRUs7QUFFaEMsTUFBTUMsbUJBQW1CLElBQUlELHdEQUFlLENBQzFDO0lBQ0VHLE1BQU07UUFDSkMsTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBd0I7UUFDekNDLFdBQVc7WUFBQztZQUFJO1NBQXlDO0lBQzNEO0lBQ0FDLE9BQU87UUFDTEosTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBMEI7UUFDM0NHLFFBQVE7UUFDUkMsV0FBVztJQUNiO0lBQ0FDLFVBQVU7UUFDUlAsTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBNEI7UUFDN0NNLFdBQVc7WUFBQztZQUFHO1NBQXlDO0lBQzFEO0lBQ0FDLE1BQU07UUFDSlQsTUFBTUM7UUFDTlMsTUFBTTtZQUFDO1NBQWE7UUFDcEJDLFNBQVM7UUFDVFQsVUFBVTtJQUNaO0lBQ0FVLFFBQVE7UUFDTlosTUFBTUM7UUFDTlMsTUFBTTtZQUFDO1lBQVE7WUFBVTtTQUFRO1FBQ2pDUixVQUFVO1lBQUM7WUFBTTtTQUF3QjtJQUMzQztJQUNBVyxrQkFBa0I7UUFDaEJiLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQXdDO1FBQ3pEQyxXQUFXO1lBQUM7WUFBSztTQUFpRDtJQUNwRTtJQUNBVyxVQUFVO1FBQ1JkLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQTZCO1FBQzlDQyxXQUFXO1lBQUM7WUFBSztTQUF5QztJQUM1RDtJQUNBWSxpQkFBaUI7UUFDZjtZQUNFZixNQUFNSix3REFBZSxDQUFDb0IsS0FBSyxDQUFDQyxRQUFRO1lBQ3BDQyxLQUFLO1FBQ1A7S0FDRDtBQUNILEdBQ0E7SUFDRUMsWUFBWTtBQUNkO0FBR0YsaUVBQWV2Qix3REFBZSxDQUFDeUIsVUFBVSxJQUN2Q3pCLHFEQUFjLENBQUMsY0FBY0MsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJTOlxcZnVyaW91cy1sZWFybmVycy1zb3dtaWthXFxhcHBcXG1vZGVsc1xcSW5zdHJ1Y3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAvbW9kZWxzL0luc3RydWN0b3IuanNcblxuaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBJbnN0cnVjdG9yU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcbiAge1xuICAgIG5hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2UgcHJvdmlkZSBhIG5hbWVcIl0sXG4gICAgICBtYXhsZW5ndGg6IFs2MCwgXCJOYW1lIGNhbm5vdCBiZSBtb3JlIHRoYW4gNjAgY2hhcmFjdGVyc1wiXSxcbiAgICB9LFxuICAgIGVtYWlsOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIHByb3ZpZGUgYW4gZW1haWxcIl0sXG4gICAgICB1bmlxdWU6IHRydWUsXG4gICAgICBsb3dlcmNhc2U6IHRydWUsXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBwcm92aWRlIGEgcGFzc3dvcmRcIl0sXG4gICAgICBtaW5sZW5ndGg6IFs2LCBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzXCJdLFxuICAgIH0sXG4gICAgcm9sZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZW51bTogW1wiaW5zdHJ1Y3RvclwiXSxcbiAgICAgIGRlZmF1bHQ6IFwiaW5zdHJ1Y3RvclwiLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBnZW5kZXI6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGVudW06IFtcIm1hbGVcIiwgXCJmZW1hbGVcIiwgXCJvdGhlclwiXSxcbiAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2Ugc3BlY2lmeSBnZW5kZXJcIl0sXG4gICAgfSxcbiAgICBlZHVjYXRpb25EZXRhaWxzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIHByb3ZpZGUgeW91ciBlZHVjYXRpb24gZGV0YWlsc1wiXSxcbiAgICAgIG1heGxlbmd0aDogWzIwMCwgXCJFZHVjYXRpb24gZGV0YWlscyBjYW5ub3QgZXhjZWVkIDIwMCBjaGFyYWN0ZXJzXCJdLFxuICAgIH0sXG4gICAgc2hvcnRCaW86IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2UgcHJvdmlkZSBhIHNob3J0IGJpb1wiXSxcbiAgICAgIG1heGxlbmd0aDogWzMwMCwgXCJTaG9ydCBiaW8gY2Fubm90IGV4Y2VlZCAzMDAgY2hhcmFjdGVyc1wiXSxcbiAgICB9LFxuICAgIGVucm9sbGVkQ291cnNlczogW1xuICAgICAge1xuICAgICAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgICAgIHJlZjogXCJDb3Vyc2VcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRpbWVzdGFtcHM6IHRydWUsIC8vIGFkZHMgY3JlYXRlZEF0IGFuZCB1cGRhdGVkQXRcbiAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLkluc3RydWN0b3IgfHxcbiAgbW9uZ29vc2UubW9kZWwoXCJJbnN0cnVjdG9yXCIsIEluc3RydWN0b3JTY2hlbWEpO1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiSW5zdHJ1Y3RvclNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJtYXhsZW5ndGgiLCJlbWFpbCIsInVuaXF1ZSIsImxvd2VyY2FzZSIsInBhc3N3b3JkIiwibWlubGVuZ3RoIiwicm9sZSIsImVudW0iLCJkZWZhdWx0IiwiZ2VuZGVyIiwiZWR1Y2F0aW9uRGV0YWlscyIsInNob3J0QmlvIiwiZW5yb2xsZWRDb3Vyc2VzIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsInRpbWVzdGFtcHMiLCJtb2RlbHMiLCJJbnN0cnVjdG9yIiwibW9kZWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/models/Instructor.js\n");

/***/ }),

/***/ "(rsc)/./app/models/User.js":
/*!****************************!*\
  !*** ./app/models/User.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n// app\\models\\User.js\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a name\"\n        ],\n        maxlength: [\n            60,\n            \"Name cannot be more than 60 characters\"\n        ]\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Please provide an email\"\n        ],\n        unique: true,\n        lowercase: true\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a password\"\n        ],\n        minlength: [\n            6,\n            \"Password must be at least 6 characters\"\n        ]\n    },\n    role: {\n        type: String,\n        enum: [\n            \"student\",\n            \"instructor\"\n        ],\n        required: [\n            true,\n            \"Please specify user role\"\n        ]\n    },\n    dob: {\n        type: Date,\n        required: [\n            true,\n            \"Please provide your date of birth\"\n        ]\n    },\n    gender: {\n        type: String,\n        enum: [\n            \"male\",\n            \"female\",\n            \"other\"\n        ],\n        required: [\n            true,\n            \"Please specify gender\"\n        ]\n    },\n    phoneNumber: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a phone number\"\n        ],\n        match: [\n            /^[0-9]{10}$/,\n            \"Phone number must be 10 digits\"\n        ]\n    },\n    enrolledCourses: [\n        {\n            type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n            ref: \"Course\"\n        }\n    ],\n    isVerified: {\n        type: Boolean,\n        default: false\n    },\n    otp: {\n        type: String\n    },\n    otpExpiry: {\n        type: Date\n    },\n    createdAt: {\n        type: Date,\n        default: Date.now\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbW9kZWxzL1VzZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscUJBQXFCO0FBRVc7QUFFaEMsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUFDO0lBQ3JDRyxNQUFNO1FBQ0pDLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQXdCO1FBQ3pDQyxXQUFXO1lBQUM7WUFBSTtTQUF5QztJQUMzRDtJQUNBQyxPQUFPO1FBQ0xKLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQTBCO1FBQzNDRyxRQUFRO1FBQ1JDLFdBQVc7SUFDYjtJQUNBQyxVQUFVO1FBQ1JQLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQTRCO1FBQzdDTSxXQUFXO1lBQUM7WUFBRztTQUF5QztJQUMxRDtJQUNBQyxNQUFNO1FBQ0pULE1BQU1DO1FBQ05TLE1BQU07WUFBQztZQUFXO1NBQWE7UUFDL0JSLFVBQVU7WUFBQztZQUFNO1NBQTJCO0lBQzlDO0lBQ0FTLEtBQUs7UUFDSFgsTUFBTVk7UUFDTlYsVUFBVTtZQUFDO1lBQU07U0FBb0M7SUFDdkQ7SUFDQVcsUUFBUTtRQUNOYixNQUFNQztRQUNOUyxNQUFNO1lBQUM7WUFBUTtZQUFVO1NBQVE7UUFDakNSLFVBQVU7WUFBQztZQUFNO1NBQXdCO0lBQzNDO0lBQ0FZLGFBQWE7UUFDWGQsTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBZ0M7UUFDakRhLE9BQU87WUFBQztZQUFlO1NBQWlDO0lBQzFEO0lBQ0FDLGlCQUFpQjtRQUNmO1lBQ0VoQixNQUFNSix3REFBZSxDQUFDcUIsS0FBSyxDQUFDQyxRQUFRO1lBQ3BDQyxLQUFLO1FBQ1A7S0FDRDtJQUNEQyxZQUFZO1FBQ1ZwQixNQUFNcUI7UUFDTkMsU0FBUztJQUNYO0lBQ0FDLEtBQUs7UUFDSHZCLE1BQU1DO0lBQ1I7SUFDQXVCLFdBQVc7UUFDVHhCLE1BQU1ZO0lBQ1I7SUFDQWEsV0FBVztRQUNUekIsTUFBTVk7UUFDTlUsU0FBU1YsS0FBS2MsR0FBRztJQUNuQjtBQUNGO0FBRUEsaUVBQWU5Qix3REFBZSxDQUFDZ0MsSUFBSSxJQUFJaEMscURBQWMsQ0FBQyxRQUFRQyxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJTOlxcZnVyaW91cy1sZWFybmVycy1zb3dtaWthXFxhcHBcXG1vZGVsc1xcVXNlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHBcXG1vZGVsc1xcVXNlci5qc1xuXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgbmFtZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIHByb3ZpZGUgYSBuYW1lXCJdLFxuICAgIG1heGxlbmd0aDogWzYwLCBcIk5hbWUgY2Fubm90IGJlIG1vcmUgdGhhbiA2MCBjaGFyYWN0ZXJzXCJdLFxuICB9LFxuICBlbWFpbDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIHByb3ZpZGUgYW4gZW1haWxcIl0sXG4gICAgdW5pcXVlOiB0cnVlLFxuICAgIGxvd2VyY2FzZTogdHJ1ZSxcbiAgfSxcbiAgcGFzc3dvcmQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBwcm92aWRlIGEgcGFzc3dvcmRcIl0sXG4gICAgbWlubGVuZ3RoOiBbNiwgXCJQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVyc1wiXSxcbiAgfSxcbiAgcm9sZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBlbnVtOiBbXCJzdHVkZW50XCIsIFwiaW5zdHJ1Y3RvclwiXSxcbiAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIHNwZWNpZnkgdXNlciByb2xlXCJdLFxuICB9LFxuICBkb2I6IHtcbiAgICB0eXBlOiBEYXRlLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2UgcHJvdmlkZSB5b3VyIGRhdGUgb2YgYmlydGhcIl0sXG4gIH0sXG4gIGdlbmRlcjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBlbnVtOiBbXCJtYWxlXCIsIFwiZmVtYWxlXCIsIFwib3RoZXJcIl0sXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBzcGVjaWZ5IGdlbmRlclwiXSxcbiAgfSxcbiAgcGhvbmVOdW1iZXI6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBwcm92aWRlIGEgcGhvbmUgbnVtYmVyXCJdLFxuICAgIG1hdGNoOiBbL15bMC05XXsxMH0kLywgXCJQaG9uZSBudW1iZXIgbXVzdCBiZSAxMCBkaWdpdHNcIl0sXG4gIH0sXG4gIGVucm9sbGVkQ291cnNlczogW1xuICAgIHtcbiAgICAgIHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCxcbiAgICAgIHJlZjogXCJDb3Vyc2VcIixcbiAgICB9LFxuICBdLFxuICBpc1ZlcmlmaWVkOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAgb3RwOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICB9LFxuICBvdHBFeHBpcnk6IHtcbiAgICB0eXBlOiBEYXRlLFxuICB9LFxuICBjcmVhdGVkQXQ6IHtcbiAgICB0eXBlOiBEYXRlLFxuICAgIGRlZmF1bHQ6IERhdGUubm93LFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKFwiVXNlclwiLCBVc2VyU2NoZW1hKTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlVzZXJTY2hlbWEiLCJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwibWF4bGVuZ3RoIiwiZW1haWwiLCJ1bmlxdWUiLCJsb3dlcmNhc2UiLCJwYXNzd29yZCIsIm1pbmxlbmd0aCIsInJvbGUiLCJlbnVtIiwiZG9iIiwiRGF0ZSIsImdlbmRlciIsInBob25lTnVtYmVyIiwibWF0Y2giLCJlbnJvbGxlZENvdXJzZXMiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwiaXNWZXJpZmllZCIsIkJvb2xlYW4iLCJkZWZhdWx0Iiwib3RwIiwib3RwRXhwaXJ5IiwiY3JlYXRlZEF0Iiwibm93IiwibW9kZWxzIiwiVXNlciIsIm1vZGVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/models/User.js\n");

/***/ }),

/***/ "(rsc)/./app/utils/db.js":
/*!*************************!*\
  !*** ./app/utils/db.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.DATABASE || process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the DATABASE or MONGODB_URI environment variable inside .env\");\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function connectDB() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false,\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            console.log('MongoDB connected successfully');\n            return mongoose;\n        }).catch((error)=>{\n            console.error('MongoDB connection error:', error);\n            throw error;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvdXRpbHMvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGNBQWNDLFFBQVFDLEdBQUcsQ0FBQ0MsUUFBUSxJQUFJRixRQUFRQyxHQUFHLENBQUNGLFdBQVc7QUFFbkUsSUFBSSxDQUFDQSxhQUFhO0lBQ2hCLE1BQU0sSUFBSUksTUFDUjtBQUVKO0FBRUEsSUFBSUMsU0FBU0MsT0FBT1AsUUFBUTtBQUU1QixJQUFJLENBQUNNLFFBQVE7SUFDWEEsU0FBU0MsT0FBT1AsUUFBUSxHQUFHO1FBQUVRLE1BQU07UUFBTUMsU0FBUztJQUFLO0FBQ3pEO0FBRUEsZUFBZUM7SUFDYixJQUFJSixPQUFPRSxJQUFJLEVBQUU7UUFDZixPQUFPRixPQUFPRSxJQUFJO0lBQ3BCO0lBRUEsSUFBSSxDQUFDRixPQUFPRyxPQUFPLEVBQUU7UUFDbkIsTUFBTUUsT0FBTztZQUNYQyxnQkFBZ0I7WUFDaEJDLGlCQUFpQjtZQUNqQkMsb0JBQW9CO1FBQ3RCO1FBRUFSLE9BQU9HLE9BQU8sR0FBR1QsdURBQWdCLENBQUNDLGFBQWFVLE1BQU1LLElBQUksQ0FBQyxDQUFDaEI7WUFDekRpQixRQUFRQyxHQUFHLENBQUM7WUFDWixPQUFPbEI7UUFDVCxHQUFHbUIsS0FBSyxDQUFDLENBQUNDO1lBQ1JILFFBQVFHLEtBQUssQ0FBQyw2QkFBNkJBO1lBQzNDLE1BQU1BO1FBQ1I7SUFDRjtJQUVBLElBQUk7UUFDRmQsT0FBT0UsSUFBSSxHQUFHLE1BQU1GLE9BQU9HLE9BQU87SUFDcEMsRUFBRSxPQUFPWSxHQUFHO1FBQ1ZmLE9BQU9HLE9BQU8sR0FBRztRQUNqQixNQUFNWTtJQUNSO0lBRUEsT0FBT2YsT0FBT0UsSUFBSTtBQUNwQjtBQUVBLGlFQUFlRSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJTOlxcZnVyaW91cy1sZWFybmVycy1zb3dtaWthXFxhcHBcXHV0aWxzXFxkYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52LkRBVEFCQVNFIHx8IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xyXG5cclxuaWYgKCFNT05HT0RCX1VSSSkge1xyXG4gIHRocm93IG5ldyBFcnJvcihcclxuICAgIFwiUGxlYXNlIGRlZmluZSB0aGUgREFUQUJBU0Ugb3IgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnZcIlxyXG4gICk7XHJcbn1cclxuXHJcbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2U7XHJcblxyXG5pZiAoIWNhY2hlZCkge1xyXG4gIGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZSA9IHsgY29ubjogbnVsbCwgcHJvbWlzZTogbnVsbCB9O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0REIoKSB7XHJcbiAgaWYgKGNhY2hlZC5jb25uKSB7XHJcbiAgICByZXR1cm4gY2FjaGVkLmNvbm47XHJcbiAgfVxyXG5cclxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XHJcbiAgICBjb25zdCBvcHRzID0ge1xyXG4gICAgICBidWZmZXJDb21tYW5kczogZmFsc2UsXHJcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gICAgfTtcclxuXHJcbiAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkksIG9wdHMpLnRoZW4oKG1vbmdvb3NlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdNb25nb0RCIGNvbm5lY3RlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgcmV0dXJuIG1vbmdvb3NlO1xyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01vbmdvREIgY29ubmVjdGlvbiBlcnJvcjonLCBlcnJvcik7XHJcbiAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjYWNoZWQucHJvbWlzZSA9IG51bGw7XHJcbiAgICB0aHJvdyBlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNhY2hlZC5jb25uO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REI7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkRBVEFCQVNFIiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImNvbm5lY3REQiIsIm9wdHMiLCJidWZmZXJDb21tYW5kcyIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbm5lY3QiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/utils/db.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=S%3A%5Cfurious-learners-sowmika%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=S%3A%5Cfurious-learners-sowmika&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=S%3A%5Cfurious-learners-sowmika%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=S%3A%5Cfurious-learners-sowmika&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var S_furious_learners_sowmika_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.js */ \"(rsc)/./app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"S:\\\\furious-learners-sowmika\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.js\",\n    nextConfigOutput,\n    userland: S_furious_learners_sowmika_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj1TJTNBJTVDZnVyaW91cy1sZWFybmVycy1zb3dtaWthJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1TJTNBJTVDZnVyaW91cy1sZWFybmVycy1zb3dtaWthJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNxQjtBQUNsRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiUzpcXFxcZnVyaW91cy1sZWFybmVycy1zb3dtaWthXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIlM6XFxcXGZ1cmlvdXMtbGVhcm5lcnMtc293bWlrYVxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=S%3A%5Cfurious-learners-sowmika%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=S%3A%5Cfurious-learners-sowmika&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

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

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

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

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/bcryptjs","vendor-chunks/preact","vendor-chunks/object-hash","vendor-chunks/lru-cache","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=S%3A%5Cfurious-learners-sowmika%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=S%3A%5Cfurious-learners-sowmika&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();