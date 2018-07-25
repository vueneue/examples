import "./assets/styles/index.scss";
import Vue from "vue";
import App from "./App.vue";

if (process.client) require("./registerServiceWorker");

Vue.config.productionTip = false;

Vue.component("page-layout", () => import("./components/PageLayout.vue"));

export default ({ router, store }) => {
  return new Vue({
    router,
    store,
    render: h => h(App)
  });
};
