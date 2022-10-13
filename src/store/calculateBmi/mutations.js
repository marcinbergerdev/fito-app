export default {
   calculateYourBmi(store, result) {
      if (result <= 16.99) {
         store.result.data = store.ranges[1];
      } else if (result <= 18.49) {
         store.result.data = store.ranges[2];
      } else if (result <= 24.99) {
         store.result.data = store.ranges[3];
      } else if (result <= 29.99) {
         store.result.data = store.ranges[4];
      } else if (result <= 34.99) {
         store.result.data = store.ranges[5];
      } else if (result <= 39.99) {
         store.result.data = store.ranges[6];
      } else {
         store.result.data = store.ranges[7];
      }

      store.result.bmi = result;
   },
};
