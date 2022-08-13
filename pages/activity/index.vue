<template>
  <div>
    <vueper-slides bullets-outside :dragging-distance="50">
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :image="slide.image"
        :content="''" 
        :video="slide.video"
        />
    </vueper-slides>
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