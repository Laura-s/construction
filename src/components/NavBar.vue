<template>
<div class="fixed-top">
  <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center align-items-center main ">
    <div class="container-fluid">
      <div class="navbar-brand logo">
        <img src="../assets/logo.svg" alt="logo" />
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav nav-links d-flex justify-content-end">
          <li class="nav-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ourwork">Our Work</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact">Contact</router-link>
          </li>
          <li class="nav-item phone">
            <span href="" class="phone-number">555-555-5555</span>
          </li>
        </ul>
  
      </div>
    </div>
  </nav>
  <div class="secondary-nav d-none d-lg-flex justify-content-center align-items-center">
    <router-link to="/kitchen">Kitchen</router-link>
    <router-link to="/bathroom">Bathroom</router-link>
    <router-link to="/outdoors">Outdoors</router-link>
    <router-link to="/balcony">Balcony</router-link>
    <router-link to="/homeoffice">New! Home Ofiice</router-link>
  </div>
</div>
  
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles/variables.scss";

.main {
  font-size: 17px;
}

.logo img {
  height: 64px;
}
.nav-links {
  text-align: end;
  padding-right: 20px;
  flex-grow: 2;
}
.nav-links a {
  display: inline-block;
  color: black;
  text-decoration: none;
  margin: 0px 30px;
}
.nav-links a:hover,
.router-link-active {
  border-bottom: $green 2px solid;
}
.phone{
  color: rgb(255, 160, 49);
  text-decoration: underline;
  font-weight: bold;
  margin: 0px 30px;
  
}
.phone:hover{
  color: $green ;
}
.secondary-nav {
  height: 62px;
  background-color: rgb(28, 28, 28);
  font-size: 16px;
}
.secondary-nav a {
  color: white;
  text-decoration: none;
  padding: 0px 50px;
  
}
</style>
