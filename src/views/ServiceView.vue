<template>
  <HeaderComp />
  <ServiceComp />
  <ItemComp />
  <BlogComp />
  <ContactComp />
  <PartnerComp />
  <FooterComp />
</template>

<script>
import "../assets/styles/style.css";
import HeaderComp from "@/components/template/HeaderComp.vue";
import ServiceComp from "@/components/service/ServiceComp.vue";
import ItemComp from "@/components/service/ItemComp.vue";
import BlogComp from "@/components/template/BlogComp.vue";
import ContactComp from "@/components/template/ContactComp.vue";
import PartnerComp from "@/components/template/PartnerComp.vue";
import FooterComp from "@/components/template/FooterComp.vue";

export default {
  name: "ServiceView",
  components: {
    HeaderComp,
    ServiceComp,
    ItemComp,
    BlogComp,
    ContactComp,
    PartnerComp,
    FooterComp,
  },
};
</script>
