<template>
  <a class="link" href="#" :class="activeUser">
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
  },
};
</script>

<style lang="scss" scoped>
.link {
  color: var(--white);
}

.icon {
  width: 40px;
  height: 40px;
}

.activeUser {
  display: none;
}
</style>