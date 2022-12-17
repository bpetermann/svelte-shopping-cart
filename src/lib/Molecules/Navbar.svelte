<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Container from '../Atoms/Container.svelte';
  import Logo from '../Atoms/Logo.svelte';
  import MenuButton from '../Atoms/MenuButton.svelte';
  const dispatch = createEventDispatcher();

  export let mainCategories: { id: number; name: string }[];
</script>

<Container>
  <nav>
    {#each mainCategories as { name, id } (id)}
      <MenuButton on:click={() => dispatch('change', name)}>{name}</MenuButton>
    {/each}
  </nav>
  <Logo />
  <div>
    <img src="/images/cart.png" alt="cart" />
  </div>
</Container>

<style>
  nav {
    min-width: 225px;
    text-align: start;
  }

  div {
    min-width: 225px;
    height: 22px;
    text-align: end;
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
