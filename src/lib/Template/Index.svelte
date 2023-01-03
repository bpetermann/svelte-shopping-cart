<script lang="ts">
  import type { Product } from '../../types/product.type';
  import Header from '../Organisms/Header.svelte';
  import Cart from '../Organisms/Cart.svelte';
  import Hero from '../Organisms/Hero.svelte';
  import Newsletter from '../Organisms/Newsletter.svelte';
  import Products from '../Organisms/Products.svelte';
  import Faqs from '../Organisms/Faqs.svelte';
  import Footer from '../Organisms/Footer.svelte';

  export let cart: Product[] = [];
  export let value: string;
  export let cartLength: number;
  export let searchProducts: Product[];
  export let showCart: boolean;
</script>

<Header on:openCart bind:value {cartLength} />
{#if showCart}
  <Cart on:close on:add on:remove {cart} />
{/if}
<Hero />
<Products on:add products={searchProducts} />
<Newsletter />
<Faqs />
<Footer />
