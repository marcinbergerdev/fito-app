<template>
  <base-modal
    :show="successModal"
    :title="modalTitle"
    :confirm="$t('ok')"
    @close="closeModal"
  >
    <p>{{ modalDescription }}</p>
  </base-modal>

  <base-modal
    :show="isLoading"
    :title="$t('modal.loading')"
    :confirm="$t('ok')"
  >
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

        <base-button mode="flat">{{
          $t("registration.registerBtn")
        }}</base-button>
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
  computed: {
    modalTitle() {
      return this.error ? this.$t(`modal.error`) : this.$t(`modal.success`);
    },
    modalDescription() {
      return this.error ? this.error : this.$t(`modal.created`);
    },
    registrationApi() {
      return this.$store.getters.registrationApi;
    },
  },
  methods: {
    async formSubmit(value) {
      this.isLoading = true;

      try {
        await this.$store.dispatch("register", {
          data: value,
          apiLink: this.registrationApi,
        });
      } catch (error) {
        this.error = error || this.$t("modal.wrong");
      }

      this.isLoading = false;
      this.successModal = true;
    },

    validateEmail(value) {
      // if the field is empty
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
    validateRegistration(value) {
      // if the field is empty
      if (!value) {
        return this.$t(`validation.required`);
      }
      if (value.length < 6) {
        return this.$t(`validation.minChar`);
      }
      // All is good
      return true;
    },
    samePassword(value) {
      // if password is different
      if (value !== this.inputPassword) {
        return this.$t(`validation.password`);
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
};
</script>
