module.exports = {
  spaPaths: ["/private", "/private/**/*"],
  plugins: {
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
    }
  },
  ssr: {
    server(app) {
      require("./api")(app);
    }
  }
};
