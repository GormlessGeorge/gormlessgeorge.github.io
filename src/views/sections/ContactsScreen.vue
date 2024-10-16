<template>
  <section class="contacts" id="contacts">
    <TheContainer>
      <div class="contacts__wrapper">
        <div class="contacts__upper">
          <h2 :class="store.currentColorClass" class="contacts__title">Let's get in <span>touch</span></h2>
          <svg :class="store.currentColorClass" width="32" height="55" viewBox="0 0 32 55" fill="none"
            xmlns="http://www.w3.org/2000/svg">
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
        <div :class="store.currentColorClass" class="contacts__light"></div>
        <form class="contacts__form">
          <div class="contacts__name">
            <label class="contacts__label"
              :class="{ contacts__label_active: isNameActive, [store.currentColorClass]: true }" for="name">Your
              name</label>
            <input :class="store.currentColorClass" id="name" name="name" type="text" @focus="handleNameFocus"
              @blur="handleNameBlur" />
          </div>

          <div class="contacts__mail">
            <label class="contacts__label"
              :class="{ contacts__label_active: isMailActive, [store.currentColorClass]: true }" for="mail">Your
              mail</label>
            <input :class="store.currentColorClass" id="mail" name="mail" type="text" @focus="handleMailFocus"
              @blur="handleMailBlur" />
          </div>

          <div class="contacts__message">
            <label class="contacts__label"
              :class="{ contacts__label_active: isMessageActive, [store.currentColorClass]: true }"
              for="message">Message</label>
            <textarea :class="store.currentColorClass" id="message" name="message" @focus="handleMessageFocus"
              @blur="handleMessageBlur"></textarea>
          </div>

          <TheButton>Send</TheButton>
        </form>
      </div>

      <svg :class="store.currentColorClass" class="waves" width="1920" height="464" viewBox="0 0 1920 464" fill="#3178C6" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M-108 83.6843C-32.2229 69.2353 43.5542 54.7829 119.335 38.6816C195.112 22.5769 270.889 4.82334 346.666 19.3938C422.443 33.9642 498.221 80.8619 574.001 90.1147C649.778 99.3674 725.555 70.9786 801.333 64.3965C877.11 57.8143 952.89 73.0422 1028.67 57.9694C1104.44 42.8966 1180.22 -2.47703 1256 0.10592C1331.78 2.6855 1407.56 53.2216 1483.33 64.3965C1559.11 75.5713 1634.89 47.3847 1710.67 38.6816C1786.45 29.9785 1862.22 40.7587 1938 51.539V559.453C1862.22 559.453 1786.45 559.453 1710.67 559.453C1634.89 559.453 1559.11 559.453 1483.33 559.453C1407.56 559.453 1331.78 559.453 1256 559.453C1180.22 559.453 1104.44 559.453 1028.67 559.453C952.89 559.453 877.11 559.453 801.333 559.453C725.555 559.453 649.778 559.453 574.001 559.453C498.221 559.453 422.443 559.453 346.666 559.453C270.889 559.453 195.112 559.453 119.335 559.453C43.5542 559.453 -32.2229 559.453 -108 559.453V83.6843Z"
          fill="#3178C6" fill-opacity="0.05" />
        <path
          d="M-108 244.417C-32.2229 258.755 43.5542 273.093 119.335 257.275C195.112 241.46 270.889 195.493 346.666 186.554C422.443 177.615 498.221 205.703 574.001 212.272C649.778 218.837 725.555 203.879 801.333 212.272C877.11 220.662 952.89 252.402 1028.67 250.848C1104.44 249.29 1180.22 214.44 1256 199.411C1331.78 184.386 1407.56 189.184 1483.33 199.411C1559.11 209.639 1634.89 225.295 1710.67 237.987C1786.45 250.679 1862.22 260.407 1938 270.136V559.453C1862.22 559.453 1786.45 559.453 1710.67 559.453C1634.89 559.453 1559.11 559.453 1483.33 559.453C1407.56 559.453 1331.78 559.453 1256 559.453C1180.22 559.453 1104.44 559.453 1028.67 559.453C952.89 559.453 877.11 559.453 801.333 559.453C725.555 559.453 649.778 559.453 574.001 559.453C498.221 559.453 422.443 559.453 346.666 559.453C270.889 559.453 195.112 559.453 119.335 559.453C43.5542 559.453 -32.2229 559.453 -108 559.453V244.417Z"
          fill="#3178C6" fill-opacity="0.05" />
        <path
          d="M-108 405.15C-32.2229 396.73 43.5542 388.31 119.335 392.289C195.112 396.268 270.889 412.646 346.666 405.15C422.443 397.65 498.221 366.274 574.001 366.574C649.778 366.871 725.555 398.841 801.333 405.15C877.11 411.455 952.89 392.097 1028.67 385.862C1104.44 379.624 1180.22 386.509 1256 392.289C1331.78 398.072 1407.56 402.749 1483.33 398.719C1559.11 394.69 1634.89 381.954 1710.67 379.431C1786.45 376.909 1862.22 384.601 1938 392.289V559.452C1862.22 559.452 1786.45 559.452 1710.67 559.452C1634.89 559.452 1559.11 559.452 1483.33 559.452C1407.56 559.452 1331.78 559.452 1256 559.452C1180.22 559.452 1104.44 559.452 1028.67 559.452C952.89 559.452 877.11 559.452 801.333 559.452C725.555 559.452 649.778 559.452 574.001 559.452C498.221 559.452 422.443 559.452 346.666 559.452C270.889 559.452 195.112 559.452 119.335 559.452C43.5542 559.452 -32.2229 559.452 -108 559.452V405.15Z"
          fill="#3178C6" fill-opacity="0.05" />
      </svg>

      <footer>
        <p>Design available at <a :class="store.currentColorClass" href="/">Figma</a></p>
        <p>Built with <span>Vue3</span> and <span>Pinia</span></p>
      </footer>
    </TheContainer>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { usePortfolioStore } from '../../store/portfolio-store';

