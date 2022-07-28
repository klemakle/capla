exports.ids = [8];
exports.modules = {

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return presentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return testimonials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return services; });
const presentation = `Le Centre d’Apprentissage Pratique de la Langue Anglaise (CAPLA) est une structure d’accompagnement des professionnels, étudiants et élèves pour l'expression écrite et orale de l’Anglais qui constitue de nos jours un outil incontournable dans le monde du travail`;
const testimonials = [{
  fullname: "Mouhamed Nar Diagne",
  fonction: "Auditeur",
  text: `L'anglais est devenu une langue incontournable dans le monde. Beaucoup ont raté des opportunités du fait de la non-maîtrise de ce dernier.
        CAPLA (Centre d'Apprentissage Pratique de la Langue Anglaise) vous permet d'avoir des bases solides à travers des formations enrichissantes et des formateurs qui sont à l'écoute des apprenants. `
}, {
  fullname: "Pierre FAYE",
  fonction: "Ingénieur génie mécanique",
  text: `À CAPLA, tout le monde trouve son compte. L’ambiance qui règne au sein de l’établissement et la générosité des professeurs m’ont aidé à mieux apprendre. Les cours sont pertinents et les apprenants sont fortement motivés à prendre la parole, ce qui a très vite amélioré mon expression orale. C’est vraiment facile d’apprendre l’Anglais à CAPLA`
}, {
  fullname: "Tchioukoye Oumar SOW ",
  fonction: "Chef de projets",
  text: `Depuis toujours, j’ai eu de grosses difficultés en anglais, surtout dans la pratique. Il y’a quelques mois j’ai enfin décidé de sauter le pas et m’inscrire à CAPLA et depuis j’ai senti une nette amélioration de mon niveau d’anglais. 
        Les cours étant adaptés à mes besoins, avec une équipe plus que dynamique et surtout très à l’écoute de nos besoins, j’ai pu travailler ma compréhension de langue et fluidité de mon expression. `
}];
const services = [{
  text: "Anglais général",
  description: "Renforcer et améliorer la communication de l’auditeur en situation d’entreprise et dans la vie sociale."
}, {
  text: "Management de projet",
  description: "Comprendre le processus d’élaboration, de management et suivi-évaluation de projet. Savoir communiquer, interpréter les données en anglais"
}, {
  text: "Anglais commercial",
  description: "Comprendre, interpréter, savoir communiquer et interagir avec les clients en anglais commercial en entreprise"
}, {
  text: "Anglais bancaire et financier",
  description: "Comprendre, interpréter et savoir faire une présentation de la comptabilité bancaire en anglais"
}];


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("183343f5", content, true, context)
};

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./temoin0.png": 63,
	"./temoin1.png": 64,
	"./temoin2.png": 65
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 62;

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/temoin0.5093203.png";

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/temoin1.5d103fd.png";

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/temoin2.b755197.png";

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_temoignage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_temoignage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_temoignage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_temoignage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_temoignage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(36);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(68);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n@font-face{\n  font-family:Summer;\n\n  src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")\n}\n.font-summer{\n  font-family:Summer\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Summer Dreams.9adf5fa.ttf";

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/temoignage.vue?vue&type=template&id=b54bb7ae&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"flex flex-col justify-between my-20 mx-auto px-10 py-5\"><div class=\"text-3xl md:text-5xl w-full md:w-1/2 text-gray-500 tracking-wider font-medium\"><p>Qu'est ce qu'on dit à propos nous ?</p></div> <div class=\"flex flex-col md:flex-row justify-between mt-8 md:mt-16\">"+(_vm._ssrList((_vm.testimonials),function(temoin,n){return ("<div class=\"flex flex-col  md:mx-8 my-8 w-full md:w-1/3\"><div class=\"flex flex-col md:flex-col items-center \"><div class=\"w-1/4 h-auto mb-2\"><img"+(_vm._ssrAttr("src",__webpack_require__(62)("./temoin" + n + ".png")))+" alt class=\"w-auto h-auto rounded-full shadow-lg\"></div> <div class=\"flex flex-col items-center w-auto mx-6\"><p class=\"text-gray-500 text-xl text-center md:text-left font-summer\">"+_vm._ssrEscape(_vm._s(temoin.fullname))+"</p> <p class=\"text-gray-400 text-center md:text-lef font-summer\">"+_vm._ssrEscape(" "+_vm._s(temoin.fonction))+"</p></div></div> <div class=\"mt-4 text-gray-400 my-2 w-full text-justify text-sm md:text-base font-summer italic\">"+_vm._ssrEscape(_vm._s(temoin.text))+"</div></div>")}))+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/landing/temoignage.vue?vue&type=template&id=b54bb7ae&

// EXTERNAL MODULE: ./assets/js/text.js
var js_text = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/temoignage.vue?vue&type=script&lang=js&
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

/* harmony default export */ var temoignagevue_type_script_lang_js_ = ({
  components: {},

  data() {
    return {
      testimonials: js_text["c" /* testimonials */]
    };
  }

});
// CONCATENATED MODULE: ./components/landing/temoignage.vue?vue&type=script&lang=js&
 /* harmony default export */ var landing_temoignagevue_type_script_lang_js_ = (temoignagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/landing/temoignage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(66)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  landing_temoignagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3aded4e4"
  
)

/* harmony default export */ var temoignage = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=landing-temoignage.js.map