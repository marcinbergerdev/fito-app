<template>
  <section class="registrationCard" :class="[view, color, radius]">
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    view: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: false,
    },
    radius: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.registrationCard {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: var(--dark);

  @media (orientation: landscape) {
    padding: 4rem;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    width: #{"min(45%, 40rem)"};
  }
}

.mobileHidden {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  min-height: auto;
  background-color: transparent;

  @media (orientation: landscape) {
    display: none;
  }

  @media (min-width: 768px) {
    position: static;
    display: flex;
    gap: 3rem;
    background-color: var(--primary-orange);
    transform: none;
  }
}

.registrationCard,
.mobileHidden {
  @media (min-width: 768px) {
    min-height: 40rem;
  }
}

.default {
  background-color: var(--dark);
}

.primary {
  background-color: var(--primary-orange);
}

.singleCard {
  @media (min-width: 768px) {
    border-radius: 1.5rem;
  }
}

.logInRadius {
  @media (min-width: 768px) {
    border-radius: 1.5rem 0 0 1.5rem;
  }
}

.signUpRadius {
  @media (min-width: 768px) {
    border-radius: 0 1.5rem 1.5rem 0;
  }
}
</style>