import { createStore } from 'vuex'


const store = createStore({
  state(){
    return {
      mobileMenuActivity: false,
      authentication: true,
      bmiResultRanges: [
        "BMI Value ranges:",
        "16 - 16.99 - emaciation",
        "17 - 18.49 - underweight",
        "18.5 - 24.99 - normal value",
        "25 - 29.99 - overweight",
        "30 - 34.99 - 1st degree of obesity",
        "35 - 39.99 - grade II obesity",
        "over 40 - extreme obesity",
      ]
    }
  },
  getters: {
    mobileMenuActiveStatus(state){
      return state.mobileMenuActivity;
    },
    authentication(state){
      return state.authentication;
    },
    ranges(state){
      return state.bmiResultRanges;
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