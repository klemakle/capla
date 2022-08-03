<template>
  <div>
    <!-- presentation -->
    <div><Presentation/></div>


<div class="mx-10">{{response}}</div>

    <!-- partners -->
    <div class="hidden md:block md:w-full"><Partner/></div>

    <!-- Services -->
    <div class="md:my-20"><Services/></div>

    <!-- oofres -->
    <div><Offre/></div>

    <!-- prochaine rentrée -->
    <div><Start/></div>

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
import Offre from '../components/landing/offre.vue';
import Start from '../components/landing/start.vue';
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
  data(){
    return{
        response:''
    }
  },
  components:{VueperSlides, VueperSlide, Presentation,Services, Offre, Start,Certificat, Modalites,Temoignage, Partner},
  methods: {
    async callNuxtApi() {
      const response = await this.$axios.get( `api/hello`)
      this.response = response
    },
  },
    mounted(){
    this.callNuxtApi()
  }
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