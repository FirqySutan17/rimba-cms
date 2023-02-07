<template>
  <HeaderComp />
  <PortfolioComp />

  <ContactComp />
  <PartnerComp />
  <FooterComp />
</template>

<script>
import "../assets/styles/style.css";
import HeaderComp from "@/components/template/HeaderComp.vue";
import PortfolioComp from "@/components/portfolio/PortfolioComp.vue";

import ContactComp from "@/components/template/ContactComp.vue";
import PartnerComp from "@/components/template/PartnerComp.vue";
import FooterComp from "@/components/template/FooterComp.vue";

export default {
  name: "PortfolioView",
  components: {
    HeaderComp,
    PortfolioComp,
    ContactComp,
    PartnerComp,
    FooterComp,
  },
};
</script>
