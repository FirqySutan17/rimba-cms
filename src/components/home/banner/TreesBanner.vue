<template>
  <section class="banner-trees">
    <div class="desktop" style="height: 100%">
      <img src="@/assets/images/trees/mount-right.png" alt="" id="mount-left" />
      <img src="@/assets/images/trees/mount-left.png" alt="" id="mount-right" />
      <div class="trees-content">
        <div class="trees-firstc">
          <img
            src="@/assets/images/trees/trees-1.png"
            alt=""
            class="trees trees-1"
          />
          <label for="trees-first" class="menu-trees-first"> </label>
        </div>

        <div id="tsecond" class="trees-secondc boxService" @click="tSecond">
          <div class="expand-first">
            <img
              src="@/assets/images/trees/trees-2.png"
              alt=""
              class="trees trees-2"
            />
            <div class="circle-trees">
              <img src="@/assets/images/trees/icon-1.png" alt="" id="icon-1" />
            </div>
          </div>
        </div>

        <div class="trees-thirdc">
          <img
            src="@/assets/images/trees/trees-3.png"
            alt=""
            class="trees trees-3"
          />
          <label for="trees-third" class="menu-trees-third"> </label>
        </div>

        <div id="tfourth" class="trees-fourthc boxService" @click="tFourth">
          <div class="expand-four">
            <img
              src="@/assets/images/trees/trees-4.png"
              alt=""
              class="trees trees-4"
            />
            <div class="circle-trees">
              <img src="@/assets/images/trees/icon-2.png" alt="" id="icon-2" />
            </div>
          </div>
        </div>

        <div id="tfifth" class="trees-fifthc boxService" @click="tFifth">
          <div class="expand-five">
            <img
              src="@/assets/images/trees/trees-5.png"
              alt=""
              class="trees trees-5"
            />
            <div class="circle-trees">
              <img src="@/assets/images/trees/icon-3.png" alt="" id="icon-3" />
            </div>
          </div>
        </div>

        <div id="tsixth" class="trees-sixthc boxService" @click="tSixth">
          <div class="expand-six">
            <img
              src="@/assets/images/trees/trees-6.png"
              alt=""
              class="trees trees-6"
            />
            <div class="circle-trees">
              <img src="@/assets/images/trees/icon-4.png" alt="" id="icon-4" />
            </div>
          </div>
        </div>

        <div id="tseventh" class="trees-seventhc boxService" @click="tSeventh">
          <div class="expand-seven">
            <img
              src="@/assets/images/trees/trees-7.png"
              alt=""
              class="trees trees-7"
            />
            <div class="circle-trees">
              <img src="@/assets/images/trees/icon-5.png" alt="" id="icon-5" />
            </div>
          </div>
        </div>

        <div class="box-content-second" v-if="product.length > 0">
          <div class="box">
            <h2>{{ product[0].name }}</h2>
            <div v-html="product[0].description"></div>
            <a href="#" :style="{ backgroundColor: product[0].button_color }"
              >Visit Pinetree</a
            >
          </div>
          <div class="box">
            <img :src="media + product[0].image" :alt="product[0].alt_text" />
          </div>
        </div>

        <div class="box-content-four" v-if="product.length > 0">
          <div class="box">
            <h2>{{ product[2].name }}</h2>
            <div v-html="product[2].description"></div>
            <a href="#" :style="{ backgroundColor: product[2].button_color }"
              >Visit Oak Tree</a
            >
          </div>
          <div class="box">
            <img :src="media + product[2].image" :alt="product[2].alt_text" />
          </div>
        </div>

        <div class="box-content-five">
          <div class="box">
            <h2>Mangotree</h2>
            <p>
              Mangotree manages user requests for assistance by dispatching
              technical support to recipient locations and tracking handling
              history.
            </p>
            <a href="#">Visit Mangotree</a>
          </div>
          <div class="box">
            <img src="@/assets/images/trees/mango-img.png" alt="" />
          </div>
        </div>

        <div class="box-content-six">
          <div class="box">
            <h2>Bonsaitree</h2>
            <p>
              Bonsaitree is in charge of transportation, contract negotiations,
              and other tasks required for the transportation of goods by land,
              sea, and air, as well as cargo consolidation.
            </p>
            <a href="#">Visit Bonsaitree</a>
          </div>
          <div class="box">
            <img src="@/assets/images/trees/bonsai-img.png" alt="" />
          </div>
        </div>

        <div class="box-content-seven" v-if="product.length > 0">
          <div class="box">
            <h2>{{ product[1].name }}</h2>
            <div v-html="product[1].description"></div>
            <a href="#" :style="{ backgroundColor: product[1].button_color }"
              >Visit Bambootree</a
            >
          </div>
          <div class="box">
            <img :src="media + product[1].image" :alt="product[1].alt_text" />
          </div>
        </div>
      </div>
      <img src="@/assets/images/trees/front.png" alt="" id="bg-front" />
    </div>
    <div class="mobile">
      <div class="card-content">
        <div class="card-box">
          <img src="@/assets/images/trees/old/trees-4.png" alt="" />
          <div class="box" v-if="product.length > 0">
            <div class="boxie">
              <h3>{{ product[2].name }}</h3>
              <div v-html="product[2].description"></div>
              <div class="link-visit">
                <a
                  href="#"
                  :style="{ backgroundColor: product[2].button_color }"
                  >Visit Oak Tree</a
                >
                <div class="best-product" v-if="product[2].label == 1"></div>
              </div>
            </div>
            <div class="boxie">
              <img :src="media + product[2].image" :alt="product[2].alt_text" />
            </div>
          </div>
        </div>

        <div class="card-box">
          <img src="@/assets/images/trees/old/trees-7.png" alt="" />
          <div class="box" v-if="product.length > 0">
            <div class="boxie">
              <h3>{{ product[1].name }}</h3>
              <div v-html="product[1].description"></div>

              <div class="link-visit">
                <a
                  href="#"
                  :style="{ backgroundColor: product[1].button_color }"
                  >Visit BambooTree</a
                >
                <div class="best-product" v-if="product[1].label == 1"></div>
              </div>
            </div>
            <div class="boxie">
              <img :src="media + product[1].image" :alt="product[1].alt_text" />
            </div>
          </div>
        </div>

        <div class="card-box">
          <img src="@/assets/images/trees/old/trees-2.png" alt="" />
          <div class="box" v-if="product.length > 0">
            <div class="boxie">
              <h3>{{ product[0].name }}</h3>
              <div v-html="product[0].description"></div>
              <div class="link-visit">
                <a
                  href="#"
                  :style="{ backgroundColor: product[0].button_color }"
                  >Visit Pinetree</a
                >
                <div class="best-product" v-if="product[1].label == 1"></div>
              </div>
            </div>
            <div class="boxie">
              <img :src="media + product[0].image" :alt="product[0].alt_text" />
            </div>
          </div>
        </div>

        <div class="card-box">
          <img src="@/assets/images/trees/old/trees-6.png" alt="" />
          <div class="box">
            <div class="boxie">
              <h3>Bonsaitree</h3>
              <p>
                An integrated freight forwarding system that helps to simplify
                all issues in one platform.
              </p>
              <div class="link-visit">
                <a href="#" style="background: #806062">Visit Bonsairee</a>
                <div class="best-product"></div>
              </div>
            </div>
            <div class="boxie">
              <img src="@/assets/images/trees/bonsai-img.png" alt="" />
            </div>
          </div>
        </div>

        <div class="card-box">
          <img src="@/assets/images/trees/old/trees-5.png" alt="" />
          <div class="box">
            <div class="boxie">
              <h3>Mangotree</h3>
              <p>A customized software service based on your needs.</p>
              <div class="link-visit">
                <a href="#" style="background: #f4916d">Visit Mangotree</a>
                <div class="best-product"></div>
              </div>
            </div>
            <div class="boxie">
              <img src="@/assets/images/trees/mango-img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from "jquery";
