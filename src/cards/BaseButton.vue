<template>
  <button v-if="!link" :class="[mode, color, size]">
    <slot></slot>
  </button>

  <router-link v-if="link" :to="to" :class="[mode, color, size, styles]">
    <slot></slot>
  </router-link>
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
    styles: {
      type: String,
      required: false,
    },
    size: {
      type: String,
      required: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
    link: {
      type: Boolean,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
a{
  display: block;
  margin: 0 auto;
  text-decoration: none;
  text-align: center;
}

button,a{
  padding: 0.8rem 0;
  width: 9rem;
  font-size: 1.6rem;
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

.linkDesctop {
  font-size: 1.6rem;
  text-decoration: none;
  color: var(--white);

  @media (min-width: 768px) {
    &:hover,&.router-link-exact-active {
      color: var(--primary-orange);
    }
  }
}

.linkMobile {
  display: block;
  padding: 0.5rem;
  width: 10rem;
  text-align: center;
  border: 2px solid var(--primary-orange);

  &.router-link-exact-active{
    color: var(--primary-orange);
  }
}

.empty {
  @media (min-width: 768px) {
    &:hover {
      color: var(--primary-orange);
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

.larger {
  width: 13rem;
}
.textColor {
  color: var(--primary-orange);
}

.back{
  align-self: flex-end;
  margin: 0;
  width: #{"min(100%, 40px)"};
}

.calc{
  align-self: center;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  width: 80%;
  border-radius: 2rem;
}
</style>
