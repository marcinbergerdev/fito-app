<template>
  <base-box size="smallPadding">
    <base-button mode="iconBorder">
      <app-icon class="addPhotoIcon" icon="ic:outline-add-photo-alternate" />
    </base-button>

    <form @submit.prevent="addProduct">
      <div class="productName">
        <label for="name">Product Name</label>
        <input
          id="name"
          type="text"
          placeholder="Product name..."
          v-model="productName"
        />
      </div>

      <div class="productScale">
        <div>
          <label for="gram">Grams</label>
          <input
            id="gram"
            type="number"
            step="0.1"
            placeholder="0.0"
            v-model="gram"
          />
        </div>
        <div>
          <label for="kcal">Kcal</label>
          <input
            id="kcal"
            type="number"
            step="0.1"
            placeholder="0.0"
            v-model="kcal"
          />
        </div>
      </div>

      <div class="productIngredients">
        <div>
          <label for="fat">Fat</label>
          <input
            id="fat"
            type="number"
            step="0.1"
            placeholder="0.0"
            v-model="fat"
          />
        </div>

        <div>
          <label for="carbs">Carbs</label>
          <input
            id="carbs"
            type="number"
            step="0.1"
            placeholder="0.0"
            v-model="carbs"
          />
        </div>

        <div>
          <label for="protein">Protein</label>
          <input
            id="protein"
            type="number"
            step="0.1"
            placeholder="0.0"
            v-model="protein"
          />
        </div>

        <div>
          <label for="salt">Salt</label>
          <input
            id="salt"
            type="number"
            step="0.1"
            placeholder="0.0"
            v-model="salt"
          />
        </div>

        <div>
          <label for="fiber">Fiber</label>
          <input
            id="fiber"
            type="number"
            step="0.1"
            placeholder="0.0"
            v-model="fiber"
          />
        </div>
      </div>

      <div class="productCategory">
        <div>
          <label for="fruit">Fruit</label>
          <input
            id="fruit"
            value="Fruit"
            type="radio"
            v-model="selectedCategory"
          />
        </div>

        <div>
          <label for="vegetable">Vegetables</label>
          <input
            id="vegetable"
            value="Vegetable"
            type="radio"
            v-model="selectedCategory"
          />
        </div>

        <div>
          <label for="sweet">Sweets</label>
          <input
            id="sweet"
            value="Sweets"
            type="radio"
            v-model="selectedCategory"
          />
        </div>
      </div>

      <base-button mode="addProduct" type="flat" @click="newProduct">
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
  data() {
    return {
      img: "",
      productName: "Potato",
      gram: 100,
      kcal: 200,
      fat: 2.4,
      carbs: 34,
      protein: 2.6,
      salt: 0.1,
      fiber: 0.3,
      selectedCategory: "",
    };
  },
  methods: {

    newProduct() {
      this.$store.dispatch({
        type: "addNewProduct",
        value: {
          img: this.img,
          name: this.productName,
          gram: this.gram,
          kcal: this.kcal,
          fat: this.fat,
          carbs: this.carbs,
          protein: this.protein,
          salt: this.salt,
          fiber: this.fiber,
          selectedCategory: this.selectedCategory,
        },
      });
    },
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
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem 0;

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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.productName {
  flex-direction: column;
  gap: 1.5rem 0;
  margin: 2rem 0;

  label {
    font-size: 1.7rem;
  }

  input {
    width: 100%;
  }
}

.productScale,
.productIngredients {
  gap: 1rem;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: #{"min(9rem, 40%)"};
    input {
      width: 80%;
    }
  }
}

.productIngredients {
  flex-flow: row wrap;
  margin: 3rem 0;
}

.productCategory {
  justify-content: space-between;
  width: #{"min(100%, 20rem)"};
}
</style>