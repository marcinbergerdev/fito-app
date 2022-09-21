export default {
   async registration(context, data) {
      const link = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA-5zmZKqEAxI3nmtKzO6eTFLVsiqq17Lg`;
      return await this.dispatch("auth", {
         userData: data,
         API_KEY: link,
      });
   },

   async login(context, data) {
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

      localStorage.setItem("userId", responseData.localId);
      localStorage.setItem("token", responseData.idToken);
      localStorage.setItem("expiresIn", responseData.expiresIn);

      if (!response.ok) {
         const error = new Error(
            responseData.error.message || "Fails Operation!"
         );
         throw error;
      }
      context.commit("setUser", responseData);
   },

   tryLogin(context) {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");
      const expiresIn = localStorage.getItem("expiresIn");

      const data = {
         localId: userId,
         idToken: token,
         expiresIn: expiresIn
      };

      if (userId && token) {
         context.commit("setUser", data);
      }
   },

   logout(context){
      localStorage.removeItem('userId');
      localStorage.removeItem('token');
      localStorage.removeItem('expiresIn');
      context.commit('logout');
   }
};
