<template>
  <div class="wrapper-details">
    <div class="head-porto">
      <div class="container">
        <div class="head-inside">
          <div class="boxie">
            <img
              src="@/assets/images/portofolio/depo-icon.png"
              alt=""
              class="porto-client"
            />
          </div>
          <div class="boxie">
            <img
              src="@/assets/images/portofolio/depo-cover.png"
              alt=""
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
          <div class="porto-desc">
            Depo Semut Paint Shop was established in 2018. Registered under the
            name of PT. Semesta Mauna Utama and being under the auspices of the
            Mauna Group is expected to further increase retail market
            penetration in Sulawesi, especially South Sulawesi.
            <br />
            <br />
            Depo Semut distinguishes itself from other traditional paint shops
            by proposing the concept of the first Mini Modern Outlet Paint Shop
            in Makassar at a key place on Jalan Veteran. Depo Semut is projected
            to be a professional option for builders and contractors, as well as
            the comfort of a shop equipped with a completely air-conditioned
            space.
          </div>
        </div>
        <div class="boxie">
          <h3 style="text-align: center">Project Information</h3>
          <div class="project-box">
            <div class="spec-pro">
              <div class="label-name">Name</div>
              <div class="label-ket">: &nbsp;Depo Semut</div>
            </div>
            <div class="spec-pro">
              <div class="label-name">Company</div>
              <div class="label-ket">: &nbsp;PT. Semesta Mauna Utama</div>
            </div>
            <div class="spec-pro">
              <div class="label-name">Category</div>
              <div class="label-ket">: &nbsp;Tree</div>
            </div>
            <div class="spec-pro">
              <div class="label-name">Type</div>
              <div class="label-ket">: &nbsp;Company Website</div>
            </div>
            <div class="spec-pro">
              <div class="label-name">Tech Stack</div>
              <div class="label-ket">
                : &nbsp;
                <img src="@/assets/images/portofolio/figma.png" alt="" />
                <img src="@/assets/images/portofolio/javascript.png" alt="" />
                <img src="@/assets/images/portofolio/vue.png" alt="" />
              </div>
            </div>
          </div>
          <a href="" class="btn-visit">Visit</a>
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
      imgs: [
        "https://rimba.lifetime-studios.com/images/portofolio/hl-1.png",
        "https://rimba.lifetime-studios.com/images/portofolio/hl-2.png",
        "https://rimba.lifetime-studios.com/images/portofolio/hl-3.png",
        "https://rimba.lifetime-studios.com/images/portofolio/hl-4.png",
        "https://rimba.lifetime-studios.com/images/portofolio/hl-5.png",
        "https://rimba.lifetime-studios.com/images/portofolio/hl-6.png",
      ],
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
  },
  name: "DetailComp",
  props: {
    msg: String,
    data: Array
  },
  mounted() {
    console.log(this.data);
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
