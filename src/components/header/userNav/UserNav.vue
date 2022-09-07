<template>
  <a class="link" href="#" v-if="true">
    <app-icon class="icon" icon="ic:baseline-playlist-add" />
  </a>
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
.link {
  display: none;
  color: var(--white);
  transition: .1s ease-in-out;

  &:hover{
    color: var(--primary-orange);
  }
   @media (min-width: 768px) {
    display: block;
  }

}

.icon {
  width: 40px;
  height: 40px;
}

</style>