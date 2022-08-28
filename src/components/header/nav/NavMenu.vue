<template>
  <ul class="menuList" :class="activeMenu">
    <li>
      <a class="link" href="#">Home</a>
    </li>

    <li>
      <a class="link" href="#">BMI</a>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    activeMenu() {
      return { activeMenu: this.$store.getters.mobileMenuActiveStatus };
    },
  },
};
</script>

<style lang="scss" scoped>
.menuList {
  li {
    list-style: none;
  }
  display: none;

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
.activeMenu {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .link{
    margin-right: 0;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
