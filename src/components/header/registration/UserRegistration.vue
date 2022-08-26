<template>
  <ul class='registrationList'>

    <li class='registrationList__link'>
      <base-button>Log in</base-button>
    </li>

    <li class='registrationList__link'>
      <base-button>Sign in</base-button>
    </li>

    <li class='registrationList__link'>
      <base-button>Sign out</base-button>
    </li>
  </ul>


</template>


<script>
export default {};
</script>

<style lang="scss" scoped>
.registrationList{
   display: flex;

   &__link{
      list-style: none;
      font-size: 2rem;
      color: red
   }
}
</style>