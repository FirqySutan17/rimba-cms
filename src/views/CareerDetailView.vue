<template>
  <HeaderComp />
  <CareerDetailComp :slug="careerId" />

  <FooterComp />
</template>

<script>
import "../assets/styles/style.css";
import HeaderComp from "@/components/template/HeaderComp.vue";
import CareerDetailComp from "@/components/career/DetailComp.vue";
import FooterComp from "@/components/template/FooterComp.vue";

export default {
  name: "CareerDetailView",
  components: {
    HeaderComp,
    CareerDetailComp,
    FooterComp,
  },
  data() {
    return {
      careerId: this.$route.params.slug
    }
  },
  props:['id'],
};
</script>
