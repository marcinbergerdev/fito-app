import en from '../../languages/en.json';
// import pl from '../../languages/pl.json';
// import de from '../../languages/de.json';

export default {
   calculateYourBmi(store, result) {
      store.resultBmi = result;

      // console.log(en.bmiResult.ranges[1].text);

      if (result <= 16.99) {
         // store.rangeData = store.ranges[1];
         store.rangeData = en.bmiResult.ranges[1];

         console.log(store.rangeData);

      } else if (result <= 18.49) {
         // store.rangeData = store.ranges[2];
         store.rangeData = en.bmiResult.ranges[2];
         console.log(store.rangeData);
      } else if (result <= 24.99) {
         // store.rangeData = store.ranges[3];
         store.rangeData = en.bmiResult.ranges[3];
      } else if (result <= 29.99) {
         // store.rangeData = store.ranges[4];
         store.rangeData = en.bmiResult.ranges[4];
      } else if (result <= 34.99) {
         // store.rangeData = store.ranges[5];
         store.rangeData = en.bmiResult.ranges[5];
      } else if (result <= 39.99) {
         // store.rangeData = store.ranges[6];
         store.rangeData = en.bmiResult.ranges[6];
      } else {
         // store.rangeData = store.ranges[7];
         store.rangeData = en.bmiResult.ranges[7];
      }
   },
};
