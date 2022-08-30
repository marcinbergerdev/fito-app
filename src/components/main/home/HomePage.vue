<template>
  <div class="container">
    <header class="homeHeader">
      <h1 class="homeHeader__title">Take care of your health</h1>
    </header>

    <article class="containerRedirection">
      <section class="boxRedirection">
        <p class="boxRedirection__text"></p>
        <a class="boxRedirection__link" href="#">Add Product</a>
      </section>

      <section>
        <p></p>
        <a href="#">BMI</a>
      </section>
    </article>

    <article class="containerInformation">
      <h3 class="containerInformation__description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
        voluptatem est vitae nobis dolores culpa necessitatibus tenetur deserunt
        nostrum inventore.
      </h3>
    </article>
  </div>
</template>


<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
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
}

.boxRedirection {
  &__text {
  }

  &__link {
  }
}

.containerInformation {
  &__description {
  }
}
</style>