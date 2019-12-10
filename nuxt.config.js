import colors from "vuetify/es5/util/colors";

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s | " + "LijahTheDev",
    title: "LijahTheDev" || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [{ src: "~assets/main.scss", lang: "scss" }],

  optimizedImages: {
    optimizeImages: true
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["./plugins/moment.js"],
  /*
   ** Router Settings
   */
  router: {
    middleware: ["auth"]
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@bazzite/nuxt-optimized-images"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  pwa: {
    manifest: {
      name: "LijahTheDev",
      short_name: "LTD",
      lang: "en",
      description:
        "LijaTheDev.com, Paul Scott's professional portfolio website using Nuxt.",
      theme_color: "#333",
      background_color: "#000",
      start_url: "https://lijahthedev.com",
      display: "standalone"
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    extractCSS: true
  }
};
