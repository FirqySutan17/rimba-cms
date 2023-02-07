<template>
  <div class="wrapper-banner">
    <div class="sidebar-banner">
      <ul class="list-abso">
        <li data-rel="1" class="btn-home active">
          <div class="circle home-menu">
            <!-- <i class="bx bxs-pear"></i> -->
            <img src="@/assets/images/home.png" alt="" />
          </div>
          <span class="title-menu">Home</span>
        </li>
        <li data-rel="2" class="btn-trees">
          <div class="circle pohon-menu">
            <!-- <i class="bx bxs-pear"></i> -->
            <img src="@/assets/images/trees.png" alt="" />
          </div>
          <span class="title-menu">Trees</span>
        </li>
        <li data-rel="3" class="btn-rivers">
          <div class="circle rivers-menu">
            <!-- <i class="bx bxs-pear"></i> -->
            <img src="@/assets/images/river.png" alt="" />
          </div>
          <span class="title-menu">Rivers</span>
        </li>
        <li data-rel="4" class="btn-rocks">
          <div class="circle rocks-menu">
            <!-- <i class="bx bxs-pear"></i> -->
            <img src="@/assets/images/rock.png" alt="" />
          </div>
          <span class="title-menu">Rocks</span>
        </li>
      </ul>
    </div>

    <section class="banner-first">
      <div class="desktop">
        <img src="@/assets/images/layer-1.png" id="stars" alt="" />
        <img src="@/assets/images/layer-4.png" id="moon" alt="" />
        <img src="@/assets/images/layer-2.png" id="mountain_behind" alt="" />
        <img src="@/assets/images/layer-3.png" id="mountain_first" alt="" />
      </div>
      <div class="mobile"></div>
    </section>

    <TreesBanner />

    <RiversBanner />

    <RocksBanner />
  </div>
</template>

<script>
import TreesBanner from "@/components/home/banner/TreesBanner.vue";
import RiversBanner from "@/components/home/banner/RiversBanner.vue";
import RocksBanner from "@/components/home/banner/RocksBanner.vue";
import $ from "jquery";

export default {
  name: "BannerComp",
  props: {
    msg: String,
  },
  components: {
    TreesBanner,
    RiversBanner,
    RocksBanner,
  },
  mounted: function () {
    $(".home-menu").click(function () {
      $(".wrapper-banner").removeClass("pohon");
      $(".wrapper-banner").removeClass("rivers");
      $(".wrapper-banner").removeClass("rocks");
      $(".wrapper-banner").addClass("homes");
    });

    $(".rivers-menu").click(function () {
      $(".wrapper-banner").removeClass("homes");
      $(".wrapper-banner").removeClass("pohon");
      $(".wrapper-banner").removeClass("rocks");
      $(".wrapper-banner").addClass("rivers");
    });

    $(".rocks-menu").click(function () {
      $(".wrapper-banner").removeClass("homes");
      $(".wrapper-banner").removeClass("pohon");
      $(".wrapper-banner").removeClass("rivers");
      $(".wrapper-banner").addClass("rocks");
    });

    $(".pohon-menu").click(function () {
      $(".wrapper-banner").removeClass("homes");
      $(".wrapper-banner").removeClass("rocks");
      $(".wrapper-banner").removeClass("rivers");
      $(".wrapper-banner").addClass("pohon");
    });

    if ($(".btn-home").hasClass("active")) {
      $(".banner-first").css("display", "block");
      $(".banner-trees").css("display", "none");
      $(".banner-rivers").css("display", "none");
      $(".banner-rocks").css("display", "none");
    }

    if ($(".btn-trees").hasClass("active")) {
      $(".banner-first").css("display", "none");
      $(".banner-trees").css("display", "block");
      $(".banner-rivers").css("display", "none");
      $(".banner-rocks").css("display", "none");
    }

    if ($(".btn-rivers").hasClass("active")) {
      $(".banner-first").css("display", "none");
      $(".banner-trees").css("display", "none");
      $(".banner-rivers").css("display", "block");
      $(".banner-rocks").css("display", "none");
    }

    if ($(".btn-rocks").hasClass("active")) {
      $(".banner-first").css("display", "none");
      $(".banner-trees").css("display", "none");
      $(".banner-rivers").css("display", "none");
      $(".banner-rocks").css("display", "block");
    }

    $(".sidebar-banner li").click(function () {
      $(this).addClass("active").siblings("li").removeClass("active");
      $("section:nth-of-type(" + $(this).data("rel") + ")")
        .stop()
        .show()
        .siblings("section")
        .stop()
        .hide();
    });

    let stars = document.getElementById("stars");
    let moon = document.getElementById("moon");
    let mountain_behind = document.getElementById("mountain_behind");
    let mountain_first = document.getElementById("mountain_first");
    let header = document.querySelector("header");

    window.addEventListener("scroll", function () {
      let value = window.scrollY;
      stars.style.top = value * 0.5 + "px";
      moon.style.top = value * 1.05 + "px";
      mountain_behind.style.top = value * 0.5 + "px";
      mountain_first.style.top = value * 0 + "px";
      header.style.top = value * 0.5 + "px";
    });
  },
};
</script>

