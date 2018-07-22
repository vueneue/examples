export default async ({ app }) => {
  if (process.client) {
    const loader = document.querySelector(".spa-loading");
    if (loader) {
      loader.remove();
    }
  }
};
