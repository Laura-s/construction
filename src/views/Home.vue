<template>
  <NavBar />

  <div class="hero container-fluid">
    <div class="row">
      <div class="intro bg-dark text-light col-12 col-sm-7 py-4 order-sm-last">
        <div class="row">
          <div class="col-1 d-none d-sm-block"></div>
          <transition-group tag="div" name="fade" class="col-12 col-md-8 px-md-4">
            <!-- <div class="col-12 col-md-8 px-md-4"> -->
            <h1 class="mb-3" :key="uuidv4()">Home Renovation and Construction</h1>
            <p :key="uuidv4()">
              We bring pride and passion to every project that we undertake,
              with a professional team of designers, project managers and
              tradespeople.
              {{uuidv4()}}
            </p>

            <FancyButton
              :label="'To all services'"
              :target="'#serviceLink'"
              type="anchor"
              :key="uuidv4()"
            />
          <!-- </div>  -->
          </transition-group>
          
        </div>
      </div>
      <div
        class="images col-12 col-sm-5 justify-content-end px-0 order-sm-first"
      >
        <img
          src="../assets/Man_working-1920w.webp"
          alt=""
          class="man d-block ms-auto"
        />
        <img
          src="../assets/diagonal_element.png"
          alt=""
          class="lines d-none d-md-block ms-auto mb-5"
        />
      </div>
    </div>
  </div>
  <div class="about container-fluid py-5">
    <div>
      <div class="row justify-content-center">
        <div class="col col-md-6 px-sm-3">
          <h2 class="pb-4">About us</h2>
          <p class="pb-4">
            Re/Room handles all types of renovations, everything, from loft
            bathrooms to complete home renovations. Our process is transparent,
            so you get the design you want, within budget, and on time.
          </p>

          <FancyButton
            :label="'More about us'"
            style="margin: auto"
            :target="'About'"
            type="link"
          />
        </div>
      </div>
    </div>
  </div>
  <StatsSection background="white" color="black" />

  <section class="servicesSection cointainer-fluid" id="serviceLink">
    <div class="service-title">
      <h2 class="mb-5">Our services</h2>
    </div>
    <div class="container pb-5">
      <div class="row justify-content-center pb-lg-5">
        <div class="service col-sm-12 col-md-6 col-lg mb-3 mx-auto">
          <div class="service-img mx-auto">
            <img src="../assets/kitchen_service.jpg" alt="" />
          </div>

          <h3 class="mx-auto">Kitchen</h3>
          <a href="/kitchen" class="mx-auto">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="plus"
            class="svg-inline--fa fa-plus fa-w-14 "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
            ></path>
          </svg></a>
        </div>
        <div class="service col-sm-7 col-md-6 col-lg mb-3">
          <div class="service-img mx-auto">
            <img src="..\assets\bathroom_service.jpg" alt="" />
          </div>

          <h3 class="mx-auto">Bathroom</h3>
          <a href="/bathroom" class="mx-auto">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="plus"
            class="svg-inline--fa fa-plus fa-w-14 "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
            ></path>
          </svg></a>
        </div>
        <div class="service col-sm-7 col-md-6 col-lg mb-3">
          <div class="service-img mx-auto">
            <img src="..\assets\outdoors_service.jpg" alt="" />
          </div>

          <h3 class="mx-auto">Outdoors</h3>
          <a href="/outdoors" class="mx-auto">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="plus"
            class="svg-inline--fa fa-plus fa-w-14 "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
            ></path>
          </svg></a>
        </div>
        <div class="service col-sm-7 col-md-6 col-lg mb-3">
          <div class="service-img mx-auto">
            <img src="..\assets\balcony_2.png" alt="" />
          </div>

          <h3 class="mx-auto">Balcony</h3>
          <a href="/balcony" class="mx-auto">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="plus"
            class="svg-inline--fa fa-plus fa-w-14 "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
            ></path>
          </svg></a>
        </div>
        <div class="service col-sm-7 col-md-6 col-lg mb-3">
          <div class="service-img mx-auto">
            <img src="..\assets\office_3.png" alt="" />
          </div>

          <h3 class="mx-auto">Home office</h3>
          <a href="/homeoffice" class=" mx-auto">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="plus"
            class="svg-inline--fa fa-plus fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
            ></path>
          </svg></a>
        </div>
      </div>
    </div>
  </section>
  <section class="how container-fluid py-5">
    <div class="container">
      <div class="row">
        <div class="how-img d-none d-md-block col-6 pt-5 ps-5">
          <img src="..\assets\Man_works.webp" alt="" class="img-fluid" />
        </div>
        <div class="how-text col-sm-12 col-md-6 p-md-5">
          <h1 class="fs-1 mb-md-5 pb-3">How it works</h1>
          <div class="unit-how row">
            <div class="how-drop col-12 p-3" @click="activeOne = !activeOne">
              <h4>1. Send a request</h4>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="plus"
                class="svg-inline--fa fa-plus fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                ></path>
              </svg>
            </div>

            <p :class="{ active: activeOne }">
              Describe the item or answer the question so that site visitors who
              are interested get more information. You can emphasize this text
              with bullets, italics or bold, and add links.
            </p>
          </div>
          <div class="unit-how row">
            <div class="how-drop col-12 p-3" @click="activeTwo = !activeTwo">
              <h4>2. Take measurements</h4>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="plus"
                class="svg-inline--fa fa-plus fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                ></path>
              </svg>
            </div>

            <p :class="{ active: activeTwo }">
              Describe the item or answer the question so that site visitors who
              are interested get more information. You can emphasize this text
              with bullets, italics or bold, and add links.
            </p>
          </div>
          <div class="unit-how row">
            <div
              class="how-drop col-12 p-3"
              @click="activeThree = !activeThree"
            >
              <h4>3. Approve budget</h4>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="plus"
                class="svg-inline--fa fa-plus fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                ></path>
              </svg>
            </div>

            <p :class="{ active: activeThree }">
              Describe the item or answer the question so that site visitors who
              are interested get more information. You can emphasize this text
              with bullets, italics or bold, and add links.
            </p>
          </div>
          <div class="unit-how row">
            <div class="how-drop col-12 p-3" @click="activeFour = !activeFour">
              <h4>4. Start project</h4>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="plus"
                class="svg-inline--fa fa-plus fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                ></path>
              </svg>
            </div>

            <p :class="{ active: activeFour }">
              Describe the item or answer the question so that site visitors who
              are interested get more information. You can emphasize this text
              with bullets, italics or bold, and add links.
            </p>
          </div>
          <div class="unit-how row">
            <div class="how-drop col-12 p-3" @click="activeFive = !activeFive">
              <h4>5. Finish on schedule</h4>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="plus"
                class="svg-inline--fa fa-plus fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                ></path>
              </svg>
            </div>
            <p :class="{ active: activeFive }">
              Describe the item or answer the question so that site visitors who
              are interested get more information. You can emphasize this text
              with bullets, italics or bold, and add links.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="latest-projects container-fluid py-md-5">
    <div class="container py-4">
      <div class="row">
        <h2 class="text-center fs-1 pb-4">Our latest projects</h2>
        
        <div
          class="projects-links d-flex flex-column flex-md-row justify-content-evenly align-items-center pb-3 pb-md-0 py-md-5"
        >
          <h4
            @click="selectedProject = 'kitchen'"
            :class="{ activeLink: selectedProject === 'kitchen' }"
          >
            Kitchen
          </h4>
          <h4
            @click="selectedProject = 'bathroom'"
            :class="{ activeLink: selectedProject === 'bathroom' }"
          >
            Bathroom
          </h4>
          <h4
            @click="selectedProject = 'outdoor'"
            :class="{ activeLink: selectedProject === 'outdoor' }"
          >
            Outdoor
          </h4>
          <h4
            @click="selectedProject = 'balcony'"
            :class="{ activeLink: selectedProject === 'balcony' }"
          >
            Balcony
          </h4>
          <h4
            @click="selectedProject = 'office'"
            :class="{ activeLink: selectedProject === 'office' }"
          >
            Home office
          </h4>
        </div>
        <div class="container">
          <div class="projects-images">
            <img
              v-if="selectedProject === 'kitchen'"
              src="../assets/kitchen_project.jpg"
              alt=""
              class="img-fluid"
            />
            <img
              v-else-if="selectedProject === 'bathroom'"
              src="../assets/bathroom_project.jpg"
              alt=""
              class="img-fluid"
            />
            <img
              v-else-if="selectedProject === 'outdoor'"
              src="../assets/outdoor_project-d3f52b45.jpg"
              alt=""
              class="img-fluid"
            />
            <img
              v-else-if="selectedProject === 'balcony'"
              src="../assets/balcony_project.jpg"
              alt=""
              class="img-fluid"
            />
            <img
              v-else-if="selectedProject === 'office'"
              src="../assets/home_office_project-5b35cdd9.jpg"
              alt=""
              class="img-fluid"
            />
          </div>
          <div class="project-link mt-5">
            <FancyButton
              :label="'To all projects'"
              :target="'OurWork'"
              type="link"
              width="290px"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <Testimonials
    :testimonials="testimonialsList"
    :background="'rgb(246, 246, 251)'"
  />

  <section class="partners py-5">
    <div class="partners-title py-4">
      <h1>Partners</h1>
    </div>
    <div
      class="partners-content container d-flex flex-column flex-md-row justify-content-evenly align-items-center pb-4"
    >
      <h2 style="font-family: Impact">IDEA</h2>
      <h2>amazin</h2>
      <h2 style="font-family: Georgia">Busset</h2>
      <h2>BORCH LINE</h2>
      <h2>wiyfayr</h2>
    </div>
  </section>
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";
import FancyButton from "../components/FancyButton.vue";
import StatsSection from "../components/StatsSection.vue";
import Testimonials from "../components/Testimonials.vue";

