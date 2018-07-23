<template>
  <div>
    <h1>Private</h1>
    <router-view/>
  </div>
</template>

<script>
import tokenOrRedirect from "@/middlewares/private";

export default {
  middlewares: [tokenOrRedirect]
};
</script>
