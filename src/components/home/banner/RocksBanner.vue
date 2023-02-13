<template>
  <section class="banner-rocks">
    <div class="desktop">
      <div class="container">
        <div class="wrapper-boxie">
          <div class="box-rocks">
            <div class="boxie">
              <div class="content-rocks">
                <div class="rocks-desc main-text">
                  <h2>Rocks</h2>
                  <p>
                    RIMBA provides rocks which are high-quality hardwares that
                    can help your business convenient!
                  </p>
                </div>
                <div class="rocks-desc laptop-rock">
                  <img
                    src="@/assets/images/trees/circle-back.png"
                    alt=""
                    class="circle-back"
                  />
                  <img src="@/assets/images/rocks/laptop.png" alt="" />
                  <h2>Laptops</h2>
                  <p>
                    We supplies several sorts of laptops based on your company's
                    requirements.
                  </p>
                </div>

                <div class="rocks-desc computer-rock">
                  <img
                    src="@/assets/images/trees/circle-back.png"
                    alt=""
                    class="circle-back"
                  />
                  <img src="@/assets/images/rocks/computer.png" alt="" />
                  <h2>Personal Computers</h2>
                  <p>
                    We provide a variety of personal computers based on your
                    company's needs.
                  </p>
                </div>

                <div class="rocks-desc cctv-rock">
                  <img
                    src="@/assets/images/trees/circle-back.png"
                    alt=""
                    class="circle-back"
                  />
                  <img src="@/assets/images/rocks/cctv.png" alt="" />
                  <h2>CCTVs</h2>
                  <p>
                    Keep an eye on the surroundings to stay safe and under
                    control
                  </p>
                </div>

                <div class="rocks-desc server-rock">
                  <img
                    src="@/assets/images/trees/circle-back.png"
                    alt=""
                    class="circle-back"
                  />
                  <img src="@/assets/images/rocks/server.png" alt="" />
                  <h2>Servers</h2>
                  <p>
                    Only for you, RIMBA offers several types of economical
                    servers with high performance quality
                  </p>
                </div>
              </div>
            </div>
            <div class="boxie">
              <div class="rocks-img">
                <img
                  src="@/assets/images/img-stone.png"
                  alt=""
                  class="main-rocks"
                />

                <div class="circle-rocks rocks-3">
                  <img src="@/assets/images/rocks/rock-3.png" alt="" />
                  <span class="number-3">3</span>
                </div>
                <div class="circle-rocks rocks-1">
                  <img src="@/assets/images/rocks/rock-1.png" alt="" />
                  <span class="number-1">1</span>
                </div>

                <div class="circle-rocks rocks-2">
                  <img src="@/assets/images/rocks/rock-2.png" alt="" />
                  <span class="number-2">2</span>
                </div>

                <div class="circle-rocks rocks-4">
                  <img src="@/assets/images/rocks/rock-4.png" alt="" />
                  <span class="number-4">4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile">
      <div class="card-content">
        <div class="card-box-2">
          <img src="@/assets/images/rocks/laptop.png" alt="" />
          <div class="box-2">
            <div class="boxie-2">
              <h3>Laptops</h3>
              <p>
                Rimba provides various types of laptops that we provide to
                support your work to stay productive. Checkout now!
              </p>
              <div class="link-visit">
                <a href="#" style="background: #d2ceca; color: #000"
                  >See catalogues</a
                >
                <div class="best-product"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="card-box-2">
          <img src="@/assets/images/rocks/cctv.png" alt="" />
          <div class="box-2">
            <div class="boxie-2">
              <h3>CCTVs</h3>
              <p>
                Keep an eye on the surroundings to stay safe and under control
              </p>
              <div class="link-visit">
                <a href="#" style="background: #d2ceca; color: #000"
                  >See catalogues</a
                >
                <div class="best-product"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="card-box-2">
          <img src="@/assets/images/rocks/computer.png" alt="" />
          <div class="box-2">
            <div class="boxie-2">
              <h3>Personal Computers</h3>
              <p>A customized software service based on your needs.</p>
              <div class="link-visit">
                <a href="#" style="background: #d2ceca; color: #000"
                  >See catalogues</a
                >
                <div class="best-product"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="card-box-2">
          <img src="@/assets/images/rocks/server.png" alt="" />
          <div class="box-2">
            <div class="boxie-2">
              <h3>Servers</h3>
              <p>
                Only for you, RIMBA offers several types of economical servers
                with high security quality
              </p>
              <div class="link-visit">
                <a href="#" style="background: #d2ceca; color: #000"
                  >See catalogues</a
                >
                <div class="best-product"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from "jquery";

