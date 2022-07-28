exports.ids = [2];
exports.modules = {

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("5c468ea8", content, true)

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n\n.vueperslide{\n  white-space:normal;\n  background-size:cover;\n  flex-shrink:0;\n  display:block;\n  width:100%;\n  position:relative\n}\n\n.vueperslide--clone-1{\n  position:absolute;\n  top:0;\n  bottom:0;\n  right:100%\n}\n\n.vueperslides--rtl .vueperslide--clone-1{\n  right:auto;\n  left:100%\n}\n\n.vueperslide[href]{\n  -webkit-user-drag:none\n}\n\n.vueperslide__image{\n  background-size:cover\n}\n\n.vueperslide__image,.vueperslide__loader{\n  position:absolute;\n  top:0;\n  left:0;\n  right:0;\n  bottom:0\n}\n\n.vueperslide__loader{\n  display:flex;\n  flex-direction:column;\n  align-items:center;\n  justify-content:center\n}\n\n.vueperslide__content-wrapper:not(.vueperslide__content-wrapper--outside-top):not(.vueperslide__content-wrapper--outside-bottom){\n  height:100%;\n  margin:auto\n}\n\n.vueperslides--fade .vueperslide{\n  position:absolute;\n  top:0;\n  left:0;\n  right:0;\n  bottom:0;\n  opacity:0;\n  transition:opacity ease-in-out;\n  transition-duration:inherit\n}\n\n.vueperslides--fade .vueperslide--active,.vueperslides--fade .vueperslide--visible{\n  z-index:1;\n  opacity:1\n}\n\n.vueperslides--slide-image-inside .vueperslide{\n  overflow:hidden\n}\n\n.vueperslides--3d .vueperslide{\n  position:absolute;\n  z-index:-1;\n  height:100%\n}\n\n.vueperslides--3d .vueperslide--active,.vueperslides--3d .vueperslide--next-slide,.vueperslides--3d .vueperslide--previous-slide{\n  z-index:0\n}\n\n.vueperslides--3d .vueperslide--active{\n  z-index:1\n}\n\n.vueperslides--3d .vueperslide[face=front]{\n  transform:rotateY(90deg) translateX(-50%) rotateY(-90deg)\n}\n\n.vueperslides--3d .vueperslide[face=right]{\n  transform:rotateY(90deg) translateX(50%);\n  transform-origin:100% 0\n}\n\n.vueperslides--3d .vueperslide[face=back]{\n  transform:rotateY(270deg) translateX(-50%) rotateY(-90deg)\n}\n\n.vueperslides--3d .vueperslide[face=left]{\n  transform:rotateY(270deg) translateX(-50%);\n  transform-origin:0 0\n}\n\n.vueperslides:not(.no-shadow):not(.vueperslides--3d) .vueperslides__parallax-wrapper:after,.vueperslides:not(.no-shadow):not(.vueperslides--3d) .vueperslides__parallax-wrapper:before{\n  content:\"\";\n  position:absolute;\n  bottom:100%;\n  left:-1em;\n  right:-1em;\n  height:2em;\n  box-shadow:0 0 20px rgba(0,0,0,.25);\n  z-index:2\n}\n\n.vueperslides:not(.no-shadow):not(.vueperslides--3d) .vueperslides__parallax-wrapper:after{\n  top:100%;\n  bottom:auto\n}\n\n.vueperslides__arrows{\n  color:#fff\n}\n\n.vueperslides__arrows--outside{\n  color:currentColor\n}\n\n.vueperslides__arrow{\n  top:50%;\n  background-color:transparent;\n  border:none;\n  opacity:.7\n}\n\n.vueperslides--rtl .vueperslides__arrow--next,.vueperslides__arrow--prev{\n  right:auto;\n  left:.5em\n}\n\n.vueperslides--rtl .vueperslides__arrow--prev,.vueperslides__arrow--next{\n  left:auto;\n  right:.5em\n}\n\n.vueperslides__arrow:hover{\n  opacity:1\n}\n\n.vueperslides--rtl .vueperslides__arrows--outside .vueperslides__arrow--next,.vueperslides__arrows--outside .vueperslides__arrow--prev{\n  right:auto;\n  left:-3.5em\n}\n\n.vueperslides--rtl .vueperslides__arrows--outside .vueperslides__arrow--prev,.vueperslides__arrows--outside .vueperslides__arrow--next{\n  left:auto;\n  right:-3.5em\n}\n\n.vueperslides__paused{\n  top:.7em;\n  right:.7em;\n  opacity:0;\n  text-shadow:0 0 3px rgba(0,0,0,.4);\n  z-index:1\n}\n\n.vueperslides:hover .vueperslides__paused{\n  opacity:1\n}\n\n.vueperslides__bullets:not(.vueperslides__bullets--outside){\n  color:#fff\n}\n\n.vueperslides__bullet{\n  margin:1.5em .6em;\n  padding:0;\n  border:none;\n  background:none\n}\n\n.vueperslides__bullet .default{\n  width:12px;\n  height:12px;\n  border-radius:12px;\n  border:1px solid;\n  background-color:transparent;\n  box-shadow:0 0 1px rgba(0,0,0,.5),0 0 3px rgba(0,0,0,.3);\n  transition:.4s ease-in-out;\n  box-sizing:border-box\n}\n\n.vueperslides__bullet .default span{\n  display:none\n}\n\n.vueperslides__bullet--active .default{\n  border-width:6px\n}\n\n.vueperslide,.vueperslide__image{\n  background-position:50%\n}\n\n.vueperslide__video{\n  outline:none\n}\n\n.vueperslide--no-pointer-events:before{\n  content:\"\";\n  position:absolute;\n  top:0;\n  bottom:0;\n  left:0;\n  right:0\n}\n\n.vueperslide__content-wrapper:not(.vueperslide__content-wrapper--outside-top):not(.vueperslide__content-wrapper--outside-bottom){\n  display:flex;\n  flex:1 1 auto;\n  flex-direction:column;\n  align-items:center;\n  justify-content:center;\n  text-align:center\n}\n\n.vueperslide--has-image-inside .vueperslide__content-wrapper,.vueperslide--has-video .vueperslide__content-wrapper,.vueperslide__content-wrapper.parallax-fixed-content{\n  position:absolute;\n  z-index:2;\n  top:0;\n  bottom:0;\n  left:0;\n  right:0;\n  display:flex;\n  flex-direction:column;\n  justify-content:center;\n  align-items:center;\n  pointer-events:none\n}\n\n.vueperslides{\n  position:relative\n}\n\n.vueperslides--fixed-height .vueperslide,.vueperslides--fixed-height .vueperslides__inner,.vueperslides--fixed-height .vueperslides__parallax-wrapper{\n  height:inherit\n}\n\n.vueperslides--fixed-height .vueperslides__parallax-wrapper{\n  padding-bottom:0!important\n}\n\n.vueperslides--fixed-height.vueperslides--bullets-outside{\n  margin-bottom:4em\n}\n\n.vueperslides__inner{\n  position:relative;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none\n}\n\n.vueperslides__parallax-wrapper{\n  position:relative;\n  overflow:hidden\n}\n\n.vueperslides--3d .vueperslides__parallax-wrapper{\n  overflow:visible\n}\n\n.vueperslides__track{\n  position:absolute;\n  top:0;\n  height:100%;\n  left:0;\n  right:0;\n  overflow:hidden;\n  z-index:1\n}\n\n.vueperslides--parallax .vueperslides__track{\n  height:200%;\n  transform:translateY(0)\n}\n\n.vueperslides--touchable .vueperslides__track{\n  cursor:ew-resize;\n  cursor:-webkit-grab;\n  cursor:grab\n}\n\n.vueperslides--touchable .vueperslides__track--dragging,.vueperslides--touchable .vueperslides__track--mousedown{\n  cursor:-webkit-grabbing;\n  cursor:grabbing\n}\n\n.vueperslides--3d .vueperslides__track{\n  overflow:visible;\n  perspective:100em\n}\n\n.vueperslides__track-inner{\n  white-space:nowrap;\n  transition:transform .5s ease-in-out;\n  height:100%;\n  display:flex\n}\n\n.vueperslides--no-animation .vueperslides__track-inner{\n  transition-duration:0s!important\n}\n\n.vueperslides--fade .vueperslides__track-inner{\n  white-space:normal;\n  transition:none\n}\n\n.vueperslides--3d .vueperslides__track-inner{\n  transform-style:preserve-3d\n}\n\n.vueperslides__track--mousedown .vueperslides__track-inner{\n  transition:transform .25s ease-in-out!important\n}\n\n.vueperslides__track--dragging .vueperslides__track-inner{\n  transition:none\n}\n\n.vueperslides__arrow{\n  position:absolute;\n  font-size:inherit;\n  color:inherit;\n  text-align:center;\n  transform:translateY(-50%);\n  cursor:pointer;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none;\n  outline:none;\n  z-index:2;\n  line-height:1\n}\n\n.vueperslides__arrow,.vueperslides__arrow svg{\n  transition:.3s ease-in-out\n}\n\n.vueperslides__arrow svg{\n  vertical-align:middle;\n  stroke:currentColor;\n  fill:none;\n  width:3.5em;\n  padding:1em;\n  stroke-width:1;\n  box-sizing:border-box\n}\n\n.vueperslides__arrow svg:hover{\n  stroke-width:1.3\n}\n\n.vueperslides__paused{\n  position:absolute;\n  transition:.3s ease-in-out\n}\n\n.vueperslides__bullets{\n  display:flex;\n  justify-content:center;\n  position:absolute;\n  bottom:0;\n  left:0;\n  right:0\n}\n\n.vueperslides__bullets--outside{\n  position:relative\n}\n\n.vueperslides__bullet,.vueperslides__bullets button{\n  cursor:pointer;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none;\n  outline:none;\n  z-index:2;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  color:inherit\n}\n\n.vueperslides__bullet::-moz-focus-inner,.vueperslides__bullets button::-moz-focus-inner{\n  border:0\n}\n\n.vueperslides__fractions{\n  position:absolute;\n  top:.8em;\n  left:.5em;\n  z-index:2;\n  padding:.2em 1em;\n  border:1px solid hsla(0,0%,100%,.5);\n  border-radius:2em;\n  background:hsla(0,0%,100%,.2);\n  color:#fff\n}\n\n.vueperslides__progress{\n  position:absolute;\n  top:0;\n  left:0;\n  right:0;\n  z-index:2;\n  height:6px;\n  color:rgba(0,0,0,.7)\n}\n\n.vueperslides__progress>*{\n  position:absolute;\n  top:0;\n  bottom:0;\n  left:0;\n  background:currentColor;\n  transition:.3s ease-in-out\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grid.952772a.png";

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0bb91175", content, true, context)
};

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/certificate.f79afeb.png";

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/degree0.883dd46.jpeg";

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/degree1.08f259c.jpeg";

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/degree2.369fd68.jpeg";

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_certificat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_certificat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_certificat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_certificat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_certificat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.vueperslides__bullet .default{\n  background-color:#e0e7ff;\n  border:none;\n  box-shadow:none;\n  transition:.3s;\n  width:16px;\n  height:16px\n}\n.vueperslides__bullet--active .default{\n  background-color:#818cf8\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/certificat.vue?vue&type=template&id=91218fda&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"flex flex-col-reverse lg:flex-row py-4 px-4 justify-center lg:justify-between items-center my-10 mx-auto md:mx-12  mb-10 mt-24\">","</div>",[_vm._ssrNode("<div id=\"certificat_text w-full lg:w-1/3 text-gray-200 mx-2\"><p class=\"text-gray-400 md:text-gray-500 self-center text-3xl lg:text-5xl tracking-wide my-4 mx-2\">\n                Ce que vous offre la formation avec <span class=\"text-indigo-400\">Capla</span></p> <div class=\"text-gray-400 text-xl lg:text-2xl my-4 flex items-center\"><span class=\"material-symbols-outlined text-green-500 mx-2\">task_alt</span> Bien communiquer en anglais</div> <div class=\"text-gray-400 text-xl lg:text-2xl my-4 flex items-center\"><span class=\"material-symbols-outlined text-green-500 mx-2\">task_alt</span> Capacité à parler en public</div> <div class=\"text-gray-400 text-xl lg:text-2xl my-4 flex items-center justify-start\"><span class=\"material-symbols-outlined text-green-500 mx-2\">task_alt</span> Certificat de maitrise de langue anglaise <img"+(_vm._ssrAttr("src",__webpack_require__(56)))+" alt=\"certificat\" class=\"w-10 h-10 ml-2\"></div></div> "),_vm._ssrNode("<div class=\" ml-4 relative mb-8 md:mb-0 mx-2 w-full lg:w-2/3\">","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(45)))+" alt class=\"absolute -top-10 -right-4 md:-top-12 md:-right-12 z-10 w-20 h-20 md:w-32 md:h-32\"> "),_c('vueper-slides',{staticClass:"no-shadow h-full",attrs:{"bullets-outside":"","transition-speed":"350","breakpoints":_vm.breakpoint,"fixed-height":"500px","arrows":false,"autoplay":"","fade":""}},_vm._l((_vm.certificat_photos),function(elem,i){return _c('vueper-slide',{key:i,staticClass:"rounded-md drop-shadow-lg",attrs:{"image":elem.image}})}),1),_vm._ssrNode(" <img"+(_vm._ssrAttr("src",__webpack_require__(45)))+" alt class=\"absolute bottom-0 -left-4 md:-bottom-2 md:-left-10 z-0 w-20 h-20 md:w-32 md:h-32\">")],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/landing/certificat.vue?vue&type=template&id=91218fda&

// CONCATENATED MODULE: ./assets/js/certificat.js
const photos = [{
  image: __webpack_require__(57),
  title: 'Céremonie de remise de diplômes'
}, {
  image: __webpack_require__(58),
  title: 'Céremonie de remise de diplômes'
}, {
  image: __webpack_require__(59),
  title: 'Céremonie de remise de diplômes'
}];
const breakpoints = {
  1200: {
    slideRatio: 1 / 6,
    arrows: false
  },
  900: {
    slideRatio: 1 / 3,
    arrows: false
  },
  600: {
    slideRatio: 6 / 10,
    arrows: false,
    bulletsOutside: true
  },
  // The order you list breakpoints does not matter, Vueper Slides will sort them for you.
  1100: {
    slideRatio: 1 / 2,
    arrows: false
  }
};

// EXTERNAL MODULE: external "vueperslides"
var external_vueperslides_ = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/vueperslides/dist/vueperslides.css
var vueperslides = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/certificat.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var certificatvue_type_script_lang_js_ = ({
  components: {
    VueperSlides: external_vueperslides_["VueperSlides"],
    VueperSlide: external_vueperslides_["VueperSlide"]
  },

  data() {
    return {
      certificat_photos: photos,
      breakpoint: breakpoints
    };
  }

});
// CONCATENATED MODULE: ./components/landing/certificat.vue?vue&type=script&lang=js&
 /* harmony default export */ var landing_certificatvue_type_script_lang_js_ = (certificatvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/landing/certificat.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(60)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  landing_certificatvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0ecc9df0"
  
)

/* harmony default export */ var certificat = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=landing-certificat.js.map