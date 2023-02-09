<template>
  <div class="wrapper-timeline">
    <div class="container">
      <div class="box-timeline">
        <div class="boxie">
          <div class="title-wrap-2">
            <h2>Our Journey</h2>
            <div class="circle-title"></div>
            <p>
              Like a seed that has just finished its dormancy, it keeps
              growing...
            </p>
          </div>

          <div class="journey-carousel">
            <div class="box" v-for="journey in allJourney" :key="journey.id">
              <div class="timeline-marker">
                <span class="year-number">{{journey.start_year}}</span>
              </div>
              <div class="bigBox">
                <div class="boxie">
                  <img :src="media + journey.image" :alt="journey.alt_text" />
                </div>
                <div class="boxie">
                  <h2>{{ journey.name }}</h2>
                  <div v-html="journey.description"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="boxie">
          <div class="title-wrap-2">
            <h2>Our Team</h2>
            <div class="circle-title"></div>
            <p>Get to Know Our Insects</p>
          </div>
          <div class="team-carousel">
            <div class="team__item" v-for="member in team" :key="member.id">
              <img :src="media + member.image" :alt="member.alt_text" />
              <h2>{{ member.name }}</h2>
              <p class="role-user">{{ member.position }}</p>
              <div class="role-quotes" v-html="member.description">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getContent} from "@/api/rimba";
export default {
  name: "TimelineComp",
  props: {
    msg: String,
  },
  data() {
    return {
      allJourney:[],
      team:[],
      media: process.env.VUE_APP_MEDIA_URL
    }
  },
  methods: {
    async refreshJourney(){
      const getResponse = await getContent("journey");
      if(getResponse.status == 200){
        this.allJourney = getResponse.data.data;
      }else{
        console.log(getResponse);
      }
    },
    async refreshTeam(){
      const getResponse = await getContent("team");
      if(getResponse.status == 200){
        this.team = getResponse.data.data;
      }else{
        console.log(getResponse);
      }
    }
  },
  mounted() {
    this.refreshJourney();
    this.refreshTeam();
  },
};
</script>

<style>
.wrapper-timeline {
  position: relative;
  background: #052e40;
  padding: 90px 0px;
  margin: 0 auto;
}
.box-timeline {
  display: flex;
  width: 100%;
}
.box-timeline .boxie:nth-child(1) {
  position: relative;
  width: 65%;
}
.box-timeline .boxie:nth-child(2) {
  width: 35%;
}
.box-timeline .boxie .title-wrap-2 {
  position: relative;
}
.box-timeline .boxie .title-wrap-2 h2 {
  font-weight: 700;
  font-size: 30px;
  line-height: 34px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #fff9f9;
  text-shadow: 10px 10px 40px rgba(255, 255, 255, 0.25);
  z-index: 10;
  position: relative;
  margin-bottom: 10px;
}
.box-timeline .boxie .title-wrap-2 p {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #fff9f9;
  text-shadow: 10px 10px 40px rgba(255, 255, 255, 0.25);
}
.box-timeline .boxie:nth-child(1) .title-wrap-2 .circle-title {
  position: absolute;
  left: -2%;
  right: 87.06%;
  top: -17.69%;
  background: #9fbf5b;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  z-index: 9;
}
.box-timeline .boxie:nth-child(2) .title-wrap-2 .circle-title {
  position: absolute;
  left: -4%;
  right: 87.06%;
  top: -17.69%;
  background: #9fbf5b;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  z-index: 9;
}
.timeline-img {
  width: 100%;
}
.timeline-img img {
  width: 100%;
}
.journey-carousel {
  margin-top: 80px;
  height: 121vh;
  overflow-y: auto;
  scroll-snap-type: y;
  margin-left: 0px;
  margin-right: 70px;
  direction: rtl;
  position: relative;
}
.timeline-marker {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 15px;
  margin-right: 30px;
}
.year-number {
  position: absolute;
  top: 18.2px;
  left: 10.2px;
  color: #fff;
  z-index: 10;
}
.timeline-marker::before {
  border: 2px solid #fff;
  border-radius: 100%;
  content: "";
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #052e40;
  height: 40px;
  position: absolute;
  top: 4px;
  left: 0;
  width: 40px;
  padding: 5px;
  color: #fff;
  transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
  z-index: 10;
}
.timeline-marker::after {
  content: "";
  width: 3px;
  background: #ccd5db;
  display: block;
  position: absolute;
  top: 24px;
  bottom: 0;
  left: 26px;
  height: 377px;
}

