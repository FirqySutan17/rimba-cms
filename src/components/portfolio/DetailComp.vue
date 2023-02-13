<template>
  <div class="wrapper-details" v-if="portfolio != null">
    <div class="head-porto">
      <div class="container">
        <div class="head-inside">
          <div class="boxie">
            <img
              :src="media + portfolio.logo"
              :alt="portfolio.alt_text_logo"
              class="porto-client"
            />
          </div>
          <div class="boxie">
            <img
              :src="media + portfolio.image_cover"
              :alt="portfolio.alt_text_cover"
              class="porto-cover"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="body-porto">
        <div class="boxie">
          <h3>Description</h3>
          <div class="porto-desc" v-html="portfolio.description"></div>
        </div>
        <div class="boxie">
          <h3 style="text-align: center">Project Information</h3>
          <div class="project-box">
            <div class="spec-pro">
              <div class="label-name">Name</div>
              <div class="label-ket">: &nbsp;{{ portfolio.name }}</div>
            </div>
            <div class="spec-pro">
              <div class="label-name">Company</div>
              <div class="label-ket">: &nbsp;{{ portfolio.company }}</div>
            </div>
            <div class="spec-pro">
              <div class="label-name">Category</div>
              <div class="label-ket">: &nbsp;{{ portfolio.product_type }}</div>
            </div>
            <div class="spec-pro">
              <div class="label-name">Type</div>
              <div class="label-ket">: &nbsp;{{ portfolio.type.name }}</div>
            </div>
            <div class="spec-pro">
              <div class="label-name">Tech Stack</div>
              <div class="label-ket">
                &nbsp;
                <img
                  v-for="skill in portfolio.skills"
                  :src="media + skill.image"
                  alt=""
                />
              </div>
            </div>
          </div>
          <a href="{{ portfolio.link }}" class="btn-visit">Visit</a>
        </div>
        <div class="boxie">
          <h3>Highlights</h3>
          <div class="img-gall">
            <div
              v-for="(src, index) in imgs"
              :key="index"
              class="img-item"
              @click="() => showImg(index)"
            >
              <img :src="src" />
            </div>

            <vue-easy-lightbox
              :visible="visible"
              :imgs="imgs"
              :index="index"
              @hide="handleHide"
            ></vue-easy-lightbox>
            <!-- <div class="img-item">
              <img src="@/assets/images/portofolio/hl-1.png" alt="" />
            </div> -->
            <!-- <div class="img-item">
              <img src="@/assets/images/portofolio/hl-2.png" alt="" />
            </div>
            <div class="img-item">
              <img src="@/assets/images/portofolio/hl-3.png" alt="" />
            </div>
            <div class="img-item">
              <img src="@/assets/images/portofolio/hl-4.png" alt="" />
            </div>
            <div class="img-item">
              <img src="@/assets/images/portofolio/hl-5.png" alt="" />
            </div>
            <div class="img-item">
              <img src="@/assets/images/portofolio/hl-6.png" alt="" />
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getContent } from "@/api/rimba";
import VueEasyLightbox from "vue-easy-lightbox";

export default {
  components: {
    VueEasyLightbox,
  },
  data: function () {
    return {
      imgs: "", // Img Url , string or Array of string
      visible: false,
      index: 0, // default: 0
      imgs: [],
      portfolio: null,
      media: process.env.VUE_APP_MEDIA_URL,
    };
  },
  methods: {
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
    async refreshPortfolioDetail() {
      const getResponse = await getContent("portfolio?id=" + this.id);
      if (getResponse.status == 200) {
        this.portfolio = getResponse.data.data;
        this.portfolio.images.map((image) => {
          this.imgs.push(this.media + image.image);
        });
      } else {
        console.log(getResponse);
      }
    },
  },
  created() {
    this.refreshPortfolioDetail();
  },
  name: "DetailComp",
  props: {
    msg: String,
    id: String,
  },
};
</script>

