<template>
  <div class="wrapper-partner">
    <div class="container">
      <div class="title-wrap">
        <h2 style="color: #052e40">Our Partner</h2>
        <div class="circle-title-partner"></div>
        <p style="color: #052e40">Rimba Partnership</p>
      </div>

      <div class="wrapper-slider">
        <Flicking
          :plugins="plugins"
          :options="{
            align: 'prev',
            noPanelStyleOverride: false,
            circular: true,
            circularFallback: 'bound',
          }"
        >
          <img v-for="partner in partners" :key="partner.id" :src="media+partner.image" :alt="partner.alt_text"/>
          <!-- <img src="@/assets/images/partner/part-1.png" />
          <img src="@/assets/images/partner/part-2.png" />
          <img src="@/assets/images/partner/part-3.png" />
          <img src="@/assets/images/partner/part-4.png" />
          <img src="@/assets/images/partner/part-5.png" />
          <img src="@/assets/images/partner/part-3.png" />
          <img src="@/assets/images/partner/part-4.png" />
          <img src="@/assets/images/partner/part-5.png" /> -->
        </Flicking>
      </div>
    </div>
  </div>
</template>

<script>
import Flicking from "@egjs/vue3-flicking";
import { AutoPlay, Pagination } from "@egjs/flicking-plugins";
import "@egjs/vue3-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import "@egjs/vue3-flicking/dist/flicking-inline.css";
import {getContent} from "@/api/rimba"

const plugins = [
  new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false }),
];

export default {
  components: {
    Flicking,
  },
  data: function () {
    return {
      plugins,
      partners: [],
      media: process.env.VUE_APP_MEDIA_URL
    };
  },
  name: "PartnerComp",
  props: {
    msg: String,
  },
  mounted() {
    this.refreshPartners();
  },
  methods: {
    async refreshPartners(){
      const getResponse = await getContent("partner");
      if(getResponse.status == 200){
        this.partners = getResponse.data.data;
      }else{
        console.log(getResponse);
      }
    }
  },
};
</script>

<style>
.wrapper-partner {
  padding: 0px 0px 40px 0px;
  overflow: hidden;
}
.wrapper-partner img {
  object-fit: contain;
}
@media (max-width: 1600px) {
  .title-wrap .circle-title-partner {
    left: 41.5%;
  }
}
@media (max-width: 1440px) {
  .title-wrap .circle-title-partner {
    left: 40.6%;
  }
}
@media (max-width: 1370px) {
  .title-wrap .circle-title-partner {
    left: 40.7%;
  }
  .wrapper-content-blog {
    margin-top: 70px;
  }
}
@media (max-width: 1285px) {
  .title-wrap .circle-title-partner {
    left: 40%;
  }
  .wrapper-partner {
    padding: 0px 20px 40px 20px;
  }
}
@media (max-width: 1200px) {
  .title-wrap .circle-title-partner {
    left: 39.3%;
  }
}
@media (max-width: 1024px) {
  .title-wrap .circle-title-partner {
    left: 38.3%;
  }
}
@media (max-width: 992px) {
  .title-wrap .circle-title-partner {
    left: 37%;
  }
}
@media (max-width: 820px) {
  .title-wrap .circle-title-partner {
    left: 35.4%;
  }
}
@media (max-width: 768px) {
  .title-wrap .circle-title-partner {
    left: 34.3%;
  }
}
@media (max-width: 600px) {
  .title-wrap .circle-title-partner {
    left: 27.3%;
  }
}
@media (max-width: 500px) {
  .title-wrap .circle-title-partner {
    left: 19.3%;
  }
}
@media (max-width: 395px) {
  .title-wrap .circle-title-partner {
    left: 17.3%;
  }
}
@media (max-width: 380px) {
  .title-wrap .circle-title-partner {
    left: 15.5%;
  }
}
@media (max-width: 365px) {
  .title-wrap .circle-title-partner {
    left: 13.5%;
  }
}
@media (max-width: 285px) {
  .title-wrap .circle-title-partner {
    left: 12% !important;
    top: 6%;
    width: 40px;
    height: 40px;
  }
}
</style>
