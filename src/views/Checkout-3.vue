<template>
  <div class="checkout-container">
    <checkout-invoice></checkout-invoice>
    <checkout-sidebar></checkout-sidebar>
  </div>
</template>

<script>
// @ is an alias to /src
import CheckoutInvoice from '@/components/CheckoutInvoice.vue';
import CheckoutSidebar from '@/components/CheckoutSidebar.vue';

export default {
  name: 'Checkout-3',
  components: {
    CheckoutInvoice,
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
