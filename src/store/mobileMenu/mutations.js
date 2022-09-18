export default {
  toggleHamburger(state,activity){
    if(activity){
      state.mobileMenuActivity = false;
      return;
    }
    state.mobileMenuActivity = !state.mobileMenuActivity;
  },
}