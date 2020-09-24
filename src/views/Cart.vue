<template>
  <div class="cart">
    <app-header></app-header>
    <login-form></login-form>
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
  name: 'Cart',
  components: {
    AppHeader,
    AppMailList,
    AppFooter,
  },
};
</script>
