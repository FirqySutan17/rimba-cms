<template>
  <HeaderComp />
  <BlogDetailComp :slug="blogSlug" @some-event="callback" />

  <FooterComp />
</template>

<script>
import "../assets/styles/style.css";
import HeaderComp from "@/components/template/HeaderComp.vue";
import BlogDetailComp from "@/components/blog/BlogDetailComp.vue";
import FooterComp from "@/components/template/FooterComp.vue";

export default {
  name: "BlogDetailView",
  components: {
    HeaderComp,
    BlogDetailComp,
    FooterComp,
  },
  data() {
    return {
      blogSlug: this.$route.params.slug,
      // blogSlug: this.$route.params.slug,
    };
  },
  methods : {
    callback : function(param){
      this.blogSlug = param
    }
  },
  props: ["id"],
};
</script>
