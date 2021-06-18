<template>
  <div class="container-fluid p-md-5">
    <div class="container py-5">
      <div class="row">
        <div class="col-sm-12 col-md-6 pe-md-5 pt-2 pt-md-5 freeimage">
          <img :src="`/img/${image}`" alt="" />
        </div>
        <div class="col-sm-12 col-md-6 pt-md-5 ps-md-5">
          <h2 class="pt-5 mt-md-5 freeObjectTitle">{{ FreeTitle }}</h2>
          <hr class="my-5" />
          <p class="pe-md-5 fs-5">
            {{ FreeText }}
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
    FreeTitle: {
      type: String,
    },
    FreeText: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.freeimage {
  background: url(../assets/orange_diagonal_element.svg);
  background-repeat: no-repeat;
  background-position: top right;
}
.freeimage img {
  width: 100%;
}
.container-fluid {
  background-color: rgb(246, 246, 251);
}

hr {
  color: orange;
  opacity: 100%;
  height: 4px;
  width: 80px;
}
</style>

