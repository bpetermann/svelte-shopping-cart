<script lang="ts">
  import CartModalProduct from '@/lib/Molecules/Cart/CartModalProduct.svelte';
  import type { Product } from '../../types/product.type';
  import Close from '@/lib/Atoms/Buttons/Close.svelte';
  import Modal from '@/lib/Molecules/Modal.svelte';
  import { createEventDispatcher } from 'svelte';
  import i18n from '@/store/i18next-store';
  import cart from '@/store/cart-store';
  const dispatch = createEventDispatcher();

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
</script>

<Modal
  time={300}
  on:click={() => dispatch('toggle')}
  on:keypress={() => dispatch('toggle')}
  classname="cart"
>
  <section>
    <div class="close">
      <Close on:click={() => dispatch('toggle')} classname="dark" />
    </div>
    {#if !$cart.length}
      <button on:click={() => dispatch('toggle')}>{$i18n.t('No items')}</button>
    {:else}
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

  .close {
    display: flex;
    justify-content: flex-end;
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
