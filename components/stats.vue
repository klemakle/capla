<template>
    <div>
        <div class="stats flex flex-col md:flex-row w-full bg-gray-50 justify-between px-12 py-4">

            <!-- promotion -->
            <div class="promotion py-2 px-3 bg-white w-full md:w-1/5 rounded-lg my-4" >
                <div class="top-card flex flex-row justify-between mb-6">
                <div class="px-2 py-2 w-1/5 bg-red-200 self-start rounded-lg -mt-7">
                    <img src="../assets/images/stats/promo.svg" class="center" alt="promo_alt">
                </div>
                <div class="flex flex-col justify-start">
                    <p class="text-gray-400">Promotions</p>
                    <p id="promo" class="text-gray-500 self-end text-base">11</p>
                </div>
                </div>
                <p class="self-end mt-4 text-gray-500">Depuis sa création</p>
            </div>

            <!-- femmes -->
            <div class="py-2 px-3 bg-red-600 w-full md:w-1/5 rounded-lg my-4">
                <div class="top-card flex flex-row justify-between mb-6">
                <div class="px-2 py-2 w-1/5 bg-gray-50 self-start rounded-lg -mt-7">
                    <img src="../assets/images/stats/woman.png" class="center" alt="promo_alt">
                </div>
                <div class="flex flex-col text-white justify-start">
                    <p class="">Femmes</p>
                    <p id="promo" class=" self-end text-base">300</p>
                </div>
                </div>
                <p class="self-end mt-4 text-white">Depuis sa création</p>
            </div>

            <!-- hommes -->
             <div class="py-2 px-3 bg-gray-700 w-full md:w-1/5 rounded-lg my-4">
                <div class="top-card flex flex-row justify-between mb-6">
                <div class="px-2 py-2 w-1/5 bg-gray-50 self-start rounded-lg -mt-7">
                    <img src="../assets/images/stats/man.png" class="center" alt="promo_alt">
                </div>
                <div class="flex flex-col text-white justify-start">
                    <p class="">Hommes</p>
                    <p id="promo" class=" self-end text-base">125</p>
                </div>
                </div>
                <p class="self-end mt-4 text-white">Depuis sa création</p>
            </div>

            <!-- tranche d'age -->
             <div class="py-2 px-3 bg-red-600 w-full md:w-1/5 rounded-lg my-4">
                <div class="top-card flex flex-row justify-between mb-6">
                <div class="px-2 py-2 w-1/5 bg-gray-50 self-start rounded-lg -mt-7">
                    <img src="../assets/images/stats/woman.png" class="center" alt="promo_alt">
                </div>
                <div class="flex flex-col text-white justify-start">
                    <p class="">Femmes</p>
                    <p id="promo" class=" self-end text-base">300</p>
                </div>
                </div>
                <p class="self-end mt-4 text-white">Depuis sa création</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "stats"    
}
</script>