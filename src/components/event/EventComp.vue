<template>
  <div class="wrapper-events">
    <div class="container">
      <div class="head-box">
        <img src="@/assets/images/cloud-1.png" alt="" class="cloud-1" />
        <img src="@/assets/images/cloud-2.png" alt="" class="cloud-2" />
        <img src="@/assets/images/cloud-3.png" alt="" class="cloud-3" />
        <img src="@/assets/images/pattern-1.png" alt="" class="pattern-1" />
        <img src="@/assets/images/pattern-2.png" alt="" class="pattern-2" />

        <div class="text-box">
          <h2>Events</h2>
          <p class="service-sub">
            We genuinely love other activities besides work
          </p>
        </div>
      </div>

      <div class="body-event">
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
                  >Choose year</label
                >
              </li>
              <li>
                <label
                  class="select-box__option"
                  for="1"
                  aria-hidden="aria-hidden"
                  >2020</label
                >
              </li>
              <li>
                <label
                  class="select-box__option"
                  for="2"
                  aria-hidden="aria-hidden"
                  >2021</label
                >
              </li>
              <li>
                <label
                  class="select-box__option"
                  for="3"
                  aria-hidden="aria-hidden"
                  >2022</label
                >
              </li>
              <li>
                <label
                  class="select-box__option"
                  for="4"
                  aria-hidden="aria-hidden"
                  >2023</label
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="event-content">
          <div class="boxie">
            <div class="stack-img">
              <img src="@/assets/images/event/img-1.png" alt="" />
              <img src="@/assets/images/event/img-2.png" alt="" />
              <img src="@/assets/images/event/img-3.png" alt="" />
            </div>
            <div class="stack-content">
              <h2>Agustusan</h2>
              <p>Aug 17, 2022</p>
              <button class="see-activity" @click="showMultiple">
                See activity
              </button>
              <vue-easy-lightbox
                escDisabled
                moveDisabled
                :visible="visible"
                :imgs="imgs"
                :index="index"
                @hide="handleHide"
              ></vue-easy-lightbox>
            </div>
          </div>

          <div class="boxie">
            <div class="stack-img">
              <img src="@/assets/images/event/img-1.png" alt="" />
              <img src="@/assets/images/event/img-2.png" alt="" />
              <img src="@/assets/images/event/img-3.png" alt="" />
            </div>
            <div class="stack-content">
              <h2>RIMBA Donation</h2>
              <p>Jul 17, 2022</p>
              <a href="#">See activity</a>
            </div>
          </div>

          <div class="boxie">
            <div class="stack-img">
              <img src="@/assets/images/event/img-1.png" alt="" />
              <img src="@/assets/images/event/img-2.png" alt="" />
              <img src="@/assets/images/event/img-3.png" alt="" />
            </div>
            <div class="stack-content">
              <h2>RIMBA Camp</h2>
              <p>Apr 17, 2022</p>
              <a href="#">See activity</a>
            </div>
          </div>

          <div class="boxie">
            <div class="stack-img">
              <img src="@/assets/images/event/img-1.png" alt="" />
              <img src="@/assets/images/event/img-2.png" alt="" />
              <img src="@/assets/images/event/img-3.png" alt="" />
            </div>
            <div class="stack-content">
              <h2>Outbound</h2>
              <p>Aug 17, 2022</p>
              <a href="#">See activity</a>
            </div>
          </div>

          <div class="boxie">
            <div class="stack-img">
              <img src="@/assets/images/event/img-1.png" alt="" />
              <img src="@/assets/images/event/img-2.png" alt="" />
              <img src="@/assets/images/event/img-3.png" alt="" />
            </div>
            <div class="stack-content">
              <h2>New Year Party</h2>
              <p>Jul 17, 2022</p>
              <a href="#">See activity</a>
            </div>
          </div>

          <div class="boxie">
            <div class="stack-img">
              <img src="@/assets/images/event/img-1.png" alt="" />
              <img src="@/assets/images/event/img-2.png" alt="" />
              <img src="@/assets/images/event/img-3.png" alt="" />
            </div>
            <div class="stack-content">
              <h2>Annual Evaluation</h2>
              <p>Dec 17, 2022</p>
              <a href="#">See activity</a>
            </div>
          </div>
        </div>

        <div class="page-box">
          <ul class="pagination" role="menubar" aria-label="Pagination">
            <!-- <li>
              <a href="">
                <span style="transform: rotate(180deg)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M0.969947 1.28097C0.900215 1.21124 0.844901 1.12846 0.807163 1.03735C0.769424 0.946237 0.75 0.848587 0.75 0.749971C0.75 0.651355 0.769424 0.553705 0.807163 0.462596C0.844901 0.371487 0.900215 0.288703 0.969947 0.218971C1.03968 0.149239 1.12246 0.0939246 1.21357 0.056186C1.30468 0.0184473 1.40233 -0.000976563 1.50095 -0.000976562C1.59956 -0.000976562 1.69721 0.0184473 1.78832 0.056186C1.87943 0.0939246 1.96222 0.149239 2.03195 0.218971L7.28195 5.46897C7.35179 5.53864 7.40721 5.6214 7.44502 5.71252C7.48283 5.80364 7.50229 5.90132 7.50229 5.99997C7.50229 6.09862 7.48283 6.1963 7.44502 6.28742C7.40721 6.37854 7.35179 6.4613 7.28195 6.53097L2.03195 11.781C1.96222 11.8507 1.87943 11.906 1.78832 11.9438C1.69721 11.9815 1.59956 12.0009 1.50095 12.0009C1.40233 12.0009 1.30468 11.9815 1.21357 11.9438C1.12246 11.906 1.03968 11.8507 0.969947 11.781C0.900215 11.7112 0.844901 11.6285 0.807163 11.5373C0.769424 11.4462 0.75 11.3486 0.75 11.25C0.75 11.1514 0.769424 11.0537 0.807163 10.9626C0.844901 10.8715 0.900215 10.7887 0.969947 10.719L5.69045 5.99997L0.969947 1.28097ZM12.0009 0.749971C12.0009 0.551058 11.9219 0.360293 11.7813 0.219641C11.6406 0.0789886 11.4499 -2.92063e-05 11.2509 -2.92063e-05C11.052 -2.92063e-05 10.8613 0.0789886 10.7206 0.219641C10.58 0.360293 10.5009 0.551058 10.5009 0.749971V11.25C10.5009 11.4489 10.58 11.6396 10.7206 11.7803C10.8613 11.921 11.052 12 11.2509 12C11.4499 12 11.6406 11.921 11.7813 11.7803C11.9219 11.6396 12.0009 11.4489 12.0009 11.25V0.749971Z" fill="white"/>
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a href="">
                <span style="transform: rotate(180deg)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                    <path d="M0.99095 0.624367C0.892825 0.724827 0.837891 0.859686 0.837891 1.00012C0.837891 1.14055 0.892825 1.27541 0.99095 1.37587L6.47308 6.99974L0.99095 12.6225C0.892825 12.723 0.837891 12.8578 0.837891 12.9982C0.837891 13.1387 0.892825 13.2735 0.99095 13.374C1.03865 13.423 1.09567 13.4619 1.15866 13.4885C1.22165 13.5151 1.28933 13.5288 1.3577 13.5288C1.42607 13.5288 1.49375 13.5151 1.55674 13.4885C1.61973 13.4619 1.67675 13.423 1.72445 13.374L7.5542 7.39237C7.65659 7.28732 7.7139 7.14643 7.7139 6.99974C7.7139 6.85305 7.65659 6.71216 7.5542 6.60712L1.72445 0.625492C1.67675 0.576506 1.61973 0.537571 1.55674 0.510985C1.49375 0.4844 1.42607 0.470703 1.3577 0.470703C1.28933 0.470703 1.22165 0.4844 1.15866 0.510985C1.09567 0.537571 1.03865 0.576506 0.99095 0.625492V0.624367Z" fill="white"/>
                  </svg>
                </span>
              </a>
            </li> -->
            <li><a href="">1</a></li>
            <li><a href="">2</a></li>
            <li><a href="">3</a></li>
            <li class="current"><a href="">4</a></li>
            <li><a href="">5</a></li>
            <li style="background: lightseagreen">
              <a href="">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                  >
                    <path
                      d="M0.99095 0.624367C0.892825 0.724827 0.837891 0.859686 0.837891 1.00012C0.837891 1.14055 0.892825 1.27541 0.99095 1.37587L6.47308 6.99974L0.99095 12.6225C0.892825 12.723 0.837891 12.8578 0.837891 12.9982C0.837891 13.1387 0.892825 13.2735 0.99095 13.374C1.03865 13.423 1.09567 13.4619 1.15866 13.4885C1.22165 13.5151 1.28933 13.5288 1.3577 13.5288C1.42607 13.5288 1.49375 13.5151 1.55674 13.4885C1.61973 13.4619 1.67675 13.423 1.72445 13.374L7.5542 7.39237C7.65659 7.28732 7.7139 7.14643 7.7139 6.99974C7.7139 6.85305 7.65659 6.71216 7.5542 6.60712L1.72445 0.625492C1.67675 0.576506 1.61973 0.537571 1.55674 0.510985C1.49375 0.4844 1.42607 0.470703 1.3577 0.470703C1.28933 0.470703 1.22165 0.4844 1.15866 0.510985C1.09567 0.537571 1.03865 0.576506 0.99095 0.625492V0.624367Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </a>
            </li>
            <li style="background: lightseagreen">
              <a href="">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M0.969947 1.28097C0.900215 1.21124 0.844901 1.12846 0.807163 1.03735C0.769424 0.946237 0.75 0.848587 0.75 0.749971C0.75 0.651355 0.769424 0.553705 0.807163 0.462596C0.844901 0.371487 0.900215 0.288703 0.969947 0.218971C1.03968 0.149239 1.12246 0.0939246 1.21357 0.056186C1.30468 0.0184473 1.40233 -0.000976563 1.50095 -0.000976562C1.59956 -0.000976562 1.69721 0.0184473 1.78832 0.056186C1.87943 0.0939246 1.96222 0.149239 2.03195 0.218971L7.28195 5.46897C7.35179 5.53864 7.40721 5.6214 7.44502 5.71252C7.48283 5.80364 7.50229 5.90132 7.50229 5.99997C7.50229 6.09862 7.48283 6.1963 7.44502 6.28742C7.40721 6.37854 7.35179 6.4613 7.28195 6.53097L2.03195 11.781C1.96222 11.8507 1.87943 11.906 1.78832 11.9438C1.69721 11.9815 1.59956 12.0009 1.50095 12.0009C1.40233 12.0009 1.30468 11.9815 1.21357 11.9438C1.12246 11.906 1.03968 11.8507 0.969947 11.781C0.900215 11.7112 0.844901 11.6285 0.807163 11.5373C0.769424 11.4462 0.75 11.3486 0.75 11.25C0.75 11.1514 0.769424 11.0537 0.807163 10.9626C0.844901 10.8715 0.900215 10.7887 0.969947 10.719L5.69045 5.99997L0.969947 1.28097ZM12.0009 0.749971C12.0009 0.551058 11.9219 0.360293 11.7813 0.219641C11.6406 0.0789886 11.4499 -2.92063e-05 11.2509 -2.92063e-05C11.052 -2.92063e-05 10.8613 0.0789886 10.7206 0.219641C10.58 0.360293 10.5009 0.551058 10.5009 0.749971V11.25C10.5009 11.4489 10.58 11.6396 10.7206 11.7803C10.8613 11.921 11.052 12 11.2509 12C11.4499 12 11.6406 11.921 11.7813 11.7803C11.9219 11.6396 12.0009 11.4489 12.0009 11.25V0.749971Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </a>
            </li>
          </ul>
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
  data() {
    return {
      imgs: "", // Img Url , string or Array of string
      visible: false,
      index: 0, // default: 0
    };
  },
  methods: {
    showMultiple() {
      this.imgs = [
        "https://rimba.lifetime-studios.com/images/event/img-1.png",
        "https://rimba.lifetime-studios.com/images/event/img-2.png",
        "https://rimba.lifetime-studios.com/images/event/img-3.png",
      ];

      this.index = 0; // index of imgList
      this.show();
    },
    show() {
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },
  name: "EventComp",
  props: {
    msg: String,
  },
};
</script>

