export default {
   async addNewProduct(context, data) {
      const userId = context.rootState.auth.userId;
      const token = context.rootState.auth.token;
      console.log(context.state.products);
      let selectedProducts = context.state.products

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
      selectedProducts.push(newProduct)

      const API_LINK = `https://fitto-authentication-c968e-default-rtdb.europe-west1.firebasedatabase.app/products/${userId}.json?auth=${token}`;
      const response = await fetch(API_LINK, {
         method: "PUT",
         body: JSON.stringify(selectedProducts),
      });

      const responseData = await response.json();

      if (!response.ok) {
         const error = new Error(
            responseData.message || "Adding new product not correct!"
         );
         throw error;
      }
   },



   async loadProducts(context) {
      const userId = context.rootState.auth.userId;

      const response = await fetch(
         `https://fitto-authentication-c968e-default-rtdb.europe-west1.firebasedatabase.app/products/${userId}.json`,
         {
            method: "GET",
         }
      );

      const responseData = await response.json();

      if (!response.ok) {
         const error = new Error(responseData.message || "Data Base Fails!");
         throw error;
      }

      if(!responseData) return
      context.commit("loadProducts", responseData);
   },



   async deleteProduct(context, id){
      const userId = context.rootState.auth.userId;
      const token = context.rootState.auth.token;
      const products = context.state.products;
      products.splice(id, 1);

      const API_LINK = `https://fitto-authentication-c968e-default-rtdb.europe-west1.firebasedatabase.app/products/${userId}.json?auth=${token}`;
      const response = await fetch(API_LINK, {
         method: "PUT",
         body: JSON.stringify(products),
      });

      const responseData = await response.json();

      if (!response.ok) {
         const error = new Error(
            responseData.message || "Adding new product not correct!"
         );
         throw error;
      }
      context.commit("loadProducts", products);
   },


   clearProductList(context) {
      context.commit("clearProductList");
   },
};
