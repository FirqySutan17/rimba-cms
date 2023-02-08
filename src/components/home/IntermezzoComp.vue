<template>
  <div class="intermezzo">
    <div class="container">
      <div class="wrapper-inter">
        <div class="box">
          <img src="@/assets/images/inter-pc.png" alt="" />
        </div>
        <div class="box">
          <h3>{{ bannerData.name }}</h3>
          <div v-html="bannerData.description"></div>
        </div>
        <div class="box">
          <a :href="bannerData.link" class="btn-ads" :style="{backgroundColor: bannerData.color}">Getting Started!</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getContent } from '@/api/rimba';
export default {
  name: "IntermezzoComp",
  props: {
    msg: String,
  },
  data() {
    return {
      bannerData: {}
    }
  },
  mounted() {
    this.refreshBanner();
  },
  methods: {
    async refreshBanner(){
      const getResponse = await getContent("product-promotion");
      if(getResponse.status == 200){
        this.bannerData = getResponse.data.data[0];
      }else{
        console.log(getResponse);
      }
    }
  }
};
</script>

<style>
.intermezzo {
  height: 50vh;
  background: url("@/assets/images/inter-bg.png"), #f6c23e;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.wrapper-inter {
  display: grid;
  width: 100%;
  column-gap: 20px;
  grid-template-columns: repeat(8, 1fr);
  padding: 20px;
}
.wrapper-inter .box:nth-child(1) {
  grid-column: span 3;
  width: 100%;
}
.wrapper-inter .box:nth-child(1) img {
  width: 100%;
}
.wrapper-inter .box:nth-child(2) {
  grid-column: span 3;
  text-align: left;
  margin: auto 0;
}
.wrapper-inter .box:nth-child(2) h3 {
  font-weight: 800;
  font-size: 36px;
  line-height: 130%;
  color: #fff;
  letter-spacing: 0.005em;
}
.wrapper-inter .box:nth-child(2) p {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 208%;
  letter-spacing: 0.01em;
  color: #ffffff;
}
.wrapper-inter .box:nth-child(3) {
  grid-column: span 2;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper-inter .box:nth-child(3) a {
  background: #ffffff;
  border: 1px solid #ffffff;
  box-shadow: 10px 10px 40px rgba(164, 164, 164, 0.25);
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 19px;
  gap: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
  color: #13443d;
  text-decoration: none;
  width: 50%;
  transition: all 0.5s ease;
}
.wrapper-inter .box:nth-child(3) a:hover {
  background: transparent;
  border: 1px solid #fff;
  transition: all 0.5s ease;
  color: #fff;
}
@media (max-width: 1440px) {
  .wrapper-inter .box:nth-child(3) a {
    padding: 18px 20px;
    width: 60%;
  }
}
@media (max-width: 1285px) {
  .wrapper-inter .box:nth-child(3) a {
    width: 65%;
  }
}
@media (max-width: 1024px) {
  .wrapper-inter .box:nth-child(3) a {
    width: 80%;
  }
  .wrapper-inter .box:nth-child(2) h3 {
    font-size: 28px;
  }
}

@media (max-width: 992px) {
  .intermezzo {
    height: auto;
  }
  .wrapper-inter .box:nth-child(3) a {
    width: 100%;
  }
}
@media (max-width: 600px) {
  .wrapper-inter .box:nth-child(1) {
    grid-column: span 8;
  }
  .wrapper-inter .box:nth-child(2) {
    grid-column: span 8;
    text-align: center;
    margin-bottom: 20px;
  }
  .wrapper-inter .box:nth-child(3) {
    grid-column: span 8;
  }
  .wrapper-inter .box:nth-child(1) img {
    width: 60%;
  }
  .intermezzo {
    height: auto;
    padding: 30px 0px 50px 0px;
  }
  .wrapper-inter .box:nth-child(3) a {
    width: 45%;
  }
}
@media (max-width: 395px) {
  .wrapper-inter .box:nth-child(3) a {
    width: 60%;
  }
}
@media (max-width: 285px) {
  .wrapper-inter .box:nth-child(1) img {
    width: 100%;
  }
  .wrapper-inter .box:nth-child(3) a {
    width: 80%;
  }
}
</style>
