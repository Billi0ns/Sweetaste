<template>
  <div class="container">
    <div class="img-container">
      <img class="cover-photo" src="../assets/cover-photo.jpg" alt="" />
    </div>
    <div class="links">
      <div class="link link1">本日精選</div>
      <div class="link link2">人氣推薦</div>
      <div class="link link3">新品上市</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
img-container {
  height: 28rem;
}

img {
  max-width: 100%;
  height: auto;
}

.cover-photo {
  vertical-align: text-bottom;
  width: 100%;
  max-width: 100rem;
  max-height: 50rem;
  object-fit: cover;
}

.links {
  width: 100%;
  max-width: 75.5rem;
  height: 18rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
}

.link {
  writing-mode: vertical-lr;
  letter-spacing: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 33%;
  height: 100%;
  position: relative;
  overflow: hidden;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: $green;
  }
}

.link::before {
  content: '';
  position: absolute;
  margin: -1rem;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  filter: blur(5px);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.link::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0.9;
}

.link:hover::after {
  background: $yellow;
  opacity: 0.7;
}

.link1::before {
  background-image: url('../assets/cover-sm-1.jpg');
}
.link2::before {
  background-image: url('../assets/cover-sm-2.jpg');
}
.link3::before {
  background-image: url('../assets/cover-sm-3.jpg');
}

@media screen and (min-width: 620px) {
  .links {
    margin-top: -10rem;
    margin-bottom: 5rem;
    height: 25rem;
    gap: 0.1rem;
  }

  .link {
    z-index: 1;
    width: 33.3%;
    font-size: 2.4rem;
  }
}
</style>
