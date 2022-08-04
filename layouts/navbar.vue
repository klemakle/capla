<template>
  <div>
    <Header />
    <nuxt-child class="mt-2 mb-8 mx-2 md:mx-4" />
    <Footer class="bottom-0 w-full"/>
  </div>
</template>

<script>
import Header from './header.vue'
import Footer from './footer.vue'
export default {
  components:{Header, Footer}
}
</script>

<style>
  body{
    background-color: #FDFDFE;
  }
</style>