module.exports = {
  /**
   * Below paths will not be server rendered
   */
  spaPaths: ["/private", "/private/**/*"],

  /**
   * Plugins
   */
  plugins: {
    // Theses plugins will be only included on client side
    navLoader: {
      src: "@/plugins/navLoader",
      ssr: false
    },
    spaLoader: {
      src: "@/plugins/spaLoader",
      ssr: false
    },
    lazyLoad: {
      src: "@/plugins/lazyLoad",
      ssr: false
    },
    // This plugin will be installed on both side
    httpClient: "@/plugins/httpClient"
  },

  /**
   * Install a minimal API for auth example
   */
  ssr: {
    server(app) {
      require("./api")(app);
    }
  }
};
