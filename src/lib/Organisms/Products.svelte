<script lang="ts">
  import type { Product as ProductType } from '../../types/product.type';
  import Container from '../Atoms/Container.svelte';
  import Product from '../Molecules/Product.svelte';
  let products: ProductType[] = [
    {
      id: 'i1',
      name: 'Sandals',
      description: 'Maroon sandals',
      price: 24.99,
      amount: 1,
      category: 'Shoes',
    },
    {
      id: 'i2',
      name: 'Brogues',
      description: 'Mint green lace up brogues',
      price: 85.99,
      amount: 1,
      category: 'Shoes',
    },
    {
      id: 'i3',
      name: 'Sneakers',
      description: 'Multi-coloured Sneakers',
      price: 69.99,
      amount: 1,
      category: 'Shoes',
    },
  ];
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
