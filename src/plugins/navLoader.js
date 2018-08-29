import Vue from 'vue';
import VueProgressBar from 'vue-progressbar';

/**
 * Simple plugin to show a loader on pages changes
 */
Vue.use(VueProgressBar, {
  color: '#2E81ED',
  failedColor: '#FF0000',
  thickness: '5px'
});

export default async ({ appCreated, router, store }) => {
  appCreated(app => {
    // On boot: start progress bar
    app.$Progress.start();

    // When route has a redirect
    app.$on('router.redirect', () => {
      app.$Progress.finish();
    });

    // When a route has an error
    app.$on('router.error', () => {
      app.$Progress.fail();
    });

    // When a route change
    router.beforeResolve((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;
        app.$Progress.parseMeta(meta);
      }
      // Start progress
      app.$Progress.start();
      next();
    });

    // When route changed
    router.afterEach((to, from) => {
      app.$Progress.finish();
    });
  });
};