import { getContent } from "@/api/rimba";

export default {
  name: "TreesBanner",
  props: {
    msg: String,
  },
  data() {
    return {
      product: [],
      media: process.env.VUE_APP_MEDIA_URL,
    };
  },
  methods: {
    async refreshProduct() {
      const getResponse = await getContent("product");
      if (getResponse.status == 200) {
        this.product = getResponse.data.data;
      } else {
        console.log(getResponse);
      }
    },
  },
  created() {
    this.refreshProduct();
  },
  mounted: function () {
    $(".boxService").click(function () {
      $(".boxService").not(this).removeClass("expanded");
      $("#mount-left").removeClass("moving-left");
      $("#mount-right").removeClass("moving-right");
      $(".trees-content").removeClass("move-left");
      $(this).toggleClass("expanded");
      if ($(this).hasClass("expanded")) {
        $(".expand-four").addClass("shrink");
        $(".expand-five").addClass("shrink");
        $(".expand-six").addClass("shrink");
        $(".expand-seven").addClass("shrink");
        $(".expand-first").addClass("shrink");
      }
      if ($(this).not(".expanded")) {
        $(".expand-four").removeClass("shrink");
        $(".expand-five").removeClass("shrink");
        $(".expand-six").removeClass("shrink");
        $(".expand-seven").removeClass("shrink");
        $(".expand-first").removeClass("shrink");
      }
    });
    $(".trees-secondc").click(function () {
      if ($(this).hasClass("expanded")) {
        $(".expand-four").addClass("shrink");
        $(".expand-five").addClass("shrink");
        $(".expand-six").addClass("shrink");
        $(".expand-seven").addClass("shrink");
      }
    });
    $(".trees-fourthc").click(function () {
      if ($(this).hasClass("expanded")) {
        $(".expand-first").addClass("shrink");
        $(".expand-five").addClass("shrink");
        $(".expand-six").addClass("shrink");
        $(".expand-seven").addClass("shrink");
      }
    });
    $(".trees-fifthc").click(function () {
      if ($(this).hasClass("expanded")) {
        $(".expand-first").addClass("shrink");
        $(".expand-four").addClass("shrink");
        $(".expand-six").addClass("shrink");
        $(".expand-seven").addClass("shrink");
      }
    });
    $(".trees-sixthc").click(function () {
      if ($(this).hasClass("expanded")) {
        $(".expand-first").addClass("shrink");
        $(".expand-four").addClass("shrink");
        $(".expand-five").addClass("shrink");
        $(".expand-seven").addClass("shrink");
      }
    });
    $(".trees-seventhc").click(function () {
      if ($(this).hasClass("expanded")) {
        $(".expand-first").addClass("shrink");
        $(".expand-four").addClass("shrink");
        $(".expand-five").addClass("shrink");
        $(".expand-six").addClass("shrink");
      }
    });
  },
};
</script>

