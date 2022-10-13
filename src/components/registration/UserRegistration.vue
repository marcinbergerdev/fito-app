<template>
  <base-modal
    :show="successModal"
    :title="modalTitle"
    confirm="Okay"
    @close="closeModal"
  >
    <p>{{ modalDescription }}</p>
  </base-modal>

  <base-modal :show="isLoading" title="Loading..." confirm="Okay">
    <base-spinner></base-spinner>
  </base-modal>

  <article class="registrationContainer">
    <base-registration radius="singleCard">
      <base-button link to="/home" mode="backButton">
        <span class="backButton">
          <app-icon class="icon" icon="akar-icons:arrow-back" />
        </span>
      </base-button>

      <!-- Global Styles in App.vue -->
      <Form @submit="formSubmit" class="formBox">
        <h2 class="formBox__header">{{ $t("registration.signUp") }}</h2>

        <div class="registerInputs inputColors">
          <Field
            name="email"
            type="email"
            :rules="validateEmail"
            placeholder="admin@admin.com"
          />
          <ErrorMessage class="errorMessageRegistration" name="email" />

          <Field
            name="password"
            type="password"
            :rules="validateRegistration"
            v-model="inputPassword"
            placeholder="qwerty"
          />
          <ErrorMessage class="errorMessageRegistration" name="password" />

          <Field
            name="confirmPassword"
            type="password"
            :rules="[validateRegistration, samePassword]"
            placeholder="qwerty"
          />
          <ErrorMessage
            class="errorMessageRegistration"
            name="confirmPassword"
          />
        </div>

        <base-button mode="flat">{{ $t("registration.register") }}</base-button>
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
      successModal: false,
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async formSubmit(value) {
      this.isLoading = true;

      try {
        await this.$store.dispatch("registration", value);
      } catch (error) {
        this.error = error || "Something goes wrong, try again.";
      }

      this.isLoading = false;
      this.successModal = true;
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
    closeModal() {
      if (!this.error) {
        this.$router.replace("/home");
      }
      this.error = null;
      this.successModal = false;
    },
  },
  computed: {
    modalTitle() {
      return this.error ? "Error!" : "Success!";
    },
    modalDescription() {
      return this.error ? this.error : "Account has been created";
    },
  },
};
</script>
