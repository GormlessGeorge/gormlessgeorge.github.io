<template>
  <VerticalNavBar :offsets="offsets" :activeSection="activeSection" :scrollToSection="scrollToSection" />
  <LinksSidebar />
  <MainScreen :scrollToSection="scrollToSection" class="fullpage"></MainScreen>
  <StackScreen class="fullpage"></StackScreen>
  <ProjectsScreen class="fullpage"></ProjectsScreen>
  <ContactsScreen class="fullpage"></ContactsScreen>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import LinksSidebar from "./views/LinksSidebar.vue";
import VerticalNavBar from "./views/VerticalNavBar.vue";
import MainScreen from "./views/sections/MainScreen.vue";
import StackScreen from "./views/sections/StackScreen.vue";
import ProjectsScreen from './views/sections/ProjectsScreen.vue';
import ContactsScreen from "./views/sections/ContactsScreen.vue";
import { usePortfolioStore } from './store/portfolio-store';
import { storeToRefs } from 'pinia'
const store = usePortfolioStore();

const inMove = ref(false);
const inMoveDelay = ref(900);

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
  } else if (e.detail < 0 && !inMove.value ) {
    moveDown();
  }
  return false;
};

const moveDown = () => {
  inMove.value = true;
  if (activeSection.value > 0) {
    activeSection.value--;
  } else {
    inMove.value = false;
    return; 
  }
  scrollToSection(activeSection.value, true);
};

const moveUp = () => {
  inMove.value = true;
  if (activeSection.value < offsets.value.length - 1) {
    activeSection.value++;
  } else {
    inMove.value = false;
    return; 
  }
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



onMounted(() => {
  calculateSectionOffsets();
  window.addEventListener('DOMMouseScroll', handleMouseWheelDOM); 
  window.addEventListener('mousewheel', handleMouseWheel, { passive: false }); 

});

onUnmounted(() => {
  window.removeEventListener('DOMMouseScroll', handleMouseWheelDOM); 
  window.removeEventListener('mousewheel', handleMouseWheel, { passive: false }); 

});
</script>

<style scoped lang="scss"></style>
