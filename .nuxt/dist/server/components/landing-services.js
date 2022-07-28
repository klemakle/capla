exports.ids = [7];
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

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./evolution0.png": 40,
	"./evolution1.png": 41,
	"./evolution2.png": 42,
	"./evolution3.png": 43,
	"./evolution4.png": 44
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
webpackContext.id = 39;

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/evolution0.1439499.png";

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/evolution1.23e2873.png";

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/evolution2.82b4159.png";

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/evolution3.8ced070.png";

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/evolution4.66f6ba0.png";

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/services.vue?vue&type=template&id=2799f1cb&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"flex flex-col md:flex-row bg-gray-50 mx-auto my-12 md:my-20 py-10 px-10 w-full \"><div class=\"md:w-2/3 lg:w-1/2 w-full h-28 p-4 md:px-2 text-gray-600\"><p class=\"text-lg md:text-sm lg:text-3xl\">Ce que nous faisons au <span class=\"text-indigo-500 \">Capla</span></p></div> "+(_vm._ssrList((_vm.type_anglais),function(n,index){return ("<div class=\"bg-white card border-0 border-gray-200 flex flex-col rounded-xl py-2 px-4 md:px-2 lg:px-4 justify-start mb-2 w-full md:w-full lg:w-1/2 mx-2 ease-in duration-200 hover:shadow-md\"><div class=\"photo w-16 bg-indigo-100 rounded-md md:h-12 lg:h-auto mb-1 mt-2 px-2 md:py-1 lg:py-1\"><img"+(_vm._ssrAttr("src",__webpack_require__(39)("./evolution" + index + ".png")))+" alt=\"leader\" class=\"w-10 lg:w-full h-10 lg:h-auto\"></div> <div class=\"title text-xs lg:text-xs items-start  text-gray-600 my-1\">"+_vm._ssrEscape(_vm._s(n.text))+"</div> <div class=\"text-gray-400 my-1 w-full items-start text-xs lg:text-sm\">"+_vm._ssrEscape(_vm._s(n.description))+"</div></div>")}))+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/landing/services.vue?vue&type=template&id=2799f1cb&

// EXTERNAL MODULE: ./assets/js/text.js
var js_text = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/services.vue?vue&type=script&lang=js&
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

/* harmony default export */ var servicesvue_type_script_lang_js_ = ({
  data() {
    return {
      type_anglais: js_text["b" /* services */]
    };
  }

});
// CONCATENATED MODULE: ./components/landing/services.vue?vue&type=script&lang=js&
 /* harmony default export */ var landing_servicesvue_type_script_lang_js_ = (servicesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/landing/services.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  landing_servicesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "775f3f80"
  
)

/* harmony default export */ var services = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=landing-services.js.map