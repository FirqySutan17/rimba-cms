<template>
  <div class="wrapper-tech">
    <div class="container">
      <div class="title-wrap">
        <h2 style="color: #052e40">Tech Stack</h2>
        <div class="circle-title-tech"></div>
        <p style="color: #052e40">Technology in Rimbahouse</p>
      </div>

      <div class="wrapper-tech-content">
        <div class="box">
          <h3>Mobile Development</h3>
          <div class="lit-box">
            <div class="boxie">
              <img src="@/assets/images/tech-stack/flutter.png" alt="" />
              <p>Flutter</p>
            </div>
            <div class="boxie">
              <img src="@/assets/images/tech-stack/react-native.png" alt="" />
              <p>React Native</p>
            </div>
            <div class="boxie">
              <img
                src="@/assets/images/tech-stack/java.png"
                alt=""
                style="margin-bottom: 11px"
              />
              <p>Java</p>
            </div>
            <div class="boxie">
              <img src="@/assets/images/tech-stack/laravel.png" alt="" />
              <p>Laravel</p>
            </div>
            <div class="boxie">
              <img src="@/assets/images/tech-stack/swift.png" alt="" />
              <p>Swift</p>
            </div>
            <div class="boxie">
              <img src="@/assets/images/tech-stack/kotlin.png" alt="" />
              <p>Kotlin</p>
            </div>
          </div>
        </div>

        <div class="box">
          <h3>Web Development</h3>
          <div class="lit-box">
            <div class="boxie">
              <img src="@/assets/images/tech-stack/laravel.png" alt="" />
              <p>Laravel</p>
            </div>
            <div class="boxie">
              <img src="@/assets/images/tech-stack/react-native.png" alt="" />
              <p>React.js</p>
            </div>
            <div class="boxie">
              <img src="@/assets/images/tech-stack/node.png" alt="" />
              <p>Node.js</p>
            </div>
            <div class="boxie">
              <img src="@/assets/images/tech-stack/vue.png" alt="" />
              <p>Vue.js</p>
            </div>
            <div class="boxie">
              <img src="@/assets/images/tech-stack/go.png" alt="" />
              <p>Go</p>
            </div>
            <div class="boxie">
              <img src="@/assets/images/tech-stack/js.png" alt="" />
              <p>Javascript</p>
            </div>
          </div>
        </div>

        <div class="box">
          <h3>Design</h3>
          <div class="lit-box">
            <div class="boxie">
              <img src="@/assets/images/tech-stack/figma.png" alt="" />
              <p>Figma</p>
            </div>
            <div class="boxie">
              <img src="@/assets/images/tech-stack/ai.png" alt="" />
              <p>AI</p>
            </div>
            <div class="boxie">
              <img src="@/assets/images/tech-stack/photoshop.png" alt="" />
              <p>Photoshop</p>
            </div>
            <div class="boxie">
              <img src="@/assets/images/tech-stack/xd.png" alt="" />
              <p>Adobe XD</p>
            </div>
            <div class="boxie">
              <img src="@/assets/images/tech-stack/miro.png" alt="" />
              <p>Miro</p>
            </div>
            <div class="boxie">
              <img src="@/assets/images/tech-stack/invision.png" alt="" />
              <p>inVision</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TechStackComp",
  props: {
    msg: String,
  },
};
</script>

<style>
.wrapper-tech {
  padding: 70px 0px;
}
.wrapper-tech-content {
  width: 100%;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 20px;
  display: grid;
}
.wrapper-tech-content .box {
  grid-column: span 2;
}
.wrapper-tech-content .box h3 {
  margin-bottom: 35px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  text-align: center;

  /* P4/Neutral500 */

  color: #444444;
}
.lit-box {
  width: 100%;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 0px;
  display: grid;
}
.lit-box .boxie {
  grid-column: span 2;
  margin-bottom: 30px;
}
.lit-box .boxie p {
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  /* identical to box height, or 21px */

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  /* P4/Neutral500 */

  color: #444444;
}

@media (max-width: 1600px) {
  .title-wrap .circle-title-tech {
    left: 41.5%;
  }
}

@media (max-width: 1440px) {
  .title-wrap .circle-title-tech {
    left: 40.5%;
  }
}
@media (max-width: 1370px) {
  .title-wrap .circle-title-tech {
    left: 40.8%;
  }
  .wrapper-tech-content {
    margin-top: 70px;
  }
}
@media (max-width: 1285px) {
  .title-wrap .circle-title-tech {
    left: 39.9%;
  }
  .wrapper-tech {
    padding: 70px 20px;
  }
}
@media (max-width: 1200px) {
  .title-wrap .circle-title-tech {
    left: 39.4%;
  }
}
@media (max-width: 1024px) {
  .title-wrap .circle-title-tech {
    left: 38.5% !important;
  }
}
@media (max-width: 992px) {
  .title-wrap .circle-title-tech {
    left: 37% !important;
  }
  .wrapper-tech-content .box {
    grid-column: span 3;
  }
}
@media (max-width: 820px) {
  .title-wrap .circle-title-tech {
    left: 35.2% !important;
  }
}
@media (max-width: 768px) {
  .title-wrap .circle-title-tech {
    left: 34.2% !important;
  }
}
@media (max-width: 600px) {
  .title-wrap .circle-title-tech {
    left: 27.2% !important;
  }
  .wrapper-tech-content .box {
    grid-column: span 6;
  }
}
@media (max-width: 500px) {
  .title-wrap .circle-title-tech {
    left: 20.5% !important;
  }
  .wrapper-tech {
    padding: 70px 10px;
  }
  .lit-box .boxie {
    grid-column: span 3 !important;
  }
}
@media (max-width: 395px) {
  .title-wrap .circle-title-tech {
    left: 19.5% !important;
  }
}
@media (max-width: 380px) {
  .title-wrap .circle-title-tech {
    left: 17.5% !important;
  }
  .lit-box .boxie {
    grid-column: span 3 !important;
  }
}
@media (max-width: 365px) {
  .title-wrap .circle-title-tech {
    left: 16.5% !important;
  }
}

@media (max-width: 285px) {
  .title-wrap .circle-title-tech {
    left: 14.5% !important;
    top: 6%;
    width: 40px;
    height: 40px;
  }
}
</style>