<style>
.wrapper-events {
  background: #fff;
  padding: 140px 0px 70px 0px;
}
.filter-year {
  position: relative;
  z-index: 15;
}
.body-event {
  margin: 70px 0px;
}
.event-content {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 20px;
  height: 100%;
}
.event-content .boxie {
  grid-column: span 2;
  padding: 40px;
  background: #f3f3f3;
  border-radius: 10px;
  margin-bottom: 40px;
  height: 650px;
}
.stack-img {
  position: relative;
  width: 100%;
  display: flex;
  direction: rtl;
}
.stack-img img {
  position: absolute;
  top: 0;
  left: 0%;
  object-fit: cover;
  border-radius: 10px;
  width: 80%;
  height: 100%;
}
.stack-img img:nth-child(1) {
  right: 0%;
}
.stack-img img:nth-child(2) {
  right: 10%;
}
.stack-img img:nth-child(3) {
  right: 20%;
}
.event-content .boxie .stack-img {
  height: 340px;
}
.event-content .boxie .stack-content {
  height: 40%;
  padding: 60px 0px;
}
.event-content .boxie h2 {
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #21918a;
  text-align: center;
  margin: 10px 0px;
}
.event-content .boxie p {
  font-weight: 500;
  font-size: 16px;
  margin: 20px 0px;
  color: #8e8e8e;
}
.event-content .boxie .see-activity {
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  text-decoration-line: underline;
  font-family: "Poppins", sans-serif;
  color: #21918a;
  background: transparent;
  border: none;
  cursor: pointer;
}
.event-content .boxie a {
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  text-decoration-line: underline;
  color: #21918a;
  transition: all 0.5s ease;
}
.event-content .boxie a:hover {
  color: #ffa800;
  transition: all 0.5s ease;
}
/* Pagination Style */
.page-box {
  padding: 50px 0px 0px 0px;
}
.pagination,
.pagination li a {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.pagination li {
  background-color: #fff;
  list-style: none;
  border-radius: 50px;
  border: 2px solid lightseagreen;
  margin: 0px 5px;
}

.pagination a {
  font-weight: 600;
  text-decoration: none;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-left-width: 0;
  min-width: 44px;
  min-height: 44px;
  color: lightseagreen;
  box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.35);
  border: 1px solid transparent;
}
.pagination span {
  color: #fff;
  text-align: center;
  font-size: 20px;
}
.pagination span i {
  display: inline-block;
  vertical-align: middle;
  margin-top: -2px;
}
.pagination span.first-pagi {
  margin-left: 7px;
}
.pagination span i.first-pagi-icon {
  margin-left: -5px;
}
.pagination li:not([class*="current"]) a:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-top-color: rgba(0, 0, 0, 0.35);
  border-bottom-color: rgba(0, 0, 0, 0.5);
  border: none;
}

