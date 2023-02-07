<template>
  <div class="wrapper-footer">
    <div class="container">
      <div class="boxie-footer">
        <div class="box">
          <img src="@/assets/images/logo-rimba-white.png" alt="" />
          <p>
            Waspada! Ini Pentingnya Security Password untuk Keamanan Data Kamu
            <br />
            <br />
            Cara Meningkatkan Kinerja untuk Menjadi Pemenang di New Normal
          </p>
        </div>
        <div class="box">
          <h3>Helpful Links</h3>
          <div class="a-div">
            <router-link to="/">
              <i class="bx bxs-chevron-right"></i> My Rimba
            </router-link>
            <!-- <a href="#"><i class="bx bxs-chevron-right"></i> My Rimba</a> -->
          </div>

          <div class="a-div">
            <router-link to="/service">
              <i class="bx bxs-chevron-right"></i> Ecosystem
            </router-link>
          </div>

          <div class="a-div">
            <router-link to="/about">
              <i class="bx bxs-chevron-right"></i> Cave
            </router-link>
          </div>

          <div class="a-div">
            <router-link to="/portfolio">
              <i class="bx bxs-chevron-right"></i> Cultivation
            </router-link>
          </div>

          <div class="a-div">
            <router-link to="/events">
              <i class="bx bxs-chevron-right"></i> Survival
            </router-link>
          </div>

          <div class="a-div">
            <router-link to="/career">
              <i class="bx bxs-chevron-right"></i> Hunt
            </router-link>
          </div>

          <div class="a-div">
            <router-link to="/blog">
              <i class="bx bxs-chevron-right"></i> Hut
            </router-link>
          </div>
        </div>
        <div class="box">
          <h3>Latest Product</h3>
          <div class="a-div">
            <a href="#"><i class="bx bxs-chevron-right"></i> Oaktree</a>
          </div>

          <div class="a-div">
            <a href="#"><i class="bx bxs-chevron-right"></i> Bambootree</a>
          </div>

          <div class="a-div">
            <a href="#"><i class="bx bxs-chevron-right"></i> Mangotree</a>
          </div>

          <div class="a-div">
            <a href="#"><i class="bx bxs-chevron-right"></i> Pinetree</a>
          </div>

          <div class="a-div">
            <a href="#"><i class="bx bxs-chevron-right"></i> Bonsaitree</a>
          </div>
        </div>
        <div class="box">
          <h3>Contact Us</h3>
          <p>
            One Pacific Place Level 11, SCBD Jl. Jenderal Sudirman Kav. 52-53,
            Senayan, Kebayoran Baru Jakarta Selatan DKI Jakarta 12190
          </p>
          <span>info@rimbahouse.com</span>
          <br />
          <span>0821-5623-9826</span>

          <div class="socmed">
            <a href="https://www.facebook.com/Rimbananta" target="_blank"><i class="bx bxl-facebook"></i></a>
            <a href="https://www.instagram.com/rimba_house/" target="_blank"><i class="bx bxl-instagram"></i></a>
            <a href="https://www.linkedin.com/company/rimba-ananta-vikasa-indonesia/mycompany/" target="_blank"><i class="bx bxl-twitter"></i></a>
            <a href="https://twitter.com/Rimbahouse" target="_blank"><i class="bx bxl-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>&copy; Rimba House. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComp",
  props: {
    msg: String,
  },
  
};
</script>

