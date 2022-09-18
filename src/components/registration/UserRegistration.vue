<template>

  <article class="registrationContainer">
    <base-registration radius="singleCard">
      <base-button link to="/home" mode="backButton">
        <span class="backButton">
          <app-icon class="icon" icon="akar-icons:arrow-back" />
        </span>
      </base-button>

      <!-- Global Styles in App.vue -->
      <Form @submit="formSubmit" class="formBox">
        <h2 class="formBox__header">Sign up</h2>

        <div class="registerInputs">
          <Field
            name="email"
            type="email"
            :rules="validateEmail"
            placeholder="user name"
          />
          <ErrorMessage class="errorMessage" name="email" />

          <Field
            name="password"
            type="password"
            :rules="validateRegistration"
            v-model="inputPassword"
            placeholder="password"
          />
          <ErrorMessage class="errorMessage" name="password" />

          <Field
            name="confirmPassword"
            type="password"
            :rules="[validateRegistration, samePassword]"
            placeholder="confirm password"
          />
          <ErrorMessage class="errorMessage" name="confirmPassword" />
        </div>

        <base-button mode="flat">Register</base-button>
      </Form>
    </base-registration>
  </article>
</template>



<script>
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      inputPassword: "",
    };
  },
  methods: {
    formSubmit(value) {
      this.$store.dispatch("registration", value);
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
    validateRegistration(value) {
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
    samePassword(value) {
      // if password is different
      if (value !== this.inputPassword) {
        return "The password is different";
      }
      // All is good
      return true;
    },
  },
};
</script>
