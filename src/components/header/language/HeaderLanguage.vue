<template>
  <select
    name="languages"
    id="languages"
    class="languageList"
    :class="activeLanguage"
    v-model="$i18n.locale"
    @change="setLanguage"
  >
    <option
      v-for="locale in $i18n.availableLocales"
      :key="`locale-${locale}`"
      :value="locale"
    >
      {{ locale }}
    </option>
  </select>
</template>


<script>
export default {
  methods: {
    setLanguage() {
      localStorage.setItem("lang", this.$i18n.locale);
    },
  },
  computed: {
    activeLanguage() {
      return { activeLanguage: this.$store.getters.mobileMenuActiveStatus };
    },
  },
};
</script>

<style lang="scss" scoped>
.languageList {
  margin-right: 2rem;
  padding: 0.5rem;
  font-weight: 200;
  font-size: 1.2rem;
  background-color: var(--black);
  color: var(--white);
  border: 1px solid var(--primary-orange);
  outline: none;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 30px;
    height: 20px;
    background-color: red;
  }

  @media (min-width: 768px) {
    padding: 0.2rem;
    cursor: pointer;
  }
}

.activeLanguage {
  display: none;
}
</style>