.timeline-marker-2 {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 15px;
  margin-right: 30px;
}
.timeline-marker-2::before {
  border: 2px solid #fff;
  border-radius: 100%;
  content: "2018";
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #052e40;
  height: 40px;
  position: absolute;
  top: 4px;
  left: 0;
  width: 40px;
  padding: 5px;
  color: #fff;
  transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
  z-index: 10;
}
.timeline-marker-2::after {
  content: "";
  width: 3px;
  background: #ccd5db;
  display: block;
  position: absolute;
  top: -20px;
  bottom: 0;
  left: 26px;
  height: 25px;
}
.timeline-marker-3 {
  position: absolute;
  top: 70px;
  bottom: 0;
  left: 0;
  width: 15px;
  margin-right: 30px;
}
.timeline-marker-3::before {
  border: 2px solid #fff;
  border-radius: 100%;
  content: "2019";
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #052e40;
  height: 40px;
  position: absolute;
  top: 4px;
  left: 0;
  width: 40px;
  padding: 5px;
  color: #fff;
  transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
  z-index: 10;
}
.timeline-marker-3::after {
  content: "";
  width: 3px;
  background: #ccd5db;
  display: block;
  position: absolute;
  top: 5px;
  bottom: 0;
  left: 26px;
}

.timeline-marker-5 {
  position: absolute;
  top: 0px;
  bottom: 0;
  left: 0;
  width: 15px;
  margin-right: 30px;
}
.timeline-marker-5::before {
  border: 2px solid #fff;
  border-radius: 100%;
  content: "2020";
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #052e40;
  height: 40px;
  position: absolute;
  top: 4px;
  left: 0;
  width: 40px;
  padding: 5px;
  color: #fff;
  transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
  z-index: 10;
}
.timeline-marker-5::after {
  content: "";
  width: 3px;
  background: #ccd5db;
  display: block;
  position: absolute;
  top: -20px;
  bottom: 0;
  left: 26px;
}
/* STYLING SCROLLBAR */

.journey-carousel::-webkit-scrollbar {
  width: 0.5vw; /* THIS WILL RESET THE DEFAULT SCORLLBAR STYLING */
  display: none;
}

/* TO STYLE THE SCROLLBAR TRACK */
.journey-carousel::-webkit-scrollbar-track {
  background-color: transparent; /* THIS WILL SET THE COLOR OF THE SCROLLBAR TRACK */
}

/* TO STYLE THE SCROLLBAR THUMB */
.journey-carousel::-webkit-scrollbar-thumb {
  background-color: #f2a65e;
  border: 0.3vw solid transparent;
  border-radius: 5vw;
}
.journey-carousel .box {
  scroll-snap-align: start;
  position: relative;
  direction: ltr;
}

.box-journey {
  display: block;
  width: 95%;
}
.journey-carousel .box .bigBox {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 88%;
  column-gap: 20px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 20px;
  direction: ltr;
  margin-left: 70px;
}
.journey-carousel .box .boxie {
  grid-column: span 4;
  width: 100%;
  margin: auto;
}
.journey-carousel .box .boxie:nth-child(2) {
  grid-column: span 3;
}
.journey-carousel .box h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: #fff9f9;
  text-shadow: 10px 10px 40px rgba(255, 255, 255, 0.25);
  text-align: left;
  margin-bottom: 20px;
}
.journey-carousel .box p {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #fff9f9;
  text-shadow: 10px 10px 40px rgba(255, 255, 255, 0.25);
  text-align: left;
}
.journey-carousel .box img {
  width: 100%;
  border-radius: 8px;
}

/* Scrolled Team */
.team-carousel {
  margin-top: 80px;
  height: 114vh;
  overflow-y: auto;
  scroll-snap-type: y;
  padding-right: 35px;
}
/* STYLING SCROLLBAR */

.team-carousel::-webkit-scrollbar {
  width: 0.5vw; /* THIS WILL RESET THE DEFAULT SCORLLBAR STYLING */
}

/* TO STYLE THE SCROLLBAR TRACK */
.team-carousel::-webkit-scrollbar-track {
  background-color: transparent; /* THIS WILL SET THE COLOR OF THE SCROLLBAR TRACK */
}

