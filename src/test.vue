<template>
  <!-- <p>{{ store.getCounter }}</p>
  <button @click="store.increment">INCREMENT</button> -->
  <div class="scroll_container">
    <VerticalNavBar></VerticalNavBar>
    <LinksSidebar></LinksSidebar>
    <HeroScreen></HeroScreen>
    <StackScreen></StackScreen>
    <ContactsScreen></ContactsScreen>
  </div>
</template>


<script setup lang="ts">
import { onMounted } from "vue";
import LinksSidebar from "./components/LinksSidebar.vue";
import VerticalNavBar from "./components/VerticalNavBar.vue";
import HeroScreen from "./components/sections/HeroScreen.vue";
import StackScreen from "./components/sections/StackScreen.vue";
import ContactsScreen from "./components/sections/ContactsScreen.vue";

// import {useCounterStore } from '../src/store/store.ts';

// const store = useCounterStore();
</script>

<style scoped lang="scss">
.scroll_container {
  width: 100%;
  // height: 100vh;
  overflow: auto;
  // scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
}
</style>



<!-- // onMounted(() => {
  //   const container = document.querySelector(".scroll_container");
  //   let isScrolling = false;
  
  //   container.addEventListener("wheel", (event) => {
  //     if (isScrolling) return;
  //     isScrolling = true;
  
  //     const delta = Math.sign(event.deltaY);
  //     const currentScroll = container.scrollTop;
  //     const sectionHeight = window.innerHeight;
  //     const targetScroll = currentScroll + delta * sectionHeight;
  
  //     container.scrollTo({
  //       top: targetScroll,
  //       behavior: "smooth",
  //     });
  
  //     setTimeout(() => {
  //       isScrolling = false;
  //     }, 100); // Adjust the timeout to control the scroll speed
  //   });
  // }); -->



  <!-- <template>
    <VerticalNavBar></VerticalNavBar>
    <LinksSidebar></LinksSidebar>
    <HeroScreen class="section" ref="sec1"></HeroScreen>
    <StackScreen class="section" ref="sec2"></StackScreen>
    <ContactsScreen class="section" ref="sec3"></ContactsScreen>
  </template>
  
  <script setup>
  import { onMounted, onBeforeUnmount, ref } from 'vue';
  
  import LinksSidebar from "./components/LinksSidebar.vue";
  import VerticalNavBar from "./components/VerticalNavBar.vue";
  import HeroScreen from "./components/sections/HeroScreen.vue";
  import StackScreen from "./components/sections/StackScreen.vue";
  import ContactsScreen from "./components/sections/ContactsScreen.vue";
  
  const currentSection = ref(0);
  let sections = ref([]);
  
  const handleScroll = (event) => {
    const direction = event.deltaY > 0 ? 'down' : 'up';
    if (direction === 'down' && currentSection.value < sections.value.length - 1) {
        currentSection.value++;
    } else if (direction === 'up' && currentSection.value > 0) {
        currentSection.value--;
    }
    scrollToSection(currentSection.value);
  };
  
  const scrollToSection = (index) => {
    const section = sections.value[index];
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }
  };
  
  onMounted(() => {
    sections.value = document.querySelectorAll('.section');
    window.addEventListener('wheel', handleScroll, { passive: false });
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener('wheel', handleScroll);
  });
  </script>
  
  <style scoped>
  
  </style> -->
  