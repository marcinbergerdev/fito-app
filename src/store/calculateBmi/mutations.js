export default {
   calculateYourBmi(store, data) {
      const kg = data.kg;
      const height = data.height;
      let result = 0;

      result = (kg / Math.pow(height, 2)) * 10000;
      store.resultBmi = result.toFixed(2);
   },
   showRange(store) {
      const result = store.resultBmi;

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
