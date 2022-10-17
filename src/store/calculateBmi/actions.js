export default {
   calculateYourBmi(context) {
      const {kg, cm} = JSON.parse(localStorage.getItem("bmiData"));
      let result = 0;
      const calculatedUserBmi = kg / Math.pow(cm, 2);

      result = (calculatedUserBmi * 10000).toFixed(2);
      context.commit("calculateYourBmi", result);
   },
};
