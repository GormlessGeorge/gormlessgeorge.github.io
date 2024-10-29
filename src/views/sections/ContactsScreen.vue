<template>
  <section class="contacts" id="contacts">
    <TheContainer>
      <div class="contacts__wrapper">
        <div class="contacts__upper">
          <h2 :class="store.currentColorClass" class="contacts__title">Let's get in <span>touch</span></h2>
          <div class="contacts__title-icon">
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

        </div>
        <div :class="store.currentColorClass" class="contacts__light"></div>
        <p class="contacts__descr">Need some help, have an idea, or just want to chat? Don't hesitate to reach out
          using any of these:</p>
        <div class="contacts__social">
          <p class="contacts__link">Email: <a :class="store.currentColorClass"
              href="mailto:georgekulaev@yandex.ru">georgekulaev@yandex.ru</a></p>
          <p class="contacts__link">Telegram: <a :class="store.currentColorClass"
              href="http://t.me/GormlessGeorge">@GormlessGeorge</a></p>
          <p class="contacts__link">LinkedIn: <a :class="store.currentColorClass"
              href="https://www.linkedin.com/in/george-kulaev-b41964335/">George Kulaev</a></p>
          <p class="contacts__link">Github: <a :class="store.currentColorClass"
              href="https://github.com/GormlessGeorge">GormlessGeorge</a></p>
          <p class="contacts__link">Habr: <a :class="store.currentColorClass"
              href="https://habr.com/ru/users/GormlessGeorge/">GormlessGeorge</a></p>
        </div>

      </div>

      <div class="waves">
        <svg :class="store.currentColorClass" width="1920" height="464" viewBox="0 0 1920 464" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-482 111.14C-381.362 91.9502 -280.723 72.7562 -180.08 51.3723C-79.4421 29.984 21.1961 6.4058 121.834 25.7565C222.473 45.1072 323.111 107.391 423.754 119.68C524.392 131.968 625.031 94.2654 725.669 85.5238C826.307 76.7822 926.95 97.0061 1027.59 76.9882C1128.23 56.9702 1228.86 -3.2897 1329.5 0.14067C1430.15 3.56656 1530.78 70.6828 1631.42 85.5238C1732.06 100.365 1832.7 62.9308 1933.34 51.3723C2033.98 39.8139 2134.62 54.131 2235.26 68.4481V743C2134.62 743 2033.98 743 1933.34 743C1832.7 743 1732.06 743 1631.42 743C1530.78 743 1430.15 743 1329.5 743C1228.86 743 1128.23 743 1027.59 743C926.95 743 826.307 743 725.669 743C625.031 743 524.392 743 423.754 743C323.111 743 222.473 743 121.834 743C21.1961 743 -79.4421 743 -180.08 743C-280.723 743 -381.362 743 -482 743V111.14Z"
            fill="#3178C6" fill-opacity="0.05" />
          <path
            d="M-482 244.606C-381.362 263.648 -280.723 282.69 -180.08 261.682C-79.4421 240.679 21.1961 179.631 121.834 167.759C222.473 155.887 323.111 193.191 423.754 201.915C524.392 210.634 625.031 190.768 725.669 201.915C826.307 213.057 926.95 255.211 1027.59 253.147C1128.23 251.078 1228.86 204.794 1329.5 184.835C1430.15 164.879 1530.78 171.252 1631.42 184.835C1732.06 198.417 1832.7 219.21 1933.34 236.066C2033.98 252.923 2134.62 265.843 2235.26 278.762V663C2134.62 663 2033.98 663 1933.34 663C1832.7 663 1732.06 663 1631.42 663C1530.78 663 1430.15 663 1329.5 663C1228.86 663 1128.23 663 1027.59 663C926.95 663 826.307 663 725.669 663C625.031 663 524.392 663 423.754 663C323.111 663 222.473 663 121.834 663C21.1961 663 -79.4421 663 -180.08 663C-280.723 663 -381.362 663 -482 663V244.606Z"
            fill="#3178C6" fill-opacity="0.05" />
          <path
            d="M-482 375.235C-381.362 364.052 -280.723 352.87 -180.08 358.154C-79.4421 363.439 21.1961 385.19 121.834 375.235C222.473 365.275 323.111 323.604 423.754 324.003C524.392 324.397 625.031 366.856 725.669 375.235C826.307 383.609 926.95 357.899 1027.59 349.619C1128.23 341.334 1228.86 350.479 1329.5 358.154C1430.15 365.835 1530.78 372.046 1631.42 366.694C1732.06 361.343 1832.7 344.428 1933.34 341.079C2033.98 337.729 2134.62 347.944 2235.26 358.154V580.161C2134.62 580.161 2033.98 580.161 1933.34 580.161C1832.7 580.161 1732.06 580.161 1631.42 580.161C1530.78 580.161 1430.15 580.161 1329.5 580.161C1228.86 580.161 1128.23 580.161 1027.59 580.161C926.95 580.161 826.307 580.161 725.669 580.161C625.031 580.161 524.392 580.161 423.754 580.161C323.111 580.161 222.473 580.161 121.834 580.161C21.1961 580.161 -79.4421 580.161 -180.08 580.161C-280.723 580.161 -381.362 580.161 -482 580.161V375.235Z"
            fill="#3178C6" fill-opacity="0.05" />
        </svg>
      </div>



      <footer>
        <p>Design available at <a :class="store.currentColorClass" href="/">Figma</a></p>
        <p>Built with <span>Vue3</span> and <span>Pinia</span></p>
      </footer>
    </TheContainer>
  </section>
