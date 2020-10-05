<template>
  <div>
    <home-cover></home-cover>
    <home-section></home-section>
    <home-merchandise-card></home-merchandise-card>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeCover from '@/components/HomeCover.vue';
import HomeSection from '@/components/HomeSection.vue';
import HomeMerchandiseCard from '@/components/HomeMerchandiseCard.vue';

export default {
  name: 'Home',
  components: {
    HomeCover,
    HomeSection,
    HomeMerchandiseCard,
  },
};
</script>
