<script lang="ts">
  import type { Product as ProductType } from '../../types/product.type';
  import Product from '@/lib/Molecules/Products/Product.svelte';
  import Close from '@/lib/Atoms/Buttons/Close.svelte';
  import Modal from '@/lib/Molecules/Modal.svelte';
  import favorites from '@/store/favorites-store';
  import { createEventDispatcher } from 'svelte';
  import products from '@/store/products-store';
  import Heading from '../Atoms/Heading.svelte';
  import i18n from '@/store/i18next-store';
  import cart from '@/store/cart-store';
  const dispatch = createEventDispatcher();

  const addToCart = ({ detail }: { detail: string }) => {
    let product: ProductType = $products.find(
      (product) => product.id === detail
    );
    cart.add(product);
  };

  const toggleFavorites = ({ detail }: { detail: string }) => {
    let product: ProductType = $products.find(
      (product) => product.id === detail
    );

    favorites.toggle(product);
  };
</script>

<Modal
  time={300}
  on:click={() => dispatch('toggle')}
  on:keypress={() => dispatch('toggle')}
  classname="favorites"
>
  <div class="favorites">
    <div class="close">
      <Close on:click={() => dispatch('toggle')} classname="dark" />
    </div>
    <Heading tag="h3" color="#000">{$i18n.t('Favorites')}</Heading>
    <ul>
      {#each $favorites as { id, name, price, description } (id)}
        <Product
          on:favorite={toggleFavorites}
          on:get={addToCart}
          {description}
          {price}
          {name}
          {id}
        />
      {/each}
    </ul>
    <div />
  </div></Modal
>

<style>
  .favorites {
    display: flex;
    flex-direction: column;
    padding: 16px;
  }

  ul {
    all: unset;
    padding-top: 8px;
  }

  .close {
    display: flex;
    justify-content: flex-end;
  }
</style>
