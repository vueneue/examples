/**
 * Plugin to remove loader when everything is ready on SPA routes
 */
export default async ({ appCreated }) => {
  appCreated(app => {
    // Add a callback on main app mounted() hook
    app.$on('app.mounted', () => {
      // Find loader
      const loader = document.querySelector('.spa-loading');
      if (loader) {
        // Remove it
        loader.remove();
      }
    });
  });
};
