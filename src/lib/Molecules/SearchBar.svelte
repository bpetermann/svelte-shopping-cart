<script>
  import BurgerButton from '../Atoms/BurgerButton.svelte';
  import Container from '../Atoms/Container.svelte';
</script>

<Container classname={'searchbar'}>
  <BurgerButton on:toggleMenu />
  <input type="text" placeholder="Search" />
</Container>

<style>
  input {
    width: 100%;
    outline: none;
    border: none;
    text-align: start;
    padding-left: 16px;
    font-size: 16px;
  }
</style>