.pagination li:not([class*="current"]) a:focus,
.pagination li:not([class*="current"]) a:active {
  border-left-width: 1px;
  border: none;
}

.pagination li:first-of-type a {
  border-left-width: 1px;
  border: none;
}

.pagination li.current {
  background-color: lightseagreen;
  border: 2px solid lightseagreen;
  border-radius: 50px;
}
.pagination li.current a {
  color: #fff;

  cursor: default;
  pointer-events: none;
}

@media only screen and (max-width: 64.063em) {
  .pagination li:nth-of-type(2) a {
    border-left-width: 1px;
  }
}

@media only screen and (max-width: 40.063em) {
  .pagination li.current,
  .pagination li:first-of-type,
  .pagination li:last-of-type,
  .pagination li:nth-of-type(2),
  .pagination li:nth-last-of-type(2) {
    position: initial;
    top: initial;
    left: initial;
  }

  .pagination li:nth-of-type(2) a {
    border-left-width: 0;
  }
}

@media only screen and (max-width: 30.063em) {
  .pagination li:nth-of-type(2) a {
    border-left-width: 1px;
  }
}

@media only screen and (max-width: 15.063em) {
  /* For watches? */

  .pagination li {
    width: 50%;
  }

  .pagination li.current {
    order: 2;
    width: 100%;
    border-left-width: 1px;
  }
}
@media (max-width: 1280px) {
  .event-content {
    padding: 0px 20px;
  }
  .event-content .boxie .stack-img {
    height: 285px;
  }
  .event-content .boxie {
    height: 600px;
  }
}
@media (max-width: 1200px) {
  .event-content .boxie .stack-img {
    height: 255px;
  }
  .event-content .boxie {
    height: 525px;
    grid-column: span 3 !important;
  }
  .event-content .boxie .stack-content {
    padding: 30px 0px;
  }
}
@media (max-width: 600px) {
  .filter-year {
    margin: 20px 70px 50px 70px;
  }
  .event-content .boxie {
    grid-column: span 6 !important;
  }
  .wrapper-events {
    padding: 100px 0px 70px 0px;
  }
  .event-content {
    padding: 0px 10px;
  }
}
@media (max-width: 400px) {
  .filter-year {
    margin: 20px 20px 50px 20px;
  }
  .event-content .boxie {
    padding: 40px 30px;
  }
}
@media (max-width: 300px) {
  .event-content .boxie .stack-img {
    height: 170px;
  }
  .event-content .boxie {
    padding: 40px 20px;
  }
  .event-content .boxie {
    height: 425px;
  }
}
/* End Pagination Style */
</style>
