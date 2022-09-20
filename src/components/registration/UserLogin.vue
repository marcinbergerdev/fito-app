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
          <Field name="email" type="email" :rules="validateEmail" placeholder="user name" />
          <ErrorMessage class='errorMessage' name="email" />

          <Field name="password" type="password" :rules="validateLogin" placeholder="password" />
          <ErrorMessage class='errorMessage' name="password" />
          <p></p>
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
  data(){
    return {
      error: null
    }
  },
  methods: {
    async formSubmit(value) {
      try{
        await this.$store.dispatch('login', value);
      }catch(error){
        this.error = error;
      }



      this.$router.replace('/home');

    },
     validateEmail(value) {
      // if the field is empty
      if (!value) {
        return "This field is required";
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "This field must be a valid email";
      }
      // All is good
      return true;
    },
    validateLogin(value) {
      // if the field is empty
      if (!value) {
        return "This field is required";
      }
      if (value.length < 6) {
        return "The password should have min 6 characters";
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
