export const NuxtLogo = () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const Tutorial = () => import('../../components/Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
export const Fiche = () => import('../../components/fiche.vue' /* webpackChunkName: "components/fiche" */).then(c => wrapFunctional(c.default || c))
export const Stats = () => import('../../components/stats.vue' /* webpackChunkName: "components/stats" */).then(c => wrapFunctional(c.default || c))
export const LandingCertificat = () => import('../../components/landing/certificat.vue' /* webpackChunkName: "components/landing-certificat" */).then(c => wrapFunctional(c.default || c))
export const LandingModalites = () => import('../../components/landing/modalites.vue' /* webpackChunkName: "components/landing-modalites" */).then(c => wrapFunctional(c.default || c))
export const LandingOffre = () => import('../../components/landing/offre.vue' /* webpackChunkName: "components/landing-offre" */).then(c => wrapFunctional(c.default || c))
export const LandingPartner = () => import('../../components/landing/partner.vue' /* webpackChunkName: "components/landing-partner" */).then(c => wrapFunctional(c.default || c))
export const LandingPresentation = () => import('../../components/landing/presentation.vue' /* webpackChunkName: "components/landing-presentation" */).then(c => wrapFunctional(c.default || c))
export const LandingServices = () => import('../../components/landing/services.vue' /* webpackChunkName: "components/landing-services" */).then(c => wrapFunctional(c.default || c))
export const LandingTemoignage = () => import('../../components/landing/temoignage.vue' /* webpackChunkName: "components/landing-temoignage" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
