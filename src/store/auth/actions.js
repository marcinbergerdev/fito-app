import router from "@/router";
let timer;

export default {
   async registration(_, data) {
      const link = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA-5zmZKqEAxI3nmtKzO6eTFLVsiqq17Lg`;
      return await this.dispatch("auth", {
         userData: data,
         API_KEY: link,
      });
   },

   async login(_, data) {
      const link = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA-5zmZKqEAxI3nmtKzO6eTFLVsiqq17Lg`;
      return await this.dispatch("auth", {
         userData: data,
         API_KEY: link,
      });
   },

   async auth(context, { userData, API_KEY }) {
      const response = await fetch(API_KEY, {
         method: "POST",
         body: JSON.stringify({
            email: userData.email,
            password: userData.password,
            returnSecureToken: true,
         }),
      });

      const responseData = await response.json();

      if (!response.ok) {
         const error = new Error(
            responseData.error.message || "Fails Operation!"
         );
         throw error;
      }

      // Set Response Data(userId, userToken, expiresIn) to LocalStorage
      localStorage.setItem("userId", responseData.localId);
      localStorage.setItem("token", responseData.idToken);
      localStorage.setItem("tokenExpiration", responseData.expiresIn);

      //Set expiriesIn and expirationData(Current time + expiriesIn/1h)
      const expiresIn = +responseData.expiresIn * 1000;
      const expirationData = new Date().getTime() + expiresIn;
      localStorage.setItem("expiresIn", expirationData);

      //Timer after expiriesIn logout
      timer = setTimeout(() => {
         context.dispatch("logout");
      }, expiresIn);

      context.commit("setUser", responseData);
   },

   tryLogin(context) {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");
      const currentTime = new Date().getTime();
      const expiresIn = +localStorage.getItem("expiresIn");

      //Check how many time left
      if (expiresIn - currentTime < 0) {
         context.dispatch("logout");
         return;
      }

      context.commit("setUser", {
         localId: userId,
         idToken: token,
      });
   },

   logout(context) {
      const calculateBmi = router.currentRoute.value.meta.withoutUserAccount;
      const resultBmi = router.currentRoute.value.meta.withoutUserAccount;

      if (!calculateBmi || !resultBmi) {
         router.replace("/home");
      }

      localStorage.removeItem("userId");
      localStorage.removeItem("token");
      localStorage.removeItem("expiresIn");
      localStorage.removeItem("tokenExpiration");
      clearTimeout(timer);

      context.commit("setUser", {
         localId: null,
         idToken: null,
      });
   },
};
