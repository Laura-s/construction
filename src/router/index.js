import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import OurWork from "@/views/OurWork.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Kitchen from "@/views/Kitchen.vue";
import Bathroom from "@/views/Bathroom.vue";
import Outdoors from "@/views/Outdoors.vue";
import Balcony from "@/views/Balcony.vue";
import HomeOffice from "@/views/HomeOffice.vue";



const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/ourwork",
    name: "OurWork",
    component: OurWork,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/kitchen",
    name: "Kitchen",
    component: Kitchen,
  },
  {
    path: "/bathroom",
    name: "Bathroom",
    component: Bathroom,
  },
  {
    path: "/outdoors",
    name: "Outdoors",
    component: Outdoors,
  },
  {
    path: "/balcony",
    name: "Balcony",
    component: Balcony,
  },
  {
    path: "/homeoffice",
    name: "homeoffice",
    component: HomeOffice,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to) {
    if (to.hash) {
      console.log('cat')
       return { selector: to.hash }
    } 
    return { x: 0, y: 0 }
}

 
});

export default router;