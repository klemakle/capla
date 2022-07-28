<template>
  <div>
    <div id="googlemap" class="my-8 bg-gray-100 md:p-4 -mx-2 md:-mx-6">
      <GMap
      ref="gMap"
      :cluster="{ options: { styles: clusterStyle } }"
      :center="{ lat: locations[0].lat, lng: locations[0].lng }"
      :options="{
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        zoomControl: true,
        gestureHandling: 'cooperative',
        styles: mapStyle
      }"
      :zoom="6"

    >
      <GMapMarker
        v-for="location in locations"
        :key="location.name"
        :position="{ lat: location.lat, lng: location.lng }"
        :options="{
          icon: location === currentLocation ? pins.selected : pins.notSelected,
        }"
        @click="currentLocation = location"
      >
        <GMapInfoWindow :options="{ maxWidth: 200 }">
          <b>{{ location.name }}</b>
          <br />
          <br />
          <code>
            Lat: {{ location.lat }},
            <br />
            Lng: {{ location.lng }}
          </code>
        </GMapInfoWindow>
      </GMapMarker>
    </GMap>
    </div>

    <div id="contactForm" class="mx-10 border-2 p-4 -mx-2 ">
      <div id="contactUs" class=" flex flex-col justify-center items-center w-full">
        <div class="w-auto text-gray-600 text-3xl md:text-6xl my-4"> Contactez nous</div>
        
        <div class="input-text w-full md:w-1/2 my-10">
          <div class="app-form-group my-8">
            <input class="app-form-control" type="email" placeholder="EMAIL">
          </div>
          <div class="app-form-group my-8">
            <input class="app-form-control" type="text" placeholder="NOM">
          </div>
          <div class="app-form-group my-8">
            <textarea class="app-form-control" placeholder="MESSAGE" rows="5" cols="33"></textarea>
          </div>

          <div class="justify-self-end text-right mx-2 my-auto">
            <button class="app-form-button px-4 py-2 rounded-md">
              <!-- <span class="material-symbols-outlined">send</span>  -->
              Envoyer
            </button>
          </div>
        </div>

        <div class="social-network my-4 flex flex-row w-auto md:w-auto p-2">
          <div v-for="(n,index) in networks" :key="index" class="w-1/4">
            <a :href="`${n.link}`" target="_blank">
              <nuxt-img :src="n.image" class="w-1/2 md:w-1/3 h-auto mx-auto" alt="" />
            </a>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import { locations, mapStyle} from '@/assets/js/map.js' ;
import {networks} from '@/assets/js/contact.js'

export default {
  layout:'navbar',
  data() {
    return {
      networks,
      currentLocation: {},
      locationsVisibleOnMap: "",
      locations,
      mapStyle,
       clusterStyle: [
        {
          url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
          width: 56,
          height: 56,
          textColor: "#fff"
        }
      ],
      pins: {
        selected:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHUSURBVHgB5VU7SwNBEJ7LmZBgMC+UdKKx0MZCG2srwcbCB2glpFDQ3to/IegvSAIWPrBJIySlipUKKqYLaHJ3iWIelzu/DTk8j71H7MQPltmZnflmZ3b3juivQ3BzCIfDI4FAYBvTRV3XR7tBglCCOIP9oFwuv/46QSwWWwfZIaaDNi7vGOlqtZqhfhPE4/EViAy5V6ljE8uVSuXYc4JkMjncarUeMR0ib5Db7fZEvV6vWBd8PG+Q73LIFYyj3lAsa1G/37/D4+JWgPbcQkybd9jpdGYVRXlmSiQSSYmieMWmhgMuwI0kSTPkpQJgzKJnDfJuKYryBJH7sVNBSPGI7BKoFl3n+GguMY4JHiz6GtoybiisRczmEtPFAM+Ifl6i5DmTKYqeX+Nssj19lUz9N2J4XNxDTiQSkwi4oz6ADU3hLdxb7dwW9RyL5B0FHrltAgZUsEce4eRrmwB3ugCRJ3fk4VvsOwEDHtcWxKeDy4emaWmHdRKdFpvNphQKhdhFmOet42D3sftTJw7X/wHgw/U8h1ywkJ/gYJeI/wi/g8kdmqqqG5Alk62Er+emG7nXBFSr1aroNSNknwOVzZnNS6xIHtFoNF6CweAbpheyLOfo3+ALfrSuzJ1F8EsAAAAASUVORK5CYII=",
        notSelected:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABHElEQVR42uVVyw4BMRQdC98lsbPwG5YSH+BzWFtLZilh0oQgFh6J54IwBmGYtrfaBREdcTvDhpM0adrec3rb+7Csn8fRdrLg7VzBubhDzmHrudRuZ2KRs/miLd6AThfNaOTTGRFIsMm8bkSuXBeGoLVaGi0g39wLI4GTf1EjdE/+E1pAAGgEAenkb/tBo1vQFUDgBbSbny6al77uSQwB/6wJSNHoAo8xj30iaYMW4Lv9wfSTpc0eH6atXtE4TKWNUS4AY2hyddY4k/lwVEZncm9QilQuBGPwnp1B5GIXGi3P0eU0c7EqKrje5hU5d7fr2P2AEJIESkNqB1XJkvhI0/GrTuqZX619tLMF/VHlfnk5/0r7ZMvVWA3rr3AF6LIMZ7PmSlUAAAAASUVORK5CYII=",
      },
    }
  }
}
</script>


<style>

.app-form-control {
  width: 100%;
  padding: 10px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #b4b5b9;
  color:#6b7280;
  font-size: 14px;
  text-transform: uppercase;
  outline: none;
  transition: border-color .2s;
}

.app-form-control::placeholder {
  color: #d1d5db;
}

.app-form-control:focus {
  border-bottom-color: #374151;
}

.app-form-button {
  background: #fee2e2;
  border: none;
  color: #f87171;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  transition: all .25s ease-in;
}

.app-form-button:hover {
  color: #f87171;
  background: #fecaca;
}

</style>