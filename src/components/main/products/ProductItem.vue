<template>
  <li class="productCard" :style="setImgBackground">
    <base-button mode="deleteCard" @click="deleteProduct">
      <app-icon class="delete" icon="ic:baseline-delete-forever" />
    </base-button>

    <header class="productName">
      <h2>{{ name }}</h2>
    </header>

    <section class="productValue">
      <div class="productValue__dose border">
        <span>Gram</span>
        <span> {{ gram }} g</span>
      </div>

      <div class="productValue__dose">
        <span>Energy value</span>
        <span> {{ kcal }} kcal</span>
      </div>
    </section>

    <ul class="nutritionalValuesList">
      <li
        class="nutritionalValuesList__product"
        v-for="(value, id) in nutritionalValues"
        :key="id"
      >
        <span> {{ value.name }} </span>
        <span> {{ value.value.toFixed(1) }} g</span>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: [Number, String],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    gram: {
      type: Number,
      required: true,
    },
    kcal: {
      type: Number,
      required: true,
    },
    productImg: {
      type: String,
      required: false,
    },
    nutritionalValues: {
      type: Object,
      required: true,
    },
    selectedCategory: {
      type: String,
      required: true,
    },
  },
  methods: {
    deleteProduct() {
      this.$emit('deleteProduct', this.id, this.selectedCategory);
    },
  },
  computed: {
    setImgBackground() {
      if (!this.productImg) return;
      return { "--bgImage": `url('${this.productImg}')` };
    },
  },
};
</script>

<style lang="scss" scoped>
.test-leave-from {
  scale: 1;
}
.test-leave-active {
  transition: all 0.3s ease-out;
}
.test-leave-to {
  scale: 0.8;
}

.delete {
  width: 3.5rem;
  height: 3.5rem;
  color: rgb(255, 44, 44);
  background-color: rgba(0, 0, 0, 0.849);
}

.productCard {
  position: relative;
  margin-bottom: 2rem;
  padding: 1.5rem;
  width: #{"min(100%, 24rem)"};
  list-style: none;
  background-color: var(--dark);
  border: 1px solid var(--primary-orange);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.26;
    z-index: 0;
    background-image: var(--bgImage);
    background-size: 100% 100%;
  }
}

.productName {
  padding: 4rem 0;

  h2 {
    font-size: 2rem;
  }
}

.productValue {
  &__dose {
    display: flex;
    justify-content: space-between;
    line-height: 1.6;

    span {
      margin: 0.3rem 0;
      font-size: 1.2rem;
    }
  }

  .border {
    border-bottom: 1px solid var(--white);
  }
}

.nutritionalValuesList {
  margin-top: 2rem;
  &__product {
    line-height: 2;
    font-size: 2rem;
    display: flex;
    justify-content: space-between;
    list-style: none;
  }
}
</style>