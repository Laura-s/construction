<template>
  <div>
    <div class="container px-4 pt-5 pb-3">
      <div class="row px-4 pt-5 pb-3">
        <div class="col-4">
          <div class="contact-text">
            <h2>Let’s talk about your project</h2>
            <p>Fill out the form, or call us to set up a meeting at</p>
            <a href="">(555) 555-5555</a>
          </div>
        </div>
        <div class="col-3 px-3">
          <img src="../assets/diagonal_line.svg" alt="" />
        </div>
        <div class="col-5">
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Phone number" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message" cols="42" rows="2"></textarea>
          <p>
            This site is protected by reCAPTCHA. Google's
            <span>Privacy Policy</span> and <span>Terms of Service</span> apply.
          </p>
          <button>send</button>
        </div>
      </div>
    </div>
    <footer class="m-0">
      <div class="row">
        <div class="col-4">
          <img src="../assets/logo_white.svg" alt="" />
          <p>
            We bring pride and passion to every project that we undertake, with
            a professional team of designers, project managers and tradespeople.
          </p>
        </div>
        <div class="col-2">
          <h4 class="fw-bold">Company</h4>
          <a href="#">About</a>
          <a href="#">Our Work</a>
        </div>
        <div class="col-3">
          <h4 class="fw-bold">Services</h4>
          <a href="#">Kitchen</a>
          <a href="#">Bathroom</a>
          <a href="#">Outdoors</a>
          <a href="#">Balcony</a>
          <a href="">New! Home Office</a>
        </div>
        <div class="col-3">
            <h4 class="fw-bold">Contact</h4>
          <a href="#">Street Name</a>
          <a href="#">Zip Code, Country</a>
          <a href="#">(555) 555-5555</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  background-color: rgb(43, 43, 43);
  color: white;
  margin-left: 0;
}
.contact-text {
  padding-left: 40px;
  padding-right: 40px;
}
.contact-text h2 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 50px;
  margin-bottom: 35px;
  width: 355px;
}
.contact-text p {
  font-size: 20px;
  padding-right: 100px;
  margin-bottom: 0;
}
.contact-text a {
  font-size: 20px;
  color: white;
}
.col-3 img {
  width: 165px;
}
input {
  background-color: unset;
  display: block;
  width: 85%;
  border: none;
  border-bottom: 0.6px solid white;
  margin-bottom: 20px;
  padding: 5px 10px;
}
::placeholder{
    color: white;
}
.col-5 p {
  font-size: 15px;
  margin-top: 20px;
  width: 90%;
}
.col-5 span {
  text-decoration: underline;
}
.col-5 textarea {
  background-color: unset;
  border: none;
  border-bottom: 0.6px solid white;
}
footer {
  background-color: black;
  color: white;
  padding: 90px;
  height: 480px;
  width: 100%;
}
footer img {
  height: 60px;
}
footer .col-4 p {
  margin-top: 30px;
  padding-right: 30px;
}
footer .col-2 a {
  display: block;
  color: white;
  text-decoration: none;
  margin-top: 27px;
}
footer .col-3 a {
  display: block;
  color: white;
  text-decoration: none;
  margin-top: 27px;
}
</style>
