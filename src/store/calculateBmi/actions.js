export default {
   calculateYourBmi(context) {
      const data = JSON.parse(localStorage.getItem("bmiData"));
      const kg = data.kg;
      const cm = data.cm;
      let result = 0;

      result = ((kg / Math.pow(cm, 2)) * 10000).toFixed(2);
      context.commit("calculateYourBmi", result);
   },
};
