export default {
  userId(state){
    console.log(state.userId);
    return state.userId
  },
  token(state){
    console.log(state.token);
    return state.token;
  },
  isAuthenticated(state) {
    return !!state.token;
  },
}