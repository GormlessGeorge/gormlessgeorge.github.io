<template>
  <button :class="store.currentColorClass" class="dynamic-button">
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
import { usePortfolioStore } from '../store/portfolio-store';

const store = usePortfolioStore();

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
  background-color: var(--primary-color);
  color: var(--button-text-color);
  &:hover {
    transition: all 1s;
    box-shadow: 12px 9px 39px 3px var(--hover-color);
  }
}
</style>