export default {
   loadProducts(state, data) {
      state.products = Object.values(data);
   },
   clearProductList(state) {
      state.products = [];
   },
};