/* TO STYLE THE SCROLLBAR THUMB */
.team-carousel::-webkit-scrollbar-thumb {
  background-color: #f2a65e;
  border: 0.3vw solid transparent;
  border-radius: 5vw;
}
.team__item {
  background: #ffffff;
  border-radius: 16px;
  padding: 50px 60px;
  width: 100%;
  margin-bottom: 20px;
}
.team__item:nth-last-child(1) {
  margin-bottom: 0px;
}
.team__item img {
  width: 50%;
}
.team__item h2 {
  font-weight: 700;
  font-size: 20px;
  margin-top: 10px;
  text-align: center;
  font-family: "Poppins", sans-serif;
  color: #02647a;
}
.team__item .role-user {
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  text-align: center;
  color: #1d372c;
}
.team__item .role-quotes {
  font-weight: 400;
  font-size: 15px;

  text-align: center;
  color: #000000;
  margin: auto;
  font-family: "Poppins", sans-serif;
  margin-top: 20px;
}
/* End Scrolled Team */
@media (max-width: 1660px) {
  .journey-carousel {
    height: 155vh;
  }
  .team-carousel {
    height: 147vh;
  }
}
@media (max-width: 1440px) {
  .team-carousel {
    height: 119vh;
  }
  .box-timeline .boxie:nth-child(1) .title-wrap-2 .circle-title {
    left: -2.3%;
  }
  .box-timeline .boxie:nth-child(2) .title-wrap-2 .circle-title {
    left: -4.5%;
  }
  .team-carousel {
    height: 134vh;
  }
}
@media (max-width: 1370px) {
  .wrapper-timeline {
    padding: 90px 50px !important;
  }
}
@media (max-width: 1024px) {
  .wrapper-timeline {
    padding: 90px 20px !important;
  }
  .body-box .box {
    margin: auto;
  }
  .body-box .box p {
    padding-right: 0px;
  }
}
@media (max-width: 1200px) {
  .team-carousel {
    height: 107vh;
  }
  .journey-carousel {
    height: 110vh;
  }
}
@media (max-width: 992px) {
  .body-box .box {
    grid-column: span 6;
  }
  .body-box .box:nth-child(2) {
    margin: auto;
    padding: 0px 120px;
    margin-top: 20px;
  }
  .box-timeline .box {
    grid-column: span 6;
  }
  .wrapper-timeline {
    padding: 90px 50px !important;
  }
  .box-timeline .boxie:nth-child(1) {
    position: relative;
    width: 60%;
  }
  .box-timeline .boxie:nth-child(2) {
    width: 40%;
  }
  .journey-carousel .box .bigBox {
    width: 82%;
  }
  .bigBox .boxie {
    width: 100% !important;
    grid-column: span 7 !important;
  }
  .journey-carousel {
    margin-right: 35px;
  }
  .team__item {
    padding: 50px 40px;
  }
  .team-carousel {
    height: 95vh;
  }
  .journey-carousel {
    height: 98vh;
  }
  .box-timeline .boxie:nth-child(1) .title-wrap-2 .circle-title {
    left: -4.3%;
  }
  .box-timeline .boxie:nth-child(2) .title-wrap-2 .circle-title {
    left: -6.5%;
  }
}
@media (max-width: 820px) {
  .box-timeline .boxie:nth-child(1) .title-wrap-2 .circle-title {
    left: -4.3%;
    top: -13.69% !important;
  }
  .box-timeline .boxie .title-wrap-2 p {
    text-align: left;
  }
  .journey-carousel {
    height: 111vh;
    margin-top: 57px;
  }
  .team-carousel {
    height: 107vh;
  }
}
@media (max-width: 768px) {
  .box-timeline {
    display: block;
  }
  .journey-carousel .box .bigBox {
    width: 100%;
  }
  .box-timeline .boxie:nth-child(1) {
    width: 100%;
  }
  .journey-carousel {
    margin-right: 0px;
    margin-bottom: 100px;
  }
  .journey-carousel .box .bigBox {
    width: 89%;
  }
  .journey-carousel .box img {
    width: 100%;
    object-fit: cover;
    height: 250px;
    object-position: top;
    border-radius: 8px;
    margin-bottom: 20px;
  }
  .journey-carousel::-webkit-scrollbar {
    display: none;
  }
  /* .team-carousel::-webkit-scrollbar {
    display: none;
  } */
  .box-timeline .boxie:nth-child(1) .title-wrap-2 .circle-title {
    left: -3%;
    top: -18.69% !important;
  }
  .box-timeline .boxie:nth-child(2) {
    width: 100%;
  }
  .box-timeline .boxie:nth-child(2) .title-wrap-2 .circle-title {
    left: -2.6%;
  }
  .team-carousel {
    padding-right: 0px;
    padding: 0px 80px;
  }
}
@media (max-width: 600px) {
  .body-box .box:nth-child(2) {
    padding: 0px 0px;
  }
  .wrapper-timeline {
    padding: 90px 10px !important;
  }
  .box-timeline .boxie .title-wrap-2 h2 {
    justify-content: center;
  }
  .box-timeline .boxie .title-wrap-2 p {
    justify-content: center;
    text-align: center;
  }
  .box-timeline .boxie:nth-child(1) .title-wrap-2 .circle-title {
    left: 28%;
  }
  .journey-carousel .box .bigBox {
    width: 86%;
  }
  .box-timeline .boxie:nth-child(2) .title-wrap-2 .circle-title {
    left: 31.4%;
  }
  .team-carousel {
    padding-right: 0px;
    padding: 0px 30px;
  }
}
@media (max-width: 500px) {
  .body-box {
    -moz-column-gap: 0px;
    column-gap: 0px;
  }
  .box-timeline {
    column-gap: 0px;
  }
  .journey-carousel .box .bigBox {
    width: 82%;
  }
  .box-timeline .boxie:nth-child(1) .title-wrap-2 .circle-title {
    left: 21%;
    top: -14.69% !important;
  }
  .box-timeline .boxie:nth-child(2) .title-wrap-2 .circle-title {
    left: 25.5%;
  }
  .team-carousel {
    padding-right: 0px;
    padding: 0px 0px;
  }
  .team-carousel::-webkit-scrollbar {
    display: none;
  }
}
@media (max-width: 400px) {
  .box-timeline .boxie:nth-child(1) .title-wrap-2 .circle-title {
    left: 19%;
    top: -14.69% !important;
  }
  .box-timeline .boxie:nth-child(2) .title-wrap-2 .circle-title {
    left: 24.5%;
  }
}
@media (max-width: 377px) {
  .box-timeline .boxie:nth-child(1) .title-wrap-2 .circle-title {
    left: 18%;
    top: -14.69% !important;
  }
  .journey-carousel .box .bigBox {
    width: 80%;
  }
  .box-timeline .boxie:nth-child(2) .title-wrap-2 .circle-title {
    left: 23.5% !important;
  }
}
@media (max-width: 360px) {
  .box-timeline .boxie:nth-child(1) .title-wrap-2 .circle-title {
    left: 16%;
    top: -14.69% !important;
  }
  .timeline-marker::before {
    height: 30px;
    width: 30px;
    font-size: 12px;
  }
  .timeline-marker-2::before {
    height: 30px;
    width: 30px;
    font-size: 12px;
  }
  .timeline-marker-3::before {
    height: 30px;
    width: 30px;
    font-size: 12px;
  }
  .timeline-marker-5::before {
    height: 30px;
    width: 30px;
    font-size: 12px;
  }
  .timeline-marker::after {
    left: 21px;
  }
  .timeline-marker-2::after {
    left: 21px;
  }
  .timeline-marker-3::after {
    left: 21px;
  }
  .timeline-marker-5::after {
    left: 21px;
  }
  .journey-carousel .box .bigBox {
    width: 84%;
    margin-left: 55px;
  }
  .box-timeline .boxie:nth-child(2) .title-wrap-2 .circle-title {
    left: 21.5% !important;
  }
}
@media (max-width: 300px) {
  .box-timeline .boxie .title-wrap-2 h2 {
    font-size: 26px;
  }
  .journey-carousel .box h2 {
    font-size: 15px;
  }
  .journey-carousel .box img {
    height: 150px;
  }
  .journey-carousel .box p {
    font-size: 12px;
  }
  .journey-carousel .box .bigBox {
    width: 79%;
    margin-left: 55px;
  }
  .box-timeline .boxie:nth-child(1) .title-wrap-2 .circle-title {
    left: 9%;
    top: -14.69% !important;
  }
  .box-timeline .boxie:nth-child(2) .title-wrap-2 .circle-title {
    left: 15.5% !important;
  }
}
</style>
