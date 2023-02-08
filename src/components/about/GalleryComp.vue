<template>
  <div class="wrapper-gallery">
    <div class="container">
      <div class="title-wrap">
        <h2 style="color: #052e40">Gallery</h2>
        <div class="circle-title-gallery"></div>
        <p style="color: #052e40">Activity in Rimbahouse</p>
      </div>
      <div class="body-gallery">
        <div class="filter-year">
          <div class="select-box">
            <div class="select-box__current" tabindex="1">
              <div class="select-box__value">
                <input
                  class="select-box__input"
                  type="radio"
                  id="10"
                  value="11"
                  name="Ben"
                  checked="checked"
                />
                <p class="select-box__input-text">Choose year</p>
              </div>
              <div class="select-box__value">
                <input
                  class="select-box__input"
                  type="radio"
                  id="0"
                  value="1"
                  name="Ben"
                />
                <p class="select-box__input-text">2019</p>
              </div>
              <div class="select-box__value">
                <input
                  class="select-box__input"
                  type="radio"
                  id="1"
                  value="2"
                  name="Ben"
                />
                <p class="select-box__input-text">2020</p>
              </div>
              <div class="select-box__value">
                <input
                  class="select-box__input"
                  type="radio"
                  id="2"
                  value="3"
                  name="Ben"
                />
                <p class="select-box__input-text">2021</p>
              </div>
              <div class="select-box__value">
                <input
                  class="select-box__input"
                  type="radio"
                  id="3"
                  value="4"
                  name="Ben"
                />
                <p class="select-box__input-text">2022</p>
              </div>
              <div class="select-box__value">
                <input
                  class="select-box__input"
                  type="radio"
                  id="4"
                  value="5"
                  name="Ben"
                />
                <p class="select-box__input-text">2023</p>
              </div>
              <img
                class="select-box__icon"
                src="https://cdn.onlinewebfonts.com/svg/img_295694.svg"
                alt="Arrow Icon"
                aria-hidden="true"
              />
            </div>
            <ul class="select-box__list">
              <li>
                <label
                  class="select-box__option"
                  for="10"
                  aria-hidden="aria-hidden"
                  @click="refreshImage()"
                  >Choose year</label
                >
              </li>
              <li>
                <label
                  class="select-box__option"
                  for="0"
                  aria-hidden="aria-hidden"
                  @click='filterImage("2019")'
                  >2019</label
                >
              </li>
              <li>
                <label
                  class="select-box__option"
                  for="1"
                  aria-hidden="aria-hidden"
                  @click='filterImage("2020")'
                  >2020</label
                >
              </li>
              <li>
                <label
                  class="select-box__option"
                  for="2"
                  aria-hidden="aria-hidden"
                  @click='filterImage("2021")'
                  >2021</label
                >
              </li>
              <li>
                <label
                  class="select-box__option"
                  for="3"
                  aria-hidden="aria-hidden"
                  @click='filterImage("2022")'
                  >2022</label
                >
              </li>
              <li>
                <label
                  class="select-box__option"
                  for="4"
                  aria-hidden="aria-hidden" @click='filterImage("2023")'
                  >2023</label
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="gallery-content">
          <div
            v-for="(src, index) in filteredImage"
            :key="index"
            class="gallery-box pic"
            @click="() => showImg(index)"
          >
            <img :src="src" />
          </div>

          <vue-easy-lightbox
            :visible="visible"
            :imgs="filteredImage"
            :index="index"
            @hide="handleHide"
          ></vue-easy-lightbox>
        </div>
      </div>

      <div class="wrapper-btn">
        <a href="#">View All</a>
      </div>
    </div>
  </div>
</template>

<script>
import VueEasyLightbox from "vue-easy-lightbox";
import { getContent } from "@/api/rimba";

