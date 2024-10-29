<template>
  <section class="main" id="main">
    <TheHeader></TheHeader>
    <TheContainer>
      <div class="main__wrapper">
        <div class="main__about">
          <h1 class="main__title">
            Hello,<br />
            my name is <span :class="store.currentColorClass">George</span>
          </h1>
          <p class="main__text">
            I'm a <span :class="store.currentColorClass">Fullstack Web Developer</span>, passionate about building
            intuitive and scalable web applications. From the visual front-end to the
            core back-end. I’m always exploring new technologies to bring fresh ideas to life. My goal is to make each
            project uniquely successful and impactful. Let's build something
            amazing together!
          </p>
          <TheButton @click="scrollToSection(3)">Contact me</TheButton>
        </div>

        <div :class="store.currentColorClass" class="main__photo">
          <img loading="lazy" src="@/assets/img/retard.jpg" alt="dev_photo" />
        </div>
      </div>
    </TheContainer>
  </section>
</template>

<script setup lang="ts">
import TheHeader from "../TheHeader.vue";
import { usePortfolioStore } from '../../store/portfolio-store';

const store = usePortfolioStore();

const props = defineProps<{
  scrollToSection: (section: number) => void;
}>();
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
    transition: all 1s;
    font-size: 1.25rem;
    @include text-lh;
    color: var(--text-color);
    font-weight: 500;

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
    width: 28.5rem;
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

    // @include tablet-adp {
    //   font-size: 0.875rem;
    // }

    // @include tablet-adp {
    //   width: 100%;
    // }
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

    // @include tablet-landscape-adp {
    //   height: 250px;
    //   width: 250px;
    // }

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
