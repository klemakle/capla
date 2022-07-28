exports.ids = [14];
exports.modules = {

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact/index.vue?vue&type=template&id=91372be6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div id=\"googlemap\" class=\"my-8 bg-gray-100 md:p-4 -mx-2 md:-mx-6\">","</div>",[_c('GMap',{ref:"gMap",attrs:{"cluster":{ options: { styles: _vm.clusterStyle } },"center":{ lat: _vm.locations[0].lat, lng: _vm.locations[0].lng },"options":{
      fullscreenControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      zoomControl: true,
      gestureHandling: 'cooperative',
      styles: _vm.mapStyle
    },"zoom":6}},_vm._l((_vm.locations),function(location){return _c('GMapMarker',{key:location.name,attrs:{"position":{ lat: location.lat, lng: location.lng },"options":{
        icon: location === _vm.currentLocation ? _vm.pins.selected : _vm.pins.notSelected,
      }},on:{"click":function($event){_vm.currentLocation = location}}},[_c('GMapInfoWindow',{attrs:{"options":{ maxWidth: 200 }}},[_c('b',[_vm._v(_vm._s(location.name))]),_vm._v(" "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_c('code',[_vm._v("\n          Lat: "+_vm._s(location.lat)+",\n          "),_c('br'),_vm._v("\n          Lng: "+_vm._s(location.lng)+"\n        ")])])],1)}),1)],1),_vm._ssrNode(" <div id=\"contactForm\" class=\"mx-10 border-2 p-4 -mx-2 \"><div id=\"contactUs\" class=\" flex flex-col justify-center items-center w-full\"><div class=\"w-auto text-gray-600 text-3xl md:text-6xl my-4\"> Contactez nous</div> <div class=\"input-text w-full md:w-1/2 my-10\"><div class=\"app-form-group my-8\"><input type=\"email\" placeholder=\"EMAIL\" class=\"app-form-control\"></div> <div class=\"app-form-group my-8\"><input type=\"text\" placeholder=\"NOM\" class=\"app-form-control\"></div> <div class=\"app-form-group my-8\"><textarea placeholder=\"MESSAGE\" rows=\"5\" cols=\"33\" class=\"app-form-control\"></textarea></div> <div class=\"justify-self-end text-right mx-2 my-auto\"><button class=\"app-form-button px-4 py-2 rounded-md\">\n            Envoyer\n          </button></div></div> <div class=\"social-network my-4 flex flex-row w-auto md:w-auto p-2\">"+(_vm._ssrList((4),function(n,index){return ("<div class=\"w-1/4\"><img"+(_vm._ssrAttr("src",__webpack_require__(91)("./social" + index + ".png")))+" alt class=\"w-1/2 md:w-1/3 h-auto mx-auto\"></div>")}))+"</div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/contact/index.vue?vue&type=template&id=91372be6&

// CONCATENATED MODULE: ./assets/js/map.js
const locations = [{
  lat: 45.81444,
  lng: 15.97798,
  name: "Zagreb"
}, {
  lat: 46.056946,
  lng: 14.505751,
  name: "Ljubljana"
}, {
  lat: 47.497913,
  lng: 19.040236,
  name: "Budapest"
}, {
  lat: 48.210033,
  lng: 16.363449,
  name: "Vienna"
}, {
  lat: 52.520008,
  lng: 13.404954,
  name: "Berlin"
}];
const mapStyle = [{
  featureType: "all",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#ffffff"
  }]
}, {
  featureType: "all",
  elementType: "labels.text.stroke",
  stylers: [{
    visibility: "on"
  }, {
    color: "#3e606f"
  }, {
    weight: 2
  }, {
    gamma: 0.84
  }]
}, {
  featureType: "all",
  elementType: "labels.icon",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "administrative",
  elementType: "geometry",
  stylers: [{
    weight: 0.6
  }, {
    color: "#313536"
  }]
}, {
  featureType: "landscape",
  elementType: "geometry",
  stylers: [{
    color: "#44a688"
  }]
}, {
  featureType: "poi",
  elementType: "geometry",
  stylers: [{
    color: "#13876c"
  }]
}, {
  featureType: "poi.attraction",
  elementType: "geometry.stroke",
  stylers: [{
    color: "#f5e4e4"
  }, {
    visibility: "off"
  }]
}, {
  featureType: "poi.attraction",
  elementType: "labels",
  stylers: [{
    visibility: "on"
  }, {
    lightness: "14"
  }]
}, {
  featureType: "poi.park",
  elementType: "geometry",
  stylers: [{
    color: "#13876c"
  }, {
    visibility: "simplified"
  }]
}, {
  featureType: "road",
  elementType: "geometry",
  stylers: [{
    color: "#067372"
  }, {
    lightness: "-20"
  }]
}, {
  featureType: "transit",
  elementType: "geometry",
  stylers: [{
    color: "#357374"
  }]
}, {
  featureType: "water",
  elementType: "geometry",
  stylers: [{
    color: "#004757"
  }]
}];

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var contactvue_type_script_lang_js_ = ({
  layout: 'navbar',

  data() {
    return {
      currentLocation: {},
      locationsVisibleOnMap: "",
      locations: locations,
      mapStyle: mapStyle,
      clusterStyle: [{
        url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
        width: 56,
        height: 56,
        textColor: "#fff"
      }],
      pins: {
        selected: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHUSURBVHgB5VU7SwNBEJ7LmZBgMC+UdKKx0MZCG2srwcbCB2glpFDQ3to/IegvSAIWPrBJIySlipUKKqYLaHJ3iWIelzu/DTk8j71H7MQPltmZnflmZ3b3juivQ3BzCIfDI4FAYBvTRV3XR7tBglCCOIP9oFwuv/46QSwWWwfZIaaDNi7vGOlqtZqhfhPE4/EViAy5V6ljE8uVSuXYc4JkMjncarUeMR0ib5Db7fZEvV6vWBd8PG+Q73LIFYyj3lAsa1G/37/D4+JWgPbcQkybd9jpdGYVRXlmSiQSSYmieMWmhgMuwI0kSTPkpQJgzKJnDfJuKYryBJH7sVNBSPGI7BKoFl3n+GguMY4JHiz6GtoybiisRczmEtPFAM+Ifl6i5DmTKYqeX+Nssj19lUz9N2J4XNxDTiQSkwi4oz6ADU3hLdxb7dwW9RyL5B0FHrltAgZUsEce4eRrmwB3ugCRJ3fk4VvsOwEDHtcWxKeDy4emaWmHdRKdFpvNphQKhdhFmOet42D3sftTJw7X/wHgw/U8h1ywkJ/gYJeI/wi/g8kdmqqqG5Alk62Er+emG7nXBFSr1aroNSNknwOVzZnNS6xIHtFoNF6CweAbpheyLOfo3+ALfrSuzJ1F8EsAAAAASUVORK5CYII=",
        notSelected: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABHElEQVR42uVVyw4BMRQdC98lsbPwG5YSH+BzWFtLZilh0oQgFh6J54IwBmGYtrfaBREdcTvDhpM0adrec3rb+7Csn8fRdrLg7VzBubhDzmHrudRuZ2KRs/miLd6AThfNaOTTGRFIsMm8bkSuXBeGoLVaGi0g39wLI4GTf1EjdE/+E1pAAGgEAenkb/tBo1vQFUDgBbSbny6al77uSQwB/6wJSNHoAo8xj30iaYMW4Lv9wfSTpc0eH6atXtE4TKWNUS4AY2hyddY4k/lwVEZncm9QilQuBGPwnp1B5GIXGi3P0eU0c7EqKrje5hU5d7fr2P2AEJIESkNqB1XJkvhI0/GrTuqZX619tLMF/VHlfnk5/0r7ZMvVWA3rr3AF6LIMZ7PmSlUAAAAASUVORK5CYII="
      }
    };
  }

});
// CONCATENATED MODULE: ./pages/contact/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contactvue_type_script_lang_js_ = (contactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/contact/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(96)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "267124a9"
  
)

