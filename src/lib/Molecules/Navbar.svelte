<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Container from '../Atoms/Container.svelte';
  import Logo from '../Atoms/Logo.svelte';
  import MenuButton from '../Atoms/MenuButton.svelte';
  const dispatch = createEventDispatcher();

  export let mainCategories: { id: number; name: string }[];
  export let category: { id: number; name: string };
</script>

<Container>
  <nav>
    {#each mainCategories as { name, id } (id)}
      <MenuButton
        classname={category.id === id && 'active'}
        on:click={() => dispatch('change', id)}>{name}</MenuButton
      >
    {/each}
  </nav>
  <Logo />
  <div>
    <button> <img src="/images/cart.png" alt="cart" /></button>
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

  button {
    all: unset;
    cursor: pointer;
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
