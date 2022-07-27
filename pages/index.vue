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
    <div><Modalites/> </div>

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
import Modalites from '../components/landing/modalites.vue';
import Temoignage from '../components/landing/temoignage.vue';
import Partner from '../components/landing/partner.vue'

// import AOS from 'aos';
// import 'aos/dist/aos.css'; 
// import 'vueperslides/dist/vueperslides.css';

// AOS.init();
export default {
  layout:'navbar',
  components:{VueperSlides, VueperSlide, Presentation,Services, Offre, Certificat, Modalites,Temoignage, Partner},
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