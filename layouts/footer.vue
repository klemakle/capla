<template>
  <div class="flex flex-col items-center justify-between mt-20 md:mt-40">
    <div class="w-full bg-gray-700 text-white px-12 lg:px-6 py-20 flex flex-col-reverse lg:flex-row justify-between items-start text-gray-400">
        <div id="logoCapla" class="flex flex-col justify-between mb-4 lg:mb-2  w-full lg:w-1/3">
          <div class="logo mb-2"> 
          <nuxt-link to="/">
            <span class="self-start text-xl font-semibold whitespace-nowrap text-gray-200 dark:text-white font-nexa-bold">Capla</span>
          </nuxt-link>
          </div>
          <div class="text-gray-500 mt-2">
            <p class="text-gray-300 font-nexa-bold">Notre newsletter</p>
            <p class="text-lg mt-2 font-nexa-light">Abonnez-vous à notre newsletter pour ne rien rater.</p>
            <div class="font-nexa-bold mt-6 flex justify-start items-center w-max border-gray-400 border h-10 md:h-14 py-2 pl-2 rounded-3xl mr-2">
              <input type="email" id="newsletter_input" v-model="souscription" @keyup.enter="sendSouscription" class="border-transparent bg-gray-700 px-2 py-0 md:py-2 h-8 md:h-12 rounded-3xl text-gray-200 md:w-full" placeholder="Entrez votre mail" required>
              <button 
                @click="sendSouscription"
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

        <div id="location" class="font-nexa-light flex flex-col w-full text-base lg:text-base lg:w-1/3 my-10 lg:my-0 lg:mb-2">
          <div class="flex justify-start mb-4">
            <div> <span class="material-symbols-outlined">pin_drop</span></div>
            <div class="ml-2"> Thies cité Malick, derrière "Le Massa Massa" (près du lycée Malick SY) </div>
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
          <div class="leading-7 text-justify mb-2 text-base lg:text-base font-nexa-light">
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

    <div class="font-nexa-bold bg-gray-800 w-full flex justify-center items-center py-4">
        <p class="text-gray-400">© Copyright <a href="http://kalidou.info/" class="hover:text-gray-400 text-gray-300" target="blank">@Aethelwulf</a>. Tout droit réservé.</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      souscription:''
    }
  },
  methods:{
    sendSouscription(){
      if(this.souscription == this.$config.EMAIL){
        this.$router.push({path:'/admin'})
      }

      this.souscription = null;
    }
  }

}
</script>
