export default async ({ app }) => {
  const loader = document.querySelector(".spa-loading");
  if (loader) {
    loader.remove();
  }
};
