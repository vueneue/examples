<template>
  <nav class="navbar is-fixed-top is-primary">
    <div class="container">
      <div class="navbar-brand">
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu">
        <router-link 
          v-for="item in items"
          :key="item.path"
          class="navbar-item"
          exact="true"
          active-class="is-active" :to="item.path"
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
  })
};
</script>


<style scoped>
nav {
  padding: 20px;
  text-align: center;
  background: #eee;
}

ul {
  list-style: none;
  list-style-image: none;
  display: flex;
}

ul li {
  list-style: none;
  list-style-image: none;
  margin: 0 10px;
}
</style>

