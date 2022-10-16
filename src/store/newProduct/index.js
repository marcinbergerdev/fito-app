import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
   state() {
      return {
         products: [],
         ingredients: [
            {
              id: "fat",
              value: 0,
            },
            {
              id: "carbs",
              value: 0,
            },
            {
              id: "protein",
              value: 0,
            },
            {
              id: "salt",
              value: 0,
            },
            {
              id: "fiber",
              value: 0,
            },
          ],
          categories: [
            {
              id: "fruit",
              idName: 1,
            },
            {
              id: "sweets",
              idName: 2,
            },
            {
              id: "vegetable",
              idName: 3,
            },
            {
              id: "spices",
              idName: 4,
            },
          ],
      };
   },
   getters,
   mutations,
   actions,
};
