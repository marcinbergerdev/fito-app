<template>
  <base-box size="smallPadding">
    <base-button mode="iconBorder">
      <app-icon class="addPhotoIcon" icon="ic:outline-add-photo-alternate" />
    </base-button>

    <form @submit.prevent="addProduct">
      <div class="productName">
        <label for="name">Product Name</label>
        <input id="name" type="text" />
      </div>

      <div class="productScale">
        <div>
          <label for="gram">Grams</label>
          <input id="gram" type="number" />
        </div>
        <div>
          <label for="kcal">Kcal</label>
          <input id="kcal" type="number" />
        </div>
      </div>

      <div class="productIngredients">
        <div>
          <label for="fat">Fat</label>
          <input id="fat" type="number" />
        </div>

        <div>
          <label for="carbs">Carbs</label>
          <input id="carbs" type="number" />
        </div>

        <div>
          <label for="protein">Protein</label>
          <input id="protein" type="number" />
        </div>

        <div>
          <label for="salt">Salt</label>
          <input id="salt" type="number" />
        </div>

        <div>
          <label for="fiber">Fiber</label>
          <input id="fiber" type="number" />
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

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;

    label {
      text-align: center;
      font-size: 1.2rem;
      font-weight: 200;
    }

    input {
      padding: 0.4rem 1rem;
      font-size: 1.4rem;
      outline: none;
      color: var(--white);
      background-color: var(--primary-borderBg);
      border: 1px solid var(--primary-border);

      &:focus {
        border: 1px solid var(--primary-borderFocus);
      }
      @media (min-width: 768px) {
        cursor: pointer;
      }
    }
  }
}

.productName,
.productScale,
.productIngredients,
.productCategory {
  margin-top: 3rem;
}

.productName {
  width: 100%;
  gap: 1.5rem 0;
  label {
    font-size: 1.7rem;
  }
  input {
    width: 70%;
  }
}

.productScale {
  width: 70%;
  flex-direction: row;
  div {
    input {
      width: #{"min(6rem, 100%)"};
    }
  }
}

.productIngredients,
.productCategory {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
}

.productIngredients {
  gap: 1rem 3rem;

  div {
    width: 75px;
    input {
      width: 100%;
    }
  }
}
.productCategory {
  gap: 1rem 1.5rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>