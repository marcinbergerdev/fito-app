<template>
  <article class="registrationContainer">
    <base-registration radius="singleCard">
      <base-button link to="/home" mode="backButton">
        <span class="backButton">
          <app-icon class="icon" icon="akar-icons:arrow-back" />
        </span>
      </base-button>

      <!-- Global Styles in App.vue -->
      <form @submit.prevent="userRegistration" class="formContainer">
        <label>Sign up</label>

        <div class="registerInputs">
          <input type="text" placeholder="user name" />
          <input type="text" placeholder="password" />
          <input type="text" placeholder="confirm password" />
        </div>

        <base-button mode="flat">Register</base-button>
      </form>
    </base-registration>
  </article>
</template>



<script>
export default {};
</script>
