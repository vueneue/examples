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

<style>
html,
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  max-width: 600px;
  margin: auto;
}
</style>
