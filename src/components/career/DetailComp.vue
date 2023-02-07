<template>
  <div class="wrapper-careerdetails">
    <div class="container">
      <div class="job-head">
        <div class="box">
          <h2>UI/UX Designer</h2>
          <div class="icon-list-detail">
            <i class="fa-solid fa-hourglass-end icon-rim"></i>
            Full-time
          </div>
          <div class="icon-list-detail">
            <i class="fa-solid fa-map-location-dot icon-rim"></i>
            Jakarta, Indonesia
          </div>
        </div>
        <div class="box">
          <button @click="showModal = true" class="btn-career-details">
            <div class="icon-btn">
              <i class="fa-solid fa-paper-plane icon-rima"></i>
              Apply Now
            </div>
          </button>
        </div>
      </div>
      <div class="date-post">
        <div class="icon-date-post">
          <i class="fa-regular fa-clock icon-date"></i>
          Posted 3 days ago
        </div>
      </div>

      <div class="job-detail">
        <div class="boxie-job">
          <div class="req-box">
            <h2>Requirements</h2>
            <div class="requirement-box">
              <div class="wrap-req">
                <div class="boxie">
                  <img src="@/assets/images/career/rimba-point.png" alt="" />
                </div>
                <div class="boxie">Computer Science graduate</div>
              </div>

              <div class="wrap-req">
                <div class="boxie">
                  <img src="@/assets/images/career/rimba-point.png" alt="" />
                </div>
                <div class="boxie">
                  Two-year experienced in the related field
                </div>
              </div>

              <div class="wrap-req">
                <div class="boxie">
                  <img src="@/assets/images/career/rimba-point.png" alt="" />
                </div>
                <div class="boxie">
                  Up-to-date knowledge of design software like Figma and Adobe
                  XD
                </div>
              </div>

              <div class="wrap-req">
                <div class="boxie">
                  <img src="@/assets/images/career/rimba-point.png" alt="" />
                </div>
                <div class="boxie">
                  Team spirit; strong communication skills to collaborate with
                  various stakeholders
                </div>
              </div>
            </div>
          </div>

          <div class="man-box">
            <h2>Mandatory Skills</h2>
            <div class="mandatory-box">
              <span>UI/UX Design</span>
              <span>Figma</span>
              <span>Design System</span>
              <span>Wireframing</span>
              <span>Prototyping</span>
            </div>
          </div>

          <div class="ben-box">
            <h2>Benefits</h2>
            <div class="benefit-box">
              <div class="wrap-ben">
                <div class="boxie">
                  <img src="@/assets/images/career/time.png" alt="" />
                </div>
                <div class="boxie">Flexible Work Hour</div>
              </div>

              <div class="wrap-ben">
                <div class="boxie">
                  <img src="@/assets/images/career/benefit.png" alt="" />
                </div>
                <div class="boxie">Holiday, Overtime, and other allowances</div>
              </div>

              <div class="wrap-ben">
                <div class="boxie">
                  <img src="@/assets/images/career/bpjs.png" alt="" />
                </div>
                <div class="boxie">BPJS Kesehatan & Ketenagakerjaan</div>
              </div>
            </div>
          </div>

          <div class="jd-box">
            <h2>Job Description</h2>
            <div class="requirement-box">
              <div class="wrap-req">
                <div class="boxie">
                  <img src="@/assets/images/career/rimba-point.png" alt="" />
                </div>
                <div class="boxie">
                  Gathering and evaluating user requirements, in collaboration
                  with product managers and engineers
                </div>
              </div>

              <div class="wrap-req">
                <div class="boxie">
                  <img src="@/assets/images/career/rimba-point.png" alt="" />
                </div>
                <div class="boxie">Identify and troubleshoot UX problems</div>
              </div>

              <div class="wrap-req">
                <div class="boxie">
                  <img src="@/assets/images/career/rimba-point.png" alt="" />
                </div>
                <div class="boxie">
                  Designing graphic user interface elements, like menus, tabs
                  and widgets
                </div>
              </div>

              <div class="wrap-req">
                <div class="boxie">
                  <img src="@/assets/images/career/rimba-point.png" alt="" />
                </div>
                <div class="boxie">
                  Develop UI mockups and prototypes that clearly illustrate how
                  sites function and look like
                </div>
              </div>

              <div class="wrap-req">
                <div class="boxie">
                  <img src="@/assets/images/career/rimba-point.png" alt="" />
                </div>
                <div class="boxie">
                  llustrating design ideas using storyboards, process flows and
                  sitemaps
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="boxie-job">
          <h2>Other Vacancy</h2>
          <div class="wrap-other">
            <div class="box-other">
              <h3>Software Engineer</h3>
              <div class="icon-list">
                <i class="fa-solid fa-hourglass-end icon-rim"></i>
                Full-time
              </div>
              <div class="icon-list" style="margin-bottom: 20px">
                <i class="fa-solid fa-map-location-dot icon-rim"></i>
                Jakarta, Indonesia
              </div>

              <router-link to="/career/detail" class="btn-details">
                See details
              </router-link>
            </div>

            <div class="box-other">
              <h3>DevOps</h3>
              <div class="icon-list">
                <i class="fa-solid fa-hourglass-end icon-rim"></i>
                Full-time
              </div>
              <div class="icon-list" style="margin-bottom: 20px">
                <i class="fa-solid fa-map-location-dot icon-rim"></i>
                Tangerang, Indonesia
              </div>

              <router-link to="/career/detail" class="btn-details">
                See details
              </router-link>
            </div>

            <div class="box-other">
              <h3>QA Engineer</h3>
              <div class="icon-list">
                <i class="fa-solid fa-hourglass-end icon-rim"></i>
                Full-time
              </div>
              <div class="icon-list" style="margin-bottom: 20px">
                <i class="fa-solid fa-map-location-dot icon-rim"></i>
                Tangerang, Indonesia
              </div>

              <router-link to="/career/detail" class="btn-details">
                See details
              </router-link>
            </div>

            <div class="box-other">
              <h3>Project Manager</h3>
              <div class="icon-list">
                <i class="fa-solid fa-hourglass-end icon-rim"></i>
                Full-time
              </div>
              <div class="icon-list" style="margin-bottom: 20px">
                <i class="fa-solid fa-map-location-dot icon-rim"></i>
                Tangerang, Indonesia
              </div>

              <router-link to="/career/detail" class="btn-details">
                See details
              </router-link>
            </div>

            <div class="box-other">
              <h3>Social Media Specialist</h3>
              <div class="icon-list">
                <i class="fa-solid fa-hourglass-end icon-rim"></i>
                Full-time
              </div>
              <div class="icon-list" style="margin-bottom: 20px">
                <i class="fa-solid fa-map-location-dot icon-rim"></i>
                Tangerang, Indonesia
              </div>

              <router-link to="/career/detail" class="btn-details">
                See details
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalForm v-show="showModal" @close-modal="showModal = false" />
  </div>
