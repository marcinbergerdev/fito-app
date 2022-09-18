export default {
   async registration(context,data) {
      const API_KEY = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA-5zmZKqEAxI3nmtKzO6eTFLVsiqq17Lg`;

      const response = await fetch(API_KEY, {
         method: "POST",
         body: JSON.stringify({
            email: data.email,
            password: data.password,
            returnSecureToken: true,
         }),
      });

      const responseData = await response.json();

      if (!response.ok) {
         const error = new Error(responseData.error.message || "Fails Operation!");
         throw error;
      }

      context.commit('setUser', responseData)
   },

   async login(context, data) {

    const API_KEY = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA-5zmZKqEAxI3nmtKzO6eTFLVsiqq17Lg`;

    const response = await fetch(API_KEY, {
       method: "POST",
       body: JSON.stringify({
          email: data.email,
          password: data.password,
          returnSecureToken: true,
       }),
    });

    const responseData = await response.json();

    if (!response.ok) {
       const error = new Error(responseData.error.message || "Fails Operation!");
       throw error;
    }

    context.commit('setUser', responseData)
   },
};
