<template>
  <HeaderComp />
  <PortfolioDetailComp :slug="portfolioId" />
  <ContactComp />
  <FooterComp />
</template>

<script>
import "../assets/styles/style.css";
import HeaderComp from "@/components/template/HeaderComp.vue";
import PortfolioDetailComp from "@/components/portfolio/DetailComp.vue";
import ContactComp from "@/components/template/ContactComp.vue";
import FooterComp from "@/components/template/FooterComp.vue";

export default {
  name: "PortfolioDetailView",
  components: {
    HeaderComp,
    PortfolioDetailComp,
    ContactComp,
    FooterComp,
  },mounted(){
    console.log(this.$route.params);
  },
  props:['slug'],
  data() {
    return {
      portfolioId: this.$route.params.slug
    }
  },
};
</script>
