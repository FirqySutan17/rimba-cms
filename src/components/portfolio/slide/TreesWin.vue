<template>
  <section class="porto-window">
    <div class="porto-content" v-for="porto in data" :key="porto.id">
      <img
        class="porto-img"
        :src="media + porto.image_cover"
        :alt="porto.alt_text_cover"
      />
      <div class="title-content">
        <div class="boxie">
          <h2 class="main-title">{{ porto.name }}</h2>
          <span class="sub-title">Type: {{ porto.type.name }}</span>
        </div>
        <div class="boxie">
          <router-link
            :to="{ name: 'portfolio-detail', params: { slug: porto.slug } }"
            class="btn-more"
          >
            See Project Details
          </router-link>
        </div>
      </div>
      <div class="desc-porto" v-html="porto.description"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TreesWin",
  props: {
    msg: String,
    data: Array,
  },
  data() {
    return {
      media: process.env.VUE_APP_MEDIA_URL,
    };
  },
};
</script>

<style>
.porto-content {
  width: 100%;
  margin-bottom: 40px;
}
.porto-content:nth-last-child(1) {
  margin-bottom: 0px;
}
.porto-img {
  width: 100%;
  height: 250px;
  object-fit: contain;
}
.title-content {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  column-gap: 20px;
  padding: 20px 15px;
}
.title-content .boxie {
  grid-column: span 3;
  margin: auto;
}
.title-content .boxie h2 {
  font-weight: 700;
  font-size: 18px;
  color: #626262;
  text-align: left;
}
.title-content .boxie span {
  font-weight: 400;
  font-size: 14px;
  color: #8e8e8e;
  text-align: left;
  float: left;
}
.title-content .boxie a {
  background: #21918a;
  border: 1px solid #21918a;
  border-radius: 8px;
  padding: 10px 20px;
  font-weight: 400;
  font-size: 16px;
  align-items: center;
  text-align: right;
  color: #ffffff;
  text-decoration: none;
  float: right;
  transition: all 0.5s ease;
}
.title-content .boxie a:hover {
  color: #21918a;
  background: transparent;
  transition: all 0.5s ease;
}
.porto-content .desc-porto {
  font-weight: 400;
  font-size: 16px;
  color: #8e8e8e;
  text-align: justify;
  padding: 0px 15px;
}
@media (max-width: 1280px) {
  .box-porto {
    padding: 0px 40px;
  }
}
@media (max-width: 1200px) {
  .title-content {
    padding: 10px 5px;
    grid-template-columns: repeat(7, 1fr);
  }
  .title-content .boxie a {
    font-size: 14px;
  }
  .porto-content p {
    padding: 0px 5px;
  }
  .title-content .boxie:nth-child(1) {
    grid-column: span 4;
  }
  .title-content .boxie:nth-child(2) {
    grid-column: span 3;
  }
  .porto-img {
    height: auto;
  }
}
@media (max-width: 992px) {
  .boxie {
    grid-column: span 6 !important;
  }
  .boxie:nth-child(1) {
    margin-bottom: 20px;
  }
  .box-porto {
    padding: 0px 170px;
  }
  .title-content .boxie:nth-child(1) {
    grid-column: span 4 !important;
    margin: auto;
  }
  .title-content .boxie:nth-child(2) {
    grid-column: span 3 !important;
  }
}
@media (max-width: 770px) {
  .box-porto {
    padding: 0px 115px;
  }
}
@media (max-width: 600px) {
  .box-porto {
    padding: 0px 35px;
  }
  .title-content {
    padding: 10px 5px;
    grid-template-columns: repeat(6, 1fr);
  }
  .title-content .boxie:nth-child(1) {
    grid-column: span 6 !important;
    margin: auto;
    margin-bottom: 20px;
    text-align: center;
  }
  .title-content .boxie:nth-child(2) {
    grid-column: span 6 !important;
  }
  .title-content .boxie a {
    float: none;
  }
  .porto-content p {
    margin-top: 10px;
  }
  .title-content .boxie h2 {
    text-align: center;
  }
  .title-content .boxie span {
    font-weight: 400;
    font-size: 14px;
    color: #8e8e8e;
    text-align: center;
    float: none;
  }
}
@media (max-width: 500px) {
  .box-porto {
    padding: 0px 10px;
  }
}
@media (max-width: 300px) {
  .porto-content p {
    font-size: 14px;
  }
  ul.list-porto li {
    font-size: 18px !important;
  }
}
</style>
