exports.ids = [16,1,3,7];
exports.modules = {

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/services/index.vue?vue&type=template&id=7f6e5780&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"mt-12\">","</div>",[_c('Fiche')],1),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_c('Modalites')],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/services/index.vue?vue&type=template&id=7f6e5780&

// EXTERNAL MODULE: ./components/landing/services.vue + 4 modules
var services = __webpack_require__(49);

// EXTERNAL MODULE: ./components/fiche.vue + 2 modules
var fiche = __webpack_require__(73);

// EXTERNAL MODULE: ./components/landing/modalites.vue + 2 modules
var modalites = __webpack_require__(50);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/services/index.vue?vue&type=script&lang=js&
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
  layout: 'navbar',
  components: {
    Services: services["default"],
    Modalites: modalites["default"],
    Fiche: fiche["default"]
  }
});
// CONCATENATED MODULE: ./pages/services/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_servicesvue_type_script_lang_js_ = (servicesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/services/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_servicesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a837f36a"
  
)

/* harmony default export */ var pages_services = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Fiche: __webpack_require__(73).default})


/***/ }),

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

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/modalites.vue?vue&type=template&id=36c47314&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex flex-col py-4 mx-4 px-4 my-14 justify-between items-center"},[_vm._ssrNode("<div class=\"text-indigo-400 text-5xl mb-4\">\n        Modalités\n      </div> <div class=\"text-gray-400 md:mx-4 leading-6 md:leading-6 text-lg md:text-lg text-justify\"><p class=\"tracking-wide mt-2\">Nous proposons des cours d'anglais du niveau débutant au niveau avancé. Les 03 niveaux sont à savoir: <span class=\"text-gray-600\">débutant, intermédiaire et niveau avancé.</span></p> <p class=\"tracking-wide mt-2\">Chaque apprenant est évalué lors de son inscription pour vérifier son niveau d'anglais afin d'être correctement placé dans l'une des classes citées plutôt. </p> <p class=\"tracking-wide mt-2\">CAPLA vous propose des sessions de formation de <span class=\"text-gray-600 text-xl\"> 2 mois </span> avec une possibilité de continuer.</p></div> <div class=\"flex flex-col justify-between items-start mt-8\"><div class=\"text-indigo-400 my-2 text-lg md:text-xl\">Cours du soir : <span class=\"text-gray-400 text-sm md:text-xl\">Mardi et Jeudi</span> <span class=\"text-gray-400 text-sm md:text-xl\"> 17h-19h</span></div> <div class=\"text-indigo-400 my-2 text-lg md:text-xl\">Cours du weekend : <span class=\"text-gray-400 text-sm md:text-xl\">Samedi </span> <span class=\"text-gray-400 text-sm md:text-xl\"> 17h-20h</span></div> <div class=\"text-indigo-400 my-2 text-lg md:text-xl\">Cours en ligne : <span class=\"text-gray-400 text-sm md:text-xl\">2 séances par semaine </span></div></div> <div class=\"bg-gray-50 py-4 px-4 flex flex-col md:flex-row justify-center md:justify-center items-center w-full\"><div class=\"flex flex-col shadow-2xl rounded-md items-center text-indigo-50 px-10 py-6 bg-indigo-400 my-4 mx-auto md:mx-10\"><span class=\"material-symbols-outlined\">engineering</span> <p class=\"text-xl text-center text-white mt-2\">Professionels</p> <p class=\"text-2xl text-white mt-4 font-bold\">50.000 <span class=\"text-sm align-text-top\">FCFA</span></p></div> <div class=\"flex flex-col shadow-2xl rounded-md items-center text-indigo-50 px-10 py-6 bg-indigo-400 my-4 mx-auto md:mx-10\"><span class=\"material-symbols-outlined\">school</span> <p class=\"text-xl text-white text-center mt-2\">Etudiants</p> <p class=\"text-2xl text-white mt-4 font-bold\">40.000 <span class=\"text-sm align-text-top\">FCFA</span></p></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/landing/modalites.vue?vue&type=template&id=36c47314&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/landing/modalites.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7e6b83d4"
  
)

