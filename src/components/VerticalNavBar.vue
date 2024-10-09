<template>
  <nav>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </nav>
</template>
<script>
</script>
<style scoped lang="scss">
ul {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  right: 40px;
  transform: translateY(-50%);
  gap: 40px;
  li {
    cursor: pointer;
    transition: all 0.3s linear;
    transform: rotate(45deg);
    height: 12px;
    width: 12px;
    border:solid 3px white;
    list-style: none;
    &:hover {
        transform: rotate(90deg);
        transition: all 0.3s linear;
        border: none;
        background: linear-gradient(0deg, #765af8 0%, #b843ea 50%, #fd318e 100%);
        box-shadow: 0px 0px 35px 5px rgb(186, 67, 232);
    }
  }
}
</style>