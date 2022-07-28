<template>
  <div>
    <!-- <div><Services/></div> -->

    <!-- tableau fiche de services -->
    <div class="mt-12"><Fiche/></div>

    <!-- modalités -->
    <div><Modalites/> </div>
  </div>
</template>

<script>

import Services from '~/components/landing/services.vue';
import Fiche from '~/components/fiche.vue'
import Modalites from '~/components/landing/modalites.vue';
export default {
  layout:'navbar',
  components:{Services, Modalites, Fiche},
  head:{
        title: 'Services',
  },
}
</script>