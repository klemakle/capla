<template>
    <div>
        <div class="flex flex-col-reverse md:flex-row md:flex-wrap justify-between md:items-center content-center px-4 md:px-10  mb-3">
            <div class="h-auto w-full md:w-2/5 lg:w-1/2 px-1 h-auto z-1 ">
                <div class="flex font-nexa-bold md:flex-col justify-center md:justify-start text-base md:text-2xl lg:text-7xl text-gray-600 border-3 h-auto w-full">
                    <p class="py-1 lg:my-auto md:py-1 lg:py-3 flex items-center">CAPLA <span><lord-icon src="https://cdn.lordicon.com/dxoycpzg.json" trigger="loop" delay="3000" colors="primary:#f24c00,secondary:#646e78,tertiary:#4bb3fd,quaternary:#ebe6ef,quinary:#fae6d1" class="w-10 h-10 md:w-14 md:h-14 lg:w-24 lg:h-24" ></lord-icon></span> </p>
                    <p class="py-1 lg:my-auto md:py-1 lg:py-3 flex items-center md:h-auto"><span class="text-indigo-500">L'anglais &nbsp;</span> pour &nbsp;</p>
                    <p class="py-1 lg:my-auto md:py-1 lg:py-3 flex items-center">Tous <span><lord-icon src="https://cdn.lordicon.com/pvucrfqe.json" trigger="loop" delay="3000" colors="primary:#faefd1,secondary:#f4dc9c" class="w-10 h-10 md:w-14 md:h-14 lg:w-24 lg:h-24"></lord-icon></span></p>
                </div>
                <p class="font-nexa-light my-2 md:pr-2 leading-5 text-gray-400 md:text-sm lg:text-lg xl:text-2xl lg:leading-9 md:tracking-wide text-justify lg:text-left ">{{presentation_text}}</p>

                <div class=" mt-4 flex justify-center md:justify-start mx-auto md:mr-0 items-center w-max border-gray-300 py-2 pl-2 md:-ml-2">
                    <nuxt-link class="px-6 py-4 get-started flex hover:bg-indigo-500 bg-indigo-400 text-white rounded" to="about"><span class="mr-1 ceo">Mot du directeur</span> <span class="arrow"><svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m23.068 11.993l-4.25-4.236l-1.412 1.417l1.835 1.83L.932 11v2l18.305.002l-1.821 1.828l1.416 1.412l4.236-4.25Z"/></svg></span> </nuxt-link>
                </div>
            </div>
            <div class="w-full mb-8 md:mb-0 md:w-3/5 lg:w-1/2 z-0">
                <img format="webp" class="w-full h-auto" src="@/assets/images/capla.png" alt="capla"/>
            </div>
        </div>
    </div>
</template>


<script>
import {presentation} from '../../assets/js/text';
export default {
  data() {
    return{
        presentation_text: presentation,
    }
  }
}
</script>


<style>
.get-started > .arrow{
    opacity: .8;
    margin-left: .4rem ;
    transition: .25s all;
    margin-top:-.2rem;
}

.get-started:hover > .arrow{
    opacity: 1;
    margin-left:.75rem;
}


</style>