<template>
  <div class="container">
    <merchandise-card :imageName="imageName1"></merchandise-card>

    <merchandise-card
      class="second-item"
      :imageName="imageName2"
    ></merchandise-card>
    <merchandise-card
      class="third-item"
      :imageName="imageName3"
    ></merchandise-card>
  </div>
</template>

<script>
import MerchandiseCard from '@/components/MerchandiseCard.vue';

export default {
  data() {
    return {
      imageName1: 'card-image-1.jpg',
      imageName2: 'card-image-2.jpg',
      imageName3: 'card-image-3.jpg',
    };
  },
  components: {
    MerchandiseCard,
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 90%;
  max-width: 40rem;
  margin: 0 auto;
  display: flex;
}

.second-item,
.third-item {
  display: none;
}

@media screen and (min-width: 700px) {
  .container {
    max-width: 100rem;
    gap: 2rem;
  }

  .second-item {
    display: block;
  }
}

@media screen and (min-width: 900px) {
  .third-item {
    display: block;
  }
}
</style>
