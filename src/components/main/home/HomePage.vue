<template>
  <div class="container">
    <header class="homeHeader">
      <h1 class="homeHeader__title">Take care of your health</h1>
    </header>

    <article class="containerRedirection">
      <section class="boxRedirection">
        <p class="boxRedirection__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere
          accusantium eveniet ex quisquam? Harum, earum aliquid mollitia eius
          odio ducimus eveniet voluptatum nesciunt consequuntur sunt quam
          doloribus rem debitis?
        </p>
        <base-button class="boxRedirection__link" mode="outline">Add Product</base-button>
      </section>


      <section class="boxRedirection">
        <p class="boxRedirection__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere
          accusantium eveniet ex quisquam? Harum, earum aliquid mollitia eius
          odio ducimus eveniet voluptatum nesciunt consequuntur sunt quam
          doloribus rem debitis?
        </p>
        <base-button class="boxRedirection__link" mode="outline">BMI</base-button>
      </section>
    </article>

    <!-- zrob tutaj osobna base card dla tych dwoch -->

    <article class="containerInformation">
      <h3 class="containerInformation__description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
        voluptatem est vitae nobis dolores culpa necessitatibus.
      </h3>
    </article>
  </div>
</template>


<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 100%;
  color: var(--white);
  padding: 3rem;

  @media (min-width: 768px) {
  }
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
  gap: 6rem;
  margin-top: 2rem;
  text-align: center;

  @media(min-width: 768px){
    flex-direction: row;
    justify-content: center;
    gap: 20rem;
  }

}

// wez to popraw w sensie tam da dole ten width zobacz czy nie da sie zrobi width: max/min
.boxRedirection {
  &__text {
    font-size: 1.4rem;
    font-weight: 200;
  }

  &__link {
    margin-top: 1rem;
    @media(min-width: 768px){
    margin-top: 4rem;
  }

  }

   @media(min-width: 768px){
    width: 40rem;    // <------
  }
}

.containerInformation {
  margin-top: 1rem;
  text-align: center;
  &__description {
    font-size: 1rem;
    font-weight: 200;
  }

}
</style>