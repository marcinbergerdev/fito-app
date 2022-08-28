import { createRouter, createWebHistory } from "vue-router";

const HomePage = () => import("./components/main/home/HomePage.vue");

const router = createRouter({
   history: createWebHistory(),
   routes: [
      {
         path: "/",
         redirect: "/home",
      },
      {
        path: "/home",
        component: HomePage,
      },
   ],
});

export default router;
