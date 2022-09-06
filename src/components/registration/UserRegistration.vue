<template>
  <article class='registrationContainer'>
     <form @submit.prevent="userRegistration">
        <label>Log in</label>
        <div>
          <input type="text" placeholder="user name" />
          <input type="text" placeholder="password" />
          <input type="text" placeholder="confirm password" />
        </div>
        <button>Register</button>
      </form>



  </article>
</template>



<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>