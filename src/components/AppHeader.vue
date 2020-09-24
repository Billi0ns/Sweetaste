<template>
  <header>
    <div class="menu" @click="toggleMenu()">
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
      <router-link to="/cart" class="cart">
        <i class="fas fa-shopping-cart fa-2x"></i>
      </router-link>
    </div>

    <nav class="mobile-menu" :class="{ active: menuActive }">
      <ul>
        <router-link to="/" tag="li" class="mobile-link">首頁</router-link>
        <router-link to="/products" tag="li" class="mobile-link"
          >甜點</router-link
        >
        <router-link to="/login" tag="li" class="mobile-link">登入</router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
      console.log('touched');
    },
  },
};
</script>

<style scoped lang="scss">
header {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
}

.menu {
  padding-left: 2rem;
  color: #3f5d45;
}

.cart {
  padding-right: 2rem;
  color: #3f5d45;
}

nav {
  display: none;
}

.active {
  display: block;
  width: 100%;
  padding-top: 1rem;
}

.active ul {
  width: 80%;
  margin: 0 auto;
}

.mobile-link {
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  color: #3f5d45;
  border-bottom: 1px solid #3f5d45;
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

  .mobile-menu {
    display: none;
  }
}
</style>
