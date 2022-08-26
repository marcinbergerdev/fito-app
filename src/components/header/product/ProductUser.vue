<template>
   <a class='link' href="#">
      <Icon class='icon' icon="ic:baseline-playlist-add" />
   </a>
</template>


<script>
import { Icon } from '@iconify/vue';

export default {
   components: {
      Icon
   }

}
</script>

<style lang="scss" scoped>

.link{
   color: var(--white);
}

.icon{
   width: 40px;
   height: 40px;
}

</style>