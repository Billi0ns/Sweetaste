<template>
  <div class="home-sections">
    <section>
      <div class="container">
        <div class="section-text-sm">
          <img src="../assets/section-text-sm-1.svg" alt="" />
        </div>
        <div class="section-text-lg-1">
          <img src="../assets/section-text-lg-1.svg" alt="" />
        </div>

        <div class="section-img section-img-1">
          <img src="../assets/section-img-1.jpg" alt="" />
        </div>
        <div class="section-paragraph section-paragraph-1">
          青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
          <br />
          <br />
          是非成敗轉頭空，青山依舊在，幾度夕陽紅。白髮漁樵江渚上，古今多少事，都付笑談中。
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="section-text-sm">
          <img src="../assets/section-text-sm-2.svg" alt="" />
        </div>
        <div class="section-text-lg-2">
          <img src="../assets/section-text-lg-2.svg" alt="" />
        </div>

        <div class="section-img section-img-2">
          <img src="../assets/section-img-2.jpg" alt="" />
        </div>
        <div class="section-paragraph section-paragraph-2">
          青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
          <br />
          <br />
          是非成敗轉頭空，青山依舊在，幾度夕陽紅。白髮漁樵江渚上，古今多少事，都付笑談中。
        </div>
      </div>
    </section>

    <div class="section-text-3">
      <div class="section-text-sm">
        <img src="../assets/section-text-sm-3.svg" alt="" />
      </div>
      <div class="section-text-lg-3">
        <img src="../assets/section-text-lg-3.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.section-text-sm {
  margin: 3rem 0;
}

.section-text-sm img {
  width: 100%;
  max-width: 20rem;
  margin: 0 auto;
}

.section-text-lg-1,
.section-text-lg-2,
.section-text-lg-3 {
  display: none;
}

.section-img img {
  width: 100%;
  height: 25rem;
  object-fit: cover;
  vertical-align: text-bottom;
}

.section-paragraph {
  background: #eaf0ed;
  color: #8da291;
  padding: 3rem;
  font-size: 1.6rem;
  text-align: left;
}

@media screen and (min-width: 900px) {
  .home-sections {
    padding-top: 5rem;
  }

  section {
    background: #eaf0ed;
    margin-bottom: 8rem;
  }

  .container {
    position: relative;
    max-width: 100rem;
    margin: 0 auto;
  }

  .section-text-sm {
    display: none;
  }

  .section-text-lg-1,
  .section-text-lg-2 {
    display: block;
    width: 9rem;
    height: 30rem;
    position: absolute;
    z-index: 2;
  }

  .section-text-lg-1 {
    top: -2rem;
    right: 4rem;
  }

  .section-text-lg-2 {
    top: -2rem;
    right: 55rem;
  }

  .section-text-3 {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    padding-bottom: 5rem;
  }

  .section-text-lg-3 {
    display: block;
    width: 9rem;
    height: 32rem;
  }

  .section-img img {
    width: 46rem;
    height: 46rem;
    position: absolute;
  }

  .section-img-1 img {
    top: -2rem;
    left: 0;
  }
  .section-img-2 img {
    top: -2rem;
    right: 0;
  }

  .section-paragraph-1,
  .section-paragraph-2 {
    writing-mode: vertical-rl;
    width: 100%;
    height: 42rem;
    padding-top: 7rem;
    padding-bottom: 7rem;
  }

  .section-paragraph-1 {
    padding-right: 20rem;
  }

  .section-paragraph-2 {
    padding-right: 70rem;
  }
}
</style>