export default {
  name: "RocksBanner",
  props: {
    msg: String,
  },
  mounted: function () {
    $(".circle-rocks").click(function () {
      $(".circle-rocks").not(this).removeClass("expanded");

      $(this).toggleClass("expanded");
      $(".circle-back").click(function () {
        $(".circle-rocks").removeClass("expanded");
        $(".laptop-rock").removeClass("show-item");
        $(".computer-rock").removeClass("show-item");
        $(".server-rock").removeClass("show-item");
        $(".cctv-rock").removeClass("show-item");
        $(".main-text").addClass("show-item");
      });
    });
    $(".rocks-1").click(function () {
      $(".laptop-rock").addClass("show-item");
      $(".server-rock").removeClass("show-item");
      $(".cctv-rock").removeClass("show-item");
      $(".computer-rock").removeClass("show-item");
      $(".main-text").removeClass("show-item");
      $(".main-text").addClass("hide-item");
    });
    $(".rocks-2").click(function () {
      $(".laptop-rock").removeClass("show-item");
      $(".server-rock").removeClass("show-item");
      $(".cctv-rock").removeClass("show-item");
      $(".computer-rock").addClass("show-item");
      $(".main-text").removeClass("show-item");
      $(".main-text").addClass("hide-item");
    });
    $(".rocks-3").click(function () {
      $(".laptop-rock").removeClass("show-item");
      $(".server-rock").removeClass("show-item");
      $(".cctv-rock").addClass("show-item");
      $(".computer-rock").removeClass("show-item");
      $(".main-text").removeClass("show-item");
      $(".main-text").addClass("hide-item");
    });
    $(".rocks-4").click(function () {
      $(".laptop-rock").removeClass("show-item");
      $(".server-rock").addClass("show-item");
      $(".cctv-rock").removeClass("show-item");
      $(".computer-rock").removeClass("show-item");
      $(".main-text").removeClass("show-item");
      $(".main-text").addClass("hide-item");
    });
  },
};
</script>

<style>
.banner-rocks {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  background: url(@/assets/images/rocks/bg-rocks.png);
  background-size: cover;
  background-repeat: no-repeat;
}
.banner-rocks img.img-cover {
  position: absolute;
  bottom: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
}
.wrapper-boxie {
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  position: relative;
  height: 100vh;
}
.box-rocks {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  column-gap: 20px;
  margin: auto;
}

.box-rocks .boxie {
  grid-column: span 3;
  width: 100%;
  position: relative;
}
.box-rocks .boxie .rocks-img {
  margin: auto;
  width: 100%;
}
.box-rocks .boxie .rocks-img .main-rocks {
  width: 100%;
}

.circle-rocks {
  position: absolute;
  bottom: 40%;
  left: 37%;
  transform: translate(-50%, 0%);
  width: 120px;
  height: 120px;
  background: transparent;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 80px;
  transition: all 0.5s ease;
  cursor: pointer;
  opacity: 1;
}
.circle-rocks.rocks-1 {
  position: absolute;
  bottom: 10.4%;
  left: 28%;
  transform: translate(-50%, 0%);
  width: 140px;
  height: 140px;
  background: transparent;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 80px;
  transition: all 0.5s ease;
  cursor: pointer;
  opacity: 1;
}
.circle-rocks.rocks-1.expanded {
  opacity: 0;
}
span.number-1 {
  background: #dfae00;
  padding: 5px 12px;
  border-radius: 50px;
  color: #fff;
  top: -125px;
  position: relative;
  font-size: 12px;
}
span.number-2 {
  background: #dfae00;
  padding: 7px 12px;
  border-radius: 50px;
  color: #fff;
  top: -130px;
  position: relative;
  font-size: 12px;
}
span.number-3 {
  background: #dfae00;
  padding: 7px 12px;
  border-radius: 50px;
  color: #fff;
  top: -125px;
  left: 10px;
  position: relative;
  font-size: 12px;
}
span.number-4 {
  background: #dfae00;
  padding: 7px 12px;
  border-radius: 50px;
  color: #fff;
  top: -105px;
  position: relative;
  font-size: 12px;
}
.circle-rocks.rocks-2.expanded {
  opacity: 0;
}
.circle-rocks.rocks-3.expanded {
  opacity: 0;
}
.circle-rocks.rocks-4.expanded {
  opacity: 0;
}
.circle-rocks.rocks-2 {
  position: absolute;
  bottom: 5%;
  left: 48%;
  transform: translate(-50%, 0%);
  width: 185px;
  height: 185px;
  background: transparent;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 80px;
  transition: all 0.5s ease;
  cursor: pointer;
  opacity: 1;
}

.circle-rocks.rocks-3 {
  position: absolute;
  bottom: 22%;
  left: 34%;
  transform: translate(-50%, 0%);
  width: 145px;
  height: 145px;
  background: transparent;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 80px;
  transition: all 0.5s ease;
  cursor: pointer;
  opacity: 1;
}
.circle-rocks.rocks-4 {
  position: absolute;
  bottom: 47%;
  left: 46%;
  transform: translate(-50%, 0%);
  width: 100px;
  height: 100px;
  background: transparent;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 80px;
  transition: all 0.5s ease;
  cursor: pointer;
  opacity: 1;
}

