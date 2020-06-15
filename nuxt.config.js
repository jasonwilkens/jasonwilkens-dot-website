
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Jason\'s personal web page',
    meta: [
      { property: 'og:image:alt', content: 'Photo of Jason and wife on vacation' },
      { property: 'og:image:width', content: '800' },
      { property: 'og:image:height', content: '600' },
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
      }
    ],
    noscript: [
      { innerHTML: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W9HSTKL" height="0"
          width="0" style="display:none;visibility:hidden"></iframe><style>#__nuxt
          {margin-top: 0;} body.freeze-body {overflow: unset;} div.menu {display: none;} #intro
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
      description: 'Personal web page of Jason Wilkens',
      icons: [
        {
          src: 'static/favicon/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ],
      lang: 'en',
      display: 'standalone',
      theme_color: '#FFD200',
      ogImage: 'https://xenodochial-shockley-6584a2.netlify.app/images/preview.jpg',
      ogSiteName: 'Jason&#8217; personal web page',
      ogTitle: 'Hey, it&#8217;s Jason',
      ogUrl: 'https://xenodochial-shockley-6584a2.netlify.app',
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
  }
}
