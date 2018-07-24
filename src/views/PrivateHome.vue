<template>
  <div>
    <h2>Home</h2>

    <h3
      v-for="(item, index) in items"
      :key="index"
    >
      {{ item.title }}
    </h3>
  </div>
</template>

<script>
export default {
  async asyncData({ app, error }) {
    return {
      items: (await app.$http.private()).data
    };
  }
};
</script>
