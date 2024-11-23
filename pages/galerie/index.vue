<template>
  <div class="flex flex-col justify-between items-center -mx-2 md:-mx-4">
    <div class="text-indigo-400 text-5xl mb-8 md:mb-12 font-montserrat">
      Galerie
    </div>

    <div class="w-full bg-gray-50 py-8 ">
      <div class="gallery w-full md:w-4/5 mx-auto">
        <div  v-for="i in 18" :key="i" class="img">
          <!-- <div class="p-4 text-xs image-paragraph">
            <p class="font-nexa-bold text-sm md:text-base mb-2">
              Title
            </p>
            <p class="font-nexa-light text-xs md:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi unde, 
            </p>
            
          </div> -->
          <img :src="require(`@/assets/images/gallery/${i}.jpeg`)" class="w-full h-full rounded-md">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';


export default {
  layout:'navbar',
  components:{VueperSlides, VueperSlide},
  head:{
        title: 'Galerie',
         script:[
            {src:'https://unpkg.com/vue'},
            {src:'https://unpkg.com/vueperslides'},
            {src:'https://cdn.lordicon.com/xdjxvujz.js'},
        ],
        link: [
            { rel: 'stylesheet', href: 'https://unpkg.com/vueperslides/dist/vueperslides.css' },
        ]
  },
   data(){
        return {
        }
    },
}
</script>


<style>
.gallery {
  --s: 150px; /* control the size */
  --g: 10px;  /* control the gap */
  --f: 1.5;   /* control the scale factor */
  
  display: grid;
  gap: var(--g);
  /* width: calc(3*var(--s) + 2*var(--g)); */
  aspect-ratio: 1;
  grid-template-columns: repeat(3,auto);
}

.gallery > .img {
  width: 0;
  height: 0;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  cursor: pointer;
  filter: grayscale(30%);
  transition: .35s linear;
  position: relative;
  z-index:9;
}

div.img > img{
  object-fit: cover;
  object-position:center;
}

.img  > .image-paragraph{
  position: absolute;
  color:#fff;
  bottom:-50px;
  opacity:0;
  transition: all .35s linear ;
}

.gallery .img:hover{
  filter: grayscale(0);
  width:  calc(var(--s)*var(--f));
  height: calc(var(--s)*var(--f));
}

.gallery .img:hover > .image-paragraph{
  opacity: 1;
  transform: translateY(-70px);
}

</style>