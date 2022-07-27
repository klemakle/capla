<template>
    <div>
        <div class="flex flex-col md:flex-row bg-gray-50 mx-auto my-12 md:my-20 py-10 px-10 w-full ">
            <div class="md:w-2/3 lg:w-1/2 w-full h-28 p-4 md:px-2 text-gray-600">
              <p class="text-lg md:text-sm lg:text-3xl">Ce que nous faisons au <span class="text-indigo-500 ">Capla</span></p>
            </div>
            <div v-for="(n,index) in type_anglais" :key="index" class="bg-white card border-0 border-gray-200 flex flex-col rounded-xl py-2 px-4 md:px-2 lg:px-4 justify-start mb-2 w-full md:w-full lg:w-1/2 mx-2 ease-in duration-200 hover:shadow-md">
                <div class="photo w-16 bg-indigo-100 rounded-md md:h-12 lg:h-auto mb-1 mt-2 px-2 md:py-1 lg:py-1">
                    <img :src="require(`@/assets/images/evolution${index}.png`)" class="w-10 lg:w-full h-10 lg:h-auto" alt="leader">
                </div>
                <div class="title text-xs lg:text-xs items-start  text-gray-600 my-1">{{n.text}}</div>
                <div class="text-gray-400 my-1 w-full items-start text-xs lg:text-sm">{{n.description}}</div>
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