<template>
  <div class="container-fluid p-5">
    <div class="container py-5">
      <div class="row">
        <div class="col-6 pe-5 pt-5 freeimage">
          <img :src="`/img/${image}`" alt="" />
        </div>
        <div class="col-6 pt-5 ps-5">
          <h2 class="pt-5 mt-5">{{FreeTitle}}</h2>
          <hr class="my-5">
          <p class="pe-5 fs-5">
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
    }
  },
}
</script>

<style lang="scss" scoped>
.freeimage{
    background:url(../assets/orange_diagonal_element.svg);
     background-repeat: no-repeat;
  background-position: top right;
}
.freeimage img{
    width: 100%;
}
.container-fluid{
    background-color: rgb(246, 246, 251);
}
h2{
    font-size: 50px;
}
hr{
    color: orange;
    opacity: 100%;
    height: 4px;
    width: 80px;
}
</style>

