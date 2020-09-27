<template>
  <div class="checkout-sidebar">
    <checkout-summary class="mb-2"></checkout-summary>

    <checkout-shopping-list></checkout-shopping-list>
  </div>
</template>

<script>
import CheckoutSummary from '@/components/CheckoutSummary.vue';
import CheckoutShoppingList from '@/components/CheckoutShoppingList.vue';

export default {
  components: {
    CheckoutSummary,
    CheckoutShoppingList,
  },
};
</script>

<style lang="scss" scoped>
.checkout-sidebar {
  display: none;
}

.mb-2 {
  margin-bottom: 2rem;
}

@media screen and (min-width: 900px) {
  .checkout-sidebar {
    display: block;
  }
}
</style>