export default {
  data: () => ({
    testimonialsList: [
      {
        person: "Ms Cat",
        label:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam similique amet aliquid atque totam accusantium esse repellat fuga nostrum perspiciatis illum",
      },
      {
        person: "Mr Cat",
        label:
          " sit amet consectetur adipisicing elit. Quam similique amet aliquid atque totam accusantium esse repellat fuga nostrum perspiciatis illum",
      },
      {
        person: "Mss Cat",
        label:
          "Loremmmmmm ipsum dolor sit amet consectetur adipisicing elit. Quam similique amet aliquid atque totam accusantium esse repellat fuga nostrum perspiciatis illum",
      },
    ],

    activeOne: true,
    activeTwo: true,
    activeThree: true,
    activeFour: true,
    activeFive: true,

    currBackground: 0,
    selectedProject: "kitchen",
  }),
  methods: {
    nextImage() {
      console.log("cat");
      if (this.currBackground < this.backgrounds.length - 1) {
        this.currBackground++;
      } else {
        this.currBackground = 0;
      }
    },
    uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
},
  },
  components: {
    Footer,
    NavBar,
    FancyButton,
    StatsSection,
    Testimonials,
  },
};
</script>

<style scoped>
.lines {
  height: 136px;
}

.intro h1 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}
.intro p {
  font-size: 19px;
  line-height: 150%;
  margin-bottom: 50px;
}
.about {
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
}
.about h2 {
  font-size: 40px;
}
.about p {
  font-size: 20px;
}
.about a {
  font-size: 18px;
  color: black;
}
.service-title {
  text-align: center;
}

