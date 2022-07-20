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
    </div>
</template>

<script>
import {photos, breakpoints} from '../../assets/js/about.js';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    layout:'navbar',
    components:{VueperSlides, VueperSlide},
    head:{
        title: 'A propos',
        script:[
            {src:'https://unpkg.com/vue'},
            {src:'https://unpkg.com/vueperslides'}
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