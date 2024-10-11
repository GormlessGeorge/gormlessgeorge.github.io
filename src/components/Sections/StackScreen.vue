<template>
  <section class="stack">
    <TheContainer>

      <div class="stack__wrapper">
        <div class="tabs">
          <button @click="selectedTab = 'tab1'" :class="{ active: selectedTab === 'tab1' }">Tab 1</button>
          <button @click="selectedTab = 'tab2'" :class="{ active: selectedTab === 'tab2' }">Tab 2</button>
          <button @click="selectedTab = 'tab3'" :class="{ active: selectedTab === 'tab3' }">Tab 3</button>
        </div>

        <div v-if="selectedTab === 'tab1'">
          <p>Content for Tab 1</p>
        </div>
        <div v-if="selectedTab === 'tab2'">
          <p>Content for Tab 2</p>
        </div>
        <div v-if="selectedTab === 'tab3'">
          <p>Content for Tab 3</p>
        </div>
      </div>

    </TheContainer>

  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selectedTab = ref('tab1');
</script>

<style scoped lang="scss">
.stack {
  width: 100%;
  height: 100vh;
  background-color: black;
  scroll-snap-align: center;
  overflow: auto;
  scroll-behavior: smooth;

  &__wrapper {
    margin-top: 20vh;
  }
}

.tabs button {
  margin-right: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
  cursor: pointer;
}

.tabs .active {
  background-color: #ddd;
  font-weight: bold;
  
}
p {
    color: white;
  }
</style>