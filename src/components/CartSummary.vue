<template>
  <div class="cart-summary">
    <div class="cart-summary-container">
      <div class="cart-summary-header">訂單摘要</div>
      <div class="cart-summary-fee">
        <div>小計</div>
        <div>NT$2,700</div>
      </div>

      <div class="cart-summary-fee">
        <div>運費</div>
        <div>NT$300</div>
      </div>
      <div class="cart-summary-total">
        <div>總計</div>
        <div>NT$3,000</div>
      </div>
    </div>

    <router-link to="/checkout-1" tag="button" class="checkout-button">
      結帳
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.cart-summary-container {
  padding: 2rem;
  color: $green;
}

.cart-summary-header {
  background: $white;
  font-size: 2.4rem;
  font-weight: bold;
  padding: 1.6rem 0;
  margin-bottom: 2rem;
}

.cart-summary-fee,
.cart-summary-total {
  display: flex;
  justify-content: space-between;
}

.cart-summary-fee {
  font-size: 1.6rem;
  margin-bottom: 0.8rem;
}

.cart-summary-total {
  font-size: 2rem;
  font-weight: bold;
}

.checkout-button {
  width: 100%;
  background: $yellow;
  color: $green;
  font-size: 2.4rem;
  font-weight: bold;
  padding: 1.6rem 0;
}

@media screen and (min-width: 900px) {
  .cart-summary-container {
    background: $green;
    color: $white;
  }

  .cart-summary-header {
    background: $green;
    border-bottom: 1px solid $white;
  }
}
</style>
