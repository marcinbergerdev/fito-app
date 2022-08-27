<template>
  <header class="header">
    <header-logo></header-logo>

    <nav class="navMenu">
      <nav-menu></nav-menu>

      <section class="registrationSection">
        <header-language></header-language>
        <product-user></product-user>
        <user-registration></user-registration>
        <header-hamburger></header-hamburger>
      </section>
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
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: var(--black);
}

.navMenu {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-left: 10rem;

  @media (min-width: 768px) {
    justify-content: space-between;
    align-items: center;
  }
}

.registrationSection {
  display: flex;
  align-items: center;
}
</style>