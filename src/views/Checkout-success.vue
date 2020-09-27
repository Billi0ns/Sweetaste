<template>
  <div>
    <app-header></app-header>
    <div class="checkout-container"></div>
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

<style lang="scss" scoped></style>
