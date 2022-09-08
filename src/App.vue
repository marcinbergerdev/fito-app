<template>
  <div class="appContainer" >
    <router-view></router-view>
  </div>
</template>


<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700&display=swap");

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 62.5%;
  font-family: "Inter", sans-serif;
}

:root {
  --white: #fff;
  --black: #000;

  --dark: #0c0c0c;
  --dark-light: #181716;

  --gray: #232323;
  --gray-light: #6e6e6e;

  --primary-orange: #c94d05;
}

.appContainer {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("./assets/mobileBackground.jpg"), center, no-repeat;
  background-size: 100% 100%;

  @media (min-width: 768px) {
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url("./assets/background.jpg"), center, no-repeat;
    background-size: 100% 100%;
    /* do poprawy */
  }
}

//Log in - Sign in Container Global Styles
.registrationContainer{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

// Global button back
.icon {
  width: 2rem;
  height: 2rem;
}

// Global Styles For Registration LogIn/SignIn
.formContainer,
.registerInputs{
  display: flex;
  flex-direction: column;
  width: 80%;
}

.formContainer {
  justify-content: space-evenly;
  align-items: center;
  min-height: 50vh;
  gap: 3rem;

  label {
    font-size: 2.7rem;
    color: var(--white);
    gap: 5rem;
  }

  @media (min-width: 768px) {
    min-height: 100%;
  }
}

.registerInputs {
  gap: 1rem;
  input {
    padding: 1rem;
    font-size: 1.5rem;
    background-color: #c94d051c;
    border: 1px solid var(--primary-orange);
    outline: none;
    color: var(--white);
  }
}

</style>