<template>
  <div>
    <!-- presentation -->
    <div><Presentation/></div>

    <!-- partners -->
    <div class="hidden md:block md:w-full"><Partner/></div>

    <!-- Services -->
    <div class="md:my-20"><Services/></div>

    <!-- oofres -->
    <div><Offre/></div>

    <!-- prochaine rentrée -->
    <div class="-mx-2 md:-mx-4 flex justify-between items-center md:justify-center my-12 bg-indigo-500 px-4 md:px-8 py-14">
      <div class="items-center"><span class="text-indigo-500 text-5xl material-symbols-outlined" style="transform:rotate(180deg);">double_arrow</span></div>
      <div class="flex flex-col justify-center items-center">
        <div class="text-lg md:text-xl text-indigo-200 font-thin items-center mt-2 mb-8 font-russo">
          Prochaine rentrée
        </div>
        <div class="text-indigo-50 my-2 font-bold text-2xl md:text-5xl font-russo ">
          Session été
        </div>

        <div class="text-indigo-50 my-2 font-bold text-2xl md:text-5xl font-russo ">
          17 Juillet 2022
        </div>
      </div>
      <div><span class="text-indigo-500 text-5xl material-symbols-outlined">double_arrow</span></div>
    </div>
    <!-- delivrance certificat -->
    <div><Certificat/></div>

    <!-- modalités -->
    <div><Modalites/> </div>

    <!-- nos activites -->
    
    <!-- testimonials -->
    <div><Temoignage/></div>

    <!-- partners -->
    <div class="flex md:hidden"><Partner/></div>

  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import Presentation from '../components/landing/presentation.vue'
import Services from '../components/landing/services.vue';
import Offre from '../components/landing/offre.vue'
import Certificat from '../components/landing/certificat.vue';
import Modalites from '../components/landing/modalites.vue';
import Temoignage from '../components/landing/temoignage.vue';
import Partner from '../components/landing/partner.vue'

// import AOS from 'aos';
// import 'aos/dist/aos.css'; 
// import 'vueperslides/dist/vueperslides.css';

// AOS.init();
export default {
  layout:'navbar',
   transition: {
    name: 'home',
    mode: 'out-in'
  },
  components:{VueperSlides, VueperSlide, Presentation,Services, Offre, Certificat, Modalites,Temoignage, Partner},
}
</script>


<style>
@font-face {
  font-family: Russo;
  src: url("@/assets/fonts/RussoOne-Regular.ttf");
}

.font-russo{
  font-family: Russo;
  font-weight: 100;
}

  #newsletter_input{
    border: none;
    outline: 0;
  }

  #newsletter_input:focus{
    outline:0;
  }

  .home-enter-active, .home-leave-active { transition: opacity .5s; }
  .home-enter, .home-leave-active { opacity: 0; }
</style>