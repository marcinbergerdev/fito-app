import { createStore } from 'vuex';
import authenticationModule from './auth/index.js';
import mobileMenuModule from './mobileMenu/index.js';
import newProductModule from './newProduct/index.js';


const store = createStore({
  modules: {
    auth: authenticationModule,
    mobileMenu: mobileMenuModule,
    newProduct: newProductModule
  },
  state(){
    return {

    }
  },
  getters: {
  },
  mutations: {

  },
  actions: {

  }
});


export default store