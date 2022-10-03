import { createStore } from 'vuex';
import authenticationModule from './auth/index.js';
import mobileMenuModule from './mobileMenu/index.js';
import newProductModule from './newProduct/index.js';
import calculateBmiModule from './calculateBmi/index.js';



const store = createStore({
  modules: {
    auth: authenticationModule,
    mobileMenu: mobileMenuModule,
    newProduct: newProductModule,
    calculateBmi: calculateBmiModule,
  },
});


export default store