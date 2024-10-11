<template>
  <header class="header">
    <a class="header__logo" href="">GG</a>
    <div class="header__light"></div>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.header {
  display: flex;
  position: relative;

  &__logo {
    display: block;
    margin-top: 35px;
    margin-left: 35px;
    font-size: 34px;
    color: white;
    text-decoration: none;
    font-weight: 500;
  }
  &__light {
    position: absolute;
    left: 50%;
    top: -300px;
    transform: translateX(-50%);
    border-radius: 100%;
    width: 700px;
    height: 460px;
    background: linear-gradient(
      0deg,
      rgba(148, 84, 233, 0.2) 0%,
      rgba(130, 100, 235, 0.2) 50%,
      rgba(109, 116, 237, 0.2) 100%
    );
    filter: blur(75px);
    background-size: 200% 200%;
    -webkit-animation: gradientChange 10s ease infinite;
    -moz-animation: gradientChange 10s ease infinite;
    animation: gradientChange 10s ease infinite;
  }
}
</style>