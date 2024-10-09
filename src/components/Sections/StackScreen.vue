<template>
  <section class="stack_screen">
    <div class="stack_screen__inner">AWDawd</div>
  </section>
</template>
  
  <script setup lang="ts">
</script>
  
<style scoped lang="scss">
.stack_screen {
  width: 100%;
  height: 100vh;
  background-color: rgb(4, 39, 1);
  scroll-snap-align: center;
  overflow: auto;
  scroll-behavior: smooth;
  &__inner {
    color: white;
  }
}
</style>
  