<template>
  <div class="product">
    <app-header></app-header>
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
  name: 'Home',
  components: {
    AppHeader,
    AppMailList,
    AppFooter,
  },
};
</script>
