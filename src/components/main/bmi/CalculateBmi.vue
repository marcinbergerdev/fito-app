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
        <div class="formBox">
          <div class="formGender">
            <label>Gender:</label>

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
            <div class="setData__label">
              <label>Weight:</label>
              <label>Height:</label>
            </div>

            <div class="setData__input">
              <input id="weight" type="number" />
              <input id="height" type="number" />
            </div>

            <div>
              <span>kg</span>
              <span>cm</span>
            </div>
          </div>

          <base-button mode="calc" size="larger" color="flat">
            <span class="calcButton">
              <Icon class="icon" icon="ic:outline-calculate" />
            </span>
            Calculate
          </base-button>
        </div>
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
  padding: 3rem;
  justify-content: center;
  align-items: center;
  min-height: 100%;

}
.formContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 2rem 3rem 2rem;
  width: #{"min(100%, 500px)"};
  background-color: var(--dark);
  border-radius: 2rem;
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

.icon {
  width: 2rem;
  height: 2rem;
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

form {
  min-width: 70%;
}

.formBox {
  display: flex;
  flex-direction: column;
}

.formGender label,
.setData label,
.setData span {
  font-weight: 200;
  font-size: 1.3rem;
}

.formGender {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;

  div {
    display: flex;
    align-items: center;
    input {
      margin-right: 0.5rem;
    }
  }
}

.setData {
  display: flex;
  justify-content: space-around;
  align-content: center;
  margin: 2rem 0;

  div {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  &__label {
    line-height: 3;
  }

  &__input {
    width: 50%;
    input {
      width: 100%;
      padding: 0.5rem 1rem;
      font-size: 1.1rem;
      outline: none;
      color: var(--white);
      background-color: #ee874b27;
      border: 1px solid #ce4d02a6;
    }
    input:focus {
      border: 1px solid #ce4d02;
    }
  }
}
.calcButton{
  margin-right: 0.5rem;
}
</style>