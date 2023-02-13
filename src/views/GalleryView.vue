<template>
  <HeaderComp />
  <GalleryComp />
  <FooterComp />
</template>

<script>
import "../assets/styles/style.css";
import HeaderComp from "@/components/template/HeaderComp.vue";
import GalleryComp from "@/components/template/GalleryComp.vue";
import FooterComp from "@/components/template/FooterComp.vue";

export default {
  name: "GalleryView",
  components: {
    HeaderComp,
    GalleryComp,
    FooterComp,
  },
};
</script>
