<template>
  <NavBar />

  <div class="hero container-fluid">
    <div class="row">
      <div class="intro bg-dark text-light col-12 col-sm-7 py-4 order-sm-last">
        <div class="row">
          <div class="col-1 d-none d-sm-block"></div>
          <div class="col-8">
            <h1>Home Renovation and Construction</h1>
            <p>
              We bring pride and passion to every project that we undertake,
              with a professional team of designers, project managers and
              tradespeople.
            </p>

            <FancyButton
              :label="'To all services'"
              :target="'#servicesSection'"
              type="anchor"
            />
          </div>
        </div>
      </div>
      <div
        class="images col-12 col-sm-5 justify-content-end px-0 order-sm-first"
      >
        <img src="../assets/Man_working-1920w.webp" alt="" class="man" />
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

  <section class="servicesSection">
    <div class="service-title">
      <h2 class="mb-4">Our services</h2>
    </div>
    <div class="container">
      <div class="row row-cols-5 justify-content-center">
        <div class="service col">
          <div class="service-img">
            <img src="../assets/kitchen_service.jpg" alt="" />
          </div>

          <h3>Kitchen</h3>
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
        <div class="service col">
          <div class="service-img">
            <img src="..\assets\bathroom_service.jpg" alt="" />
          </div>

          <h3>Bathroom</h3>
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
        <div class="service col">
          <div class="service-img">
            <img src="..\assets\outdoors_service.jpg" alt="" />
          </div>

          <h3>Outdoors</h3>
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
        <div class="service col">
          <div class="service-img">
            <img src="..\assets\balcony_2.png" alt="" />
          </div>

          <h3>Balcony</h3>
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
        <div class="service col">
          <div class="service-img">
            <img src="..\assets\office_3.png" alt="" />
          </div>

          <h3>Home office</h3>
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
      </div>
    </div>
  </section>
  <section class="how container-fluid py-5">
    <div class="container">
    <div class="row">
    <div class="how-img col-6 pt-5 ps-5">
      <img src="..\assets\Man_works.webp" alt="" />
    </div>
    <div class="how-text col-6 p-5">
      <h1 class="fs-1 mb-5 pb-3">How it works</h1>
      <div class="unit row">
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
          Describe the item or answer the question so that site visitors who are
          interested get more information. You can emphasize this text with
          bullets, italics or bold, and add links.
        </p>
      </div>
      <div class="unit row">
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
          Describe the item or answer the question so that site visitors who are
          interested get more information. You can emphasize this text with
          bullets, italics or bold, and add links.
        </p>
      </div>
      <div class="unit row">
        <div class="how-drop col-12 p-3" @click="activeThree = !activeThree">
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
          Describe the item or answer the question so that site visitors who are
          interested get more information. You can emphasize this text with
          bullets, italics or bold, and add links.
        </p>
      </div>
      <div class="unit row">
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
          Describe the item or answer the question so that site visitors who are
          interested get more information. You can emphasize this text with
          bullets, italics or bold, and add links.
        </p>
      </div>
      <div class="unit row">
        <div class="how-drop col-12 p-3" @click="activeFive = !activeFive">
          <h4>
            5. Finish on schedule
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
          </h4>
        </div>
        <p :class="{ active: activeFive }">
          Describe the item or answer the question so that site visitors who are
          interested get more information. You can emphasize this text with
          bullets, italics or bold, and add links.
        </p>
      </div>
      </div>
    </div> 
    </div>
  </section>
  <section class="latest-projects container-fluid py-5">
    <div class="container py-4">
      <div class="row">
        <h2 class="text-center fs-1 pb-4">Our latest projects</h2>
        <div class="projects-links d-flex justify-content-evenly py-5">
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
            />
            <img
              v-else-if="selectedProject === 'bathroom'"
              src="../assets/bathroom_project.jpg"
              alt=""
            />
            <img
              v-else-if="selectedProject === 'outdoor'"
              src="../assets/outdoor_project-d3f52b45.jpg"
              alt=""
            />
            <img
              v-else-if="selectedProject === 'balcony'"
              src="../assets/balcony_project.jpg"
              alt=""
            />
            <img
              v-else-if="selectedProject === 'office'"
              src="../assets/home_office_project-5b35cdd9.jpg"
              alt=""
            />
          </div>
          <div class="project-link mt-5">
            <FancyButton
              :label="'To all projects'"
              :target="'OurWork'"
              type="link"
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
    <div class="partners-content container pb-4">
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
  /* margin-left: 303px; */
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
  /* height: 400px; */
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
  /* padding: 100px 200px 100px 200px; */
}
.about h2 {
  font-size: 40px;
}
.about p {
  font-size: 20px;
  /* width: 555px; */
}
.about a {
  font-size: 18px;
  color: black;
}
.service-title {
  text-align: center;
}
.service-title h2 {
  font-size: 50px;
}
.services {
  text-align: center;
  /* margin-bottom: 50px; */
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
.how-drop {
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  border-bottom: 1px solid rgb(155, 155, 155);
}
.unit p {
  font-size: 15px;
  text-align: start;
}
.unit {
  padding-left: 20px;
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
  height: 466px;
}

.project-link {
  /* margin-bottom: 100px; */
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
</style>