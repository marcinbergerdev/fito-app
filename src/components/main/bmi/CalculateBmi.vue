<template>
  <article class="containerBmi">
    <h2 class="containerBmi__header">Calculate your BMI</h2>

    <section class="sectionBmi">
      <form @submit.prevent="test">

        <div class="formGender">
          <label for="">Gender</label>
          <input type="checkbox" />
          <input type="checkbox" />
        </div>

        <div class="formWeight">
          <label for="">Weight</label>
          <input type="number" />
          <span>kg</span>
        </div>

        <div class='formHeight'>
          <label for="">Height</label>
          <input type="number" />
          <span>kg</span>
        </div>

        <button class='sendButton'>
          <span><Icon icon="ic:outline-calculate" /></span>
          Calculate
        </button>
      </form>
    </section>
  </article>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
  methods: {
    test() {
      console.log("sd");
    },
  },
};
</script>

<style lang="scss" scoped>
.containerBmi{
  // display: inherit;
  // justify-content: center;
  // align-items: center;
  // min-height: 100%;

  background-color: var(--dark);
  &__header{

  }
}

.sectionBmi{

}

.formGender{

}

.formWeight{

}

.formHeight{

}

.sendButton{

}


</style>