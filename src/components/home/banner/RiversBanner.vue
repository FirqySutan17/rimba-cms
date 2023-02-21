<template>
  <section class="banner-rivers">
    <div class="desktop">
      <img
        src="@/assets/images/rivers/lake-left.png"
        alt=""
        class="img-cover-left"
        id="hill-left"
      />
      <img
        src="@/assets/images/rivers/lake-right.png"
        alt=""
        class="img-cover-right"
        id="hill-right"
      />

      <div class="circle-river laptop-icon show-icon">
        <img
          src="@/assets/images/rivers/icon-laptop.png"
          alt=""
          id="icon-river-1"
        />
      </div>

      <div class="circle-river cloud-icon show-icon">
        <img
          src="@/assets/images/rivers/icon-cloud.png"
          alt=""
          id="icon-river-2"
        />
      </div>

      <div class="box-content-laptop">
        <div class="box">
          <h2>VPN (Virtual Private Network)</h2>
          <p>
            A feature that allows several places to securely share info. This
            program is frequently used to remotely connect (offline) desktop
            applications and to share files or folders.
          </p>
          <a href="#">See product details</a>
        </div>
        <div class="box">
          <img src="@/assets/images/rivers/icon-laptop.png" alt="" />
        </div>
        <img
          src="@/assets/images/trees/circle-back.png"
          alt=""
          class="circle-back"
        />
      </div>

      <div class="box-content-cloud">
        <div class="box">
          <h2>Cloud Server</h2>
          <p>
            Our cloud is highly dependable, has a lot of bandwidth, and is
            supported by strict security measures.
          </p>
          <a href="#">See product details</a>
        </div>
        <div class="box">
          <img src="@/assets/images/rivers/icon-cloud.png" alt="" />
        </div>
        <img
          src="@/assets/images/trees/circle-back.png"
          alt=""
          class="circle-back"
        />
      </div>
    </div>

    <div class="mobile">
      <div class="card-content">
        <div class="card-box">
          <div class="box">
            <div class="boxie">
              <h3>VPN (Virtual Private Network)</h3>
              <p>
                A feature that allows several places to securely share info.
                This program is frequently used to remotely connect (offline)
                desktop applications and to share files or folders.
              </p>
              <div class="link-visit">
                <a href="#">See product details</a>
                <div class="best-product"></div>
              </div>
            </div>
            <div class="boxie">
              <img src="@/assets/images/rivers/icon-laptop.png" alt="" />
            </div>
          </div>
        </div>

        <div class="card-box">
          <div class="box">
            <div class="boxie">
              <h3>Cloud Server</h3>
              <p>
                Our cloud is highly dependable, has a lot of bandwidth, and is
                supported by strict security measures.
              </p>
              <a href="#">See product details</a>
            </div>
            <div class="boxie">
              <img src="@/assets/images/rivers/icon-cloud.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from "jquery";

export default {
  name: "RiversBanner",
  props: {
    msg: String,
  },
  mounted: function () {
    $(".circle-river").click(function () {
      $(".circle-river").not(this).removeClass("expanded");
      $("#hill-left").removeClass("slide-left");
      $("#hill-right").removeClass("slide-right");
      $(".trees-content").removeClass("move-left");

      $(this).toggleClass("expanded");
      if ($(this).hasClass("expanded")) {
        $("#hill-left").addClass("slide-left");
        $("#hill-right").addClass("slide-right");
        $(".trees-content").addClass("move-left");
        $(".laptop-icon").removeClass("show-icon");
        $(".cloud-icon").removeClass("show-icon");
        $(".laptop-icon").addClass("hide-icon");
        $(".cloud-icon").addClass("hide-icon");
      }
    });
    $(".circle-back").click(function () {
      $(".circle-river").removeClass("expanded");
      $("#hill-left").removeClass("slide-left");
      $("#hill-right").removeClass("slide-right");
      $(".laptop-icon").addClass("show-icon");
      $(".cloud-icon").addClass("show-icon");
      $(".laptop-icon").removeClass("hide-icon");
      $(".cloud-icon").removeClass("hide-icon");
    });
  },
};
</script>

