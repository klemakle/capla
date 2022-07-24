<template>
  <div class="flex flex-col items-center justify-between">
    <div class="w-full  mt-8 bg-gray-700 text-white px-12 md:px-14 py-16 flex flex-col-reverse md:flex-row justify-between items-center text-gray-400">
        <div id="logoCapla" class="flex flex-col justify-between mb-4 md:mb-2  w-full md:w-1/3">
          <div class="logo mb-2"> 
            <nuxt-link to="/">
            <img src="/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
            <span class="self-center text-xl font-semibold whitespace-nowrap text-gray-200 dark:text-white">Capla</span>
          </nuxt-link>
          </div>
          <div class="text-gray-500 mt-2">
            <p class="text-gray-300">Notre newsletter</p>
            <p>Abonnez-vous à notre newsletter pour ne rien rater</p>
            <div class=" mt-4 flex justify-start items-center w-max border-gray-400 border h-14 py-2 pl-2 rounded-3xl">
              <input type="email" id="newsletter_input" class="border-transparent bg-gray-700 px-4 py-2 h-12 rounded text-gray-200 w-full" placeholder="Enter your mail">
              <button v-tooltip.bottom-start="{content:'Souscrire', classes: 'text-gray-700 bg-gray-300 px-2 py-1 rounded-2xl'} " class="px-4 py-2 bg-indigo-400 text-white h-14 rounded-3xl -mr-1">
                <span class="w-max">
                <lord-icon src="https://cdn.lordicon.com/rhvddzym.json" trigger="hover" colors="primary:#ffffff,secondary:#08a88a" style="width:40px;height:40px"></lord-icon>
                </span>
                </button>
            </div>
          </div>
        </div>

        <div id="location" class=" flex flex-col w-full md:w-1/3 mb-10 md:mb-2">
          <div class="flex justify-start mb-4">
            <div> <span class="material-symbols-outlined">pin_drop</span></div>
            <div class="ml-2"> 163 10ème Riaom Thiès Thiès, 21000 </div>
          </div>

          <div class="flex justify-start hover:text-gray-100 mb-4">
            <div><span class="material-symbols-outlined">mail</span></div>
              <div class="ml-2">
                <a href="mailto:capla.process@gmail.com" target="_blank" class="hover:text-gray-100">capla.process@gmail.com</a>
              </div>
          </div>

          <div class="flex justify-start hover:text-gray-100">
            <div><span class="material-symbols-outlined">call</span></div>
            <div class="ml-2"> 
              <a href="tel: +221774474561" target="_blank" class="hover:text-gray-100">+221 77 447 45 61</a>
            </div>
          </div>
        </div>

        <div class="about w-full md:w-1/3 mb-12 md:mb-2">
          <div class="leading-7 text-justify mb-2">
            <p>Ce centre avec ses experts bilingues développe des cours intensifs avec un laboratoire linguistique s’appuyant sur des technologies modernes tout en se focalisant sur la pratique des métiers.</p>
            <p>Suivez nous sur nos réseaux sociaux pour ne rater aucune information.</p>
          </div>
          <div id="social_network" class="flex justify-start mt-3 ">
            <a href="https://www.google.com/" target="blank">
              <img src="../assets/images/social/facebook.png" class="text-white opacity-60 hover:opacity-100 mr-3" alt="">
            </a>
            <a href="https://www.google.com/" target="blank">
              <img src="../assets/images/social/twitter.png" class="text-white opacity-60 hover:opacity-100 mx-3" alt="">
            </a>
            <a href="https://www.google.com/" target="blank">
              <img src="../assets/images/social/instagram.png" class="text-white opacity-60 hover:opacity-100 mx-3" alt="">
            </a>
            <a href="https://www.google.com/" target="blank">
              <img src="../assets/images/social/youtube.png" class="text-white opacity-60 hover:opacity-100 mx-3" alt="">
            </a>
          </div>
        </div>
    </div>

    <div class="bg-gray-800 w-full flex justify-center items-center py-4">
        <p class="text-gray-400">© Copyright <a href="https://klema.herokuapp.com/" class="hover:text-gray-400 text-gray-300" target="blank">@Aethelwulf</a>. All Rights Reserved</p>
    </div>
  </div>
</template>