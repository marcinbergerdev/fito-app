<template>
  <base-box size="result">
    <header class="resultHeader">
      <h2 class="resultHeader__text">BMI Result</h2>
    </header>

    <div class="resultBox">
      <span class="resultBox__number">29.32</span>
      <p class="resultBox__text">Your BMI indicates: overweight</p>
    </div>

    <ul class="resultList">
      <li class="resultList__ranges" v-for="(range, id) in ranges" :key="id">
        <p>{{ range }}</p>
      </li>
    </ul>

    <base-button link to="/home/bmi" mode="bmiButton" type="flat"
      >Back</base-button
    >
  </base-box>
</template>

<script>
export default {
  data(){
    return{
       ranges: [
        "BMI Value ranges:",
        "16 - 16.99 - emaciation",
        "17 - 18.49 - underweight",
        "18.5 - 24.99 - normal value",
        "25 - 29.99 - overweight",
        "30 - 34.99 - 1st degree of obesity",
        "35 - 39.99 - grade II obesity",
        "over 40 - extreme obesity",
      ]
    }
  },
};
</script>

<style lang="scss" scoped>
.resultHeader {
  &__text {
    font-weight: 200;
    font-size: 3.5rem;
  }
}

.resultBox {
  margin: 2rem 0;

  &__number,
  &__text {
    color: #bf891b;
  }
  &__number {
    font-size: 5rem;
  }
  &__text {
    font-size: 1.4rem;
  }
}

.resultList {
  text-align: start;
  font-size: 2.5rem;
  line-height: 1.5;
  margin-bottom: 2rem;

  li:first-child {
    font-weight: 700;
    line-height: 2;
  }

  &__ranges {
    list-style: none;
  }

  @media (min-width: 310px) {
    font-size: 3rem;
  }
}
</style>