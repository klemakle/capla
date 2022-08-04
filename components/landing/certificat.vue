<template>
    <div>
        <div class="flex flex-col-reverse lg:flex-row py-4 px-4 justify-center lg:justify-between items-center my-10 mx-auto md:mx-12  mb-10 mt-24">
            <div id="certificat_text w-full lg:w-1/3 text-gray-200 mx-2">
                <p class="text-gray-400 md:text-gray-500 self-center text-3xl lg:text-5xl tracking-wide my-4 mx-2">
                    Ce que vous offre la formation avec <span class="text-indigo-400">Capla</span>
                </p>
                <div class="text-gray-400 text-xl lg:text-2xl my-4 flex items-center"><span class="material-symbols-outlined text-green-500 mx-2">task_alt</span> Bien communiquer en anglais</div>
                <div class="text-gray-400 text-xl lg:text-2xl my-4 flex items-center"><span class="material-symbols-outlined text-green-500 mx-2">task_alt</span> Capacité à parler en public</div>
                <div class="text-gray-400 text-xl lg:text-2xl my-4 flex items-center justify-start"><span class="material-symbols-outlined text-green-500 mx-2">task_alt</span> Certificat de maitrise de langue anglaise <img src="../../assets/images/social/certificate.png" class="w-10 h-10 ml-2" alt="certificat"></div>
            </div>

            <div class=" ml-4 relative mb-8 md:mb-0 mx-2 w-full lg:w-2/3">
                <img src="@/assets/images/degree/grid.png" class="absolute -top-10 -right-4 md:-top-12 md:-right-12 z-10 w-20 h-20 md:w-32 md:h-32" alt="">
                <vueper-slides class="no-shadow h-full" bullets-outside transition-speed="350" :breakpoints="breakpoint" fixed-height="500px" :arrows="false" autoplay fade>
                <vueper-slide
                    v-for="(elem,i) in certificat_photos"
                    :key="i"
                    :image="elem.image"
                    class="rounded-md drop-shadow-lg"
                    />
                </vueper-slides>
                <img src="@/assets/images/degree/grid.png" class="absolute bottom-0 -left-4 md:-bottom-2 md:-left-10 z-0 w-20 h-20 md:w-32 md:h-32" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import {breakpoints, photos} from '../../assets/js/certificat'
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
.vueperslides__bullet .default {
  background-color: #e0e7ff !important;
  border: none !important;
  box-shadow: none !important;
  transition: 0.3s;
  width: 16px !important;
  height: 16px !important;
}

.vueperslides__bullet--active .default {background-color:#818cf8 !important;}
</style>