<style>
.banner-trees {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  background: url(@/assets/images/trees/trees-bg.png);
  background-size: cover;
  background-repeat: no-repeat;
}

.banner-trees img#hill-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
#bg-front {
  position: absolute;
  z-index: 3;
  bottom: 0;
  right: 0;
  width: 100%;
  object-fit: cover;
}
#mount-right {
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: 0;
  width: 100%;
  object-fit: cover;
  transition: all 0.5s ease;
}
#mount-left {
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
  transition: all 0.5s ease;
}

.moving-left {
  left: -200px !important;
  transition: all 0.5s ease;
}
.moving-right {
  right: -200px !important;
  transition: all 0.5s ease;
}
.trees {
  /* transform: scale(1.3); */
  position: relative;
  top: -75px;
}
.trees-1 {
  top: -150px;
  transform: scale(6);
  left: 60px;
}
.trees-2 {
  top: 70px;
  width: 100%;
}
.trees-3 {
  top: -50px;
  transform: scale(5.5);
}
.trees-4 {
  top: -30px;
  left: 50px;
  width: 100%;
  transform: scale(1.5);
}
.trees-5 {
  top: 50px;
  width: 100%;
  left: 30px;
  transform: scale(1.2);
}
.trees-6 {
  top: 64px;
  width: 100%;
  left: -90px;
  transform: scale(1.1);
}
.trees-7 {
  top: -200px;
  transform: scale(5);
  width: 100%;
  right: 70px;
}
.trees-content {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  bottom: 0;
  z-index: 2;
  transition: all 0.5s ease;
}
.move-left {
  bottom: -70px;
  justify-content: center;
  transition: all 0.5s ease;
}
.trees-content img {
  width: 100%;
}
.trees-firstc {
  margin: 0px 30px;
  margin-bottom: 50px;
  position: relative;
}
.trees-firstc .circle-trees {
  position: absolute;
  top: 0;
}
.trees-secondc {
  margin: 0px 30px;
  margin-bottom: 50px;
  position: relative;
}
.trees-secondc .circle-trees {
  position: absolute;
  top: 40%;
  left: 50%;
  width: 40px;
  height: 40px;
  transform: translate(-40%, 0%);
  cursor: pointer;
}
.trees-secondc.expanded .circle-trees {
  position: absolute;
  top: 31%;
  left: 49%;
  width: 80px;
  height: 80px;
  transform: translate(-30%, -0%);
  cursor: pointer;
}
.trees-secondc.expanded .circle-trees #icon-1 {
  content: url(@/assets/images/trees/circle-back.png);
}
.trees-thirdc {
  margin: 0px 30px;
  margin-bottom: 50px;
  position: relative;
}
.trees-fourthc {
  margin: 0px 30px;
  margin-bottom: 50px;
  position: relative;
}
.trees-fourthc .circle-trees {
  position: absolute;
  top: 33%;
  left: 65%;
  width: 40px;
  height: 40px;
  transform: translate(-50%, 0%);
  cursor: pointer;
}
.trees-fifthc {
  margin: 0px 30px;
  margin-bottom: 50px;
  position: relative;
}
.trees-fifthc .circle-trees {
  position: absolute;
  top: 34%;
  left: 55%;
  width: 40px;
  height: 40px;
  transform: translate(-65%, 0%);
  cursor: pointer;
}
.trees-sixthc {
  margin: 0px 30px;
  margin-bottom: 50px;
  position: relative;
}
.trees-sixthc .circle-trees {
  position: absolute;
  top: 57%;
  left: 27%;
  width: 40px;
  height: 40px;
  transform: translate(20%, 0%);
  cursor: pointer;
}
.trees-seventhc {
  margin: 0px 30px;
  margin-bottom: 50px;
  position: relative;
}
.trees-seventhc .circle-trees {
  position: absolute;
  top: -280%;
  left: -245%;
  width: 40px;
  height: 40px;
  transform: translate(-50%, 0%);
  cursor: pointer;
}
.trees-seventhc .circle-trees #icon-5 {
  content: url(@/assets/images/trees/icon-5.png);
}
input[type="checkbox"] {
  display: none;
}

.menu-trees-second {
  transition: all 1s ease;
}

.boxService {
  position: relative;
  transition: all 0.5s ease;
  z-index: 11;
  height: 0%;
  display: flex;
}
.boxService.expanded {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  transition: all 0.5s ease;
}

