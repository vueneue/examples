import Vue from "vue";
import axios from "axios";

const httpClient = axios.create();

if (!process.client) {
  httpClient.defaults.baseURL = "http://localhost:8080";
}

Vue.prototype.$http = {
  token: null,
  login(name) {
    return httpClient.post("/api/login", { name }).then(response => {
      this.token = response.data.token;

      if (process.client) {
        const Cookies = require("js-cookie");
        Cookies.set("token", this.token);
      }

      return response;
    });
  },
  me() {
    return httpClient.get("/api/me", {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });
  },
  private() {
    return httpClient.get("/api/private", {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });
  },
  logout() {
    if (process.client) {
      require("js-cookie").remove("token", { path: "" });
      this.token = null;
    }
  }
};

export default async ({ ctx }) => {
  if (!process.client) {
    if (ctx.cookie) {
      Vue.prototype.$http.token = ctx.cookie.token;
    }
  } else {
    const Cookies = require("js-cookie");
    Vue.prototype.$http.token = Cookies.get("token");
  }
};
