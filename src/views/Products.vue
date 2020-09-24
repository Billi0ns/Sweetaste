<template>
  <div class="product">
    <app-header></app-header>
    <products-cover></products-cover>
    <div class="merchandise-container">
      <products-list></products-list>
      <products-merchandise-card></products-merchandise-card>
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
import ProductsCover from '@/components/ProductsCover.vue';
import ProductsList from '@/components/ProductsList.vue';
import ProductsMerchandiseCard from '@/components/ProductsMerchandiseCard.vue';

export default {
  name: 'Products',
  components: {
    AppHeader,
    AppMailList,
    AppFooter,
    ProductsCover,
    ProductsList,
    ProductsMerchandiseCard,
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 800px) {
  .merchandise-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: 0 auto;
    padding: 3rem 0;
    max-width: 100rem;
  }
}
</style>
