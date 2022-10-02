<template>
  <section class="uploadContainer">
    <base-button mode="backButton" @click="$emit('closeSelection')">
      <span class="backButton">
        <app-icon class="icon" icon="akar-icons:arrow-back" />
      </span>
    </base-button>

    <teleport to="body">
      <div class="addedModalBackDrop" v-if="selectedLink"></div>

      <dialog open class="addedModal" v-if="selectedLink">
        <app-icon class="addedModal__checked" icon="ps:checked" />
        <base-button mode="flat" @click="confirmLink">Ok</base-button>
      </dialog>
    </teleport>

    <p class="errorSrc" v-if="errorActivity">please complete!</p>

    <div class="loadLink">
      <label for="link">Image Url</label>
      <input type="text" name="link" id="link" v-model="srcImg.text" />
    </div>
    <base-button mode="addImg" type="flat" @click="confirmImgSrc"
      >Confirm</base-button
    >
  </section>
</template>


<script>
export default {
  emits: ["setImgSrc", "closeAll", "closeSelection"],
  data() {
    return {
      srcImg: {
        text: "",
        file: "",
      },
      errorActivity: false,
      selectedLink: false,
    };
  },
  methods: {
    confirmImgSrc() {
      if (this.srcImg.text || this.srcImg.file) {
        this.errorActivity = false;
        this.selectedLink = true;
        return;
      }
      this.errorActivity = true;
    },
    confirmLink() {
      this.selectedLink = false;
      this.$emit("setImgSrc", this.srcImg);
      this.$emit("closeAll");
    },
  },
  watch: {
    srcImg: {
      handler(src) {
        const text = src.text;
        const file = src.file;
        if (text || file) this.errorActivity = false;
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.uploadContainer {
  position: absolute;
  z-index: 50;
  top: 4%;
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
  width: 110%;
  padding: 6.5rem 2.5rem 3rem 2.5rem;
  background-color: var(--dark);
  border-radius: 1.5rem;
  border: 1px solid var(--primary-orange);
}

.addedModalBackDrop {
  position: absolute;
  top: 0;
  z-index: 90;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.39);
}
.addedModal {
  position: absolute;
  z-index: 100;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem 0;
  padding: 2rem;
  background-color: var(--dark);
  border: 1px solid var(--primary-orange);
  border-radius: 1.5rem;

  &__checked {
    width: 3rem;
    height: 3rem;
    color: rgb(0, 206, 45);
  }

  @media (min-width: 768px) and (orientation: landscape) {
    top: 40%;
  }
}

.loadLink {
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
}

.loadLink {
  label {
    font-size: 1.6rem;
    color: var(--primary-orange);
  }

  input {
    padding: 0.5rem;
    outline: none;
    font-size: 1.4rem;
    background-color: #ffefe6ab;
    border: 0;
  }
}

.errorSrc {
  text-align: center;
  color: rgb(252, 47, 47);
  font-size: 1.4rem;
}
</style>