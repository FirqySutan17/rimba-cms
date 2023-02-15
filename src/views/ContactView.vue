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
  metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Default Title',
      // all titles will be injected into this template
      titleTemplate: '%s | My Awesome Webapp'
    }
};
</script>
