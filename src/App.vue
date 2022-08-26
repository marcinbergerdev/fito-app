<template>
  <app-header></app-header>

</template>

<script>
import AppHeader from './components/header/AppHeader.vue';
export default {
  components: {
    AppHeader
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles&family=Indie+Flower&family=Inter:wght@400;700&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 62.5%;
  font-family: 'Inter', sans-serif;
}

:root{
  --white: #fff;
  --black: #000;


  --dark: #0C0C0C;
  --dark-light: #181716;

  --gray: #232323;
  --gray-light: #6E6E6E;

  --primary-orange: #B07F1A;
}




</style>
