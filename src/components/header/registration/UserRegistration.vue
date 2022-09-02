<template>
  <ul class="registrationList" :class="activeRegistration">


    <li class="registrationList__link" v-if="true">
      <base-button :mode="logIn" link>Log in</base-button>
    </li>

    <li class="registrationList__link" v-if="true">
      <base-button :mode="signIn" link>Sign in</base-button>
    </li>

    <li class="registrationList__link" v-if="false">
      <base-button :mode="signOut" link>Sign out</base-button>
    </li>
  </ul>
</template>


<script>
export default {
  computed: {
    activeRegistration() {
      return { activeRegistration: this.$store.getters.mobileMenuActiveStatus };
    },
    logIn(){
      return this.$store.getters.mobileMenuActiveStatus ? 'textColor' : 'empty'
    },
    signIn(){
      return this.$store.getters.mobileMenuActiveStatus ? 'textColor' : 'flat'
    },
    signOut(){
      return this.$store.getters.mobileMenuActiveStatus ? 'textColor' : 'outline'
    }
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

.activeRegistration{
 position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -90%);

  display: flex;
  align-items: center;

  li{
    margin: 0 10px;
  }
}
</style>