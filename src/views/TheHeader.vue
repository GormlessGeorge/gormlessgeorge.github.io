<template>
  <header class="header">
    <a class="header__logo" href="/">GG</a>
    <div :class="store.currentColorClass" class="header__light"></div>
    <svg :class="store.currentColorClass" @click="toggleTheme" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M31.2826 19.9498C30.4246 22.7508 28.705 25.2098 26.3685 26.9769C24.3172 28.5208 21.8762 29.4624 19.3194 29.696C16.7627 29.9297 14.1914 29.4461 11.8942 28.2996C9.59703 27.1531 7.66485 25.389 6.31456 23.2053C4.96428 21.0217 4.24932 18.5049 4.24994 15.9375C4.24081 12.9408 5.21499 10.0239 7.02307 7.63407C8.79019 5.29762 11.2492 3.57804 14.0502 2.72001C14.2348 2.66316 14.4314 2.65772 14.6189 2.70426C14.8063 2.75081 14.9776 2.84757 15.1142 2.98416C15.2507 3.12074 15.3475 3.29198 15.394 3.47945C15.4406 3.66692 15.4351 3.86353 15.3783 4.04813C14.7658 6.07409 14.7145 8.22826 15.2297 10.2811C15.745 12.334 16.8075 14.2085 18.3041 15.7052C19.8007 17.2018 21.6753 18.2643 23.7281 18.7795C25.781 19.2948 27.9352 19.2434 29.9611 18.6309C30.1457 18.5741 30.3423 18.5687 30.5298 18.6152C30.7173 18.6617 30.8885 18.7585 31.0251 18.8951C31.1617 19.0317 31.2584 19.2029 31.305 19.3904C31.3515 19.5779 31.3461 19.7745 31.2892 19.9591L31.2826 19.9498Z"
        fill="white" />
    </svg>

  </header>
</template>

<script setup lang="ts">
import { usePortfolioStore } from '../store/portfolio-store';
import { onMounted } from 'vue';
const store = usePortfolioStore();

const toggleTheme = () => {
  store.toggleTheme();
  document.documentElement.setAttribute('data-theme', store.isDarkTheme ? 'dark' : 'light');
};

</script>

<style scoped lang="scss">
.header {
  width: 100%;
  display: flex;
  top: 0;
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  &__logo {
    transition: color 1s;
    display: block;
    margin-top: 35px;
    margin-left: 35px;
    font-size: 34px;
    color: var(--text-color);
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
    height: 420px;
    background-color: var(--light-color);
    filter: blur(100px);
  }

  svg {
    cursor: pointer;
    margin-top: 35px;
    margin-right: 35px;
    transition: all 1s;
    path {
      transition: all 1s;
      fill: var(--text-color);
    }
    &:hover path{
      fill: var(--primary-color);
    }
    &:hover {
      transform: scale(1.2);
    }
  }
}
</style>