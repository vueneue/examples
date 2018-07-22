<template>
  <div class="app-view">
    <app-nav/>
    <!-- Router View -->
    <router-view
      v-if="!error"
      :key="$route.fullPath"
    />
    <!-- Error Page -->
    <error-page
      v-else
    />
  </div>
</template>

<script>
import ErrorPage from "./components/ErrorPage.vue";
import AppNav from "./components/Nav.vue";

export default {
  components: {
    AppNav,
    ErrorPage
  },

  computed: {
    error() {
      return this.$store.state.errorHandler.error;
    }
  }
};
</script>
