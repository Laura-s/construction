<template>
  <div>
    <div class="container container-sm-fluid footer-form text-light ms-0">
      <div class="row justify-content-md-evenly justify-content-sm-center">
        <div class="contact-text col col-md-4 d-block">
          <h2>Let’s talk about your project</h2>
          <p>Fill out the form, or call us to set up a meeting at</p>
          <a href="">(555) 555-5555</a>
        </div>
        <div class="w-100 d-md-none"></div>
        <div class="line col col-md-2 d-none d-md-block">
          <img src="../assets/diagonal_line.svg" alt="" />
        </div>
        <div class="form col col-md-4">
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Phone number" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <p>
            This site is protected by reCAPTCHA. Google's
            <span>Privacy Policy</span> and <span>Terms of Service</span> apply.
          </p>
          <FancyButton @click="click" :label="'Send'" type="button" />
        </div>
      </div>
    </div>

    <footer class="container-fluid">
      <div class="row justify-content-evenly">
        <div class="footer-msg col-sm-3">
          <img src="../assets/logo_white.svg" alt="" />
          <p>
            We bring pride and passion to every project that we undertake, with
            a professional team of designers, project managers and tradespeople.
          </p>
        </div>
        <div class="company col-sm-2">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Our Work</a>
        </div>
        <div class="services col-sm-2">
          <h4>Services</h4>
          <a href="#">Kitchen</a>
          <a href="#">Bathroom</a>
          <a href="#">Outdoors</a>
          <a href="#">Balcony</a>
          <a href="">New! Home Office</a>
        </div>
        <div class="contact col-sm-2 ">
          <h4>Contact</h4>
          <a href="#">Street Name</a>
          <a href="#">Zip Code, Country</a>
          <a href="#">(555) 555-5555</a>
          <div class="socials">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="facebook-f"
              class="svg-inline--fa fa-facebook-f fa-w-10"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="twitter"
              class="svg-inline--fa fa-twitter fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="instagram"
              class="svg-inline--fa fa-instagram fa-w-14"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import FancyButton from "../components/FancyButton.vue";

export default {
  methods: {
    click() {
      console.log("cat");
    },
  },
  components: {
    FancyButton,
  },
};
</script>

<style scoped>
.footer-form {
  background-color: rgb(34, 34, 34);
  
}
.contact-text h2 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}
.contact-text p {
  font-size: 20px;
  line-height: 140%;
}
.contact-text a {
  font-size: 20px;
  color: white;
}
.line img {
  width: 165px;
}
input {
  background-color: unset;
  display: block;
  width: 95%;
  border: none;
  border-bottom: 0.6px solid rgb(155, 155, 155);
  margin-bottom: 20px;
  padding: 5px 10px;
}
.form textarea {
  background-color: unset;
  border: none;
  border-bottom: 0.6px solid rgb(155, 155, 155);
  padding: 5px 10px;
  width: 95%;
}
::placeholder {
  color: white;
  font-family: "Roboto Slab", serif;
  font-size: 18px;
}

.form p {
  font-size: 15px;
  margin-top: 46px;
}
.form span {
  text-decoration: underline;
}

footer {
  background-color: rgb(28, 28, 28);
  color: white;
}
footer img {
  height: 60px;
}
footer h4 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 22px;
  font-weight: bold;
  margin: 0 0 10px 0;
}
footer a {
  display: block;
  color: white;
  text-decoration: none;
  font-size: 18px;
  margin-top: 23px;
}
.footer-msg p {
  font-size: 17px;
  margin-top: 30px;
}

.company a:hover {
  border-bottom: 1px solid white;
}
.services a:hover {
  border-bottom: 1px solid white;
}
.socials svg {
  height: 18px;
  color: rgba(143, 198, 145, 1);
  margin-right: 40px;
  margin-top: 27px;
  cursor: pointer;
}
</style>
