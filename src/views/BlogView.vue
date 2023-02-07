<template>
  <HeaderComp />
  <BlogComp />

  <FooterComp />
</template>

<script>
import "../assets/styles/style.css";
import HeaderComp from "@/components/template/HeaderComp.vue";
import BlogComp from "@/components/blog/BlogComp.vue";
import FooterComp from "@/components/template/FooterComp.vue";

export default {
  name: "BlogView",
  components: {
    HeaderComp,
    BlogComp,
    FooterComp,
  },
};
</script>
