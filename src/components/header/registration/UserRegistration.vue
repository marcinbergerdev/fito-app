<template>
  <ul class="registrationList" :class="activeRegistration">
    <li class="registrationList__link" v-if="!authentication">
      <base-button link to="/login" mode="logInBtn">Log in</base-button>
    </li>

    <li class="registrationList__link" v-if="!authentication">
      <base-button link to="/registration" mode="signInBtn"
        >Sign in</base-button
      >
    </li>

    <li class="registrationList__link" v-if="authentication">
      <base-button link to="/home" mode="signOutBtn">Sign out</base-button>
    </li>
  </ul>
</template>


<script>
export default {
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
    authentication() {
      return this.$store.getters.authentication;
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
    margin-left: 2rem;

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