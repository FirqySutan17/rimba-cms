<template>
  <div class="wrapper-blog">
    <div class="container">
      <div class="title-wrap">
        <h2 style="color: #052e40">Blog</h2>
        <div class="circle-title-blog"></div>
        <p style="color: #052e40">Stay updated with what's up around</p>
      </div>

      <div class="wrapper-content-blog">
        <div class="box">
          <img src="@/assets/images/blog-1.png" alt="" />
          <div class="b-content">
            <p>Web Development</p>
            <h5>Membuat Website Dengan mudah Menggunakan Wordpress</h5>
          </div>
        </div>

        <div class="box">
          <img src="@/assets/images/blog-2.png" alt="" />
          <div class="b-content">
            <p>Web Development</p>
            <h5>Perbedaan SEO dan SEM Mana yg lebih baik ?</h5>
          </div>
        </div>

        <div class="box">
          <img src="@/assets/images/blog-3.png" alt="" />
          <div class="b-content">
            <p>Web Development</p>
            <h5>Bagaimana cara kerja agar lebih produktif jika WFH ?</h5>
          </div>
        </div>
      </div>

      <div class="wrapper-btn">
        <router-link to="/blog">View All</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogComp",
  props: {
    msg: String,
  },
};
</script>

<style>
.wrapper-blog {
  padding: 0px 0px 70px 0px;
}
.wrapper-content-blog {
  display: grid;
  width: 100%;
  column-gap: 20px;
  grid-template-columns: repeat(6, 1fr);
}
.wrapper-content-blog .box {
  grid-column: span 2;
  margin: 0px 30px;
  border-radius: 20px;
  box-shadow: 5px 10px 10px rgba(123, 123, 123, 0.1);
}
.wrapper-content-blog .box img {
  width: 100%;
}
.wrapper-content-blog .box .b-content {
  padding: 20px;
}
.wrapper-content-blog .box .b-content p {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-align: left;
  color: #aaaaaa;
  margin-bottom: 10px;
}
.wrapper-content-blog .box .b-content h5 {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  /* or 24px */
  text-align: left;
  display: flex;
  align-items: center;

  color: #363636;
}
.wrapper-btn {
  margin: 80px 0px 0px 0px;
}
.wrapper-btn a {
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
  transition: all 0.5s ease;
}
.wrapper-btn a:hover {
  border: 1px solid #9fbf5b;
  background: #9fbf5b;
  color: #fff;
  transition: all 0.5s ease;
}
@media (max-width: 1600px) {
  .title-wrap .circle-title-blog {
    left: 45.7%;
  }
}
@media (max-width: 1440px) {
  .title-wrap .circle-title-blog {
    left: 45.5%;
  }
  .wrapper-btn {
    margin: 70px 0px 0px 0px;
  }
  .wrapper-content-blog .box {
    margin: 0px 10px !important;
  }
}
@media (max-width: 1370px) {
  .title-wrap .circle-title-blog {
    left: 45.5%;
  }
  .wrapper-content-blog {
    margin-top: 70px;
  }
}
@media (max-width: 1285px) {
  .title-wrap .circle-title-blog {
    left: 44.9%;
  }
  .wrapper-blog {
    padding: 0px 40px 70px 40px;
  }
}
@media (max-width: 1200px) {
  .title-wrap .circle-title-tech {
    left: 39.4%;
  }
  .title-wrap .circle-title-blog {
    left: 44.5%;
  }
}
@media (max-width: 1024px) {
  .title-wrap .circle-title-blog {
    left: 44%;
  }
  .wrapper-blog {
    padding: 0px 20px 70px 20px;
  }
  .wrapper-content-blog .box {
    margin: 0px 5px !important;
  }
}
@media (max-width: 992px) {
  .title-wrap .circle-title-blog {
    left: 43.2%;
  }
  .wrapper-content-blog {
    column-gap: 0px;
  }
  .wrapper-content-blog .box .b-content h5 {
    font-size: 14px;
  }
}
@media (max-width: 820px) {
  .title-wrap .circle-title-blog {
    left: 42.2%;
  }
}
@media (max-width: 768px) {
  .title-wrap .circle-title-blog {
    left: 42%;
  }
  .wrapper-blog {
    padding: 0px 10px 70px 10px;
  }
}
@media (max-width: 600px) {
  .title-wrap .circle-title-blog {
    left: 38.5%;
  }
  .wrapper-content-blog .box {
    grid-column: span 6;
    margin: 0px 50px 30px 50px !important;
  }
  .wrapper-btn {
    margin: 30px 0px 0px 0px;
  }
}
@media (max-width: 500px) {
  .title-wrap .circle-title-blog {
    left: 34.5%;
  }
  .wrapper-content-blog .box {
    margin: 0px 10px 30px 10px !important;
  }
  .wrapper-content-blog .box .b-content {
    padding: 20px 20px 30px 20px;
  }
}
@media (max-width: 380px) {
  .title-wrap .circle-title-blog {
    left: 33%;
  }
}
@media (max-width: 285px) {
  .title-wrap .circle-title-blog {
    left: 31.5% !important;
    top: 6%;
    width: 40px;
    height: 40px;
  }
}
</style>
