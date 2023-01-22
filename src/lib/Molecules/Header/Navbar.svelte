<script lang="ts">
  import MenuButton from '../../Atoms/Buttons/MenuButton.svelte';
  import Container from '../../Atoms/Container.svelte';
  import category from '../../../store/category-store';
  import { createEventDispatcher } from 'svelte';
  import cart from '../../../store/cart-store';
  import Logo from '../../Atoms/Logo.svelte';
  const dispatch = createEventDispatcher();

  export let mainCategories: { id: number; name: string }[];

  $: cartLength = $cart.reduce(function (acc, item) {
    return acc + item.amount;
  }, 0);
</script>

<Container>
  <nav>
    {#each mainCategories as { name, id } (id)}
      <MenuButton
        classname={$category === name && 'active'}
        on:click={() => dispatch('change', id)}>{name}</MenuButton
      >
    {/each}
  </nav>
  <Logo />
  <div>
    <button on:click={() => dispatch('toggle')}>
      <img src="/images/cart.png" alt="cart" />
      <span>{cartLength}</span></button
    >
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
    padding-right: 16px;
  }

  img {
    height: 100%;
    width: auto;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    position: relative;
    top: -32px;
    left: 14px;
    border-radius: 50%;
    background-color: #ff6900;
    font-size: 12px;
    font-weight: 600;
    color: #fff;
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
