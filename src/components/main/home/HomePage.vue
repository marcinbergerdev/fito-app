<template>
  <main class="container" :class="menuActive">
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

        <base-button class="boxRedirection__link" mode="outline"
          >Add Product</base-button
        >
      </section>




      <section class="boxRedirection">

        <p class="boxRedirection__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere
          accusantium eveniet ex quisquam? Harum, earum aliquid mollitia eius
          odio ducimus eveniet voluptatum nesciunt consequuntur sunt quam
          doloribus rem debitis?
        </p>

        <base-button class="boxRedirection__link" mode="outline"
          >BMI</base-button
        >
      </section>


    </article>

    <!-- zrob tutaj osobna base card dla tych dwoch -->

    <article class="containerInformation">
      <h3 class="containerInformation__description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
        voluptatem est vitae nobis dolores culpa necessitatibus.
      </h3>
    </article>
  </main>
</template>


<script>
export default {
  computed: {
    menuActive() {
      return { menuActive: this.$store.getters.mobileMenuActiveStatus };
    },
  },
  methods: {
    userWidth() {
      const currentWidth = window.innerWidth;
      let active = false;

      if (active) return;
      if (currentWidth >= 768) {
        active = true;
        this.$store.dispatch("toggleHamburger", true);
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.userWidth);
  },
};
</script>

<style lang="scss" scoped>
.container {
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  height: calc(100vh - 5.5rem);
  overflow: auto;

  color: var(--white);
  padding: 3rem;

  @media (min-width: 768px) {
  }
}

.homeHeader {
}

.containerRedirection {
}

.boxRedirection {
}

.containerInformation {
}



.menuActive {
  min-height: 100vh;
  filter: blur(5px);
  backdrop-filter: blur(5px);
}
</style>