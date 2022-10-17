import router from "@/router";
let timer;

export default {
   async register(_, {data, apiLink}) {
      return await this.dispatch("auth", {
         userData: data,
         API_KEY: apiLink,
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

      context.dispatch("setExpiration", responseData);
      context.commit("setUser", responseData);
   },

   setExpiration(context, data){
      const expiresIn = Number(data.expiresIn) * 1000;
      const expirationData = new Date().getTime() + expiresIn;
      localStorage.setItem("expiresIn", expirationData);
      context.dispatch("autoLogout", expiresIn);
   },

   tryLogin(context) {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");
      const tokenExpiration = localStorage.getItem("tokenExpiration");
      const expiresIn = +localStorage.getItem("expiresIn");
      const autoExpiresIn = tokenExpiration * 1000;
      const currentTime = new Date().getTime();
      const refreshExpirationTime = currentTime + tokenExpiration * 1000;

      if (!expiresIn && !tokenExpiration) return;

      if (expiresIn - currentTime < 0) {
         context.dispatch("logout");
         return;
      }

      context.dispatch("autoLogout", autoExpiresIn);
      localStorage.setItem("expiresIn", refreshExpirationTime);

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

   autoLogout(context, time) {

      console.log(time);
      timer = setTimeout(() => {
         context.dispatch("logout");
      }, time);
   },
};
