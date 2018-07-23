export default async ({ app }) => {
  app.$options.mounted = [
    () => {
      setTimeout(() => {
        const loader = document.querySelector(".spa-loading");
        if (loader) {
          loader.remove();
        }
      }, 500);
    }
  ];
};
