<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { Product } from '../../types/product.type';
  const dispatch = createEventDispatcher();

  export let cart: Product[];
  export let name: String;
  export let amount: number;
  export let price: number;
  export let id: string;

  const addToCart = (id: string) => {
    let product: Product = cart.find((product) => product.id === id);
    dispatch('add', product);
  };

  const removeProduct = (id: string) => {
    let product: Product = cart.find((product) => product.id === id);
    dispatch('remove', product);
  };
</script>

<li>
  <div>
    <h4>{name}</h4>
    <div>
      <span>{(amount * price).toFixed(2)} $</span>
      <span>{amount}X</span>
    </div>
  </div>
  <div>
    <button on:click={() => addToCart(id)}>+</button>
    <button on:click={() => removeProduct(id)}>–</button>
  </div>
</li>

<style>
  li {
    width: 100%;
    padding-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #d0d1d3;
  }

  h4 {
    text-align: left;
  }

  h4 + div {
    display: flex;
    width: 8rem;
    justify-content: space-between;
  }

  li > div:last-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
  }

  button {
    width: 2rem;
    height: 2rem;
    background-color: #fff;
    outline: none;
    border: 1px solid #000;
    font-size: 1rem;
  }

  button:hover {
    border: 2px solid #000;
    opacity: 0.8;
  }
</style>
