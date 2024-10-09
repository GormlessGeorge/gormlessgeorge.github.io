<template>
  <section class="hero_screen">
    <TheHeader></TheHeader>
    <TheContainer>
      <div class="hero_screen__main">
        <div class="hero_screen__about">
          <h1 class="hero_screen__title">
            Hello,<br />
            my name is <span>George</span>
          </h1>
          <p class="hero_screen__text">
            Lorem ipsum dolor sit amet consectetur. Egestas libero nascetur nibh
            dictumst quis id curabitur. Tellus turpis est turpis nibh senectus
            nisi tincidunt nibh. Lectus vel cras risus vestibulum. Tortor urna
            orci sed sodales amet nibh congue quisque ut.
          </p>
          <TheButton>Contact me</TheButton>
        </div>

        <div class="hero_screen__photo">
          <img src="../../assets/img/retard.jpg" alt="">
          <div class="hero_screen__photo-inner"></div>
        </div>
      </div>
    </TheContainer>
  </section>
</template>

<script setup lang="ts">
import TheHeader from "../TheHeader.vue";
</script>

<style scoped lang="scss">
.hero_screen {
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  overflow: auto;
  scroll-behavior: smooth;
  &__main {
    display: flex;
    justify-content: space-between;
    margin-top: 20vh;
  }

  &__about {
    margin-left: 50px;
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-size: 1.25rem;
    line-height: 2rem;
    color: #fcfcfc;
    font-weight: 500;
    span {
      font-weight: 700;
    }
  }

  &__text {
    margin: 0;
    line-height: 2.2rem;
    width: 27.5rem;
    font-weight: 300;
    font-size: 1.25rem;
    color: #fcfcfc;
  }

  &__photo {
    position: relative;
    margin-top: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 395px;
    width: 395px;
    background: linear-gradient(90deg, #765af8 0%, #b843ea 50%, #fd318e 100%);
    box-shadow: 3px 4px 12px 0 rgba(184, 67, 234, 0.3);
    &-inner {
      // margin: 0 auto;
      width: 99%;
      height: 99%;
      background-color: #000812;;
    }
    img {
      object-fit: cover;
      display: block;
      position: absolute;
      height: 395px;
      width: 395px;
      bottom: 35px;
      right: 35px;
    }
  }
}
</style>
