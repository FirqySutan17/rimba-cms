<template>
  <div class="wrapper-item">
    <div class="container">
      <div class="box-item">
        <div class="box">
          <img src="@/assets/images/trees/oak-img.png" alt="" />
        </div>
        <div class="box">
          <div class="title-set-product">
            <h2>Oaktree</h2>
            <img
              src="@/assets/images/best-product.png"
              class="label-product"
              alt=""
            />
          </div>

          <p>
            A total logistic and freight forwarding system that connect to
            Accurate Online (A top 3 and powerful accounting system in
            Indonesia)
          </p>
          <a href="#" class="btn-oaktree">Request a demo</a>
        </div>
      </div>

      <div class="box-item">
        <div class="box">
          <img src="@/assets/images/trees/bamboo-img.png" alt="" />
        </div>
        <div class="box">
          <h2>Bambootree</h2>
          <p>
            An instant software to provide duplicating database in a convenient
            way!
          </p>
          <a href="#" class="btn-bambootree">Request a demo</a>
        </div>
      </div>

      <div class="box-item">
        <div class="box">
          <img src="@/assets/images/trees/pine-img.png" alt="" />
        </div>
        <div class="box">
          <h2>Pinetree</h2>
          <p>
            Arrange trucking to accommodate the goods to be sent to the
            destination.
          </p>
          <a href="#" class="btn-pinetree">Request a demo</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemComp",
  props: {
    msg: String,
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
