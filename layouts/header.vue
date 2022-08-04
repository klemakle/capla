<template>
  <div>
    <nav
      class="bg-white border-gray-200 px-6 sm:px-4 py-2.5 rounded dark:bg-gray-800"
    >
      <div
        class="container flex flex-wrap justify-between items-center mx-auto"
      >
        <nuxt-link to="/" class="flex items-center">
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Capla</span
          >
        </nuxt-link>
        <button 
          @click="showMobileMenu"
          name="menu-mobile"
          data-collapse-toggle="mobile-menu"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            class="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div id="mobile-menu" v-if="mobileMenuVisible">
          <div class="absolute rounded-md z-10 flex flex-col justify-between items-center text-gray-500 bg-white shadow-lg top-2 px-6 py-4 left-1 right-1 w-full justify-between items-center">
            <div class="mb-2 self-end top-1 -mt-2" tabindex="0"> <span class="text-indigo-700 material-symbols-outlined" @click="closeMobileMenu">close</span> </div>
            <div class="mb-4 mt-2"> 
              <nuxt-link
                to="about"
                class="menu-mobile-link block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
                >A propos</nuxt-link>
            </div>
            <div class="my-4 "> 
               <nuxt-link
                to="/"
                class="menu-mobile-link block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Activités</nuxt-link>
            </div>
            <div class="my-4 "> 
                <nuxt-link
                to="services"
                class="menu-mobile-link block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Services</nuxt-link>
            </div>
            <div class="my-4 "> 
               <nuxt-link
                to="contact"
                class="menu-mobile-link block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Contact</nuxt-link>
            </div>
          </div>
        </div>

        <div class="hidden w-full md:block md:w-auto">
          <ul class=" menu-list flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
             <nuxt-link
                to="about"
                class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
                >A propos</nuxt-link>
            </li>
            <li>
             <nuxt-link
                to="/"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Activités</nuxt-link>
            </li>
            <li>
               <nuxt-link
                to="services"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Services</nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="contact"
                class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >Contact</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data(){
    return{
      mobileMenuVisible: false
    }
  },
  methods:{
    showMobileMenu(){
      this.mobileMenuVisible = true;
    },
    closeMobileMenu(){
      this.mobileMenuVisible = false;
    },
  },
  watch: {
    '$route' () {
      this.mobileMenuVisible = false;
    }
  }
};
</script>

<style></style>
