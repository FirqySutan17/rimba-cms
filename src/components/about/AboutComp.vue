<template>
  <div class="wrapper-about">
    <div class="container">
      <div class="head-box">
        <img src="@/assets/images/cloud-1.png" alt="" class="cloud-1" />
        <img src="@/assets/images/cloud-2.png" alt="" class="cloud-2" />
        <img src="@/assets/images/cloud-3.png" alt="" class="cloud-3" />
        <img src="@/assets/images/pattern-1.png" alt="" class="pattern-1" />
        <img src="@/assets/images/pattern-2.png" alt="" class="pattern-2" />

        <div class="text-box">
          <h2>About Us</h2>
          <p>Know more about RIMBA</p>
        </div>
      </div>
      <div class="body-box">
        <div class="box">
          <img src="@/assets/images/about-img.png" alt="" />
        </div>
        <div class="box">
          <h2>Grow up with <strong>Rimba House</strong></h2>
          <p>
            PT. Rimba Ananta Vikasa Indonesia is a company that focuses on
            technology, especially software, networking, and hardware to help
            each system to be integrated into one another that supports
            everything. With this, we hope that it can be a solution for all
            existing companies, and are happy to be able to help all existing
            activities become more effective, efficient and systemized.
          </p>
          <br />
          <p>
            The origin of the word "RIMBA" also means forest. The company was
            founded covering diverse natural resources. In the work environment,
            the office is like a forest that has its own ecosystem, starting
            from trees, rivers, rocks. and others that complement each other.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutComp",
  props: {
    msg: String,
  },
};
</script>

<style>
.wrapper-about {
  position: relative;
  background: #fff;
  padding: 140px 0px 0px 0px;
  margin: 0 auto;
}
.head-box {
  margin: auto;
  height: 300px;
  background: radial-gradient(
    53.73% 69.69% at 50% 50%,
    #1b3d39 0%,
    #163331 49.3%,
    #0e2324 100%
  );
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.head-box img.cloud-1 {
  position: absolute;
  top: 30px;
  left: 30px;
}
.head-box img.cloud-2 {
  position: absolute;
  top: 60px;
  right: 50px;
}
.head-box img.cloud-3 {
  position: absolute;
  bottom: 30px;
  right: 70px;
}
.head-box img.pattern-1 {
  position: absolute;
  bottom: 20px;
  left: 15px;
}
.head-box img.pattern-2 {
  position: absolute;
  top: 20px;
  left: 25%;
}
.head-box .text-box h2 {
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 140%;
  color: #fff;
}
.head-box .text-box p {
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.005em;
  color: #ffffff;
}

.body-box {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 90px;
  padding: 70px 20px;
}
.body-box .box {
  grid-column: span 3;
}
.body-box .box:nth-child(2) {
  margin: auto;
}
.body-box .box img {
  width: 100%;
}
.body-box .box h2 {
  font-weight: 400;
  font-size: 26px;
  line-height: 155%;
  color: #292929;
  text-align: left;
  margin-bottom: 30px;
}
.body-box .box p {
  font-weight: 300;
  font-size: 16px;
  line-height: 162%;
  text-align: justify;
  letter-spacing: 0.03em;
  color: #6f6f6f;
  padding-right: 150px;
}
@media (max-width: 1440px) {
  .body-box .box p {
    padding-right: 70px;
  }
}
@media (max-width: 1280px) {
  .body-box .box p {
    padding-right: 30px;
  }
}
@media (max-width: 600px) {
  .wrapper-about {
    padding: 100px 0px 70px 0px;
  }
  .body-box .box:nth-child(2) {
    padding: 0px 20px;
  }
}
</style>
