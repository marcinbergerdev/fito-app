export default {
   calculateYourBmi(context) {
      const {kg, cm} = JSON.parse(localStorage.getItem("bmiData"));
      const calculatedUserBmi = kg / Math.pow(cm, 2);
      const userBmiResult = (calculatedUserBmi * 10000).toFixed(2);

      context.commit("calculateYourBmi", userBmiResult);
   },
};
