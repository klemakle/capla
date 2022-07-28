exports.ids = [15,2,3,4,5,6,7,8];
exports.modules = Array(35).concat([
/* 35 */
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
/* 36 */
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("5c468ea8", content, true)

/***/ }),
/* 38 */
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
/* 39 */
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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/evolution0.1439499.png";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/evolution1.23e2873.png";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/evolution2.82b4159.png";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/evolution3.8ced070.png";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/evolution4.66f6ba0.png";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grid.952772a.png";

/***/ }),
/* 46 */
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
/* 47 */
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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(70);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4fe5ee87", content, true, context)
};

/***/ }),
/* 49 */
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
/* 50 */
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
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/capla.c705dad.svg";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/certificate.f79afeb.png";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/degree0.883dd46.jpeg";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/degree1.08f259c.jpeg";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/degree2.369fd68.jpeg";

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_certificat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_certificat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_certificat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_certificat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_certificat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 61 */
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
/* 62 */
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/temoin0.5093203.png";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/temoin1.5d103fd.png";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/temoin2.b755197.png";

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_temoignage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_temoignage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_temoignage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_temoignage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_temoignage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 67 */
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Summer Dreams.9adf5fa.ttf";

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_partner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_partner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_partner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_partner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_partner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(36);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(71);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n@font-face{\n  font-family:Russo;\n\n  src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")\n}\n.partenaires,.partner{\n  font-family:Russo\n}\n.partner{\n  display:flex;\n  justify-content:center;\n  align-items:center\n}\n.partner>a{\n  text-align:center;\n  transition:all .25s ease;\n  --tw-text-opacity:1;\n  color:rgba(209, 213, 219, var(--tw-text-opacity))\n}\n.partner>a:hover{\n  color:#9ca3af\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/RussoOne-Regular.b2f5b28.ttf";

/***/ }),
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(99);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("bad8e090", content, true, context)
};

