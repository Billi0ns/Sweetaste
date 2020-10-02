<template>
  <footer>
    <div class="container">
      <div class="footer-up">
        <div class="footer-left">
          <img class="logo-name" src="../assets/logo-name.png" alt="" />
          <div class="footer-left-info">
            <p>07-1234-5678</p>
            <p>sweetaste@email.com</p>
            <p>高雄市新興區幸福路 520 號</p>
          </div>
        </div>
        <div class="footer-right">
          <img src="../assets/footer-quote.svg" alt="" />
        </div>
      </div>

      <div class="footer-down">
        <div class="icons">
          <img class="icon" src="../assets/icon-at.png" alt="" />
          <img class="icon" src="../assets/icon-Facebook.png" alt="" />
        </div>
        <p>© 2018 Sweetaste* All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  background: $white;
  color: $green;
  font-size: 1.6rem;
}

.container {
  padding: 0 2rem;
  margin: 0 auto;
}

.logo-name {
  width: 17rem;
  height: 10rem;
}

.footer-left,
.footer-left-info,
.footer-down {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer-right {
  display: none;
}

.footer-down {
  padding: 2rem 0;
}

.icons {
  margin-bottom: 2rem;
}

.icon {
  width: 3.2rem;
  height: 3.2rem;
  margin-right: 1rem;
  cursor: pointer;
}

@media screen and (min-width: 620px) {
  .container {
    max-width: 90rem;
  }

  .footer-up {
    display: flex;
    justify-content: space-between;
    padding-top: 3rem;
  }

  .footer-left {
    justify-content: space-between;
  }

  .footer-right {
    display: block;
    writing-mode: vertical-rl;
    text-orientation: upright;
    height: 22rem;
  }

  .footer-down {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
  }

  .icons {
    margin-bottom: 0;
  }
}
</style>
