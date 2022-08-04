require('dotenv').config()

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    ssr: true,
    target: 'server',
    head: {
        title: 'Capla',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0' },
            // { rel: 'stylesheet', href: 'https://unpkg.com/vueperslides/dist/vueperslides.css' },
        ],
        script: [
            { src: 'https://cdn.lordicon.com/xdjxvujz.js' },
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        './plugins/vue-tooltip.js'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxt/image',
    ],
    image: {
        dir: '@/assets/images'
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        [
            '@nuxtjs/dotenv',
            'nuxt-gmaps',
            '@nuxtjs/axios',
            {
                key: 'AIzaSyDRmCh8-3LoLwg9CrUx4O0JUnTvaPoxEdQ'
            }
        ]
    ],

    axios: {
        // extra config e.g
        BaseURL: '/'
    },

    serverMiddleware: [
        '~/express/index.js',
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: ['vue-tooltip']
    }
}