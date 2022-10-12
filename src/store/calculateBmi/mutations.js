export default {
   calculateYourBmi(store, result) {
      store.resultBmi = result;

      if (result <= 16.99) {
         store.rangeData = store.ranges[1];
      } else if (result <= 18.49) {
         store.rangeData = store.ranges[2];
      } else if (result <= 24.99) {
         store.rangeData = store.ranges[3];
      } else if (result <= 29.99) {
         store.rangeData = store.ranges[4];
      } else if (result <= 34.99) {
         store.rangeData = store.ranges[5];
      } else if (result <= 39.99) {
         store.rangeData = store.ranges[6];
      } else {
         store.rangeData = store.ranges[7];
      }
   },
};
