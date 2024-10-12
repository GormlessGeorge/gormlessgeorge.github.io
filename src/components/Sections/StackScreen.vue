<template>
  <section class="stack">
    <TheContainer>
      <div class="stack__main_wrapper">
        <div class="stack__tabs_wrapper">
          <div class="stack__tabs">
            <div class="stack__tab_title" @click="selectedTab = 'tab1'"
              :class="{ 'stack__tab_title-active': selectedTab === 'tab1' }">Frontend</div>
            <p class="stack__delimiter"
              :class="{ 'stack__delimiter-active': selectedTab === 'tab1' || selectedTab === 'tab2' }">|</p>
            <div class="stack__tab_title" @click="selectedTab = 'tab2'"
              :class="{ 'stack__tab_title-active': selectedTab === 'tab2' }">Backend</div>
            <p class="stack__delimiter"
              :class="{ 'stack__delimiter-active': selectedTab === 'tab2' || selectedTab === 'tab3' }">|</p>
            <div class="stack__tab_title" @click="selectedTab = 'tab3'"
              :class="{ 'stack__tab_title-active': selectedTab === 'tab3' }">Tools</div>
          </div>

          <div class="stack__tab_content">
            <transition name="fade" mode="out-in">
              <div v-if="selectedTab === 'tab1'" key="tab1" class="stack__tab">
                <div class="stack__icon">
                  <img src="../../assets/icons/tech_icons/js_icon.svg" alt="" />
                </div>
                <div class="stack__icon">
                  <img src="../../assets/icons/tech_icons/ts_icon.svg" alt="" />
                </div>
                <div class="stack__icon">
                  <img src="../../assets/icons/tech_icons/vue_icon.svg" alt="" />
                </div>
                <div class="stack__icon">
                  <img src="../../assets/icons/tech_icons/html_icon.svg" alt="" />
                </div>
                <div class="stack__icon">
                  <img src="../../assets/icons/tech_icons/css_icon.svg" alt="" />
                </div>
                <div class="stack__icon">
                  <img src="../../assets/icons/tech_icons/inertia_icon.svg" alt="" />
                </div>
              </div>
            

            <!-- <transition name="fade" mode="out-in"> -->
              <div v-else-if="selectedTab === 'tab2'" key="tab2" class="stack__tab">
                <div class="stack__icon">
                  <img src="../../assets/icons/tech_icons/java_icon.svg" alt="" />
                </div>
                <div class="stack__icon">
                  <img src="../../assets/icons/tech_icons/kotlin_icon.svg" alt="" />
                </div>
                <div class="stack__icon">
                  <img src="../../assets/icons/tech_icons/php_icon.svg" alt="" />
                </div>
                <div class="stack__icon">
                  <img src="../../assets/icons/tech_icons/laravel_icon.svg" alt="" />
                </div>
                <div class="stack__icon">
                  <img src="../../assets/icons/tech_icons/mysql_icon.svg" alt="" />
                </div>
              </div>
            <!-- </transition> -->

            <!-- <transition name="fade" mode="out-in"> -->
              <div v-else-if="selectedTab === 'tab3'" key="tab3" class="stack__tab">
                <div class="stack__icon">
                  <img src="../../assets/icons/tech_icons/figma_icon.svg" alt="" />
                </div>
                <div class="stack__icon">
                  <img src="../../assets/icons/tech_icons/ps_icon.svg" alt="" />
                </div>
                <div class="stack__icon">
                  <img src="../../assets/icons/tech_icons/gpt_icon.svg" alt="" />
                </div>
                <div class="stack__icon">
                  <img src="../../assets/icons/tech_icons/ij_icon.svg" alt="" />
                </div>
                <div class="stack__icon">
                  <img src="../../assets/icons/tech_icons/vscode_icon.svg" alt="" />
                </div>
                <div class="stack__icon">
                  <img src="../../assets/icons/tech_icons/phpstorm_icon.svg" alt="" />
                </div>
                <div class="stack__icon">
                  <img src="../../assets/icons/tech_icons/git_icon.svg" alt="" />
                </div>
                <div class="stack__icon">
                  <img src="../../assets/icons/tech_icons/postman_icon.svg" alt="" />
                </div>
              </div>
            </transition>
          </div>
        </div>

        <div class="stack__descr">
          <h2 class="stack__title">Tech <span>stack</span></h2>
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
h2 {
  color: white;
}

.stack {
  width: 100%;
  height: 100vh;
  scroll-snap-align: center;
  overflow: auto;
  scroll-behavior: smooth;

  &__main_wrapper {
    margin-top: 20vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__tabs_wrapper {
    width: 50%;
    display: flex;
    flex-direction: column;

    justify-content: space-between;
  }

  &__tabs {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-top: 20px;
  }

  &__tab_title {
    transition: all 1s;
    cursor: pointer;
    width: 160px;
    color: white;
    text-align: center;
    font-weight: 600;
    font-size: 20px;

    &-active {
      transition: all 1s;
      color: #b843ea;
      // background: linear-gradient(90deg, #765af8 0%, #b843ea 50%, #fd318e 100%);
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
      // background-size: 200% 200%;
      // -webkit-animation: gradientChange 10s ease infinite;
      // -moz-animation: gradientChange 10s ease infinite;
      // animation: gradientChange 10s ease infinite;
    }
  }

  &__delimiter {
    align-self: center;
    color: white;
    transition: all 1s;

    &-active {
      transition: all 1s;
      color: #b843ea;
      // background: linear-gradient(90deg, #765af8 0%, #b843ea 50%, #fd318e 100%);
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
      // background-size: 200% 200%;
      // -webkit-animation: gradientChange 10s ease infinite;
      // -moz-animation: gradientChange 10s ease infinite;
      // animation: gradientChange 10s ease infinite;
    }
  }

  &__tab {
    display: flex;
    flex-wrap: wrap;
    gap: 70px;
    margin-top: 60px;
    padding-left: 5%;
  }

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    width: 120px;
    backdrop-filter: blur(4px);
    background: rgba(255, 255, 255, 0.05);
  }

  &__descr {
    width: 50%;
  }

  &__title {
    color: white;
    font-size: 48px;
    font-weight: 700;
    text-align: center;

    span {
      // background: linear-gradient(90deg, #765af8 0%, #b843ea 50%, #fd318e 100%);
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
      // background-size: 200% 200%;
      // -webkit-animation: gradientChange 10s ease infinite;
      // -moz-animation: gradientChange 10s ease infinite;
      // animation: gradientChange 10s ease infinite;
      text-shadow: 5px 5px 20px rgba(186, 67, 232, 0.2);

      &:hover {
        transition: all 1s;
        color: #b843ea;
        //   -webkit-background-clip: text;
        // -webkit-text-fill-color: transparent;
        // background-size: 200% 200%;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
p {
  color: white;
}
</style>