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
          <h2>Blog</h2>
          <p class="service-sub">Skip or get missed out altogether?</p>
        </div>
      </div>

      <div class="body-blog">
        <div class="filter-blog categoryBox">
          <span href="#" id="all" class="filter-item active" data-filter="all">
            All
          </span>
          <span href="#" id="general" class="filter-item" data-filter="general">
            General
          </span>
          <span href="#" id="tech" class="filter-item" data-filter="tech">
            Tech
          </span>
          <span href="#" id="science" class="filter-item" data-filter="science">
            Science
          </span>
          <span href="#" id="finance" class="filter-item" data-filter="finance">
            Finance
          </span>
          <span href="#" id="finance" class="filter-item" data-filter="finance">
            Random
          </span>
        </div>
        <div class="blog-list">
          <div
            v-for="blog in blogs"
            :key="blog.id"
            class="blog-item gallery-item all"
          >
            <img src="@/assets/images/blog/img-1.png" alt="" />
            <div class="cat-date">
              <div class="boxie">{{ checkCategory(blog.categories) }}</div>
              <div class="boxie">5 min read</div>
            </div>
            <h2>{{ blog.title.rendered }}</h2>
            <div v-html="blog.excerpt.rendered">

            </div>
            <a :href="blog.link">Read full article</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { getBlog } from "@/api/rimba";

export default {
  name: "BlogComp",
  props: {
    msg: String,
  },
  mounted: function () {
    $(document).ready(function () {
      var $list = $(".blog-item").hide(),
        $content;

      $(".filter-item")
        .on("click", function () {
          var $this = $(this);
          $this.addClass("active").siblings().removeClass("active");
          $content = $list.filter("." + this.id).hide();
          $content.slice(0, 6).show(400);
          $list.not($content).hide(300);
        })
        .filter(".active")
        .click();
    });
  },
  data() {
    return {
      blogs: [],
      categories: [],
    };
  },
  methods: {
    async refreshBlogs(url) {
      const getResponse = await getBlog(url);
      if (getResponse.status === 200) {
        this.blogs = getResponse.data;
      } else {
        console.log(getResponse);
      }
    },
    async refreshCategories() {
      const getResponse = await getBlog("categories");
      if (getResponse.status === 200) {
        this.categories = getResponse.data;
      } else {
        console.log(getResponse);
      }
    },
    checkCategory(categoriesId) {
      categoriesId.map((id) => {
        this.categories.map((category) => {
          if (category.id === id) {
            return category.name;
          }
        });
      });
    },
  },
  created() {
    this.refreshBlogs("posts/?per_page=9");
    this.refreshCategories();
  },
};
</script>

<style>
.body-blog {
  padding: 100px 30px 70px 30px;
}
.filter-blog {
  margin: 0px 0px 70px 0px;
  text-align: left;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none;
}
.filter-blog::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
.blog-list {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  column-gap: 20px;
}

.blog-item {
  grid-column: span 2;
  width: 100%;
  padding: 10px;
  border: 1px solid #ededed;
  margin-bottom: 30px;
}
.blog-item img {
  width: 100%;
  object-fit: cover;
}
.blog-item .cat-date {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  column-gap: 20px;
  padding: 5px 10px;
  background: #a0a0a0;
}
.blog-item .cat-date .boxie {
  grid-column: span 3;
  color: #fff;
  font-size: 14px;
}
.blog-item .cat-date .boxie:nth-child(1) {
  text-align: left;
}
.blog-item .cat-date .boxie:nth-child(2) {
  text-align: right;
}
.blog-item h2 {
  font-weight: 700;
  font-size: 20px;
  text-align: left;
  margin: 20px 0px 15px 0px;
  color: #363636;
}
.blog-item p {
  font-weight: 400;
  font-size: 14px;
  text-align: left;
  color: #6b6b6b;
  margin-bottom: 30px;
}

.blog-item a {
  background: #21918a;
  border: 1px solid #21918a;
  border-radius: 2px;
  font-weight: 400;
  font-size: 12px;
  text-decoration: none;
  color: #ffffff;
  padding: 10px 20px;
  text-align: left;
  float: left;
  transition: all 0.5s ease;
}
.blog-item a:hover {
  background: transparent;
  color: #21918a;
  transition: all 0.5s ease;
}
.filter-item {
  font-weight: 400;
  font-size: 16px;
  color: #444444;
  padding: 0px 15px 10px 15px;
  cursor: pointer;
  transition: all 0.5s ease;
}
.filter-item:hover {
  color: #21918a;
  transition: all 0.5s ease;
}
.filter-item.active {
  color: #21918a;
  border-bottom: 1px solid #21918a;
  transition: all 0.5s ease;
}
@media (max-width: 1366px) {
  .filter-item {
    font-size: 14px;
  }
}
@media (max-width: 992px) {
  .blog-item {
    grid-column: span 3;
  }
  .blog-item .cat-date .boxie {
    grid-column: span 3 !important;
    margin-bottom: 0px;
  }
}
@media (max-width: 600px) {
  .body-blog {
    padding: 100px 10px 70px 10px;
  }
  .blog-item h2 {
    font-size: 18px;
  }
}
@media (max-width: 500px) {
  .blog-item {
    grid-column: span 6;
  }
  .filter-blog {
    display: flex;
    overflow-x: auto;
  }
}
</style>