/* harmony default export */ var contact = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(97);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("472ccd4e", content, true, context)
};

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./social0.png": 92,
	"./social1.png": 93,
	"./social2.png": 94,
	"./social3.png": 95
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
webpackContext.id = 91;

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/social0.895b1e3.png";

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/social1.661a8d2.png";

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/social2.b96143d.png";

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/social3.e3fa80c.png";

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.app-form-control{\n  width:100%;\n  padding:10px 0;\n  background:none;\n  border:none;\n  border-bottom:1px solid #b4b5b9;\n  color:#6b7280;\n  font-size:14px;\n  text-transform:uppercase;\n  outline:none;\n  transition:border-color .2s\n}\n.app-form-control::-moz-placeholder{\n  color:#d1d5db\n}\n.app-form-control:-ms-input-placeholder{\n  color:#d1d5db\n}\n.app-form-control::placeholder{\n  color:#d1d5db\n}\n.app-form-control:focus{\n  border-bottom-color:#374151\n}\n.app-form-button{\n  background:#fee2e2;\n  border:none;\n  color:#f87171;\n  font-size:14px;\n  cursor:pointer;\n  outline:none;\n  transition:all .25s ease-in\n}\n.app-form-button:hover{\n  color:#f87171;\n  background:#fecaca\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map