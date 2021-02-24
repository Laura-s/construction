<template>
  <NavBar />
  <RoomHero 
  title="Home office renovation"
  :images="heroImages"
  :ctaTarget="'/ourwork#office'"/>
  <HowItWorks 
  image='man_in_green_office.webp'
  :howtext ="howtext"
  />

  <LatestProjects 
  LatestTitle= 'Latest home office projects'
  :latestProjects="latestProjects"
  />
  <FreeObject 
  image='authentic_office.webp'
  FreeTitle='Get the work table for free'
  FreeText ="Book a home office renovation today and your new work table is on us."
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
        "office_2-9e5951c2.webp",
        "Green_office.webp",
        "photo-1463620695885-8a91d87c53d0.jpg"
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
        title: 'Home office #1',
        text: 'We bring pride and passion to every project that we undertake.',
        image: 'blue_office.webp'
      },
      {
        title: 'Home office #2',
        text: 'We bring pride and passion to every project that we undertake.',
        image: 'two_screens_office.webp'
      },
      {
        title: 'Home office #3',
        text: 'We bring pride and passion to every project that we undertake.',
        image: 'woman_in_home_office.webp'
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
    Testimonials
  },
};
</script>

<style scope>

</style>