.boxService .expand-first {
  align-self: flex-end;
  position: relative;
}
.boxService.expanded .expand-first {
  position: absolute;
  top: 0;
  right: 0;
  transition: all 0.5s ease;
}
.boxService.expanded .expand-first {
  width: 33%;
  top: 11px;
  right: 0px;
  position: absolute;
  transition: all 0.5s ease;
  z-index: 10000;
}
.boxService .expand-first img {
  transition: all 0.5s ease;
}
.boxService.expanded .expand-first img {
  width: 100%;
  transition: all 0.5s ease;
}
.boxService.expanded .expand-first {
  z-index: 1000;
}
.box-content-second {
  height: auto;
  border-radius: 10px;
  padding: 40px;
  background: #fff;
  position: absolute;
  top: -250%;
  left: 12%;
  z-index: 99;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  column-gap: 20px;
  width: 55%;
  transition: all 0.7s ease;
}
.box-content-second .box:nth-child(1) {
  grid-column: span 5;
  text-align: left;
  margin: auto;
}
.box-content-second .box:nth-child(2) {
  grid-column: span 3;
  margin: auto 0;
}
.box-content-second .box h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 20px;
}
.box-content-second .box p {
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  color: #787878;
  margin-bottom: 40px;
}
.box-content-second .box a {
  background: #207fa8;
  border: 1px solid #207fa8;
  box-shadow: 10px 10px 40px rgba(32, 127, 168, 0.2);
  border-radius: 100px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  padding: 14px 40px;
  text-decoration: none;
  transition: all 0.5s ease;
}
.box-content-second .box a:hover {
  background: transparent !important;
  border: 1px solid #000;
  color: #000;
  transition: all 0.5s ease;
}
.trees-secondc.boxService.expanded ~ .box-content-second {
  top: 14%;
  left: 12%;
  transition: all 0.7s ease;
}

.boxService .expand-four {
  align-self: flex-end;
  position: relative;
}
.boxService.expanded .expand-four {
  width: 32%;
  top: 0%;
  right: 120px;
  position: absolute;
}
.boxService.expanded .expand-four img {
  width: 100%;
}
.trees-fourthc .circle-trees {
  position: absolute;
  top: 33%;
  left: 65%;
  width: 40px;
  height: 40px;
  transform: translate(-50%, 0%);
  cursor: pointer;
}
.trees-fourthc.expanded .circle-trees {
  position: absolute;
  top: 39%;
  left: 60%;
  width: 80px;
  height: 80px;
  transform: translate(-50%, 0%);
  cursor: pointer;
}
.trees-fourthc.expanded .circle-trees #icon-2 {
  content: url(@/assets/images/trees/circle-back.png);
}
.box-content-four {
  height: auto;
  border-radius: 10px;
  padding: 40px;
  background: #fff;
  position: absolute;
  top: -250%;
  left: 12%;
  z-index: 99;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  column-gap: 20px;
  width: 55%;
  transition: all 0.7s ease;
}
.box-content-four .box:nth-child(1) {
  grid-column: span 5;
  text-align: left;
  margin: auto;
}
.box-content-four .box:nth-child(2) {
  grid-column: span 3;
  margin: auto 0;
}
.box-content-four .box h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 20px;
}
.box-content-four .box p {
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  color: #787878;
  margin-bottom: 40px;
}
.box-content-four .box a {
  background: #146188;
  border: 1px solid transparent;
  box-shadow: 10px 10px 40px rgba(20, 97, 136, 0.2);
  border-radius: 100px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  padding: 14px 40px;
  text-decoration: none;
  transition: all 0.5s ease;
}
.box-content-four .box a:hover {
  background: transparent !important;
  border: 1px solid #000;
  color: #000;
  transition: all 0.5s ease;
}
.trees-fourthc.boxService.expanded ~ .box-content-four {
  top: 14%;
  left: 12%;
  transition: all 0.7s ease;
}
.boxService .expand-five {
  align-self: flex-end;
  position: relative;
}
.boxService.expanded .expand-five {
  width: 35%;
  top: -130px;
  right: 70px;
  position: absolute;
}
.boxService.expanded .expand-five img {
  width: 100%;
}
.trees-fifthc.expanded .circle-trees {
  position: absolute;
  top: 30%;
  left: 50%;
  width: 80px;
  height: 80px;
  transform: translate(-65%, 0%);
  cursor: pointer;
}
.trees-fifthc.expanded .circle-trees #icon-3 {
  content: url(@/assets/images/trees/circle-back.png);
}
.box-content-five {
  height: auto;
  border-radius: 10px;
  padding: 40px;
  background: #fff;
  position: absolute;
  top: -250%;
  left: 12%;
  z-index: 99;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  column-gap: 20px;
  width: 55%;
  transition: all 0.7s ease;
}
.box-content-five .box:nth-child(1) {
  grid-column: span 5;
  text-align: left;
  margin: auto;
}
.box-content-five .box:nth-child(2) {
  grid-column: span 3;
  margin: auto 0;
}
.box-content-five .box h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 20px;
}
.box-content-five .box p {
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  color: #787878;
  margin-bottom: 40px;
}
.box-content-five .box a {
  background: #f4916d;
  border: 1px solid #f4916d;
  box-shadow: 10px 10px 40px rgba(244, 145, 109, 0.2);
  border-radius: 100px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  padding: 14px 40px;
  text-decoration: none;
  transition: all 0.5 ease;
}
.box-content-five .box a:hover {
  background: transparent;
  color: #f4916d;
  transition: all 0.5 ease;
}
.trees-fifthc.boxService.expanded ~ .box-content-five {
  top: 14%;
  left: 12%;
  transition: all 0.7s ease;
}

