<template>
    <div>
        <div class="flex flex-col-reverse md:flex-row md:flex-wrap justify-between content-start px-4 md:px-10  mb-3">
            <div class="h-auto w-full md:w-1/2 px-1 h-auto  ">
                <div class="text-xl md:text-7xl flex md:flex-col text-gray-700 border-3 h-auto w-full justify-center md:justify-start">
                    <p class="py-1 my-auto md:py-3 flex items-center">CAPLA <span><lord-icon src="https://cdn.lordicon.com/dxoycpzg.json" trigger="loop" delay="3000" colors="primary:#f24c00,secondary:#646e78,tertiary:#4bb3fd,quaternary:#ebe6ef,quinary:#fae6d1" class="w-12 h-12 md:w-24 md:h-24" ></lord-icon></span> </p>
                    <p class="py-1 my-auto md:py-3 flex items-center">L'<span class="text-indigo-500">Anglais &nbsp;</span> pour &nbsp;</p>
                    <p class="py-1 my-auto md:py-3 flex items-center"> TOUS <span><lord-icon src="https://cdn.lordicon.com/pvucrfqe.json" trigger="loop" delay="3000" colors="primary:#faefd1,secondary:#f4dc9c" class="w-12 h-12 md:w-24 md:h-24"></lord-icon></span></p>
                </div>
                <p class="my-2 text-gray-500 leading-6 text-justify">{{presentation_text}}</p>

                <div class=" mt-4 flex justify-start items-center w-max border-gray-300 py-2 pl-2">
                    <nuxt-link class="px-4 py-4 hover:bg-indigo-500 bg-indigo-400 text-white rounded-3xl -mr-1" to="about">Mot du directeur </nuxt-link>
                    <!-- <button > Mot du directeur </button> -->
                </div>
            </div>
            <div class="w-full mb-8 md:mb-0 md:w-1/2 ">
                <img class="w-full h-full" src="../../assets/images/capla.svg" alt="capla">
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

