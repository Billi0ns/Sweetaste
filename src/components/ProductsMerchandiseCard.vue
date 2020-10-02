<template>
  <div class="card-container">
    <merchandise-card
      :imageName="imageName4"
      class="card-bottom-padding"
    ></merchandise-card>
    <merchandise-card
      :imageName="imageName5"
      class="card-bottom-padding "
    ></merchandise-card>
    <merchandise-card
      :imageName="imageName6"
      class="card-bottom-padding "
    ></merchandise-card>
    <merchandise-card
      :imageName="imageName1"
      class="card-bottom-padding hide-card-1"
    ></merchandise-card>
    <merchandise-card
      :imageName="imageName2"
      class="card-bottom-padding hide-card-rest"
    ></merchandise-card>
    <merchandise-card
      :imageName="imageName3"
      class="card-bottom-padding hide-card-rest"
    ></merchandise-card>

    <div class="page-selector-container">
      <div class="page-selector">
        <div>
          <i class="fas fa-caret-left fa-xs"></i>
        </div>
        <div id="page-selected">1</div>
        <div>2</div>
        <div>3</div>
        <div>
          <i class="fas fa-caret-right fa-xs"></i>
        </div>
      </div>
    </div>
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
      imageName4: 'card-image-4.jpg',
      imageName5: 'card-image-5.jpg',
      imageName6: 'card-image-6.jpg',
    };
  },
  components: {
    MerchandiseCard,
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  width: 90%;
  max-width: 40rem;
  margin: 0 auto;
}

.card-bottom-padding {
  padding-bottom: 2rem;
}

.hide-card-1,
.hide-card-rest {
  display: none;
}

.page-selector-container {
  display: flex;
  justify-content: center;
  grid-column: 1/-1;
}

.page-selector {
  display: flex;
  margin-bottom: 3rem;
  cursor: pointer;
}

.page-selector div {
  width: 6rem;
  height: 6rem;
  border: 1px solid $white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: $green;
}

#page-selected {
  background: $green;
  color: $white;
}

@media screen and (min-width: 600px) {
  .card-container {
    max-width: 100rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin-bottom: 3rem;
  }

  .card-bottom-padding {
    padding-bottom: 0;
  }

  .hide-card-1 {
    display: block;
  }

  .page-selector {
    margin-bottom: 0;
  }
}

@media screen and (min-width: 800px) {
  .hide-card-rest {
    display: block;
  }
}
</style>
