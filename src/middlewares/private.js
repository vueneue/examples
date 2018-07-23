export default async ({ ctx, redirect }) => {
  if (!process.client) {
    if (!ctx.cookie || !ctx.cookie.token) {
      redirect("/login");
    }
  } else {
    const Cookies = require("js-cookie");
    if (!Cookies.get("token")) {
      redirect("/login");
    }
  }
};
