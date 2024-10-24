<template>
  <VerticalNavBar :offsets="offsets" :activeSection="activeSection" :scrollToSection="scrollToSection" />
  <LinksSidebar />
  <HeroScreen class="fullpage"></HeroScreen>
  <StackScreen class="fullpage"></StackScreen>
  <ProjectsScreen class="fullpage"></ProjectsScreen>
  <ContactsScreen class="fullpage"></ContactsScreen>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import LinksSidebar from "./views/LinksSidebar.vue";
import VerticalNavBar from "./views/VerticalNavBar.vue";
import HeroScreen from "./views/sections/HeroScreen.vue";
import StackScreen from "./views/sections/StackScreen.vue";
import ProjectsScreen from './views/sections/ProjectsScreen.vue';
import ContactsScreen from "./views/sections/ContactsScreen.vue";
import { usePortfolioStore } from './store/portfolio-store';
import { storeToRefs } from 'pinia'
const store = usePortfolioStore();

const inMove = ref(false);
const inMoveDelay = ref(400);

const { activeSection } = storeToRefs(store);
// const  activeSection  = ref(0);
const offsets = ref([]);
const touchStartY = ref(0);

onMounted(() => {
  document.documentElement.setAttribute('data-theme', store.isDarkTheme ? 'dark' : 'light');
});

const calculateSectionOffsets = () => {
  let sections = document.getElementsByTagName('section');
  let length = sections.length;
  for (let i = 0; i < length; i++) {
    let sectionOffset = sections[i].offsetTop;
    offsets.value.push(sectionOffset);
  }
};

const handleMouseWheel = (e) => {
  if (e.wheelDelta < 0 && !inMove.value) {
    moveUp();
  } else if (e.wheelDelta > 0 && !inMove.value) {
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

<style scoped lang="scss"></style>
