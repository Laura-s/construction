<template>
  <div class="container-fluid">
    <div class="container p-3 p-md-5">
      <div class="row p-md-4">
        <div
          class="col-sm-12 col-md-6 howitimage ps-md-3 pb-3 pe-md-4 px-lg-5 pb-lg-5 align-self-center"
        >
          <img :src="`/img/${image}`" alt="" />
        </div>
        <div class="col-sm-12 col-md-6 ps-md-5 pt-3 pt-md-0">
          <h2>How it works</h2>

          <p v-for="(text, index) in howtext" :key="`text-${index}`">
            <span class="how-span">{{ index + 1 }}</span
            >{{ text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
    },
    howtext: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.howitimage {
  background: url(../assets/green_design_element.svg);
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 50%;
}

.howitimage img {
  width: 100%;
}
h2 {
  font-size: 40px;
  font-weight: bold;
}
span {
  color: orange;
  font-size: 40px;
  font-weight: bold;
}
p {
  display: flex;
  align-items: center;
  font-size: 20px;
  padding: 15px 0px 15px 0px;
  border-bottom: $green 3px solid;
}
p:last-child {
  border: none;
}
</style>