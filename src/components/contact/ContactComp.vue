<template>
  <div class="wrapper-events">
    <div class="container">
      <div class="head-box">
        <img src="@/assets/images/cloud-1.png" alt="" class="cloud-1" />
        <img src="@/assets/images/cloud-2.png" alt="" class="cloud-2" />
        <img src="@/assets/images/cloud-3.png" alt="" class="cloud-3" />
        <img src="@/assets/images/pattern-1.png" alt="" class="pattern-1" />
        <img src="@/assets/images/pattern-2.png" alt="" class="pattern-2" />

        <div class="text-box">
          <h2>Contact Us</h2>
          <p class="service-sub">Connect and work together wonderfully!</p>
        </div>
      </div>

      <div class="body-contact">
        <form action="" class="form-window show-pop">
          <div class="form-contact">
            <div class="boxie">
              <div class="con-wrap">
                <i class="fa-solid fa-user"></i>
                <input
                  type="text"
                  placeholder="First Name"
                  name="text"
                  autocomplete="off"
                  required
                />
              </div>
            </div>
            <div class="boxie">
              <div class="con-wrap">
                <i class="fa-solid fa-user"></i>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="text"
                  autocomplete="off"
                  required
                />
              </div>
            </div>
            <div class="boxie">
              <div class="con-wrap">
                <i class="fa-solid fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email Address"
                  name="text"
                  autocomplete="off"
                  required
                />
              </div>
            </div>
            <div class="boxie">
              <div class="con-wrap">
                <i class="fa-solid fa-phone"></i>
                <input
                  type="number"
                  placeholder="Phone Number"
                  name="text"
                  autocomplete="off"
                  required
                />
              </div>
            </div>
          </div>
          <div class="text-box">
            <textarea
              name=""
              id=""
              rows="13"
              placeholder="Type message here"
            ></textarea>
          </div>
          <!-- <button type="submit" class="btn-send">Send</button> -->
          <div type="submit" class="btn-send">Send</div>
        </form>

        <div class="send-success hide-pop">
          <img src="@/assets/images/send.png" alt="" />
          <h2>Woo hoo!</h2>
          <p>
            Your message was sent.
            <br />
            We will be in touch further via email. Check it regularly!
          </p>
          <a href="" class="btn-back">Back</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "ContactComp",
  props: {
    msg: String,
  },
  mounted: function () {
    $(".btn-send").click(function () {
      $(".form-window").removeClass("show-pop");
      $(".form-window").addClass("hide-pop");
      $(".send-success").removeClass("hide-pop");
      $(".send-success").addClass("show-pop");
    });
  },
};
</script>

<style>
.body-contact {
  padding: 100px 250px 70px 250px;
}
.form-contact {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  column-gap: 20px;
}
.form-contact .boxie {
  grid-column: span 3;
  margin-bottom: 20px;
}
.con-wrap {
  display: flex;
  background: #efefef;
  padding: 15px 15px 15px 15px;
  border-radius: 10px;
}
.con-wrap i {
  display: inline-block;
  vertical-align: middle;
  font-size: 20px;
  color: #666666;
}
.con-wrap input {
  width: 100%;
  background: transparent;
  border: none;
  padding-left: 10px;
  font-family: "Poppins", sans-serif;
  color: #666666;
}
.con-wrap input:focus {
  outline: none;
  background: transparent;
}
.text-box textarea {
  background: #efefef;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  border: none;
  font-family: "Poppins", sans-serif;
  color: #666666;
}
.btn-send {
  background: #21918a;
  width: 100%;
  border-radius: 10px;
  padding: 15px 0px;
  border: none;
  font-weight: 400;
  font-size: 16px;
  margin-top: 30px;
  text-align: center;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  cursor: pointer;
}

.send-success img {
  width: 20%;
  margin-bottom: 30px;
}
.send-success h2 {
  font-weight: 600;
  font-size: 26px;
  margin-bottom: 20px;
  color: #444444;
}

.send-success p {
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #666666;
  margin-bottom: 40px;
}

.send-success a {
  background: #21918a;
  border-radius: 8px;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  padding: 10px 40px;
  text-decoration: none;
  color: #ffffff;
}
@media (max-width: 992px) {
  .body-contact {
    padding: 100px 200px 70px 200px;
  }
}
@media (max-width: 600px) {
  .body-contact {
    padding: 100px 30px 70px 30px;
  }
  .send-success img {
    width: 35%;
    margin-bottom: 30px;
  }
}
@media (max-width: 400px) {
  .body-contact {
    padding: 100px 10px 70px 10px;
  }
}
</style>
