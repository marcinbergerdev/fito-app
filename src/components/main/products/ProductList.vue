<template>
  <article class="productListContainer">
    <section class="myListNavigation">
      <div class="navSection">
        <base-button
          link
          to="/home/product"
          place="addProductBtnPosition"
          type="myListOutline"
          ><app-icon class="icon" icon="akar-icons:circle-plus" />
          Add product
        </base-button>

        <input
          type="text"
          placeholder="Search..."
          v-model="searchProductName"
        />
      </div>

      <div class="filterSection">
        <base-button
          place="myListHidden"
          type="myListOutline"
          @click="showFilters"
        >
          <app-icon class="filterIcon" icon="bi:filter-left" />
          Filters
        </base-button>

        <ul class="filterList" v-if="filtersVisibility">
          <li
            class="filterList__option"
            v-for="filter in filters"
            :key="filter.id"
          >
            <input
              type="radio"
              :id="filter.id"
              name="categories"
              :value="filter.id"
              v-model="currentCategory"
              :checked="filter.checked"
            />
            <label :for="filter.id">{{ filter.name }}</label>
          </li>
        </ul>
      </div>
    </section>

    <ul class="productsList">
      <li v-if="isEmpty">
        <p class="emptyList">your product lists in empty...</p>
      </li>

      <product-item
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :gram="product.gram"
        :kcal="product.kcal"
        :product-img="product.img"
        :nutritional-values="product.nutritionalValues"
        :selectedCategory="product.selectedCategory"
        @deleteProduct="deleteProduct"
      ></product-item>
    </ul>
  </article>
</template>

<script>
import ProductItem from "../products/ProductItem.vue";

export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      filtersVisibility: false,
      filters: [
        { id: "all", name: "All", checked: "true" },
        { id: "fruit", name: "Fruit" },
        { id: "sweets", name: "Sweets" },
        { id: "vegetable", name: "Vegetables" },
        { id: "spices", name: "Spices" },
      ],
      searchProductName: "",
      currentCategory: "all",
    };
  },
  methods: {
    showFilters() {
      this.filtersVisibility = !this.filtersVisibility;
    },
    userWidth() {
      const userWidth = window.innerWidth;

      if (this.filtersVisibility) {
        if (userWidth < 768) return (this.filtersVisibility = false);
      }
      if (userWidth >= 768) this.filtersVisibility = true;
    },
    loadProducts() {
      this.$store.dispatch("loadProducts");
    },
    deleteProduct(id, category) {
      let selectCategory = category;
      if (this.currentCategory === "all") selectCategory = 'all';

      this.$store.dispatch("deleteProduct", {
        id: id,
        category: selectCategory,
      });
    },
  },
  computed: {
    products() {
      return this.$store.getters.allProducts;
    },
    isEmpty() {
      return this.$store.getters.allProducts.length <= 0;
    },
  },
  watch: {
    searchProductName(text) {
      this.$store.dispatch("searchProduct", {
        text: text,
        category: this.currentCategory,
      });
    },
    currentCategory(category){
      this.$store.dispatch("selectCategory", category);
    }
  },
  mounted() {
    this.userWidth();
    window.addEventListener("resize", this.userWidth);
  },
  created() {
    this.loadProducts();
  },
};
</script>

<style lang="scss" scoped>
.filterIcon {
  font-size: 1.7rem;
}

.productListContainer {
  padding-top: 1.5rem;
  height: inherit;
  background-color: var(--dark-light);

  @media (min-width: 768px) {
    padding: 1.5rem 0 0 0;
  }
}

.myListNavigation {
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 0 1rem;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 0 1.5rem;
  }
}

.navSection {
  display: flex;
  flex-direction: column-reverse;
  width: 100%;

  input {
    width: 100%;
    padding: 1.2rem 1rem;
    font-size: 1.4rem;
    color: var(--white);
    background-color: transparent;
    border: 1px solid var(--white);
    outline: none;

    @media (min-width: 768px) {
      padding: 0.5rem 1rem;
    }
  }

  @media (min-width: 768px) {
    width: initial;
    flex-direction: row;
    gap: 0 2rem;

    input {
      width: 100%;
      opacity: 0.8;
      &:focus {
        opacity: 1;
      }
    }
  }
}

.filterSection {
  position: relative;

  @media (min-width: 768px) {
    min-width: 20%;
  }
}

.filterList {
  position: absolute;
  right: 0;
  z-index: 10;

  display: flex;
  flex-direction: column;
  gap: 1rem 0;

  margin-top: 0.8rem;
  padding: 1rem;
  width: 11rem;
  background-color: var(--dark-light);
  border: 1px solid var(--white);

  &__option {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 0 0.5rem;

    input,
    label {
      @media (min-width: 768px) {
        cursor: pointer;
      }
    }

    input {
      width: 1.7rem;
      height: 1.7rem;
    }

    label {
      font-size: 1.2rem;
    }

    @media (min-width: 768px) {
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }

  @media (min-width: 768px) {
    position: static;
    justify-content: space-between;
    flex-direction: row;
    gap: 0 0.5rem;
    width: 100%;
    margin: 0;
  }
}

.emptyList {
  margin-top: 2rem;
  font-size: 2rem;
}

.productsList {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 8rem;
  padding-top: 2rem;
  height: calc(100% - 4.3rem - 8rem);
  overflow: auto;
  text-align: center;
  box-shadow: inset 0 -2px 30px rgba(0, 0, 0, 0.4);
  li {
    list-style: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    flex-flow: wrap row;
    gap: 5rem 9rem;
    margin-top: 3rem;
    padding: 2rem 2rem 0 2rem;
    height: calc(100% - 3.9rem - 3rem);
  }
}
</style>