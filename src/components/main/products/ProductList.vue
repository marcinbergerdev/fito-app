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
          <li class="filterList__option">
            <input type="checkbox" />
            <label for="">Fruit</label>
          </li>

          <li class="filterList__option">
            <input type="checkbox" />
            <label for="">Vegetables</label>
          </li>

          <li class="filterList__option">
            <input type="checkbox" />
            <label for="">Sweets</label>
          </li>
        </ul>
      </div>
    </section>

    <ul class='productsList'>
      <product-item
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :gram="product.gram"
        :kcal="product.kcal"
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
      products: [
        {
          id: 1,
          name: "Corn",
          gram: 100,
          kcal: 1100,
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
          name: "Corn",
          gram: 100,
          kcal: 1100,
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
          id: 3,
          name: "Corn",
          gram: 100,
          kcal: 1100,
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
  width: 100%;
  padding: 1.5rem;
  height: inherit;
  background-color: var(--dark-light);
}

.myListNavigation {
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 0 1rem;
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

.productsList{
  text-align: center;
margin-top: 10rem;
}
</style>