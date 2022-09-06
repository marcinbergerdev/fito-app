<template>
  <article class="registrationContainer">
    <base-registration view="cardView">
      <form @submit.prevent="userLogin">
        <label>Log in</label>
        <div>
          <input type="text" placeholder="user name" />
          <input type="text" placeholder="password" />
        </div>
        <button>Log in</button>
      </form>
    </base-registration>

    <base-registration view="mobileHidden cardView">
      <header>
        <h2>Sign up</h2>
        <p>You don't have an account yet?</p>
      </header>
      <button>Sign up</button>
    </base-registration>
  </article>
</template>



<script>
export default {
};
</script>

<style lang="scss" scoped>
</style>