<template>
  <HeaderComp />
  <AboutComp />
  <TimelineComp />
  <GalleryComp />
  <BlogComp />
  <ContactComp />
  <PartnerComp />
  <FooterComp />
</template>

<script>
import "../assets/styles/style.css";
import HeaderComp from "@/components/template/HeaderComp.vue";
import AboutComp from "@/components/about/AboutComp.vue";
import TimelineComp from "@/components/about/TimelineComp.vue";
import GalleryComp from "@/components/about/GalleryComp.vue";
import BlogComp from "@/components/template/BlogComp.vue";
import ContactComp from "@/components/template/ContactComp.vue";
import PartnerComp from "@/components/template/PartnerComp.vue";
import FooterComp from "@/components/template/FooterComp.vue";

export default {
  name: "AboutView",
  components: {
    HeaderComp,
    AboutComp,
    TimelineComp,
    GalleryComp,
    BlogComp,
    ContactComp,
    PartnerComp,
    FooterComp,
  },
};
</script>
