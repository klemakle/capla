exports.ids = [12,10];
exports.modules = {

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about/index.vue?vue&type=template&id=bcdbb662&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div id=\"photo_slides\" class=\"-mx-4 mb-8\">","</div>",[_c('vueper-slides',{attrs:{"fade":"","touchable":false,"breakpoints":_vm.breakpoints,"autoplay":"","pause-on-hover":"","fractions":"","parallax":1,"parallax-fixed-content":""}},_vm._l((_vm.photos),function(slide,i){return _c('vueper-slide',{key:i,attrs:{"image":slide.image,"title":slide.title}})}),1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"mot_du_directeur\" class=\"px-2 md:px-4 py-4 mx-2 md:mx-12 my-8 border-2 flex flex-col rounded-md justify-between items-center\">","</div>",[_vm._ssrNode("<div class=\"text-gray-500 text-3xl underline mb-4\">Mot du directeur</div> "),_vm._ssrNode("<div class=\"flex flex-col md:flex-row justify-between items-center md:items-start\">","</div>",[_vm._ssrNode("<div id=\"photo_directeur\" class=\"w-1/2 my-2 md:w-full md:mx-4\"><img"+(_vm._ssrAttr("src",__webpack_require__(83)))+" alt=\"photo du directeur\" class=\"rounded-3xl mx-auto w-auto\"></div> "),_vm._ssrNode("<div data-aos=\"zoom-in-left\" data-aos-delay=\"500\" data-aos-duration=\"1000\" class=\"text-gray-400 text-base md:text-xl leading-7 md:leading-9 tracking-wide text-justify mx-4\">","</div>",[_vm._ssrNode("<p>","</p>",[_vm._ssrNode("<span>","</span>",[_c('lord-icon',{staticStyle:{"width":"50px","height":"50px","transform":"rotate(180deg)"},attrs:{"src":"https://cdn.lordicon.com/xqnbvely.json","trigger":"loop","delay":"5000","colors":"primary:#6b7280,secondary:#08a88a","stroke":"30"}})],1),_vm._ssrNode("\n                    Thomas Sankara affirmait « <span class=\"italic\">je veux qu’on garde de moi l’image d’un homme qui a mené une vie utile pour tous </span>» s’inscrire dans la même logique s’impose dans un contexte où l’anglais sort de plus en plus l’outil de communication la plus utilisée. \n                    Amoureux de la langue anglaise depuis le bas âge, il a été convenu par le biais d’une structure responsable et hautement indispensable au monde contemporain du nom de CAPLA d’accompagner les jeunes étudiants, élèves, professionnels, adeptes et amoureux de la langue dans une maîtrise parfaite et adapté au contexte demandé.\n                ")],2),_vm._ssrNode(" <p>\n                    Les difficultés des jeunes liées à l’assimilation et à la pratique de cette langue présentent,  de nos jours des conséquences inouïes allant jusqu’à les empêcher d’intégrer certains corps. \n                    Fort de ce constat, en plus de la mondialisation ainsi que l’utilisation de l’anglais dans tout les domaines (communication, marketing, enseignement, affaires, tourisme), il est devenu légitime pour nous d’activer notre dose d’optimisme et de pragmatisme en encadrant, soutenant et protégeant nos apprenants sur les dérives provoquées par le manque de maîtrise de l’anglais....\n                </p> "),_vm._ssrNode("<p>","</p>",[_vm._ssrNode("Dans un enseignement plus que pédagogique, CAPLA vous fournit un savoir pur, mûr, sûr, qui endure sans rupture et qui sert dans le futur.\n                    "),_c('lord-icon',{staticStyle:{"width":"50px","height":"50px"},attrs:{"src":"https://cdn.lordicon.com/xqnbvely.json","trigger":"loop","delay":"5000","colors":"primary:#6b7280,secondary:#08a88a","stroke":"30"}})],2),_vm._ssrNode(" <p class=\"text-gray-500 text-right\">Elhadji Abdou Sarr</p>")],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_c('Stats')],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about/index.vue?vue&type=template&id=bcdbb662&

// CONCATENATED MODULE: ./assets/js/about.js
const photos = [{
  image: __webpack_require__(84),
  title: 'Céremonie de remise de diplômes'
}, {
  image: __webpack_require__(85),
  title: 'Céremonie de remise de diplômes'
}, {
  image: __webpack_require__(86),
  title: 'Sortie Gorée 2021'
}, {
  image: __webpack_require__(87),
  title: 'Séance d\'une classe intermediate'
}, {
  image: __webpack_require__(88),
  title: 'Conversation de deux enfants en anglais'
}];
const breakpoints = {
  1200: {
    slideRatio: 1 / 5
  },
  900: {
    slideRatio: 1 / 3
  },
  600: {
    slideRatio: 6 / 10,
    arrows: false,
    bulletsOutside: true
  },
  // The order you list breakpoints does not matter, Vueper Slides will sort them for you.
  1100: {
    slideRatio: 1 / 4
  }
};

// EXTERNAL MODULE: ./components/stats.vue + 4 modules
var stats = __webpack_require__(72);

// EXTERNAL MODULE: external "vueperslides"
var external_vueperslides_ = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/vueperslides/dist/vueperslides.css
var vueperslides = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about/index.vue?vue&type=script&lang=js&
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
// AOS.init({
//     once: true,
// }); 




/* harmony default export */ var aboutvue_type_script_lang_js_ = ({
  layout: 'navbar',
  components: {
    VueperSlides: external_vueperslides_["VueperSlides"],
    VueperSlide: external_vueperslides_["VueperSlide"],
    Stats: stats["default"]
  },
  head: {
    title: 'A propos',
    script: [{
      src: 'https://unpkg.com/vue'
    }, {
      src: 'https://unpkg.com/vueperslides'
    }, {
      src: 'https://cdn.lordicon.com/xdjxvujz.js'
    }],
    link: [{
      rel: 'stylesheet',
      href: 'https://unpkg.com/vueperslides/dist/vueperslides.css'
    }]
  },

  data() {
    return {
      photos: photos,
      breakpoints: breakpoints
    };
  },

  methods: {
    animate(obj, initVal, lastVal, duration) {
      let startTime = null; //get the current timestamp and assign it to the currentTime variable

      let currentTime = Date.now(); //pass the current timestamp to the step function

      const step = currentTime => {
        //if the start time is null, assign the current time to startTime
        if (!startTime) {
          startTime = currentTime;
        } //calculate the value to be used in calculating the number to be displayed


        const progress = Math.min((currentTime - startTime) / duration, 1); //calculate what to be displayed using the value gotten above

        obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal); //checking to make sure the counter does not exceed the last value (lastVal)

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          window.cancelAnimationFrame(window.requestAnimationFrame(step));
        }
      }; //start animating


      window.requestAnimationFrame(step);
    }

  },

  mounted() {
    const text1 = document.querySelector("#femme");
    this.animate(text1, 0, 175, 4000);
  }

});
// CONCATENATED MODULE: ./pages/about/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_aboutvue_type_script_lang_js_ = (aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/about/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(89)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "62aa0356"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Stats: __webpack_require__(72).default})


/***/ }),

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

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/promotion.648eebd.png";

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/woman.f9dd2f9.png";

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/man.c40d1b2.png";

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/age.a3a46c2.png";

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/stats.vue?vue&type=template&id=2cc3c87f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"stats flex flex-col md:flex-row w-full bg-gray-50 justify-between px-12 py-4\"><div class=\"promotion py-2 px-3 bg-white w-full md:w-1/5 rounded-lg my-4\"><div class=\"top-card flex flex-row justify-between mb-6\"><div class=\"px-2 py-2 w-1/4 bg-gray-50 self-start rounded-lg -mt-7\"><img"+(_vm._ssrAttr("src",__webpack_require__(51)))+" alt=\"promo_alt\" class=\"center\"></div> <div class=\"flex flex-col justify-start\"><p class=\"text-gray-400\">Promotions</p> <p id=\"promo\" class=\"text-gray-500 self-end text-base\">11</p></div></div> <p class=\"self-end mt-4 text-gray-500\">Depuis sa création</p></div> <div class=\"py-2 px-3 bg-white w-full md:w-1/5 rounded-lg my-4\"><div class=\"top-card flex flex-row justify-between mb-6\"><div class=\"px-2 py-2 w-1/4 bg-gray-50 self-start rounded-lg -mt-7\"><img"+(_vm._ssrAttr("src",__webpack_require__(52)))+" alt=\"promo_alt\" class=\"center\"></div> <div class=\"flex flex-col text-gray-400 justify-start\"><p>Femmes</p> <p id=\"femme\" class=\" self-end text-base\">300</p></div></div> <p class=\"self-end mt-4 text-gray-400\">Depuis sa création</p></div> <div class=\"py-2 px-3 bg-white w-full md:w-1/5 rounded-lg my-4\"><div class=\"top-card flex flex-row justify-between mb-6\"><div class=\"px-2 py-2 w-1/4 bg-gray-50 self-start rounded-lg -mt-7\"><img"+(_vm._ssrAttr("src",__webpack_require__(53)))+" alt=\"promo_alt\" class=\"center\"></div> <div class=\"flex flex-col text-gray-400 justify-start\"><p>Hommes</p> <p id=\"promo\" class=\" self-end text-base\">125</p></div></div> <p class=\"self-end mt-4 text-gray-400\">Depuis sa création</p></div> <div class=\"py-2 px-3 bg-white w-full md:w-1/5 rounded-lg my-4\"><div class=\"top-card flex flex-row justify-between mb-6\"><div class=\"px-2 py-2 w-1/4 bg-gray-50 self-start rounded-lg -mt-7\"><img"+(_vm._ssrAttr("src",__webpack_require__(54)))+" alt=\"promo_alt\" class=\"center\"></div> <div class=\"flex flex-col text-gray-400 justify-start\"><p>Pour tous</p> <p id=\"promo\" class=\"text-gray-500 self-end text-base\">de 8 à 65 ans</p></div></div> <p class=\"self-end mt-4 text-gray-500\">Depuis sa création</p></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/stats.vue?vue&type=template&id=2cc3c87f&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/stats.vue?vue&type=script&lang=js&
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
//
/* harmony default export */ var statsvue_type_script_lang_js_ = ({
  name: "stats"
});
// CONCATENATED MODULE: ./components/stats.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_statsvue_type_script_lang_js_ = (statsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/stats.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_statsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "dab670b6"
  
)

/* harmony default export */ var stats = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(90);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("01dcdd8a", content, true, context)
};

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/directeur.d51d8fa.jpeg";

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/degree1.1d0db26.jpeg";

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/remise1.17766b5.jpeg";

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/goree1.cd3f117.jpeg";

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/classroom1.0f5a246.jpeg";

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/children1.462c1ad.jpeg";

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.vueperslide__image{\n  transform:scale(1.5) rotate(-10deg)\n}\n.vueperslide__title{\n  font-size:2em;\n  opacity:.7;\n  color:#fff;\n  bottom:10px;\n  right:10px;\n  position:absolute\n}\n@media (max-width:600px){\n.vueperslide__title{\n    font-size:1em;\n    position:static\n}\n.vueperslides__bullet .default{\n    background-color:#e0e7ff;\n    border:none;\n    box-shadow:none;\n    transition:.3s;\n    width:16px;\n    height:16px\n}\n.vueperslides__bullet--active .default{\n    background-color:#818cf8\n}\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map