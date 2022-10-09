<template>
  <base-box size="calc">
    <base-button link to="/home" mode="backButton">
      <span class="backButton">
        <app-icon class="icon" icon="akar-icons:arrow-back" />
      </span>
    </base-button>

    <header class="formHeader">
      <h1 class="formHeader__text">Calculate your BMI</h1>
    </header>

    <form @submit.prevent="calcBmi">
      <div class="formGender">
        <label for="gender">Gender:</label>

        <div class='inputColors'>
          <input
            id="male"
            type="radio"
            value="male"
            name="gender"
            v-model="gender"
          />
          <label for="male">Male</label>
        </div>

        <div class='inputColors'>
          <input
            id="female"
            class='inputColors'
            type="radio"
            value="female"
            name="gender"
            v-model="gender"
          />
          <label for="female">Female</label>
        </div>
      </div>

      <div class="setData">
        <div class='inputColors'>
          <label for="weight">Weight:</label>
          <input id="weight" class='inputColors' type="number" step="0.1" v-model="kg" />
          <span>kg</span>
        </div>

        <div class='inputColors'>
          <label for="height">Height:</label>
          <input id='height' class='inputColors' type="number" step="0.1" v-model="height" />
          <span>cm</span>
        </div>
      </div>

      <p class="errorMessageValidation" v-if="errorMessage">
        complete all fields!
      </p>

      <base-button mode="bmiButton" type="flat">
        <span>
          <app-icon class="icon" icon="ic:outline-calculate" />
        </span>
        Calculate
      </base-button>
    </form>
  </base-box>
</template>

<script>
export default {
  data() {
    return {
      gender: "",
      kg: 0,
      height: 0,
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

      this.$store.dispatch({
        type: "calculateYourBmi",
        data: {
          kg: this.kg,
          height: this.height,
        },
      });
      this.$store.dispatch('showRange');
      this.$router.push("/home/result");
    },
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