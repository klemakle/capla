<template>
  <div>
    <!-- presentation -->
    <div class="flex flex-col-reverse md:flex-row md:flex-wrap justify-between content-start px-10  mb-3">
      <div class="h-auto w-full md:w-1/2 px-1 h-auto  ">
        <div class="text-xl md:text-7xl text-gray-700 border-3 h-auto w-full">
          <p class="py-1 md:py-3">Meet 'img'</p>
          <p class="py-1 md:py-3">without a </p>
          <p class="py-1 md:py-3">Hitch 'images'</p>
        </div>
        <p class="my-2 text-gray-400 leading-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque vero minima animi a quaerat, quis quidem natus suscipit tenetur. Quod qui deserunt velit explicabo vel soluta reprehenderit possimus dolor dolore!</p>
        <button class="px-5 py-4 bg-indigo-500 hover:bg-blue-500 text-white rounded-2xl my-3"> Contact Us </button>
      </div>
      <div class="w-full mb-2 md:mb-0 md:w-1/2 ">
        <img class="w-full h-full" src="../assets/images/capla.svg" alt="capla">
      </div>
    </div>

    <!-- more fun with effect filters -->
    <div class="flex flex-col md:flex-row bg-gray-50 mx-auto mt-12 py-10 px-10 w-full">
      <div class="text-5xl md:w-1/3 w-full h-36 p-4">
        More fun with effect filters
      </div>

      <div v-for="n in 3" :key="n" class="bg-white card  flex flex-col rounded-xl py-2 px-4 justify-between my-2 w-full md:w-1/4 mx-2 items-start">
        <div class="photo w-20 bg-blue-400 rounded-md h-11 mb-1 mt-2"></div>
        <div class="title text-lg  text-gray-600 my-1">Mama Koala</div>
        <div class="text-card text-gray-300 my-2 w-full text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque vero minima animi a quaerat,</div>
      </div>

      <div></div>
    </div>

    <!-- partners -->
    <div class=" flex flex-col justify-between items-center bg-gray-50  mx-auto mt-12 py-5 px-10 w-full">
      <div class="text-gray-400 mb-4">Partenaires</div>
      <div class="flex flex-wrap justify-around items-center w-full h-auto">
        <div class="partner w-1/4 h-24">
          <img class="h-full" src="../assets/images/partners/thies.jpeg" alt="">
        </div>
        <div class="partner w-1/4 h-32">
          <img class="h-full" src="../assets/images/partners/mac.png" alt="">
        </div>
        <div class="partner w-1/4 h-24">
          <img class="h-full" src="../assets/images/partners/iadl.png" alt="">
        </div>
        <div class="partner w-1/4 h-24">
          <img class="h-full" src="../assets/images/partners/fafalo.jpg" alt="fafalo">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout:'navbar',

}
</script>


<style>
  .partner > img{
    filter: grayscale(100%);
    opacity: .6;
    transition: all ease .25s;
  }
  .partner > img:hover{
    filter: grayscale(0%);
    opacity: 1;
  }
</style>