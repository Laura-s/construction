<template>
  <NavBar />
  <RoomHero 
  title="Balcony renovation"
  :images="heroImages"
  :ctaTarget="'/ourwork#balcony'"/>
  <HowItWorks 
  image='balcony_with_flowers.webp'
  :howtext ="howtext"
  />

  <LatestProjects 
  LatestTitle= 'Latest balcony projects'
  :latestProjects="latestProjects"
  />
  <FreeObject 
  image='balcony_brown_chairs.webp'
  FreeTitle='Get the furniture set for free'
  FreeText ="Book a balcony renovation today and your new outdoor furniture set is on us."
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
        "balcony_white-8a55bc13.webp",
        "Balcony_brown.webp",
        "balcony_sunset-.webp"
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
        title: 'Balcony #1',
        text: 'We bring pride and passion to every project that we undertake.',
        image: 'modern_house_balcony.webp'
      },
      {
        title: 'Balcony #2',
        text: 'We bring pride and passion to every project that we undertake.',
        image: 'white_balcony.webp'
      },
      {
        title: 'Balcony #3',
        text: 'We bring pride and passion to every project that we undertake.',
        image: 'balcony_lake_view.webp'
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