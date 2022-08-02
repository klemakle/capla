<template>
    <div>
        <section class="bg-white">
  <div class="max-w-screen-xl px-4 py-12 mx-auto md:py-16 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-indigo-600 sm:text-4xl">
        Trusted by eCommerce Businesses
      </h2>

      <p class="mt-4 text-gray-400 sm:text-xl">
        En enseignant l'anglais, nous voulons que les gens soient mis au défi dans leur réflexion et 
        nous encourageons les plus jeunes comme les plus âgés à saisir les opportunités que peut leur offrir la maitrise de l'anglais.
      </p>
    </div>

    <div class="mt-8 sm:mt-12">
      <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div
          class="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg"
        >
          <dt class="order-last text-lg font-medium text-gray-400">
            Promotions
          </dt>

          <dd class="text-4xl font-extrabold text-indigo-500 md:text-5xl">
            11
          </dd>
        </div>

        <div
          class="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg"
        >
          <dt class="order-last text-lg font-medium text-gray-400">
            Personnes formées
          </dt>

          <dd class="text-4xl font-extrabold text-indigo-500 md:text-5xl">+<span id="people"></span>300</dd>
        </div>

        <div
          class="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg"
        >
          <dt class="order-last text-lg font-medium text-gray-400">
            Pour tous les âges
          </dt>

          <dd class="text-4xl font-extrabold text-indigo-500 md:text-5xl">8 - 55</dd>
        </div>
      </dl>
    </div>
  </div>
</section>

    </div>
</template>

<script>
export default {
  //  methods: {
  //   animate(obj, initVal, lastVal, duration) {
  //        let startTime = null;

  //     //get the current timestamp and assign it to the currentTime variable
  //     let currentTime = Date.now();

  //     //pass the current timestamp to the step function
  //     const step = (currentTime ) => {

  //     //if the start time is null, assign the current time to startTime
  //     if (!startTime) {
  //        startTime = currentTime ;
  //     }
  //      //calculate the value to be used in calculating the number to be displayed
  //     const progress = Math.min((currentTime - startTime)/ duration, 1);

  //     //calculate what to be displayed using the value gotten above
  //     obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

  //     //checking to make sure the counter does not exceed the last value (lastVal)
  //     if (progress < 1) {
  //        window.requestAnimationFrame(step);
  //     } else {
  //           window.cancelAnimationFrame(window.requestAnimationFrame(step));
  //        }
  //     };
  //     //start animating
  //        window.requestAnimationFrame(step);
  //     }
  // },
  // mounted(){
  //   const text1=document.querySelector("#people");
  //   this.animate(text1, 0, 300, 3000);
  // }
}
</script>