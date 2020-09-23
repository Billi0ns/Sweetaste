<template>
  <div class="products-cover">
    <img class="cover-photo" src="../assets/productPage-cover.jpg" alt="" />
    <img class="cover-text" src="../assets/productPage-text.svg" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.products-cover {
  position: relative;
  margin: 0 auto;
}

.cover-photo {
  width: 100%;
  height: 27rem;
  object-fit: cover;
  position: relative;
  vertical-align: text-bottom;
}

.cover-text {
  display: none;
  width: 6rem;
  height: 22rem;
}

@media screen and(min-width:600px) {
  .cover-photo {
    height: 40rem;
  }
}

@media screen and(min-width:800px) {
  .products-cover {
    max-width: 100rem;
  }

  .cover-photo {
    height: 49rem;
  }

  .cover-text {
    display: block;
    position: absolute;
    top: 3rem;
    right: 3rem;
    width: 9rem;
    height: 32rem;
  }
}
</style>
