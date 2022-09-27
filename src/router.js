 import { createRouter, createWebHistory } from "vue-router";

const ContentContainer = () => import("./components/ContentContainer.vue");
const HomePage = () => import("./components/main/home/HomePage");
const CalculateBmi = () => import("./components/main/bmi/CalculateBmi");
const ResultBmi = () => import("./components/main/bmi/ResultBmi");

const UserLogin = () => import("./components/registration/UserLogin");
const UserRegistration = () => import("./components/registration/UserRegistration");
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
            {
               path: "product",
               component: NewProduct,
            },
            {
               path: "myProduct",
               component: ProductList,
            },
         ],
      },
      {
         path: "/login",
         component: UserLogin,
      },
      {
         path: "/registration",
         component: UserRegistration,
      },
      // {
      //    path: "/:notFound(.*)",
      //    component: null,
      // },
   ],

});


export default router;