<style>
.mobile {
  display: none;
}
/* Sidebar Style */
.wrapper-banner {
  position: relative;
  background: #000;
  height: 100vh;
}
section {
  background: #000;
  display: none;
  color: #fff;
  position: absolute;
  margin: 0 auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
section:first-of-type {
  display: block;
}
.center-content {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
}
.sidebar-banner {
  position: absolute;
  z-index: 1000;
  background: transparent;
  height: 100%;
  width: 10%;
}
.list-abso {
  padding: 10px 20px 40px 20px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 50px;
  width: 55%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-20%, -50%);
}
ul.list-abso {
  list-style: none;
}
.list-abso li {
  width: 100%;
  text-align: center;
  color: #fff;
  cursor: pointer;
  position: relative;
  margin: 90px 0px;
}
.title-menu {
  color: #002744;
  position: relative;
  top: 45px;
  font-size: 12.5px;
  letter-spacing: 1px;
  font-weight: 500;
}
.active .title-menu {
  font-weight: 700;
}
.active .circle {
  background: #238e73;
  transition: all 0.5s ease;
}
.active .circle i {
  color: #fff;
  transition: all 0.5s ease;
}
.active .circle img {
  color: #fff;
  transition: all 0.5s ease;
}
.active .circle:before,
.active .circle:after {
  animation: none;
}
.active .circle:after {
  opacity: 1;
  transform: scale(0.7);
  border: 3px solid #238e73;
}
h4 {
  padding: 0;
  margin: 0;
}
.circle i {
  font-size: 25px;
  display: inline-block;
  vertical-align: middle;
  margin-top: -28px;
  color: #238e73;
  transition: all 0.5s ease;
}
.circle img {
  font-size: 25px;
  display: inline-block;
  vertical-align: middle;
  margin-top: -27px;
  color: #238e73;
  transition: all 0.5s ease;
}
.circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 55px;
  height: 55px;
  background: #fff;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 80px;
  transition: all 0.5s ease;
}
.circle:before,
.circle:after {
  content: "";
  display: block;
  position: absolute;
  border: 50%;
  border: 2px solid #fff;
  left: -20px;
  right: -20px;
  top: -20px;
  bottom: -20px;
  border-radius: 50%;
  animation: animate 1.5s linear infinite;
  opacity: 0;
  backface-visibility: hidden;
}

