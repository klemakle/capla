<template>
  <div class="flex flex-col items-center justify-between">
    <div class="w-full  mt-8 bg-gray-700 text-white px-12 lg:px-6 py-16 flex flex-col-reverse lg:flex-row justify-between items-start text-gray-400">
        <div id="logoCapla" class="flex flex-col justify-between mb-4 lg:mb-2  w-full lg:w-1/3">
          <div class="logo mb-2"> 
            <nuxt-link to="/">
            <span class="self-start text-xl font-semibold whitespace-nowrap text-gray-200 dark:text-white">Capla</span>
          </nuxt-link>
          </div>
          <div class="text-gray-500 mt-2">
            <p class="text-gray-300">Notre newsletter</p>
            <p class="text-lg mt-2">Abonnez-vous à notre newsletter pour ne rien rater.</p>
            <div class=" mt-6 flex justify-start items-center w-max border-gray-400 border h-10 md:h-14 py-2 pl-2 rounded-3xl mr-2">
              <input type="email" id="newsletter_input" class="border-transparent bg-gray-700 px-2 py-0 md:py-2 h-8 md:h-12 rounded-3xl text-gray-200 md:w-full" placeholder="Enter your mail">
              <button 
                name="souscription"
                v-tooltip.bottom-start="{content:'Souscrire', classes: 'text-gray-700 bg-gray-300 px-2 py-1 m-1 rounded-2xl'}"
                class="px-4 py-1 md:py-2 bg-indigo-400 text-white h-10 md:h-14 rounded-3xl -mr-1">
                <span class="md:w-32">
                <lord-icon src="https://cdn.lordicon.com/rhvddzym.json" trigger="hover" colors="primary:#ffffff,secondary:#08a88a" class="w-8 h-8 md:w-10 md:h-10"></lord-icon>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div id="location" class=" flex flex-col w-full text-base lg:text-base lg:w-1/3 my-10 lg:my-0 lg:mb-2">
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

        <div class="about w-full lg:w-1/3 mb-12 lg:mb-2">
          <div class="leading-7 text-justify mb-2 text-base lg:text-base">
            <p>Ce centre avec ses experts bilingues développe des cours intensifs avec un laboratoire linguistique s’appuyant sur des technologies modernes tout en se focalisant sur la pratique des métiers.</p>
            <p>Suivez nous sur nos réseaux sociaux pour ne rater aucune information.</p>
          </div>
          <div id="social_network" class="flex justify-start mt-3 ">
            <a href="https://www.facebook.com/capla2.0/" target="blank" name="facebook">
              <img src="@/assets/images/social/facebook.png" class="text-white opacity-60 hover:opacity-100 mr-3" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/capla-english-for-all-a93a58238/" target="blank" name="linkedin">
              <img src="@/assets/images/social/linkedin.png" class="text-white opacity-60 hover:opacity-100 mx-3" alt="" />
            </a>
            <a href="https://www.instagram.com/invites/contact/?i=19ww33zqaowsv&utm_content=4dwzuqg" target="blank" name="instagram">
              <img src="@/assets/images/social/instagram.png" class="text-white opacity-60 hover:opacity-100 mx-3" alt="" />
            </a>
            <a href="https://youtube.com/channel/UCEcrQWyVdl8u20CJBH6f4gw" target="blank" name="youtube">
              <img src="@/assets/images/social/youtube.png" class="text-white opacity-60 hover:opacity-100 mx-3" alt="" />
            </a>
          </div>
        </div>
    </div>

    <div class="bg-gray-800 w-full flex justify-center items-center py-4">
        <p class="text-gray-400">© Copyright <a href="https://klema.herokuapp.com/" class="hover:text-gray-400 text-gray-300" target="blank">@Aethelwulf</a>. ALL Rights Reserved</p>
    </div>
  </div>
</template>