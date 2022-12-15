<script lang="ts">
  import Container from '../Atoms/Container.svelte';
  import Logo from '../Atoms/Logo.svelte';
  import MenuButton from '../Atoms/MenuButton.svelte';
</script>

<Container>
  <nav>
    <MenuButton>Women</MenuButton>
    <MenuButton>Men</MenuButton>
  </nav>
  <Logo />
  <div>
    <img src="public/images/cart.png" alt="cart" />
  </div>
</Container>

<style>
  nav {
    min-width: 225px;
  }

  div {
    min-width: 225px;
    height: 22px;
  }

  img {
    height: 100%;
    width: auto;
  }

  @media (max-width: 768px) {
    nav {
      display: none;
    }

    div {
      min-width: unset;
    }
  }
</style>
