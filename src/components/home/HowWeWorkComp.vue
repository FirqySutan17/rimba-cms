<template>
  <div class="wrapper-howwework">
    <div class="container">
      <div class="title-wrap">
        <h2>How We Work</h2>
        <div class="circle-title"></div>
        <p>They find us</p>
      </div>

      <div class="blog-slider">
        <div class="blog-slider__wrp swiper-wrapper" ref="slider">
          <div
            v-for="item in response"
            :key="item.id"
            class="blog-slider__item swiper-slide"
          >
            <div class="blog-slider__img">
              <img :src="media + item.image" :alt="item.alt_text" />
            </div>
            <div class="blog-slider__content">
              <div class="blog-slider__title">{{ item.name }}</div>
              <div class="blog-slider__text">
                <pre>
                    {{ item.description }}
                  </pre
                >
              </div>
            </div>
          </div>

          <!-- <div class="blog-slider__item swiper-slide">
            <div class="blog-slider__img">
              <img src="@/assets/images/hww-reliable.png" alt="" />
            </div>
            <div class="blog-slider__content">
              <div class="blog-slider__title">Reliable</div>
              <div class="blog-slider__text">
                You can make your crazy ideas a reality and rely on us to effectively address any business challenges
              </div>
            </div>
          </div>

          <div class="blog-slider__item swiper-slide">
            <div class="blog-slider__img">
              <img src="@/assets/images/hww-creative-innovative.png" alt="" />
            </div>
            <div class="blog-slider__content">
              <div class="blog-slider__title">Creative & Innovative</div>
              <div class="blog-slider__text">
                We offer the finest ideas to solve your business’ problems
              </div>
            </div>
          </div>

          <div class="blog-slider__item swiper-slide">
            <div class="blog-slider__img">
              <img src="@/assets/images/hww-flexible.png" alt="" />
            </div>
            <div class="blog-slider__content">
              <div class="blog-slider__title">Flexible</div>
              <div class="blog-slider__text">
                We value our employees’ mental wellness by providing flexible working hours and also having fun while working!
              </div>
            </div>
          </div> -->
        </div>
        <div class="blog-slider__pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { getContent } from "@/api/rimba";

export default {
  name: "HowWeWorkComp",
  props: {
    msg: String,
  },
  data() {
    return {
      response: [],
      media: process.env.VUE_APP_MEDIA_URL,
    };
  },
  created() {
    this.refreshHowWeWork();
  },
  mounted: function () {
    var swiper = new Swiper(".blog-slider", {
      spaceBetween: 30,
      effect: "fade",
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: ".blog-slider__pagination",
        clickable: true,
      },
      on: {
        slideChange: function () {
          if (this.isEnd) {
            this.loopDestroy();
            this.loopCreate();
          }
          if (this.isBeginning) {
            this.loopDestroy();
            this.loopCreate();
          }
        },
      },
    });
  },
  methods: {
    async refreshHowWeWork() {
      const getResponse = await getContent("how-we-work");
      if (getResponse.status == 200) {
        this.response = getResponse.data.data;
      } else {
        console.log(getResponse);
      }
    },
  },
};
</script>

<style>
.wrapper-howwework {
  padding: 120px 0px;
  background: #002744;
  overflow-x: hidden;
}
@media (max-width: 1600px) {
  .title-wrap .circle-title {
    left: 40.1%;
  }
}
@media (max-width: 1440px) {
  .wrapper-howwework {
    padding: 120px 70px;
  }
  .title-wrap .circle-title {
    left: 39%;
  }
}
@media (max-width: 1370px) {
  .title-wrap .circle-title {
    left: 38.3%;
  }
}
@media (max-width: 1285px) {
  .title-wrap .circle-title {
    left: 38.5%;
  }
  .wrapper-howwework {
    padding: 120px 20px;
  }
}
@media (max-width: 1200px) {
  .title-wrap .circle-title {
    left: 37.3%;
  }
}
@media (max-width: 1024px) {
  .wrapper-howwework {
    padding: 70px 20px;
  }
  .blog-slider__img {
    width: 345px;
  }
  .blog-slider__title {
    font-size: 32px;
  }
  .blog-slider__text {
    font-size: 14px;
  }
  .blog-slider__text {
    margin-right: 70px;
  }
  .title-wrap .circle-title {
    left: 36.5%;
  }
}
@media (max-width: 992px) {
  .wrapper-howwework {
    padding: 70px 20px;
  }
  .blog-slider {
    max-width: 100%;
  }
  .title-wrap .circle-title {
    left: 34.6%;
  }
}
@media (max-width: 820px) {
  .title-wrap .circle-title {
    left: 32.7%;
  }
}
@media (max-width: 768px) {
  .blog-slider {
    position: relative;
    margin: 0px;
    margin-top: 200px;
    margin-bottom: 0px;
  }
  .blog-slider__content {
    margin-top: 0px;
    text-align: center;
    padding: 0px;
    margin-left: 0px;
  }
  .blog-slider__title {
    text-align: center;
  }
  .blog-slider__text {
    text-align: center;
    margin: 0px 50px;
    /* width: 50%; */
  }
  .title-wrap .circle-title {
    left: 31.5%;
  }
  .wrapper-howwework {
    padding: 70px 20px 0px 20px;
  }
}
@media (max-width: 600px) {
  .title-wrap .circle-title {
    left: 23.5%;
  }
}

@media (max-width: 500px) {
  .wrapper-howwework {
    padding: 70px 20px 60px 20px;
  }
  .title-wrap .circle-title {
    left: 14.5%;
  }
  .blog-slider__text {
    text-align: center;
    margin: 0px 0px;
    /* width: 50%; */
  }
}
@media (max-width: 395px) {
  .title-wrap .circle-title {
    left: 12.5%;
  }
}
@media (max-width: 380px) {
  .title-wrap .circle-title {
    left: 10.5% !important;
  }
}
@media (max-width: 365px) {
  .title-wrap .circle-title {
    left: 8.5% !important;
  }
}
@media (max-width: 285px) {
  .blog-slider__img {
    width: 100%;
  }
  .title-wrap .circle-title {
    left: 0% !important;
  }
  .blog-slider {
    margin-top: 150px;
  }
  .blog-slider__pagination {
    top: 140px;
  }
  .blog-slider__title {
    font-size: 26px;
  }
  .wrapper-howwework {
    padding: 70px 20px 0px 20px;
  }
  .title-wrap .circle-title {
    left: 5% !important;
    top: 6%;
    width: 40px;
    height: 40px;
  }
}
</style>
