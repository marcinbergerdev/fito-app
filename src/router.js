import { createRouter, createWebHistory } from "vue-router";

const ContentContainer = () => import('./components/ContentContainer.vue');


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
      },
   ],
});

export default router;