</template>

<script setup lang="ts">
import { usePortfolioStore } from '../../store/portfolio-store';
const store = usePortfolioStore();

</script>

<style scoped lang="scss">
.contacts {
  position: relative;
  width: 100%;
  height: 100svh;
  overflow: hidden;
  display: flex;
  align-items: center;

  &__wrapper {
    position: relative;
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

    @include phone-adp {
      font-size: 1rem;
    }
  }

  &__upper {
    display: flex;
    gap: 20px;
    align-items: center;

    @include phone-adp {
      gap: 10px;
    }
  }

  &__title {
    @include title;

    &-icon {
      width: 32px;
      height: auto;

      @include desktop-adp {
        width: 28px;
      }

      @include tablet-landscape-adp {
        width: 26px;
      }

      @include tablet-adp {
        width: 24px;
      }

      @include phone-adp {
        width: 22px;
      }

      svg {
        width: 100%;
        height: 100%;

        path {
          fill: var(--primary-color);
        }
      }

    }
  }

  &__descr {
    width: 60%;
    margin-top: 30px;
    font-size: 1.25rem;
    @include text-lh;

    @include tablet-landscape-adp {
      width: 90%;
    }

    @include phone-adp {
      font-size: 1rem;
    }
  }

  &__social {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 30px;

    @include phone-adp {
      gap: 5px;
    }
  }

  &__link {
    font-size: 1.125rem;
    @include text-lh;

    @include phone-adp {
      font-size: 1rem;
    }

    a {
      transition: all 1s;
      font-weight: 600;
      color: var(--primary-color);
      text-decoration: none;

      &:hover {
        text-shadow: 5px 5px 20px var(--hover-color);
      }
    }
  }

  // &__arrow {
  //   @include desktop-adp {
  //     width: 28px;
  //     height: auto;
  //   }

  //   @include tablet-landscape-adp {
  //     width: 26px;
  //   }

  //   path {
  //     fill: var(--primary-color);
  //   }
  // }

}

.waves {
  width: 100vw;
  height: auto;
  z-index: -10;
  position: absolute;
  left: 0;
  bottom: -5px;

  svg {
    width: 100%;
    height: 100%;

    path {
      fill-opacity: 0.10;
      fill: var(--primary-color);

      &:first-child {
        animation: wave 5s ease-in-out 0s infinite alternate;
      }

      &:nth-child(2) {
        animation: wave 4s ease-in-out 0s infinite alternate;
      }

      &:nth-child(3) {
        animation: wave 3s ease-in-out 0s infinite alternate;
        // transform: translateY(10px);
      }
    }
  }


}

// @media (max-width:960px) {

//   }
@keyframes wave {
  0% {
    // transform: translateX(100px);
    transform: translateY(10px);
  }

  100% {
    // transform: translateX(0px);
    transform: translateY(0px);
  }
}

footer {
  width: 100%;
  left: 50%;
  transform: translate(-50%);
  position: absolute;
  bottom: 0;

  p {
    line-height: unset;
    display: block;
    color: var(--text-color);
    text-align: center;
    font-size: 12px;

    &:nth-child(2) {
      margin: 10px 0;
    }

    a {
      color: var(--text-color);
      transition: all 0.5s;

      &:hover {
        transition: all 0.5s;
        font-weight: 500;
        color: var(--primary-color);
      }
    }

    span {
      color: #06ac2a;

      &:nth-child(2) {
        color: rgb(252, 252, 2);
      }
    }
  }
}
</style>