
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Jason\'s personal web page',
    meta: [
      { property: 'og:image:alt', content: 'Photo of Jason and wife on vacation' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png'},
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' }
    ],
    __dangerouslyDisableSanitizers: ['script', 'noscript'],
    script: [
      {
        hid: 'gtm',
        innerHTML: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W9HSTKL');
        `,
        type: 'text/javascript',
        charset: 'utf-8',
        defer: true,
        async: true
      },
      {
        src: '//instant.page/5.1.0',
        body: 'true',
        type: 'module',
        integrity: 'sha384-by67kQnR+pyfy8yWP4kPO12fHKRLHZPfEsiSXR8u2IKcTdxD805MGUXBzVPnkLHw'
      }
    ],
    noscript: [
      { innerHTML: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W9HSTKL" height="0"
          width="0" style="display:none;visibility:hidden"></iframe><style>#__nuxt
          {margin-top: 0;} html body.freeze-body {overflow: auto;} div.menu {display: none;} #intro
          {display: none;}</style>
        `
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: false,
  /*
  ** Global CSS
  */
  css: [
    '~/static/main.css'
  ],
  /*
  ** Default page transition mode
  */
  pageTransition: {
    name: 'route',
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
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
    '@nuxtjs/pwa',
  ],
  /*
  ** Customizing manifest
  */
  pwa: {
    manifest: {
      name: 'Jason Wilkens dot website',
      short_name: 'Jason',
      description: 'A place to put my stuff',
      icons: [
        {
          src: 'favicon/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ],
      lang: 'en',
      display: 'standalone',
      theme_color: '#FFD200',
      ogImage: {
        path: 'https://jasonwilkens.website/images/preview.jpg',
        width: 800,
        height: 600
      },
      ogSiteName: 'Jason\'s personal web page',
      ogTitle: 'Hey, it\'s Jason',
      ogUrl: 'https://jasonwilkens.website',
      twitterCard: 'summary_large_image'
    },
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  generate: {
    fallback: true
  },
  target: 'static'
}
