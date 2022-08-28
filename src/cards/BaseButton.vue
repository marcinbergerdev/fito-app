<template>
  <button v-if="!hide" :class="[mode, color]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: false,
    },
    hide: {
      type: [Boolean, String],
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  font-size: 1.6rem;
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: var(--white);
  border: 0;
  transition: 0.1s ease-in-out;

  @media (min-width: 768px) {
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
}

.outline {
  border: 2px solid var(--primary-orange);
  opacity: 0.7;
}

.flat {
  background-color: var(--primary-orange);
  border-radius: 4px;
  opacity: 0.8;
}

.empty {
  @media (min-width: 768px) {
    &:hover {
      color: var(--primary-orange);
    }
  }
}
</style>
