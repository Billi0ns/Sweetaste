<template>
  <div class="cart">
    <app-header></app-header>
    <div class="cart-container">
      <cart-items></cart-items>
      <cart-summary></cart-summary>
    </div>
    <app-mail-list></app-mail-list>
    <app-footer></app-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader.vue';
import AppMailList from '@/components/AppMailList.vue';
import AppFooter from '@/components/AppFooter.vue';
import CartItems from '@/components/CartItems.vue';
import CartSummary from '@/components/CartSummary.vue';

export default {
  name: 'Cart',
  components: {
    AppHeader,
    AppMailList,
    AppFooter,
    CartItems,
    CartSummary,
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 900px) {
  .cart-container {
    max-width: 100rem;
    display: grid;
    grid-template-columns: 2fr 1fr;

    margin: 0 auto;
    padding: 3rem;
    gap: 3rem;
  }
}
</style>
