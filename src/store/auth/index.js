export default {
  state() {
    return{
      authentication: false,
      userId: null,
      token: null,
      tokenExpiration: null,
    }
  },
  getters: {
    authentication(state){
      return state.authentication;
    },
  },
  mutations: {

  },
  actions: {

  }
}

