<template>
  <div class="container">
    <div class="mailList">
      <div class="title">
        <img class="logo" src="../assets/small-logo.png" alt="" />
        <div>訂閱你我的甜蜜郵件</div>
      </div>
      <form action="">
        <div class="form-container">
          <div class="input-area">
            <input type="email" placeholder="example@email.com" />
            <i class="fas fa-envelope fa-2x"></i>
          </div>
          <button @click.prevent></button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  background: $green;
  height: 19rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.mailList {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  color: $white;
  font-size: 1.8rem;
  width: 100%;
  margin-bottom: 3rem;
}

.logo {
  width: 4rem;
  height: 4rem;
  margin-right: 2rem;
}

form {
  display: flex;
  justify-content: center;
  width: 90%;
}

.form-container {
  display: flex;
  width: 100%;
  justify-content: center;
}

.input-area {
  position: relative;
  width: 100%;
  max-width: 24rem;
}

input,
button {
  height: 5rem;
  border: none;
}

input {
  width: 100%;
  text-indent: 5rem;
  font-size: 1.5rem;
  border-radius: 0;
}

button::after {
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  content: '\f061';
  color: $green;
}

i {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  color: $green;
}

button {
  background: $yellow;
  width: 6.4rem;
}

@media screen and (min-width: 620px) {
  .container {
    height: 11.6rem;
  }

  .mailList {
    flex-direction: row;
    max-width: 90rem;
    padding: 0 2rem;
  }

  .title {
    justify-content: flex-start;
    font-size: 2rem;
    margin-bottom: 0;
  }

  form {
    justify-content: flex-end;
    width: 100%;
  }

  .input-area {
    max-width: 30rem;
  }
}
</style>
