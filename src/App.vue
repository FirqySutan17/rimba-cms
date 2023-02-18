<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content}` : `Rimba House`
    }}</template>
  </metainfo>
  <PreloaderComp :isLoading="isLoading" />
  <main v-if="!isLoading">
    <router-view />
  </main>
</template>

<script>
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import PreloaderComp from "@/components/template/PreloaderComp.vue";
import { useMeta } from "vue-meta";

export default {
  name: "App",
  components: {
    HomeView,
    AboutView,
    PreloaderComp,
  },
  data() {
    return { isLoading: true };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 9500);
  },
  setup() {
    useMeta({
      title: "Rimba House",
      htmlAttrs: { lang: "en", amp: true },
    });
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
