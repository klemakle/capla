<template>
  <div>
    <!-- presentation -->
    <div class="flex flex-col-reverse md:flex-row md:flex-wrap justify-between content-start px-10  mb-3">
      <div class="h-auto w-full md:w-1/2 px-1 h-auto  ">
        <div class="text-xl md:text-7xl flex md:flex-col text-gray-700 border-3 h-auto w-full">
          <p class="py-1 my-auto md:py-3">CAPLA <spam><lord-icon src="https://cdn.lordicon.com/dxoycpzg.json" trigger="loop" delay="3000" colors="primary:#f24c00,secondary:#646e78,tertiary:#4bb3fd,quaternary:#ebe6ef,quinary:#fae6d1" class="w-12 h-12 md:w-24 md:h-24" ></lord-icon></spam> </p>
          <p class="py-1 my-auto md:py-3 center"><span>English for </span> </p>
          <p class="py-1 my-auto md:py-3"> ALL <span><lord-icon src="https://cdn.lordicon.com/pvucrfqe.json" trigger="loop" delay="3000" colors="primary:#faefd1,secondary:#f4dc9c" class="w-12 h-12 md:w-24 md:h-24"></lord-icon></span></p>
        </div>
        <p class="my-2 text-gray-400 leading-6">{{presentation_text}}</p>

        <p class="mt-4 text-gray-400">Inscrivez-vous à notre newsletter</p>
        <div class=" mt-4 flex justify-start items-center w-max border-gray-300 border h-14 py-2 pl-2 rounded-3xl">
          <input type="email" id="newsletter_input" class="border-transparent px-4 py-2 h-12 rounded text-gray-700 w-full" placeholder="Enter your mail">
          <button class="px-4 py-2 hover:bg-indigo-400 bg-indigo-400 text-white h-14 rounded-3xl -mr-1"> S'abonner </button>
        </div>
      </div>
      <div class="w-full mb-3 md:mb-0 md:w-1/2 ">
        <img class="w-full h-full" src="../assets/images/capla.svg" alt="capla">
      </div>
    </div>


    <!-- more fun with effect filters -->
    <div class="flex flex-col md:flex-row bg-gray-50 mx-auto my-12 md:my-20 py-10 px-10 w-full ">
      <div class="text-3xl md:w-1/2 w-full h-36 p-4 text-gray-700">
      <p>Ce que nous faisons au <span class="text-blue-700">Capla</span></p>
      </div>
      <div v-for="(n,index) in type_anglais" :key="index" class="bg-white card border-0 border-gray-200 flex flex-col rounded-xl py-2 px-4 justify-start my-2 w-full md:w-1/2 mx-2 ease-in duration-200 hover:shadow-md">
        <div class="photo w-16 bg-blue-300 rounded-md h-18 mb-1 mt-2 p-2">
          <img :src="require(`@/assets/images/evolution${index}.png`)" class="w-full h-auto" alt="leader">
        </div>
        <div class="title text-base items-start  text-gray-700 my-1">{{n.text}}</div>
        <div class="text-card text-gray-400 my-1 w-full items-start text-sm">{{n.description}}</div>
      </div>
    </div>

    <!-- delivrance certificat -->
    <div><Certificat/></div>
    <!-- nos activites -->
    <!-- testimonials -->
    <div><Temoignage/></div>

    <!-- partners -->
    <div><Partner/></div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import {presentation,testimonials, services} from '../assets/js/text';
import 'vueperslides/dist/vueperslides.css'
import Certificat from '../components/certificat.vue';
import Temoignage from '../components/temoignage.vue';
import Partner from '../components/partner.vue'

import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();
export default {
  layout:'navbar',
  components:{VueperSlides, VueperSlide, Certificat, Temoignage, Partner},
  data() {
    return{
      presentation_text:presentation,
      type_anglais:services,
      testimonials,
    }
  },
}
</script>


<style>
@font-face {
  font-family: Russo;
  src: url("../assets/fonts/RussoOne-Regular.ttf");
}
  .partenaires{
    font-family: Russo;
  }
  .partner{
    font-family: Russo;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .partner > a {
    text-align: center;
    transition: all .25s ease;
    @apply text-gray-300;
  }

  .partner > a:hover{
    color: #9ca3af;
  }

  #newsletter_input{
    border: none;
    outline: 0;
  }

  #newsletter_input:focus{
    outline:0;
  }
  /* .partner > img{
    filter: grayscale(100%);
    opacity: .6;
    transition: all ease .25s;
  }
  .partner > img:hover{
    filter: grayscale(0%);
    opacity: 1;
  } */
</style>