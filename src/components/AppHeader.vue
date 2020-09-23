<template>
  <header>
    <div class="menu">
      <i class="fas fa-bars fa-2x"></i>
    </div>
    <router-link to="/">
      <img class="logo" src="../assets/logo.png" alt="" />
    </router-link>

    <div class="header__right">
      <nav>
        <ul>
          <router-link to="/" tag="li">首頁</router-link>
          <router-link to="/products" tag="li">甜點</router-link>
          <router-link to="/login" tag="li">登入</router-link>
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
  }
}
</style>
