<template>
  <page-layout>
    <div class="content">
      <h1 class="anime-title title">Anime JS</h1>

      <p class="anime-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas ligula elit, 
        id euismod nisi molestie id. Fusce euismod ligula erat, vitae tincidunt quam accumsan 
        vitae. Maecenas vestibulum magna eu ligula tincidunt, sed cursus nibh dapibus. 
        Aliquam eget maximus tellus, non mattis lorem. Donec quis tellus in odio feugiat 
        facilisis. Morbi et orci pellentesque, consectetur leo eget, ultricies massa. 
        Nunc convallis lectus nec pharetra placerat. Aliquam eleifend dui quis diam blandit aliquet.
        Donec condimentum nec libero at sollicitudin. Nulla tincidunt dignissim elit ac laoreet.
        Vestibulum egestas purus vitae rhoncus feugiat. Etiam mattis neque ultrices auctor feugiat.
      </p>
    </div>
  </page-layout>
</template>

<script>
/**
 * More complex page animations with AnimeJS
 *
 * We use mounted() to play enter animation and beforeRouteLeave() hook to play
 * exit animation
 */

import anime from "animejs";

const animDuration = 500;

export default {
  mounted() {
    anime({
      targets: ".anime-title",
      opacity: [0, 1],
      translateY: [-50, 0],
      duration: animDuration
    });

    anime({
      targets: ".anime-content",
      opacity: [0, 1],
      translateY: [50, 0],
      duration: animDuration * 2
    });
  },

  beforeRouteLeave(to, from, next) {
    anime({
      targets: ".anime-title",
      opacity: 0,
      translateY: -50,
      duration: animDuration
    });

    anime({
      targets: ".anime-content",
      opacity: 0,
      translateY: 50,
      duration: animDuration,
      complete() {
        next();
      }
    });
  }
};
</script>