.boxService .expand-six {
  align-self: flex-end;
  position: relative;
}
.boxService.expanded .expand-six {
  width: 27%;
  top: -112px;
  right: 0px;
  position: absolute;
}
.boxService.expanded .expand-six img {
  width: 100%;
}
.box-content-six {
  height: auto;
  border-radius: 10px;
  padding: 40px;
  background: #fff;
  position: absolute;
  top: -250%;
  left: 12%;
  z-index: 99;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  column-gap: 20px;
  width: 55%;
  transition: all 0.7s ease;
}
.box-content-six .box:nth-child(1) {
  grid-column: span 5;
  text-align: left;
  margin: auto;
}
.box-content-six .box:nth-child(2) {
  grid-column: span 3;
  margin: auto;
}
.box-content-six .box h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 20px;
}
.box-content-six .box p {
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  color: #787878;
  margin-bottom: 40px;
}
.box-content-six .box a {
  background: #806062;
  border: 1px solid #806062;
  box-shadow: 10px 10px 40px rgba(255, 205, 0, 0.2);
  border-radius: 100px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  padding: 14px 40px;
  text-decoration: none;
  transition: all 0.5s ease;
}
.box-content-six .box a:hover {
  background: transparent;
  color: #806062;
  transition: all 0.5s ease;
}
.trees-sixthc.boxService.expanded ~ .box-content-six {
  top: 14%;
  left: 12%;
  transition: all 0.7s ease;
}
.trees-sixthc.expanded .circle-trees {
  position: absolute;
  top: 56%;
  left: 34%;
  width: 80px;
  height: 80px;
  transform: translate(20%, 0%);
  cursor: pointer;
}
.trees-sixthc.expanded .circle-trees #icon-4 {
  content: url(@/assets/images/trees/circle-back.png);
}
.boxService .expand-seven {
  align-self: flex-end;
  position: relative;
}
.boxService.expanded .expand-seven {
  width: 3%;
  top: 500px;
  right: 200px;
  position: absolute;
}
.boxService.expanded .expand-seven img {
  width: 100%;
  top: 0px;
}
.box-content-seven {
  height: auto;
  border-radius: 10px;
  padding: 40px;
  background: #fff;
  position: absolute;
  top: -250%;
  left: 12%;
  z-index: 99;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  column-gap: 20px;
  width: 55%;
  transition: all 0.7s ease;
}
.box-content-seven .box:nth-child(1) {
  grid-column: span 5;
  text-align: left;
  margin: auto;
}
.box-content-seven .box:nth-child(2) {
  grid-column: span 3;
}
.box-content-seven .box h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 20px;
}
.box-content-seven .box p {
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  color: #787878;
  margin-bottom: 40px;
}
.box-content-seven .box a {
  background: #ffcd00;
  border: 1px solid transparent;
  box-shadow: 10px 10px 40px rgba(255, 205, 0, 0.2);
  border-radius: 100px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  padding: 14px 40px;
  text-decoration: none;
  transition: all 0.5s ease;
}
.box-content-seven .box a:hover {
  background: transparent !important;
  border: 1px solid #000 !important;
  color: #000;
  transition: all 0.5s ease;
}
.trees-seventhc.boxService.expanded ~ .box-content-seven {
  top: 14%;
  left: 12%;
  transition: all 0.7s ease;
}
.trees-seventhc.expanded .circle-trees {
  position: absolute;
  top: -64%;
  left: -105%;
  width: 80px;
  height: 80px;
  transform: translate(-50%, 0%);
  cursor: pointer;
}
.trees-seventhc.expanded .circle-trees #icon-5 {
  content: url(@/assets/images/trees/circle-back.png);
}
.circle-trees i {
  font-size: 25px;
  display: inline-block;
  vertical-align: middle;
  margin-top: -28px;
  color: #238e73;
  transition: all 0.5s ease;
}
.circle-trees img {
  font-size: 25px;
  display: inline-block;
  vertical-align: middle;
  margin-top: -42px;
  color: #238e73;
  transition: all 0.5s ease;
  margin-left: 0.5px;
}
.circle-trees {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 55px;
  height: 55px;
  background: rgba(255, 255, 255, 0.7);
  color: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 80px;
  transition: all 0.5s ease;
}
.circle-trees:before,
.circle-trees:after {
  content: "";
  display: block;
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
}

.boxService.expanded .circle-trees {
  background: transparent;
}
.circle-trees:before,
.boxService.expanded .circle-trees:after {
  animation: none;
}

.circle-trees:after {
  animation-delay: 0.5s;
}

/* Shrink Box */
.expand-first.shrink {
  width: 70%;
  margin: 0 auto;
}
.expand-four.shrink {
  width: 70%;
  margin: 0 auto;
  left: -150px;
}
.expand-five.shrink {
  width: 70%;
  left: -170px;
}
.expand-six.shrink {
  width: 70%;
  left: -240px;
}
.expand-seven.shrink {
  width: 70%;
  left: -350px;
  top: 80px;
}
/* End Shrink Box */

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

.mobile {
  display: none;
}

