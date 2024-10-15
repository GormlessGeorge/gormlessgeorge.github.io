<template>
  <!-- <VerticalNavBar></VerticalNavBar> -->
  <div class="sections-menu">
    <span class="menu-point" v-bind:class="{ active: activeSection == index }" v-on:click="scrollToSection(index)"
      v-for="(offset, index) in offsets" v-bind:key="index" v-title="'Go to section ' + (index + 1)">
    </span>
  </div>
  <LinksSidebar></LinksSidebar>
  <HeroScreen class="fullpage blue"></HeroScreen>
  <StackScreen class="fullpage black"></StackScreen>
  <ProjectsScreen class="fullpage" ref="sec3"></ProjectsScreen>
  <ContactsScreen class="fullpage" ref="sec4"></ContactsScreen>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import LinksSidebar from "./components/LinksSidebar.vue";
import VerticalNavBar from "./components/VerticalNavBar.vue";
import HeroScreen from "./components/sections/HeroScreen.vue";
import StackScreen from "./components/sections/StackScreen.vue";
import ProjectsScreen from './components/sections/ProjectsScreen.vue';
import ContactsScreen from "./components/sections/ContactsScreen.vue";

const inMove = ref(false);
const inMoveDelay = ref(800);
const activeSection = ref(0);
const offsets = ref([]);
const touchStartY = ref(0);

const calculateSectionOffsets = () => {
  let sections = document.getElementsByTagName('section');
  let length = sections.length;
  for (let i = 0; i < length; i++) {
    let sectionOffset = sections[i].offsetTop;
    offsets.value.push(sectionOffset);
  }
};

const handleMouseWheel = (e) => {
  if (e.wheelDelta < 30 && !inMove.value) {
    moveUp();
  } else if (e.wheelDelta > 30 && !inMove.value) {
    moveDown();
  }
  e.preventDefault();
  return false;
};

const handleMouseWheelDOM = (e) => {
  if (e.detail > 0 && !inMove.value) {
    moveUp();
  } else if (e.detail < 0 && !inMove.value) {
    moveDown();
  }
  return false;
};

const moveDown = () => {
  inMove.value = true;
  activeSection.value--;
  if (activeSection.value < 0) activeSection.value = offsets.value.length - 1;
  scrollToSection(activeSection.value, true);
};

const moveUp = () => {
  inMove.value = true;
  activeSection.value++;
  if (activeSection.value > offsets.value.length - 1) activeSection.value = 0;
  scrollToSection(activeSection.value, true);
};

const scrollToSection = (id, force = false) => {
  if (inMove.value && !force) return false;
  activeSection.value = id;
  inMove.value = true;
  let section = document.getElementsByTagName('section')[id];
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
  setTimeout(() => {
    inMove.value = false;
  }, inMoveDelay.value);
};

const touchStart = (e) => {
  e.preventDefault();
  touchStartY.value = e.touches[0].clientY;
};

const touchMove = (e) => {
  if (inMove.value) return false;
  e.preventDefault();
  const currentY = e.touches[0].clientY;
  if (touchStartY.value < currentY) {
    moveDown();
  } else {
    moveUp();
  }
  touchStartY.value = 0;
  return false;
};

onMounted(() => {
  calculateSectionOffsets();
  window.addEventListener('DOMMouseScroll', handleMouseWheelDOM); // Mozilla Firefox
  window.addEventListener('mousewheel', handleMouseWheel, { passive: false }); // Other browsers
  window.addEventListener('touchstart', touchStart, { passive: false }); // mobile devices
  window.addEventListener('touchmove', touchMove, { passive: false }); // mobile devices
});

onUnmounted(() => {
  window.removeEventListener('DOMMouseScroll', handleMouseWheelDOM); // Mozilla Firefox
  window.removeEventListener('mousewheel', handleMouseWheel, { passive: false }); // Other browsers
  window.removeEventListener('touchstart', touchStart); // mobile devices
  window.removeEventListener('touchmove', touchMove); // mobile devices
});
</script>

<style scoped lang="scss">
.sections-menu {
  position: fixed;
  z-index: 50;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
}

.sections-menu .menu-point {
  
  width: 10px;
  height: 10px;
  background-color: #FFF;
  display: block;
  margin: 1rem 0;
  opacity: .6;
  transition: .4s ease-in-out all;
  cursor: pointer;
}

.sections-menu .menu-point.active {
  opacity: 1;
  transform: scale(1.5);
}

.sections-menu .menu-point:hover {
  opacity: 1;
  transform: scale(1.2);
}

@media screen and (max-width: 1200px) {
  h1 {
    font-size: 2.5em;
  }
}
</style>
