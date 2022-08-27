<template>
  <ul class="registrationList">

    <li class="registrationList__link">
      <base-button mode="empty">Log in</base-button>
    </li>

    <li class="registrationList__link">
      <base-button mode="flat">Sign in</base-button>
    </li>

    <li class="registrationList__link">
      <base-button hide mode="outline" color="primaryOrange">Sign out</base-button>
    </li>
  </ul>
</template>


<script>
export default {};
</script>

<style lang="scss" scoped>
.registrationList {
  display: none;

  @media (min-width: 768px) {
    display: flex;

    &__link {
      margin-left: 2rem;
      list-style: none;
      font-size: 2rem;
      color: red;
    }
  }
}
</style>