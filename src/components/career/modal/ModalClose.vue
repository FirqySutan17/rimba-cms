<template>
  <div class="modal modal-close">
    <img src="@/assets/images/warning.png" alt="" />
    <h2>Your data will be removed</h2>
    <p>Are you sure to cancel this process?</p>
    <div class="button-wrap close-warning">
      <button class="btn-yes ml-2" type="button">Cancel</button>
      <button
        class="btn-close-success ml-2"
        style="background: #ffc83c; color: #fff"
        type="button"
      >
        Yes
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.modal.modal-close {
  padding: 100px 0px;
  margin: auto;
}
.modal.modal-close img {
  width: 20%;
  margin-bottom: 30px;
}
.modal.modal-close h2 {
  font-weight: 600;
  font-size: 26px;
  margin-bottom: 20px;
  color: #444444;
}

.modal.modal-close p {
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #666666;
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
.btn-yes {
  background: #ececec;
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
.button-wrap.close-warning {
  float: none;
  margin-top: 47px;
}
</style>
