<template>
  <div class="marker"></div>
</template>

<style lang="scss">
.marker {
  width: 32px;
  height: 32px;
  background-image: url('../assets/markerAni.png');
  -webkit-animation: play 1s steps(3) infinite alternate;
  animation: play 1s steps(3) infinite alternate;
}

@keyframes play {
  from {
    background-position: 0px;
  }
  to {
    background-position: 96px;
  }
}
</style>
