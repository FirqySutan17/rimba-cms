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
                  <span class="sBtn-text">{{ selectedLocation }}</span>
                  <i class="bx bx-chevron-down"></i>
                </div>

                <ul class="options">
                  <li
                    class="option"
                    v-for="location in locations"
                    :key="location.id"
                    @click="setLocation(location.name, location.id)"
                  >
                    <span class="option-text">{{ location.name }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="job-search">
              <i class="fa-solid fa-briefcase icon-rimba"></i>
              <input
                type="text"
                placeholder="Type your dream job"
                v-model="searchText"
                name="search"
                autocomplete="off"
              />
            </div>
            <div class="btn-search" @click="searchCareer"><i class="fa fa-search"></i> Search</div>
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
          <div
            class="job-item"
            v-for="(career, index) in careers"
            :key="career.id"
          >
            <div class="boxie">
              <span class="number-item"
                >{{ index * pagination.currentPage + 1 }}.
              </span>
            </div>
            <div class="boxie">
              <h2>{{ career.name }}</h2>
              <div class="icon-list">
                <i class="fa-solid fa-hourglass-end icon-rim"></i>
                {{ career.work_type }}
              </div>
              <div class="icon-list">
                <i class="fa-solid fa-map-location-dot icon-rim"></i>
                {{ career.locatione.name }}
              </div>
            </div>
            <div class="boxie">
              <router-link :to="{name: 'career-detail', params:{id: career.id}}" class="btn-details">
                See details
              </router-link>
            </div>
          </div>

          <div class="page-box">
            <ul class="pagination" role="menubar" aria-label="Pagination">
              <li
                v-for="link in pagination.links"
                :key="link.id"
                :class="paginationClass(link.url, link.active)"
              >
                <a
                  v-if="link.label.includes('Previous')"
                  @click="paginationClick(link.url)"
                  class="pagination-tab"
                >
                  <span
                    :style="
                      link.url != null
                        ? { color: 'lightseagreen' }
                        : { color: 'white' }
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-chevron-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                      />
                    </svg>
                  </span>
                </a>
                <a
                  v-else-if="link.label.includes('Next')"
                  @click="paginationClick(link.url)"
                  class="pagination-tab"
                >
                  <span
                    :style="
                      link.url != null
                        ? { color: 'lightseagreen' }
                        : { color: 'white' }
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </span>
                </a>
                <a
                  v-else
                  @click="paginationClick(link.url)"
                  class="pagination-tab"
                >
                  {{ link.label }}
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
import { getContent } from "@/api/rimba";

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
        console.log("test");
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
  data() {
    return {
      careers: [],
      locations: [],
      selectedLocation: "All Location",
      pagination: {
        currentPage: null,
        lastPage: null,
        links: [],
      },
      searchText: ""
    };
  },
  methods: {
    async refreshCareer(url) {
      const getResponse = await getContent(url);
      if (getResponse.status == 200) {
        this.careers = getResponse.data.data.data;
        this.pagination.currentPage = getResponse.data.data.current_page;
        this.pagination.lastPage = getResponse.data.data.last_page;
        this.pagination.links = getResponse.data.data.links;
      } else {
        console.log(getResponse);
      }
    },
    async refreshLocation() {
      const getResponse = await getContent("location");
      if (getResponse.status == 200) {
        this.locations = getResponse.data.data;
      } else {
        console.log(getResponse);
      }
    },
    setLocation(name, id) {
      this.selectedLocation = name;
      const optionMenu = document.querySelector(".select-menu");
      optionMenu.classList.remove("active");
      this.refreshCareer('career?location=' + id);
    },
    paginationClass(url, isActive) {
      let classes = "";
      if (url === null) {
        classes = classes + "disabled ";
      }
      if (isActive) {
        classes = classes + "current";
      }
      return classes;
    },
    paginationClick(url) {
      if (url != null) {
        const splitResult = url.split("/");
        splitResult.map((item) => {
          if (item.includes("career")) {
            this.refreshCareer(item);
          }
        });
      }
    },
    searchCareer(){
      if(this.searchText != ""){
        this.refreshCareer('career?name='+this.searchText);
      }else{
        this.refreshCareer('career');
      }
    }
  },
  created() {
    this.refreshLocation();
    this.refreshCareer("career");
  },
};
</script>

<style>
.pagination-tab {
  cursor: pointer;
}
.disabled {
  background-color: gray !important;
  border: black !important;
}
.disabled:hover {
  background-color: gray !important;
  border: black !important;
}
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
