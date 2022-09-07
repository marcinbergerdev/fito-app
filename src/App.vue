<template>
  <div class="content" >
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

  --primary-orange: #ff5e00;
}

.content {
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  min-height: 100vh;
}




// Global button back
.icon {
  width: 2rem;
  height: 2rem;
}

// .backButton {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 2px 0;
//   border-radius: 5rem;
//   color: var(--primary-orange);
//   border: 1px solid var(--primary-orange);
// }
</style>