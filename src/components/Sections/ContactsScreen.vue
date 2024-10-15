<template>
  <section class="contacts section" id="contacts">
    <TheContainer>
      <div class="contacts__wrapper">
        <div class="contacts__upper">
          <h2 class="contacts__title">Let's get in <span>touch</span></h2>
          <svg width="32" height="55" viewBox="0 0 32 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.51275 3.02547C0.675468 3.02547 0 2.34299 0 1.51275C0 0.675468 0.682504 0 1.51275 0C2.34299 0 3.02545 0.682504 3.02545 1.51275C3.02545 2.35002 2.35002 3.02547 1.51275 3.02547Z"
              fill="white" />
            <path
              d="M1.51275 16.0208C0.675468 16.0208 0 15.3383 0 14.5081C0 13.6708 0.682504 12.9954 1.51275 12.9954C2.34299 12.9954 3.02545 13.6778 3.02545 14.5081C3.02545 15.3383 2.35002 16.0208 1.51275 16.0208Z"
              fill="white" />
            <path
              d="M15.7605 16.0208C14.9233 16.0208 14.2478 15.3383 14.2478 14.5081C14.2478 13.6708 14.9303 12.9954 15.7605 12.9954C16.5978 12.9954 17.2733 13.6778 17.2733 14.5081C17.2803 15.3383 16.5978 16.0208 15.7605 16.0208Z"
              fill="white" />
            <path
              d="M1.51275 29.0162C0.675468 29.0162 0 28.3337 0 27.5034C0 26.6662 0.682504 25.9907 1.51275 25.9907C2.34299 25.9907 3.02545 26.6732 3.02545 27.5034C3.02545 28.3337 2.35002 29.0162 1.51275 29.0162Z"
              fill="white" />
            <path
              d="M15.7605 29.0162C14.9233 29.0162 14.2478 28.3337 14.2478 27.5034C14.2478 26.6662 14.9303 25.9907 15.7605 25.9907C16.5978 25.9907 17.2733 26.6732 17.2733 27.5034C17.2803 28.3337 16.5978 29.0162 15.7605 29.0162Z"
              fill="white" />
            <path
              d="M30.0084 29.0162C29.1711 29.0162 28.4956 28.3337 28.4956 27.5034C28.4956 26.6662 29.1781 25.9907 30.0084 25.9907C30.8456 25.9907 31.5211 26.6732 31.5211 27.5034C31.5281 28.3337 30.8456 29.0162 30.0084 29.0162Z"
              fill="white" />
            <path
              d="M1.51275 42.0045C0.675468 42.0045 0 41.322 0 40.4917C0 39.6545 0.682504 38.979 1.51275 38.979C2.34299 38.979 3.02545 39.6615 3.02545 40.4917C3.02545 41.329 2.35002 42.0045 1.51275 42.0045Z"
              fill="white" />
            <path
              d="M15.7605 42.0045C14.9233 42.0045 14.2478 41.322 14.2478 40.4917C14.2478 39.6545 14.9303 38.979 15.7605 38.979C16.5978 38.979 17.2733 39.6615 17.2733 40.4917C17.2803 41.329 16.5978 42.0045 15.7605 42.0045Z"
              fill="white" />
            <path
              d="M1.51275 55.0001C2.3482 55.0001 3.02545 54.3228 3.02545 53.4874C3.02545 52.6519 2.3482 51.9746 1.51275 51.9746C0.677289 51.9746 0 52.6519 0 53.4874C0 54.3228 0.677289 55.0001 1.51275 55.0001Z"
              fill="white" />
          </svg>
        </div>
        <div class="contacts__light"></div>
        <form class="contacts__form">
          <div class="contacts__name">
            <label class="contacts__label" :class="{ contacts__label_active: isNameActive }" for="name">Your
              name</label>
            <input id="name" name="name" type="text" @focus="handleNameFocus" @blur="handleNameBlur" />
          </div>

          <div class="contacts__mail">
            <label class="contacts__label" :class="{ contacts__label_active: isMailActive }" for="mail">Your
              mail</label>
            <input id="mail" name="mail" type="text" @focus="handleMailFocus" @blur="handleMailBlur" />
          </div>

          <div class="contacts__message">
            <label class="contacts__label" :class="{ contacts__label_active: isMessageActive }"
              for="message">Message</label>
            <textarea id="message" name="message" @focus="handleMessageFocus" @blur="handleMessageBlur"></textarea>
          </div>

          <TheButton>Send</TheButton>
        </form>
      </div>

      <footer>
        <p>Design available at <a href="/">Figma</a></p>
        <p>Built with <span>Vue3</span></p>
      </footer>
    </TheContainer>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isNameActive = ref(false);
