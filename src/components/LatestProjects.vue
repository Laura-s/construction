<template>
  <div class="container-fluid bg-dark py-md-5">
    <div class="container justify-content-center pt-3 pt-md-5 text-light">
      <div class="row px-0">
        <div class="col-sm-12 col-md-6 alin-content-center text-light pe-md-5">
          <h3 class="mb-5 pe-5">{{ LatestTitle }}</h3>
          <div
            v-for="(project, index) in latestProjects"
            :key="`project-${index}`"
            class="latestText"
          >
            <h5 class="mb-4 mt-5">{{ project.title }}</h5>
            <p class="">{{ project.text }}</p>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="row images">
            <div class="col-6 pe-5 d-flex">
              <img
                :src="`/img/${latestProjects[0].image}`"
                alt=""
                class="align-self-end"
              />
            </div>
            <div class="col-6 d-flex bgImg ps-0 pe-md-5 pt-md-5">
              <img
                :src="`/img/${latestProjects[1].image}`"
                alt=""
                class="align-self-end"
              />
            </div>
            <div class="col-12 py-5 pe-5">
              <img :src="`/img/${latestProjects[2].image}`" alt="" />
            </div>
          </div>
        </div>
      </div>
      <FancyButton
        :label="'See all projects'"
        style="margin: auto"
        :target="'OurWork'"
        type="link"
        width="270px"
      />
    </div>
  </div>
</template>

<script>
import FancyButton from "../components/FancyButton.vue";

export default {
  props: {
    LatestTitle: {
      type: String,
    },

    latestProjects: {
      type: Array,
    },
  },
  components: {
    FancyButton,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
.bgImg {
  background: url(../assets/green_diagonal.svg);
  background-repeat: no-repeat;
  background-position: right top;
}
.images img {
  width: 100%;
}
h3 {
  font-size: 40px;
  font-weight: bold;
}
h5 {
  color: $green;
  text-decoration: underline;
  font-size: 20px;
}
p {
  font-size: 20px;
}
</style>