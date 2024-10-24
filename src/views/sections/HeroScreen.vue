<template>
  <section class="hero" id="hero">
    <TheHeader></TheHeader>
    <TheContainer>
      <div class="hero__main">
        <div class="hero__about">
          <h1 class="hero__title">
            Hello,<br />
            my name is <span :class="store.currentColorClass">George</span>
          </h1>
          <p class="hero__text">
            I'm a <span :class="store.currentColorClass">Fullstack Web Developer</span>, passionate about building
            intuitive and scalable web applications. From the visual front-end to the
            core back-end. I’m always exploring new technologies to bring fresh ideas to life. My goal is to make each
            project uniquely successful and impactful. Let's build something
            amazing together!
          </p>
          <TheButton>Contact me</TheButton>
        </div>

        <div :class="store.currentColorClass" class="hero__photo">
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
</script>

<style scoped lang="scss">
.hero {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;

  &__main {
    display: flex;
    justify-content: space-between;
  }

  &__about {
    margin-left: 50px;
    display: flex;
    flex-direction: column;
  }

  &__title {
    transition: all 1s;
    font-size: 1.25rem;
    line-height: 2rem;
    color: var(--text-color);
    font-weight: 500;

  }

  &__text {
    margin: 0;
    margin-top: 15px;
    width: 28.5rem;
    font-weight: 300;
    font-size: 1.25rem;
    color: var(--text-color);
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
    height: 395px;
    width: 395px;
    border: solid 1.5px var(--primary-color);
    background-color: var(--background-color);
    box-shadow: 3px 4px 12px 0 var(--hover-color);


    img {
      object-fit: cover;
      display: block;
      position: absolute;
      height: 395px;
      width: 395px;
      bottom: 35px;
      right: 35px;
      z-index: 15;
    }

    svg {
      position: absolute;
      z-index: 10;

      path {
        fill: var(--primary-color);
      }
    }

    .ornament1 {
      right: -11%;
      top: -12%;
    }

    .ornament2 {
      right: -6.5%;
      top: 92%;
    }
  }
}
</style>
