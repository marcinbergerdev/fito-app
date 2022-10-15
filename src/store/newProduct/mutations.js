export default {
   loadProducts(state, products) {
      state.products = products;
   },
   searchProduct(state, list) {
      state.products = list;
   },
   clearProductList(state) {
      state.products = [];
   },
};
