<script lang="ts">
  import type { Product } from '../../types/product.type';
  import { createEventDispatcher } from 'svelte';
  import Text from '../Atoms/Text.svelte';

  const dispatch = createEventDispatcher();
  export let id: string;
  export let name: string;
  export let description: string;
  export let price: number;
  export let category: string;

  const addToCart = () => {
    let product: Product = {
      id,
      name,
      description,
      price,
      amount: 1,
      category,
    };
    dispatch('add', product);
  };
</script>

<div class="container">
  <div class="image">
    <img
      src="/images/products/brogues.png"
      alt={description}
      title={description}
    />
  </div>
  <Text size="lg">{name}</Text>
  <Text size="lg">{price}$</Text>
  <button on:click={addToCart}><Text size="lg">Add to Cart</Text></button>
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
  }

  .image > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    outline: none;
    padding: 16px 22px;
    border: 1px solid #000;
  }
</style>
