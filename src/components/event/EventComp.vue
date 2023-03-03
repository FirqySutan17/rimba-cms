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
              <div class="select-box__value" @click="filterbyYear(null)">
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
              <div class="select-box__value" @click="filterbyYear(2021)">
                <input
                  class="select-box__input"
                  type="radio"
                  id="4"
                  value="5"
                  name="Ben"
                />
                <p class="select-box__input-text">2021</p>
              </div>
              <div class="select-box__value" @click="filterbyYear(2022)">
                <input
                  class="select-box__input"
                  type="radio"
                  id="5"
                  value="6"
                  name="Ben"
                />
                <p class="select-box__input-text">2022</p>
              </div>
              <div class="select-box__value" @click="filterbyYear(2023)">
                <input
                  class="select-box__input"
                  type="radio"
                  id="6"
                  value="7"
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
                  for="4"
                  aria-hidden="aria-hidden"
                  >2021</label
                >
              </li>
              <li>
                <label
                  class="select-box__option"
                  for="5"
                  aria-hidden="aria-hidden"
                  >2022</label
                >
              </li>
              <li>
                <label
                  class="select-box__option"
                  for="6"
                  aria-hidden="aria-hidden"
                  >2023</label
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="event-content">
          <div
            class="boxie"
            v-for="(event, dataIndex) in events"
            :key="event.id"
          >
            <div class="stack-img">
              <img
                v-for="image in event.images"
                :key="image.id"
                :src="media + image.image"
                :alt="image.alt_text"
              />
            </div>
            <div class="stack-content">
              <h2>{{ event.name }}</h2>
              <p>{{ event.date }}</p>
              <button
                class="see-activity"
                @click="showMultiple(dataIndex)"
                :key="event.id"
              >
                See activity
              </button>
              <vue-easy-lightbox
                :key="event.id"
                escDisabled
                moveDisabled
                :visible="visible[dataIndex]"
                :imgs="convertImage(event.images)"
                :index="index"
                @hide="handleHide(dataIndex)"
              ></vue-easy-lightbox>
            </div>
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
</template>

<script>
import VueEasyLightbox from "vue-easy-lightbox";
import { getContent } from "@/api/rimba";

export default {
  components: {
    VueEasyLightbox,
  },
  data() {
    return {
      imgs: "", // Img Url , string or Array of string
      visible: [],
      index: 0, // default: 0
      events: [],
      pagination: {
        links: [],
        last_page: null,
        next_page: null,
        prev_page: null,
        current_page: null,
      },
      media: process.env.VUE_APP_MEDIA_URL,
    };
  },
  methods: {
    showMultiple(index) {
      // this.imgs = [
      //   "https://rimba.lifetime-studios.com/images/event/img-1.png",
      //   "https://rimba.lifetime-studios.com/images/event/img-2.png",
      //   "https://rimba.lifetime-studios.com/images/event/img-3.png",
      // ];

      this.index = 0; // index of imgList
      this.show(index);
    },
    show(index) {
      this.visible[index] = true;
    },
    handleHide(index) {
      this.visible[index] = false;
    },
    convertImage(images) {
      let result = [];
      images.map((image) => {
        result.push(this.media + image.image);
      });
      console.log(result);
      return result;
    },
    filterbyYear(year) {
      console.log(year);
      if (year != null) {
        this.refreshEvent("event?date=" + year);
      } else {
        this.refreshEvent("event");
      }
    },
    async refreshEvent(url) {
      const getResponse = await getContent(url);
      if (getResponse.status == 200) {
        this.events = getResponse.data.data.data;
        this.visible = [];
        for (let i = 0; i < this.events.length; i++) {
          this.visible[i] = false;
        }
        this.pagination.links = getResponse.data.data.links;
        this.pagination.last_page = getResponse.data.data.last_page;
        this.pagination.current_page = getResponse.data.data.current_page;
      } else {
        console.log(getResponse);
      }
    },
    paginationClick(url) {
      if (url != null) {
        const splitResult = url.split("/");
        splitResult.map((item) => {
          if (item.includes("event")) {
            this.refreshEvent(item);
          }
        });
      }
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
  },
  name: "EventComp",
  props: {
    msg: String,
  },
  created() {
    this.refreshEvent("event");
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
  object-fit: cover;
  border-radius: 10px;
  width: 100%;
  height: 100%;
}
.stack-img img:nth-child(1) {
  right: 0%;
}
.stack-img img:nth-child(2) {
  right: 10%;
  display: none;
}
.stack-img img:nth-child(3) {
  right: 20%;
  display: none;
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
    margin: 20px 20px 50px 20px !important;
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
