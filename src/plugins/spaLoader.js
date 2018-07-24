/**
 * Plugin to remove loader when everything is ready on SPA routes
 */
export default async ({ app }) => {
  // Add a callback on main app mounted() hook
  app.$options.mounted = [
    () => {
      setTimeout(() => {
        // Find loader
        const loader = document.querySelector(".spa-loading");
        if (loader) {
          // Remove it
          loader.remove();
        }
      }, 500);
    }
  ];
};
