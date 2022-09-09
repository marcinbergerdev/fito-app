<template>
  <base-button link to="/home/product" mode="productListsIcon" v-if="authentication">
    <app-icon class="productListIcon" icon="ic:baseline-playlist-add" />
  </base-button>
</template>


<script>
export default {
  computed: {
    activeUser() {
      return { activeUser: this.$store.getters.mobileMenuActiveStatus };
    },
    authentication() {
      return this.$store.getters.authentication;
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