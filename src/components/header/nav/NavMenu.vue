<template>
  <ul class="menuList" :class="menuListMobile">
    <li v-if="true" class="link addProduct" :class="linkProduct">
      <app-icon class="icon" icon="akar-icons:circle-plus" />
      Add product
    </li>

    <li>
      <base-button link to="/home" mode="navMenuOption">Home</base-button>
    </li>

    <li>
      <base-button link to="/home/bmi" mode="navMenuOption">BMI</base-button>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    menuListMobile() {
      return { menuListMobile: this.$store.getters.mobileMenuActiveStatus };
    },
    linkProduct() {
      return { linkProduct: this.$store.getters.mobileMenuActiveStatus };
    },
    linkStyle() {
      return this.$store.getters.mobileMenuActiveStatus
        ? "linkMobile"
        : "linkDesctop";
    },
    authentication() {
      return this.$store.getters.authentication;
    },
  },
};
</script>

<style lang="scss" scoped>
.menuList {
  display: none;
  li {
    list-style: none;
    margin: 2rem 0;
    @media (min-width: 768px) {
      margin-left: 4rem;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
}

.link {
  margin-right: 5rem;
  font-size: 1.6rem;
  text-decoration: none;
  color: var(--white);

  @media (min-width: 768px) {
    &:hover,
    &.router-link-exact-active {
      color: var(--primary-orange);
    }
  }
}

.addProduct {
  @media (min-width: 768px) {
    display: none;
  }
}

.linkProduct {
  display: flex;
  align-items: center;
  font-size: 1.7rem;
  font-weight: 400;
  padding-bottom: 4rem;

  .icon {
    font-size: 2rem;
    margin-right: 0.8rem;
  }

  @media (min-width: 355px) {
    font-size: 2.5rem;
    .icon {
      font-size: 2rem;
    }
  }
}

.linkMenu {
  display: block;
  padding: 0.5rem;
  width: 10rem;
  text-align: center;
  border: 2px solid var(--primary-orange);

  &.router-link-exact-active {
    color: var(--primary-orange);
  }
}

.menuListMobile {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 30%;

  .link {
    margin-right: 0;
    margin: 10px 0;
  }
}
</style>