.circle:after {
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
/* End Sidebar Style */

/* Banner First */
.banner-first {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
}
/* .banner-first::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, #1c0522, transparent);
  z-index: 11;
} */
.banner-first img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.banner-first-mobile {
  display: none;
}
/* .banner-first img#moon {
  mix-blend-mode: screen;
} */
.banner-first img#mountain_first {
  z-index: 10;
}
/* End Banner First */
@media (max-width: 1600px) {
}
@media (max-width: 1440px) {
  .title-wrap .circle-title {
    left: 39%;
  }
  .list-abso {
    width: 65%;
  }
}
@media (max-width: 1370px) {
  .list-abso li {
    margin: 80px 0px;
  }
  .title-menu {
    margin-left: -2px;
  }
}
@media (max-width: 1285px) {
  .list-abso {
    width: 60%;
  }
  .list-abso li {
    margin: 70px 0px !important;
  }
  .title-menu {
    font-size: 10.5px;
  }
}
@media (max-width: 1200px) {
  .circle {
    width: 45px;
    height: 45px;
  }
  .list-abso li:nth-child(1) .circle img {
    margin-top: -40px;
  }
  .circle img {
    margin-top: -32px;
  }
}
@media (max-width: 1100px) {
  .wrapper-banner {
    height: 35vh;
  }
  .sidebar-banner {
    width: 100%;
    height: auto;
    bottom: 20px;
  }
  .list-abso {
    width: 80%;
    display: flex;
    padding: 15px 20px 35px 20px;
  }

  .list-abso li {
    margin: 0px 0px !important;
  }
  .circle {
    width: 35px;
    height: 35px;
  }

  .circle img {
    margin-top: -44px;
    width: 22px;
    object-fit: contain;
  }
  .list-abso li:nth-child(1) .circle img {
    margin-top: -48px;
  }
  .list-abso li {
    margin: 60px 0px !important;
  }
  .list-abso {
    width: 70%;
  }
  .title-menu {
    top: 35px;
  }
  .sidebar-banner {
    top: 10%;
    left: 0%;
    transform: translate(0%, 0%);
    position: relative;
  }
  .list-abso {
    position: relative;
    top: 0%;
    left: 0%;
    transform: translate(0%, 0%);
    margin: auto;
    width: 90%;
  }
  .list-abso li {
    margin: 5px 0px !important;
  }
  .list-abso li:nth-child(1) .circle img {
    margin-top: -48px;
    width: 17px;
  }

  .wrapper-banner {
    height: auto;
    min-height: 50vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(../../../public/images/layer-1.png);
    padding: 120px 10px 70px 10px;
  }
  .wrapper-banner.homes {
    height: auto;
    min-height: 50vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(../../../public/images/layer-1.png);
    padding: 120px 10px 70px 10px;
  }
  .wrapper-banner.pohon {
    height: auto;
    min-height: 50vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(../../../public/images/trees/trees-bg.png);
    padding: 120px 10px 70px 10px;
  }
  .wrapper-banner.rivers {
    height: auto;
    min-height: 50vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(../../../public/images/rivers/bg-rivers.png);
    padding: 120px 10px 70px 10px;
  }
  .wrapper-banner.rocks {
    height: auto;
    min-height: 50vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(../../../public/images/rocks/bg-rocks.png);
    padding: 120px 10px 70px 10px;
  }
}

@media (max-width: 992px) {
  .wrapper-banner {
    height: auto;
  }
  .sidebar-banner {
    width: 100%;
    height: auto;
    bottom: 20px;
  }
  .list-abso {
    width: 80%;
    display: flex;
    padding: 20px 20px 35px 20px;
  }

  .list-abso li {
    margin: 0px 0px !important;
  }
  section:first-of-type {
    display: none;
  }
}
@media (max-width: 600px) {
  .circle {
    width: 30px;
    height: 30px;
  }
  .circle img {
    margin-top: -50px;
    width: 20px;
  }
  .list-abso li:nth-child(1) .circle img {
    margin-top: -53px;
    width: 17px;
  }

  .wrapper-banner {
    height: auto;
    min-height: 50vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(../../../public/images/trees/trees-bg.png);
    padding: 120px 10px 70px 10px;
  }
  .banner-first {
    height: auto;
    background-color: transparent;
  }
  .banner-first img {
    display: none;
  }
  .banner-first .mobile {
    height: auto;
  }
  .sidebar-banner {
    top: 10%;
    left: 0%;
    transform: translate(0%, 0%);
    position: relative;
  }
  .list-abso {
    position: relative;
    top: 0%;
    left: 0%;
    transform: translate(0%, 0%);
    margin: auto;
    width: 99%;
  }
  .list-abso li {
    margin: 5px 0px !important;
  }
}
@media (max-width: 300px) {
  .list-abso {
    width: 99%;
  }
  .card-box .box .boxie p {
    font-size: 12px;
  }
  .card-box .box .boxie:nth-child(2) img {
    width: 80%;
  }
  .title-menu {
    margin-left: 3px;
  }
}
@media (max-width: 300px) {
  .card-box-2 img {
    width: 60%;
  }
  .card-box-2 .box-2 .boxie-2 p {
    font-size: 12px;
  }
}
</style>
