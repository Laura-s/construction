<template>
  <router-view />
</template>


<style lang="scss">
#app {
  box-sizing: border-box;
  font-family: "Roboto Slab", serif;
  letter-spacing: 0.03em;
  margin: 0;
  padding: 0;
}
button {
  background-color: rgb(255, 160, 49);
  border-radius: 50%;
  border: none;
  padding: 10px;
}

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
@import "./styles/responsive.scss";
</style>
