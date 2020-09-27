<template>
  <div class="checkout-summary">
    <div class="checkout-summary-header">訂單摘要</div>
    <div class="checkout-summary-container">
      <div class="checkout-summary-fee">
        <div>小計</div>
        <div>NT$2,700</div>
      </div>
      <div class="checkout-summary-fee">
        <div>運費</div>
        <div>NT$300</div>
      </div>
      <div class="checkout-summary-total">
        <div>總計</div>
        <div>NT$3,000</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.checkout-summary-header {
  background: #eaf0ed;
  color: #8da291;
  font-size: 2.4rem;
  font-weight: bold;
  padding: 1.6rem 0;
}

.checkout-summary-container {
  padding: 2rem;
  color: #8da291;
  border: 1px solid #eaf0ed;
}

.checkout-summary-fee,
.checkout-summary-total {
  display: flex;
  justify-content: space-between;
}

.checkout-summary-fee {
  font-size: 1.6rem;
  margin-bottom: 0.8rem;
}

.checkout-summary-total {
  font-size: 2rem;
  font-weight: bold;
}
</style>
