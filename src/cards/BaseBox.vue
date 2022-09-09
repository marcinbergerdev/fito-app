<template>
  <article class="boxContainer">
    <section class="formContainer" :class="size">
      <slot></slot>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.boxContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  min-height: 100%;
}

.formContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: #{"min(80%, 400px)"};
  background-color: var(--dark);
  border-radius: 2rem;
}

.calc {
  padding: 5rem 2rem 3rem 2rem;
}
.smallPadding {
  padding: 2rem;
}
.result {
  padding: 3rem;
  text-align: center;
}
</style>