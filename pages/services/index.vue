<template>
  <div>
    <!-- <div><Services/></div> -->


    <!-- tableau services -->
    <div class="mx-2">
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-50 uppercase bg-gray-50 bg-indigo-400 dark:text-gray-400">
                  <tr>
                      <th scope="col" class="py-3 px-6">Offres</th>
                      <th scope="col" class="py-3 px-6">Objectifs</th>
                      <th scope="col" class="py-3 px-6">Modules</th>
                      <th scope="col" class="py-3 px-6">Public ciblé</th>
                  </tr>
              </thead>
              <tbody>
                  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700" >
                      <th rowspan="" scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">Anglais de la conversation</th>
                      <td class="py-4 px-6 text-xs">
                          Renforcer ou améliorer le niveau communicationnel de l'auditeur en situation d'entreprise ou dans la vie sociale.
                      </td>
                      <td class="py-4 px-6">
                          <p class="text-xs flex flex-row items-center mb-2 justify-start"><span class="text-sm text-indigo-400 mr-1 material-symbols-outlined">done</span>Présentation professionnelle</p>
                          <p class="text-xs flex flex-row items-center mb-2 justify-start"><span class="text-sm text-indigo-400 mr-1 material-symbols-outlined">done</span>Réception physique et téléphonique</p>
                          <p class="text-xs flex flex-row items-center mb-2 justify-start"><span class="text-sm text-indigo-400 mr-1 material-symbols-outlined">done</span>Différents types de langage: familier, soutenu, commun</p>
                      </td>
                      <td class="py-4 px-6">
                         <p class="text-xs flex items-center mb-2 justify-start"> <span class="text-indigo-400 material-symbols-outlined">remove</span> Cadres d'entreprise</p>
                         <p class="text-xs flex items-center mb-2 justify-start"> <span class="text-indigo-400 material-symbols-outlined">remove</span> Élèves et étudiants</p>
                      </td>
                  </tr>
                  <tr class="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-700" >
                      <th rowspan="" scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">Business English ou anglais commercial</th>
                      <td class="py-4 px-6 text-xs">
                          Comprendre, interpréter, savoir communiquer et interagir avec les clients en anglais commercial en entreprise
                      </td>
                      <td class="py-4 px-6">
                          <p class="text-xs flex flex-row items-center mb-2 justify-start"><span class="text-sm text-indigo-400 mr-1 material-symbols-outlined">done</span>Technique de négociation et ventes</p>
                          <p class="text-xs flex flex-row items-center mb-2 justify-start"><span class="text-sm text-indigo-400 mr-1 material-symbols-outlined">done</span>Rédaction de lettres commerciales</p>
                          <p class="text-xs flex flex-row items-center mb-2 justify-start"><span class="text-sm text-indigo-400 mr-1 material-symbols-outlined">done</span>Bon de commande, Factures en anglais</p>
                      </td>
                      <td class="py-4 px-6">
                         <p class="text-xs flex items-center mb-2 justify-start"> <span class="text-indigo-400 mr-1 material-symbols-outlined">remove</span> Agent commercial</p>
                         <p class="text-xs flex items-center mb-2 justify-start"> <span class="text-indigo-400 mr-1 material-symbols-outlined">remove</span> Professionnels</p>
                         <p class="text-xs flex items-center mb-2 justify-start"> <span class="text-indigo-400 mr-1 material-symbols-outlined">remove</span> Hommes ou Femmes d'affaires</p>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>


    </div>


    <!-- modalités -->
    <div><Modalites/> </div>
  </div>
</template>

<script>

import Services from '~/components/landing/services.vue';
import Offre from '~/components/landing/offre.vue'
import Certificat from '~/components/landing/certificat.vue';
import Modalites from '~/components/landing/modalites.vue';
export default {
  layout:'navbar',
  components:{Services, Offre, Certificat, Modalites},
}
</script>