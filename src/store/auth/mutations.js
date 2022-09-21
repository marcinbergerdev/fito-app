export default {
  setUser(state, data){
    state.userId = data.localId;
    state.token = data.idToken;
    state.tokenExpiration = data.expiresIn;
  },
  logout(state){
    state.userId = null;
    state.token = null;
    state.tokenExpiration = null;
  }
}