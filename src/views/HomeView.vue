<template>
  <HeaderComp />
  <div class="home">
    <BannerComp />
    <IntermezzoComp />
    <HowWeWorkComp />
    <PortfolioComp />
    <TechStackComp />
    <BlogComp />
    <ContactComp />
    <PartnerComp />
    <FooterComp />
  </div>
</template>

<script>
// @ is an alias to /src
import "../assets/styles/style.css";
import HeaderComp from "@/components/template/HeaderComp.vue";
import BannerComp from "@/components/home/BannerComp.vue";
import IntermezzoComp from "@/components/home/IntermezzoComp.vue";
import HowWeWorkComp from "@/components/home/HowWeWorkComp.vue";
import PortfolioComp from "@/components/home/PortfolioComp.vue";
import TechStackComp from "@/components/home/TechStackComp.vue";
import BlogComp from "@/components/template/BlogComp.vue";
import ContactComp from "@/components/template/ContactComp.vue";
import PartnerComp from "@/components/template/PartnerComp.vue";
import FooterComp from "@/components/template/FooterComp.vue";

export default {
  name: "HomeView",
  components: {
    HeaderComp,
    BannerComp,
    IntermezzoComp,
    HowWeWorkComp,
    PortfolioComp,
    TechStackComp,
    BlogComp,
    ContactComp,
    PartnerComp,
    FooterComp,
  },
};
</script>
