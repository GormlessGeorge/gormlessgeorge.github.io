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
  height: 3.375rem;
  width: 11.875rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #fcfcfc;
  border: none;
  background-color: var(--primary-color);
  color: var(--button-text-color);

  @include desktop-adp {
    font-size: 1.125rem;
    height: 45px;
    width: 150px;
  }

  @include tablet-landscape-adp {
    margin: 25px auto 0 auto;
  }


  &:hover {
    transition: all 1s;
    box-shadow: 12px 9px 39px 3px var(--hover-color);
  }

}
</style>