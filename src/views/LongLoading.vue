<template>
  <page-layout>
    <div class="content">
      <h1 class="title">Long loading</h1>

      <p>
        Proin lacinia metus quis risus egestas ullamcorper. Vivamus malesuada 
        ac quam eu tempor. Suspendisse potenti. Nunc arcu purus, lacinia eu 
        interdum id, semper in velit. Orci varius natoque penatibus et magnis 
        dis parturient montes, nascetur ridiculus mus. Vivamus nec aliquam lectus. 
        Nullam posuere erat vitae posuere auctor. Aenean quis tellus vel nunc egestas 
        accumsan. Morbi feugiat quam nec sapien ultrices luctus id vitae eros. 
        Suspendisse porttitor, diam et egestas tincidunt, turpis erat placerat 
        turpis, at aliquam quam enim consectetur tortor.
      </p>
    </div>
  </page-layout>
</template>

<script>
/**
 * Simple page to demonstrate navigation loader & long loading asyncData()
 * See: src/plugins/navLoader.js
 */

export default {
  asyncData() {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
  }
};
</script>
