<template>
  <ul class="menuList" :class="activeMenu">

    <!-- TUTAJ MUSISZ ZROBIĆ TAK ZE JAK PRZEKORCZY 768PX TO ZNIKA -->
    <li v-if="linkProductVisibility" class="link" :class="linkProduct">
      <Icon class="icon" icon="akar-icons:circle-plus" />
      Add product
    </li>

    <li>
      <a class="link" :class='linkMenu' href="#">Home</a>
    </li>

    <li>
      <a class="link" :class="linkMenu" href="#">BMI</a>
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
    linkProduct(){
      return { linkProduct: this.$store.getters.mobileMenuActiveStatus };
    },
    linkProductVisibility(){
      return this.$store.getters.mobileMenuActiveStatus;
    },
    linkMenu(){
      return { linkMenu: this.$store.getters.mobileMenuActiveStatus };
    }
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
  font-weight: 200;
  text-decoration: none;
  color: var(--white);
  transition: 0.1s ease-in-out;

  @media (min-width: 768px) {
    &:hover {
      color: var(--primary-orange);
    }
  }
}

.linkProduct {
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  font-weight: 400;
  padding-bottom: 5rem;

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
}

.activeMenu {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  justify-content: space-between;
  min-height: 30%;

  .link {
    margin-right: 0;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
