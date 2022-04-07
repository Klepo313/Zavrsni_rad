import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../views/stu_Dashboard.vue";
import eCourses from "../views/stu_eCourses.vue";
import Calendar from "../views/stu_Calendar.vue";
import Profile from "../views/stu_Profile.vue";
import eCourse_details from "../views/stu_eCourseDetails.vue";
import Login from "../views/Login.vue";
import WelcomePage from "../views/WelcomePage.vue";
import UploadPage from "../views/stu_eCourseUpload.vue";

import DashboardLayout from "../layouts/Dashboard_layout.vue";
import PublicLayout from "../layouts/Public_layout.vue";

const routes = [

  {
    path: "/public",
    component: PublicLayout,
    children: [
      {
        path: "/login",
        component: Login
      },
      {
        path: "/wp",
        component: WelcomePage
      },
    ]
  },
      
  {
    path: "/dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "/",
        component: Dashboard
      },
      {
        path: "/eCourses",
        name: "Stu_eCourses",
        component: eCourses,
      },
      {
        path: "/eCourses/:id",
        name: "Stu_eCourseDetails",
        component: eCourse_details
      },
      {
        path: "/eCourses/:id/:name",
        name: "Stu_UploadPage",
        component: UploadPage
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
  ]
  }


];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
