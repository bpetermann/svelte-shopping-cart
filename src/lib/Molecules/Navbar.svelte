<script lang="ts">
  import Container from '../Atoms/Container.svelte';
  import Logo from '../Atoms/Logo.svelte';
  import MenuButton from '../Atoms/MenuButton.svelte';
</script>

<Container classname={'navbar'}>
  <div class={'categories'}>
    <MenuButton>Women</MenuButton>
    <MenuButton>Men</MenuButton>
  </div>
  <Logo />
  <div>
    <p>Cart</p>
  </div>
</Container>

<style>
  .categories {
    display: flex;
  }

  div {
    width: 280px;
  }

  @media (max-width: 768px) {
    .categories {
      display: none;
    }
  }
</style>
