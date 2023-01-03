<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { Product } from '../../types/product.type';
  import CartModalProduct from '../Molecules/Cart/CartModalProduct.svelte';
  import Modal from '../Molecules/Cart/Modal.svelte';
  const dispatch = createEventDispatcher();

  export let cart: Product[] = [];

  $: totalPrice = cart
    .reduce(function (acc, prod) {
      return acc + prod.amount * prod.price;
    }, 0)
    .toFixed(2);
</script>

<Modal on:close>
  <section>
    {#if !cart.length}
      <button on:click={() => dispatch('close')}> No items (yet!) </button>
    {:else}
      <ul>
        {#each cart as { name, amount, price, id } (id)}
          <CartModalProduct
            on:add
            on:remove
            {cart}
            {name}
            {amount}
            {price}
            {id}
          />
        {/each}
      </ul>
      <div>
        <span>Total Amount</span>
        <span>{totalPrice} $</span>
      </div>
      <button>Order</button>
    {/if}
  </section></Modal
>

<style>
  section {
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ul {
    width: 100%;
    max-width: 300px;
    list-style-type: none;
    padding: 0;
  }

  div {
    width: 100%;
    max-width: 300px;
    display: flex;
    justify-content: space-between;
  }

  button {
    margin-top: 32px;
    width: 100%;
    max-width: 220px;
    background-color: #ff6900;
    color: #fff;
    font-size: 16px;
    padding: 12px;
    outline: none;
    border: none;
    cursor: pointer;
  }

  section > button:first-child {
    margin-top: 0px;
    max-width: unset;
  }
</style>
