<template>
  <HeaderComp />
  <BlogComp :id="blogId" />

  <FooterComp />
</template>

<script>
import "../assets/styles/style.css";
import HeaderComp from "@/components/template/HeaderComp.vue";
import BlogComp from "@/components/blog/BlogDetailComp.vue";
import FooterComp from "@/components/template/FooterComp.vue";

export default {
  name: "BlogDetailView",
  components: {
    HeaderComp,
    BlogComp,
    FooterComp,
  },
  data() {
    return {
      blogId: this.$route.params.id,
      // blogSlug: this.$route.params.slug,
    };
  },
  props: ["id"],
};
</script>
