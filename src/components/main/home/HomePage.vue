<template>
  <article class="homePageContainer">
    <header class="homeHeader">
      <h1 class="homeHeader__title">Take care of your health</h1>
    </header>

    <section class="containerRedirection">
      <div class="boxRedirection">
        <p class="boxRedirection__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere
          accusantium eveniet ex quisquam? Harum, earum aliquid mollitia eius
          odio ducimus eveniet voluptatum nesciunt consequuntur sunt quam
          doloribus rem debitis?
        </p>

        <base-button link :to="isLoggedIn" mode="homePageButton" type="outline">
          Add Product
        </base-button>
      </div>

      <div class="boxRedirection">
        <p class="boxRedirection__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere
          accusantium eveniet ex quisquam? Harum, earum aliquid mollitia eius
          odio ducimus eveniet voluptatum nesciunt consequuntur sunt quam
          doloribus rem debitis?
        </p>

        <base-button link to="/home/bmi" mode="homePageButton" type="outline">
          BMI
        </base-button>
      </div>
    </section>

    <footer class="containerInformation">
      <h3 class="containerInformation__description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
        voluptatem est vitae nobis dolores culpa necessitatibus.
      </h3>
    </footer>
  </article>
</template>


<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated
        ? "/home/product"
        : "/login?redirect=home/product";
    },
  },
};
</script>

<style lang="scss" scoped>
.homePageContainer {
  min-height: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.homeHeader {
  text-align: center;
  &__title {
    font-size: 5rem;
    font-weight: 200;
    @media (min-width: 768px) {
      width: 60%;
      margin: 0 auto;
      font-size: 7rem;
      font-weight: 400;
    }
    @media (min-width: 1000px) {
      font-size: 8rem;
    }
    @media (min-width: 1440px) {
      font-size: 10rem;
    }
  }
}

.containerRedirection {
  display: flex;
  flex-direction: column;

  margin: 5rem 0 5rem 0;
  gap: 5rem;
  text-align: center;

  @media (orientation: landscape) {
    align-items: center;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
}

.boxRedirection {
  margin-top: 5rem;
  padding: 0 2rem;
  font-size: 2.3rem;
  line-height: 1.3;
  &__text {
    margin-bottom: 1.5rem;
  }
  &__link a {
    text-decoration: none;
  }

  @media (orientation: landscape) {
    width: 65%;
  }
  @media (min-width: 768px) {
    width: 30%;
  }
}

.containerInformation {
  font-size: 1.2rem;
  text-align: center;

  &__description {
    font-weight: 400;
  }
  @media (min-width: 768px) {
    font-size: 2rem;
  }
}

.menuActive {
  min-height: 100vh;
  filter: blur(5px);
  backdrop-filter: blur(5px);
}
</style>