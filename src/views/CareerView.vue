<template>
  <HeaderComp />
  <CareerComp />

  <FooterComp />
</template>

<script>
import "../assets/styles/style.css";
import HeaderComp from "@/components/template/HeaderComp.vue";
import CareerComp from "@/components/career/CareerComp.vue";
import FooterComp from "@/components/template/FooterComp.vue";

export default {
  name: "CareerView",
  components: {
    HeaderComp,
    CareerComp,
    FooterComp,
  },
};
</script>