.services {
  text-align: center;
}
.service-img {
  overflow: hidden;
  height: 205px;
  width: 205px;
}
.service-img img {
  max-width: 100%;
  transition: transform 0.5s ease;
}
.service img:hover {
  transform: scale(1.1);
}
.service {
  display: flex;
  flex-direction: column;
  justify-items: center;
}
.service svg {
  width: 25px;
  color: rgb(255, 160, 49);
}
.how {
  background-color: rgb(34, 34, 34);
  color: white;
}
.how-img img {
  width: 500px;
}
.how-img {
  background: url(../assets/grey_diagonal.svg);
  background-repeat: no-repeat;
  background-position: top left;
}
.how-drop svg {
  width: 15px;
  color: rgb(255, 160, 49);
}
.how-drop img {
  width: 15px;
  color: rgb(255, 160, 49);
}
.how-drop {
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  border-bottom: 1px solid rgb(155, 155, 155);
}

.unit-how p {
  font-size: 15px;
  text-align: start;
}

.active {
  display: none;
}
.activeLink {
  color: rgb(255, 160, 49);
  text-decoration: underline;
}
.projects-images {
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.projects-images img {
  width: 100%;
}

.project-link {
  display: flex;
  justify-content: center;
}

.partners-title {
  font-size: 40px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}
.partners-content {
  display: flex;
  justify-content: space-between;
  color: grey;
  padding: 0px 50px;
}
.partners-content h2 {
  margin: 0;
  font-size: 25px;
}

.fade-enter-from{
  opacity: 0;
  transform: translateX(150px)
}
.fade-enter-to{
  opacity: 1;
  transform: translateX(0);
}
.fade-enter-active{
  transition: all 2s ease;
}
</style>