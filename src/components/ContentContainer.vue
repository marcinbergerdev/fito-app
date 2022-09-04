<template>
  <app-header></app-header>

  <main class="mainContainer">
    <router-view v-slot="route">
      <transition name="fade" mode="out-in">
        <component :is="route.Component"></component>
      </transition>
    </router-view>
  </main>
</template>

<script>
import AppHeader from "./header/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      bmiStyleActive: false,
    };
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
    elementsCentering(link) {
      if (link) this.$store.dispatch("toggleHamburger", true);
      link === "/home/bmi" || link === "/home/result"
        ? (this.bmiStyleActive = true)
        : (this.bmiStyleActive = false);
    },
  },
  computed: {
    menuActive() {
      return { menuActive: this.$store.getters.mobileMenuActiveStatus };
    },
    placementElement() {
      return this.bmiStyleActive ? "bmiCenter" : "mainContainer";
    },
  },
  watch: {
    $route(route) {
      const link = route.path;
      this.elementsCentering(link);
    },
  },
  mounted() {
    const link = this.$route.path;
    this.elementsCentering(link);
    window.addEventListener("resize", this.userWidth);
  },
};
</script>

<style lang="scss" scoped>
@keyframes nextPage {
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
}
.fade-enter-active {
  animation: 0.25s nextPage;
}
.fade-leave-active {
  animation: 0.25s nextPage alternate-reverse;
}

.mainContainer {
  height: calc(100vh - 5.5rem);
  overflow: auto;
  overflow-x: hidden;

  color: var(--white);

  @media (min-width: 768px) {
  }
}
</style>