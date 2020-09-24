<template>
  <div class="container">
    <div class="mailList">
      <div class="title">
        <img class="logo" src="../assets/small-logo.png" alt="" />
        <div>訂閱你我的甜蜜郵件</div>
      </div>
      <form action="">
        <div class="input-area">
          <input type="email" />
          <i class="fas fa-envelope fa-2x"></i>
        </div>
        <button></button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  background: #3f5d45;
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
  gap: 3rem;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #eaf0ed;
  font-size: 1.6rem;
  width: 100%;
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
  max-width: 25rem;
  text-indent: 5rem;
  font-size: 1.5rem;
}

button::after {
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  content: '\f061';
  color: #3f5d45;
}

i {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  color: #3f5d45;
}

button {
  background: #ffe180;
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
  }

  form {
    justify-content: flex-end;
  }
}
</style>
