<template>
  <div class="container-fluid">
    <div class="container p-5">
      <div class="row p-4">
        <div class="col-6 px-5 pb-5 howitimage">
          <img :src="`/img/${image}`" alt="" />
        </div>
        <div class="col-6 ps-5">
          <h2>How it works</h2>

          <p v-for="(text, index) in howtext" :key="`text-${index}`">
            <span>{{ index + 1 }}</span
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
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.howitimage {
  background: url(../assets/green_design_element.svg);
  background-repeat: no-repeat;
  background-position: left bottom;
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
  padding-right: 50px;
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