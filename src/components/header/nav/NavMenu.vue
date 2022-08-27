<template>
  <ul class="menuList">
    <li>
      <a class="link" href="#">Home</a>
    </li>

    <li>
      <a class="link" href="#">BMI</a>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.menuList {
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
}

.link {
  margin-right: 5rem;
  font-size: 1.6rem;
  font-weight: 200;
  text-decoration: none;
  color: var(--white);

  @media (min-width: 768px) {
    &:hover {
      color: var(--primary-orange);
    }
  }
}
</style>
