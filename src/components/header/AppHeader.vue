<template>
  <header class="header" :class="headerActivity">
    <header-logo></header-logo>

    <nav class="navMenu" :class="navMenuActive">
      <nav-menu></nav-menu>

      <article class="registrationSection">
        <header-language></header-language>
        <product-user></product-user>
        <user-registration></user-registration>
        <header-hamburger></header-hamburger>
      </article>
    </nav>
  </header>
</template>


<script>
import HeaderLogo from "./logo/HeaderLogo.vue";
import NavMenu from "./nav/NavMenu.vue";
import HeaderLanguage from "./language/HeaderLanguage.vue";
import ProductUser from "./product/ProductUser.vue";
import UserRegistration from "./registration/UserRegistration.vue";
import HeaderHamburger from "./hamburger/HeaderHamburger.vue";

export default {
  components: {
    HeaderLogo,
    NavMenu,
    HeaderLanguage,
    ProductUser,
    UserRegistration,
    HeaderHamburger,
  },
  computed: {
    headerActivity() {
      return { headerActive: this.$store.getters.mobileMenuActiveStatus };
    },
    navMenuActive() {
      return { navMenuActive: this.$store.getters.mobileMenuActiveStatus };
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes menuDropDown {
  from {
    min-height: 20rem;
  }
  to {
    min-height: 100vh;
  }
}

.header {
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  height: 5.5rem;
  background-color: var(--black);
}

.navMenu {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-left: 1rem;

  @media (min-width: 768px) {
    margin-left: 10rem;
    justify-content: space-between;
    align-items: center;
  }
}

.registrationSection {
  display: flex;
  align-items: center;
}

.headerActive {
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: flex-start;
  padding: 1.9rem 1.5rem;
  width: 100%;
  animation: menuDropDown;
  animation: menuDropDown 0.4s ease-in-out;
  animation-fill-mode: forwards;
  opacity: 0.8;
}
.navMenuActive {
  margin-left: 0;
}
</style>