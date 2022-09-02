<template>
  <app-header></app-header>
  <main :class="[placementElement,menuActive]">
    <router-view></router-view>
  </main>
</template>

<script>
import AppHeader from "./header/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
  data(){
    return {
      bmiStyleActive: false
    }
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
   computed: {
    menuActive() {
      return { menuActive: this.$store.getters.mobileMenuActiveStatus };
    },
    placementElement() {
    return {mainContainer: !this.bmiStyleActive, bmiCenter: this.bmiStyleActive}
    },
  },
  watch: {
    $route(rout){
      const link = rout.path;
      if(link === '/home/bmi'){
        this.bmiStyleActive = true;
      }else {
        this.bmiStyleActive = false;
      }
    }
  },
  mounted() {
    window.addEventListener("resize", this.userWidth);
  },
};
</script>

<style lang="scss" scoped>

.mainContainer,.bmiCenter{
  display: flex;
  height: calc(100vh - 5.5rem);
  overflow: auto;

    color: var(--white);
    padding: 3rem;
  @media (min-width: 768px) {
  }

}



.mainContainer {
  flex-direction: column;
  justify-content: space-between;

}

.bmiCenter{
  justify-content: center;
  align-items: center;
}
</style>