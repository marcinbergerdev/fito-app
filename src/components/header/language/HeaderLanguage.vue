<template>
  <select name="languages" id="languages" class="languageList">
    <option value="en">English</option>
    <option value="de">Deutsch</option>
    <option value="pl">Polish</option>
  </select>
</template>


<script>
export default {};
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



  @media(min-width: 768px){
   cursor: pointer;
  }
}
</style>