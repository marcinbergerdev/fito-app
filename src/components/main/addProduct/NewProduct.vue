<template>
  <base-box size="smallPadding" :imgLink="img">
    <base-modal
      :show="productAdded"
      :title="modalTitle"
      :confirm="$t('ok')"
      @close="closeModal"
    >
      <p> {{modalDescription}} </p>
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
      <div class="productName inputColors">
        <label for="name">{{ $t("newProduct.name")}}</label>

        <Field
          id="name"
          :class="isEmptyError"
          name="productName"
          type="text"
          v-model="productName"
          :rules="validateName"
          :placeholder="$t('newProduct.namePlaceholder')"
        />
        <ErrorMessage class="errorMessageValidation" name="productName" />
      </div>

      <div class="productScale">
        <div class="inputColors">
          <label for="gram">{{ $t("newProduct.grams")}}</label>
          <input
            id="gram"
            type="number"
            step="0.1"
            placeholder="0.0"
            v-model="gram"
          />
        </div>
        <div class="inputColors">
          <label for="kcal">{{ $t("newProduct.kcal")}}</label>
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
        <div class="inputColors">
          <label for="fat">{{ $t("newProduct.fat")}}</label>
          <input
            id="fat"
            type="number"
            step="0.1"
            placeholder="0.0"
            v-model="fat"
          />
        </div>

        <div class="inputColors">
          <label for="carbs">{{ $t("newProduct.carbs")}}</label>
          <input
            id="carbs"
            type="number"
            step="0.1"
            placeholder="0.0"
            v-model="carbs"
          />
        </div>

        <div class="inputColors">
          <label for="protein">{{ $t("newProduct.protein")}}</label>
          <input
            id="protein"
            type="number"
            step="0.1"
            placeholder="0.0"
            v-model="protein"
          />
        </div>

        <div class="inputColors">
          <label for="salt">{{ $t("newProduct.salt")}}</label>
          <input
            id="salt"
            type="number"
            step="0.1"
            placeholder="0.0"
            v-model="salt"
          />
        </div>

        <div class="inputColors">
          <label for="fiber">{{ $t("newProduct.fiber")}}</label>
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
            :id="category.id"
            class="inputColors"
            type="radio"
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
        {{ $t("addBtn")}}
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
      error: null,
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
    async formAddProduct() {
      let productId = uuidv4();

      this.productAdded = true;

      try {
        await this.$store.dispatch({
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
      } catch (error) {
        this.error = error;
      }
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
      this.img = src;
    },
    closeSelection() {
      this.setImgActivity = false;
    },
  },
  computed: {
    isEmptyError() {
      return { emptyInput: this.isProductNameEmpty };
    },
    modalTitle(){
      return this.error ? 'Error!': 'Success!'
    },
    modalDescription(){
      return this.error ? this.error : 'Product Added!'
    }

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