<template>
  <form class="form">
    <div class="form-container">
      <header class="form-header">
        <div>付款</div>
        <div class="form-progress-bar">
          <div class="checked-circle"></div>
          <div class="progress-bar-border-line"></div>
          <div class="dotted-circle"></div>
          <div class="progress-bar-border-line"></div>
          <div class="empty-circle"></div>
        </div>
      </header>

      <div class="form-input-area">
        <div class="form-input">
          <label for="credit-card">信用卡卡號</label>
          <div class="credit-card-container">
            <input
              type="text"
              name="credit-card"
              id="credit-card"
              placeholder="9012-3456-7890-1234"
            />
            <i class="far fa-credit-card fa-2x credit-card-icon"></i>
          </div>
        </div>

        <div class="multi-input-container">
          <div class="form-input left-input">
            <label for="lastname">持卡人姓名</label>
            <input type="text" name="lastname" id="lastname" placeholder="王" />
          </div>
          <div class="form-input right-input">
            <label for="firstname" class="hidden">名字</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="小明"
            />
          </div>
        </div>

        <div class="multi-input-container">
          <div class="form-input left-input">
            <label for="expiration-month">有效期限</label>
            <input
              type="text"
              name="expiration-month"
              id="expiration-month"
              placeholder="月"
            />
          </div>
          <div class="form-input right-input">
            <label for="expiration-year" class="hidden">有效期限（年）</label>
            <input
              type="text"
              name="expiration-year"
              id="expiration-year"
              placeholder="年"
            />
          </div>
        </div>

        <div class="multi-input-container">
          <div class="form-input left-input">
            <label for="security-code">背面末三碼</label>
            <input
              type="text"
              name="security-code"
              id="security-code"
              placeholder="123"
            />
          </div>
        </div>
      </div>
    </div>

    <router-link to="/checkout-3" tag="button" class="next-button">
      下一步
    </router-link>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../styles/checkout-form.scss';

.credit-card-container {
  position: relative;
}

.credit-card-icon {
  position: absolute;
  top: 2.5rem;
  right: 1rem;
  color: #3f5d45;
}
</style>
