<template>
  <div>
    <div><Services/></div>

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