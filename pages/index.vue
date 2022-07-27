<template>
  <div>
    <!-- presentation -->
    <div><Presentation/></div>

    <!-- Services -->
    <div><Services/></div>

    <!-- oofres -->
    <div><Offre/></div>

    <!-- delivrance certificat -->
    <div><Certificat/></div>


<!-- modalités -->
    <div class="flex flex-col py-4 px-2 my-14 justify-between items-center">
       <div class="text-indigo-400 text-5xl mb-4">
        Modalités
      </div>

      <div class="text-gray-400 md:mx-4 leading-6 md:leading-6 text-lg md:text-lg text-justify">
        <p class="tracking-wide mt-2">Nous proposons des cours d'anglais du niveau débutant au niveau avancé. Les 03 niveaux sont à savoir: <span class="text-gray-600">débutant, intermédiaire et niveau avancé.</span></p>
        <p class="tracking-wide mt-2">Chaque apprenant est évalué lors de son inscription pour vérifier son niveau d'anglais afin d'être correctement placé dans l'une des classes citées plutôt. </p>
        <p class="tracking-wide mt-2">CAPLA vous propose des sessions de formation de <sapn class="text-gray-600 text-xl"> 2 mois </sapn> avec une possibilité de continuer.</p>
      </div>
      <div class="flex flex-col justify-between items-start mt-6">
        <div class="text-indigo-400 my-2 text-xl">Cours du soir : <span class="text-gray-400">Mardi et Jeudi</span> <span class="text-gray-400"> 17h-19h</span></div>
        <div class="text-indigo-400 my-2 text-xl">Cours du weekend : <span class="text-gray-400">Samedi </span> <span class="text-gray-400"> 17h-20h</span></div>
        <div class="text-indigo-400 my-2 text-xl">Cours en ligne : <span class="text-gray-400">2 séances par semaine </span></div>
      </div>

      <div class="bg-gray-50 py-4 px-4 flex flex-col md:flex-row justify-center md:justify-center items-center w-full">
        <div class="flex flex-col shadow-2xl rounded-md items-center text-indigo-50 px-10 py-6 bg-indigo-400 my-4 mx-auto md:mx-10">
          <span class="material-symbols-outlined">engineering</span>
          <p class="text-xl text-center text-white mt-2">Professionels</p>
          <p class="text-2xl text-white mt-4 font-bold">50.000 <span class="text-sm align-text-top">FCFA</span></p>
        </div>
        <div class="flex flex-col shadow-2xl rounded-md items-center text-indigo-50 px-10 py-6 bg-indigo-400 my-4 mx-auto md:mx-10">
          <span class="material-symbols-outlined">school</span>
          <p class="text-xl text-white text-center mt-2">Etudiants</p>
          <p class="text-2xl text-white mt-4 font-bold">40.000 <span class="text-sm align-text-top">FCFA</span></p>
        </div>
      </div>
    </div>
    <!-- nos activites -->
    
    <!-- testimonials -->
    <div><Temoignage/></div>

    <!-- partners -->
    <div><Partner/></div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import Presentation from '../components/landing/presentation.vue'
import Services from '../components/landing/services.vue';
import Offre from '../components/landing/offre.vue'
import Certificat from '../components/landing/certificat.vue';
import Temoignage from '../components/landing/temoignage.vue';
import Partner from '../components/landing/partner.vue'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import 'vueperslides/dist/vueperslides.css';

AOS.init();
export default {
  layout:'navbar',
  components:{VueperSlides, VueperSlide, Presentation,Services, Offre, Certificat, Temoignage, Partner},
}
</script>


<style>

  #newsletter_input{
    border: none;
    outline: 0;
  }

  #newsletter_input:focus{
    outline:0;
  }
</style>