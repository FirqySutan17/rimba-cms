<template>
  <div class="wrapper-blog">
    <div class="container">
      <div class="head-blog">
        <div class="boxie-blog-top">
          <h1>{{ news.title?.rendered }}</h1>
          <div class="blog-ket">Published on {{news?.date}} | {{news?.categories}} | Written by
            <strong style="color: #000">{{news?.author}}</strong>
          </div>

          <img src="{{news?.better_featured_image}}" alt="" />
          <p>{{news.content?.rendered}}</p>
        </div>
        <div class="boxie-blog-top">
          <div class="more-articles">
            <h3>More articles</h3>

            <div class="a-blog" v-for="blog, index in blogs" :key="index">
              <router-link
                @click="$emit('someEvent',blog.slug )"
                :to="{ name: 'blog-detail', params: { slug: blog.slug } }"
              >
                {{ blog.title?.rendered }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="body-detail-blog">
        <h2>A “Dumpster Fire” Breach Response</h2>
        <p>
          There is no such thing as a good user-data leak, but how a corporation
          responds when its network security is breached can set the tone for
          how the incident is seen by the public. Security breaches are an
          ever-present risk, but even non-technical customers can recognize the
          difference between a firm that cares about security and has prepared
          and one that simply wants to limit the harm to its bottom line.
        </p>
        <br />
        <p>
          The recent enormous exposure of personal data from credit-checking
          company Equifax will almost certainly become a textbook example of
          what not to do. Before it was publicly announced, the breach had been
          known about for a month, placing consumers at danger of identity
          theft. Executives at the corporation began selling stock before it was
          publicly disclosed. The incident was caused by a preventable
          vulnerability. Communication with the general public was abysmal.
          Credit monitoring services were provided in response to the event,
          however a phrase in the terms and conditions appeared to include a
          waiver of participation in any class action litigation linked to the
          breach.
        </p>
        <br /><br />
        <h2>A Great Breach Response</h2>
        <p>
          Although nothing like as serious as the Equifax leak, this was a
          significant breach of user trust and could have had a devastating
          impact on the brand’s reputation. But Disqus’s response was the polar
          opposite of what happened with Equifax. The vulnerability was reported
          to Disqus by a security researcher. The same day, the company
          contacted affected users and reset their passwords. Within 24 hours,
          the leak was publicly disclosed in a detailed blog post that revealed
          who was affected, how the breach happened, and what the company had
          done about it.
        </p>
      </div>

      <hr />
      <div class="footer-blog">
        <span>Bagikan artikel ke</span>
        <a href="" id="linkedin" class="socmed-share" target="_blank"
          ><i class="bx bxl-linkedin"></i
        ></a>
        <a href="" id="facebook" class="socmed-share" target="_blank"
          ><i class="bx bxl-facebook"></i
        ></a>
        <!-- <a href="#"><i class="bx bxl-instagram"></i></a> -->
        <a href="" id="twitter" class="socmed-share" target="_blank"
          ><i class="bx bxl-twitter"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import { getBlog, getBlogDetail } from "@/api/rimba";
import moment from "moment";

export default {
  name: "BlogDetailComp",
  props: {
    msg: String,
    id: String,
    slug: String,
  },
  data() {
    return {
      news: "",
      blogs: [],
      currentPage: 1,
    };
  },
  mounted: function () {
    const facebook = document.getElementById("facebook");
    const twitter = document.getElementById("twitter");
    const linkedin = document.getElementById("linkedin");

    let postUrl = encodeURI(document.location.href);
    let postTitle = encodeURI("Blog Title here");

    facebook.setAttribute(
      "href",
      `https://www.facebook.com/sharer.php?u=${postUrl}`
    );
    twitter.setAttribute(
      "href",
      `https://twitter.com/intent/tweet?text=${postTitle}&url=${postUrl}`
    );
    linkedin.setAttribute(
      "href",
      `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
    );
    // console.log(postUrl);
    // console.log(postTitle);
    // console.log(this.id);
    // http: //www.linkedin.com/shareArticle?mini=true&url=
  },
  watch: {
    slug: function(newVal, oldVal) { // watch it
      this.refreshBlogDetail()
    }
  },
  methods: {
    moment: function (date) {
      return moment(date);
    },
    date: function (date) {
      return moment(date).format("MMMM DD, YYYY");
    },
    async refreshBlogDetail() {
      const getResponse = await getBlog("posts/?slug=" + this.slug + "&embed");
      if (getResponse.status == 200) {
        if(getResponse.data.length) this.news = getResponse.data[0];
      } else {
        console.log(getResponse);
      }
    },
    async refreshBlogs() {
      const getResponse = await getBlog(
        "posts/?per_page=10&page=" + this.currentPage
      );
      if (getResponse.status === 200) {
        this.blogs = getResponse.data;
        console.log(getResponse);
      } else {
        console.log(getResponse);
      }
    },
  },
  created() {
    this.refreshBlogDetail();
    this.refreshBlogs();
  },
};
</script>

<style>
.wrapper-blog {
  padding: 140px 0px;
}
.head-blog {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  width: 100%;
  column-gap: 20px;
}
.boxie-blog-top:nth-child(1) {
  grid-column: span 5;
  text-align: left;
  margin: auto 0;
}
.boxie-blog-top:nth-child(2) {
  grid-column: span 3;
  text-align: left;
}
.boxie-blog-top h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 150%;
  color: #444444;
  margin-bottom: 15px;
}
.blog-ket {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #858585;
  margin-bottom: 40px;
}
.boxie-blog-top img {
  width: 100%;
  max-height: 400px;
  object-fit: contain;
  margin-bottom: 10px;
}
.boxie-blog-top p {
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #646464;
}
.more-articles {
  padding: 70px 40px;
  background-color: #f4f4f4;
  border-radius: 6px;
  display: block;
}
.more-articles h3 {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  color: #444444;
  margin-bottom: 20px;
}
.more-articles a {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #438b16;
  width: 100%;
  text-decoration: none;
}
.more-articles a:hover {
  color: #000;
}
.more-articles .a-blog {
  margin-bottom: 15px;
}
.body-detail-blog {
  padding: 70px 0px;
  text-align: left;
}
.body-detail-blog h2 {
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 210%;
  color: #444444;
  margin-bottom: 20px;
}
.footer-blog {
  margin: 40px 0px;
  text-align: left;
}
.footer-blog span {
  font-weight: 600;
}
.footer-blog a {
  font-size: 20px;
  display: inline-block;
  vertical-align: middle;
  margin-left: 12px;
  background: #007688;
  border-radius: 50%;
  padding: 5px 12px;
  padding-top: 8px;
  color: #fff;
  border: 1px solid transparent;
}
.footer-blog a:hover {
  color: #000;
  background: transparent;
  border: 1px solid #000;
}

@media (max-width: 1280px) {
  .wrapper-blog {
    padding: 140px 40px;
  }
}
@media (max-width: 830px) {
  .boxie-blog-top:nth-child(1) {
    grid-column: span 8;
    margin-bottom: 30px;
  }
  .boxie-blog-top:nth-child(2) {
    grid-column: span 8;
  }
}
@media (max-width: 600px) {
  .wrapper-blog {
    padding: 120px 20px;
  }
  .more-articles {
    padding: 70px 30px;
  }
}
@media (max-width: 320px) {
  .footer-blog span {
    font-weight: 600;
    margin-right: 40px;
    line-height: 50px;
  }
  .footer-blog a {
    margin-left: 10px;
  }
}
</style>
