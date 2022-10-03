export default {
   toggleHamburger(state, activity) {
      if (activity) {
        return (state.mobileMenuActivity = false);
      }
      state.mobileMenuActivity = !state.mobileMenuActivity;
   },
};
