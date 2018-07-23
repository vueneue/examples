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
    let data;
    try {
      data = (await app.$http.private()).data;
    } catch (err) {
      if (err.response) {
        error("Forbidden", err.response.status);
      } else {
        throw err;
      }
    }

    return {
      items: data
    };
  }
};
</script>
