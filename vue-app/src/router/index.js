import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/stu_Dashboard.vue";
import eCourses from "../views/stu_eCourses.vue";
import Calendar from "../views/stu_Calendar.vue";
import Profile from "../views/stu_Profile.vue";

const routes = [
  {
    path: "/",
    name: "Stu_Dashboard",
    component: Dashboard,
  },
  {
    path: "/eCourses",
    name: "Stu_eCourses",
    component: eCourses,
  },
  {
    path: "/calendar",
    name: "Stu_Calendar",
    component: Calendar,
  },
  {
    path: "/profile",
    name: "Stu_Profile",
    component: Profile,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
