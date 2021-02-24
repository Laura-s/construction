<template>
  <section id="hero">
    <div class="container-fluid">
      <div class="row ">
        <div class="col-5 col-xl-4 bg-dark text-light hero-text">
          <h1>
            {{ title }}
          </h1>
          <p class="pt-4">
            {{ text }}
          </p>
          <FancyButton
            :label="'See our work'"
            :target="ctaTarget"
            type="anchor"
          />
        </div>
        <div class="col-1 col-xl-2 d-none d-lg-block bg-dark"></div>
        <div class="col-6 col-xl-6 hero-images-wrap position-relative">
          <div class="row">
            <div class="col-5 d-flex align-self-end pe-5">
              <img :src="`/img/${images[0]}`" class="img-fluid" />
            </div>

            <div class="col-7 hero-image-two pe-0">
              <img :src="`/img/${images[1]}`" class="img-fluid" />
            </div>
            <div class="col-5 mx-auto py-5 ps-5">
              <img :src="`/img/${images[2]}`" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FancyButton from "../components/FancyButton.vue";

export default {
  props: {
    ctaTarget: {
        type: String,
        required: true,
    },
    title: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
    },
    text: {
      type: String,
      required: true,
      default:
        " When you start a renovation, you want to know where it starts and where it ends. Were here to walk you through the entire process so you know what to expect from start to finish.",
    },
  },
  components: {
    FancyButton,
  },
};
</script>

<style lang="scss">
#hero {
  padding-top: 150px;
}
.hero-images-wrap {
  // height: 700px;
  background: linear-gradient(90deg, #222222 50%, white 50%);
}
.hero-image-two {
  max-height: 400px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
.hero-text {
  padding: 110px 0px 20px 100px;
}
.hero-text h1{
    font-size: 55px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
}
</style>