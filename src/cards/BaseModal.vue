<template>
  <teleport to="body">
    <div class="backDrop" v-if="show" @click="closeModal"></div>

    <transition name="dialog">
      <dialog open v-if="show">
        <header class="dialogHeader">
          <slot name="header">
            <h2 class="dialogHeader__text">
              {{ title }}
            </h2>
          </slot>
        </header>

        <section class="dialogDescription">
          <slot></slot>
        </section>

        <menu class="confirmBox">
          <slot name="action">
            <base-button mode="dialogConfirm" @click="closeModal">{{
              confirm
            }}</base-button>
          </slot>
        </menu>
      </dialog>
    </transition>
  </teleport>
</template>


<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    confirm: {
      type: String,
      required: false,
    },
  },
  emits: ["close"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>


<style lang="scss" scoped>
@keyframes modalScale {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}

.dialog-enter-active {
  animation: 0.3s modalScale ease-out;
}

.dialog-leave-active {
  animation: 0.3s modalScale alternate-reverse ease-in;
}

.backDrop {
  position: fixed;
  top: 0;
  z-index: 50;
  width: 100%;
  min-height: 100vh;
  background-color: var(--dark);
  opacity: 0.9;
}

dialog {
  position: fixed;
  top: 35vh;
  left: 10%;
  z-index: 100;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: #{"min(80%, 40rem)"};

  background-color: #646464;
  box-shadow: 0 2px 8px rgba(255, 255, 255, 0.26);
  border-radius: 1.5rem;
  border: 0;
  overflow: hidden;

  @media (min-width: 768px) {
    left: calc(50% - 20rem);
  }
}

.dialogHeader,
.dialogDescription {
  width: 100%;
  color: var(--white);
}

.dialogHeader {
  padding: 2rem 1.5rem;
  background-color: var(--dark);
  border-radius: 1rem 1rem 0 0;
  &__text {
    font-size: 1.6rem;
    font-weight: 200;
  }
}

.dialogDescription {
  padding: 2.5rem 1.5rem 1rem 1.5rem;
  text-align: center;
  font-size: 2rem;
  font-weight: 200;
}

.confirmBox {
  align-self: flex-end;
}
</style>