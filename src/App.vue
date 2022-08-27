<template>
  <app-header></app-header>
  <router-view></router-view>
</template>

<script>
import AppHeader from "./components/header/AppHeader.vue";
export default {
  components: {
    AppHeader,
  },
};
</script>

<style>
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

  --primary-orange: #b07f1a;
}
</style>
