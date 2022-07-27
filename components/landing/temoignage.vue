<template>
    <div>
        <div class="flex flex-col justify-between my-20 mx-auto px-10 py-5">
            <div class="text-3xl md:text-5xl w-full md:w-1/2 text-gray-500 tracking-wider font-medium">
                <p>Qu'est ce qu'on dit à propos nous ?</p>
            </div>

            <div class="flex flex-col md:flex-row justify-between mt-8 md:mt-16">
                <div v-for="(temoin,n) in testimonials" :key="n" class="flex flex-col  md:mx-8 my-8 w-full md:w-1/3">
                    <div class="flex flex-col md:flex-col items-center ">
                        <div class="w-1/4 h-auto mb-2">
                            <img class="w-auto h-auto rounded-full shadow-lg" :src="require(`@/assets/images/temoignage/back/temoin${n}.png`)" alt="">
                        </div>
                        <div class="flex flex-col items-center w-auto mx-6">
                            <p class="text-gray-500 text-xl text-center md:text-left font-summer">{{temoin.fullname}}</p>
                            <p class="text-gray-400 text-center md:text-lef font-summer"> {{temoin.fonction}}</p>
                        </div>
                    </div>
                    <div class="mt-4 text-gray-400 my-2 w-full text-justify text-sm md:text-base font-summer italic">{{temoin.text}}</div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import {testimonials} from '../../assets/js/text';

export default {
    components:{},
    data() {
        return{
            testimonials,
        }
    }
}
</script>

<style>
@font-face {
    font-family: Summer;
    src: url('../../assets/fonts/Summer Dreams.ttf')
}

.font-summer{
    font-family: Summer;
}
</style>