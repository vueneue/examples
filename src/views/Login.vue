<template>
  <div>
    <h1>Login</h1>

    <form @submit.prevent="onSubmit">
      <input v-model="name" type="text" placeholder="Enter your name...">
      <button
        type="submit"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: ""
  }),

  methods: {
    onSubmit() {
      if (this.name) {
        this.$http
          .login(this.name)
          .then(() => alert("You are now logged"))
          .catch(() => alert("Error !"));
        return;
      }
      alert("Please fill name field");
    }
  }
};
</script>
