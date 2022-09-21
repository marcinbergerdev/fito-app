export default {
   async addNewProduct(context, data) {

      const userId = context.rootState.auth.userId;
      const token = context.rootState.auth.token;


         console.log(userId);
         console.log(token);
         console.log(context, data);




      const newProduct = {
         img: data.value.img,
         name: data.value.name,
         gram: data.value.gram,
         kcal: data.value.kcal,
         fat: data.value.fat,
         carbs: data.value.carbs,
         protein: data.value.protein,
         salt: data.value.salt,
         fiber: data.value.fiber,
         selectedCategory: data.value.selectedCategory,
      };

      const API_LINK = `https://fitto-authentication-c968e-default-rtdb.europe-west1.firebasedatabase.app/products/${userId}/1.json?auth=${token}`;

      const response = await fetch(API_LINK, {
         method: "PUT",
         body: JSON.stringify(newProduct),
      });
      console.log(response);

      const responseData = await response.json();

      console.log(responseData);

      if (!response.ok) {
         const error = new Error(
            responseData.message || "Adding new product not correct!"
         );
         throw error;
      }

      context.commit("addNewProduct");
   },
};
