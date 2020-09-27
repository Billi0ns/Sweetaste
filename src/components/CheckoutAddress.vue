<template>
  <form class="address">
    <div class="address-container">
      <header class="address-header">
        <div>運送</div>
        <div class="address-progress-bar">
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
            <label for="firstname" class="hidden-label">區域</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="新興區"
            />
          </div>
        </div>

        <input
          type="text"
          name="firstname"
          id="firstname"
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
.address {
  color: #eaf0ed;
  max-width: 62rem;
  margin: 0 auto;
}

.address-container {
  background: #3f5d45;
  padding: 3rem;
}

.address-header {
  display: flex;
  justify-content: space-between;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 3rem;
}

.address-progress-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
}

.empty-circle,
.dotted-circle,
.checked-circle {
  position: relative;
  width: 21px;
  height: 21px;
  border-radius: 50%;
  border: 1px solid #eaf0ed;
}

.dotted-circle {
  &::after {
    content: '';
    width: 15px;
    height: 15px;
    position: absolute;
    top: 2px;
    left: 2px;
    border-radius: 50%;
    background: #eaf0ed;
  }
}

.checked-circle {
  background: #eaf0ed;
  &::after {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    content: '\f00c';
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    font-size: 15px;
    color: #3f5d45;
  }
}

.progress-bar-border-line {
  width: 4rem;
  border-bottom: 1px solid #eaf0ed;
  margin: -0.1rem;
}

form label {
  font-size: 2rem;
}

form input {
  font-size: 1.6rem;
  background: #eaf0ed;
  color: #8da291;
  border: none;
  width: 100%;
  height: 5rem;
  margin-top: 1rem;
  text-indent: 1rem;
}

.hidden-label {
  visibility: hidden;
}

.multi-input-container {
  display: flex;
  justify-content: space-between;
}

.form-input {
  width: 100%;
  text-align: left;
  margin-bottom: 1rem;
}

.left-input {
  padding-right: 0.5rem;
}

.right-input {
  padding-left: 0.5rem;
}

.next-button {
  width: 100%;
  background: #ffe180;
  color: #3f5d45;
  font-size: 2.4rem;
  font-weight: bold;
  padding: 1.6rem 0;
}

@media screen and (min-width: 620px) {
  .address {
    margin-bottom: 3rem;
  }
}
@media screen and (min-width: 900px) {
  .address {
    margin: 0;
  }
}
</style>
