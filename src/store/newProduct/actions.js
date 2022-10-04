export default {
   async addNewProduct(context, data) {
      const userId = context.rootState.auth.userId;
      const token = context.rootState.auth.token;
      const productId = data.value.id;

      const newProduct = {
         id: data.value.id,
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

      const API_LINK = `https://fitto-authentication-c968e-default-rtdb.europe-west1.firebasedatabase.app/products/${userId}/${productId}.json?auth=${token}`;
      const response = await fetch(API_LINK, {
         method: "PUT",
         body: JSON.stringify(newProduct),
      });

      const responseData = await response.json();

      if (!response.ok) {
         const error = new Error(
            responseData.message || "Something goes wrong try logging in again!"
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
      if (!responseData) return;

      const loadedProducts = Object.values(responseData);
      context.commit("loadProducts", loadedProducts);
   },

   async selectCategory(context, category) {
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

      if (!responseData) return (context.rootState.newProduct.products = []);

      const loadedProducts = Object.values(responseData);

      if (!category || category === "all") {
         context.commit("loadProducts", loadedProducts);
         return;
      }

      const filteredList = loadedProducts.filter(
         (product) => product.selectedCategory === category
      );

      context.commit("loadProducts", filteredList);
   },

   async deleteProduct(context, product) {
      const userId = context.rootState.auth.userId;
      const token = context.rootState.auth.token;

      const API_LINK = `https://fitto-authentication-c968e-default-rtdb.europe-west1.firebasedatabase.app/products/${userId}/${product.id}.json?auth=${token}`;
      const response = await fetch(API_LINK, {
         method: "DELETE",
      });

      const responseData = await response.json();

      if (!response.ok) {
         const error = new Error(
            responseData.message || "Something goes wrong try logging in again!"
         );
         throw error;
      }
      context.dispatch("selectCategory", product.category);
   },


   searchProduct(context, data){
      const products = context.rootState.newProduct.products;
      const text = data.text;
      const category = data.category;

      if(!text) return context.dispatch('selectCategory', category);

      const filteredList = products.filter(
         (product) => product.name.toLowerCase().trim('').includes(text.toLowerCase().trim(''))
      );
      context.commit('searchProduct', filteredList);
   },

   clearProductList(context){
      context.commit('clearProductList');
   }
};
