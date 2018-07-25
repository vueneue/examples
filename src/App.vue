<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <app-view/>
  </div>
</template>

<script>
import AppView from "./AppView";

export default {
  components: {
    AppView
  },
  head: {
    titleTemplate(title) {
      if (title) return `${title} | VueNeue`;
      return "VueNeue";
    },
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ]
  }
};
</script>
