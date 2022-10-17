import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
   state() {
      return {
         registrationApi: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA-5zmZKqEAxI3nmtKzO6eTFLVsiqq17Lg`,
         loginApi: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA-5zmZKqEAxI3nmtKzO6eTFLVsiqq17Lg`,
         authentication: false,
         userId: null,
         token: null,
      };
   },
   getters,
   mutations,
   actions,
};
