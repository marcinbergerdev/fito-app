export default {
   addNewProduct() {},
   loadProducts(state, data) {
      if(data) state.products = Object.values(data);
   },
   clearProductList(state) {
      state.products = [];
   },
};
