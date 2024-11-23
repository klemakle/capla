<template>
  <div>
    <!-- google map capla -->
    <div class="-mx-2">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.7467307887923!2d-16.9417687!3d14.783290699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1bfc475920e9f%3A0x329c93eb8cda88e2!2sAuberge%20Restaurant%20Massa%20Massa!5e0!3m2!1sfr!2sfr!4v1732400298989!5m2!1sfr!2sfr" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
    </div>

    <div id="contactForm" class="mx-10 border-2 p-4 -mx-2 ">
      <div id="contactUs" class=" flex flex-col justify-center items-center w-full">
        <div class="font-nexa-light w-auto text-gray-600 text-3xl md:text-6xl my-4 font-nexa-bold"> Contactez nous</div>

         <p
          v-if="errorMessage"
          class="px-2 max-w-md mx-auto mt-4 text-center text-red-400 border-2 border-red-100  rounded-md bg-red-50">
          {{errorMessage}}
        </p>

        <p
          v-if="successMessage"
          class="px-2 max-w-md mx-auto mt-4 text-center text-green-500 border-2 border-green-400  rounded-md bg-green-100">
          {{successMessage}}
        </p>
        
        <div class="input-text w-full md:w-1/2 my-10">
          <div class="app-form-group my-8">
            <input class="app-form-control" type="email" v-model="emailContact" placeholder="EMAIL" required>
          </div>
          <div class="app-form-group my-8">
            <input class="app-form-control" type="text" v-model="nameContact" placeholder="NOM" required>
          </div>
          <div class="app-form-group my-8">
            <textarea class="app-form-control" v-model="messageContact" placeholder="MESSAGE" rows="5" cols="33" required></textarea>
          </div>

          <div class="justify-self-end text-right mx-2 my-auto">
            <button class="bg-gray-50 text-indigo-300 hover:bg-indigo-400 hover:text-white px-4 py-2 rounded-md" @click="sendMessage" type="submit">
              <!-- <span class="material-symbols-outlined">send</span>  -->
              Envoyer
            </button>
          </div>
        </div>

        <div class="social-network my-4 flex flex-row w-auto md:w-auto p-2">
          <div v-for="(n,index) in networks" :key="index" class="w-1/4">
            <a :href="`${n.link}`" target="_blank">
              <img :src="n.image" class="w-1/2 md:w-1/3 h-auto mx-auto" alt="" />
            </a>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import { locations, mapStyle} from '@/assets/js/map.js' ;
import {networks} from '@/assets/js/contact.js'

export default {
  layout:'navbar',
  transition: {
    name: 'home',
    mode: 'out-in'
  },
  head:{
        title: 'Contact',
  },
  data() {
    return {
      emailContact:'',
      nameContact:'',
      messageContact:'',
      errorMessage:'',
      successMessage:'',
      networks,
      currentLocation: {},
      locationsVisibleOnMap: "",
      locations,
    }
  },
  methods:{
    clearInputs(){
      this.emailContact='',
      this.nameContact='',
      this.messageContact='',
      this.errorMessage=null
    },
    sendMessage(){
      if(this.emailContact.trim() == '' || this.nameContact.trim()=='' || this.messageContact.trim() == ''){
        this.errorMessage = "Veuillez remplir tous les champs !"
        return;
      }else{
        this.successMessage = "Votre message a été envoyé avec succès !"
        this.clearInputs()
      }
    }
  }
}
</script>


<style>

.app-form-control {
  width: 100%;
  padding: 10px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #b4b5b9;
  color:#6b7280;
  font-size: 14px;
  text-transform: uppercase;
  outline: none;
  transition: border-color .2s;
}

.app-form-control::placeholder {
  color: #d1d5db;
}

.app-form-control:focus {
  border-bottom-color: #374151;
}

.app-form-button {
  background: #fee2e2;
  border: none;
  color: #f87171;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  transition: all .25s ease-in;
}

.app-form-button:hover {
  color: #f87171;
  background: #fecaca;
}

</style>