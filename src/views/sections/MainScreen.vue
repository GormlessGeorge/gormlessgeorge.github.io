<template>
  <section class="main" id="main">
    <TheHeader></TheHeader>
    <TheContainer>
      <div class="main__wrapper">
        <div class="main__about">
          <transition name="fade" mode="out-in">
            <h1 class="main__title" :key="formattedTitle" v-html="formattedTitle" :class="store.currentColorClass"></h1>
          </transition>
          <transition name="fade" mode="out-in">
            <p class="main__text" :key="formattedDescr" v-html="formattedDescr" :class="store.currentColorClass"></p>
          </transition>
          <TheButton @click="scrollToSection(3)">{{ t("button.contact") }}</TheButton>

        </div>

        <div :class="store.currentColorClass" class="main__photo">
          <img src="@/assets/img/retard.jpg" alt="dev_photo" />
        </div>
      </div>
    </TheContainer>
  </section>
</template>

<script setup lang="ts">
import TheHeader from "../TheHeader.vue";
import { usePortfolioStore } from '../../store/portfolio-store';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const store = usePortfolioStore();

const props = defineProps<{
  scrollToSection: (section: number) => void;
}>();


const { t } = useI18n();

const formattedTitle = computed(() => { return t('mainScreen.title'); });
const formattedDescr = computed(() => { return t('mainScreen.description'); });
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  height: 100svh;
  display: flex;
  align-items: center;

  &__wrapper {
    display: flex;
    justify-content: space-between;

    @include tablet-landscape-adp {
      flex-direction: column-reverse;
      align-items: center;
      gap: 20px;
    }
  }

  &__about {
    margin-left: 50px;
    display: flex;
    flex-direction: column;

    @include tablet-landscape-adp {
      margin-left: 0;
    }
  }

  &__title {
    font-size: 1.25rem;
    color: var(--text-color);
    font-weight: 500;

    @include text-lh;

    @include desktop-adp {
      font-size: 1.125rem;
    }

    @include tablet-landscape-adp {
      font-size: 1rem;
      text-align: center;

      br {
        display: none;
      }
    }


  }

  &__text {
    margin: 0;
    margin-top: 15px;
    width: 30.5rem;
    font-weight: 300;
    font-size: 1.25rem;
    color: var(--text-color);
    @include text-lh;

    @include desktop-adp {
      font-size: 1.125rem;
    }

    @include tablet-landscape-adp {
      font-size: 1rem;
      text-align: center;
    }

    @include phone-adp {
      font-size: 0.875rem;
      line-height: 28px;
      width: 19.5rem;
    }

  }

  span {
    color: var(--primary-color);
    font-weight: 700;
  }

  &__photo {
    transition: background 1s;
    position: relative;
    margin-top: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24.6875rem;
    width: 24.6875rem;
    border: solid .0938rem var(--primary-color);
    background-color: var(--background-color);
    box-shadow: .1875rem .25rem .75rem 0 var(--hover-color);

    @include desktop-adp {
      height: 320px;
      width: 320px;
    }

    @include phone-adp {
      height: 200px;
      width: 200px;
    }


    img {
      object-fit: cover;
      display: block;
      position: absolute;
      height: 100%;
      width: 100%;
      bottom: 35px;
      right: 35px;
      z-index: 15;

      @include tablet-landscape-adp {
        position: relative;
        bottom: 0;
        right: 0;
      }
    }
  }
}
</style>
