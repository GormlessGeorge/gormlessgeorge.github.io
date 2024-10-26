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
  font-size: 1.25rem;
  font-weight: 700;
  color: #fcfcfc;
  border: none;
  background-color: var(--primary-color);
  color: var(--button-text-color);

  @include desktop-adp {
    font-size: 1rem;
    height: 45px;
    width: 150px;
  }

  @include tablet-landscape-adp {
    max-width: 720px;
  }

  @include tablet-adp {
    max-width: 540px;
  }

  @include tablet-adp {
    width: 100%;
  }

  &:hover {
    transition: all 1s;
    box-shadow: 12px 9px 39px 3px var(--hover-color);
  }

  &:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
}
</style>