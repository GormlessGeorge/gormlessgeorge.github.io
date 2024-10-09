<template>
  <div class="scroll_container">
    <VerticalNavBar></VerticalNavBar>
    <LinksSidebar></LinksSidebar>
    <HeroScreen></HeroScreen>
    <StackScreen></StackScreen>
  </div>
</template>


<script setup lang="ts">
import { onMounted } from "vue";
import LinksSidebar from "./components/LinksSidebar.vue";
import VerticalNavBar from "./components/VerticalNavBar.vue";
import HeroScreen from "./components/Sections/HeroScreen.vue";
import StackScreen from "./components/Sections/StackScreen.vue";

// onMounted(() => {
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
// });

</script>

<style scoped lang="scss">
body {
  overflow: hidden !important; /* Hide scrollbars */
}
.scroll_container {
  width: 100%;
  height: 100vh;
  overflow: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}
</style>
