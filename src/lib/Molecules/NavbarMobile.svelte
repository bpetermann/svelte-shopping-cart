<script lang="ts">
  import MenuButton from '../Atoms/MenuButton.svelte';
</script>

<nav>
  <ul>
    <li><MenuButton classname={'mobile'}>Women</MenuButton></li>
    <li><MenuButton classname={'mobile'}>Men</MenuButton></li>
    <li><MenuButton classname={'mobile'}>Kids</MenuButton></li>
    <li><MenuButton classname={'mobile'}>Shoes</MenuButton></li>
    <li><MenuButton classname={'mobile'}>Bags</MenuButton></li>
  </ul>
</nav>

<style scoped>
  nav {
    display: none;
  }

  ul {
    all: unset;
  }

  li {
    all: unset;
  }

  @media (max-width: 768px) {
    nav {
      padding-top: 0;
      display: block;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      padding-right: 8px;
    }
  }
</style>
