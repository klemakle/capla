<template>
    <div>
        <div id="photo_slides" class="-mx-4 mb-8">
            <vueper-slides fade :touchable="false" :breakpoints="breakpoints" autoplay pause-on-hover fractions :parallax="1" parallax-fixed-content>
                <vueper-slide
                    v-for="(slide, i) in photos"
                    :key="i"
                    :image="slide.image"
                    :title="slide.title"
                     />
            </vueper-slides>
        </div>

        <!-- mot du directeur -->
        <!-- <div data-aos="flip-down" data-aos-delay="50"> -->
        <div id="mot_du_directeur" class="px-2 md:px-4 py-4 mx-2 md:mx-12 my-8 border-2 border-gray-100 flex flex-col rounded-md justify-between items-center" >
            <div class="font-nexa-bold text-gray-500 text-3xl underline mb-4">Mot du directeur</div>
            <div class="flex flex-col md:flex-row justify-between items-center md:items-start">
                <div id="photo_directeur" class="w-1/2 my-2 md:w-full md:mx-4">
                    <img format="webp" src="@/assets/images/avatar/directeur.jpeg" alt="photo du directeur" class="rounded-3xl mx-auto w-auto"/>
                </div>
                <div class="font-nexa-light text-gray-500 text-base md:text-xl leading-7 md:leading-9 tracking-wide text-justify mx-4" data-aos="zoom-in-left" data-aos-delay="500" data-aos-duration="1000">
                    <p> 
                        <span>
                        <lord-icon src="https://cdn.lordicon.com/xqnbvely.json" trigger="loop" delay="5000" colors="primary:#6b7280,secondary:#08a88a" stroke="30" style="width:50px;height:50px;transform:rotate(180deg);"></lord-icon>
                        </span>
                        Thomas Sankara affirmait « <span class="italic">je veux qu’on garde de moi l’image d’un homme qui a mené une vie utile pour tous </span>» s’inscrire dans la même logique s’impose dans un contexte où l’anglais sort de plus en plus l’outil de communication la plus utilisée. 
                        Amoureux de la langue anglaise depuis le bas âge, il a été convenu par le biais d’une structure responsable et hautement indispensable au monde contemporain du nom de CAPLA d’accompagner les jeunes étudiants, élèves, professionnels, adeptes et amoureux de la langue dans une maîtrise parfaite et adapté au contexte demandé.
                    </p>
                    <p>
                        Les difficultés des jeunes liées à l’assimilation et à la pratique de cette langue présentent,  de nos jours des conséquences inouïes allant jusqu’à les empêcher d’intégrer certains corps. 
                        Fort de ce constat, en plus de la mondialisation ainsi que l’utilisation de l’anglais dans tout les domaines (communication, marketing, enseignement, affaires, tourisme), il est devenu légitime pour nous d’activer notre dose d’optimisme et de pragmatisme en encadrant, soutenant et protégeant nos apprenants sur les dérives provoquées par le manque de maîtrise de l’anglais....
                    </p>
                    <p>Dans un enseignement plus que pédagogique, CAPLA vous fournit un savoir pur, mûr, sûr, qui endure sans rupture et qui sert dans le futur.
                        <lord-icon src="https://cdn.lordicon.com/xqnbvely.json" trigger="loop" delay="5000" colors="primary:#6b7280,secondary:#08a88a" stroke="30" style="width:50px;height:50px;"></lord-icon>
                    </p>

                    <p class="text-gray-600 text-right">Elhadji Abdou Sarr</p>
                    
                </div>
            </div>
        </div>
        <!-- </div> -->

        <!-- <div data-aos="zoom-out-down" data-aos-delay="500" data-aos-duration="1000"> -->
        <div ><Stats/></div>
        <!-- </div> -->

        <!-- capla staff -->
        <div>
            <Staff/>
        </div>
    </div>
</template>

<script>
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// AOS.init({
//     once: true,
// }); 
 
import {photos, breakpoints} from '../../assets/js/about.js';
import Stats from '../../components/about/stats.vue';
import Staff from '../../components/about/staff.vue'
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css'



export default {
    layout:'navbar',
    components:{VueperSlides, VueperSlide, Stats, Staff},
    head:{
        title: 'A propos',
        script:[
            {src:'https://unpkg.com/vue'},
            {src:'https://unpkg.com/vueperslides'},
            {src:'https://cdn.lordicon.com/xdjxvujz.js'},
        ],
        link: [
            { rel: 'stylesheet', href: 'https://unpkg.com/vueperslides/dist/vueperslides.css' },
        ]
    },
    data(){
        return {
            photos,
            breakpoints
        }
    },
    mounted(){
        Weglot.initialize({
          api_key: `${process.env.WEGLOT_KEY}`
    });
}

}
</script>

<style>
.vueperslide__image {
  transform: scale(1.5) rotate(-10deg);
}
.vueperslide__title{
    font-size: 2em;
    opacity: 0.7;
    color:#fff;
    bottom: 10px;
    right:10px;
    position: absolute;
}



@media (max-width: 600px) {
    .vueperslide__title{
        font-size: 1em;
        position: initial;
    }

    .vueperslides__bullet .default {
        background-color: #e0e7ff;
        border: none;
        box-shadow: none;
        transition: 0.3s;
        width: 16px;
        height: 16px;
    }

    .vueperslides__bullet--active .default {background-color:#818cf8;}
}

</style>