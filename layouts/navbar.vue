<template>
  <div>
    <Header />
    <nuxt-child class="my-8 mx-4" />
  </div>
</template>

<script>
import Header from './header.vue'
export default {
  components:{Header}
}
</script>

<style>
  body{
    background-color: #FDFDFE;
  }
</style>