<template>
  <div>
    <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div class="max-w-lg mx-auto">
        <h1 class="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">Démarrer une nouvelle session</h1>

        <p class="max-w-md mx-auto mt-4 text-center text-gray-500">
          Veuillez remplir correctement les champs pour ajouter une nouvelle session.
        </p>


        <p v-if="messageError"
          class="max-w-md mx-auto mt-4 text-center text-red-400 border-2 border-red-100  rounded-md bg-red-50">
          {{ messageError }}
        </p>

        <p v-if="messageSucces"
          class="max-w-md mx-auto mt-4 text-center text-green-600 border-2 border-green-200  rounded-md bg-green-50">
          {{ messageSucces }}
        </p>

        <div action="" class="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">

          <div>
            <label for="email" class="text-sm font-medium">Session</label>

            <div class="relative mt-1">
              <input type="text" id="session" v-model="session"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Exemple: Session d'été" />
            </div>
          </div>


          <div>
            <label for="email" class="text-sm font-medium">Date de début</label>

            <div class="relative mt-1">
              <input type="text" id="debut" v-model="debut"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Exemple: 01 Janvier 2022" />
            </div>
          </div>

          <div>
            <label for="password" class="text-sm font-medium">Mot de passe</label>

            <div class="relative mt-1">
              <input type="password" v-model="password" id="password"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Entrer le mot de passe" />
            </div>
          </div>

          <button type="submit" @click="createSession"
            class="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg">
            Valider
          </button>

          <p class="text-sm text-center text-gray-500">
            <nuxt-link class="underline" to="/">Retour</nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  layout: 'navbar',
  data() {
    return {
      session: '',
      debut: '',
      password: '',
      messageError: '',
      messageSucces: '',
    }
  },
  methods: {
    clearInputs() {
      this.password = ''
      this.debut = ''
      this.session = ''
      this.messageError = null
    },
    async createSession() {
      console.log(`${this.$config.capla}`)
      if (this.password !== `${this.$config.capla}`) {
        this.messageError = 'Mot de passe incorrect';
        return;
      } else {
        if (this.session.trim() == '' || this.debut.trim() == '') {
          this.messageError = 'Veuillez remplir les champs !';
          return;
        } else {
          // console.log("----- API call -----")
          const session = this.session;
          const debut = this.debut;
          try {
            const response = await axios.post('api/new-session', { session, debut })
            // console.log("-----Kalidou---- ",response.data)
            this.messageSucces = response.data.message;
            this.clearInputs();

          } catch (error) {
            console.log(error)
          }
        }
      }
    }
  }
}
</script>