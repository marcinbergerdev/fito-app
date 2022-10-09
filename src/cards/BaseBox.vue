<template>
  <article class="boxContainer">
    <section class="formContainer" :class="size" :style="setImgBackground">
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
    imgLink: {
      type: String,
      required: false,
    },
  },
  computed: {
    setImgBackground() {
      if (!this.imgLink) return;
      return { "--bgImage": `url('${this.imgLink}')` };
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: #{"min(80%, 400px)"};
  background-color: var(--dark);
  border-radius: 2rem;

  &::before {
    background-image: var(--bgImage);
    opacity: 0.1;
    border-radius: 2rem;
  }
}

.calc {
  padding: 5rem 2rem 3rem 2rem;
}
.smallPadding {
  padding: 3rem 2rem;
}
.result {
  padding: 3rem;
  text-align: center;
}
</style>