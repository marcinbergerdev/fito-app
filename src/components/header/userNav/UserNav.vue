<template>
  <a class="link" href="#" v-if="authentication">
    <Icon class="icon" icon="ic:baseline-playlist-add" />
  </a>
</template>


<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
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