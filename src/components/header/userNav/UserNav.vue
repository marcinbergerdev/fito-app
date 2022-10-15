<template>
  <base-button
    link
    to="/home/myProduct"
    mode="productListsIcon"
    v-if="isLoggedIn"
  >
    <app-icon class="productListIcon" icon="ic:baseline-playlist-add" />
  </base-button>
</template>

<script>
export default {
  computed: {
    activeUser() {
      return { activeUser: this.$store.getters.mobileMenuActiveStatus };
    },
    isLoggedIn() {
      return this.$store.getters.userId && this.$store.getters.token;
    },
  },
};
</script>

<style lang="scss" scoped>
.productListIcon {
  width: 4rem;
  height: 4rem;
}
</style>