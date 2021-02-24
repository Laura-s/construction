<template>
  <NavBar />
  <RoomHero 
  title="Outdoor renovation"
  :images="heroImages"
  :ctaTarget="'/ourwork#outdooors'"/>
  <HowItWorks 
  image='white_house_blue_windows.webp'
  :howtext ="howtext"
  />

  <LatestProjects 
  LatestTitle= 'Latest outdoors projects'
  :latestProjects="latestProjects"
  />
  <FreeObject 
  image='lawn_mower.webp'
  FreeTitle='Get the lawn mower for free'
  FreeText ="Book an outdoor renovation  today and your new lawn mower is on us."
  />
  <Testimonials 
  :testimonials="testimonialsList"/>
  <Footer />
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";
import RoomHero from "../components/RoomHero.vue";
import LatestProjects from "../components/LatestProjects.vue";
import HowItWorks from "../components/HowItWorks.vue";
import FreeObject from "../components/FreeObject.vue";
import Testimonials from "../components/Testimonials.vue";


export default {
    data: () =>({
      heroImages: [
        "white_house_small_tree.webp",
        "house_with_big_window.webp",
        "white_house.webp"
      ],
     howtext: [
      "Face-to-face consultation.",
      "Detailed plan with estimates.",
      "Scheduling and kick off.",
      "Full post-renovation inspection.",
      "Completion and final payment.",
    ],
    latestProjects: [
      {
        title: 'Outdoor #1',
        text: 'We bring pride and passion to every project that we undertake.',
        image: 'green_kitchen.webp'
      },
      {
        title: 'Outdoor #2',
        text: 'We bring pride and passion to every project that we undertake.',
        image: 'stylish_house.webp'
      },
      {
        title: 'Outdoor #3',
        text: 'We bring pride and passion to every project that we undertake.',
        image: 'house_black_roof-77ab371a-4f89c493.webp'
      }
    ],
    testimonialsList:[
      {
        person: 'Ms Cat',
        label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam similique amet aliquid atque totam accusantium esse repellat fuga nostrum perspiciatis illum'
      },
      {
        person: 'Mr Cat',
        label: ' sit amet consectetur adipisicing elit. Quam similique amet aliquid atque totam accusantium esse repellat fuga nostrum perspiciatis illum'
      },
      {
        person: 'Mss Cat',
        label: 'Loremmmmmm ipsum dolor sit amet consectetur adipisicing elit. Quam similique amet aliquid atque totam accusantium esse repellat fuga nostrum perspiciatis illum'
      }
    ],
  }),
  components: {
    NavBar,
    Footer,
    RoomHero,
    LatestProjects,
    HowItWorks,
    FreeObject,
    Testimonials,
  },
};
</script>

<style scope>

</style>