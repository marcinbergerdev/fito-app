<template>
  <base-box size="smallPadding">
    <base-modal
      :show="productAdded"
      title="Success!"
      confirm="Ok"
      @close="closeModal"
    >
      <p>Product Added!</p>
    </base-modal>

    <base-button mode="iconBorder" @click="selectImg">
      <app-icon class="addPhotoIcon" icon="ic:outline-add-photo-alternate" />
    </base-button>

    <transition name="selectImage" mode="out-in">
      <new-image
        v-if="setImgActivity"
        @setImgSrc="setImgSrc"
        @closeSelection="closeSelection"
        @closeAll="closeSelection"
      ></new-image>
    </transition>

    <Form @submit="formAddProduct">
      <div class="productName">
        <label for="name">Product Name</label>

        <Field
          :class="isEmptyError"
          name="productName"
          type="text"
          v-model="productName"
          :rules="validateName"
          placeholder="Product name..."
        />
        <ErrorMessage class="errorMessageValidation" name="productName" />
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
        <div v-for="(category, index) in categories" :key="index">
          <label :for="category.id">{{ category.name }}</label>

          <Field
            type="radio"
            :id="category.id"
            name="category"
            :value="category.id"
            v-model="selectedCategory"
          />
        </div>
      </div>

      <base-button mode="addProduct" type="flat">
        <span>
          <app-icon class="icon" icon="akar-icons:circle-plus" />
        </span>
        Add product
      </base-button>
    </Form>
  </base-box>
</template>


<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import NewImage from "./NewImage.vue";
import { v4 as uuidv4 } from "uuid";

export default {
  components: {
    NewImage,
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      setImgActivity: false,
      img: "",
      productName: "",
      gram: 0,
      kcal: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
      salt: 0,
      fiber: 0,
      isProductNameEmpty: false,
      selectedCategory: "fruit",
      productAdded: false,
      categories: [
        {
          id: "fruit",
          name: "Fruit",
        },
        {
          id: "sweets",
          name: "Sweet",
        },
        {
          id: "vegetable",
          name: "Vegetable",
        },
        {
          id: "spices",
          name: "Spices",
        },
      ],
    };
  },
  methods: {
    formAddProduct() {
      let productId = uuidv4();

      this.productAdded = true;
      this.$store.dispatch({
        type: "addNewProduct",
        value: {
          id: productId,
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
    validateName(value) {
      if (!value) {
        this.isProductNameEmpty = true;
        return "you need product name!";
      }

      this.isProductNameEmpty = false;
      return true;
    },
    closeModal() {
      this.img = "";
      this.productName = "";
      this.gram = 0;
      this.kcal = 0;
      this.fat = 0;
      this.carbs = 0;
      this.protein = 0;
      this.salt = 0;
      this.fiber = 0;
      this.productAdded = false;
    },
    selectImg() {
      this.setImgActivity = true;
    },
    setImgSrc(src) {
      const text = src.text;
      const file = src.file;

      if (text) {
        this.img = text;
      } else {
        this.img = file;
      }
    },
    closeSelection() {
      this.setImgActivity = false;
    },
  },
  computed: {
    isEmptyError() {
      return { emptyInput: this.isProductNameEmpty };
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes selectImgAnimation {
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }
}

.selectImage-enter-active {
  animation: 0.4s selectImgAnimation ease-out;
}

.selectImage-leave-active {
  animation: 0.4s selectImgAnimation alternate-reverse ease-in;
}

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
  margin: 2.5rem 0;

  label {
    margin-bottom: 1rem;
    font-size: 1.7rem;
  }

  input {
    width: 100%;
  }

  p {
    margin-left: 1rem;
    font-size: 1.1rem;
    align-self: flex-start;
    color: rgb(226, 10, 10);
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

.error {
  margin: 1rem 0;
}

.emptyInput {
  border: 1px solid rgb(226, 10, 10);
}
</style>