export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'KodeInaja - Belajar koding dari dasar',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Belajar koding atau pemrograman dari dasar' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/easymde/src/css/easymde.min.css' }
    ],
    script: [
      { src: '/easymde/src/js/easymde.min.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/infinite-scroll.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/pwa',
    'bootstrap-vue/nuxt',
    ['nuxt-content-git', {
      createdAtName: 'gitCreatedAt'
    }],
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prismjs/themes/prism-okaidia.min.css'
      }
    },
    nestedProperties: ['categories.slug']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  pwa: {
    manifest: {
      name: 'KodeInaja',
      short_name: 'KodeInaja',
      theme_color: '#2F4F4F'
    }
  }
}
