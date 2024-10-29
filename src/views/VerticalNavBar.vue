<template>
  <nav>
    <ul>
      <li v-for="(offset, index) in offsets" :key="index" @click="scrollToSection(index)"
        :class="{ active: activeSection === index, [store.currentColorClass]: true }">
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { usePortfolioStore } from '../store/portfolio-store';
const store = usePortfolioStore();

const props = defineProps<{
  offsets: number[];
  activeSection: number;
  scrollToSection: (section: number) => void;
}>();
</script>

<style scoped lang="scss">
nav {
  z-index: 100;
  position: fixed;
  top: 50%;
  right: 40px;
  transform: translateY(-50%);
  @include phone-adp {
    display: none;
  }

  ul {
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  li {
    cursor: pointer;
    transition: all 0.6s ease;
    transform: rotate(45deg);
    height: 13px;
    width: 13px;
    border: solid 3px var(--text-color);
    list-style: none;

    &:hover {
      background: var(--primary-color);
    }
  }
}

.active {
  transform: rotate(90deg);
  transform: scale(1.3);
  transition: all 0.6s ease;
  border: none;
  background: var(--primary-color);
  box-shadow: 0px 0px 35px 5px var(--primary-color);
}
</style>