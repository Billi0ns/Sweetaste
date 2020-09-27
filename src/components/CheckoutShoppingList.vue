<template>
  <div class="shopping-list">
    <header class="shopping-list-header">購物清單</header>
    <div class="shopping-list-container">
      <div class="shopping-list-item">
        <img src="../assets/card-image-5.jpg" alt="" class="item-picture" />
        <div class="shopping-list-description">
          <div class="shopping-list-name">焦糖馬卡龍 (2)</div>
          <div class="shopping-list-price">NT$900</div>
        </div>
      </div>

      <div class="shopping-list-item">
        <img src="../assets/card-image-6.jpg" alt="" class="item-picture" />
        <div class="shopping-list-description">
          <div class="shopping-list-name">焦糖馬卡龍 (2)</div>
          <div class="shopping-list-price">NT$900</div>
        </div>
      </div>

      <div class="shopping-list-item">
        <img src="../assets/card-image-2.jpg" alt="" class="item-picture" />
        <div class="shopping-list-description">
          <div class="shopping-list-name">焦糖馬卡龍 (2)</div>
          <div class="shopping-list-price">NT$900</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.shopping-list-header {
  background: #eaf0ed;
  color: #8da291;
  font-size: 2.4rem;
  font-weight: bold;
  padding: 1.6rem 0;
}

.shopping-list-container {
  padding: 2rem;
  color: #8da291;
  border: 1px solid #eaf0ed;
}

.shopping-list-item {
  display: flex;
  margin-bottom: 1.5rem;
}

.item-picture {
  width: 12rem;
  height: 8rem;
  object-fit: cover;
}

.shopping-list-description {
  width: 100%;
  color: #8da291;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-left: 2rem;
}

.shopping-list-name {
  font-size: 1.6rem;
}

.shopping-list-price {
  font-size: 2rem;
  font-weight: bold;
}
</style>
