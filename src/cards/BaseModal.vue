<template>
  <teleport to="body">
    <div class="backDrop" v-if="show" @click="test1"></div>

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
            <base-button mode="dialogConfirm" @click="test1">{{
              confirm
            }}</base-button>
          </slot>
        </menu>
      </dialog>
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
      required: true,
    },
    confirm: {
      type: String,
      required: true,
    },
  },
  emits: ["close"],
  methods: {
    test1() {
      this.$emit("close");
    },
  },
};
</script>


<style lang="scss" scoped>
// @keyframes modalScale {
//   0% {
//     transform: scale(0.5);
//   }
//   100% {
//     transform: scale(1);
//   }
// }

// .dialog-enter-from,
// .dialog-leave-to {
//   opacity: 0;
//   transform: scale(0.8);
//     transform: translate(-50%, -50%);
// }

// .dialog-enter-active {
//   transition: all 0.3s ease-out;
// }

// .dialog-leave-active {
//   transition: all 0.3s ease-in;
// }

// .dialog-enter-to,
// .dialog-leave-from {
//   opacity: 1;
//   transform: scale(1);
// }

.backDrop,
dialog {
  position: absolute;
}

.backDrop {
  top: 0;
  width: 100%;
  min-height: 100vh;
  background-color: var(--dark);
  opacity: 0.9;
}

dialog {
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: #{"min(80%, 40rem)"};
  background-color: #646464;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(255, 255, 255, 0.26);
  border-radius: 1.5rem;
  border: 0;
}

.dialogHeader {
  padding: 2rem 1.5rem;
  width: 100%;
  background-color: var(--dark);
  color: var(--white);
  border-radius: 1rem 1rem 0 0;
  &__text {
    font-size: 1.6rem;
    font-weight: 200;
  }
}

.dialogDescription {
  padding: 2rem 1.5rem;
  font-size: 2rem;
  font-weight: 200;
  color: var(--white);
}

.confirmBox {
  align-self: flex-end;
}
</style>