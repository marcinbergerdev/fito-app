<template>
  <ul class="menuList" :class="activeMenu">
    <li v-if="authentication" class="link addProduct" :class="linkProduct">
      <Icon class="icon" icon="akar-icons:circle-plus" />
      Add product
    </li>

    <li>
      <base-button to="/home" mode="empty" link :styles="linkStyle"
        >Home</base-button
      >
    </li>

    <li>
      <base-button to="/home/bmi" mode="empty" link :styles="linkStyle"
        >Bmi</base-button
      >
    </li>
  </ul>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  components: {
    Icon,
  },
  computed: {
    activeMenu() {
      return { activeMenu: this.$store.getters.mobileMenuActiveStatus };
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
  font-size: 2.5rem;
  font-weight: 400;
  padding-bottom: 4rem;

  .icon {
    font-size: 2rem;
    margin-right: 0.8rem;
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

.activeMenu {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  justify-content: space-around;
  min-height: 30%;

  .link {
    margin-right: 0;
    margin: 10px 0;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
