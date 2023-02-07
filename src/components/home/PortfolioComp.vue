<template>
  <div class="wrapper-portfolio">
    <div class="title-wrap">
      <h2 style="color: #052e40">Our Best Portfolio</h2>
      <div class="circle-title-portfolio"></div>
      <p style="color: #052e40">They trust us in actualizing their ideas</p>
    </div>

    <div class="wrapper-carousel">
      <!-- Set up your HTML -->
      <flickity class="flickity" ref="flickity" :options="flickityOptions">
        <div class="carousel-cell">
          <img src="@/assets/images/portofolio/port-1.png" alt="" />
        </div>
        <div class="carousel-cell">
          <img src="@/assets/images/portofolio/port-2.png" alt="" />
        </div>
        <div class="carousel-cell">
          <img src="@/assets/images/portofolio/port-3.png" alt="" />
        </div>
        <div class="carousel-cell">
          <img src="@/assets/images/portofolio/port-4.png" alt="" />
        </div>
        <div class="carousel-cell">
          <img src="@/assets/images/portofolio/port-5.png" alt="" />
        </div>
        <div class="carousel-cell">
          <img src="@/assets/images/portofolio/port-1.png" alt="" />
        </div>
        <div class="carousel-cell">
          <img src="@/assets/images/portofolio/port-2.png" alt="" />
        </div>
        <div class="carousel-cell">
          <img src="@/assets/images/portofolio/port-3.png" alt="" />
        </div>
      </flickity>
    </div>
  </div>
</template>

<script>
import Flickity from "vue-flickity";

export default {
  components: {
    Flickity,
  },
  data() {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: true,
        wrapAround: false,
        freeScroll: true,
        contain: true,
        groupCells: true,
        // autoPlay: true,
        // any options from Flickity can be used
      },
    };
  },
  name: "PortfolioComp",
  props: {
    msg: String,
  },
};
</script>

<style>
.wrapper-portfolio {
  background: #fff;
  padding: 140px 0px;
}
.carousel-cell {
  margin-right: 10px;
  background: transparent;
  border-radius: 5px;
}
.carousel-cell img {
  width: 210px;
  margin: 0 40px;
}
.flickity-viewport {
  margin: 120px 0px 135px 0px !important;
  height: 205px !important;
}
.flickity-page-dots {
  bottom: -160px !important;
}
.flickity-page-dots .dot {
  width: 15px !important;
  height: 15px !important;
  border-radius: 20px !important;
}
.flickity-page-dots .dot.is-selected {
  opacity: 1;
  width: 35px !important;
  background: #ffa800 !important;
}
@media (max-width: 1600px) {
  .title-wrap .circle-title-portfolio {
    left: 38.5%;
  }
}
@media (max-width: 1440px) {
  .title-wrap .circle-title-portfolio {
    left: 37.9%;
  }
  .wrapper-portfolio {
    height: auto !important;
  }
  .flickity-page-dots {
    bottom: -160px !important;
  }
  .carousel-cell img {
    margin: 0 40px;
  }
}
@media (max-width: 1370px) {
  .title-wrap .circle-title-portfolio {
    left: 37.1%;
  }
  .carousel-cell img {
    margin: 0 40px !important;
  }
}
@media (max-width: 1285px) {
  .title-wrap .circle-title-portfolio {
    left: 36.2%;
  }
  .carousel-cell img {
    margin: 0 35px;
  }
}
@media (max-width: 1200px) {
  .wrapper-portfolio {
    padding: 100px 0px 120px 0px;
  }
  .title-wrap .circle-title-portfolio {
    left: 35.2%;
  }
  .carousel-cell img {
    margin: 0 25px !important;
  }
}
@media (max-width: 1024px) {
  .title-wrap .circle-title-portfolio {
    left: 34.2%;
  }
  .wrapper-portfolio {
    padding: 90px 0px 120px 0px;
  }
  .carousel-cell img {
    margin: 0 10px;
  }
}
@media (max-width: 992px) {
  .wrapper-portfolio {
    overflow: hidden;
  }
  .title-wrap .circle-title-portfolio {
    left: 32.5%;
  }
  .carousel-cell img {
    width: 180px;
    margin: 0 20px;
  }
}
@media (max-width: 820px) {
  .title-wrap .circle-title-portfolio {
    left: 30.5%;
  }
}
@media (max-width: 768px) {
  .title-wrap .circle-title-portfolio {
    left: 28.7%;
  }
}
@media (max-width: 600px) {
  .title-wrap .circle-title-portfolio {
    left: 20%;
  }
}
@media (max-width: 500px) {
  .title-wrap .circle-title-portfolio {
    left: 11.5%;
  }
}
@media (max-width: 395px) {
  .title-wrap .circle-title-portfolio {
    left: 8.5%;
  }
}
@media (max-width: 380px) {
  .title-wrap .circle-title-portfolio {
    left: 6.5%;
  }
}
@media (max-width: 365px) {
  .title-wrap .circle-title-portfolio {
    left: 5.5%;
  }
}
@media (max-width: 285px) {
  .title-wrap .circle-title-portfolio {
    left: 4% !important;
    top: 6%;
    width: 40px;
    height: 40px;
  }
  .flickity-viewport {
    margin: 50px 0px 50px 0px !important;
    height: 205px !important;
  }
  .flickity-page-dots {
    bottom: -50px !important;
  }
}
</style>
