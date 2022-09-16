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
        <h2 class='formBox__header'>Sign up</h2>

        <div class="registerInputs">
          <Field name="userName" type="text" :rules="validateRegistration" placeholder="user name" />
          <ErrorMessage class='errorMessage' name="userName" />

          <Field name="password" type="password" :rules="validateRegistration" placeholder="password" />
          <ErrorMessage class='errorMessage' name="password" />

          <Field name="confirmPassword" type="password" :rules="validateRegistration" placeholder="confirm password" />
          <ErrorMessage class='errorMessage' name="confirmPassword" />
        </div>

        <base-button mode="flat">Register</base-button>
      </Form>
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
    validateRegistration(value) {
      // if the field is empty
      if (!value) {
        return "This field is required";
      }
      // All is good
      return true;
    },
  }
};
</script>
