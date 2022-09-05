 import { createRouter, createWebHistory } from "vue-router";

const ContentContainer = () => import("./components/ContentContainer.vue");
const HomePage = () => import("./components/main/home/HomePage");
const CalculateBmi = () => import("./components/main/bmi/CalculateBmi");
const ResultBmi = () => import("./components/main/bmi/ResultBmi");

const router = createRouter({
   history: createWebHistory(),
   routes: [
      {
         path: "/",
         redirect: "/home",
      },
      {
         path: "/home",
         component: ContentContainer,

         children: [
            {
               path: "",
               component: HomePage
            },
            {
               path: "bmi",
               component: CalculateBmi,
            },
            {
               path: "result",
               component: ResultBmi,
            },
         ],
      },
      {
         path: "/login",
         component: null,
      },
      {
         path: "/registration",
         component: null,
      },
      // {
      //    path: "/:notFound(.*)",
      //    component: null,
      // },
   ],

});

export default router;
