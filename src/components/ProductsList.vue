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
  color: #3f5d45;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

li:first-child {
  background: #3f5d45;
  color: #eaf0ed;
}

li:not(:first-child) {
  border: 1px solid #eaf0ed;
  cursor: pointer;

  &:hover {
    background: #eaf0ed;
  }
}

@media screen and (min-width: 800px) {
  .products-list {
    max-width: 25rem;
    margin-left: 3rem;
  }
}
</style>
