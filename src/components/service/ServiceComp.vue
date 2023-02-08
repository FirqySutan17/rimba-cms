<template>
  <div class="wrapper-service">
    <div class="container">
      <div class="head-box">
        <img src="@/assets/images/cloud-1.png" alt="" class="cloud-1" />
        <img src="@/assets/images/cloud-2.png" alt="" class="cloud-2" />
        <img src="@/assets/images/cloud-3.png" alt="" class="cloud-3" />
        <img src="@/assets/images/pattern-1.png" alt="" class="pattern-1" />
        <img src="@/assets/images/pattern-2.png" alt="" class="pattern-2" />

        <div class="text-box">
          <h2>Service</h2>
          <p class="service-sub">
            We have numerous specialized specialties in dealing with issues
            relating to digital demands
          </p>
        </div>
      </div>

      <div class="body-box-service">
        <div v-for="service in services" :key="service.id" class="box">
          <img :src="media+service.image" :alt="service.alt_text" />
          <h2>{{ service.name }}</h2>
          <div v-html="service.description">

          </div>
        </div>

        <!-- <div class="box">
          <img src="@/assets/images/service/cloud-download.png" alt="" />
          <h2>Cloud</h2>
          <p>We provide cloud storage that is more convenient to utilize.</p>
        </div>

        <div class="box">
          <img src="@/assets/images/service/3d-design.png" alt="" />
          <h2>Web Development</h2>
          <p>
            We will always make what you think real with our professional team
          </p>
        </div>

        <div class="box">
          <img src="@/assets/images/service/3d-travel.png" alt="" />
          <h2>E-Commerce Solution</h2>
          <p>We are really supportive of your company and business.</p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { getContent } from "@/api/rimba";
export default {
  name: "ServiceComp",
  props: {
    msg: String,
  },
  data() {
    return {
      services: [],
      media: process.env.VUE_APP_MEDIA_URL
    }
  },
  mounted() {
    this.refreshService();
  },
  methods: {
    async refreshService() {
      const getResponse = await getContent("service");
      if(getResponse.status == 200){
        this.services = getResponse.data.data;
      }else{
        console.log(getResponse);
      }
    },
  },
};
</script>

<style>
.wrapper-service {
  position: relative;
  background: #fff;
  padding: 140px 0px 70px 0px;
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

.body-box-service {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 90px;
  padding: 70px 20px;
}
.body-box-service .box {
  grid-column: span 3;
  padding: 0px 130px;
  margin-bottom: 50px;
}
.body-box-service .box img {
  width: 55%;
}
.body-box-service .box h2 {
  font-weight: 700;
  font-size: 26px;
  line-height: 39px;
  text-align: center;
  margin: 20px 0px;
  color: #444444;
}
.body-box-service .box p {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;

  /* P4/Neutral500 */

  color: #444444;
}
.service-sub {
  padding: 0px 500px;
}
@media (max-width: 1440px) {
  .service-sub {
    padding: 0px 440px;
  }
  .body-box-service .box {
    padding: 0px 120px;
  }
}
@media (max-width: 1280px) {
  .head-box {
    width: 90%;
  }
  .service-sub {
    padding: 0px 355px;
  }
  .body-box-service .box {
    padding: 0px 107px;
  }
  .box-item {
    margin: auto;
    width: 90% !important;
  }
  .box-item .box h2 {
    font-size: 38px !important;
  }
}
@media (max-width: 1200px) {
  .service-sub {
    padding: 0px 235px;
  }
  .body-box-service .box {
    padding: 0px 45px;
  }
  .box-item {
    width: 90% !important;
  }
  .box-item .box img {
    width: 80%;
  }
  .box-item .box h2 {
    font-size: 32px !important;
  }
  .box-item .box p {
    font-size: 14px !important;
  }
  .box-item .box a {
    font-size: 14px !important;
  }
}
@media (max-width: 992px) {
  .service-sub {
    padding: 0px 195px !important;
  }
  .body-box-service .box {
    padding: 0px 20px !important;
  }
  .box-item {
    padding: 40px 50px !important;
  }
}
@media (max-width: 600px) {
  .service-sub {
    padding: 0px 40px !important;
  }
  .body-box-service .box {
    padding: 0px 70px !important;
    grid-column: span 6;
  }
  .wrapper-service {
    padding: 100px 0px 70px 0px !important;
  }
  .box-item .box {
    grid-column: span 6 !important;
  }
  .head-box {
    width: 100%;
    border-radius: 0px !important;
  }
  .box-item .box:nth-child(2) {
    text-align: center !important;
    margin: auto;
  }
}
@media (max-width: 500px) {
  .head-box .text-box p {
    font-size: 14px !important;
  }
  .service-sub {
    padding: 0px 20px !important;
  }
  .head-box img.cloud-3 {
    position: absolute;
    bottom: 15px !important;
    right: 40px !important;
  }
  .body-box-service {
    column-gap: 0px !important;
    padding: 0px 10px !important;
    margin-top: 70px;
  }
  .body-box-service .box {
    padding: 0px 0px !important;
    grid-column: span 6;
  }
  .box-item {
    width: 95% !important;
    padding: 40px 30px !important;
  }
}
</style>
