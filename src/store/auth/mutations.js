export default {
  setUser(state, data){
    state.userId = data.localId;
    state.token = data.idToken;
    state.tokenExpiration = data.expiresIn;


    console.log(state.userId);
    console.log(state.token);
    console.log(state.tokenExpiration);
  }
}