@media (max-width: 1600px) {
  .boxService.expanded .expand-first {
    width: 13%;
    top: 100px;
    right: 140px;
    position: absolute;
    transition: all 0.5s ease;
  }
  .trees-secondc.boxService.expanded ~ .box-content-second {
    top: 1%;
    left: 12%;
    transition: all 0.7s ease;
  }
  .trees-secondc .circle-trees {
    top: 40%;
    left: 49%;
  }
  .move-left {
    bottom: -100px;
    justify-content: left;
    transition: all 0.5s ease;
  }
  .boxService.expanded .expand-four {
    width: 25%;
    top: 200px;
    right: 120px;
    position: absolute;
  }
  .trees-fourthc.boxService.expanded ~ .box-content-four {
    top: 1%;
    left: 12%;
    transition: all 0.7s ease;
  }
  .trees-fourthc.expanded .circle-trees {
    position: absolute;
    top: 0%;
    left: 50%;
    width: 60px;
    height: 60px;
    transform: translate(-50%, 0%);
    cursor: pointer;
  }
  .boxService.expanded .expand-five {
    width: 23%;
    top: 128px;
    right: 120px;
    position: absolute;
  }
  .trees-fifthc.expanded .circle-trees {
    position: absolute;
    top: -8%;
    left: 50%;
    width: 60px;
    height: 60px;
    transform: translate(-65%, 0%);
    cursor: pointer;
  }
  .trees-fifthc.boxService.expanded ~ .box-content-five {
    top: 1%;
    left: 12%;
    transition: all 0.7s ease;
  }
  .boxService.expanded .expand-six {
    width: 20%;
    top: 150px;
    right: 120px;
    position: absolute;
  }
  .trees-sixthc.expanded .circle-trees {
    position: absolute;
    top: 0%;
    left: 50%;
    width: 60px;
    height: 60px;
    transform: translate(20%, 0%);
    cursor: pointer;
  }
  .trees-sixthc.boxService.expanded ~ .box-content-six {
    top: 1%;
    left: 12%;
    transition: all 0.7s ease;
  }
  .boxService.expanded .expand-seven {
    width: 9%;
    top: 120px;
    right: 120px;
    position: absolute;
  }
  .trees-seventhc.expanded .circle-trees {
    position: absolute;
    top: 10%;
    left: 42%;
    width: 60px;
    height: 60px;
    transform: translate(-50%, 0%);
    cursor: pointer;
  }
  .trees-seventhc.boxService.expanded ~ .box-content-seven {
    top: 1%;
    left: 12%;
    transition: all 0.7s ease;
  }
  .trees-fourthc .circle-trees {
    top: 33%;
    left: 70%;
  }
  .trees-fifthc .circle-trees {
    top: 35%;
    left: 61%;
  }
  .trees-sixthc .circle-trees {
    top: 60%;
    left: 15%;
  }
  .trees-7 {
    top: -135px;
    transform: scale(6.5);
    width: 100%;
    right: 70px;
  }
  .boxService.expanded .expand-first {
    width: 30%;
    top: 0px;
    right: 0px;
    position: absolute;
    transition: all 0.5s ease;
  }
  .expand-four.shrink {
    width: 60%;
    margin: 0 auto;
    left: -150px;
  }
  .expand-four.shrink .circle-trees {
    top: 30%;
    left: 75%;
  }
  .trees-secondc.boxService.expanded ~ .box-content-second {
    top: 13%;
    left: 12%;
    transition: all 0.7s ease;
  }
  .trees-fourthc.boxService.expanded ~ .box-content-four {
    top: 13%;
    left: 12%;
    transition: all 0.7s ease;
  }
  .boxService.expanded .expand-four {
    width: 27%;
    top: 50px;
  }
  .trees-fourthc.expanded .circle-trees {
    top: 35%;
    left: 65%;
  }
  .trees-fifthc.boxService.expanded ~ .box-content-five {
    top: 13%;
    left: 12%;
    transition: all 0.7s ease;
  }
  .boxService.expanded .expand-five {
    width: 31%;
    top: -65px;
    right: 70px;
    position: absolute;
  }
  .trees-fifthc.expanded .circle-trees {
    top: 32%;
    left: 55%;
  }
  .trees-sixthc.boxService.expanded ~ .box-content-six {
    top: 13%;
    left: 12%;
    transition: all 0.7s ease;
  }
  .boxService.expanded .expand-six {
    width: 25%;
    top: -125px;
    right: 0px;
    position: absolute;
  }
  .trees-sixthc.expanded .circle-trees {
    top: 58%;
    left: 25%;
  }
  .expand-seven.shrink {
    width: 70%;
    left: -300px;
    top: 80px;
  }
  .expand-six.shrink {
    width: 70%;
    left: -190px;
  }
  .expand-five.shrink {
    width: 70%;
    left: -200px;
  }
  .boxService.expanded .expand-seven {
    width: 2%;
    top: 350px;
    right: 120px;
    position: absolute;
  }
  .trees-seventhc.boxService.expanded ~ .box-content-seven {
    top: 13%;
    left: 12%;
    transition: all 0.7s ease;
  }
  .trees-seventhc.expanded .circle-trees {
    top: -95%;
    left: -210%;
  }
}
@media (max-width: 1440px) {
  .boxService.expanded .expand-first {
    width: 15%;
    top: 100px;
    right: 110px;
    position: absolute;
    transition: all 0.5s ease;
  }
  .trees-secondc.boxService.expanded ~ .box-content-second {
    top: 5%;
    left: 13%;
    transition: all 0.7s ease;
  }
  .boxService.expanded .expand-four {
    width: 30%;
    top: 230px;
    right: 100px;
    position: absolute;
  }
  .trees-fourthc.boxService.expanded ~ .box-content-four {
    top: 5%;
    left: 13%;
    transition: all 0.7s ease;
  }
  .boxService.expanded .expand-five {
    width: 25%;
    top: 210px;
    right: 90px;
    position: absolute;
  }
  .trees-fifthc.boxService.expanded ~ .box-content-five {
    top: 5%;
    left: 13%;
    transition: all 0.7s ease;
  }
  .boxService.expanded .expand-six {
    width: 25%;
    top: 170px;
    right: 120px;
    position: absolute;
  }
  .trees-sixthc.boxService.expanded ~ .box-content-six {
    top: 5%;
    left: 13%;
    transition: all 0.7s ease;
  }
  .trees-sixthc.expanded .circle-trees {
    top: 10%;
    left: 53%;
  }
  .boxService.expanded .expand-seven {
    width: 12%;
    top: 120px;
    right: 120px;
    position: absolute;
  }
  .trees-seventhc.boxService.expanded ~ .box-content-seven {
    top: 5%;
    left: 13%;
    transition: all 0.7s ease;
  }
  .trees-5 {
    top: 40px !important;
  }
  .trees-fifthc .circle-trees {
    top: 33%;
  }
  .trees-1 {
    top: -100px;
    transform: scale(6);
    left: 60px;
  }
  .trees-secondc .circle-trees {
    top: 40%;
    left: 50%;
  }
  .trees-seventhc .circle-trees {
    top: -296%;
    left: -375%;
  }
  .boxService.expanded .expand-first {
    width: 35%;
    top: 35px;
    right: 0px;
    position: absolute;
    transition: all 0.5s ease;
  }
  .trees-secondc.expanded .circle-trees {
    top: 33%;
    left: 48%;
  }
  .trees-secondc.boxService.expanded ~ .box-content-second {
    top: 15%;
    left: 13%;
    transition: all 0.7s ease;
  }
  .expand-four.shrink {
    width: 75%;
  }
  .expand-five.shrink {
    width: 80%;
  }
  .expand-six.shrink {
    width: 80%;
    left: -235px;
  }
  .expand-seven.shrink {
    width: 70%;
    left: -300px;
    top: 20px;
  }
  .boxService.expanded .expand-four {
    width: 35%;
    top: 0px;
    right: 100px;
    position: absolute;
  }
  .trees-fourthc.boxService.expanded ~ .box-content-four {
    top: 15%;
    left: 13%;
    transition: all 0.7s ease;
  }
  .trees-fifthc.boxService.expanded ~ .box-content-five {
    top: 15%;
    left: 13%;
    transition: all 0.7s ease;
  }
  .boxService.expanded .expand-five {
    width: 35%;
    top: 0px;
    right: 20px;
    position: absolute;
  }
  .expand-four.shrink .circle-trees {
    top: 30%;
    left: 70%;
  }
  .trees-sixthc.boxService.expanded ~ .box-content-six {
    top: 15%;
    left: 13%;
    transition: all 0.7s ease;
  }
  .boxService.expanded .expand-six {
    width: 30%;
    top: -100px;
    right: 0px;
    position: absolute;
  }
  .trees-sixthc.expanded .circle-trees {
    top: 56%;
    left: 31%;
  }
  .expand-seven.shrink {
    width: 70%;
    left: -260px;
    top: 100px;
  }
  .boxService.expanded .expand-seven {
    width: 2.4%;
    top: 400px;
    right: 120px;
    position: absolute;
  }
  .trees-seventhc.boxService.expanded ~ .box-content-seven {
    top: 15%;
    left: 13%;
    transition: all 0.7s ease;
  }
}
@media (max-width: 1370px) {
  .move-left {
    bottom: -100px;
    justify-content: left;
    transition: all 0.5s ease;
    left: -60px !important;
  }
  .boxService.expanded .expand-first {
    right: 0px;
  }
  .trees-secondc.boxService.expanded ~ .box-content-second {
    top: 5%;
    left: 17%;
    transition: all 0.7s ease;
  }
  .boxService.expanded .expand-four {
    width: 26%;
    top: 180px;
    right: 0;
    position: absolute;
  }
  .trees-fourthc.boxService.expanded ~ .box-content-four {
    top: 5%;
    left: 17%;
    transition: all 0.7s ease;
  }
  .boxService.expanded .expand-five {
    width: 25%;
    top: 115px;
    right: 10px;
    position: absolute;
  }
  .trees-fifthc.boxService.expanded ~ .box-content-five {
    top: 5%;
    left: 17%;
    transition: all 0.7s ease;
  }
  .boxService.expanded .expand-six {
    width: 25%;
    top: 120px;
    right: 0px;
    position: absolute;
  }
  .trees-sixthc.boxService.expanded ~ .box-content-six {
    top: 5%;
    left: 17%;
    transition: all 0.7s ease;
  }
  .boxService.expanded .expand-seven {
    width: 10%;
    top: 120px;
    right: 20px;
    position: absolute;
  }
  .trees-seventhc.boxService.expanded ~ .box-content-seven {
    top: 5%;
    left: 12%;
    transition: all 0.7s ease;
    width: 60%;
  }
  .trees-secondc.boxService.expanded ~ .box-content-second {
    top: 13%;
    left: 12%;
    transition: all 0.7s ease;
    width: 60%;
  }
  .trees-fourthc.boxService.expanded ~ .box-content-four {
    top: 13%;
    left: 12%;
    transition: all 0.7s ease;
    width: 60%;
  }
  .trees-fifthc.boxService.expanded ~ .box-content-five {
    top: 13%;
    left: 12%;
    transition: all 0.7s ease;
    width: 60%;
  }
  .trees-sixthc.boxService.expanded ~ .box-content-six {
    top: 13%;
    left: 12%;
    transition: all 0.7s ease;
    width: 60%;
  }
  .boxService.expanded .expand-four {
    width: 32%;
    top: 0px;
    right: 90px;
    position: absolute;
  }
  .boxService.expanded .expand-five {
    width: 35%;
    top: -70px;
    right: 10px;
    position: absolute;
  }
  .boxService.expanded .expand-six {
    width: 30%;
    top: -160px;
    right: -40px;
    position: absolute;
  }
  .boxService.expanded .expand-seven {
    width: 2.4%;
    top: 400px;
    right: 80px;
    position: absolute;
  }
  .trees-seventhc.boxService.expanded ~ .box-content-seven {
    top: 13%;
    left: 12%;
    transition: all 0.7s ease;
    width: 60%;
  }
  .trees-sixthc.boxService.expanded ~ .box-content-six {
    top: 13%;
    left: 12%;
    transition: all 0.7s ease;
    width: 60%;
  }
}
@media (max-width: 1280px) {
  .trees-content {
    bottom: -35px;
  }
  .move-left {
    bottom: -120px;
  }
  .boxService.expanded .expand-four {
    width: 30%;
    top: 180px;
    right: 0;
    position: absolute;
  }
  .boxService.expanded .expand-five {
    width: 28%;
    top: 115px;
    right: 10px;
    position: absolute;
  }
  .boxService.expanded .expand-seven {
    width: 11%;
    top: 120px;
    right: 20px;
    position: absolute;
  }
  .boxService.expanded .expand-first {
    width: 35%;
    top: -50px;
    right: 0px;
    position: absolute;
    transition: all 0.5s ease;
  }
  .boxService.expanded .expand-four {
    width: 30%;
    top: 0px;
    right: 70px;
    position: absolute;
  }
  .boxService.expanded .expand-five {
    width: 35%;
    top: -100px;
    right: 10px;
    position: absolute;
  }
  .boxService.expanded .expand-seven {
    width: 2.4%;
    top: 300px;
    right: 100px;
    position: absolute;
  }
}

