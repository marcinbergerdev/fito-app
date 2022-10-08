export default {
  setUser(state, data){
    state.userId = data.localId;
    state.token = data.idToken;
  },
}