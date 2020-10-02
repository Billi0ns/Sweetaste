<template>
  <div class="products-list">
    <ul>
      <li>甜點類別</li>
      <li>所有甜點（48）</li>
      <li>本日精選（10）</li>
      <li>人氣推薦（26）</li>
      <li>新品上市（12）</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.products-list {
  margin-bottom: 3rem;
}

li {
  font-size: 2rem;
  font-weight: bold;
  color: $green;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

li:first-child {
  background: $green;
  color: $white;
}

li:not(:first-child) {
  border: 1px solid $white;
  cursor: pointer;

  &:hover {
    background: $white;
  }
}

@media screen and (min-width: 800px) {
  .products-list {
    max-width: 25rem;
    margin-left: 3rem;
  }
}
</style>
