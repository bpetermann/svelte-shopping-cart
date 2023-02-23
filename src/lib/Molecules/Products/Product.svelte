<script lang="ts">
  import AddButton from '@/lib/Atoms/Buttons/AddButton.svelte';
  import favorites from '@/store/favorites-store';
  import { createEventDispatcher } from 'svelte';
  import Text from '@/lib/Atoms/Text.svelte';
  const dispatch = createEventDispatcher();

  export let id: string;
  export let name: string;
  export let description: string;
  export let price: number;

  let style: string = '';

  $: isFavorite = $favorites.find((item) => item.id === id);

  const addProduct = () => {
    style = 'loading';
    setTimeout(() => {
      style = 'added';
      setTimeout(() => {
        style = '';
        dispatch('get', id);
        isFavorite && dispatch('favorite', id);
      }, 750);
    }, 500);
  };
</script>

<div class="container">
  <div class="image">
    <img
      src="/images/products/{name}.png"
      alt={description}
      title={description}
    />
    <button on:click={() => dispatch('favorite', id)}>
      <img
        src="/images/favorite.png"
        alt="favorite"
        class:favorite={isFavorite}
      />
    </button>
  </div>
  <Text size="lg">{description}</Text>
  <Text size="lg">{price} $</Text>
  <AddButton on:click={addProduct} {style} />
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0px;
    gap: 16px;
  }

  .image {
    max-height: 224px;
    max-width: 160px;
    position: relative;
  }

  .image > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    all: unset;
    cursor: pointer;
    height: 22px;
    position: absolute;
    top: 16px;
    right: 16px;
  }

  button > img {
    height: 100%;
    width: auto;
  }

  .favorite {
    filter: invert(40%) sepia(96%) saturate(1660%) hue-rotate(1deg)
      brightness(103%) contrast(105%);
  }
</style>
