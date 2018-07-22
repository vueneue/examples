export default async ({ app, router }) => {
  if (process.client) {
    app.$Progress.start();

    router.beforeResolve((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;
        app.$Progress.parseMeta(meta);
      }
      app.$Progress.start();
      next();
    });

    router.afterEach((to, from) => {
      app.$Progress.finish();
    });
  }
};
