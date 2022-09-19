import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";


export default {
  state() {
    return{
      authentication: false,
      userId: null,
      token: null,
      tokenExpiration: null,
    }
  },
  getters,
  mutations,
  actions
}
