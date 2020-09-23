<template>
  <div class="card">
    <div class="card-image">
      <img :src="require('@/assets/' + imageName + '')" alt="" />
      <div class="card-label">本日精選</div>
      <i class="far fa-heart fa-2x heart-icon "></i>
    </div>
    <div class="card-description">
      <p class="item-name">焦糖馬卡龍</p>
      <p class="item-price">NT$ 450</p>
    </div>
    <button class="card-button">加入購物車</button>
  </div>
</template>

<script>
export default {
  props: {
    imageName: String,
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 28rem;
  object-fit: cover;
  vertical-align: text-bottom;
  transition: all 0.2s ease-out;

  &:hover {
    transform: scale(1.1);
  }
}

.card {
  width: 100%;
}

.card-image {
  height: 28rem;
  position: relative;
  overflow: hidden;
}

.card-label {
  position: absolute;
  top: 0;
  left: 2.1rem;
  writing-mode: vertical-rl;
  letter-spacing: 2px;
  background: #3f5d45;
  padding: 1rem;
  color: white;
  font-size: 1.5rem;
}

.heart-icon {
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
}

.card-description {
  height: 5rem;
  display: grid;
  grid-template-columns: 58% 1fr;
  align-items: center;
  font-size: 2rem;
  color: #3f5d45;
  border: 1px solid #eaf0ed;
}

.item-name {
  height: 100%;
  border-right: 1px solid #eaf0ed;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-price {
  font-weight: bold;
}

.card-button {
  width: 100%;
  height: 5.5rem;
  background: #eaf0ed;
  color: #3f5d45;
  font-size: 2.4rem;
  font-weight: bold;
}
</style>
