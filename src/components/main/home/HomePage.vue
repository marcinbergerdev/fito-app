<template>
  <header class="homeHeader">
    <h1 class="homeHeader__title">Take care of your health</h1>
  </header>

  <article class="containerRedirection">
    <section class="boxRedirection">
      <p class="boxRedirection__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere
        accusantium eveniet ex quisquam? Harum, earum aliquid mollitia eius odio
        ducimus eveniet voluptatum nesciunt consequuntur sunt quam doloribus rem
        debitis?
      </p>

      <base-button class="boxRedirection__link" mode="outline" size="larger"
        >Add Product</base-button
      >
    </section>

    <section class="boxRedirection">
      <p class="boxRedirection__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere
        accusantium eveniet ex quisquam? Harum, earum aliquid mollitia eius odio
        ducimus eveniet voluptatum nesciunt consequuntur sunt quam doloribus rem
        debitis?
      </p>

      <base-button class="boxRedirection__link" mode="outline" size="larger"
        >BMI</base-button
      >
    </section>
  </article>

  <footer class="containerInformation">
    <h3 class="containerInformation__description">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
      voluptatem est vitae nobis dolores culpa necessitatibus.
    </h3>
  </footer>
</template>


<script>
export default {};
</script>

<style lang="scss" scoped>
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

  margin: 2rem 0;
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
  padding: 0 2rem;
  font-size: 2.3rem;
  line-height: 1.3;
  &__text {
    margin-bottom: 1.5rem;
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