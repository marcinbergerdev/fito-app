<template>
  <app-header></app-header>

  <main class="contentContainer" :class="menuActive">
    <router-view></router-view>
  </main>
</template>

<script>
import AppHeader from "./components/header/AppHeader.vue";
export default {
  components: {
    AppHeader,
  },
  computed: {
    menuActive() {
      return { menuActive: this.$store.getters.mobileMenuActiveStatus };
    },
  },
  methods: {
    userWidth() {
      const currentWidth = window.innerWidth;
      let active = false;

      if (active) return;
      if (currentWidth >= 768) {
        active = true;
        this.$store.dispatch("toggleHamburger", true);
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.userWidth);
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

  --primary-orange: #b07f1a;
}

body {
  overflow-y: hidden;
}

.contentContainer {
  width: 100%;
  min-height: 100vh;
  background-image: url("./assets/mobileBackground.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  overflow: auto;

  @media (min-width: 768px) {
    background-image: url("./assets/background.jpg");
  }
}

.menuActive {
  position: relative;
  z-index: -1;

  filter: blur(3px);
}
</style>