const store = usePortfolioStore();
const isNameActive = ref(false);
const isMailActive = ref(false);
const isMessageActive = ref(false);

function handleNameFocus() {
  isNameActive.value = true;
}

function handleNameBlur(event: FocusEvent): void {
  const target = event.target as HTMLInputElement;
  if (target.value.trim() === "") {
    isNameActive.value = false;
  }
}

function handleMailFocus() {
  isMailActive.value = true;
}

function handleMailBlur(event: FocusEvent): void {
  const target = event.target as HTMLInputElement;
  if (target.value.trim() === "") {
    isMailActive.value = false;
  }
}

function handleMessageFocus() {
  isMessageActive.value = true;
}

function handleMessageBlur(event: FocusEvent): void {
  const target = event.target as HTMLInputElement;
  if (target.value.trim() === "") {
    isMessageActive.value = false;
  }
}
</script>

<style scoped lang="scss">
.contacts {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: auto;

  &__wrapper {
    position: relative;
    margin-top: 25vh;
    display: flex;
    flex-direction: column;
  }

  &__light {
    transition: all 1s;
    z-index: -5;
    position: absolute;
    border-radius: 100%;
    width: 450px;
    height: 450px;
    background-color: var(--light-color);
    filter: blur(80px);
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
      color: var(--primary-color);
      text-shadow: 5px 5px 20px var(--hover-color);
    }
  }

  svg {
    path {
      fill: var(--primary-color);
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
      caret-color: var(--primary-color);
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
        border-bottom: solid 1px var(--primary-color);
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
      color: var(--primary-color);
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
      caret-color: var(--primary-color);
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
        border-bottom: solid 1px var(--primary-color);
      }
    }
  }
}

.waves {
  z-index: -10;
  position: absolute;
  left: 0;
  bottom: 0;
  fill: var(--primary-color);
  path {
    fill-opacity: 0.030;
  }
}

footer {
  width: 100%;
  left: 50%;
  transform: translate(-50%);
  position: absolute;
  bottom: 0;

  p {
    display: block;
    color: white;
    text-align: center;
    font-size: 12px;

    &:nth-child(2) {
      margin: 10px 0;
    }

    a {
      color: white;
      transition: all 0.5s;

      &:hover {
        transition: all 0.5s;
        font-weight: 500;
        color: var(--primary-color);
      }
    }

    span {
      color: #03E935;
      &:nth-child(2) {
        color:yellow;
      }
    }
  }
}
</style>