<template>
  <div class="modal-overlay show-pop">
    <div class="modal modal-form show-pop" @click.stop>
      <div class="head-form">
        <div class="boxie">
          <img src="@/assets/images/career/rimba-logo.png" alt="" />
        </div>
        <div class="boxie">
          You are applying for a <strong>{{ career.name }}</strong> position
          <br />
          at <strong>{{ career.locatione.name }}</strong>
        </div>
      </div>
      <form @submit.prevent="submitForm()">
        <div class="career-form">
          <div class="boxie">
            <div class="form-group">
              <label for="fullname">
                Full Name <span class="required-star">*</span>
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                class="input-form"
                placeholder="Type your text here"
                v-model="formData.name"
              />
            </div>

            <div class="form-group">
              <label for="phonenumber">
                Phone Number <span class="required-star">*</span>
              </label>
              <input
                type="text"
                id="phone"
                class="form-control input-form"
                placeholder="8xxx xxxx xxxx"
                name="phone_number"
                v-model="formData.phone_number"
              />
            </div>

            <div class="form-group">
              <label for="upload-cv">
                Upload Your CV/Resume <span class="required-star">*</span>
              </label>
              <div class="drag-area">
                <div class="icon"><i class="fas fa-cloud-upload-alt"></i></div>
                <p>Upload the document in .PDF max 10MB</p>
                <br />

                <button type="button">Browse File</button>
                <input type="file" hidden @change="selectFile" />
              </div>
            </div>
          </div>
          <div class="boxie">
            <div class="form-group">
              <label for="email">
                Email <span class="required-star">*</span>
              </label>
              <input
                type="text"
                id="email"
                name="email"
                class="input-form"
                placeholder="Type your text here"
                v-model="formData.email"
              />
            </div>

            <div class="form-group">
              <label for="cover-letter">
                Cover Letter <span class="required-star">*</span>
              </label>
              <textarea
                name="coverl"
                id="cover-letter"
                placeholder="Write your cover letter here..."
                v-model="formData.cover_letter"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="button-wrap float-right">
          <button
            @click="showModalClose = true"
            class="btn-cancel ml-2"
            type="button"
          >
            Close
          </button>
          <!-- <input type="checkbox" id="check" />
          <label class="show_button" for="check">Close</label> -->
          <button class="btn-ok ml-2" type="submit">Send</button>
        </div>
      </form>
    </div>
    <ModalSuccess
      v-show="showModalSuccess"
      @close-modal="showModalSuccess = false"
    />
    <ModalClose v-show="showModalClose" @close-modal="showModalClose = false" />
  </div>
</template>

<script>
import $ from "jquery";

import ModalSuccess from "./ModalSuccess.vue";
import ModalClose from "./ModalClose.vue";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { postContent } from "@/api/rimba";

