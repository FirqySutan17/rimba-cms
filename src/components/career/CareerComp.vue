<template>
  <div class="wrapper-events">
    <div class="container">
      <div class="head-box">
        <img src="@/assets/images/cloud-1.png" alt="" class="cloud-1" />
        <img src="@/assets/images/cloud-2.png" alt="" class="cloud-2" />
        <img src="@/assets/images/cloud-3.png" alt="" class="cloud-3" />
        <img src="@/assets/images/pattern-1.png" alt="" class="pattern-1" />
        <img src="@/assets/images/pattern-2.png" alt="" class="pattern-2" />
        <img src="@/assets/images/explorer.png" alt="" class="explorer" />

        <div class="text-box">
          <h2>Career</h2>
          <p class="service-sub">Find the career you deserve</p>
        </div>
      </div>

      <div class="body-career">
        <div class="filter-search">
          <form class="example">
            <div class="location-box">
              <i class="fa-solid fa-map-location-dot icon-rimba"></i>
              <div class="select-menu">
                <div class="select-btn">
                  <span class="sBtn-text">All location</span>
                  <i class="bx bx-chevron-down"></i>
                </div>

                <ul class="options">
                  <li class="option">
                    <span class="option-text">Github</span>
                  </li>
                  <li class="option">
                    <span class="option-text">Instagram</span>
                  </li>
                  <li class="option">
                    <span class="option-text">Linkedin</span>
                  </li>
                  <li class="option">
                    <span class="option-text">Facebook</span>
                  </li>
                  <li class="option">
                    <span class="option-text">Twitter</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="job-search">
              <i class="fa-solid fa-briefcase icon-rimba"></i>
              <input
                type="text"
                placeholder="Type your dream job"
                name="search"
                autocomplete="off"
              />
            </div>
            <div class="btn-search"><i class="fa fa-search"></i> Search</div>
            <!-- <button type="submit" class="btn-search">
              <i class="fa fa-search"></i> Search
            </button> -->
          </form>
        </div>

        <div class="front-career show-pop">
          <h2>Your adventure is about to start</h2>
          <p>Hunt your dream job at RIMBA!</p>
        </div>

        <div class="job-list hide-pop">
          <div class="job-item">
            <div class="boxie">
              <span class="number-item">1. </span>
            </div>
            <div class="boxie">
              <h2>UI/UX Designer</h2>
              <div class="icon-list">
                <i class="fa-solid fa-hourglass-end icon-rim"></i>
                Full-time
              </div>
              <div class="icon-list">
                <i class="fa-solid fa-map-location-dot icon-rim"></i>
                Jakarta, Indonesia
              </div>
            </div>
            <div class="boxie">
              <router-link to="/career/detail" class="btn-details">
                See details
              </router-link>
            </div>
          </div>
          <div class="job-item">
            <div class="boxie">
              <span class="number-item">2. </span>
            </div>
            <div class="boxie">
              <h2>UI/UX Designer</h2>
              <div class="icon-list">
                <i class="fa-solid fa-hourglass-end icon-rim"></i>
                Full-time
              </div>
              <div class="icon-list">
                <i class="fa-solid fa-map-location-dot icon-rim"></i>
                Jakarta, Indonesia
              </div>
            </div>
            <div class="boxie">
              <router-link to="/career/detail" class="btn-details">
                See details
              </router-link>
            </div>
          </div>

          <div class="job-item">
            <div class="boxie">
              <span class="number-item">3. </span>
            </div>
            <div class="boxie">
              <h2>UI/UX Designer</h2>
              <div class="icon-list">
                <i class="fa-solid fa-hourglass-end icon-rim"></i>
                Full-time
              </div>
              <div class="icon-list">
                <i class="fa-solid fa-map-location-dot icon-rim"></i>
                Jakarta, Indonesia
              </div>
            </div>
            <div class="boxie">
              <router-link to="/career/detail" class="btn-details">
                See details
              </router-link>
            </div>
          </div>

          <div class="job-item">
            <div class="boxie">
              <span class="number-item">4. </span>
            </div>
            <div class="boxie">
              <h2>UI/UX Designer</h2>
              <div class="icon-list">
                <i class="fa-solid fa-hourglass-end icon-rim"></i>
                Full-time
              </div>
              <div class="icon-list">
                <i class="fa-solid fa-map-location-dot icon-rim"></i>
                Jakarta, Indonesia
              </div>
            </div>
            <div class="boxie">
              <router-link to="/career/detail" class="btn-details">
                See details
              </router-link>
            </div>
          </div>

          <div class="job-item">
            <div class="boxie">
              <span class="number-item">5. </span>
            </div>
            <div class="boxie">
              <h2>UI/UX Designer</h2>
              <div class="icon-list">
                <i class="fa-solid fa-hourglass-end icon-rim"></i>
                Full-time
              </div>
              <div class="icon-list">
                <i class="fa-solid fa-map-location-dot icon-rim"></i>
                Jakarta, Indonesia
              </div>
            </div>
            <div class="boxie">
              <router-link to="/career/detail" class="btn-details">
                See details
              </router-link>
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
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "CareerComp",
  props: {
    msg: String,
  },
  mounted: function () {
    const optionMenu = document.querySelector(".select-menu"),
      selectBtn = optionMenu.querySelector(".select-btn"),
      options = optionMenu.querySelectorAll(".option"),
      sBtn_text = optionMenu.querySelector(".sBtn-text");

    selectBtn.addEventListener("click", () =>
      optionMenu.classList.toggle("active")
    );

    options.forEach((option) => {
      option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
      });
    });

    $(".btn-search").click(function () {
      $(".front-career").removeClass("show-pop");
      $(".front-career").addClass("hide-pop");
      $(".job-list").removeClass("hide-pop");
      $(".job-list").addClass("show-pop");
    });
  },
};
</script>

