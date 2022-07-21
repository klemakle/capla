<template>
    <div>
        <div id="photo_slides" class="-mx-4">
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
        <div id="mot_du_directeur" class="px-2 py-4 mx-2 md:mx-12 my-8 border-2 flex flex-col rounded-md justify-between items-center">
            <div class="text-gray-500 text-3xl underline mb-4">Mot du directeur</div>
            <div class="flex flex-col md:flex-row justify-between items-start">
                <div id="photo_directeur" class="w-3/4 md:w-auto md:mx-4">
                    <img src="../../assets/images/avatar/directeur.jpeg" alt="photo du directeur" class="rounded-3xl mx-auto">
                </div>
                <div class="text-gray-400 text-xl leading-6 md:leading-9 tracking-wide text-justify mx-4">
                    <p> 
                       <span>
                        <lord-icon
                            src="https://cdn.lordicon.com/xqnbvely.json"
                            trigger="hover"
                            colors="primary:#6b7280,secondary:#08a88a"
                            stroke="30"
                            style="width:50px;height:50px;transform:rotate(180deg);">
                        </lord-icon>L'objectif de CAPLA est d'enseigner 
                        </span> l'anglais aux étudiants universitaires, aux professionnels et aux enfants, afin de les aider à développer davantage leurs compétences en anglais.
                         Ceci est important car de nombreux jeunes doivent être équipés pour travailler avec des organisations anglophones. 
                         Dans le monde d'aujourd'hui, parler anglais est devenu un grand atout, surtout compte tenu de la mondialisation des opportunités d'emploi et de la communication. 
                         Dans le monde entier, l'anglais peut être utilisé dans de nombreux domaines différents, notamment l'enseignement, les affaires, le marketing et la communication, le tourisme, ainsi que de nombreux autres. 
                          Avec la maîtrise de l'anglais, il est possible de travailler aux côtés d'anglophones natifs dans les écoles, les entreprises et les organisations, ouvrant la porte à des opportunités mondiales.

                        En enseignant l'anglais, je veux que les gens soient mis au défi dans leur réflexion et encouragent les plus jeunes à cesser d'attendre que les autres les soutiennent et à poursuivre leurs rêves pour eux-mêmes.
                        <lord-icon
                            src="https://cdn.lordicon.com/xqnbvely.json"
                            trigger="hover"
                            colors="primary:#6b7280,secondary:#08a88a"
                            stroke="30"
                            style="width:50px;height:50px;">
                        </lord-icon>
                    </p>
                </div>
            </div>
        </div>

        <div>
            <Stats/>
        </div>
    </div>
</template>

<script>
import {photos, breakpoints} from '../../assets/js/about.js';
import Stats from '../../components/stats.vue'
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css'

export default {
    layout:'navbar',
    components:{VueperSlides, VueperSlide, Stats},
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
}

</style>