<template>
    <div>
        <div class="flex flex-col md:flex-row bg-gray-50 mx-auto my-12 md:my-20 py-10 px-10 w-full ">
            <div class="text-3xl md:w-1/2 w-full h-36 p-4 text-gray-600">
              <p>Ce que nous faisons au <span class="text-indigo-500">Capla</span></p>
            </div>
            <div v-for="(n,index) in type_anglais" :key="index" class="bg-white card border-0 border-gray-200 flex flex-col rounded-xl py-2 px-4 justify-start my-2 w-full md:w-1/2 mx-2 ease-in duration-200 hover:shadow-md">
                <div class="photo w-16 bg-blue-300 rounded-md h-18 mb-1 mt-2 p-2">
                    <img :src="require(`@/assets/images/evolution${index}.png`)" class="w-full h-auto" alt="leader">
                </div>
                <div class="title text-base items-start  text-gray-700 my-1">{{n.text}}</div>
                <div class="text-card text-gray-400 my-1 w-full items-start text-base">{{n.description}}</div>
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