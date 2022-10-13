<template>
  <div class="appContainer">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created() {
    let lang = localStorage.getItem('lang');
    if(!lang) localStorage.setItem('lang', 'EN');
    lang = localStorage.getItem('lang')
    this.$i18n.locale = lang;
    this.$store.dispatch("tryLogin");
  },
};
</script>


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

  --primary-border: #ce4d02a6;
  --primary-borderFocus: #e95e0e;
  --primary-borderBg: #c94d051c;
}

.appContainer {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("./assets/mobileBackground.jpg"), center, no-repeat;
  background-size: 100% 100%;

  @media (min-width: 768px) {
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url("./assets/background.jpg"),center,no-repeat;
    background-size: 100% 100%;
  }
}

//Log in - Sign in Container Global Styles
.registrationContainer {
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
.formBox,
.registerInputs {
  display: flex;
  flex-direction: column;
  width: 80%;
}
.formBox {
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  min-height: 50vh;
  gap: 3rem;

  &__header {
    font-size: 2.7rem;
    font-weight: 200;
    color: var(--white);
    gap: 5rem;
  }

  @media (min-width: 768px) {
    width: 100%;
    min-height: 100%;
  }
}

.registerInputs {
  gap: 1rem;
  input {
    padding: 1rem;
    font-size: 1.5rem;
  }
}

.inputColors {
  input {
    color: var(--white);
    background-color: var(--primary-borderBg);
    border: 1px solid var(--primary-border);
    outline: none;
    &:focus {
      border: 1px solid var(--primary-borderFocus);
    }
  }
}

.formContainer,
.productCard {
  position: relative;
  z-index: 0;
  background-color: var(--dark);

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: var(--bgImage);
  }
}

.errorMessageRegistration {
  font-size: 1.3rem;
  color: var(--primary-orange);
}

.errorMessageValidation {
  font-size: 1.4rem;
  color: rgb(226, 10, 10);
}
</style>