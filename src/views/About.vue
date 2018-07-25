<template>
  <transition name="fade">
    <page-layout>
      <div class="content">
        <h1 class="title">This is an about page</h1>

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
  </transition>
</template>

<style>
/*
Add a fade transition to this page.
See: https://router.vuejs.org/guide/advanced/transitions.html
*/

.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave-active,
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
