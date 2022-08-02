<template>
  <div>
    <div><Sommaire/></div>

    <!-- tableau fiche de services -->
    <div class="mt-12"><Fiche/></div>

    <!-- modalités -->
    <div><Modalites/> </div>
  </div>
</template>

<script>

import Services from '~/components/landing/services.vue';
import Sommaire from '~/components/services/sommaire.vue';
import Fiche from '~/components/services/fiche.vue'
import Modalites from '~/components/landing/modalites.vue';
export default {
  layout:'navbar',
  components:{Services, Modalites, Fiche, Sommaire},
  head:{
        title: 'Services',
  },
}
</script>