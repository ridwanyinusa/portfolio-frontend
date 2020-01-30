module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://js.stripe.com/v3' }
    ]
  },

  modules: [  
    '@nuxtjs/apollo',
  ],
  apollo: {  
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:1337/graphql'
      }
    }
  },

  css: [  
    "uikit/dist/css/uikit.min.css",
    "uikit/dist/css/uikit.css",
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [  
    { src: '~/plugins/uikit.js', ssr: false }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

