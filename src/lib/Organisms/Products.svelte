<script lang="ts">
  import cart from '../../store/cart-store';
  import type { Product as ProductType } from '../../types/product.type';
  import Container from '../Atoms/Container.svelte';
  import Product from '../Molecules/Products/Product.svelte';

  export let products: ProductType[];

  const addToCart = ({ detail }: { detail: string }) => {
    let product: ProductType = products.find(
      (product) => product.id === detail
    );
    cart.add(product);
  };
</script>

<Container classname="products">
  <ul>
    {#each products as { id, name, price, description } (id)}
      <li>
        <Product on:get={addToCart} {id} {name} {description} {price} />
      </li>
    {/each}
  </ul>
</Container>

<style>
  ul {
    all: unset;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 32px;
    width: 100%;
    padding: 24px 0px;
  }

  li {
    list-style: none;
  }
</style>