/***/ }),
/* 77 */,
/* 78 */
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

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/presentation.vue?vue&type=template&id=6e12db77&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"flex flex-col-reverse md:flex-row md:flex-wrap justify-between md:items-center content-center px-4 md:px-10  mb-3\">","</div>",[_vm._ssrNode("<div class=\"h-auto w-full md:w-2/5 lg:w-1/2 px-1 h-auto z-1 \">","</div>",[_vm._ssrNode("<div class=\"flex md:flex-col justify-center md:justify-start text-base md:text-2xl lg:text-5xl text-gray-700 border-3 h-auto w-full\">","</div>",[_vm._ssrNode("<p class=\"py-1 lg:my-auto md:py-1 lg:py-3 flex items-center\">","</p>",[_vm._ssrNode("CAPLA "),_vm._ssrNode("<span>","</span>",[_c('lord-icon',{staticClass:"w-10 h-10 md:w-14 md:h-14 lg:w-24 lg:h-24",attrs:{"src":"https://cdn.lordicon.com/dxoycpzg.json","trigger":"loop","delay":"3000","colors":"primary:#f24c00,secondary:#646e78,tertiary:#4bb3fd,quaternary:#ebe6ef,quinary:#fae6d1"}})],1)],2),_vm._ssrNode(" <p class=\"py-1 lg:my-auto md:py-1 lg:py-3 flex items-center md:h-auto\"><span class=\"text-indigo-500\">L'anglais  </span> pour  </p> "),_vm._ssrNode("<p class=\"py-1 lg:my-auto md:py-1 lg:py-3 flex items-center\">","</p>",[_vm._ssrNode("Tous "),_vm._ssrNode("<span>","</span>",[_c('lord-icon',{staticClass:"w-10 h-10 md:w-14 md:h-14 lg:w-24 lg:h-24",attrs:{"src":"https://cdn.lordicon.com/pvucrfqe.json","trigger":"loop","delay":"3000","colors":"primary:#faefd1,secondary:#f4dc9c"}})],1)],2)],2),_vm._ssrNode(" <p class=\"my-2 md:pr-2 leading-5 text-gray-500 md:text-sm lg:text-lg lg:leading-6 text-justify\">"+_vm._ssrEscape(_vm._s(_vm.presentation_text))+"</p> "),_vm._ssrNode("<div class=\" mt-4 flex justify-center md:justify-start mx-auto md:mr-0 items-center w-max border-gray-300 py-2 pl-2 md:-ml-2\">","</div>",[_c('nuxt-link',{staticClass:"px-4 py-4 hover:bg-indigo-500 bg-indigo-400 text-white rounded",attrs:{"to":"about"}},[_vm._v("Mot du directeur ")])],1)],2),_vm._ssrNode(" <div class=\"w-full mb-8 md:mb-0 md:w-3/5 lg:w-1/2 z-0\"><img"+(_vm._ssrAttr("src",__webpack_require__(55)))+" alt=\"capla\" class=\"w-full h-auto\"></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/landing/presentation.vue?vue&type=template&id=6e12db77&

// EXTERNAL MODULE: ./assets/js/text.js
var js_text = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/presentation.vue?vue&type=script&lang=js&
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

/* harmony default export */ var presentationvue_type_script_lang_js_ = ({
  data() {
    return {
      presentation_text: js_text["a" /* presentation */]
    };
  }

});
// CONCATENATED MODULE: ./components/landing/presentation.vue?vue&type=script&lang=js&
 /* harmony default export */ var landing_presentationvue_type_script_lang_js_ = (presentationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/landing/presentation.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  landing_presentationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2de54808"
  
)

/* harmony default export */ var presentation = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 80 */
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

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/partner.vue?vue&type=template&id=558c6170&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\" flex flex-col justify-between items-center bg-gray-50  mx-auto mt-12 py-5 px-10 w-full\"><div class=\"text-gray-300 mb-4 partenaires text-gray-400\">Partenaires</div> <div class=\"flex flex-row md:flex-row flex-wrap justify-between items-center content-center w-full h-auto text-3xl\"><div class=\"partner w-full md:w-1/4 h-24\"><a href=\"http://www.iadlsenegal.com/\" target=\"blank\">IADL SENEGAL</a></div> <div class=\"partner w-full md:w-1/4 h-24\"><a href=\"https://web.facebook.com/Thiesenmarche/?_rdc=1&_rdr\" target=\"blank\">THIES EN MARCHE</a></div> <div class=\"partner w-full md:w-1/4 h-24\"><a href=\"https://instagram.com/mac_language_arts?igshid=YmMyMTA2M2Y=\" target=\"blank\">MAC CENTER</a></div> <div class=\"partner w-full md:w-1/4 h-24\"><a href=\"https://fafaloprogram.org/\" target=\"blank\">FAFALO PROGRAM</a></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/landing/partner.vue?vue&type=template&id=558c6170&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/partner.vue?vue&type=script&lang=js&
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
/* harmony default export */ var partnervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/landing/partner.vue?vue&type=script&lang=js&
 /* harmony default export */ var landing_partnervue_type_script_lang_js_ = (partnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/landing/partner.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(69)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  landing_partnervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "79723dd6"
  
)

/* harmony default export */ var partner = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/offre.vue?vue&type=template&id=3af1696a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"flex flex-col justify-between items-center mt-12 mb-18 mx-4 px-4\"><div class=\"text-indigo-400 text-5xl mb-4\">\n    Nos offres\n  </div> <div class=\"text-gray-400 md:mx-4 leading-6 md:leading-7 text-base md:text-lg text-justify\"><p class=\"tracking-wide mt-2\">\n      Le CAPLA organise <span class=\"text-gray-600\">trois (3) sessions</span> de formation dans l'année académique en plus d'une session d'été. \n      En dehors des cours précités, le centre offre la possibilité d'intégrer la formation en fonction des besoins personnels des candidats avec des <span class=\"text-gray-600\">horaires adaptés</span> à leur emploi du temps.\n    </p> <p class=\"mt-2\">\n      Tous les niveaux d'études sont acceptés mais compte tenu des exigences de la formation, <span class=\"text-gray-600\">il est souhaitable d'avoir au minimum le BFEM.</span>\n      En outre, il est obligatoire de passer un test pour intégrer l'une des &quot;Classes&quot; réparties comme suit :\n    </p> <div class=\"flex flex-row flex-wrap md:flex-row justify-center items-center my-4 bg-gray-50 text-white py-8 rounded px-4 -mx-8\"><div class=\"flex flex-col w-44 h-24 shadow-xl rounded-md items-center text-indigo-300 px-4 py-4 bg-white my-4 mx-auto\"><span class=\"material-symbols-outlined\">looks_one</span> <p class=\"text-base text-center\">Elementary Class</p></div> <div class=\"flex flex-col w-44 h-24 shadow-xl rounded-md items-center text-indigo-300 px-4 py-4 bg-white my-4 mx-auto\"><span class=\"material-symbols-outlined\">looks_two</span> <p class=\"text-base text-center\">Pre-intermediate Class</p></div> <div class=\"flex flex-col w-44 h-24 shadow-xl rounded-md items-center text-indigo-300 px-4 py-4 bg-white my-4 mx-auto\"><span class=\"material-symbols-outlined\">looks_3</span> <p class=\"text-base text-center\">Intermediate Class</p></div> <div class=\"flex flex-col w-44 h-24 shadow-xl rounded-md items-center text-indigo-300 px-4 py-4 bg-white my-4 mx-auto\"><span class=\"material-symbols-outlined\">looks_4</span> <p class=\"text-base text-center\">Upper-intermediate Class</p></div> <div class=\"flex flex-col w-44 h-24 shadow-xl rounded-md items-center text-indigo-300 px-4 py-4 bg-white my-4 mx-auto\"><span class=\"material-symbols-outlined\">looks_5</span> <p class=\"text-base text-center\">Advanced Class</p></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/landing/offre.vue?vue&type=template&id=3af1696a&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/landing/offre.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "10f68570"
  
)

/* harmony default export */ var offre = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n#newsletter_input{\n  border:none;\n  outline:0\n}\n#newsletter_input:focus{\n  outline:0\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=1b23adfc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div>","</div>",[_c('Presentation')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"hidden md:block md:w-full\">","</div>",[_c('Partner')],1),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_c('Services')],1),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_c('Offre')],1),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_c('Certificat')],1),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_c('Modalites')],1),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_c('Temoignage')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex md:hidden\">","</div>",[_c('Partner')],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=1b23adfc&

// EXTERNAL MODULE: external "vueperslides"
var external_vueperslides_ = __webpack_require__(34);

// EXTERNAL MODULE: ./components/landing/presentation.vue + 4 modules
var presentation = __webpack_require__(79);

// EXTERNAL MODULE: ./components/landing/services.vue + 4 modules
var services = __webpack_require__(49);

// EXTERNAL MODULE: ./components/landing/offre.vue + 2 modules
var offre = __webpack_require__(82);

// EXTERNAL MODULE: ./components/landing/certificat.vue + 5 modules
var certificat = __webpack_require__(78);

// EXTERNAL MODULE: ./components/landing/modalites.vue + 2 modules
var modalites = __webpack_require__(50);

// EXTERNAL MODULE: ./components/landing/temoignage.vue + 4 modules
var temoignage = __webpack_require__(80);

// EXTERNAL MODULE: ./components/landing/partner.vue + 4 modules
var partner = __webpack_require__(81);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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
//
//
//







 // import AOS from 'aos';
// import 'aos/dist/aos.css'; 
// import 'vueperslides/dist/vueperslides.css';
// AOS.init();

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  layout: 'navbar',
  components: {
    VueperSlides: external_vueperslides_["VueperSlides"],
    VueperSlide: external_vueperslides_["VueperSlide"],
    Presentation: presentation["default"],
    Services: services["default"],
    Offre: offre["default"],
    Certificat: certificat["default"],
    Modalites: modalites["default"],
    Temoignage: temoignage["default"],
    Partner: partner["default"]
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(98)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "63479c50"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })
]);;
//# sourceMappingURL=index.js.map