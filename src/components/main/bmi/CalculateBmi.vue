<template>
  <base-box size="calc">
    <base-button link to="/home" mode="backButton">
      <span class="backButton">
        <app-icon class="icon" icon="akar-icons:arrow-back" />
      </span>
    </base-button>

    <header class="formHeader">
      <h1 class="formHeader__text">{{ $t("bmiCalculate.header") }}</h1>
    </header>

    <form @submit.prevent="calcBmi">
      <div class="formGender">
        <label for="gender">{{ $t("bmiCalculate.gender.label") }}:</label>

        <div class="inputColors">
          <input
            id="male"
            type="radio"
            value="male"
            name="gender"
            v-model="gender"
          />
          <label for="male">{{ $t("bmiCalculate.gender.male") }}:</label>
        </div>

        <div class="inputColors">
          <input
            id="female"
            class="inputColors"
            type="radio"
            value="female"
            name="gender"
            v-model="gender"
          />
          <label for="female">{{ $t("bmiCalculate.gender.female") }}:</label>
        </div>
      </div>

      <div class="setData">
        <div class="inputColors">
          <label for="weight">{{ $t("bmiCalculate.weight") }}:</label>
          <input
            id="weight"
            class="inputColors"
            type="number"
            step="0.1"
            v-model="kg"
            placeholder="0.0"
          />
          <span>kg</span>
        </div>

        <div class="inputColors">
          <label for="height">{{ $t("bmiCalculate.height") }}:</label>
          <input
            id="height"
            class="inputColors"
            type="number"
            step="0.1"
            v-model="height"
            placeholder="0.0"
          />
          <span>cm</span>
        </div>
      </div>

      <p class="errorMessageValidation" v-if="errorMessage">
        {{ $t("bmiCalculate.fields") }}
      </p>

      <base-button mode="bmiButton" type="flat">
        <span>
          <app-icon class="icon" icon="ic:outline-calculate" />
        </span>
        {{ $t("bmiCalculate.calcBtn") }}
      </base-button>
    </form>
  </base-box>
</template>

<script>
export default {
  data() {
    return {
      gender: "",
      kg: null,
      height: null,
      errorMessage: false,
    };
  },
  methods: {
    calcBmi() {
      if (!this.gender || !this.kg || !this.height) {
        this.errorMessage = true;
        return;
      }
      this.errorMessage = false;

      localStorage.setItem(
        "bmiData",
        JSON.stringify({
          kg: this.kg,
          cm: this.height,
        })
      );
      this.$router.push("/home/result");
    },
  },
  created() {
    localStorage.removeItem("bmiData");
  },
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
}

.formHeader {
  width: 50%;
  text-align: center;

  &__text {
    font-weight: 200;
    font-size: 2rem;

    @media (min-width: 350px) {
      font-size: 3rem;
    }
  }
}

.formGender label,
.setData label,
.setData span {
  font-size: 1.3rem;
  font-weight: 200;
}

.formGender {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 0 0 0;
  width: 90%;

  div {
    width: 10%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    margin: 0 0.5rem;

    @media (min-width: 300px) {
      width: auto;
    }
  }
  input {
    @media (min-width: 768px) {
      cursor: pointer;
    }
  }

  @media (min-width: 300px) {
    flex-direction: row;
  }
}

.setData {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 3rem 0 2rem 0;
  width: 80%;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    label {
      width: 50px;
    }

    input {
      width: 50%;
      margin: 0 0.5rem;
      padding: 0.5rem 1rem;
      font-size: 1.1rem;
    }
    span {
      width: 10%;
    }
  }
}
</style>