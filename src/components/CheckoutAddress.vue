<template>
  <form class="form">
    <div class="form-container">
      <header class="form-header">
        <div>運送</div>
        <div class="form-progress-bar">
          <div class="dotted-circle"></div>
          <div class="progress-bar-border-line"></div>
          <div class="empty-circle"></div>
          <div class="progress-bar-border-line"></div>
          <div class="empty-circle"></div>
        </div>
      </header>

      <div class="form-input-area">
        <div class="multi-input-container">
          <div class="form-input left-input">
            <label for="lastname">姓氏</label>
            <input type="text" name="lastname" id="lastname" placeholder="王" />
          </div>
          <div class="form-input right-input">
            <label for="firstname">名字</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="小明"
            />
          </div>
        </div>

        <div class="form-input">
          <label for="telephone">電話</label>
          <input
            type="text"
            name="telephone"
            id="telephone"
            placeholder="0912-345-678"
          />
        </div>

        <div class="multi-input-container">
          <div class="form-input left-input">
            <label for="city">地址</label>
            <input type="text" name="city" id="city" placeholder="高雄市" />
          </div>
          <div class="form-input right-input">
            <label for="district" class="hidden">區域</label>
            <input
              type="text"
              name="district"
              id="district"
              placeholder="新興區"
            />
          </div>
        </div>

        <input
          type="text"
          name="street"
          id="street"
          placeholder="幸福路520號"
        />
      </div>
    </div>
    <router-link to="/checkout-2" tag="button" class="next-button">
      下一步
    </router-link>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../styles/checkout-form.scss';
</style>
