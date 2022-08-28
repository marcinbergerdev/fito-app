<template>
  <ul class="registrationList" :class="activeRegistration">
    <li class="registrationList__link">
      <base-button mode="empty">Log in</base-button>
    </li>

    <li class="registrationList__link">
      <base-button mode="flat">Sign in</base-button>
    </li>

    <li class="registrationList__link">
      <base-button hide mode="outline">Sign out</base-button>
    </li>
  </ul>
</template>


<script>
export default {
  computed: {
    activeRegistration() {
      return { activeRegistration: this.$store.getters.mobileMenuActiveStatus };
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
      color: red;
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
}
</style>