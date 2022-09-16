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

        <input type="text" placeholder="Search..." />
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
            v-for="(filter, id) in filters"
            :key="id"
          >
            <input type="checkbox" />
            <label for="">{{ filter }}</label>
          </li>
        </ul>
      </div>
    </section>

    <ul class="productsList">
      <product-item
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :gram="product.gram"
        :kcal="product.kcal"
        :product-img="product.img"
        :nutritional-values="product.nutritionalValues"
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
      filters: ["Fruit", "Vegetables", "Sweets"],
      products: [
        {
          id: 1,
          name: "Potato",
          gram: 100,
          kcal: 1100,
          img: "https://ocdn.eu/pulscms-transforms/1/GkCk9kpTURBXy9hMjZmNTc5NjZlNWU5YTNmYmU1MjJhNGI3YWEwNmZiMi5qcGeTlQMAHc0D6M0CMpMFzQMUzQG8kwmmYTgzYWYwBoGhMAU/czy-mozna-jesc-zielone-ziemniaki.webp",
          nutritionalValues: [
            {
              name: "Fat",
              value: 12.0,
            },
            {
              name: "Carbs",
              value: 19.0,
            },
            {
              name: "Protein",
              value: 12.0,
            },
            {
              name: "Salt",
              value: 2.0,
            },
            {
              name: "Fiber",
              value: 10.0,
            },
          ],
        },
        {
          id: 2,
          name: "Mandarin",
          gram: 100,
          kcal: 400,
          img: "",
          nutritionalValues: [
            {
              name: "Fat",
              value: 2.0,
            },
            {
              name: "Carbs",
              value: 8.0,
            },
            {
              name: "Protein",
              value: 12.0,
            },
            {
              name: "Salt",
              value: 21.0,
            },
            {
              name: "Fiber",
              value: 100.0,
            },
          ],
        },
        {
          id: 3,
          name: "Mango",
          gram: 100,
          kcal: 700,
          img: "",
          nutritionalValues: [
            {
              name: "Fat",
              value: 112.0,
            },
            {
              name: "Carbs",
              value: 4.0,
            },
            {
              name: "Protein",
              value: 3.0,
            },
            {
              name: "Salt",
              value: 7.0,
            },
            {
              name: "Fiber",
              value: 10.0,
            },
          ],
        },
        {
          id: 4,
          name: "Orange",
          gram: 100,
          kcal: 2100,
          img: "",
          nutritionalValues: [
            {
              name: "Fat",
              value: 12.0,
            },
            {
              name: "Carbs",
              value: 23.0,
            },
            {
              name: "Protein",
              value: 34.0,
            },
            {
              name: "Salt",
              value: 0.0,
            },
            {
              name: "Fiber",
              value: 10.0,
            },
          ],
        },
        {
          id: 5,
          name: "Apple",
          gram: 100,
          kcal: 400,
          img: "",
          nutritionalValues: [
            {
              name: "Fat",
              value: 1.0,
            },
            {
              name: "Carbs",
              value: 54.0,
            },
            {
              name: "Protein",
              value: 34.0,
            },
            {
              name: "Salt",
              value: 22.0,
            },
            {
              name: "Fiber",
              value: 10.0,
            },
          ],
        },
        {
          id: 6,
          name: "Banana",
          gram: 100,
          kcal: 500,
          img: "",
          nutritionalValues: [
            {
              name: "Fat",
              value: 2.0,
            },
            {
              name: "Carbs",
              value: 9.0,
            },
            {
              name: "Protein",
              value: 42.0,
            },
            {
              name: "Salt",
              value: 3.0,
            },
            {
              name: "Fiber",
              value: 20.0,
            },
          ],
        },
        {
          id: 6,
          name: "Banana",
          gram: 100,
          kcal: 500,
          img: "",
          nutritionalValues: [
            {
              name: "Fat",
              value: 2.0,
            },
            {
              name: "Carbs",
              value: 9.0,
            },
            {
              name: "Protein",
              value: 42.0,
            },
            {
              name: "Salt",
              value: 3.0,
            },
            {
              name: "Fiber",
              value: 20.0,
            },
          ],
        },
        {
          id: 6,
          name: "Banana",
          gram: 100,
          kcal: 500,
          img: "",
          nutritionalValues: [
            {
              name: "Fat",
              value: 2.0,
            },
            {
              name: "Carbs",
              value: 9.0,
            },
            {
              name: "Protein",
              value: 42.0,
            },
            {
              name: "Salt",
              value: 3.0,
            },
            {
              name: "Fiber",
              value: 20.0,
            },
          ],
        },
        {
          id: 6,
          name: "Banana",
          gram: 100,
          kcal: 500,
          img: "",
          nutritionalValues: [
            {
              name: "Fat",
              value: 2.0,
            },
            {
              name: "Carbs",
              value: 9.0,
            },
            {
              name: "Protein",
              value: 42.0,
            },
            {
              name: "Salt",
              value: 3.0,
            },
            {
              name: "Fiber",
              value: 20.0,
            },
          ],
        },
        {
          id: 6,
          name: "Banana",
          gram: 100,
          kcal: 500,
          img: "",
          nutritionalValues: [
            {
              name: "Fat",
              value: 2.0,
            },
            {
              name: "Carbs",
              value: 9.0,
            },
            {
              name: "Protein",
              value: 42.0,
            },
            {
              name: "Salt",
              value: 3.0,
            },
            {
              name: "Fiber",
              value: 20.0,
            },
          ],
        },
        {
          id: 6,
          name: "Banana",
          gram: 100,
          kcal: 500,
          img: "",
          nutritionalValues: [
            {
              name: "Fat",
              value: 2.0,
            },
            {
              name: "Carbs",
              value: 9.0,
            },
            {
              name: "Protein",
              value: 42.0,
            },
            {
              name: "Salt",
              value: 3.0,
            },
            {
              name: "Fiber",
              value: 20.0,
            },
          ],
        },
      ],
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
  },
  mounted() {
    this.userWidth();
    window.addEventListener("resize", this.userWidth);
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
    width: auto;
    flex-direction: row;
    gap: 0 2rem;
    input {
      width: auto;
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
    gap: 0 2rem;
    width: 100%;
    margin: 0;
  }
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

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    flex-flow: wrap row;
    gap: 5rem 9rem;
    margin-top: 3rem;
    padding: 2rem 2rem 0 2rem;
    height: calc(100% - 3.9rem - 3rem);
  }
}
</style>