export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'grj-academy-event',
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
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,600,700' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto+Slab:400,700' }
    ],
    script: [
      {src: "https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"},
      {src: "https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"},
      {src: "https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"},
      {src: "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"},
      {src: "/js/modernizr.js"},
      {src: "/js/jquery-simple-validator.min.js"},
      { src: '/js/main.js' },
      { src: '/js/jquery.validate.min.js'},
      { src: '/js/bootstrap.min.js' },
      { src: '/js/owl.carousel.min.js' },
      { src: '/js/custom.js' },
      { src: '/js/jquery.countdown.js'}
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/css/owl.carousel.min.css',
    '~/static/css/owl.theme.default.min.css',
    '~/static/css/bootstrap.min.css',
    '~/static/css/style.css',
    '~/static/css/style-mobile.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/apollo',
  ],
  apollo: {
    clientConfigs: {
      default:{
        httpEndpoint: "http://localhost:1337/graphql",

      }
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  googleAnalytics: {
    // Options
    id: 'UA-135647458-2'
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
