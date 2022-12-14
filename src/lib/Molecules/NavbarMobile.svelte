<script lang="ts">
  import MenuButton from '../Atoms/MenuButton.svelte';
</script>

<nav>
  <MenuButton classname={'mobile'}>Women</MenuButton>
  <MenuButton classname={'mobile'}>Men</MenuButton>
  <MenuButton classname={'mobile'}>Kids</MenuButton>
  <MenuButton classname={'mobile'}>Shoes</MenuButton>
  <MenuButton classname={'mobile'}>Bags</MenuButton>
</nav>

<style scoped>
  nav {
    display: none;
  }

  @media (max-width: 768px) {
    nav {
      padding-top: 0;
      display: flex;
      flex-wrap: wrap;
    }
  }
</style>
