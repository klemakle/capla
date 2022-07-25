<template>
    <div>
        <div class="flex flex-col-reverse md:flex-row py-4 px-4 justify-between items-center my-10 mx-auto md:mx-12  my-10">
            <div id="certificat_text">
                <p class="text-gray-400 text-base md:text-4xl tracking-wide mx-2">
                A la fin de la formation, vous recevrez un certificat prouvant votre aptitude à communiquer en anglais.
                </p>
            </div>

            <div class="w-full ml-4 relative mb-8 md:mb-0 mx-2">
                <img src="../assets/images/degree/grid.png" class="absolute -top-10 -right-8 md:-top-12 md:-right-12 z-10 w-20 h-20 md:w-32 md:h-32" alt="">
                <vueper-slides class="no-shadow h-full" bullets-outside transition-speed="250" :breakpoints="breakpoint" fixed-height="500px" :arrows="false">
                <vueper-slide
                    v-for="(elem,i) in certificat_photos"
                    :key="i"
                    :image="elem.image"
                    class="rounded-md drop-shadow-lg"
                    />
                </vueper-slides>
                <img src="../assets/images/degree/grid.png" class="absolute bottom-0 -left-4 md:-bottom-2 md:-left-10 z-0 w-20 h-20 md:w-32 md:h-32" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import {breakpoints, photos} from '../assets/js/certificat'
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css'

export default {
    components:{VueperSlides, VueperSlide},
    data() {
        return{
            certificat_photos: photos, 
            breakpoint: breakpoints
        }
    }
}

</script>

<style>
</style>