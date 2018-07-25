<template>
  <nav class="navbar is-fixed-top is-primary">
    <div class="container">

      <div class="navbar-brand">
        <label class="nav-toggle navbar-burger" for="nav-toggle-state">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </label>
      </div>

      <input ref="burgerToggle" type="checkbox" id="nav-toggle-state" />

      <div class="navbar-menu">
        <router-link 
          v-for="item in items"
          :key="item.path"
          :exact="true"
          class="navbar-item"
          active-class="is-active" :to="item.path"
          @click.native="onClickItem"
        >
          {{ item.label }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    items: [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "AnimeJS", path: "/anime" },
      { label: "Loading", path: "/loading" },
      { label: "Lazy load", path: "/lazy" },
      { label: "Login", path: "/login" },
      { label: "Private", path: "/private" }
    ]
  }),

  methods: {
    onClickItem() {
      if (this.$refs.burgerToggle.checked) {
        this.$refs.burgerToggle.checked = false;
      }
    }
  }
};
</script>
