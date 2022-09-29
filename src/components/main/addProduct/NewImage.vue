<template>
  <section class="uploadContainer">
    <base-button mode="backButton" @click="$emit('closeSelection')">
      <span class="backButton">
        <app-icon class="icon" icon="akar-icons:arrow-back" />
      </span>
    </base-button>

    <div class="loadLink">
      <label for="link">Image Url</label>
      <input type="text" name="link" id="link" />
    </div>

    <div class="loadFromPc">
      <label for="upload">Upload Image</label>
      <input type="file" name="upload" id="upload" />
    </div>
  </section>
</template>


<script>
export default {};
</script>

<style lang="scss" scoped>
.uploadContainer {
  position: absolute;
  z-index: 100;
  top: 5%;
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
  width: 110%;
  padding: 5rem 2rem;
  background-color: var(--black);
  border-radius: 1.5rem;
}

.loadLink,
.loadFromPc {
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

.loadFromPc {
  label {
    font-size: 1.6rem;
    color: var(--primary-orange);
  }

  input {
    font-size: 1.4rem;
  }
}
</style>