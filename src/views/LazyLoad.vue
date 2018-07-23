<template>
  <div>
    <div
      v-for="(item, index) in items"
      :key="index"
      class="image-item"
    >
      <img
        v-lazyload
        src="http://via.placeholder.com/600x400?text=..."
        :data-src="item"
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },

  created() {
    for (let i = 0; i < 50; i++) {
      this.items.push(
        `https://picsum.photos/600/400/?random&ts=${Math.random()}`
      );
    }
  }
};
</script>