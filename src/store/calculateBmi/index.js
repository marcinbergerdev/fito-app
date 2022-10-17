import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
   state() {
      return {
         userBmiResult: {
            bmi: 0,
            data: {},
         },
         ranges: [
            { id: 0, color: "#fff" },
            { id: 1, color: "#fff" },
            { id: 2, color: "#00c1fb" },
            { id: 3, color: "#1aff61" },
            { id: 4, color: "#ffa500" },
            { id: 5, color: "#f72420" },
            { id: 6, color: "#f72420" },
            { id: 7, color: "#f72420" },
         ],
      };
   },
   getters,
   mutations,
   actions,
};
