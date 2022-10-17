export default {
   calculateYourBmi(store, userBmiResult) {
      if (userBmiResult <= 16.99) {
         store.userBmiResult.data = store.ranges[1];
      } else if (userBmiResult <= 18.49) {
         store.userBmiResult.data = store.ranges[2];
      } else if (userBmiResult <= 24.99) {
         store.userBmiResult.data = store.ranges[3];
      } else if (userBmiResult <= 29.99) {
         store.userBmiResult.data = store.ranges[4];
      } else if (userBmiResult <= 34.99) {
         store.userBmiResult.data = store.ranges[5];
      } else if (userBmiResult <= 39.99) {
         store.userBmiResult.data = store.ranges[6];
      } else {
         store.userBmiResult.data = store.ranges[7];
      }

      store.userBmiResult.bmi = userBmiResult;
   },
};
