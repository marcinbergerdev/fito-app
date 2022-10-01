<template>
  <button v-if="!link" :class="[place, mode, type]">
    <slot></slot>
  </button>

  <router-link v-else :to="to" :class="[place, mode, type]">
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 0.7rem 0.2rem 0.7rem;
  border-radius: 5rem;
  color: var(--primary-orange);
  border: 1px solid var(--primary-orange);
}

.bmiButton,
.addProduct {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.productListsIcon {
  display: none;
  color: var(--white);
  transition: 0.1s ease-in-out;

  &.router-link-exact-active {
    color: var(--primary-orange);
  }

  &:hover {
    color: var(--primary-orange);
  }
  @media (min-width: 768px) {
    display: block;
    padding-top: 0.3rem;
  }
}

@keyframes borderAnimate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.iconBorder {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 1rem;
  background-color: var(--dark);

  &::before,
  &::after {
    content: "";
    position: absolute;
  }

  &::before {
    width: 40%;
    height: 150%;
    background-color: var(--primary-orange);
    animation: borderAnimate 7s linear infinite;
  }

  &::after {
    width: 95%;
    height: 95%;
    background-color: var(--dark);
  }

  &:hover {
    cursor: pointer;
    &::before {
      width: 100%;
      height: 100%;
      animation: none;
      transition: 0.3s ease-in-out;
    }
  }
}

.addProductLink {
  display: flex;
  align-items: center;
  font-weight: 400;
  margin-bottom: 4rem;
  font-size: 1.5rem;

  &.router-link-exact-active {
    color: var(--primary-orange);
  }

  @media (min-width: 365px) {
    font-size: 2.5rem;
  }

  @media (min-width: 768px) {
    display: none;
  }
}

.dialogConfirm {
  margin: 0 1rem 0.8rem 0;
  padding: 1.2rem 1rem;
  font-size: 1.4rem;
  background-color: var(--dark);
  border-radius: 5rem;

  @media (min-width: 768px) {
    padding: 0.8rem 1.2rem;
  }
}

.myListOutline {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1.2rem 1rem;
  font-size: 1.4rem;
  border: 1px solid var(--white);

  //use global keyframes

  @media (min-width: 768px) {
    padding: 0.5rem 1rem;
  }
}

.addProductBtnPosition {
  position: absolute;
  bottom: -6rem;
  left: 0;
  width: 100%;

  @media (min-width: 768px) {
    position: static;
    width: auto;
    padding: 0 3rem;
  }
}

.myListHidden {
  @media (min-width: 768px) {
    display: none;
  }
}

.addImg{
  width: 12rem;
  text-align: center;
  align-self: center;
}


.deleteCard{
  position: absolute;
  top: 0.5rem;
  right: 1rem;
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