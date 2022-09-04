<template>
    <div>
        <div class="flex flex-col xl:flex-row bg-gray-50 mx-auto mt-20 md:mt-40 py-10 px-10 w-full ">
            <div class="w-full md:w-2/3 lg:w-1/2  flex flex-col items-center md:items-start  px-4 py-2 md:px-2 text-gray-600">
              <p class=" font-montserrat text-xl md:text-xl lg:text-3xl">Ce que nous faisons au <span class="text-indigo-500 ">Capla</span></p>
              <div class="hidden  mt-2 md:mt-4  lg:flex justify-center md:justify-start mx-auto md:mr-0 items-center w-max border-gray-300 py-2 pl-2 md:-ml-2">
                    <nuxt-link class="voir-plus px-3 py-2 md:px-6 md:py-4 get-started flex hover:bg-indigo-500 bg-indigo-400 text-white rounded" to="services"><span class="mr-1">Voir plus</span> <span class="arrow-plus"><svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m23.068 11.993l-4.25-4.236l-1.412 1.417l1.835 1.83L.932 11v2l18.305.002l-1.821 1.828l1.416 1.412l4.236-4.25Z"/></svg></span> </nuxt-link>
            </div>
            </div>
            <div class="flex flex-col md:flex-row flex-nowrap">
                <div v-for="(n,index) in type_anglais" :key="index" class="bg-white card border-0 border-gray-200 flex flex-col rounded-xl py-2 px-4 md:px-2 lg:px-4 justify-start mb-2 w-full md:w-full lg:w-1/2 mx-2 ease-in duration-200 hover:shadow-md">
                <div class=" mb-2 flex flex-row md:flex-col justify-start items-center md:items-start">
                    <div class="photo w-16 bg-indigo-100 rounded-md md:h-12 lg:h-auto mb-1 mt-2 px-2 md:py-1 lg:py-1">
                        <img :src="require(`@/assets/images/evolution${index}.png`)" format="webp" class="w-10 lg:w-full h-10 lg:h-auto" alt="leader" />
                    </div>
                    <div class="font-nexa-bold title font-medium text-sm md:text-base lg:text-lg items-start ml-4 md:mx-0 text-gray-600 my-1">{{n.text}}</div>
                </div>
                    <div class="font-nexa-light text-gray-500 my-1 w-full items-start text-sm lg:text-base">{{n.description}}</div>
                </div>
            </div>

            <div class="flex lg:hidden items-center mx-auto mt-4">
                <nuxt-link class="voir-plus px-3 py-2 lg:px-6 lg:py-4 get-started flex hover:bg-indigo-500 bg-indigo-400 text-white rounded" to="services"><span class="mr-1">Voir plus</span> <span class="arrow-plus"><svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m23.068 11.993l-4.25-4.236l-1.412 1.417l1.835 1.83L.932 11v2l18.305.002l-1.821 1.828l1.416 1.412l4.236-4.25Z"/></svg></span> </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
import {services} from '../../assets/js/text';

export default {
    data(){
        return{
            type_anglais:services,
        }
    }
}
</script>

<style>

.voir-plus > .arrow-plus{
    opacity: .8;
    margin-left: .5rem ;
    transition: .25s all;
    margin-top:-.2rem;
}

.voir-plus:hover > .arrow-plus{
    opacity: 1;
    margin-left:.75rem;
}
</style>