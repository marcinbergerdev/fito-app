<template>
  <article class="registrationContainer">


    <base-registration radius="logInRadius">
      <base-button link to="/home" mode="backButton">
        <span class="backButton">
          <app-icon class="icon" icon="akar-icons:arrow-back" />
        </span>
      </base-button>

      <!-- Global Styles in App.vue -->
      <form @submit.prevent="userLogin" class="formBox">
        <h2 class='formBox__header'>Log in</h2>

        <div class="registerInputs">
          <input type="text" placeholder="user name" />
          <input type="text" placeholder="password" />
        </div>

        <base-button type="flat">Log in</base-button>
      </form>
    </base-registration>

    <base-registration view="mobileHidden" radius="signUpRadius">
      <header class="singUpInfo">
        <h2>Sign up</h2>
        <p>You don't have an account yet?</p>
      </header>

      <base-button link to="/registration" type="signInOutline">Sign up</base-button>
    </base-registration>
  </article>
</template>



<script>
export default {};
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
