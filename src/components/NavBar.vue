<template>
  <div class="main text-center">
    <div class="row align-items-center nav-bar">
      <div class="col-5">
        <img src="../assets/logo.svg" alt="" class="logo" />
      </div>
      <div class="col-5">
        <div class="fs-5 links d-inline-block ">
          <a href="#">Home</a>
          <a href="#">Our Work</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div class="col-2">
        <div class="fs-5 fw-bold text-decoration-underline">
          <a href="" class="phone me-5">555-555-5555</a>
        </div>
      </div>
    </div>
    <div class="row works align-items-center">
      <div class="col-12">
        <a href="">Kitchen</a>
        <a href="">Bathroom</a>
        <a href="">Outdoors</a>
        <a href="">Balcony</a>
        <a href="">New! Home Office</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  width: 100%;
  margin: 0;
  padding: 0;
  /* font-family: 'Roboto Slab', serif;
  letter-spacing: 0.03em; */
}
.nav-bar {
  height: 110px;
}
.logo{
  padding-right: 100px;
}
.links a {
  color: black;
  text-decoration: none;
  
  font-size: 18px;
padding-left: 30px;
  padding-right: 30px;
}
.phone{
  color: orange;
}
.works {
  height: 62px;
  background-color: black;
}
.works a {
  color: white;
  text-decoration: none;
  padding-left: 50px;
  padding-right: 50px;
  font-size: 18px;
}
</style>
