<template>
  <button :class="store.currentColorClass" class="dynamic-button">
    <transition name="fade" mode="out-in">
      <p :key="t('button.contact')">{{ t('button.contact') }}</p>
    </transition>
  </button>
</template>
<script setup lang="ts">
import { usePortfolioStore } from '../../store/portfolio-store.ts';
import { useI18n } from 'vue-i18n';
const store = usePortfolioStore();
const { t } = useI18n();
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

button {
  display: block;
  cursor: pointer;
  transition: all 1s;
  margin-top: 25px;
  height: 54px;
  width: 190px;
  font-size: 20px;
  font-weight: 700;
  color: #fcfcfc;
  border: none;
  background-color: var(--primary-color);
  color: var(--button-text-color);

  @include desktop-adp {
    font-size: 18px;
    height: 45px;
    width: 150px;
  }

  @include phone-adp {
    font-size: 14px;
    height: 40px;
    width: 140px;
  }

  @include tablet-landscape-adp {
    margin: 25px auto 0 auto;
  }


  &:hover {
    transition: all 1s;
    box-shadow: 12px 9px 39px 3px var(--hover-color);
  }

}
</style>