/* harmony default export */ var modalites = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/fiche.vue?vue&type=template&id=4f2da3d3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"md:mx-2"},[_vm._ssrNode("<div class=\"overflow-x-auto relative shadow-md sm:rounded-lg\"><table class=\"w-full text-sm text-left text-gray-600 dark:text-gray-400 text-left\"><thead class=\"text-xs text-white uppercase bg-indigo-400 dark:text-gray-400\"><tr><th scope=\"col\" class=\"py-3 px-6 text-center w-1/5\">Offres</th> <th scope=\"col\" class=\"py-3 px-6 text-center\">Objectifs</th> <th scope=\"col\" class=\"py-3 px-6 text-center\">Modules</th> <th scope=\"col\" class=\"py-3 px-6 text-center\">Public ciblé</th></tr></thead> <tbody><tr class=\"bg-white border-b dark:bg-gray-900 dark:border-gray-700\"><th scope=\"row\" class=\" py-4 px-4 w-1/5 font-medium text-gray-800  dark:text-white\">Anglais de la conversation</th> <td class=\"py-4 px-6 text-xs w-2/5\">\n                      Renforcer ou améliorer le niveau communicationnel de l'auditeur en situation d'entreprise ou dans la vie sociale.\n                  </td> <td class=\"py-4 px-6 w-1/5\"><p class=\"text-xs flex flex-row items-center mb-2 justify-start\"><span class=\"text-sm text-indigo-400 mr-1 material-symbols-outlined\">done</span>Présentation professionnelle</p> <p class=\"text-xs flex flex-row items-center mb-2 justify-start\"><span class=\"text-sm text-indigo-400 mr-1 material-symbols-outlined\">done</span>Réception physique et téléphonique</p> <p class=\"text-xs flex flex-row items-center mb-2 justify-start\"><span class=\"text-sm text-indigo-400 mr-1 material-symbols-outlined\">done</span>Différents types de langage: familier, soutenu, commun</p></td> <td class=\"py-4 px-6 w-1/5\"><p class=\"text-xs flex items-start mb-2 justify-start\"><span class=\"text-indigo-400 text-sm mr-1 material-symbols-outlined\">remove</span> Cadres d'entreprise</p> <p class=\"text-xs flex items-start mb-2 justify-start\"><span class=\"text-indigo-400 text-sm mr-1 material-symbols-outlined\">remove</span> Élèves et étudiants</p></td></tr> <tr class=\"bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-700\"><th scope=\"row\" class=\" py-4 px-4 w-1/5 font-medium text-gray-800  dark:text-white\">Business English ou anglais commercial</th> <td class=\"py-4 px-6 text-xs\">\n                      Comprendre, interpréter, savoir communiquer et interagir avec les clients en anglais commercial en entreprise.\n                  </td> <td class=\"py-4 px-6\"><p class=\"text-xs flex flex-row items-center mb-2 justify-start\"><span class=\"text-sm text-indigo-400 mr-1 material-symbols-outlined\">done</span>Technique de négociation et ventes</p> <p class=\"text-xs flex flex-row items-center mb-2 justify-start\"><span class=\"text-sm text-indigo-400 mr-1 material-symbols-outlined\">done</span>Rédaction de lettres commerciales</p> <p class=\"text-xs flex flex-row items-center mb-2 justify-start\"><span class=\"text-sm text-indigo-400 mr-1 material-symbols-outlined\">done</span>Bon de commande, Factures en anglais</p></td> <td class=\"py-4 px-6\"><p class=\"text-xs flex items-start mb-2 justify-start\"><span class=\"text-indigo-400 text-sm mr-1 material-symbols-outlined\">remove</span> Agent commercial</p> <p class=\"text-xs flex items-start mb-2 justify-start\"><span class=\"text-indigo-400 text-sm mr-1 material-symbols-outlined\">remove</span> Professionnels</p> <p class=\"text-xs flex items-start mb-2 justify-start\"><span class=\"text-indigo-400 text-sm mr-1 material-symbols-outlined\">remove</span> Hommes ou Femmes d'affaires</p></td></tr> <tr class=\"bg-white border-b dark:bg-gray-900 dark:border-gray-700\"><th scope=\"row\" class=\" py-4 px-4 w-1/5 font-medium text-gray-800  dark:text-white\">Anglais bancaire et financier</th> <td class=\"py-4 px-6 text-xs\">\n                      Comprendre, interpréter, savoir-faire une présentation de la compatibilité bancaire en anglais.\n                  </td> <td class=\"py-4 px-6\"><p class=\"text-xs flex flex-row items-center mb-2 justify-start\"><span class=\"text-sm text-indigo-400 mr-1 material-symbols-outlined\">done</span>Présentation états financiers en anglais</p> <p class=\"text-xs flex flex-row items-center mb-2 justify-start\"><span class=\"text-sm text-indigo-400 mr-1 material-symbols-outlined\">done</span>Techniques bancaires</p> <p class=\"text-xs flex flex-row items-center mb-2 justify-start\"><span class=\"text-sm text-indigo-400 mr-1 material-symbols-outlined\">done</span>Rédaction de rapport</p> <p class=\"text-xs flex flex-row items-center mb-2 justify-start\"><span class=\"text-sm text-indigo-400 mr-1 material-symbols-outlined\">done</span>Rédaction de lettres de correspondance en anglais</p></td> <td class=\"py-4 px-6\"><p class=\"text-xs flex items-start mb-2 justify-start\"><span class=\"text-indigo-400 text-sm mr-1 material-symbols-outlined\">remove</span> Professionnels de banque</p> <p class=\"text-xs flex items-start mb-2 justify-start\"><span class=\"text-indigo-400 text-sm mr-1 material-symbols-outlined\">remove</span> Financiers</p></td></tr> <tr class=\"bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-700\"><th scope=\"row\" class=\" py-4 px-4 w-1/5 font-medium text-gray-800  dark:text-white\">Anglais appliquée à la gestion de projet</th> <td class=\"py-4 px-6 text-xs\">\n                      Comprendre le processus d'élaboration, de management et suivi-évaluation de projet, savoir communiquer, interpréter les données en anglais.\n                  </td> <td class=\"py-4 px-6\"><p class=\"text-xs flex flex-row items-center mb-2 justify-start\"><span class=\"text-sm text-indigo-400 mr-1 material-symbols-outlined\">done</span>Élaboration de projet</p> <p class=\"text-xs flex flex-row items-center mb-2 justify-start\"><span class=\"text-sm text-indigo-400 mr-1 material-symbols-outlined\">done</span>Management de projet</p> <p class=\"text-xs flex flex-row items-center mb-2 justify-start\"><span class=\"text-sm text-indigo-400 mr-1 material-symbols-outlined\">done</span>Suivi-évaluation de projet</p> <p class=\"text-xs flex flex-row items-center mb-2 justify-start\"><span class=\"text-sm text-indigo-400 mr-1 material-symbols-outlined\">done</span>Rédaction de rapport</p></td> <td class=\"py-4 px-6\"><p class=\"text-xs flex items-start mb-2 justify-start\"><span class=\"text-indigo-400 text-sm mr-1 material-symbols-outlined\">remove</span> Agents de l'État</p> <p class=\"text-xs flex items-start mb-2 justify-start\"><span class=\"text-indigo-400 text-sm mr-1 material-symbols-outlined\">remove</span> Professionnels des ONG, Projets-programmes, Société civile, Collectivités territoriales</p></td></tr> <tr class=\"bg-white border-b dark:bg-gray-900 dark:border-gray-700\"><th scope=\"row\" class=\" py-4 px-4 w-1/5 font-medium text-gray-800  dark:text-white\">Techniques de rédaction de documents administratifs en anglais</th> <td class=\"py-4 px-6 text-xs\">\n                      Initier les participants à différentes techniques de rédaction des correspondances administratives en anglais.\n                  </td> <td class=\"py-4 px-6\"><p class=\"text-xs flex flex-row items-center mb-2 justify-start\"><span class=\"text-sm text-indigo-400 mr-1 material-symbols-outlined\">done</span>CV et Lettre de Motivation</p> <p class=\"text-xs flex flex-row items-center mb-2 justify-start\"><span class=\"text-sm text-indigo-400 mr-1 material-symbols-outlined\">done</span>Rapport d'Activités</p> <p class=\"text-xs flex flex-row items-center mb-2 justify-start\"><span class=\"text-sm text-indigo-400 mr-1 material-symbols-outlined\">done</span>Note de service</p> <p class=\"text-xs flex flex-row items-center mb-2 justify-start\"><span class=\"text-sm text-indigo-400 mr-1 material-symbols-outlined\">done</span>Procés-verbaux</p> <p class=\"text-xs flex flex-row items-center mb-2 justify-start\"><span class=\"text-sm text-indigo-400 mr-1 material-symbols-outlined\">done</span>Correspondances administratives</p> <p class=\"text-xs flex flex-row items-center mb-2 justify-start\"><span class=\"text-sm text-indigo-400 mr-1 material-symbols-outlined\">done</span>Comptes rendus de réunions professionnelles</p></td> <td class=\"py-4 px-6\"><p class=\"text-xs flex items-start mb-2 justify-start\"><span class=\"text-indigo-400 text-sm mr-1 material-symbols-outlined\">remove</span> Agents de l'État</p> <p class=\"text-xs flex items-start mb-2 justify-start\"><span class=\"text-indigo-400 text-sm mr-1 material-symbols-outlined\">remove</span> Professionnels des ONG, Projets-programmes, Société civile, Collectivités territoriales</p></td></tr> <tr class=\"bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-700\"><th scope=\"row\" class=\" py-4 px-4 w-1/5 font-medium text-gray-800  dark:text-white\">Anglais médical</th> <td class=\"py-4 px-6 text-xs\">\n                    Acquérir les connaissances en anglais médical. Travailler et communiquer en anglais dans le milieu de la santé et pour la prise en charge des besoins des patients.\n                  </td> <td class=\"py-4 px-6\"><p class=\"text-xs flex flex-row items-center mb-2 justify-start\"><span class=\"text-sm text-indigo-400 mr-1 material-symbols-outlined\">done</span>Se présenter au patient</p> <p class=\"text-xs flex flex-row items-center mb-2 justify-start\"><span class=\"text-sm text-indigo-400 mr-1 material-symbols-outlined\">done</span>Questionner le patient sur sa santé (état, symptômes, antécédents, allergies...)</p> <p class=\"text-xs flex flex-row items-center mb-2 justify-start\"><span class=\"text-sm text-indigo-400 mr-1 material-symbols-outlined\">done</span>Réviser les techniques grammaticales de base et lexicales professionnelles en Anglais.</p></td> <td class=\"py-4 px-6\"><p class=\"text-xs flex items-start mb-2 justify-start\"><span class=\"text-indigo-400 text-sm mr-1 material-symbols-outlined\">remove</span> Agents de santé</p></td></tr></tbody></table></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/fiche.vue?vue&type=template&id=4f2da3d3&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/fiche.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2de985fa"
  
)

/* harmony default export */ var fiche = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map