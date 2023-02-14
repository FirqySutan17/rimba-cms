<template>
  <section class="porto-window">
    <div class="porto-content" v-for="porto in data" :key="porto.id">
      <img
        class="porto-img"
        :src="media + porto.image_cover"
        :alt="porto.alt_text_cover"
      />
      <div class="title-content">
        <div class="boxie">
          <h2 class="main-title">{{ porto.name }}</h2>
          <span class="sub-title">Type: {{ porto.type.name }}</span>
        </div>
        <div class="boxie">
          <!-- <button class="btn-more" @click="showDetail(porto)"> See Projects Details </button> -->
          <router-link :to="{name: 'portfolio-detail', params:{slug: porto.slug}}" class="btn-more">
            See Project Details
          </router-link>
        </div>
      </div>
      <div class="desc-porto" v-html="porto.description"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "RocksWin",
  props: {
    msg: String,
    data: Array,
  },
  data() {
    return {
      media: process.env.VUE_APP_MEDIA_URL,
    };
  },
};
</script>

<style></style>
