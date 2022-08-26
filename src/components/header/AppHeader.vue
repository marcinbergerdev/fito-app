<template>
  <header class="header">
    <header-logo></header-logo>
    <nav class="navContainer">

      <ul class="navList">
        <li>
          <nav-menu></nav-menu>
        </li>
        <li>
          <header-language></header-language>
        </li>
      </ul>

      <ul class="registrationList">
        <li><product-user></product-user></li>
        <li><user-registration></user-registration></li>
      </ul>

      <header-hamburger></header-hamburger>
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
  width: 100%;
  padding: 1rem 1.5rem;
  background-color: var(--black);
}

.navContainer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: inherit;
}

.navList {
  display: none;
  @media (min-width: 768px) {
    display: flex;
    width: inherit;
    justify-content: space-between;
    align-items: center;
  }
}

.registrationList {
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
}
</style>