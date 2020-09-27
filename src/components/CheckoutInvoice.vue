<template>
  <form class="form">
    <div class="form-container">
      <header class="form-header">
        <div>發票</div>
        <div class="form-progress-bar">
          <div class="checked-circle"></div>
          <div class="progress-bar-border-line"></div>
          <div class="checked-circle"></div>
          <div class="progress-bar-border-line"></div>
          <div class="dotted-circle"></div>

          <div class="fix-circle"></div>
        </div>
      </header>

      <div class="invoice-selector">
        <div
          class="invoice-item"
          :class="{ invoiceActive: eInvoice }"
          @click="eInvoice = true"
        >
          電子發票
        </div>
        <div
          class="invoice-item"
          :class="{ invoiceActive: !eInvoice }"
          @click="eInvoice = false"
        >
          郵寄發票
        </div>
      </div>

      <div class="form-input-area" v-if="eInvoice">
        <div class="form-input">
          <label for="email">電子郵件信箱</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="example@email.com"
          />
        </div>
      </div>

      <div class="form-input-area" v-else>
        <div class="multi-input-container">
          <div class="form-input left-input">
            <label for="city">地址</label>

            <input type="text" name="city" id="city" placeholder="高雄市" />
          </div>
          <div class="form-input right-input">
            <div class="checkbox-area">
              <input
                type="checkbox"
                name="sameAddress"
                id="sameAddress"
                class="sameAddress"
              />
              <div class="checkbox-label">同運送地址</div>
            </div>

            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="新興區"
            />
          </div>
        </div>

        <div class="form-input">
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="幸福路520號"
          />
        </div>
      </div>

      <div class="form-input">
        <label for="tax-id">統一編號（選填）</label>
        <input type="text" name="tax-id" id="tax-id" placeholder="12345678" />
      </div>
    </div>

    <router-link to="/checkout-success" tag="button" class="next-button">
      確認結帳
    </router-link>
  </form>
</template>

<script>
export default {
  data() {
    return {
      eInvoice: true,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/checkout-form.scss';
.invoice-selector {
  display: flex;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.invoice-item {
  border: 1px solid #eaf0ed;
  padding: 1.5rem;
  width: 100%;
  cursor: pointer;
}

.invoiceActive {
  background: #eaf0ed;
  color: #3f5d45;
}

.checkbox-area {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 0.5rem;
}
.checkbox-label {
  font-size: 1.6rem;
  height: auto;
}
#sameAddress {
  width: 1.6rem;
  height: 1.6rem;
  margin-top: 0;
  margin-right: 1rem;
}

// To fix circle being distorted on Chrome
.fix-circle {
  width: 1px;
  height: 1px;
  visibility: hidden;
}
</style>
