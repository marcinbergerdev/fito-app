<template>
  <article class="bmiContainer">
    <section class="formContainer">
      <base-button to="/home" link mode="back">
        <span class="backButton">
          <Icon class="icon" icon="akar-icons:arrow-back" />
        </span>
      </base-button>

      <header class="formHeader">
        <h1 class="formHeader__text">Calculate your BMI</h1>
      </header>

      <form @submit.prevent="test">
        <div class="formGender">
          <label for="gender">Gender:</label>

          <div>
            <input id="male" type="radio" name="gender" />
            <label for="male">Male</label>
          </div>

          <div>
            <input id="female" type="radio" name="gender" />
            <label for="female">Female</label>
          </div>
        </div>

        <div class="setData">
          <div>
            <label for="weight">Weight:</label>
            <input type="number" />
            <span>kg</span>
          </div>

          <div>
            <label for="height">Height:</label>
            <input type="number" />
            <span>cm</span>
          </div>
        </div>

        <base-button mode="calc" size="larger" color="flat">
          <span class="calcButton">
            <Icon class="icon" icon="ic:outline-calculate" />
          </span>
          Calculate
        </base-button>
      </form>
    </section>
  </article>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
  methods: {
    test() {
      console.log("sd");
    },
  },
};
</script>

<style lang="scss" scoped>
.bmiContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  min-height: 100%;
}

.formContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem 4rem 2rem;
  width: #{"min(80%, 400px)"};
  background-color: var(--dark);
  border-radius: 2rem;
}

.icon {
  width: 2rem;
  height: 2rem;
}

.backButton {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 0;
  border-radius: 5rem;
  color: var(--primary-orange);
  border: 1px solid var(--primary-orange);
}

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
      outline: none;
      color: var(--white);
      background-color: #ee874b27;
      border: 1px solid #ce4d02a6;

      &:focus {
        border: 1px solid #e95e0e;
      }
    }

    span {
      width: 10%;
    }
  }
}
</style>