<template>
  <page-layout>
    <div class="content">
      <h1 class="title">
        {{ user.name ? `Welcome ${user.name}` : 'Login' }}
      </h1>

      <form
        v-if="!user.name"
        @submit.prevent="onSubmit"
      >
        <div v-if="showError && !user.name" class="notification is-danger">
          You need to be logged to access private page
        </div>

        <div class="field">
          <label class="label">Username</label>
          <input v-model="name" type="text" class="input">
        </div>

        <div class="field">
          <button
            type="submit"
            class="button is-link"
          >
            Login
          </button>
        </div>

      </form>

      <div v-else>
        <button 
          class="button is-danger"
          @click="onLogout()"
        >
          Logout
        </button>
      </div>
    </div>
  </page-layout>
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
    name: '',
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
            this.name = '';
          })
          .catch(() => alert('Error !'));
        return;
      }
      alert('Please fill name field');
    },

    /**
     * Logout and destroy user data
     */
    onLogout() {
      this.$http.logout();
      this.user = {};
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
