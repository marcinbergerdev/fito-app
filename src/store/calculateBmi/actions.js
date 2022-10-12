export default {
   calculateYourBmi(context, { data }) {
      const kg = data.kg;
      const cm = data.cm;
      let result = 0;

      result = (kg / Math.pow(cm, 2)) * 10000;
      result = result.toFixed(2);

      context.commit("calculateYourBmi", result);
   },
};
