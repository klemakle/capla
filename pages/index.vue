<template>
  <div>
    <!-- presentation -->
    <div><Presentation/></div>

    <!-- Services -->
    <div><Services/></div>


    <!-- oofres -->
    <div class="flex flex-col justify-between items-center mt-12 mb-18 mx-4 px-4">
      <div class="text-indigo-400 text-5xl mb-4">
        Nos offres
      </div>
      <div class="text-gray-400 text-xl text-justify">
        <p class="md:mx-4 md:leading-7 tracking-wide mt-2">
          Le CAPLA organise <span class="text-indigo-400">trois (3) sessions</span> de formation dans l'année académique en plus d'une session d'été. 
          En dehors des cours précités, le centre offre la possibilité d'intégrer la formation en fonction des besoins personnels des candidats avec des <span class="text-indigo-400">horaires adaptés</span> à leur emploi du temps.
        </p>
        <p>
          Tous les niveaux d'études sont acceptés mais compte tenu des exigences de la formation, il est souhaitable d'avoir au minimum le BFEM.
          En outre, il est obligatoire de passer un test pour intégrer l'une des "Classes" réparties comme suit :
        </p>
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
import Presentation from '../components/landing/presentation.vue'
import Services from '../components/landing/services.vue';
import Certificat from '../components/landing/certificat.vue';
import Temoignage from '../components/landing/temoignage.vue';
import Partner from '../components/landing/partner.vue'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import 'vueperslides/dist/vueperslides.css';

AOS.init();
export default {
  layout:'navbar',
  components:{VueperSlides, VueperSlide, Presentation,Services,Certificat, Temoignage, Partner},
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