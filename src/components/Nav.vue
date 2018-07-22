<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/anime">AnimeJS</router-link>
      </li>
      <li>
        <router-link to="/loading">Loading</router-link>
      </li>
    </ul>
  </nav>
</template>

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

