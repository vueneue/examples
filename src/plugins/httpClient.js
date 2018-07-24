import Vue from "vue";
import axios from "axios";

/**
 * Create an Axios instance
 */
const httpClient = axios.create();

/**
 * On server side specify the base URL
 */
if (!process.client) {
  httpClient.defaults.baseURL = "http://localhost:8080";
}

/**
 * Add this client to all components
 */
Vue.prototype.$http = {
  // Simple variable to store current token
  token: null,

  /**
   * Login
   */
  login(name) {
    return httpClient.post("/api/login", { name }).then(response => {
      // Store token in memory
      this.token = response.data.token;

      // On client side: store token in cookie
      if (process.client) {
        const Cookies = require("js-cookie");
        Cookies.set("token", this.token);
      }

      return response;
    });
  },

  /**
   * Simple function to return current user with a token
   */
  me() {
    return httpClient.get("/api/me", {
      headers: {
        // Add JWT to headers
        Authorization: `Bearer ${this.token}`
      }
    });
  },

  /**
   * Fetch protected data
   */
  private() {
    return httpClient.get("/api/private", {
      headers: {
        // Add JWT to headers
        Authorization: `Bearer ${this.token}`
      }
    });
  },

  /**
   * Logout
   */
  logout() {
    // On client side: remove cookie with token
    if (process.client) {
      require("js-cookie").remove("token", { path: "" });
    }
    this.token = null;
  }
};

/**
 * At boot time try to get token from cookies
 */
export default async ({ ctx }) => {
  // On server side
  if (!process.client) {
    if (ctx.cookie) {
      Vue.prototype.$http.token = ctx.cookie.token;
    }

    // On client side
  } else {
    const Cookies = require("js-cookie");
    Vue.prototype.$http.token = Cookies.get("token");
  }
};