export default {
  components: {
    VueEasyLightbox,
  },
  data: function () {
    return {
      imgs: "", // Img Url , string or Array of string
      visible: false,
      index: 0, // default: 0
      imageData: [],
      filteredImage:[],
      media: process.env.VUE_APP_MEDIA_URL
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
    async refreshImage() {
      const getResponse = await getContent("gallery");
      if (getResponse.status == 200) {
        this.imageData = getResponse.data.data;
        this.filteredImage = [];
        this.imageData.map((image)=> {
          this.filteredImage.push(this.media + image.image);
        });
      } else {
        console.log(getResponse);
      }
    },
    filterImage(year) {
      this.filteredImage = [];
      this.imageData.map((image) => {
        if(image.year == year){
          this.filteredImage.push(this.media+image.image);
        }
      });
    },
  },
  name: "GalleryComp",
  props: {
    msg: String,
  },
  mounted() {
    this.refreshImage();
  },
};
</script>

<style>
.wrapper-gallery {
  position: relative;
  background: #fff;
  padding: 90px 0px;
  margin: 0 auto;
}
.title-wrap .circle-title-gallery {
  position: absolute;
  left: 44.3%;
  right: 60.07%;
  top: 0%;
  bottom: 86.45%;
  background: #9fbf5b;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  z-index: 9;
}
.wrapper-btn {
  margin: 80px 0px 0px 0px;
}
.wrapper-btn a {
  font-family: "Nunito", sans-serif;
  border: 1px solid #303030;
  filter: drop-shadow(10px 10px 40px rgba(164, 164, 164, 0.25));
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  padding: 12px 70px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  /* identical to box height, or 24px */

  text-align: center;
  text-decoration: none;
}
.filter-year {
  margin: 20px 0px 50px 0px;
}
.filter-year .box {
  padding: 20px;
  background: rgba(68, 68, 68, 0.1);
  width: 35%;
  border-radius: 5px;
  margin: auto;
}
.gallery-content {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(8, 1fr);
  column-gap: 20px;
}
.gallery-content .gallery-box {
  grid-column: span 2;
  border-radius: 15px;
  background-color: rgba(68, 68, 68, 0.1);
  padding: 10px;
  margin-bottom: 20px;
}
.gallery-content .gallery-box img {
  width: 100%;
}
/* Search Year Style */
.select-box {
  position: relative;
  display: block;
  width: 100%;
  margin: 0 auto;
  font-family: "Open Sans", "Helvetica Neue", "Segoe UI", "Calibri", "Arial",
    sans-serif;
  font-size: 16px;
  color: #7c7c7c;
  background: #f0f0f0;
  text-align: left;
  font-family: "Poppins", sans-serif;
  border-radius: 10px;
}
@media (min-width: 768px) {
  .select-box {
    width: 70%;
  }
}
@media (min-width: 992px) {
  .select-box {
    width: 50%;
  }
}
@media (min-width: 1200px) {
  .select-box {
    width: 40%;
  }
}
.select-box__current {
  position: relative;
  cursor: pointer;
  outline: none;
}
.select-box__current:focus + .select-box__list {
  opacity: 1;
  -webkit-animation-name: none;
  animation-name: none;
}
.select-box__current:focus + .select-box__list .select-box__option {
  cursor: pointer;
}
.select-box__current:focus .select-box__icon {
  -webkit-transform: translateY(-50%) rotate(180deg);
  transform: translateY(-50%) rotate(180deg);
}
.select-box__icon {
  position: absolute;
  top: 50%;
  right: 20px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 20px;
  opacity: 0.3;
  -webkit-transition: 0.2s ease;
  transition: 0.2s ease;
}
.select-box__value {
  display: -webkit-box;
  display: flex;
}
.select-box__input {
  display: none;
}
.select-box__input:checked + .select-box__input-text {
  display: block;
}
.select-box__input-text {
  display: none;
  width: 100%;
  margin: 0;
  padding: 15px;
  background-color: #f0f0f0;
  border-radius: 10px;
  color: #7c7c7c;
}
.select-box__list {
  position: absolute;
  width: 100%;
  padding: 0;
  list-style: none;
  opacity: 0;
  -webkit-animation-name: HideList;
  animation-name: HideList;
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-timing-function: step-start;
  animation-timing-function: step-start;
  box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  border-radius: 10px;
}
.select-box__option {
  display: block;
  padding: 15px;
  background-color: #f0f0f0;
}
.select-box__option:hover,
.select-box__option:focus {
  color: #fff;
  background-color: #546c84;
}

@-webkit-keyframes HideList {
  from {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
  to {
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
  }
}

@keyframes HideList {
  from {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
  to {
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
  }
}
@media (max-width: 1440px) {
  .title-wrap .circle-title-gallery {
    left: 43.7%;
  }
}
@media (max-width: 1280px) {
  .wrapper-gallery {
    padding: 90px 50px !important;
  }
  .title-wrap .circle-title-gallery {
    left: 43%;
  }
}
@media (max-width: 1024px) {
  .wrapper-gallery {
    padding: 90px 20px !important;
  }
  .title-wrap .circle-title-gallery {
    left: 42%;
  }
}
@media (max-width: 992px) {
  .title-wrap .circle-title-gallery {
    left: 41%;
  }
  .gallery-content .gallery-box {
    grid-column: span 4;
  }
}
@media (max-width: 830px) {
  .title-wrap .circle-title-gallery {
    left: 40%;
  }
}
@media (max-width: 600px) {
  .wrapper-gallery {
    padding: 90px 10px !important;
  }
  .title-wrap .circle-title-gallery {
    left: 35%;
  }
}
@media (max-width: 500px) {
  .title-wrap .circle-title-gallery {
    left: 30%;
  }
  .gallery-content {
    column-gap: 10px;
  }
  .body-box {
    padding: 70px 10px 0px 10px;
  }
}
@media (max-width: 375px) {
  .title-wrap .circle-title-gallery {
    left: 27%;
  }
}
@media (max-width: 300px) {
  .body-box .box h2 {
    font-size: 22px;
  }
  .body-box .box p {
    font-size: 14px;
  }
  .title-wrap .circle-title-gallery {
    left: 22%;
  }
  .gallery-content .gallery-box {
    grid-column: span 8;
  }
}
/* End Year Style */
</style>
