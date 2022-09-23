export default {
   async addNewProduct(context, data) {
      const userId = context.rootState.auth.userId;
      const token = context.rootState.auth.token;  0

      const newProduct = {
         img: data.value.img,
         name: data.value.name,
         gram: data.value.gram,
         kcal: data.value.kcal,
         nutritionalValues: [
            {
               name: "Fat",
               value: data.value.fat,
            },
            {
               name: "Carbs",
               value: data.value.carbs,
            },
            {
               name: "Protein",
               value: data.value.protein,
            },
            {
               name: "Salt",
               value: data.value.salt,
            },
            {
               name: "Fiber",
               value: data.value.fiber,
            },
         ],
         selectedCategory: data.value.selectedCategory,
      };

      const API_LINK = `https://fitto-authentication-c968e-default-rtdb.europe-west1.firebasedatabase.app/products/${userId}/${data.value.name}.json?auth=${token}`;
      const response = await fetch(API_LINK, {
         method: "PUT",
         body: JSON.stringify(newProduct),
      });

      const responseData = await response.json();

      if (!response.ok) {
         const error = new Error(
            responseData.message || "Adding new product not correct!"
         );
         throw error;
      }

      context.commit("addNewProduct");
   },

   async loadProducts(context) {
      const userId = context.rootState.auth.userId;
      const token = context.rootState.auth.token;

      const response = await fetch(
         `https://fitto-authentication-c968e-default-rtdb.europe-west1.firebasedatabase.app/products/${userId}.json?auth=${token}`,
         {
            method: "GET",
         }
      );

      const responseData = await response.json();

      if (!response.ok) {
         const error = new Error(responseData.message || "Data Base Fails!");
         throw error;
      }
      context.commit("loadProducts", responseData);
   },
   async deleteProduct(context, id){
      const userId = context.rootState.auth.userId;
      console.log(userId);
      console.log(id);

      const response = await fetch(
         `https://fitto-authentication-c968e-default-rtdb.europe-west1.firebasedatabase.app/products/${userId}/${id}`,
         {
            method: 'DELETE',
         }
      );

      const responseData = response.json();

      if(!response.ok){
         const error = new Error(responseData.message || "Sorry, you can't delete this data!. Try later");
         throw error
      }
      console.log(response);
   },
   clearProductList(context) {
      context.commit("clearProductList");
   },
};
