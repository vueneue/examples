import Vue from "vue";
import App from "./App.vue";
import VueProgressBar from "vue-progressbar";

if (process.client) require("./registerServiceWorker");

Vue.config.productionTip = false;

Vue.use(VueProgressBar);

export default ({ router, store }) => {
  return new Vue({
    router,
    store,
    render: h => h(App)
  });
};
