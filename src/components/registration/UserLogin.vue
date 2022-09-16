<template>
  <article class="registrationContainer">
    <base-registration radius="logInRadius">
      <base-button link to="/home" mode="backButton">
        <span class="backButton">
          <app-icon class="icon" icon="akar-icons:arrow-back" />
        </span>
      </base-button>

      <!-- Global Styles in App.vue -->
      <Form @submit="formSubmit" class="formBox">
        <h2 class="formBox__header">Log in</h2>

        <div class="registerInputs">
          <Field name="login" type="text" :rules="validateLogin" placeholder="user name" />
          <ErrorMessage class='errorMessage' name="login" />

          <Field name="password" type="password" :rules="validateLogin" placeholder="password" />
          <ErrorMessage class='errorMessage' name="password" />

        </div>

        <base-button type="flat">Log in</base-button>
      </Form>
    </base-registration>

    <base-registration view="mobileHidden" radius="signUpRadius">
      <header class="singUpInfo">
        <h2>Sign up</h2>
        <p>You don't have an account yet?</p>
      </header>

      <base-button link to="/registration" type="signInOutline"
        >Sign up</base-button
      >
    </base-registration>
  </article>
</template>



<script>
import { Form, Field, ErrorMessage, } from "vee-validate";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  methods: {
    formSubmit(values) {
      console.log(values);
    },
    validateLogin(value) {
      // if the field is empty
      if (!value) {
        return "This field is required";
      }
      // All is good
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
.singUpInfo {
  font-size: 2rem;
  text-align: center;

  h2 {
    display: none;
    @media (min-width: 768px) {
      display: block;
      font-size: 3rem;
      margin-bottom: 1.5rem;
    }
  }

  p {
    color: var(--primary-orange);
    margin-bottom: 1rem;
    @media (min-width: 768px) {
      color: var(--dark);
    }
  }
}
</style>
