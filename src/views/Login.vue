<template>
  <div>
    <h1>Login</h1>

    <form @submit.prevent="onSubmit">
      <input type="text" placeholder="Enter your name...">
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
  methods: {
    onSubmit() {}
  }
};
</script>