export default {
  components: { ModalSuccess, ModalClose },
  data() {
    return {
      showModalSuccess: false,
      showModalClose: false,
      formData: {
        name: "",
        email: "",
        phone_number: "",
        cv: null,
        cover_letter: "",
      },
    };
  },
  props: {
    career: Object,
  },
  name: "ModalForm",
  mounted: function () {
    $(".btn-ok").click(function () {
      $(".modal-form").removeClass("show-pop");
      $(".modal-form").addClass("hide-pop");
    });
    $(".btn-close-success").click(function () {
      $(".modal-overlay").removeClass("show-pop");
      $(".modal-overlay").addClass("hide-pop");
      $(".modal-close").removeClass("show-pop");
      $(".modal-close").addClass("hide-pop");
    });
    $(".btn-career-details").click(function () {
      $(".modal-overlay").removeClass("hide-pop");
      $(".modal-overlay").addClass("show-pop");
      $(".modal-form").removeClass("hide-pop");
      $(".modal-form").addClass("show-pop");
      $(".modal-form").css("opacity", "1");
    });
    $(".btn-yes").click(function () {
      $(".modal-close").addClass("hide-pop");
      $(".modal-form").css("opacity", "1");
    });
    $(".btn-cancel").click(function () {
      $(".modal-close").addClass("show-pop");
      $(".modal-close").removeClass("hide-pop");
      $(".modal-form").css("opacity", "0");
    });
    const inputTelp = document.querySelector("#phone");
    intlTelInput(inputTelp, {
      initialCountry: "id",
      separateDialCode: true,
    });

    //selecting all required elements
    const dropArea = document.querySelector(".drag-area"),
      dragText = dropArea.querySelector("header"),
      button = dropArea.querySelector("button"),
      input = dropArea.querySelector("input");
    let file; //this is a global variable and we'll use it inside multiple functions

    button.onclick = () => {
      input.click(); //if user click on the button then the input also clicked
    };

    // input.addEventListener("change", function () {
    //   //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    //   // this.formData.cv = this.files[0];
    //   console.log(this.files[0]);
    //   dropArea.classList.add("active");
    //   showFile(); //calling function
    // });

    // //If user Drag File Over DropArea
    // dropArea.addEventListener("dragover", (event) => {
    //   event.preventDefault(); //preventing from default behaviour
    //   dropArea.classList.add("active");
    //   dragText.textContent = "Release to Upload File";
    // });

    // //If user leave dragged File from DropArea
    // dropArea.addEventListener("dragleave", () => {
    //   dropArea.classList.remove("active");
    //   dragText.textContent = "Drag & Drop to Upload File";
    // });

    // //If user drop File on DropArea
    // dropArea.addEventListener("drop", (event) => {
    //   event.preventDefault(); //preventing from default behaviour
    //   //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    //   this.formData.cv = event.dataTransfer.files[0];
    //   showFile(); //calling function
    // });
  },
  methods: {
    async submitForm() {
      const tempData = {
        name: this.formData.name,
        email: this.formData.email,
        phone_number: this.formData.phone_number,
        cv: this.formData.cv,
        cover_letter: this.formData.cover_letter
      }
      console.log(tempData);
      const getResponse = await postContent("career-form", tempData);
      if (getResponse.status == 200) {
        this.showModalSuccess = true;
        this.formData.name= "";
        this.formData.email= "";
        this.formData.phone_number= "";
        this.formData.cv= null;
        this.formData.cover_letter= "";
      } else {
        console.log(getResponse);
      }
    },
    selectFile(event) {
      const dropArea = document.querySelector(".drag-area");
      const files = event.target.files;
      if (files.length > 0) {
        this.formData.cv = files[0];
        dropArea.classList.add("active");
        this.showFile();
      } else {
        this.formData.cv = null;
        dropArea.classList.remove("active");
      }
      console.log(this.formData.cv);
    },
    showFile() {
      const dropArea = document.querySelector(".drag-area");
      let fileType = this.formData.cv.type; //getting selected file type
      let validExtensions = ["application/pdf"]; //adding some valid image extensions in array
      if (validExtensions.includes(fileType)) {
        //if user selected file is an image file
        let fileReader = new FileReader(); //creating new FileReader object
        fileReader.onload = () => {
          let fileURL = fileReader.result; //passing user file source in fileURL variable
          // UNCOMMENT THIS BELOW LINE. I GOT AN ERROR WHILE UPLOADING THIS POST SO I COMMENTED IT
          // let imgTag = `<img src="${fileURL}" alt="image">`; //creating an img tag and passing user selected file source inside src attribute
          dropArea.innerHTML = this.formData.cv.name; //adding that created img tag inside dropArea container
        };
        fileReader.readAsDataURL(this.formData.cv);
      } else {
        alert("This is not an PDF File!");
        dropArea.classList.remove("active");
        dragText.textContent = "Drag & Drop to Upload File";
      }
    },
  },
};
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #00000075;
}
.modal {
  text-align: center;
  background-color: white;
  width: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 50px;
  background: #ffffff;
  border-radius: 8px;
}
.close {
  margin-top: 20px;
  cursor: pointer;
}
.close-img {
  width: 25px;
}
.check {
  width: 150px;
}
.button-wrap {
  float: right;
}
.btn-close-success {
  background: #ececec;
  border-radius: 8px;
  font-weight: 400;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  color: #8e8e8e;
  border: none;
  padding: 10px 20px;
  margin: 0px 5px;
  cursor: pointer;
}

.btn-cancel {
  background: #ececec;
  border-radius: 8px;
  font-weight: 400;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  color: #8e8e8e;
  border: none;
  padding: 10px 20px;
  margin: 0px 5px;
  cursor: pointer;
}

