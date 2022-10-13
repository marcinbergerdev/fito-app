<template>
  <ul class="registrationList" :class="activeRegistration">
    <li class="registrationList__link" v-if="!isLoggedIn">
      <base-button link to="/login" mode="logInBtn">{{
        $t("registration.logIn")
      }}</base-button>
    </li>

    <li class="registrationList__link" v-if="!isLoggedIn">
      <base-button link to="/registration" mode="signInBtn">{{
        $t("registration.signUp")
      }}</base-button>
    </li>

    <li class="registrationList__link" v-if="isLoggedIn">
      <base-button mode="signOutBtn" @click="logout">{{
        $t("registration.signOut")
      }}</base-button>
    </li>
  </ul>
</template>


<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$store.dispatch("clearProductList");
    },
  },
  computed: {
    activeRegistration() {
      return { activeRegistration: this.$store.getters.mobileMenuActiveStatus };
    },
    logIn() {
      return this.$store.getters.mobileMenuActiveStatus ? "textColor" : "empty";
    },
    signIn() {
      return this.$store.getters.mobileMenuActiveStatus ? "textColor" : "flat";
    },
    signOut() {
      return this.$store.getters.mobileMenuActiveStatus
        ? "textColor"
        : "outline";
    },

    isLoggedIn() {
      return this.$store.getters.userId && this.$store.getters.isAuthenticated;
    },
  },
};
</script>

<style lang="scss" scoped>
.registrationList {
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;

    &__link {
      margin-left: 2rem;
      list-style: none;
      font-size: 2rem;
    }
  }
}

.activeRegistration {
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -90%);

  display: flex;
  align-items: center;
  gap: 2rem;

  @media (min-width: 280px) {
    gap: 4rem;
  }
}
</style>