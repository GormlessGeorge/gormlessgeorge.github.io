<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 1140px;
  margin: 0 auto;
  @include desktop-adp {
    max-width: 960px;
  }
  @include tablet-landscape-adp {
    max-width: 720px;
  }
  @include tablet-adp {
    max-width: 540px;
  }
  @include phone-adp {
    max-width: 320px;
  }
}

</style>