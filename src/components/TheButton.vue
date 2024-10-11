<template>
  <button>
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
</script>

<style scoped lang="scss">
button {
  cursor: pointer;
  transition: all 1s;
  margin-top: 25px;
  height: 54px;
  width: 190px;
  font-size: 20px;
  font-weight: 700;
  color: #fcfcfc;
  border: none;
  background: linear-gradient(90deg, #765af8 0%, #b843ea 50%, #fd318e 100%);
  background-size: 200% 200%;
  -webkit-animation: gradientChange 10s ease infinite;
  -moz-animation: gradientChange 10s ease infinite;
  animation: gradientChange 10s ease infinite;

  &:hover {
    transition: all 1s;
    box-shadow: 12px 9px 39px 3px rgba(186, 67, 232, 0.5);
  }
}
</style>