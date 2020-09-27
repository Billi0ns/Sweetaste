<template>
  <div>
    <app-header></app-header>
    <div class="checkout-container">
      <checkout-payment></checkout-payment>
      <checkout-sidebar></checkout-sidebar>
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
import CheckoutPayment from '@/components/CheckoutPayment.vue';
import CheckoutSidebar from '@/components/CheckoutSidebar.vue';

export default {
  name: 'Checkout-2',
  components: {
    AppHeader,
    AppMailList,
    AppFooter,
    CheckoutPayment,
    CheckoutSidebar,
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 900px) {
  .checkout-container {
    max-width: 100rem;
    display: grid;
    grid-template-columns: 2fr 1fr;

    margin: 0 auto;
    padding: 3rem;
    gap: 3rem;
  }
}
</style>
