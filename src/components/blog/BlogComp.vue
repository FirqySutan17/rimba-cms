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
          <div class="blog-item gallery-item all general">
            <img src="@/assets/images/blog/img-1.png" alt="" />
            <div class="cat-date">
              <div class="boxie">Technology</div>
              <div class="boxie">5 min read</div>
            </div>
            <h2>Don’t Let Your Company’s Data Leaked</h2>
            <p>
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore...
            </p>
            <a href="#">Read full article</a>
          </div>

          <div class="blog-item gallery-item all tech">
            <img src="@/assets/images/blog/img-2.png" alt="" />
            <div class="cat-date">
              <div class="boxie">Technology</div>
              <div class="boxie">5 min read</div>
            </div>
            <h2>Don’t Let Your Company’s Data Leaked</h2>
            <p>
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore...
            </p>
            <a href="#">Read full article</a>
          </div>

          <div class="blog-item gallery-item all science">
            <img src="@/assets/images/blog/img-3.png" alt="" />
            <div class="cat-date">
              <div class="boxie">Technology</div>
              <div class="boxie">5 min read</div>
            </div>
            <h2>Don’t Let Your Company’s Data Leaked</h2>
            <p>
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore...
            </p>
            <a href="#">Read full article</a>
          </div>

          <div class="blog-item gallery-item all">
            <img src="@/assets/images/blog/img-1.png" alt="" />
            <div class="cat-date">
              <div class="boxie">Technology</div>
              <div class="boxie">5 min read</div>
            </div>
            <h2>Don’t Let Your Company’s Data Leaked</h2>
            <p>
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore...
            </p>
            <a href="#">Read full article</a>
          </div>

          <div class="blog-item gallery-item all">
            <img src="@/assets/images/blog/img-2.png" alt="" />
            <div class="cat-date">
              <div class="boxie">Technology</div>
              <div class="boxie">5 min read</div>
            </div>
            <h2>Don’t Let Your Company’s Data Leaked</h2>
            <p>
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore...
            </p>
            <a href="#">Read full article</a>
          </div>

          <div class="blog-item gallery-item all">
            <img src="@/assets/images/blog/img-3.png" alt="" />
            <div class="cat-date">
              <div class="boxie">Technology</div>
              <div class="boxie">5 min read</div>
            </div>
            <h2>Don’t Let Your Company’s Data Leaked</h2>
            <p>
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore...
            </p>
            <a href="#">Read full article</a>
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
import $ from "jquery";

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
