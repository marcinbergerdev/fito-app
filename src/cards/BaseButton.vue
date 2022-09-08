<template>
  <button v-if="!link" :class="[place, mode, type]">
    <slot></slot>
  </button>

  <router-link v-if="link" :to="to" :class="[place, mode, type]">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      required: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
    place: {
      type: String,
      required: false,
    },
    mode: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
a,
button {
  text-decoration: none;
  font-size: 1.6rem;
  background-color: transparent;
  color: var(--white);
  border: 0;
  transition: 0.1s ease-in-out;

  @media (min-width: 768px) {
    opacity: 0.8;
    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  }
}

.homePageButton {
  display: block;
  margin: 0 auto;
  width: #{"min(100%, 17rem)"};
  padding: 0.6rem 0;

  @media (min-width: 768px) {
    transition: 0.2s ease-in-out;
    &:hover {
      border: 2px solid var(--primary-orange);
    }
  }
}

// Menu Navigation Mobile/Des
.navMenuOption {
  display: block;
  padding: 0.6rem 0;
  width: 9rem;
  text-align: center;
  border: 1px solid var(--primary-orange);
  &:hover,
  &.router-link-exact-active {
    opacity: 1;
    color: var(--primary-orange);
  }

  @media (min-width: 768px) {
    width: auto;
    border: 0;
    &:hover {
      color: var(--primary-orange);
    }
  }
}

// Registration Buttons Mobile/Desktop
.logInBtn,
.signInBtn,
.signOutBtn {
  color: var(--primary-orange);

  @media (min-width: 768px) {
    padding: 0.6rem 1rem;
    color: var(--white);
  }
}
.signInBtn {
  @media (min-width: 768px) {
    background-color: var(--primary-orange);
    border-radius: 0.4rem;
  }
}
.signOutBtn {
  @media (min-width: 768px) {
    color: var(--primary-orange);
    border: 1px solid var(--primary-orange);
  }
}

// Back Button
.backButton {
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 0.7rem 0.2rem 0.7rem;
  border-radius: 5rem;
  color: var(--primary-orange);
  border: 1px solid var(--primary-orange);
}

.bmiButton {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

.flat,
.signInOutline {
  border-radius: 5rem;
  padding: 0.8rem 2.7rem;
}
.flat {
  background-color: var(--primary-orange);
}
.signInOutline {
  background-color: transparent;
  border: 1px solid var(--primary-orange);
  color: var(--primary-orange);

  @media (min-width: 768px) {
    border: 1px solid var(--dark);
    color: var(--dark);
  }
}

.outline {
  border: 2px solid var(--primary-orange);
}
</style>