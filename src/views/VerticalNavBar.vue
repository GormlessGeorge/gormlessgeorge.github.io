<template>
  <nav>
    <ul>
      <li v-for="(offset, index) in offsets" :key="index" @click="scrollToSection(index)"
        :class="{ active: activeSection === index, [store.currentColorClass]: true }">
        <span :title="'Go to section ' + (index + 1)">
        </span>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { usePortfolioStore } from '../store/portfolio-store';
const store = usePortfolioStore();

const props = defineProps({
  offsets: Array,
  activeSection: Number,
  scrollToSection: Function 
})
</script>

<style scoped lang="scss">
nav {
  z-index: 100;
  position: fixed;
  top: 50%;
  right: 40px;
  transform: translateY(-50%);

  ul {
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  li {
    cursor: pointer;
    transition: all 0.6s linear;
    transform: rotate(45deg);
    height: 12px;
    width: 12px;
    border: solid 3px white;
    list-style: none;


    span {
      display: block;
      width: 100%;
      height: 100%;
      z-index: 150;
      scroll-behavior: smooth;
    }
  }
}

.active {
  transform: rotate(90deg);
  transform: scale(1.3);
  transition: all 0.6s linear;
  border: none;
  background: var(--primary-color);
  box-shadow: 0px 0px 35px 5px var(--primary-color);
}
</style>