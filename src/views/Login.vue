<template>
  <div>
    <h1>Login</h1>

    <form
      v-if="!user.name"
      @submit.prevent="onSubmit"
    >
      <p v-if="showError && !user.name" class="error">
        You need to be logged to access private page
      </p>


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
/**
 * Simple form to login and get a JWT
 *
 * In this example a good practice can be to store current user
 * informations in Vuex store
 */
export default {
  /**
   * Load current user from API
   */
  async asyncData({ app, query }) {
    const { data } = await app.$http.me();
    return {
      user: data,
      showError: query.error ? true : false
    };
  },

  data: () => ({
    name: "",
    user: null,
    showError: false
  }),

  methods: {
    /**
     * Submit form and get JWT
     */
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

    /**
     * Logout and destroy user data
     */
    onLogout() {
      this.$http.logout();
      this.user = null;
    }
  }
};
</script>

<style scoped>
.error {
  padding: 20px;
  background: red;
  color: white;
}
</style>