const isMailActive = ref(false);
const isMessageActive = ref(false);

function handleNameFocus() {
  isNameActive.value = true;
}

function handleNameBlur(event) {
  if (event.target.value.trim() === "") {
    isNameActive.value = false;
  }
}

function handleMailFocus() {
  isMailActive.value = true;
}

function handleMailBlur(event) {
  if (event.target.value.trim() === "") {
    isMailActive.value = false;
  }
}

function handleMessageFocus() {
  isMessageActive.value = true;
}

function handleMessageBlur(event) {
  if (event.target.value.trim() === "") {
    isMessageActive.value = false;
  }
}
</script>

<style scoped lang="scss">
.contacts {
  position: relative;
  width: 100%;
  height: 100vh;
  // scroll-snap-align: start;
  overflow: auto;
  // scroll-behavior: smooth;

  &__wrapper {
    position: relative;
    margin-top: 25vh;
    display: flex;
    flex-direction: column;
  }

  &__light {
    z-index: -5;
    position: absolute;
    border-radius: 100%;
    width: 500px;
    height: 500px;
    background: linear-gradient(0deg,
        rgba(148, 84, 233, 0.2) 0%,
        rgba(130, 100, 235, 0.2) 50%,
        rgba(109, 116, 237, 0.2) 100%);
    filter: blur(75px);
    background-size: 200% 200%;
    -webkit-animation: gradientChange 10s ease infinite;
    -moz-animation: gradientChange 10s ease infinite;
    animation: gradientChange 10s ease infinite;
  }

  &__upper {
    display: flex;
    gap: 20px;
  }

  &__title {
    color: white;
    font-size: 48px;
    font-weight: 700;

    span {
      // background: linear-gradient(90deg, #765af8 0%, #b843ea 50%, #fd318e 100%);
      color: #b843ea;
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
      // background-size: 200% 200%;
      -webkit-animation: gradientChange 10s ease infinite;
      -moz-animation: gradientChange 10s ease infinite;
      animation: gradientChange 10s ease infinite;
      //   text-shadow:  10px 2px 10px;
      text-shadow: 5px 5px 20px rgba(186, 67, 232, 0.2);
    }
  }

  svg {
    path {
      fill: #b843ea;
      // animation: svgGrad 10s ease 0s infinite;
      // animation-direction: reverse;
    }
  }

  &__form {
    margin-top: 85px;
    display: grid;
    grid-template-columns: 200px 200px;
    grid-template-rows: 40px 70px;
    row-gap: 50px;
    column-gap: 50px;

    input {
      height: 100%;
      width: 100%;
      transition: all 1s;
      color: white;
      background-color: transparent;
      border: none;
      border-bottom: solid 1px white;

      &:focus {
        transition: all 1s;
        outline: none;
        border-bottom: solid 1px #b843ea;
      }
    }
  }

  &__label {
    transition: all 1s;
    color: white;
    position: absolute;
    top: 10px;
    cursor: text;

    &_active {
      font-size: 14px;
      transition: all 1s;
      color: #b843ea;
      top: -15px;
    }
  }

  &__name {
    position: relative;
    grid-column: 1 / 2;
  }

  &__mail {
    position: relative;
    grid-column: 2 / 3;
  }

  &__message {
    position: relative;
    grid-column: 1 / 3;
    grid-row: 2 / 3;

    textarea {
      padding-top: 10px;
      resize: none;
      width: 100%;
      height: 100%;
      transition: all 1s;
      color: white;
      background-color: transparent;
      border: none;
      border-bottom: solid 1px white;

      &:focus {
        transition: all 1s;
        outline: none;
        border-bottom: solid 1px #b843ea;
      }
    }
  }
}

footer {
  left: 50%;
  transform: translate(-50%);
  position: absolute;
  bottom: 0;
  p {
    display: block;
    color:white;
    text-align: center;
    font-size: 12px;
    &:nth-child(2) {
      margin: 10px 0;
    }
    a {
      color:white;
      transition: all 0.5s;
      &:hover {
        transition: all 0.5s;
        font-weight: 500;
        color:#b843ea;
      }
    }
    span {
      color:#03E935;
    }
  }
}
</style>