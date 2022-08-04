<template>
    <div>
        <div class=" flex flex-col justify-between items-center bg-gray-50  mx-auto mt-12 py-5 px-10 w-full">
            <div class="text-gray-300 mb-4 partenaires text-gray-400">Partenaires</div>
            <div class="flex flex-row md:flex-row flex-wrap justify-between items-center content-center w-full h-auto text-3xl">
                <div class="partner w-full md:w-1/4 h-24">
                    <a href="http://www.iadlsenegal.com/" target="blank">IADL SENEGAL</a>
                </div>
                <div class="partner w-full md:w-1/4 h-24">
                    <a href="https://web.facebook.com/Thiesenmarche/?_rdc=1&_rdr" target="blank">THIES EN MARCHE</a>
                </div>
                <div class="partner w-full md:w-1/4 h-24">
                    <a href="https://instagram.com/cayor_solution_tour?igshid=YmMyMTA2M2Y=" target="blank">CAYOR SOLUTION TOUR</a>
                </div>
                <div class="partner w-full md:w-1/4 h-24">
                    <a href="https://fafaloprogram.org/" target="blank">FAFALO PROGRAM</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{

}
</script>


<style>
@font-face {
  font-family: Russo;
  src: url("@/assets/fonts/RussoOne-Regular.ttf");
}
  .partenaires{
    font-family: Russo;
  }
  .partner{
    font-family: Russo;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .partner > a {
    text-align: center;
    transition: all .25s ease;
    @apply text-gray-300;
  }

  .partner > a:hover{
    color: #9ca3af;
  }

</style>