<template>
  <div class="wrapper-item">
    <div class="container">
      <div class="box-item" v-for="product in products" :key="product.id" :style="{backgroundColor: product.card_color}">
        <div class="box">
          <img :src="media + product.image" :alt="product.alt_text" />
        </div>
        <div class="box">
          <div class="title-set-product">
            <h2>{{ product.name }}</h2>
            <img
              src="@/assets/images/best-product.png"
              class="label-product"
              alt="" v-if="product.label == 1"
            />
          </div>

          <div v-html="product.description"></div>
          <a href="#" class="btn-oaktree" :style="{backgroundColor: product.button_color}">Request a demo</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getContent } from '@/api/rimba';
export default {
  name: "ItemComp",
  props: {
    msg: String,
  },
  data() {
    return {
      products: [],
      media: process.env.VUE_APP_MEDIA_URL
    }
  },
  methods: {
    async refreshProducts(){
      const getResponse = await getContent("product");
      if(getResponse.status === 200){
        this.products = getResponse.data.data;
      }else{
        console.log(getResponse);
      }
    }
  },
  mounted() {
    this.refreshProducts();
  },
};
</script>

<style>
.wrapper-item {
  position: relative;
  background: #fff;
  padding: 0px 0px 70px 0px;
  margin: 0 auto;
}

.box-item {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 20px;
  padding: 40px 100px;

  background: #052e40;
  border: 1px solid #cfcfcf;
  box-shadow: 10px 10px 80px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  margin-bottom: 50px;
}
.box-item .box {
  grid-column: span 3;
}
.box-item img {
  width: 80%;
}
.box-item .box:nth-child(2) {
  text-align: left;
  margin: auto;
}
.box-item .box h2 {
  font-weight: 700;
  font-size: 50px;
  line-height: 75px;
  display: flex;
  /* identical to box height */

  color: #ffffff;
}
.box-item .box p {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 50px;
  color: #ffffff;
}
.box-item .box a {
  background: #27b07d;
  border: 1px solid #27b07d;
  border-radius: 40px;
  padding: 10px 30px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */
  text-decoration: none;
  color: #e8e8e8;
}
.box-item .box a.btn-bambootree {
  background: #ffa800;
  border: 1px solid #ffa800;
}
.box-item .box a.btn-pinetree {
  background: #197bb8;
  border: 1px solid #197bb8;
}
.box-item .box a.btn-oaktree:hover {
  background: transparent;
  color: #fff;
  transition: all 0.5s ease;
}
.box-item .box a.btn-bambootree:hover {
  background: transparent;
  color: #fff;
  transition: all 0.5s ease;
}
.box-item .box a.btn-pinetree:hover {
  background: transparent;
  color: #fff;
  transition: all 0.5s ease;
}
.title-set-product {
  display: flex;
}
.title-set-product img {
  width: 20%;
  object-fit: contain;
  margin-left: 20px;
}
</style>
