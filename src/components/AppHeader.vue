<template>
  <header>
    <div class="menu">
      <i class="fas fa-bars fa-2x"></i>
    </div>
    <img class="logo" src="../assets/logo.png" alt="" />
    <div class="header__right">
      <nav>
        <ul>
          <li>首頁</li>
          <li>甜點</li>
          <li>登入</li>
        </ul>
      </nav>
      <div class="cart">
        <i class="fas fa-shopping-cart fa-2x"></i>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7rem;
}

.menu {
  padding-left: 2rem;
}
.cart {
  padding-right: 2rem;
}

nav {
  display: none;
}

li,
.logo,
.cart {
  cursor: pointer;
}
.header__right {
  display: flex;
  align-items: center;
}

.logo {
  width: 15rem;
  height: 3rem;
}

@media screen and (min-width: 620px) {
  header {
    max-width: 100rem;
    margin: 0 auto;
  }
  .menu {
    display: none;
  }
  .logo {
    margin-left: 2rem;
    width: 22rem;
    height: 4rem;
  }
  nav {
    display: block;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    margin: 2rem;
    font-size: 1.5rem;
  }
  .cart {
    margin: 2rem;
    //padding-right: 4rem;
  }
}
</style>
