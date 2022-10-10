<template>
  <select name="languages" id="languages" class="languageList" :class="activeLanguage" v-model="selectedLanguage" @change="setLanguage">
    <option value="en">English</option>
    <option value="de">Deutsch</option>
    <option value="pl">Polish</option>
  </select>
</template>


<script>
export default {
  data(){
    return {
      selectedLanguage: 'en'
    }
  },
  methods: {
    setLanguage(){
      console.log(this.selectedLanguage);
    }
  },
  computed: {
    activeLanguage() {
      return { activeLanguage: this.$store.getters.mobileMenuActiveStatus };
    },
  },
  created(){
    this.setLanguage('en');
  }
};


</script>

<style lang="scss" scoped>
.languageList {
  margin-right: 2rem;
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
    cursor: pointer;
  }
}

.activeLanguage{
  display: none;

}
</style>