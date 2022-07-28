<template>
    <div>
        <div class="flex flex-col-reverse md:flex-row md:flex-wrap justify-between md:items-center content-center px-4 md:px-10  mb-3">
            <div class="h-auto w-full md:w-2/5 lg:w-1/2 px-1 h-auto z-1 ">
                <div class="flex md:flex-col justify-center md:justify-start text-base md:text-2xl lg:text-5xl text-gray-700 border-3 h-auto w-full">
                    <p class="py-1 lg:my-auto md:py-1 lg:py-3 flex items-center">CAPLA <span><lord-icon src="https://cdn.lordicon.com/dxoycpzg.json" trigger="loop" delay="3000" colors="primary:#f24c00,secondary:#646e78,tertiary:#4bb3fd,quaternary:#ebe6ef,quinary:#fae6d1" class="w-10 h-10 md:w-14 md:h-14 lg:w-24 lg:h-24" ></lord-icon></span> </p>
                    <p class="py-1 lg:my-auto md:py-1 lg:py-3 flex items-center md:h-auto"><span class="text-indigo-500">L'anglais &nbsp;</span> pour &nbsp;</p>
                    <p class="py-1 lg:my-auto md:py-1 lg:py-3 flex items-center">Tous <span><lord-icon src="https://cdn.lordicon.com/pvucrfqe.json" trigger="loop" delay="3000" colors="primary:#faefd1,secondary:#f4dc9c" class="w-10 h-10 md:w-14 md:h-14 lg:w-24 lg:h-24"></lord-icon></span></p>
                </div>
                <p class="my-2 md:pr-2 leading-5 text-gray-500 md:text-sm lg:text-lg lg:leading-6 text-justify">{{presentation_text}}</p>

                <div class=" mt-4 flex justify-center md:justify-start mx-auto md:mr-0 items-center w-max border-gray-300 py-2 pl-2 md:-ml-2">
                    <nuxt-link class="px-4 py-4 hover:bg-indigo-500 bg-indigo-400 text-white rounded" to="about">Mot du directeur </nuxt-link>
                    <!-- <button > Mot du directeur </button> -->
                </div>
            </div>
            <div class="w-full mb-8 md:mb-0 md:w-3/5 lg:w-1/2 z-0">
                <nuxt-img format="webp" class="w-full h-auto" src="/capla.svg" alt="capla"/>
            </div>
        </div>
    </div>
</template>

<script>
import {presentation} from '../../assets/js/text';
export default {
  data() {
    return{
        presentation_text:presentation,
    }
  }
}
</script>

