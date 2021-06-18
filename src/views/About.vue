<template>
  <NavBar />
  <section id="us">
    <div class="container align-items-center">
      <div class="row justify-content-center">
        <div class="col-md-8 col-11">
          <h1 class="fw-bold">Who we are</h1>
          <p class="mb-5">
            We are your total home renovation and remodeling solution provider.
            Whether you’re looking to remodel your home, do a bathroom makeover
            or customize your kitchen, we bring your dreams to life.
          </p>
        </div>
      </div>
    </div>
  </section>
  <div class="container-fluid justify-content-center">
    <div class="row">
      <div class="image-bg-one position-relative">
        <img
          src="..\assets\house_construction_with_dog.webp"
          alt=""
          class="img-fluid col-md-10 position-absolute translate-middle top-100 start-50"
        />
      </div>
      <div class="image-bg-two d-none d-md-block"></div>
    </div>
  </div>

  <section id="people">
    <div class="people-title">
      <h1>Our people</h1>
    </div>
    <div class="container py-4">
      <div class="row justify-content-center">
        <div class="col-6 col-md-3 unit">
          <div class="unit-image">
            <img
              src="..\assets\bearded_man_white_tshirt.jpg"
              alt=""
              class="img-fluid"
            />
          </div>

          <h3>Jerry Trainer</h3>
        </div>
        <div class="col-6 col-md-3 unit">
          <div class="unit-image">
            <img
              src="..\assets\woman_long_dark_hair_wearing_white_tshirt.jpg"
              alt=""
              class="img-fluid"
            />
          </div>

          <h3>Meghan Sanders</h3>
        </div>

        <div class="col-6 col-md-3 unit">
          <div class="unit-image">
            <img
              src="..\assets\man_wearing_white_tshirt.jpg"
              alt=""
              class="img-fluid"
            />
          </div>
          <h3>William Baker</h3>
        </div>
        <div class="col-6 col-md-3 unit">
          <div class="unit-image">
            <img
              src="..\assets\bearded_man_light_grey_tshirt.jpg"
              alt=""
              class="img-fluid"
            />
          </div>
          <h3>Leo Johnson</h3>
        </div>
      </div>
    </div>
  </section>
  <StatsSection />
  <Testimonials 
    :testimonials="testimonialsList"
  />
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";
import StatsSection from "../components/StatsSection.vue";
import Testimonials from "../components/Testimonials.vue";


export default {
  data: () => ({
      testimonialsList:[
      {
        person: 'Ms Dog',
        label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam similique amet aliquid atque totam accusantium esse repellat fuga nostrum perspiciatis illum'
      },
      {
        person: 'Mr Dog',
        label: ' sit amet consectetur adipisicing elit. Quam similique amet aliquid atque totam accusantium esse repellat fuga nostrum perspiciatis illum'
      },
      {
        person: 'Mss Dog',
        label: 'Loremmmmmm ipsum dolor sit amet consectetur adipisicing elit. Quam similique amet aliquid atque totam accusantium esse repellat fuga nostrum perspiciatis illum'
      }
    ],

  }),
  components: {
    Footer,
    NavBar,
    StatsSection,
    Testimonials,
  },
};
</script>

<style scoped>
#us {
  background-color: rgb(34, 34, 34);
  padding-top: 150px;
  color: white;
  text-align: center;
}
#us h1 {
  margin: 20px 0;
}
#us p {
  line-height: 155%;
}

.image-bg-one {
  background-color: rgb(34, 34, 34);
}
.image-wrap {
  display: flex;
  justify-content: center;
  position: relative;
}

.image-bg-two {
  background-color: white;
}

.people-title h1 {
  font-size: 40px;
  text-align: center;
  margin-bottom: 50px;
}

.unit-image img {
  transition: transform 0.3s ease;
}
.unit-image img:hover {
  transform: scale(1.1);
}
.unit {
  text-align: center;
}
.unit-image {
  overflow: hidden;
}

</style>