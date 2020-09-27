<template>
  <div>
    <app-header></app-header>
    <div class="success-container">
      <div class="form-progress-bar">
        <div class="checked-circle"></div>
        <div class="progress-bar-border-line"></div>
        <div class="checked-circle"></div>
        <div class="progress-bar-border-line"></div>
        <div class="checked-circle"></div>
      </div>

      <img
        src="../assets/checkout-success-text.svg"
        alt=""
        class="success-text"
      />

      <router-link to="/" tag="button" class="next-button-desktop">
        繼續逛逛
      </router-link>
    </div>

    <router-link to="/" tag="button" class="next-button-mobile">
      繼續逛逛
    </router-link>
    <app-mail-list></app-mail-list>
    <app-footer></app-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader.vue';
import AppMailList from '@/components/AppMailList.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'Checkout-success',
  components: {
    AppHeader,
    AppMailList,
    AppFooter,
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/form-progress-bar.scss';

.success-container {
  background-image: url('../assets/checkout-success.jpg');
  background-size: cover;
  background-position: center;
  max-width: 100rem;
  height: 46rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form-progress-bar {
  margin-bottom: 3rem;
}

.checked-circle {
  background: #3f5d45;
  border: 1px solid #3f5d45;

  &::after {
    color: #eaf0ed;
  }
}

.progress-bar-border-line {
  border: 1px solid #3f5d45;
  width: 6.6rem;
}

.success-text {
  height: 4.5rem;
}

.next-button-mobile,
.next-button-desktop {
  width: 100%;
  background: #ffe180;
  color: #3f5d45;
  font-size: 2.4rem;
  font-weight: bold;
  padding: 1.6rem 0;
}

.next-button-desktop {
  display: none;
}

@media screen and (min-width: 620px) {
  .success-container {
    margin-bottom: 3rem;
  }

  .next-button-mobile {
    display: none;
  }

  .next-button-desktop {
    display: block;
    width: 30rem;
    margin-top: 3rem;
  }
}
</style>
