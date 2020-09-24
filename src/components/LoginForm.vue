<template>
  <div class="login-form-container">
    <form action="" class="login-form">
      <div class="login-form-left">
        <div class="form-input-container">
          <div class="form-header">會員登入</div>
          <div class="form-inputs-area">
            <div class="form-input">
              <div class="input-icon">
                <i class="fas fa-user fa-2x user-icon"></i>
              </div>
              <input
                id="login-account"
                type="text"
                placeholder="電子信箱 / 手機號碼"
              />
            </div>
            <div class="form-input">
              <div class="input-icon">
                <i class="fas fa-lock fa-2x user-icon"></i>
              </div>
              <input
                id="login-account"
                type="password"
                placeholder="請輸入使用者密碼"
              />
            </div>

            <div class="checkbox-area">
              <input type="checkbox" name="rememberAcc" id="login-checkbox" />
              <label for="rememberAcc">記住我</label>
            </div>
          </div>
        </div>
        <button class="form-button" id="login-btn-lg">登入帳號</button>
      </div>

      <div class="third-party-login">
        <div class="third-party-login-header">
          —— 連結社群帳號 ——
        </div>
        <div class="third-party-login-container">
          <div class="third-party-icon">
            <img src="../assets/logo-facebook.svg" alt="" />
          </div>
          <div class="third-party-icon">
            <img src="../assets/logo-google.svg" alt="" />
          </div>
          <div class="third-party-icon">
            <img src="../assets/logo-yahoo.svg" alt="" />
          </div>
        </div>
      </div>

      <button class="form-button" id="login-btn-sm">登入帳號</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.login-form-container {
  width: 100%;
}

.form-input-container {
  padding: 0 3rem;
  padding-bottom: 2rem;
  background: #3f5d45;
  color: #eaf0ed;
}

.form-header {
  font-size: 3.6rem;
  font-weight: bold;
  padding: 2rem;
}

.form-inputs-area {
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
}

.form-input {
  background: #eaf0ed;
  display: flex;
  align-items: center;
}

#login-account,
#login-password {
  width: 100%;
  height: 5.6rem;
  background: #eaf0ed;
  border: none;
  text-indent: 2rem;
  outline: none;
  font-size: 1.5rem;
}

.input-icon {
  color: #3f5d45;
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
}

.checkbox-area {
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 1.6rem;
}

#login-checkbox {
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 0.5rem;
}

.third-party-login {
  height: 11.6rem;
  background: #eaf0ed;
}

.third-party-login-header {
  display: none;
}

.third-party-login-container {
  height: 100%;
  margin: 0 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 1px;
}

.third-party-icon {
  height: 5.6rem;
  background: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;
}

.third-party-icon img {
  max-width: 7.2rem;
  max-height: 2.4rem;
}

.form-button {
  width: 100%;
  height: 6rem;
  background: #ffe180;
  color: #3f5d45;
  font-size: 2.4rem;
  font-weight: bold;
}

#login-btn-lg {
  display: none;
}

@media screen and (min-width: 700px) {
  .login-form-container {
    width: 90%;
    max-width: 100rem;
    height: 38rem;
    margin: 3rem auto;
    display: flex;
    justify-content: center;
  }

  .login-form {
    width: 100%;
    max-width: 80rem;
    display: flex;
  }

  .form-header {
    padding: 4rem;
  }

  .login-form-left {
    width: 100%;
    height: 38rem;
  }

  .third-party-login {
    height: auto;
    width: 100%;
    padding: 3rem;
    margin: 2rem 0;
  }

  .third-party-login-header {
    display: block;
    font-size: 2.4rem;
    color: #8da291;
    margin-bottom: 3rem;
  }

  .third-party-login-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 0;
  }

  .third-party-icon {
    width: 100%;
  }

  .third-party-icon img {
    max-width: 9.5rem;
    max-height: 3rem;
  }

  #login-btn-sm {
    display: none;
  }

  #login-btn-lg {
    display: block;
  }
}
</style>
