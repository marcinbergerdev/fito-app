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
        <h2 class="formBox__header">{{ $t("registration.logIn") }}</h2>

        <div class="registerInputs inputColors">
          <Field
            name="email"
            type="email"
            :rules="validateEmail"
            placeholder="test@test.com"
          />
          <ErrorMessage class="errorMessageRegistration" name="email" />

          <Field
            name="password"
            type="password"
            :rules="validateLogin"
            placeholder="qwerty"
          />
          <ErrorMessage class="errorMessageRegistration" name="password" />
          <p v-if="error" class="errorMessageRegistration">
            {{ $t("validation.wrongData") }}
          </p>
        </div>

        <base-button type="flat">{{ $t("registration.logIn") }}</base-button>
      </Form>
    </base-registration>

    <base-registration view="mobileHidden" radius="signUpRadius">
      <header class="singUpInfo">
        <h2>{{ $t("registration.signUp") }}</h2>
        <p>{{ $t("registration.infoSignUp") }}</p>
      </header>

      <base-button link to="/registration" type="signInOutline">{{
        $t("registration.signUp")
      }}</base-button>
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
      loginInput: "",
      error: false,
    };
  },
  methods: {
    async formSubmit(value) {
      try {
        await this.$store.dispatch("login", value);
        const redirectUrl = "/" + (this.$route.query.redirect || "home");
        this.$router.push(redirectUrl);
      } catch {
        this.error = true;
      }
    },
    validateEmail(value) {
      // if the field is empty
      this.error = false;
      if (!value) {
        return this.$t(`validation.required`);
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return this.$t(`validation.email`);
      }
      // All is good
      return true;
    },
    validateLogin(value) {
      // if the field is empty
      this.error = false;
      if (!value) {
        return this.$t(`validation.required`);
      }
      if (value.length < 6) {
        return this.$t(`validation.minChar`);
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
