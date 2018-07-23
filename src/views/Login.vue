<template>
  <div>
    <h1>Login</h1>

    <form
      v-if="!user || !user.name"
      @submit.prevent="onSubmit"
    >
      <input v-model="name" type="text" placeholder="Enter your name...">
      <button
        type="submit"
      >
        Login
      </button>
    </form>

    <div v-else>
      Welcome {{ user.name }} !
      <br>
      <button @click="onLogout()">
        Logout
      </button>
    </div>

  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    const { data } = await app.$http.me();
    return {
      user: data
    };
  },

  data: () => ({
    name: "",
    user: null
  }),

  methods: {
    onSubmit() {
      if (this.name) {
        this.$http
          .login(this.name)
          .then(() => {
            this.user = { name: this.name };
            this.name = "";
          })
          .catch(() => alert("Error !"));
        return;
      }
      alert("Please fill name field");
    },

    onLogout() {
      require("js-cookie").remove("token", { path: "" });
      this.user = null;
    }
  }
};
</script>
