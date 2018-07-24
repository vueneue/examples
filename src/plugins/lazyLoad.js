import Vue from "vue";
import VueLazyload from "vue-tiny-lazyload-img";

/**
 * Simple Vue plugin to lazy load images
 * This plugin is only included on client side with ssr = false (see neue.config.js)
 */

Vue.use(VueLazyload, {});