@media (max-width: 1100px) {
  .desktop {
    display: none !important;
  }
  .mobile {
    display: block !important;
  }
  .banner-trees {
    height: auto;
    background: transparent;
  }
  .card-box {
    display: block;
    position: relative;
    margin-bottom: 30px;
  }
  .card-content {
    padding-top: 30px;
  }

  .card-box .box {
    background: #fff;
    border-radius: 20px;
    padding: 40px 40px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    width: 65%;
    column-gap: 20px;
    margin: auto;
    margin-top: -20px;
    position: relative;
    z-index: 2;
  }
  .card-box:nth-last-child(1) {
    margin-bottom: 0px;
  }
  .card-box .box .boxie:nth-child(1) {
    grid-column: span 4;
    text-align: left;
    margin: auto;
  }
  .card-box .box .boxie:nth-child(2) {
    grid-column: span 2;
  }
  .card-box .box .boxie:nth-child(2) img {
    width: 100%;
  }
  .card-box .box .boxie h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 15px;
    color: #000000;
    margin-bottom: 10px;
  }
  .card-box .box .boxie p {
    font-weight: 300;
    font-size: 14px;
    margin-bottom: 20px;
    color: #787878;
  }
  .card-box .box .boxie a {
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
  .card-box .box .boxie:nth-child(2) img {
    width: 40% !important;
    margin-top: 40px;
  }
}
@media (max-width: 992px) {
  .card-box .box {
    width: 80%;
  }
  .card-box .box .boxie:nth-child(2) img {
    width: 50% !important;
    margin-top: 40px;
  }
}
@media (max-width: 600px) {
  .card-box .box .boxie:nth-child(1) {
    grid-column: span 6 !important;
    text-align: center;
    grid-row: 2 / 2;
    margin: 0;
  }
  .card-box .box .boxie:nth-child(2) {
    grid-column: span 6 !important;
    text-align: center;
    grid-row: 1 / 2;
    margin: 0 !important;
    margin-bottom: 20px !important;
  }
  .card-box .box .boxie:nth-child(2) img {
    width: 45% !important;
    text-align: center;
  }
  .card-box .box .boxie:nth-child(2) img {
    margin-top: 0px;
  }
}
@media (max-width: 500px) {
  .card-box .box .boxie:nth-child(2) img {
    width: 60% !important;
    text-align: center;
  }
}
</style>
