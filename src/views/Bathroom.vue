<template>
  <NavBar />
  <RoomHero 
  title="Bathroom renovation"
  :images="heroImages"
  :ctaTarget="'/ourwork#bathrooom'"/>
  <HowItWorks 
  image='bathroom_cabinet.webp'
  :howtext ="howtext"
  />

  <LatestProjects 
  LatestTitle= 'Latest bathroom projects'
  :latestProjects="latestProjects"
  />
  <FreeObject 
  image='washing_machine.webp'
  FreeTitle='Get the washer for free'
  FreeText ="Book a bathroom renovation today and your new washing machine is on us."
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
import HowItWorks from "../components/HowItWorks.vue";
import LatestProjects from "../components/LatestProjects.vue";
import FreeObject from "../components/FreeObject.vue";
import Testimonials from "../components/Testimonials.vue";




export default {
  data: () =>({
      heroImages: [
        "bathroom_white_tile.webp",
        "bathroom_authentic_floor.webp",
        "worker_installing_mirror_in_bathroom.webp"
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
        title: 'Bathroom #1',
        text: 'We bring pride and passion to every project that we undertake.',
        image: 'bathroom_with_big_window.webp'
      },
      {
        title: 'Bathroom #2',
        text: 'We bring pride and passion to every project that we undertake.',
        image: 'orange_lights_kitchen.webp'
      },
      {
        title: 'Bathroom #3',
        text: 'We bring pride and passion to every project that we undertake.',
        image: 'bathroom_with_oval_mirror.webp'
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