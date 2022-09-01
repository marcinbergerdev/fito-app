<template>
  <app-header></app-header>
  <home-page></home-page>

</template>

<script>
import AppHeader from './header/AppHeader.vue';
import HomePage from './main/home/HomePage.vue';

export default {
components: {
  AppHeader,
  HomePage
}
}
</script>

<style lang="scss" scoped>

</style>