.btn-ok {
  background: #21918a;
  border-radius: 8px;
  font-weight: 400;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  border: none;
  padding: 10px 30px;
  margin: 0px 5px;
  cursor: pointer;
}
.head-form {
  display: flex;
  width: 100%;
  padding: 0px 70px;
  margin-bottom: 20px;
}
.head-form .boxie:nth-child(1) {
  width: 20%;
}
.head-form .boxie:nth-child(1) img {
  width: 100%;
  text-align: center;
}
.head-form .boxie:nth-child(2) {
  width: 80%;
  font-weight: 400;
  font-size: 20px;
  margin: auto;
  align-items: center;
  justify-content: center;
  color: #444444;
}
.career-form {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  column-gap: 20px;
  text-align: left;
}
.career-form .boxie {
  grid-column: span 3;
}
.form-group {
  display: block;
  margin-bottom: 20px;
}
.form-group label {
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  font-family: "Nunito", sans-serif;
  color: #444444;
  width: 100%;
  margin-bottom: 5px;
}
.form-group .input-form {
  width: 100%;
  border: 1px solid #c6c6c6;
  border-radius: 4px;
  height: 35px;
  font-family: "Nunito", sans-serif;
  padding: 5px 10px;
}
.form-group .input-form::placeholder {
  color: #8e8e8e;
}
.required-star {
  color: red;
}
.intl-tel-input,
.iti {
  width: 100%;
}
.iti--separate-dial-code .iti__selected-dial-code {
  margin-left: 6px;
  font-size: 14px;
}
.iti__flag-box,
.iti__country-name {
  margin-right: 6px;
  font-size: 14px;
}
.iti__flag-box,
.iti__country-name,
.iti__dial-code {
  vertical-align: middle;
  font-size: 14px;
}
.form-group textarea {
  width: 100%;
  border: 1px solid #c6c6c6;
  border-radius: 4px;
  padding: 10px 10px;
  font-family: "Nunito", sans-serif;
  height: 222px;
  overflow-y: auto;
}
/* Upload Box */
.drag-area {
  border: 2px dashed #8e8e8e;
  height: auto;
  width: 100%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 18px;
}
.drag-area.active {
  border: 2px solid #000;
}
.drag-area .icon {
  font-size: 32px;
  color: #8e8e8e;
}
.drag-area header {
  font-size: 30px;
  font-weight: 500;
  color: #000;
}
.drag-area p {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;

  color: #8e8e8e;
}
.drag-area span {
  font-size: 25px;
  font-weight: 500;
  color: #000;
  margin: 10px 0 15px 0;
}
.drag-area button {
  padding: 5px 25px !important;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  width: auto;
  color: #fff;
  border: none;
  outline: none;
  background: #8e8e8e;
  border-radius: 5px;
  cursor: pointer;
  margin-top: -15px;
}
.drag-area img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
}
/* End Upload Box */

/* lainnya */
.alert_box {
  padding: 30px;
  display: flex;
  background: #fff;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 450px;
  width: 100%;
  border-radius: 5px;
  z-index: 5;
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, -50%) scale(0.97);
  transition: all 0.3s ease;
}
#check:checked ~ .alert_box {
  opacity: 1;
  pointer-events: auto;
  transform: translate(-50%, -50%) scale(1);
}
#check:checked ~ .background {
  opacity: 1;
  pointer-events: auto;
}
#check {
  display: none;
}
.alert_box .icon {
  height: 100px;
  width: 100px;
  color: #f23b26;
  border: 3px solid #f23b26;
  border-radius: 50%;
  line-height: 97px;
  font-size: 50px;
}
.alert_box header {
  font-size: 35px;
  font-weight: 500;
  margin: 10px 0;
}
.alert_box p {
  font-size: 20px;
}
.alert_box .btns {
  margin-top: 20px;
}
.btns label {
  display: inline-flex;
  height: 55px;
  padding: 0 30px;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  line-height: 55px;
  outline: none;
  margin: 0 10px;
  border: none;
  color: #fff;
  border-radius: 5px;
  transition: all 0.3s ease;
}
.btns label:first-child {
  background: #2980b9;
}
.btns label:first-child:hover {
  background: #2573a7;
}
.btns label:last-child {
  background: #f23b26;
}
.btns label:last-child:hover {
  background: #d9210d;
}
.modal-overlay {
  z-index: 11000;
}
@media (max-width: 1440px) {
  .modal {
    width: 75%;
  }
}
@media (max-width: 1100px) {
  .modal {
    width: 90%;
  }
}
@media (max-width: 992px) {
  .modal {
    width: 95%;
  }
}
@media (max-width: 600px) {
  .career-form {
    height: 350px;
    overflow: auto;
  }
  .head-form {
    display: block;
    padding: 0px 0px;
  }
  .head-form .boxie:nth-child(1) {
    width: 20%;
    margin: auto;
  }
  .head-form .boxie:nth-child(2) {
    width: 100%;
    font-size: 16px;
  }
  .modal {
    padding: 20px 20px;
  }
}
@media (max-width: 500px) {
  .head-form .boxie:nth-child(2) {
    width: 100%;
    font-size: 15px;
  }
  .modal.modal-success {
    padding: 100px 20px;
    margin: auto;
  }
}
@media (max-width: 400px) {
  .modal.modal-success p {
    font-size: 13px;
  }
  .modal.modal-close p {
    font-size: 13px;
  }
  .modal.modal-close h2 {
    font-size: 20px;
  }
  .modal.modal-success h2 {
    font-size: 20px;
  }
  .head-form .boxie:nth-child(2) {
    font-size: 13px;
  }
}
</style>