<style>
.wrapper-footer {
  background: #052e40;
}
.boxie-footer {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(10, 1fr);
  column-gap: 150px;
  padding: 70px 0px;
}
.boxie-footer .box:nth-child(1) {
  grid-column: span 3;
  text-align: left;
}
.boxie-footer .box:nth-child(1) img {
  text-align: left;
  margin-bottom: 30px;
}
.boxie-footer .box:nth-child(1) p {
  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  /* or 18px */

  color: #ffffff;
}
.boxie-footer .box:nth-child(2) {
  grid-column: span 2;
  text-align: left;
  display: block;
}
.boxie-footer .box:nth-child(3) {
  grid-column: span 2;
  text-align: left;
  display: block;
}
.boxie-footer .box:nth-child(4) {
  grid-column: span 3;
  text-align: left;
  display: block;
}
.boxie-footer .box:nth-child(4) p {
  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #ffffff !important;
  margin-bottom: 25px;
}
.boxie-footer .box:nth-child(4) span {
  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  width: 100%;
  color: #ffffff;
}
.boxie-footer .box h3 {
  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
  margin-bottom: 20px;
}
.boxie-footer .box a {
  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 250%;
  text-decoration: none;
  color: #ffffff;
  width: 100%;
  transition: all 0.5s ease;
}
.boxie-footer .box a:hover {
  color: #ffa800;
  transition: all 0.5s ease;
}
.a-div {
  margin-bottom: 10px;
}
.boxie-footer .box a i {
  display: inline-block;
  vertical-align: middle;
  font-size: 22px;
  margin-right: 10px;
  margin-top: 0px;
}
.copyright {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 100%;
  padding: 20px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
}
.copyright p {
  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  /* identical to box height, or 21px */
  color: #ffffff;
  width: 100%;
}
.socmed {
  margin-top: 30px;
}
.socmed a i {
  background: #fff;
  color: #052e40;
  box-shadow: 0px 3px 10px rgba(210, 210, 210, 0.81);
  margin-right: 10px;
  border-radius: 5px;
  padding: 2px;
}
.flickity-page-dots {
  bottom: -160px !important;
}
.carousel-cell img {
  margin: 0 50px;
}
@media (max-width: 1440px) {
  .boxie-footer {
    column-gap: 100px !important;
  }
}
@media (max-width: 1285px) {
  .boxie-footer {
    padding: 70px 40px;
  }
}
@media (max-width: 1200px) {
  .boxie-footer {
    padding: 70px 50px;
  }
}
@media (max-width: 1024px) {
  .boxie-footer {
    padding: 70px 30px;
    -moz-column-gap: 90px !important;
    column-gap: 90px !important;
  }
}
@media (max-width: 992px) {
  .boxie-footer {
    -moz-column-gap: 00px !important;
    column-gap: 0px !important;
  }
}
@media (max-width: 768px) {
  .boxie-footer .box:nth-child(1) {
    grid-column: span 5;
    text-align: left;
    margin-right: 50px;
  }
  .boxie-footer .box:nth-child(2) {
    grid-column: span 3;
    text-align: left;
    display: block;
  }
  .boxie-footer .box:nth-child(3) {
    grid-column: span 2;
    text-align: left;
    display: block;
  }
  .boxie-footer .box:nth-child(4) {
    margin-top: 40px;
  }
}
@media (max-width: 600px) {
  .boxie-footer .box:nth-child(1) {
    grid-column: span 6;
  }
  .boxie-footer .box:nth-child(2) {
    grid-column: span 4;
  }
  .boxie-footer .box:nth-child(3) {
    grid-column: span 5;
    margin-top: 40px;
  }
  .boxie-footer .box:nth-child(4) {
    grid-column: span 5;
  }
}
@media (max-width: 500px) {
  .boxie-footer .box:nth-child(1) {
    grid-column: span 10;
    margin-bottom: 40px;
    text-align: center;
    margin-right: 0px;
  }
  .boxie-footer .box:nth-child(2) {
    grid-column: span 10;
    text-align: center;
  }
  .boxie-footer .box a i {
    display: none;
  }
  .boxie-footer .box:nth-child(3) {
    grid-column: span 10;
    text-align: center;
  }
  .boxie-footer .box:nth-child(4) {
    grid-column: span 10;
    text-align: center;
  }
  .boxie-footer {
    padding: 70px 30px 50px 30px;
  }
}

@media (max-width: 285px) {
  .boxie-footer {
    padding: 70px 10px 50px 10px;
  }
}
</style>
