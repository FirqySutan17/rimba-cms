<template>
  <div class="modal modal-success">
    <img src="@/assets/images/send.png" alt="" />
    <h2>Horray! Your application was sent.</h2>
    <p>
      Check your email frequently. We will notify you <br />
      through email of the status of your application.
    </p>
    <div
      style="background: transparent"
      class="close btn-close-success"
      @click="$emit('close-modal')"
    >
      Close
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.modal.modal-success {
  padding: 100px 0px;
  margin: auto;
}
.modal.modal-success img {
  width: 20%;
  margin-bottom: 30px;
}
.modal.modal-success h2 {
  font-weight: 600;
  font-size: 26px;
  margin-bottom: 20px;
  color: #444444;
}

.modal.modal-success p {
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #666666;
}
</style>
