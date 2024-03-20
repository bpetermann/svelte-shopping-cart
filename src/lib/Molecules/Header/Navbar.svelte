<script lang="ts">
  import MenuButton from '@/lib/Atoms/Buttons/MenuButton.svelte';
  import LanguageSelect from '@/lib/Atoms/LanguageSelect.svelte';
  import Container from '@/lib/Atoms/Container.svelte';
  import favorites from '@/store/favorites-store';
  import { createEventDispatcher } from 'svelte';
  import category from '@/store/category-store';
  import Logo from '@/lib/Atoms/Logo.svelte';
  import i18n from '@/store/i18next-store';
  import cart from '@/store/cart-store';
  const dispatch = createEventDispatcher();

  export let mainCategories: { id: number; name: string }[];

  $: cartLength = $cart.reduce(function (acc, item) {
    return acc + item.amount;
  }, 0);

  $: favoritesLength = $favorites.length;
</script>

<Container>
  <nav>
    {#each mainCategories as { name, id } (id)}
      <MenuButton
        classname={$category === name && 'active'}
        on:click={() => dispatch('change', id)}>{$i18n.t(`${name}`)}</MenuButton
      >
    {/each}
    <LanguageSelect />
  </nav>
  <Logo />
  <div>
    <button
      on:click={() => dispatch('showFavorites')}
      disabled={!favoritesLength}
    >
      <img src="/images/favorite.png" alt="favorite" />
      {#if favoritesLength}
        <span>{favoritesLength}</span>
      {/if}
    </button>
    <button on:click={() => dispatch('showCart')}>
      <img src="/images/cart.png" alt="cart" />
      {#if cartLength}
        <span>{cartLength}</span>
      {/if}
    </button>
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
    display: flex;
    justify-content: flex-end;
  }

  button {
    all: unset;
    cursor: pointer;
    height: 22px;
    padding-right: 16px;
  }

  button > img {
    height: 22px;
    width: 22px;
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
