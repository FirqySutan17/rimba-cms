<template>
  <div class="wrapper-portfolio">
    <div class="container">
      <div class="head-box">
        <img src="@/assets/images/cloud-1.png" alt="" class="cloud-1" />
        <img src="@/assets/images/cloud-2.png" alt="" class="cloud-2" />
        <img src="@/assets/images/cloud-3.png" alt="" class="cloud-3" />
        <img src="@/assets/images/pattern-1.png" alt="" class="pattern-1" />
        <img src="@/assets/images/pattern-2.png" alt="" class="pattern-2" />

        <div class="text-box">
          <h2>Portfolio</h2>
          <p class="service-sub">
            Our clients trust us to collaborate with them on their initiatives.
          </p>
        </div>
      </div>

      <div class="box-porto">
        <div class="boxie">
          <div class="sidebar-porto">
            <ul class="list-porto">
              <li data-rel="1" class="active-porto">Trees</li>
              <li data-rel="2">Rivers</li>
              <li data-rel="3">Rocks</li>
            </ul>
            <img class="frame-img" src="@/assets/images/portofolio/frame-img.png" alt="">
          </div>
        </div>
        <div class="boxie">
          <TreesWin />

          <RiversWin />

          <RocksWin />

          <img class="grass" src="@/assets/images/grass.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import TreesWin from "@/components/portfolio/slide/TreesWin.vue";
import RiversWin from "@/components/portfolio/slide/RiversWin.vue";
import RocksWin from "@/components/portfolio/slide/RocksWin.vue";

export default {
  name: "PortfolioComp",
  props: {
    msg: String,
  },
  components: {
    TreesWin,
    RiversWin,
    RocksWin,
  },
  mounted: function () {
    $(".sidebar-porto li").click(function () {
      $(this)
        .addClass("active-porto")
        .siblings("li")
        .removeClass("active-porto");
      $(".porto-window:nth-of-type(" + $(this).data("rel") + ")")
        .stop()
        .show()
        .siblings(".porto-window")
        .stop()
        .hide();
    });
  },
};
</script>

<style>
.box-porto {
  position: relative;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 20px;
  margin-top: 70px;
}
.box-porto .boxie {
  grid-column: span 3;
  width: 100%;
  margin: auto;
}
section.porto-window {
  background: transparent;
  position: relative;
  display: none;
  width: 100%;
  height: 440px;
  color: #fff;
  overflow-y: auto;
}
section.porto-window::-webkit-scrollbar {
  display: none;
}
section.porto-window:first-of-type {
  display: block;
}
ul.list-porto {
  list-style: none;
  width: 67%;
  margin: auto;
}
ul.list-porto li {
  background: #d0c3a2;
  width: 100%;
  padding: 40px 15px;
  color: #444444;
  cursor: pointer;
  align-items: center;
  text-align: center;
  font-weight: 600;
  font-size: 30px;
}
ul.list-porto li:hover {
  background: #b39d92;
  color: #fff;
}
ul.list-porto li.active-porto {
  background: #b39d92;
  color: #fff;
}
ul.list-porto li:nth-child(1) {
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
}
ul.list-porto li:nth-child(3) {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 150px;
}
.grass {
  width: 100%;
  object-fit: contain;
}
.sidebar-porto {
  position: relative;
  margin-top: -30px;
}
.frame-img {
    width: 100%;
    position: absolute;
    top: -16%;
    left: 0%;
    pointer-events: none;
}
@media (max-width: 1600px) {
  ul.list-porto li {
    padding: 35px 15px;
 }
}
@media (max-width: 1440px) {
  .frame-img {
    width: 100%;
    position: absolute;
    top: -18%;
    left: 0%;
    pointer-events: none;
  }
  ul.list-porto li {
    padding: 35px 15px;
    font-size: 24px;
  }
  .sidebar-porto {
    position: relative;
    margin-top: -70px;
  }
}
@media (max-width: 1280px) {
  .frame-img {
    width: 100%;
    position: absolute;
    top: -15%;
    left: 0%;
    pointer-events: none;
  }
  .sidebar-porto {
    position: relative;
    margin-top: -50px;
  }
  ul.list-porto li {
    padding: 32px 15px;
    font-size: 24px;
  }
}
@media (max-width: 1200px) {
  section.porto-window {
    height: 372px;
  }
  ul.list-porto li {
      padding: 28px 15px;
      font-size: 24px;
  }
}
@media (max-width: 1025px) {
  section.porto-window {
    height: 365px;
  }
  ul.list-porto li {
    padding: 25px 15px;
    font-size: 17px;
  }
}

@media (max-width: 992px) {
  section.porto-window {
    height: 430px;
  }
  .box-porto .boxie:nth-child(1) {
    grid-column: span 3;
    margin-bottom: 50px;
  }
  .box-porto .title-content .boxie:nth-child(1) {
    grid-column: span 7 !important;
    margin: auto;
    margin-bottom: 20px !important;
    text-align: center;
  }
  .sidebar-porto {
    position: relative;
    margin-top: 0px;
  }
  ul.list-porto li {
    padding: 37px 15px;
    font-size: 25px;
  }
  .box-porto .boxie:nth-child(1) {
    margin-bottom: 140px;
  }
  .title-content .boxie:nth-child(2) {
      grid-column: span 7 !important;
  }
  .title-content .boxie h2 {
    text-align: center;
  }
  .title-content .boxie span {
    text-align: center;
    float: none;
  }
  .title-content .boxie a {
    float: none;
  }
  .porto-content p {
    margin-top: 10px;
  }
  section.porto-window {
    height: 450px;
  }
  .box-porto {
    padding: 0px 120px;
    margin-top: 140px;
  }
}
@media (max-width: 820px) {
  .box-porto {
    padding: 0px 80px;
  }
}
@media (max-width: 768px) {
  .box-porto {
    padding: 0px 56px;
}
}
@media (max-width: 600px) {
  .wrapper-portfolio {
    padding: 100px 0px 70px 0px;
  }
  ul.list-porto li {
    padding: 19px 15px;
    font-size: 22px;
  }
  section.porto-window {
      height: 415px;
  }
}
@media (max-width: 500px) {
  .box-porto {
    padding: 0px 10px;
  }
  ul.list-porto li {
    padding: 18px 15px;
    font-size: 20px;
  }
}
@media (max-width: 400px) {
  ul.list-porto li {
    padding: 16px 15px;
    font-size: 20px;
  }
}
@media (max-width: 380px) {
  ul.list-porto li {
    padding: 17px 15px;
    font-size: 16px;
  }
}

@media (max-width: 300px) {
  ul.list-porto li {
    padding: 9px 15px;
    font-size: 16px !important;
}
}
</style>
