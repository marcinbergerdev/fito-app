import { createStore } from 'vuex'


const store = createStore({
  state(){
    return {
      mobileMenuActivity: false
    }
  },
  getters: {
    mobileMenuActiveStatus(state){
      return state.mobileMenuActivity;
    }
  },
  mutations: {
    toggleHamburger(state){
      state.mobileMenuActivity = !state.mobileMenuActivity;
    }
  },
  actions: {
    toggleHamburger(context){
      context.commit('toggleHamburger');
    }
  }
});


export default store