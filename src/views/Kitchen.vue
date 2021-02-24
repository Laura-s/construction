<template>
  <NavBar />
  <RoomHero 
  title="Kitchen renovation"
  :images="heroImages"
  :ctaTarget="'/ourwork#kitchen-bathroom'"/>
  
  <HowItWorks 
  image='kitchen_island_stink.webp'
  :howtext ="howtext"
  />

  <LatestProjects 
  LatestTitle= 'Latest kitchen projects'
  :latestProjects="latestProjects"
  />

  <FreeObject 
  image='dishwasher.webp'
  FreeTitle='Get the dishwasher for free'
  FreeText ="Book a kitchen renovation today and your new dishwasher is on us."
  />
  <Testimonials 
  :testimonials="testimonialsList"/>
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";
import RoomHero from "../components/RoomHero.vue";
import HowItWorks from "../components/HowItWorks.vue";
import LatestProjects from "../components/LatestProjects.vue";
import FreeObject from "../components/FreeObject.vue";
import Testimonials from "../components/Testimonials.vue";




export default {
  data: () =>({
    heroImages: [
      "kitchen_element.webp",
      "kitchen_with_huge_fridge.webp",
      "master_drills_wood.webp"
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
        title: 'Kitchen #1',
        text: 'We bring pride and passion to every project that we undertake.',
        image: 'green_kitchen.webp'
      },
      {
        title: 'Kitchen #2',
        text: 'We bring pride and passion to every project that we undertake.',
        image: 'orange_lights_kitchen.webp'
      },
      {
        title: 'Kitchen #3',
        text: 'We bring pride and passion to every project that we undertake.',
        image: 'white_kitchen.webp'
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
    HowItWorks,
    LatestProjects,
    FreeObject,
    Testimonials,
  },
};
</script>

<style scope>

</style>