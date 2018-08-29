/**
 * Middleware to check if current user have a JWT
 */
export default async ({ ctx, redirect }) => {
  const redirectPath = `/login?error=1`;

  /**
   * On server side
   */
  if (!process.client) {
    if (!ctx.cookie || !ctx.cookie.token) {
      // If no cookie/token redirect to login page
      redirect(redirectPath);
    }

    /**
     * On client side
     */
  } else {
    const Cookies = require('js-cookie');
    if (!Cookies.get('token')) {
      // If no cookie/token redirect to login page
      redirect(redirectPath);
    }
  }
};
