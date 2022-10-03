export default {
   loadProducts(state, data) {
      state.products = Object.values(data);
   },
   selectCategory(state, category) {
      const products = state.products;

      if (category === "all") {
         state.newProductList = products;
         return;
      }
      const filteredList = products.filter(
         (product) => product.selectedCategory === category
      );

      state.newProductList = filteredList;
   },
   clearProductList(state) {
      state.products = [];
   },
};
