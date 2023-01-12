<script lang="ts">
  import type { Product } from '../../types/product.type';
  import Header from '../Organisms/Header.svelte';
  import Cart from '../Organisms/Cart.svelte';
  import Hero from '../Organisms/Hero.svelte';
  import Newsletter from '../Organisms/Newsletter.svelte';
  import Products from '../Organisms/Products.svelte';
  import Faqs from '../Organisms/Faqs.svelte';
  import Footer from '../Organisms/Footer.svelte';

  export let value: string;
  export let searchProducts: Product[];
  export let showCart: boolean;
</script>

<Header on:open bind:value />
{#if showCart}
  <Cart on:close />
{/if}
<Hero />
<Products products={searchProducts} />
<Newsletter />
<Faqs />
<Footer />
