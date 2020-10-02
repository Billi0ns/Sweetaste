<template>
  <div class="cart-items-container">
    <header class="cart-items-header">您的購物車</header>
    <div class="cart-items">
      <div class="cart-item">
        <div class="cart-item-top">
          <div class="cart-item-image">
            <img src="../assets/card-image-5.jpg" alt="" />
          </div>
          <div class="cart-item-right">
            <div class="cart-item-description">
              <div class="cart-item-name">焦糖馬卡龍</div>
              <div class="cart-item-price">NT$450</div>
            </div>
            <div class="cart-item-amount">
              <div class="minus-amount">-</div>
              <div class="amount-number">2</div>
              <div class="add-amount">+</div>
            </div>
          </div>
        </div>

        <div class="item-price-total">NT$900</div>
      </div>

      <div class="cart-item">
        <div class="cart-item-top">
          <div class="cart-item-image">
            <img src="../assets/card-image-6.jpg" alt="" />
          </div>
          <div class="cart-item-right">
            <div class="cart-item-description">
              <div class="cart-item-name">焦糖馬卡龍</div>
              <div class="cart-item-price">NT$450</div>
            </div>
            <div class="cart-item-amount">
              <div class="minus-amount">-</div>
              <div class="amount-number">2</div>
              <div class="add-amount">+</div>
            </div>
          </div>
        </div>

        <div class="item-price-total">NT$900</div>
      </div>
      <div class="cart-item">
        <div class="cart-item-top">
          <div class="cart-item-image">
            <img src="../assets/card-image-2.jpg" alt="" />
          </div>
          <div class="cart-item-right">
            <div class="cart-item-description">
              <div class="cart-item-name">焦糖馬卡龍</div>
              <div class="cart-item-price">NT$450</div>
            </div>
            <div class="cart-item-amount">
              <div class="minus-amount">-</div>
              <div class="amount-number">2</div>
              <div class="add-amount">+</div>
            </div>
          </div>
        </div>

        <div class="item-price-total">NT$900</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.cart-items-header {
  background: $white;
  height: 6.5rem;
  font-size: 2.4rem;
  font-weight: bold;
  color: $green;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cart-items {
  padding: 2rem;
}

.cart-item {
  margin-bottom: 3rem;
}
.cart-item-top {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.6rem;
  border-bottom: 1px solid $white;
  margin-bottom: 1rem;
}

.cart-item-image {
  justify-self: end;
}

.cart-item-image img {
  width: 100%;
  max-width: 24rem;
  height: 10.6rem;
  object-fit: cover;
}

.cart-item-right {
  max-width: 100%;
}

.cart-item-name,
.cart-item-price {
  max-width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  color: $green;
}

.cart-item-name {
  font-size: 2rem;
}

.cart-item-price {
  font-size: 1.6rem;
}

.cart-item-amount {
  display: flex;
  border: 1px solid $white;
  margin-top: 0.5rem;
  width: 14.4rem;
  height: 4.8rem;
}

.cart-item-amount div {
  width: 4.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
}

.minus-amount,
.add-amount {
  cursor: pointer;
}

.amount-number {
  border-left: 1px solid $white;
  border-right: 1px solid $white;
}

.item-price-total {
  color: $green;
  font-size: 2rem;
  font-weight: bold;
  text-align: end;
  padding-bottom: 1rem;
  border-bottom: 1px solid $white;
}

@media screen and (min-width: 620px) {
  .cart-item-right {
    display: flex;
    align-items: center;
  }

  .cart-item-description {
    margin-right: 2rem;
  }
}

@media screen and (min-width: 900px) {
  .cart-item {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid $white;
  }

  .cart-item-image {
    width: 11rem;
    height: 11rem;
  }

  .cart-item-top,
  .item-price-total {
    border-bottom: none;
  }

  .cart-item-top {
    display: flex;
    justify-content: space-between;
  }

  .item-price-total {
    display: flex;
    align-items: center;
  }
}
</style>
