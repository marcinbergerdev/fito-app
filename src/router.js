import { createRouter, createWebHistory } from "vue-router";
import store from "./store";

const ContentContainer = () => import("./components/ContentContainer.vue");
const HomePage = () => import("./components/main/home/HomePage");
const CalculateBmi = () => import("./components/main/bmi/CalculateBmi");
const ResultBmi = () => import("./components/main/bmi/ResultBmi");

const UserLogin = () => import("./components/registration/UserLogin");
const UserRegistration = () =>
   import("./components/registration/UserRegistration");
const NewProduct = () => import("./components/main/addProduct/NewProduct.vue");
const ProductList = () => import("./components/main/products/ProductList.vue");

const router = createRouter({
   history: createWebHistory(),
   routes: [
      {
         path: "/",
         redirect: "/home",
      },
      {
         name: "Home",
         path: "/home",
         component: ContentContainer,

         children: [
            {
               name: "HomePage",
               path: "",
               component: HomePage,
            },
            {
               name: "BMI",
               path: "bmi",
               component: CalculateBmi,
            },
            {
               name: "Result",
               path: "result",
               component: ResultBmi,
            },
            {
               name: "Product",
               path: "product",
               component: NewProduct,
               meta: { requiresAuth: true },
            },
            {
               name: "MyProduct",
               path: "myProduct",
               component: ProductList,
               meta: { requiresAuth: true },
            },
         ],
      },
      {
         name: "Login",
         path: "/login",
         component: UserLogin,
      },
      {
         name: "Registration",
         path: "/registration",
         component: UserRegistration,
      },
      {
         path: "/:notFound(.*)",
         component: ContentContainer,
      },
   ],
});

router.beforeEach((to, from, next) => {
   if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
      next("/login");
      return;
   }
   next();
});

export default router;
