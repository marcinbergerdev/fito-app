<template>
  <article class="registrationContainer">
    <base-registration color="default">


      <base-button link to="/home" mode="backButton" type="hide">
        <span class="backButton">
          <app-icon class="icon" icon="akar-icons:arrow-back" />
        </span>
      </base-button>



      <form @submit.prevent="userLogin">
          <label>Log in</label>

          <div class="loginInputs">
            <input type="text" placeholder="user name" />
            <input type="text" placeholder="password" />
          </div>

          <base-button type="flat">Log in</base-button>
      </form>

    </base-registration>




    <base-registration view="mobileHidden" color="primary">
      <header>
        <h2>Sign up</h2>
        <p>You don't have an account yet?</p>
      </header>

      <base-button type="signInOutline">Sign up</base-button>
    </base-registration>



  </article>
</template>



<script>
export default {};
</script>

<style lang="scss" scoped>

</style>
