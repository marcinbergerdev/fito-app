export default {
   registrationApi(state){
      return state.registrationApi
   },
   loginApi(state){
      return state.loginApi
   },
   userId(state) {
      return state.userId;
   },
   token(state) {
      return state.token;
   },
   isAuthenticated(state) {
      return !!state.token;
   },
};
