
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [{
      src: "https://rawcdn.githack.com/simplifyui/simplify/8cf3f733e8b8723a8b4bc0f640b8d4d96fc5d1fe/simplifyui/simplify/simplifyjs.js"
    }]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'blue' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/custum.css',
    '@/assets/simplify/style.css',
    '@/assets/simplify/simplifyjs/editor.css'
    
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/cssjseditor', mode: 'client'},
    { src: '@/plugins/simplify1', mode: 'client'},
    { src: '@/plugins/formauth', mode: 'client'}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [

  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
   
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
