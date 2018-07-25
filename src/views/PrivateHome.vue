<template>
  <div>
    <h3
      v-for="(item, index) in items"
      :key="index"
    >
      {{ item.title }}
    </h3>
  </div>
</template>

<script>
/**
 * Page to show protected data
 * This page is protected with a middleware setup in src/views/PrivateLayout.vue
 */
export default {
  async asyncData({ app, error }) {
    return {
      items: (await app.$http.private()).data
    };
  }
};
</script>
