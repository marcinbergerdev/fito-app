export default {
   loadProducts(state, data) {
      console.log(data);
      state.products = Object.values(data);
   },
   clearProductList(state) {
      state.products = [];
   },
};
