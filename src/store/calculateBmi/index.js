import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
   state() {
      return {
         resultBmi: 0,
         ranges: [
            { text: "BMI Value ranges:" },
            { text: "16 - 16.99 - emaciation", color: "#fff" },
            { text: "17 - 18.49 - underweight", color: "#00c1fb" },
            { text: "18.5 - 24.99 - normal value", color: "#1aff61" },
            { text: "25 - 29.99 - overweight", color: "#ffa500" },
            { text: "30 - 34.99 - 1st degree of obesity", color: "#f72420" },
            { text: "35 - 39.99 - grade II obesity", color: "#f72420" },
            { text: "over 40 - extreme obesity", color: "#f72420" },
         ],
         rangeData: {
            info: "",
            color: "",
         },
      };
   },
   getters,
   mutations,
   actions,
};
