export default {
  addNewProduct(state, data){
    console.log(state, data);
  },
  loadProducts(state, data){
    state.products = data;
  },
  clearProductList(state){
    state.products = [];
  }
}