<style>
.wrapper-details {
  background: #fff;
  padding: 140px 0px 0px 0px;
}
.head-porto {
  background: #ecffcf;
}
.head-inside {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  column-gap: 20px;
  padding: 50px 0px;
}
.head-inside .boxie {
  grid-column: span 3;
}
.head-inside .boxie:nth-child(1) {
  margin: auto;
}
.head-inside .boxie img {
  margin: auto;
  width: 100%;
}
.body-porto {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 70px 0px 0px 0px;
  column-gap: 20px;
  width: 100%;
}
.body-porto .boxie {
  grid-column: span 3;
  margin-bottom: 70px;
}
.body-porto .boxie h3 {
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 20px;
  color: #626262;
  text-align: left;
}
.body-porto .boxie .porto-desc {
  font-weight: 400;
  font-size: 16px;
  text-align: justify;

  /* P4/Neutral400 */

  color: #8e8e8e;
}
.body-porto .boxie:nth-child(3) {
  grid-column: span 6;
}
.project-box {
  padding: 20px 20px;
  background: #fbfbfb;
  border: 1px solid #eeeeee;
  border-radius: 8px;
  width: 60%;
  margin: auto;
  text-align: left;
  margin-bottom: 30px;
}

.project-box .spec-pro {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  column-gap: 20px;
  padding: 10px 0px;
}

.project-box .spec-pro div.label-name {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  grid-column: span 2;
  color: #8e8e8e;
}
.project-box .spec-pro div.label-ket {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #8e8e8e;
  grid-column: span 4;
  vertical-align: top;
}
.project-box .spec-pro div.label-ket img {
  margin-right: 15px;
  width: auto;
}
.btn-visit {
  background: #21918a;
  border: 1px solid #21918a;
  border-radius: 8px;
  font-weight: 400;
  font-size: 16px;
  padding: 10px 210px;
  text-align: center;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.5s ease;
}
.btn-visit:hover {
  background: transparent;
  color: #21918a;
  transition: all 0.5s ease;
}
.img-gall {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  column-gap: 20px;
}
.img-gall .img-item {
  grid-column: span 2;
  width: 100%;
}
.img-gall .img-item img {
  width: 100%;
  object-fit: cover;
}
@media (max-width: 1600px) {
  .btn-visit {
    padding: 10px 195px;
  }
}
@media (max-width: 1440px) {
  .project-box {
    width: 65%;
  }
}
@media (max-width: 1280px) {
  .head-inside {
    padding: 50px 20px;
  }
  .body-porto {
    padding: 70px 20px 0px 20px;
  }
  .project-box {
    width: 70%;
  }
}
@media (max-width: 1200px) {
  .project-box {
    width: 75%;
  }
}
@media (max-width: 992px) {
  .head-inside .boxie img {
    margin-bottom: 40px;
  }
  .project-box {
    width: 48%;
  }
  .img-gall .img-item {
    grid-column: span 3;
    width: 100%;
  }
}
@media (max-width: 820px) {
  .project-box {
    width: 54%;
  }
}
@media (max-width: 600px) {
  .project-box {
    width: 85%;
  }
}
@media (max-width: 500px) {
  .project-box {
    width: 100%;
  }
  .btn-visit {
    padding: 10px 100px;
  }
  .wrapper-details {
    padding: 100px 0px 0px 0px;
  }
  .img-gall .img-item {
    grid-column: span 6;
  }
  .head-inside {
    padding: 50px 10px;
  }
  .body-porto {
    padding: 70px 10px 0px 10px;
  }
}
@media (max-width: 300px) {
  .project-box .spec-pro div.label-name {
    grid-column: span 7;
    font-weight: 600;
  }
  .project-box .spec-pro div.label-ket {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #8e8e8e;
    grid-column: span 7;
    /* vertical-align: top; */
    margin-top: 5px;
  }
}
</style>
