<template>
  <div>
    <!-- presentation -->
    <div class="flex flex-col-reverse md:flex-row md:flex-wrap justify-between content-start px-10  mb-3">
      <div class="h-auto w-full md:w-1/2 px-1 h-auto  ">
        <div class="text-xl md:text-7xl flex md:flex-col text-gray-700 border-3 h-auto w-full">
          <p class="py-1 md:py-3">CAPLA 'img' </p>
          <p class="py-1 md:py-3"> English for </p>
          <p class="py-1 md:py-3"> All 'img'</p>
        </div>
        <p class="my-2 text-gray-400 leading-6">{{presentation_text}}</p>
        <button class="px-5 py-4 bg-indigo-500 hover:bg-indigo-400 text-white rounded-2xl my-3"> Contact Us </button>
      </div>
      <div class="w-full mb-3 md:mb-0 md:w-1/2 ">
        <img class="w-full h-full" src="../assets/images/capla.svg" alt="capla">
      </div>
    </div>

    <!-- more fun with effect filters -->
    <div class="flex flex-col md:flex-row bg-gray-50 mx-auto my-20 py-10 px-10 w-full ">
      <div class="text-3xl md:w-1/2 w-full h-36 p-4 text-gray-700">
      <p>Ce que nous faisons au <span class="text-blue-700">Capla</span></p>
      </div>
      <div v-for="(n,index) in type_anglais" :key="index" class="bg-white card border-0 border-gray-200 flex flex-col rounded-xl py-2 px-4 justify-between my-2 w-full md:w-1/2 mx-2 items-start ease-in duration-200 hover:shadow-md">
        <div class="photo w-16 bg-blue-300 rounded-md h-18 mb-1 mt-2 p-2">
          <img :src="require(`@/assets/images/evolution${index}.png`)" class="w-full h-auto" alt="leader">
        </div>
        <div class="title text-base  text-gray-600 my-1">{{n.text}}</div>
        <div class="text-card text-gray-400 my-1 w-full text-sm">{{n.description}}</div>
      </div>
    </div>

    <!-- nos activites -->


    <!-- testimonials -->
    <div class="flex flex-col justify-between my-20 mx-auto px-10 py-5">
      <div class="text-3xl md:text-5xl w-full md:w-1/2 text-gray-600 tracking-wider font-medium">
        <p>Qu'est ce qu'on dit à propos nous ?</p>
      </div>

      <div class="flex flex-col md:flex-row justify-between mt-12 md:mt-16">
        <div v-for="(temoin,n) in testimonials" :key="n" class="flex flex-col  md:mx-16 my-8 w-full md:w-1/3">
          <div class="flex flex-col md:flex-row items-center ">
            <div class="w-1/5">
              <img class="w-full h-auto rounded-full" :src="require(`@/assets/images/temoignage/temoin${n}.jpeg`)" alt="">
            </div>
            <div class="flex flex-col w-auto mx-6">
              <p class="text-gray-500 text-xl text-center md:text-left">{{temoin.fullname}}</p>
              <p class="text-gray-400 text-center md:text-left"> {{temoin.fonction}}</p>
            </div>
          </div>
          <div class="mt-4 text-gray-300 my-2 w-full text-justify">
           {{temoin.text}}
          </div>
        </div>
      </div>
    </div>

    <!-- partners -->
    <div class=" flex flex-col justify-between items-center bg-gray-50  mx-auto mt-12 py-5 px-10 w-full">
      <div class="text-gray-300 mb-4 partenaires">Partenaires</div>
      <div class="flex flex-col md:flex-row flex-wrap justify-between items-center content-center w-full h-auto text-3xl">
        <div class="partner w-1/4 h-24">
          <a href="http://www.iadlsenegal.com/" target="blank">IADL SENEGAL</a>
        </div>
        <div class="partner w-1/4 h-24">
          <a href="https://web.facebook.com/Thiesenmarche/?_rdc=1&_rdr" target="blank">THIES EN MARCHE</a>
        </div>
        <div class="partner w-1/4 h-32">
          <a href="https://instagram.com/mac_language_arts?igshid=YmMyMTA2M2Y=" target="blank">MAC CENTER</a>
        </div>
        <div class="partner w-1/4 h-24">
          <a href="https://fafaloprogram.org/" target="blank">FAFALO PROGRAM</a>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import {presentation,testimonials, services} from '../assets/js/text'


export default {
  layout:'navbar',
  data() {
    return{
      presentation_text:presentation,
      type_anglais:services,
      testimonials
    }
  }

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