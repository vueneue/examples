import Router from "vue-router";

export default () => {
  return new Router({
    mode: process.ssr ? "history" : "hash",
    routes: [
      { path: "/", name: "home", component: () => import("./views/Home.vue") },
      {
        path: "/about",
        name: "about",
        component: () => import("./views/About.vue")
      },
      {
        path: "/anime",
        name: "anime",
        component: () => import("./views/Anime.vue")
      },
      {
        path: "/loading",
        name: "loading",
        component: () => import("./views/LongLoading.vue")
      },
      {
        path: "/private",
        component: () => import("./views/PrivateLayout.vue"),
        children: [
          {
            path: "",
            name: "private.home",
            component: () => import("./views/PrivateHome.vue")
          }
        ]
      }
    ]
  });
};
