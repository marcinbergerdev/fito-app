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
    toggleHamburger(state,activity){
      if(activity){
        state.mobileMenuActivity = false;
        return;
      }
      state.mobileMenuActivity = !state.mobileMenuActivity;
    },
  },
  actions: {
    toggleHamburger(context,activity){
      context.commit('toggleHamburger',activity);
    },
  }
});


export default store