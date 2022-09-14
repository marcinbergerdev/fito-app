<template>

  <article class='productCard'>

    <header class='productName'>
      <h2>{{ name }}</h2>
    </header>

    <section class='productValue'>

      <div class='productValue__dose'>
        <span>Gram</span>
        <span> {{ gram }}</span>
      </div>

      <div class='productValue__dose'>
        <span>Energy value</span>
        <span> {{ kcal }}</span>
      </div>

    </section>

    <ul class='nutritionalValuesList'>

      <li class='nutritionalValuesList__product' v-for="(value,id) in nutritionalValues" :key="id">
        <span> {{ value.name }} </span>
        <span> {{ value.value }} </span>
      </li>

    </ul>

  </article>



</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    gram: {
      type: Number,
      required: true
    },
    kcal: {
      type: Number,
      required: true
    },
    nutritionalValues: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.productCard{

}

.productName{

}

.productValue{
  &__dose{

  }
}


.nutritionalValuesList{
  &__product{

  }
}

</style>