.circle-rocks img {
  width: 100%;
  margin-top: 20px;
  z-index: 10;
}
.circle-rocks:before,
.circle-rocks:after {
  content: "";
  display: none;
  position: absolute;
  border: 50%;
  border: 2px solid #000;
  left: -20px;
  right: -20px;
  top: -20px;
  bottom: -20px;
  border-radius: 50%;
  animation: animate 1.5s linear infinite;
  opacity: 0;
  backface-visibility: hidden;
  z-index: 9;
}

.circle-rocks:after {
  animation-delay: 0.5s;
}

@keyframes animate {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}

.box-rocks .boxie .main-text {
  width: 60%;
  text-align: left;
  margin: auto;
  position: absolute;
  top: 40%;
  left: 25%;
}

.main-text h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #444444;
  margin-bottom: 10px;
}
.main-text p {
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: justify;

  /* P4/Neutral500 */

  color: #444444;
}
.content-rocks {
  width: 100%;
  height: 100%;
}

.content-rocks .rocks-desc {
  position: absolute;
  top: 12%;
  left: 25%;
  text-align: left;
  width: 74%;
}

.content-rocks .rocks-desc img {
  width: auto;
  margin-bottom: 20px;
}
.content-rocks .rocks-desc h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 22px;
  color: #000000;
  margin-bottom: 20px;
}

.content-rocks .rocks-desc p {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #444444;
  margin-bottom: 40px;
}

.content-rocks .rocks-desc a {
  background: #d2ceca;
  border: 1px solid #d2ceca;
  border-radius: 10px;
  padding: 10px 45px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #0b0b0b;
  text-decoration: none;
  transition: all 0.5s ease;
}
.btn-catalogues a:hover {
  background: transparent !important;
  color: #d2ceca;
  transition: all 0.5s ease;
}
.content-rocks .rocks-desc .circle-back {
  position: absolute;
  top: 0;
  right: 25%;
}

.laptop-rock,
.server-rock,
.computer-rock,
.cctv-rock {
  opacity: 0;
  transition: all 0.5s ease;
}

.show-item {
  opacity: 1 !important;
  transition: all 0.5s ease;
}
.hide-item {
  opacity: 0;
}
@media (max-width: 1440px) {
  .box-rocks .boxie .main-text {
    width: 62%;
    left: 20%;
    top: 35%;
  }
  .circle-rocks.rocks-1 {
    width: 120px;
    height: 120px;
    bottom: 11%;
  }
  .circle-rocks.rocks-2 {
    width: 165px;
    height: 165px;
  }
  .circle-rocks.rocks-3 {
    bottom: 19%;
    width: 125px;
    height: 125;
  }
  .circle-rocks.rocks-2 {
    width: 160px;
    height: 160px;
    bottom: 6%;
  }
  .circle-rocks.rocks-4 {
    bottom: 48.5%;
    left: 46.3%;
    width: 80px;
    height: 80px;
  }
  .content-rocks .rocks-desc {
    left: 25%;
  }
  .content-rocks .rocks-desc .circle-back {
    right: 18%;
  }
}
@media (max-width: 1370px) {
  .box-rocks .boxie .main-text {
    left: 28%;
  }
  .content-rocks .rocks-desc {
    top: 6%;
  }
}
@media (max-width: 1280px) {
  .content-rocks .rocks-desc {
    left: 30%;
  }
}
@media (max-width: 1100px) {
  .desktop {
    display: none !important;
  }
  .mobile {
    display: block !important;
  }
  .banner-rocks {
    height: auto;
    background: transparent;
  }
  .card-box-2 {
    display: block;
    position: relative;
    margin-bottom: 30px;
  }
  .card-box-2:nth-last-child(1) {
    margin-bottom: 0px;
  }
  .card-content {
    padding-top: 40px;
  }

  .card-box-2 img {
    width: 20%;
    position: relative;
    z-index: 6;
  }
  .card-box-2 .box-2 {
    background: #fff;
    border-radius: 20px;
    padding: 40px 20px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    width: 65%;
    column-gap: 20px;
    margin: auto;
    margin-top: -20px;
    position: relative;
    z-index: 2;
  }
  .card-box-2 .box-2 .boxie-2:nth-child(1) {
    grid-column: span 6;
    text-align: left;
  }

  .card-box .box .boxie:nth-child(2) img {
    width: 100%;
  }
  .card-box-2 .box-2 .boxie-2 h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 15px;
    color: #000000;
    margin-bottom: 10px;
  }
  .card-box-2 .box-2 .boxie-2 p {
    font-weight: 300;
    font-size: 14px;
    margin-bottom: 20px;
    color: #787878;
  }
  .card-box-2 .box-2 .boxie-2 a {
    background: #146188;
    box-shadow: 10px 10px 40px rgba(20, 97, 136, 0.2);
    border-radius: 100px;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    color: #ffffff;
    text-decoration: none;
    padding: 10px 20px;
  }
}

@media (max-width: 600px) {
  .card-box-2 .box-2 {
    width: 100%;
  }
  .card-box-2 img {
    width: 40%;
    position: relative;
    z-index: 6;
  }
}
</style>