<style>
.show-pop {
  display: block;
}
.hide-pop {
  display: none;
}
.head-box img.explorer {
  position: absolute;
  top: 35%;
  right: 25%;
  width: 7%;
}
.body-career {
  padding: 50px 0px;
}
.filter-search {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.location-box {
  display: flex;
  background: #f8f8f8;
  padding: 5px 0px 5px 15px;
  border-radius: 10px;
  margin-right: 20px;
}
.example {
  display: flex;
}
.job-search {
  display: flex;
  background: #f8f8f8;
  padding: 5px 15px 5px 15px;
  border-radius: 10px;
  margin-right: 20px;
}
.job-search input {
  width: 400px;
  background: transparent;
  border: none;
  padding-left: 10px;
  font-family: "Poppins", sans-serif;
}
.job-search input:focus {
  outline: none;
  background: transparent;
}
.icon-rimba {
  color: #21918a;
  font-size: 24px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  margin-top: 7px;
}
.btn-search {
  padding: 10px 20px;
  background: #dfae00;

  border-radius: 10px;
  border: 1px solid #dfae00;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
}
.btn-search i {
  margin-right: 15px;
}
.btn-search:hover {
  background: transparent;
  color: #dfae00;
  transition: all 0.5s ease;
}
/* Search Style */
.select-menu {
  width: 200px;
}
.select-menu .select-btn {
  display: flex;
  height: 40px;
  background: #f8f8f8;
  padding: 10px;
  font-size: 14px;
  font-weight: 400;
  border-radius: 8px;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
}
.select-btn i {
  font-size: 25px;
  transition: 0.3s;
  color: #8e8e8e;
}
.select-menu.active .select-btn i {
  transform: rotate(-180deg);
}
.select-menu .options {
  position: absolute;
  width: 200px;
  padding: 10px;
  margin-top: 10px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  display: none;
}
.select-menu.active .options {
  display: block;
}
.options .option {
  display: flex;
  height: 40px;
  cursor: pointer;
  padding: 0 10px;
  border-radius: 8px;
  align-items: center;
  background: #fff;
}
.options .option:hover {
  background: #f2f2f2;
}
.option i {
  font-size: 25px;
  margin-right: 12px;
}
.option .option-text {
  font-size: 14px;
  color: #333;
}
.sBtn-text {
  color: #8e8e8e;
}
/* End Search Style */
.front-career {
  width: 100%;
  padding: 120px 0px 70px 0px;
}
.front-career h2 {
  font-weight: 500;
  font-size: 46px;
  text-align: center;
  color: #c6c6c6;
  width: 30%;
  margin: auto;
  margin-bottom: 20px;
}
.front-career p {
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #c6c6c6;
}
.job-list {
  width: 100%;
  margin-top: 70px;
}
.job-list .job-item {
  width: 80%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  column-gap: 20px;
  background: #f8f8f8;
  border-radius: 10px;
  padding: 30px 20px;
  margin: auto;
  margin-bottom: 30px;
}
.job-list .job-item .boxie:nth-child(1) {
  grid-column: span 1;
  margin: auto;
  font-weight: 700;
  font-size: 16px;
  color: #03808e;
}
span.number-item {
  color: #03808e;
}
.job-list .job-item .boxie:nth-child(2) {
  grid-column: span 5;
  text-align: left;
}
.job-list .job-item .boxie h2 {
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 10px;
  color: #03808e;
}
.job-list .job-item .boxie:nth-child(3) {
  grid-column: span 2;
  margin: auto;
}
.icon-list {
  font-weight: 400;
  font-size: 12px;

  color: #03808e;
}
.fa-solid.fa-hourglass-end.icon-rim {
  margin-right: 20px;
  margin-left: 5px;
}
.icon-rim {
  color: #21918a;
  font-size: 22px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 15px;
  text-align: center;
  margin-bottom: 5px;
}
.btn-details {
  background: #21918a;
  border: 1px solid #21918a;
  border-radius: 6px;
  font-weight: 600;
  font-size: 12px;
  text-decoration: none;
  padding: 10px 30px;
  color: #ffffff;
  text-align: center;
  transition: all 0.5s ease;
}
.btn-details:hover {
  background: transparent;
  color: #21918a;
  transition: all 0.5s ease;
}
@media (max-width: 1200px) {
  .front-career h2 {
    width: 45%;
  }
}
@media (max-width: 992px) {
  .job-search input {
    width: 300px;
  }
  .job-list .job-item .boxie:nth-child(1) {
    grid-column: span 1 !important;
  }
  .job-list .job-item .boxie:nth-child(2) {
    grid-column: span 5 !important;
  }
  .job-list .job-item .boxie:nth-child(3) {
    grid-column: span 2 !important;
  }
  .head-box img.explorer {
    position: absolute;
    top: 35%;
    right: 20%;
    width: 14%;
  }
}
@media (max-width: 600px) {
  .example {
    display: block;
  }
  .location-box {
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-bottom: 10px;
    width: 65%;
  }
  .icon-rimba {
    margin-top: 0px;
  }
  .job-search {
    padding: 15px 15px 15px 15px;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    margin-right: 0px;
  }
  .front-career h2 {
    width: 80%;
  }
  .head-box img.explorer {
    right: 5%;
  }
  .job-list .job-item .boxie:nth-child(2) {
    grid-column: span 4 !important;
  }
  .job-list .job-item .boxie:nth-child(3) {
    grid-column: span 3 !important;
  }
  .job-list .job-item {
    width: 90%;
  }
}
@media (max-width: 420px) {
  .front-career h2 {
    font-size: 38px;
  }
  .job-list .job-item .boxie:nth-child(1) {
    grid-column: span 2 !important;
  }
  .job-list .job-item .boxie:nth-child(2) {
    grid-column: span 6 !important;
  }
  .job-list .job-item .boxie:nth-child(3) {
    grid-column: span 8 !important;
    margin-top: 30px;
  }
  .pagination a {
    min-width: 34px;
    min-height: 34px;
  }
}
@media (max-width: 400px) {
  .front-career h2 {
    font-size: 36px;
  }
  .job-search input {
    width: 100%;
  }
  .example {
    display: block;
    width: 90%;
  }
  .location-box {
    width: 85%;
  }
  .select-menu .options {
    width: 213px;
  }
}
@media (max-width: 300px) {
  .select-menu .options {
    width: 166px;
  }
  .front-career h2 {
    font-size: 28px;
  }
  .front-career p {
    font-size: 16px;
  }
}
</style>
