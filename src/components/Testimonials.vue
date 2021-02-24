<template>
  <section id="testimonials" :style="{ backgroundColor: background }">
    <div class="testimo-title my-4 text-center">
      <h2>Testimonials</h2>
    </div>

    <div class="container-fluid">
      <div class="row justify-content-md-evenly justify-content-center">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="`testimonial-${index}`"
          class="col-10 col-md-3 testimo px-2 justify-content-center"
        >
          <div class="testimg">
            <img v-if="index === 0" src="..\assets\kitchen_1.webp" alt="" />
            <img v-else-if="index === 1" src="..\assets\bathroom_with_wood_style_floor.webp" alt="" />
            <img v-else src="..\assets\Kitchen_with_black_island.webp" alt="" />
          </div>

          <h4>"</h4>
          <p class="pb-4">
            {{ testimonial.label }}
          </p>
          <h5 class="mb-4">{{ testimonial.person }}</h5>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  

  props: {
    testimonials: {
      type: Array,
    },
    background: {
      type: String,
      default: "white",
    },
  },
};
</script>

<style>
#testimonials {
  background-color: white;
}
#testimonials h2 {
  font-size: 40px;
}

.testimo {
  overflow: hidden;
  font-size: 18px;
  text-align: start;
}

.testimg img {
  max-height: 100%;
  max-width: 100%;
  transition: transform 0.5s ease;
}
.testimg img:hover {
  transform: scale(1.1);
}
.testimo h4 {
  font-size: 60px;
  color: rgba(143, 198, 145, 1);
  margin-top: 30px;
  margin-bottom: 0;
}
.testimo h5 {
  text-decoration: underline;
}
.testimo p {
  margin: 0;
}
</style>