<template>
  <div>
    <app-header></app-header>
    <home-cover></home-cover>
    <home-section></home-section>
    <home-merchandise-card></home-merchandise-card>
    <app-mail-list></app-mail-list>
    <app-footer></app-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader.vue';
import AppMailList from '@/components/AppMailList.vue';
import AppFooter from '@/components/AppFooter.vue';
import HomeCover from '@/components/HomeCover.vue';
import HomeSection from '@/components/HomeSection.vue';
import HomeMerchandiseCard from '@/components/HomeMerchandiseCard.vue';

export default {
  name: 'Home',
  components: {
    AppHeader,
    AppMailList,
    AppFooter,
    HomeCover,
    HomeSection,
    HomeMerchandiseCard,
  },
};
</script>