</template>

<script>
import ModalForm from "./modal/ModalForm.vue";

export default {
  components: { ModalForm },
  name: "DetailComp",
  props: {
    msg: String,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style>
.wrapper-careerdetails {
  background: #fff;
  padding: 140px 0px 70px 0px;
}
.show-pop {
  display: block;
}
.hide-pop {
  display: none;
}
.job-head {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  column-gap: 20px;
  background: radial-gradient(
    53.73% 69.69% at 50% 50%,
    #1b3d39 0%,
    #163331 49.3%,
    #0e2324 100%
  );
  border-radius: 8px;
  padding: 70px 100px;
}
.job-head .box:nth-child(1) {
  grid-column: span 5;
  margin: auto 0;
}
.job-head .box:nth-child(2) {
  grid-column: span 3;
  margin: auto 0;
}

.job-head .box h2 {
  text-align: left;
  font-weight: 700;
  font-size: 24px;
  font-family: "Nunito", sans-serif;
  color: #ffffff;
  margin-bottom: 30px;
}
.icon-list-detail {
  font-weight: 400;
  font-size: 16px;
  font-family: "Nunito", sans-serif;
  color: #ffffff;
  text-align: left;
  margin-bottom: 10px;
}
.icon-date-post {
  font-weight: 400;
  font-size: 16px;
  font-family: "Nunito", sans-serif;
  color: #444444;
  text-align: left;
  margin-bottom: 10px;
  margin-top: 20px;
}
.btn-career-details {
  background: #03808e;
  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  color: #fff;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  padding: 15px 20px;
  display: inline-block;
  float: right;
  cursor: pointer;
  border: 1px solid #03808e;
  transition: all 0.5s ease;
}
.btn-career-details:hover {
  background: transparent;
  color: #fff;
  transition: all 0.5s ease;
  border: 1px solid #fff;
}
.icon-rima {
  color: #fff;
  font-size: 21px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 15px;
  text-align: center;
  margin-bottom: 3px;
}
.icon-date {
  color: #444444;
  font-size: 14px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  text-align: center;
  margin-bottom: 3px;
  margin-left: 10px;
}
.icon-list-detail i {
  color: #fff;
  font-size: 21px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 15px;
  text-align: center;
  margin-bottom: 3px;
}

.job-detail {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  width: 100%;
  column-gap: 20px;
  margin-top: 30px;
}
.job-detail .boxie-job:nth-child(1) {
  grid-column: span 6;
  background: #f9f9f9;
  border-radius: 10px;
  padding: 40px;
  text-align: left;
}
.job-detail .boxie-job:nth-child(2) {
  grid-column: span 2;
  background: #f3fffc;
  border-radius: 8px;
  padding: 40px;
  text-align: left;
}
.job-detail .boxie-job:nth-child(2) h2 {
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  color: #03808e;
  font-family: "Nunito", sans-serif;
}
.job-detail .boxie-job h2 {
  margin-bottom: 25px;
  font-weight: 700;
  font-size: 24px;
  font-family: "Nunito", sans-serif;

  color: #444444;
}
.req-box {
  margin-bottom: 50px;
}
.requirement-box {
  width: 100%;
  display: block;
}
.wrap-req {
  display: flex;
  font-weight: 400;
  font-size: 16px;
  font-family: "Nunito", sans-serif;
  color: #444444;
  width: 100%;
  margin: 20px 0px;
}
.wrap-req .boxie:nth-child(1) {
  width: 2.5%;
  margin: auto;
}
.wrap-req .boxie:nth-child(2) {
  width: 97.5%;
  margin: auto;
  margin-left: 20px;
}
.wrap-req img {
  width: 100%;
  display: inline-block;
  vertical-align: middle;
  margin-top: 0px;
}
.man-box {
  margin-bottom: 50px;
}
.man-box span {
  background: #dfae00;
  border-radius: 6px;
  font-weight: 400;
  font-size: 14px;
  padding: 10px 20px;
  margin-right: 10px;
  color: #ffffff;
}
.ben-box {
  margin-bottom: 50px;
}
.wrap-ben {
  display: flex;
  font-weight: 400;
  font-size: 16px;
  font-family: "Nunito", sans-serif;
  color: #444444;
  width: 100%;
  margin: 20px 0px;
}
.wrap-ben .boxie:nth-child(1) {
  width: 6%;
  margin: auto;
}
.wrap-ben .boxie:nth-child(2) {
  width: 94%;
  margin: auto;
  margin-left: 20px;
  font-weight: 700;
  font-size: 16px;

  color: #444444;
}
.wrap-ben img {
  width: 100%;
  display: inline-block;
  vertical-align: middle;
  margin-top: 0px;
}
.box-other {
  width: 100%;
  margin-bottom: 50px;
}
.box-other h3 {
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 15px;
  color: #03808e;
}
@media (max-width: 1280px) {
  .wrapper-careerdetails {
    background: #fff;
    padding: 140px 20px 70px 20px;
  }
}
@media (max-width: 1100px) {
  .job-detail .boxie-job:nth-child(1) {
    grid-column: span 8;
    margin-bottom: 30px;
  }
  .job-detail .boxie-job:nth-child(2) {
    grid-column: span 8;
  }
  .job-detail .boxie-job:nth-child(2) .wrap-other {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    width: 100%;
    column-gap: 20px;
  }
  .box-other {
    grid-column: span 2;
  }
}
@media (max-width: 992px) {
  .job-head {
    padding: 70px 70px;
  }

  .mandatory-box {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    width: 100%;
    column-gap: 10px;
  }
  .mandatory-box span {
    grid-column: span 2;
    text-align: center;
    width: 100%;
    margin-bottom: 10px;
  }
}
@media (max-width: 600px) {
  .job-head .box:nth-child(1) {
    grid-column: span 8;
    margin: auto 0;
    margin-bottom: 20px;
  }
  .job-head .box:nth-child(2) {
    grid-column: span 8;
    float: none;
    margin: auto;
  }
  .wrap-req .boxie:nth-child(1) {
    width: 5%;
    margin: auto;
  }
  .wrap-req .boxie:nth-child(2) {
    width: 95%;
    margin: auto;
    margin-left: 20px;
  }
  .mandatory-box {
    grid-template-columns: repeat(6, 1fr);
  }
  .mandatory-box span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .wrap-ben .boxie:nth-child(1) {
    width: 12%;
    margin: auto;
  }
  .wrap-ben .boxie:nth-child(2) {
    width: 88%;
  }
  .job-detail .boxie-job:nth-child(2) .wrap-other {
    grid-template-columns: repeat(4, 1fr);
  }
  .wrap-req .boxie:nth-child(1) {
    width: 10%;
  }
  .wrap-req .boxie:nth-child(2) {
    width: 90%;
  }
  .mandatory-box {
    grid-template-columns: repeat(4, 1fr);
  }
  .wrap-ben .boxie:nth-child(1) {
    width: 20%;
  }
  .wrap-ben .boxie:nth-child(2) {
    width: 80%;
  }
  .job-detail .boxie-job:nth-child(2) .wrap-other {
    grid-template-columns: repeat(2, 1fr);
  }
  .wrapper-careerdetails {
    background: #fff;
    padding: 140px 10px 70px 10px;
  }
}
@media (max-width: 300px) {
  .job-head {
    padding: 70px 30px;
  }
  .job-detail .boxie-job:nth-child(1) {
    padding: 40px 20px;
  }
  .mandatory-box {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
