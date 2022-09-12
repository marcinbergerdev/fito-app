<template>
  <article class="productListContainer">
    <section class="myListNavigation">
      <div class="navSection">
        <base-button link to="/home/myProduct">
          <app-icon class="icon" icon="akar-icons:circle-plus" />
          Add product
        </base-button>

        <input type="text" />
      </div>

      <div class="filterSection">
        <base-button mode="filters" @click="showFilters">
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
  </article>
</template>

<script>
export default {
  data() {
    return {
      filtersVisibility: false,
    };
  },
  methods: {
    showFilters() {
      this.filtersVisibility = !this.filtersVisibility;
    },
    userWidth() {
      const userWidth = window.innerWidth;

      if (this.filtersVisibility) return;

      if (userWidth >= 768) {
        this.filtersVisibility = true;
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.userWidth);
  },
};
</script>

<style lang="scss" scoped>
.filterIcon {
  margin-top: 0.3rem;
  width: 2rem;
  height: 2rem;
}

.productListContainer {
  width: 100%;
  height: inherit;
  background-color: var(--dark-light);
}

.myListNavigation {
  display: flex;
  justify-content: space-between;
}

.navSection {
  display: flex;
  flex-direction: column-reverse;

  input {
  }
}

.filterSection {
  position: relative;
}

.filterList {
  position: absolute;

  &__option {
    list-style: none;
    input {
    }

    label {
    }
  }

  @media (min-width: 768px) {
    position: static;
    display: block;
  }
}
</style>