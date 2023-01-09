<script lang="ts">
  import Template from '../src/lib/Template/Index.svelte';
  import type { Product } from './types/product.type';

  let showCart: boolean = false;
  let searchterm: string = '';
  let products: Product[] = [
    {
      id: 'i1',
      name: 'Brogue',
      description: 'Green wingtip brogues',
      price: 85.99,
      amount: 1,
      category: 'Shoes',
    },
    {
      id: 'i2',
      name: 'Sandals',
      description: 'Maroon sandals',
      price: 24.99,
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

  $: searchProducts = products.filter((item) => {
    return item.description.toLowerCase().includes(searchterm.toLowerCase());
  });

  const toggleCart: () => void = () => {
    showCart = !showCart;
  };
</script>

<Template
  on:openCart={toggleCart}
  bind:value={searchterm}
  on:close={toggleCart}
  {searchProducts}
  {showCart}
/>
