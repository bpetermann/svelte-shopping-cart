<script lang="ts">
  import type { Product as ProductType } from '../../types/product.type';
  import Container from '../Atoms/Container.svelte';
  import Product from '../Molecules/Product.svelte';

  export let products: ProductType[];
</script>

<Container classname="products">
  <ul>
    {#each products as { id, name, price, description, category } (id)}
      <li>
        <Product {id} {name} {description} {price} {category} on:add />
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
