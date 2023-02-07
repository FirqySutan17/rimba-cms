<template>
  <HeaderComp />
  <EventComp />

  <FooterComp />
</template>

<script>
import "../assets/styles/style.css";
import HeaderComp from "@/components/template/HeaderComp.vue";
import EventComp from "@/components/event/EventComp.vue";
import FooterComp from "@/components/template/FooterComp.vue";

export default {
  name: "EventView",
  components: {
    HeaderComp,
    EventComp,
    FooterComp,
  },
};
</script>
