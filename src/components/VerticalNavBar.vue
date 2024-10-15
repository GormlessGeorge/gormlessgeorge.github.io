<template>
  <nav>
    <ul>
      <li :class="{ active: currentSection.value === 'hero' }"><a href="#hero">Hero</a></li>
      <li :class="{ active: currentSection.value === 'stack' }"><a href="#stack">Stack</a></li>
      <li :class="{ active: currentSection.value === 'projects' }"><a href="#projects">Projects</a></li>
      <li :class="{ active: currentSection.value === 'contacts' }"><a href="#contacts">Contacts</a></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const currentSection = ref('hero')

const sections = [
  { id: 'hero', element: null },
  { id: 'stack', element: null },
  { id: 'projects', element: null },
  { id: 'contacts', element: null }
]

sections.forEach(section => {
  const el = document.querySelector(`#${section.id}`)
  section.element = el
  useIntersectionObserver(
    el,
    ([entry]) => {
      if (entry.isIntersecting) {
        currentSection.value = section.id
      }
    },
    { threshold: 0.5 }
  )
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
    padding:0;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  li {
    cursor: pointer;
    transition: all 0.3s linear;
    transform: rotate(45deg);
    height: 12px;
    width: 12px;
    border: solid 3px white;
    list-style: none;
    &:hover {
      transform: rotate(90deg);
      transition: all 0.3s linear;
      border: none;
      background: linear-gradient(0deg, #765af8 0%, #b843ea 50%, #fd318e 100%);
      box-shadow: 0px 0px 35px 5px rgb(186, 67, 232);
    }

    a {
      display: block;
      width: 100%;
      height: 100%;
      z-index: 150;
      scroll-behavior: smooth;
    }
  }
}
</style>