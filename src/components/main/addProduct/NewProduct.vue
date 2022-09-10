<template>
  <base-box size="smallPadding">

    <base-button mode="iconBorder">
        <app-icon class="addPhotoIcon" icon="ic:outline-add-photo-alternate" />
    </base-button>

    <form @submit.prevent="addProduct" class="productFormContainer">
      <div class="productName">
        <label for="name">Product Name</label>
        <input id="name" type="text" />
      </div>

      <div class="productScale">
        <div>
          <label for="kcal">Kcal</label>
          <input id="kcal" type="text" />
        </div>

        <div>
          <label for="gram">Grams</label>
          <input id="gram" type="text" />
        </div>
      </div>

      <div class="productIngredients">
        <div>
          <label for="fat">Fat</label>
          <input id="fat" type="text" />
        </div>

        <div>
          <label for="carbs">Carbs</label>
          <input id="carbs" type="text" />
        </div>

        <div>
          <label for="protein">Protein</label>
          <input id="protein" type="text" />
        </div>

        <div>
          <label for="salt">Salt</label>
          <input id="salt" type="text" />
        </div>

        <div>
          <label for="fiber">Fiber</label>
          <input id="fiber" type="text" />
        </div>
      </div>

      <div class="productCategory">
        <div>
          <label for="fruit">Fruit</label>
          <input id="fruit" name="category" type="radio" />
        </div>

        <div>
          <label for="vegetable">Vegetables</label>
          <input id="vegetable" name="category" type="radio" />
        </div>

        <div>
          <label for="sweet">Sweets</label>
          <input id="sweet" name="category" type="radio" />
        </div>
      </div>

      <base-button mode="addProduct" type="flat">
        <span>
          <app-icon class="icon" icon="akar-icons:circle-plus" />
        </span>
        Add product
      </base-button>
    </form>
  </base-box>
</template>


<script>
export default {
  methods: {
    addProduct() {},
  },
};
</script>

<style lang="scss" scoped>
.addPhotoIcon {
  position: relative;
  z-index: 1;
  width: 6rem;
  height: 6rem;
}

.productFormContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.productName {
}

.productScale {
  div {
  }
}

.productIngredients {
}
.productCategory {
}
</style>