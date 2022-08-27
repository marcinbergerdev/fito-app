import { createRouter, createWebHistory } from "vue-router";

const AppMain = () => import("./components/main/AppMain.vue");

const router = createRouter({
   history: createWebHistory(),
   routes: [
      {
         path: "/",
         redirect: "/home",
      },
      {
         path: "/home",
         component: AppMain,
      },
   ],
});

export default router;
