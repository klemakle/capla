<template>
  <div class="flex flex-col justify-between items-center -mx-2 md:-mx-4">
    <div class="text-indigo-400 text-5xl mb-8 md:mb-12 font-montserrat">
      Gallery
    </div>

    <div class="w-full bg-gray-50 py-8 ">
      <div class="gallery w-full md:w-4/5 mx-auto">
        <div  v-for="i in 9" :key="i" class="img">
          <div class="p-4 text-xs image-paragraph">
            <p class="font-nexa-bold text-sm md:text-base mb-2">
              Title
            </p>
            <p class="font-nexa-light text-xs md:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi unde, 
            </p>
            
          </div>
          <img src="https://picsum.photos/id/1028/300/300" alt="a forest after an apocalypse" class="w-full h-full rounded-md">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css'


export default {
  layout:'navbar',
  components:{VueperSlides, VueperSlide},
  head:{
        title: 'Activité',
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
           slides: [
          {
            title: 'Aurora Borealis',
            content: 'This Youtube video has params in the URL and extra attributes on the iframe.',
            image: 'https://i.ytimg.com/vi_webp/ehJg_OlcjpE/maxresdefault.webp',
            video: {
              // url: 'https://www.youtube.com/embed/ehJg_OlcjpE?rel=0&showinfo=0&controls=0&fs=0&modestbranding=1&color=white&iv_load_policy=3&autohide=1&enablejsapi=1',
              webm: `https://www.youtube.com/watch?v=RXascZIIuQE`,
               props: { autoplay: true, loop: true, controls: false, muted: true }
            }
          },
          {
            title: 'Fjords',
            content: 'This video can\'t be interacted with.',
            image: 'https://i.ytimg.com/vi/2sr9MGkkeks/maxresdefault.jpg',
            video: {
              // url: 'https://www.youtube.com/embed/2sr9MGkkeks?controls=0&fs=0&modestbranding=1&color=white&iv_load_policy=3&autohide=1&enablejsapi=1',
              webm: `https://www.youtube.com/watch?v=RXascZIIuQE`,
               props: { autoplay: true, loop: true, controls: false, muted: true }
            }
          }
]
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
  filter: grayscale(80%);
  transition: .35s linear;
  position: relative;
  z-index:9;
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