<style>
.banner-rivers {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  background: url(@/assets/images/rivers/bg-rivers.png);
  background-size: cover;
  background-repeat: no-repeat;
}
.circle-river i {
  font-size: 25px;
  display: inline-block;
  vertical-align: middle;
  margin-top: -28px;
  color: #238e73;
  transition: all 0.5s ease;
}
.circle-river img {
  font-size: 25px;
  display: inline-block;
  vertical-align: middle;
  margin-top: -27px;
  color: #238e73;
  transition: all 0.5s ease;
  width: 100%;
}
.circle-river.laptop-icon {
  position: absolute;
  bottom: 19%;
  left: 37%;
  transform: translate(-50%, 0%);
  width: 55px;
  height: 55px;
  background: transparent;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 80px;
  transition: all 0.5s ease;
  cursor: pointer;
  opacity: 1;
}
.circle-river.cloud-icon {
  position: absolute;
  bottom: 33%;
  right: 40%;
  transform: translate(-50%, 0%);
  width: 55px;
  height: 55px;
  background: transparent;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 80px;
  transition: all 0.5s ease;
  cursor: pointer;
  opacity: 1;
}
.circle-river:before,
.circle-river:after {
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

.circle-river:after {
  animation-delay: 0.5s;
}

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

.banner-rivers img.img-cover-left {
  position: absolute;
  bottom: 0;
  right: 0;
  object-fit: cover;
  width: 100%;
  transition: all 0.5s ease;
}

.slide-left {
  right: -100% !important;
  transition: all 0.5s ease;
}

.banner-rivers img.img-cover-right {
  position: absolute;
  bottom: 0;
  left: 0%;
  object-fit: cover;
  width: 100%;
  transition: all 0.5s ease;
}

.slide-right {
  left: -40% !important;
  transition: all 0.5s ease;
}

.box-content-laptop {
  height: auto;
  border-radius: 10px;
  padding: 40px;
  background: #fff;
  position: absolute;
  top: -100%;
  left: 51%;
  transform: translate(-50%, -50%);
  z-index: 99;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  column-gap: 20px;
  width: 42%;
  transition: all 0.7s ease;
}
.box-content-laptop .box:nth-child(1) {
  grid-column: span 5;
  text-align: left;
  margin: auto;
}
.box-content-laptop .box:nth-child(2) {
  grid-column: span 3;
  margin: auto 0;
  position: relative;
}
.box-content-laptop .box h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 20px;
}
.box-content-laptop .box p {
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  color: #787878;
  margin-bottom: 40px;
}
.box-content-laptop .box a {
  background: #e76b8f;
  border: 1px solid #e76b8f;
  box-shadow: 10px 10px 40px rgba(255, 205, 0, 0.2);
  border-radius: 100px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  padding: 14px 40px;
  text-decoration: none;
  transition: all 0.5s ease;
}
.box-content-laptop .box a:hover {
  background: transparent;
  color: #e76b8f;
  transition: all 0.5s ease;
}
.laptop-icon.expanded ~ .box-content-laptop {
  top: 50%;
  left: 51%;
  transform: translate(-50%, -50%);
  transition: all 0.7s ease;
}
.laptop-icon.expanded {
  opacity: 0;
}

.box-content-cloud {
  height: auto;
  border-radius: 10px;
  padding: 40px;
  background: #fff;
  position: absolute;
  top: -100%;
  left: 51%;
  transform: translate(-50%, -50%);
  z-index: 99;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  column-gap: 20px;
  width: 42%;
  transition: all 0.7s ease;
}
.box-content-cloud .box:nth-child(1) {
  grid-column: span 5;
  text-align: left;
  margin: auto;
}
.box-content-cloud .box:nth-child(2) {
  grid-column: span 3;
  margin: auto 0;
  position: relative;
}
.box-content-cloud .box h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 20px;
}
.box-content-cloud .box p {
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  color: #787878;
  margin-bottom: 40px;
}
.box-content-cloud .box a {
  background: #52b8b1;
  border: 1px solid #52b8b1;
  box-shadow: 10px 10px 40px rgba(255, 205, 0, 0.2);
  border-radius: 100px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  padding: 14px 40px;
  text-decoration: none;
  transition: all 0.5s ease;
}
.box-content-cloud .box a:hover {
  background: transparent;
  color: #52b8b1;
  transition: all 0.5s ease;
}
.cloud-icon.expanded ~ .box-content-cloud {
  top: 50%;
  left: 51%;
  transform: translate(-50%, -50%);
  transition: all 0.7s ease;
}
.cloud-icon.expanded {
  opacity: 0;
}
.circle-back {
  position: absolute;
  right: -3%;
  bottom: -10%;
  cursor: pointer;
}
.show-icon {
  opacity: 1;
}

.hide-icon {
  opacity: 0 !important;
}

@media (max-width: 1600px) {
  .box-content-laptop {
    width: 50%;
  }
  .box-content-cloud {
    width: 50%;
  }
}

@media (max-width: 1370px) {
  .box-content-laptop {
    width: 65%;
  }
  .box-content-cloud {
    width: 65%;
  }
  .banner-rivers {
    background: transparent;
  }
}
@media (max-width: 600px) {
  .desktop {
    display: none !important;
  }
  .mobile {
    display: block !important;
  }
  .banner-rivers {
    height: auto;
    background: transparent;
  }
  .card-box {
    display: block;
    position: relative;
    margin-bottom: 80px;
  }
  .card-box:nth-last-child(1) {
    margin-bottom: 0px;
  }
  .card-content {
    padding-top: 40px;
  }

  .card-box .box {
    background: #fff;
    border-radius: 20px;
    padding: 40px 20px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    width: 100%;
    column-gap: 20px;
    margin-top: -20px;
    position: relative;
    z-index: 2;
  }
  .card-box .box .boxie:nth-child(1) {
    grid-column: span 4;
    text-align: left;
  }
  .card-box .box .boxie:nth-child(2) {
    grid-column: span 2;
    margin: auto;
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
  .card-box:nth-child(1) .box .boxie a {
    background: #e76b8f;
    border: 1px solid transparent;
    box-shadow: 10px 10px 40px rgba(255, 205, 0, 0.2);
    border-radius: 100px;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    color: #ffffff;
    text-decoration: none;
    padding: 10px 20px;
    transition: all 0.5s ease;
  }
  .card-box:nth-child(1) .box .boxie a:hover {
    background: transparent;
    color: #e76b8f;
    transition: all 0.5s ease;
  }
  .card-box:nth-child(2) .box .boxie a {
    background: #52b8b1;
    border: 1px solid transparent;
    box-shadow: 10px 10px 40px rgba(255, 205, 0, 0.2);
    border-radius: 100px;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    color: #ffffff;
    text-decoration: none;
    padding: 10px 20px;
    transition: all 0.5s ease;
  }
  .card-box:nth-child(2) .box .boxie a:hover {
    background: transparent;
    color: #52b8b1;
    transition: all 0.5s ease;
  }
}
</style>
