<script lang="ts">
  import CartModalProduct from '@/lib/Molecules/Cart/CartModalProduct.svelte';
  import type { Product } from '../../types/product.type';
  import Close from '@/lib/Atoms/Buttons/Close.svelte';
  import Modal from '@/lib/Molecules/Modal.svelte';
  import { createEventDispatcher } from 'svelte';
  import Heading from '../Atoms/Heading.svelte';
  import i18n from '@/store/i18next-store';
  import cart from '@/store/cart-store';
  const dispatch = createEventDispatcher();

  export let showCart: boolean;

  const updateProduct = ({
    detail,
  }: {
    detail: { event: string; id: string };
  }) => {
    let product: Product = $cart.find((product) => product.id === detail.id);
    detail.event === '+' ? cart.add(product) : cart.remove(product);
  };

  $: totalPrice = $cart
    .reduce(function (acc, prod) {
      return acc + prod.amount * prod.price;
    }, 0)
    .toFixed(2);

  $: cartLength = $cart.reduce(function (acc, item) {
    return acc + item.amount;
  }, 0);
</script>

{#if showCart}
  <Modal
    time={300}
    on:click={() => dispatch('close')}
    on:keypress={() => dispatch('close')}
    classname="cart"
  >
    <div class="cart">
      {#if !$cart.length}
        <button on:click={() => dispatch('close')}>{$i18n.t('No items')}</button
        >
      {:else}
        <div class="close">
          <Close on:click={() => dispatch('close')} classname="dark" />
        </div>
        <Heading tag="h3" color="#000"
          >{$i18n.t('Cart')}{` (${cartLength})`}
        </Heading>
        <ul>
          {#each $cart as { name, amount, price, id } (id)}
            <CartModalProduct
              on:get={updateProduct}
              {name}
              {amount}
              {price}
              {id}
            />
          {/each}
        </ul>
        <div>
          <span>{$i18n.t('Total Amount')}</span>
          <span>{totalPrice} $</span>
        </div>
        <button>{$i18n.t('Order')}</button>
      {/if}
    </div></Modal
  >
{/if}

<style>
  .cart {
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

  .close {
    display: flex;
    justify-content: flex-end;
    align-self: flex-end;
  }

  .cart > div:last-of-type {
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

  .cart > button:first-child {
    margin-top: 0px;
    max-width: unset;
  }
</style>
