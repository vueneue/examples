<template>
  <page-layout>
    <div class="content">
      <h1 class="title">Private</h1>
      <router-view/>
    </div>
  </page-layout>
</template>

<script>
import tokenOrRedirect from "@/middlewares/tokenOrRedirect";

export default {
  middlewares: [tokenOrRedirect]
};
</script>
