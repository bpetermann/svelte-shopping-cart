<script lang="ts">
  import type { Product as ProductType } from '../../types/product.type';
  import Product from '@/lib/Molecules/Products/Product.svelte';
  import Modal from '@/lib/Molecules/Modal.svelte';
  import favorites from '@/store/favorites-store';
  import { createEventDispatcher } from 'svelte';
  import products from '@/store/products-store';
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
    console.log('RUNS')

    favorites.toggle(product);
  };
</script>

<Modal
  time={300}
  on:click={() => dispatch('toggle')}
  on:keypress={() => dispatch('toggle')}
  classname="favorites"
>
  <section>
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
  </section></Modal
>

<style>
  section {
    display: flex;
    flex-direction: column;
    padding: 16px 0px;
  }

  ul {
    all: unset;
  }
</style>
