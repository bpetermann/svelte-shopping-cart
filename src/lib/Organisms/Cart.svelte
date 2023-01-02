<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { Product } from '../../types/product.type';
  import Modal from '../Molecules/Modal.svelte';
  const dispatch = createEventDispatcher();

  export let cart: Product[] = [];

  $: totalPrice = cart
    .reduce(function (acc, prod) {
      return acc + prod.amount * prod.price;
    }, 0)
    .toFixed(2);

  const addToCart = (id: string) => {
    let product: Product = cart.find((product) => product.id === id);
    dispatch('add', product);
  };

  const removeProduct = (id: string) => {
    let product: Product = cart.find((product) => product.id === id);
    dispatch('remove', product);
  };
</script>

<Modal on:close>
  <div class="content">
    {#if !cart.length}
      <button class="close-button" on:click={() => dispatch('close')}>
        No items (yet!)
      </button>
    {:else}
      <ul>
        {#each cart as { name, amount, price, id } (id)}
          <li>
            <div>
              <h4>{name}</h4>
              <div class="product-detail">
                <span>{(amount * price).toFixed(2)} $</span>
                <span>{amount}X</span>
              </div>
            </div>
            <div class="quantity-control">
              <button on:click={() => addToCart(id)}>+</button>
              <button on:click={() => removeProduct(id)}>–</button>
            </div>
          </li>
        {/each}
      </ul>
      <div class="total-amuount">
        <span>Total Amount</span>
        <span>{totalPrice} $</span>
      </div>
      <button class="order-button">Order</button>
    {/if}
  </div></Modal
>

<style>
  .content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .close-button {
    outline: none;
    border: none;
    width: 100%;
    background-color: #ff6900;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    padding: 8px;
  }

  ul {
    width: 100%;
    max-width: 300px;
    list-style-type: none;
    padding: 0;
  }

  li {
    width: 100%;
    margin: 0 auto;
    padding-bottom: 1rem;
    border-bottom: 1px solid #d0d1d3;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .product-detail {
    display: flex;
    width: 8rem;
    justify-content: space-between;
  }

  .quantity-control {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
  }

  .quantity-control button {
    width: 2rem;
    height: 2rem;
    background-color: #fff;
    outline: none;
    border: 1px solid #000;
    font-size: 1rem;
  }

  .quantity-control button:hover {
    border: 2px solid #000;
    opacity: 0.8;
  }

  .total-amuount {
    width: 100%;
    max-width: 300px;
    display: flex;
    justify-content: space-between;
  }

  h4 {
    text-align: left;
  }

  .order-button {
    margin-top: 16px;
    width: 100%;
    max-width: 220px;
    background-color: #ff6900;
    color: #fff;
    font-size: 16px;
    padding: 12px;
    outline: none;
    border: none;
  }
</style>
