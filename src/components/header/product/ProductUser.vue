<template>
                        <!--Authentication Here  -->
  <a class="link" href="#" v-if="false">
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

</style>