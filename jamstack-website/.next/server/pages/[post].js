(function() {
var exports = {};
exports.id = "pages/[post]";
exports.ids = ["pages/[post]"];
exports.modules = {

/***/ "./pages/[post].js":
/*!*************************!*\
  !*** ./pages/[post].js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\Bet\xFCl \xDCnver\\Desktop\\JAMStack\\jamstack-website\\pages\\[post].js";

// pages/posts/[id].js
// for dynamic pages
//page
function Post({
  post
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: post.title
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 12
  }, this);
} // This function gets called at build time


async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(`${"http://localhost:1337"}/posts`);
  const posts = await res.json(); // Get the paths we want to pre-render based on posts

  const paths = posts.map(post => ({
    params: {
      post: post.id.toString()
    }
  })); // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.

  return {
    paths,
    fallback: false
  };
} // This also gets called at build time

async function getStaticProps({
  params
}) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`${"http://localhost:1337"}/posts/${params.post}`);
  const post = await res.json(); // Pass post data to the page via props

  return {
    props: {
      post
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/[post].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9wYWdlcy9bcG9zdF0uanMiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiUG9zdCIsInBvc3QiLCJ0aXRsZSIsImdldFN0YXRpY1BhdGhzIiwicmVzIiwiZmV0Y2giLCJwcm9jZXNzIiwicG9zdHMiLCJqc29uIiwicGF0aHMiLCJtYXAiLCJwYXJhbXMiLCJpZCIsInRvU3RyaW5nIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBLFNBQVNBLElBQVQsQ0FBYztBQUFFQztBQUFGLENBQWQsRUFBd0I7QUFDcEIsc0JBQU87QUFBQSxjQUFNQSxJQUFJLENBQUNDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0QsQyxDQUVEOzs7QUFDTyxlQUFlQyxjQUFmLEdBQWdDO0FBQ3JDO0FBQ0EsUUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQUFFQyx1QkFBZ0MsUUFBcEMsQ0FBdkI7QUFDQSxRQUFNQyxLQUFLLEdBQUcsTUFBTUgsR0FBRyxDQUFDSSxJQUFKLEVBQXBCLENBSHFDLENBS3JDOztBQUNBLFFBQU1DLEtBQUssR0FBR0YsS0FBSyxDQUFDRyxHQUFOLENBQVdULElBQUQsS0FBVztBQUNqQ1UsVUFBTSxFQUFFO0FBQUVWLFVBQUksRUFBRUEsSUFBSSxDQUFDVyxFQUFMLENBQVFDLFFBQVI7QUFBUjtBQUR5QixHQUFYLENBQVYsQ0FBZCxDQU5xQyxDQVVyQztBQUNBOztBQUNBLFNBQU87QUFBRUosU0FBRjtBQUFTSyxZQUFRLEVBQUU7QUFBbkIsR0FBUDtBQUNELEMsQ0FFRDs7QUFDTyxlQUFlQyxjQUFmLENBQThCO0FBQUVKO0FBQUYsQ0FBOUIsRUFBMEM7QUFDL0M7QUFDQTtBQUNBLFFBQU1QLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUUsR0FBRUMsdUJBQWdDLFVBQVNLLE1BQU0sQ0FBQ1YsSUFBSyxFQUF6RCxDQUF2QjtBQUNBLFFBQU1BLElBQUksR0FBRyxNQUFNRyxHQUFHLENBQUNJLElBQUosRUFBbkIsQ0FKK0MsQ0FNL0M7O0FBQ0EsU0FBTztBQUFFUSxTQUFLLEVBQUU7QUFBRWY7QUFBRjtBQUFULEdBQVA7QUFDRDtBQUVELCtEQUFlRCxJQUFmLEU7Ozs7Ozs7Ozs7O0FDbkNGLG1EIiwiZmlsZSI6InBhZ2VzL1twb3N0XS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL3Bvc3RzL1tpZF0uanNcclxuLy8gZm9yIGR5bmFtaWMgcGFnZXNcclxuXHJcbi8vcGFnZVxyXG5mdW5jdGlvbiBQb3N0KHsgcG9zdCB9KSB7XHJcbiAgICByZXR1cm4gPGRpdj57cG9zdC50aXRsZX08L2Rpdj5cclxuICB9XHJcbiAgXHJcbiAgLy8gVGhpcyBmdW5jdGlvbiBnZXRzIGNhbGxlZCBhdCBidWlsZCB0aW1lXHJcbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgLy8gQ2FsbCBhbiBleHRlcm5hbCBBUEkgZW5kcG9pbnQgdG8gZ2V0IHBvc3RzXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9wb3N0c2ApXHJcbiAgICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKClcclxuICBcclxuICAgIC8vIEdldCB0aGUgcGF0aHMgd2Ugd2FudCB0byBwcmUtcmVuZGVyIGJhc2VkIG9uIHBvc3RzXHJcbiAgICBjb25zdCBwYXRocyA9IHBvc3RzLm1hcCgocG9zdCkgPT4gKHtcclxuICAgICAgcGFyYW1zOiB7IHBvc3Q6IHBvc3QuaWQudG9TdHJpbmcoKSB9LFxyXG4gICAgfSkpXHJcbiAgXHJcbiAgICAvLyBXZSdsbCBwcmUtcmVuZGVyIG9ubHkgdGhlc2UgcGF0aHMgYXQgYnVpbGQgdGltZS5cclxuICAgIC8vIHsgZmFsbGJhY2s6IGZhbHNlIH0gbWVhbnMgb3RoZXIgcm91dGVzIHNob3VsZCA0MDQuXHJcbiAgICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gVGhpcyBhbHNvIGdldHMgY2FsbGVkIGF0IGJ1aWxkIHRpbWVcclxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gICAgLy8gcGFyYW1zIGNvbnRhaW5zIHRoZSBwb3N0IGBpZGAuXHJcbiAgICAvLyBJZiB0aGUgcm91dGUgaXMgbGlrZSAvcG9zdHMvMSwgdGhlbiBwYXJhbXMuaWQgaXMgMVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH0vcG9zdHMvJHtwYXJhbXMucG9zdH1gKVxyXG4gICAgY29uc3QgcG9zdCA9IGF3YWl0IHJlcy5qc29uKClcclxuICBcclxuICAgIC8vIFBhc3MgcG9zdCBkYXRhIHRvIHRoZSBwYWdlIHZpYSBwcm9wc1xyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgcG9zdCB9IH1cclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgUG9zdFxyXG4gICIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==