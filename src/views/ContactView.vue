<template>
  <HeaderComp />
  <ContactComp />

  <FooterComp />
</template>

<script>
import "../assets/styles/style.css";
import HeaderComp from "@/components/template/HeaderComp.vue";
import ContactComp from "@/components/contact/ContactComp.vue";
import FooterComp from "@/components/template/FooterComp.vue";

export default {
  name: "ContactView",
  components: {
    HeaderComp,
    ContactComp,
    FooterComp,
  },
};
</script>
