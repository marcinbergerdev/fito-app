<template>
  <section class="registrationCard" :class="[color, view]">
    <slot></slot>
  </section>
</template>



<script>
export default {
  props: {
    color: {
      type: String,
      required: false,
    },
    view: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.registrationCard {
   display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: var(--dark);

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    width: #{"min(45%, 40rem)"};
    min-height: 30rem;
  }
}

.default {
  background-color: var(--dark);
  border-radius: 1.5rem 0 0 1.5rem;
}

.primary {
  background-color: var(--primary-orange);
  border-radius: 0 1.5rem 1.5rem 0;
}

.mobileHidden {
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
}

</style>